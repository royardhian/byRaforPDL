(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sftp-sftp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sftp/Sftp.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sftp/Sftp.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      SFTP\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <label>\n      User Name:\n      <input type=\"text\" formControlName=\"userName\" required>\n    </label>\n\n    <label>\n      Password:\n      <input type=\"password\" formControlName=\"password\">\n    </label>\n\n    <div formGroupName=\"server\">\n      <h3>Server Sftp</h3>\n\n      <label>\n        ip:\n        <input type=\"text\" formControlName=\"ip\">\n      </label>\n\n      <label>\n        port:\n        <input type=\"text\" formControlName=\"port\">\n      </label>\n\n    </div>\n\n    <button type=\"submit\">Submit</button>\n  </form>\n\n  <hr>\n\n  <p>\n    Form Value: {{ loginForm.value | json }}\n  </p>\n  <p>\n    successCallback Value: {{ successCallback.value | json }}\n  </p>\n  <p>\n    errorCallback Value: {{ errorCallback.value | json }}\n  </p>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/sftp/Sftp.page.scss":
/*!*************************************!*\
  !*** ./src/app/sftp/Sftp.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ProfileEditorComponent's private CSS styles */\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 24px;\n}\nlabel {\n  display: block;\n  width: 6em;\n  margin: 0.5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: 0.4em;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0RvY3VtZW50cy9Qcm9qZWN0cy9pdGFkMDIvR0lUL2J5UmFmb3JQREwvc3JjL2FwcC9zZnRwL1NmdHAucGFnZS5zY3NzIiwic3JjL2FwcC9zZnRwL1NmdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFBO0FBQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURFRTtFQUNFLHlCQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NmdHAvU2Z0cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQcm9maWxlRWRpdG9yQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICB9XG4gIFxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDZlbTtcbiAgICBtYXJnaW46IC41ZW0gMDtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgaW5wdXQge1xuICAgIGhlaWdodDogMmVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogLjRlbTtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICB9XG4gIFxuICBidXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICNjY2M7XG4gICAgY3Vyc29yOiBhdXRvO1xuICB9XG4gICIsIi8qIFByb2ZpbGVFZGl0b3JDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2ZW07XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sftp/sftp.module.ts":
/*!*************************************!*\
  !*** ./src/app/sftp/sftp.module.ts ***!
  \*************************************/
/*! exports provided: SftpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SftpPageModule", function() { return SftpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sftp_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sftp.page */ "./src/app/sftp/sftp.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let SftpPageModule = class SftpPageModule {
};
SftpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _sftp_page__WEBPACK_IMPORTED_MODULE_5__["SftpPage"] }])
        ],
        declarations: [_sftp_page__WEBPACK_IMPORTED_MODULE_5__["SftpPage"]]
    })
], SftpPageModule);



/***/ }),

/***/ "./src/app/sftp/sftp.page.ts":
/*!***********************************!*\
  !*** ./src/app/sftp/sftp.page.ts ***!
  \***********************************/
/*! exports provided: SftpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SftpPage", function() { return SftpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SftpPage = class SftpPage {
    constructor(fb) {
        this.fb = fb;
        this.successCallback = '';
        this.errorCallback = '';
        this.loginForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [''],
            server: this.fb.group({
                ip: [''],
                port: ['']
            })
        });
    }
    get aliases() {
        return this.loginForm.get('aliases');
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.loginForm);
        window.MyCordovaPlugin.echo(this.loginForm.value, function (callback) {
            //callback 
            this.successCallback = callback;
            console.warn(callback);
        });
    }
};
SftpPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SftpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-Sftp',
        template: __webpack_require__(/*! raw-loader!./Sftp.page.html */ "./node_modules/raw-loader/index.js!./src/app/sftp/Sftp.page.html"),
        styles: [__webpack_require__(/*! ./Sftp.page.scss */ "./src/app/sftp/Sftp.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], SftpPage);



/***/ })

}]);
//# sourceMappingURL=sftp-sftp-module-es2015.js.map