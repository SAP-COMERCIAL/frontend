(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_projects_project-capture_project_module_ts"],{

/***/ 26693:
/*!******************************************************************!*\
  !*** ./src/app/pages/projects/project-capture/project.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectModule": function() { return /* binding */ ProjectModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 14735);
/* harmony import */ var _project_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.routing */ 41377);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../demo-material-module */ 55408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





// import { ProjectCaptureComponent } from './project-capture.component';



var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule.ɵfac = function ProjectModule_Factory(t) { return new (t || ProjectModule)(); };
    ProjectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProjectModule });
    ProjectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
                ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_project_routing__WEBPACK_IMPORTED_MODULE_0__.ProjectRoutes)
            ]] });
    return ProjectModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProjectModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 41377:
/*!*******************************************************************!*\
  !*** ./src/app/pages/projects/project-capture/project.routing.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectRoutes": function() { return /* binding */ ProjectRoutes; }
/* harmony export */ });
/* harmony import */ var _project_capture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-capture.component */ 16826);

var ProjectRoutes = [{
        path: '',
        component: _project_capture_component__WEBPACK_IMPORTED_MODULE_0__.ProjectCaptureComponent
    }];


/***/ })

}]);
//# sourceMappingURL=src_app_pages_projects_project-capture_project_module_ts.js.map