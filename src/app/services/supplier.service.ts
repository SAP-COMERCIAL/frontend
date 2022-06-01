import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { supplierModel } from 'src/app/models/supplier.model';
import { environment } from 'src/environments/environment';
import { supplierActivityModel } from '../models/supplier-activity.model';
    
@Injectable({
    providedIn: 'root'
})

export class supplyservice {

  constructor(protected http: HttpClient) { }

    getsupplyAll() {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<supplierModel[]>(environment.urlapi + environment.apiContextDrivers + 'Provider/lista', {headers});
    }

    getsupplyById(id : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<supplierModel[]>(environment.urlapi + environment.apiContextDrivers + 'Provider/' + id, {headers});
    }

    insertsupply(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Provider/registrar',arrayToDb, {headers});
    }

    updatesupply(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Provider/actualizar', arrayToDb, {headers});
    }

    putsupplyStatus(arrayToDb : any) {

        console.log('graba', arrayToDb);

        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Provider/activoinactivo', arrayToDb, {headers});
    }

    postDocument(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Document/subir', arrayToDb, {headers});
    }

    getsupplyActivityByYear(supplier_id: any, year : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<supplierActivityModel[]>(environment.urlapi + environment.apiContextDrivers + 'Provider/actividad/' + supplier_id + '/' + year, {headers});
    }

    insertsupplyActivity(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Provider/registrar/actividad',arrayToDb, {headers});
    }

    updatesupplyActivity(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Provider/actualizar/actividad', arrayToDb, {headers});
    }

}