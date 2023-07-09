const cachorro = {
  raca: 'SRD',
  uivar() {
    console.log('AUUUUUUUUU')
  },
  rosnar() {
    console.log('grrrrrr')
  },
  setRaca(raca) {
    this.raca = raca
  }
}

cachorro.uivar()
cachorro.rosnar()
cachorro.setRaca('chihuahua')
console.log(cachorro)

//////////////////////////////////////////////////////////////
let pessoa = {
  nome: '',
  setNome(novoNome) {
    this.nome = novoNome
  },
  getNome() {
    return this.nome
  }
}

console.log(pessoa)
pessoa.setNome('Pamela')
console.log(pessoa.getNome())

////////////////Prototypes - objetos pai//////////////////////
const carros = {
  portas: 4
}

console.log(Object.getPrototypeOf(carros))
console.log(Object.getPrototypeOf(carros) === Object.prototype)
console.log(carros.hasOwnProperty('portas'))

let carro1 = carros
console.log(Object.getPrototypeOf(carro1)) //aqui continua sendo o Object o objeto pai, porque referenciamos o carro1 ao objetos carros. Ou seja, eles são iguais, inclusive o prototype

let carroNovo = Object.create(carros) //aqui estamos devidamente Criando um objeto novo a partir de outro, não apenas o referenciando
console.log(carroNovo.hasOwnProperty('portas')) //false, porque o atributo não é Dele Mesmo, é do objeto pai, apesar de conseguirmos acesse-lo de outras formas
console.log(carroNovo.portas) //4 .  dessa forma
console.log(Object.getPrototypeOf(carroNovo) === carros) //enquanto aqui está dizendo que sim, o prototype de carroNovo é objeto de carros
console.log(Object.getPrototypeOf(carroNovo)) //aqui ele só devolveu {portas:4}, mas o prototype ainda é o Object. verificar depois

///////////////////////////Classes//////////////////////////
let objetoBase = {
  tamanho: 'sem tamanho',
  peso: 'sem peso',
  cor: 'sem cor'
}

let cadeira = Object.create(objetoBase) //sintaxe de criar objetos a partir de uma classe. Porém não é a maneira mais utilizada
console.log(Object.keys(cadeira)) // aqui retorna um array vazio
console.log(Object.keys(objetoBase)) // retorna as chaves do objeto
cadeira.tamanho = '50cm x 1m'
cadeira.peso = '1kg'
cadeira.cor = 'marrom'
console.log(Object.keys(cadeira)) //mas depois de definir valores aos atributos, ele retorna as chaves
console.log(cadeira)

//////////////Classes: construtor por função///////////////
//Construtores são uma forma de instanciar (criar um objeto novo) uma classe em uma linguagem de programação
//No construtor já podemos definir propriedades
function criarCachorro(raca, tamanho) {
  let cachorro = Object.create({}) //criando um objeto vazio para depois incluir atributos
  cachorro.raca = raca
  this.tamanho = tamanho //this não funciona aqui, tem que chamar pelo nome do objeto mesmo
  cachorro.tamanho = tamanho //se retirar essa linha, o console.log() não vai devolver o tamanho porque o this não funciona nessa sintaxe desse contexto
  return cachorro
}

let doberman = criarCachorro('Doberman', 'grande')
console.log(doberman)

/////////Classes: construtor por New/////////
// para nomear classes, deixamos a primeira letra maiuscula, é uma boa prática]
// a palavra reservada new serve para instanciar novas classes
function Season(weather, moisture, initialData) {
  this.weather = weather //aqui o this funciona
  this.moisture = moisture
  this.initialData = initialData
}
let summer = new Season('hot', 'high', 'December 21st')
console.log(summer)

//////////Classes: construtor como método///////////
//Álem de propriedades, podemos criar a classe base já com métodos
//Basta definir ao prototype o método desejado
function Sale(product) {
  this.product = product
}
Sale.prototype.celebrate = function () {
  console.log(`One ${this.product} was sold!`)
}

let seller1 = new Sale('table')
console.log(seller1.product)
seller1.celebrate()

console.log(Object.getPrototypeOf(seller1)) //prototype Object, Constructor Sale
console.log(Object.getPrototypeOf(summer)) //prototype Object, Constructor Season
console.log(Object.getPrototypeOf(doberman)) //prototype Object

//////////Constructor na classe (ES6) - sintaxe mais utilizada //////////
//Com a versão do ES6, uma possibilidade de criar uma classe (objeto) com um construtor foi adicionada
//Então não precisamos mais criar por meio de uma função
//Apenas atenção aos navegadores que suportam essa funcionalidade, você pode verificar se o recurso é aceito pelas versões de navegadores pelo site 'Can I Use'
//(pesquisei e a maioria dos navegadores mais usados aceitam numa boa)

class Teacher {
  //palavra reservada class para definir classe construtora
  constructor(name, subject) {
    //constructor com parametros
    this.name = name
    this.subject = subject
  }
}

let teacher1 = new Teacher('Gabriela', 'English')
console.log(teacher1)
console.log(teacher1.name)
