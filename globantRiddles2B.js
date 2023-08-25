// What is the smallest natural number where the result of moving the digit on the far right to the front of the number is a number 9 times greater
// Aplicando la formación de los números con la fórmula obtenida

for(var i = 3;i<=10;i++){
  var sum = 0;
  for (var j=1;j<=i;j++){
    var generador = function(){
      return `d${j}`
    }
    console.log(generador())
  }
}