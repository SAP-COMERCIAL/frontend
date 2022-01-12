import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { quotationListModel } from 'src/app/models/quotation-list.model';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable({
    providedIn: 'root'
})

export class quotationservice {

  constructor(protected http: HttpClient) { }

    getQuotationAll() {
        return this.http.get<quotationListModel[]>(environment.urlapi + environment.apiContextDrivers + 'Quote/lista');
    }

    getQuotationById(id : any) {
        return this.http.get<quotationListModel[]>(environment.urlapi + environment.apiContextDrivers + 'Quote/' + id);
    }

    getQuotationDetail(id : any) {
        return this.http.get<quotationListModel[]>(environment.urlapi + environment.apiContextDrivers + 'Quote/detalle/' + id);
    }

    insertQuotation(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Quote/registrar',arrayToDb);
    }

    insertQuotationDetail(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Quote/registrar/detalle',arrayToDb);
    }

    insertQuotationCancel(id : any) {
        // return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Quotation/cancelar' + id);
    }

}