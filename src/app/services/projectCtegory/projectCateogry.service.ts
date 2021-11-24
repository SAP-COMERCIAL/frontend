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
        return this.http.get<projectCategoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'ProjectCategory/lista');
    }

    getProjectCateogryById(proyectoId : any) {
        return this.http.get<projectCategoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'ProjectCategory/' + proyectoId);
    }

    updateProjects(arrayToDb : any) {
        return this.http.put(environment.urlapi+environment.apiContextDrivers+'ProjectCategory/actualizar',arrayToDb);
    }

    insertProjects(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'ProjectCategory/registrar',arrayToDb);
    }

}
