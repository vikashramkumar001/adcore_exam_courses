(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent),
/* harmony export */   MY_FORMATS: () => (/* binding */ MY_FORMATS)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ 3392);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 8540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ 2266);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _services_list_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/list-validator.directive */ 1283);






















const _c0 = ["courseForm"];
const _c1 = ["start_picker"];
const _c2 = ["end_picker"];
function AppComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AppComponent_div_11_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Create Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", course_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", course_r45, " ");
  }
}
function AppComponent_div_11_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter the course name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please choose a valid course name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const university_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", university_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", university_r46, " ");
  }
}
function AppComponent_div_11_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter the university ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please choose a valid university ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", country_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", country_r47, " ");
  }
}
function AppComponent_div_11_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter the country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please choose a valid country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", city_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", city_r48, " ");
  }
}
function AppComponent_div_11_mat_error_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter the city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_error_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please choose a valid city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_option_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", currency_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", currency_r49, " ");
  }
}
function AppComponent_div_11_mat_error_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter the currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_error_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please choose a valid currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_error_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter the price amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_error_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter the start date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_error_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter the end date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_11_mat_error_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter the course description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c3 = function (a0) {
  return {
    "disabled": a0
  };
};
function AppComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_11_h1_2_Template, 2, 0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_div_11_h1_3_Template, 2, 0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AppComponent_div_11_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r50.onFormSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 29)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Course Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AppComponent_div_11_Template_input_input_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r52.filterCoursesList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 31)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-autocomplete", null, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AppComponent_div_11_mat_option_15_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AppComponent_div_11_mat_error_16_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AppComponent_div_11_mat_error_17_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field", 29)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "University");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AppComponent_div_11_Template_input_input_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r53.filterUniversityList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 31)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-autocomplete", null, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AppComponent_div_11_mat_option_27_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AppComponent_div_11_mat_error_28_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AppComponent_div_11_mat_error_29_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field", 29)(31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AppComponent_div_11_Template_input_input_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r54.filterCountryList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 31)(35, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-autocomplete", null, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AppComponent_div_11_mat_option_39_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, AppComponent_div_11_mat_error_40_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, AppComponent_div_11_mat_error_41_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-form-field", 29)(43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AppComponent_div_11_Template_input_input_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r55.filterCityList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 31)(47, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-autocomplete", null, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, AppComponent_div_11_mat_option_51_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, AppComponent_div_11_mat_error_52_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, AppComponent_div_11_mat_error_53_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 40)(55, "div", 41)(56, "mat-form-field", 29)(57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AppComponent_div_11_Template_input_input_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r56.filterCurrencyList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 31)(61, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "mat-autocomplete", null, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, AppComponent_div_11_mat_option_65_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, AppComponent_div_11_mat_error_66_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, AppComponent_div_11_mat_error_67_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 44)(69, "mat-form-field", 29)(70, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, AppComponent_div_11_mat_error_73_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 40)(75, "div", 2)(76, "mat-form-field", 29)(77, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "YYYY-MM-DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "mat-datepicker-toggle", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "mat-datepicker", null, 48)(85, "mat-datepicker-actions")(86, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r57.startSelectToday());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_90_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r58.startClearDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](94, AppComponent_div_11_mat_error_94_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 2)(96, "mat-form-field", 29)(97, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "YYYY-MM-DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "mat-datepicker-toggle", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "mat-datepicker", null, 53)(105, "mat-datepicker-actions")(106, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_108_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r59.endSelectToday());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_110_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r60.endClearDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](114, AppComponent_div_11_mat_error_114_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "mat-form-field", 29)(116, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Course Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](119, AppComponent_div_11_mat_error_119_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 55)(121, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_121_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r61.cancelFormClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](38);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](50);
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](64);
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](84);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](104);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.areWeCreating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.areWeEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.fgCourseForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r19)("listValidator", ctx_r1.courseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.filteredCourseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("course_name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("course_name").hasError("invalidValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r23)("listValidator", ctx_r1.universityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.filteredUniversityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("university").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("university").hasError("invalidValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r27)("listValidator", ctx_r1.countryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.filteredCountryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("country").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("country").hasError("invalidValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r31)("listValidator", ctx_r1.cityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.filteredCityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("city").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("city").hasError("invalidValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r35)("listValidator", ctx_r1.currencyList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.filteredCurrencyList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("price_currency").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("price_currency").hasError("invalidValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("price_amount").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("start_date").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("end_date").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.fgCourseForm.get("course_description").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](37, _c3, !ctx_r1.fgCourseForm.valid));
  }
}
function AppComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Course Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 60)(1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_td_16_Template_mat_icon_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64);
      const row_r62 = restoredCtx.$implicit;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r63.editCourseClicked(row_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " edit_square ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_td_16_Template_mat_icon_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64);
      const row_r62 = restoredCtx.$implicit;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r65.deleteCourse(row_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r62["course_name"], " ");
  }
}
function AppComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r66["location"], " ");
  }
}
function AppComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", row_r67["start_date"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, row_r67["start_date"], "yyyy-MM-dd"), " ");
  }
}
function AppComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Length");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r68["length"], " ");
  }
}
function AppComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](2, 1, row_r69["price"], row_r69["currency"], "symbol-narrow", "1.2-2"), " ");
  }
}
function AppComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 65);
  }
}
function AppComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 66);
  }
  if (rf & 2) {
    const row_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", row_r70["course_description"]);
  }
}
const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY'
  }
};
class AppComponent {
  constructor(service, fb, snackBar) {
    this.service = service;
    this.fb = fb;
    this.snackBar = snackBar;
    this.displayedColumns = ['course_name', 'location', 'start_date', 'length', 'price'];
    this.coursesReturned = [];
    this.totalCoursesReturned = 0;
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.showCourseForm = false;
    this.areWeEditing = false;
    this.areWeCreating = false;
    this.idBeingEdited = null;
    this.searchInput = '';
    this.currencyList = [];
    this.universityList = [];
    this.cityList = [];
    this.countryList = [];
    this.courseList = [];
    this.filteredCurrencyList = [];
    this.filteredUniversityList = [];
    this.filteredCityList = [];
    this.filteredCountryList = [];
    this.filteredCourseList = [];
    this.getLists = () => {
      this.service.serviceGetLists().subscribe({
        next: data => {
          console.log('get lists data', data);
          this.cityList = data.cities;
          this.countryList = data.countries;
          this.universityList = data.universities;
          this.courseList = data.courses;
          this.currencyList = data.currencies;
        },
        error: error => {
          console.log('get lists error', error);
          this.openSnackBar(error.error?.message);
        }
      });
    };
    this.filterCoursesList = () => {
      const searchString = this.fgCourseForm.get('course_name')?.value;
      if (!searchString) {
        this.filteredCourseList = [];
      } else {
        // only filter if search string is 2 or more characters
        if (searchString.length >= 1) {
          // return top 5 after filtering
          this.filteredCourseList = this.courseList.filter(course => course.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
        } else {
          this.filteredCourseList = [];
        }
      }
    };
    this.filterCurrencyList = () => {
      const searchString = this.fgCourseForm.get('price_currency')?.value;
      if (!searchString) {
        this.filteredCurrencyList = [];
      } else {
        // only filter if search string is 2 or more characters
        if (searchString.length >= 1) {
          // return top 5 after filtering
          this.filteredCurrencyList = this.currencyList.filter(currency => currency.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
        } else {
          this.filteredCurrencyList = [];
        }
      }
    };
    this.filterCountryList = () => {
      const searchString = this.fgCourseForm.get('country')?.value;
      if (!searchString) {
        this.filteredCountryList = [];
      } else {
        // only filter if search string is 2 or more characters
        if (searchString.length >= 1) {
          // return top 5 after filtering
          this.filteredCountryList = this.countryList.filter(country => country.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
        } else {
          this.filteredCountryList = [];
        }
      }
    };
    this.filterCityList = () => {
      const searchString = this.fgCourseForm.get('city')?.value;
      if (!searchString) {
        this.filteredCityList = [];
      } else {
        // only filter if search string is 2 or more characters
        if (searchString.length >= 1) {
          // return top 5 after filtering
          this.filteredCityList = this.cityList.filter(city => city.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
        } else {
          this.filteredCityList = [];
        }
      }
    };
    this.filterUniversityList = () => {
      const searchString = this.fgCourseForm.get('university')?.value;
      if (!searchString) {
        this.filteredUniversityList = [];
      } else {
        // only filter if search string is 2 or more characters
        if (searchString.length >= 1) {
          // return top 5 after filtering
          this.filteredUniversityList = this.universityList.filter(uni => uni.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
        } else {
          this.filteredUniversityList = [];
        }
      }
    };
    this.resetFilteredLists = () => {
      this.filteredCityList = [];
      this.filteredCountryList = [];
      this.filteredUniversityList = [];
      this.filteredCourseList = [];
      this.filteredCurrencyList = [];
    };
    this.startSelectToday = () => {
      const today = new Date();
      this.fgCourseForm.get('start_date')?.setValue(today);
      this.startPicker.close();
    };
    this.startClearDate = () => {
      this.fgCourseForm.get('start_date')?.setValue(null);
      this.startPicker.close();
    };
    this.endSelectToday = () => {
      const today = new Date();
      this.fgCourseForm.get('end_date')?.setValue(today);
      this.endPicker.close();
    };
    this.endClearDate = () => {
      this.fgCourseForm.get('end_date')?.setValue(null);
      this.endPicker.close();
    };
    this.populateTable = () => {
      const tempData = [];
      for (let course of this.coursesReturned) {
        const temp = {};
        temp.course_name = course.CourseName;
        temp.location = course.Country + ', ' + course.City + ', ' + course.University;
        temp.start_date = course.StartDate;
        temp.price = course.Price;
        temp.length = this.calculateDaysInclusive(course.StartDate, course.EndDate);
        temp.currency = course.Currency;
        temp.course_description = course.CourseDescription;
        temp.id = course._id;
        temp.city = course.City;
        temp.country = course.Country;
        temp.end_date = course.EndDate;
        temp.university = course.University;
        tempData.push(temp);
      }
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(tempData);
    };
    this.onPageChange = () => {
      this.getCourses();
    };
    this.onSearchEnter = () => {
      // check if form is open - close create/edit and prepare for data
      if (this.areWeEditing || this.areWeCreating) {
        this.showCourseForm = false;
        this.resetCourseForm();
      }
      // reset paginator to first page
      this.currentPage = 1;
      // perform search by getting courses
      this.getCourses();
    };
    this.clearSearch = () => {
      this.searchInput = '';
      this.getCourses();
    };
    this.editCourseClicked = course => {
      console.log('edit clicked', this.fgCourseForm);
      this.areWeEditing = true;
      this.areWeCreating = false;
      this.fgCourseForm.get('university')?.setValue(course.university);
      this.fgCourseForm.get('university')?.disable();
      this.fgCourseForm.get('city')?.setValue(course.city);
      this.fgCourseForm.get('city')?.disable();
      this.fgCourseForm.get('course_name')?.setValue(course.course_name);
      this.fgCourseForm.get('course_name')?.disable();
      this.fgCourseForm.get('course_description')?.setValue(course.course_description);
      this.fgCourseForm.get('start_date')?.setValue(moment__WEBPACK_IMPORTED_MODULE_0___default()(course.start_date));
      this.fgCourseForm.get('end_date')?.setValue(moment__WEBPACK_IMPORTED_MODULE_0___default()(course.end_date));
      this.fgCourseForm.get('price_amount')?.setValue(course.price);
      this.fgCourseForm.get('price_currency')?.markAsTouched();
      this.fgCourseForm.get('price_currency')?.setValue(course.currency);
      this.filterCurrencyList();
      this.fgCourseForm.get('price_currency')?.updateValueAndValidity();
      this.fgCourseForm.get('country')?.setValue(course.country);
      this.fgCourseForm.get('country')?.disable();
      this.idBeingEdited = course.id;
      this.showCourseForm = true;
    };
    this.resetCourseForm = () => {
      if (this.areWeEditing) {
        this.fgCourseForm.get('university')?.enable();
        this.fgCourseForm.get('city')?.enable();
        this.fgCourseForm.get('course_name')?.enable();
        this.fgCourseForm.get('country')?.enable();
        this.idBeingEdited = null;
      }
      this.fgCourseForm.reset();
      this.courseFormDirective.reset();
      this.resetFilteredLists();
      this.areWeEditing = false;
      this.areWeCreating = false;
    };
    this.deleteCourse = course => {
      console.log('delete', course);
      this.showLoader = true;
      this.service.serviceDeleteCourse(course.id).subscribe({
        next: data => {
          console.log('delete course data', data);
          this.openSnackBar('Course successfully deleted');
          this.getCourses();
        },
        error: error => {
          console.log('delete course error', error);
          this.showLoader = false;
          this.openSnackBar(error.error?.message);
        }
      });
    };
    this.addNewCourseButtonClicked = () => {
      this.showCourseForm = true;
      this.areWeCreating = true;
      this.areWeEditing = false;
    };
    this.cancelFormClicked = () => {
      this.showCourseForm = false;
      this.resetCourseForm();
    };
    this.onFormSubmit = () => {
      console.log(this.fgCourseForm.value);
      console.log(this.fgCourseForm.valid);
      if (this.fgCourseForm.valid) {
        if (this.areWeCreating) {
          this.showLoader = true;
          const data2send = {
            University: this.fgCourseForm.get('university')?.value,
            City: this.fgCourseForm.get('city')?.value,
            CourseName: this.fgCourseForm.get('course_name')?.value,
            CourseDescription: this.fgCourseForm.get('course_description')?.value,
            StartDate: this.fgCourseForm.get('start_date')?.value,
            EndDate: this.fgCourseForm.get('end_date')?.value,
            Price: this.fgCourseForm.get('price_amount')?.value,
            Currency: this.fgCourseForm.get('price_currency')?.value,
            Country: this.fgCourseForm.get('country')?.value
          };
          this.service.serviceCreateCourse(data2send).subscribe({
            next: data => {
              console.log('create course data', data);
              this.openSnackBar('Course ID ' + data?.id + ' created successfully');
              this.showCourseForm = false;
              this.resetCourseForm();
              this.getCourses();
            },
            error: error => {
              console.log('create course error', error);
              this.showLoader = false;
              this.openSnackBar(error.error?.message);
            }
          });
        }
        if (this.areWeEditing && this.idBeingEdited) {
          this.showLoader = true;
          const data2send = {
            CourseDescription: this.fgCourseForm.get('course_description')?.value,
            StartDate: this.fgCourseForm.get('start_date')?.value,
            EndDate: this.fgCourseForm.get('end_date')?.value,
            Price: this.fgCourseForm.get('price_amount')?.value,
            Currency: this.fgCourseForm.get('price_currency')?.value
          };
          this.service.serviceUpdateCourse(this.idBeingEdited, data2send).subscribe({
            next: data => {
              console.log('update course data', data);
              this.openSnackBar('Course successfully updated');
              this.showCourseForm = false;
              this.resetCourseForm();
              this.getCourses();
            },
            error: error => {
              console.log('update course error', error);
              this.showLoader = false;
              this.openSnackBar(error.error?.message);
            }
          });
        }
      }
    };
    this.getCourses = () => {
      this.showLoader = true;
      this.service.serviceGetCourses({
        page: this.currentPage,
        limit: this.itemsPerPage,
        search: this.searchInput
      }).subscribe({
        next: data => {
          console.log('get courses data', data);
          this.coursesReturned = data['courses'];
          this.totalCoursesReturned = data['total'];
          this.populateTable();
          this.showLoader = false;
        },
        error: error => {
          console.log('get courses error', error);
          this.showLoader = false;
          this.openSnackBar(error.error?.message);
        }
      });
    };
    this.calculateDaysInclusive = (startDateStr, endDateStr) => {
      // Parse the dates using Moment
      const startDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(startDateStr);
      const endDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(endDateStr);
      // Calculate the difference in days
      const differenceInDays = endDate.diff(startDate, 'days');
      // Add one to make the count inclusive
      return differenceInDays + 1;
    };
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([]);
    this.fgCourseForm = fb.group({
      course_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      university: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      country: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      price_currency: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      price_amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      start_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      end_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      course_description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
    this.showLoader = true;
  }
  openSnackBar(message, action = 'Dismiss') {
    this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom' // 'top' | 'bottom'
    });
  }

  ngOnInit() {
    this.getLists();
  }
  ngAfterViewInit() {
    this.getCourses();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.courseFormDirective = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.startPicker = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.endPicker = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.DateAdapter,
      useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__.MomentDateAdapter,
      deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_LOCALE]
    }, {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    }])],
    decls: 35,
    vars: 13,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-between"], [1, "col-6"], ["appearance", "outline", 1, "my-3", "w-100"], ["matInput", "", "placeholder", "Type to search...", 3, "ngModel", "ngModelChange", "keyup.enter"], ["class", "my-btn", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "col-3", "d-flex", "flex-row", "justify-content-end", "align-items-center"], ["mat-flat-button", "", 1, "my-btn", 3, "click"], [4, "ngIf"], [3, "hidden"], ["mat-table", "", 1, "mb-3", 3, "dataSource"], ["matColumnDef", "course_name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "custom-course-name d-flex flex-row justify-content-start align-items-center", 4, "matCellDef"], ["matColumnDef", "location"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "start_date"], ["mat-cell", "", 3, "title", 4, "matCellDef"], ["matColumnDef", "length"], ["matColumnDef", "price"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "c-p", "matTooltipPosition", "above", 3, "matTooltip", 4, "matRowDef", "matRowDefColumns"], [1, "d-flex", "justify-content-center", 3, "collectionSize", "page", "pageSize", "rotate", "maxSize", "pageChange"], [1, "loader-container", 3, "hidden"], [1, "loader", "container"], ["mode", "indeterminate"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 1, "my-btn", 3, "click"], [3, "formGroup", "ngSubmit"], ["courseForm", "ngForm"], ["appearance", "outline", 1, "w-100", "mb-3"], ["matInput", "", "type", "text", "formControlName", "course_name", 3, "matAutocomplete", "listValidator", "input"], ["matSuffix", "", "aria-label", "drop-down"], ["course_auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "university", 3, "matAutocomplete", "listValidator", "input"], ["university_auto", "matAutocomplete"], ["matInput", "", "type", "text", "formControlName", "country", 3, "matAutocomplete", "listValidator", "input"], ["country_auto", "matAutocomplete"], ["matInput", "", "type", "text", "formControlName", "city", 3, "matAutocomplete", "listValidator", "input"], ["city_auto", "matAutocomplete"], [1, "row"], [1, "col-2"], ["matInput", "", "type", "text", "formControlName", "price_currency", 3, "matAutocomplete", "listValidator", "input"], ["currency_auto", "matAutocomplete"], [1, "col-4"], ["matInput", "", "type", "text", "formControlName", "price_amount"], ["matInput", "", "formControlName", "start_date", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["start_picker", ""], ["mat-button", "", "matDateRangePickerCancel", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "matDateRangePickerApply", ""], ["matInput", "", "formControlName", "end_date", 3, "matDatepicker"], ["end_picker", ""], ["matInput", "", "type", "text", "formControlName", "course_description"], [1, "d-flex", "flex-row", "justify-content-between"], ["mat-flat-button", "", "type", "button", 1, "my-btn-red", 3, "click"], ["mat-flat-button", "", "type", "submit", 1, "my-btn", 3, "ngClass"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", "", 1, "custom-course-name", "d-flex", "flex-row", "justify-content-start", "align-items-center"], ["matTooltip", "Edit Course", 1, "icon-button", 3, "click"], ["matTooltip", "Delete Course", 1, "icon-button", 3, "click"], ["mat-cell", ""], ["mat-cell", "", 3, "title"], ["mat-header-row", ""], ["mat-row", "", "matTooltipPosition", "above", 1, "c-p", 3, "matTooltip"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.searchInput = $event;
        })("keyup.enter", function AppComponent_Template_input_keyup_enter_6_listener() {
          return ctx.onSearchEnter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AppComponent_button_7_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() {
          return ctx.addNewCourseButtonClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Add New Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AppComponent_div_11_Template, 125, 39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AppComponent_th_15_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AppComponent_td_16_Template, 6, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AppComponent_th_18_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AppComponent_td_19_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AppComponent_th_21_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AppComponent_td_22_Template, 3, 5, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](23, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, AppComponent_th_24_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AppComponent_td_25_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](26, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AppComponent_th_27_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AppComponent_td_28_Template, 3, 6, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AppComponent_tr_29_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AppComponent_tr_30_Template, 1, 1, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ngb-pagination", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function AppComponent_Template_ngb_pagination_pageChange_31_listener($event) {
          return ctx.currentPage = $event;
        })("pageChange", function AppComponent_Template_ngb_pagination_pageChange_31_listener() {
          return ctx.onPageChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 23)(33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "mat-progress-bar", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showCourseForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.showCourseForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collectionSize", ctx.totalCoursesReturned)("page", ctx.currentPage)("pageSize", ctx.itemsPerPage)("rotate", true)("maxSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.showLoader);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerActions, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerCancel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerApply, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteTrigger, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBar, _services_list_validator_directive__WEBPACK_IMPORTED_MODULE_2__.ListValidatorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _services_list_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/list-validator.directive */ 1283);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _services_list_validator_directive__WEBPACK_IMPORTED_MODULE_2__.ListValidatorDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule]
  });
})();

