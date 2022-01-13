import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { projectCategoryModel } from 'src/app/models/projectCategory.model';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Subject } from 'rxjs/Subject';

const headers : HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));

@Injectable({
    providedIn: 'root'
})

export class projectCategoryservice {

  constructor(protected http: HttpClient) { }

    getProjectCateogryAll() {
        return this.http.get<projectCategoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'ProjectCategory/lista', {headers});
    }

    // getProjectCateogryById(proyectoId : any) {
    //     return this.http.get<projectCategoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'ProjectCategory/' + proyectoId);
    // }

    getProjectCateogryById(proyectoId : any) {
        return this.http.get<projectCategoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'ProjectCategory/' + proyectoId, {headers});
    }

    updateProjectCatgory(arrayToDb : any) {
        return this.http.put(environment.urlapi+environment.apiContextDrivers+'ProjectCategory/actualizar',arrayToDb, {headers});
    }

    insertProjects(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'ProjectCategory/registrar',arrayToDb, {headers});
    }

}
