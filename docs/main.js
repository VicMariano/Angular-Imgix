(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\VMariano\Documents\GitHub\Angular-Imgix\src\main.ts */"zUnb");


/***/ }),

/***/ "1oKk":
/*!*************************************************************************!*\
  !*** ./src/app/components/current-edition/current-edition.component.ts ***!
  \*************************************************************************/
/*! exports provided: CurrentEditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentEditionComponent", function() { return CurrentEditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function CurrentEditionComponent_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentEditionComponent_mat_chip_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const param_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.remove(param_r2.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, param_r2.key), " ");
} }
class CurrentEditionComponent {
    constructor() {
        this.parameters = {};
        this.emitNewParams = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    remove(paramKey) {
        const param = JSON.parse(JSON.stringify(this.parameters));
        delete param[paramKey];
        this.emitNewParams.emit(param);
    }
}
CurrentEditionComponent.ɵfac = function CurrentEditionComponent_Factory(t) { return new (t || CurrentEditionComponent)(); };
CurrentEditionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentEditionComponent, selectors: [["app-current-edition"]], inputs: { parameters: "parameters" }, outputs: { emitNewParams: "emitNewParams" }, decls: 7, vars: 3, consts: [["appearance", "fill", 1, "chip-list"], ["aria-label", "Fruit selection"], ["chipList", ""], [3, "selectable", "removable", 4, "ngFor", "ngForOf"], [3, "selectable", "removable"], ["mat-icon-button", "", 1, "remove-button", 3, "click"]], template: function CurrentEditionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editions applied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-list", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CurrentEditionComponent_mat_chip_5_Template, 6, 5, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.parameters));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: [".chip-list[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 1.2em;\r\n}\r\n.remove-button[_ngcontent-%COMP%]{\r\n  width: 1em;\r\n  padding: 0;\r\n  margin: 0 0.4em 0 0.3em;\r\n}\r\nmat-chip[_ngcontent-%COMP%]{\r\n  font-size: small;\r\n  \r\n}\r\n.mat-standard-chip[_ngcontent-%COMP%] {\r\n  min-height: 1.7rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtZWRpdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJjdXJyZW50LWVkaXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuLnJlbW92ZS1idXR0b257XHJcbiAgd2lkdGg6IDFlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCAwLjRlbSAwIDAuM2VtO1xyXG59XHJcbm1hdC1jaGlwe1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgLyogaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLm1hdC1zdGFuZGFyZC1jaGlwIHtcclxuICBtaW4taGVpZ2h0OiAxLjdyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_iipu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/iipu.service */ "fus3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _imgix_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @imgix/angular */ "o5gt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _components_current_edition_current_edition_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/current-edition/current-edition.component */ "1oKk");
/* harmony import */ var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/inputs/inputs.component */ "ny1Q");















