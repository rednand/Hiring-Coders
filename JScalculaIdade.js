function calculaMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3

    if (media < 5) {
        console.log("Reprovado");

    } else {
        console.log("Aprovado");
    }
    if (media >= 5 && media < 7) {
        console.log("Recuperação");
    }

}

//calculaMedia(10, 10, 3);

//operador ternário
function calculaIdade(idade) {
    return idade >= 18 ? "maior de idade" : "menor de idade";
}
console.log(calculaIdade(19));