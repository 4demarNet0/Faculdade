// Desempenho Individual: Usando a matriz de notas, crie
// getStudentAverage(gradeMatrix, studentIndex) que receba a
// matriz e o índice de um aluno específico, retornando a média
// apenas daquele aluno.

    // VARIÁVEIS


let indiceAluno = 0;
let notasSalaB = [

    [10, 9, 10],
    [5.6, 3.1, 2],
    [6, 6, 9],
    [7, 8, 10]

]

    // FUNÇÕES

function getStudentAverage(gradeMatrix, studentIndex){

    let somatório = 0;

    for(let i = 0; i < gradeMatrix[studentIndex].length; i++){

        somatório += gradeMatrix[studentIndex][i];

    }

    return (somatório / gradeMatrix[studentIndex].length).toFixed(2);

}

    // OPERAÇÕES

console.log(`O aluno cujo indice é ${indiceAluno} teve a média final de ${getStudentAverage(notasSalaB, indiceAluno)}.`);
