

const miResultado = { golesLocal: 3, golesVisitante: 2}

const resultadoOficial = { golesLocal: 2, golesVisitante: 1}

console.log(miResultado.golesLocal) 

if ((miResultado.golesLocal == resultadoOficial.golesLocal) && (miResultado.golesVisitante == resultadoOficial.golesVisitante)){
    console.log("Tu pronostico fue exacto, sumas 5 puntos extra!")
} else if ((miResultado.golesLocal == miResultado.golesVisitante) && (resultadoOficial.golesLocal == resultadoOficial.golesVisitante)){
    console.log("Tu pronostico no fue exacto, pero el partido fue empate")
} else if ((miResultado.golesLocal > miResultado.golesVisitante) && (resultadoOficial.golesLocal > resultadoOficial.golesVisitante)){
    console.log("Tu pronostico no fue exacto, pero acertaste el ganador local")
} else if ((miResultado.golesLocal < miResultado.golesVisitante) && (resultadoOficial.golesLocal < resultadoOficial.golesVisitante)){
    console.log("Tu pronostico no fue exacto, pero acertaste el ganador visitante")
} else {
    console.log("Tu pronostico fue errado, no sumas puntos")
}

/*
for (let index = 0; index < miResultado.golesLocal; index++) {
    if ((miResultado.golesLocal[index] == resultadoOficial.golesLocal[index]) && (miResultado.golesVisitante[index] == resultadoOficial.golesVisitante[index])) {
        console.log("empate")
    } else if ((miResultado.golesLocal[index] > miResultado.golesVisitante[index]) && (resultadoOficial.golesLocal[index] > resultadoOficial.golesVisitante[index])){
        console.log("hubo un ganador")
    }
}*/