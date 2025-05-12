import { UniversidadService } from "../src/services/UniversidadService";
import { Universidad } from "../src/models/Universidad";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

afterAll(async () => {
    await prisma.universidades.deleteMany(); 
    await prisma.$disconnect();
});

test('deberia leer una universidad por ID desde la base de datos', async () => {
    const nuevaUniversidad = new Universidad("Universidad Tecnologica Nacional", "UTN");
    const universidadBD = await UniversidadService.crearUniversidad(nuevaUniversidad);

    const universidadEncontrada = await UniversidadService.obtenerUniversidadPorId(universidadBD.id!);

    expect(universidadEncontrada).not.toBeNull();
    expect(universidadEncontrada?.nombre).toBe(nuevaUniversidad.nombre);
    expect(universidadEncontrada?.sigla).toBe(nuevaUniversidad.sigla);
});


