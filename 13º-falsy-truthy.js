// falsy values = 0, "", undefined, NaN, Null, false
// truthy = todos os demais que não são valores falsy. 

if ("false") {  // ao executar vai dar true, pois o false é uma "string" e ele tem conteudo dentro da string, senão daria false.
    console.log("true")
} else {
    console.log("false")
}