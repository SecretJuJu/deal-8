/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/auth.js":
/*!*************************!*\
  !*** ./src/api/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginAsync": () => (/* binding */ loginAsync),
/* harmony export */   "signupAsync": () => (/* binding */ signupAsync),
/* harmony export */   "logoutAsync": () => (/* binding */ logoutAsync)
/* harmony export */ });
const loginAsync = ({
  id
}, cb) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Login Request with ${id}`);
    cb();
  }, 500); // TODO: Change Real Fetch
  // fetch("/login", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     id,
  //   }),
  // })
  //   .then((response) => {
  //     if (response.status === 200) {
  //       // TODO: navigator
  //     }
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
});
const signupAsync = ({
  id,
  location
}, cb) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Signup Request with id: ${id}, location:${location}`);
    cb();
  }, 500);
});
const logoutAsync = cb => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Logout`);
    cb();
  }, 500);
});

/***/ }),

/***/ "./src/api/user.js":
/*!*************************!*\
  !*** ./src/api/user.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfileAsync": () => (/* binding */ getProfileAsync)
/* harmony export */ });
const getProfileAsync = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      username: "Woowahan"
    });
  }, 500);
});

/***/ }),

/***/ "./src/helper/eventHelpers.js":
/*!************************************!*\
  !*** ./src/helper/eventHelpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "emit": () => (/* binding */ emit)
/* harmony export */ });
function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}
function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, {
    detail
  });
  target.dispatchEvent(event);
}

/***/ }),

/***/ "./src/helper/selectHelpers.js":
/*!*************************************!*\
  !*** ./src/helper/selectHelpers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qs": () => (/* binding */ qs),
/* harmony export */   "qsAll": () => (/* binding */ qsAll)
/* harmony export */ });
function qs(selector, scope = document) {
  if (!selector) throw "no selector";
  return scope.querySelector(selector);
}
function qsAll(selector, scope = document) {
  if (!selector) throw "no selector";
  return Array.from(scope.querySelectorAll(selector));
}

/***/ }),

/***/ "./src/page/AbstractPage.js":
/*!**********************************!*\
  !*** ./src/page/AbstractPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tag = "[AbstractPage]";

class AbstractPage {
  constructor(params) {
    console.log(tag, "constructor");
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  async render() {
    return "";
  }

  async after_render() {}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractPage);

/***/ }),

/***/ "./src/page/HomePage/Controller.js":
/*!*****************************************!*\
  !*** ./src/page/HomePage/Controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
const tag = "[HomePage Controller]";
class Controller {
  constructor({
    mainHeaderView
  }) {
    console.log(tag);
    this.mainHeaderView = mainHeaderView;
    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {// TODO: binding event
  }

  render() {
    this.mainHeaderView.show();
  }

}

/***/ }),

/***/ "./src/page/HomePage/index.js":
/*!************************************!*\
  !*** ./src/page/HomePage/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _AbstractPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractPage */ "./src/page/AbstractPage.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ "./src/page/HomePage/Controller.js");
/* harmony import */ var _views_MainHeaderView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/MainHeaderView */ "./src/page/HomePage/views/MainHeaderView.js");
/* harmony import */ var _public_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/css/main.css */ "./src/public/css/main.css");




const tag = "[HomePage]";
class HomePage extends _AbstractPage__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async render() {
    return `
    <div id="main-header" class="main-header"></div>
    `;
  }

  async after_render() {
    const views = {
      mainHeaderView: new _views_MainHeaderView__WEBPACK_IMPORTED_MODULE_2__.default()
    };
    new _Controller__WEBPACK_IMPORTED_MODULE_1__.default(views);
  }

}

/***/ }),

/***/ "./src/page/HomePage/views/MainHeaderView.js":
/*!***************************************************!*\
  !*** ./src/page/HomePage/views/MainHeaderView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainHeaderView)
/* harmony export */ });
/* harmony import */ var _page_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/page/View */ "./src/page/View.js");
/* harmony import */ var _helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/selectHelpers */ "./src/helper/selectHelpers.js");
/* harmony import */ var _public_svg_category_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/svg/category-white.svg */ "./src/public/svg/category-white.svg");
/* harmony import */ var _public_svg_category_white_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_svg_category_white_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_svg_gps_white_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/svg/gps-white.svg */ "./src/public/svg/gps-white.svg");
/* harmony import */ var _public_svg_gps_white_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_svg_gps_white_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_svg_profile_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/svg/profile-white.svg */ "./src/public/svg/profile-white.svg");
/* harmony import */ var _public_svg_profile_white_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_svg_profile_white_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_svg_menu_white_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/svg/menu-white.svg */ "./src/public/svg/menu-white.svg");
/* harmony import */ var _public_svg_menu_white_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_svg_menu_white_svg__WEBPACK_IMPORTED_MODULE_5__);






const tag = "[MainHeader]";
class MainHeaderView extends _page_View__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(element = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#main-header"), template = new Template()) {
    console.log(tag, "constructor");
    super(element);
    this.template = template;
  }

  show(data = []) {
    this.element.innerHTML = this.template.getHeader();
    super.show();
  }

}

class Template {
  getHeader() {
    return `
    <div class="main-header--left" href="/category.html">
      <div class="category-icon">${(_public_svg_category_white_svg__WEBPACK_IMPORTED_MODULE_2___default())}</div>  
    </div>
    <div class="main-header--center">
      <div class="location">
        <div class="location-icon">${(_public_svg_gps_white_svg__WEBPACK_IMPORTED_MODULE_3___default())}</div>
        <strong> 역삼동 </strong>
      </div>
    </div>
    <div class="main-header--right">
      <a href="/login" data-link>
        <div class="profile-icon">${(_public_svg_profile_white_svg__WEBPACK_IMPORTED_MODULE_4___default())}</div>  
      </a>
      <a href="/menu" data-link>
        <div class="menu-icon">${(_public_svg_menu_white_svg__WEBPACK_IMPORTED_MODULE_5___default())}</div>  
      </a>
    </div>
        `;
  }

}

/***/ }),

/***/ "./src/page/LoginPage/Controller.js":
/*!******************************************!*\
  !*** ./src/page/LoginPage/Controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/auth */ "./src/api/auth.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router */ "./src/router.js");


const tag = "[Login Controller]";
class Controller {
  constructor({
    loginFormView
  }) {
    console.log(tag);
    this.loginFormView = loginFormView;
    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.loginFormView.on("@login", event => this.login(event.detail.value));
  }

  login(id) {
    (0,_api_auth__WEBPACK_IMPORTED_MODULE_0__.loginAsync)({
      id
    }, () => {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.navigateTo)("/");
    });
  }

  render() {
    this.loginFormView.show();
  }

}

/***/ }),

/***/ "./src/page/LoginPage/index.js":
/*!*************************************!*\
  !*** ./src/page/LoginPage/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _AbstractPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractPage */ "./src/page/AbstractPage.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ "./src/page/LoginPage/Controller.js");
/* harmony import */ var _views_LoginFormView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/LoginFormView */ "./src/page/LoginPage/views/LoginFormView.js");
/* harmony import */ var _public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/svg/chevron-left.svg */ "./src/public/svg/chevron-left.svg");
/* harmony import */ var _public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_css_login_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/css/login.css */ "./src/public/css/login.css");





const tag = "[LoginPage]";
class LoginPage extends _AbstractPage__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(params) {
    console.log(tag, "contructor");
    super(params);
  }

  async render() {
    return `
    <header id="header" class="header">
      <a class="header--left" href="/" data-link>
        <div class="back-icon">${(_public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3___default())}</div>
      </a>
      <h1 class="header--center">
        <span class="header--center--title"> 로그인 </span>
      </h1>
    </header>
    <main id="login-form" class="login-main">
      <input
        id="id-input"
        class="login-main--text-input"
        type="text"
        placeholder="아이디를 입력하세요"
      />
      <div id="login-btn" class="login-main--submit-btn">로그인</div>
      <a class="login-main--link" href="/signup" data-link>회원가입</a>
    </main>
    `;
  }

  async after_render() {
    const views = {
      loginFormView: new _views_LoginFormView__WEBPACK_IMPORTED_MODULE_2__.default()
    };
    new _Controller__WEBPACK_IMPORTED_MODULE_1__.default(views);
  }

}

/***/ }),

/***/ "./src/page/LoginPage/views/LoginFormView.js":
/*!***************************************************!*\
  !*** ./src/page/LoginPage/views/LoginFormView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginFormView)
/* harmony export */ });
/* harmony import */ var _page_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/page/View */ "./src/page/View.js");
/* harmony import */ var _helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/selectHelpers */ "./src/helper/selectHelpers.js");
/* harmony import */ var _helper_eventHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helper/eventHelpers */ "./src/helper/eventHelpers.js");



const tag = "[BasicHeaderView]";
class LoginFormView extends _page_View__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(element = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#login-form")) {
    console.log(tag, "constructor");
    super(element);
    this.idInputElement = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#id-input", this.element);
    this.loginButtonElement = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#login-btn", this.element);
    this.bindingEvents();
  }

  bindingEvents() {
    (0,_helper_eventHelpers__WEBPACK_IMPORTED_MODULE_2__.on)(this.loginButtonElement, "click", () => this.handleLoginButtonClick());
  }

  handleLoginButtonClick() {
    const value = this.idInputElement.value;
    this.emit("@login", {
      value
    }); // Login Event Dipatch to Controller
  }

  show() {
    super.show();
  }

}

/***/ }),

/***/ "./src/page/ProfilePage/Controller.js":
/*!********************************************!*\
  !*** ./src/page/ProfilePage/Controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/auth */ "./src/api/auth.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/user */ "./src/api/user.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ "./src/router.js");



const tag = "[Login Controller]";
class Controller {
  constructor({
    profileView
  }) {
    console.log(tag);
    this.profileView = profileView;
    this.subscribeViewEvents();
    this.init();
    this.render();
  }

  init() {
    // Get Username from server
    (0,_api_user__WEBPACK_IMPORTED_MODULE_1__.getProfileAsync)().then(data => {
      const {
        username
      } = data;
      this.render(username);
    });
  }

  subscribeViewEvents() {
    this.profileView.on("@logout", event => this.logout());
  }

  logout() {
    // TODO: start spinner
    (0,_api_auth__WEBPACK_IMPORTED_MODULE_0__.logoutAsync)(() => {
      (0,_router__WEBPACK_IMPORTED_MODULE_2__.navigateTo)("/login");
    });
  }

  render(username = "") {
    this.profileView.show(username);
  }

}

/***/ }),

/***/ "./src/page/ProfilePage/index.js":
/*!***************************************!*\
  !*** ./src/page/ProfilePage/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _AbstractPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractPage */ "./src/page/AbstractPage.js");
/* harmony import */ var _views_ProfileView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/ProfileView */ "./src/page/ProfilePage/views/ProfileView.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/page/ProfilePage/Controller.js");
/* harmony import */ var _public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/svg/chevron-left.svg */ "./src/public/svg/chevron-left.svg");
/* harmony import */ var _public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_css_profile_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/css/profile.css */ "./src/public/css/profile.css");





const tag = "[ProfilePage]";
class ProfilePage extends _AbstractPage__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(params) {
    console.log(tag, "contructor");
    super(params);
  }

  async render() {
    return ` <header class="header">
                <a class="header--left" href="/login" data-link>
                <div class="back-icon">${(_public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_3___default())}</div>
                </a>
                <h1 class="header--center">
                <span class="header--center--title"> 내 계정 </span>
                </h1>
            </header>
            <main id="profile-view" class="profile-main">
                <h1  id="username-label" class="profile-main--username">Username</h1>
                <div id="logout-btn" class="profile-main--logout-btn">로그아웃</div>
            </main>`;
  }

  async after_render() {
    const views = {
      profileView: new _views_ProfileView__WEBPACK_IMPORTED_MODULE_1__.default()
    };
    new _Controller__WEBPACK_IMPORTED_MODULE_2__.default(views);
  }

}

/***/ }),

/***/ "./src/page/ProfilePage/views/ProfileView.js":
/*!***************************************************!*\
  !*** ./src/page/ProfilePage/views/ProfileView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfileView)
/* harmony export */ });
/* harmony import */ var _page_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/page/View */ "./src/page/View.js");
/* harmony import */ var _helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/selectHelpers */ "./src/helper/selectHelpers.js");
/* harmony import */ var _helper_eventHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helper/eventHelpers */ "./src/helper/eventHelpers.js");



const tag = "[ProfileView]";
class ProfileView extends _page_View__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(element = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#profile-view")) {
    super(element);
    this.usernameLabelElement = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#username-label", this.element);
    this.logoutButtonElement = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#logout-btn", this.element);
    this.bindingEvents();
  }

  bindingEvents() {
    (0,_helper_eventHelpers__WEBPACK_IMPORTED_MODULE_2__.on)(this.logoutButtonElement, "click", () => {
      this.emit("@logout");
    });
  }

  setUsername(name) {
    this.usernameLabelElement.innerText = name;
  }

  show(username) {
    super.show();
    this.setUsername(username);
  }

}

/***/ }),

/***/ "./src/page/SignupPage/Controller.js":
/*!*******************************************!*\
  !*** ./src/page/SignupPage/Controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/auth */ "./src/api/auth.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router */ "./src/router.js");


const tag = "[Signup Controller]";
class Controller {
  constructor({
    signupFormView
  }) {
    this.signupFormView = signupFormView;
    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.signupFormView.on("@signup", e => this.signup(e.detail.value));
  }

  signup({
    id,
    location
  }) {
    (0,_api_auth__WEBPACK_IMPORTED_MODULE_0__.signupAsync)({
      id,
      location
    }, () => {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.navigateTo)("/profile");
    });
  }

  render() {
    this.signupFormView.show();
  }

}

/***/ }),

/***/ "./src/page/SignupPage/index.js":
/*!**************************************!*\
  !*** ./src/page/SignupPage/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _AbstractPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractPage */ "./src/page/AbstractPage.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ "./src/page/SignupPage/Controller.js");
/* harmony import */ var _public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/svg/chevron-left.svg */ "./src/public/svg/chevron-left.svg");
/* harmony import */ var _public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_css_signup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/css/signup.css */ "./src/public/css/signup.css");
/* harmony import */ var _views_SignupFormView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/SignupFormView */ "./src/page/SignupPage/views/SignupFormView.js");





const tag = "[LoginPage]";
class LoginPage extends _AbstractPage__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(params) {
    console.log(tag, "contructor");
    super(params);
  }

  async render() {
    return `
  <header class="header">
    <a class="header--left" href="/login" data-link>
    <div class="back-icon">${(_public_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_2___default())}</div>
    </a>
    <h1 class="header--center">
      <span class="header--center--title"> 회원가입 </span>
    </h1>
  </header>
  <main id="signup-form" class="signup-main">
    <label for="id-input" class="signup-main--label">아이디</label>
    <input
      id="id-input"
      class="signup-main--text-input"
      type="text"
      placeholder="문자, 숫자 조합 20자 이상"
    />

    <label for="location-input" class="signup-main--label">우리 동네</label>
    <input
      id="location-input"
      class="signup-main--text-input"
      type="text"
      placeholder="시-구 제외, 동만 입력"
    />
    <div id="signup-btn" class="signup-main--submit-btn">회원가입</div>
  </main>
    `;
  }

  async after_render() {
    const views = {
      signupFormView: new _views_SignupFormView__WEBPACK_IMPORTED_MODULE_4__.default()
    };
    new _Controller__WEBPACK_IMPORTED_MODULE_1__.default(views);
  }

}

/***/ }),

/***/ "./src/page/SignupPage/views/SignupFormView.js":
/*!*****************************************************!*\
  !*** ./src/page/SignupPage/views/SignupFormView.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignupFormView)
/* harmony export */ });
/* harmony import */ var _page_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/page/View */ "./src/page/View.js");
/* harmony import */ var _helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/selectHelpers */ "./src/helper/selectHelpers.js");
/* harmony import */ var _helper_eventHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helper/eventHelpers */ "./src/helper/eventHelpers.js");



const tag = "[BasicHeaderView]";
class SignupFormView extends _page_View__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(element = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#signup-form")) {
    console.log(tag, "constructor");
    super(element);
    this.idInputElement = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#id-input", this.element);
    this.locationInputElement = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#location-input", this.element);
    this.submitButtonElement = (0,_helper_selectHelpers__WEBPACK_IMPORTED_MODULE_1__.qs)("#signup-btn", this.element);
    this.bindingEvents();
  }

  bindingEvents() {
    (0,_helper_eventHelpers__WEBPACK_IMPORTED_MODULE_2__.on)(this.submitButtonElement, "click", () => this.handleSignupButtonClick());
  }

  handleSignupButtonClick() {
    const id = this.idInputElement.value;
    const location = this.locationInputElement.value;
    this.emit("@signup", {
      value: {
        id,
        location
      }
    });
  }

  show() {
    super.show();
  }

}

/***/ }),

/***/ "./src/page/View.js":
/*!**************************!*\
  !*** ./src/page/View.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _helper_eventHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helper/eventHelpers */ "./src/helper/eventHelpers.js");

const tag = "[View]";
class View {
  constructor(element) {
    console.log(tag, "constructor");
    if (!element) throw "no element";
    this.element = element;
    this.originalDisplay = this.element.style.dispaly || "";
    return this;
  }

  hide() {
    this.element.style.display = "none";
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  on(eventName, handler) {
    (0,_helper_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.on)(this.element, eventName, handler);
    return this;
  }

  emit(eventName, data) {
    (0,_helper_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.emit)(this.element, eventName, data);
    return this;
  }

}

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigateTo": () => (/* binding */ navigateTo),
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _page_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/HomePage */ "./src/page/HomePage/index.js");
/* harmony import */ var _page_LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/LoginPage */ "./src/page/LoginPage/index.js");
/* harmony import */ var _page_SignupPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/SignupPage */ "./src/page/SignupPage/index.js");
/* harmony import */ var _page_ProfilePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/ProfilePage */ "./src/page/ProfilePage/index.js");





const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1); // exclude path matching

  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));
};

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [{
    path: "/",
    view: _page_HomePage__WEBPACK_IMPORTED_MODULE_0__.default
  }, {
    path: "/login",
    view: _page_LoginPage__WEBPACK_IMPORTED_MODULE_1__.default
  }, {
    path: "/signup",
    view: _page_SignupPage__WEBPACK_IMPORTED_MODULE_2__.default
  }, {
    path: "/profile",
    view: _page_ProfilePage__WEBPACK_IMPORTED_MODULE_3__.default
  }];
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  });
  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  }

  const view = new match.route.view(getParams(match));
  document.querySelector("#app").innerHTML = await view.render();
  await view.after_render();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/common/basic_header.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/common/basic_header.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--header-bg-color);\n  border-bottom: 1px solid #c0c0c0;\n  height: 56px;\n}\n\n.header--left {\n  position: absolute;\n  left: 20px;\n}\n\n.header--center--title {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.header--right {\n  position: absolute;\n  right: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/public/css/common/basic_header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wCAAwC;EACxC,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb","sourcesContent":[".header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--header-bg-color);\n  border-bottom: 1px solid #c0c0c0;\n  height: 56px;\n}\n\n.header--left {\n  position: absolute;\n  left: 20px;\n}\n\n.header--center--title {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.header--right {\n  position: absolute;\n  right: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/common/global_color.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/common/global_color.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --header-bg-color: #f6f6f6;\n  --input-border-color: #d7d7d7;\n  --primary1-color: #2ac1bc;\n}\n", "",{"version":3,"sources":["webpack://./src/public/css/common/global_color.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,yBAAyB;AAC3B","sourcesContent":[":root {\n  --header-bg-color: #f6f6f6;\n  --input-border-color: #d7d7d7;\n  --primary1-color: #2ac1bc;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/login.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/login.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_basic_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./common/basic_header.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/common/basic_header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_global_color_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./common/global_color.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/common/global_color.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_common_basic_header_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_common_global_color_css__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".back-icon > svg {\n  height: 20px;\n}\n\n.login-main {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: white;\n  flex-grow: 1;\n  padding-top: 24px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.login-main--text-input {\n  padding-right: 16px;\n  padding-left: 16px;\n  padding-top: 10px;\n  padding-bottom: 8px;\n\n  font-weight: 400;\n  font-size: 16px;\n\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n}\n\n.login-main--submit-btn {\n  text-decoration: none;\n  text-align: center;\n  margin-top: 24px;\n  padding: 10px 16px;\n  background-color: var(--primary1-color);\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: white;\n}\n\n.login-main--link {\n  margin-top: 34px;\n  text-decoration: none;\n  text-align: center;\n  color: black;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.svg-container {\n  width: 20px;\n  height: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/public/css/login.css"],"names":[],"mappings":"AAGA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;;EAEnB,gBAAgB;EAChB,eAAe;;EAEf,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,uCAAuC;EACvC,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["@import url(\"./common/basic_header.css\");\n@import url(\"./common/global_color.css\");\n\n.back-icon > svg {\n  height: 20px;\n}\n\n.login-main {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: white;\n  flex-grow: 1;\n  padding-top: 24px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.login-main--text-input {\n  padding-right: 16px;\n  padding-left: 16px;\n  padding-top: 10px;\n  padding-bottom: 8px;\n\n  font-weight: 400;\n  font-size: 16px;\n\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n}\n\n.login-main--submit-btn {\n  text-decoration: none;\n  text-align: center;\n  margin-top: 24px;\n  padding: 10px 16px;\n  background-color: var(--primary1-color);\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: white;\n}\n\n.login-main--link {\n  margin-top: 34px;\n  text-decoration: none;\n  text-align: center;\n  color: black;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.svg-container {\n  width: 20px;\n  height: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/main.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/main.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #2ac1bc;\n  --primary-color-light: #a0e1e0;\n  --primary-color-dark: #219a95;\n  --gray-text-color: #888;\n  --black-text-color: #222222;\n}\n\nbody {\n  background-color: #fff;\n}\n\n.main-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: inherit;\n  background-color: #2ac1bc;\n  height: 56px;\n  padding: 0 20px;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n}\n\n.main-header i {\n  font-size: 1rem;\n}\n\n.main-header--left {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-header--center {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.category-icon > svg {\n  width: 20px;\n  height: 20px;\n}\n.location-icon > svg {\n  width: 15px;\n  margin-right: 10px;\n}\n\n.profile-icon > svg,\n.menu-icon > svg {\n  width: 20px;\n}\n\n.main-header .location {\n  display: flex;\n  align-items: center;\n  color: white;\n  justify-content: center;\n}\n\n.main-header--right {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-header--right > * {\n  margin: 0 9.5px;\n}\n\n.main-header--right > :first-child {\n  margin-left: 0;\n}\n\n.main-header--right > :last-child {\n  margin-right: 0;\n}\n\n.content {\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: scroll;\n}\n\n.content--product {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 17px;\n  width: 100%;\n  height: 139px;\n}\n\n.content--product--info {\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.content--product--info--top {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.content--product--info--top > div {\n  display: flex;\n  margin: 2px 0;\n  align-items: center;\n}\n\n.content--product--info--top > div:first-child {\n  margin-top: 0;\n  justify-content: space-between;\n}\n\n.content--product--info--top > div:last-child {\n  margin-bottom: 0;\n}\n\n.content--product--info--top--interest {\n  width: 21px;\n  height: 18px;\n}\n\n.content--product--info--top--interest > img {\n  width: 100%;\n  height: 100%;\n}\n\n.content--product--info--top > div:nth-child(2) > div {\n  color: var(--gray-text-color);\n  font-size: 14px;\n  display: flex;\n}\n\n.content--product--info--top > div:nth-child(2) > div > span {\n  display: block;\n}\n\n.content--product--info--top .location::after {\n  content: \"∙\";\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0 4px;\n}\n\n.content--product--info--top h1 {\n  font-weight: 500;\n  font-size: 16px;\n  display: flex;\n  height: fit-content;\n  align-items: baseline;\n  color: var(--black-text-color);\n  text-align: center;\n  margin-top: 2px;\n}\n\n.content--product--info--bottom {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  align-items: center;\n}\n\n.content--product--info--bottom > div {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 28px;\n  height: 16px;\n  margin: 0 8.5px;\n}\n.content--product--info--bottom > div:last-child {\n  margin-right: 0;\n}\n\n.new-product-button {\n  position: fixed;\n  width: 56px;\n  height: 56px;\n  background-color: #2ac1bc;\n  display: flex;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  right: 16px;\n  bottom: 16px;\n}\n", "",{"version":3,"sources":["webpack://./src/public/css/main.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,8BAA8B;EAC9B,6BAA6B;EAC7B,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,+BAA+B;EAC/B,gCAAgC;AAClC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,WAAW;EACX,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd","sourcesContent":[":root {\n  --primary-color: #2ac1bc;\n  --primary-color-light: #a0e1e0;\n  --primary-color-dark: #219a95;\n  --gray-text-color: #888;\n  --black-text-color: #222222;\n}\n\nbody {\n  background-color: #fff;\n}\n\n.main-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: inherit;\n  background-color: #2ac1bc;\n  height: 56px;\n  padding: 0 20px;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n}\n\n.main-header i {\n  font-size: 1rem;\n}\n\n.main-header--left {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-header--center {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.category-icon > svg {\n  width: 20px;\n  height: 20px;\n}\n.location-icon > svg {\n  width: 15px;\n  margin-right: 10px;\n}\n\n.profile-icon > svg,\n.menu-icon > svg {\n  width: 20px;\n}\n\n.main-header .location {\n  display: flex;\n  align-items: center;\n  color: white;\n  justify-content: center;\n}\n\n.main-header--right {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-header--right > * {\n  margin: 0 9.5px;\n}\n\n.main-header--right > :first-child {\n  margin-left: 0;\n}\n\n.main-header--right > :last-child {\n  margin-right: 0;\n}\n\n.content {\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: scroll;\n}\n\n.content--product {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 17px;\n  width: 100%;\n  height: 139px;\n}\n\n.content--product--info {\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.content--product--info--top {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.content--product--info--top > div {\n  display: flex;\n  margin: 2px 0;\n  align-items: center;\n}\n\n.content--product--info--top > div:first-child {\n  margin-top: 0;\n  justify-content: space-between;\n}\n\n.content--product--info--top > div:last-child {\n  margin-bottom: 0;\n}\n\n.content--product--info--top--interest {\n  width: 21px;\n  height: 18px;\n}\n\n.content--product--info--top--interest > img {\n  width: 100%;\n  height: 100%;\n}\n\n.content--product--info--top > div:nth-child(2) > div {\n  color: var(--gray-text-color);\n  font-size: 14px;\n  display: flex;\n}\n\n.content--product--info--top > div:nth-child(2) > div > span {\n  display: block;\n}\n\n.content--product--info--top .location::after {\n  content: \"∙\";\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0 4px;\n}\n\n.content--product--info--top h1 {\n  font-weight: 500;\n  font-size: 16px;\n  display: flex;\n  height: fit-content;\n  align-items: baseline;\n  color: var(--black-text-color);\n  text-align: center;\n  margin-top: 2px;\n}\n\n.content--product--info--bottom {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  align-items: center;\n}\n\n.content--product--info--bottom > div {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 28px;\n  height: 16px;\n  margin: 0 8.5px;\n}\n.content--product--info--bottom > div:last-child {\n  margin-right: 0;\n}\n\n.new-product-button {\n  position: fixed;\n  width: 56px;\n  height: 56px;\n  background-color: #2ac1bc;\n  display: flex;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  right: 16px;\n  bottom: 16px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/normalize.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/normalize.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  -webkit-tap-highlight-color: transparent;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nhtml {\n  background-color: #fff;\n}\n\nbody > #app {\n  border: 1px solid #d7d7d7;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  line-height: 1;\n  font-size: 14px;\n  font-family: sans-serif;\n  height: 568px;\n  width: 320px;\n  background-color: #c0c0c0;\n  overflow-y: scroll;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/public/css/normalize.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;EACxB,wCAAwC;AAC1C;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,cAAc;EACd,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  -webkit-tap-highlight-color: transparent;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nhtml {\n  background-color: #fff;\n}\n\nbody > #app {\n  border: 1px solid #d7d7d7;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  line-height: 1;\n  font-size: 14px;\n  font-family: sans-serif;\n  height: 568px;\n  width: 320px;\n  background-color: #c0c0c0;\n  overflow-y: scroll;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/profile.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/profile.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_basic_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./common/basic_header.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/common/basic_header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_global_color_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./common/global_color.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/common/global_color.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_common_basic_header_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_common_global_color_css__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 0px;\n  border: 1px solid #c0c0c0;\n  display: flex;\n  flex-direction: column;\n}\n\n.back-icon > svg {\n  width: 20px;\n  height: 20px;\n}\n\n.profile-main {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: white;\n  flex-grow: 1;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.profile-main--username {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 34px;\n  margin-bottom: 34px;\n}\n\n.profile-main--logout-btn {\n  text-decoration: none;\n  text-align: center;\n  padding: 10px 16px;\n  background-color: var(--primary1-color);\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/public/css/profile.css"],"names":[],"mappings":"AAGA;EACE,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,uCAAuC;EACvC,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd","sourcesContent":["@import url(\"./common/basic_header.css\");\n@import url(\"./common/global_color.css\");\n\nbody {\n  padding: 0px;\n  border: 1px solid #c0c0c0;\n  display: flex;\n  flex-direction: column;\n}\n\n.back-icon > svg {\n  width: 20px;\n  height: 20px;\n}\n\n.profile-main {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: white;\n  flex-grow: 1;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.profile-main--username {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 34px;\n  margin-bottom: 34px;\n}\n\n.profile-main--logout-btn {\n  text-decoration: none;\n  text-align: center;\n  padding: 10px 16px;\n  background-color: var(--primary1-color);\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/css/signup.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/css/signup.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_basic_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./common/basic_header.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/common/basic_header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_global_color_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./common/global_color.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/common/global_color.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_common_basic_header_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_common_global_color_css__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".back-icon > svg {\n  height: 20px;\n}\n\n.signup-main {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: white;\n  flex-grow: 1;\n  padding-top: 24px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.signup-main--label {\n  padding: 5px;\n  margin-top: 16px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.signup-main--text-input {\n  padding-right: 16px;\n  padding-left: 16px;\n  padding-top: 10px;\n  padding-bottom: 8px;\n  font-weight: 400;\n  font-size: 16px;\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n}\n\n.signup-main--submit-btn {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n  padding: 10px 16px;\n  background-color: var(--primary1-color);\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/public/css/signup.css"],"names":[],"mappings":"AAGA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;EAClB,uCAAuC;EACvC,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd","sourcesContent":["@import url(\"./common/basic_header.css\");\n@import url(\"./common/global_color.css\");\n\n.back-icon > svg {\n  height: 20px;\n}\n\n.signup-main {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: white;\n  flex-grow: 1;\n  padding-top: 24px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.signup-main--label {\n  padding: 5px;\n  margin-top: 16px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.signup-main--text-input {\n  padding-right: 16px;\n  padding-left: 16px;\n  padding-top: 10px;\n  padding-bottom: 8px;\n  font-weight: 400;\n  font-size: 16px;\n  border: 1px solid var(--input-border-color);\n  border-radius: 8px;\n}\n\n.signup-main--submit-btn {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n  padding: 10px 16px;\n  background-color: var(--primary1-color);\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/public/css/login.css":
/*!**********************************!*\
  !*** ./src/public/css/login.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./login.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/login.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/public/css/main.css":
/*!*********************************!*\
  !*** ./src/public/css/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/public/css/normalize.css":
/*!**************************************!*\
  !*** ./src/public/css/normalize.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/public/css/profile.css":
/*!************************************!*\
  !*** ./src/public/css/profile.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./profile.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/profile.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_profile_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/public/css/signup.css":
/*!***********************************!*\
  !*** ./src/public/css/signup.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./signup.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/css/signup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_signup_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/public/svg/category-white.svg":
/*!*******************************************!*\
  !*** ./src/public/svg/category-white.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.33333 4H4.66667C4.29848 4 4 4.29848 4 4.66667V9.33333C4 9.70152 4.29848 10 4.66667 10H9.33333C9.70152 10 10 9.70152 10 9.33333V4.66667C10 4.29848 9.70152 4 9.33333 4Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M9.33333 14H4.66667C4.29848 14 4 14.2985 4 14.6667V19.3333C4 19.7015 4.29848 20 4.66667 20H9.33333C9.70152 20 10 19.7015 10 19.3333V14.6667C10 14.2985 9.70152 14 9.33333 14Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M19.3333 4H14.6667C14.2985 4 14 4.29848 14 4.66667V9.33333C14 9.70152 14.2985 10 14.6667 10H19.3333C19.7015 10 20 9.70152 20 9.33333V4.66667C20 4.29848 19.7015 4 19.3333 4Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M19.3333 14H14.6667C14.2985 14 14 14.2985 14 14.6667V19.3333C14 19.7015 14.2985 20 14.6667 20H19.3333C19.7015 20 20 19.7015 20 19.3333V14.6667C20 14.2985 19.7015 14 19.3333 14Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"

/***/ }),

/***/ "./src/public/svg/chevron-left.svg":
/*!*****************************************!*\
  !*** ./src/public/svg/chevron-left.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 10 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 17L1 9L9 1\" stroke=\"#222222\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"

/***/ }),

/***/ "./src/public/svg/gps-white.svg":
/*!**************************************!*\
  !*** ./src/public/svg/gps-white.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 20 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"

/***/ }),

/***/ "./src/public/svg/menu-white.svg":
/*!***************************************!*\
  !*** ./src/public/svg/menu-white.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 20 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1H19\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M1 7H19\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M1 13H19\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>"

/***/ }),

/***/ "./src/public/svg/profile-white.svg":
/*!******************************************!*\
  !*** ./src/public/svg/profile-white.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 18.3333C18 17.4493 17.6839 17.6014 17.1213 16.9763C16.5587 16.3512 15.7956 16 15 16H9C8.20435 16 7.44129 16.3512 6.87868 16.9763C6.31607 17.6014 6 17.4493 6 18.3333\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></circle></svg>"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/css/normalize.css */ "./src/public/css/normalize.css");


window.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      (0,_router__WEBPACK_IMPORTED_MODULE_0__.navigateTo)(e.target.href);
    }
  });
  (0,_router__WEBPACK_IMPORTED_MODULE_0__.router)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9hcGkvYXV0aC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9hcGkvdXNlci5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9oZWxwZXIvZXZlbnRIZWxwZXJzLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL2hlbHBlci9zZWxlY3RIZWxwZXJzLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3BhZ2UvQWJzdHJhY3RQYWdlLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3BhZ2UvSG9tZVBhZ2UvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wYWdlL0hvbWVQYWdlL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3BhZ2UvSG9tZVBhZ2Uvdmlld3MvTWFpbkhlYWRlclZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvcGFnZS9Mb2dpblBhZ2UvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wYWdlL0xvZ2luUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wYWdlL0xvZ2luUGFnZS92aWV3cy9Mb2dpbkZvcm1WaWV3LmpzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3BhZ2UvUHJvZmlsZVBhZ2UvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wYWdlL1Byb2ZpbGVQYWdlL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3BhZ2UvUHJvZmlsZVBhZ2Uvdmlld3MvUHJvZmlsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvcGFnZS9TaWdudXBQYWdlL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvcGFnZS9TaWdudXBQYWdlL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3BhZ2UvU2lnbnVwUGFnZS92aWV3cy9TaWdudXBGb3JtVmlldy5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wYWdlL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3B1YmxpYy9jc3MvY29tbW9uL2Jhc2ljX2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvcHVibGljL2Nzcy9jb21tb24vZ2xvYmFsX2NvbG9yLmNzcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wdWJsaWMvY3NzL2xvZ2luLmNzcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wdWJsaWMvY3NzL21haW4uY3NzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3B1YmxpYy9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wdWJsaWMvY3NzL3Byb2ZpbGUuY3NzIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3B1YmxpYy9jc3Mvc2lnbnVwLmNzcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wdWJsaWMvY3NzL2xvZ2luLmNzcz82YmZmIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3B1YmxpYy9jc3MvbWFpbi5jc3M/NTRhMCIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wdWJsaWMvY3NzL25vcm1hbGl6ZS5jc3M/YWRkYiIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wdWJsaWMvY3NzL3Byb2ZpbGUuY3NzPzJkYmEiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvcHVibGljL2Nzcy9zaWdudXAuY3NzPzY1ODIiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zyb250Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Zyb250Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zyb250Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wdWJsaWMvc3ZnL2NhdGVnb3J5LXdoaXRlLnN2ZyIsIndlYnBhY2s6Ly9mcm9udC8uL3NyYy9wdWJsaWMvc3ZnL2NoZXZyb24tbGVmdC5zdmciLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvcHVibGljL3N2Zy9ncHMtd2hpdGUuc3ZnIiwid2VicGFjazovL2Zyb250Ly4vc3JjL3B1YmxpYy9zdmcvbWVudS13aGl0ZS5zdmciLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvcHVibGljL3N2Zy9wcm9maWxlLXdoaXRlLnN2ZyIsIndlYnBhY2s6Ly9mcm9udC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mcm9udC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mcm9udC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZnJvbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zyb250Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvZ2luQXN5bmMiLCJpZCIsImNiIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInNpZ251cEFzeW5jIiwibG9jYXRpb24iLCJsb2dvdXRBc3luYyIsImdldFByb2ZpbGVBc3luYyIsInVzZXJuYW1lIiwib24iLCJ0YXJnZXQiLCJldmVudE5hbWUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVtaXQiLCJkZXRhaWwiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInFzIiwic2VsZWN0b3IiLCJzY29wZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInFzQWxsIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsInRhZyIsIkFic3RyYWN0UGFnZSIsImNvbnN0cnVjdG9yIiwicGFyYW1zIiwic2V0VGl0bGUiLCJ0aXRsZSIsInJlbmRlciIsImFmdGVyX3JlbmRlciIsIkNvbnRyb2xsZXIiLCJtYWluSGVhZGVyVmlldyIsInN1YnNjcmliZVZpZXdFdmVudHMiLCJzaG93IiwiSG9tZVBhZ2UiLCJ2aWV3cyIsIk1haW5IZWFkZXJWaWV3IiwiVmlldyIsImVsZW1lbnQiLCJ0ZW1wbGF0ZSIsIlRlbXBsYXRlIiwiZGF0YSIsImlubmVySFRNTCIsImdldEhlYWRlciIsImNhdGVnb3J5U1ZHIiwiZ3BzU1ZHIiwicHJvZmlsZVNWRyIsIm1lbnVTVkciLCJsb2dpbkZvcm1WaWV3IiwibG9naW4iLCJ2YWx1ZSIsIm5hdmlnYXRlVG8iLCJMb2dpblBhZ2UiLCJjaGV2cm9uTGVmdFNWRyIsIkxvZ2luRm9ybVZpZXciLCJpZElucHV0RWxlbWVudCIsImxvZ2luQnV0dG9uRWxlbWVudCIsImJpbmRpbmdFdmVudHMiLCJoYW5kbGVMb2dpbkJ1dHRvbkNsaWNrIiwicHJvZmlsZVZpZXciLCJpbml0IiwidGhlbiIsImxvZ291dCIsIlByb2ZpbGVQYWdlIiwiUHJvZmlsZVZpZXciLCJ1c2VybmFtZUxhYmVsRWxlbWVudCIsImxvZ291dEJ1dHRvbkVsZW1lbnQiLCJzZXRVc2VybmFtZSIsIm5hbWUiLCJpbm5lclRleHQiLCJzaWdudXBGb3JtVmlldyIsImUiLCJzaWdudXAiLCJTaWdudXBGb3JtVmlldyIsImxvY2F0aW9uSW5wdXRFbGVtZW50Iiwic3VibWl0QnV0dG9uRWxlbWVudCIsImhhbmRsZVNpZ251cEJ1dHRvbkNsaWNrIiwib3JpZ2luYWxEaXNwbGF5Iiwic3R5bGUiLCJkaXNwYWx5IiwiaGlkZSIsImRpc3BsYXkiLCJwYXRoVG9SZWdleCIsInBhdGgiLCJSZWdFeHAiLCJyZXBsYWNlIiwiZ2V0UGFyYW1zIiwibWF0Y2giLCJ2YWx1ZXMiLCJyZXN1bHQiLCJzbGljZSIsImtleXMiLCJyb3V0ZSIsIm1hdGNoQWxsIiwibWFwIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJrZXkiLCJpIiwidXJsIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInJvdXRlciIsInJvdXRlcyIsInZpZXciLCJTaWdudXBQYWdlIiwicG90ZW50aWFsTWF0Y2hlcyIsInBhdGhuYW1lIiwiZmluZCIsInBvdGVudGlhbE1hdGNoIiwid2luZG93IiwiYm9keSIsIm1hdGNoZXMiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsRUFBU0MsRUFBVCxLQUN4QixJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9CQyxZQUFVLENBQUMsTUFBTTtBQUNmQyxXQUFPLENBQUNDLEdBQVIsQ0FBYSxzQkFBcUJQLEVBQUcsRUFBckM7QUFDQUMsTUFBRTtBQUNILEdBSFMsRUFHUCxHQUhPLENBQVYsQ0FEK0IsQ0FLL0I7QUFDQTtBQUNBO0FBQ0E7QUFD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T0FBL0IsRUFBeUNnRSxDQUFELElBQU87QUFDN0MsUUFBSUEsQ0FBQyxDQUFDbkUsTUFBRixDQUFTNEcsT0FBVCxDQUFpQixhQUFqQixDQUFKLEVBQXFDO0FBQ25DekMsT0FBQyxDQUFDMEMsY0FBRjtBQUNBOUQseURBQVUsQ0FBQ29CLENBQUMsQ0FBQ25FLE1BQUYsQ0FBUzhHLElBQVYsQ0FBVjtBQUNEO0FBQ0YsR0FMRDtBQU9BWixpREFBTTtBQUNQLENBVEQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbG9naW5Bc3luYyA9ICh7IGlkIH0sIGNiKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgTG9naW4gUmVxdWVzdCB3aXRoICR7aWR9YCk7XG4gICAgICBjYigpO1xuICAgIH0sIDUwMCk7XG4gICAgLy8gVE9ETzogQ2hhbmdlIFJlYWwgRmV0Y2hcbiAgICAvLyBmZXRjaChcIi9sb2dpblwiLCB7XG4gICAgLy8gICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgICBpZCxcbiAgICAvLyAgIH0pLFxuICAgIC8vIH0pXG4gICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAvLyAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgLy8gICAgICAgLy8gVE9ETzogbmF2aWdhdG9yXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goKGUpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZSk7XG4gICAgLy8gICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaWdudXBBc3luYyA9ICh7IGlkLCBsb2NhdGlvbiB9LCBjYikgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFNpZ251cCBSZXF1ZXN0IHdpdGggaWQ6ICR7aWR9LCBsb2NhdGlvbjoke2xvY2F0aW9ufWApO1xuICAgICAgY2IoKTtcbiAgICB9LCA1MDApO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dEFzeW5jID0gKGNiKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgTG9nb3V0YCk7XG4gICAgICBjYigpO1xuICAgIH0sIDUwMCk7XG4gIH0pO1xuIiwiZXhwb3J0IGNvbnN0IGdldFByb2ZpbGVBc3luYyA9ICgpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoe1xuICAgICAgICB1c2VybmFtZTogXCJXb293YWhhblwiLFxuICAgICAgfSk7XG4gICAgfSwgNTAwKTtcbiAgfSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gb24odGFyZ2V0LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXQodGFyZ2V0LCBldmVudE5hbWUsIGRldGFpbCkge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgZGV0YWlsIH0pO1xuICB0YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcXMoc2VsZWN0b3IsIHNjb3BlID0gZG9jdW1lbnQpIHtcbiAgaWYgKCFzZWxlY3RvcikgdGhyb3cgXCJubyBzZWxlY3RvclwiO1xuXG4gIHJldHVybiBzY29wZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHFzQWxsKHNlbGVjdG9yLCBzY29wZSA9IGRvY3VtZW50KSB7XG4gIGlmICghc2VsZWN0b3IpIHRocm93IFwibm8gc2VsZWN0b3JcIjtcblxuICByZXR1cm4gQXJyYXkuZnJvbShzY29wZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG4iLCJjb25zdCB0YWcgPSBcIltBYnN0cmFjdFBhZ2VdXCI7XG5jbGFzcyBBYnN0cmFjdFBhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZyh0YWcsIFwiY29uc3RydWN0b3JcIik7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZSkge1xuICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBhc3luYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBhc3luYyBhZnRlcl9yZW5kZXIoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdFBhZ2U7XG4iLCJjb25zdCB0YWcgPSBcIltIb21lUGFnZSBDb250cm9sbGVyXVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHsgbWFpbkhlYWRlclZpZXcgfSkge1xuICAgIGNvbnNvbGUubG9nKHRhZyk7XG4gICAgdGhpcy5tYWluSGVhZGVyVmlldyA9IG1haW5IZWFkZXJWaWV3O1xuICAgIHRoaXMuc3Vic2NyaWJlVmlld0V2ZW50cygpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzdWJzY3JpYmVWaWV3RXZlbnRzKCkge1xuICAgIC8vIFRPRE86IGJpbmRpbmcgZXZlbnRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLm1haW5IZWFkZXJWaWV3LnNob3coKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0UGFnZSBmcm9tIFwiLi4vQWJzdHJhY3RQYWdlXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyXCI7XG5pbXBvcnQgTWFpbkhlYWRlclZpZXcgZnJvbSBcIi4vdmlld3MvTWFpbkhlYWRlclZpZXdcIjtcblxuaW1wb3J0IFwiQC9wdWJsaWMvY3NzL21haW4uY3NzXCI7XG5cbmNvbnN0IHRhZyA9IFwiW0hvbWVQYWdlXVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIEFic3RyYWN0UGFnZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgdGhpcy5zZXRUaXRsZShcIkhvbWVcIik7XG4gIH1cblxuICBhc3luYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwibWFpbi1oZWFkZXJcIiBjbGFzcz1cIm1haW4taGVhZGVyXCI+PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGFzeW5jIGFmdGVyX3JlbmRlcigpIHtcbiAgICBjb25zdCB2aWV3cyA9IHtcbiAgICAgIG1haW5IZWFkZXJWaWV3OiBuZXcgTWFpbkhlYWRlclZpZXcoKSxcbiAgICB9O1xuICAgIG5ldyBDb250cm9sbGVyKHZpZXdzKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZpZXcgZnJvbSBcIkAvcGFnZS9WaWV3XCI7XG5cbmltcG9ydCB7IHFzIH0gZnJvbSBcIkAvaGVscGVyL3NlbGVjdEhlbHBlcnNcIjtcblxuaW1wb3J0IGNhdGVnb3J5U1ZHIGZyb20gXCJAL3B1YmxpYy9zdmcvY2F0ZWdvcnktd2hpdGUuc3ZnXCI7XG5pbXBvcnQgZ3BzU1ZHIGZyb20gXCJAL3B1YmxpYy9zdmcvZ3BzLXdoaXRlLnN2Z1wiO1xuaW1wb3J0IHByb2ZpbGVTVkcgZnJvbSBcIkAvcHVibGljL3N2Zy9wcm9maWxlLXdoaXRlLnN2Z1wiO1xuaW1wb3J0IG1lbnVTVkcgZnJvbSBcIkAvcHVibGljL3N2Zy9tZW51LXdoaXRlLnN2Z1wiO1xuXG5jb25zdCB0YWcgPSBcIltNYWluSGVhZGVyXVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluSGVhZGVyVmlldyBleHRlbmRzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50ID0gcXMoXCIjbWFpbi1oZWFkZXJcIiksIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKCkpIHtcbiAgICBjb25zb2xlLmxvZyh0YWcsIFwiY29uc3RydWN0b3JcIik7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2hvdyhkYXRhID0gW10pIHtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZS5nZXRIZWFkZXIoKTtcbiAgICBzdXBlci5zaG93KCk7XG4gIH1cbn1cblxuY2xhc3MgVGVtcGxhdGUge1xuICBnZXRIZWFkZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1oZWFkZXItLWxlZnRcIiBocmVmPVwiL2NhdGVnb3J5Lmh0bWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeS1pY29uXCI+JHtjYXRlZ29yeVNWR308L2Rpdj4gIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWhlYWRlci0tY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9jYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uLWljb25cIj4ke2dwc1NWR308L2Rpdj5cbiAgICAgICAgPHN0cm9uZz4g7Jet7IK864+ZIDwvc3Ryb25nPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4taGVhZGVyLS1yaWdodFwiPlxuICAgICAgPGEgaHJlZj1cIi9sb2dpblwiIGRhdGEtbGluaz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtaWNvblwiPiR7cHJvZmlsZVNWR308L2Rpdj4gIFxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIi9tZW51XCIgZGF0YS1saW5rPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pY29uXCI+JHttZW51U1ZHfTwvZGl2PiAgXG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgICAgIGA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGxvZ2luQXN5bmMgfSBmcm9tIFwiQC9hcGkvYXV0aFwiO1xuaW1wb3J0IHsgbmF2aWdhdGVUbyB9IGZyb20gXCJAL3JvdXRlclwiO1xuXG5jb25zdCB0YWcgPSBcIltMb2dpbiBDb250cm9sbGVyXVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHsgbG9naW5Gb3JtVmlldyB9KSB7XG4gICAgY29uc29sZS5sb2codGFnKTtcbiAgICB0aGlzLmxvZ2luRm9ybVZpZXcgPSBsb2dpbkZvcm1WaWV3O1xuXG4gICAgdGhpcy5zdWJzY3JpYmVWaWV3RXZlbnRzKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHN1YnNjcmliZVZpZXdFdmVudHMoKSB7XG4gICAgdGhpcy5sb2dpbkZvcm1WaWV3Lm9uKFwiQGxvZ2luXCIsIChldmVudCkgPT4gdGhpcy5sb2dpbihldmVudC5kZXRhaWwudmFsdWUpKTtcbiAgfVxuXG4gIGxvZ2luKGlkKSB7XG4gICAgbG9naW5Bc3luYyh7IGlkIH0sICgpID0+IHtcbiAgICAgIG5hdmlnYXRlVG8oXCIvXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMubG9naW5Gb3JtVmlldy5zaG93KCk7XG4gIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdFBhZ2UgZnJvbSBcIi4uL0Fic3RyYWN0UGFnZVwiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlclwiO1xuaW1wb3J0IExvZ2luRm9ybVZpZXcgZnJvbSBcIi4vdmlld3MvTG9naW5Gb3JtVmlld1wiO1xuXG5pbXBvcnQgY2hldnJvbkxlZnRTVkcgZnJvbSBcIkAvcHVibGljL3N2Zy9jaGV2cm9uLWxlZnQuc3ZnXCI7XG5cbmltcG9ydCBcIkAvcHVibGljL2Nzcy9sb2dpbi5jc3NcIjtcblxuY29uc3QgdGFnID0gXCJbTG9naW5QYWdlXVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBBYnN0cmFjdFBhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZyh0YWcsIFwiY29udHJ1Y3RvclwiKTtcbiAgICBzdXBlcihwYXJhbXMpO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8YSBjbGFzcz1cImhlYWRlci0tbGVmdFwiIGhyZWY9XCIvXCIgZGF0YS1saW5rPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFjay1pY29uXCI+JHtjaGV2cm9uTGVmdFNWR308L2Rpdj5cbiAgICAgIDwvYT5cbiAgICAgIDxoMSBjbGFzcz1cImhlYWRlci0tY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLS1jZW50ZXItLXRpdGxlXCI+IOuhnOq3uOyduCA8L3NwYW4+XG4gICAgICA8L2gxPlxuICAgIDwvaGVhZGVyPlxuICAgIDxtYWluIGlkPVwibG9naW4tZm9ybVwiIGNsYXNzPVwibG9naW4tbWFpblwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPVwiaWQtaW5wdXRcIlxuICAgICAgICBjbGFzcz1cImxvZ2luLW1haW4tLXRleHQtaW5wdXRcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7JWE7J2065SU66W8IOyeheugpe2VmOyEuOyalFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBpZD1cImxvZ2luLWJ0blwiIGNsYXNzPVwibG9naW4tbWFpbi0tc3VibWl0LWJ0blwiPuuhnOq3uOyduDwvZGl2PlxuICAgICAgPGEgY2xhc3M9XCJsb2dpbi1tYWluLS1saW5rXCIgaHJlZj1cIi9zaWdudXBcIiBkYXRhLWxpbms+7ZqM7JuQ6rCA7J6FPC9hPlxuICAgIDwvbWFpbj5cbiAgICBgO1xuICB9XG5cbiAgYXN5bmMgYWZ0ZXJfcmVuZGVyKCkge1xuICAgIGNvbnN0IHZpZXdzID0ge1xuICAgICAgbG9naW5Gb3JtVmlldzogbmV3IExvZ2luRm9ybVZpZXcoKSxcbiAgICB9O1xuICAgIG5ldyBDb250cm9sbGVyKHZpZXdzKTtcbiAgfVxufVxuIiwiaW1wb3J0IFZpZXcgZnJvbSBcIkAvcGFnZS9WaWV3XCI7XG5cbmltcG9ydCB7IHFzIH0gZnJvbSBcIkAvaGVscGVyL3NlbGVjdEhlbHBlcnNcIjtcbmltcG9ydCB7IG9uIH0gZnJvbSBcIkAvaGVscGVyL2V2ZW50SGVscGVyc1wiO1xuY29uc3QgdGFnID0gXCJbQmFzaWNIZWFkZXJWaWV3XVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkZvcm1WaWV3IGV4dGVuZHMgVmlldyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQgPSBxcyhcIiNsb2dpbi1mb3JtXCIpKSB7XG4gICAgY29uc29sZS5sb2codGFnLCBcImNvbnN0cnVjdG9yXCIpO1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5pZElucHV0RWxlbWVudCA9IHFzKFwiI2lkLWlucHV0XCIsIHRoaXMuZWxlbWVudCk7XG4gICAgdGhpcy5sb2dpbkJ1dHRvbkVsZW1lbnQgPSBxcyhcIiNsb2dpbi1idG5cIiwgdGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLmJpbmRpbmdFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRpbmdFdmVudHMoKSB7XG4gICAgb24odGhpcy5sb2dpbkJ1dHRvbkVsZW1lbnQsIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5oYW5kbGVMb2dpbkJ1dHRvbkNsaWNrKCkpO1xuICB9XG5cbiAgaGFuZGxlTG9naW5CdXR0b25DbGljaygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaWRJbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgdGhpcy5lbWl0KFwiQGxvZ2luXCIsIHsgdmFsdWUgfSk7IC8vIExvZ2luIEV2ZW50IERpcGF0Y2ggdG8gQ29udHJvbGxlclxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBzdXBlci5zaG93KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGxvZ291dEFzeW5jIH0gZnJvbSBcIkAvYXBpL2F1dGhcIjtcbmltcG9ydCB7IGdldFByb2ZpbGVBc3luYyB9IGZyb20gXCJAL2FwaS91c2VyXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvIH0gZnJvbSBcIkAvcm91dGVyXCI7XG5cbmNvbnN0IHRhZyA9IFwiW0xvZ2luIENvbnRyb2xsZXJdXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoeyBwcm9maWxlVmlldyB9KSB7XG4gICAgY29uc29sZS5sb2codGFnKTtcbiAgICB0aGlzLnByb2ZpbGVWaWV3ID0gcHJvZmlsZVZpZXc7XG5cbiAgICB0aGlzLnN1YnNjcmliZVZpZXdFdmVudHMoKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBHZXQgVXNlcm5hbWUgZnJvbSBzZXJ2ZXJcbiAgICBnZXRQcm9maWxlQXN5bmMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSBkYXRhO1xuICAgICAgdGhpcy5yZW5kZXIodXNlcm5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlVmlld0V2ZW50cygpIHtcbiAgICB0aGlzLnByb2ZpbGVWaWV3Lm9uKFwiQGxvZ291dFwiLCAoZXZlbnQpID0+IHRoaXMubG9nb3V0KCkpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIC8vIFRPRE86IHN0YXJ0IHNwaW5uZXJcbiAgICBsb2dvdXRBc3luYygoKSA9PiB7XG4gICAgICBuYXZpZ2F0ZVRvKFwiL2xvZ2luXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKHVzZXJuYW1lID0gXCJcIikge1xuICAgIHRoaXMucHJvZmlsZVZpZXcuc2hvdyh1c2VybmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdFBhZ2UgZnJvbSBcIi4uL0Fic3RyYWN0UGFnZVwiO1xuaW1wb3J0IFByb2ZpbGVWaWV3IGZyb20gXCIuL3ZpZXdzL1Byb2ZpbGVWaWV3XCI7XG5cbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJcIjtcblxuaW1wb3J0IGNoZXZyb25MZWZ0U1ZHIGZyb20gXCJAL3B1YmxpYy9zdmcvY2hldnJvbi1sZWZ0LnN2Z1wiO1xuXG5pbXBvcnQgXCJAL3B1YmxpYy9jc3MvcHJvZmlsZS5jc3NcIjtcblxuY29uc3QgdGFnID0gXCJbUHJvZmlsZVBhZ2VdXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVQYWdlIGV4dGVuZHMgQWJzdHJhY3RQYWdlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2codGFnLCBcImNvbnRydWN0b3JcIik7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgfVxuXG4gIGFzeW5jIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYCA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJoZWFkZXItLWxlZnRcIiBocmVmPVwiL2xvZ2luXCIgZGF0YS1saW5rPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrLWljb25cIj4ke2NoZXZyb25MZWZ0U1ZHfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXItLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLS1jZW50ZXItLXRpdGxlXCI+IOuCtCDqs4TsoJUgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxtYWluIGlkPVwicHJvZmlsZS12aWV3XCIgY2xhc3M9XCJwcm9maWxlLW1haW5cIj5cbiAgICAgICAgICAgICAgICA8aDEgIGlkPVwidXNlcm5hbWUtbGFiZWxcIiBjbGFzcz1cInByb2ZpbGUtbWFpbi0tdXNlcm5hbWVcIj5Vc2VybmFtZTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ291dC1idG5cIiBjbGFzcz1cInByb2ZpbGUtbWFpbi0tbG9nb3V0LWJ0blwiPuuhnOq3uOyVhOybgzwvZGl2PlxuICAgICAgICAgICAgPC9tYWluPmA7XG4gIH1cblxuICBhc3luYyBhZnRlcl9yZW5kZXIoKSB7XG4gICAgY29uc3Qgdmlld3MgPSB7XG4gICAgICBwcm9maWxlVmlldzogbmV3IFByb2ZpbGVWaWV3KCksXG4gICAgfTtcbiAgICBuZXcgQ29udHJvbGxlcih2aWV3cyk7XG4gIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gXCJAL3BhZ2UvVmlld1wiO1xuXG5pbXBvcnQgeyBxcyB9IGZyb20gXCJAL2hlbHBlci9zZWxlY3RIZWxwZXJzXCI7XG5pbXBvcnQgeyBvbiB9IGZyb20gXCJAL2hlbHBlci9ldmVudEhlbHBlcnNcIjtcbmNvbnN0IHRhZyA9IFwiW1Byb2ZpbGVWaWV3XVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlVmlldyBleHRlbmRzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50ID0gcXMoXCIjcHJvZmlsZS12aWV3XCIpKSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG5cbiAgICB0aGlzLnVzZXJuYW1lTGFiZWxFbGVtZW50ID0gcXMoXCIjdXNlcm5hbWUtbGFiZWxcIiwgdGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLmxvZ291dEJ1dHRvbkVsZW1lbnQgPSBxcyhcIiNsb2dvdXQtYnRuXCIsIHRoaXMuZWxlbWVudCk7XG5cbiAgICB0aGlzLmJpbmRpbmdFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRpbmdFdmVudHMoKSB7XG4gICAgb24odGhpcy5sb2dvdXRCdXR0b25FbGVtZW50LCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZW1pdChcIkBsb2dvdXRcIik7XG4gICAgfSk7XG4gIH1cblxuICBzZXRVc2VybmFtZShuYW1lKSB7XG4gICAgdGhpcy51c2VybmFtZUxhYmVsRWxlbWVudC5pbm5lclRleHQgPSBuYW1lO1xuICB9XG5cbiAgc2hvdyh1c2VybmFtZSkge1xuICAgIHN1cGVyLnNob3coKTtcbiAgICB0aGlzLnNldFVzZXJuYW1lKHVzZXJuYW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2lnbnVwQXN5bmMgfSBmcm9tIFwiQC9hcGkvYXV0aFwiO1xuaW1wb3J0IHsgbmF2aWdhdGVUbyB9IGZyb20gXCJAL3JvdXRlclwiO1xuXG5jb25zdCB0YWcgPSBcIltTaWdudXAgQ29udHJvbGxlcl1cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcih7IHNpZ251cEZvcm1WaWV3IH0pIHtcbiAgICB0aGlzLnNpZ251cEZvcm1WaWV3ID0gc2lnbnVwRm9ybVZpZXc7XG4gICAgdGhpcy5zdWJzY3JpYmVWaWV3RXZlbnRzKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHN1YnNjcmliZVZpZXdFdmVudHMoKSB7XG4gICAgdGhpcy5zaWdudXBGb3JtVmlldy5vbihcIkBzaWdudXBcIiwgKGUpID0+IHRoaXMuc2lnbnVwKGUuZGV0YWlsLnZhbHVlKSk7XG4gIH1cblxuICBzaWdudXAoeyBpZCwgbG9jYXRpb24gfSkge1xuICAgIHNpZ251cEFzeW5jKFxuICAgICAge1xuICAgICAgICBpZCxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZVRvKFwiL3Byb2ZpbGVcIik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNpZ251cEZvcm1WaWV3LnNob3coKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0UGFnZSBmcm9tIFwiLi4vQWJzdHJhY3RQYWdlXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9Db250cm9sbGVyXCI7XG5pbXBvcnQgY2hldnJvbkxlZnRTVkcgZnJvbSBcIkAvcHVibGljL3N2Zy9jaGV2cm9uLWxlZnQuc3ZnXCI7XG5cbmltcG9ydCBcIkAvcHVibGljL2Nzcy9zaWdudXAuY3NzXCI7XG5pbXBvcnQgU2lnbnVwRm9ybVZpZXcgZnJvbSBcIi4vdmlld3MvU2lnbnVwRm9ybVZpZXdcIjtcblxuY29uc3QgdGFnID0gXCJbTG9naW5QYWdlXVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBBYnN0cmFjdFBhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZyh0YWcsIFwiY29udHJ1Y3RvclwiKTtcbiAgICBzdXBlcihwYXJhbXMpO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG4gIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICA8YSBjbGFzcz1cImhlYWRlci0tbGVmdFwiIGhyZWY9XCIvbG9naW5cIiBkYXRhLWxpbms+XG4gICAgPGRpdiBjbGFzcz1cImJhY2staWNvblwiPiR7Y2hldnJvbkxlZnRTVkd9PC9kaXY+XG4gICAgPC9hPlxuICAgIDxoMSBjbGFzcz1cImhlYWRlci0tY2VudGVyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci0tY2VudGVyLS10aXRsZVwiPiDtmozsm5DqsIDsnoUgPC9zcGFuPlxuICAgIDwvaDE+XG4gIDwvaGVhZGVyPlxuICA8bWFpbiBpZD1cInNpZ251cC1mb3JtXCIgY2xhc3M9XCJzaWdudXAtbWFpblwiPlxuICAgIDxsYWJlbCBmb3I9XCJpZC1pbnB1dFwiIGNsYXNzPVwic2lnbnVwLW1haW4tLWxhYmVsXCI+7JWE7J2065SUPC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIGlkPVwiaWQtaW5wdXRcIlxuICAgICAgY2xhc3M9XCJzaWdudXAtbWFpbi0tdGV4dC1pbnB1dFwiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIuusuOyekCwg7Iir7J6QIOyhsO2VqSAyMOyekCDsnbTsg4FcIlxuICAgIC8+XG5cbiAgICA8bGFiZWwgZm9yPVwibG9jYXRpb24taW5wdXRcIiBjbGFzcz1cInNpZ251cC1tYWluLS1sYWJlbFwiPuyasOumrCDrj5nrhKQ8L2xhYmVsPlxuICAgIDxpbnB1dFxuICAgICAgaWQ9XCJsb2NhdGlvbi1pbnB1dFwiXG4gICAgICBjbGFzcz1cInNpZ251cC1tYWluLS10ZXh0LWlucHV0XCJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIHBsYWNlaG9sZGVyPVwi7IucLeq1rCDsoJzsmbgsIOuPmeunjCDsnoXroKVcIlxuICAgIC8+XG4gICAgPGRpdiBpZD1cInNpZ251cC1idG5cIiBjbGFzcz1cInNpZ251cC1tYWluLS1zdWJtaXQtYnRuXCI+7ZqM7JuQ6rCA7J6FPC9kaXY+XG4gIDwvbWFpbj5cbiAgICBgO1xuICB9XG5cbiAgYXN5bmMgYWZ0ZXJfcmVuZGVyKCkge1xuICAgIGNvbnN0IHZpZXdzID0ge1xuICAgICAgc2lnbnVwRm9ybVZpZXc6IG5ldyBTaWdudXBGb3JtVmlldygpLFxuICAgIH07XG4gICAgbmV3IENvbnRyb2xsZXIodmlld3MpO1xuICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9wYWdlL1ZpZXdcIjtcblxuaW1wb3J0IHsgcXMgfSBmcm9tIFwiQC9oZWxwZXIvc2VsZWN0SGVscGVyc1wiO1xuaW1wb3J0IHsgb24gfSBmcm9tIFwiQC9oZWxwZXIvZXZlbnRIZWxwZXJzXCI7XG5jb25zdCB0YWcgPSBcIltCYXNpY0hlYWRlclZpZXddXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ251cEZvcm1WaWV3IGV4dGVuZHMgVmlldyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQgPSBxcyhcIiNzaWdudXAtZm9ybVwiKSkge1xuICAgIGNvbnNvbGUubG9nKHRhZywgXCJjb25zdHJ1Y3RvclwiKTtcbiAgICBzdXBlcihlbGVtZW50KTtcblxuICAgIHRoaXMuaWRJbnB1dEVsZW1lbnQgPSBxcyhcIiNpZC1pbnB1dFwiLCB0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMubG9jYXRpb25JbnB1dEVsZW1lbnQgPSBxcyhcIiNsb2NhdGlvbi1pbnB1dFwiLCB0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuc3VibWl0QnV0dG9uRWxlbWVudCA9IHFzKFwiI3NpZ251cC1idG5cIiwgdGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLmJpbmRpbmdFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRpbmdFdmVudHMoKSB7XG4gICAgb24odGhpcy5zdWJtaXRCdXR0b25FbGVtZW50LCBcImNsaWNrXCIsICgpID0+IHRoaXMuaGFuZGxlU2lnbnVwQnV0dG9uQ2xpY2soKSk7XG4gIH1cblxuICBoYW5kbGVTaWdudXBCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuaWRJbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uSW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIHRoaXMuZW1pdChcIkBzaWdudXBcIiwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgc3VwZXIuc2hvdygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBvbiwgZW1pdCB9IGZyb20gXCJAL2hlbHBlci9ldmVudEhlbHBlcnNcIjtcblxuY29uc3QgdGFnID0gXCJbVmlld11cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyh0YWcsIFwiY29uc3RydWN0b3JcIik7XG5cbiAgICBpZiAoIWVsZW1lbnQpIHRocm93IFwibm8gZWxlbWVudFwiO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9yaWdpbmFsRGlzcGxheSA9IHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwYWx5IHx8IFwiXCI7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLm9yaWdpbmFsRGlzcGxheTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIG9uKHRoaXMuZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgZW1pdCh0aGlzLmVsZW1lbnQsIGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9wYWdlL0hvbWVQYWdlXCI7XG5pbXBvcnQgTG9naW5QYWdlIGZyb20gXCIuL3BhZ2UvTG9naW5QYWdlXCI7XG5pbXBvcnQgU2lnbnVwUGFnZSBmcm9tIFwiLi9wYWdlL1NpZ251cFBhZ2VcIjtcbmltcG9ydCBQcm9maWxlUGFnZSBmcm9tIFwiLi9wYWdlL1Byb2ZpbGVQYWdlXCI7XG5cbmNvbnN0IHBhdGhUb1JlZ2V4ID0gKHBhdGgpID0+XG4gIG5ldyBSZWdFeHAoXCJeXCIgKyBwYXRoLnJlcGxhY2UoL1xcLy9nLCBcIlxcXFwvXCIpLnJlcGxhY2UoLzpcXHcrL2csIFwiKC4rKVwiKSArIFwiJFwiKTtcblxuY29uc3QgZ2V0UGFyYW1zID0gKG1hdGNoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IG1hdGNoLnJlc3VsdC5zbGljZSgxKTsgLy8gZXhjbHVkZSBwYXRoIG1hdGNoaW5nXG4gIGNvbnN0IGtleXMgPSBBcnJheS5mcm9tKG1hdGNoLnJvdXRlLnBhdGgubWF0Y2hBbGwoLzooXFx3KykvZykpLm1hcChcbiAgICAocmVzdWx0KSA9PiByZXN1bHRbMV1cbiAgKTtcblxuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIGtleXMubWFwKChrZXksIGkpID0+IHtcbiAgICAgIHJldHVybiBba2V5LCB2YWx1ZXNbaV1dO1xuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGVUbyA9ICh1cmwpID0+IHtcbiAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdXJsKTtcbiAgcm91dGVyKCk7XG59O1xuXG5leHBvcnQgY29uc3Qgcm91dGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIi9cIiwgdmlldzogSG9tZVBhZ2UgfSxcbiAgICB7IHBhdGg6IFwiL2xvZ2luXCIsIHZpZXc6IExvZ2luUGFnZSB9LFxuICAgIHsgcGF0aDogXCIvc2lnbnVwXCIsIHZpZXc6IFNpZ251cFBhZ2UgfSxcbiAgICB7IHBhdGg6IFwiL3Byb2ZpbGVcIiwgdmlldzogUHJvZmlsZVBhZ2UgfSxcbiAgXTtcblxuICBjb25zdCBwb3RlbnRpYWxNYXRjaGVzID0gcm91dGVzLm1hcCgocm91dGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgcmVzdWx0OiBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaChwYXRoVG9SZWdleChyb3V0ZS5wYXRoKSksXG4gICAgfTtcbiAgfSk7XG5cbiAgbGV0IG1hdGNoID0gcG90ZW50aWFsTWF0Y2hlcy5maW5kKFxuICAgIChwb3RlbnRpYWxNYXRjaCkgPT4gcG90ZW50aWFsTWF0Y2gucmVzdWx0ICE9PSBudWxsXG4gICk7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIG1hdGNoID0ge1xuICAgICAgcm91dGU6IHJvdXRlc1swXSxcbiAgICAgIHJlc3VsdDogW2xvY2F0aW9uLnBhdGhuYW1lXSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgdmlldyA9IG5ldyBtYXRjaC5yb3V0ZS52aWV3KGdldFBhcmFtcyhtYXRjaCkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKS5pbm5lckhUTUwgPSBhd2FpdCB2aWV3LnJlbmRlcigpO1xuXG4gIGF3YWl0IHZpZXcuYWZ0ZXJfcmVuZGVyKCk7XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBoZWlnaHQ6IDU2cHg7XFxufVxcblxcbi5oZWFkZXItLWxlZnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjBweDtcXG59XFxuXFxuLmhlYWRlci0tY2VudGVyLS10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGVyLS1yaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3B1YmxpYy9jc3MvY29tbW9uL2Jhc2ljX2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBoZWlnaHQ6IDU2cHg7XFxufVxcblxcbi5oZWFkZXItLWxlZnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjBweDtcXG59XFxuXFxuLmhlYWRlci0tY2VudGVyLS10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGVyLS1yaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1oZWFkZXItYmctY29sb3I6ICNmNmY2ZjY7XFxuICAtLWlucHV0LWJvcmRlci1jb2xvcjogI2Q3ZDdkNztcXG4gIC0tcHJpbWFyeTEtY29sb3I6ICMyYWMxYmM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wdWJsaWMvY3NzL2NvbW1vbi9nbG9iYWxfY29sb3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1oZWFkZXItYmctY29sb3I6ICNmNmY2ZjY7XFxuICAtLWlucHV0LWJvcmRlci1jb2xvcjogI2Q3ZDdkNztcXG4gIC0tcHJpbWFyeTEtY29sb3I6ICMyYWMxYmM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tb24vYmFzaWNfaGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1vbi9nbG9iYWxfY29sb3IuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYmFjay1pY29uID4gc3ZnIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmxvZ2luLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuLmxvZ2luLW1haW4tLXRleHQtaW5wdXQge1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubG9naW4tbWFpbi0tc3VibWl0LWJ0biB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeTEtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvZ2luLW1haW4tLWxpbmsge1xcbiAgbWFyZ2luLXRvcDogMzRweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zdmctY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHVibGljL2Nzcy9sb2dpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1COztFQUVuQixnQkFBZ0I7RUFDaEIsZUFBZTs7RUFFZiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCIuL2NvbW1vbi9iYXNpY19oZWFkZXIuY3NzXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcIi4vY29tbW9uL2dsb2JhbF9jb2xvci5jc3NcXFwiKTtcXG5cXG4uYmFjay1pY29uID4gc3ZnIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmxvZ2luLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuLmxvZ2luLW1haW4tLXRleHQtaW5wdXQge1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG5cXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubG9naW4tbWFpbi0tc3VibWl0LWJ0biB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeTEtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvZ2luLW1haW4tLWxpbmsge1xcbiAgbWFyZ2luLXRvcDogMzRweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zdmctY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICMyYWMxYmM7XFxuICAtLXByaW1hcnktY29sb3ItbGlnaHQ6ICNhMGUxZTA7XFxuICAtLXByaW1hcnktY29sb3ItZGFyazogIzIxOWE5NTtcXG4gIC0tZ3JheS10ZXh0LWNvbG9yOiAjODg4O1xcbiAgLS1ibGFjay10ZXh0LWNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWMxYmM7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciBpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1haW4taGVhZGVyLS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWhlYWRlci0tY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnktaWNvbiA+IHN2ZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLmxvY2F0aW9uLWljb24gPiBzdmcge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wcm9maWxlLWljb24gPiBzdmcsXFxuLm1lbnUtaWNvbiA+IHN2ZyB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLm1haW4taGVhZGVyIC5sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItLXJpZ2h0ID4gKiB7XFxuICBtYXJnaW46IDAgOS41cHg7XFxufVxcblxcbi5tYWluLWhlYWRlci0tcmlnaHQgPiA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5tYWluLWhlYWRlci0tcmlnaHQgPiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMzlweDtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0LS1pbmZvLS10b3Age1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLXRvcCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAycHggMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0LS1pbmZvLS10b3AgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLXRvcCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0LS1pbmZvLS10b3AtLWludGVyZXN0IHtcXG4gIHdpZHRoOiAyMXB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4uY29udGVudC0tcHJvZHVjdC0taW5mby0tdG9wLS1pbnRlcmVzdCA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLXRvcCA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYge1xcbiAgY29sb3I6IHZhcigtLWdyYXktdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29udGVudC0tcHJvZHVjdC0taW5mby0tdG9wID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0LS1pbmZvLS10b3AgLmxvY2F0aW9uOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4oiZXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW46IDAgNHB4O1xcbn1cXG5cXG4uY29udGVudC0tcHJvZHVjdC0taW5mby0tdG9wIGgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjay10ZXh0LWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC0tcHJvZHVjdC0taW5mby0tYm90dG9tID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMCA4LjVweDtcXG59XFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLWJvdHRvbSA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLm5ldy1wcm9kdWN0LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogNTZweDtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWMxYmM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJpZ2h0OiAxNnB4O1xcbiAgYm90dG9tOiAxNnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHVibGljL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICMyYWMxYmM7XFxuICAtLXByaW1hcnktY29sb3ItbGlnaHQ6ICNhMGUxZTA7XFxuICAtLXByaW1hcnktY29sb3ItZGFyazogIzIxOWE5NTtcXG4gIC0tZ3JheS10ZXh0LWNvbG9yOiAjODg4O1xcbiAgLS1ibGFjay10ZXh0LWNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWMxYmM7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciBpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1haW4taGVhZGVyLS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWhlYWRlci0tY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnktaWNvbiA+IHN2ZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLmxvY2F0aW9uLWljb24gPiBzdmcge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wcm9maWxlLWljb24gPiBzdmcsXFxuLm1lbnUtaWNvbiA+IHN2ZyB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLm1haW4taGVhZGVyIC5sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItLXJpZ2h0ID4gKiB7XFxuICBtYXJnaW46IDAgOS41cHg7XFxufVxcblxcbi5tYWluLWhlYWRlci0tcmlnaHQgPiA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5tYWluLWhlYWRlci0tcmlnaHQgPiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMzlweDtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0LS1pbmZvLS10b3Age1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLXRvcCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAycHggMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0LS1pbmZvLS10b3AgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLXRvcCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0LS1pbmZvLS10b3AtLWludGVyZXN0IHtcXG4gIHdpZHRoOiAyMXB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4uY29udGVudC0tcHJvZHVjdC0taW5mby0tdG9wLS1pbnRlcmVzdCA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLXRvcCA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYge1xcbiAgY29sb3I6IHZhcigtLWdyYXktdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29udGVudC0tcHJvZHVjdC0taW5mby0tdG9wID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50LS1wcm9kdWN0LS1pbmZvLS10b3AgLmxvY2F0aW9uOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4oiZXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW46IDAgNHB4O1xcbn1cXG5cXG4uY29udGVudC0tcHJvZHVjdC0taW5mby0tdG9wIGgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjay10ZXh0LWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG59XFxuXFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC0tcHJvZHVjdC0taW5mby0tYm90dG9tID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIG1hcmdpbjogMCA4LjVweDtcXG59XFxuLmNvbnRlbnQtLXByb2R1Y3QtLWluZm8tLWJvdHRvbSA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLm5ldy1wcm9kdWN0LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogNTZweDtcXG4gIGhlaWdodDogNTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWMxYmM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJpZ2h0OiAxNnB4O1xcbiAgYm90dG9tOiAxNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbmJvZHkgPiAjYXBwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZDc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiA1NjhweDtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3B1YmxpYy9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsd0NBQXdDO0FBQzFDO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztFQVdFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuYm9keSA+ICNhcHAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDdkNztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDU2OHB4O1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbW9uL2Jhc2ljX2hlYWRlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tb24vZ2xvYmFsX2NvbG9yLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5iYWNrLWljb24gPiBzdmcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5wcm9maWxlLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5wcm9maWxlLW1haW4tLXVzZXJuYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tdG9wOiAzNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzRweDtcXG59XFxuXFxuLnByb2ZpbGUtbWFpbi0tbG9nb3V0LWJ0biB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5MS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHVibGljL2Nzcy9wcm9maWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcIi4vY29tbW9uL2Jhc2ljX2hlYWRlci5jc3NcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiLi9jb21tb24vZ2xvYmFsX2NvbG9yLmNzc1xcXCIpO1xcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYmFjay1pY29uID4gc3ZnIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucHJvZmlsZS1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ucHJvZmlsZS1tYWluLS11c2VybmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLXRvcDogMzRweDtcXG4gIG1hcmdpbi1ib3R0b206IDM0cHg7XFxufVxcblxcbi5wcm9maWxlLW1haW4tLWxvZ291dC1idG4ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeTEtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1vbi9iYXNpY19oZWFkZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbW9uL2dsb2JhbF9jb2xvci5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5iYWNrLWljb24gPiBzdmcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2lnbnVwLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuLnNpZ251cC1tYWluLS1sYWJlbCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLnNpZ251cC1tYWluLS10ZXh0LWlucHV0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnNpZ251cC1tYWluLS1zdWJtaXQtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5MS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHVibGljL2Nzcy9zaWdudXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMkNBQTJDO0VBQzNDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiLi9jb21tb24vYmFzaWNfaGVhZGVyLmNzc1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCIuL2NvbW1vbi9nbG9iYWxfY29sb3IuY3NzXFxcIik7XFxuXFxuLmJhY2staWNvbiA+IHN2ZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaWdudXAtbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uc2lnbnVwLW1haW4tLWxhYmVsIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uc2lnbnVwLW1haW4tLXRleHQtaW5wdXQge1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc2lnbnVwLW1haW4tLXN1Ym1pdC1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkxLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvZ2luLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbG9naW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2ZpbGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9maWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWdudXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWdudXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTkuMzMzMzMgNEg0LjY2NjY3QzQuMjk4NDggNCA0IDQuMjk4NDggNCA0LjY2NjY3VjkuMzMzMzNDNCA5LjcwMTUyIDQuMjk4NDggMTAgNC42NjY2NyAxMEg5LjMzMzMzQzkuNzAxNTIgMTAgMTAgOS43MDE1MiAxMCA5LjMzMzMzVjQuNjY2NjdDMTAgNC4yOTg0OCA5LjcwMTUyIDQgOS4zMzMzMyA0WlxcXCIgc3Ryb2tlPVxcXCIjZmZmXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk05LjMzMzMzIDE0SDQuNjY2NjdDNC4yOTg0OCAxNCA0IDE0LjI5ODUgNCAxNC42NjY3VjE5LjMzMzNDNCAxOS43MDE1IDQuMjk4NDggMjAgNC42NjY2NyAyMEg5LjMzMzMzQzkuNzAxNTIgMjAgMTAgMTkuNzAxNSAxMCAxOS4zMzMzVjE0LjY2NjdDMTAgMTQuMjk4NSA5LjcwMTUyIDE0IDkuMzMzMzMgMTRaXFxcIiBzdHJva2U9XFxcIiNmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE5LjMzMzMgNEgxNC42NjY3QzE0LjI5ODUgNCAxNCA0LjI5ODQ4IDE0IDQuNjY2NjdWOS4zMzMzM0MxNCA5LjcwMTUyIDE0LjI5ODUgMTAgMTQuNjY2NyAxMEgxOS4zMzMzQzE5LjcwMTUgMTAgMjAgOS43MDE1MiAyMCA5LjMzMzMzVjQuNjY2NjdDMjAgNC4yOTg0OCAxOS43MDE1IDQgMTkuMzMzMyA0WlxcXCIgc3Ryb2tlPVxcXCIjZmZmXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOS4zMzMzIDE0SDE0LjY2NjdDMTQuMjk4NSAxNCAxNCAxNC4yOTg1IDE0IDE0LjY2NjdWMTkuMzMzM0MxNCAxOS43MDE1IDE0LjI5ODUgMjAgMTQuNjY2NyAyMEgxOS4zMzMzQzE5LjcwMTUgMjAgMjAgMTkuNzAxNSAyMCAxOS4zMzMzVjE0LjY2NjdDMjAgMTQuMjk4NSAxOS43MDE1IDE0IDE5LjMzMzMgMTRaXFxcIiBzdHJva2U9XFxcIiNmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTAgMThcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTkgMTdMMSA5TDkgMVxcXCIgc3Ryb2tlPVxcXCIjMjIyMjIyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDIwIDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xOSAxMEMxOSAxNyAxMCAyMyAxMCAyM0MxMCAyMyAxIDE3IDEgMTBDMSA3LjYxMzA1IDEuOTQ4MjEgNS4zMjM4NyAzLjYzNjA0IDMuNjM2MDRDNS4zMjM4NyAxLjk0ODIxIDcuNjEzMDUgMSAxMCAxQzEyLjM4NjkgMSAxNC42NzYxIDEuOTQ4MjEgMTYuMzY0IDMuNjM2MDRDMTguMDUxOCA1LjMyMzg3IDE5IDcuNjEzMDUgMTkgMTBaXFxcIiBzdHJva2U9XFxcIiNmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEwIDEzQzExLjY1NjkgMTMgMTMgMTEuNjU2OSAxMyAxMEMxMyA4LjM0MzE1IDExLjY1NjkgNyAxMCA3QzguMzQzMTUgNyA3IDguMzQzMTUgNyAxMEM3IDExLjY1NjkgOC4zNDMxNSAxMyAxMCAxM1pcXFwiIHN0cm9rZT1cXFwiI2ZmZlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyMCAxNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMSAxSDE5XFxcIiBzdHJva2U9XFxcIiNmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEgN0gxOVxcXCIgc3Ryb2tlPVxcXCIjZmZmXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xIDEzSDE5XFxcIiBzdHJva2U9XFxcIiNmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTE4IDE4LjMzMzNDMTggMTcuNDQ5MyAxNy42ODM5IDE3LjYwMTQgMTcuMTIxMyAxNi45NzYzQzE2LjU1ODcgMTYuMzUxMiAxNS43OTU2IDE2IDE1IDE2SDlDOC4yMDQzNSAxNiA3LjQ0MTI5IDE2LjM1MTIgNi44Nzg2OCAxNi45NzYzQzYuMzE2MDcgMTcuNjAxNCA2IDE3LjQ0OTMgNiAxOC4zMzMzXFxcIiBzdHJva2U9XFxcIiNmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEyIDEzQzEzLjY1NjkgMTMgMTUgMTEuNjU2OSAxNSAxMEMxNSA4LjM0MzE1IDEzLjY1NjkgNyAxMiA3QzEwLjM0MzEgNyA5IDguMzQzMTUgOSAxMEM5IDExLjY1NjkgMTAuMzQzMSAxMyAxMiAxM1pcXFwiIHN0cm9rZT1cXFwiI2ZmZlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCI5XFxcIiBzdHJva2U9XFxcIiNmZmZcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48L2NpcmNsZT48L3N2Zz5cIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByb3V0ZXIsIG5hdmlnYXRlVG8gfSBmcm9tIFwiLi9yb3V0ZXJcIjtcblxuaW1wb3J0IFwiLi9wdWJsaWMvY3NzL25vcm1hbGl6ZS5jc3NcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLWxpbmtdXCIpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuYXZpZ2F0ZVRvKGUudGFyZ2V0LmhyZWYpO1xuICAgIH1cbiAgfSk7XG5cbiAgcm91dGVyKCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=