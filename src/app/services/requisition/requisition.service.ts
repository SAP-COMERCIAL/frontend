import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { requisitionModel } from 'src/app/models/requisition.model';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable({
    providedIn: 'root'
})

export class requisitionservice {

  constructor(protected http: HttpClient) { }

    getProjectAll() {
        return this.http.get<requisitionModel[]>(environment.urlapi + environment.apiContextDrivers + 'Project/lista');
    }

    updateProjects(arrayToDb : any) {
        return this.http.put(environment.urlapi+environment.apiContextDrivers+'Project/actualizar',arrayToDb);
    }

    insertProjects(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Project/registrar',arrayToDb);
    }

}