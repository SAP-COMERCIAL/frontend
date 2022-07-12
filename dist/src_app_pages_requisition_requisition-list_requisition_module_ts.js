(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_requisition_requisition-list_requisition_module_ts"],{

/***/ 60008:
/*!**************************************************************************!*\
  !*** ./src/app/pages/requisition/requisition-list/requisition.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitionModule": function() { return /* binding */ RequisitionModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 14735);
/* harmony import */ var _requisition_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requisition.routing */ 48080);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../demo-material-module */ 55408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);








var RequisitionModule = /** @class */ (function () {
    function RequisitionModule() {
    }
    RequisitionModule.ɵfac = function RequisitionModule_Factory(t) { return new (t || RequisitionModule)(); };
    RequisitionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RequisitionModule });
    RequisitionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
                ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_requisition_routing__WEBPACK_IMPORTED_MODULE_0__.RequisitionRoutes)
            ]] });
    return RequisitionModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RequisitionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 48080:
/*!***************************************************************************!*\
  !*** ./src/app/pages/requisition/requisition-list/requisition.routing.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitionRoutes": function() { return /* binding */ RequisitionRoutes; }
/* harmony export */ });
/* harmony import */ var _requisition_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requisition-list.component */ 1678);

var RequisitionRoutes = [{
        path: '',
        component: _requisition_list_component__WEBPACK_IMPORTED_MODULE_0__.RequisitionListComponent
    }];


/***/ })

}]);
//# sourceMappingURL=src_app_pages_requisition_requisition-list_requisition_module_ts.js.map