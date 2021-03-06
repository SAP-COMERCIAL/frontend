import { Injectable } from '@angular/core';

import jwt_decode from "jwt-decode";
import { switchMapTo } from 'rxjs-compat/operator/switchMapTo';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string; 
}

// console.log('token-access', localStorage.getItem('token_access'));
// console.log('proveedor-access', jwt_decode((localStorage.getItem('token_access'))));
// let arrayprov = jwt_decode((localStorage.getItem('token_access')));
// console.log('arrayprov', arrayprov["proveedor_id"]);

  const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
    { state: 'project', name: 'Proyecto', type: 'link', icon: 'view_comfy' },
    { state: 'requisition', name: 'Requisiciones', type: 'link', icon: 'view_list' },
    { state: 'quotation', name: 'Cotizaciones', type: 'link', icon: 'web' },
    { state: 'po', name: 'Orden de compra', type: 'link', icon: 'tab' },
    // { state: 'storage', name: 'Almacén', type: 'link', icon: 'assignment_turned_in' },
    // { state: 'warehouse-review', name: 'Revisión en Almacén', type: 'link', icon: 'assignment_turned_in' },
    { state: 'customer', name: 'Clientes', type: 'link', icon: 'assignment_turned_in' },
    { state: 'supplier', name: 'Proveedores', type: 'link', icon: 'assignment_turned_in' },
    { state: 'reportMaster', name: 'Reportes', type: 'link', icon: 'assignment_turned_in' },
    { state: 'invoice', name: 'Captura de facturas', type: 'link', icon: 'tab' },
    // { state: 'repseCapture', name: 'Captura de proveedores', type: 'link', icon: 'assignment_turned_in' },
    // { state: 'repseReview', name: 'Revisión de proveedores', type: 'link', icon: 'assignment_turned_in' },
  
    // { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
    // { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
    // { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
    // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
    // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
    // { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
    // {
    //   state: 'expansion',
    //   type: 'link',
    //   name: 'Expansion Panel',
    //   icon: 'vertical_align_center'
    // },
    // { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
    // { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
    // {
    //   state: 'progress-snipper',
    //   type: 'link',
    //   name: 'Progress snipper',
    //   icon: 'border_horizontal'
    // },
    // {
    //   state: 'progress',
    //   type: 'link',
    //   name: 'Progress Bar',
    //   icon: 'blur_circular'
    // },
    // {
    //   state: 'dialog',
    //   type: 'link',
    //   name: 'Dialog',
    //   icon: 'assignment_turned_in'
    // },
    // { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
    // { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
    // { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
    // {
    //   state: 'slide-toggle',
    //   type: 'link',
    //   name: 'Slide Toggle',
    //   icon: 'all_inclusive'
    // }
  ];

  const MENUITEMS_REVISOR = [
    { state: 'supplier', name: 'Proveedores', type: 'link', icon: 'assignment_turned_in' },
  
  ];

  const MENUITEMS_PROV = [
    { state: 'repseCapture', name: 'Captura de proveedores', type: 'link', icon: 'assignment_turned_in' },
  
  ];

  const MENUITEMS_REPSE = [
    { state: 'supplier', name: 'Proveedores', type: 'link', icon: 'assignment_turned_in' },
    { state: 'repseReview', name: 'Revisión de proveedores', type: 'link', icon: 'assignment_turned_in' },
  ];

// decode(){
//   let token = localStorage.getItem('token_access');
//   this.decodedSign = jwt_decode(token)["firma"] + '?alt=media&token='; 
//   let decodeUser = jwt_decode(token)["usuario"];
//   let decodeId = jwt_decode(token);
// }



@Injectable()
export class MenuItems {
  getMenuitem(proveedor_id: string): Menu[] {

    // DECODIFICA
    let token = localStorage.getItem('token_access');
    this.decodedSign = jwt_decode(token)["firma"] + '?alt=media&token='; 
    let decodeUser = jwt_decode(token)["usuario"];
    let decodeId = jwt_decode(token);
    
    this.usuarioId = decodeUser;
    // this.getusers();
    
    // TERMINA DECODIFICA

    if(proveedor_id.length > 0 ){
      return MENUITEMS_PROV;
    }else{
      if(jwt_decode(token)["perfil_usuarioid"] == 1 || jwt_decode(token)["perfil_usuarioid"] == 2 ){
        return MENUITEMS;
      }
      
      if(jwt_decode(token)["perfil_usuarioid"] == 3 ){
        return MENUITEMS_PROV;
      }

      if(jwt_decode(token)["perfil_usuarioid"] == 4 ){
        return MENUITEMS_REPSE;
      }

      if(jwt_decode(token)["perfil_usuarioid"] == 5 ){
        return MENUITEMS_REVISOR;
      }

    }
      
  }

  decodedSign : any;
  usuarioId : any;


}
