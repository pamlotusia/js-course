function primeiraFuncao(){
  console.log('hello world')
}

primeiraFuncao(); //chamando função; invocando função

const textoNoConsole = function(){ //função sem nome guardadas em variaveis sao chamadas de função anonima
  console.log("Texto no console")
}
textoNoConsole();

const numeroAleatorio = function (){
  console.log(Math.random())
}
numeroAleatorio()


function multiplicarTresNumeros(x,y,z){
  return x * y * z
}

console.log(multiplicarTresNumeros(2,6,8))
const mult = multiplicarTresNumeros(3,6,5)
console.log(`O valor da multa é ${mult}`)

function podeDirigir(idade, cnh){
  if(idade >= 18 && cnh == true){
    console.log("Pode dirigir.")
  } else {
    console.log("Não pode dirigir.")
  }
}

console.log(podeDirigir(19, true))
console.log(podeDirigir(25, true))
console.log(podeDirigir(44, 0)) //0 também pode valer false, e 1 vale true
console.log(podeDirigir(17, false))

//arrow functions são funções com sintaxe menor

let consoleTeste = () => {
  console.log('olá mundo!')
}

consoleTeste()

let soma = (a,b) => {
  return a + b
}

console.log(soma(2,3))

//para usar uma função você não precisa necessariamente passar todos os parametros dela

function subtracao(a, b) {
  if(a===undefined || b ===undefined){
    console.log("Esta função precisa ter os dois parametros")
  } else {
    return a - b
  }
}

console.log(subtracao(6,3))
console.log(subtracao(3))

//podemos pre-determinar um valor para um argumento
function repetirFrase(frase, n=2){ //aqui o valor default é n=2, se quando for chamar a função passar um parametro para n, ele vai recebe-lo, do contrario vai seguir com o valor pre-definido
  for(let x=1; x<= n; x++){
    console.log(frase + ' ' + x)
  }
}
repetirFrase('testando', 5)
repetirFrase('Só duas vezes')

function potencia(base, exp = 2){
  return Math.pow(base, exp)
}

console.log(potencia(5,2))
console.log(potencia(25))

// closure, uma função que se lembra do ambiente em que ela foi criada
function lembrarSoma(x){
  return function(y){
    return x + y
  }
}

let soma1 = lembrarSoma(2)
console.log(soma1(5))

//recursion, uma funcionalidade que permite que uma função se chamar novamente; isso pode ser um porblema se a função se chamar muitas vezes

function retornaNumeroPar(n){
  if (n % 2 == 0){
    console.log('n agora é par: ' + n)
  } else {
    console.log(n)
    retornaNumeroPar(n - 1)
  }
}
retornaNumeroPar(33)