(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/spinner.component */ 23812);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-toastr */ 19699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/header/header.component */ 21183);
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ 2991);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-material-module */ 55408);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/spinner.component */ 23812);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _components_categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/categories/categories/categories.component */ 60465);
/* harmony import */ var _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/categories/categories-list/categories-list.component */ 76208);
/* harmony import */ var _app_components_project_capture_detail_project_capture_detail_project_capture_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/components/project-capture-detail/project-capture-detail/project-capture-detail.component */ 52132);
/* harmony import */ var _app_pages_projects_project_capture_project_capture_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/pages/projects/project-capture/project-capture.component */ 16826);
/* harmony import */ var _pages_requisition_requisition_list_requisition_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/requisition/requisition-list/requisition-list.component */ 1678);
/* harmony import */ var _components_requisitions_requisition_detail_requisition_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/requisitions/requisition-detail/requisition-detail.component */ 67027);
/* harmony import */ var _pages_quotation_quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/quotation/quotation-list/quotation-list.component */ 65706);
/* harmony import */ var _pages_purchaseOrder_po_list_po_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/purchaseOrder/po-list/po-list.component */ 36127);
/* harmony import */ var _pages_storageInvoice_storage_invoice_list_storage_invoice_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/storageInvoice/storage-invoice-list/storage-invoice-list.component */ 3349);
/* harmony import */ var _components_quotations_quotation_detail_quotation_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/quotations/quotation-detail/quotation-detail.component */ 71168);
/* harmony import */ var _components_quotations_quotation_detail_files_quotation_detail_files_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/quotations/quotation-detail-files/quotation-detail-files.component */ 37204);
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/auth/auth.component */ 688);
/* harmony import */ var _pages_warehouse_review_warehouse_review_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/warehouse-review/warehouse-review.component */ 85023);
/* harmony import */ var _components_po_detail_po_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/po-detail/po-detail.component */ 23019);
/* harmony import */ var _components_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/auth-signin/auth-signin.component */ 36682);
/* harmony import */ var _components_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/customer-detail/customer-detail.component */ 64339);
/* harmony import */ var _components_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/supplier-detail/supplier-detail.component */ 72382);
/* harmony import */ var _pages_catcustomer_customer_customer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/catcustomer/customer/customer.component */ 81723);
/* harmony import */ var _pages_supplier_supplier_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/supplier/supplier.component */ 22284);
/* harmony import */ var _pages_repse_supplier_capture_repse_supplier_capture_repse_supplier_capture_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/repse-supplier-capture/repse-supplier-capture/repse-supplier-capture.component */ 30560);
/* harmony import */ var _pages_repse_supplier_review_repse_supplier_review_repse_supplier_review_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/repse-supplier-review/repse-supplier-review/repse-supplier-review.component */ 50709);
/* harmony import */ var _components_repse_supplier_review_detail_repse_supplier_review_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/repse-supplier-review-detail/repse-supplier-review-detail.component */ 3073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 37716);













// import { LoginComponent } from './pages/login/login.component';  
































// import { Notification } from './components/notification/notification.component/notification.component.component';
// import { NotificationComponent } from './components/notification/notification/notification.component' 
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_31__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_31__.PathLocationStrategy
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__.FlexLayoutModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_36__.HttpClientModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_40__.MatInputModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_41__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_42__.ToastrModule.forRoot({
                timeOut: 5000,
                positionClass: 'toast-bottom-center',
                preventDuplicates: true,
            })
            // RouterModule.forRoot(AppRoutingModule, {useHash: true}) // AppRoutes
        ], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__.FullComponent,
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_3__.AppHeaderComponent,
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent,
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.AppSidebarComponent,
        _components_categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_8__.CategoriesComponent,
        // LoginComponent,
        _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_9__.CategoriesListComponent,
        _app_components_project_capture_detail_project_capture_detail_project_capture_detail_component__WEBPACK_IMPORTED_MODULE_10__.ProjectCaptureDetailComponent,
        _app_pages_projects_project_capture_project_capture_component__WEBPACK_IMPORTED_MODULE_11__.ProjectCaptureComponent,
        _pages_requisition_requisition_list_requisition_list_component__WEBPACK_IMPORTED_MODULE_12__.RequisitionListComponent,
        _components_requisitions_requisition_detail_requisition_detail_component__WEBPACK_IMPORTED_MODULE_13__.RequisitionDetailComponent,
        _pages_quotation_quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_14__.QuotationListComponent,
        _pages_purchaseOrder_po_list_po_list_component__WEBPACK_IMPORTED_MODULE_15__.PoListComponent,
        _pages_storageInvoice_storage_invoice_list_storage_invoice_list_component__WEBPACK_IMPORTED_MODULE_16__.StorageInvoiceListComponent,
        _components_quotations_quotation_detail_quotation_detail_component__WEBPACK_IMPORTED_MODULE_17__.QuotationDetailComponent,
        _components_quotations_quotation_detail_files_quotation_detail_files_component__WEBPACK_IMPORTED_MODULE_18__.QuotationDetailFilesComponent,
        _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_19__.AuthComponent,
        _pages_warehouse_review_warehouse_review_component__WEBPACK_IMPORTED_MODULE_20__.WarehouseReviewComponent,
        _components_po_detail_po_detail_component__WEBPACK_IMPORTED_MODULE_21__.PoDetailComponent,
        _components_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_22__.AuthSigninComponent,
        _components_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_23__.CustomerDetailComponent,
        _components_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_24__.SupplierDetailComponent,
        _pages_catcustomer_customer_customer_component__WEBPACK_IMPORTED_MODULE_25__.CustomerComponent,
        _pages_supplier_supplier_component__WEBPACK_IMPORTED_MODULE_26__.SupplierComponent,
        _pages_repse_supplier_capture_repse_supplier_capture_repse_supplier_capture_component__WEBPACK_IMPORTED_MODULE_27__.RepseSupplierCaptureComponent,
        _pages_repse_supplier_review_repse_supplier_review_repse_supplier_review_component__WEBPACK_IMPORTED_MODULE_28__.RepseSupplierReviewComponent,
        _components_repse_supplier_review_detail_repse_supplier_review_detail_component__WEBPACK_IMPORTED_MODULE_29__.RepseSupplierReviewDetailComponent
        // ,
        // Notification.ComponentComponent,
        // NotificationComponent
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__.FlexLayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_36__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_40__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_41__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.ReactiveFormsModule,
        _app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_42__.ToastrModule], exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule] }); })();


/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);
/* harmony import */ var _src_app_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/app/components/auth/auth.component */ 688);
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guards */ 86649);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 24902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







const routes = [
    {
        path: '',
        component: _src_app_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent,
        children: [
            {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full'
            },
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/authentication.module */ 97799)).then(module => module.AuthenticationModule)
                // loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule)
            }
        ]
    },
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(m => m.DashboardModule)
            },
            {
                path: 'project',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_projects_project-capture_project_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/projects/project-capture/project.module */ 26693)).then(m => m.ProjectModule)
            },
            {
                path: 'categories',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_categories_categories-list_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/categories/categories-list/categories.module */ 37025)).then(m => m.CategoriesModule)
            },
            {
                path: 'requisition',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_requisition_requisition-list_requisition_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/requisition/requisition-list/requisition.module */ 60008)).then(m => m.RequisitionModule)
            },
            {
                path: 'quotation',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_quotation_quotation-list_quotation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/quotation/quotation-list/quotation.module */ 8112)).then(m => m.QuotationModule)
            },
            {
                path: 'po',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_purchaseOrder_po-list_po_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/purchaseOrder/po-list/po.module */ 9213)).then(m => m.PoModule)
            },
            {
                path: 'storage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_storageInvoice_storage-invoice-list_storage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/storageInvoice/storage-invoice-list/storage.module */ 94339)).then(m => m.StorageModule)
            },
            {
                path: 'customer',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_catcustomer_customer_customer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/catcustomer/customer/customer.module */ 53982)).then(m => m.CustomerModule)
            },
            {
                path: 'supplier',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_supplier_supplier_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/supplier/supplier.module */ 16247)).then(m => m.SupplierModule)
            },
            {
                path: 'reportMaster',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_report-master_report-master_report-master_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/report-master/report-master/report-master.module */ 35565)).then(m => m.ReportMasterModule)
            },
            {
                path: 'repseCapture',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_repse-supplier-capture_repse-supplier-capture_repse-supplier-capture_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/repse-supplier-capture/repse-supplier-capture/repse-supplier-capture.module */ 20472)).then(m => m.RepseSupplierCaptureModule)
            },
            {
                path: 'repseReview',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_repse-supplier-review_repse-supplier-review_repse-supplier-review_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/repse-supplier-review/repse-supplier-review/repse-supplier-review.module */ 45215)).then(m => m.RepseSupplierReviewModule)
            },
            {
                path: 'login',
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
            }
        ],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 36682:
/*!*****************************************************************!*\
  !*** ./src/app/components/auth-signin/auth-signin.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSigninComponent": function() { return /* binding */ AuthSigninComponent; }
/* harmony export */ });
/* harmony import */ var _models_auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/auth.model */ 67312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 73071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_aesencrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/aesencrypt.service */ 25405);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ 52468);









class AuthSigninComponent {
    constructor(authservice, userS, fb, route, cryptojs, dataService) {
        this.authservice = authservice;
        this.userS = userS;
        this.fb = fb;
        this.route = route;
        this.cryptojs = cryptojs;
        this.dataService = dataService;
        this.spinerShow = false;
        this.authmodel = new _models_auth_model__WEBPACK_IMPORTED_MODULE_0__.AuthC();
    }
    ngOnInit() {
        this.clearForm();
    }
    signinReq() {
        this.spinerShow = true;
        const pswdEncryp = this.cryptojs.encrypt(this.signinForm.value.password);
        this.signinForm.value.password = pswdEncryp.substring(0, 50);
        this.authservice.loginReq(this.signinForm.value).subscribe(response => {
            localStorage.setItem('token_access', response.token);
            // Llama para guardar las variables en localstprage
            this.dataService.DecodeToken();
            this.spinerShow = false;
            // Notificacion de nuevo login
            this.dataService.loginChanged.emit(true);
            this.route.navigate(['/dashboard/analytics']);
        }, err => {
            if (err.status === 401) {
                alertify.warning('Credenciales de acceso inválidas', 'ERROR');
            }
            if (err.status === 0 || err.status === 500) {
                alertify.error('No se puede comunicar con el servidor', 'ERROR');
            }
            console.error(err.error);
            this.spinerShow = false;
        });
    }
    clearForm() {
        this.signinForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
}
AuthSigninComponent.ɵfac = function AuthSigninComponent_Factory(t) { return new (t || AuthSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_aesencrypt_service__WEBPACK_IMPORTED_MODULE_3__.AESEncryptService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService)); };
AuthSigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AuthSigninComponent, selectors: [["app-auth-signin"]], decls: 2, vars: 0, template: function AuthSigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "auth-signin works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, styles: [".col10[_ngcontent-%COMP%]{\n    width: 10%;\n    vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImF1dGgtc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sMTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */"] });


/***/ }),

/***/ 688:
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": function() { return /* binding */ AuthComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);


class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 1, vars: 0, consts: [["name", "primary"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet", 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 60465:
/*!**************************************************************************!*\
  !*** ./src/app/components/categories/categories/categories.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": function() { return /* binding */ CategoriesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/projectCtegory/projectCateogry.service */ 7799);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 38583);























function CategoriesComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ACTIVAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriesComponent_td_8_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function CategoriesComponent_td_8_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const element_r19 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.ActivarDesactivar(element_r19.activo, $event); })("ngModelChange", function CategoriesComponent_td_8_Template_mat_checkbox_ngModelChange_1_listener($event) { const element_r19 = ctx.$implicit; return element_r19.activo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", element_r19.activo)("ngModel", element_r19.activo);
} }
function CategoriesComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "N\u00FAmero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r25.codigo_proyectocategoria, " ");
} }
function CategoriesComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r26.nombre_categoria, " ");
} }
function CategoriesComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Responable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_td_17_Template_input_ngModelChange_4_listener($event) { const element_r27 = ctx.$implicit; return element_r27.responsable = $event; })("keyup", function CategoriesComponent_td_17_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.checkEnterKey($event, "responsable"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r27.responsable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", element_r27.responsable)("ngModel", element_r27.responsable);
} }
function CategoriesComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Presupuesto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_td_20_Template_input_ngModelChange_5_listener($event) { const element_r31 = ctx.$implicit; return element_r31.presupuesto = $event; })("keyup", function CategoriesComponent_td_20_Template_input_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.checkEnterKey($event, "presupuesto"); })("blur", function CategoriesComponent_td_20_Template_input_blur_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.onBlurMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, element_r31.presupuesto));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", element_r31.presupuesto)("ngModel", element_r31.presupuesto);
} }
function CategoriesComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Fecha incial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dateChange", function CategoriesComponent_td_23_Template_input_dateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.checkEnterKey($event, "fecha"); })("ngModelChange", function CategoriesComponent_td_23_Template_input_ngModelChange_6_listener($event) { const element_r36 = ctx.$implicit; return element_r36.fecha_inicial = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-datepicker-toggle", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-datepicker", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 5, element_r36.fecha_inicial, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r37)("ngModel", element_r36.fecha_inicial);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("startAt", element_r36.fecha_inicial);
} }
function CategoriesComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Almacen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoriesComponent_td_26_Template_mat_select_ngModelChange_2_listener($event) { const element_r41 = ctx.$implicit; return element_r41.almacen_id = $event; })("selectionChange", function CategoriesComponent_td_26_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r43.seleccionaAlmacen($event, "almacen"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "SELECCIONA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "California");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Norte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Centro");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", element_r41.almacen_id);
} }
function CategoriesComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actualizar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriesComponent_td_29_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const element_r45 = restoredCtx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r46.save(element_r45, element_r45.responsable, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoriesComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 49);
} }
function CategoriesComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 50);
} }
class CategoriesComponent {
    constructor(dialogRef, data, snackBar, _projectCategoryservice, formBuilder, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this._projectCategoryservice = _projectCategoryservice;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.almacen_id = '1';
        this.fecha_inicial = moment__WEBPACK_IMPORTED_MODULE_0__(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
        this.proyecto_id = 0;
        this.responsableEdicion = '';
        this.presupuestoEdicion = '';
        this.activoEdicion = true;
        this.almacenEdicion = '';
        this.fechaEdicion = moment__WEBPACK_IMPORTED_MODULE_0__(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
        this.presupuesto = 0;
        this.activo = true;
        this.displayedColumns = ['select', 'codigo_proyectocategoria', 'nombre_categoria', 'responsable', 'presupuesto', 'fecha_inicial', 'almacen_id', 'actualizar'];
        this.projectInfo = data.arrayData;
        this.projectId = data.projectId;
        //   this.newProject = this.formBuilder.group({
        //     responsable: new FormControl(''),
        //     presupuesto: new FormControl(''),
        //     fecha_inicial: new FormControl('', Validators.required),
        //     almacen_id: new FormControl(''),
        //     activo: new FormControl('')
        // });
    }
    ngOnInit() {
        let arrayPoryectoActual = [];
        arrayPoryectoActual = this.projectInfo.filteredData.filter(e => e.proyecto_id == this.projectId);
        this.presupuestoTotal = arrayPoryectoActual[0]['presupuesto_proyecto'];
        this.presupuestoRestante = this.presupuestoTotal;
        this.getproyectosCategorias();
    }
    getproyectosCategorias() {
        // Proyectos categorias
        this._projectCategoryservice.getProjectCateogryById(this.projectId).subscribe(res => {
            // console.log('this.datasourceProjectCategories.filteredData["responsable"]', this.datasourceProjectCategories.filteredData["responsable"]);
            console.log('Proyectos', res);
            this.datasourceProjectCategories = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.datasourceProjectCategories.sort = this.sort;
            // this.newProject.controls["responsable"].setValue = this.datasourceProjectCategories.filteredData["responsable"];
        }, error => console.log("error consulta regiones", error));
    }
    ActivarDesactivar(element, event) {
        this.activoEdicion = event["checked"];
        console.log('Actualiza registro de activar y desactivar', event["checked"]);
    }
    save(element, camporesponsable, event) {
        let arraySaveData;
        console.log('element', element);
        console.log('ENTRADA', event);
        arraySaveData = { proyectocategoria_id: element.proyectocategoria_id,
            codigo_proyectocategoria: element.codigo_proyectocategoria,
            presupuesto: (this.presupuestoEdicion != '') ? this.presupuestoEdicion : element.presupuesto //this.newProject.controls["presupuesto"].value
            ,
            responsable: (this.responsableEdicion != '') ? this.responsableEdicion : element.responsable //this.newProject.controls["responsable"].value
            ,
            fecha_inicial: (this.fechaEdicion != '') ? this.fechaEdicion : moment__WEBPACK_IMPORTED_MODULE_0__(element.fecha_inicial, 'YYYY-MM-DD').format('YYYY-MM-DD'),
            almacen_id: (this.almacenEdicion != '') ? this.almacenEdicion : element.almacen_id.toString(),
            activo: this.activoEdicion // (this.activoEdicion != false) ? this.activoEdicion : element.activo
        };
        console.log('datos a actualizar', arraySaveData);
        this.insertProjectCategoryDet(arraySaveData);
        // Limpia variables
        this.responsableEdicion = '';
        this.presupuestoEdicion = '';
        this.fechaEdicion = '';
    }
    checkEnterKey(event, campo) {
        switch (campo) {
            case 'responsable':
                this.responsableEdicion = event.target.value;
                break;
            case 'presupuesto':
                this.presupuestoEdicion = event.target.value;
                break;
            case 'fecha':
                this.fechaEdicion = moment__WEBPACK_IMPORTED_MODULE_0__(event.target.value, 'YYYY-MM-DD').format('YYYY-MM-DD');
                break;
            default:
                this.responsableEdicion = '';
                break;
        }
        console.log('filtro', this.responsableEdicion);
    }
    onBlurMethod(event) {
        let x = event.target.value;
        let CalculaPresupuesto = 0;
        let presupuestoCategoria = 0;
        this.tabla1["_data"].forEach(element => {
            presupuestoCategoria = parseInt(element.presupuesto);
            CalculaPresupuesto = CalculaPresupuesto + presupuestoCategoria;
        });
        this.presupuestoRestante = this.presupuestoTotal - CalculaPresupuesto;
    }
    insertProjectCategoryDet(arrayToDb) {
        // Inserta Proyecto Categoria
        this._projectCategoryservice.updateProjectCatgory(arrayToDb).subscribe(res => {
            console.log('ACTUALIZA PROYECO CATEGORIA', arrayToDb);
            this.openSnackBar('El registro se actualizó con éxito', '');
        }, error => console.log("error al insertar proyectos categorias", error));
    }
    seleccionaAlmacen(elementAlmacen) {
        this.almacenEdicion = elementAlmacen.value;
        console.log('almacen', this.almacenEdicion);
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, { duration: 3000 });
    }
    salir() {
        this.dialogRef.close();
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_1__.projectCategoryservice), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar)); };
CategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], viewQuery: function CategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tabla1 = _t.first);
    } }, decls: 54, vars: 9, consts: [["fxLayout", "row"], ["fxFlex.gt-sm", "95%"], ["matSort", "", 1, "mat-elevation-z8", 2, "vertical-align", "middle", 3, "dataSource"], ["tabla1", ""], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], [2, "width", "50px"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigo_proyectocategoria"], ["mat-header-cell", "", "mat-sort-header", "", "class", "mat-column-20", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 500px;", 4, "matCellDef"], ["matColumnDef", "nombre_categoria"], ["matColumnDef", "responsable"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["matColumnDef", "presupuesto"], ["matColumnDef", "fecha_inicial"], ["matColumnDef", "almacen_id"], ["matColumnDef", "actualizar"], ["mat-header-cell", "", "class", ".colbuttons", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "width", "10px"], [2, "width", "300px"], [2, "width", "100px"], [2, "width", "200px"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-cell", ""], [2, "width", "100%", "text-align", "left", "vertical-align", "middle"], ["mat-cell", ""], ["color", "warn", 3, "checked", "ngModel", "click", "change", "ngModelChange"], ["mat-header-cell", "", "mat-sort-header", "", 1, "mat-column-20"], [1, "order-th"], ["aria-hidden", "false", 1, "orage-icon"], ["mat-cell", "", 2, "width", "500px"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["matInput", "", 3, "type", "ngModel", "ngModelChange", "keyup"], ["matInput", "", 3, "type", "ngModel", "ngModelChange", "keyup", "blur"], ["appearance", "fill"], ["matInput", "", 1, "controltable100", 3, "matDatepicker", "ngModel", "dateChange", "ngModelChange"], ["matSuffix", "", 3, "for"], [3, "startAt"], ["picker", ""], [1, "form-control", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "0", "selected", "selected"], ["value", "1"], ["value", "2"], ["value", "3"], ["mat-header-cell", "", 1, ".colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CategoriesComponent_th_6_Template, 3, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CategoriesComponent_td_8_Template, 2, 2, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CategoriesComponent_th_10_Template, 4, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CategoriesComponent_td_11_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CategoriesComponent_th_13_Template, 4, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CategoriesComponent_td_14_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CategoriesComponent_th_16_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CategoriesComponent_td_17_Template, 5, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CategoriesComponent_th_19_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CategoriesComponent_td_20_Template, 6, 5, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CategoriesComponent_th_22_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CategoriesComponent_td_23_Template, 10, 8, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CategoriesComponent_th_25_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CategoriesComponent_td_26_Template, 11, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](27, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CategoriesComponent_th_28_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CategoriesComponent_td_29_Template, 3, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CategoriesComponent_tr_30_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, CategoriesComponent_tr_31_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Presupuesto del proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Presupuesto restante");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_51_listener() { return ctx.salir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.datasourceProjectCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 5, ctx.presupuestoTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 7, ctx.presupuestoRestante));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe], styles: [".col10[_ngcontent-%COMP%]{\n    width: 10%;\n    vertical-align: middle;\n    text-align: center;\n}\n\n.col20[_ngcontent-%COMP%]{\n    width: 20%;\n    vertical-align: middle;\n}\n\n.col30[_ngcontent-%COMP%]{\n    width: 30%;\n    vertical-align: middle;\n}\n\n.col70[_ngcontent-%COMP%]{\n    width: 70%;\n    vertical-align: middle;\n}\n\n.colbuttons[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    text-align: center;\n}\n\n.controltable50[_ngcontent-%COMP%]{\n    width: 50px;\n}\n\n.controltable100[_ngcontent-%COMP%]{\n    width: 100px;\n}\n\n.column[_ngcontent-%COMP%]{\n    vertical-align: middle;\n}\n\n.control[_ngcontent-%COMP%]{\n    height: 35px;\n    vertical-align: middle;\n}\n\n.division[_ngcontent-%COMP%]{\n    padding-bottom: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wxMHtcbiAgICB3aWR0aDogMTAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sMjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sMzB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sNzB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sYnV0dG9uc3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRyb2x0YWJsZTUwe1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uY29udHJvbHRhYmxlMTAwe1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmNvbHVtbntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29udHJvbHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRpdmlzaW9ue1xuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG59Il19 */"] });


/***/ }),

/***/ 64339:
/*!*************************************************************************!*\
  !*** ./src/app/components/customer-detail/customer-detail.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailComponent": function() { return /* binding */ CustomerDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/customer.service */ 52541);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);












function CustomerDetailComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerDetailComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La direcci\u00F3n es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerDetailComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La ciudad es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerDetailComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El Estado es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerDetailComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El responsable es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerDetailComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El telefono es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerDetailComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El RFC es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CustomerDetailComponent {
    constructor(dialogRef, _customerservice, formBuilder, data, _snackBar) {
        this.dialogRef = dialogRef;
        this._customerservice = _customerservice;
        this.formBuilder = formBuilder;
        this.data = data;
        this._snackBar = _snackBar;
        this.projectInfo = data.arrayData;
        this.estadoPantalla = data.estadoPantalla;
        this.newProject = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            rfc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            responsable: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
        });
    }
    // =========================
    // PROCEDIMIENTOS
    // =========================
    ngOnInit() {
        if (this.estadoPantalla == 'Edit') {
            this.newProject.controls['nombre'].setValue(this.projectInfo['nombre']);
            this.newProject.controls['direccion'].setValue(this.projectInfo['direccion']);
            this.newProject.controls['ciudad'].setValue(this.projectInfo['ciudad']);
            this.newProject.controls['rfc'].setValue(this.projectInfo['rfc']);
            // this.newProject.controls['responsable'].setValue(this.projectInfo['responsable']);
            // this.newProject.controls['telefono'].setValue(this.projectInfo['telefono']);
            // this.newProject.controls['estado'].setValue(this.projectInfo['estado']);
        }
    }
    cancel(event) {
        this.dialogRef.close();
    }
    save(form, event) {
        let arrayToDb;
        arrayToDb = ({
            id: 0,
            nombre: form.controls["nombre"].value,
            direccion: form.controls["direccion"].value,
            rfc: form.controls["rfc"].value,
            ciudad: form.controls["ciudad"].value,
            estado: '' //form.controls["estado"].value
            ,
            contacto: '' //form.controls["responsable"].value
            ,
            vigencia: '2050-01-01',
            estatus: 1
        });
        this.insertCustommer(arrayToDb);
    }
    // =========================
    // UTILERIAS
    // =========================
    openSnackBar(message, action) {
        this._snackBar.open(message, action, { duration: 3000 });
    }
    // =========================
    // SERVICIOS
    // =========================
    insertCustommer(arrayToDb) {
        console.log('aqui esta log', arrayToDb);
        // Inserta clientes
        this._customerservice.insertcustomer(arrayToDb).subscribe(res => {
            console.log('CLIENTES', res);
            this.openSnackBar('El registro se actualizó con éxito', '');
        }, error => console.log("error al insertar clientes", error));
    }
    updateCustommer(arrayToDb) {
        // Actualiza clientes
        this._customerservice.updatecustomer(arrayToDb).subscribe(res => {
            console.log('CLIENTES', res);
        }, error => console.log("error al actualizar proyectos categorias", error));
    }
}
CustomerDetailComponent.ɵfac = function CustomerDetailComponent_Factory(t) { return new (t || CustomerDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_0__.customerservice), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
CustomerDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerDetailComponent, selectors: [["app-customer-detail"]], decls: 100, vars: 15, consts: [["fxLayout", "row"], ["mat-dialog-content-example", "", 3, "formGroup"], ["fxLayout", "row", 1, "division"], ["fxFlex.gt-sm", "20%"], ["fxFlex.gt-sm", "25%"], ["matInput", "", "formControlName", "nombre", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["fxFlex.gt-sm", "10%"], ["matInput", "", "placeholder", "", "formControlName", "direccion", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "ciudad", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "placeholder", "", "formControlName", "estado", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "responsable", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "placeholder", "", "formControlName", "telefono", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "placeholder", "", "formControlName", "rfc", 1, "form-control", "form-control-line", "control", 3, "type"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "help-block", 2, "color", "red"]], template: function CustomerDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cat\u00E1logo de clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CustomerDetailComponent_span_14_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CustomerDetailComponent_span_25_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, CustomerDetailComponent_span_35_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CustomerDetailComponent_span_46_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Responsable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, CustomerDetailComponent_span_56_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, CustomerDetailComponent_span_67_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "RFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, CustomerDetailComponent_span_77_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerDetailComponent_Template_button_click_94_listener($event) { return ctx.save(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerDetailComponent_Template_button_click_98_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("nombre").valid && ctx.newProject.get("nombre").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("direccion").valid && ctx.newProject.get("direccion").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("ciudad").valid && ctx.newProject.get("ciudad").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("estado").valid && ctx.newProject.get("estado").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.responsable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("responsable").valid && ctx.newProject.get("responsable").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("telefono").valid && ctx.newProject.get("telefono").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.rfc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("rfc").valid && ctx.newProject.get("rfc").touched);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 23019:
/*!*************************************************************!*\
  !*** ./src/app/components/po-detail/po-detail.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoDetailComponent": function() { return /* binding */ PoDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supplier-detail/supplier-detail.component */ 72382);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ 48248);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 40496);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 33098);
