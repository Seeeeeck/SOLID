export {};

class PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount}`);
  }

  refund(amount: number): void {
    console.log(`Reembolsando $${amount}`);
  }
}

class CreditCard extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con tarjeta`);
  }

  refund(amount: number): void {
    console.log(`Reembolsando $${amount} a la tarjeta`);
  }
}

class CryptoPayment extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} en crypto`);
  }

  refund(amount: number): void {
    throw new Error("Crypto no admite reembolsos"); // 💥
  }
}

// El código que usa los pagos
function processRefund(payment: PaymentMethod, amount: number) {
  payment.refund(amount); // explota si es crypto
}