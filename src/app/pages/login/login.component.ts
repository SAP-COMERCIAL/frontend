import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { loginservice } from '../../services/login/login.service';
import { UserI, UserC } from '../../models/users'; // './../../../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AESEncryptService } from 'src/app/services/aesencrypt.service';
import { ToastrService } from 'ngx-toastr';

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

  ngOnInit() {
    this.clearForm();
  }

  loginReq() {

    this.spinerShow = true;

    const pswdEncryp = this.cryptService.encrypt(this.loginform.value.contrasegna);

    this.loginform.value.contrasegna = pswdEncryp;

    this.authService.loginReq(this.loginform.value).subscribe(
      response => {
        
        localStorage.setItem('token_access', response.token);
        
        this.spinerShow = false;

        this.route.navigate(['/dashboard']);
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
      nombreusuario : ['', Validators.required],
      contrasegna : ['', Validators.required]
    });
  }
}
