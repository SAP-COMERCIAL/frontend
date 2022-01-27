import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { customerModel } from 'src/app/models/customer.model';
import { environment } from 'src/environments/environment';

const headers : HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
    
@Injectable({
    providedIn: 'root'
})

export class customerservice {

  constructor(protected http: HttpClient) { }

    getcustomerAll() {
        return this.http.get<customerModel[]>(environment.urlapi + environment.apiContextDrivers + 'Customer/lista', {headers});
    }

    getcustomerById(id : any) {
        return this.http.get<customerModel[]>(environment.urlapi + environment.apiContextDrivers + 'Customer/' + id, {headers});
    }

    insertcustomer(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Customer/registrar',arrayToDb, {headers});
    }

    updatecustomer(arrayToDb : any) {
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Customer/actualizar', arrayToDb, {headers});
    }

    putcustomerStatus(arrayToDb : any) {
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Customer/activoinactivo', arrayToDb, {headers});
    }

}