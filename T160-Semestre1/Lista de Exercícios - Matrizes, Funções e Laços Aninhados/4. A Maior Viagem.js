// A Maior Viagem: O computador de bordo de uma frota de EVs
// armazena as distâncias percorridas em uma matriz (linhas = carros, colunas = viagens).
// Desenvolva findLongestTrip(evDistances) para encontrar e retornar a viagem mais longa
// registrada entre todos os veículos.

    // VARIÁVEIS

let viagensPorCarros = [

    [11, 24, 64, 13, 48],
    [30, 32, 14, 47, 90],
    [102, 2, 35, 10, 30]

];

    // FUNÇÕES

function findLongestTrip(evDistances){

    let maiorValorPCarro = [];

    for(let i = 0; i < evDistances.length; i++){

        // Atribuir a esse vetor um valor para que haja a comparanção, logo direi que esse é o primeiro
        maiorValorPCarro[maiorValorPCarro.length] = evDistances[i][0];

        // console.log(maiorValorPCarro);

        // maiorValorPCarro já entra na comparação das linhas com um valor que vai mudando
        // QUando volta para o for de variávei 'i' ele muda o outro valor do "maiorValorPCarro[maiorValorPCarro.length]" para o proximo maior valor!!

        for(let j = 0; j < evDistances[0].length; j++){

            //console.log(evDistances[i][j], maiorValorPCarro[i])

            // Pegará o valor e comparará ao que já tinha sido guardado dentro de maiorValorPCarro
            if(evDistances[i][j] > maiorValorPCarro[i]){
                
                maiorValorPCarro[i]  = evDistances[i][j];
                // console.log("oi", evDistances);

            }

        }

    }

    return maiorValorPCarro;

}

    // OPERAÇÕES

console.log(`${findLongestTrip(viagensPorCarros)}`);
