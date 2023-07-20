///// Movendo-se atraves do DOM ***Não funcionou - ver depois****/////
//A DOM é a representação de dados dos objetos que compõem a estrutura de um documento web
//O objeto raiz é unico e é sempre o mesmo, o document, por isso, para acessar os elementos através da DOM vamos chamar primeiro o document para acessar os ramos seguintes
//Podemos acessar todos os elementos a partir do document.body
// A partir dele vamos entrando nos childNodes (que seriam os nós filhos da raiz pai)
//E depois acessando as propriedades que nos interessam

// console.log(document.body)
// console.log(document.body.childNodes)
// console.log(document.body.childNodes[1])
// console.log(document.body.childNodes[1].childNodes[1])
// console.log(document.body.childNodes[1].childNodes[1].textContent)

///// Encontrando elementos /////
//Podemos encontrar elementos de forma mais fácil do que se movendo pelo DOM
//Como no HTML temos tags, classes e ids, o Javascript nos possibilita utilizar estas caracteristicas para encontrar o que desejamos
//Há alguns metodos para isto: getElementByTagName, getElementById, getElementsByClassName e também querySelector

/////Encontrando elementos: por tag /////
//utilizamos o seguinte metodo para encontrar elementos pela tag
console.log(document.getElementsByTagName('p'))

/////Encontrando elementos: por id /////
console.log(document.getElementById('titulo-secundario'))

/////Encontrando elementos: por classe /////
console.log(document.getElementsByClassName('item'))

/////Encontrando elementos: por querySelector /////
//querySelector é usado para criar 'filtros' de classes e ids, você pode usar apenas um identificador, como pode fazer combinações. Lembre-se de usar as marcações # e . para chamar ids e classes (já que são seletores)
//Se dentro do querySelector você colocar uma classe ou tag que se repete varias vezes no codigo, o querySelector vai devolver apenas a primeira ocorrencia dele
console.log(document.querySelector('#item-1 .item')) //combinação
console.log(document.querySelector('#texto-final')) //id sozinho
console.log(document.querySelector('.tarefa')) //classe que se repete - retorna tarefa 1

//Para retornar Todas as ocorrencias de um seletor que se repete, usamos o querySelectorAll
console.log(document.querySelectorAll('.tarefa')) //devolve um nodeList com todas as ocorencias do parametro passado

///// Alterando o HTML /////
//Para alterar o HTML pelo DOM, podemos utilizar metodos como: insertBefore, appendChild e replaceChild

///// insertBefore /////
//Insere um nó antes do nó referencia do metodo
//Precisamos de um elemento para ser adicionado
//O elemento que terá o outro elemento adicionado antes dele
//E o elemento pai desses dois

let span = document.createElement('span')
let el = document.querySelector('h1')
let pai = el.parentNode

pai.insertBefore(span, el)

///// AppendChild /////
//adiciona um nó após todos os elementos do elemento pai especificado
let p = document.createElement('p')
let el2 = document.querySelector('h1')
let pai2 = el2.parentNode

pai2.appendChild(p)

///// Alterando a DOM com replaceChild /////
//Repões um antigo elemento no DOM, com um novo

let newHeading = document.createElement('h1')
newHeading.textContent = 'Novo texto'

let oldHeading = document.querySelector('#titulo-principal')

let pai3 = oldHeading.parentNode

pai3.replaceChild(newHeading, oldHeading)

///// Criando nós de texto /////
//Podemos criar um nó de texto puro e inserir em um elemento
let texto = document.createTextNode('Este é o texto')
let p2 = document.getElementById('titulo-secundario')
p2.appendChild(texto)

///// Criando nós de elemento /////
//Podemos criar um nó de elemento com o createElement, e depois inserir no HTML
let lista = document.createElement('ul')

for (let i = 0; i < 5; i++) {
  let item = document.createElement('li')

  let texto2 = document.createTextNode('texto lista')

  item.appendChild(texto2)

  lista.appendChild(item)
}

let container = document.getElementById('container-principal')
container.appendChild(lista)

///// Modificando e lendo atributos /////
//Podemos resgatar o valor de um atributo ou trocar com o JS
//Por exemplo o href de um a ou o scr de um elemento img
//getAttribute pega o valor
//setAttribute atualiza o valor

let url = document.getElementById('link')
console.log(url.getAttribute('href'))

url.setAttribute('href', "https://www.google.com.br/")
console.log(url.getAttribute('href'))

///// Verificando altura e largura do elemento /////
//Com o JS também é possível verificar propriedades do elemento como altura e largura
let elTeste = document.getElementById('texto-final')

console.log(elTeste.offsetWidth) //considera as bordas
console.log(elTeste.offsetHeight) //considera as bordas

console.log(elTeste.clientWidth) //desconsidera bordas
console.log(elTeste.clientHeight) //desconsidera bordas

///// Posição do elemento na tela /////
//Tmabém é possivel checar a posição do elemento na tela
//getBoundingClientRect nos dá as posições de top, left, right, bottom do elemento e outras informações
console.log(elTeste.getBoundingClientRect()) 

///// Estilizando com JS /////
//Podemos também mudar as propriedades de estilo do elementos do HTML com o JS
//Acessando a propriedade style podemos fazer as modificações 
//O estilo é manipulado direto na tag, ou seja, substitui o do CSS (na maioria das vezes)

let palavra = document.querySelector("#container-principal p")
console.log(palavra)

palavra.style.color = 'red'