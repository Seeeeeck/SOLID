export {};


// I — Interface Segregation PrincipleI — Interface Segregation Principle

//Ninguna clase debería verse obligada a implementar métodos que no usa.

interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class HumanWorker implements Worker {
  work(): void {
    console.log("Trabajando...");
  }
  eat(): void {
    console.log("Comiendo...");
  }
  sleep(): void {
    console.log("Durmiendo...");
  }
}

class RobotWorker implements Worker {
  work(): void {
    console.log("Trabajando sin parar...");
  }
  eat(): void {
    throw new Error("Los robots no comen"); // 💥
  }
  sleep(): void {
    throw new Error("Los robots no duermen"); // 💥
  }
}