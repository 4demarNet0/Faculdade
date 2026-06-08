// Auto-conexões em Grafos (GNNs): Em análise de redes, uma
// matriz de adjacência quadrada indica conexões entre nós.
// Crie sumSelfLoops(adjacencyMatrix) que calcule a soma da
// diagonal principal (onde a linha é igual à coluna) para
// identificar nós conectados a si mesmos.

    // VARIÁVEIS

let valoresMatriz = [

    [10, 2, 4],
    [8, 6, 13],
    [0, 12, 34]

];

    // FUNÇÕES

function sumSelfLoops(adjacencyMatrix){

    let sum = 0;

    for(let i = 0; i < adjacencyMatrix.length; i++){

        sum += adjacencyMatrix[i][i];

    }

    return sum;

}

    // OPERAÇÕES

console.log(`A Soma dos valores da Diagonal Principal são ${sumSelfLoops(valoresMatriz)}.`);
