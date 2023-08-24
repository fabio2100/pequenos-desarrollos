
const levelP1 = 100;
const levelP2 = 100;

function punto(levelP1,levelP2){
    let ganadorPunto = Math.floor(Math.random()*(levelP1+levelP2));
    return ganadorPunto<levelP1 ? true : false
}

//Partido
var gralStatics = {'puntosPlayerUno':0,'puntosPlayerDos': 0,'sets Uno':0,'sets Dos':0,'ganadosUno':0,'ganadosDos':0,'partidoMasPuntos':0,'partidoMasPuntosDetalle':[],'setMasPuntos':0,'setMasPuntosDetalle':[]}
for (var t=0;t<100;t++){
    var playerUno = {
        'sets':0,
        'puntos':0,
        'puntosTotal':0
    }
    
    var playerDos = {
        'sets':0,
        'puntos':0,
        'puntosTotal':0
    }
    
    var sets = []
    
    for(var i=0;i<8;i++){
        if(playerDos.sets==4 || playerUno.sets == 4)
        {
            gralStatics.puntosPlayerUno += playerUno.puntosTotal;
            gralStatics.puntosPlayerDos += playerDos.puntosTotal;
            gralStatics["sets Uno"]+=playerUno.sets
            gralStatics["sets Dos"]+=playerDos.sets
            gralStatics.partidoMasPuntos<playerUno.puntosTotal+playerDos.puntosTotal?gralStatics.partidoMasPuntos=playerUno.puntosTotal+playerDos.puntosTotal:false
            playerUno.sets==4?gralStatics.ganadosUno++:gralStatics.ganadosDos++
            if(gralStatics.partidoMasPuntos==playerUno.puntosTotal+playerDos.puntosTotal){
                gralStatics.partidoMasPuntosDetalle = sets;
            }
            sets = [];
            break
        }
        for(var j=0;j<1000;j++){
            var puntoEnJuego = punto(levelP1,levelP2);
            puntoEnJuego ? playerUno.puntos++ : playerDos.puntos++
            if(playerUno.puntos >= 11){
                if(playerUno.puntos > playerDos.puntos +1){
                    playerUno.sets++
                    var set = {'P1':playerUno.puntos,'P2':playerDos.puntos}
                    if(playerUno.puntos + playerDos.puntos > gralStatics.setMasPuntos){
                        gralStatics.setMasPuntos = playerUno.puntos + playerDos.puntos;
                        gralStatics.setMasPuntosDetalle = set;
                    }
                    sets.push(set)
                    set = {};
                    playerUno.puntosTotal += playerUno.puntos
                    playerDos.puntosTotal += playerDos.puntos
                    playerUno.puntos = 0
                    playerDos.puntos = 0;              
                    break;    
                }
            }
            if(playerDos.puntos >= 11){
                if(playerDos.puntos > playerUno.puntos+1){
                    playerDos.sets++
                    var set = {'P1':playerUno.puntos,'P2':playerDos.puntos}
                    if(playerUno.puntos + playerDos.puntos > gralStatics.setMasPuntos){
                        gralStatics.setMasPuntos = playerUno.puntos + playerDos.puntos;
                        gralStatics.setMasPuntosDetalle = set;
                    }
                    sets.push(set);
                    set = {};
                    playerUno.puntosTotal += playerUno.puntos
                    playerDos.puntosTotal += playerDos.puntos
                    playerDos.puntos = 0
                    playerUno.puntos = 0;
                    break
                }
                
            }
            
        }
    }
    
}
console.log('general statics')
console.log(gralStatics)
console.log('% ptos ganados Uno',Math.round(gralStatics.puntosPlayerUno*100/(gralStatics.puntosPlayerUno+gralStatics.puntosPlayerDos)));
console.log('% sets ganados uno',Math.round(gralStatics["sets Uno"]*100/(gralStatics["sets Dos"]+gralStatics["sets Uno"])));
console.log('% partidos ganados Uno',Math.round(gralStatics.ganadosUno*100/(gralStatics.ganadosUno+gralStatics.ganadosDos)))

