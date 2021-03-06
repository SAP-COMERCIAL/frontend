import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { requisitionModel } from 'src/app/models/requisition.model';
import { requisitionModelDetail } from 'src/app/models/requisition.model.detail';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
    providedIn: 'root'
})

export class requisitionservice {

  constructor(protected http: HttpClient) { }

    getRequisitionAll() {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<requisitionModel[]>(environment.urlapi + environment.apiContextDrivers + 'InternalRequisition/lista', {headers});
    }

    getRequisitionById(id : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<requisitionModel[]>(environment.urlapi + environment.apiContextDrivers + 'InternalRequisition/' + id, {headers});
    }

    getRequisitionDetail(id : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<requisitionModelDetail[]>(environment.urlapi + environment.apiContextDrivers + 'InternalRequisition/detalle/' + id, {headers});
    }

    insertRequisition(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'InternalRequisition/registrar',arrayToDb, {headers});
    }

    insertRequisitionDetail(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'InternalRequisition/registrar/detalle',arrayToDb, {headers});
    }

    insertRequisitionCancel(id : any) {
        // return this.http.put(environment.urlapi + environment.apiContextDrivers + 'InternalRequisition/cancelar' + id);
    }

    updateRequisitionDetail(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi + environment.apiContextDrivers + 'InternalRequisition/actualizar/detalle', arrayToDb, {headers});
    }

}