/* harmony import */ var html_to_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html-to-pdfmake */ 17708);
/* harmony import */ var html_to_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html_to_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_quotation_quotation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/quotation/quotation.service */ 9337);
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/supplier.service */ 64562);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var src_app_services_PurchaseOrder_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/PurchaseOrder.service */ 54286);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





























const _c0 = ["pdfTable"];
function PoDetailComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", op_r62.cotizacion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", op_r62.codigo, " ");
} }
function PoDetailComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " seleccione una cotizaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " seleccione una requisici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " seleccione un n\u00FAmero de \u00F3rden de compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function PoDetailComponent_mat_option_49_Template_mat_option_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r64.selectsupplier($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", op_r63.proveedorid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", op_r63.nombre, " ");
} }
function PoDetailComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " seleccione un proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " seleccione un iva");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_span_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " seleccione una moneda");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PoDetailComponent_div_112_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r66.downloadAsPDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PoDetailComponent_div_114_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r68.Authoriza(ctx_r68.newProject, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Autorizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_th_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " ACTIVAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_132_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-checkbox", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PoDetailComponent_td_132_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function PoDetailComponent_td_132_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r74); const element_r70 = restoredCtx.$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r73.ActivarDesactivar(element_r70.activo, $event); })("ngModelChange", function PoDetailComponent_td_132_Template_mat_checkbox_ngModelChange_1_listener($event) { const element_r70 = ctx.$implicit; return element_r70.activo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", element_r70.activo)("ngModel", element_r70.activo);
} }
function PoDetailComponent_th_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r76.SKU, " ");
} }
function PoDetailComponent_th_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r77.cantidad, " ");
} }
function PoDetailComponent_th_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Unidad de Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r78.um, " ");
} }
function PoDetailComponent_th_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r79.descripcion, " ");
} }
function PoDetailComponent_th_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r80.medida, " ");
} }
function PoDetailComponent_th_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r81.color, " ");
} }
function PoDetailComponent_th_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Otras especificaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r82.otras_especificaciones, " ");
} }
function PoDetailComponent_th_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Cantidad seleccionada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_156_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function PoDetailComponent_td_156_Template_input_ngModelChange_1_listener($event) { const element_r83 = ctx.$implicit; return element_r83.cantidad = $event; })("keyup", function PoDetailComponent_td_156_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r85.checkEnterKey($event, "presupuesto"); })("blur", function PoDetailComponent_td_156_Template_input_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r87.onBlurMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", element_r83.cantidad);
} }
function PoDetailComponent_th_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Precio Unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_159_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function PoDetailComponent_td_159_Template_input_ngModelChange_1_listener($event) { const element_r88 = ctx.$implicit; return element_r88.precio_unitario = $event; })("keyup", function PoDetailComponent_td_159_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r90.checkEnterKey($event, "precio_unitario"); })("blur", function PoDetailComponent_td_159_Template_input_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r92.onBlurMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", element_r88.precio_unitario);
} }
function PoDetailComponent_th_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Descuento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_162_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function PoDetailComponent_td_162_Template_input_ngModelChange_1_listener($event) { const element_r93 = ctx.$implicit; return element_r93.descuento = $event; })("keyup", function PoDetailComponent_td_162_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r95.checkEnterKey($event, "descuento"); })("blur", function PoDetailComponent_td_162_Template_input_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r96); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r97.onBlurMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", element_r93.descuento);
} }
function PoDetailComponent_tr_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 68);
} }
function PoDetailComponent_tr_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 69);
} }
function PoDetailComponent_th_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " ACTIVAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_204_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-checkbox", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PoDetailComponent_td_204_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function PoDetailComponent_td_204_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r103); const element_r99 = restoredCtx.$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r102.ActivarDesactivar(element_r99.activo, $event); })("ngModelChange", function PoDetailComponent_td_204_Template_mat_checkbox_ngModelChange_1_listener($event) { const element_r99 = ctx.$implicit; return element_r99.activo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", element_r99.activo)("ngModel", element_r99.activo);
} }
function PoDetailComponent_th_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r105.SKU, " ");
} }
function PoDetailComponent_th_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r106.cantidad, " ");
} }
function PoDetailComponent_th_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Unidad de Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r107.um, " ");
} }
function PoDetailComponent_th_215_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r108.descripcion, " ");
} }
function PoDetailComponent_th_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r109.medida, " ");
} }
function PoDetailComponent_th_221_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_222_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r110.color, " ");
} }
function PoDetailComponent_th_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Otras especificaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", element_r111.otras_especificaciones, " ");
} }
function PoDetailComponent_th_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Cantidad seleccionada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_228_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function PoDetailComponent_td_228_Template_input_ngModelChange_1_listener($event) { const element_r112 = ctx.$implicit; return element_r112.cantidad = $event; })("keyup", function PoDetailComponent_td_228_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r114.checkEnterKey($event, "presupuesto"); })("blur", function PoDetailComponent_td_228_Template_input_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r115); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r116.onBlurMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", element_r112.cantidad);
} }
function PoDetailComponent_th_230_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Precio Unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_231_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function PoDetailComponent_td_231_Template_input_ngModelChange_1_listener($event) { const element_r117 = ctx.$implicit; return element_r117.precio_unitario = $event; })("keyup", function PoDetailComponent_td_231_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r119.checkEnterKey($event, "precio_unitario"); })("blur", function PoDetailComponent_td_231_Template_input_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r120); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r121.onBlurMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", element_r117.precio_unitario);
} }
function PoDetailComponent_th_233_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Descuento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PoDetailComponent_td_234_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function PoDetailComponent_td_234_Template_input_ngModelChange_1_listener($event) { const element_r122 = ctx.$implicit; return element_r122.descuento = $event; })("keyup", function PoDetailComponent_td_234_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r124.checkEnterKey($event, "descuento"); })("blur", function PoDetailComponent_td_234_Template_input_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r125); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r126.onBlurMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", element_r122.descuento);
} }
function PoDetailComponent_tr_235_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 68);
} }
function PoDetailComponent_tr_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 69);
} }
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__.pdfMake.vfs;
class PoDetailComponent {
    constructor(dialogRef, _quotationservice, _supplyservice, data, snackBar, formBuilder, _snackBar, _purchaseOrderservice, dialog) {
        this.dialogRef = dialogRef;
        this._quotationservice = _quotationservice;
        this._supplyservice = _supplyservice;
        this.data = data;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this._purchaseOrderservice = _purchaseOrderservice;
        this.dialog = dialog;
        this.title = 'htmltopdf';
        // @ViewChild('AllTable') pdfTable: ElementRef;
        // ===================
        // DECLARACIONES
        // ===================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.cotizacion_id = '';
        this.codigo_requisicioninterna = '';
        this.odc_Numero = '';
        this.proveedor_id = '';
        this.activoEdicion = true;
        this.displayedColumns = ['select', 'SKU', 'cantidad', 'unidad_de_medida', 'descripcion', 'medida', 'color', 'otras_Especificaciones', 'cantidad_Ordenar', 'precio_unitario', 'descuento']; // , 'importe'
        this.cotizacionId = 0;
        this.datasourcePoveedores = [];
        this.po_count = 0;
        this.iva = 16;
        this.subtotal = 0;
        this.ivaSubtotal = 0;
        this.total = 0;
        this.precio_unitario = 0;
        this.importe = 0;
        this.projectInfo = data.arrayData;
        this.estadoPantalla = data.estadoPantalla;
        this.newProject = this.formBuilder.group({
            cotizacion_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            codigo_requisicioninterna: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            odc_Numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            proveedor_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            iva: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            subtotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            ivaSubtotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            precio_unitario: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
            moneda: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
        });
    }
    // =====================
    // PROCEDIMIENTOS
    // =====================
    ngOnInit() {
        this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(result => this.logoDataUrl = result);
        this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/imgCompras.PNG').then(result => this.logoDataCompras = result);
        this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/imgControlProyectos.PNG').then(result => this.logoDataControlProy = result);
        this.decode();
        this.getsupplierAll();
        this.getProveedores();
        this.getCotizacionesAll();
        console.log('this.projectInfo', this.projectInfo);
        if (this.projectInfo != undefined) {
            console.log('project info', this.projectInfo);
            console.log('podata', this.projectInfo.iva.toString());
            this.ordendecompra_id = this.projectInfo.proveedor_nombre;
            this.subtotal = this.projectInfo.sub_total;
            this.ivaSubtotal = this.projectInfo.iva_moneda;
            this.total = this.projectInfo.total;
            // this.getcotizacionesDetail(this.projectInfo.cotizacion_id);
            this.getPO_Detail(this.projectInfo.ordendecompra_id);
            this.newProject.patchValue({
                cotizacion_id: this.projectInfo.cotizacion_id,
                codigo_requisicioninterna: this.projectInfo.codigo_requisicioninterna,
                odc_Numero: this.projectInfo.ordendecompra_codigo,
                proveedor_id: this.projectInfo.proveedor_id,
                iva: this.projectInfo.iva.toString(),
                moneda: this.projectInfo.tipo_moneda.toString(),
                // subtotal : this.projectInfo.sub_total,
                // ivaSubtotal : '10',
                // total : '10010',
                // precio_unitario : '100'
            });
        }
    }
    cotizacionSelected(form, event) {
        console.log('pagina', form.controls['cotizacion_id'].value);
        this.getcotizacionesDetail(form.controls['cotizacion_id'].value);
    }
    ivaSelected(form, event) {
        console.log('iva', form.controls['iva'].value);
        this.onBlurMethod();
    }
    cancel(event) {
        this.dialogRef.close();
    }
    validaCamposRequeridos() {
        let valido = true;
        valido = (this.newProject.get('cotizacion_id').status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("codigo_requisicioninterna").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("odc_Numero").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("proveedor_id").status == 'INVALID') ? false : valido;
        return valido;
    }
    save(form, event) {
        if (this.validaCamposRequeridos() == false) {
            this.openSnackBar('debe capturar los campos requeridos', 'success');
            return;
        }
        this.insertPOHdr(this.tabla1["_data"]);
    }
    Authoriza(form, event) {
        console.log('autoriza po', form);
    }
    ActivarDesactivar(element, event) {
        this.activoEdicion = event["checked"];
        console.log('Actualiza registro de activar y desactivar', event["checked"]);
        this.onBlurMethod();
    }
    checkEnterKey() {
    }
    addSupplier(form, event) {
        // Catálogo de clientes
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'PROVEEDOR',
            arrayData: null,
            proveedorId: 0,
            estadoPantalla: 'New'
        };
        dialogConfig.width = '1400px';
        dialogConfig.height = '700px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_1__.SupplierDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    reloadSupplier(form, event) {
        // Carga clientes
        this.getsupplierAll();
    }
    selectsupplier(event) {
        this.proveedor_id = event.value;
    }
    onBlurMethod() {
        if (this.tabla1["_data"][0]["activo"] != undefined && this.tabla1["_data"][0]["precio_unitario"] != undefined) { // && this.tabla1["_data"][0]["activo"] == true 
            this.importe = 100;
            this.subtotal = 0;
            this.ivaSubtotal = 0;
            this.total = 0;
            this.tabla1["_data"].forEach(element => {
                if (element.activo != undefined && element.activo == true && element.precio_unitario != undefined) {
                    this.subtotal = this.subtotal + element.cantidad * (element.precio_unitario - element.descuento);
                }
            });
            this.ivaSubtotal = this.ivaSubtotal + (this.subtotal * (this.iva / 100));
            this.total = this.subtotal + this.ivaSubtotal;
        }
    }
    // =====================
    // UTILERIAS
    // =====================
    openSnackBar(message, action) {
        this._snackBar.open(message, action, { duration: 3000 });
    }
    decode() {
        let token = localStorage.getItem('token_access');
        this.decodedSign = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.default)(token)["firma"] + '?alt=media&token=';
        let decodeUser = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.default)(token)["usuario"];
        console.log((0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.default)(token));
        switch (decodeUser) {
            case ('pablo'):
                this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be'; //this.decodedSign = 'https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be' //this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be' 
                this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaPablo.PNG').then(result => this.logoDataUrl = result);
                break;
            case ('alejandro'):
                this.decodedSign = this.decodedSign + '36189034-32e5-4e28-b44c-43dec58e9999';
                this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaAlejandro.PNG').then(result => this.logoDataUrl = result);
                break;
            case ('bernardo'):
                this.decodedSign = this.decodedSign + '611d133a-d14a-45ab-a26a-f6e0dd570636';
                this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBernardo.PNG').then(result => this.logoDataUrl = result);
                break;
            case ('fernando'):
                this.decodedSign = this.decodedSign + 'be146605-1624-48e9-b646-cf9dbfd4f7a8';
                this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaFernando.PNG').then(result => this.logoDataUrl = result);
                break;
            default:
                this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be'; // this.decodedSign = 'https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be' //this.decodedSign = this.decodedSign + 'c5a8f192-5cb8-4025-8d30-31918abfa5be' 
                this.getImageDataUrlFromLocalPath1('../../../assets/images/Signs/FirmaBlanco.PNG').then(result => this.logoDataUrl = result);
                break;
        }
        console.log(this.decodedSign);
    }
    downloadAsPDF() {
        return __awaiter(this, void 0, void 0, function* () {
            let subTotal = 0;
            let iva = 0;
            let total = 0;
            const doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__.default();
            const pdfTable = this.pdfTable.nativeElement;
            var html = html_to_pdfmake__WEBPACK_IMPORTED_MODULE_6___default()(pdfTable.innerHTML);
            var headers = {
                0: {
                    col_1: { text: 'Cantidad', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0], width: 20 },
                    col_2: { text: 'Unidad', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0], width: 20 },
                    col_3: { text: 'Descripción', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0], width: 90 },
                    col_4: { text: 'Precio Unitario', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0], width: 20 },
                    col_5: { text: 'Importe', style: 'tableHeader', rowSpan: 2, alignment: 'center', margin: [0, 8, 0, 0], width: 20 },
                    // col_6:{ text: 'SKU', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0], width: 20 }
                },
                1: {
                    col_1: { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
                    col_2: { text: 'Header 2', style: 'tableHeader', alignment: 'center' },
                    col_3: { text: 'Header 3', style: 'tableHeader', alignment: 'center' },
                    col_4: { text: 'Citación', style: 'tableHeader', alignment: 'center' },
                    col_5: { text: 'Cumplimiento', style: 'tableHeader', alignment: 'center' },
                    col_6: { text: 'Cumplimiento', style: 'tableHeader', alignment: 'center' }
                }
            };
            let bodyx = [];
            var body = [];
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    var header = headers[key];
                    var row = new Array();
                    row.push(header.col_1);
                    row.push(header.col_2);
                    row.push(header.col_3);
                    row.push(header.col_4);
                    row.push(header.col_5);
                    // row.push( header.col_6 );
                    body.push(row);
                }
            }
            for (var key in this.datasourceCotizacionesDetalle) {
                console.log('renglones', this.datasourceCotizacionesDetalle);
                if (this.datasourceCotizacionesDetalle.hasOwnProperty(key)) {
                    var data = this.datasourceCotizacionesDetalle[key];
                    var row = new Array();
                    row.push(data.cantidad.toString());
                    row.push(data.unidad_medida.toString());
                    row.push(data.descripcion.toString());
                    row.push(data.precio_unitario.toString());
                    row.push((data.precio_unitario * data.cantidad).toString());
                    // row.push( data.medida.toString() );
                    body.push(row);
                    bodyx.push(row);
                    // Calcula Totales
                    this.subtotal = this.subtotal + (data.precio_unitario * data.cantidad);
                }
            }
            this.iva = this.subtotal * (this.newProject.controls["iva"].value / 100);
            this.total = this.subtotal + this.iva;
            const documentDefinition = {
                content: [
                    {
                        columns: [
                            {
                                text: 'LOGO DE ORDEN DE COMPRA', fontSize: 8
                            },
                            {
                                text: '', fontSize: 8, width: 20
                            },
                            {
                                text: 'COMERCIAL ... S. DE R.L. DE C.V. RFC: CCM95033..A Carretera a Saltillo-Monterrey Km. 18 Parque Industrial Santa María 25900 Ramos Arízpe, Coahuila Telefono: (844) 866 9030', fontSize: 8
                            },
                            {
                                text: '', fontSize: 8, width: 20
                            },
                            {
                                text: 'ORDEN DE COMPRA No. 1791-SUB232', fontSize: 8
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: '*'
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: 'Proveedor:', fontSize: 8, bold: true
                            },
                            {
                                text: '', fontSize: 8, width: 20
                            },
                            {
                                text: '', fontSize: 8
                            },
                            {
                                text: '', fontSize: 8, width: 20
                            },
                            {
                                text: 'Enviar a:', fontSize: 8, bold: true
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: 'Nombre: ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: 'EXPLORACIÓN GEOFÍSICA Y ESTUDIOS DEL SUBSUELO DEL CENTRO', fontSize: 8, width: '*'
                            },
                            {
                                text: 'Nombre: ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: 'GM SILAO', fontSize: 8, width: '*'
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: 'Dirección: ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: 'RIO LERMA NO 705, COLINAS DEL RIO', fontSize: 8, width: '*'
                            },
                            {
                                text: 'Dirección: ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: '', fontSize: 8, width: '*'
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: 'R.F.C. ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: 'EGE160527A29', fontSize: 8, width: '*'
                            },
                            {
                                text: 'Cd./Edo: ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: 'SILAO GTO', fontSize: 8, width: '*'
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: 'Cd./Edo: ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: 'AGUASCALIENTES, AGUASCALIENTES', fontSize: 8, width: '*'
                            },
                            {
                                text: 'Requisitor: ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: 'FERNANDO ARMENDARIZ', fontSize: 8, width: '*'
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: 'Contacto ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: 'ARTURO GONZALEZ OLVERA', fontSize: 8, width: '*'
                            },
                            {
                                text: 'Teléfono: ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: '', fontSize: 8, width: '*'
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ': ', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: '', fontSize: 8, width: '*'
                            },
                            {
                                text: '', fontSize: 8, bold: true, width: 90
                            },
                            {
                                text: '4200680361', fontSize: 8, width: '*'
                            }
                        ]
                    },
                    {
                        style: 'tableHeader', fontSize: 8, width: '100%',
                        table: {
                            body: [
                                ['FECHA ODC', 'TERMINOS Y CONDICIONES'],
                                ['13-ene-22', 'Estimación por avance']
                            ]
                        }
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        fontSize: 8, width: '100%',
                        table: {
                            widths: ['*', '*', '*', '*', '*'],
                            headerRows: 2,
                            // keepWithHeaderRows: 1,
                            body: body
                        }
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: '', fontSize: 8, bold: true
                            },
                            {
                                text: 'CIEN MIL PESOS 00/100 MN', fontSize: 8, width: '*'
                            },
                            {
                                text: '', fontSize: 8, bold: true
                            },
                            {
                                text: 'Subtotal', fontSize: 8, bold: true, width: '*'
                            },
                            {
                                text: '$ ' + this.subtotal, fontSize: 8, width: '*'
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: '', fontSize: 8, bold: true
                            },
                            {
                                text: '', fontSize: 8, width: '*'
                            },
                            {
                                text: '', fontSize: 8, bold: true
                            },
                            {
                                text: 'IVA', fontSize: 8, bold: true, width: '*'
                            },
                            {
                                text: '$ ' + this.iva, fontSize: 8, width: '*'
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: '', fontSize: 8, bold: true
                            },
                            {
                                text: '', fontSize: 8, width: '*'
                            },
                            {
                                text: '', fontSize: 8, bold: true
                            },
                            {
                                text: 'Total', fontSize: 8, bold: true, width: '*'
                            },
                            {
                                text: '$ ' + this.total, fontSize: 8, width: '*'
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                text: ' ', fontSize: 8, bold: true, width: 90
                            }
                        ]
                    },
                    // {
                    //   columns: [
                    //     {
                    //       text: '_________________', fontSize:8, bold:true
                    //     },
                    //     {
                    //       text: '', fontSize:8, width: 20
                    //     },
                    //     {
                    //       text: '_________________', fontSize:8
                    //     },
                    //     {
                    //       text: '', fontSize:8, width: 20
                    //     },
                    //     {
                    //       text: '_________________', fontSize:8, bold:true
                    //     }
                    //   ]
                    // },
                    // {
                    //   columns: [
                    //     {
                    //       text: 'Compras', fontSize:8, bold:true
                    //     },
                    //     {
                    //       text: '', fontSize:8, width: 20
                    //     },
                    //     {
                    //       text: 'Control de proyectos', fontSize:8
                    //     },
                    //     {
                    //       text: '', fontSize:8, width: 20
                    //     },
                    //     {
                    //       text: 'Autorizar', fontSize:8, bold:true
                    //     }
                    //   ]
                    // },
                    {
                        columns: [
                            {
                                text: '', fontSize: 8, width: 20
                            },
                            {
                                image: this.logoDataCompras,
                                width: 100,
                                height: 50,
                            },
                            {
                                text: '', fontSize: 8, width: 20
                            },
                            {
                                image: this.logoDataControlProy,
                                width: 100,
                                height: 50,
                            },
                            {
                                text: '', fontSize: 8, width: 20
                            },
                            {
                                // image: this.getBase64ImageFromURL('https://firebasestorage.googleapis.com/v0/b/sap-comercial.appspot.com/o/firmas%2FFirmaPablo.PNG?alt=media&token=c5a8f192-5cb8-4025-8d30-31918abfa5be')
                                image: this.logoDataUrl,
                                width: 100,
                                height: 50,
                            }
                        ]
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10]
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5]
                    },
                    tableExample: {
                        margin: [0, 5, 0, 15]
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 11,
                        color: 'black'
                    },
                    tableFooter: {
                        bold: true,
                        fontSize: 13,
                        color: 'black',
                        border: false
                    }
                },
                defaultStyle: {
                // alignment: 'justify'
                }
            };
            console.log('documentDefinition', documentDefinition);
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().createPdf(documentDefinition).open();
        });
    }
    // =====================
    // CONSILTA DE SERVICIOS
    // =====================
    getProveedores() {
        let arrayProvider;
        arrayProvider = [];
        arrayProvider.push({ proveedor_id: 1, proveedor_nombre: 'CABLES MONTERREY SA DE CV' }, { proveedor_id: 2, proveedor_nombre: 'VENTA DE CABLEADO SA' });
        this.datasourcePoveedores = arrayProvider;
        console.log(this.datasourcePoveedores);
    }
    getPO_Hdr(codigo_cotizacion) {
        // ordenes de compra Todas
        let arrayPO_Hdr;
        this._purchaseOrderservice.getPOAll().subscribe(res => {
            console.log('PurchaseOrder', res);
            this.podatasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(res);
            arrayPO_Hdr = res.filter(e => e.codigo_cotizacion == codigo_cotizacion);
            this.po_count = arrayPO_Hdr.length + 1;
            this.odc_Numero = codigo_cotizacion + '-' + this.po_count.toString();
            this.newProject.controls["odc_Numero"].setValue(codigo_cotizacion + '-' + this.po_count.toString());
        }, error => console.log("error consulta regiones", error));
    }
    getCotizacionesAll() {
        this._quotationservice.getQuotationAll().subscribe(res => {
            this.datasourceCotizaciones = res;
            console.log('COTIZACIONES TODAS', res);
        }, error => console.log("error consulta proyectos", error));
    }
    getcotizacionesDetail(cotizacion_id) {
        this._quotationservice.getQuotationDetail(cotizacion_id).subscribe(res => {
            this.datasourceCotizacionesDetalle = res;
            console.log('COTIZACIONES TODAS', res);
            this.getPO_Hdr(res[0]["codigo_cotizacion"]);
        }, error => console.log("error consulta proyectos", error));
    }
    insertPOHdr(table) {
        let arrayTodb;
        let arrayDetail = [];
        let conteo = 0;
        table.forEach(element => {
            //Hdr
            if (conteo == 0) {
                arrayTodb = { codigo: this.odc_Numero,
                    cotizacion_id: element.cotizacion_id,
                    proveedor_id: this.newProject.controls["proveedor_id"].value // this.proveedor_id
                    ,
                    fecha: moment__WEBPACK_IMPORTED_MODULE_0__(new Date, 'YYYY-M-DD'),
                    iva: this.iva,
                    iva_moneda: this.ivaSubtotal,
                    tipo_moneda: 'MXN',
                    sub_total: this.subtotal,
                    total: this.total
                };
            }
            //Detalle
            if (element.activo == true) {
                console.log('tabla', element.precio_unitario);
                console.log('pu', element.precio_unitario);
                arrayDetail.push({ ordendecompradetalle_id: 0,
                    ordendecompra_id: this.ordendecompra_id,
                    cotizaciondetalle_id: element.cotizaciondetalle_id,
                    sku: element.sku,
                    medida: element.medida,
                    color: element.color,
                    otras_especificaciones: element.otras_especificaciones,
                    cantidad: element.cantidad,
                    unidad_medida: element.unidad_medida,
                    costo: element.costo,
                    precio_unitario: element.precio_unitario,
                    importe_total: element.cantidad * (element.precio_unitario - element.descuento),
                    descuento: element.descuento,
                    descripcion: element.descripcion });
            }
            conteo++;
        });
        console.log('ARRAY tO db', arrayTodb);
        this._purchaseOrderservice.insertPO_Hdr(arrayTodb).subscribe(res => {
            console.log('Se inserto con éxito', res);
            // INSERTA REQUISICIONES DET
            this.insertPODet(res, arrayDetail);
        }, error => console.log("error alta de proyectos", error));
    }
    insertPODet(po_id, arrayDetail) {
        let arrayTodbDetail;
        arrayDetail.forEach(element => {
            arrayTodbDetail = { ordendecompradetalle_id: 0,
                ordendecompra_id: po_id,
                cotizaciondetalle_id: element.cotizaciondetalle_id,
                sku: element.sku,
                medida: element.medida,
                color: element.color,
                otras_especificaciones: element.otras_especificaciones,
                cantidad: element.cantidad,
                unidad_medida: element.unidad_medida,
                costo: element.costo,
                precio_unitario: element.precio_unitario,
                importe_total: element.cantidad * (element.precio_unitario - element.descuento),
                descuento: element.descuento,
                descripcion: element.descripcion };
            console.log('detalle', arrayTodbDetail);
            this._purchaseOrderservice.insertPODetail(arrayTodbDetail).subscribe(res => {
                console.log('Se inserto con éxito', res);
            }, error => console.log("error alta de proyectos", error));
        });
    }
    getsupplierAll() {
        // Selecciona todos los proveedores
        this._supplyservice.getsupplyAll().subscribe(res => {
            this.datasourcesupplier = res;
            console.log('PROVEEDORES', this.datasourcesupplier);
        }, error => console.log("error consulta categorias", error));
    }
    getPO_Detail(po_id) {
        // Selecciona ordenes de compra
        this._purchaseOrderservice.getPODetail(po_id).subscribe(res => {
            this.datasourceCotizacionesDetalle = res;
            console.log('ORDENES DE COMPRA DET', this.datasourceCotizacionesDetalle);
        }, error => console.log("error consulta categorias", error));
    }
    getBase64ImageFromURL(url) {
        return new Promise((resolve, reject) => {
            var img = new Image();
            // img.setAttribute("crossOrigin", "anonymous");
            // var express = require('express')
            // var cors = require('cors')
            // var app = express()
            // app.use(cors())
            img.crossOrigin = "Anonymous";
            img.onload = () => {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var dataURL = canvas.toDataURL("image/png");
                resolve(dataURL);
            };
            img.onerror = error => {
                reject(error);
            };
            img.src = url;
        });
    }
    getImageDataUrlFromLocalPath1(localPath) {
        return new Promise((resolve, reject) => {
            let canvas = document.createElement('canvas');
            let img = new Image();
            img.onload = () => {
                canvas.height = img.height;
                canvas.width = img.width;
                canvas.getContext("2d").drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/png'));
            };
            img.onerror = () => reject('Imagen no disponible');
            img.src = localPath;
        });
    }
}
PoDetailComponent.ɵfac = function PoDetailComponent_Factory(t) { return new (t || PoDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_quotation_quotation_service__WEBPACK_IMPORTED_MODULE_7__.quotationservice), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_supplier_service__WEBPACK_IMPORTED_MODULE_8__.supplyservice), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_PurchaseOrder_service__WEBPACK_IMPORTED_MODULE_9__.purchaseOrderservice), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog)); };
PoDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: PoDetailComponent, selectors: [["app-po-detail"]], viewQuery: function PoDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.pdfTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.tabla1 = _t.first);
    } }, decls: 237, vars: 28, consts: [["fxLayout", "row"], ["mat-dialog-content-example", "", 3, "formGroup"], ["fxLayout", "row", 1, "division"], ["fxFlex.gt-sm", "20%"], ["fxFlex.gt-sm", "25%"], ["formControlName", "cotizacion_id", 1, "form-control", "control", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["fxFlex.gt-sm", "10%"], ["matInput", "", "formControlName", "codigo_requisicioninterna", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "odc_Numero", 1, "form-control", "form-control-line", "control", 3, "type"], ["formControlName", "proveedor_id", 1, "form-control", "control"], [3, "value", "selectionChange", 4, "ngFor", "ngForOf"], ["formControlName", "iva", 1, "form-control", "control", 3, "selectionChange"], ["value", "16", "selected", "selected"], ["value", "10"], ["value", "0"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["formControlName", "moneda", 1, "form-control", "control"], ["value", "MXN", "selected", "selected"], ["value", "USD"], [4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "col-12", "col-md-12", "p-0"], [1, "card"], ["id", "AllTable", 1, "card-body", "card-body-table"], ["AllTable", ""], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["tabla1", ""], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], [2, "width", "50px"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "SKU"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["matColumnDef", "cantidad"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "unidad_de_medida"], ["matColumnDef", "descripcion"], ["matColumnDef", "medida"], ["matColumnDef", "color"], ["matColumnDef", "otras_Especificaciones"], ["matColumnDef", "cantidad_Ordenar"], ["matColumnDef", "precio_unitario"], ["matColumnDef", "descuento"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["hidden", "", 1, "container"], ["id", "pdfTable"], ["pdfTable", ""], ["width", "100%"], ["width", "20%"], ["width", "60%"], ["id", "contentToConvert", "width", "100%", "border", "0"], [2, "width", "300px"], [2, "width", "1000px"], [3, "value"], [1, "help-block", 2, "color", "red"], [3, "value", "selectionChange"], ["mat-header-cell", ""], [2, "width", "100%", "text-align", "left", "vertical-align", "middle"], ["mat-cell", ""], ["color", "warn", 3, "checked", "ngModel", "click", "change", "ngModelChange"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], ["type", "cantidad_Ordenar", 3, "ngModel", "ngModelChange", "keyup", "blur"], ["type", "precio_unitario", 3, "ngModel", "ngModelChange", "keyup", "blur"], ["type", "descuento", 3, "ngModel", "ngModelChange", "keyup", "blur"], ["mat-header-row", ""], ["mat-row", ""]], template: function PoDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Nueva Orden de Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Cotizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function PoDetailComponent_Template_mat_select_selectionChange_14_listener($event) { return ctx.cotizacionSelected(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, PoDetailComponent_mat_option_15_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, PoDetailComponent_span_16_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, PoDetailComponent_span_28_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Orden de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, PoDetailComponent_span_38_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, PoDetailComponent_mat_option_49_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, PoDetailComponent_span_50_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "IVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function PoDetailComponent_Template_mat_select_selectionChange_59_listener($event) { return ctx.ivaSelected(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "16%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, PoDetailComponent_span_66_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PoDetailComponent_Template_button_click_72_listener($event) { return ctx.addSupplier(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PoDetailComponent_Template_button_click_74_listener($event) { return ctx.reloadSupplier(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, " o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "Moneda");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, "MXN");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, PoDetailComponent_span_89_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](91, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](99, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](102, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](105, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](107, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](112, PoDetailComponent_div_112_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](114, PoDetailComponent_div_114_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PoDetailComponent_Template_button_click_117_listener($event) { return ctx.save(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PoDetailComponent_Template_button_click_121_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "div", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "mat-table", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](129, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](130, PoDetailComponent_th_130_Template, 3, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](132, PoDetailComponent_td_132_Template, 2, 2, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](133, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](134, PoDetailComponent_th_134_Template, 3, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](135, PoDetailComponent_td_135_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](136, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](137, PoDetailComponent_th_137_Template, 3, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](138, PoDetailComponent_td_138_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](139, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](140, PoDetailComponent_th_140_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](141, PoDetailComponent_td_141_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](142, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](143, PoDetailComponent_th_143_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](144, PoDetailComponent_td_144_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](145, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](146, PoDetailComponent_th_146_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](147, PoDetailComponent_td_147_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](148, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](149, PoDetailComponent_th_149_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](150, PoDetailComponent_td_150_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](151, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](152, PoDetailComponent_th_152_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](153, PoDetailComponent_td_153_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](154, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](155, PoDetailComponent_th_155_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](156, PoDetailComponent_td_156_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](157, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](158, PoDetailComponent_th_158_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](159, PoDetailComponent_td_159_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](160, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](161, PoDetailComponent_th_161_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](162, PoDetailComponent_td_162_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](163, PoDetailComponent_tr_163_Template, 1, 0, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](164, PoDetailComponent_tr_164_Template, 1, 0, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "div", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](168, "table", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "td", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](171, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "td", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, "COMERCIAL SA DE CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "td", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "Orden de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "table", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](178, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](179, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](181, "COMERCIAL DE MEXICO");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](182, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](183, "ORDEN DE COMPRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](185, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](188, "COMERCIAL DE MEXICO");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, "ORDEN DE COMPRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](192, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](193, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](194, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, "COMERCIAL DE MEXICO");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](196, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](197, "ORDEN DE COMPRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](198, "div", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](200, "mat-table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](201, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](202, PoDetailComponent_th_202_Template, 3, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](203, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](204, PoDetailComponent_td_204_Template, 2, 2, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](205, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](206, PoDetailComponent_th_206_Template, 3, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](207, PoDetailComponent_td_207_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](208, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](209, PoDetailComponent_th_209_Template, 3, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](210, PoDetailComponent_td_210_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](211, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](212, PoDetailComponent_th_212_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](213, PoDetailComponent_td_213_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](214, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](215, PoDetailComponent_th_215_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](216, PoDetailComponent_td_216_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](217, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](218, PoDetailComponent_th_218_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](219, PoDetailComponent_td_219_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](220, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](221, PoDetailComponent_th_221_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](222, PoDetailComponent_td_222_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](223, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](224, PoDetailComponent_th_224_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](225, PoDetailComponent_td_225_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](226, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](227, PoDetailComponent_th_227_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](228, PoDetailComponent_td_228_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](229, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](230, PoDetailComponent_th_230_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](231, PoDetailComponent_td_231_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](232, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](233, PoDetailComponent_th_233_Template, 2, 0, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](234, PoDetailComponent_td_234_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](235, PoDetailComponent_tr_235_Template, 1, 0, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](236, PoDetailComponent_tr_236_Template, 1, 0, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.newProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.datasourceCotizaciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.newProject.get("cotizacion_id").valid && ctx.newProject.get("cotizacion_id").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx.codigo_requisicioninterna);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.newProject.get("codigo_requisicioninterna").valid && ctx.newProject.get("codigo_requisicioninterna").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx.odc_Numero);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.newProject.get("odc_Numero").valid && ctx.newProject.get("odc_Numero").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.datasourcesupplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.newProject.get("proveedor_id").valid && ctx.newProject.get("proveedor_id").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.newProject.get("iva").valid && ctx.newProject.get("iva").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.newProject.get("moneda").valid && ctx.newProject.get("moneda").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Subtotal: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](99, 22, ctx.subtotal), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" IVA: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](102, 24, ctx.ivaSubtotal), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](105, 26, ctx.total), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.estadoPantalla == "aprove");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.estadoPantalla == "aprove");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.datasourceCotizacionesDetalle);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.datasourceCotizacionesDetalle);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwby1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 52132:
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/project-capture-detail/project-capture-detail/project-capture-detail.component.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCaptureDetailComponent": function() { return /* binding */ ProjectCaptureDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../customer-detail/customer-detail.component */ 64339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_projects_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/projects/project.service */ 56980);
/* harmony import */ var _services_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/category/category.service */ 70249);
/* harmony import */ var src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/projectCtegory/projectCateogry.service */ 7799);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/customer.service */ 52541);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 5015);






















function ProjectCaptureDetailComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Capture un c\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProjectCaptureDetailComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Debe capturar un nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProjectCaptureDetailComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", op_r12.clienteid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", op_r12.nombre, " ");
} }
function ProjectCaptureDetailComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Seleccione un cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProjectCaptureDetailComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " capture un presupuesto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProjectCaptureDetailComponent_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Seleccione una fecha inicial");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProjectCaptureDetailComponent_span_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Seleccione una fecha final");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProjectCaptureDetailComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Capture un responsable");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProjectCaptureDetailComponent_span_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Capture un centro de costos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProjectCaptureDetailComponent_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Asigne un almac\u00E9n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ProjectCaptureDetailComponent {
    constructor(dialogRef, _projectService, _categoryService, _projectCategoryservice, _customerservice, data, _snackBar, dialog, formBuilder) {
        this.dialogRef = dialogRef;
        this._projectService = _projectService;
        this._categoryService = _categoryService;
        this._projectCategoryservice = _projectCategoryservice;
        this._customerservice = _customerservice;
        this.data = data;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        // =========================
        // DECLARACIONES
        // =========================
        this.fecha_inicial_proyecto = moment__WEBPACK_IMPORTED_MODULE_0__(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
        this.fecha_final_proyecto = moment__WEBPACK_IMPORTED_MODULE_0__(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
        this.nombre_proyecto = '';
        this.cliente = '1';
        this.presupuesto_proyecto = 0;
        this.responsable_proyecto = '';
        this.centro_de_costo_proyecto = '1';
        this.almacen = '1';
        this.codigo_proyecto = '';
        this.proeycto_id_mayor = 0;
        this.proeycto_numero_mayor = 0;
        this.datasourceCategories = [];
        this.datasourceProyects = [];
        this.projectInfo = data.arrayData;
        this.projectId = data.projectId;
        this.newProject = this.formBuilder.group({
            codigo_proyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.codigo_proyecto, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(7)]),
            // proyecto_id: new FormControl(''),
            nombre_proyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(50)]),
            cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.cliente, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            // presupuesto_proyecto: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]],
            presupuesto_proyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.presupuesto_proyecto, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]+([.][0-9]{1,2})?$')]),
            // presupuesto_proyecto: new FormControl('', Validators.required),
            fecha_inicial_proyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            fecha_final_proyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            responsable_proyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            centroDeCostos: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            almacen: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
        });
    }
    // =========================
    // PROCEDIMIENTOS
    // =========================
    ngOnInit() {
        this.getcustomerAll();
        this.getAllProjects();
        this.getEnabledCategories();
        console.log('data de entrada', this.projectInfo);
        if (this.projectId != 0) {
            this.newProject.patchValue({
                proyecto_id: this.projectInfo["proyecto_id"],
                codigo_proyecto: this.projectInfo["codigo_proyecto"],
                nombre_proyecto: this.projectInfo["nombre_proyecto"],
                cliente: this.projectInfo["cliente_id"],
                presupuesto_proyecto: this.projectInfo["presupuesto_proyecto"],
                fecha_inicial_proyecto: this.projectInfo["fecha_inicial_proyecto"],
                fecha_final_proyecto: this.projectInfo["fecha_final_proyecto"],
                responsable_proyecto: this.projectInfo["responsable_proyecto"],
                centroDeCostos: this.projectInfo["centro_de_costo_proyecto"].toString(),
                almacen: this.projectInfo["almacen_id"].toString()
            });
            this.nombre_proyecto = this.projectInfo["nombre_proyecto"];
            this.cliente = this.projectInfo["cliente_id"].toString();
            this.presupuesto_proyecto = this.projectInfo["presupuesto_proyecto"];
            this.fecha_inicial_proyecto = this.projectInfo["fecha_inicial_proyecto"];
            this.fecha_final_proyecto = this.projectInfo["fecha_final_proyecto"];
            this.responsable_proyecto = this.projectInfo["responsable_proyecto"];
            this.centro_de_costo_proyecto = this.projectInfo["centro_de_costo_proyecto"].toString();
            this.almacen = this.projectInfo["almacen_id"].toString();
            this.codigo_proyecto = '';
        }
    }
    validaCamposRequeridos() {
        let valido = true;
        valido = (this.newProject.get('codigo_proyecto').status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("nombre_proyecto").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("cliente").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("presupuesto_proyecto").status == 'INVALID' || this.newProject.get("presupuesto_proyecto").value <= 0) ? false : valido;
        valido = (this.newProject.get("fecha_inicial_proyecto").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("fecha_final_proyecto").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("responsable_proyecto").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("centroDeCostos").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("almacen").status == 'INVALID') ? false : valido;
        return valido;
    }
    save(form, event) {
        let arrayTodb;
        if (this.validaCamposRequeridos() == false) {
            this.openSnackBar('debe capturar los campos requeridos', 'success');
            return;
        }
        if (this.projectId == 0) {
            arrayTodb = { codigo_proyecto: this.newProject.controls["codigo_proyecto"].value,
                nombre_proyecto: this.newProject.controls["nombre_proyecto"].value,
                cliente_id: this.newProject.controls["cliente"].value,
                presupuesto_proyecto: this.newProject.controls["presupuesto_proyecto"].value,
                fecha_inicial_proyecto: moment__WEBPACK_IMPORTED_MODULE_0__(this.fecha_inicial_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                fecha_final_proyecto: moment__WEBPACK_IMPORTED_MODULE_0__(this.fecha_final_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                responsable_proyecto: this.newProject.controls["responsable_proyecto"].value,
                centro_de_costo_proyecto: this.newProject.controls["centroDeCostos"].value,
                almacen_id: this.newProject.controls["almacen"].value }; //this.almacen};
            // Actualiza registro NUEVO
            this._projectService.insertProjects(arrayTodb).subscribe(res => {
                console.log('Se inserto con éxito', res);
                this.openSnackBar('Se genero el proyecto exitosamente', 'success');
                // Inserta categorias
                this.insertCategories();
            }, error => console.log("error alta de proyectos", error));
            // Inserta categorias
            // this.insertCategories();
            // this.dialogRef.close();
        }
        else {
            arrayTodb = { proyecto_id: this.projectId,
                nombre_proyecto: this.newProject.controls["nombre_proyecto"].value,
                cliente_id: this.newProject.controls["cliente"].value,
                presupuesto_proyecto: this.newProject.controls["presupuesto_proyecto"].value,
                fecha_inicial_proyecto: moment__WEBPACK_IMPORTED_MODULE_0__(this.fecha_inicial_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                fecha_final_proyecto: moment__WEBPACK_IMPORTED_MODULE_0__(this.fecha_final_proyecto, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                responsable_proyecto: this.newProject.controls["centroDeCostos"].value,
                centro_de_costo_proyecto: this.newProject.controls["centroDeCostos"].value,
                almacen_id: this.newProject.controls["almacen"].value,
                codigo_proyecto: this.newProject.controls["codigo_proyecto"].value }; // this.codigo_proyecto};
            // Actualiza registro EDICION
            this._projectService.updateProjects(arrayTodb).subscribe(res => {
                console.log('Se edito con éxito', res);
            }, error => console.log("error consulta regiones", error));
        }
        this.dialogRef.close();
    }
    insertCategories() {
        // Obtiene Proyecto Registrado
        let datasourceProyectos;
        let proyectoIdMaximo = "0";
        let codigoProyecto = "0";
        let arrayProjectCategories;
        this._projectService.getProjectAll().subscribe(res => {
            datasourceProyectos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(res);
            proyectoIdMaximo = (datasourceProyectos.filteredData[datasourceProyectos.filteredData.length - 1]["proyecto_id"]);
            codigoProyecto = datasourceProyectos.filteredData.find(e => e.proyecto_id == proyectoIdMaximo);
            this.datasourceCategories.forEach(element => {
                arrayProjectCategories = { proyecto_id: proyectoIdMaximo,
                    categoria_id: element.categoria_id,
                    presupuesto: 0,
                    responsable: '',
                    fecha_inicial: moment__WEBPACK_IMPORTED_MODULE_0__(new Date, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                    almacen_id: 1,
                    codigo_proyectocategoria: codigoProyecto["codigo_proyecto"] + '-' + element.codigo_categoria
                };
                // Inserta Proyecto Categoria
                this._projectCategoryservice.insertProjects(arrayProjectCategories).subscribe(res => {
                    console.log('CATEGORIAS', this.datasourceCategories);
                }, error => console.log("error al insertar proyectos categorias", error));
                arrayProjectCategories = null;
            });
        }, error => console.log("error consulta todos los proyectos", error));
    }
    fechaInicial(event) {
        console.log('fecha', this.fecha_inicial_proyecto);
    }
    cancel(event) {
        this.dialogRef.close();
    }
    addClient(form, event) {
        // Catálogo de clientes
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'CLIENTE',
            arrayData: null,
            clienteId: 0,
            estadoPantalla: 'New'
        };
        dialogConfig.width = '1400px';
        dialogConfig.height = '700px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    reloadClient(form, event) {
        // Carga clientes
        this.getcustomerAll();
    }
    selectcustommer(event) {
        this.cliente = event.value;
    }
    // =========================
    // UTILERIAS
    // =========================
    openSnackBar(message, action) {
        this._snackBar.open(message, action, { duration: 3000 });
    }
    _keyUp(event) {
        let ultimoCaracter;
        let valido = false;
        console.log('presione : ', event.target.value);
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (this.presupuesto_proyecto.length > 0) {
            ultimoCaracter = this.presupuesto_proyecto.slice(-1);
            for (let i = 0; i < 10; i++) {
                if (ultimoCaracter == i) {
                    valido = true;
                }
            }
            if (ultimoCaracter == '.') {
                valido = true;
            }
            if (valido == false) {
                this.presupuesto_proyecto = this.presupuesto_proyecto.substring(0, this.presupuesto_proyecto.length - 1);
            }
        }
    }
    // =========================
    // SERVICIOS
    // =========================
    getAllProjects() {
        // Actualiza registro NUEVO
        this._projectService.getProjectAll().subscribe(res => {
            this.datasourceProyects = res;
            if (this.projectId == 0) {
                this.codigo_proyecto = Number(this.datasourceProyects[this.datasourceProyects.length - 1]["codigo_proyecto"]) + 1;
                this.newProject.controls["codigo_proyecto"].setValue(Number(this.datasourceProyects[this.datasourceProyects.length - 1]["codigo_proyecto"]) + 1);
                console.log('PROEYCTOS TODOS', this.proeycto_numero_mayor);
            }
            else {
                this.codigo_proyecto = this.projectInfo["codigo_proyecto"];
            }
        }, error => console.log("error consulta proyectos", error));
    }
    getEnabledCategories() {
        // Selecciona todas las categorías
        this._categoryService.getCategoryAll().subscribe(res => {
            this.datasourceCategories = res;
            console.log('CATEGORIAS', this.datasourceCategories);
        }, error => console.log("error consulta categorias", error));
    }
    getcustomerAll() {
        // Selecciona todos los clientes
        this._customerservice.getcustomerAll().subscribe(res => {
            this.datasourceCustomers = res;
            console.log('CLIENTES', this.datasourceCustomers);
        }, error => console.log("error consulta categorias", error));
    }
}
ProjectCaptureDetailComponent.ɵfac = function ProjectCaptureDetailComponent_Factory(t) { return new (t || ProjectCaptureDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_projects_project_service__WEBPACK_IMPORTED_MODULE_2__.projectservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_category_category_service__WEBPACK_IMPORTED_MODULE_3__.categoryservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_4__.projectCategoryservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_5__.customerservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder)); };
ProjectCaptureDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProjectCaptureDetailComponent, selectors: [["app-project-capture-detail"]], decls: 139, vars: 20, consts: [["fxLayout", "row"], ["mat-dialog-content-example", "", 3, "formGroup"], ["fxLayout", "row", 1, "division"], ["fxFlex.gt-sm", "20%"], ["fxFlex.gt-sm", "10%"], ["matInput", "", "formControlName", "codigo_proyecto", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["fxFlex.gt-sm", "25%"], ["matInput", "", "placeholder", "", "formControlName", "nombre_proyecto", 1, "form-control", "form-control-line", "control", 3, "type"], ["formControlName", "cliente", 1, "form-control", "control", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-plus", "icon-cog-wite"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "fa", "fa-repeat", "fa-lg", "icon-cog-wite"], ["matInput", "", "formControlName", "presupuesto_proyecto", "step", "any", 1, "form-control", "form-control-line", "control", 3, "type", "keyup"], ["appearance", "fill"], ["matInput", "", "formControlName", "fecha_inicial_proyecto", 1, "control", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "fecha_final_proyecto", 1, "control", 3, "matDatepicker"], ["pickerf", ""], ["matInput", "", "placeholder", "Responsable", "formControlName", "responsable_proyecto", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "placeholder", "centroDeCostos", "formControlName", "centroDeCostos", 1, "form-control", "form-control-line", "control", 3, "type"], ["formControlName", "almacen", 1, "form-control"], ["value", "0", "selected", "selected"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "fa", "fa-check", "fa-lg", "icon-cog-wite"], ["mat-raised-button", "", 1, "btn-bg-red", 3, "click"], [1, "fa", "fa-arrow-left", "fa-lg", "icon-cog-wite"], [1, "help-block", 2, "color", "red"], [3, "value"]], template: function ProjectCaptureDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Nuevo Proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ProjectCaptureDetailComponent_span_14_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ProjectCaptureDetailComponent_span_25_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ProjectCaptureDetailComponent_Template_mat_select_selectionChange_34_listener($event) { return ctx.selectcustommer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ProjectCaptureDetailComponent_mat_option_35_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ProjectCaptureDetailComponent_span_36_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProjectCaptureDetailComponent_Template_button_click_37_listener($event) { return ctx.addClient(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProjectCaptureDetailComponent_Template_button_click_39_listener($event) { return ctx.reloadClient(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Presupuesto");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function ProjectCaptureDetailComponent_Template_input_keyup_50_listener($event) { return ctx._keyUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, ProjectCaptureDetailComponent_span_51_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Fecha Inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function ProjectCaptureDetailComponent_Template_input_dateChange_62_listener($event) { return ctx.fechaInicial($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "mat-datepicker-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "mat-datepicker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, ProjectCaptureDetailComponent_span_66_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Fecha Final");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "mat-datepicker-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "mat-datepicker", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, ProjectCaptureDetailComponent_span_82_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Responsable");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, ProjectCaptureDetailComponent_span_92_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Centro de costos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](103, ProjectCaptureDetailComponent_span_103_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "Almac\u00E9n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "SELECCIONA");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "California");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "Norte");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Centro");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](121, ProjectCaptureDetailComponent_span_121_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](123, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](130, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProjectCaptureDetailComponent_Template_button_click_133_listener($event) { return ctx.save(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](134, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProjectCaptureDetailComponent_Template_button_click_137_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](138, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](65);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.newProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.codigo_proyecto);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("codigo_proyecto").valid && ctx.newProject.get("codigo_proyecto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.nombre_proyecto);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("nombre_proyecto").valid && ctx.newProject.get("nombre_proyecto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.datasourceCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("cliente").valid && ctx.newProject.get("cliente").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.presupuesto_proyecto);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("presupuesto_proyecto").valid && ctx.newProject.get("presupuesto_proyecto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("fecha_inicial_proyecto").valid && ctx.newProject.get("fecha_inicial_proyecto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("fecha_final_proyecto").valid && ctx.newProject.get("fecha_final_proyecto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.responsable_proyecto);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("responsable_proyecto").valid && ctx.newProject.get("responsable_proyecto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.centro_de_costo_proyecto);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("centroDeCostos").valid && ctx.newProject.get("centroDeCostos").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("almacen").valid && ctx.newProject.get("almacen").touched);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption], styles: [".column[_ngcontent-%COMP%]{\nvertical-align: middle;\n}\n\n.control[_ngcontent-%COMP%]{\n    height: 35px;\n    vertical-align: middle;\n}\n\n.division[_ngcontent-%COMP%]{\n    padding-bottom: 1px;\n}\n\n.icon-cog[_ngcontent-%COMP%] {\n    color: orange;\n  }\n\n.icon-cog-wite[_ngcontent-%COMP%] {\n    color: white;\n  }\n\n.btn-bg-green[_ngcontent-%COMP%]{\n    background-color: forestgreen;\n}\n\n.btn-bg-orange[_ngcontent-%COMP%]{\n    background-color: orange;\n}\n\n.btn-bg-wite[_ngcontent-%COMP%]{\n    background-color: white;\n    border: none;\n}\n\n.btn-bg-red[_ngcontent-%COMP%]{\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY2FwdHVyZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJwcm9qZWN0LWNhcHR1cmUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1ue1xudmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbnRyb2x7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kaXZpc2lvbntcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG4uaWNvbi1jb2cge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuLmljb24tY29nLXdpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4uYnRuLWJnLWdyZWVue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuO1xufVxuXG4uYnRuLWJnLW9yYW5nZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5idG4tYmctd2l0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5idG4tYmctcmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */"] });


/***/ }),

/***/ 37204:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/quotations/quotation-detail-files/quotation-detail-files.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationDetailFilesComponent": function() { return /* binding */ QuotationDetailFilesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_projects_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/projects/project.service */ 56980);
/* harmony import */ var _services_category_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/category/category.service */ 70249);
/* harmony import */ var src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/projectCtegory/projectCateogry.service */ 7799);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _services_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/requisition/requisition.service */ 73232);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5015);






















function QuotationDetailFilesComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", op_r7.proveedor_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", op_r7.proveedor_nombre, " ");
} }
function QuotationDetailFilesComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuotationDetailFilesComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r8.SKU, " ");
} }
function QuotationDetailFilesComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuotationDetailFilesComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r9.file, " ");
} }
function QuotationDetailFilesComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 29);
} }
function QuotationDetailFilesComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 30);
} }
class QuotationDetailFilesComponent {
    constructor(dialogRef, _projectService, _categoryService, _projectCategoryservice, data, snackBar, formBuilder, _snackBar, _requisitionservice
    // , private notificationService: NotificationService,
    ) {
        this.dialogRef = dialogRef;
        this._projectService = _projectService;
        this._categoryService = _categoryService;
        this._projectCategoryservice = _projectCategoryservice;
        this.data = data;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this._requisitionservice = _requisitionservice;
        // =========================
        // DECLARACIONES
        // =========================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.displayedColumns = ['SKU', 'file'];
        // NgModels
        this.proveedor_id = 0;
        this.datasourcePoveedores = [];
        this.nombreArchivo = 'selecciona archivo';
        // NGModels
        this.cotizacionId = 0;
        this.QuotationInfo = data.arrayData;
        this.cotizacionId = data.cotizacionId;
        this.newProject = this.formBuilder.group({
            cotizacion_Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            proveedor_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
        });
    }
    ngOnInit() {
        this.cotizacionId = this.QuotationInfo["cotizacion_id"];
        console.log('cotizacion aqui', this.QuotationInfo["cotizacion_id"]);
        this.getProveedores();
    }
    onFileChange(event) {
        /* wire up file reader */
        const target = (event.target);
        let extencionArchivo = '';
        this.UploadDataQuotation = null;
        if (target.files.length !== 1) {
            throw new Error('No se pueden seleccionar multiples archivos');
        }
        this.nombreArchivo = (target.files.length > 0) ? target.files[0]["name"].substring(1, 30) : " (archivo nuevo) ";
        const reader = new FileReader();
        reader.readAsBinaryString(target.files[0]);
        extencionArchivo = target.files[0].name.substring(target.files[0].name.length - 5, target.files[0].name.length);
        console.log('AQUI ESTAN LAS EXTENCIONES DE EXCEL');
        reader.onload = (e) => {
            /* create workbook */
            const binarystr = e.target.result;
        };
    }
    // PROCEDIMIENTO
    validate(data) {
        // Valida que todos los datos esten completos
        return data;
    }
    deleteUploadFile(event) {
        this.nombreArchivo = " (archivo nuevo) ";
        this.UploadDataQuotation = null;
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, { duration: 3000 });
    }
    save(form, event) {
    }
    uploadFile(form, event) {
        let dataUploadFile = [];
        dataUploadFile.push({ proveedor_id: this.proveedor_id, file: this.nombreArchivo });
        this.dataShowUploadFile = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(dataUploadFile);
        this.openSnackBar('Se subió el archivo correctamente  ' + this.nombreArchivo, '');
    }
    cancel(form, event) {
        this.dialogRef.close();
    }
    // =====================
    // CONSILTA DE SERVICIOS
    // =====================
    getProveedores() {
        let arrayProvider;
        arrayProvider = [];
        arrayProvider.push({ proveedor_id: 1, proveedor_nombre: 'CABLES MONTERREY SA DE CV' }, { proveedor_id: 2, proveedor_nombre: 'VENTA DE CABLEADO SA' });
        this.datasourcePoveedores = arrayProvider;
        console.log(this.datasourcePoveedores);
    }
}
QuotationDetailFilesComponent.ɵfac = function QuotationDetailFilesComponent_Factory(t) { return new (t || QuotationDetailFilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_projects_project_service__WEBPACK_IMPORTED_MODULE_0__.projectservice), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_category_category_service__WEBPACK_IMPORTED_MODULE_1__.categoryservice), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_2__.projectCategoryservice), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_3__.requisitionservice)); };
QuotationDetailFilesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: QuotationDetailFilesComponent, selectors: [["app-quotation-detail-files"]], viewQuery: function QuotationDetailFilesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 64, vars: 9, consts: [["fxLayout", "row"], ["mat-dialog-content-example", "", 3, "formGroup"], ["fxLayout", "row", 1, "division"], ["fxFlex.gt-sm", "30%"], ["fxFlex.gt-sm", "20%"], ["fxFlex.gt-sm", "25%"], ["matInput", "", "formControlName", "cotizacion_Id", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type", "ngModel", "ngModelChange"], ["formControlName", "proveedor_id", 1, "form-control", "control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3"], ["type", "file", "name", "loadFile", "id", "loadFile", "placeholder", "SELECCIONA ARCHIVO", "onclick", "this.value=null;", 1, "form-control", "form-control-line", 2, "display", "none", 3, "change"], ["for", "loadFile", 1, "btn", "btn-outline-dark", 2, "margin", "0", "text-align", "left", "width", "400px"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "col-12", "col-md-12", "p-0"], [1, "card"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "SKU"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], ["mat-header-row", ""], ["mat-row", ""]], template: function QuotationDetailFilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Capturar cotizaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Cotizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function QuotationDetailFilesComponent_Template_input_ngModelChange_16_listener($event) { return ctx.cotizacionId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function QuotationDetailFilesComponent_Template_mat_select_ngModelChange_28_listener($event) { return ctx.proveedor_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, QuotationDetailFilesComponent_mat_option_29_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function QuotationDetailFilesComponent_Template_input_change_33_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationDetailFilesComponent_Template_button_click_40_listener($event) { return ctx.uploadFile(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Subir Archivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationDetailFilesComponent_Template_button_click_44_listener($event) { return ctx.cancel(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](56, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, QuotationDetailFilesComponent_th_57_Template, 3, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, QuotationDetailFilesComponent_td_58_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](59, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, QuotationDetailFilesComponent_th_60_Template, 3, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, QuotationDetailFilesComponent_td_61_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, QuotationDetailFilesComponent_tr_62_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, QuotationDetailFilesComponent_tr_63_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.cotizacionId)("ngModel", ctx.cotizacionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.proveedor_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.datasourcePoveedores);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.nombreArchivo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataShowUploadFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdW90YXRpb24tZGV0YWlsLWZpbGVzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 71168:
/*!**************************************************************************************!*\
  !*** ./src/app/components/quotations/quotation-detail/quotation-detail.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationDetailComponent": function() { return /* binding */ QuotationDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_projects_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projects/project.service */ 56980);
/* harmony import */ var _services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/category/category.service */ 70249);
/* harmony import */ var src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/projectCtegory/projectCateogry.service */ 7799);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _services_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/requisition/requisition.service */ 73232);
/* harmony import */ var _services_quotation_quotation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/quotation/quotation.service */ 9337);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);


























function QuotationDetailComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", op_r27.proyecto_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", op_r27.codigo_proyecto, " ");
} }
function QuotationDetailComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " seleccione un proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opx_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", opx_r28.proyectocategoria_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", opx_r28.codigo_proyectocategoria, " ");
} }
function QuotationDetailComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " seleccione una categot\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", op_r29.requisicioninterna_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", op_r29.codigo, " ");
} }
function QuotationDetailComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " seleccione una requisici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " capture una cotizaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_th_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " SELECCIONAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_td_92_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QuotationDetailComponent_td_92_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function QuotationDetailComponent_td_92_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const element_r30 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r33.SeleccionarRegistro(element_r30.cantidad, element_r30.requisicioninternadetalle_id, element_r30.um, element_r30.descripcion, $event); })("ngModelChange", function QuotationDetailComponent_td_92_Template_mat_checkbox_ngModelChange_1_listener($event) { const element_r30 = ctx.$implicit; return element_r30.activo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", element_r30.activo)("ngModel", element_r30.activo);
} }
function QuotationDetailComponent_th_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "sku");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_td_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.sku, " ");
} }
function QuotationDetailComponent_th_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_td_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.descripcion, " ");
} }
function QuotationDetailComponent_th_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_td_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.medida, " ");
} }
function QuotationDetailComponent_th_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_td_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.color, " ");
} }
function QuotationDetailComponent_th_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Unidad de Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_td_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40.unidad_de_medida, " ");
} }
function QuotationDetailComponent_th_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_td_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.cantidad, " ");
} }
function QuotationDetailComponent_th_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cantidad a comprar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuotationDetailComponent_td_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r42.cantidad_comprar, " ");
} }
function QuotationDetailComponent_tr_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 48);
} }
function QuotationDetailComponent_tr_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 49);
} }
class QuotationDetailComponent {
    constructor(dialogRef, _projectService, _categoryService, _projectCategoryservice, data, snackBar, formBuilder, _snackBar, _requisitionservice, _quotationservice
    // , private notificationService: NotificationService,
    ) {
        this.dialogRef = dialogRef;
        this._projectService = _projectService;
        this._categoryService = _categoryService;
        this._projectCategoryservice = _projectCategoryservice;
        this.data = data;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this._requisitionservice = _requisitionservice;
        this._quotationservice = _quotationservice;
        // ====================
        // DECLARACIONES
        // ====================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.fecha = moment__WEBPACK_IMPORTED_MODULE_0__(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
        this.requisicion_id = '';
        this.categoria_id = '';
        this.proyecto_id = 0;
        this.requisicion_Numero = '';
        this.cotizacion_Numero = '';
        this.loadfile = '';
        this.buscar = '';
        this.nombreArchivo = 'selecciona archivo';
        this.displayedColumns = ['select', 'sku', 'descripcion', 'medida', 'color', 'um', 'cantidad', 'cantidad_comprar'];
        this.requisicionId = 0;
        this.quotationId = 0;
        this.datasourceCategories = [];
        this.datasourcePorjects = [];
        this.datasourceRequisitionDetail = []; // MatTableDataSource<requisitionModelDetail>;
        this.datasourceCotizacionesDet = [];
        this.arraytemp = [];
        this.projectInfo = data.arrayData;
        this.requisicionId = data.requisicionId;
        this.quotationId = data.cotizacionId;
        this.newProject = this.formBuilder.group({
            proyecto_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            categoria_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            requisicion_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            requisicion_Numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            cotizacion_Numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            seleccionar: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
        });
    }
    ngOnInit() {
        console.log('this.projectInfo', this.projectInfo);
        this.getProyectos();
        if (this.projectInfo["cotizacion_id"] != 0) {
            this.newProject.patchValue({
                proyecto_id: this.projectInfo["proyecto_id"],
                requisicion_id: '',
                requisicion_Numero: this.projectInfo["codigo_requisicioninterna"],
                categoria_id: '',
                fecha: this.projectInfo["fecha"],
                cotizacion_Numero: this.projectInfo["codigo"],
                loadfile: ''
            });
            this.requisicion_Numero = this.projectInfo["codigo"];
            this.proyecto_id = this.projectInfo["proyecto_id"];
            this.requisicion_id = ''; //this.projectInfo["requisicion_id"];
            this.categoria_id = this.projectInfo["categoria_id"];
            this.fecha = '', //this.projectInfo["fecha"];
                this.loadfile = '';
            this.getQuotationDetail(this.projectInfo["cotizacion_id"]);
        }
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, { duration: 3000 });
    }
    proyectoSelected() {
        console.log('Selecciona categorias', this.newProject.controls["proyecto_id"].value);
        this.getCategories(this.newProject.controls["proyecto_id"].value);
    }
    categorySelected() {
        this.getrequisitionAll();
    }
    RequisitionSelected() {
        let arrayRequisicion_interna;
        let codigoRequisicion_interna;
        this.requisicionId = this.newProject.controls["requisicion_Numero"].value;
        arrayRequisicion_interna = this.datasourceRequisition.filter(e => e.requisicioninterna_id == this.requisicionId);
        this.getCotizacionesAll(arrayRequisicion_interna[0]["codigo"]);
        // Busca cotizaciones y arma nuevo numero de cotización
        this.getRequisitionDetail(this.requisicionId);
    }
    SeleccionarRegistro(cantidadOrdenar, requisicionDet_id, uom, descripcionOrdenar, event) {
        let arrayRequisicioneDetalle = [];
        if (event["checked"] == true && this.datasourceCotizacionesDet.filter(e => e.requisicionDetalle_id == requisicionDet_id).length == 0) {
            this.datasourceCotizacionesDet.push({ requisicioninternaDetalle_id: requisicionDet_id, cantidad: cantidadOrdenar, um: uom, descripcion: descripcionOrdenar });
        }
        if (event["checked"] == false && this.datasourceCotizacionesDet.filter(e => e.requisicionDetalle_id == requisicionDet_id).length != 0) {
            arrayRequisicioneDetalle = this.datasourceCotizacionesDet.filter(e => e.requisicionDetalle_id != requisicionDet_id);
            this.datasourceCotizacionesDet = [];
            this.datasourceCotizacionesDet = arrayRequisicioneDetalle;
        }
    }
    validaCamposRequeridos() {
        let valido = true;
        valido = (this.newProject.get('proyecto_id').status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("categoria_id").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("requisicion_Numero").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("cotizacion_Numero").status == 'INVALID') ? false : valido;
        return valido;
    }
    save(form, event) {
        let arrayTodb;
        if (this.validaCamposRequeridos() == false) {
            this.openSnackBar('debe capturar los campos requeridos', 'success');
            return;
        }
        if (this.quotationId == 0) {
            arrayTodb = {
                // proyecto_id : this.proyecto_id,
                requisicioninterna_id: this.newProject.controls["requisicion_Numero"].value,
                codigo: this.newProject.controls["cotizacion_Numero"].value,
                fecha: moment__WEBPACK_IMPORTED_MODULE_0__(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD')
            };
            // INSERTA REQUISICION HDR
            this.insertQuotationHeader(arrayTodb);
        }
        else {
            arrayTodb = {
                // proyecto_id : this.proyecto_id,
                categoria_id: this.newProject.controls["categoria_id"].value,
                requisicioninterna_id: this.newProject.controls["requisicionId"].value,
                fecha: moment__WEBPACK_IMPORTED_MODULE_0__(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD')
            };
            // Actualiza registro EDICION
            // this._projectService.updateProjects(arrayTodb).subscribe(
            // res=> {
            // console.log('Se edito con éxito', res);
            // },
            // error => console.log("error consulta regiones",error)
            // )
            // this.dialogRef.close();
        }
    }
    fechaControl(event) {
        console.log('fecha', this.fecha);
    }
    cancel(event) {
        this.dialogRef.close();
    }
    // =============================
    // UTILERIAS
    // =============================
    find(form, event) {
        // Buscar requisiciones
        console.log('requisiciones', this.requisicion_Numero);
        // this._requisitionservice.getRequisitionById(this.cotizacion_Numero).subscribe(
        //   res=> {
        //     this.datasourceCategories = res;
        //     console.log('PROYECTOS - CATEGORIAS', res);
        //   },
        //   error => console.log("error consulta cateogorias",error)
        // )
    }
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    // =============================
    // CONSUME SERVICIOS
    // =============================
    getProyectos() {
        // Obtiene proyectos
        this._projectService.getProjectAll().subscribe(res => {
            this.datasourcePorjects = res;
            console.log('PROYECTOS', res);
        }, error => console.log("error consulta proyectos", error));
    }
    getCotizacionesAll(requisicion_interna) {
        this._quotationservice.getQuotationAll().subscribe(res => {
            this.datasourceCotizaciones = res;
            console.log('COTIZACIONES TODAS', res);
            this.cotizacion_Numero = this.cotizacion_Numero = requisicion_interna + '-' + (this.datasourceCotizaciones.filter(e => e.codigo_requisicioninterna == requisicion_interna).length + 1);
            this.newProject.controls["cotizacion_Numero"].setValue(this.cotizacion_Numero = requisicion_interna + '-' + (this.datasourceCotizaciones.filter(e => e.codigo_requisicioninterna == requisicion_interna).length + 1));
        }, error => console.log("error consulta proyectos", error));
    }
    getQuotationDetail(cotizacionId) {
        // Obtiene el detalle de la cotización
        this._quotationservice.getQuotationDetail(cotizacionId).subscribe(res => {
            this.datasourceRequisitionDetail = res;
            console.log('datasourde cotizacion', res);
        }, error => console.log("error consulta requisiciones", error));
    }
    getrequisitionAll() {
        // Obtiene todas las requisiciones 
        this._requisitionservice.getRequisitionAll().subscribe(res => {
            // this.datasourceRequisition = [];
            this.datasourceRequisition = res;
            this.datasourceRequisition = this.datasourceRequisition.filter(e => e.proyectocategoria_id == this.newProject.controls["categoria_id"].value);
            // // Consulta detalle de requisición
            // this.getRequisitionDetail();
        }, error => console.log("error consulta requisiciones", error));
    }
    getrequisition() {
        // Obtiene las requisiciones 
        this._requisitionservice.getRequisitionById(this.newProject.controls["categoria_id"].value).subscribe(res => {
            this.datasourceRequisition = [];
            this.datasourceRequisition.push(res);
            console.log('REQUISICIONES', this.datasourceRequisition);
            //     // Consulta detalle de requisición
            //     this.getRequisitionDetail();
        }, error => console.log("error consulta requisiciones", error));
    }
    getRequisitionDetail(Requisition_Id) {
        // Obtiene requisiciones 
        this._requisitionservice.getRequisitionDetail(Requisition_Id).subscribe(res => {
            this.datasourceRequisitionDetail = (res);
            console.log('REQUISICIONES DETALLE', this.datasourceRequisitionDetail);
        }, error => console.log("error consulta requisiciones", error));
    }
    getCategories(proyecto) {
        // Obtiene categorias 
        this._projectCategoryservice.getProjectCateogryById(proyecto).subscribe(res => {
            this.datasourceCategories = res;
            console.log('PROYECTOS - CATEGORIAS', res);
        }, error => console.log("error consulta cateogorias", error));
        // this._projectCategoryservice.getProjectCateogryAll().subscribe(
        //   res=> {
        //     this.datasourceCategories = res;
        //     console.log('PROYECTOS - CATEGORIAS', res);
        //   },
        //   error => console.log("error consulta cateogorias",error)
        // )
    }
    insertQuotationHeader(arrayTodb) {
        this._quotationservice.insertQuotation(arrayTodb).subscribe(res => {
            console.log('Se inserto con éxito', res);
            // INSERTA REQUISICIONES DET
            this.insertQuotationDet(res);
        }, error => console.log("error alta de proyectos", error));
    }
    insertQuotationDet(cotizacionId) {
        console.log('para guardar', this.datasourceCotizacionesDet);
        // Obtiene Requisicion Registrada
        let datasourceRequsition;
        let requisitionIdMaximo = "0";
        let arrayToDb;
        this.tabla1["_data"].forEach(element => {
            console.log('elemento', element);
            if (element.activo == true) {
                arrayToDb = { cotizaciondetalle_id: 0,
                    codigo_cotizacion: '',
                    requisicioninternadetalle_id: element.requisicioninternadetalle_id,
                    cotizacion_id: cotizacionId,
                    sku: element.sku,
                    medida: element.medida,
                    color: element.color,
                    otras_especificaciones: element.otras_especificaciones,
                    cantidad: element.cantidad,
                    unidad_medida: element.unidad_medida,
                    descripcion: element.descripcion,
                    descuento: 0,
                    costo: 0
                };
                // Inserta Proyecto Categoria
                this._quotationservice.insertQuotationDetail(arrayToDb).subscribe(res => {
                    console.log('INSERTA COTIZACION DETALLE', arrayToDb);
                    this.openSnackBar('Se genero el la cotización exitosamente', 'success');
                }, error => console.log("error al insertar proyectos categorias", error));
            }
            arrayToDb = null;
        });
        // this.datasourceCotizacionesDet.forEach(element => {
        // arrayToDb = { cotizaciondetalle_id: 0
        //     , codigo_cotizacion : ''
        //     , requisicioninternaDetalle_id : element.requisicioninternaDetalle_id
        //     , cotizacion_id : cotizacionId
        //     , sku : element.sku
        //     , medida : ''
        //     , color : ''
        //     , otras_especificaciones : ''
        //     , almacen_id : 1
        //     , cantidad : element.cantidad
        //     , unidad_medida : element.um
        //     , descripcion : element.descripcion
        //     , descuento : 0
        //     , costo : 0
        // }
        // Inserta Proyecto Categoria
        //   this._quotationservice.insertQuotationDetail(arrayToDb).subscribe(
        //     res=> {
        //       console.log('INSERTA COTIZACION DETALLE', arrayToDb);
        //       this.openSnackBar('Se genero el la cotización exitosamente', 'success');
        //     },
        //     error => console.log("error al insertar proyectos categorias",error)
        //   )
        //   arrayToDb = null;
        // });
    }
}
QuotationDetailComponent.ɵfac = function QuotationDetailComponent_Factory(t) { return new (t || QuotationDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_projects_project_service__WEBPACK_IMPORTED_MODULE_1__.projectservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__.categoryservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_3__.projectCategoryservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_4__.requisitionservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_quotation_quotation_service__WEBPACK_IMPORTED_MODULE_5__.quotationservice)); };
QuotationDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: QuotationDetailComponent, selectors: [["app-quotation-detail"]], viewQuery: function QuotationDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.tabla1 = _t.first);
    } }, decls: 116, vars: 14, consts: [["fxLayout", "row"], ["mat-dialog-content-example", "", 3, "formGroup"], ["fxLayout", "row", 1, "division"], ["fxFlex.gt-sm", "20%"], ["fxFlex.gt-sm", "25%"], ["formControlName", "proyecto_id", 1, "form-control", "control", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["fxFlex.gt-sm", "10%"], ["formControlName", "categoria_id", 1, "form-control", "control", 3, "selectionChange"], ["formControlName", "requisicion_Numero", 1, "form-control", "control", 3, "selectionChange"], ["appearance", "fill"], ["matInput", "", "formControlName", "fecha", 1, "control", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "cotizacion_Numero", 1, "form-control", "form-control-line", "control", 3, "type"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "col-12", "col-md-12", "p-0"], [1, "card"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["tabla1", ""], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], [2, "width", "50px"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sku"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["matColumnDef", "descripcion"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "medida"], ["matColumnDef", "color"], ["matColumnDef", "um"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["matColumnDef", "cantidad"], ["matColumnDef", "cantidad_comprar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], [1, "help-block", 2, "color", "red"], ["mat-header-cell", ""], [2, "width", "100%", "text-align", "left", "vertical-align", "middle"], ["mat-cell", ""], ["color", "warn", "formControlName", "seleccionar", 3, "checked", "ngModel", "click", "change", "ngModelChange"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-header-row", ""], ["mat-row", ""]], template: function QuotationDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Nueva Cotizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QuotationDetailComponent_Template_mat_select_selectionChange_13_listener() { return ctx.proyectoSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, QuotationDetailComponent_mat_option_14_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, QuotationDetailComponent_span_15_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Proyecto-Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QuotationDetailComponent_Template_mat_select_selectionChange_25_listener() { return ctx.categorySelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, QuotationDetailComponent_mat_option_26_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, QuotationDetailComponent_span_27_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Requisici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QuotationDetailComponent_Template_mat_select_selectionChange_36_listener() { return ctx.RequisitionSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, QuotationDetailComponent_mat_option_37_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, QuotationDetailComponent_span_38_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function QuotationDetailComponent_Template_input_dateChange_49_listener($event) { return ctx.fechaControl($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Cotizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, QuotationDetailComponent_span_62_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QuotationDetailComponent_Template_button_click_78_listener($event) { return ctx.save(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Generar Cotizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function QuotationDetailComponent_Template_button_click_82_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "mat-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](89, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, QuotationDetailComponent_th_90_Template, 3, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, QuotationDetailComponent_td_92_Template, 2, 2, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](93, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](94, QuotationDetailComponent_th_94_Template, 3, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](95, QuotationDetailComponent_td_95_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](96, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](97, QuotationDetailComponent_th_97_Template, 2, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](98, QuotationDetailComponent_td_98_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](99, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](100, QuotationDetailComponent_th_100_Template, 2, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](101, QuotationDetailComponent_td_101_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](102, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](103, QuotationDetailComponent_th_103_Template, 2, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](104, QuotationDetailComponent_td_104_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](105, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](106, QuotationDetailComponent_th_106_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](107, QuotationDetailComponent_td_107_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](108, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](109, QuotationDetailComponent_th_109_Template, 3, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](110, QuotationDetailComponent_td_110_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](111, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](112, QuotationDetailComponent_th_112_Template, 3, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](113, QuotationDetailComponent_td_113_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](114, QuotationDetailComponent_tr_114_Template, 1, 0, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](115, QuotationDetailComponent_tr_115_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.newProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.datasourcePorjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("proyecto_id").valid && ctx.newProject.get("proyecto_id").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.datasourceCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("categoria_id").valid && ctx.newProject.get("categoria_id").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.datasourceRequisition);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("requisicion_Numero").valid && ctx.newProject.get("requisicion_Numero").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.cotizacion_Numero);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("cotizacion_Numero").valid && ctx.newProject.get("cotizacion_Numero").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.datasourceRequisitionDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckbox, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdW90YXRpb24tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3073:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/repse-supplier-review-detail/repse-supplier-review-detail.component.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepseSupplierReviewDetailComponent": function() { return /* binding */ RepseSupplierReviewDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var src_app_components_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/supplier-detail/supplier-detail.component */ 72382);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/supplier.service */ 64562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);














function RepseSupplierReviewDetailComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r18.proveedorid, " ");
} }
function RepseSupplierReviewDetailComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r19.nombre, " ");
} }
function RepseSupplierReviewDetailComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r20.direccion, " ");
} }
function RepseSupplierReviewDetailComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " rfc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r21.rfc, " ");
} }
function RepseSupplierReviewDetailComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Estatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_32_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_32_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "INACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RepseSupplierReviewDetailComponent_td_32_ng_container_1_Template, 2, 0, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RepseSupplierReviewDetailComponent_td_32_ng_container_2_Template, 2, 0, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r22.estado == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r22.estado == false);
} }
function RepseSupplierReviewDetailComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RepseSupplierReviewDetailComponent_td_35_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const element_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.decline(element_r25, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Autorizar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RepseSupplierReviewDetailComponent_td_38_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const element_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.accept(element_r28, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Autorizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Denegar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RepseSupplierReviewDetailComponent_td_41_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const element_r31 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.decline(element_r31, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewDetailComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 42);
} }
function RepseSupplierReviewDetailComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 43);
} }
class RepseSupplierReviewDetailComponent {
    constructor(dialog, _excelService, _supplyservice) {
        this.dialog = dialog;
        this._excelService = _excelService;
        this._supplyservice = _supplyservice;
        // =================
        // DECLARACIONES
        // =================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.displayedColumns = ['id', 'nombre', 'direccion', 'rfc', 'estado', 'ver', 'autorize', 'declain'];
    }
    // =================
    // PROCEDIMIENTOS
    // =================
    ngOnInit() {
        this.getsupplier();
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({
                nombre: element.nombre,
                direccion: element.direccion,
                RFC: element.rfc,
                estatus: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Proveedores');
    }
    newcustomer(evetn) {
        console.log('Alta de proveedores');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'PROVEEDOR',
            arrayData: null,
            proveedorId: 0,
            estadoPantalla: 'New'
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_0__.SupplierDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    accept(element, event) {
        console.log('Editar un proveedores', element.proveedorId);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'PROVEEDOR',
            arrayData: element,
            proveedorId: element.proveedorId,
            estadoPantalla: 'Edit'
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(RepseSupplierReviewDetailComponent, dialogConfig);
        // const dialogRef = this.dialog.open(SupplierDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    decline(element, event) {
        console.log('Editar un proveedores', element.proveedorId);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'PROVEEDOR',
            arrayData: element,
            proveedorId: element.proveedorId,
            estadoPantalla: 'Edit'
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(RepseSupplierReviewDetailComponent, dialogConfig);
        // const dialogRef = this.dialog.open(SupplierDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    // =================
    // UTILERIAS
    // =================
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
    // =================
    // SERVICIOS
    // =================
    getsupplier() {
        // Proyectos registrados
        this._supplyservice.getsupplyAll().subscribe(res => {
            console.log('Proveedores', res);
            this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.iterator();
            this.dataSourceShow.sort = this.sort;
        }, error => console.log("error consulta regiones", error));
    }
}
RepseSupplierReviewDetailComponent.ɵfac = function RepseSupplierReviewDetailComponent_Factory(t) { return new (t || RepseSupplierReviewDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_1__.ExcelServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__.supplyservice)); };
RepseSupplierReviewDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RepseSupplierReviewDetailComponent, selectors: [["app-repse-supplier-review-detail"]], viewQuery: function RepseSupplierReviewDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 44, vars: 3, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", "hidden", "", 4, "matHeaderCellDef"], ["mat-cell", "", "hidden", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "direccion"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["matColumnDef", "rfc"], ["matColumnDef", "estado"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "ver"], ["mat-header-cell", "", "class", ".colbuttons", 4, "matHeaderCellDef"], ["matColumnDef", "autorize"], ["matColumnDef", "declain"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", "hidden", "", 1, "col30"], ["mat-cell", "", "hidden", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], [4, "ngIf"], ["mat-header-cell", "", 1, ".colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-lock"], ["mat-header-row", ""], ["mat-row", ""]], template: function RepseSupplierReviewDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Proveedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RepseSupplierReviewDetailComponent_th_19_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, RepseSupplierReviewDetailComponent_td_20_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, RepseSupplierReviewDetailComponent_th_22_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, RepseSupplierReviewDetailComponent_td_23_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, RepseSupplierReviewDetailComponent_th_25_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, RepseSupplierReviewDetailComponent_td_26_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, RepseSupplierReviewDetailComponent_th_28_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, RepseSupplierReviewDetailComponent_td_29_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, RepseSupplierReviewDetailComponent_th_31_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, RepseSupplierReviewDetailComponent_td_32_Template, 3, 2, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, RepseSupplierReviewDetailComponent_th_34_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, RepseSupplierReviewDetailComponent_td_35_Template, 3, 0, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](36, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, RepseSupplierReviewDetailComponent_th_37_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, RepseSupplierReviewDetailComponent_td_38_Template, 3, 0, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](39, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, RepseSupplierReviewDetailComponent_th_40_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, RepseSupplierReviewDetailComponent_td_41_Template, 3, 0, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, RepseSupplierReviewDetailComponent_tr_42_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, RepseSupplierReviewDetailComponent_tr_43_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBzZS1zdXBwbGllci1yZXZpZXctZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 67027:
/*!********************************************************************************************!*\
  !*** ./src/app/components/requisitions/requisition-detail/requisition-detail.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitionDetailComponent": function() { return /* binding */ RequisitionDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 84487);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_projects_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/projects/project.service */ 56980);
/* harmony import */ var _services_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/category/category.service */ 70249);
/* harmony import */ var src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/projectCtegory/projectCateogry.service */ 7799);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _services_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/requisition/requisition.service */ 73232);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 51095);

























function RequisitionDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_div_9_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", op_r28.proyecto_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", op_r28.codigo_proyecto, " ");
} }
function RequisitionDetailComponent_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " seleccione un proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function RequisitionDetailComponent_div_9_Template_mat_select_selectionChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.proyectoSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RequisitionDetailComponent_div_9_mat_option_3_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RequisitionDetailComponent_div_9_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.datasourcePorjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.newProject.get("proyecto_id").valid && ctx_r1.newProject.get("proyecto_id").touched);
} }
function RequisitionDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Proyecto-Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_div_15_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opx_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", opx_r33.proyectocategoria_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", opx_r33.codigo_proyectocategoria, " ");
} }
function RequisitionDetailComponent_div_15_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " seleccione una categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function RequisitionDetailComponent_div_15_Template_mat_select_selectionChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r34.categorySelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RequisitionDetailComponent_div_15_mat_option_3_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RequisitionDetailComponent_div_15_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.datasourceCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.newProject.get("categoria_id").valid && ctx_r3.newProject.get("categoria_id").touched);
} }
function RequisitionDetailComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " capture un n\u00FAmero de Requisici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RequisitionDetailComponent_div_42_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r36.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.nombreArchivo);
} }
function RequisitionDetailComponent_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RequisitionDetailComponent_ng_container_54_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r38.save(ctx_r38.newProject, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function RequisitionDetailComponent_button_58_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RequisitionDetailComponent_button_58_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r40.cancel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_button_60_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RequisitionDetailComponent_button_60_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r42.cancel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Regresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r44.SKU, " ");
} }
function RequisitionDetailComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r45.cantidad, " ");
} }
function RequisitionDetailComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Unidad de Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r46.um, " ");
} }
function RequisitionDetailComponent_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_td_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r47.descripcion, " ");
} }
function RequisitionDetailComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r48.medida, " ");
} }
function RequisitionDetailComponent_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_td_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r49.color, " ");
} }
function RequisitionDetailComponent_th_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Otras especificaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RequisitionDetailComponent_td_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r50.otras_especificaciones, " ");
} }
function RequisitionDetailComponent_tr_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 45);
} }
function RequisitionDetailComponent_tr_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 46);
} }
// import { NotificationService } from '../../../services/common/notification.service';
class RequisitionDetailComponent {
    constructor(dialogRef, _projectService, _categoryService, _projectCategoryservice, data, snackBar, formBuilder, _snackBar, _requisitionservice
    // , private notificationService: NotificationService,
    ) {
        this.dialogRef = dialogRef;
        this._projectService = _projectService;
        this._categoryService = _categoryService;
        this._projectCategoryservice = _projectCategoryservice;
        this.data = data;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this._requisitionservice = _requisitionservice;
        // ===================
        // DECLARACIONES
        // ===================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.fecha = moment__WEBPACK_IMPORTED_MODULE_0__(new Date, 'DD-MM-YYYY hh:mm').format('DD-MM-YYYY');
        this.requisicion_id = '';
        this.categoria_id = '';
        this.proyecto_id = 0;
        this.requisicion_Numero = '';
        this.loadfile = '';
        this.buscar = '';
        this.nombreArchivo = 'selecciona archivo';
        // displayedColumns = ['SKU', 'cantidad', 'unidad_de_medida', 'descripcion'];
        this.displayedColumns = ['SKU', 'cantidad', 'unidad_de_medida', 'descripcion', 'medida', 'color', 'otras_Especificaciones'];
        this.requisicionId = 0;
        this.datasourceCategories = [];
        this.datasourcePorjects = [];
        this.projectInfo = data.arrayData;
        this.requisicionId = data.requisicionId;
        this.newProject = this.formBuilder.group({
            proyecto_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            categoria_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            requisicion_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            requisicion_Numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
            // loadFile: new FormControl(''),
        });
    }
    // ===============
    // PROCEDIMIENTOS
    // ===============
    ngOnInit() {
        this.getProyectos();
        this.getEnabledCategories();
        console.log('this.projectInfo["codigo"]', this.requisicionId);
        this.newProject.controls["categoria_id"].setValue(this.projectInfo["codigo_proyectocategoria"]);
        if (this.requisicionId != 0) {
            this.newProject.patchValue({
                proyecto_id: this.projectInfo["proyecto_id"],
                requisicion_id: '',
                requisicion_Numero: this.projectInfo["codigo"],
                categoria_id: '',
                fecha: moment__WEBPACK_IMPORTED_MODULE_0__(new Date),
                loadfile: ''
            });
            this.requisicion_Numero = this.projectInfo["codigo"];
            // this.projectInfo.controls["proyecto_id"].setValue(77);
            this.proyecto_id = this.projectInfo["proyecto_id"];
            this.requisicion_id = ''; //this.projectInfo["requisicion_id"];
            this.categoria_id = this.projectInfo["proyectocategoria_id"];
            // this.projectInfo.controls["categoria_id"].setValue('161');
            this.fecha = '', //this.projectInfo["fecha"];
                this.loadfile = '';
            this.getRequisitionDetail(this.requisicionId);
        }
    }
    onFileChange(event) {
        /* wire up file reader */
        const target = (event.target);
        let extencionArchivo = '';
        this.UploadDataExcel = null;
        if (target.files.length !== 1) {
            throw new Error('No se pueden seleccionar multiples archivos');
        }
        this.nombreArchivo = (target.files.length > 0) ? target.files[0]["name"].substring(1, 30) : " (archivo nuevo) ";
        const reader = new FileReader();
        reader.readAsBinaryString(target.files[0]);
        extencionArchivo = target.files[0].name.substring(target.files[0].name.length - 5, target.files[0].name.length);
        if (extencionArchivo == '.xlsx' || extencionArchivo.substring(extencionArchivo.length - 4, extencionArchivo.length) == 'xls') {
            console.log('AQUI ESTAN LAS EXTENCIONES DE EXCEL');
            reader.onload = (e) => {
                /* create workbook */
                const binarystr = e.target.result;
                const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__.read(binarystr, { type: 'binary' });
                /* selected the first sheet */
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                /* save data */
                const data = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.sheet_to_json(ws);
                this.dataExcel = this.validate(data);
                this.dataExcel = data;
                let arrayErrores = [];
                let arrayExcel = [];
                let valido = true;
                // Validadores de campos
                let errorCantidad = false;
                let errorUoM = false;
                let errorDescripcion = false;
                let errorSKU = false;
                let DescripcionAnt = '';
                let Descripcion = '';
                // Ordena los descuentos por cr + produto + plataforma
                this.dataExcel.sort(function (a, b) {
                    if (a.DESCRIPCION > b.DESCRIPCION) {
                        return 1;
                    }
                    if (a.DESCRIPCION < b.DESCRIPCION) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                });
                DescripcionAnt = this.dataExcel[0]["DESCRIPCION"].toUpperCase();
                // Validamos que los crs del excel vs las existentes en el ctálogo
                let contador = 0;
                this.dataExcel.forEach(element => {
                    // Reinicia valores
                    valido = true;
                    errorDescripcion = false;
                    Descripcion = element.DESCRIPCION.toUpperCase();
                    if (element.SKU == '') {
                        valido = false;
                        errorSKU = true;
                    }
                    if (element.CANTIDAD_REQUERIDA == '') {
                        valido = false;
                        errorCantidad = true;
                    }
                    if (element.UNIDAD.toUpperCase() == '') {
                        valido = false;
                        errorUoM = true;
                    }
                    if (element.DESCRIPCION.toUpperCase() == '') {
                        valido = false;
                        errorDescripcion = true;
                    }
                    contador++;
                    DescripcionAnt = Descripcion;
                    if (valido == false) {
                        arrayErrores.push({ cantidad: element.CANTIDAD_REQUERIDA,
                            unidad_de_medida: element.UNIDAD,
                            descripcion: element.DESCRIPCION.toUpperCase()
                        });
                    }
                    else {
                        arrayExcel.push({
                            requisition_Id: 0,
                            SKU: element.SKU,
                            cantidad: element.CANTIDAD_REQUERIDA,
                            um: element.UNIDAD,
                            descripcion: element.DESCRIPCION,
                            medida: element.MEDIDA,
                            color: element.COLOR,
                            otras_especificaciones: element.OTRAS_ESPECIFICACIONES
                        });
                    }
                });
                if (arrayErrores.length > 0) {
                    this.openSnackBar('Los registros contienen datos incorrectos', '');
                    // this.notificationService.openNotification(AppConstants.defaultNotificationWarningTitle, 'Los registros contienen estaciónes, productos o plataformas no validos', 'warn');
                    this.dataExcel = null;
                    // this.openErrorDialog(arrayErroresEstacion);
                    return;
                }
                this.UploadDataExcel = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(arrayExcel);
                console.log('datos del excel', this.UploadDataExcel);
            };
        }
        else {
            this.openSnackBar('Los registros contienen datos incorrectos', '');
            // this.notificationService.openNotification(AppConstants.defaultNotificationWarningTitle, 'No es un archivo de excel válido', 'warn');
            this.deleteUploadFile(event);
        }
    }
    validate(data) {
        // Valida que todos los datos esten completos
        return data;
    }
    deleteUploadFile(event) {
        this.nombreArchivo = " (archivo nuevo) ";
        this.UploadDataExcel = null;
    }
    proyectoSelected() {
        console.log('Selecciona categorias', this.newProject.controls["proyecto_id"].value);
        this.getCategories(this.newProject.controls["proyecto_id"].value);
    }
    categorySelected() {
        // Obtenemos requisiciones existentes y generamos nuevo numero para la requisición
        let proyectoCategoria_id = this.newProject.controls["categoria_id"].value;
        let codigo_categoria = 0;
        let arrayProyectoCategoria;
        arrayProyectoCategoria = this.datasourceCategories.filter(e => e.proyectocategoria_id == proyectoCategoria_id);
        codigo_categoria = arrayProyectoCategoria[0]["codigo_proyectocategoria"];
        this.getrequisition(codigo_categoria);
    }
    validaCamposRequeridos() {
        let valido = true;
        valido = (this.newProject.get('proyecto_id').status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("categoria_id").status == 'INVALID') ? false : valido;
        valido = (this.newProject.get("requisicion_Numero").status == 'INVALID') ? false : valido;
        return valido;
    }
    save(form, event) {
        let arrayTodb;
        if (this.validaCamposRequeridos() == false) {
            this.openSnackBar('debe capturar los campos requeridos', 'success');
            return;
        }
        if (this.requisicionId == 0) {
            arrayTodb = {
                proyectocategoria_id: this.newProject.controls["categoria_id"].value,
                codigo: this.newProject.controls["requisicion_Numero"].value,
                fecha: moment__WEBPACK_IMPORTED_MODULE_0__(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD') //,
            };
            // INSERTA REQUISICION HDR
            this.insertRequisition(arrayTodb);
        }
        else {
            arrayTodb = { proyecto_id: this.newProject.controls["requisicion_Numero"].value,
                proyectocategoria_id: this.newProject.controls["categoria_id"].value,
                requisicion_id: this.requisicion_id,
                fecha: moment__WEBPACK_IMPORTED_MODULE_0__(this.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD')
            };
            // Actualiza registro EDICION
            this.updateRequisition(arrayTodb);
        }
    }
    fechaInicial(event) {
        console.log('fecha', this.fecha);
    }
    cancel(event) {
        this.dialogRef.close();
    }
    // ====================
    // UTILERIAS
    // ====================
    openSnackBar(message, action) {
        this._snackBar.open(message, action, { duration: 3000 });
    }
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.UploadDataExcel = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(part);
        this.UploadDataExcel.sort = this.sort;
        this.UploadDataExcel.paginator = this.paginator;
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.UploadDataExcel.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    // ====================
    // LLAMADAS A SERVICIOS
    // ====================
    getEnabledCategories() {
        // Actualiza registro NUEVO
        this._projectCategoryservice.getProjectCateogryById(1).subscribe(res => {
            this.datasourceCategories = res;
            console.log('CATEGORIAS', res);
        }, error => console.log("error consulta categorias", error));
    }
    getProyectos() {
        // Obtiene proyectos
        this._projectService.getProjectAll().subscribe(res => {
            this.datasourcePorjects = res;
            console.log('PROYECTOS', res);
        }, error => console.log("error consulta proyectos", error));
    }
    getrequisition(codigo_categoria) {
        let categoria_id = this.newProject.controls["categoria_id"].value;
        let codigo_requisicion = 0;
        let arrayRequisition;
        let arrayCodigoCategoria;
        // Proyectos registrados
        this._requisitionservice.getRequisitionAll().subscribe(res => {
            this.datasourceRequisition = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(res);
            if (this.datasourceRequisition.filteredData.length == 0) {
                codigo_requisicion = codigo_categoria + '-1';
            }
            else {
                // Obtener requisicion en la que se mas alta y determinar cual sigue
                arrayRequisition = this.datasourceRequisition.filteredData.filter(e => e.proyectocategoria_id == categoria_id);
                if (arrayRequisition.length > 0) {
                    let cantidadRequisition = arrayRequisition.length;
                    codigo_requisicion = codigo_categoria + '-' + (cantidadRequisition + 1);
                }
                else {
                    // obtener codigo_categoria
                    arrayCodigoCategoria = 1;
                    codigo_requisicion = codigo_categoria + '-1';
                }
            }
            // this.newProject.controls["requisicion_Numero"].setValue = codigo_categoria + codigo_requisicion;
            this.requisicion_Numero = codigo_requisicion;
            this.newProject.controls["requisicion_Numero"].setValue(codigo_requisicion);
        }, error => console.log("error consulta regiones", error));
    }
    getCategories(proyecto) {
        // Obtiene categorias 
        this._projectCategoryservice.getProjectCateogryById(proyecto).subscribe(res => {
            this.datasourceCategories = res;
            console.log('PROYECTOS - CATEGORIAS', res);
        }, error => console.log("error consulta cateogorias", error));
    }
    insertRequisition(arrayTodb) {
        this._requisitionservice.insertRequisition(arrayTodb).subscribe(res => {
            console.log('Se inserto con éxito', res);
            // INSERTA REQUISICIONES DET
            this.insertRequisitionDet(res);
        }, error => console.log("error alta de proyectos", error));
    }
    getRequisitionDetail(arrayTodb) {
        let arrayRequsitionDetail;
        let arrayRequsitionToTable = []; //MatTableDataSource<requisitionModelDetail>;
        this._requisitionservice.getRequisitionDetail(arrayTodb).subscribe(res => {
            arrayRequsitionDetail = res;
            arrayRequsitionDetail.forEach(element => {
                arrayRequsitionToTable.push({ requisition_Id: 0, SKU: element.sku, cantidad: element.cantidad, um: element.unidad_medida, descripcion: element.descripcion, medida: element.medida });
            });
            this.UploadDataExcel = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(arrayRequsitionToTable);
            console.log('Se obtiene detalle de requisición', res);
        }, error => console.log("error alta de proyectos", error));
    }
    updateRequisition(arrayTodb) {
        console.log('ACTUALIZA REQUISICION');
        // this._projectService.updateProjects(arrayTodb).subscribe(
        // res=> {
        // console.log('Se edito con éxito', res);
        // },
        // error => console.log("error consulta regiones",error)
        // )
        // this.dialogRef.close();
    }
    insertRequisitionDet(requisicionId) {
        // Obtiene Requisicion Registrada
        let datasourceRequsition;
        let requisitionIdMaximo = "0";
        let arrayToDb;
        this.UploadDataExcel.filteredData.forEach(element => {
            arrayToDb = { requisicioninternadetalle_id: 0,
                requisicioninterna_id: requisicionId,
                cantidad: element.cantidad,
                sku: element.SKU,
                codigo_requisicioninterna: '',
                unidad_medida: element.um,
                descripcion: element.descripcion,
                existencia_almacen: 0,
                cantidad_comprar: element.cantidad,
                medida: (element.medida != undefined) ? element.medida : '',
                color: (element.color != undefined) ? element.color : '',
                otras_especificaciones: (element.otras_especificaciones != undefined) ? element.otras_especificaciones : '',
                estado: true,
                cotizado: false
            };
            console.log('DETALLE DETALLE DETALLE', arrayToDb);
            // Inserta Proyecto Categoria
            this._requisitionservice.insertRequisitionDetail(arrayToDb).subscribe(res => {
                console.log('REQUISICIONES DETALLE', res);
                this.openSnackBar('Se genero el la requisición exitosamente', 'success');
                // this.dialogRef.close();
            }, error => console.log("error al insertar proyectos categorias", error));
            arrayToDb = null;
        });
    }
}
RequisitionDetailComponent.ɵfac = function RequisitionDetailComponent_Factory(t) { return new (t || RequisitionDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_projects_project_service__WEBPACK_IMPORTED_MODULE_2__.projectservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_category_category_service__WEBPACK_IMPORTED_MODULE_3__.categoryservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_projectCtegory_projectCateogry_service__WEBPACK_IMPORTED_MODULE_4__.projectCategoryservice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_5__.requisitionservice)); };
RequisitionDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RequisitionDetailComponent, selectors: [["app-requisition-detail"]], viewQuery: function RequisitionDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 88, vars: 21, consts: [["fxLayout", "row"], ["mat-dialog-content-example", "", 3, "formGroup"], ["fxLayout", "row", 1, "division"], ["fxFlex.gt-sm", "20%"], [4, "ngIf"], ["fxFlex.gt-sm", "25%"], ["fxFlex.gt-sm", "10%"], ["matInput", "", "formControlName", "requisicion_Numero", 1, "form-control", "form-control-line", "control", 3, "type"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["appearance", "fill"], ["matInput", "", "formControlName", "fecha", 1, "control", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], [3, "startAt"], ["picker", ""], ["fxLayout", "row", "class", "division", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "col-12", "col-md-12", "p-0"], [1, "card"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "SKU"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "unidad_de_medida"], ["matColumnDef", "descripcion"], ["matColumnDef", "medida"], ["matColumnDef", "color"], ["matColumnDef", "otras_Especificaciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["formControlName", "proyecto_id", 1, "form-control", "control", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "help-block", 2, "color", "red"], ["formControlName", "categoria_id", 1, "form-control", "control", 3, "selectionChange"], [1, "input-group", "mb-3"], ["type", "file", "name", "loadFile", "id", "loadFile", "placeholder", "SELECCIONA ARCHIVO", "onclick", "this.value=null;", 1, "form-control", "form-control-line", 2, "display", "none", 3, "change"], ["for", "loadFile", 1, "btn", "btn-outline-dark", 2, "margin", "0", "text-align", "left", "width", "400px"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], ["mat-header-row", ""], ["mat-row", ""]], template: function RequisitionDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Nueva Requisici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, RequisitionDetailComponent_div_7_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, RequisitionDetailComponent_div_9_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RequisitionDetailComponent_div_13_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, RequisitionDetailComponent_div_15_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Requisici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, RequisitionDetailComponent_span_25_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function RequisitionDetailComponent_Template_input_dateChange_38_listener($event) { return ctx.fechaInicial($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "mat-datepicker", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, RequisitionDetailComponent_div_42_Template, 11, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, RequisitionDetailComponent_ng_container_54_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, RequisitionDetailComponent_button_58_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, RequisitionDetailComponent_button_60_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "mat-table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](65, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, RequisitionDetailComponent_th_66_Template, 3, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, RequisitionDetailComponent_td_67_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](68, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, RequisitionDetailComponent_th_69_Template, 3, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, RequisitionDetailComponent_td_70_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](71, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, RequisitionDetailComponent_th_72_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, RequisitionDetailComponent_td_73_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](74, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, RequisitionDetailComponent_th_75_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, RequisitionDetailComponent_td_76_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](77, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, RequisitionDetailComponent_th_78_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, RequisitionDetailComponent_td_79_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](80, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, RequisitionDetailComponent_th_81_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, RequisitionDetailComponent_td_82_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](83, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, RequisitionDetailComponent_th_84_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, RequisitionDetailComponent_td_85_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, RequisitionDetailComponent_tr_86_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, RequisitionDetailComponent_tr_87_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.newProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.requisicionId == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.requisicionId == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.requisicionId == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.requisicionId == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.requisicion_Numero);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.newProject.get("requisicion_Numero").valid && ctx.newProject.get("requisicion_Numero").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](37, 18, ctx.fecha, "dd-MM-yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("startAt", ctx.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.requisicionId == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.requisicionId == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.requisicionId == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.requisicionId != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.UploadDataExcel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1aXNpdGlvbi1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 72382:
/*!*************************************************************************!*\
  !*** ./src/app/components/supplier-detail/supplier-detail.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierDetailComponent": function() { return /* binding */ SupplierDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/supplier.service */ 64562);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);












function SupplierDetailComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupplierDetailComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La direcci\u00F3n es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupplierDetailComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El RFC es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupplierDetailComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El contacto es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupplierDetailComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La ciudad es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupplierDetailComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El estado es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SupplierDetailComponent {
    constructor(dialogRef, _supplyservice, formBuilder, data, _snackBar) {
        this.dialogRef = dialogRef;
        this._supplyservice = _supplyservice;
        this.formBuilder = formBuilder;
        this.data = data;
        this._snackBar = _snackBar;
        this.projectInfo = data.arrayData;
        this.estadoPantalla = data.estadoPantalla;
        this.newProject = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            rfc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            contacto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
        });
    }
    // =========================
    // PROCEDIMIENTOS
    // =========================
    ngOnInit() {
        if (this.estadoPantalla == 'Edit') {
            this.newProject.controls['nombre'].setValue(this.projectInfo['nombre']);
            this.newProject.controls['direccion'].setValue(this.projectInfo['direccion']);
            this.newProject.controls['ciudad'].setValue(this.projectInfo['ciudad']);
            this.newProject.controls['rfc'].setValue(this.projectInfo['rfc']);
            // this.newProject.controls['responsable'].setValue(this.projectInfo['responsable']);
            // this.newProject.controls['telefono'].setValue(this.projectInfo['telefono']);
            // this.newProject.controls['estado'].setValue(this.projectInfo['estado']);
        }
    }
    cancel(event) {
        this.dialogRef.close();
    }
    save(form, event) {
        let arrayToDb;
        arrayToDb = ({
            proveedorid: 0,
            nombre: form.controls["nombre"].value,
            direccion: form.controls["direccion"].value,
            rfc: form.controls["rfc"].value,
            ciudad: form.controls["ciudad"].value,
            estado: form.controls["estado"].value,
            contacto: form.controls["contacto"].value
            // , vigencia : '2050-01-01'
        });
        this.insertSupplier(arrayToDb);
    }
    // =========================
    // UTILERIAS
    // =========================
    openSnackBar(message, action) {
        this._snackBar.open(message, action, { duration: 3000 });
    }
    // =========================
    // SERVICIOS
    // =========================
    insertSupplier(arrayToDb) {
        // Inserta Proveedores
        this._supplyservice.insertsupply(arrayToDb).subscribe(res => {
            console.log('PROVEEDORES', res);
            this.openSnackBar('El registro se actualizó con éxito', '');
        }, error => console.log("error al insertar proveedores", error));
    }
    updateSupplier(arrayToDb) {
        // Inserta Proveedores
        this._supplyservice.updatesupply(arrayToDb).subscribe(res => {
            console.log('PROVEEDORES', res);
        }, error => console.log("error al actualizar proveedores", error));
    }
}
SupplierDetailComponent.ɵfac = function SupplierDetailComponent_Factory(t) { return new (t || SupplierDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_supplier_service__WEBPACK_IMPORTED_MODULE_0__.supplyservice), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
SupplierDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SupplierDetailComponent, selectors: [["app-supplier-detail"]], decls: 83, vars: 13, consts: [["fxLayout", "row"], ["mat-dialog-content-example", "", 3, "formGroup"], ["fxLayout", "row", 1, "division"], ["fxFlex.gt-sm", "20%"], ["fxFlex.gt-sm", "25%"], ["matInput", "", "formControlName", "nombre", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["fxFlex.gt-sm", "10%"], ["matInput", "", "placeholder", "", "formControlName", "direccion", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "rfc", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "placeholder", "", "formControlName", "contacto", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "ciudad", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "placeholder", "", "formControlName", "estado", 1, "form-control", "form-control-line", "control", 3, "type"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "help-block", 2, "color", "red"]], template: function SupplierDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cat\u00E1logo de proveedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SupplierDetailComponent_span_14_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SupplierDetailComponent_span_25_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "RFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SupplierDetailComponent_span_35_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, SupplierDetailComponent_span_46_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, SupplierDetailComponent_span_56_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, SupplierDetailComponent_span_67_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupplierDetailComponent_Template_button_click_77_listener($event) { return ctx.save(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupplierDetailComponent_Template_button_click_81_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("nombre").valid && ctx.newProject.get("nombre").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("direccion").valid && ctx.newProject.get("direccion").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.rfc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("rfc").valid && ctx.newProject.get("rfc").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.contacto);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("contacto").valid && ctx.newProject.get("contacto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("ciudad").valid && ctx.newProject.get("ciudad").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("estado").valid && ctx.newProject.get("estado").touched);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 55408:
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMaterialModule": function() { return /* binding */ DemoMaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 58341);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 54436);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 94553);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 36410);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ 20552);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/accordion */ 97091);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ 19238);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ 70946);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/overlay */ 58203);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/platform */ 80521);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ 18553);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 87636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);










































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {
}
DemoMaterialModule.ɵfac = function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); };
DemoMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] }); })();


/***/ }),

/***/ 86649:
/*!***************************************!*\
  !*** ./src/app/guards/auth.guards.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('token_access') != null) {
            return true;
        }
        else {
            this.router.navigate(['/auth/signin']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7363:
/*!**************************************************!*\
  !*** ./src/app/helpers/excel-service.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelServiceService": function() { return /* binding */ ExcelServiceService; }
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 49457);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 84487);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheethml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class ExcelServiceService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.json_to_sheet(json);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, `${fileName}_export_${new Date().getTime()}${EXCEL_EXTENSION}`);
    }
}
ExcelServiceService.ɵfac = function ExcelServiceService_Factory(t) { return new (t || ExcelServiceService)(); };
ExcelServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExcelServiceService, factory: ExcelServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": function() { return /* binding */ FullComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 65072);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ 42647);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 88030);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 21183);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 2991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/spinner.component */ 23812);













/** @title Responsive sidenav */
class FullComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() { }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 23, vars: 5, consts: [[1, "main-container"], ["color", "primary", 1, "topbar", "telative"], [1, "navbar-header"], ["href", "index.html", 1, "navbar-brand"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-icon.png", "alt", "homepage", 1, "light-logo"], ["fxShow", "false", "fxShow.gt-xs", ""], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logo-light-text.png", "alt", "homepage", 1, "light-logo"], ["mat-icon-button", "", "value", "sidebarclosed", 3, "click"], ["fxFlex", ""], [1, "example-sidenav-container"], ["id", "snav", "fixedTopGap", "0", 1, "dark-sidebar", "pl-xs", 3, "mode", "opened", "disableClose"], ["snav", ""], [1, "page-wrapper"], [1, "page-content"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-sidenav-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-sidenav", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-sidenav-content", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.AppHeaderComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.AppSidebarComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_3__.SpinnerComponent], encapsulation: 2 });


/***/ }),

/***/ 21183:
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": function() { return /* binding */ AppHeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 76627);



class AppHeaderComponent {
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(); };
AppHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 18, vars: 0, consts: [[1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", ""]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-menu", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Disable notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 2991:
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": function() { return /* binding */ AppSidebarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 65072);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ 42647);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ 65903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ 67725);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ 9502);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);












function AppSidebarComponent_mat_list_item_26_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("label label-", badge_r5.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](badge_r5.value);
} }
const _c0 = function (a1) { return ["/", a1]; };
function AppSidebarComponent_mat_list_item_26_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_26_a_1_span_6_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, menuitem_r2.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuitem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuitem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuitem_r2.badge);
} }
function AppSidebarComponent_mat_list_item_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_26_a_1_Template, 7, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("group", menuitem_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuitem_r2.type === "link");
} }
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems)); };
AppSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], decls: 27, vars: 2, consts: [[1, "user-profile", 2, "background", "url(assets/images/background/user-info.jpg) no-repeat"], [1, "profile-img"], ["src", "assets/images/users/profile.png", "alt", "user"], [1, "profile-text"], [1, "", 3, "matMenuTriggerFor"], [1, "ti-angle-down", "font-12", "m-l-5"], [1, "mymegamenu"], ["sdprofile", "matMenu"], ["mat-menu-item", ""], ["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Markarn Doe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "notifications_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Disable notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-nav-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AppSidebarComponent_mat_list_item_26_Template, 2, 2, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatNavList, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_3__.AccordionAnchorDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective], encapsulation: 2 });


