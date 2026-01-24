/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../static/fonts/Roboto-medium.ttf */ \"./src/static/fonts/Roboto-medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../static/fonts/Roboto-regular.ttf */ \"./src/static/fonts/Roboto-regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n@font-face {\n  font-family: \"RobotoMedium\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: \"RobotoRegular\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\nbody {\n  font-family: \"RobotoRegular\", sans-serif;\n}\n\n.layout {\n  width: 219px;\n  font-size: 14px;\n}\n.layout .sidebar-nav {\n  padding: 60px 20px 0 20px;\n}\n.layout .sidebar-nav .nav-link {\n  padding-left: 12px;\n  padding-right: 12px;\n  width: 178px;\n}\n.layout .balance {\n  padding-left: 20px;\n}\n.layout .profile {\n  padding-left: 20px;\n  padding-bottom: 40px;\n}\n.layout .dropdown-toggle {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.layout .dropdown-toggle svg {\n  fill: #052C65;\n}\n.layout .dropdown-toggle::after {\n  display: none;\n}\n.layout .dropdown-menu .dropdown-item:focus,\n.layout .dropdown-menu .dropdown-item:hover {\n  background-color: #0d6efd !important;\n  color: white !important;\n}\n.layout .nav-link svg {\n  fill: #052C65;\n}\n.layout .dropdown-menu {\n  border: 1px solid #0d6efd;\n}\n.layout .dropdown-toggle.show svg {\n  fill: white;\n  rotate: 90deg;\n  transition: 0.3s;\n}\n.layout .dropdown-menu a {\n  font-size: 14px;\n}\n\n.content {\n  padding: 100px 60px;\n}\n\n.title {\n  color: #052C65;\n  font-family: \"RobotoMedium\", sans-serif;\n}\n\n.card-title {\n  font-family: \"RobotoMedium\", sans-serif;\n}\n\n.btn {\n  font-size: 14px;\n}\n\n.income-card {\n  width: 352px;\n  height: 121px;\n}\n\n.income-card-add {\n  display: flex;\n}\n\n.income-card-add .card-body {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.login .container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  padding: 0 20px;\n}\n.login .container .login-content {\n  max-width: 397px;\n  width: 100%;\n}\n.login .container .login-content .login-title {\n  font-size: 40px;\n  color: #052C65;\n  font-family: \"RobotoMedium\", sans-serif;\n}\n.login .container .login-content .login-form input::placeholder {\n  font-size: 15px;\n  color: #6C757D;\n}\n.login .container .login-content .login-form .remember {\n  font-size: 12px;\n}\n.login .container .login-content .login-form button {\n  font-family: \"RobotoMedium\", sans-serif;\n  font-size: 15px;\n}\n\n.signup .container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  padding: 0 20px;\n}\n.signup .container .signup-content {\n  max-width: 397px;\n  width: 100%;\n}\n.signup .container .signup-content .signup-title {\n  font-size: 40px;\n  color: #052C65;\n  font-family: \"RobotoMedium\", sans-serif;\n}\n.signup .container .signup-content .signup-form input::placeholder {\n  font-size: 15px;\n  color: #6C757D;\n}\n.signup .container .signup-content .signup-form .remember {\n  font-size: 12px;\n}\n.signup .container .signup-content .signup-form button {\n  font-family: \"RobotoMedium\", sans-serif;\n  font-size: 15px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://frontend/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://frontend/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://frontend/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://frontend/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/app.js"
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n\n\n\nclass App {\n    constructor() {\n        new _router__WEBPACK_IMPORTED_MODULE_0__.Router();\n    }\n}\n\n(new App());\n\n//# sourceURL=webpack://frontend/./src/app.js?\n}");

/***/ },

