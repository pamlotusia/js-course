/////Programação Assincrona é quando um código é executado fora da ordem de "fila" ou "lista", ele não precisa esperar obrigatoriamente que uma ação seja completada para que ele possa iniciar. Seu tempo é independente e existem várias formas de setar ela.

///// Callbacks /////
//Calback é uma função que faz uma ação após algum acontecimento no código
//Podemos realizar um callback com a função setTimeout
console.log('=====CALLBACKS=====')
console.log('Ainda não chamou o callback')

//Aqui o setTimeout é uma função anonima, funções anonimas estão relacionadas ao callback, mas nao sei explicar ainda como nem porquê.
setTimeout(function () {
  console.log('Chamou o callback')
}, 2000)

console.log('Ainda não chamou o callback')

///// Promises /////
//As promises são ações assíncronas que podem produzir um valor em algum momento no código
//Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código
//O objeto das promises é Promise, resolve é o metodo que resolve uma Promise, o then é o que faz ela poder ser executada em um ponto futuro
//Podemos encadear funções com o then, sem ter que parar a execução dele e retomar do zero
//Usamos o resolve para guardar o valor da Promise e o then para acessar esse valor
console.log('=====PROMISES=====')

let promessa = Promise.resolve(4 + 8)
console.log('algum codigo')
promessa
  .then(value => {
    return value + 5
  })
  .then(value => console.log(`A soma é ${value}`))

///// Falha nas Promises /////
//Uma Promise pode falhar, podemos reter esse erro com um método chamado catch
//Com ele podemos exibir o erro no console, por exemplo, e fazer o debug no código
let promessaErrada = Promise.resolve(new Error('Algo deu errado'))

promessaErrada
  .then(value => console.log(value))
  .catch(reason => console.log('Erro: ' + reason))

///// Rejeitando Promises /////
//Além do resolve, há o metodo reject
//Que é quando determinada lógica não satifaz nosso programa, então podemos ir para outra com o reject, em vez do resolve
//Resolve e reject terminam a Promise, ou seja, não podemos chamar mais o then, por exemplo.
function verificaAlgo(num){
  return new Promise((resolve, reject) => {
    if (num ==2){
      resolve(console.log("O numero é 2"))
    } else {
      reject(new Error("Falhou"))
    }
  })
}

verificaAlgo(3)
verificaAlgo(2)

///// Resolvendo várias Promises /////
//Com o metodo all, podemos resolver várias promessas de uma vez só
//Ou seja passamos elas por array e quando a última for resolvida, receberemos a resposta

const p1 = new Promise(function(resolve, reject){ //instanciando promise
  setTimeout(function(){
    resolve(100)
  }, 2500)
})

const p2 = Promise.resolve(5) //sem instanciar, usando direto

const p3 = new Promise((resolve, reject) => { ; //instanciando com aroow function
  resolve(10)
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))

///// Async functions /////
//Podemos criar funções assíncronas com a palavra reservada async
//Elas retornam uma Promise
//Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é rejeitada

async function somar(a,b){
  return a + b
} 
//para pegar/retonrar o valor precisa usar o then
somar(2,2).then(function(value) {
  console.log(value)
})
//usando somente o console.log(), ele vai imprimir a estrutura do objeto Promise e as informações dele
console.log(somar(7,8))

///// Await /////
//Nas async functions, podemos determinar uma instrução await
//Que vai esperar uma promise ser resolvida, para apresentar os resultados

function somarComDelay(a,b){
  return new Promise(resolve =>{
    setTimeout(function(){
      resolve(a + b)
    }, 2000)
  })
}

async function soma(a,b,c,d){
  let x = somarComDelay(a,b)
  let y = somarComDelay(c,d)

  return await x + await y //precisa que os dois sejam await senão o resultado sai errado(justamente porque uma parte foi "concluida" antes da promise)
}

soma(2,4,6,8).then(x => console.log(x))

///// Generators /////
//Generators funcionam semelhantes as Promises
//Onde ações podem ser pausadas e continuadas depois
//Caracterizados pelo function* e yield 
// O yield pode salvar o estado da váriavel

function* genTest(){
  let id = 0
  while(true){
    yield id++
  }
}

let criarId = genTest()

console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)
