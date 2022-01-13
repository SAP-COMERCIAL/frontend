import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { quotationListModel } from 'src/app/models/quotation-list.model';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Subject } from 'rxjs/Subject';

const headers : HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));

@Injectable({
    providedIn: 'root'
})

export class quotationservice {

  constructor(protected http: HttpClient) { }

    getQuotationAll() {
        return this.http.get<quotationListModel[]>(environment.urlapi + environment.apiContextDrivers + 'Quote/lista', {headers});
    }

    getQuotationById(id : any) {
        return this.http.get<quotationListModel[]>(environment.urlapi + environment.apiContextDrivers + 'Quote/' + id, {headers});
    }

    getQuotationDetail(id : any) {
        return this.http.get<quotationListModel[]>(environment.urlapi + environment.apiContextDrivers + 'Quote/detalle/' + id, {headers});
    }

    insertQuotation(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Quote/registrar',arrayToDb, {headers});
    }

    insertQuotationDetail(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Quote/registrar/detalle',arrayToDb, {headers});
    }

    insertQuotationCancel(id : any) {
        // return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Quotation/cancelar' + id);
    }

}