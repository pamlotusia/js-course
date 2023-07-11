//Todos os erros estarão comentados porque eu não os isolei por pagina. Enão pra execução do meu código não ser interrompida, eu os comentei 


///// Strict Mode /////
//ele obriga uma semantica ao código, como a declaração de variavel com let, var ou const obrigatorio
//assim, ele elimina vários erros silenciosos do código, disparando exceções e te fazendo tratar o erro
// um strict mode pode ser usado no código inteiro, basta declarar "use strict" ao topo do codigo. Se quiser usar apenas em uma função, por exemplo, basta declara-lo apenas dentro da função. 

/////debugger/////
//Funcionalidade que para o código quando atingir a linha debugger
//debugamos o código por meio do console, conseguimos visualizar os valores das variaveis apenas arrastando o mouse por cima, ou olhando os valores na interface. Usamos essa funcionalidade para observar o andamento do código
//A recomendação é usar o debugger quando for um erro sinistro, porque esquecer o debugger no codigo gera lentidão para o usuario

let a = 1
let b = 2

if (a == 1) {
  a = b + 2
// debugger comentando pra não pesar a página
}

for (let i = 0; i < b; i++) {
  a = a + 2
}
// debugger; 

a = a * b
//debugger

///// Tratamento de inout por função /////
//Não podemos controlar os dados que o usuario envia, então para o bom funcionamento do software, devemos tratar eles

function checarNumero(valor){
  let resultado = Number(valor)
  if(Number.isNaN(resultado)){
    return null
  } else {
    return resultado
  }
}
console.log(checarNumero(5))
console.log(checarNumero('teste'))

///// Exceptions /////
//Podemos criar erros no programa, caso alguma condição não seja atendida
// um Error costumiza um erro, ele aborta o programa e imprime uma mensagem personalizada

let valor = 2

if( valor != 2){
  throw new Error(`O valor não pode ser ${valor}`)
}

function saudacao(nome){
  if(typeof nome != 'string'){
    throw new Error("O parametro nome precisa ser string")
  } else {
    console.log(`Olá, ${nome}.`)
  }
}

saudacao("Pamela")
// saudacao(1516)

///// Try e Catch /////
//O bloco try catch, vai tentar executar um codigo, caso nao consiga ele pode retornar o erro que esse código gerou. Diferente do Error, ele não interrompe a execução do restante do código. Ele imprime o erro e segue em frente
//Muito útil para debug, muito utilizado

try {
  let a = 2 + y

} catch(e){
  console.log(e)
}
console.log('código que não foi interrompido')

///// Finally /////
//Finally é executada independente do resultado do try/catch
//e pode existir com try e catch ou apenas try

let texto = 'texto grande'
try {
  let palavra = texto
} catch(error){
  console.log(error)
} finally{
  console.log('Executou') //quando não tem erro, apenas imprime a mensagem do finally
}

///// Assertion /////
//Verificações no programa (usando sintaxe, não é exatamente uma função), que são utilizadas para assegurar que tudo ocorra da forma esperada

function percorrerArray(arr){
  if(arr.length == 0){
    throw new Error("O array precisa ter pelo menos um elemento")
  } else {
    for(let i = 0; i < arr.length ; i++){
      console.log(`Elemento ${arr[i]} na posição ${i}`)
    }
  }
}
arr1 = [1,2,3,4,5]
arr2 = []
percorrerArray(arr1)
percorrerArray(arr2) //imprimiu erro 