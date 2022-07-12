(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_purchaseOrder_po-list_po_module_ts"],{

/***/ 9213:
/*!**********************************************************!*\
  !*** ./src/app/pages/purchaseOrder/po-list/po.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoModule": function() { return /* binding */ PoModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 14735);
/* harmony import */ var _po_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./po.routing */ 45442);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../demo-material-module */ 55408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);








var PoModule = /** @class */ (function () {
    function PoModule() {
    }
    PoModule.ɵfac = function PoModule_Factory(t) { return new (t || PoModule)(); };
    PoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PoModule });
    PoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
                ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_po_routing__WEBPACK_IMPORTED_MODULE_0__.PoRoutes)
            ]] });
    return PoModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PoModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 45442:
/*!***********************************************************!*\
  !*** ./src/app/pages/purchaseOrder/po-list/po.routing.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoRoutes": function() { return /* binding */ PoRoutes; }
/* harmony export */ });
/* harmony import */ var _po_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./po-list.component */ 36127);

var PoRoutes = [{
        path: '',
        component: _po_list_component__WEBPACK_IMPORTED_MODULE_0__.PoListComponent
    }];


/***/ })

}]);
//# sourceMappingURL=src_app_pages_purchaseOrder_po-list_po_module_ts.js.map