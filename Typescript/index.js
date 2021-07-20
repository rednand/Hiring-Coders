"use strict";
function somar(num1, num2) {
    return num1 + num2;
}
var meuNumero1 = 10; //estava com aspas
//typescript nao aceita esse erro
var meuNumero2 = 5;
var resultado = somar(meuNumero1, meuNumero2);
console.log(resultado);
//tsc --init criar regras para arquivo ts
//linguagem ts ajuda a corrigir erros