/***/ }),

/***/ 67312:
/*!**************************************!*\
  !*** ./src/app/models/auth.model.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthC": function() { return /* binding */ AuthC; }
/* harmony export */ });
class AuthC {
    constructor() {
        this.id = null;
        this.nombreusuario = '';
        this.correo = '';
        this.contrasegna = '';
        this.perfilid = null;
        this.perfil = '';
        this.token = '';
    }
}


/***/ }),

/***/ 70649:
/*!*********************************!*\
  !*** ./src/app/models/users.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserC": function() { return /* binding */ UserC; }
/* harmony export */ });
class UserC {
    constructor() {
        this.id = null;
        this.perfil = null;
        this.fraccionamiento_id = null;
        this.nombre_perfil = '';
        this.nombre_completo = '';
        this.nombre = '';
        this.apellido_paterno = '';
        this.apellido_materno = '';
        this.foto = '';
        this.correo = '';
        this.telefono = '';
        this.contrasegna = '';
        this.token = '';
        this.estado = null;
        this.nombre_estado = '';
    }
}


/***/ }),

/***/ 81723:
/*!******************************************************************!*\
  !*** ./src/app/pages/catcustomer/customer/customer.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerComponent": function() { return /* binding */ CustomerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var src_app_components_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/customer-detail/customer-detail.component */ 64339);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ 52541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);














function CustomerComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CustomerComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.clienteid, " ");
} }
function CustomerComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CustomerComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r15.nombre, " ");
} }
function CustomerComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CustomerComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r16.direccion, " ");
} }
function CustomerComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " rfc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CustomerComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r17.rfc, " ");
} }
function CustomerComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Estatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CustomerComponent_td_44_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function CustomerComponent_td_44_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "INACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function CustomerComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomerComponent_td_44_ng_container_1_Template, 2, 0, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CustomerComponent_td_44_ng_container_2_Template, 2, 0, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r18.estado == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r18.estado == false);
} }
function CustomerComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CustomerComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerComponent_td_47_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const element_r21 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.edit(element_r21, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CustomerComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 45);
} }
function CustomerComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 46);
} }
class CustomerComponent {
    constructor(dialog, _excelService, _customerservice) {
        this.dialog = dialog;
        this._excelService = _excelService;
        this._customerservice = _customerservice;
        // =================
        // DECLARACIONES
        // =================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.displayedColumns = ['id', 'nombre', 'direccion', 'rfc', 'estado', 'edit'];
    }
    // =================
    // PROCEDIMIENTOS
    // =================
    ngOnInit() {
        this.getcustomer();
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({
                nombre: element.nombre,
                direccion: element.direccion,
                RFC: element.rfc,
                estatus: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Clientes');
    }
    newcustomer(evetn) {
        console.log('Alta de cliente');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'CLIENTE',
            arrayData: null,
            clienteId: 0,
            estadoPantalla: 'New'
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    edit(element, event) {
        console.log('Editar un cliente', element.clienteid);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'CLIENTE',
            arrayData: element,
            clienteId: element.clienteid,
            estadoPantalla: 'Edit'
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    // =================
    // UTILERIAS
    // =================
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
    // =================
    // SERVICIOS
    // =================
    getcustomer() {
        // Proyectos registrados
        this._customerservice.getcustomerAll().subscribe(res => {
            console.log('Clientes', res);
            this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.iterator();
            this.dataSourceShow.sort = this.sort;
        }, error => console.log("error consulta regiones", error));
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_1__.ExcelServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__.customerservice)); };
CustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], viewQuery: function CustomerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 50, vars: 3, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col20"], ["type", "text", "placeholder", "BUSCAR", 1, "form-control", "form-control-line", 3, "keyup"], [1, "col70"], [1, "col10"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", "hidden", "", 4, "matHeaderCellDef"], ["mat-cell", "", "hidden", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "direccion"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["matColumnDef", "rfc"], ["matColumnDef", "estado"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "edit"], ["mat-header-cell", "", "class", ".colbuttons", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", "hidden", "", 1, "col30"], ["mat-cell", "", "hidden", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], [4, "ngIf"], ["mat-header-cell", "", 1, ".colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CustomerComponent_Template_input_keyup_16_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_19_listener() { return ctx.descargarExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_22_listener($event) { return ctx.newcustomer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Nuevo Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CustomerComponent_th_31_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CustomerComponent_td_32_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CustomerComponent_th_34_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, CustomerComponent_td_35_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](36, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, CustomerComponent_th_37_Template, 2, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, CustomerComponent_td_38_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](39, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, CustomerComponent_th_40_Template, 2, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, CustomerComponent_td_41_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](42, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, CustomerComponent_th_43_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CustomerComponent_td_44_Template, 3, 2, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](45, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, CustomerComponent_th_46_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, CustomerComponent_td_47_Template, 3, 0, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, CustomerComponent_tr_48_Template, 1, 0, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, CustomerComponent_tr_49_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], styles: [".col10[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col20[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col30[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col70[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.colbuttons[_ngcontent-%COMP%]{\r\n    vertical-align: bottom;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbDEwe1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jb2wyMHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY29sMzB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNvbDcwe1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jb2xidXR0b25ze1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 76208:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/categories/categories-list/categories-list.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesListComponent": function() { return /* binding */ CategoriesListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class CategoriesListComponent {
    constructor() { }
    ngOnInit() {
    }
}
CategoriesListComponent.ɵfac = function CategoriesListComponent_Factory(t) { return new (t || CategoriesListComponent)(); };
CategoriesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesListComponent, selectors: [["app-categories-list"]], decls: 2, vars: 0, template: function CategoriesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "categories-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 24902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/login/login.service */ 58762);
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/users */ 70649);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_aesencrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/aesencrypt.service */ 25405);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 19699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);

 // './../../../../models/user';












function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.msg);
} }
class LoginComponent {
    constructor(service, routes, authService, formBuilder, route, cryptService, toastr) {
        this.service = service;
        this.routes = routes;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.cryptService = cryptService;
        this.toastr = toastr;
        this.msg = '';
        this.spinerShow = false;
        this.userinterface = new _models_users__WEBPACK_IMPORTED_MODULE_1__.UserC();
    }
    ngOnInit() {
        this.clearForm();
    }
    loginReq() {
        this.spinerShow = true;
        const pswdEncryp = this.cryptService.encrypt(this.loginform.value.contrasegna);
        this.loginform.value.contrasegna = pswdEncryp;
        this.authService.loginReq(this.loginform.value).subscribe(response => {
            localStorage.setItem('token_access', response.token);
            this.spinerShow = false;
            this.route.navigate(['/dashboard']);
        }, err => {
            if (err.status === 401) {
                this.toastr.error('Credenciales de acceso inválidas', 'ERROR');
            }
            if (err.status === 0 || err.status === 500) {
                this.toastr.error('No se puede comunicar con el servidor', 'ERROR');
            }
            console.error(err);
            this.spinerShow = false;
        });
    }
    clearForm() {
        this.loginform = this.formBuilder.group({
            nombreusuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            contrasegna: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_0__.loginservice), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_aesencrypt_service__WEBPACK_IMPORTED_MODULE_3__.AESEncryptService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_services_login_login_service__WEBPACK_IMPORTED_MODULE_0__.loginservice])], decls: 20, vars: 2, consts: [[1, "login-register", 2, "background-image", "url(assets/images/background/login-register.jpg)"], [1, "login-register-box"], [1, "m-t-10"], ["id", "loginform", 3, "formGroup", "ngSubmit"], [1, "text-center"], ["alt", "homepage", "src", "assets/images/logo-comercial20.jpeg"], ["class", "bg-danger p-10 text-white", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "placeholder", "Usuario", "formControlName", "nombreusuario", "required", ""], ["u1", ""], ["matInput", "", "type", "password", "placeholder", "Clave", "formControlName", "contrasegna", "required", ""], ["p2", ""], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "btn-block", "btn-lg", "m-t-20", "m-b-20", 3, "click"], [1, "bg-danger", "p-10", "text-white"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.loginReq(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.loginReq(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginform);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.msg);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 16826:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/projects/project-capture/project-capture.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCaptureComponent": function() { return /* binding */ ProjectCaptureComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var src_app_components_project_capture_detail_project_capture_detail_project_capture_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/project-capture-detail/project-capture-detail/project-capture-detail.component */ 52132);
/* harmony import */ var src_app_components_categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/categories/categories/categories.component */ 60465);
/* harmony import */ var _services_projects_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/projects/project.service */ 56980);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);

















function ProjectCaptureComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r22.codigo_proyecto, " ");
} }
function ProjectCaptureComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r23.nombre_proyecto, " ");
} }
function ProjectCaptureComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha Inicial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, element_r24.fecha_inicial_proyecto, " dd-MM-yyyy"), " ");
} }
function ProjectCaptureComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha Final ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, element_r25.fecha_final_proyecto, " dd-MM-yyyy"), " ");
} }
function ProjectCaptureComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r26.nombre_cliente, " ");
} }
function ProjectCaptureComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Responable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r27.responsable_proyecto, " ");
} }
function ProjectCaptureComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Presupuesto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r28.presupuesto_proyecto, " ");
} }
function ProjectCaptureComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " proyecto_id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r29.proyecto_id, " ");
} }
function ProjectCaptureComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectCaptureComponent_td_58_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const element_r30 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.editProyecto(element_r30, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Categorias ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectCaptureComponent_td_61_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const element_r33 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.addCategorias(element_r33.proyecto_id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectCaptureComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 56);
} }
function ProjectCaptureComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 57);
} }
const _c0 = function () { return [20, 100, 150]; };
class ProjectCaptureComponent {
    constructor(dialog, MatTableModule, _projectService, _excelService) {
        this.dialog = dialog;
        this._projectService = _projectService;
        this._excelService = _excelService;
        // ====================
        // DECLARACIONES
        // ====================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.displayedColumns = ['codigo_proyecto', 'nombre_proyecto', 'fecha_inicial_proyecto', 'fecha_final_proyecto', 'nombre_cliente', 'responsable_proyecto', 'presupuesto_proyecto', 'proyect_id', 'editar', 'categorias'];
        this.projectData = [];
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // this.displayedColumns = ['proyecto']
    }
    // ====================
    // PROCEDIMIENTOS
    // ====================
    ngOnInit() {
        this.getProjects();
    }
    getProjects() {
        // Proyectos registrados
        this._projectService.getProjectAll().subscribe(res => {
            console.log('Proyectos', res);
            this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.iterator();
            this.dataSourceShow.sort = this.sort;
        }, error => console.log("error consulta regiones", error));
    }
    onOpenDialogAddProject() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            //title: 'NUEVO PROYECTO',
        };
        dialogConfig.width = '450px';
        dialogConfig.height = '350px';
        dialogConfig.disableClose = true;
    }
    editProyecto(element, event) {
        console.log('Edita', element);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'EDITAR PROYECTO',
            arrayData: element,
            projectId: element.proyecto_id
        };
        dialogConfig.width = '900px';
        dialogConfig.height = '700px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_project_capture_detail_project_capture_detail_project_capture_detail_component__WEBPACK_IMPORTED_MODULE_1__.ProjectCaptureDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    addCategorias(proyectoId, event) {
        console.log('Alta de categoras', proyectoId);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'CATEGORIAS',
            arrayData: this.dataSourceShow,
            projectId: proyectoId
        };
        dialogConfig.width = '1400px';
        dialogConfig.height = '700px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    nuevoProyecto(event) {
        console.log('Alta de categoras');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'NUEVO PROYECTO',
            arrayData: null,
            projectId: 0
        };
        dialogConfig.width = '900px';
        dialogConfig.height = '700px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_project_capture_detail_project_capture_detail_project_capture_detail_component__WEBPACK_IMPORTED_MODULE_1__.ProjectCaptureDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    descargarProyectos() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({ proyecto_id: element.proyecto_id,
                nombre_proyecto: element.nombre_proyecto,
                fecha_inicial_proyecto: moment__WEBPACK_IMPORTED_MODULE_0__(element.fecha_inicial_proyecto, 'YYYY-MM-DD').format('DD-MM-YYYY'),
                fecha_final_proyecto: moment__WEBPACK_IMPORTED_MODULE_0__(element.fecha_final_proyecto, 'YYYY-MM-DD').format('DD-MM-YYYY'),
                nombre_cliente: element.nombre_cliente,
                responsable_proyecto: element.responsable_proyecto,
                presupuesto_proyecto: element.presupuesto_proyecto
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Proyectos');
    }
    // ====================
    // UTILERIAS
    // ====================
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
}
ProjectCaptureComponent.ɵfac = function ProjectCaptureComponent_Factory(t) { return new (t || ProjectCaptureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_projects_project_service__WEBPACK_IMPORTED_MODULE_3__.projectservice), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_4__.ExcelServiceService)); };
ProjectCaptureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProjectCaptureComponent, selectors: [["app-project-capture"]], viewQuery: function ProjectCaptureComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 65, vars: 8, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col20"], ["type", "text", "placeholder", "BUSCAR", 1, "form-control", "form-control-line", 3, "keyup"], [1, "col70"], [1, "col10"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-arrow-down", "fa-lg", "icon-cog-wite"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "fa", "fa-plus", "fa-lg", "icon-cog-wite"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "codigo_proyecto"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "column", 4, "matCellDef"], ["matColumnDef", "nombre_proyecto"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["matColumnDef", "fecha_inicial_proyecto"], ["matColumnDef", "fecha_final_proyecto"], ["matColumnDef", "nombre_cliente"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "responsable_proyecto"], ["matColumnDef", "presupuesto_proyecto"], ["matColumnDef", "proyect_id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", "hidden", "", 4, "matHeaderCellDef"], ["mat-cell", "", "hidden", "", "class", "column", 4, "matCellDef"], ["matColumnDef", "editar"], ["mat-header-cell", "", "class", "colbuttons", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "colbuttons", 4, "matCellDef"], ["matColumnDef", "categorias"], ["mat-header-row", "", "class", " text-primary", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "width", "95%", 3, "pageSizeOptions", "showFirstLastButtons", "pageSize", "length", "page"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-cell", "", 1, "column"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], ["mat-header-cell", "", "mat-sort-header", "", "hidden", "", 1, "col10"], ["mat-cell", "", "hidden", "", 1, "column"], ["mat-header-cell", "", 1, "colbuttons"], ["mat-cell", "", 1, "colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-pencil", "fa-lg", "icon-cog"], ["mat-button", "", "color", "accent", 3, "click"], [1, "fa", "fa-plus", "fa-lg", "icon-cog"], ["mat-header-row", "", 1, "text-primary"], ["mat-row", ""]], template: function ProjectCaptureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ProjectCaptureComponent_Template_input_keyup_16_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectCaptureComponent_Template_button_click_19_listener() { return ctx.descargarProyectos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u00A0\u00A0Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectCaptureComponent_Template_button_click_23_listener($event) { return ctx.nuevoProyecto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\u00A0\u00A0Nuevo Proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](32, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, ProjectCaptureComponent_th_33_Template, 3, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ProjectCaptureComponent_td_34_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](35, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ProjectCaptureComponent_th_36_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ProjectCaptureComponent_td_37_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](38, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, ProjectCaptureComponent_th_39_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ProjectCaptureComponent_td_40_Template, 3, 4, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](41, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ProjectCaptureComponent_th_42_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ProjectCaptureComponent_td_43_Template, 3, 4, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](44, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ProjectCaptureComponent_th_45_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, ProjectCaptureComponent_td_46_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](47, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, ProjectCaptureComponent_th_48_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, ProjectCaptureComponent_td_49_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](50, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ProjectCaptureComponent_th_51_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, ProjectCaptureComponent_td_52_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](53, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, ProjectCaptureComponent_th_54_Template, 2, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, ProjectCaptureComponent_td_55_Template, 2, 1, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](56, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, ProjectCaptureComponent_th_57_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, ProjectCaptureComponent_td_58_Template, 3, 0, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](59, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, ProjectCaptureComponent_th_60_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, ProjectCaptureComponent_td_61_Template, 3, 0, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, ProjectCaptureComponent_tr_62_Template, 1, 0, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, ProjectCaptureComponent_tr_63_Template, 1, 0, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "mat-paginator", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function ProjectCaptureComponent_Template_mat_paginator_page_64_listener($event) { return ctx.handlePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0))("showFirstLastButtons", true)("pageSize", ctx.pageSize)("length", ctx.totalSize);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".col10[_ngcontent-%COMP%]{\n    width: 10%;\n    vertical-align: middle;\n}\n\n.col20[_ngcontent-%COMP%]{\n    width: 20%;\n    vertical-align: middle;\n}\n\n.col30[_ngcontent-%COMP%]{\n    width: 30%;\n    vertical-align: middle;\n}\n\n.col70[_ngcontent-%COMP%]{\n    width: 70%;\n    vertical-align: middle;\n}\n\n.colbuttons[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    text-align: center;\n}\n\n.column[_ngcontent-%COMP%]{\n    vertical-align: middle;\n}\n\n.icon-cog[_ngcontent-%COMP%] {\n    color: orange;\n  }\n\n.icon-cog-wite[_ngcontent-%COMP%] {\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY2FwdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxZQUFZO0VBQ2QiLCJmaWxlIjoicHJvamVjdC1jYXB0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sMTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sMjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sMzB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sNzB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sYnV0dG9uc3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbHVtbntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaWNvbi1jb2cge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuLmljb24tY29nLXdpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuIl19 */"] });


/***/ }),

/***/ 36127:
/*!******************************************************************!*\
  !*** ./src/app/pages/purchaseOrder/po-list/po-list.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoListComponent": function() { return /* binding */ PoListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_components_po_detail_po_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/po-detail/po-detail.component */ 23019);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 40496);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 33098);
/* harmony import */ var html_to_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-to-pdfmake */ 17708);
/* harmony import */ var html_to_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_to_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var src_app_services_PurchaseOrder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/PurchaseOrder.service */ 54286);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);




















const _c0 = ["pdfTable"];
function PoListComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r23.ordendecompra_id, " ");
} }
function PoListComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Orden de compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r24.ordendecompra_codigo, " ");
} }
function PoListComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Cotizaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r25.cotizacion_codigo, " ");
} }
function PoListComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Proveedor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r26.proveedor_nombre, " ");
} }
function PoListComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Fecha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, element_r27.ordendecompra_fecha, " dd-MM-yyyy"), " ");
} }
function PoListComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Estatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_49_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "EN PROCESO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function PoListComponent_td_49_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "EN PROCESO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function PoListComponent_td_49_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "ORDEN DE COMPRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function PoListComponent_td_49_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "AUTORIZADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function PoListComponent_td_49_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "CANCELADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function PoListComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PoListComponent_td_49_ng_container_1_Template, 2, 0, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, PoListComponent_td_49_ng_container_2_Template, 2, 0, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PoListComponent_td_49_ng_container_3_Template, 2, 0, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, PoListComponent_td_49_ng_container_4_Template, 2, 0, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, PoListComponent_td_49_ng_container_5_Template, 2, 0, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r28.estado == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r28.estado == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r28.estado == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r28.estado == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r28.estado == 4);
} }
function PoListComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PoListComponent_td_52_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const element_r34 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r35.editRequisicion(element_r34, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PoListComponent_td_55_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const element_r37 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r38.cancelaODC(element_r37, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Autorizar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PoListComponent_td_58_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42); const element_r40 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r41.aproveODC(element_r40, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PoListComponent_td_61_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45); const element_r43 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r44.printPDF(element_r43, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function PoListComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 63);
} }
function PoListComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 64);
} }
const _c1 = function () { return [20, 100, 150]; };
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__.pdfMake.vfs;
class PoListComponent {
    constructor(dialog, _excelService, _purchaseOrderService) {
        this.dialog = dialog;
        this._excelService = _excelService;
        this._purchaseOrderService = _purchaseOrderService;
        // =====================
        // DECLARACIONES
        // =====================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.displayedColumns = ['ordendecompra_id', 'ordendecompra_codigo', 'cotizacion_codigo', 'proveedor_nombre', 'ordendecompra_fecha', 'Estatus', 'editar', 'cancelar', 'autorizar', 'pdf'];
    }
    // =====================
    // PROCEDIMIENTOS
    // =====================
    ngOnInit() {
        this.getPO_Hdr();
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({ proyecto_id: element.proyecto_id,
                categoria: element.codigo_proyectocategoria,
                requisicion: element.requisicioninterna_id,
                Fecha_Requisicion: moment__WEBPACK_IMPORTED_MODULE_0__(element.Fecha_Requisicion, 'YYYY-MM-DD').format('DD-MM-YYYY'),
                estatus: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');
    }
    nuevaOrdenDeCompra(event) {
        console.log('Alta de requisiciones');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'ORDEN DE COMPRA',
            arrayData: null,
            requisicionId: 1,
            estadoPantalla: 'new'
        };
        dialogConfig.width = '1500px';
        dialogConfig.height = '9000px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_po_detail_po_detail_component__WEBPACK_IMPORTED_MODULE_1__.PoDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    editRequisicion(element, event) {
        console.log('Alta de requisiciones');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        console.log('autoriza registro', element);
        dialogConfig.data = {
            id: 1,
            title: 'REQUISICIONES',
            arrayData: element,
            requisicionId: 1,
            estadoPantalla: 'edition'
        };
        dialogConfig.width = '1500px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_po_detail_po_detail_component__WEBPACK_IMPORTED_MODULE_1__.PoDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    aproveODC(element, event) {
        console.log('Aprueba orden de compra');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        console.log('aprueba odc', element);
        dialogConfig.data = {
            id: 1,
            title: 'ORDEN DE COMPRA',
            arrayData: element,
            requisicionId: 1,
            estadoPantalla: 'aprove',
        };
        dialogConfig.width = '1500px';
        dialogConfig.height = '9000px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_po_detail_po_detail_component__WEBPACK_IMPORTED_MODULE_1__.PoDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    cancelaODC(element, event) {
        this.updateODCStatus(element, 4);
    }
    printPDF() {
        this.downloadAsPDF();
    }
    // =====================
    // UTILERIAS
    // =====================
    downloadAsPDF() {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__.default();
        const pdfTable = this.pdfTable.nativeElement;
        var html = html_to_pdfmake__WEBPACK_IMPORTED_MODULE_5___default()(pdfTable.innerHTML);
        // var html = htmlToPdfmake(AllTable.innerHTML);
        const documentDefinition = { content: html };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default().createPdf(documentDefinition).open();
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
    // =====================
    // CONSILTA DE SERVICIOS
    // =====================
    getPO_Hdr() {
        // Proyectos registrados
        this._purchaseOrderService.getPOAll().subscribe(res => {
            console.log('PurchaseOrder', res);
            this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.iterator();
            this.dataSourceShow.sort = this.sort;
        }, error => console.log("error consulta regiones", error));
    }
    cancelODCToDB(element) {
        this._purchaseOrderService.putPOCancel(element.ordendecompra_id).subscribe(res => {
            console.log('Se inserto con éxito', res);
        }, error => console.log("error alta de proyectos", error));
    }
    updateODCStatus(element, statusToDb) {
        let arrayToDb;
        arrayToDb = ({ ordendecompra_id: element.ordendecompra_id, estatus: statusToDb, usuario: 1 });
        console.log('cancelado', element);
        this._purchaseOrderService.updatePOStatus(arrayToDb).subscribe(res => {
            console.log('Se inserto con éxito', res);
        }, error => console.log("error alta de proyectos", error));
    }
}
PoListComponent.ɵfac = function PoListComponent_Factory(t) { return new (t || PoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_6__.ExcelServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_PurchaseOrder_service__WEBPACK_IMPORTED_MODULE_7__.purchaseOrderservice)); };
PoListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PoListComponent, selectors: [["app-po-list"]], viewQuery: function PoListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.pdfTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 68, vars: 8, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col20"], ["type", "text", "placeholder", "BUSCAR", 1, "form-control", "form-control-line", 3, "keyup"], [1, "col70"], [1, "col10"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-arrow-down", "fa-lg", "icon-cog-wite"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "fa", "fa-plus", "fa-lg", "icon-cog-wite"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "ordendecompra_id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", "hidden", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "column", "hidden", "", 4, "matCellDef"], ["matColumnDef", "ordendecompra_codigo"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "column", 4, "matCellDef"], ["matColumnDef", "cotizacion_codigo"], ["matColumnDef", "proveedor_nombre"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["matColumnDef", "ordendecompra_fecha"], ["matColumnDef", "Estatus"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "editar"], ["mat-header-cell", "", "class", "colbuttons", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "colbuttons", 4, "matCellDef"], ["matColumnDef", "cancelar"], ["matColumnDef", "autorizar"], ["matColumnDef", "pdf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "width", "95%", 3, "pageSizeOptions", "showFirstLastButtons", "pageSize", "length", "page"], ["hidden", "", 1, "container"], ["id", "pdfTable"], ["pdfTable", ""], ["mat-header-cell", "", "mat-sort-header", "", "hidden", "", 1, "col10"], ["mat-cell", "", "hidden", "", 1, "column"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-cell", "", 1, "column"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], ["mat-cell", ""], [4, "ngIf"], ["mat-header-cell", "", 1, "colbuttons"], ["mat-cell", "", 1, "colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-pencil", "fa-lg", "icon-cog"], [1, "fa", "fa-ban", "fa-lg", "icon-cog-red"], [1, "fa", "fa-check", "fa-lg", "icon-cog"], [1, "fa", "fa-file", "fa-lg", "icon-cog"], ["mat-header-row", ""], ["mat-row", ""]], template: function PoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Ordenes de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function PoListComponent_Template_input_keyup_16_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PoListComponent_Template_button_click_19_listener() { return ctx.descargarExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "\u00A0\u00A0Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PoListComponent_Template_button_click_23_listener($event) { return ctx.nuevaOrdenDeCompra($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "\u00A0\u00A0Nueva Orde de Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](32, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, PoListComponent_th_33_Template, 3, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, PoListComponent_td_34_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](35, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, PoListComponent_th_36_Template, 3, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, PoListComponent_td_37_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](38, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, PoListComponent_th_39_Template, 3, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, PoListComponent_td_40_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](41, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, PoListComponent_th_42_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, PoListComponent_td_43_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](44, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, PoListComponent_th_45_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, PoListComponent_td_46_Template, 3, 4, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](47, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, PoListComponent_th_48_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, PoListComponent_td_49_Template, 6, 5, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](50, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, PoListComponent_th_51_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, PoListComponent_td_52_Template, 3, 0, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](53, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, PoListComponent_th_54_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, PoListComponent_td_55_Template, 3, 0, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](56, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, PoListComponent_th_57_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, PoListComponent_td_58_Template, 3, 0, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](59, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, PoListComponent_th_60_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, PoListComponent_td_61_Template, 3, 0, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, PoListComponent_tr_62_Template, 1, 0, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, PoListComponent_tr_63_Template, 1, 0, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "mat-paginator", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function PoListComponent_Template_mat_paginator_page_64_listener($event) { return ctx.handlePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "div", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c1))("showFirstLastButtons", true)("pageSize", ctx.pageSize)("length", ctx.totalSize);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".col10[_ngcontent-%COMP%]{\n    width: 10%;\n    vertical-align: middle;\n}\n\n.col20[_ngcontent-%COMP%]{\n    width: 20%;\n    vertical-align: middle;\n}\n\n.col30[_ngcontent-%COMP%]{\n    width: 30%;\n    vertical-align: middle;\n}\n\n.col70[_ngcontent-%COMP%]{\n    width: 70%;\n    vertical-align: middle;\n}\n\n.colbuttons[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    text-align: center;\n}\n\n.column[_ngcontent-%COMP%]{\n    vertical-align: middle;\n}\n\n.icon-cog[_ngcontent-%COMP%] {\n    color: orange;\n}\n\n.icon-cog-red[_ngcontent-%COMP%] {\n    color: red;\n}\n\n.icon-cog-wite[_ngcontent-%COMP%] {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoicG8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbDEwe1xuICAgIHdpZHRoOiAxMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbDIwe1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbDMwe1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbDcwe1xuICAgIHdpZHRoOiA3MCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbGJ1dHRvbnN7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2x1bW57XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmljb24tY29nIHtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuXG4uaWNvbi1jb2ctcmVkIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uaWNvbi1jb2ctd2l0ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });


