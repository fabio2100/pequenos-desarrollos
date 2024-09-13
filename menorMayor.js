// Se entrega un arreglo, devuelve el mayor y menor del arrrego

function minMay(arreglo){
    /*const sorted = arreglo.sort((a,b)=>a-b);
    console.log(sorted)
    console.log(`min ${sorted[0]}`)
    console.log(`max ${sorted[arreglo.length-1]}`)*/

    //-----------Bajo mi método
    var ordered = [];
    for(var i=0;i<=arreglo.length-1;i++){
        console.log({i})
        if(arreglo[i]>arreglo[i+1]){
            const este = arreglo[i]
            const proximo = arreglo[i+1]
            arreglo[i] = proximo;
            arreglo[i+1] = este;
            i=i-2
        }
    }
    console.log({arreglo})
    console.log('--------------------------')
}


minMay([99,99,2,5,7,11,4,1,2])
minMay([Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)])