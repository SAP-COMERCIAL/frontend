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
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<categoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'Category/lista', {headers});
    }

    getCategoryById(id : number) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get<categoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'Category/' + id, {headers});
    }

    updateProjects(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(environment.urlapi+environment.apiContextDrivers+'Category/actualizar',arrayToDb, {headers});
    }

    insertProjects(arrayToDb : any) {
        const headers : HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(environment.urlapi+environment.apiContextDrivers+'Category/registrar',arrayToDb, {headers});
    }
}
