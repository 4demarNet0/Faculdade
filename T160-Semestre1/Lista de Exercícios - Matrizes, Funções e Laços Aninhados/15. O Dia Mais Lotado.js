// O Dia Mais Lotado: Dada a matriz de disponibilidade do Airbnb
// (onde 1 é ocupado), desenvolva findBusiestDay(availabilityMatrix)
// para somar os valores de cada coluna (dia) e retornar o índice
// da coluna que possui a maior taxa de ocupação.

    // VARIÁVEIS

let disponibilidadeAirbnb = [
    [1, 0, 0, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 1],
    [0, 0, 1, 1, 0, 1, 0]

];

    // FUNÇÕES

function findBusiesDay(availabilityMatrix){

    let maisOcupado = 0;
    let indiceMaisOcupado = 0;


    // O 'i' variável que indica por onde começar, deverá indicar
    // as colunas, ou seja, ao invés de buscar a quantidade de
    // elementos da matriz principal devemos buscar os elementos
    // que estão dentro da coluna


    // AQUI PRECISA FIXAR O DIA (COLUNA) E SOMAR OS QUARTOS (LINHAS)
    for(let i = 0; i < availabilityMatrix[0].length; i++){

        let ocupações = 0;

        for(let j = 0; j < availabilityMatrix.length; j++){

            if(availabilityMatrix[j][i] == 1){

                // console.log(ocupações)
                ocupações++

            }

            if(maisOcupado < ocupações){
                
                maisOcupado = ocupações;
                indiceMaisOcupado = i;
                // console.log(indiceMaisOcupado);

            }

        }

    }

    return indiceMaisOcupado;


}

    // OPERAÇÕES

console.log(`A coluna mais ocupada foi a de Índice ${findBusiesDay(disponibilidadeAirbnb)}.`);
