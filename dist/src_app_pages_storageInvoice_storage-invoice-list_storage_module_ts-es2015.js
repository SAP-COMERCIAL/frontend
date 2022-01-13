(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_storageInvoice_storage-invoice-list_storage_module_ts"],{

/***/ 50001:
/*!******************************************************************************!*\
  !*** ./src/app/pages/storageInvoice/storage-invoice-list/storage-routing.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageRoutes": function() { return /* binding */ StorageRoutes; }
/* harmony export */ });
/* harmony import */ var _storage_invoice_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage-invoice-list.component */ 3349);

const StorageRoutes = [{
        path: '',
        component: _storage_invoice_list_component__WEBPACK_IMPORTED_MODULE_0__.StorageInvoiceListComponent
    }];


/***/ }),

/***/ 94339:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/storageInvoice/storage-invoice-list/storage.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageModule": function() { return /* binding */ StorageModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 14735);
/* harmony import */ var _storage_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage-routing */ 50001);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../demo-material-module */ 55408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);








class StorageModule {
}
StorageModule.ɵfac = function StorageModule_Factory(t) { return new (t || StorageModule)(); };
StorageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StorageModule });
StorageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
            ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_storage_routing__WEBPACK_IMPORTED_MODULE_0__.StorageRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StorageModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_storageInvoice_storage-invoice-list_storage_module_ts-es2015.js.map