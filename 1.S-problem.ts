class UserManager {
  saveUser(name: string, email: string): void {
    console.log(`Guardando usuario ${name} en la BD`);
  }

  sendWelcomeEmail(email: string): void {
    console.log(`Enviando bienvenida a ${email}`);
  }

  formatUserName(name: string): string {
    return name.trim().toLowerCase();
  }
}