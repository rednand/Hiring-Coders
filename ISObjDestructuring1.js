const pessoa = {
    nome: "Renan",
    idade: 32,
    cidade: "São Paulo"
}

//notação de ponto

pessoa.nome //retorna Renan abaixo

console.log(pessoa.nome)

//notação de colchetes

console.log(pessoa["idade"]) //32

//Como desestruturar Objetos

const{nome,idade,cidade} = pessoa //desestruturando

console.log(nome) 
console.log(idade) 
console.log(cidade) 