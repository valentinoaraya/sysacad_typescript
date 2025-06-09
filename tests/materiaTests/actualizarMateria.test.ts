import { MateriaService } from "../../src/services/MateriaService"
import { instanciaMateria as materia } from "../utils";

test("Deberia crear una materia en la base de datos y actualizar el campo nombre", async () => {
    const materiaCreada = await MateriaService.crearMateria(materia);
    const nuevosDatosMateria = {
        nombre: "Análisis Matemático II"
    }
    const materiaActualizada = await MateriaService.actualizarMateria(materiaCreada.id as number, nuevosDatosMateria);

    expect(materiaActualizada).toBeTruthy();
    expect(materiaActualizada?.id).toBe(materiaCreada.id);
    expect(materiaActualizada?.nombre).toBe(nuevosDatosMateria.nombre);
    expect(materiaActualizada?.codigo).toBe(materiaCreada.codigo);
    expect(materiaActualizada?.observacion).toBe(materiaCreada.observacion);

})