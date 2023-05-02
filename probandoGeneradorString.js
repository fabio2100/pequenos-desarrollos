var numRandom = Math.random();
console.log('nro random',numRandom);

var numRandomToString = numRandom.toString(36);
console.log('random to string',numRandomToString);

var numRandomToStringSub = numRandomToString.substring(2,10);

console.log(numRandomToStringSub,'final')
console.log(numRandomToStringSub.length)