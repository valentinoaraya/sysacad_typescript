import { MateriaService } from "../src/services/MateriaService"
import { crearMateriaEjemplo } from "../src/utils";

test("Deberia crear una materia en la base de datos y actualizar el campo nombre" , async ()=> {
    const materia = await crearMateriaEjemplo();
    const materiaCreada = await MateriaService.crearMateria(materia);
    const nuevosDatosMateria = {
        nombre : "Desarrollo de software"
    }
    const materiaActualizada = await MateriaService.actualizarMateria(materiaCreada.id as number , nuevosDatosMateria);

    expect(materiaActualizada).toBeTruthy();
    expect(materiaActualizada?.id).toBe(materiaCreada.id);
    expect(materiaActualizada?.nombre).toBe(materiaCreada.nombre);
    expect(materiaActualizada?.codigo).toBe(materiaCreada.codigo);
    expect(materiaActualizada?.observacion).toBe(materiaCreada.observacion);

})