import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { reportMasterModel } from 'src/app/models/reportMaster.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class reportMasterservice { 
    constructor(protected http: HttpClient) { }

    getReportMasterAll() {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<reportMasterModel[]>(environment.urlapi + environment.apiContextDrivers + 'ReportMaster/lista', {headers});
    }

    getReportMasterById(id : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<reportMasterModel[]>(environment.urlapi + environment.apiContextDrivers + 'ReportMaster/' + id, {headers});
    }
}