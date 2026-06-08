// Achatar Matriz: Crie a função flattenData(matrix) que receba
// uma matriz bidimensional e copie todos os seus elementos para
// um vetor unidimensional (array simples), retornando-o ao final.

    // VARIÁVEIS

let matrizBidimensional = [

    [10, 10, 10, 10],
    [10, 10, 10, 10],
    [10, 10, 10, 10]

];

    // FUNÇÕES
 
function flattenData(matrix){

    let vetorSimples = [];

    for(let i = 0; i < matrix.length; i++){

        for(let j = 0; j < matrix[0].length; j++){

            vetorSimples[vetorSimples.length] = matrix[i][j];

        }
    }

    return vetorSimples;

}
 
    // OPERAÇÕES

console.log(`O vetor unidirecional resultante é: ${flattenData(matrizBidimensional)}`);
