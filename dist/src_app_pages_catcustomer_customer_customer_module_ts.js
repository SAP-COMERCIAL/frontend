(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_catcustomer_customer_customer_module_ts"],{

/***/ 53982:
/*!***************************************************************!*\
  !*** ./src/app/pages/catcustomer/customer/customer.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerModule": function() { return /* binding */ CustomerModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 14735);
/* harmony import */ var _customer_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.routing */ 62060);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../demo-material-module */ 55408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);








var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule.ɵfac = function CustomerModule_Factory(t) { return new (t || CustomerModule)(); };
    CustomerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerModule });
    CustomerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
                ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_customer_routing__WEBPACK_IMPORTED_MODULE_0__.CustomerRoutes)
            ]] });
    return CustomerModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 62060:
/*!****************************************************************!*\
  !*** ./src/app/pages/catcustomer/customer/customer.routing.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerRoutes": function() { return /* binding */ CustomerRoutes; }
/* harmony export */ });
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.component */ 81723);

var CustomerRoutes = [{
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_0__.CustomerComponent
    }];


/***/ })

}]);
//# sourceMappingURL=src_app_pages_catcustomer_customer_customer_module_ts.js.map