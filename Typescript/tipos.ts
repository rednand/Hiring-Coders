let contaPaga: boolean = false;

const idade: number = 23;
const avaliacao:number = 4.5;

const nome: string = "Renan Aguiar"

//tipos comecam sempre com minusculos

const idades: number[] = [23,28,45,32,45];
const idades2:Array<number> = [23,45,481,21];

//tupla
let jogadores: [string,string,string];
jogadores = ["Vitor","Fulano","Ciclano"];


//Enum
enum StatusAprovacao{
Aprovado = "001",
Pendente = "002",
Rejeitado = "003"
}
const statusdaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const RetornoDaAPI: any[] = [123,"Vitor",false]
const RetornoDaAPI2: any = {
    //.....
}

function printarNaTela(msg: string): void{
    console.log(msg);
}

//null e undefined
const u:undefined = undefined;
const n: null = null;

//Object
function criar(objecto: object){
    //....
}
criar({
    propriedade: 1,
})


//Never
function loopInfinito():never{//pq não termina
    while(true){}
}
function erro(mensagem: string):never{
    throw new Error(mensagem);
}

function falha(){
    return erro("Algo falhou");
}

//union types /// pode ter mais de um tipo

function exibirNota (nota:number | string){
    console.log(`A nota é ${nota}`);
}

exibirNota("10");
exibirNota(10);

//Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

const funcionarios: Funcionario[] = [{
    nome: "Renan",
    sobrenome: "Aguiar",
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]){
for(let funcionario of funcionarios){
    console.log("Nome do funcionario", funcionario.nome)
}
}

let altura: number | null = 1.6 ;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}
const contato: Contato = {
    nome: "Renan",
    telefone1: "123456",
}

//type assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();


//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