/***/ "./src/components/auth/login.js"
/*!**************************************!*\
  !*** ./src/components/auth/login.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_validation_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validation-utils */ \"./src/utils/validation-utils.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-service */ \"./src/services/auth-service.js\");\n\n\n\n\nclass Login {\n    constructor(openNewRoute) {\n        this.openNewRoute = openNewRoute;\n\n        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.accessTokenKey)) {\n            return this.openNewRoute('/');\n        }\n\n        this.findElements();\n\n        this.validations = [\n            {element: this.passwordInputElement},\n            {\n                element: this.emailInputElement,\n                options: {pattern: /^([a-zA-Z0-9_.\\-])+@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$/}\n            }\n        ];\n\n        document.getElementById('login-button').addEventListener('click', this.login.bind(this));\n    }\n\n    findElements() {\n        this.emailInputElement = document.getElementById('email');\n        this.passwordInputElement = document.getElementById('password');\n        this.rememberMeElement = document.getElementById('remember-me');\n    }\n\n    async login() {\n        if (_utils_validation_utils__WEBPACK_IMPORTED_MODULE_1__.ValidationUtils.validateForm(this.validations)) {\n            const loginResult = await _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService.login({\n                email: this.emailInputElement.value,\n                password: this.passwordInputElement.value,\n                rememberMe: this.rememberMeElement.checked,\n            });\n\n            if (!loginResult) {\n                alert('Ошибка логина')\n                return;\n            }\n\n            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setAuthInfo(loginResult.tokens.accessToken, loginResult.tokens.refreshToken, {\n                id: loginResult.user.id,\n                name: loginResult.user.name,\n                lastName: loginResult.user.lastName,\n            });\n\n            this.openNewRoute('/');\n        }\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/auth/login.js?\n}");

/***/ },

/***/ "./src/components/auth/signup.js"
/*!***************************************!*\
  !*** ./src/components/auth/signup.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignUp: () => (/* binding */ SignUp)\n/* harmony export */ });\n/* harmony import */ var _utils_validation_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/validation-utils */ \"./src/utils/validation-utils.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-service */ \"./src/services/auth-service.js\");\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n\n\n\n\nclass SignUp {\n    constructor(openNewRoute) {\n        this.openNewRoute = openNewRoute;\n        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__.AuthUtils.accessTokenKey)) {\n            return this.openNewRoute('/');\n        }\n\n        this.findElements();\n\n        this.validations = [\n            {element: this.nameInputElement, options: {pattern: /^[А-Я][а-я]+\\s*$/}},\n            {element: this.lastNameInputElement, options: {pattern: /^[А-Я][а-я]+\\s*$/}},\n            {\n                element: this.emailInputElement,\n                options: {pattern: /^([a-zA-Z0-9_.\\-])+@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$/}\n            },\n            {element: this.passwordInputElement, options: {pattern: /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/}},\n            {element: this.passwordRepeatInputElement, options: {compareTo: this.passwordInputElement.value}}\n        ]\n        document.getElementById('signup-button').addEventListener('click', this.signUp.bind(this));\n    }\n\n    findElements() {\n        this.nameInputElement = document.getElementById('name');\n        this.lastNameInputElement = document.getElementById('lastName');\n        this.emailInputElement = document.getElementById('email');\n        this.passwordInputElement = document.getElementById('password');\n        this.passwordRepeatInputElement = document.getElementById('repeat-password');\n    }\n\n    async signUp() {\n        for (let i = 0; i < this.validations.length; i++) {\n            if (this.validations[i].element === this.passwordRepeatInputElement) {\n                this.validations[i].options.compareTo = this.passwordInputElement.value;\n            }\n        }\n\n        if (_utils_validation_utils__WEBPACK_IMPORTED_MODULE_0__.ValidationUtils.validateForm(this.validations)) {\n            const signUpResult = await _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService.signUp({\n                    name: this.nameInputElement.value,\n                    lastName: this.lastNameInputElement.value,\n                    email: this.emailInputElement.value,\n                    password: this.passwordInputElement.value,\n                    passwordRepeat: this.passwordRepeatInputElement.value,\n                }\n            )\n\n            if (!signUpResult) {\n                alert('Ошибка регистрации')\n                return;\n            }\n\n            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_2__.AuthUtils.setAuthInfo({\n                id: signUpResult.user.id,\n                email: signUpResult.user.email,\n                name: signUpResult.user.name,\n                lastName: signUpResult.user.lastName,\n            })\n\n            this.openNewRoute('/login');\n        }\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/auth/signup.js?\n}");

