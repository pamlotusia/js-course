//primeiro exercicio
let nome = 'Pamela'
let idade = 21
let cnh = true

console.log(nome, idade, cnh)

//segundo exercicio
if (idade >= 18) {
  console.log('Entrada permitida')
} else {
  console.log('Entrada negada')
}

//terceiro exercicio
const nome2 = 'Pamela'

if (nome2 == 'Pamela') {
  console.log(`Olá, ${nome}!`)
} else {
  console.log('Nome não encontrado')
}

//quarto exercicio

//pow(primeiro argumento, segundo argumento)
//pow(base, expoente)
console.log(Math.pow(2, 2))
console.log(Math.pow(3, 2))
console.log(Math.pow(18, 2))

//quinto exercicio
let velocidade = 120

if (velocidade > 80) {
  console.log('Você será multado')
} else {
  console.log('Você está dentro do limite')
}

//sexto exercicio
//utilizando as variaveis do exercicio 1
if (idade > 18 && cnh == true) {
  console.log('Você pode dirigir')
} else if (idade > 18 && cnh == false) {
  console.log('Você não pode dirigir, tire sua CNH.')
} else {
  console.log(
    'Você não pode dirigir, espere até completar 18 anos para tirar a sua CNH.'
  )
}

//setimo exercicio
let numero = 0
while (numero <= 10) {
  console.log(numero)
  numero++
}

//oitavo exercicio
for (let num = 100; num >= 50; num--) {
  console.log(num)
}

//nono exercicio
for (let num = 0; num <= 50; num++) {
  if (num % 2 == 0) {
    console.log(`O número ${num} é par.`)
  } else {
    console.log(`O número ${num} é impar.`)
  }
}

//decimo exercicio
for (let num = 1; num <= 20; num++) {
  if (num <= 5) {
    if (num % 2 == !0) {
      console.log(`O numero ${num} é primo`)
    }
  } else {
    if (num % 2 == 0 || num % 3 == 0 || num % 4 == 0 || num % 5 == 0) {
      continue
    } else {
      console.log(`O numero ${num} é primo`)
    }
  }
}
// *resolução do professor, só devolve se o numero declarado é primo ou não
let num = 15
let divisoes = 0

//aqui ele conta em quantas vezes o numero consegue ser divido sem resto
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    divisoes++
  }
}

//aqui ele declara que um numero só pode ser primo se o numero de divisoes dele for 2 (dividido por 1 e por ele mesmo)
if(divisoes == 2){
  console.log(`O número ${num} é primo`)
} else{
  console.log(`O número ${num} não é primo`)
}
