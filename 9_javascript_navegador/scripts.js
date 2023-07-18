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
console.log(document.getElementsByTagName("p"));

/////Encontrando elementos: por id /////
console.log(document.getElementById("titulo-secundario"));

/////Encontrando elementos: por classe /////
console.log(document.getElementsByClassName("item"))

/////Encontrando elementos: por querySelector /////
//querySelector é usado para criar 'filtros' de classes e ids, você pode usar apenas um identificador, como pode fazer combinações. Lembre-se de usar as marcações # e . para chamar ids e classes (já que são seletores)
//Se dentro do querySelector você colocar uma classe ou tag que se repete varias vezes no codigo, o querySelector vai devolver apenas a primeira ocorrencia dele 
console.log(document.querySelector("#item-1 .item")) //combinação 
console.log(document.querySelector("#texto-final")) //id sozinho
console.log(document.querySelector(".tarefa")) //classe que se repete - retorna tarefa 1

//Para retornar Todas as ocorrencias de um seletor que se repete, usamos o querySelectorAll
console.log(document.querySelectorAll(".tarefa")) //devolve um nodeList com todas as ocorencias do parametro passado
