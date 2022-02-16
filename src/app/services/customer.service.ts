import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { customerModel } from 'src/app/models/customer.model';
import { environment } from 'src/environments/environment';
   
@Injectable({
    providedIn: 'root'
})

export class customerservice {

  constructor(protected http: HttpClient) { }

    getcustomerAll() {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
            
        return this.http.get<customerModel[]>(environment.urlapi + environment.apiContextDrivers + 'Customer/lista', {headers});
    }

    getcustomerById(id : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<customerModel[]>(environment.urlapi + environment.apiContextDrivers + 'Customer/' + id, {headers});
    }

    insertcustomer(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Customer/registrar',arrayToDb, {headers});
    }

    updatecustomer(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Customer/actualizar', arrayToDb, {headers});
    }

    putcustomerStatus(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Customer/activoinactivo', arrayToDb, {headers});
    }

}