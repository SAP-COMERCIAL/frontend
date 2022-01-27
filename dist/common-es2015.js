(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["common"],{

/***/ 81723:
/*!******************************************************************!*\
  !*** ./src/app/pages/catcustomer/customer/customer.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerComponent": function() { return /* binding */ CustomerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var src_app_components_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/customer-detail/customer-detail.component */ 64339);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ 52541);










class CustomerComponent {
    constructor(dialog, _excelService, _customerservice) {
        this.dialog = dialog;
        this._excelService = _excelService;
        this._customerservice = _customerservice;
        // =================
        // DECLARACIONES
        // =================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.displayedColumns = ['id', 'nombre', 'direccion', 'rfc', 'estado', 'edit'];
    }
    // =================
    // PROCEDIMIENTOS
    // =================
    ngOnInit() {
        this.getcustomer();
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({
                nombre: element.nombre,
                direccion: element.direccion,
                RFC: element.rfc,
                estatus: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Clientes');
    }
    newcustomer(evetn) {
        console.log('Alta de cliente');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'CLIENTE',
            arrayData: null,
            requisicionId: 0
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            window.location.reload();
        });
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    // =================
    // UTILERIAS
    // =================
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
    // =================
    // SERVICIOS
    // =================
    getcustomer() {
        // Proyectos registrados
        this._customerservice.getcustomerAll().subscribe(res => {
            console.log('Clientes', res);
            this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.iterator();
            this.dataSourceShow.sort = this.sort;
        }, error => console.log("error consulta regiones", error));
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_1__.ExcelServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__.customerservice)); };
CustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], viewQuery: function CustomerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 29, vars: 0, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col20"], ["type", "text", "placeholder", "BUSCAR", 1, "form-control", "form-control-line", 3, "keyup"], [1, "col70"], [1, "col10"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CustomerComponent_Template_input_keyup_16_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_19_listener() { return ctx.descargarExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_22_listener($event) { return ctx.newcustomer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Nuevo Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: [".col10[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col20[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col30[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col70[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.colbuttons[_ngcontent-%COMP%]{\r\n    vertical-align: bottom;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbDEwe1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jb2wyMHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY29sMzB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNvbDcwe1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jb2xidXR0b25ze1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 22284:
/*!******************************************************!*\
  !*** ./src/app/pages/supplier/supplier.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierComponent": function() { return /* binding */ SupplierComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class SupplierComponent {
    constructor() { }
    ngOnInit() {
    }
}
SupplierComponent.ɵfac = function SupplierComponent_Factory(t) { return new (t || SupplierComponent)(); };
SupplierComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupplierComponent, selectors: [["app-supplier"]], decls: 2, vars: 0, template: function SupplierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "supplier works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map