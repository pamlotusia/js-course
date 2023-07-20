///// Eventos /////
//Eventos são ações condicionadas a algum tipo de resposta feita pelo usuario
//Por exemplo: clicks, apertar alguma tecla ou até movimento do mouse
//Podemos atrelar lógica a essas ações do usuário
//Por meio de handlers. (metodos com nome 'handle' geralmente estão atreladas a eventos)

///// Criando eventos /////
//Devemos atrelar o evento a um elemento, por exemplo um botão
//Depois inserir um listener e o tipo de evento como argumento
//Aí o elemento responderá por este evento, e obviamente, os outros da página não

let btn = document.querySelector("#btn")

btn.addEventListener("click", ()=>{
  btn.style.color = 'red'
  btn.innerHTML = 'clicou'
})

///// Removendo eventos /////
//Podemos remover eventos quando acharmos necessario
//Para isso utilizamos o metodo removeEventListener, onde passamos o evento e a função que o evento está escutando como paramentro. Ou seja, caso deseje para um addEventListener no futuro, a função de parametro dele naõ pode ser anonima, para que seja possivel chamar ela dentro do removeEventListener. Ela tambem precisa ser criada fora do escopo do addEventListener para que ela possa ser acessada fora daquele escopo 

let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")

function msg(){
  console.log('Clicou no botão')
}

btn2.addEventListener('click', msg)

btn3.addEventListener('click', function(){ //quando clica no botão btn3 o evento do botão btn2 para de acontecer
  btn2.removeEventListener('click', msg)
})

///// O objeto do evento /////
//Quando criamos eventos, temos a opção de utilizar um argumento opcional, que é chamado de objeto do evento
//Ele contem propriedades que podem ser utilizadas a nosso favor
//O objeto é criado pelo javascript automaticamente
//O programa entende que esse argumento é um objeto do evento por uma questão de sintaxe, é uma lógica interna da linguagem
//dica: a boa pratica é declarar esse argumento como 'e' ou 'event'

let botaoEvento = document.querySelector('#btn4')
function objetoDoEvento(e){
  console.log(e)
}
botaoEvento.addEventListener('click', objetoDoEvento)

///// Propagação /////
//Quando não definimos um elemento muito bem (seletor brando) ou um elemento que está dentro de outro que tem um evento
//Pode acontecer a propagação, ou seja, o outro elemento ativar um evento também, aí teremos uma duplicação
//Por isso temos um método que para essa propagação e resolve este problema, o stopPropagation
//*Contexto do exemplo*: existe um botão dentro de uma tag p, ambos tem eventos, mas ao clicar no botão e disparar seu evento, o evento da tag p também dispara, porque os dois estão "ocupando o mesmo espaço". Para interromper essa duplicação, usamos o Objeto Evento e a função stopPropagation no evento que não é para haver propagação (no caso, no evento do botão)
//*mais explicações*: declaramos o stopPropagation dentro da função mgsPropagacao porque é ela que vai ser usada como parametro dentro do evento do botão.Não tem como usar esse metodo dentro de funções anonimas (até entao)

let p = document.querySelector('p')
let botaoPropagacao = document.querySelector("#btn5")

function msgPropagacao(e){
  console.log('clicou no botao')
  e.stopPropagation()
}

p.addEventListener('click', function(){
  console.log('clicou no paragrafo')
})

botaoPropagacao.addEventListener('click', msgPropagacao)

///// Ações default /////
//Muitos elementos/teclas já tem ações pre-definidas, como clicar num link nos leva a outra pagina
//Podemos parar este evento default, e criar uma lógica diferente para o elemento em questão
//o preventDefault é um metodo do Objeto do Evento, usamos ele para acessar esse metodo
let link = document.querySelector('a')

link.addEventListener('click', function(e){
  e.preventDefault()
  console.log('clicou mas não abriu o link')
})

///// Eventos de tecla (key event) /////
//Sempre que uma tecla é pressionada, são gerados dois eventos: keyup e keydown
//Podemos realizar ações nestes eventos também
//Keyup é quando soltamos a tecla
//Keydown é quando pressionamos
//não usamos o document, usamos o window para selecionar a janela do navegador

window.addEventListener('keydown', function(e){
  if(e.key == 'v'){
    console.log('Apertou a letra v')
  }
})

///// Outros eventos de mouse /////
//No mouse temos tambem eventos como mousedown e mouseup, semelhante aos das teclas
//Dblclick para ativar dois cliques

let eventoMouse = document.querySelector('#botao-up')
let eventoDuploClique = document.querySelector('#duplo-clique')

eventoMouse.addEventListener('mousedown', function(){
  console.log('apertou o botão')
})

eventoMouse.addEventListener('mouseup', function(){
  console.log('soltou o botão')
})

eventoDuploClique.addEventListener('dblclick', function(){
  console.log('deu clique duplo')
})

//para criar eventos com o botão direito do mouse - pequena gambiarra
eventoDuploClique.addEventListener('contextmenu', function(e){
  e.preventDefault()
  console.log('botão direito')
})

///// Movimento do mouse /////
//Podemos ativar eventos com a movimentação do mouse também
//O nome dele é mousemove
//Através desse evento podemos detectar a posição do ponteiro do mouse na tela

window.addEventListener('mousemove', function(e){
  console.log(e.x)
  console.log(e.y)
})

///// Eventos por scroll /////
//Podemos atrelar eventos ao scroll, pelo evento scroll
//Por exemplo: podemos criar um elemento assim que o scroll atingir uma posição x

window.addEventListener('scroll', function(e){
  if(window.scrollY > 100){
    console.log('chegou na posição')
  }
})

/////Eventos por foco /////
//Quando focamos em um elemento ou saímos dele, podemos também atrelar um evento a esta ação
//focus para quando um elemento recebe foco, blur quando ele perde

let input = document.querySelector('input')
input.addEventListener('focus', function(){
  console.log('foco no input')
})

input.addEventListener('blur', function(){
  console.log('perdeu o foco')
})

///// Evento de carregamento /////
//Podemos atrelar um evento quando a página carrega, pelo evento load
//E antes do usuario fechar a pagina pelo evento beforeload**esse foi depreciado

window.addEventListener('load', function(){
  alert('AAAAAAAAAAAAAAAAAAAAAAA')
})
// window.addEventListener('beforeunload', function(e){
//   e.returnValue = null
// })

///// Debounce /////
//Um evento que dispara multiplas vezes pode ser um problema para o computador do cliente
//Por isso podemos fazer um debounce, que é um suavizador de evento, para não chamar o mesmo tantas vezes

let timeout;
window.addEventListener('mousemove', function(e){
  clearTimeout(timeout)
  timeout = setTimeout(() => console.log(e.x), 500)
})