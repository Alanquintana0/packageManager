//Primera suite de pruebas con mocha
const log4js = require('log4js');

let logger = log4js.getLogger();
logger.level = 'error';

logger.info("La aplicacion se ejecuto correctamente.");
//logger.warning("Cuidado falta un archivo de configuraciones");
logger.error("No se encontro la funcion email al mandarla a llamar");
logger.fatal("La aplicacion no se pudo iniciar");

function sumar (x, y){
    return x + y;
}
//Para exportar un dato de un archivo de js se usa este modulo.
module.exports = sumar;

let variable_uno = 1;