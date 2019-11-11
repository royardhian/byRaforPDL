(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sftp-sftp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sftp/Sftp.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sftp/Sftp.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      SFTP\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-label>\r\n      User Name:\r\n      <ion-input type=\"text\" formControlName=\"userName\" required></ion-input>\r\n    </ion-label>\r\n\r\n    <ion-label>\r\n      Password:\r\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n    </ion-label>\r\n\r\n    <div formGroupName=\"server\">\r\n      <h3>Server Sftp</h3>\r\n\r\n      <ion-label>\r\n        ip:\r\n        <ion-input type=\"text\" formControlName=\"ip\"></ion-input>\r\n      </ion-label>\r\n\r\n      <ion-label>\r\n        port:\r\n        <ion-input type=\"text\" formControlName=\"port\"></ion-input>\r\n      </ion-label>\r\n\r\n    </div>\r\n\r\n    <ion-button type=\"submit\">Submit</ion-button>\r\n  </form>\r\n\r\n  <hr>\r\n\r\n  <div>\r\n    Form Value: {{ loginForm.value | json }}\r\n  </div>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Summary</ion-label>\r\n    <ion-textarea placeholder=\"Tap here\" \r\n    [(ngModel)]=\"successCallback\" name=\"note\" ></ion-textarea>\r\n  </ion-item>\r\n  <div>\r\n    successCallback Value: {{ successCallback }}\r\n  </div>\r\n  <div>\r\n    errorCallback Value: {{ errorCallback }}\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/sftp/Sftp.page.scss":
/*!*************************************!*\
  !*** ./src/app/sftp/Sftp.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ProfileEditorComponent's private CSS styles */\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 24px;\n}\nlabel {\n  display: block;\n  width: 6em;\n  margin: 0.5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: 0.4em;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Z0cC9EOlxcTmV3VXNlcnNcXGl0YWQwMi5vdXRzb3VyY2VcXE15IERvY3VtZW50c1xcaW9uaWNcXGJ5UmFmb3JQRExcXGJ5UmFmb3JQREwvc3JjXFxhcHBcXHNmdHBcXFNmdHAucGFnZS5zY3NzIiwic3JjL2FwcC9zZnRwL1NmdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFBO0FBQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURFRTtFQUNFLHlCQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NmdHAvU2Z0cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQcm9maWxlRWRpdG9yQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDZlbTtcclxuICAgIG1hcmdpbjogLjVlbSAwO1xyXG4gICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmctbGVmdDogLjRlbTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgfVxyXG4gICIsIi8qIFByb2ZpbGVFZGl0b3JDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2ZW07XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogYXV0bztcbn0iXX0= */"

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
    constructor(fb, changeRef) {
        this.fb = fb;
        this.changeRef = changeRef;
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
    onSubmit() {
        // TODO: Use EventEmitter with form value
        //console.warn(this.loginForm);
        var self = this;
        MyCordovaPlugin.echo(this.loginForm.value, function (callback) {
            //callback 
            self.successCallback = callback;
            self.changeRef.detectChanges();
            //console.warn(callback);
        });
        //console.warn(self);
    }
};
SftpPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
SftpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-Sftp',
        template: __webpack_require__(/*! raw-loader!./Sftp.page.html */ "./node_modules/raw-loader/index.js!./src/app/sftp/Sftp.page.html"),
        styles: [__webpack_require__(/*! ./Sftp.page.scss */ "./src/app/sftp/Sftp.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], SftpPage);



/***/ })

}]);
//# sourceMappingURL=sftp-sftp-module-es2015.js.map