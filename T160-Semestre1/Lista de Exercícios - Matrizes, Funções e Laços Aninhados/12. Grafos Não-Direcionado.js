// Grafo Não-Direcionado: Ainda no contexto de IA e grafos,
// desenvolva checkUndirectedGraph(adjacencyMatrix) que
// verifique se uma matriz quadrada é simétrica (ou seja,
// se matriz[i][j] === matriz[j][i] para todos os casos).
// Retorne true ou false.

    // VARIÁVEIS

let matrizASerAnalisada = [

    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]

];

    // FUNÇÕES

function checkUndirectedGraph(adjacencyMatrix){

    for(let i = 0; i < adjacencyMatrix.length; i++){

        for(let j = 0; j < adjacencyMatrix[0].length; j++){

            // PODEMOS ASSUMIR QUE A MATRIZ É SIMÉTRICA DESDE
            // O COMEÇO E TENTAR PROVAR QUE ELE NÃO É SIMÉTRICA
            // COM A DIFERENÇA

            if (adjacencyMatrix[i][j] !== adjacencyMatrix[j][i]){

                return false;

            }

        }

    }

    return true;

}

    // OPERAÇÕES

if (checkUndirectedGraph(matrizASerAnalisada) == true){

    console.log(`Essa matriz É uma matriz Simétrica`);

} else {

    console.log(`Essa matriz NÃO É uma matriz Simétrica`)

}
