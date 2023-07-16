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

//Note neste caso que mesmo que na frase verificada houver apenas 1 ou 2 ou 3 ele ainda retorna true, não é necessario que seja 123 consecutivo igual no regex. Isso abre muita margem pra erro, mas é apenas uma verificação simples, existem maneiras de aprimorar. Um erro por exeplo é verificar o numero 35 ou 53 e ele retornar true. 5 não está no regex, mas o 3 já apareceu entao ele retorna true
console.log('verificando conjuntos [123] ' + /[123]/.test('Existe 123 aqui?')) //fiz concatenação pra ficar mais simples de entender depois

//Nesse exemplo estamos verificando a existencia de apenas um digito numero. Nesse contexto não importa se ele vem antes ou depois de letras, se é um numero grande ou apenas um digito, desde que haja um digito ele vai retornar true.
console.log('verificando conjuntos de intervalo [0-9] ' + /[0-9]/.test('O numero 10 está presente aqui'))

///// Caracteres Especiais /////
//dica: caracteres espaciais que comecem com letram maiusculas são basicamente a negação da regra original. confira e perceba as diferenças abaixo

// \. - qualquer caracter, menos quebra de linha
// \d - qualquer digito de caracter (numeros)
// \w - um caracter alfanumerico (letras e numeros)
// \s - qualquer caracter de espaço em branco
// \D - caracter que não são digitos
// \W - caracter não-alfanumerico
// \S - caracter que não seja espaço em branco
// ^ - esse operador tem mais de uma função dentro de um Expressão. Ele pode ser uma negação, porem apenas se a expressão estiver dentro de um conjunto. Seja um intervalo de numeros, ou um conjunto de expressões. Também pode ser um afirmador de limite, veja mais a frente

let pontoRegex = /./
let dRegex = /\d/
let wRegex = /\w/
let sRegex = /\s/
//expressões de negação
let negaIntervalo = /[^0-9]/
let negaConjuntosDiversos = /[^\d\s]/ //nega digitos e espaços
let negaExpressaoAlfanumerica = /\W/
let negaExpressaoEspaco = /\S/

console.log('regex de ponto ' + pontoRegex.test('frase aleatoria')) // true
console.log('regex de digito ' + dRegex.test('frase aleatoria')) // flase porque não tem numeros
console.log('regex de alfanumerico ' + wRegex.test('frase aleatoria')) // true, mesmo que nao tenha numeros, tem letras e já funciona
console.log('regex de espaço ' + sRegex.test("a e i o u")) // true porque tem espaço 

console.log("========== REGEX DE NEGAÇÃO =============")
console.log('regex de negação com intervalo ' + negaIntervalo.test("123")) // false porque tem numeros
console.log('regex de negação com conjuntos diversos ' + negaConjuntosDiversos.test("123 ")) // false porque tem numeros e epaços. Se houvesse letras e espaços ou numeros e letras retornaria true
console.log('regex de negação com alfanumericos ' + negaExpressaoAlfanumerica.test("olá a todos 111")) // true, apesar de conter alfanumericos, também contem espaços
console.log('regex de negação com espaços ' + negaExpressaoEspaco.test(" ")) // false porque tem espaços. mas se adicionarmos letras, por exemplo, passa a ser true

///// Input boundary assertion: ^, $ /////
//Os inputs de limite não consomem entrada, mas verifica se o valor está OBRIGATORIAMENTE no inicio ou no fim da expressão
// ^ - determina o inicio
// $ - determina o final
console.log("===== Input boundary assertion =======")
//Aqui determinamos que essa expressão precisa existir obrigatoriamente no final da string
let validarExtensao = /\.(?:pang|jpe?g|webp|avif|gif|pdf)$/
console.log(validarExtensao.test("doc.pdf"))
console.log(validarExtensao.test("image.jpg"))
console.log(validarExtensao.test("video.gif"))

//Diferentemente dessa que não determina que a validação é no final da string, mesmo que a expressão acontece no iicio da string(caso 2), ainda retorna true
let validarExtensao2 = /\.(?:pang|jpe?g|webp|avif|gif|pdf)/
console.log(validarExtensao2.test(".pdf")) //true - porque validou no regex, mesmo sendo um valor sozinho
console.log(validarExtensao2.test(".jpeg.image")) //true 
console.log(validarExtensao2.test("gif")) // false, porque não tem o . antes da extensao

//Aqui determinamos a expressão que deve acontecer no inicio da string, mesmo que o regex encontre no meio ou final, retornará false
let validarFamiliar = /^(Pai|Mãe|Irmão?|Filho|Filha) de \w+/
console.log(validarFamiliar.test("Mãe de Paulo")) //true 
console.log(validarFamiliar.test("Irmã de Maria e Fernanda")) //true
console.log(validarFamiliar.test("Pai")) //false
console.log(validarFamiliar.test("Vinicius Pai de Joaquim")) //false
console.log(validarFamiliar.test("Mateus Filho")) //false


///// Regex com caracteres especiais /////
//Podemos utilizar os caracteres especiais de verias formas
console.log("==============Caracter especial=============")
let ano = /\d\d\d\d/
console.log(ano.test('05')) //false - não tem digitos suficientes
console.log(ano.test('2019')) //true - tem o suficiente
console.log(ano.test('11092001')) // true - tem o suficiente (e excede)
console.log(ano.test('opa')) // false
console.log("=============================================")

