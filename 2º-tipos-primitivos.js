// O que são tipos primitivos?? --->
// temos as strings, number (int, float), boolean (true or false)

// aqui eu vou colocar as maneiras corretas de atribuir valores. 

let _minhavar = 10;
let minha_var = 20;
let minhaVar = 30;
console.log(_minhavar, minha_var, minhaVar);



// como posso concatenar valores??

let idade = 16;
let apresentacao = `Olá Alceu, caramba!! você já têm ${idade} anos?!`;
console.log(apresentacao);
// dessa forma eu juntei valores de varias variáveis. Isso se chama concatenar. 





// como faço para descobri o tipo da minha variável?? usando o atributo (typeof)
// console.log(typeof variavel, typeof outra-variavel)
// ao executar o meu terminal ele vai apresentar o tipo da minha variável.
let numero1 = 16;
console.log(`minha idade é ${numero1} que em Js seria uma variável do tipo ${typeof numero1}`);
