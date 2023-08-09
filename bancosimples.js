/*  PROJETO DE BANCO SIMPLES FEITO PÔR @github.com/andreabrao  COPIA E COLE NO VSCODE E RODE ATRAVÉS DO CONSOLE DO PROGRAMA   */


//COMO FUNCIONA?
/*Simule um depósito de 1000 reais na variável deposito logo e seguida no console, irá aparecer uma string dizendo Seu saldo é de R$1000. Faça um saque de 500 reais na variável saquei note que na variável saque irá fazer um subtração nas variáveis conta, saquei e transferencia, depois dessa conta irá atualizar o seu saldo atual de 1000 reais vai ser 500 reais. Efetue uma transferência de 400 reais na variável transferencia, na variável transfBancaria irá fazer uma subestação de saque menos transferencia que irá novamente atualizar o seu saldo atual passando a ser 100 reais*/


//CONTA CORRENTE + variáveis
const minhaConta = 0
const deposito = 1000
const saquei = 500
const transferencia = 400
const conta = deposito + minhaConta
const saque = conta - saquei - transferencia
const transfBancaria = saque - transferencia


//SE CONTA É NOVA DEPOSITE UM VALOR - SE / SENÃO / ENTÃO
if(conta <= 0) {
  console.log("Deposite um valor!")
}else {
  console.log("Seu saldo é de R$" + saque)
}


//EXTRATO BANCÁRIO - SE / SENÃO / ENTÃO
if(deposito > 0) {
  console.log("Extrato do mês")
  console.log("Depósito de R$" + deposito)
}
if(saquei > 0) {
  console.log("Saque de R$" + saquei)
}
if(transferencia > 0) {
  console.log("Transferência de R$" + transferencia)
}
