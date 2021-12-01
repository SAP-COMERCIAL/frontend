import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { categoryModel } from 'src/app/models/category.model';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable({
    providedIn: 'root'
})

export class categoryservice {

  constructor(protected http: HttpClient) { }

    getCategoryAll() {
        return this.http.get<categoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'Category/lista');
    }

    getCategoryById(id : number) {
        return this.http.get<categoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'Category/' + id);
    }

    updateProjects(arrayToDb : any) {
        return this.http.put(environment.urlapi+environment.apiContextDrivers+'Category/actualizar',arrayToDb);
    }

    insertProjects(arrayToDb : any) {
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Category/registrar',arrayToDb);
    }
}
