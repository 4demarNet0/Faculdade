// Faturamento de Reservas: Um sistema organiza reservas em
// uma matriz onde cada linha é [guests, nights, dailyPrice].
// Crie calculateTotalRevenue(bookings) que percorra as linhas,
// multiplique nights por dailyPrice para cada reserva, e
// retorne o faturamento total.

    // VARIÁVEIS

let reservasDoMes = [

    ['Ronaldinho', 4, 1200],
    ['Alexa', 10, 900],
    ['Terry', 4, 120]

];

    // FUNÇÕES

function calculateTotalRevenue(bookings){

    let faturaTotalEsperada = 0;

    for(let i = 0; i < bookings.length; i++){

        let valorDaReservaDessaPessoa = 0;

        valorDaReservaDessaPessoa = bookings[i][1] * bookings[i][2];

        //console.log("OIII")

        faturaTotalEsperada += valorDaReservaDessaPessoa;

    }

    return faturaTotalEsperada;

}

    // OPERAÇÕES


console.log(`Teras ${calculateTotalRevenue(reservasDoMes)} reais de fatura total`);

