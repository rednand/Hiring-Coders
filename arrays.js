const alunasGama = ["Paula","Maria","Estela","Clara"]

//acessar informações num array

//console.log(alunasGama[2])


//Operador spread (...) - copia - espalha um array anterior

const alunasXp = [...alunasGama,"Simara"]

//console.log(alunasXp)

//métodos iteração

for(let i = 0;i<alunasXp.length;i++){
    //console.log(alunasXp[i])
}

//map

alunasXp.map(aluna => console.log(aluna))


//filter

const numeros=[34,45,67,90,55,76]

const numerosImpares = numeros.filter(numeros => numeros%2 != 0)

console.log(numerosImpares)

const numerosPares = numeros.filter(numeros => numeros%2 == 0)

console.log(numerosPares)

//sort

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=>b-a)
console.log(numerosOrdenadosCrescente)


//reduce - reduz o array a um resultado de uma operação matemátiva

const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior = valorAtual
},0)//o 0 é somado junto

console.log(soma)