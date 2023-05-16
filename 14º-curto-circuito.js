let n = 0;
n = n || 16;  // ao executar ele vair verificar todos os parametros e como o meu zero é falsy, ele vai me retornar um valor truthy.
console.log(n);  // ao executar ele vai atribuir um novo valor. Então, quando eu quiser mudar o valor da minha variavel ele vai me entregar isso.



let isValid = false
/*if(isValid){
    console.log("é valido";)
} else{
    console.log("é falso.")
}*/

//isValid && console.log("é valido.") // o código a cima transformousse nisso.
// como o isValid é true, logo ele vai entregar a ultimo comando: console.log;


isValid && console.log("não é valido.")


/* como meu isValid é true ele não vai mostrar nada.
se fosse false ele me entregaria o console.log, mas em outras ocasiões sairia errado.
*/


// como eu estou usando o "ou"(||) sempre que eu executar ele vai entregar a primeira reposta.
// "olá" || "mundo" como os dois são true o meu js vai entregar o "olá";
// "olá" && "mundo" como o && ele verifica se tudo é true, logo ele vai até o final. Nesse caso entregando a string "mundo".