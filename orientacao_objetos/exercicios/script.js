// exercicio 1
class BankAccount {
  constructor(balance) {
    this.balance = balance
  }
  withdraw(value) {
    this.balance -= value
  }
  deposit(value) {
    this.balance += value
  }
}

account1 = new BankAccount(1500)
console.log(account1.balance) // saldo inicial
account1.withdraw(600) //valor sacado
console.log(account1.balance) // saldo alterado
account1.deposit(300) //valor depositado
console.log(account1.balance) //saldo final

// exercicio 2
class ShoppingCart {
  constructor(items, totalAmount, totalBudget) {
    this.items = items
    this.totalAmount = totalAmount
    this.totalBudget = totalBudget
  }

  addItem(item) {
    let counter = 0

    for (let itemCart in this.items) {
      if (this.items[itemCart].id == item.id) {
        this.items[itemCart].qtd += item.qtd
        counter = 1
      }
    }

    if (counter == 0) {
      this.items.push(item)
    }

    this.totalAmount += item.qtd
    this.totalBudget += item.preco * item.qtd
  }

  removeItem(item) {
    for (let itemCart in this.items) {
      if (this.items[itemCart].id == item.id) {
        let obj = this.items[itemCart]
        let index = this.items.findIndex(function (obj) {
          return obj.id == item.id
        })

        this.totalAmount -= this.items[itemCart].qtd
        this.totalBudget -=
          this.items[itemCart].preco * this.items[itemCart].qtd

        this.items.splice(index, 1)
      }
    }
  }
}

let cart1 = new ShoppingCart(
  [
    {
      id: 1,
      nome: 'shirt',
      qtd: 1,
      preco: 20
    },
    {
      id: 2,
      nome: 'pants',
      qtd: 2,
      preco: 50
    }
  ],
  3,
  120
)

console.log(cart1)
cart1.addItem({ id: 1, nome: 'shirt', qtd: 2, preco: 20 })
cart1.addItem({ id: 3, nome: 'cap', qtd: 2, preco: 15 })
cart1.removeItem({ id: 1, nome: 'shirt', qtd: 1, preco: 20 })

console.log(cart1)

// exercicio 3
class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
  }
  set novaRua(novaRua) {
    this.rua = novaRua
  }
  set novoBairro(novoBairro) {
    this.bairro = novoBairro
  }
  set novaCidade(novaCidade) {
    this.cidade = novaCidade
  }
  set novoEstado(novoEstado) {
    this.estado = novoEstado
  }
}

let endereco1 = new Endereco(
  'Avenida Brasil',
  'Jardim Paulista',
  'São Paulo',
  'São Paulo'
)
console.log(endereco1)
endereco1.novaRua = 'Avenida Paulista'
console.log(endereco1)

// exercicio 4
class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca
    this.cor = cor
    this.gasolinaRestante = gasolinaRestante
    this.consumo = consumo
  }
  dirigir(km) {
    let litrosCosmumidos = km / this.consumo

    this.gasolinaRestante -= litrosCosmumidos
  }
  abastecer(l) {
    this.gasolinaRestante += l
  }
}

let carro1 = new Carro('VW', 'Cinza', 100, 10)
console.log(carro1)
carro1.dirigir(100)
carro1.abastecer(110)
console.log(carro1)

// exercicio 5
class ContaBancaria{
  constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
    this.saldoCorrente = saldoCorrente
    this.saldoPoupanca = saldoPoupanca
    this.jurosPoupanca = jurosPoupanca
  }
  deposito(valor){
    this.saldoCorrente += valor
  }
  saque(valor){
    this.saldoCorrente -= valor
  }
  transferencia(valor){
    this.saldoCorrente += valor
    this.saldoPoupanca -= valor
  }
  jurosDeAniversario(){
    let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100
    this.saldoPoupanca += juros
  }
}

class ContaEspecial extends ContaBancaria{
  constructor (saldoCorrente, saldoPoupanca, jurosPoupanca){
    super(saldoCorrente, saldoPoupanca, jurosPoupanca *2)
  }
}

let conta1 = new ContaBancaria(1000, 3000, 2)
conta1.jurosDeAniversario()
console.log(conta1)

let conta2 = new ContaEspecial(10000, 50000, 1)
conta2.jurosDeAniversario()
console.log(conta2)


//exercio 1 - extra - WordCounter *nao aceito
class WordCounter{
  constructor(){
  }
  countWords(string){
    let contador = 0
    let separador = string.split(' ')
    for(let i = 0; i < separador.length; i++){
      console.log(separador[i])
      contador++
    }
    return contador 
  }
}

obj2 = new WordCounter()
console.log(obj2.countWords('ado ado ado quem olhar pra mim é viado'))

