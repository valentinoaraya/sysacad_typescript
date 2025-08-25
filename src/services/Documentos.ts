import Handlebars from "handlebars";
import fs from "fs/promises"
import htmlPdf from "html-pdf-node"
import htmlToDocx from "html-to-docx"
import { exec } from "child_process"
import { promisify } from "util";

const execAsync = promisify(exec)

export interface DocumentOptions {
    carpeta: string;
    context: Record<string, any>;
    nombre: string;
}

export abstract class Document {
    protected plantillaPath = "src/templates/certificado.html";

    abstract generar(options: DocumentOptions): Promise<Buffer>;

    protected async renderTemplate(context: Record<string, any>): Promise<string> {
        const plantilla = await fs.readFile(this.plantillaPath, "utf-8");
        const template = Handlebars.compile(plantilla);
        return template(context);
    }
}

export class PDFDocument extends Document {
    async generar(options: DocumentOptions): Promise<Buffer> {
        const html = await this.renderTemplate(options.context);

        const file = { content: html };
        const pdfBuffer = await htmlPdf.generatePdf(file, { format: "A4" });
        return pdfBuffer as unknown as Buffer;
    }
}

export class DOCXDocument extends Document {
    async generar(options: DocumentOptions): Promise<Buffer> {
        const html = await this.renderTemplate(options.context);

        const buffer = await htmlToDocx(html, null, {
            table: { row: { cantSplit: true } }
        });

        return buffer as unknown as Buffer;
    }
}

export class ODTDocument extends Document {
    async generar(options: DocumentOptions): Promise<Buffer> {
        const html = await this.renderTemplate(options.context);

        const docxBuffer = await htmlToDocx(html);
        const docxPath = `${options.carpeta}/${options.nombre}.docx`;
        const odtPath = `${options.carpeta}/${options.nombre}.odt`;

        await fs.writeFile(docxPath, docxBuffer as Buffer);

        await execAsync(`pandoc "${docxPath}" -o "${odtPath}"`);

        const odtBuffer = await fs.readFile(odtPath);
        return odtBuffer;
    }
}

export const obtenerTipoDocumento = (tipo: string) => {
    let docGen;
    switch (tipo) {
        case "pdf":
            docGen = new PDFDocument()
            break;
        case "docx":
            docGen = new DOCXDocument()
            break;
        case "odt":
            docGen = new ODTDocument()
            break;
        default:
            throw new Error("Documento no encontrado")
    }

    return docGen
}
