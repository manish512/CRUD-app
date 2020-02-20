(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/blog/blog.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/blog/blog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!update\">\n    {{blog.title}}\n    {{blog.text}}\n</div>\n<div *ngIf=\"update\">\n    <H1>Edit Blog</H1>\n    <form>\n\n        <div style=\"width: 90%;\">\n            <input input=\"Title\" [(ngModel)]=\"title\" name=\"title\" style=\"width: 90%;\" required value={{blog.title}}>\n        </div>\n        <p></p>\n        <div style=\"width: 90%; height: 50vh;\">\n            <textarea input=\"Text\" [(ngModel)]=\"text\" name=\"text\" style=\"width: 90%; height: 100%;\" required\n                value={{blog.text}}></textarea>\n        </div>\n        <p></p>\n\n    </form>\n    <button (click)=\"update_blog(blog.id)\" color=\"primary\">Save</button>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/crud/crud.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/crud/crud.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>crud works!</p>-->\n<!--<ul>-->\n<!--  <li *ngFor=\" let user of users;\">-->\n<!--    <a href=\"/handle/{{user.handle}}\">{{user.handle}}</a>-->\n<!--  </li>-->\n<!--</ul>-->\n\n<div>\n  <H1>Login</H1>\n  <form>\n    <table cellspacing=\"0\">\n      <tr>\n        <td>\n          <p>\n            <input input=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n          </p>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <p>\n            <input input=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n          </p>\n        </td>\n      </tr>\n    </table>\n  </form>\n  <button (click)=\"login()\" color=\"primary\">Login</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <H1>Sign UP</H1>\n    <form>\n        <table cellspacing=\"0\">\n            <tr>\n                <td>\n                    <p>\n                        <input input=\"name\" [(ngModel)]=\"name\" name=\"name\" required>\n                    </p>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <p>\n                        <input input=\"handle\" [(ngModel)]=\"handle\" type=\"password\" name=\"password\" required>\n                    </p>\n                </td>\n            </tr>\n        </table>\n    </form>\n    <button (click)=\"signup()\" color=\"primary\">Login</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/updateblog/updateblog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/updateblog/updateblog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <H1>New Blog</H1>\n    <form>\n\n        <div style=\"width: 90%;\">\n            <input input=\"Title\" [(ngModel)]=\"title\" name=\"title\" style=\"width: 90%;\" required>\n        </div>\n        <p></p>\n        <div style=\"width: 90%; height: 50vh;\">\n            <textarea input=\"Text\" [(ngModel)]=\"text\" name=\"text\" style=\"width: 90%; height: 100%;\" required></textarea>\n        </div>\n        <p></p>\n\n    </form>\n    <button (click)=\"save()\" color=\"primary\">Save</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>\n    Here is a list of blogs you have\n  </p>\n</div>\n<div>\n  <table>\n    <tr *ngFor=\" let blog of blogs;\">\n      <td><a href=\"blog/{{blog.id}}\">{{blog.title}}</a></td>\n      <td><button (click)=\"edit_blog(blog.id)\">Edit</button></td>\n      <td><button (click)=\"delete_blog(blog.id)\">Delete</button></td>\n    <tr>\n  </table>\n  <button id=\"new-btn\" (click)=\"add_new_blog()\" color=\"primary\">Add new blog</button>\n</div>\n<div>\n  Click this button to edit all the blogs in Bulk using celery\n  <button (click)=\"update_bulk()\">Update Bulk</button>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_crud_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/crud/crud.component */ "./src/app/components/crud/crud.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_updateblog_updateblog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/updateblog/updateblog.component */ "./src/app/components/updateblog/updateblog.component.ts");








