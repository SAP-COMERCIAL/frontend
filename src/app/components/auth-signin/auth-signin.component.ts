import { Component, OnInit } from '@angular/core';
import { AuthC, AuthI } from '../../models/auth.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AESEncryptService } from '../../services/aesencrypt.service';
import { DataService } from '../../services/data.service';
import { UserService } from 'src/app/services/user.service';
import { PermissionI } from 'src/app/models/permission.model';

declare let alertify: any;

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.css']
})
export class AuthSigninComponent implements OnInit {

  public authmodel: AuthI;
  public permissionLst: PermissionI;
  signinForm: FormGroup;
  public spinerShow: boolean;

  constructor(
    private authservice: AuthService,
    private userS: UserService,
    private fb: FormBuilder,
    private route: Router,
    private cryptojs: AESEncryptService,
    private dataService: DataService,
  ) {
    this.spinerShow = false;
    this.authmodel = new AuthC();
  }

  ngOnInit() {
    this.clearForm();
  }

  signinReq() {

    this.spinerShow = true;

    const pswdEncryp = this.cryptojs.encrypt(this.signinForm.value.password);

    this.signinForm.value.password = pswdEncryp.substring(0, 50);

    this.authservice.loginReq(this.signinForm.value).subscribe(
      response => {
        localStorage.setItem('token_access', response.token);
        // Llama para guardar las variables en localstprage
        this.dataService.DecodeToken();

        this.spinerShow = false;
        // Notificacion de nuevo login
        this.dataService.loginChanged.emit(true);
        this.route.navigate(['/dashboard/analytics']);
      },
      err => {
        if (err.status === 401) {
          alertify.warning('Credenciales de acceso inválidas', 'ERROR');
        }

        if (err.status === 0 || err.status === 500) {
          alertify.error('No se puede comunicar con el servidor', 'ERROR');
        }
        console.error(err.error);
        this.spinerShow = false;
      }
    );
  }

  clearForm() {
    this.signinForm = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

}
