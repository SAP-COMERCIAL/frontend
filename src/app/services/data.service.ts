import { Injectable, EventEmitter } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
    providedIn: 'root'
})

export class DataService {

  public userid: string;
  public username: string;
  public fullname: string;
  public email: string;
  public branchofficeid: string;
  public branchoffice: string;
  public profileid: string;
  public profile: string;
  public employid: string;
  public employcategory: string;
  public companyid: string;
  public country: string;

  loginChanged = new EventEmitter<boolean>();

    constructor(
    ) {
      this.DecodeToken();
    }

    public DecodeToken() {

      if (localStorage.getItem('token_access') !== null) {
        const decodeJWT = jwt_decode(localStorage.getItem('token_access'));

        this.userid = decodeJWT['usuario_id'];
        this.username = decodeJWT['usuario'];
        this.fullname = decodeJWT['nombre_completo'];
        this.email = decodeJWT['correo'];
        this.branchofficeid = decodeJWT['oficina_principalid'];
        this.branchoffice = decodeJWT['oficina_principal'];
        this.profileid = decodeJWT['perfil_usuarioid'];
        this.profile = decodeJWT['perfil_usuario'];
        this.employid = decodeJWT['empleado_id'];
        this.employcategory = decodeJWT['categoria_empleado'];
        this.companyid = decodeJWT['empresa'];
        this.country = decodeJWT['pais'];

        localStorage.setItem('perfil_usuario', this.profile);
      }
    }

}
