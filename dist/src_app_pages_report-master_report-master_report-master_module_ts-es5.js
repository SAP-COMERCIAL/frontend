(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_pages_report-master_report-master_report-master_module_ts"], {
    /***/
    99004:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/report-master/report-master/report-master.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportMasterComponent": function ReportMasterComponent() {
          return (
            /* binding */
            _ReportMasterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/helpers/excel-service.service */
      7363);

      var _ReportMasterComponent = /*#__PURE__*/function () {
        function _ReportMasterComponent(dialog, _excelService) {
          _classCallCheck(this, _ReportMasterComponent);

          this.dialog = dialog;
          this._excelService = _excelService; // =================
          // DECLARACIONES
          // =================
          // Para paginación

          this.pageIndex = 0;
          this.pageSize = 20;
          this.currentPage = 0;
          this.totalSize = 0;
          this.dataSourceShowX = [];
        }

        _createClass(_ReportMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getReporteMaestro();
          }
        }, {
          key: "descargarExcel",
          value: function descargarExcel() {
            console.log('Descargar a excel');
            var dataSourceShowToExcel = [];
            var contador = 0;
            var sumrateOriginal = 0;
            var sumcostActual = 0;
            var sumprojectAddedCost = 0;
            var sumporjectedActualCost = 0;
            var sumporjectedBalance = 0;
            this.dataSourceShowX.forEach(function (element) {
              switch (contador) {
                case 0:
                  dataSourceShowToExcel.push({
                    etiqueta: ' ',
                    '    ': '',
                    rateOriginal: 'Original Estimate',
                    '': '',
                    costActual: 'Actual Cost',
                    ' ': '',
                    projectAddedCost: 'Project Added',
                    '  ': '',
                    porjectedActualCost: 'PROJECTED ACTUAL COSTS AT COMPLETION',
                    '   ': '',
                    porjectedBalance: 'PROJECTED BALANCE AT COMPLETION'
                  });
                  contador++;
                  break;

                case 1:
                  dataSourceShowToExcel.push({
                    etiqueta: 'Etiqueta' + element.etiqueta,
                    '    ': '',
                    rateOriginal: element.rateOriginal,
                    '': '',
                    costActual: element.costActual,
                    ' ': '',
                    projectAddedCost: element.projectAddedCost,
                    '  ': '',
                    porjectedActualCost: element.porjectedActualCost,
                    '   ': '',
                    porjectedBalance: element.porjectedBalance
                  });
                  contador++;
                  break;

                default:
                  dataSourceShowToExcel.push({
                    etiqueta: 'Etiqueta' + element.etiqueta,
                    '    ': '',
                    rateOriginal: element.rateOriginal,
                    '': '',
                    costActual: element.costActual,
                    ' ': '',
                    projectAddedCost: element.projectAddedCost,
                    '  ': '',
                    porjectedActualCost: element.porjectedActualCost,
                    '   ': '',
                    porjectedBalance: element.porjectedBalance
                  });
                  break;
              }

              sumrateOriginal = sumrateOriginal + element.rateOriginal;
              sumcostActual = sumcostActual + element.rateOriginal;
              sumprojectAddedCost = sumprojectAddedCost + element.costActual;
              sumporjectedActualCost = sumporjectedActualCost + element.projectAddedCost;
              sumporjectedBalance = sumporjectedBalance + element.porjectedBalance;
            });
            dataSourceShowToExcel.push({
              etiqueta: '',
              '    ': '',
              rateOriginal: '',
              '': '',
              costActual: '',
              ' ': '',
              projectAddedCost: '',
              '  ': '',
              porjectedActualCost: '',
              '   ': '',
              porjectedBalance: ''
            });
            dataSourceShowToExcel.push({
              etiqueta: 'Contract Totals',
              '    ': '',
              rateOriginal: sumrateOriginal,
              '': '',
              costActual: sumcostActual,
              ' ': '',
              projectAddedCost: sumprojectAddedCost,
              '  ': '',
              porjectedActualCost: sumporjectedActualCost,
              '   ': '',
              porjectedBalance: sumporjectedBalance
            });
            dataSourceShowToExcel.push({
              etiqueta: '',
              '    ': '',
              rateOriginal: '',
              '': '',
              costActual: '',
              ' ': '',
              projectAddedCost: '',
              '  ': '',
              porjectedActualCost: '',
              '   ': '',
              porjectedBalance: ''
            });
            dataSourceShowToExcel.push({
              etiqueta: 'Subcontractors - Base Contract',
              '    ': '',
              rateOriginal: '0.00',
              '': '',
              costActual: '0.00',
              ' ': '',
              projectAddedCost: '0.00',
              '  ': '',
              porjectedActualCost: '0.00',
              '   ': '',
              porjectedBalance: '0.00'
            });
            dataSourceShowToExcel.push({
              etiqueta: 'Subcontractor Change Order Costs',
              '    ': '',
              rateOriginal: '0.00',
              '': '',
              costActual: '0.00',
              ' ': '',
              projectAddedCost: '0.00',
              '  ': '',
              porjectedActualCost: '0.00',
              '   ': '',
              porjectedBalance: '0.00'
            });
            dataSourceShowToExcel.push({
              etiqueta: '',
              '    ': '',
              rateOriginal: '',
              '': '',
              costActual: '',
              ' ': '',
              projectAddedCost: '',
              '  ': '',
              porjectedActualCost: '',
              '   ': '',
              porjectedBalance: ''
            });
            dataSourceShowToExcel.push({
              etiqueta: 'PROJECTED TOTAL COSTS',
              '    ': '',
              rateOriginal: '',
              '': '',
              costActual: '',
              ' ': '',
              projectAddedCost: '',
              '  ': '',
              porjectedActualCost: sumporjectedActualCost,
              '   ': '',
              porjectedBalance: sumporjectedBalance
            });

            this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Reporte Maestro');
          }
        }, {
          key: "cancel",
          value: function cancel(event) {}
        }, {
          key: "getReporteMaestro",
          value: function getReporteMaestro() {
            for (var i = 0; i < 10; i++) {
              this.dataSourceShowX.push({
                etiqueta: i,
                rateOriginal: i,
                costActual: i,
                projectAddedCost: i,
                porjectedActualCost: i,
                porjectedBalance: i
              });
            }

            console.log('asasasas', this.dataSourceShowX);
          }
        }]);

        return _ReportMasterComponent;
      }();

      _ReportMasterComponent.ɵfac = function ReportMasterComponent_Factory(t) {
        return new (t || _ReportMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_0__.ExcelServiceService));
      };

      _ReportMasterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ReportMasterComponent,
        selectors: [["app-report-master"]],
        decls: 15,
        vars: 0,
        consts: [[1, "card"], [1, "col20"], [1, "col70"], [1, "col10"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
        template: function ReportMasterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reporte maestro");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportMasterComponent_Template_button_click_8_listener() {
              return ctx.descargarExcel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Descargar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportMasterComponent_Template_button_click_11_listener($event) {
              return ctx.cancel($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancelar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    35565:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/report-master/report-master/report-master.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportMasterModule": function ReportMasterModule() {
          return (
            /* binding */
            _ReportMasterModule
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


      var _report_master_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./report-master.routing */
      49397);
      /* harmony import */


      var _demo_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../demo-material-module */
      55408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ReportMasterModule = function _ReportMasterModule() {
        _classCallCheck(this, _ReportMasterModule);
      };

      _ReportMasterModule.ɵfac = function ReportMasterModule_Factory(t) {
        return new (t || _ReportMasterModule)();
      };

      _ReportMasterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ReportMasterModule
      });
      _ReportMasterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_report_master_routing__WEBPACK_IMPORTED_MODULE_0__.ReportMasterRoutes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ReportMasterModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _demo_material_module__WEBPACK_IMPORTED_MODULE_1__.DemoMaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    49397:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/report-master/report-master/report-master.routing.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportMasterRoutes": function ReportMasterRoutes() {
          return (
            /* binding */
            _ReportMasterRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _report_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./report-master.component */
      99004);

      var _ReportMasterRoutes = [{
        path: '',
        component: _report_master_component__WEBPACK_IMPORTED_MODULE_0__.ReportMasterComponent
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_report-master_report-master_report-master_module_ts-es5.js.map