import { Request, Response } from "express"
import { AlumnoService } from "../services/AlumnoService"

export const obtenerCertificadoAlumno = async (req: Request, res: Response) => {
    try {
        const { tipo } = req.params
        const { id } = req.body

        console.log(id)

        const buffer = await AlumnoService.obtenerCertificadoAlumnoRegular(id, tipo)

        res.setHeader("Content-Disposition", `attachment; filename=certificado.${tipo}`);
        res.setHeader("Content-Type", "application/octet-stream");
        res.status(200).send(buffer);

    } catch (error: any) {
        console.error(error)
        res.status(500).send({ error: error.message })
    }
}

export const obtenerFichaAlumno = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        const bufferAndJSON = await AlumnoService.obtenerFichaAlumno(id)

        res.status(200).send({
            ficha: bufferAndJSON.buffer,
            datos: bufferAndJSON.json
        })

    } catch (error: any) {
        console.error(error)
        res.status(500).send({ error: error.message })
    }
}