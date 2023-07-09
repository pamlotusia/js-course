// 1- exercicio
let array = [1,2,3,4,5]
console.log(array[0], array[2], array[3])

// 2 - exercicio
let array2 = ['chuva', 'lama']
let array3 = ['sol', 'terra', 'mar', 'fogo']
console.log(array2.length, array3.length)

// 3 - exercicio
let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2
}
console.log(Object.keys(onibus))
console.log(onibus.rodas)
console.log(onibus.limitePassageiros)
console.log(onibus.portas)

// 4 - exercicio
onibus.janelas = 20
delete onibus.rodas
console.log(onibus.janelas)

// 5 - exercicio
let nomes = ['Pamela', 'Jonas', 'Maria', 'Pedro', 'Lucas']
console.log(nomes.includes('Pamela'))

// 6 - exercicio
let arrayMaior = [1,2,3,4,5,6,7,8]
let arrayMenor = [9,8,7,6]
function tamanho(lista){
  if (lista.length > 5){
    console.log('Muitos elementos')
  } else {
    console.log('Poucos elementos')
  }
}

let caso1 = tamanho(arrayMaior)
let caso2 = tamanho(arrayMenor)

// 7 -exercicio
let qualidades = ['honesta', 'bonita', 'criativa', 'persistente', 'otimista']
for(let i = 0; i< qualidades.length; i++){
  console.log(qualidades[i])
}

// 8 - exercicio
let frutaVermelha = {
  "cor": "vermelho",
  "tamanho": "pequeno",
  "sabor": "doce"
}

console.log(frutaVermelha.cor)
console.log(frutaVermelha.tamanho)
console.log(frutaVermelha.sabor)

// 9 - exercicio
let frase = 'Hoje eu acordei e quis dormir mais'
let novaFrase = frase.split(" ")
for(let i=0; i < novaFrase.length ; i++){
  console.log(novaFrase[i])
}

// 10 - exercicio
// criando funções como atributos dentro de um objeto
let calculadora = {
  somar(a,b){
    return a + b
  },
  subtrair(a,b){
    return a -b
  }, 
  multiplicar(a,b){
    return a*b
  },
  dividir(a,b){
    return a/b
  },
}
console.log(Object.keys(calculadora))
console.log(calculadora.somar(6,3))
console.log(calculadora.subtrair(20,12))
console.log(calculadora.multiplicar(3,9))
console.log(calculadora.dividir(100,5))

// exercicio 1 - extra - Criando array e identificando elementos
const arr2 = [1,2,3,4]
let qty = arr2.length
let el = arr2[2]

//exercicio 2 - extra - Preenchendo array
const arr = []
for(let i = 0; i <5; i++){
  arr.push(i + 5)
}

// exercicio 3 - extra - Encontrar o maior número em um array * nao aceito
function findMaxNumber(...array){
  return Math.max(array) 
}

let lista = [1,2,3,6,1,2,3]
console.log(findMaxNumber(lista))

// exercicio 4 - extra - 
function sumUniqueNumbers (array){
  
}
// exercicio 5 - extra - 
// exercicio 6 - extra - 
