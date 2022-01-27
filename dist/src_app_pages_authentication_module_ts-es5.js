(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_authentication_module_ts"], {
    /***/
    75702:
    /*!********************************************************!*\
      !*** ./src/app/pages/authentication-routing.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationRoutingModule": function AuthenticationRoutingModule() {
          return (
            /* binding */
            _AuthenticationRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: 'login',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./login/login.module */
            21053)).then(function (module) {
              return module.LoginModule;
            });
          }
        } //   ,
        //   {
        //     path: 'reset-password',
        //     loadChildren: () => import('./auth-reset-password/auth-reset-password.module').then(module => module.AuthResetPasswordModule)
        //   }
        ]
      }];

      var _AuthenticationRoutingModule = function _AuthenticationRoutingModule() {
        _classCallCheck(this, _AuthenticationRoutingModule);
      };

      _AuthenticationRoutingModule.ɵfac = function AuthenticationRoutingModule_Factory(t) {
        return new (t || _AuthenticationRoutingModule)();
      };

      _AuthenticationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AuthenticationRoutingModule
      });
      _AuthenticationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AuthenticationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    97799:
    /*!************************************************!*\
      !*** ./src/app/pages/authentication.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationModule": function AuthenticationModule() {
          return (
            /* binding */
            _AuthenticationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authentication-routing.module */
      75702);
      /* harmony import */


      var _catcustomer_customer_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./catcustomer/customer/customer.component */
      81723);
      /* harmony import */


      var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./supplier/supplier.component */
      22284);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AuthenticationModule = function _AuthenticationModule() {
        _classCallCheck(this, _AuthenticationModule);
      };

      _AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) {
        return new (t || _AuthenticationModule)();
      };

      _AuthenticationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AuthenticationModule
      });
      _AuthenticationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AuthenticationModule, {
          declarations: [_catcustomer_customer_customer_component__WEBPACK_IMPORTED_MODULE_1__.CustomerComponent, _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_2__.SupplierComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_authentication_module_ts-es5.js.map