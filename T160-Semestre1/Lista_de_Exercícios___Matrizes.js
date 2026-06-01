let selExe = 2;

switch (selExe){


    // EXERCÍCIOS 1, 2, 3
    case 1:
    // Geração Solar Total: Um sistema de energia solar registra a geração
    // diária em uma matriz onde as linhas são as semanas e as colunas são os dias.
    // Crie uma função sumSolarGeneration(solarGrid) que some todos os valores da
    // matriz e retorne o total de kWh gerados no período.

    // Média Semanal: Utilizando a mesma matriz de energia solar, desenvolva
    // afunção calculateWeeklyAverage(solarGrid) que retorne um vetor unidimensional
    // contendo a média de geração de cada semana (linha).

    // Fim de Semana Produtivo: Escreva uma função sumWeekendGeneration(solarGrid)
    // que calcule e retorne a soma da geração apenas dos sábados e domingos (assuma
    // que são as duas últimas colunas da matriz, índices 5 e 6).

        // VARIÁVEIS

    let regiSolar = [

        [10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10]

    ];

        // FUNÇÕES

    function sumSolarFGeration(solarGrid){

        // Esse valor armazenrá o todal da matriz
        let total = 0;

        // Acessa as SEMANAS representadas pelos elementos da matriz regiSolar, sendo eles 4, as quatro semanas
        for(let i = 0; i < solarGrid.length; i++){

            // Nesse acessará os valores de cada 'SEMANA', sendo essa repetição < 7, quantidade de dias
            for(let j = 0; j < solarGrid[0].length; j++){

                // Debug
                // console.log(total);
            
                // Ele indica que o total será somado ao valor da linha i e da coluna j
                // Isso é como trabalhar com um plano cartesiano
                // [0][0],[0][1],[0][2],[0][3]...
                // [1][0],[1][1],[1][2],[1][3]...
                // [2][0],[2][1],[2][2],[2][3]...
                total += solarGrid[i][j];


            }

        }  

        return total;


    }
    // ---- //
    function calculateWeeklyAverage(solarGrid){

        let total = 0;
        let média = 0;

        for(let i = 0; i < solarGrid.length; i++){

            for(let j = 0; j <solarGrid[0].length; j++){


                total += solarGrid[i][j];


            }

        }

        média = total / (solarGrid.length * solarGrid[0].length);

        return média;

    }
    // ---- //
    function sumWeekendGeneration(solarGrid){

        let totalSem = 0;

        for(let i = 0; i < solarGrid.length; i++){

            totalSem += solarGrid[i][5] + solarGrid [i][6];

        }
        
        return totalSem;

    }

        // OPERAÇÕES

    // Chamar a função

    console.log(`${sumSolarFGeration(regiSolar)} foi o total gerado por esse Gerador Solar.`);
    console.log(`A média do mês foi ${calculateWeeklyAverage(regiSolar)}`);
    console.log(`A soma DO FIM DE SEMANA desse mês foi ${sumWeekendGeneration(regiSolar)}`);

    break;
    //---------------------------------------------------------//
    case 2:
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

            for(let j = 0; j < evDistances[0].length; j++){
                console.log(evDistances[i][j], maiorValorPCarro[i])
                if(evDistances[i][j] > maiorValorPCarro[i]){
                    
                    maiorValorPCarro[i]  = evDistances[i][j];
                    console.log("oi", evDistances);
                }

            }

        }

        return maiorValorPCarro;

    }

        // OPERAÇÕES

    console.log(`${findLongestTrip(viagensPorCarros)}`);

    break;


}