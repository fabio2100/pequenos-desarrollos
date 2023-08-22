//Se elige un nro constante. Luego se llenará un array con todos los valores menores a este
//Para completar el llenado, se realiza un random, y si el nro que sale está en el array se suma un intento, pero si no está en el array se agrega y también se suma un intento
//Una vez completado el llenado se devuelve la cantidad de intentos

const tamano = 100;
var arregloNros = [];
var arregloTodasLasTiradas = [];
var nroTiradaNuevo = 0;

while (tamano != arregloNros.length){
    var nro = Math.floor(Math.random()*tamano)+1;
    arregloTodasLasTiradas.push(nro)
    var estaIncluido = arregloNros.indexOf(nro)  
    if(estaIncluido === -1){
        var nroActual =arregloTodasLasTiradas.length;
        var tiradasParaUnNuevo = nroActual - nroTiradaNuevo;
        arregloNros.push(nro)
        nroTiradaNuevo = arregloTodasLasTiradas.length;
        console.log({nroActual})
        console.log({tiradasParaUnNuevo})
        console.log('----------------------')
    }
}

console.log({arregloTodasLasTiradas})
console.log({arregloNros})
console.log(`tiradas totales: ${arregloTodasLasTiradas.length}`)
console.log('fin')