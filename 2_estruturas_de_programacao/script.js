let nome = 'Pamela'

console.log(nome)
console.log(typeof nome)
console.log(`Meu nome é ${nome}`)

// let idade = prompt("Qual a sua idade?")
//console.log(idade)

//alert("Mensagem importante");

// A biblioteca Math é nativa do JS e contem diversos metodos para utilizar
let maior = Math.max(1,2,35,6);
console.log(maior);

let menor = Math.min(12,33,3,66);
console.log(menor)

let arredondar = Math.round(5.2934777);
console.log(arredondar)

let arredondaParaCima = Math.ceil(5.2934777)
console.log(arredondaParaCima)

//Como as funções são nativas, você pode apenas chama-las normalmente, sem precisar atribui-las a uma variavel (Apenas para testes, casos especificos, etc etc)
console.log(Math.ceil(23.364))