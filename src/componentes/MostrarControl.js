export const MostrarControl = ({ setShowCompletas, limpiaTareas, isChecked }) => {

    const handleDelete = () => {
        if (window.confirm('¿Esta seguro de eliminar esta tarea?')) {
            limpiaTareas();
        }
    }

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            
            <div className="form-check form-switch">
            <input
                type="checkbox"
                onChange={e => setShowCompletas(e.target.checked)}
                checked={isChecked} 
                className="form-check-input"
                />
            {" "}
            <label>Mostrar tareas hechas</label>
            </div>

            <button className="btn btn-danger btn-sm"
                onClick={handleDelete}>
                Limpiar
            </button>
        </div>
    );
}