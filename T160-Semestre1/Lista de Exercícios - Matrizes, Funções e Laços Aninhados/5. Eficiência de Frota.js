// Eficiência de Frota: Com uma matriz representando o consumo
// de bateria (%) por viagem, crie findMostEfficientCar(evConsumptions).
// A função deve somar o consumo de cada carro (linha) e
// retornar o índice do carro que teve o menor consumo total.

    // VARIÁVEIS

let consumoPCarro = [

    [40, 31, 54, 34, 67],
    [10, 90, 90, 90, 90],
    [10, 23, 16, 53, 21]

];

    // FUNÇÕES

function findMostEfficientCar(evConsumptions){
    
    // INICIALIZAMOS COM O 'consumo' om um número muito alto para garantir que tenha um valor menor que ele futuramente
    let consumo = Infinity;
    // Armazenará o valor do índice
    let carroMenorConsumoIndice = 0;

    for(let i = 0; i < evConsumptions.length; i++){

        let consumoDesteCarro = 0;

        for(let j = 0; j < evConsumptions[0].length; j++){

            consumoDesteCarro += evConsumptions[i][j];

        }

        if (consumoDesteCarro < consumo){

            // console.log("Dento do If", consumo, carroMenorConsumoIndice);
            consumo = consumoDesteCarro
            carroMenorConsumoIndice = i;

        }

    }
    
    return carroMenorConsumoIndice;

}

    // OPERAÇÕES

console.log(`O Índice do carro mais eficiente é ${findMostEfficientCar(consumoPCarro)}`);
