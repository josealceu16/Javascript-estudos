let dia_semana = 7;
if (dia_semana === 0) {
    console.log("hoje é domingo.")
} else if (dia_semana === 1) {
    console.log("hoje é segunda-feira")
} else if (dia_semana === 2) {
    console.log("hoje é terça-feira")
} else if (dia_semana === 3) {
    console.log("hoje é quarta-feira")
} else if (dia_semana === 4) {
    console.log("hoje é quinta-feira")
} else if (dia_semana === 5) {
    console.log("hoje é sexta-feira")
} else {
    console.log("hoje é sábado")
}

let dia = "";
switch (dia_semana) {
    case 0:
        dia = "segunda"
        break
    case 1:
        dia = "terça-feira"
        break
    case 2:
        dia = "qurta-feira"
        break
    case 3:
        dia = "quinta-feira"
        break
    case 4:
        dia = "sexta-feira"
        break
    case 5:
        dia = "sábado"
        break
    default:
        dia = "domingo"
}

console.log(`hoje é ${dia}`)


/*sempre que eu terminar minha variavel utilizo o break para fazer a parada do codigo,
para que se não executar, pare para que possa verificar o próximo. 
No ultimo eu ainda posso coloocar o default e não necessito do break
*/