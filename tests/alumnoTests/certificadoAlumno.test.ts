import { AlumnoService } from "../../src/services/AlumnoService";
import { crearInstanciaAlumno } from "../utils";

describe('Generación de Certificados', () => {
    test('debería generar un certificado en formato PDF', async () => {
        const alumno = await crearInstanciaAlumno();
        const alumnoCreado = await AlumnoService.crearAlumno(alumno);

        expect(alumnoCreado).toBeTruthy();

        const buffer = await AlumnoService.obtenerCertificadoAlumnoRegular(alumnoCreado!.id!, 'pdf');

        expect(buffer).toBeInstanceOf(Buffer);
        expect(buffer.length).toBeGreaterThan(0);
    });

    test('debería generar un certificado en formato DOCX', async () => {
        const alumno = await crearInstanciaAlumno();
        const alumnoCreado = await AlumnoService.crearAlumno(alumno);

        expect(alumnoCreado).toBeTruthy();

        const buffer = await AlumnoService.obtenerCertificadoAlumnoRegular(alumnoCreado!.id!, 'docx');

        expect(buffer).toBeInstanceOf(Buffer);
        expect(buffer.length).toBeGreaterThan(0);
    });

    test('debería generar un certificado en formato ODT', async () => {
        const alumno = await crearInstanciaAlumno();
        const alumnoCreado = await AlumnoService.crearAlumno(alumno);

        expect(alumnoCreado).toBeTruthy();

        const buffer = await AlumnoService.obtenerCertificadoAlumnoRegular(alumnoCreado!.id!, 'odt');

        expect(buffer).toBeInstanceOf(Buffer);
        expect(buffer.length).toBeGreaterThan(0);
    });

    test('debería lanzar error para formato no válido', async () => {
        const alumno = await crearInstanciaAlumno();
        const alumnoCreado = await AlumnoService.crearAlumno(alumno);

        expect(alumnoCreado).toBeTruthy();

        await expect(
            AlumnoService.obtenerCertificadoAlumnoRegular(alumnoCreado!.id!, 'txt')
        ).rejects.toThrow('Documento no encontrado');
    });

    test('debería lanzar error si el alumno no existe', async () => {
        await expect(
            AlumnoService.obtenerCertificadoAlumnoRegular(99999, 'pdf')
        ).rejects.toThrow('Alumno no encontrado.');
    });
});
