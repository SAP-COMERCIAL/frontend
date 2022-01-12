import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { poModel } from 'src/app/models/po.model';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
    providedIn: 'root'
})

export class purchaseOrderservice {

  constructor(protected http: HttpClient) { }

    getPOAll() {
        return this.http.get<poModel[]>(environment.urlapi + environment.apiContextDrivers + 'PurchaseOrder/lista');
    }

    getPOById(id : any) {
        return this.http.get<poModel[]>(environment.urlapi + environment.apiContextDrivers + 'PurchaseOrder/' + id);
    }

    getPODetail(id : any) {
        return this.http.get<poModel[]>(environment.urlapi + environment.apiContextDrivers + 'PurchaseOrder/detalle/' + id);
    }

    insertPO_Hdr(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'PurchaseOrder/registrar',arrayToDb);
    }

    insertPODetail(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'PurchaseOrder/registrar/detalle',arrayToDb);
    }

    insertPOCancel(id : any) {
        // return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Quotation/cancelar' + id);
    }

}