/*
igualdade de valor ==          -->    //  para saber se tem valores iguais.
igualdade de valor de tipo === -->      //é para saber se tem valores e tipos iguais.
<, >, <=, >=
operador de diferença !=       -->     //para saber se tem valores diferentes, se tiver vai ser true.
valores e tipos diferentes !==    -->   //descobrir se tem valores diferentes e tipo diferente, se não tiver é false
*/

let valor1 = 50;
let n1 = `10`;
console.log(valor1 == n1); // quando eu tenho dois sinais de iguais vai haver uma comparação para saber se tem valores  iguais.



let valor2 = 20;
let valor3 = 30;
let valor4 = 16;
console.log(`${valor1} ${valor2} ${valor3} ${valor4}`);

let num1 = 10;
console.log(n1 === num1); // quando tenho 3 sinais de igual(===) o meu js vai fazer não só uma comparação, mas como vai ver se é do mesmo tipo.

let num2 = 100;
console.log(num2 < valor2); // estou vendo de meu num2 é menor que o valor2;

let num3 = 12;
console.log(valor3 > num3); // ele está vendo se a minha variavel 'valor3' é maior que 'num3', se for, é true (verdadeiro).

let num4 = 5;
console.log(valor3 <= num4); // utilizo o maior ou igual (<= / >=) para saber se as minhas variaveis tem o mesmo valor, se não, ele vai ver qual é o maior ou o menor. 

let num5 = 40;
console.log(num4 != num5);

let num6 = `40`;            // dessa maneira meu proograma vai dar ture, porque te valores diferentes e tipos diferentes.
console.log(num5 !== num6);


let num7 = 5;
console.log(num4 != num7); // vai dar false, porque meu num7 e num4 tem valores iguais, não diferentes... e são do mesmo tipo.

