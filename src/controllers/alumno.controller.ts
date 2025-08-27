import { Request, Response } from "express"
import { AlumnoService } from "../services/AlumnoService"

export const obtenerCertificadoAlumno = async (req: Request, res: Response) => {
    try {
        const { tipo } = req.params
        const { id } = req.body

        const buffer = await AlumnoService.obtenerCertificadoAlumnoRegular(id, tipo)

        res.setHeader("Content-Disposition", `attachment; filename=certificado.${tipo}`);
        res.setHeader("Content-Type", "application/octet-stream");
        res.send(buffer);

    } catch (error: any) {
        console.error(error)
        res.status(500).send({ error: error.message })
    }
}