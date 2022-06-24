import { useState } from 'react';


export const CreadorTareas = ({ crearNuevaTarea }) => {

  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    crearNuevaTarea(nuevaTarea);

    setNuevaTarea('');
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className='col-9'>
        <input
          type="text"
          placeholder='Ingresa una tarea'
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='col-3'>
        <button className='btn btn-primary btn-sm'>Guardar Tarea</button>
      </div>

    </form>
  );
}