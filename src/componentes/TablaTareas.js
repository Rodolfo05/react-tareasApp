import { FilaTablaTareas } from './FilaTablaTareas'

export const TablaTarea = ({ tareas, cambiaEstadoTarea, showCompletadas = false }) => {

    const filasTablaTarea = (estado) => {

        

        return (
            tareas
            .filter(tarea => tarea.estado === estado)
            .map(tarea => (
                <FilaTablaTareas tarea={tarea} key={tarea.nombre} cambiaEstadoTarea={cambiaEstadoTarea} />
            ))
        )

    }

    return (
        <table className='table table-dark table-striped table-bordered border-secondary'>
            <thead>
                <tr className='table-primary'>
                    <th>Tareas</th>
                </tr>
            </thead>
            <tbody>
                {
                    filasTablaTarea(showCompletadas)
                }
            </tbody>
        </table>
    );

}