/***/ },

/***/ "./src/config/config.js"
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst host = \"http://localhost:3000\";\nconst config = {\n    host: host,\n    api: host + '/api'\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://frontend/./src/config/config.js?\n}");

/***/ },

/***/ "./src/router.js"
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_auth_signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth/signup */ \"./src/components/auth/signup.js\");\n/* harmony import */ var _components_auth_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/login */ \"./src/components/auth/login.js\");\n\n\n\nclass Router {\n    constructor() {\n        this.titlePageElement = document.getElementById('title');\n        this.contentPageElement = document.getElementById('content');\n        this.initEvents();\n        this.routes = [\n            {\n                route: '/',\n                title: 'Главная',\n                filePath: \"/templates/pages/main.html\",\n                useLayout: '/templates/layout.html',\n            },\n            {\n                route: '/login',\n                title: 'Логин',\n                filePath: '/templates/pages/auth/login.html',\n                load: () => {\n                    new _components_auth_login__WEBPACK_IMPORTED_MODULE_1__.Login(this.openNewRoute.bind(this));\n                },\n                useLayout: false,\n            },\n            {\n                route: '/signup',\n                title: 'Регистрация',\n                filePath: '/templates/pages/auth/signup.html',\n                load: () => {\n                    new _components_auth_signup__WEBPACK_IMPORTED_MODULE_0__.SignUp(this.openNewRoute.bind(this));\n                },\n                useLayout: false,\n            },\n            {\n                route: '/404',\n                title: 'Страница не найдена',\n                filePath: '/templates/pages/404.html',\n                useLayout: false,\n            },\n            {\n                route: '/income-expense',\n                title: 'Доходы и расходы',\n                filePath: '/templates/pages/income-expenses/income-expenses-main.html',\n                useLayout: '/templates/layout.html',\n            },\n            {\n                route: '/income-expenses-create',\n                title: 'Страница дохода/расхода',\n                filePath: '/templates/pages/income-expenses/income-expenses-create.html',\n                useLayout: '/templates/layout.html',\n            },\n            {\n                route: '/show-income',\n                title: 'Доходы',\n                filePath: '/templates/pages/income/income-main.html',\n                useLayout: '/templates/layout.html',\n            },\n            {\n                route: '/create-income',\n                title: 'Создание категории дохода',\n                filePath: '/templates/pages/income/income-create.html',\n                useLayout: '/templates/layout.html',\n            },\n            {\n                route: '/edit-income',\n                title: 'Редактирование категории дохода',\n                filePath: '/templates/pages/income/income-edit.html',\n                useLayout: '/templates/layout.html',\n            },\n            {\n                route: '/show-expense',\n                title: 'Расходы',\n                filePath: '/templates/pages/expenses/expenses-main.html',\n                useLayout: '/templates/layout.html',\n            },\n            {\n                route: '/create-expenses',\n                title: 'Создание категории расходов',\n                filePath: '/templates/pages/expenses/expenses-create.html',\n                useLayout: '/templates/layout.html',\n            },\n            {\n                route: '/edit-expenses',\n                title: 'Редактирование категории расхода',\n                filePath: '/templates/pages/expenses/expenses-edit.html',\n                useLayout: '/templates/layout.html',\n            }\n        ];\n    }\n\n    initEvents() {\n        window.addEventListener('DOMContentLoaded', this.activeRoute.bind(this));\n        window.addEventListener('popstate', this.activeRoute.bind(this));\n        document.addEventListener('click', this.clickHandler.bind(this));\n    }\n\n    async openNewRoute(url) {\n        const currentRoute = window.location.pathname;\n        history.pushState(null, '', url);\n        await this.activeRoute(null, currentRoute)\n    }\n\n    async clickHandler(e) {\n        let element = null;\n        if (e.target.nodeName === 'A') {\n            element = e.target;\n        } else if (e.target.parentNode.nodeName === 'A') {\n            element = e.target.parentNode;\n        }\n\n        if (element) {\n            e.preventDefault();\n            const currentRoute = window.location.pathname;\n            const url = element.href.replace(window.location.origin, '');\n            if (!url || (currentRoute === url.replace('#', '')) || url.startsWith('javascript:void(0)')) {\n                return;\n            }\n\n            await this.openNewRoute(url);\n        }\n    }\n\n    async activeRoute(e, oldRoute = null) {\n        const urlRoute = window.location.pathname;\n        const newRoute = this.routes.find(item => item.route === urlRoute);\n\n        if (newRoute) {\n            if (newRoute.title) {\n                this.titlePageElement.innerText = newRoute.title;\n            }\n\n            if (newRoute.filePath) {\n                let contentBlock = this.contentPageElement;\n                if (newRoute.useLayout) {\n                    this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(res => res.text());\n                    contentBlock = document.getElementById('content-layout')\n                }\n                contentBlock.innerHTML = await fetch(newRoute.filePath).then(res => res.text());\n            }\n\n            if (newRoute.load && typeof newRoute.load === 'function') {\n                newRoute.load();\n            }\n        } else {\n            history.pushState(null, '', '/404');\n            await this.activeRoute(null, '', '/404');\n        }\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/router.js?\n}");

