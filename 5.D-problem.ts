export {};


//D — Dependency Inversion Principle

//Los módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deberían depender de abstracciones.

class EmailNotifier {
  send(message: string): void {
    console.log(`Enviando email: ${message}`);
  }
}

class OrderService {
  private notifier = new EmailNotifier(); // 💥 amarrado a email

  placeOrder(product: string): void {
    console.log(`Pedido realizado: ${product}`);
    this.notifier.send(`Tu pedido de ${product} fue confirmado`);
  }
}