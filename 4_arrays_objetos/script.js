let pessoa = {
  nome: 'Pamela',
  profissao: 'Programadora',
  idade: 21
}

console.log(pessoa)
console.log(pessoa.nome)

//deletando chave do objeto
delete pessoa.idade
console.log(pessoa)

//atribuindo novas chaves ao objeto
pessoa.casada = false
console.log(pessoa)

//Podemos criar todas as propriedades de um obj para outro
// nesse exemplo objetoA recebe objetoB

let objetoA = {
  prop1: 'teste',
  prop2: 'teste 2'
}

let objetoB = {
  prop3: 'propriedade'
}
Object.assign(objetoA, objetoB) //no caso dos objetos terem chaves iguais, o valor que permanece é do objeto que está entrando. No caso, objetoA receberia o valor da chave b, e o valor original da chave objetoA seria modificado.
console.log(objetoA)

//verificando as chaves que cada objeto possui - util para fazer tratativas no código
console.log(Object.keys(objetoA))

//Mutability (mutação) - um objeto pode herdar todas as caracteristicas do outro, virando uma referÊncia ao mesmo
let objeto1 = {
  pontos: 10,
  numeros: [1, 2, 3] //adicionado depois, para entender a referencia de um com outro
}

let objeto2 = objeto1

let objeto3 = {
  pontos: 10
}
let objeto4 = objeto3
// explicação: apesar dos objetos 1 e 3 terem o mesmo escopo, chaves e valores identicos, eles não referenciam um ao outro
// objeto2 'recebe' objeto1, então o valor que o objeto1 conter, o objeto2 vai receber automaticamente pela referenciação. Mesmo que haja alteração de escopo, a referencia já foi feita.
// Ao contrario de objeto1 e objeto3, eles possuem o mesmo escopo, porem nao se referenciam. Caso um dos objetos mude, vai dar alteração entre eles.
console.log(objeto1 == objeto2) //true
console.log(objeto2)

console.log(objeto1 == objeto3) //false
console.log(objeto3 == objeto4) //true

//Loops em Arrays
let numeros = [1, 2, 3, 1, 2, 3]
for (let i = 0; i < numeros.length; i++) {
  console.log(`Na posição ${i} da lista o numero é ${numeros[i]}`)
}

//metodos de arrays: push e pop
//pop() exclui valor ao final do array
let pessoas = ['Pamela', 'Mateus', 'João']
let pessoaRemovida = pessoas.pop()
// let pessoaRemovida = pessoas.pop(pessoas[1]) - testei fazer dessa forma, mas passar indice nao resolve, sempre será o ultimo indice a ser removido
console.log(pessoas)
console.log(pessoaRemovida)

//push() inclui valor ao final do array
let pessoaIncluida = pessoas.push('Marcela')
console.log(pessoas)

//shift() remove o primeiro elemento do array
let frutas = ['Maçã', 'Laranja', 'Uva']
let frutaRemovida = frutas.shift()
console.log(frutas)
console.log(frutaRemovida)

//unshift() adiciona um ou mais elementos no inicio do array
let frutaAdicionada = frutas.unshift('Pera', 'Melancia')
console.log(frutas)
console.log(frutaAdicionada)

//indexOf() encontra o indice de um determinado elemento - como paramatro você vai declarar o valor que está procurando. Ex: se está procurando a posição do numero 1 ou do nome Pedro, você precisa saber o nome do que está procurando para colocar no parametro para que a função devolva o indice
let nomePessoas = ['Ana', 'Julia', 'Ana', 'Pedro']
console.log(numeros.indexOf(1))
console.log('Pedro está na posição ' + nomePessoas.indexOf('Pedro'))

//lastIndexOf() encontra o ultimo indice de um elemento - ultima ocorrencia daquela valor dentro do array, em caso de ter mais indices com valores repitidos
console.log(numeros.lastIndexOf(1))
console.log(
  'A ultima ocorrencia de Ana no array está na posição ' +
    nomePessoas.lastIndexOf('Ana')
)

//slice() retorna um array a partir de outro array
// a função vai 'cortar' o array base e devolver os valores encontrados entre os dois parametros
//o retorno é determinado pelos parametros que são os indices de inicio e fim do novo array. Se o indice final nao for declarado, a função pega até o final do array
let numeros2 = [1, 2, 3, 6, 5, 4]
console.log(numeros2.slice(2, 3))
console.log(numeros2.slice(3))

