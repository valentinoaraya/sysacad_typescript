import { Router } from "express";
import { obtenerCertificadoAlumno } from "../controllers/alumno.controller";

export const alumnoRouter = Router()

alumnoRouter.get("/certificado/:id/:tipo", obtenerCertificadoAlumno)