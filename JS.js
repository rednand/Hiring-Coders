var myName = "Renan"

console.log(myName)

{
    var age = 32
    // let age2 = 32 - não pode ser identificado
} //bloco de código
//console.log(age,age2)
var num = 1;
num = 5;

if (num === 1) {
    console.log("num [e igual a 1")
} else if (num === 2) {
    console.log("num [e igual a 2")
} else {
    console.log("num é 5")
}

var mes = "janeiro"

switch (mes) {
    case "fevereiro":
        console.log("mes 2");
        break;

    case "março":
        console.log("mes 3");
        break;

    case "janeiro":
        console.log("mes 1");
        break;

    default:
        console.log("nenhum desses")
}