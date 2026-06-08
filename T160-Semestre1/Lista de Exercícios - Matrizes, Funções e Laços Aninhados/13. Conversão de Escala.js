// Conversão de Escala: Uma matriz contém distâncias de rotas
// de teste em quilômetros. Escreva convertKmToMiles(distanceMatrix)
// que retorne uma nova matriz com os valores convertidos para
// milhas (fórmula: km * 0.621371).

    // VARIÁVEIS

let distanciasKM = [

    [10, 20, 43, 12],
    [430, 159, 23, 55],
    [47, 135, 67, 125]

];

    // FUNÇÕES

function convertKmToMiles(distanceMatrix){

    let valorAtual = 0;
    let distanciaMile = [];

    for (let i = 0; i < distanceMatrix.length; i++){

        // Com essa linha eu digo que temos uma nova lista dentro deste
        // vetor, que corresponde ao mesmo indice do vetor que está
        // sendo explorado agora
        distanciaMile[i] = [];
        // Com isso declamado fica possível usar o array da matriz nova
        // (distanciaMile) para adicionar um valor dentro dele
        // COISA QUE ANTES NÃO PODIA

        for (let j = 0; j < distanceMatrix[i].length; j++){

            valorAtual = (distanceMatrix[i][j] * 0.621371).toFixed(2);
            distanciaMile[i][j] = valorAtual;

        }

    }
    return distanciaMile;

}

    // OPERAÇÕES

console.log(`A matriz covertida em Milhas fica:`);
console.table(convertKmToMiles(distanciasKM));