/***/ },

/***/ "./src/services/auth-service.js"
/*!**************************************!*\
  !*** ./src/services/auth-service.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthService: () => (/* binding */ AuthService)\n/* harmony export */ });\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http-utils */ \"./src/utils/http-utils.js\");\n\n\nclass AuthService {\n    static async signUp(data) {\n        const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/signup', 'POST', false, data);\n\n        if (result.error || !result.response && (this.responseAuth(result.response))) {\n            console.error('Ошибка HTTP запроса:', result);\n            return false;\n        }\n\n        return result.response;\n    }\n\n    static async login(data) {\n        const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/login', 'POST', false, data);\n\n        if (result.error || !result.response && (this.responseAuth(result.response))) {\n            console.error('Ошибка HTTP запро:', result);\n            return false;\n        }\n\n        return result.response;\n    }\n\n    static responseAuth(response) {\n        if (response) {\n            if (response.tokens) {\n                return (\n                    !response.tokens.accessTokenKey ||\n                    !response.tokens.refreshTokenKey ||\n                    !response.user ||\n                    !response.user.id ||\n                    !response.user.email ||\n                    !response.user.name ||\n                    !response.user.lastName\n                )\n            }\n\n            return (\n                !response.user ||\n                !response.user.id ||\n                !response.user.email ||\n                !response.user.name ||\n                !response.user.lastName\n            )\n        }\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/services/auth-service.js?\n}");

/***/ },

/***/ "./src/static/fonts/Roboto-medium.ttf"
/*!********************************************!*\
  !*** ./src/static/fonts/Roboto-medium.ttf ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d2d7f0c01bffaa5ec8f7.ttf\";\n\n//# sourceURL=webpack://frontend/./src/static/fonts/Roboto-medium.ttf?\n}");

/***/ },

/***/ "./src/static/fonts/Roboto-regular.ttf"
/*!*********************************************!*\
  !*** ./src/static/fonts/Roboto-regular.ttf ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f25bd05915c1a3468d3d.ttf\";\n\n//# sourceURL=webpack://frontend/./src/static/fonts/Roboto-regular.ttf?\n}");

/***/ },

/***/ "./src/styles/styles.scss"
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://frontend/./src/styles/styles.scss?\n}");

/***/ },