//forEach() itera a cada elemento do array
const nums = [1, 2, 3, 4] //array com nome no plural
nums.forEach(num => {
  // parametro com nome no singular, é uma boa prática, mas nao prejudica a função se for outro nome.
  console.log(num)
})

/* const predio = ['a', 'b', 'c']
predio.forEach(cadeira => {
  console.log(cadeira)
})  */ //aqui eu testei se o parametro precisa ter um nome relacionado ao nome do Array, nao precisa, é apenas uma boa pratica

// includes() verifica se no array tem um determinado elemento
let carros = ['BMW', 'Fiat', 'Audi']
console.log(carros.includes('Fiat'))

//reverse() inverte um array
console.log(numeros)
console.log(numeros.reverse())

//Metodos de string: trim() remove tudo o que não é string (inclusive espaços entre as strings)
let texto = '  \n texto palavras e mais palavras \n '
console.log(texto)
console.log(texto.trim())

//padStart() insere caracteres antes da string
let milAoContrario = '1'
console.log(milAoContrario.padStart(4, '0')) //o primeiro parametro é o comprimento total da string, incluindo os caracteres que serão adicionados. O segundo parametro são os caracteres a serem incluidos

let igInstagram = 'pamlotusia'
console.log(igInstagram.padStart(igInstagram.length + 1, '@')) //agora funcionou

let exemplo2 = 'Nome'
let parametro = 'textoQueVaiNaFrente'
console.log(
  exemplo2.padStart(exemplo2.length + parametro.length, `${parametro}`)
) // dividindo em variaveis, os valores ficam mais flexiveis e os parametros sempre estarão do tamanho correto, sem deixar nenhum caracter para trás

//split() divide uma string por um separador e retorna um array
let frase = 'O gato caiu do telhado'
let palavras = frase.split(' ') //o paramtro definirá a divisão entre os itens, aqui separa os itens a cada espaço
console.log(frase)
console.log(palavras)

let frase2 = 'Era, uma, vez'
let separarPorVirgula = frase2.split(',') //aqui separa por virgula
console.log(frase2)
console.log(separarPorVirgula)

//join() junta elementos em um array em uma frase, por meio de um separador
let fraseMontada = palavras.join('<->') //parametro esquisito só para o exemplo ficar bem visivel
console.log(fraseMontada)

// repeat() repete uma string de acordo com um parametro number
console.log('teste \n'.repeat(6))

//Rest Operator, uma forma de uma função receber indefinidos parametros
// O operador rest vai virar um array
// O parametro é definido por: ...nome
function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }
}
let num = 1
let num1 = 5
let num2 = 3
let num3 = 4

imprimirNumeros(num, num1, num2)
console.log('=====pausa=====')
imprimirNumeros(num2, num3)

// Destructuring em objetos - podemos definir variaveis com propriedades do objeto com uma notação diferente
const person = {
  name: 'Jhon',
  lastname: 'Doe'
}

const { name: fname, lastname: lname } = person
console.log(fname)
console.log(lname)

//Destructuring em arrays - podemos definir variaveis com os valores de um array
let cores = ['amarelo', 'azul', 'branco']
let [cor1, cor2, cor3] = cores

console.log(cor1)
console.log(cor2)
console.log(cor3)

//JSON = JavaScript Object Notation
//Utilizado para comunicação entre serviços, ex: back end <-> front end
//Basicamente um tipo de dado padronizado, que lembra muito os objetos do JavaScript
//Sintaxe um pouco diferente e rigorosa, sempre precisa abrir e fechar com aspas duplas, a menos que o valor seja um number
//Não aceita comentários

let json = {
  name: 'Pamela',
  age: 21,
  position: 'developer',
  languages: ['JavaScript', 'Python']
}

console.log(Object.keys(json)) //imprimir chaves do objeto json

//JSON para String - podemos converter o JSON para uma string de forma fácil, ou também uma string para JSON
const car = {
  "brand": "BMW",
  "wheels": 4,
  "doors": 2,
  "type": "Sedan"
}

let jsonToString = JSON.stringify(car) //de json para string
console.log(jsonToString)

let stringToJson = JSON.parse(jsonToString) //de string para json
console.log(stringToJson)

//testar depois string -> json com strings não formatadas corretamente, já que a sintaxe do json é rigida ele deve não formular bem uma string mal declarada.
