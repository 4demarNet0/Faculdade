// Média da Turma: O sistema da universidade possui uma matriz
// onde cada linha representa as notas de um aluno em
// diferentes avaliações. Escreva getClassAverage(gradeMatrix)
// para calcular e retornar a média geral da turma (soma de
// todas as notas dividida pelo total de elementos).

    // VARIÁVEIS

let notasAlunoA = [

    [10, 9, 7],
    [4.5, 8, 8],
    [3, 4, 2],
    [10, 9.5, 8]

];

    // FUNÇÕES

function getClassAverage(gradeMatrix){

    let somatório = 0;

    for (let i = 0; i < gradeMatrix.length; i++){

        for (let j = 0; j < gradeMatrix[0].length; j++){

            somatório += gradeMatrix[i][j];

        }

    }

    // console.log(somatório)
    return (somatório / (gradeMatrix[0].length * gradeMatrix.length)).toFixed(2);

}

    // OPERAÇÕES

console.log(`A média da turma foi ${getClassAverage(notasAlunoA)} .`);
