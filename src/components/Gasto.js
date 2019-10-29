import React from 'react';

const Gasto = ({gasto, gastos, guardarGastos, restante, guardarRestante}) => { 

    const eliminarGasto = (id, cant) => {
        const nuevosGastos = [...gastos];
        const gastoEliminado = nuevosGastos.filter(gasto => gasto.id !== id);
        guardarGastos(gastoEliminado)
        
        const presupuestoRestante = restante + cant;
        guardarRestante(presupuestoRestante);
        console.log(cant)
    
      }

    return (
        <li className="gastos">
            <p>
                {gasto.nombreGasto}
                <span className="gasto">$ {gasto.cantidadGasto}</span>

                <button type="button"
                    onClick={() => eliminarGasto(gasto.id, gasto.cantidadGasto)}
                >Eliminar</button>
            </p>
        </li>
    );
}

 
export default Gasto;