
n1 = 5;
n2 = 9;
n3 = 1;
let media = (n1 + n2 + n3) / 3;
let nota = media >= 7;
console.log(`Sua nota é : ${media}`);
if (nota === true) {
    console.log(`Você passou de bimestre!!`);
} else if (n1 === 0 || n2 === 0 || n3 === 0) {   //     quando sei que vou suar o if dentro do else ja coloco o seguinte -> else if(){}
    console.log(`Você não passou`);
} else {                                // dessa maneira que eu fiz está correto. Se eu não faço isso daria um erro, por isso que quandp eu for utilizar o if dentro do else utilizo dessa forma.
    console.log(`Você não conseguiu passar! Estude mais!`)
}

// para viajar para o exterior precisa ter mais de 18 anos, se for menor precisa estar acompanhado dos responsáveis e precisam ter a passagem



let idade = 16;
let pais = true;
let passajem = true;
const viajar = (idade >= 18) || pais && passajem // se eu atribui um valor booleano não preciso declarar no meu if. (!) a exclamação é para negativar uma afirmação.
//if (passajem === true)
// if (!passajem)
// como eu usei o operador logico (!) para negar, logo se não tivesse era só inverter.
if (passajem === false) {
    console.log(`Você não pode viajar.`)
} else {
    console.log(`Você pode viajar.`)
}