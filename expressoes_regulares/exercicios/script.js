// exercicio 1
let letrasMaiusculas = /[A-Z]/  
console.log(letrasMaiusculas.test("Hoje é domingo")) //true
console.log(letrasMaiusculas.test("hoje é domingo")) //false

// exercicio 2
let id = /\d+ID\b/
console.log(id.test("123ID")) //true
console.log(id.test("ID123")) //false

// exercicio 3
let nomeMarca = /Marca: (Nike|Adidas|Puma|Asics)/
console.log(nomeMarca.test("Marca: Nike")) //true
console.log(nomeMarca.test("Marca: New Balance")) //false
console.log(nomeMarca.test("Brand: Puma")) //false

// exercicio 4
let validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/
console.log(validarIp.test("127.0.0.1")) //true
console.log(validarIp.test("8.8.8.8")) //true
console.log(validarIp.test("192.168.0.62")) //true
console.log(validarIp.test("192.168.0")) //false
console.log(validarIp.test("192.168.0456245.44785414")) //false

// exercicio 5
let validaUsuario = /^(?=.{3,16}$)([a-z0-9-_])/
console.log(validaUsuario.test('pamela_22'))
console.log(validaUsuario.test('asjmdkdkdk123654'))
console.log(validaUsuario.test('asjmdkdkdk1236547'))