var routes = [
    { path: '', component: _components_crud_crud_component__WEBPACK_IMPORTED_MODULE_3__["CrudComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'handle/:userId', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: 'blog/:blogId', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"] },
    { path: 'update_blog/:userId', component: _components_updateblog_updateblog_component__WEBPACK_IMPORTED_MODULE_7__["UpdateblogComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_crud_crud_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/crud/crud.component */ "./src/app/components/crud/crud.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_updateblog_updateblog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/updateblog/updateblog.component */ "./src/app/components/updateblog/updateblog.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");












//import {FlaskclientService } from './services/flaskclient.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_crud_crud_component__WEBPACK_IMPORTED_MODULE_7__["CrudComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
                _components_updateblog_updateblog_component__WEBPACK_IMPORTED_MODULE_10__["UpdateblogComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flaskclient.service */ "./src/app/services/flaskclient.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BlogComponent = /** @class */ (function () {
    function BlogComponent(flaskclientService, route, router) {
        this.flaskclientService = flaskclientService;
        this.route = route;
        this.router = router;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogId = this.route.snapshot.params.blogId;
        this.flaskclientService.getBlogById(this.blogId).subscribe(function (response) {
            _this.blog = response;
            _this.title = _this.blog.title;
            _this.text = _this.blog.text;
            _this.flaskclientService.getUserById(_this.blog.author).subscribe(function (response) { return _this.user = response; });
        });
        this.update = JSON.parse(this.route.snapshot.queryParamMap.get('edit'));
    };
    BlogComponent.prototype.update_blog = function (id) {
        var _this = this;
        this.flaskclientService.updateBlog(this.title, this.blogId, this.text, this.blog.author).subscribe(function (Error) {
            console.log(Error);
            alert("Blog updated");
            _this.router.navigate(["handle/" + _this.user.handle]);
            _this.ngOnInit();
        });
    };
    BlogComponent.ctorParameters = function () { return [
        { type: src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__["FlaskclientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        })
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/crud/crud.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/crud/crud.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnVkL2NydWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/crud/crud.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/crud/crud.component.ts ***!
  \***************************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flaskclient.service */ "./src/app/services/flaskclient.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CrudComponent = /** @class */ (function () {
    function CrudComponent(flaskclientService, router) {
        this.flaskclientService = flaskclientService;
        this.router = router;
    }
    CrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flaskclientService.getUsers().subscribe(function (response) { return _this.users = response; });
    };
    CrudComponent.prototype.login = function () {
        var _this = this;
        this.flaskclientService.getUserByHandle(this.username).subscribe(function (response) { return _this.returnedUser = response; });
        if (this.returnedUser != null) {
            if (this.username == this.returnedUser.handle && this.password == 'admin') {
                this.router.navigate(["handle/" + this.returnedUser.handle]);
            }
        }
    };
    CrudComponent.ctorParameters = function () { return [
        { type: src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__["FlaskclientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-crud',
            template: __webpack_require__(/*! raw-loader!./crud.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/crud/crud.component.html"),
            styles: [__webpack_require__(/*! ./crud.component.css */ "./src/app/components/crud/crud.component.css")]
        })
    ], CrudComponent);
    return CrudComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flaskclient.service */ "./src/app/services/flaskclient.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(flaskclientService, router) {
        this.flaskclientService = flaskclientService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.flaskclientService.addUser(this.name, this.handle).subscribe(function (response) {
            alert("User Added");
            _this.router.navigate([""]);
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__["FlaskclientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/updateblog/updateblog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/updateblog/updateblog.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVibG9nL3VwZGF0ZWJsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/updateblog/updateblog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/updateblog/updateblog.component.ts ***!
  \***************************************************************/
/*! exports provided: UpdateblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateblogComponent", function() { return UpdateblogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flaskclient.service */ "./src/app/services/flaskclient.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UpdateblogComponent = /** @class */ (function () {
    function UpdateblogComponent(flaskclientservice, route, router) {
        this.flaskclientservice = flaskclientservice;
        this.route = route;
        this.router = router;
    }
    UpdateblogComponent.prototype.ngOnInit = function () {
        this.userId = this.route.snapshot.params.userId;
    };
    UpdateblogComponent.prototype.save = function () {
        this.flaskclientservice.createNewBlog(this.title, this.userId, this.text);
        this.router.navigate(["handle/" + this.userId]);
    };
    UpdateblogComponent.ctorParameters = function () { return [
        { type: src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__["FlaskclientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UpdateblogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-updateblog',
            template: __webpack_require__(/*! raw-loader!./updateblog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/updateblog/updateblog.component.html"),
            styles: [__webpack_require__(/*! ./updateblog.component.css */ "./src/app/components/updateblog/updateblog.component.css")]
        })
    ], UpdateblogComponent);
    return UpdateblogComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyL3VzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flaskclient.service */ "./src/app/services/flaskclient.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserComponent = /** @class */ (function () {
    function UserComponent(flaskclientService, route, router) {
        this.flaskclientService = flaskclientService;
        this.route = route;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.params.userId;
        this.flaskclientService.getBlogByUser(this.userId).subscribe(function (response) { return _this.blogs = response; });
    };
    UserComponent.prototype.add_new_blog = function () {
        this.router.navigate(["update_blog/" + this.userId]);
    };
    UserComponent.prototype.delete_blog = function (id) {
        var _this = this;
        this.flaskclientService.deleteBlogById(id).subscribe(function (response) {
            alert("Blog deleted");
            _this.ngOnInit();
        });
    };
    UserComponent.prototype.update_bulk = function () {
        this.flaskclientService.update_bulk().subscribe(function (response) {
            alert(response);
        });
    };
    UserComponent.prototype.edit_blog = function (id) {
        this.router.navigate(["blog/" + id], { queryParams: { "edit": true } });
    };
    UserComponent.ctorParameters = function () { return [
        { type: src_app_services_flaskclient_service__WEBPACK_IMPORTED_MODULE_1__["FlaskclientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/services/flaskclient.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/flaskclient.service.ts ***!
  \*************************************************/
/*! exports provided: FlaskclientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlaskclientService", function() { return FlaskclientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlaskclientService = /** @class */ (function () {
    function FlaskclientService(http) {
        this.http = http;
    }
    FlaskclientService.prototype.addUser = function (name, handle) {
        return this.http.get('/api/add?name=' + name + '&handle=' + handle + '&joined=1/1/1960');
    };
    FlaskclientService.prototype.getUsers = function () {
        return this.http.get('/api/getall');
    };
    FlaskclientService.prototype.getBlogByUser = function (userId) {
        return this.http.get('/api/blog/' + userId);
    };
    FlaskclientService.prototype.getUserByHandle = function (handle) {
        return this.http.get('/api/getUser?handle=' + handle);
    };
    FlaskclientService.prototype.getUserById = function (id) {
        return this.http.get('/api/get/' + id);
    };
    FlaskclientService.prototype.getBlogById = function (blogId) {
        return this.http.get('/api/getBlog?id=' + blogId);
    };
    FlaskclientService.prototype.createNewBlog = function (title, userId, text) {
        return this.http.post('/api/add_blog', {
            "title": title,
            "author": userId,
            "text": text
        }).subscribe(function (response) {
            return console.log(response);
        });
    };
    FlaskclientService.prototype.deleteBlogById = function (id) {
        return this.http.get('/api/deleteBlog?id=' + id);
    };
    FlaskclientService.prototype.updateBlog = function (title, blogId, text, author) {
        return this.http.post('/api/update_blog', {
            "id": blogId,
            "title": title,
            "author": author,
            "text": text
        });
    };
    FlaskclientService.prototype.update_bulk = function () {
        return this.http.get('/api/autoedit_blogs');
    };
    FlaskclientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FlaskclientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FlaskclientService);
    return FlaskclientService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\ClaimFound\CRUD app\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map