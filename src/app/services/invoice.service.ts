import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { invoiceModel } from 'src/app/models/invoice.model';
import { invoiceDetailModel } from 'src/app/models/invoice-detail.model';
import { environment } from 'src/environments/environment';
import { supplierActivityModel } from '../models/supplier-activity.model';

@Injectable({
    providedIn: 'root'
})

export class invoiceservice {

    constructor(protected http: HttpClient) { }

    getinvoiceAll() {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<invoiceModel[]>(environment.urlapi + environment.apiContextDrivers + 'Billing/lista', {headers});
    }

    getinvoiceDetailByProjectId(proyecto_id : number) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<invoiceDetailModel[]>(environment.urlapi + environment.apiContextDrivers + 'Billing/' + proyecto_id, {headers});
    }

    insertInvoice_Hdr(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Billing/registrar',arrayToDb, {headers});
    }

    insertInvoiceDetail(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Billing/registrar/detalle',arrayToDb, {headers});
    }

}