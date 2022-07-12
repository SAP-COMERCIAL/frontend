(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_authentication_module_ts"],{

/***/ 75702:
/*!********************************************************!*\
  !*** ./src/app/pages/authentication-routing.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRoutingModule": function() { return /* binding */ AuthenticationRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



var routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 21053)).then(function (module) { return module.LoginModule; }); }
            }
            //   ,
            //   {
            //     path: 'reset-password',
            //     loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then(module => module.AuthResetPasswordModule)
            //   }
        ]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule.ɵfac = function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); };
    AuthenticationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
    AuthenticationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
    return AuthenticationRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 97799:
/*!************************************************!*\
  !*** ./src/app/pages/authentication.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": function() { return /* binding */ AuthenticationModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 75702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
    AuthenticationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
    AuthenticationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule
            ]] });
    return AuthenticationModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthenticationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_authentication_module_ts.js.map