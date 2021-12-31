import { Injectable } from '@angular/core';
import { UserI } from  '../models/users';
import { HttpClient } from '@angular/common/http';
import { GlobalUrl } from './webapiurl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLoginReq: UserI;
  public url: string;
  token;

  constructor(private http: HttpClient) {
    this.url = GlobalUrl.url_webapi;
  }

  loginReq(userLoginReq: any): Observable<any> {
    return this.http.post(this.url + 'login/authenticate', userLoginReq);
  }

  resetPasswordReq(resetPasswordReq: any): Observable<any> {
    return this.http.post(this.url + 'login/resetpassword', resetPasswordReq);
  }

  changePasswordReq(changePasswordReq: any): Observable<any> {
    return this.http.put(this.url + 'login/changepassword', changePasswordReq);
  }
}