/***/ "./src/utils/auth-utils.js"
/*!*********************************!*\
  !*** ./src/utils/auth-utils.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthUtils: () => (/* binding */ AuthUtils)\n/* harmony export */ });\nclass AuthUtils {\n    static accessTokenKey = 'accessToken';\n    static refreshTokenKey = 'refreshToken';\n    static userInfoKey = 'userInfo';\n\n    static setAuthInfo(accessToken=null, refreshToken=null, userInfo = null) {\n        if (accessToken) {\n            localStorage.setItem(this.accessTokenKey, accessToken);\n        }\n        if (refreshToken) {\n            localStorage.setItem(this.refreshTokenKey, refreshToken);\n        }\n        if (userInfo) {\n            localStorage.setItem(this.userInfoKey, userInfo);\n        }\n    }\n\n    static removeAuthInfo() {\n        localStorage.removeItem(this.accessTokenKey);\n        localStorage.removeItem(this.refreshTokenKey);\n        localStorage.removeItem(JSON.stringify(this.userInfoKey));\n    }\n\n    static getAuthInfo(key = null) {\n        if (key && [this.accessTokenKey, this.refreshTokenKey, this.userInfoKey].includes(key)) {\n            return localStorage.getItem(key);\n        } else {\n            return {\n                [this.accessTokenKey]: this.accessTokenKey,\n                [this.refreshTokenKey]: this.refreshTokenKey,\n                [this.userInfoKey]: this.userInfoKey,\n            }\n        }\n    }\n\n    static async updateRefreshToken() {\n        let result = false;\n        const refreshToken = localStorage.getItem(this.refreshTokenKey);\n\n        if (refreshToken) {\n            const response = await fetch(config.api + '/refresh', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json',\n                    'Accept': 'application/json',\n                },\n                body: JSON.stringify({\n                    refreshToken: refreshToken,\n                })\n            });\n\n            if (response && response.status === 200) {\n                const tokens = await response.json();\n                if (tokens && tokens.error) {\n                    this.setAuthInfo(tokens.accessToken, tokens.refreshToken);\n                    result = true;\n                }\n            }\n        }\n\n        if (!result) {\n            this.removeAuthInfo();\n        }\n\n        return result;\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/utils/auth-utils.js?\n}");

/***/ },

/***/ "./src/utils/http-utils.js"
/*!*********************************!*\
  !*** ./src/utils/http-utils.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpUtils: () => (/* binding */ HttpUtils)\n/* harmony export */ });\n/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.js\");\n\n\n\nclass HttpUtils {\n    static async request(url, method = 'GET', useAuth = true, body = null) {\n        const result = {\n            error: false,\n            response: null\n        };\n\n        const params = {\n            method: method,\n            headers: {\n                'Content-Type': 'application/json',\n                'Accept': 'application/json',\n            }\n        };\n\n        let token = null;\n\n        if (useAuth) {\n            token = _auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.accessTokenKey);\n            if (token) {\n                params.headers['x-auth-token'] = token;\n            }\n        }\n\n        if (body) {\n            params.body = JSON.stringify(body);\n        }\n\n        let response = null;\n        try {\n            response = await fetch(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api + url, params);\n            result.response = await response.json();\n        } catch (error) {\n            result.error = true;\n            return result;\n        }\n\n        if (response.status < 200 || response.status >= 300) {\n            result.error = true;\n            if (useAuth && response === 401) {\n                if (!token) {\n                    result.redirect = '/login';\n                } else {\n                    const updatedToken = await _auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.updateRefreshToken();\n                    if (updatedToken) {\n                        return this.request(url, method, useAuth, body);\n                    } else {\n                        result.redirect = '/login';\n                    }\n                }\n            }\n        }\n\n        return result;\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/utils/http-utils.js?\n}");

/***/ },

/***/ "./src/utils/validation-utils.js"
/*!***************************************!*\
  !*** ./src/utils/validation-utils.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ValidationUtils: () => (/* binding */ ValidationUtils)\n/* harmony export */ });\nclass ValidationUtils {\n    static validateForm(validations) {\n        let isValid = true;\n\n        for (let i = 0; i < validations.length; i++) {\n            if (!ValidationUtils.validateField(validations[i].element, validations[i].options)) {\n                isValid = false;\n            }\n        }\n\n        return isValid;\n    }\n\n    static validateField(element, options) {\n        let condition = element.value;\n\n        if (options) {\n            if (options.hasOwnProperty('pattern')) {\n                condition = element.value && element.value.match(options.pattern);\n            } else if (options.hasOwnProperty('compareTo')) {\n                condition = element.value && element.value === options.compareTo;\n            }\n        }\n\n        if (condition) {\n            element.classList.remove('is-invalid');\n            return true;\n        } else {\n            element.classList.add('is-invalid');\n            return false;\n        }\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/utils/validation-utils.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;