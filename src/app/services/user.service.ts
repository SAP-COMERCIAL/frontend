import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from './webapiurl';
import { environment } from 'src/environments/environment';
import { userAppModel } from '../models/userApp.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;

  constructor(private http: HttpClient) {
    // this.url = GlobalUrl.url_webapi;
    this.url = environment.urlapi + environment.apiContextDrivers
  }

  getUsersAll() {
    const headers : HttpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.get<userAppModel[]>(environment.urlapi + environment.apiContextDrivers + 'User/lista', {headers});
}

  getAllUser(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.get(this.url + 'empleado/listar/todos/', {headers});
  }

  getAllUserGP(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.get(this.url + 'empleado/listar/todos/nombres', {headers});
  }

  getAllEmployee(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.get(this.url + 'empleado/listar/brasil/', {headers});
  }

  postRegisterEmployee(employeeObj: any): Observable<any> {
    const params = JSON.stringify(employeeObj);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.post(this.url + 'empleado/registrar/', params, {headers});
  }

  postUpdateEmployee(employeeObj: any): Observable<any> {
    const params = JSON.stringify(employeeObj);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.post(this.url + 'empleado/actualizar/' + employeeObj.resourceid, params, {headers});
  }

  postDeleteEmployee(resourceid: any): Observable<any> {
    const params = JSON.stringify(resourceid);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.post(this.url + 'empleado/eliminar/' + resourceid, params, {headers});
  }

  postRegisterUser(userObj: any): Observable<any> {
    const params = JSON.stringify(userObj);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.post(this.url + 'empleado/registrar/usuario/', params, {headers});
  }

  postUpdateUser(userObj: any): Observable<any> {
    const params = JSON.stringify(userObj);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.post(this.url + 'empleado/actualizar/usuario/' + userObj.resourceid, params, {headers});
  }

  postDeleteUser(userid: any): Observable<any> {
    const params = JSON.stringify(userid);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.post(this.url + 'empleado/eliminar/usuario/' + userid, params, {headers});
  }

  getPermission(userid): Observable<any> {
    const params = JSON.stringify(userid);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.post(this.url + 'empleado/permiso/listar/' + userid, params, {headers});
  }

  getCountry(userid): Observable<any> {
    const params = JSON.stringify(userid);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.post(this.url + 'empleado/pais/listar/' + userid, params, {headers});
  }

  getSubProjectJoinUser(userid): Observable<any> {
    const params = JSON.stringify(userid);
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    return this.http.post(this.url + 'empleado/buscar_subproyecto/' + userid, params, {headers});
  }
}
