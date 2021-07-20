function somar(num1:number, num2:number){
    return num1 + num2;
}

const meuNumero1 = 10; //estava com aspas
//typescript nao aceita esse erro
const meuNumero2 = 5;

const resultado = somar(meuNumero1, meuNumero2);
console.log(resultado);

//tsc --init criar regras para arquivo ts
//linguagem ts ajuda a corrigir erros