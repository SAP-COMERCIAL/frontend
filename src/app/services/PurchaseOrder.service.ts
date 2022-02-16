import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { poModel } from 'src/app/models/po.model';
import { environment } from 'src/environments/environment';
    
@Injectable({
    providedIn: 'root'
})

export class purchaseOrderservice {

  constructor(protected http: HttpClient) { }

    getPOAll() {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<poModel[]>(environment.urlapi + environment.apiContextDrivers + 'PurchaseOrder/lista', {headers});
    }

    getPOById(id : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<poModel[]>(environment.urlapi + environment.apiContextDrivers + 'PurchaseOrder/' + id, {headers});
    }

    getPODetail(id : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<poModel[]>(environment.urlapi + environment.apiContextDrivers + 'PurchaseOrder/detalle/' + id, {headers});
    }

    insertPO_Hdr(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'PurchaseOrder/registrar',arrayToDb, {headers});
    }

    insertPODetail(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'PurchaseOrder/registrar/detalle',arrayToDb, {headers});
    }

    putPOCancel(id : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'PurchaseOrder/cancelar/' + id, '', {headers});
    }

    updatePOStatus(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi + environment.apiContextDrivers + 'PurchaseOrder/estado', arrayToDb, {headers});
    }


}