// Consistência no Treino: Um aplicativo de academia usa uma
// matriz (semanas x dias) para registrar os minutos treinados.
// Faça a função calculateGymConsistency(workoutMinutes) que
// conte e retorne em quantos dias o usuário treinou
// estritamente mais de 60 minutos.

    // VARIÁVEIS

let consistMensalAcad = [

    [201, 151, 33, 104, 120, 43, 122],
    [120, 234, 12, 45, 93, 66, 40],
    [20, 100, 145, 65, 100, 31, 10],
    [32, 112, 22, 144, 35, 12, 5]

];

    // FUNÇÕES

function calculateGymConsistency(workoutMinutes){

    let quantDias60 = 0;

    for (let i = 0; i < workoutMinutes.length; i++){

        // NÃO ESQUEÇA QUE AQUI!!!! É UM J!!!!! NÃO UM I
        for (let j = 0; j < workoutMinutes[0].length; j++){

            if(workoutMinutes[i][j] > 60){

                quantDias60++;

            }

        }
    }
    
    return quantDias60;


}

    // OPERAÇÕES

console.log(`Na respectiva semana você teve o desenpenho de ${calculateGymConsistency(consistMensalAcad)} dia(s) acima de 1 hrs (60 min) de treino`);
