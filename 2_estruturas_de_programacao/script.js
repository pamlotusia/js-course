let nome = 'Pamela'

console.log(nome)
console.log(typeof nome)
console.log(`Meu nome é ${nome}`)

// let idade = prompt("Qual a sua idade?")
//console.log(idade)

//alert("Mensagem importante");

// A biblioteca Math é nativa do JS e contem diversos metodos para utilizar
let maior = Math.max(1, 2, 35, 6)
console.log(maior)

let menor = Math.min(12, 33, 3, 66)
console.log(menor)

let arredondar = Math.round(5.2934777)
console.log(arredondar)

let arredondaParaCima = Math.ceil(5.2934777)
console.log(arredondaParaCima)

//Como as funções são nativas, você pode apenas chama-las normalmente, sem precisar atribui-las a uma variavel (Apenas para testes, casos especificos, etc etc)
console.log(Math.ceil(23.364))

let idade = 17
if (idade > 18) {
  console.log('Acesso permitido')
} else {
  console.log('Acesso negado')
}

let passaporte = true

if ((nome == 'Pamela' && idade > 18) || passaporte == true) {
  console.log('Acesso liberado')
}

let a = 5
let b = 3

if (a + b == 8) {
  console.log('O resultado é 8')
} else if (a == 4) {
  console.log('O valor de a é 4')
} else if (b == 3) {
  console.log('O valor de b é 3') //apesar do valor de b ser 3, ele nao vai percorrer esse laço porque a primeira verificação já foi atendida
} else {
  console.log('Nenhuma condição atendida')
}

//estrutura de repetição While
let x = 10

while (x >= 0) {
  console.log('o valor o x é ' + x)
  x-- // -- é um jeito de decrementar a variavel a cada 1
}

//estrutura de repetição do while *raramente utilizado
let y = 100

do {
  console.log(y / 2)
  y = y - 5
} while (y >= 0)

//estrutura de repetição for
// sintaxe for ([inicialização]; [condição]; [expressão final ou encremento]{ }
for (let numero = 2; numero < 20; numero *= numero) {
  console.log(numero)
}

// utilizando break
nome = 'Bruna'

for (let i = 0; i <= 10; i++) {
  if (i == 3) {
    nome = 'Maria'
  }

  if (i == 5 && nome == 'Maria') {
    console.log(`O nome é ${nome}, pode parar`)
    console.log(`O loop parou na posição ${i}`)
    break
  }

  console.log(`A posição atual é ${i} e o nome é ${nome}`)
}

//utilizando continue para pular uma execução
x = 0
while (x <= 10) {
  x++

  if (x % 2 == 0) {
    continue //nessa regra diz: se o numero for par, não imprima o valor no console
  }

  console.log(x)
}

// utilizando a estrutura de condição switch - ela é preteria quando tem muitas alterativas, se for uma validação menor, um if já resolve
let fruta = 'Morango'
switch (fruta) {
  case 'Morango':
    console.log(`A fruta é ${fruta}`)
  //difernete do if, se você não declara um break, o switch segue fazendo validações por todo o codigo, é preciso declarar o break se você quer que ele termine naquela validação e não faça outras
  case 'Morango':
    console.log('Essa fruta é doce')
    break //como é nesse caso, ele não faz a validação seguinte, mesmo que a condição seja verdadeira você já declarou o break e ele para por aqui.
  case 'Morango':
    console.log('Essa fruta é vermelha')
  default:
    console.log('Nenhuma fruta foi encontrada') //o valor defaukt serve para caso todas as opções sejam falsas, ele vai retornar o default
}

//Ainda não encontrei uma maneira de usar o switch com dois parametros, ele gera alguns erros
//quando o switch recebe dois parametros, ele só vai ler as condições que tiverem dois parametros
let cor = 'verde'
let tecido = 'algodão'
switch ((cor, tecido)) {
  case 'verde':
    console.log(`a cor é ${cor}`) //por exemplo, aqui deveria retornar a cor, porque a cor é verde, mas esse case não tem dois parametros, entao ele passa direto
    break
  case 'amarelo' && 'algodão': // operador && não funciona, porque apenas uma das condições era verdadeira e mesmo assim ele retornou a mensagem. Acredito que isso tenha acontecido porque o case tem dois parametros, nem mesmo o break impediu esse erro de acontecer
    console.log(`a cor é ${cor} e o tecido é ${tecido}`)
    //sem break ele vai passar pelo proximo case
  case 'amarelo' || 'elastano': // o operador || também não funciona, porque ambas as condições são falsas e mesmo assim assim ele retorna a mensagem. Esse errp para de acontecer se o case de cima receber um break, mas mesmo assim é um erro
    console.log(`Essa mensagem é resultado de um erro`)
    break
  default:
    console.log('Nenhuma condição foi atendida')
}
