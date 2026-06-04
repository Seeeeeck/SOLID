export {};
// I — Interface Segregation PrincipleI — Interface Segregation Principle

//Ninguna clase debería verse obligada a implementar métodos que no usa.

interface Human {
  eat(): void;
  sleep(): void;
}

interface Work{
  work():void;
}

class HumanWorker implements Human,Work{
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

class RobotWorker implements Work{
  work(): void {
    console.log("Trabajando sin parar...");
  }

}