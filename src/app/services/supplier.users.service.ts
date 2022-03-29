import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { supplierUsersModel } from 'src/app/models/supplier-users.model';
import { environment } from 'src/environments/environment';
    
@Injectable({
    providedIn: 'root'
})

export class supplyusersservice {

  constructor(protected http: HttpClient) { }

    getsupplyUsersAll() {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<supplierUsersModel[]>(environment.urlapi + environment.apiContextDrivers + 'Provider/lista', {headers});
    }

    insertsupplyUser(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'User/registrar',arrayToDb, {headers});
    }

    updatesupplyUser(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'User/actualizar', arrayToDb, {headers});
    }

    putsupplyUserStatus(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Provider/activoinactivo', arrayToDb, {headers});
    }




}