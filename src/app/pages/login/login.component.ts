import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { loginservice } from '../../services/login/login.service';
import { UserI, UserC } from '../../models/users'; // './../../../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AESEncryptService } from 'src/app/services/aesencrypt.service';
import { ToastrService } from 'ngx-toastr';
import * as CryptoJS from 'crypto-js';
import * as shajs from 'sha.js';

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
  loginform: FormGroup;

  constructor(private service: loginservice,
    private routes: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: Router,
    private cryptService: AESEncryptService,
    private toastr: ToastrService
    ) { 
      this.spinerShow = false;
      this.userinterface = new UserC();
    }

  check(uname: string, p: string) {

    let encryptedMessage : string;
    let claves : any;

    claves = this.loginform.value
  
    console.log('aaa', claves.correo.trim(), claves.contrasegna.trim());
    // encryptedMessage = CryptoJS.AES.encrypt( claves.contrasegna.trim()).toString();
    // encryptedMessage = CryptoJS.createHmac('sha256', "key");
    // encryptedMessage = CryptoJS.HmacSha256Signature( claves.correo.trim(), claves.contrasegna.trim()).toString();
    // encryptedMessage = CryptoJS.HmacSha256Signature( this.loginform.value).toString(CryptoJS.enc.Base64);
//     var hash = CryptoJS.SHA256("123456789");
// ​         hash.toString(CryptoJS.enc.Base64)
//     console.log('encriptado',hash.toString(CryptoJS.enc.Base64));


  let hash = shajs('sha256').update('root' + claves.contrasegna.trim()).digest('hex');
  console.log(hash);

  this.routes.navigate(['/dashboard']);

    this.authService.loginReq(this.loginform.value).subscribe(
      response => {
        
        localStorage.setItem('token_access', response);
        this.spinerShow = false;
        this.routes.navigate(['/dashboard']);
      },
      err => {
        if (err.status === 401) {
          this.toastr.error('Credenciales de acceso inválidas', 'ERROR');
        }

        if (err.status === 0 || err.status === 500) {
          this.toastr.error('No se puede comunicar con el servidor', 'ERROR');
        }
        console.error(err);
        this.spinerShow = false;
      }
    );


    // const output = this.service.checkusernameandpassword(uname, p);
    // if (output == true) {
    //   console.log(output);
    //   this.routes.navigate(['/dashboard']);
    // } else {  
    //   this.msg = 'Usuario o Clave inválido';
    // }
  }

  ngOnInit() {
    this.clearForm();
  }

  loginReq() {

    this.spinerShow = true;

    // const pswdEncryp = this.cryptService.encrypt(this.loginForm.value.contrasegna);

    // this.loginForm.value.contrasegna = pswdEncryp;

    this.authService.loginReq(this.loginform.value).subscribe(
      response => {
        
        localStorage.setItem('token_access', response);
        this.spinerShow = false;
        this.route.navigate(['/tablero/estadistica']);
      },
      err => {
        if (err.status === 401) {
          this.toastr.error('Credenciales de acceso inválidas', 'ERROR');
        }

        if (err.status === 0 || err.status === 500) {
          this.toastr.error('No se puede comunicar con el servidor', 'ERROR');
        }
        console.error(err);
        this.spinerShow = false;
      }
    );
  }

  clearForm() {
    this.loginform = this.formBuilder.group({
      correo      : ['', Validators.required],
      contrasegna : ['', Validators.required]
    });
  }
}
