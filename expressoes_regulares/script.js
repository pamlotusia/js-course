// Expressões regulares no JS são um tipo de objeto
//Podemos instancia-las de duas formas
// new RegExp e /.../

//dessa forma sempre usamos () e "", mesmo que os valores sejam numeros
let reg1 = new RegExp('pamela')

//enquanto dessa forma não precisa usar "", mesmo que o valor seja uma string
let reg2 = /teste/

//Utilizamos o metodo test() para verificar seo padrão é retornado. Com isso vamos receber true ou false
// O regexp vai verificar se aquele padrão está dentro da string, não importa se tem outros caracteres antes dele ou não, se aquela expressão for encontrada ele retorna true

console.log(/testando/.test('testandooooo')) //true
console.log(/testando/.test('dsjsdfjtestandodfgdfg')) //true
console.log(reg1.test('anamariapamelajoao')) //usando a variavel que guarda o regex
let nome = 'pamela'
console.log(reg1.test(nome)) // verificando string da variavel

///// Conjuntos /////
//Para definir um conjunto no regex, basta usar []
//Com um traço podemos definir um intervalo também

//Note neste caso que mesmo que na frase verificada houver apenas 1 ou 2 ou 3 ele ainda retorna não, não é necessario que seja 123 consecutivo igual no regex. Isso abre muita margem pra erro, mas é apenas uma verificação simples, existem maneiras de aprimorar
console.log('verificando conjuntos [123] ' + /[123]/.test('Existe 123 aqui?')) //fiz concatenação pra ficar mais simples de entender depois

//Nesse exemplo estamos verificando a existencia de apenas um digito numero. Nesse contexto não importa se ele vem antes ou depois de letras, se é um numero grande ou apenas um digito, desde que haja um digito ele vai retornar true.
console.log('verificando conjuntos de intervalo [0-9] ' + /[0-9]/.test('O numero 10 está presente aqui'))
















//O operador ? funciona para determinar que aquele caracter(independente do tipo) é opcional, ou seja, quando o regexp foi instanciado, se o resto da expressão estiver correta mas aquele caracter nao, tudo bem porque ele é opcional
//Esse operador impoe sua regra no caracter que vem antes dele. no exemplo a seguir, vai sobrecair na letra 'a' da palavra 'pamela'. Note que mesmo lendo a variavel que não contem o ultimo 'a' ainda retorna true. Porque esse caracter é opcional
let nomeOpcional = 'pamel4'
let regexOpcional = new RegExp('pamela?')
console.log(`esse regexp funcionou ${regexOpcional.test(nomeOpcional)}`)

//para determinar um bloco opcional, e não apenas um caracter, basta colocar o bloco dentro de colchetes e usar o ? depois dele (não dentro). Assim como no exemplo
let conjuntoOpcional = new RegExp('bom dia, [flor do dia]?')
let fraseIgual = 'bom dia, flor do dia'
let fraseDiferente = 'bom dia, Veronica'
console.log(
  `O regexp de conjunto opcional retornou ${conjuntoOpcional.test(fraseIgual)}`
)
console.log(
  `O regexp de conjunto opcional retornou ${conjuntoOpcional.test(
    fraseDiferente
  )}`
)
