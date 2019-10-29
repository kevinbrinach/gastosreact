import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
// import PresupuestosAnteriores from './components/PresupuestosAnteriores';

function App() {

  //state presupuesto
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [ crearGasto, guardarCrearGasto ] = useState(false)
  const [ gasto, guardarGasto ] = useState({});
  const [ gastos, guardarGastos ] = useState([]);
  
  useEffect(() => {
    if(crearGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

      //restar el presupuesto
      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);

      //una vez que se agrega lo ponemos como false
      guardarCrearGasto(false);

      
    }
  }, [crearGasto, gasto, gastos, restante]);

  //elimina las citas del state
  
  return (
    <div className="App container">
      <header>
        <h1>Gastos</h1>

        <div className="contenido-principal contenido">
          {/* {carga condicional para que se muestre el formulario para añadir gastos si se definio el presupuesto} */}
          { (preguntaPresupuesto)
            ?
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
                guardarRestante={guardarRestante}
              />
            : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}
                    />
                  </div>
                 
                  <div className="one-half column">
                    <Listado 
                      gastos={gastos}
                      guardarGastos={guardarGastos}
                      restante={restante}
                      guardarRestante={guardarRestante}
                    />

                    <ControlPresupuesto 
                      presupuesto={presupuesto}
                      restante={restante}
                    />            
                  </div>
                </div>
            )

          }
        </div>
      </header>
      {/* <div className="App container">
        <div className="contenido-principal contenido">
          <h2>Presupuestos Anteriores</h2>
          <PresupuestosAnteriores 

          />
        </div>
      </div> */}
    </div>
  );
}

export default App;