/***/ }),

/***/ 2266:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class AppService {
  constructor(http) {
    this.http = http;
    this.baseApiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL;
    this.getCoursesURL = this.baseApiURL + 'get/courses';
    this.deleteCourseURL = this.baseApiURL + 'delete/course/';
    this.createCourseURL = this.baseApiURL + 'create/course';
    this.updateCourseURL = this.baseApiURL + 'update/course/';
    this.getListsURL = this.baseApiURL + 'get/lists';
    this.serviceGetCourses = params => {
      return this.http.get(this.getCoursesURL, {
        params
      });
    };
    this.serviceDeleteCourse = courseID => {
      return this.http.delete(this.deleteCourseURL + courseID);
    };
    this.serviceCreateCourse = data => {
      return this.http.post(this.createCourseURL, data);
    };
    this.serviceUpdateCourse = (courseID, data) => {
      return this.http.put(this.updateCourseURL + courseID, data);
    };
    this.serviceGetLists = () => {
      return this.http.get(this.getListsURL);
    };
  }
  static #_ = this.ɵfac = function AppService_Factory(t) {
    return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AppService,
    factory: AppService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1283:
/*!******************************************************!*\
  !*** ./src/app/services/list-validator.directive.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListValidatorDirective: () => (/* binding */ ListValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class ListValidatorDirective {
  constructor() {
    this.validate = control => {
      let result = {
        invalidValue: control.value
      };
      if ((control.dirty || control.touched) && control.valid) {
        for (const each of this.targetList) {
          if (each.toLowerCase() === control.value.toLowerCase()) {
            result = null;
            break;
          }
        }
      }
      return result;
    };
  }
  static #_ = this.ɵfac = function ListValidatorDirective_Factory(t) {
    return new (t || ListValidatorDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ListValidatorDirective,
    selectors: [["", "listValidator", ""]],
    inputs: {
      targetList: ["listValidator", "targetList"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: ListValidatorDirective,
      multi: true
    }])]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  API_URL: 'https://adcore-exam-hyahafdsgpg0h4c8.eastus-01.azurewebsites.net/'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 5528,
	"./af.js": 5528,
	"./ar": 1036,
	"./ar-dz": 7579,
	"./ar-dz.js": 7579,
	"./ar-kw": 9588,
	"./ar-kw.js": 9588,
	"./ar-ly": 1650,
	"./ar-ly.js": 1650,
	"./ar-ma": 3258,
	"./ar-ma.js": 3258,
	"./ar-ps": 5467,
	"./ar-ps.js": 5467,
	"./ar-sa": 4085,
	"./ar-sa.js": 4085,
	"./ar-tn": 287,
	"./ar-tn.js": 287,
	"./ar.js": 1036,
	"./az": 9757,
	"./az.js": 9757,
	"./be": 9620,
	"./be.js": 9620,
	"./bg": 1139,
	"./bg.js": 1139,
	"./bm": 4042,
	"./bm.js": 4042,
	"./bn": 9641,
	"./bn-bd": 9126,
	"./bn-bd.js": 9126,
	"./bn.js": 9641,
	"./bo": 494,
	"./bo.js": 494,
	"./br": 934,
	"./br.js": 934,
	"./bs": 6274,
	"./bs.js": 6274,
	"./ca": 5831,
	"./ca.js": 5831,
	"./cs": 2354,
	"./cs.js": 2354,
	"./cv": 9692,
	"./cv.js": 9692,
	"./cy": 8774,
	"./cy.js": 8774,
	"./da": 8955,
	"./da.js": 8955,
	"./de": 1557,
	"./de-at": 4954,
	"./de-at.js": 4954,
	"./de-ch": 1881,
	"./de-ch.js": 1881,
	"./de.js": 1557,
	"./dv": 6475,
	"./dv.js": 6475,
	"./el": 8877,
	"./el.js": 8877,
	"./en-au": 454,
	"./en-au.js": 454,
	"./en-ca": 7356,
	"./en-ca.js": 7356,
	"./en-gb": 456,
	"./en-gb.js": 456,
	"./en-ie": 8789,
	"./en-ie.js": 8789,
	"./en-il": 5471,
	"./en-il.js": 5471,
	"./en-in": 9664,
	"./en-in.js": 9664,
	"./en-nz": 7672,
	"./en-nz.js": 7672,
	"./en-sg": 805,
	"./en-sg.js": 805,
	"./eo": 7390,
	"./eo.js": 7390,
	"./es": 1564,
	"./es-do": 1473,
	"./es-do.js": 1473,
	"./es-mx": 2089,
	"./es-mx.js": 2089,
	"./es-us": 4156,
	"./es-us.js": 4156,
	"./es.js": 1564,
	"./et": 6513,
	"./et.js": 6513,
	"./eu": 7856,
	"./eu.js": 7856,
	"./fa": 2378,
	"./fa.js": 2378,
	"./fi": 2687,
	"./fi.js": 2687,
	"./fil": 32,
	"./fil.js": 32,
	"./fo": 6845,
	"./fo.js": 6845,
	"./fr": 8875,
	"./fr-ca": 6425,
	"./fr-ca.js": 6425,
	"./fr-ch": 1746,
	"./fr-ch.js": 1746,
	"./fr.js": 8875,
	"./fy": 7037,
	"./fy.js": 7037,
	"./ga": 1217,
	"./ga.js": 1217,
	"./gd": 7010,
	"./gd.js": 7010,
	"./gl": 1931,
	"./gl.js": 1931,
	"./gom-deva": 4488,
	"./gom-deva.js": 4488,
	"./gom-latn": 8032,
	"./gom-latn.js": 8032,
	"./gu": 4984,
	"./gu.js": 4984,
	"./he": 9090,
	"./he.js": 9090,
	"./hi": 2085,
	"./hi.js": 2085,
	"./hr": 8787,
	"./hr.js": 8787,
	"./hu": 2901,
	"./hu.js": 2901,
	"./hy-am": 9819,
	"./hy-am.js": 9819,
	"./id": 4074,
	"./id.js": 4074,
	"./is": 715,
	"./is.js": 715,
	"./it": 3838,
	"./it-ch": 7040,
	"./it-ch.js": 7040,
	"./it.js": 3838,
	"./ja": 3180,
	"./ja.js": 3180,
	"./jv": 4346,
	"./jv.js": 4346,
	"./ka": 5538,
	"./ka.js": 5538,
	"./kk": 9772,
	"./kk.js": 9772,
	"./km": 7905,
	"./km.js": 7905,
	"./kn": 9125,
	"./kn.js": 9125,
	"./ko": 9140,
	"./ko.js": 9140,
	"./ku": 6780,
	"./ku-kmr": 4662,
	"./ku-kmr.js": 4662,
	"./ku.js": 6780,
	"./ky": 3768,
	"./ky.js": 3768,
	"./lb": 4016,
	"./lb.js": 4016,
	"./lo": 3169,
	"./lo.js": 3169,
	"./lt": 2353,
	"./lt.js": 2353,
	"./lv": 3243,
	"./lv.js": 3243,
	"./me": 2338,
	"./me.js": 2338,
	"./mi": 5555,
	"./mi.js": 5555,
	"./mk": 5794,
	"./mk.js": 5794,
	"./ml": 3151,
	"./ml.js": 3151,
	"./mn": 6458,
	"./mn.js": 6458,
	"./mr": 9165,
	"./mr.js": 9165,
	"./ms": 8680,
	"./ms-my": 7477,
	"./ms-my.js": 7477,
	"./ms.js": 8680,
	"./mt": 9684,
	"./mt.js": 9684,
	"./my": 285,
	"./my.js": 285,
	"./nb": 5922,
	"./nb.js": 5922,
	"./ne": 9040,
	"./ne.js": 9040,
	"./nl": 5066,
	"./nl-be": 4460,
	"./nl-be.js": 4460,
	"./nl.js": 5066,
	"./nn": 3693,
	"./nn.js": 3693,
	"./oc-lnc": 8676,
	"./oc-lnc.js": 8676,
	"./pa-in": 2341,
	"./pa-in.js": 2341,
	"./pl": 7416,
	"./pl.js": 7416,
	"./pt": 4344,
	"./pt-br": 113,
	"./pt-br.js": 113,
	"./pt.js": 4344,
	"./ro": 2643,
	"./ro.js": 2643,
	"./ru": 1305,
	"./ru.js": 1305,
	"./sd": 6095,
	"./sd.js": 6095,
	"./se": 4486,
	"./se.js": 4486,
	"./si": 8742,
	"./si.js": 8742,
	"./sk": 6722,
	"./sk.js": 6722,
	"./sl": 3345,
	"./sl.js": 3345,
	"./sq": 2416,
	"./sq.js": 2416,
	"./sr": 9450,
	"./sr-cyrl": 501,
	"./sr-cyrl.js": 501,
	"./sr.js": 9450,
	"./ss": 2222,
	"./ss.js": 2222,
	"./sv": 9454,
	"./sv.js": 9454,
	"./sw": 9638,
	"./sw.js": 9638,
	"./ta": 6494,
	"./ta.js": 6494,
	"./te": 4435,
	"./te.js": 4435,
	"./tet": 5003,
	"./tet.js": 5003,
	"./tg": 3706,
	"./tg.js": 3706,
	"./th": 6025,
	"./th.js": 6025,
	"./tk": 9780,
	"./tk.js": 9780,
	"./tl-ph": 2068,
	"./tl-ph.js": 2068,
	"./tlh": 9167,
	"./tlh.js": 9167,
	"./tr": 2494,
	"./tr.js": 2494,
	"./tzl": 8707,
	"./tzl.js": 8707,
	"./tzm": 1296,
	"./tzm-latn": 4532,
	"./tzm-latn.js": 4532,
	"./tzm.js": 1296,
	"./ug-cn": 2086,
	"./ug-cn.js": 2086,
	"./uk": 5069,
	"./uk.js": 5069,
	"./ur": 9304,
	"./ur.js": 9304,
	"./uz": 5115,
	"./uz-latn": 7609,
	"./uz-latn.js": 7609,
	"./uz.js": 5115,
	"./vi": 4802,
	"./vi.js": 4802,
	"./x-pseudo": 5605,
	"./x-pseudo.js": 5605,
	"./yo": 8456,
	"./yo.js": 8456,
	"./zh-cn": 3272,
	"./zh-cn.js": 3272,
	"./zh-hk": 9402,
	"./zh-hk.js": 9402,
	"./zh-mo": 8101,
	"./zh-mo.js": 8101,
	"./zh-tw": 262,
	"./zh-tw.js": 262
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
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map