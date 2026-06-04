export {};
// L — Liskov Substitution PrincipleL — Liskov Substitution Principle

//Si tienes una clase hija, debería poder reemplazar a la clase padre sin romper nada.

interface Payable {
  pay(amount: number): void;
}

interface Refundable{
    refund(amount:number):void;
}

class CreditCard   implements Payable,Refundable {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con tarjeta`);
  }

  refund(amount: number): void {
    console.log(`Reembolsando $${amount} a la tarjeta`);
  }
}

class CryptoPayment  implements Payable {
  pay(amount: number): void {
    console.log(`Pagando $${amount} en crypto`);
  }

 
}

// El código que usa los pagos
function processRefund(payment:Refundable, amount: number) {
  payment.refund(amount); // explota si es crypto
}
let creditcard=new CreditCard()

processRefund(creditcard,2000);