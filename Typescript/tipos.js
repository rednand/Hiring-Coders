"use strict";
var contaPaga = false;
var idade = 23;
var avaliacao = 4.5;
var nome = "Renan Aguiar";
//tipos comecam sempre com minusculos
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 45, 481, 21];
//tupla
var jogadores;
jogadores = ["Vitor", "Fulano", "Ciclano"];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusdaAprovacao = StatusAprovacao.Aprovado;
//Any
var RetornoDaAPI = [123, "Vitor", false];
var RetornoDaAPI2 = {
//.....
};
function printarNaTela(msg) {
    console.log(msg);
}
//null e undefined
var u = undefined;
var n = null;
//Object
function criar(objecto) {
    //....
}
criar({
    propriedade: 1,
});
//Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro("Algo falhou");
}
//union types /// pode ter mais de um tipo
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota("10");
exibirNota(10);
var funcionarios = [{
        nome: "Renan",
        sobrenome: "Aguiar",
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcionario", funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: "Renan",
    telefone1: "123456",
};
//type assertion
var minhaIdade = 23;
minhaIdade.toString();
//const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
