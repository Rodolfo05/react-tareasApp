import { useState, useEffect } from 'react';
import './App.css';
import { Container } from './componentes/Container';
import { CreadorTareas } from './componentes/CreadorTareas';
import { MostrarControl } from './componentes/MostrarControl';
import { TablaTarea } from './componentes/TablaTareas';

function App() {

  const [itemsTareas, setItemsTareas] = useState([])
  const [showCompletadas, setShowCompletas] = useState(false)

  function crearTarea(nombreTarea) {

    if (!itemsTareas.find(tarea => tarea.nombre === nombreTarea)) {
      setItemsTareas([...itemsTareas, { nombre: nombreTarea, estado: false }])
    }

  }

  const cambiarEstadoTarea = tarea => {
    setItemsTareas(
      itemsTareas.map(t => (t.nombre === tarea.nombre ? { ...t, estado: !t.estado } : t))
    );
  }

  //Cuando cargue la aplicacion cargara esto:
  useEffect(() => {
    let datos = localStorage.getItem('tareas');
    if (datos) {
      setItemsTareas(JSON.parse(datos));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(itemsTareas));
  }, [itemsTareas])


  const limpiaTareas = () => {
    setItemsTareas(itemsTareas.filter(tarea => !tarea.estado))
    setShowCompletas(false);
  }



  return (
    <main className='bg-dark vh-100 text-white'>

      <Container>
        <CreadorTareas crearNuevaTarea={crearTarea} />

        <TablaTarea tareas={itemsTareas} cambiaEstadoTarea={cambiarEstadoTarea} />

        <MostrarControl
          isChecked={showCompletadas}
          setShowCompletas={(checked) => setShowCompletas(checked)}
          limpiaTareas={limpiaTareas}
        />


        {
          showCompletadas === true && (
            <TablaTarea tareas={itemsTareas} cambiaEstadoTarea={cambiarEstadoTarea} showCompletadas={showCompletadas} />
          )
        }
      </Container>


    </main>
  );
}

export default App;
