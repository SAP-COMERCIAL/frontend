import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { documentModel } from 'src/app/models/document.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';
import { RepseReviewBimestralComponent } from 'src/app/components/repse-supplier-review-detail/repse-review-bimestral/repse-review-bimestral.component';
import { startWith } from 'rxjs-compat/operator/startWith';

firebase.initializeApp(environment.firebaseConfig);


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/generales");

  constructor(protected http: HttpClient) { }

  async subirImagen(nombre: string, imgBase64: any, grupoImagen: string, ProveedorId: number, anio: number, mes: number) {

    switch (grupoImagen) {
      case ('generales'): this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/generales" + '/' + anio + '/' + mes + '/' + ProveedorId);
        break;
      case ('mensuales'): this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/mensuales" + '/' + anio + '/' + mes + '/' + ProveedorId);
        break;
      case ('bimestrales'): this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/bimestrales" + '/' + anio + '/' + mes + '/' + ProveedorId);
        break;
      case ('cuatrimestrales'): this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/cuatrimestrales" + '/' + anio + '/' + mes + '/' + ProveedorId);
        break;
      case ('papeleriaCCM'): this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/papeleriaCCM" + '/' + anio + '/' + mes + '/' + ProveedorId);
        break;
      default: this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/generales" + '/' + ProveedorId);
        break;
    }

    try {

      let respuesta = await this.storareRef.child(nombre).putString(imgBase64, 'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
      return null;
    }

  }

  async getFiles(nombre: string, grupoImagen: string) {
    let ProveedorId: number = 1
    let anio: number = 0
    let mes: number = 0
    switch (grupoImagen) {
      case ('generales'): this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/generales" + '/' + ProveedorId);
        break;
      case ('mensuales'): this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/mensuales" + '/' + anio + '/' + mes + '/' + ProveedorId);
        break;
      case ('bimestrales'): this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/bimestrales" + '/' + anio + '/' + mes + '/' + ProveedorId);
        break;
      case ('cuatrimestrales'): this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/cuatrimestrales" + '/' + anio + '/' + mes + '/' + ProveedorId);
        break;
      default: this.storareRef = firebase.app().storage("gs://sap-comercial.appspot.com").ref("documentos/generales" + '/' + ProveedorId);
        break;
    }

    try {

      let respuesta = await this.storareRef.child(nombre).getDownloadURL();
      return await respuesta;
    } catch (err) {
      console.log(err);
      return null;
    }


    return this.http.get<any[]>(environment.urlapi + environment.apiContextDrivers + 'Provider/lista');
  }

postUploadDocumentsToDb(arrayToDb : any){
  const headers : HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
  return this.http.post(environment.urlapi + environment.apiContextDrivers + 'Document/subir', arrayToDb, {headers});
}

postDocumentosAprobarRechazar(arrayToDb : any){
    const headers : HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
  return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Document/estado', arrayToDb, {headers});
}

getdocumentsAll() {
  const headers : HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
  return this.http.get<documentModel[]>(environment.urlapi + environment.apiContextDrivers + 'Document/lista', {headers});
}

  postUploadFile(FileData): Promise<string> {
    //     let headers = new HttpHeaders({
    //       'Content-Type': 'multipart/form-data'
    //    });
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'multipart/form-data')
      .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));

    let options = {
      headers: headers
    }


    //    const data= this.http.post<response>(environment.urlstorage+'documentos/generales',FileData, {headers}).toPromise();
    //   return data.then(response => response.url)
    const data = this.http.post<response>('https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/documentos/generales', FileData, { headers }).toPromise();
    return data.then(response => response.url)
    //     const data= this.http.post<response>('https://sap-comercial.appspot.com/'+'documentos/generales',FileData, {headers}).toPromise();
    //   return data.then(response => response.url)
  }

 
}
class response {
  url: string
}
