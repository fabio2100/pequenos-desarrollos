// Program that calculates the percentaje of primes number until the input number

/*const isPrime = (numero) => {
  if (numero <= 1) return false;
  for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++) {
    if (numero % i === 0) return false;
  }
  return true;
};

const percentajeOfPrimes = (numero) => {
    const mainArray = [];
    for(let i = 1; i <= numero; i++){
        mainArray.push(i);
    } 

    const primes = mainArray.filter(isPrime);
    return primes.length * 100 / numero;
}


console.log(percentajeOfPrimes(10000000))*/


//copilot optimizado
const isPrime = (numero) => {
    if (numero <= 1) return false;
    if (numero === 2) return true; 
    if (numero % 2 === 0) return false;
  
    for (let i = 3, raiz = Math.sqrt(numero); i <= raiz; i += 2) {
      if (numero % i === 0) return false;
    }
    return true;
  };
  
  const percentajeOfPrimes = (numero) => {
    let primeCount = 0;
  
    for (let i = 1; i <= numero; i++) {
      if (isPrime(i)) {
        primeCount++;
      }
    }
  
    return (primeCount * 100) / numero;
  }

  const valor = 200000000
  console.log(100/Math.log(valor))
  console.log(percentajeOfPrimes(valor))