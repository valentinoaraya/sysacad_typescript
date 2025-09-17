import { Router } from "express";
import { obtenerCertificadoAlumno, obtenerFichaAlumno } from "../controllers/alumno.controller";
import { decodificarId } from "../middlewares/desencriptId";

export const alumnoRouter = Router()

alumnoRouter.get("/certificado/:id/:tipo", decodificarId, obtenerCertificadoAlumno)
alumnoRouter.get("/ficha/:id", decodificarId, obtenerFichaAlumno)