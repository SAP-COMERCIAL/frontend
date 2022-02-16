import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { projectCategoryModel } from 'src/app/models/projectCategory.model';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
    providedIn: 'root'
})

export class projectCategoryservice {

  constructor(protected http: HttpClient) { }

    getProjectCateogryAll() {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<projectCategoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'ProjectCategory/lista', {headers});
    }

    // getProjectCateogryById(proyectoId : any) {
    //     return this.http.get<projectCategoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'ProjectCategory/' + proyectoId);
    // }

    getProjectCateogryById(proyectoId : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<projectCategoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'ProjectCategory/' + proyectoId, {headers});
    }

    updateProjectCatgory(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi+environment.apiContextDrivers+'ProjectCategory/actualizar',arrayToDb, {headers});
    }

    insertProjects(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'ProjectCategory/registrar',arrayToDb, {headers});
    }

}
