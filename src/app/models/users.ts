export interface UserI {
    id: number;
    perfil: number;
    fraccionamiento_id: number;
    nombre_perfil: string;
    nombre_completo: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    foto: string;
    correo: string;
    telefono: string;
    contrasegna: string;
    token: string;
    estado: number;
    nombre_estado: string;
  }
  
  export class UserC implements UserI {
    id: number = null;
    perfil: number = null;
    fraccionamiento_id: number = null;
    nombre_perfil: string = '';
    nombre_completo: string = '';
    nombre: string = '';
    apellido_paterno: string = '';
    apellido_materno: string = '';
    foto: string = '';
    correo: string = '';
    telefono: string = '';
    contrasegna: string = '';
    token: string = '';
    estado: number = null;
    nombre_estado: string = '';
  }
  
  