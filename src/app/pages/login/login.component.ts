import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { loginservice } from '../../services/login/login.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [loginservice]
})
export class LoginComponent implements OnInit {
  msg = '';
  constructor(private service: loginservice, private routes: Router) { }

  check(uname: string, p: string) {
    const output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      console.log(output);
      this.routes.navigate(['/dashboard']);
    } else {  
      this.msg = 'Usuario o Clave inválido';
    }
  }

  ngOnInit() {}
}
