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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loginClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginClass */ \"./src/loginClass.ts\");\n/* harmony import */ var _loginFormClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginFormClass */ \"./src/loginFormClass.ts\");\n/* harmony import */ var _movieClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieClass */ \"./src/movieClass.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].password.addEventListener(\"blur\", () => _loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateLoginButton());\r\n_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].username.addEventListener(\"blur\", () => _loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateLoginButton());\r\n_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiKey.addEventListener(\"blur\", () => _loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateLoginButton());\r\n_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loginButton.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        yield _loginClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"].criarRequestToken();\r\n        _loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMessage(\"Criando Request Token ...\");\r\n        yield _loginClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"].logar();\r\n        _loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMessage(\"Validando credenciais ...\");\r\n        yield _loginClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"].criarSessao();\r\n        _loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMessage(\"Usuario logado!\");\r\n    }\r\n    catch (e) {\r\n        _loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createMessage(`Error ${e}`);\r\n    }\r\n}));\r\n_movieClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchButton.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\r\n    let lista = document.getElementById(\"lista\");\r\n    if (lista) {\r\n        lista.outerHTML = \"\";\r\n    }\r\n    let queryElement = document.getElementById(\"search\");\r\n    let query = queryElement.value;\r\n    let listaDeFilmes = yield _movieClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"].procurarFilme(query);\r\n    let ul = document.createElement(\"ul\");\r\n    ul.id = \"lista\";\r\n    for (const item of listaDeFilmes.results) {\r\n        let li = document.createElement(\"li\");\r\n        li.appendChild(document.createTextNode(`${item.original_title}`));\r\n        ul.appendChild(li);\r\n    }\r\n    console.log(listaDeFilmes);\r\n    _movieClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchContainer.appendChild(ul);\r\n}));\r\n\n\n//# sourceURL=webpack://ts-dio/./src/app.ts?");

/***/ }),

/***/ "./src/httpClient.ts":
/*!***************************!*\
  !*** ./src/httpClient.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass HttpClient {\r\n    get({ url, method, body = null }) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return new Promise((resolve, reject) => {\r\n                let request = new XMLHttpRequest();\r\n                request.open(method, url, true);\r\n                request.onload = () => {\r\n                    if (request.status >= 200 && request.status < 300) {\r\n                        resolve(JSON.parse(request.responseText));\r\n                    }\r\n                    else {\r\n                        reject({\r\n                            status: request.status,\r\n                            statusText: request.statusText,\r\n                        });\r\n                    }\r\n                };\r\n                request.onerror = () => {\r\n                    reject({\r\n                        status: request.status,\r\n                        statusText: request.statusText,\r\n                    });\r\n                };\r\n                if (body) {\r\n                    request.setRequestHeader(\"Content-Type\", \"application/json;charset=UTF-8\");\r\n                    body = JSON.stringify(body);\r\n                }\r\n                request.send(body);\r\n            });\r\n        });\r\n    }\r\n}\r\nconst httpClient = new HttpClient();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (httpClient);\r\n\n\n//# sourceURL=webpack://ts-dio/./src/httpClient.ts?");

/***/ }),

/***/ "./src/loginClass.ts":
/*!***************************!*\
  !*** ./src/loginClass.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _httpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpClient */ \"./src/httpClient.ts\");\n/* harmony import */ var _loginFormClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginFormClass */ \"./src/loginFormClass.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nclass LoginClass {\r\n    criarSessao() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            console.log(\"criar sessao chamado\");\r\n            let result = yield _httpClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\r\n                url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiKey.value}&request_token=${this.requestToken}`,\r\n                method: \"GET\",\r\n            });\r\n            this.sessionId = result.session_id;\r\n            console.log(result);\r\n        });\r\n    }\r\n    logar() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            console.log(\"logar chamado\");\r\n            let result = yield _httpClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\r\n                url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiKey.value}`,\r\n                method: \"POST\",\r\n                body: {\r\n                    username: `${_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].username.value}`,\r\n                    password: `${_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].password.value}`,\r\n                    request_token: `${this.requestToken}`,\r\n                },\r\n            });\r\n            console.log(result);\r\n        });\r\n    }\r\n    criarRequestToken() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            console.log(\"chamado\");\r\n            let result = yield _httpClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\r\n                url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiKey.value}`,\r\n                method: \"GET\",\r\n            });\r\n            console.log(result);\r\n            this.requestToken = result.request_token;\r\n            console.log(this.requestToken);\r\n        });\r\n    }\r\n}\r\nconst login = new LoginClass();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\r\n\n\n//# sourceURL=webpack://ts-dio/./src/loginClass.ts?");

/***/ }),

/***/ "./src/loginFormClass.ts":
/*!*******************************!*\
  !*** ./src/loginFormClass.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass LoginForm {\r\n    constructor() {\r\n        this.password = document.getElementById(\"senha\");\r\n        this.username = document.getElementById(\"login\");\r\n        this.apiKey = document.getElementById(\"api-key\");\r\n        this.loginButton = document.getElementById(\"login-button\");\r\n        this.mensagem = document.getElementById(\"mensagem\");\r\n    }\r\n    validateLoginButton() {\r\n        if (this.password.value && this.username.value && this.apiKey.value) {\r\n            this.loginButton.disabled = false;\r\n        }\r\n        else {\r\n            this.loginButton.disabled = true;\r\n        }\r\n    }\r\n    createMessage(text) {\r\n        if (!this.textNode) {\r\n            this.textNode = document.createTextNode(text);\r\n            this.mensagem.appendChild(this.textNode);\r\n        }\r\n        else {\r\n            this.mensagem.removeChild(this.textNode);\r\n            this.textNode = document.createTextNode(text);\r\n            this.mensagem.appendChild(this.textNode);\r\n        }\r\n    }\r\n}\r\nconst loginForm = new LoginForm();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginForm);\r\n\n\n//# sourceURL=webpack://ts-dio/./src/loginFormClass.ts?");

/***/ }),

/***/ "./src/movieClass.ts":
/*!***************************!*\
  !*** ./src/movieClass.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _httpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpClient */ \"./src/httpClient.ts\");\n/* harmony import */ var _loginFormClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginFormClass */ \"./src/loginFormClass.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nclass Movie {\r\n    constructor() {\r\n        this.searchButton = document.getElementById(\"search-button\");\r\n        this.searchContainer = document.getElementById('search-container');\r\n    }\r\n    procurarFilme(query) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            query = encodeURI(query);\r\n            console.log(query);\r\n            let result = yield _httpClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\r\n                url: `https://api.themoviedb.org/3/search/movie?api_key=${_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiKey.value}&query=${query}`,\r\n                method: \"GET\",\r\n            });\r\n            console.log(result);\r\n            return result;\r\n        });\r\n    }\r\n    adicionarFilme(filmeId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let result = yield _httpClient__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\r\n                url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${_loginFormClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apiKey.value}&language=en-US`,\r\n                method: \"GET\"\r\n            });\r\n            console.log(result);\r\n        });\r\n    }\r\n}\r\nconst movie = new Movie();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movie);\r\n\n\n//# sourceURL=webpack://ts-dio/./src/movieClass.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;