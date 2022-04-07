import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { loginservice } from '../../services/login/login.service';
import { UserI, UserC } from '../../models/users'; // './../../../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AESEncryptService } from 'src/app/services/aesencrypt.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [loginservice]
})
export class LoginComponent implements OnInit {
  msg = '';
  public userinterface: UserI;
  public spinerShow: boolean; 
  ProveedorId : any;
  usuarioId : any;
  loginform: FormGroup;

  constructor(private service: loginservice,
    private routes: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: Router,
    private cryptService: AESEncryptService,
    private toastr: ToastrService,
    public _snackBar: MatSnackBar
    ) { 
      this.spinerShow = false;
      this.userinterface = new UserC();
    }

  ngOnInit() {
    this.clearForm();
  }

  loginReq() {

    this.spinerShow = true;

    const pswdEncryp = this.cryptService.encrypt(this.loginform.value.contrasegna);

    this.loginform.value.contrasegna = pswdEncryp;

    this.authService.loginReq(this.loginform.value).subscribe(
      response => {
        // localStorage.removeItem('token_access')
        localStorage.setItem('token_access', response.token);

        this.decode();
        
        this.spinerShow = false;

        if(this.ProveedorId.length == 0)
          this.route.navigate(['/dashboard']);
        else
          this.route.navigate(['/repseCapture']);
      },
      err => {
        if (err.status === 401) {
          this.toastr.error('Credenciales de acceso inválidas', 'ERROR');
        }

        if (err.status === 0 || err.status === 500) {
          this.toastr.error('No se puede comunicar con el servidor', 'ERROR');
        }

        this.openSnackBar('credenciales incorrectas', '');

        console.error(err);
        this.spinerShow = false;
      }
    );
  }

  clearForm() {
    this.loginform = this.formBuilder.group({
      nombreusuario : ['', Validators.required],
      contrasegna : ['', Validators.required]
    });

  }

  decode(){
    let token = localStorage.getItem('token_access');
    let decodeUser = jwt_decode(token)["usuario"];
    let decodeProveedorId = jwt_decode(token)["proveedor_id"];
    this.usuarioId = decodeUser;
    this.ProveedorId = decodeProveedorId
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration : 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: 'alert-snackbar'});
  }
}
