// Questão 1

    // Variáveis

console.log("Informe o modelo do carro:");
console.log("1 - BYD Yuan Pro");
let selCarro = Number(prompt('Informe o número correspondente ao carro que deseja simular: '));
let porcentRecarga = Number(prompt('Informe a Porcentagem de Bateria Recarregada uma quantidade de Minutos: '));
let quantMin = Number(prompt('Informe a Quantidade de Minutos correspodente a porcentagem de Bateria Recarregada, informada anteriormente: '));


    // Funções

function simuCarregaA(porcent, min){
    console.log('!!ITEM A!!')
    
    let porcentTotal = 0
    // Aqui o i referencia o minuto em que a operação está sendo feita
    // Então, se a porcentagem é 5% p/ min
    // i = 1 -- 5%
    // i = 2 -- 10%
    // (...)
    // i = 15 -- 75%
    for(let i = 0; i <= min; i++ ){
        
        console.log(`No minuto ${i}, terá ${porcentTotal}% de Bateria.`)
        // porcentTotal = porcentTotal + porcent
        // 0 => 0 + 5
        // 5 => 5 + 5
        // 10 => 10 + 5
        porcentTotal += porcent
        
        if (porcentTotal >= 100){
         
         console.log(`Antes da conclusão do minuto ${i} a Bateria já está em 100%`);
         
         break;
            
        }
    }
}


    // Operações
    
simuCarregaA(porcentRecarga, quantMin);

