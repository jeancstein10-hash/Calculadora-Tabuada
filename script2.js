let nome = "Jean"
greetings(nome)
function greetings(nome) {
    console.log("olá " + nome)
}
let numeroA = 3
let numeroB = 6
somar(numeroA + numeroB)
function somar(numeroA, numeroB) {
    return numeroA + numeroB
}
let resultado = somar(numeroA,numeroB)
    console.log ("O resultado da some é igual a " + resultado)


function gerarTabuada(numero) {
    for(let i = 0; i<=10; i++) {
    console.log(numero + "x" + i + "=" + numero*i)
}}
gerarTabuada(3)