/***/ }),

/***/ 65706:
/*!****************************************************************************!*\
  !*** ./src/app/pages/quotation/quotation-list/quotation-list.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuotationListComponent": function() { return /* binding */ QuotationListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_components_quotations_quotation_detail_quotation_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/quotations/quotation-detail/quotation-detail.component */ 71168);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var src_app_services_quotation_quotation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/quotation/quotation.service */ 9337);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
















function QuotationListComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Requisici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuotationListComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r12.codigo_requisicioninterna, " ");
} }
function QuotationListComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Cotizaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuotationListComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r13.codigo, " ");
} }
function QuotationListComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fecha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuotationListComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r14.fecha, " dd-MM-yyyy"), " ");
} }
function QuotationListComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuotationListComponent_td_43_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "EN PROCESO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function QuotationListComponent_td_43_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "CANCELADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function QuotationListComponent_td_43_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "ORDEN DE COMPRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function QuotationListComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuotationListComponent_td_43_ng_container_1_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, QuotationListComponent_td_43_ng_container_2_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, QuotationListComponent_td_43_ng_container_3_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r15.estado == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r15.estado == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r15.estado == 2);
} }
function QuotationListComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuotationListComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_td_46_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const element_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.editCotizacion(element_r19, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuotationListComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 46);
} }
function QuotationListComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 47);
} }
const _c0 = function () { return [20, 100, 150]; };
class QuotationListComponent {
    constructor(dialog, _excelService, _quotationService) {
        this.dialog = dialog;
        this._excelService = _excelService;
        this._quotationService = _quotationService;
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.displayedColumns = ['codigo_requisicioninterna', 'codigo', 'fecha', 'estado', 'editar'];
    }
    ngOnInit() {
        this.getQuotationAll();
        // let arrayData : any;
        // arrayData = [{codigo_requisicioninterna : 1, codigo : 1, fecha : '2020-01-01', estado : 'ACTIVO', requisicioninterna_id : 1, cotizacion_id : 1}]
        // this.dataSourceShow = new MatTableDataSource(arrayData);
    }
    getQuotationAll() {
        // Proyectos registrados
        this._quotationService.getQuotationAll().subscribe(res => {
            console.log('Cotizaciones', res);
            this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.iterator();
            this.dataSourceShow.sort = this.sort;
        }, error => console.log("error consulta regiones", error));
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({ cotizacion_id: element.cotizacion_id,
                requisicioninterna_id: element.requisicioninterna_id,
                codigo_requisicioninterna: element.codigo_requisicioninterna,
                codigo: element.codigo,
                fecha: moment__WEBPACK_IMPORTED_MODULE_0__(element.fecha, 'YYYY-MM-DD').format('DD-MM-YYYY'),
                estado: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');
    }
    nuevaCotizacion(evetn) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'COTIZACIONES',
            arrayData: null,
            requisicionId: 0,
            cotizacionId: 0
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_quotations_quotation_detail_quotation_detail_component__WEBPACK_IMPORTED_MODULE_1__.QuotationDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    editCotizacion(element, event) {
        console.log('Edita cotizaciones');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'COTIZACIONES',
            arrayData: element,
            requisicionId: 0,
            cotizacionId: element.cotizacion_id
        };
        dialogConfig.width = '1200px';
        dialogConfig.height = '700px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_quotations_quotation_detail_quotation_detail_component__WEBPACK_IMPORTED_MODULE_1__.QuotationDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
}
QuotationListComponent.ɵfac = function QuotationListComponent_Factory(t) { return new (t || QuotationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_2__.ExcelServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_quotation_quotation_service__WEBPACK_IMPORTED_MODULE_3__.quotationservice)); };
QuotationListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: QuotationListComponent, selectors: [["app-quotation-list"]], viewQuery: function QuotationListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 50, vars: 8, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col20"], ["type", "text", "placeholder", "BUSCAR", 1, "form-control", "form-control-line", 3, "keyup"], [1, "col70"], [1, "col10"], ["mat-raised-button", "", "color", "primary", 1, "icon-cog-wite", 3, "click"], [1, "fa", "fa-arrow-down", "fa-lg", "icon-cog-wite"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "fa", "fa-plus", "fa-lg", "icon-cog-wite"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "codigo_requisicioninterna"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigo"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["matColumnDef", "fecha"], ["matColumnDef", "estado"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "editar"], ["mat-header-cell", "", "class", "colbuttons", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "colbuttons", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "width", "95%", 3, "pageSizeOptions", "showFirstLastButtons", "pageSize", "length", "page"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], [4, "ngIf"], ["mat-header-cell", "", 1, "colbuttons"], ["mat-cell", "", 1, "colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-pencil", "fa-lg", "icon-cog"], ["mat-header-row", ""], ["mat-row", ""]], template: function QuotationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Cotizaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function QuotationListComponent_Template_input_keyup_16_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_button_click_19_listener() { return ctx.descargarExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u00A0\u00A0Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_button_click_23_listener($event) { return ctx.nuevaCotizacion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u00A0\u00A0Nueva Cotizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](32, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, QuotationListComponent_th_33_Template, 3, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, QuotationListComponent_td_34_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](35, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, QuotationListComponent_th_36_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, QuotationListComponent_td_37_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](38, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, QuotationListComponent_th_39_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, QuotationListComponent_td_40_Template, 3, 4, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](41, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, QuotationListComponent_th_42_Template, 2, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, QuotationListComponent_td_43_Template, 4, 3, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](44, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, QuotationListComponent_th_45_Template, 2, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, QuotationListComponent_td_46_Template, 3, 0, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, QuotationListComponent_tr_47_Template, 1, 0, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, QuotationListComponent_tr_48_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-paginator", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function QuotationListComponent_Template_mat_paginator_page_49_listener($event) { return ctx.handlePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0))("showFirstLastButtons", true)("pageSize", ctx.pageSize)("length", ctx.totalSize);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".col10[_ngcontent-%COMP%]{\n    width: 10%;\n    vertical-align: middle;\n}\n\n.col20[_ngcontent-%COMP%]{\n    width: 20%;\n    vertical-align: middle;\n}\n\n.col30[_ngcontent-%COMP%]{\n    width: 30%;\n    vertical-align: middle;\n}\n\n.col70[_ngcontent-%COMP%]{\n    width: 70%;\n    vertical-align: middle;\n}\n\n.colbuttons[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    text-align: center;\n}\n\n.icon-cog[_ngcontent-%COMP%] {\n    color: orange;\n  }\n\n.icon-cog-wite[_ngcontent-%COMP%] {\n    color: white;\n  }\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n    background-color: #f78d03;\n    box-shadow: 0 2px 2px 0 rgba(169, 169, 169, 0.14), 0 3px 1px -2px rgba(169, 169, 169, 0.2), 0 1px 5px 0 rgba(169, 169, 169, 0.12);\n    transition: 0.2s ease-in;\n    border-color: #cccccc;\n  }\n\n.btn-rounded[_ngcontent-%COMP%] {\n    border: 0.5px solid rgba(0, 0, 0, 0.5);\n  }\n\n.btn[_ngcontent-%COMP%] {\n    min-width: 126px;\n    height: 32px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHlCQUF5QjtJQUV6QixpSUFBaUk7SUFHakksd0JBQXdCO0lBQ3hCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHNDQUFzQztFQUN4Qzs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQjtBQUNKIiwiZmlsZSI6InF1b3RhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sMTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sMjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sMzB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sNzB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sYnV0dG9uc3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24tY29nIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICB9XG5cbiAgLmljb24tY29nLXdpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzhkMDM7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTY5LCAxNjksIDE2OSwgMC4xMik7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgxNjksIDE2OSwgMTY5LCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuMTIpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xuICB9XG5cbiAgLmJ0bi1yb3VuZGVkIHtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuXG4gIC5idG4ge1xuICAgIG1pbi13aWR0aDogMTI2cHg7XG4gICAgaGVpZ2h0OiAzMnB4XG59Il19 */"] });


/***/ }),

/***/ 30560:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/repse-supplier-capture/repse-supplier-capture/repse-supplier-capture.component.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepseSupplierCaptureComponent": function() { return /* binding */ RepseSupplierCaptureComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/supplier.service */ 64562);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 35618);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 5015);











function RepseSupplierCaptureComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La direcci\u00F3n es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El RFC es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El contacto es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La ciudad es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El estado es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El objetivo social es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El tipo persona es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El telefono es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El tipo persona es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El acta constitutiva es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El INE es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_222_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El alta del IMSS es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_241_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El Alta Infonavit es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_261_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El alta del SAT es requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_280_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El esstado de cuenta bancario es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_300_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El estado financiero es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_325_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El esstado de cuenta bancario es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_339_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El contrato es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RepseSupplierCaptureComponent_span_358_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El registro patronal del proveedor es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RepseSupplierCaptureComponent {
    constructor(_supplyservice, formBuilder) {
        this._supplyservice = _supplyservice;
        this.formBuilder = formBuilder;
        this.newProject = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            rfc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            contacto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            objetivoSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            tipoPersona: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            actaConstitutiva: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            ine: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            altaIMSS: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            altaINFONAVIT: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            altaSAT: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            edoCtaBancario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            edoFinanciero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            contrato: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            registroPatronalProv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
    }
    // =========================
    // PROCEDIMIENTOS
    // =========================
    ngOnInit() {
    }
    cancel(event) {
    }
    save(form, event) {
        // let arrayToDb : any;
        // arrayToDb = ({ 
        //   proveedorid : 0
        //     , nombre : form.controls["nombre"].value
        //     , direccion : form.controls["direccion"].value
        //     , rfc : form.controls["rfc"].value 
        //     , ciudad : form.controls["ciudad"].value
        //     , estado : form.controls["estado"].value
        //     , contacto : form.controls["contacto"].value
        //     // , vigencia : '2050-01-01'
        //   });
        // this.insertSupplier(arrayToDb);
    }
}
RepseSupplierCaptureComponent.ɵfac = function RepseSupplierCaptureComponent_Factory(t) { return new (t || RepseSupplierCaptureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_supplier_service__WEBPACK_IMPORTED_MODULE_0__.supplyservice), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
RepseSupplierCaptureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RepseSupplierCaptureComponent, selectors: [["app-repse-supplier-capture"]], decls: 384, vars: 39, consts: [["fxLayout", "row"], ["mat-dialog-content-example", "", 3, "formGroup"], ["fxLayout", "row", 1, "division"], ["fxFlex.gt-sm", "150px"], ["fxFlex.gt-sm", "300px"], ["matInput", "", "formControlName", "nombre", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["fxFlex.gt-sm", "50px"], ["fxFlex.gt-sm", "100px"], ["fxFlex.gt-sm", "400px"], ["matInput", "", "placeholder", "", "formControlName", "direccion", 1, "form-control", "form-control-line", "control", 3, "type"], ["fxFlex.gt-sm", "70px"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "primary"], ["matInput", "", "formControlName", "rfc", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "placeholder", "", "formControlName", "contacto", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "ciudad", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "placeholder", "", "formControlName", "estado", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "objetivoSocial", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["formControlName", "tipoPersona", 1, "form-control"], ["value", "0", "selected", "selected"], ["value", "1"], ["value", "2"], ["matInput", "", "formControlName", "telefono", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "email", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "actaConstitutiva", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "ine", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "altaIMSS", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "altaINFONAVIT", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "altaSAT", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "edoCtaBancario", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["matInput", "", "formControlName", "edoFinanciero", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["formControlName", "edoFinanciero", 1, "form-control"], ["matInput", "", "formControlName", "contrato", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["fxFlex.gt-sm", "200px"], ["matInput", "", "formControlName", "registroPatronalProv", "disabled", "", 1, "form-control", "form-control-line", "control", 3, "type"], ["fxFlex.gt-sm", "20%"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "help-block", 2, "color", "red"]], template: function RepseSupplierCaptureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Captura de proveedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Raz\u00F3n social");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RepseSupplierCaptureComponent_span_14_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RepseSupplierCaptureComponent_span_29_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "RFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, RepseSupplierCaptureComponent_span_49_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, RepseSupplierCaptureComponent_span_68_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, RepseSupplierCaptureComponent_span_84_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, RepseSupplierCaptureComponent_span_99_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Objetivo Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, RepseSupplierCaptureComponent_span_115_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Tipo Persona");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "SELECCIONA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Moral");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "F\u00EDsica");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, RepseSupplierCaptureComponent_span_136_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Tel\u00E9fono contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](152, RepseSupplierCaptureComponent_span_152_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](167, RepseSupplierCaptureComponent_span_167_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Acta constitutiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](183, RepseSupplierCaptureComponent_span_183_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "INE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](202, RepseSupplierCaptureComponent_span_202_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Alta IMSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](222, RepseSupplierCaptureComponent_span_222_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](225);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](230);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Alta Infonavit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](241, RepseSupplierCaptureComponent_span_241_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](244);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](249);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Alta SAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](261, RepseSupplierCaptureComponent_span_261_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](264);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](269);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Estado de cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](280, RepseSupplierCaptureComponent_span_280_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Estado financiero");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](300, RepseSupplierCaptureComponent_span_300_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](303);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](308);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "\u00BFEs usted prestador de servicios especializados?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "mat-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "SELECCIONA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "S\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](325, RepseSupplierCaptureComponent_span_325_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](327, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](329, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](339, RepseSupplierCaptureComponent_span_339_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](342);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](347);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](352, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Registro patronal del proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](358, RepseSupplierCaptureComponent_span_358_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](361);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "subir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](366);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "ver");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](371, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RepseSupplierCaptureComponent_Template_button_click_374_listener($event) { return ctx.save(ctx.newProject, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RepseSupplierCaptureComponent_Template_button_click_378_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](381, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("nombre").valid && ctx.newProject.get("nombre").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("direccion").valid && ctx.newProject.get("direccion").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.rfc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("rfc").valid && ctx.newProject.get("rfc").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.contacto);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("contacto").valid && ctx.newProject.get("contacto").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("ciudad").valid && ctx.newProject.get("ciudad").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("estado").valid && ctx.newProject.get("estado").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.objetivoSocial);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("objetivoSocial").valid && ctx.newProject.get("objetivoSocial").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("tipoPersona").valid && ctx.newProject.get("tipoPersona").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("telefono").valid && ctx.newProject.get("telefono").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("tipoPersona").valid && ctx.newProject.get("tipoPersona").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.actaConstitutiva);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("actaConstitutiva").valid && ctx.newProject.get("actaConstitutiva").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.ine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("ine").valid && ctx.newProject.get("ine").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.altaIMSS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("altaIMSS").valid && ctx.newProject.get("altaIMSS").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.altaINFONAVIT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("altaINFONAVIT").valid && ctx.newProject.get("altaINFONAVIT").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.altaSAT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("altaSAT").valid && ctx.newProject.get("altaSAT").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.edoCtaBancario);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("edoCtaBancario").valid && ctx.newProject.get("edoCtaBancario").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.edoFinanciero);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("edoFinanciero").valid && ctx.newProject.get("edoFinanciero").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("edoCtaBancario").valid && ctx.newProject.get("edoCtaBancario").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.contrato);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("contrato").valid && ctx.newProject.get("contrato").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.registroPatronalProv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newProject.get("registroPatronalProv").valid && ctx.newProject.get("registroPatronalProv").touched);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBzZS1zdXBwbGllci1jYXB0dXJlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 50709:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/repse-supplier-review/repse-supplier-review/repse-supplier-review.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepseSupplierReviewComponent": function() { return /* binding */ RepseSupplierReviewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var src_app_components_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/supplier-detail/supplier-detail.component */ 72382);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _components_repse_supplier_review_detail_repse_supplier_review_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/repse-supplier-review-detail/repse-supplier-review-detail.component */ 3073);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/supplier.service */ 64562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);















function RepseSupplierReviewComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r14.proveedorid, " ");
} }
function RepseSupplierReviewComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r15.nombre, " ");
} }
function RepseSupplierReviewComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r16.direccion, " ");
} }
function RepseSupplierReviewComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " rfc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r17.rfc, " ");
} }
function RepseSupplierReviewComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Estatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewComponent_td_32_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "ACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function RepseSupplierReviewComponent_td_32_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "INACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function RepseSupplierReviewComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RepseSupplierReviewComponent_td_32_ng_container_1_Template, 2, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RepseSupplierReviewComponent_td_32_ng_container_2_Template, 2, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r18.estado == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r18.estado == false);
} }
function RepseSupplierReviewComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Examinar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RepseSupplierReviewComponent_td_35_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const element_r21 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.edit(element_r21, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Examinar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RepseSupplierReviewComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 39);
} }
function RepseSupplierReviewComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 40);
} }
class RepseSupplierReviewComponent {
    constructor(dialog, _excelService, _supplyservice) {
        this.dialog = dialog;
        this._excelService = _excelService;
        this._supplyservice = _supplyservice;
        // =================
        // DECLARACIONES
        // =================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.displayedColumns = ['id', 'nombre', 'direccion', 'rfc', 'estado', 'autorize'];
    }
    // =================
    // PROCEDIMIENTOS
    // =================
    ngOnInit() {
        this.getsupplier();
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({
                nombre: element.nombre,
                direccion: element.direccion,
                RFC: element.rfc,
                estatus: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Proveedores');
    }
    newcustomer(evetn) {
        console.log('Alta de proveedores');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'PROVEEDOR',
            arrayData: null,
            proveedorId: 0,
            estadoPantalla: 'New'
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_0__.SupplierDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    edit(element, event) {
        console.log('Editar un proveedores', element.proveedorId);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'PROVEEDOR',
            arrayData: element,
            proveedorId: element.proveedorId,
            estadoPantalla: 'Edit'
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(_components_repse_supplier_review_detail_repse_supplier_review_detail_component__WEBPACK_IMPORTED_MODULE_1__.RepseSupplierReviewDetailComponent, dialogConfig);
        // const dialogRef = this.dialog.open(SupplierDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    // =================
    // UTILERIAS
    // =================
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
    // =================
    // SERVICIOS
    // =================
    getsupplier() {
        // Proyectos registrados
        this._supplyservice.getsupplyAll().subscribe(res => {
            console.log('Proveedores', res);
            this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.iterator();
            this.dataSourceShow.sort = this.sort;
        }, error => console.log("error consulta regiones", error));
    }
}
RepseSupplierReviewComponent.ɵfac = function RepseSupplierReviewComponent_Factory(t) { return new (t || RepseSupplierReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_2__.ExcelServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_3__.supplyservice)); };
RepseSupplierReviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RepseSupplierReviewComponent, selectors: [["app-repse-supplier-review"]], viewQuery: function RepseSupplierReviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 38, vars: 3, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", "hidden", "", 4, "matHeaderCellDef"], ["mat-cell", "", "hidden", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "direccion"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["matColumnDef", "rfc"], ["matColumnDef", "estado"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "autorize"], ["mat-header-cell", "", "class", ".colbuttons", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", "hidden", "", 1, "col30"], ["mat-cell", "", "hidden", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], [4, "ngIf"], ["mat-header-cell", "", 1, ".colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function RepseSupplierReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Proveedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RepseSupplierReviewComponent_th_19_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, RepseSupplierReviewComponent_td_20_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](21, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RepseSupplierReviewComponent_th_22_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, RepseSupplierReviewComponent_td_23_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, RepseSupplierReviewComponent_th_25_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, RepseSupplierReviewComponent_td_26_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](27, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RepseSupplierReviewComponent_th_28_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, RepseSupplierReviewComponent_td_29_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](30, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, RepseSupplierReviewComponent_th_31_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, RepseSupplierReviewComponent_td_32_Template, 3, 2, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](33, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, RepseSupplierReviewComponent_th_34_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, RepseSupplierReviewComponent_td_35_Template, 3, 0, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, RepseSupplierReviewComponent_tr_36_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, RepseSupplierReviewComponent_tr_37_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBzZS1zdXBwbGllci1yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1678:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/requisition/requisition-list/requisition-list.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequisitionListComponent": function() { return /* binding */ RequisitionListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var src_app_components_requisitions_requisition_detail_requisition_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/requisitions/requisition-detail/requisition-detail.component */ 67027);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var src_app_services_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/requisition/requisition.service */ 73232);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
















function RequisitionListComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Proyecto-Categor\u00EDa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisitionListComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r12.codigo_proyectocategoria, " ");
} }
function RequisitionListComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Requisici\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisitionListComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r13.codigo, " ");
} }
function RequisitionListComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fecha de Requisici\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisitionListComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r14.fecha, " dd-MM-yyyy"), " ");
} }
function RequisitionListComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Estatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisitionListComponent_td_43_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "ACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function RequisitionListComponent_td_43_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "INACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function RequisitionListComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RequisitionListComponent_td_43_ng_container_1_Template, 2, 0, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RequisitionListComponent_td_43_ng_container_2_Template, 2, 0, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r15.estado == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r15.estado == false);
} }
function RequisitionListComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Consultar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisitionListComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequisitionListComponent_td_46_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const element_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.editRequisicion(element_r18, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequisitionListComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 46);
} }
function RequisitionListComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 47);
} }
const _c0 = function () { return [20, 100, 150]; };
class RequisitionListComponent {
    constructor(dialog, _excelService, _requisitionService) {
        this.dialog = dialog;
        this._excelService = _excelService;
        this._requisitionService = _requisitionService;
        // =================
        // DECLARACIONES
        // =================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        // displayedColumns = ['proyecto_id', 'Categoria_Id', 'Requisicion_Id', 'Fecha_Requisicion', 'Estatus', 'editar'];
        this.displayedColumns = ['codigo_proyectocategoria', 'codigo', 'fecha', 'estado', 'editar'];
    }
    // =================
    // PROCEDIMIENTOS
    // =================
    ngOnInit() {
        this.getrequisition();
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({
                // proyecto_id : element.proyecto_id
                categoria: element.codigo_proyectocategoria,
                requisicion: element.requisicioninterna_id,
                Fecha_Requisicion: moment__WEBPACK_IMPORTED_MODULE_1__(element.Fecha_Requisicion, 'YYYY-MM-DD').format('DD-MM-YYYY'),
                estatus: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');
    }
    nuevaRequisicion(evetn) {
        console.log('Alta de requisiciones');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'REQUISICIONES',
            arrayData: null,
            requisicionId: 0
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_requisitions_requisition_detail_requisition_detail_component__WEBPACK_IMPORTED_MODULE_0__.RequisitionDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    editRequisicion(element) {
        console.log('Editar de requisiciones');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'REQUISICIONES',
            arrayData: element,
            requisicionId: element.requisicioninterna_id
        };
        dialogConfig.width = '1200px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_requisitions_requisition_detail_requisition_detail_component__WEBPACK_IMPORTED_MODULE_0__.RequisitionDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    // =================
    // UTILERIAS
    // =================
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
    // =================
    // SERVICIOS
    // =================
    getrequisition() {
        // Proyectos registrados
        this._requisitionService.getRequisitionAll().subscribe(res => {
            console.log('Requisiciones', res);
            this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.iterator();
            this.dataSourceShow.sort = this.sort;
        }, error => console.log("error consulta regiones", error));
    }
}
RequisitionListComponent.ɵfac = function RequisitionListComponent_Factory(t) { return new (t || RequisitionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_2__.ExcelServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_requisition_requisition_service__WEBPACK_IMPORTED_MODULE_3__.requisitionservice)); };
RequisitionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RequisitionListComponent, selectors: [["app-requisition-list"]], viewQuery: function RequisitionListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 50, vars: 8, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col20"], ["type", "text", "placeholder", "BUSCAR", 1, "form-control", "form-control-line", 3, "keyup"], [1, "col70"], [1, "col10"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-arrow-down", "fa-lg", "icon-cog-wite"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "fa", "fa-plus", "fa-lg", "icon-cog-wite"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "codigo_proyectocategoria"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "column", 4, "matCellDef"], ["matColumnDef", "codigo"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["matColumnDef", "fecha"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "estado"], ["mat-cell", "", "class", "colbuttons", 4, "matCellDef"], ["matColumnDef", "editar"], ["mat-header-cell", "", "class", "colbuttons", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "width", "95%", 3, "pageSizeOptions", "showFirstLastButtons", "pageSize", "length", "page"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-cell", "", 1, "column"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], ["mat-cell", "", 1, "colbuttons"], [4, "ngIf"], ["mat-header-cell", "", 1, "colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-eye", "fa-lg", "icon-cog"], ["mat-header-row", ""], ["mat-row", ""]], template: function RequisitionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Requisiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function RequisitionListComponent_Template_input_keyup_16_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequisitionListComponent_Template_button_click_19_listener() { return ctx.descargarExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u00A0\u00A0Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequisitionListComponent_Template_button_click_23_listener($event) { return ctx.nuevaRequisicion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u00A0\u00A0Nueva Requisici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](32, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, RequisitionListComponent_th_33_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, RequisitionListComponent_td_34_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](35, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, RequisitionListComponent_th_36_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, RequisitionListComponent_td_37_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](38, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, RequisitionListComponent_th_39_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, RequisitionListComponent_td_40_Template, 3, 4, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](41, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, RequisitionListComponent_th_42_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, RequisitionListComponent_td_43_Template, 3, 2, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](44, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, RequisitionListComponent_th_45_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, RequisitionListComponent_td_46_Template, 3, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, RequisitionListComponent_tr_47_Template, 1, 0, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, RequisitionListComponent_tr_48_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-paginator", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function RequisitionListComponent_Template_mat_paginator_page_49_listener($event) { return ctx.handlePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0))("showFirstLastButtons", true)("pageSize", ctx.pageSize)("length", ctx.totalSize);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".col10[_ngcontent-%COMP%]{\n    width: 10%;\n    vertical-align: middle;\n    text-align: center;\n}\n\n.col20[_ngcontent-%COMP%]{\n    width: 20%;\n    vertical-align: middle;\n}\n\n.col30[_ngcontent-%COMP%]{\n    width: 30%;\n    vertical-align: middle;\n}\n\n.col70[_ngcontent-%COMP%]{\n    width: 70%;\n    vertical-align: middle;\n}\n\n.colbuttons[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    text-align: center;\n}\n\n.column[_ngcontent-%COMP%]{\n    vertical-align: middle;\n}\n\n.icon-cog[_ngcontent-%COMP%] {\n    color: orange;\n  }\n\n.icon-cog-wite[_ngcontent-%COMP%] {\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpc2l0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJyZXF1aXNpdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sMTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbDIwe1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbDMwe1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbDcwe1xuICAgIHdpZHRoOiA3MCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbGJ1dHRvbnN7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2x1bW57XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmljb24tY29nIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICB9XG5cbiAgLmljb24tY29nLXdpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 3349:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/storageInvoice/storage-invoice-list/storage-invoice-list.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageInvoiceListComponent": function() { return /* binding */ StorageInvoiceListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var src_app_components_requisitions_requisition_detail_requisition_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/requisitions/requisition-detail/requisition-detail.component */ 67027);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);















function StorageInvoiceListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StorageInvoiceListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.proyecto_id, " ");
} }
function StorageInvoiceListComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Categoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StorageInvoiceListComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r15.Categoria_Id, " ");
} }
function StorageInvoiceListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requisici\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StorageInvoiceListComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r16.Requisicion_Id, " ");
} }
function StorageInvoiceListComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Fecha de Requisici\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StorageInvoiceListComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r17.Fecha_Requisicion, " dd-MM-yyyy"), " ");
} }
function StorageInvoiceListComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Estatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StorageInvoiceListComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r18.Estatus, " ");
} }
function StorageInvoiceListComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StorageInvoiceListComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StorageInvoiceListComponent_td_47_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const element_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.editRequisicion(element_r19, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StorageInvoiceListComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 41);
} }
function StorageInvoiceListComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 42);
} }
const _c0 = function () { return [20, 100, 150]; };
class StorageInvoiceListComponent {
    constructor(dialog, _excelService) {
        this.dialog = dialog;
        this._excelService = _excelService;
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.displayedColumns = ['proyecto_id', 'Categoria_Id', 'Requisicion_Id', 'Fecha_Requisicion', 'Estatus', 'editar'];
    }
    ngOnInit() {
        let arrayData;
        arrayData = [{ proyecto_id: 1, Categoria_Id: 1, Requisicion_Id: 1, Fecha_Requisicion: '2020-01-01', Estatus: 'ACTIVO' }];
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(arrayData);
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({ proyecto_id: element.proyecto_id,
                categoria: element.codigo_proyectocategoria,
                requisicion: element.requisicioninterna_id,
                Fecha_Requisicion: moment__WEBPACK_IMPORTED_MODULE_1__(element.Fecha_Requisicion, 'YYYY-MM-DD').format('DD-MM-YYYY'),
                estatus: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');
    }
    nuevaRequisicion(evetn) {
        console.log('Alta de requisiciones');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'REQUISICIONES',
            arrayData: null,
            requisicionId: 1
        };
        dialogConfig.width = '900px';
        dialogConfig.height = '400px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_requisitions_requisition_detail_requisition_detail_component__WEBPACK_IMPORTED_MODULE_0__.RequisitionDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    editRequisicion(event) {
        console.log('Alta de requisiciones');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'REQUISICIONES',
            arrayData: null,
            requisicionId: 1
        };
        dialogConfig.width = '900px';
        dialogConfig.height = '400px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_requisitions_requisition_detail_requisition_detail_component__WEBPACK_IMPORTED_MODULE_0__.RequisitionDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    filtrar(event) { }
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
}
StorageInvoiceListComponent.ɵfac = function StorageInvoiceListComponent_Factory(t) { return new (t || StorageInvoiceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_2__.ExcelServiceService)); };
StorageInvoiceListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StorageInvoiceListComponent, selectors: [["app-storage-invoice-list"]], viewQuery: function StorageInvoiceListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 51, vars: 8, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col20"], ["type", "text", "placeholder", "BUSCAR", 1, "form-control", "form-control-line", 3, "keyup"], [1, "col70"], [1, "col10"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "proyecto_id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Categoria_Id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["matColumnDef", "Requisicion_Id"], ["matColumnDef", "Fecha_Requisicion"], ["matColumnDef", "Estatus"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "editar"], ["mat-header-cell", "", "class", ".colbuttons", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "width", "95%", 3, "pageSizeOptions", "showFirstLastButtons", "pageSize", "length", "page"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], ["mat-header-cell", "", 1, ".colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function StorageInvoiceListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Almac\u00E9n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function StorageInvoiceListComponent_Template_input_keyup_16_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StorageInvoiceListComponent_Template_button_click_19_listener() { return ctx.descargarExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StorageInvoiceListComponent_Template_button_click_22_listener($event) { return ctx.nuevaRequisicion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Nueva Requisici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, StorageInvoiceListComponent_th_31_Template, 3, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, StorageInvoiceListComponent_td_32_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, StorageInvoiceListComponent_th_34_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, StorageInvoiceListComponent_td_35_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](36, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, StorageInvoiceListComponent_th_37_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, StorageInvoiceListComponent_td_38_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](39, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, StorageInvoiceListComponent_th_40_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, StorageInvoiceListComponent_td_41_Template, 3, 4, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](42, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, StorageInvoiceListComponent_th_43_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, StorageInvoiceListComponent_td_44_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](45, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, StorageInvoiceListComponent_th_46_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, StorageInvoiceListComponent_td_47_Template, 3, 0, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, StorageInvoiceListComponent_tr_48_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, StorageInvoiceListComponent_tr_49_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-paginator", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function StorageInvoiceListComponent_Template_mat_paginator_page_50_listener($event) { return ctx.handlePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0))("showFirstLastButtons", true)("pageSize", ctx.pageSize)("length", ctx.totalSize);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".col10[_ngcontent-%COMP%]{\n    width: 10%;\n    vertical-align: middle;\n}\n\n.col20[_ngcontent-%COMP%]{\n    width: 20%;\n    vertical-align: middle;\n}\n\n.col30[_ngcontent-%COMP%]{\n    width: 30%;\n    vertical-align: middle;\n}\n\n.col70[_ngcontent-%COMP%]{\n    width: 70%;\n    vertical-align: middle;\n}\n\n.colbuttons[_ngcontent-%COMP%]{\n    vertical-align: bottom;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JhZ2UtaW52b2ljZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzdG9yYWdlLWludm9pY2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbDEwe1xuICAgIHdpZHRoOiAxMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbDIwe1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbDMwe1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbDcwe1xuICAgIHdpZHRoOiA3MCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbGJ1dHRvbnN7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ 22284:
/*!******************************************************!*\
  !*** ./src/app/pages/supplier/supplier.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierComponent": function() { return /* binding */ SupplierComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var src_app_components_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/supplier-detail/supplier-detail.component */ 72382);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/supplier.service */ 64562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);














function SupplierComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SupplierComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.proveedorid, " ");
} }
function SupplierComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SupplierComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r15.nombre, " ");
} }
function SupplierComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SupplierComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r16.direccion, " ");
} }
function SupplierComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " rfc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SupplierComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r17.rfc, " ");
} }
function SupplierComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Estatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SupplierComponent_td_44_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function SupplierComponent_td_44_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "INACTIVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function SupplierComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SupplierComponent_td_44_ng_container_1_Template, 2, 0, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SupplierComponent_td_44_ng_container_2_Template, 2, 0, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r18.estado == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", element_r18.estado == false);
} }
function SupplierComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SupplierComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierComponent_td_47_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const element_r21 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.edit(element_r21, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SupplierComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 45);
} }
function SupplierComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 46);
} }
class SupplierComponent {
    constructor(dialog, _excelService, _supplyservice) {
        this.dialog = dialog;
        this._excelService = _excelService;
        this._supplyservice = _supplyservice;
        // =================
        // DECLARACIONES
        // =================
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.displayedColumns = ['id', 'nombre', 'direccion', 'rfc', 'estado', 'edit'];
    }
    // =================
    // PROCEDIMIENTOS
    // =================
    ngOnInit() {
        this.getsupplier();
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({
                nombre: element.nombre,
                direccion: element.direccion,
                RFC: element.rfc,
                estatus: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Proveedores');
    }
    newcustomer(evetn) {
        console.log('Alta de proveedores');
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'PROVEEDOR',
            arrayData: null,
            proveedorId: 0,
            estadoPantalla: 'New'
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_0__.SupplierDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    edit(element, event) {
        console.log('Editar un proveedores', element.proveedorId);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        dialogConfig.data = {
            id: 1,
            title: 'PROVEEDOR',
            arrayData: element,
            proveedorId: element.proveedorId,
            estadoPantalla: 'Edit'
        };
        dialogConfig.width = '1300px';
        dialogConfig.height = '900px';
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(src_app_components_supplier_detail_supplier_detail_component__WEBPACK_IMPORTED_MODULE_0__.SupplierDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            // window.location.reload();
        });
    }
    filtrar(event) {
        const filtro = event.target.value;
        this.dataSourceShow.filter = filtro.trim().toLowerCase();
        console.log('filtro', filtro);
    }
    // =================
    // UTILERIAS
    // =================
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
    // =================
    // SERVICIOS
    // =================
    getsupplier() {
        // Proyectos registrados
        this._supplyservice.getsupplyAll().subscribe(res => {
            console.log('Proveedores', res);
            this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(res);
            this.array = res;
            this.totalSize = this.array.length;
            this.iterator();
            this.dataSourceShow.sort = this.sort;
        }, error => console.log("error consulta regiones", error));
    }
}
SupplierComponent.ɵfac = function SupplierComponent_Factory(t) { return new (t || SupplierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_1__.ExcelServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_2__.supplyservice)); };
SupplierComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SupplierComponent, selectors: [["app-supplier"]], viewQuery: function SupplierComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 50, vars: 3, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "card"], [1, "col20"], ["type", "text", "placeholder", "BUSCAR", 1, "form-control", "form-control-line", 3, "keyup"], [1, "col70"], [1, "col10"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "col-12", "col-md-12", "p-0"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", "hidden", "", 4, "matHeaderCellDef"], ["mat-cell", "", "hidden", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "direccion"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["matColumnDef", "rfc"], ["matColumnDef", "estado"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "edit"], ["mat-header-cell", "", "class", ".colbuttons", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", "hidden", "", 1, "col30"], ["mat-cell", "", "hidden", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], [4, "ngIf"], ["mat-header-cell", "", 1, ".colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function SupplierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Proveedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function SupplierComponent_Template_input_keyup_16_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierComponent_Template_button_click_19_listener() { return ctx.descargarExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierComponent_Template_button_click_22_listener($event) { return ctx.newcustomer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Nuevo Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, SupplierComponent_th_31_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, SupplierComponent_td_32_Template, 2, 1, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, SupplierComponent_th_34_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, SupplierComponent_td_35_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](36, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, SupplierComponent_th_37_Template, 2, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, SupplierComponent_td_38_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](39, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, SupplierComponent_th_40_Template, 2, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, SupplierComponent_td_41_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](42, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, SupplierComponent_th_43_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, SupplierComponent_td_44_Template, 3, 2, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](45, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, SupplierComponent_th_46_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, SupplierComponent_td_47_Template, 3, 0, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, SupplierComponent_tr_48_Template, 1, 0, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, SupplierComponent_tr_49_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], styles: [".col10[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col20[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col30[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col70[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.colbuttons[_ngcontent-%COMP%]{\r\n    vertical-align: bottom;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzdXBwbGllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbDEwe1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jb2wyMHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY29sMzB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNvbDcwe1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5jb2xidXR0b25ze1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 85023:
/*!**********************************************************************!*\
  !*** ./src/app/pages/warehouse-review/warehouse-review.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseReviewComponent": function() { return /* binding */ WarehouseReviewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers/excel-service.service */ 7363);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);










function WarehouseReviewComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Requisici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehouseReviewComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r10.requisicion_Codigo, " ");
} }
function WarehouseReviewComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehouseReviewComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.descripcion, " ");
} }
function WarehouseReviewComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Estatus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehouseReviewComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.estado, " ");
} }
function WarehouseReviewComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehouseReviewComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WarehouseReviewComponent_td_27_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const element_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.editRequisicion(element_r13, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WarehouseReviewComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 32);
} }
function WarehouseReviewComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 33);
} }
class WarehouseReviewComponent {
    constructor(dialog, _excelService) {
        this.dialog = dialog;
        this._excelService = _excelService;
        // Para paginación
        this.pageIndex = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.totalSize = 0;
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.displayedColumns = ['requisicion_Codigo', 'descripcion', 'Estatus', 'editar'];
    }
    ngOnInit() {
        let arrayData;
        arrayData = [{ requisicion_Codigo: 1, descripcion: 'Descripción', estado: 'ACTIVO' }];
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(arrayData);
    }
    descargarExcel() {
        console.log('Descargar a excel');
        let dataSourceShowToExcel = [];
        this.dataSourceShow.filteredData.forEach(element => {
            dataSourceShowToExcel.push({ requisicion_Codigo: element.requisicion_Codigo,
                descripcion: element.descripcion,
                estatus: element.estado
            });
        });
        this._excelService.exportAsExcelFile(dataSourceShowToExcel, 'Requisicones');
    }
    filtrar(event) { }
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator();
    }
    iterator() {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = this.array.slice(0, this.totalSize);
        this.dataSourceShow = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(part);
        this.dataSourceShow.sort = this.sort;
        this.dataSourceShow.paginator = this.paginator;
    }
}
WarehouseReviewComponent.ɵfac = function WarehouseReviewComponent_Factory(t) { return new (t || WarehouseReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_helpers_excel_service_service__WEBPACK_IMPORTED_MODULE_0__.ExcelServiceService)); };
WarehouseReviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WarehouseReviewComponent, selectors: [["app-warehouse-review"]], viewQuery: function WarehouseReviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { filterChange: "filterChange" }, decls: 30, vars: 3, consts: [[1, "header", "bg-gradient-danger", "pb-8", "pt-5", "pt-md-8"], [1, "container-fluid"], [1, "header-body"], [1, "container-fluid", "mt--7"], [1, "row"], [1, "col"], [1, "card", "shadow"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "heading-small", "text-muted", "mb-4"], [1, "my-4"], [1, "col-12", "col-md-12", "p-0"], [1, "card"], [1, "card-body", "card-body-table"], ["matSort", "", 1, "mat-elevation-z8", 2, "width", "95%", 3, "dataSource"], ["matColumnDef", "requisicion_Codigo"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col10", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col30", 4, "matHeaderCellDef"], ["matColumnDef", "Estatus"], ["mat-header-cell", "", "mat-sort-header", "", "class", "col20", 4, "matHeaderCellDef"], ["matColumnDef", "editar"], ["mat-header-cell", "", "class", ".colbuttons", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col10"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "col30"], ["mat-header-cell", "", "mat-sort-header", "", 1, "col20"], ["mat-header-cell", "", 1, ".colbuttons"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function WarehouseReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Revisi\u00F3n en Almac\u00E9n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WarehouseReviewComponent_th_17_Template, 3, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, WarehouseReviewComponent_td_18_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, WarehouseReviewComponent_th_20_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, WarehouseReviewComponent_td_21_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, WarehouseReviewComponent_th_23_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, WarehouseReviewComponent_td_24_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, WarehouseReviewComponent_th_26_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, WarehouseReviewComponent_td_27_Template, 3, 0, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, WarehouseReviewComponent_tr_28_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, WarehouseReviewComponent_tr_29_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSourceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 54286:
/*!***************************************************!*\
  !*** ./src/app/services/PurchaseOrder.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "purchaseOrderservice": function() { return /* binding */ purchaseOrderservice; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class purchaseOrderservice {
    constructor(http) {
        this.http = http;
    }
    getPOAll() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'PurchaseOrder/lista', { headers });
    }
    getPOById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'PurchaseOrder/' + id, { headers });
    }
    getPODetail(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'PurchaseOrder/detalle/' + id, { headers });
    }
    insertPO_Hdr(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'PurchaseOrder/registrar', arrayToDb, { headers });
    }
    insertPODetail(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'PurchaseOrder/registrar/detalle', arrayToDb, { headers });
    }
    putPOCancel(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'PurchaseOrder/cancelar/' + id, '', { headers });
    }
    updatePOStatus(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'PurchaseOrder/estado', arrayToDb, { headers });
    }
}
purchaseOrderservice.ɵfac = function purchaseOrderservice_Factory(t) { return new (t || purchaseOrderservice)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
purchaseOrderservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: purchaseOrderservice, factory: purchaseOrderservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 25405:
/*!************************************************!*\
  !*** ./src/app/services/aesencrypt.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AESEncryptService": function() { return /* binding */ AESEncryptService; }
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 2527);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class AESEncryptService {
    constructor() {
        this.secretKey = 'C64GF-QGX43-2PMM3-KFGKM-Q66PR';
    }
    encrypt(value) {
        return crypto_js__WEBPACK_IMPORTED_MODULE_0__.HmacSHA256(value, this.secretKey.trim()).toString();
    }
}
AESEncryptService.ɵfac = function AESEncryptService_Factory(t) { return new (t || AESEncryptService)(); };
AESEncryptService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AESEncryptService, factory: AESEncryptService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);



class AuthService {
    constructor(http) {
        this.http = http;
        // this.url = GlobalUrl.url_webapi;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers;
    }
    loginReq(auth) {
        return this.http.post(this.url + 'auth/login', auth);
    }
    resetPasswordReq(resetPasswordReq) {
        return this.http.post(this.url + 'auth/resetpasswordrequest', resetPasswordReq);
    }
    changePasswordReq(changePasswordReq) {
        return this.http.post(this.url + 'auth/changepassword', changePasswordReq);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 70249:
/*!*******************************************************!*\
  !*** ./src/app/services/category/category.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoryservice": function() { return /* binding */ categoryservice; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class categoryservice {
    constructor(http) {
        this.http = http;
    }
    getCategoryAll() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Category/lista', { headers });
    }
    getCategoryById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Category/' + id, { headers });
    }
    updateProjects(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Category/actualizar', arrayToDb, { headers });
    }
    insertProjects(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Category/registrar', arrayToDb, { headers });
    }
}
categoryservice.ɵfac = function categoryservice_Factory(t) { return new (t || categoryservice)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
categoryservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: categoryservice, factory: categoryservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52541:
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customerservice": function() { return /* binding */ customerservice; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class customerservice {
    constructor(http) {
        this.http = http;
    }
    getcustomerAll() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Customer/lista', { headers });
    }
    getcustomerById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Customer/' + id, { headers });
    }
    insertcustomer(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Customer/registrar', arrayToDb, { headers });
    }
    updatecustomer(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Customer/actualizar', arrayToDb, { headers });
    }
    putcustomerStatus(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Customer/activoinactivo', arrayToDb, { headers });
    }
}
customerservice.ɵfac = function customerservice_Factory(t) { return new (t || customerservice)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
customerservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: customerservice, factory: customerservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 48248);



class DataService {
    constructor() {
        this.loginChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.DecodeToken();
    }
    DecodeToken() {
        if (localStorage.getItem('token_access') !== null) {
            const decodeJWT = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.default)(localStorage.getItem('token_access'));
            this.userid = decodeJWT['usuario_id'];
            this.username = decodeJWT['usuario'];
            this.fullname = decodeJWT['nombre_completo'];
            this.email = decodeJWT['correo'];
            this.branchofficeid = decodeJWT['oficina_principalid'];
            this.branchoffice = decodeJWT['oficina_principal'];
            this.profileid = decodeJWT['perfil_usuarioid'];
            this.profile = decodeJWT['perfil_usuario'];
            this.employid = decodeJWT['empleado_id'];
            this.employcategory = decodeJWT['categoria_empleado'];
            this.companyid = decodeJWT['empresa'];
            this.country = decodeJWT['pais'];
            localStorage.setItem('perfil_usuario', this.profile);
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58762:
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginservice": function() { return /* binding */ loginservice; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class loginservice {
    constructor() { }
    checkusernameandpassword(uname, pwd) {
        if (uname === 'admin' && pwd === 'admin123') {
            // localStorage.setItem('username', 'admin');
            return true;
        }
        else {
            return false;
        }
    }
}
loginservice.ɵfac = function loginservice_Factory(t) { return new (t || loginservice)(); };
loginservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: loginservice, factory: loginservice.ɵfac });


/***/ }),

/***/ 7799:
/*!********************************************************************!*\
  !*** ./src/app/services/projectCtegory/projectCateogry.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectCategoryservice": function() { return /* binding */ projectCategoryservice; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class projectCategoryservice {
    constructor(http) {
        this.http = http;
    }
    getProjectCateogryAll() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'ProjectCategory/lista', { headers });
    }
    // getProjectCateogryById(proyectoId : any) {
    //     return this.http.get<projectCategoryModel[]>(environment.urlapi + environment.apiContextDrivers + 'ProjectCategory/' + proyectoId);
    // }
    getProjectCateogryById(proyectoId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'ProjectCategory/' + proyectoId, { headers });
    }
    updateProjectCatgory(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'ProjectCategory/actualizar', arrayToDb, { headers });
    }
    insertProjects(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'ProjectCategory/registrar', arrayToDb, { headers });
    }
}
projectCategoryservice.ɵfac = function projectCategoryservice_Factory(t) { return new (t || projectCategoryservice)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
projectCategoryservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: projectCategoryservice, factory: projectCategoryservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 56980:
/*!******************************************************!*\
  !*** ./src/app/services/projects/project.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectservice": function() { return /* binding */ projectservice; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class projectservice {
    constructor(http) {
        this.http = http;
    }
    getProjectAll() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Project/lista', { headers });
    }
    updateProjects(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Project/actualizar', arrayToDb, { headers });
    }
    insertProjects(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Project/registrar', arrayToDb, { headers });
    }
}
projectservice.ɵfac = function projectservice_Factory(t) { return new (t || projectservice)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
projectservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: projectservice, factory: projectservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9337:
/*!*********************************************************!*\
  !*** ./src/app/services/quotation/quotation.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotationservice": function() { return /* binding */ quotationservice; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class quotationservice {
    constructor(http) {
        this.http = http;
    }
    getQuotationAll() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Quote/lista', { headers });
    }
    getQuotationById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Quote/' + id, { headers });
    }
    getQuotationDetail(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Quote/detalle/' + id, { headers });
    }
    insertQuotation(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Quote/registrar', arrayToDb, { headers });
    }
    insertQuotationDetail(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Quote/registrar/detalle', arrayToDb, { headers });
    }
    insertQuotationCancel(id) {
        // return this.http.put(environment.urlapi + environment.apiContextDrivers + 'Quotation/cancelar' + id);
    }
}
quotationservice.ɵfac = function quotationservice_Factory(t) { return new (t || quotationservice)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
quotationservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: quotationservice, factory: quotationservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73232:
/*!*************************************************************!*\
  !*** ./src/app/services/requisition/requisition.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requisitionservice": function() { return /* binding */ requisitionservice; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class requisitionservice {
    constructor(http) {
        this.http = http;
    }
    getRequisitionAll() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'InternalRequisition/lista', { headers });
    }
    getRequisitionById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'InternalRequisition/' + id, { headers });
    }
    getRequisitionDetail(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'InternalRequisition/detalle/' + id, { headers });
    }
    insertRequisition(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'InternalRequisition/registrar', arrayToDb, { headers });
    }
    insertRequisitionDetail(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'InternalRequisition/registrar/detalle', arrayToDb, { headers });
    }
    insertRequisitionCancel(id) {
        // return this.http.put(environment.urlapi + environment.apiContextDrivers + 'InternalRequisition/cancelar' + id);
    }
}
requisitionservice.ɵfac = function requisitionservice_Factory(t) { return new (t || requisitionservice)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
requisitionservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: requisitionservice, factory: requisitionservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 64562:
/*!**********************************************!*\
  !*** ./src/app/services/supplier.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supplyservice": function() { return /* binding */ supplyservice; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class supplyservice {
    constructor(http) {
        this.http = http;
    }
    getsupplyAll() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Provider/lista', { headers });
    }
    getsupplyById(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Provider/' + id, { headers });
    }
    insertsupply(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Provider/registrar', arrayToDb, { headers });
    }
    updatesupply(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Provider/actualizar', arrayToDb, { headers });
    }
    putsupplyStatus(arrayToDb) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers + 'Provider/activoinactivo', arrayToDb, { headers });
    }
}
supplyservice.ɵfac = function supplyservice_Factory(t) { return new (t || supplyservice)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
supplyservice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: supplyservice, factory: supplyservice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class UserService {
    constructor(http) {
        this.http = http;
        // this.url = GlobalUrl.url_webapi;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlapi + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiContextDrivers;
    }
    getAllUser() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(this.url + 'empleado/listar/todos/', { headers });
    }
    getAllUserGP() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(this.url + 'empleado/listar/todos/nombres', { headers });
    }
    getAllEmployee() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.get(this.url + 'empleado/listar/brasil/', { headers });
    }
    postRegisterEmployee(employeeObj) {
        const params = JSON.stringify(employeeObj);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(this.url + 'empleado/registrar/', params, { headers });
    }
    postUpdateEmployee(employeeObj) {
        const params = JSON.stringify(employeeObj);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(this.url + 'empleado/actualizar/' + employeeObj.resourceid, params, { headers });
    }
    postDeleteEmployee(resourceid) {
        const params = JSON.stringify(resourceid);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(this.url + 'empleado/eliminar/' + resourceid, params, { headers });
    }
    postRegisterUser(userObj) {
        const params = JSON.stringify(userObj);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(this.url + 'empleado/registrar/usuario/', params, { headers });
    }
    postUpdateUser(userObj) {
        const params = JSON.stringify(userObj);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(this.url + 'empleado/actualizar/usuario/' + userObj.resourceid, params, { headers });
    }
    postDeleteUser(userid) {
        const params = JSON.stringify(userid);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(this.url + 'empleado/eliminar/usuario/' + userid, params, { headers });
    }
    getPermission(userid) {
        const params = JSON.stringify(userid);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(this.url + 'empleado/permiso/listar/' + userid, params, { headers });
    }
    getCountry(userid) {
        const params = JSON.stringify(userid);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(this.url + 'empleado/pais/listar/' + userid, params, { headers });
    }
    getSubProjectJoinUser(userid) {
        const params = JSON.stringify(userid);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + localStorage.getItem('token_access'));
        return this.http.post(this.url + 'empleado/buscar_subproyecto/' + userid, params, { headers });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65903:
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionDirective": function() { return /* binding */ AccordionDirective; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd))
            .subscribe(e => this.checkOpenLinks());
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AccordionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });


/***/ }),

/***/ 9502:
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": function() { return /* binding */ AccordionAnchorDirective; }
/* harmony export */ });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ 67725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective)); };
AccordionAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 67725:
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionLinkDirective": function() { return /* binding */ AccordionLinkDirective; }
/* harmony export */ });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ 65903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective)); };
AccordionLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });


/***/ }),

/***/ 98836:
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": function() { return /* reexport safe */ _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective; },
/* harmony export */   "AccordionLinkDirective": function() { return /* reexport safe */ _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective; },
/* harmony export */   "AccordionDirective": function() { return /* reexport safe */ _accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective; }
/* harmony export */ });
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ 9502);
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ 67725);
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ 65903);





/***/ }),

/***/ 42647:
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItems": function() { return /* binding */ MenuItems; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
    { state: 'project', name: 'Proyecto', type: 'link', icon: 'view_comfy' },
    { state: 'requisition', name: 'Requisiciones', type: 'link', icon: 'view_list' },
    { state: 'quotation', name: 'Cotizaciones', type: 'link', icon: 'web' },
    { state: 'po', name: 'Orden de compra', type: 'link', icon: 'tab' },
    // { state: 'storage', name: 'Almacén', type: 'link', icon: 'assignment_turned_in' },
    // { state: 'warehouse-review', name: 'Revisión en Almacén', type: 'link', icon: 'assignment_turned_in' },
    { state: 'customer', name: 'Clientes', type: 'link', icon: 'assignment_turned_in' },
    { state: 'supplier', name: 'Proveedores', type: 'link', icon: 'assignment_turned_in' },
    { state: 'reportMaster', name: 'Reporte Maestro', type: 'link', icon: 'assignment_turned_in' },
    { state: 'repseCapture', name: 'Captura de proveedores', type: 'link', icon: 'assignment_turned_in' },
    { state: 'repseReview', name: 'Revisión de proveedores', type: 'link', icon: 'assignment_turned_in' },
    // { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
    // { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
    // { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
    // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
    // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
    // { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
    // {
    //   state: 'expansion',
    //   type: 'link',
    //   name: 'Expansion Panel',
    //   icon: 'vertical_align_center'
    // },
    // { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
    // { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
    // {
    //   state: 'progress-snipper',
    //   type: 'link',
    //   name: 'Progress snipper',
    //   icon: 'border_horizontal'
    // },
    // {
    //   state: 'progress',
    //   type: 'link',
    //   name: 'Progress Bar',
    //   icon: 'blur_circular'
    // },
    // {
    //   state: 'dialog',
    //   type: 'link',
    //   name: 'Dialog',
    //   icon: 'assignment_turned_in'
    // },
    // { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
    // { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
    // { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
    // {
    //   state: 'slide-toggle',
    //   type: 'link',
    //   name: 'Slide Toggle',
    //   icon: 'all_inclusive'
    // }
];
class MenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items/menu-items */ 42647);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ 98836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective], exports: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective] }); })();


/***/ }),

/***/ 23812:
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": function() { return /* binding */ SpinnerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);





function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    urlapi: 'https://sap-comercial.azurewebsites.net/',
    apiContextDrivers: 'api/',
    firebaseConfig: {
        apiKey: 'AIzaSyBRC1z4fQiZMaxSwdn4wHIDmHBN2WsGg-Y',
        authDomain: 'sap-comercial.firebaseapp.com',
        projectId: 'sap-comercial',
        storageBucket: 'sap-comercial.appspot.com',
        messagingSenderId: '29606633159',
        appId: '1:296066331591:web:3db0d3725e884c43001fe2',
    }
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 11524);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 75615,
	"./es-mx.js": 75615,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 55382:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 72095:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 61219:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map