
// O — Open/Closed PrincipleO — Open/Closed Principle
//Una clase debe estar abierta para extenderse pero cerrada para modificarse.
//  Dicho simple: si necesitas agregar algo nuevo, no deberías tener que editar código que ya funciona.

export { };

class DiscountCalculator {

  calculate(client: Client, total: number): number {
    return client.getDiscountedTotal(total)
  }
}

interface Client {

  getDiscountedTotal(total: number): number;
}

class RegularClient implements Client {


  getDiscountedTotal(total: number): number {
    return total * 0.95;
  }
}

class VipClient implements Client {


  getDiscountedTotal(total: number): number {
    return total * 0.85;
  }
}

class EmployeeClient implements Client {


  getDiscountedTotal(total: number): number {
    return total * 0.70;
  }
}