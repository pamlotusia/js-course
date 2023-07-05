// 1- exercicio
function saudacao() {
  console.log('Hello World')
}
saudacao()

// 2- exercicio
function idade(n) {
  console.log(`Você tem ${n} anos`)
}

let idade1 = idade(10)

// 3- exercicio
function soma(a, b) {
  return a + b
}

console.log(soma(2, 9))

// 4- exercicio
function numeroAleatorio(num) {
  return Math.floor(Math.random() * num) + 1
}
console.log(numeroAleatorio(10))

// 5- exercicio
function podeEntrarAutoescola(idade) {
  if (idade >= 18) {
    console.log('Você pode entrar na autoescola')
  } else {
    console.log('Espere completar 18 anos para entrar na autoescola')
  }
}

caso1 = podeEntrarAutoescola(19)
caso1 = podeEntrarAutoescola(17)

// 6- exercicio
function tipos(valor) {
  if (typeof valor === 'string') {
    console.log('Esse dado é uma string')
  } else if (typeof valor === 'number') {
    console.log('Esse dado é um number')
  } else if (typeof valor === 'boolean') {
    console.log('Esse dado é um booleano')
  }
}

caso1 = tipos('Olá')
caso2 = tipos(13)
caso3 = tipos(true)

// 7- exercicio
function positivo(numero) {
  return Math.abs(numero)
}
caso1 = console.log(positivo(-15))

// 8- exercicio
function limitadorTexto(texto) {
  if (texto.length > 10) {
    console.log('Texto muito longo')
  } else {
    console.log('Texto dentro do limite')
  }
}

caso1 = limitadorTexto('texto grande pra caramba')

// 9- exercicio
function potencia(a, b) {
  // return Math.pow(a, b)
  return a ** b
}

caso1 = console.log(potencia(3, 2))
caso2 = console.log(potencia(4, 4))

// 10- exercicio
function par(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}

console.log(par(6))

// exercicio 6 - extra - função de soma 
function soma(a,b,c){
  return a + b+ c
}
let resultado = soma(5,10,15)

// exercicio 7 - extra = identifique a faixa etária - esse veio pront*
function faixaEtaria(idade) {
  if(idade < 12) {
      return "Criança"
  } else if(idade >= 12 && idade <= 24) {
      return "Jovem"
  } else {
      return "Adulto"
  }
}

const crianca = faixaEtaria(10)
const adulto = faixaEtaria(34)

// exercicio 8 - extra função de palindromo - vi na net*
function isPalindrome(palavra){
  if(palavra.split("").reverse().join("") === palavra){
    return true
  } else {
    return false
  }
}
console.log(isPalindrome('pamela'))

// exercicio 9 - extra - cálculo da média - negado*
function calculateAverage(numeros){
  let soma = 0
  for(let i = 0; i < numeros.length; i++){
    soma += numeros[i]
  }
  return soma / numeros.length
}

let numeros = [10,9,9]
console.log(calculateAverage(numeros))

// exercicio 10 - extra - inverter string
function reverseString(palavra){
  return palavra.split("").reverse().join("") 
}

// exercicio 11 - extra - contagem de vogais
function countVowels(palavra){
  let count = 0
  for(let i =0; i < palavra.length; i++){
    if('aeiouAEIOU'.includes(palavra[i])){
      count++
    }
  }
  return count
}
console.log('existem tantas vogais ' + countVowels('palavra'))

// exercicio 12 - extra - soma de numeros pares
function sumEvenNumbers(numeros){
  let soma = 0
  for(let i = 0; i<=numeros.length; i++){
    if(numeros[i] % 2 ==0 && numeros[i] > 0){
      soma+=numeros[i]
    }
  }
  return soma
}

numeros=[1,2,3,4,5,6]
console.log(sumEvenNumbers(numeros))