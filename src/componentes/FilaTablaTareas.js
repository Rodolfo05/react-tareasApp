export const FilaTablaTareas = ({ tarea, cambiaEstadoTarea }) => {

    return (

        <tr>
            <td className="d-flex justify-content-between">
                {tarea.nombre}
                <input
                    type="checkbox"
                    checked={tarea.estado}
                    onChange={() => cambiaEstadoTarea(tarea)}
                />
            </td>
        </tr>

    );
}