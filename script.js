
let numero = 3
for(let i = 0; i<11; i++) {
    console.log(numero + "x" + i + "=" + numero*i)
}

let nome = prompt("Digite Seu nome")
let valor1 = Number(prompt("Digite o Primeiro Algarismo"))
let valor2 = Number(prompt("Digite o Segundo Algarismo"))
let operacao = prompt("Digite a conta á ser feita:\n[+]\n[-]\n[*]\n[/]\n[**]")

if(operacao == "+") {
    alert(valor1 + valor2)
}else if(operacao == "-") {
    alert(valor1 - valor2)
}else if(operacao == "*") {
    alert(valor1 * valor2)
}else if(operacao == "/") {
    alert(valor1 / valor2)
}else if(operacao == "**"){
    alert(valor1 ** valor2)
} else {
    alert("Não foi possivel calcular")
}
function greetings(nome) {
    console.log("olá" + nome)
}

greetings(ana)
