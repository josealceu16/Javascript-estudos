let idade = 16;
let paisPresentes = false;
let passagem = true;
let podeViajar = (idade >= 18 || paisPresentes) && passagem


// console.log(`Pode viajar: ${podeViajar}`); --> aqui mostra o valor true ou false.

/*let msgMaiordeidade = ``;
if (idade >= 18) {
    console.log("Você pode viajar.")
} else {
    console.log("Você é menor de idade.")
}*/


// dessa maneira eu consigo resumir um simples if e else. 
// o que fica a esquerda dos dois pontos é if e a direita é else.


let maiordeidade = (idade >= 18) ? "Você pode viajar." : "Você é menor de 18 anos."

if (!passagem) {
    console.log("Você não comprou a passajem.");
} else {
    console.log("Passajem: OK")
} if (podeViajar) {
    console.log("Pode viajar.")
} else {
    console.log("Não pode viajar.")
}





// aqui estamos vendo na pratica como a gente pode resumir um simples if e else.

let idade_1 = 18;
let pode_viajar = (idade_1 >= 18) ? "Você é maior de idade." : "Você é menor de idade."
console.log(pode_viajar)


/*
if(idade_1 >= 18){
    console.log("Você é maior de idade.");
} else{
    console.log("Você é menor de 18 anos.");
}
*/


// utilizando um exemplo com média:

n1 = 6;
n2 = 8;
n3 = 7;
let media = (n1 + n2 + n3) / 3;
let _nota = "";
let _media = (media >= 7) ? _nota = "Sim" : _nota = "Não"
console.log(`Você passou de ano: ${_nota}`);
console.log("Sua media foi :" + media) 