function AppComponent_mat_list_option_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_list_option_20_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const edition_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setEditionType(edition_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edition_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", edition_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, edition_r7.display_name), " ");
} }
function AppComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", img_r10.name, " ");
} }
function AppComponent_app_current_edition_35_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-current-edition", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitNewParams", function AppComponent_app_current_edition_35_Template_app_current_edition_emitNewParams_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.paramsModified($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parameters", ctx_r5.editionHistory[ctx_r5.actualStep]);
} }
function AppComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-inputs", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paramEmitter", function AppComponent_div_39_Template_app_inputs_paramEmitter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.setParam($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parameter", ctx_r6.editionSelected);
} }
class AppComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.testImgs = [];
        this.showHome = true;
        this.allParameters = {};
        this.availableEditions = [];
        this.showEditApplied = false;
        this.undoAvailable = false;
        this.redoAvailable = false;
        this.editionHistory = [];
        this.actualStep = -1;
        this.editionsListNames = ['rotation', 'adjustment'];
    }
    ngOnInit() {
        this.init();
    }
    paramsModified(param) {
        this.setEditionHistory(param);
        this.showEditApplied = Object.keys(this.getActParam()).length > 0;
        this.setUndoRedoValues();
        this.imagesForm.controls.parameters.setValue(this.getParamString(this.getActParam()));
    }
    prevEdition() {
        this.actualStep--;
        this.showEditApplied = Object.keys(this.getActParam()).length > 0;
        this.imagesForm.controls.parameters.setValue(this.getParamString(this.getActParam()));
        this.setUndoRedoValues();
    }
    nextEdition() {
        this.actualStep++;
        this.showEditApplied = Object.keys(this.getActParam()).length > 0;
        this.imagesForm.controls.parameters.setValue(this.getParamString(this.getActParam()));
        this.setUndoRedoValues();
    }
    goToProfile() {
        window.open('https://www.linkedin.com/in/victoria-mariano/', "_blank");
    }
    setParam(paramObj) {
        if (this.actualStep === -1) {
            this.paramsModified(paramObj);
        }
        else {
            const key = Object.keys(paramObj)[0];
            const value = paramObj[key];
            const param = JSON.parse(JSON.stringify(this.getActParam()));
            param[key] = value;
            this.paramsModified(param);
        }
    }
    showHomepage(showH) {
        this.showHome = showH;
    }
    setEditionType(editionType) {
        this.editionSelected = editionType;
    }
    setValueToImageForm(img) {
        this.imagesForm.controls.url.setValue(img.url);
        this.imagesForm.controls.name.setValue(img.name);
        this.imagesForm.controls.path.setValue(img.path);
    }
    getActParam() {
        if (this.actualStep === -1) {
            return {};
        }
        else {
            return this.editionHistory[this.actualStep];
        }
    }
    setUndoRedoValues() {
        this.undoAvailable = this.actualStep >= 0;
        this.redoAvailable = this.actualStep < this.editionHistory.length - 1;
    }
    setEditionHistory(paramObj) {
        this.actualStep++;
        if (this.actualStep <= this.editionHistory.length - 1) {
            this.editionHistory.splice(this.actualStep);
        }
        this.editionHistory.push(paramObj);
        this.actualStep = this.editionHistory.length - 1;
        this.setUndoRedoValues();
    }
    getParamString(paramObj) {
        let strParam = '?';
        Object.keys(paramObj).forEach(paramKey => {
            const value = paramObj[paramKey];
            strParam = strParam + paramKey + '=' + value + '&';
        });
        return strParam;
    }
    formCreation() {
        this.imagesForm = this.fb.group({
            url: [''],
            name: [''],
            path: [''],
            parameters: [''],
            index: []
        });
    }
    extractAllPaths() {
        this.testImgs.map(img => img.path = this.extractPathFromUrl(img.url));
    }
    extractPathFromUrl(url) {
        return url.slice(25, url.length);
    }
    selectEditionTypes(allParams) {
        Object.entries(allParams).forEach(([key, value]) => {
            this.editionsListNames.includes(value.category) ? this.addParamToArray(key, value) : null;
        });
    }
    addParamToArray(tagKey, value) {
        let param = value;
        param.tag = tagKey;
        this.availableEditions.push(param);
    }
    getTestImgs() {
        let thisSubsTestImgs = this.service.getTestImgs().subscribe((res) => {
            if (res) {
                this.testImgs = res;
                this.extractAllPaths();
                this.setValueToImageForm(this.testImgs[0]);
                thisSubsTestImgs.unsubscribe();
            }
        });
    }
    getParameters() {
        let thisSubsParameters = this.service.getParametersJSON().subscribe((res) => {
            if (res) {
                this.parametersJSON = res;
                this.allParameters = this.parametersJSON.parameters;
                this.selectEditionTypes(this.allParameters);
                thisSubsParameters.unsubscribe();
            }
        });
    }
    init() {
        this.formCreation();
        this.getTestImgs();
        this.getParameters();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_iipu_service__WEBPACK_IMPORTED_MODULE_1__["IipuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 40, vars: 11, consts: [["color", "primary"], ["mat-button", ""], ["mat-stroked-button", "", 3, "click"], [1, "spacer"], ["mat-icon-button", "", "aria-label", "Undo button", 1, "example-icon", 3, "disabled", "click"], ["mat-icon-button", "", "aria-label", "Redo button", 1, "example-icon", 3, "disabled", "click"], ["mat-icon-button", "", "aria-label", "Profile button", 1, "example-icon", 3, "click"], [1, "sidenav-container"], ["mode", "side", "color", "primary", 1, "sidenav"], ["sidenav", ""], [3, "multiple"], ["edition", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "sidenav-content"], [1, "form-box", 3, "formGroup"], [1, "img-picker"], [1, "img-picker-label"], ["appearance", "fill", 1, "img-select"], ["formControlName", "index", 1, "select-img", 3, "selectionChange"], ["color", "secondary", 3, "value", 4, "ngFor", "ngForOf"], [1, "img-display-box"], [1, "img-and-editions"], ["ixImg", "", "sizes", "calc(100vw - 128px)", 1, "mainImg", 3, "path", "imgixParams"], ["img", ""], ["class", "current-edition", 3, "parameters", "emitNewParams", 4, "ngIf"], [1, "url-textbox"], ["class", "inputs-box", 4, "ngIf"], [3, "value", "click"], ["color", "secondary", 3, "value"], [1, "current-edition", 3, "parameters", "emitNewParams"], [1, "inputs-box"], [3, "parameter", "paramEmitter"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IipuAngular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Start editing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.prevEdition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() { return ctx.nextEdition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "redo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.goToProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-selection-list", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_mat_list_option_20_Template, 3, 4, "mat-list-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-content", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pick an image to edit!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Choose an image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppComponent_Template_mat_select_selectionChange_29_listener($event) { return ctx.setValueToImageForm(ctx.testImgs[$event.value]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_mat_option_30_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppComponent_app_current_edition_35_Template, 1, 1, "app-current-edition", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AppComponent_div_39_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.undoAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.redoAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableEditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.imagesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testImgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("path", ctx.imagesForm.value.path);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgixParams", ctx.editionHistory[ctx.actualStep]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditApplied);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.imagesForm.controls.url.value + ctx.imagesForm.controls.parameters.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editionSelected);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _imgix_angular__WEBPACK_IMPORTED_MODULE_11__["IxImgComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _components_current_edition_current_edition_component__WEBPACK_IMPORTED_MODULE_13__["CurrentEditionComponent"], _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_14__["InputsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]], styles: [".spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.sidenav-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  width: 14em;\r\n}\r\n\r\n.sidenav-content[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  justify-content: center;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.img-display-box[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 30em;\r\n  height: 19em;\r\n  padding-bottom: 2em;\r\n  margin: 0 auto;\r\n  margin-bottom: 6em;\r\n}\r\n\r\n.mainImg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.img-select[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.img-picker[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: relative;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.img-picker-label[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n}\r\n\r\n.url-textbox[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  align-content: center;\r\n  align-items: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n  padding: 8px 8px 8px 16px;\r\n  color: rgb(92, 92, 92);\r\n  border: 1px solid rgb(138, 138, 138);\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.inputs-box[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  height: 5em;\r\n  margin: 4em 1em 2em 1em;\r\n  padding: 3em 0 2em 0;\r\n}\r\n\r\n@media only screen and (min-width: 854px) {\r\n  .sidenav-container[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n  }\r\n  .img-display-box[_ngcontent-%COMP%] {\r\n    margin-bottom: 1em;\r\n    width: 80%;\r\n  }\r\n  .img-and-editions[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    justify-content: space-around;\r\n    align-items: flex-end;\r\n    width: 100%;\r\n  }\r\n  .mainImg[_ngcontent-%COMP%] {\r\n    padding: 0 0.7em 0 0.7em;\r\n    max-width: 28em;\r\n  }\r\n  .current-edition[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    padding: 0 0.7em 0 0.7em;\r\n  }\r\n  .url-textbox[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .mainImg[_ngcontent-%COMP%] {\r\n    padding: 0 0.7em 0 0.7em;\r\n    max-width: 35em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIHdpZHRoOiAxNGVtO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy1kaXNwbGF5LWJveCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAzMGVtO1xyXG4gIGhlaWdodDogMTllbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDZlbTtcclxufVxyXG5cclxuLm1haW5JbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW1nLXNlbGVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uaW1nLXBpY2tlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctcGlja2VyLWxhYmVsIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4udXJsLXRleHRib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAxNnB4O1xyXG4gIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzOCwgMTM4LCAxMzgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaW5wdXRzLWJveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbiAgbWFyZ2luOiA0ZW0gMWVtIDJlbSAxZW07XHJcbiAgcGFkZGluZzogM2VtIDAgMmVtIDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODU0cHgpIHtcclxuICAuc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIC5pbWctZGlzcGxheS1ib3gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLmltZy1hbmQtZWRpdGlvbnMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWFpbkltZyB7XHJcbiAgICBwYWRkaW5nOiAwIDAuN2VtIDAgMC43ZW07XHJcbiAgICBtYXgtd2lkdGg6IDI4ZW07XHJcbiAgfVxyXG4gIC5jdXJyZW50LWVkaXRpb24ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmc6IDAgMC43ZW0gMCAwLjdlbTtcclxuICB9XHJcbiAgLnVybC10ZXh0Ym94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWluSW1nIHtcclxuICAgIHBhZGRpbmc6IDAgMC43ZW0gMCAwLjdlbTtcclxuICAgIG1heC13aWR0aDogMzVlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _imgix_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @imgix/angular */ "o5gt");
/* harmony import */ var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/inputs/inputs.component */ "ny1Q");
/* harmony import */ var _pipes_label_type_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/label-type.pipe */ "phOz");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _components_current_edition_current_edition_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/current-edition/current-edition.component */ "1oKk");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _imgix_angular__WEBPACK_IMPORTED_MODULE_13__["ImgixAngularModule"].forRoot({
                domain: 'assets.imgix.net',
                defaultImgixParams: {
                    auto: 'format,compress',
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_14__["InputsComponent"],
        _pipes_label_type_pipe__WEBPACK_IMPORTED_MODULE_15__["LabelTypePipe"],
        _components_current_edition_current_edition_component__WEBPACK_IMPORTED_MODULE_18__["CurrentEditionComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _imgix_angular__WEBPACK_IMPORTED_MODULE_13__["ImgixAngularModule"]] }); })();


/***/ }),

/***/ "fus3":
/*!******************************************!*\
  !*** ./src/app/services/iipu.service.ts ***!
  \******************************************/
/*! exports provided: IipuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IipuService", function() { return IipuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class IipuService {
    constructor(http) {
        this.http = http;
    }
    getTestImgs() {
        return this.http.get('https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json');
    }
    getParametersJSON() {
        return this.http.get('https://raw.githubusercontent.com/imgix/imgix-url-params/master/dist/parameters.json');
    }
}
IipuService.ɵfac = function IipuService_Factory(t) { return new (t || IipuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IipuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IipuService, factory: IipuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ny1Q":
/*!*******************************************************!*\
  !*** ./src/app/components/inputs/inputs.component.ts ***!
  \*******************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _pipes_label_type_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/label-type.pipe */ "phOz");











function InputsComponent_div_0_mat_button_toggle_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputsComponent_div_0_mat_button_toggle_2_Template_mat_button_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const option_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.setParamWithString(ctx_r6.inputs.tag, option_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "labelType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, option_r5));
} }
function InputsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-button-toggle-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputsComponent_div_0_mat_button_toggle_2_Template, 3, 4, "mat-button-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.inputs.possible_valuesStr);
} }
function InputsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-slider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputsComponent_div_1_Template_mat_slider_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.inputs.default = $event; })("change", function InputsComponent_div_1_Template_mat_slider_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.setParamWithNumber(ctx_r10.inputs.default); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx_r1.inputs.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.inputs.default, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r1.inputs.max)("min", ctx_r1.inputs.min)("ngModel", ctx_r1.inputs.default);
} }
function InputsComponent_div_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", input_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", input_r12, " ");
} }
function InputsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose an option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function InputsComponent_div_2_Template_mat_select_selectionChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.setParamWithNumber($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputsComponent_div_2_mat_option_5_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.inputs.possible_valuesNum);
} }
function InputsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputsComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.setParamBoolean(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r3.inputs.label), " ");
} }
class InputsComponent {
    constructor() {
        this.paramEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paramSelected = {};
    }
    set setInputs(param) {
        this.parameter = param;
        this.buildInputs();
    }
    ngOnInit() {
    }
    buildInputs() {
        this.inputs = {
            label: '',
            tag: '',
            type: 0,
            default: '',
            options: [],
            possible_valuesNum: [],
            possible_valuesStr: []
        };
        this.inputs.type = this.getTypeOfInput(this.getExpects().type);
        this.inputs.tag = this.parameter.tag;
        this.inputs.label = this.parameter.display_name;
        switch (this.inputs.type) {
            case 1:
                this.inputs.possible_valuesStr = this.getStrArrValues();
                this.inputs.default = this.getExpects().default;
                break;
            case 2:
                this.inputs.max = this.getMax();
                this.inputs.min = this.getMin();
                this.inputs.default = this.getExpects().default;
                break;
            case 3:
                this.inputs.max = this.getMax();
                this.inputs.min = this.getMin();
                this.inputs.possible_valuesNum = this.getNumArrValues();
                break;
            case 4:
                this.inputs.default = this.getExpects().default;
                break;
            default:
                break;
        }
    }
    setParamWithString(tag, option) {
        this.paramSelected = {};
        this.addParameter(tag, option);
        this.paramEmitter.emit(this.paramSelected);
    }
    setParamWithNumber(value) {
        this.paramSelected = {};
        this.addParameter(this.inputs.tag, Number(value));
        this.paramEmitter.emit(this.paramSelected);
    }
    setParamBoolean() {
        this.inputs.default = !this.inputs.default;
        this.paramSelected = {};
        this.addParameter(this.inputs.tag, String(this.inputs.default));
        this.paramEmitter.emit(this.paramSelected);
    }
    addParameter(key, value) {
        this.paramSelected[key] = value.valueOf();
    }
    getExpects() {
        return this.parameter.expects[0];
    }
    getStrArrValues() {
        let strings = [];
        this.getExpects().possible_values.forEach(str => {
            strings.push(String(str));
        });
        return strings;
    }
    getNumArrValues() {
        let numbers = [];
        this.getExpects().possible_values.forEach(num => numbers.push(parseInt(num, 10)));
        return numbers;
    }
    getMax() {
        if (this.parameter.expects[0].strict_range) {
            return this.parameter.expects[0].strict_range.max;
        }
        else if (this.parameter.expects[0].suggested_range) {
            return this.parameter.expects[0].suggested_range.max;
        }
        else {
            return 0;
        }
    }
    getMin() {
        if (this.parameter.expects[0].strict_range) {
            return this.parameter.expects[0].strict_range.min;
        }
        else if (this.parameter.expects[0].suggested_range) {
            return this.parameter.expects[0].suggested_range.min;
        }
        else {
            return 0;
        }
    }
    getTypeOfInput(type) {
        let inputType;
        switch (type) {
            case 'string':
                inputType = 1;
                break;
            case 'number':
                inputType = 2;
                break;
            case 'integer':
                this.getExpects().possible_values ?
                    inputType = 3 : inputType = 2;
                break;
            case 'boolean':
                inputType = 4;
                break;
            default:
                break;
        }
        return inputType;
    }
}
InputsComponent.ɵfac = function InputsComponent_Factory(t) { return new (t || InputsComponent)(); };
InputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputsComponent, selectors: [["app-inputs"]], inputs: { setInputs: ["parameter", "setInputs"] }, outputs: { paramEmitter: "paramEmitter" }, decls: 4, vars: 4, consts: [["class", "opt-buttons", 4, "ngIf"], [4, "ngIf"], [1, "opt-buttons"], ["aria-label", "Values", "color", "secondary"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "label-container"], [1, "label"], [1, "value-label"], [3, "max", "min", "ngModel", "ngModelChange", "change"], ["appearance", "fill", 1, "option-select"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function InputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputsComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputsComponent_div_1_Template, 8, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputsComponent_div_2_Template, 6, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputsComponent_div_3_Template, 4, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputs.type === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputs.type === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputs.type === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputs.type === 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggle"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], pipes: [_pipes_label_type_pipe__WEBPACK_IMPORTED_MODULE_9__["LabelTypePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]], styles: [".mat-slider-horizontal[_ngcontent-%COMP%] {\r\n  width: 30em;\r\n}\r\n\r\n.label-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.label[_ngcontent-%COMP%]{\r\n  padding: 0 1em 0 1em;\r\n}\r\n\r\n.opt-buttons[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: space-around;\r\n  padding: 2em 0 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiaW5wdXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcclxuICB3aWR0aDogMzBlbTtcclxufVxyXG5cclxuLmxhYmVsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sYWJlbHtcclxuICBwYWRkaW5nOiAwIDFlbSAwIDFlbTtcclxufVxyXG5cclxuLm9wdC1idXR0b25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBhZGRpbmc6IDJlbSAwIDAgMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "phOz":
/*!******************************************!*\
  !*** ./src/app/pipes/label-type.pipe.ts ***!
  \******************************************/
/*! exports provided: LabelTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelTypePipe", function() { return LabelTypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LabelTypePipe {
    // THIS PIPE TRANSFORMS SOME PARAMETERS' VALUES INTO THE APPROPIATE LABEL
    transform(value, ...args) {
        let label = 'Option';
        switch (value) {
            case 'h':
                label = 'Horizontal';
                break;
            case 'v':
                label = 'Vertical';
                break;
            case 'hv':
                label = 'Horizontal-Vertical';
                break;
            default:
                break;
        }
        return label;
    }
}
LabelTypePipe.ɵfac = function LabelTypePipe_Factory(t) { return new (t || LabelTypePipe)(); };
LabelTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "labelType", type: LabelTypePipe, pure: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map