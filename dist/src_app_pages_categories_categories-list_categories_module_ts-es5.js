(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_categories_categories-list_categories_module_ts"], {
    /***/
    37025:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/categories/categories-list/categories.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesModule": function CategoriesModule() {
          return (
            /* binding */
            _CategoriesModule
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


      var _categories_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./categories.routing */
      37777);
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../demo-material-module */
      55408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CategoriesModule = function _CategoriesModule() {
        _classCallCheck(this, _CategoriesModule);
      };

      _CategoriesModule.ɵfac = function CategoriesModule_Factory(t) {
        return new (t || _CategoriesModule)();
      };

      _CategoriesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CategoriesModule
      });
      _CategoriesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_categories_routing__WEBPACK_IMPORTED_MODULE_0__.CategoriesRoutes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CategoriesModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    37777:
    /*!************************************************************************!*\
      !*** ./src/app/pages/categories/categories-list/categories.routing.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesRoutes": function CategoriesRoutes() {
          return (
            /* binding */
            _CategoriesRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _categories_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./categories-list.component */
      76208);

      var _CategoriesRoutes = [{
        path: '',
        component: _categories_list_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesListComponent
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_categories_categories-list_categories_module_ts-es5.js.map