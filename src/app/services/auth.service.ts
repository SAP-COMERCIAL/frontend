import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalUrl } from 'src/app/services/webapiurl';
import { AuthI } from '../models/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth: AuthI;
  public url: string;

  constructor(private http: HttpClient) {
    // this.url = GlobalUrl.url_webapi;
    this.url = environment.urlapi + environment.apiContextDrivers
  }

  loginReq(auth: any): Observable<any> {
    return this.http.post(this.url + 'auth/login', auth);
  }

  resetPasswordReq(resetPasswordReq: any): Observable<any> {
    return this.http.post(this.url + 'auth/resetpasswordrequest', resetPasswordReq);
  }

  changePasswordReq(changePasswordReq: any): Observable<any> {
    return this.http.post(this.url + 'auth/changepassword', changePasswordReq);
  }
}