
// O — Open/Closed PrincipleO — Open/Closed Principle
//Una clase debe estar abierta para extenderse pero cerrada para modificarse.
//  Dicho simple: si necesitas agregar algo nuevo, no deberías tener que editar código que ya funciona.

class DiscountCalculator {

  calculate(customerType: string, total: number): number {
    if (customerType === "regular") {
      return total * 0.95;
    } else if (customerType === "vip") {
      return total * 0.85;
    } else if (customerType === "employee") {
      return total * 0.70;
    }
    return total;
  }
}

class RegularClient{
    constructor(public total: number) {}

    getDiscountedTotal(): number {
        return this.total * 0.95;
    }
}

class VipClient{
    constructor(public total: number) {}

    getDiscountedTotal(): number {
        return this.total * 0.85;
    }
}

class EmployeeClient{
    constructor(public total: number) {}

    getDiscountedTotal(): number {
        return this.total * 0.70;
    }
}