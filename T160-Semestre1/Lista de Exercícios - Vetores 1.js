let selExe = 3;

switch(selExe){

    case 1:

        // Variáveis
    
        let nums = [5, 3, 2, 0, 2, -1];
            //    Soma - Menor - Maior
        let pedidos = [0, 0, 0];

        // Operaçoes

        for( i = 0; i < nums.length; i++ ){
            
            // Descobrir se um valor é menor para imprimir
            if(nums[i] > pedidos[1]){

                pedidos[1] = nums[i];

            }

            if(nums[i] < pedidos[2]){

                pedidos[2] = nums[i];

            }

            pedidos[0] += nums[i]

        }

        console.log(`A Soma dos valores fornecido é ${pedidos[0]}.`);
        console.log(`O Maior Valor fornecido é ${pedidos[1]}.`);
        console.log(`O Menor Valor fornecido é ${pedidos[2]}.`);
    

    break;

    case 2:

        // Variáveis //

    // 7, 5, 4 -- CASOS POSSÍVEIS
    let vetX = [4, 7, 5, 8, 9];
    let vetY = [5, 4, 7, 6, 3];
    let maiorLength;
    let vetXY = [];

    // Verá qual é o maior length para colocar no laço de repetição sem excluir nenhum dos valores do vetor
    if (vetX.length > vetY.length || vetX.length == vetY.length){

        // Se o vetor x for maior que vetor y dizer que o tamanho maior é o do vetor x
        // E caso todos tenha o mesmo tamanho tanto faz um ou o outro
        maiorLength = vetX.length

    } else {

        maiorLength = vetY.length

    }

    // CHECAGEM DO TAMANHO DO LENGTH
    // console.log(maiorLength);

        // Operações //


    for(let i = 0; i < maiorLength; i++){
        
        // CHECAGEM DE QUAL SEGMENTO ALFA TA SENDO VERIFICADO
        // console.log(i);
        
        for(let j = 0; j < maiorLength; j++){

            // CHECAGEM DE QUAL SEGMENTO ALFA.BETA TA SENDO VERIFICADO
            // console.log(`${i},${j}`);
            // console.log(vetX[i], vetY[j]);

            if(vetX[i] == vetY[j]){

                // QUAIS VALORES ENTRAM NESSE LAÇO
                // console.log(`${vetX[i]}, ${vetY[j]}!!`);
                vetXY.push(vetY[j]);

            }
        }
    }

    console.log(vetXY);

    break;

    case 3:

        // VARIÁVEIS //

    // A STRING SE COMPORTA COMO UM VETOR TBM, Basta referênciar a uma letra específica da palavra.
    let textString = "Tt" ;
    // Armazena os caracteres que já foram - Tipo se já foi o T e t
    // Para saber a diferença de ambos tempos na biblioteca de comandos o .upper() e o .lower()
    // Tem como converter o texto para um estádo específico tipo maiúscula e minuscula
    // -- Através do comando .toLowerCase() ou .toUpperCase().

    // Exemplo para CHAMAR O CARACTER DE UMA STRING E COMO COLOCA-LO EM UPPERCASE (MAIÚSCULA)
    // console.log(textString.charAt(1).toUpperCase());

    let cadaCaracter = [];
    // VETOR DINAMICO
    let quantCadaString = [];

        // OPERAÇÕES //

    // Verifica a quantidade de caractere da string fornecida
    // console.log(textString.length);

    // Refere-se ao texto Fornecido, pegando a posição de cada letra
    for(let i = 0; i < textString.length; i++){

        // Coloca mostra o caractere que está sendo testado e contado da String
        console.log(textString[i]);

        // Se esse caractere for diferente do que esta armazenado no array de cadaCaracter faça isso...
        if(cadaCaracter[cadaCaracter.length] != textString[i].toUpperCase()){

            // Se esse indice do array cadaCaracter for undefined -- Coloque esse valor dentro dele em UpperCase
            console.log(cadaCaracter, "Antes da adição");
            if(cadaCaracter[cadaCaracter.length] == undefined){
                
                console.log(cadaCaracter, "Depoiss da adição");
                cadaCaracter.push(textString[i].toUpperCase());

            } else {

                continue;

            }

        }

        if(cadaCaracter[cadaCaracter.length] == textString[i].toUpperCase()){

            

        }
        
        

    }
    

    break;





}