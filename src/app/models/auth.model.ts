export interface AuthI {
    id: number;
    nombreusuario: string;
    correo: string;
    contrasegna: string;
    perfilid: number;
    perfil: string;
    token: string;
  }
  
  export class AuthC implements AuthI {
  
    id: number = null;
    nombreusuario = '';
    correo = '';
    contrasegna = '';
    perfilid = null;
    perfil = '';
    token = '';
  }