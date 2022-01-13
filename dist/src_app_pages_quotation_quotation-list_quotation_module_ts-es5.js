(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_quotation_quotation-list_quotation_module_ts"], {
    /***/
    8112:
    /*!********************************************************************!*\
      !*** ./src/app/pages/quotation/quotation-list/quotation.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuotationModule": function QuotationModule() {
          return (
            /* binding */
            _QuotationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-chartist */
      14735);
      /* harmony import */


      var _quotation_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quotation.routing */
      22695);
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../demo-material-module */
      55408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _QuotationModule = function _QuotationModule() {
        _classCallCheck(this, _QuotationModule);
      };

      _QuotationModule.ɵfac = function QuotationModule_Factory(t) {
        return new (t || _QuotationModule)();
      };

      _QuotationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _QuotationModule
      });
      _QuotationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_quotation_routing__WEBPACK_IMPORTED_MODULE_0__.QuotationRoutes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_QuotationModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    22695:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/quotation/quotation-list/quotation.routing.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuotationRoutes": function QuotationRoutes() {
          return (
            /* binding */
            _QuotationRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _quotation_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quotation-list.component */
      65706);

      var _QuotationRoutes = [{
        path: '',
        component: _quotation_list_component__WEBPACK_IMPORTED_MODULE_0__.QuotationListComponent
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_quotation_quotation-list_quotation_module_ts-es5.js.map