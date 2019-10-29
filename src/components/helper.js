export const revisarPresupuesto = (presupuesto,restante) => {
    let clase;
    // Comprobar el 25% 
    if( (presupuesto / 4) > restante) {
         clase = 'alert alert-danger';
    //comprobar 50%
    } else if( (presupuesto / 2) > restante) {
        clase = 'alert alert-warning'
    } else {
    //mayor del 50%
        clase = 'alert alert alert-success';
    }
    return clase;
} 