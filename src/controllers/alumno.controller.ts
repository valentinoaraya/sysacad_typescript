import { Request, Response } from "express"
import { AlumnoService } from "../services/AlumnoService"
import { decodeId } from "../utils/hashids"

export const obtenerCertificadoAlumno = async (req: Request, res: Response) => {
    try {
        const { id, tipo } = req.params

        const decodedId = decodeId(id)

        const buffer = await AlumnoService.obtenerCertificadoAlumnoRegular(Number(decodedId), tipo)

        res.setHeader("Content-Disposition", `attachment; filename=certificado.${tipo}`);
        res.setHeader("Content-Type", "application/octet-stream");
        res.status(200).send(buffer);

    } catch (error: any) {
        console.error(error)
        res.status(500).send({ error: error.message })
    }
}