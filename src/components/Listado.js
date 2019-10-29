import React from 'react';
import Gasto from './Gasto';

function Listado ({gastos, eliminarGasto, restante, guardarRestante, guardarGastos}) {
    return (
        <div className="gastos-realizados">
            <h2>Lista de Gastos</h2>
            {gastos.map(gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    gastos={gastos}
                    guardarGastos={guardarGastos}
                    restante={restante}
                    guardarRestante={guardarRestante}
                />
            ))}
        </div>
    )
};

export default Listado;