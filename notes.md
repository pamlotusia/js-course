**Boas práticas do curso**
1. Fazer exercícios extras de fixação, além dos demonstrados em aula.

2. Em JavaScript para declarar **variaveis**, é apropriado usar o estilo camelCase


**typeof** - imprime o tipo de dado

*Special numbers* - considerados numeros, mas nao funcionam como numeros
1. Infinity
2. -Infinity
3. NaN

*template literals* - uso de strings com `` para utilizar variaveis no meio dela

**o barra (\n) pode dar efeito de escape, pular linha**

== : igual 
=== : identico

**operadores lógicos booleanos**
*&&* - *and* -> para dar true, os dois lados da comparação precisam ser true
*||* - *or*- -> para ser true, basta um dos lados ser true
*!* - *not* -> inverter os valores(true vira false)

**operadores ternários**
Faz comparativo com apenas uma linha de código, especialmente utilizado em *if else*
*?* simboliza a condição verdadeira do if
*:* trata o else
*console.log(false ? 'false' : 'verdadeiro')* - ou seja, se a condição der false, imprima "false", do contrario, imprima "verdadeiro"

console.log(3 + 3 == 6 ? 'show' : 'ruim')

**É possivel declarar várias variaveis em uma unica linha separando com virgula**
*let um = 1; dois= 2, tres =3*  - Não é aconselhavel porque dificulta a leitura do codigo, mas dá pra fazer

**Não é aconselhavel usar o var para declarar váriavel, ele faz parte da sintaxe antiga e deve ser evitado. Prefira o const ou let**


* sintaxe para chamar/inicializar função
*nomeDaFuncao();*

* A biblioteca Math é nativa do JS e contem diversos metodos para utilizar - é muito utilizada

**for Javascrpit - estrutura de repetição**

*for ([inicialização]; [condição]; [expressão final])*
   *{declaração}*

ex: for (let numero = 2; numero < 20; numero *= numero){
    console.log(numero)
}

function potencia(a,b){
  // return Math.pow(a, b)
  return a ** b  **sinal de ** é de potencia**
}

*tudo que vem depois de um ponto na variavel é um propriedade*
por ex:
let lista = [1,2,3]
lista.length : length é propriedade, é declarada depois do ponto
metodos tambem vem depois de um ponto, porem metodos são acompanhados de (), porque são funções

**pesquisar metodos**
* assign - juntar chaves e valores

**JSON** não possue metodos
