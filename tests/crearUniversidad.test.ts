import { Universidad } from "../src/models/Universidad";
import { UniversidadService } from "../src/services/UniversidadService";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

afterAll(async () => {
    await prisma.universidades.deleteMany(); 
    await prisma.$disconnect();
});

test('deberia crear y gurdar una universidad en la abse de datos', async ()=>{
    const nuevaUniversidad = new Universidad(
        "Universidad Tecnologica Nacional",
        "UTN"
    );
    const universidadCreada = await UniversidadService.crearUniversidad(nuevaUniversidad);  
    const universidadBD = await prisma.universidades.findUnique({
        where: { id : universidadCreada.id},
    })

    expect(universidadBD).not.toBeNull()
    expect(universidadBD?.nombre).toBe(nuevaUniversidad.nombre)
    expect(universidadBD?.sigla).toBe(nuevaUniversidad.sigla)
})

