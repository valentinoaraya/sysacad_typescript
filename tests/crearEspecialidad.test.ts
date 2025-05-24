import { EspecialidadService } from "../src/services/EspecialidadService"
import { crearEspecialidadEjemeplo } from "../src/utils";

test("Deberia crear y guardad una especialidad en la base de datos", async () =>{
    const especialidad = await crearEspecialidadEjemeplo();
    const especialidadCreada = await EspecialidadService.crearEspecialidad(especialidad);
    const especialidadBD = await globalThis.prisma.especialidad.findUnique({
        where : {id : especialidadCreada.id},
    });

    expect(especialidadBD).toBeTruthy();
    expect(especialidadBD?.nombre).toBe(especialidad.nombre);
    expect(especialidadBD?.letra).toBe(especialidad.letra);
    expect(especialidadBD?.observacion).toBe(especialidad.observacion);
})
