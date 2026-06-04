export { };

//D — Dependency Inversion Principle

//Los módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deberían depender de abstracciones.

class EmailNotifier implements Notifier {
    send(message: string): void {
        console.log(`Enviando email: ${message}`);
    }
}

interface Notifier {
    send(message: string): void;
}

class OrderService {
    private notifier: Notifier;
    
    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }
    placeOrder(product: string): void {
        console.log(`Pedido realizado: ${product}`);
        this.notifier.send(`Tu pedido de ${product} fue confirmado`);
    }
}

const emailNotifier = new EmailNotifier();

const order = new OrderService(emailNotifier);