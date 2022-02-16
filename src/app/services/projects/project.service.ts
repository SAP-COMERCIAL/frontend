import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { projectModel } from 'src/app/models/project.model';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
    providedIn: 'root'
})

export class projectservice {

  constructor(protected http: HttpClient) { }

    getProjectAll() {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
            
        return this.http.get<projectModel[]>(environment.urlapi + environment.apiContextDrivers + 'Project/lista', {headers});
    }

    updateProjects(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi+environment.apiContextDrivers+'Project/actualizar',arrayToDb, {headers});
    }

    insertProjects(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Project/registrar',arrayToDb, {headers});
    }

}
