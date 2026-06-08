// Quartos Vagos no Airbnb: Uma matriz representa a disponibilidade
// de quartos em uma propriedade de Aquiraz durante um mês
// (linhas = quartos, colunas = dias). O valor 0 indica vago e
// 1 ocupado. Escreva countVacantRooms(availabilityMatrix)
// para retornar o número total de diárias disponíveis (0s).

    // VARIÁVEIS

let dispoQuartos = [

    [0, 0, 1, 1, 1],
    [1, 0, 1, 0, 0],
    [1, 1, 1, 0, 1]

];

    // FUNÇÕES

function countVacantRooms(availabilityMatrix){

    // Armazena a quantidade de quartos vagos
    let quartosVagos = 0;
    
    // Passa pelas fileiras
    for(let i = 0; i < availabilityMatrix.length; i++){

        // Passa pelas colunas
        for(let j = 0; j < availabilityMatrix[0].length; j++){

            // Verifica se o conteúdo da gaveta é igual a zero, se for atualiza o contador
            if(availabilityMatrix[i][j] == 0){

                quartosVagos++;

            }

        }

    }

    return quartosVagos;

}

    // OPERAÇÕES

console.log(`O hotel dispões de ${countVacantRooms(dispoQuartos)} quarto(s) vago(s).`)
