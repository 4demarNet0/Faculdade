// Você instalou um sistema de 4.5 kWp de energia solar e o inversor re-
// gistra a geração diária em kWh. Desenvolva uma função calcularTotalGerado(geracaoDiaria)
// que receba um vetor com a geração de 7 dias e retorne o total de energia gerada na semana.

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

