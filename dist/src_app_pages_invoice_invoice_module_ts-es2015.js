(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_invoice_invoice_module_ts"],{

/***/ 21259:
/*!*************************************************!*\
  !*** ./src/app/pages/invoice/invoice.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceModule": function() { return /* binding */ InvoiceModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 14735);
/* harmony import */ var _invoice_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.routing */ 35191);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../demo-material-module */ 55408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);








class InvoiceModule {
}
InvoiceModule.ɵfac = function InvoiceModule_Factory(t) { return new (t || InvoiceModule)(); };
InvoiceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InvoiceModule });
InvoiceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
            ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_invoice_routing__WEBPACK_IMPORTED_MODULE_0__.InvoiceRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InvoiceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 35191:
/*!**************************************************!*\
  !*** ./src/app/pages/invoice/invoice.routing.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceRoutes": function() { return /* binding */ InvoiceRoutes; }
/* harmony export */ });
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.component */ 91046);

const InvoiceRoutes = [{
        path: '',
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_0__.InvoiceComponent
    }];


/***/ })

}]);
//# sourceMappingURL=src_app_pages_invoice_invoice_module_ts-es2015.js.map