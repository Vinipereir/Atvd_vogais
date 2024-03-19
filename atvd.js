let vogais = ['a', 'e', 'i', 'o', 'u'];

let texto = 'O rato roeu a roupa do rei de Roma';

texto = texto.toLowerCase()

let arrayLetras = texto.split("")

let arrayVogais = []

let vazio = [" "]

let consoantes = ['b', 'c', 
                  'd',  'f', 
                  'g', 'h',  
                  'j', 'k', 'l', 
                  'm', 'n', 
                  'p', 'q', 'r', 
                  's', 't', 
                  'v', 'w', 'x', 
                  'y', 'z'];
                  
let found = []

for(i = 0; i < arrayLetras.length; i++){
    if(vogais.includes(arrayLetras[i])){
    arrayVogais.push(arrayLetras[i])
} 
    if(consoantes.includes(arrayLetras[i])){
        found.push(arrayLetras[i])
    }
}

console.log("Texto original: " + texto)

console.log("O número de vogais é: " + arrayVogais.length)

console.log("As vogais encontradas são: " + arrayVogais.toString())


console.log("O número de consoantes é: " + found.length)





