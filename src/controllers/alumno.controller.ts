import { Request, Response } from "express"
import { AlumnoService } from "../services/AlumnoService"
import { Alumno } from "../models/Alumno"

export const cargarAlumno = async (req: Request, res: Response) => {
    try {
        const {
            apellido,
            nombre,
            nroDocumento,
            tipoDocumento,
            fechaNacimiento,
            sexo,
            nroLegajo,
            fechaIngreso,
        } = req.body

        const alumno = new Alumno(apellido, nombre, nroDocumento, tipoDocumento, fechaNacimiento, sexo, nroLegajo, fechaIngreso)

        const alumnoCreado = await AlumnoService.crearAlumno(alumno)

        if (!alumnoCreado) {
            res.status(400).send({ error: "Alumno no encontrado." })
            return
        }

        res.status(200).send({
            data: alumno
        })

    } catch (error: any) {
        res.status(500).send({ error: error.message })
    }
}

export const eliminarAlumno = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        const alumnoEliminado = await AlumnoService.eliminarAlumno(id)

        if (!alumnoEliminado) {
            res.status(400).send({ error: "Alumno no encontrado." })
        }

    } catch (error: any) {
        res.status(500).send({ error: error.message })
    }
}

export const obtenerCertificadoAlumno = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const alumnoEncontrado = await AlumnoService.obtenerAlumnoPorId(Number(id))

        if (!alumnoEncontrado) {
            res.status(400).send({ error: "Alumno no encontrado." })
            return
        }
    } catch (error: any) {
        res.status(500).send({ error: error.message })
    }
}