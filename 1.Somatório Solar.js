
    // VARIÁVEIS

let enerGerado = 4.5;
let totalGerado = 0;

    // FUNÇÕES
    
function calcularTotalGerado(geracaoDiaria){

    for(let i = 0; i <= 7; i++){

      totalGerado += geracaoDiaria;

    }

    return totalGerado;

}

    // OPERAÇÕES
    
console.log(calcularTotalGerado(enerGerado));


