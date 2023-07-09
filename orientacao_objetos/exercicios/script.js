// exercicio 1  
class BankAccount{
  constructor(balance){
    this.balance = balance
  }
  set withdraw(value){
    this.balance = this.balance - value
  }
  set deposit(value){
    this.balance = this.balance + value 
  }
}

account1 = new BankAccount(1500)
console.log(account1.balance)// saldo inicial
console.log(account1.withdraw = 600) //valor sacado
console.log(account1.balance)// saldo alterado

console.log(account1.deposit = 300) //valor depositado
console.log(account1.balance) //saldo final

// exercicio 2
// exercicio 3 
// exercicio 4
// exercicio 5