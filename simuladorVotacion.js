
//var candidatos = {'A':0,'B':0,'C':0,'D':0,'E':0,'F':0,'G':0,'H':0};

var candidatos = [];

const letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

for(var i=0;i<5;i++){
    candidatos.push({'name':letras[Math.floor(Math.random()*26)] + letras[Math.floor(Math.random()*26)],'votos':0})
}

var cantidadVotantes = Math.floor(Math.random() * 50 + 50)

console.log(`cantidad de votantes : ${cantidadVotantes}`);

for(var j=0;j<4;j++){
    for (var i = 0 ; i < cantidadVotantes ; i++){
        var voto = Math.floor(Math.random()*candidatos.length)
        candidatos[voto].votos ++;
    }


    candidatos.sort((a,b)=>{
        return b.votos - a.votos
    })

    console.log('votacion');
    console.log(candidatos)
    console.log('eliminado')
    console.log(candidatos.pop())
}

console.log('ganador');
console.log(candidatos)