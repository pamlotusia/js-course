console.log(typeof 13)
console.log(typeof 24)
console.log(typeof 52)

console.log(typeof Infinity)
console.log('frase \n grande')
console.log(typeof 'frase \n grande')

console.log(10 > 2)
console.log(typeof (10 > 2))

console.log( "5 === '5'", 5 === '5')
console.log( "10 > 2", 10 > 2 )

// com strings os operadores funcionam diferente, para dar true o conteudo tem que ser igual mesmo usando == 
console.log('string fofa' == 'string show') 
console.log('string fofa' == 'string fofa') 


console.log( true && false)
console.log("5*2 == 10 && 2*4 ==0", 5*2 == 10 && 2*4 ==0)
console.log('rosa' == 'azul' || 5 > 5)
console.log(false && false )
console.log(!(!(true && true)))

//operadores ternarios fazem comparativos em apenas uma linha de codigo
//mais utilizado em estruturas de if else
console.log(true ? 1 : 2)
console.log(false ? 'false' : 'verdadeiro')
console.log(3 + 3 == 6 ? 'show' : 'ruim')

// exercicios da seção 
console.log('frase 1')
console.log("frase 2")
console.log(`o resultado da soma 2 + 3 é ${2 +3}`)
console.log('frase grande pra caramba \n tão grande que não coube na mesma linha')

console.log(2)
console.log(3.5)
console.log(24 / 4 * 8 +3 -6) //primeiro divide, depois multiplica, em seguida soma e por ultimo subtrai; nao importa a ordem da escrita; essa é a ordem padrao, se quiser modificar precisa usar () para isolar as operações
console.log(24 % 4)
console.log(typeof 56)

console.log('andre' === 'silva') //false
console.log(2 >= 7) //false
console.log( 6*3 == 18) //true
console.log('andre' != 'silva') //true

console.log(!(2 + 2 ==4 && 5 + 6 ==10)) //true; ele vai fazer a comparação e vai negar o resultado; como usei o operador && era pra retornar false, porque um dos lados é false, porem como eu neguei o resultado com o !, retornou true
console.log('bom dia' == 'bom dia' && 'boa tarde' =='boa tarde')//true
console.log(10 +12 == 22 || 1500*0 == 1500) //true; porque a primeira operação retorna true, enquanto a outra retorna false
console.log(!(!(10 > 20 || 50>60))) //false; retorna false na primeira vez porque nenhuma das operações é true, depois nega o resultado dando true, e por fim nega mais uma vez dando false

console.log(2 / 'oi')// NaN