let palavraTresLetras = /\w\w\w/
console.log(palavraTresLetras.test('bom')) //true
console.log(palavraTresLetras.test('dia')) //true
console.log(palavraTresLetras.test('oi')) //false
console.log(palavraTresLetras.test('teste')) //true

//Para incluir um caracter especial (como por exemplo as aspas (), ponto final (.) na verificação como algo que o usuario vai digitar, ou algo que precisa estar dentro da string da variavel , você precisa usar a barra invertida \ antes desse caracter. Segue o exemplo

let regexComCaracterEspecial =/\(\w+\)/
console.log('frase com caracter especial ' + regexComCaracterEspecial.test("(palavra)")) //true, porque tem incluiu o parenteses
console.log('frase com caracter especial ' + regexComCaracterEspecial.test("sem parenteses")) //false, porque nao tem parenteses


///// Operador plus + /////
//Quando um + está apo´s alguma expressão, este pode se repetir mais de uma vez
console.log("============= Operador plus + ===============")
let muitosOuPoucosDigitos = /\d+/
console.log(muitosOuPoucosDigitos.test('123')) //true
console.log(muitosOuPoucosDigitos.test('123654')) //true
console.log(muitosOuPoucosDigitos.test('')) //false - tem que haver pelo menos um digito


//O operador ? funciona para determinar que aquele caracter(independente do tipo) é opcional, ou seja, quando o regexp foi instanciado, se o resto da expressão estiver correta mas aquele caracter nao, tudo bem porque ele é opcional
//Esse operador impoe sua regra no caracter que vem antes dele. no exemplo a seguir, vai sobrecair na letra 'a' da palavra 'pamela'. Note que mesmo lendo a variavel que não contem o ultimo 'a' ainda retorna true. Porque esse caracter é opcional
console.log("============= Operador ? ===============")
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

///// Ococrrência precisa /////
//Inserir o número de ocorrencia entre {} e determinar o intervalo usando virgula. Por exemplo: \d{1,6}. Significa que precisam ser inseridos no minimo 1 digito e no maximo 6

//Para determinar intervalo a sintaxe é diferente. o intervalo se determina usando - entre os numeros. Por exemplo: \d{1-3}. Significa que o digito inserido tem que ser um valor ENTRE 1 e 3. 

console.log("========= Ococrrência precisa ===========")

let telefone = /\d{4,5}-\d{4}/
console.log(telefone.test('4404-5050'))//true 
console.log(telefone.test('99999-9999'))//true
console.log(telefone.test('999-999'))//false
console.log(telefone.test('9999-9'))//false- cumpriu a primeira expressão, mas nao cumpriu a segunda

///// Lookahead e lookbehind /////
//Vão tentar combinar a entrada subsequente (por isso lookahead, porque o codigo é lido da esquerda para a direita) com o padrão fornecido. Não consome nada da entrada
//Sintaxe (?=pattern) ou (?!pattern)(negação)
//Observe o exemplo
console.log("========= Lookahead ===========")
console.log(/^(?=.{3,16}$)([a-z0-9-_])/.test('ana22_')) //true


///// Metodo exec /////
//O metodo exec nos retorna um objeto com algumas infromações sobre a regex
//Se nada for encontrado, returna null

let teste = /\d+/.exec("O numero 100")
console.log(teste)
console.log(teste.index)
  
///// Metodo match /////
//O metodo match funciona de forma similar ao exec, porém com uma sintaxe diferente

let teste2 = 'O numero 200'.match(/\d+/)
console.log(teste2)
console.log(teste2.index)

///// Choice pattern /////
//Podemos colocar uma instrução na regex que funciona com um || (or) das condicionais
//Primeiro colocamos as opções dentro de um parenteses e as dividimos usando o operador ||. Como no exemplo abaixo

console.log("========= Choice pattern ===========")
let frutas = /\d+ (bananas|maçãs|laranjas)/
console.log(frutas.test('10 bananas'))//true
console.log(frutas.test('25 batatas'))//false
console.log(frutas.test('8 laranjas'))//true

let pessoa = /\w+: (Matheus|Pedro|João|Maria)/
console.log(pessoa.test('nome: Maria')) //true

///// Na pratica: validando um dominio /////
//Da seguinte forma, podemos validar um dominio:
console.log("========= validando um dominio ===========")
let validarDominio = /[www\.]?\w+(\.com|\.com\.br)/ //o barra invertida antes dos pontos sinalizando que eles devem ser escritos
console.log(validarDominio.test("www.google.com")) //true
console.log(validarDominio.test("www.google.br")) //false
console.log(validarDominio.test("teste.com")) //false

///// Na pratica: validando e-mail /////
//da seguinte forma, podemos validar um e-mail
console.log("========= validando um e-mail ===========")
let validarEmail = /\w+@\w+\.\w+/
console.log(validarEmail.test('pamela@hotmail.com')) //true
console.log(validarEmail.test('pamela@hotmail')) //false
console.log(validarEmail.test('pamela.hotmail.com')) //false

///// Na pratica: validando data de nascimento /////
//da seguinte forma, podemos validar uma data de nascimento
console.log("===== validando uma data de nascimento =====")
let validarDataNasc = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
console.log(validarDataNasc.test('25/12/1990')) //true
console.log(validarDataNasc.test('25/1/2016')) //false
console.log(validarDataNasc.test('23/04/2008')) //true
console.log(validarDataNasc.test('25-12-1990')) //false

