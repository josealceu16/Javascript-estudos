// TABELA DA VERDADE** 

// Na tabela da verdade vamos ter 4 pontos a serem observados. 


// ExpA          ExpB      AND(&&)          OR(II)

/* Se minha expressao A for True e a minha expressao B for True,  meu AND(&&) será true, mas o meu OR(||) será False. 
Para que o OR(||) seja true, pelo menos uma das expressoes tem que ser true. Se as expressoes forem false, o meu AND(&&) vai ser false
e o meu OR(||) vai ser false.
*/




//                  E temos as negações. 

//         ExpA                     NOT A(!A)
//         Se minha expressão A for false minha negação vai ser true, ou virse versa.


// Exemplo
/*
Para uma pessoa viajar para o exterior ela precisar ter 18 anos ou estar acompanhado(a) dos pais.
Senão não poderá viajar para fora do país. E se ela comprou a passagem.
*/

let idade = 16;
let paisPresentes = false;
let passagem = false;
let podeViajar = (idade >= 18 || paisPresentes) && passagem
console.log(`Pode viajar: ${podeViajar}`)
/*if (idade >= 18 == true) {
    console.log("Você é maior de idade.")
} else if (passagem == true) {
    console.log("Pode viajar, pois você tem a passagem")
} else {
    console.log("Não pode viajar porquê não tem a passagem")
}*/



/* Com isso o meu programa vai executar primeiro a idade e os pais, vai ser true,
mas quando usar o AND para ser true tudo tem que estar true. */

/* como eu sei que a idade é maior ou igual a 18, logo o meu programa vai retornar true
e sei que, se algum valor for true, logo meu OR(||) será true.*/





// vamos utilizar um exemplo de média escolar. 


n1 = 6;
n2 = 8;
n3 = 7;
let media = (n1 + n2 + n3) / 3;
let _nota = "";
if (media >= 7) {
    _nota = "Sim."
} else {
    _nota = "Não."
}
console.log(`Você passou de ano: ${_nota}`);
console.log("Sua media foi :" + media)




