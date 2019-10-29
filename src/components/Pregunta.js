import React, { Fragment, useState } from 'react';
import Error from './Error';

function Pregunta(props){

    const{ guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

    //definicion del state
    const [ cantidad, guardarCantidadad ] = useState(0);
    const[ error, guardarError ] = useState(false);
   

    //validar el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if ( cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }

        //cuando el formulario es valido
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);
    }
    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            <h3>Para empezar ingresa con cuanto presupuesto semanal cuentas:</h3>

            {error ? <Error mensaje='El presupuesto es incorrecto'/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input type="number"
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => guardarCantidadad( parseInt(e.target.value, 10) ) }
                />
                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
            </form>
        </Fragment>
    )
}

export default Pregunta;