
//Una clase debe tener una sola razón para cambiar. Dicho simple: una clase, una responsabilidad.

class UserManager {
  
  saveUser(name: string, email: string): void {
    console.log(`Guardando usuario ${name} en la BD`);
  }

  formatUserName(name: string): string {
    return name.trim().toLowerCase();
  }
}

class EmailManager{
    sendWelcomeEmail(email: string): void {
        console.log(`Enviando bienvenida a ${email}`);
    }   
}