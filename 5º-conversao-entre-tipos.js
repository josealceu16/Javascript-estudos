let n1 = 20;
let n2 = `10`;
console.log(n1 * n2, ` '${typeof n1}' '${typeof n2}'`);

/* eu sei que minha variavel n2 recebe uma string, mas por que que mesmo assim o js entende que é um number?? 
Ele faz a operação, porquê ele não consegue reconhecer que é uma string. Para isso usaremos a conversão de tipo para que,
uma String vá virar um Number ou virse versa.*/

let numero = 40;
let palavra = `10`;
console.log(numero + palavra)

// seu eu fizer uma subtração ele vai conseguir.
// meu javascript vai juntar os dois números, não somar... por isso que é importante fazer a conversão. 




/* essas são as tres formas de converter: 

parseFloat, parseInt, Number()

*/


let numero1 = `15`;
let numero2 = 15;
numero1 = parseInt(numero1);
console.log(numero1 + numero2, `'${typeof numero1}' , '${typeof numero2}'`);



// converter numero decimal(float) para inteiro: 
// quando eu executar o console o meu número decimal vai ficar um numero inteiro. 

var numero_1 = `10.1343242525`;
var numero_1 = parseInt(numero_1);
var numero_2 = 100;
console.log(numero_1 + numero_2)


// E para converter a minha string para numero decimal usamos o parseFloat -->

let num1 = `99.9999999`;
num1 = parseFloat(num1);
let num2 = 1;
console.log(num1 + num2);




// veja esse exemplo: 

let _num1 = `16a`;
_num1 = parseInt(_num1);
let _num2 = 10;
console.log(_num1 + _num2, `'${typeof _num1}','${typeof _num2}'`);

/*ele vai somar normalmente, tudo que tiver depois do meu numero vai ser descartado e feito uma soma.
se eu tiver uma letra antes e depoos um numero e converter por meio do parseInt, vai dar erro (NaN = Not a Number)
*/

let _n1 = `10`;
_n1 = Number(_n1);
let _n2 = 20;
console.log(_n1 + _n2, `${typeof _n1} , ${typeof _n2}`)

/* se eu colocar algum caractere depois da minha string e depois tentar converter utilizando o Number vai dar erro.
Por isso que utilizamos o parseInt/float
*/


n1 = 16;
n1 = n1.toString();
console.log(n1, typeof n1); // dessa maneira eu transformei um numero em string.

