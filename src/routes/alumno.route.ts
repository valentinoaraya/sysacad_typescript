import { Router } from "express";
import { cargarAlumno, obtenerCertificadoAlumno } from "../controllers/alumno.controller";

export const alumnoRouter = Router()

alumnoRouter.post("/cargar", cargarAlumno)
alumnoRouter.get("/certificado/:id/word", obtenerCertificadoAlumno)