let selExe = 15;

switch(selExe){

    case 1:

    // O Somatório Solar: Você instalou um sistema de 4.5 kWp de energia solar e o inversor re-
    // gistra a geração diária em kWh. Desenvolva uma função calcularTotalGerado(geracaoDiaria)
    // que receba um vetor com a geração de 7 dias e retorne o total de energia gerada na semana.

        // VARIÁVEIS

    let enerGerado = 4.5;
    let totalGerado = 0;


        // FUNÇÕES
    
    function calcularTotalGerado(geracaoDiaria){

        for(let i = 0; i <= 7; i++){

            totalGerado += geracaoDiaria;

        }

        return totalGerado;

    }

        // OPERAÇÕES
    
    console.log(calcularTotalGerado(enerGerado));


    break;
    //---------------------------------------------------------//
    case 2:

    // Autonomia Máxima: O computador de bordo de um BYD Yuan Pro armazena a qui-
    // lometragem das últimas viagens antes de precisar de recarga. Desenvolva uma função
    // buscarMaiorViagem(distancias) que receba um vetor de distâncias em quilômetros e
    // retorne o valor da viagem mais longa registrada.

        // VARIÁVEIS
    
    let quilômetros = [40, 20, 100, 50, 23];

        // FUNÇÕES

    function buscarMaiorViagem(distancias){

        let maiorKm = 0;

        for(let i = 0; i < quilômetros.length; i++){

            // Se o valor do array atual for maior que o maior valor anterior
            // Substituir por esse valor maior
            if (quilômetros[i] > maiorKm){

                maiorKm = quilômetros[i];

            }
        
        }

        return maiorKm;

    }

        // OPERAÇÕES
    
    console.log(`Esse foi o maior valor ${buscarMaiorViagem(quilômetros)} Km`);


    break;
    //---------------------------------------------------------//
    case 3:
    // Filtro de Avaliações 5 Estrelas: Como anfitrião de uma propriedade no Airbnb em Aqui-
    // raz, você recebe diversas notas de hóspedes (de 1 a 5). Crie uma função filtrarNotasPerfeitas(notas)
    // que receba um vetor com todas as avaliações e retorne um novo vetor contendo apenas as
    // notas iguais a 5.
    

        // VARIÁVEIS

    let avaliações = [5, 3, 2, 4, 5, 4, 5, 5, 3, 1];
    let val5Estr = [];

        // FUNÇÃO

    function filtrarNotasPerfeitas(notas){

        for(let i = 0; i < notas.length; i++){

            if(notas[i] == 5){

                val5Estr[val5Estr.length] = notas[1]

            }

        }
        
        return val5Estr;

    }

        // OPERAÇÕES

    console.log(`Temos que ${filtrarNotasPerfeitas(avaliações).length} usuários votaram em 5 estrelas`);


    break;
    //---------------------------------------------------------//
    case 4:
    // Média Acadêmica: O sistema da universidade armazena as pontuações das atividades
    // práticas dos alunos. Crie uma função calcularMedia(notas) que receba um vetor com 4
    // notas, calcule e retorne a média aritmética. Se a média for maior ou igual a 7.0, a função
    // deve imprimir "Aprovado" no console antes de retornar o valor.

        // VARIÁVEIS

    let vetNotas = [4, 7, 8, 9];
    let mediaFinal = 0;
    
        // FUNÇÕES

    function calcularMedia(notas){

        let somatório = 0;
        let media = 0;
        for(let i = 0; i < notas.length; i++){

            somatório += notas[i];
            
        }

        media = somatório / notas.length;

        return media;

    }
    
        // OPERAÇÕES

    mediaFinal = calcularMedia(vetNotas);
        
    if (mediaFinal >= 7){

        console.log(`Com a pontuação Média de ${mediaFinal}, você foi APROVADO`);

    } else {

        console.log(`Com a pontuação Média de ${mediaFinal}, você NÃO FOI APROVADO`);
        
    }

    
    break;
    //---------------------------------------------------------//
    case 5:
    // Monitoramento de Treino: Para acompanhar a rotina de musculação na academia,
    // um aplicativo anota quantos minutos o usuário treinou por dia no mês. Faça uma função
    // contarDiasIntensos(tempoTreino) que receba um vetor com os tempos em minutos. A
    // função deve usar um laço para contar e retornar em quantos dias o treino durou estritamente
    // mais de 60 minutos.

        // VARIÁVEIS

    let tempoDeTreino = [120, 61, 60, 45, 180, 30, 32, 64, 79, 12];
    let quantDias = 0;

        // FUNÇÕES

    function contarDiasIntensos(tempoTreino){

        for(let i = 0; i < tempoTreino.length; i++){

            if(tempoTreino[i] > 60){

                quantDias++;

            }

        }

        return quantDias;

    }

        // OPERAÇÕES

    // CHAMANDO ESSA FUNÇÃO ELA JÁ ATUALIZARÁ A VARIÁVEL quantDias
    contarDiasIntensos(tempoDeTreino);

    console.log(`Foram ao todo ${quantDias} de treino intenso, ou seja, mais que 60 minutos.`);


    // IDEIA - SOMAR TODOS OS MINUTOS E FAZER UMA FUNÇÃO PARA CADA TIPO DE MEDIÇÃO DE TEMPO, COMO HORA, DIA POR MES QUE FOI TREINADO.


    break;
    //---------------------------------------------------------//
    case 6:
    // Busca no Almoxarifado: Um laboratório de informática possui um vetor com os núme-
    // ros de tombamento dos computadores em manutenção. Escreva uma função
    // verificarEquipamento(tombamentos, codigoBuscado) que retorne true se o código bus-
    // cado estiver no vetor, e false caso contrário. A busca deve parar imediatamente assim
    // que encontrar o equipamento.

        // VARIÁVEIS


    

    // PEDI PRO GEMINI FAZER
        let tombamento = [1038, 5677, 1900, 3061, 8809];
        let manutenção = [8809, 1224, 3061];
        // FUNÇÕES

    function verificarEquipamento(tombamentos, manutenção){

        let emManutenção = [];

        for (let i = 0; i < manutenção.length; i++){

            // console.log("Primeiro For");

            for (let j = 0; j < tombamentos.length; j++){

                // console.log("Segundo For");

                if (manutenção[i] === tombamentos[j]){

                    // console.log("Primeiro Laço");
                    emManutenção[emManutenção.length] = manutenção[i];

                } 

            }


        }

        return emManutenção;

    }

        // OPERAÇÕES

    console.log(`Os computadores ${manutenção} estão precisando de manutenção!`);
    console.log(`Esses (${verificarEquipamento(tombamento, manutenção)}) já foram pra manutenção.`);

    break;
    //---------------------------------------------------------//
    case 7:
    // Conversão de Rota Turística: Ao planejar um roteiro pela Serra da Ibiapaba (incluindo
    // Ubajara e Tianguá), você anotou as distâncias de vários trechos em quilômetros. Um colega
    // estrangeiro pediu essas distâncias em milhas. Crie uma função converterParaMilhas(trechosKm)
    // que receba o vetor em quilômetros e retorne um novo vetor com os valores convertidos para
    // milhas (fórmula: km * 0.621371).

        // VARIÁVEIS
    
    let rotasKm = [20, 15, 7, 21, 10];
    let rotasMilhas = [];

        // FUNÇÃO

    function converterParaMilhas(trechosKm){

        for (let i = 0; i < trechosKm.length; i++){

            rotasMilhas[rotasMilhas.length] = trechosKm[i] * 0.621371.toFixed(2);

        }

        return rotasMilhas;

    }

        // OPERAÇÕES

    console.log(`Para os trechos em Km: ${rotasKm}.`);
    console.log(`Temos as distâncias em Milhas: ${converterParaMilhas(rotasKm)}.`);



    break;
    //---------------------------------------------------------//
    case 8:
    // Extrato Bancário: Um aplicativo financeiro registra depósitos como números positivos e
    // saques como números negativos num vetor. Desenvolva a função calcularSaldoFinal(movimentacoes)
    // que some todos os valores do vetor e retorne o saldo atual da conta.

        // VARIÁVEIS
    
    let numDeposito = [-1, 1000, -23, 500, 300, -45];
    
        // FUNÇÕES

    function calcularSaldoFinal(movimentacoes){

        let saldoFinal = 0;

        for(let i = 0; i < numDeposito.length; i++){

            // console.log(`Saldo final ${saldoFinal}`)
            saldoFinal += movimentacoes[i];

        }

        return saldoFinal;
    }

        // OPERAÇÕES

    console.log(`Informamos que o seu saldo Final foi ${calcularSaldoFinal(numDeposito)}.`);

    break;
    //---------------------------------------------------------//
    case 9:
    // Controle de Acesso Inteligente: Uma fechadura inteligente (Smart Lock) registra as
    // tentativas de abertura com senha. Senhas corretas gravam 1 e incorretas 0. Crie uma
    // função verificarAlarme(tentativas) que percorra o vetor. Se a função encontrar três
    // zeros (0) consecutivos, deve retornar "Alarme Acionado". Caso contrário, retorna "Acesso
    // Normal".

        // VARIÁVEIS

    // O - Senha Errada / 1 - Senha acertada
    let tentaSmartLock = [0, 0, 0, 0]
    let quantTentErr = 0;
    
        // FUNÇÕES

    function verficarAlarme(tentativas){

        for(let i = 0; i < tentativas.length; i++){


            // Ele analisa as tentativas do array, sendo 0 -- erradas, se for errada
            // Contabilizará no quantTentErr -- Quantidade de Erros
            if (tentativas[i] == 0){

                quantTentErr++;

            }

            // Se a quantidade de Erros for igual a 3 ativar o alarme
            if (quantTentErr == 3){

                return "ALARME ACIONADO";

            }

            // Se for digitado corretamente o acesso é liberado
            if (tentativas[i] == 1){

                return "Acesso Liberado";

            }


        }

    }

        // OPERAÇÕES

    console.log(verficarAlarme(tentaSmartLock));

    break;
    //---------------------------------------------------------//
    case 10: 
    // Histórico de Convidados (Inversão): A lista de hóspedes recentes está em ordem
    // cronológica (do mais antigo para o mais recente), mas a interface do sistema precisa exibir
    // do mais recente para o mais antigo. Faça uma função inverterHistorico(hospedes) que
    // receba um vetor de nomes e retorne um novo vetor com a ordem invertida. Restrição: Faça
    // isso manipulando índices com um laço for, sem usar o método .reverse() do JavaScript.

        // VARIÁVEIS

    let nomeDosHospedes = ['Joana', 'Lari', 'Jonas', 'Evilásio'];

        // FUNÇÕES

    function inverterHistorico(hospedes){
        
        let listaDeHospedesCorreta = [];

                        // CÓDIGO NOVO DE BIBLIOTECA - REVERSÃO DO ARRAY
        listaDeHospedesCorreta = hospedes.reverse()

        // OU -----------------------------------//

        //for (let i = 0; i < hospedes.length; i++){

            //listaDeHospedesCorreta.unshift(hospedes[i]);

        //}

        return listaDeHospedesCorreta;

    }
    
        // OPERAÇÕES

    console.log(`Com as alterações efetuadas temos que a lista correta é: ${inverterHistorico(nomeDosHospedes)}.`);


    break;
    //---------------------------------------------------------//
    case 11:
    // Matriz de Consumo Mensal: Para refinar o controle de energia, a leitura agora vem
    // como uma matriz de 4 linhas (semanas) e 7 colunas (dias).
    // Crie uma função consumoMensal(matrizEnergia) que utilize dois laços for aninhados
    // para somar todos os valores e retornar o consumo total do mês.

        // VARIÁVEIS

    let controleDeEnergiaMensal = [

        // Semanas x Dias
        [10, 10, 10, 10, 10, 10, 10 ],
        [10, 10, 10, 10, 10, 10, 10 ],
        [10, 10, 10, 10, 10, 10, 10 ],
        [10, 10, 10, 10, 10, 10, 10 ]

    ]
    
        // FUNÇÕES

    // console.log(controleDeEnergiaMensal.length);    

    function consumoMensalEnergia(matrizEnergia){

        let somaTotal = 0;

        // Esse fará a contagem das semanas, que são a quantidade de elementos de controleDeEnegiaMensal
        for(let i = 0; i < matrizEnergia.length; i++){

            // Agora para acessarmos todos os elementos do arrays dentro de controleDeEnergiaMensal
            // Devemos pega a posição do elemento dentro de controleDeEnergiaMensal e devemos pegar tamanho desse elemento e somar a coisas
                            // Essa propriedade por ser 0 por que todas as colunas são iguais, se fossem diferentes teria de usar o "i"
            for(let j = 0; j < matrizEnergia[0].length; j++){

                somaTotal += matrizEnergia[i][j];

            }
        }

        return somaTotal;

    }

        // OPERAÇÕES


        console.log(`${consumoMensalEnergia(controleDeEnergiaMensal)}`);

    break;
    //---------------------------------------------------------//
    case 12:
    // Disponibilidade de Vagas: O estacionamento da universidade é representado por um
    // vetor onde true é uma vaga livre e false é uma vaga ocupada.
    // Escreva a função encontrarPrimeiraVaga(estacionamento) que retorne o índice da pri-
    // meira vaga livre. Se o estacionamento estiver lotado, retorne -1.

        // VARIÁVEIS
    
    let statusDaVaga = [false, true, false, false, false];

        // FUNÇÕES

    function encontrarPrimeiraVaga(estacionamento){

        for(let i = 0; i < estacionamento.length; i++){

            if(estacionamento[i] == true){

                return i;

            }

        }

        return -1;

    }

        // OPERAÇÕES

    if (encontrarPrimeiraVaga(statusDaVaga) > -1){

        console.log(`A vaga livre mais proxim, fica no índice ${encontrarPrimeiraVaga(statusDaVaga)}.`);

    }

    if (encontrarPrimeiraVaga(statusDaVaga) == -1){

        console.log(`Não há vagas ${encontrarPrimeiraVaga(statusDaVaga)}`);
        
    }

    break;
    //---------------------------------------------------------//
    case 13:
    // Comparação de Modelos (EVs): Você testou dois veículos elétricos (ex: BYD Yuan
    // Pro e Geely EX2) e anotou o consumo da bateria (em %) para trajetos idênticos em um
    // vetor para cada carro. Crie uma função compararConsumo(carroA, carroB) que receba
    // ambos os vetores (de tamanhos iguais). A função deve retornar qual carro teve o menor
    // consumo total somado. Retorne "Carro A", "Carro B"ou "Empate".
    
        // VARIÁVEIS

    let consumoBYD = [ 5, 20, 10, 5, 30];
    let consumoGeely = [10, 15, 5, 20, 25];

        // FUNÇÕES

    function compararConsumo(carroA, carroB){

        let consumoTotalA = 0;
        let consumoTotalB = 0;
        let menorCOnsumoTotal = 0;


        for(let i = 0; i < carroA.length; i++){

            consumoTotalA += carroA[i];
            consumoTotalB += carroB[i];

        }

        if (consumoTotalA > consumoTotalB){

            return `O menor consumo foi o do Geely, sendo:` + consumoTotalB;

        }

        if (consumoTotalA < consumoTotalB){

            return "O menor consumo foi o do BYD, sendo:" + consumoTotalA;

        }   

        if (consumoTotalA == consumoTotalB){

            return "Ambos os consumos são iguais;"

        }

        
    }

        // OPERAÇÕES

    console.log(compararConsumo(consumoBYD, consumoGeely));


    break;
    //---------------------------------------------------------//
    case 14:
    // Extração de Padrões em Grafos: Na pesquisa de IA com Graph Neural Networks, mui-
    // tas vezes precisamos isolar componentes específicos. Crie uma função isolarNosConectados(graus)
    // que receba um vetor com números inteiros representando o número de conexões de vários
    // nós de software. Retorne um novo vetor contendo apenas os nós altamente conectados
    // (aqueles com valor maior que 5 conexões).

        // VARIÁVEIS

    let conexoes = [3, 5, 1, 6, 8, 10, 3];

        // FUNÇÕES

    function isolarNosConectados(graus){

        let grausAltConect = [];

        for(let i = 0; i < graus.length; i++){

            if (graus[i] > 5){

                grausAltConect.push(graus[i]);

            }

        }

        return grausAltConect;

    }

        // OPERAÇÕES

    console.log(`Os nós altamente conectados foram: ${isolarNosConectados(conexoes)}.`);

    break;
    //---------------------------------------------------------//
    case 15:
    // Otimização de Receita: Um sistema de reservas possui matrizes onde cada linha repre-
    // senta uma reserva e possui três colunas: [numero_hospedes, noites_estadia, valor_diaria].
    // Construa uma função calcularFaturamentoTotal(reservas) que percorra essa matriz.
    // Para cada reserva (linha), multiplique o número de noites pelo valor da diária. Acumule
    // tudo em uma variável e retorne o faturamento total.

        // VARIÁVEIS

    let listReserv = [
        // Nº Hóspedes - Noites de Estadia - Valor Diária
        [4, 10, 250],
        [2, 5, 200],
        [10, 2, 400]

    ]

        // FUNÇÕES

    function calcularFaturamentoTotal(reserva){


        let faturamentoTotal = 0;
        let noitesEstadia;
        let valDiaria;
        // Para o array de listReserv - Percorrerá os elementos desse array que são [4, 10, 250], [2, 5, 200], [10, 2, 400]
        for(let i = 0; i < reserva.length; i++){

            // console.log(`lAÇO1`)
            // Agora no respectivo elemento i, iremos percorrer os elementos desse array dentro da array
            // Exemplo, i = 0 == [4, 10, 250], pecorrerá entre 

            // EU PEGUEI O TAMANHO DE UM VETOR ALEATÓRIO PQ TUDO TEM O MESMO TAMANHO
            // COMO SERIA A LEITURA DE UMA MATRIZ COM ARRAYS DE TAMANHOS DIFERENTE?
            
            // NÃO PRECISA DESSE LAÇO DE REPETIÇÃO POR QUE UM DOS LAÇOS DA MATRIZ JA POSSUI UM VALOR FIXO, ENTÃO NÃO NECESSITA DE OUTRO LAÇO PRA PERCORRER
            // for(let j = 0; j < reserva[0].length; j++){

            // Pegará o elemnto da linha i e da coluna 1
            noitesEstadia = reserva[i][1];
            // Pegará o elemento da linha i e da coluna 2
            valDiaria = reserva[i][2];
                
            faturamentoTotal += (noitesEstadia * valDiaria);
            // console.log(noitesEstadia,valDiaria, faturamentoTotal);

            //}


        }

        return faturamentoTotal;

    }

        // OPERAÇÕES

    console.log(`O faturamento total dessas estádias será: ${calcularFaturamentoTotal(listReserv)}.`)


    break;
    //---------------------------------------------------------//

}