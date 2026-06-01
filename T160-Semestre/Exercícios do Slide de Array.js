// Informe o exercício que queria averiguar:
let escExerc = 1;

switch (escExerc) {
  case 1:
    // Exercício 1

    // VARIÁVEIS
    let prodPainelSolar = [4.6, 5.2, 3.8, 4.0, 5.5];
    let prodTotal = 0;
    let prodMédia = 0;

    // OPERAÇÕES

    for (i = 0; i < prodPainelSolar.length; i++) {
      prodTotal += prodPainelSolar[i];
    }

    prodMédia = prodTotal / prodPainelSolar.length;

    console.log(`A média de produção foi ${prodMédia} kWh`);
    break;

  case 2:
    // Exercício 2

    // VARIÁVEIS
    let distanciaViagens = [12, 45, 8, 30, 50, 15];
    let maiorViagem = 0;
    let quantMaiVin = 0;

    // OPERAÇÕES
    for (i = 0; i < distanciaViagens.length; i++) {
      
      if (distanciaViagens[i] > maiorViagem) {

        maiorViagem = distanciaViagens[i];

        if(maiorViagem >= 20){

          quantMaiVin++;

        }
      }
    }

    console.log(`A maior viagem foi de ${maiorViagem} Km.`);
    console.log(`Há ${quantMaiVin} com a quilometragem maior que 20 km.`);

    break;

  case 3:
      // Exercício 3

      let notas = [5, 4, 2, 5, 1, 4];
      let notasValidas = [];

      for (i = 0; i < notas.length; i++){

        if(notas[i] >= 4){

          notasValidas.push(notas[i]);

        }

      }
      console.log(notasValidas);
      
      break;

}
