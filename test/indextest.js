const sumar = require("../index");
const assert = require('assert');


//old -> caja negra y caja blanca, son coneptos antiguos que existen pero no se usan mucho.
//Actualidad -> pruebas unitarias
//           -> pruebas funcionales (E2E)
//                  -> coverage
//           -> pruebas de integracion
//           -> pruebas de estres


//¿Como se escribe una prueba?
//50% ≥ 1. prueba correcta y una prueba que falle
//Asserts = afirmacion

//Normalmente el describe agrupo las 2 o mas pruebas que van en el intento del 50%
//Describe es una descripcion de lo que estamos probando
//una funcion flecha tambien se puede conocer como funcion anonima.
describe("Probar la suma de 2 numeros.", () => {
    //Afirmamos que 5 mas 5 son 10
    it("5 mas 5 es 10", ()=>{
        assert.equal(10, sumar(5, 5));
    });
    //Afirmamos que 5 mas 5 no son 55
    it("5 mas 5 no es 55", ()=>{
        assert.notEqual(55, sumar(5, 5));
    })
});
