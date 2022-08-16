"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/cart.js":
/*!*************************!*\
  !*** ./context/cart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider),\n/* harmony export */   \"useCartDispatch\": () => (/* binding */ useCartDispatch),\n/* harmony export */   \"useCartState\": () => (/* binding */ useCartState)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/commerce */ \"./lib/commerce.js\");\n\n\n\nconst CartStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartDispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst SET_CART = \"SET_CART\";\nconst initialState = {\n    total_items: 0,\n    total_unique_items: 0,\n    line_items: []\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case SET_CART:\n            return {\n                ...state,\n                ...action.payload\n            };\n        default:\n            throw new Error(`Unknown action: ${action.type}`);\n    }\n};\nconst CartProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getCart();\n    }, []);\n    const setCart = (payload)=>dispatch({\n            type: SET_CART,\n            payload\n        })\n    ;\n    const getCart = async ()=>{\n        try {\n            const cart = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cart.retrieve();\n            setCart(cart);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartDispatchContext.Provider, {\n        value: {\n            setCart\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartStateContext.Provider, {\n            value: state,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\09282754\\\\Desktop\\\\WD\\\\react\\\\e-comm-site\\\\context\\\\cart.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\09282754\\\\Desktop\\\\WD\\\\react\\\\e-comm-site\\\\context\\\\cart.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCartState = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartStateContext)\n;\nconst useCartDispatch = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF5RTtBQUVsQztBQUV2QyxNQUFNSyxnQkFBZ0IsaUJBQUdMLG9EQUFhLEVBQUU7QUFDeEMsTUFBTU0sbUJBQW1CLGlCQUFHTixvREFBYSxFQUFFO0FBRTNDLE1BQU1PLFFBQVEsR0FBRyxVQUFVO0FBRTNCLE1BQU1DLFlBQVksR0FBRztJQUNuQkMsV0FBVyxFQUFDLENBQUM7SUFDYkMsa0JBQWtCLEVBQUMsQ0FBQztJQUNwQkMsVUFBVSxFQUFDLEVBQUU7Q0FDZDtBQUVELE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztJQUNqQyxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBS1IsUUFBUTtZQUNYLE9BQU07Z0JBQUUsR0FBR00sS0FBSztnQkFBRSxHQUFHQyxNQUFNLENBQUNFLE9BQU87YUFBRSxDQUFDO1FBQ3hDO1lBQ0ksTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUgsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkQ7Q0FDRjtBQUlNLE1BQU1HLFlBQVksR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQzVDLE1BQU0sRUEzQlIsR0EyQlNOLEtBQUssR0EzQmQsR0EyQmdCTyxRQUFRLE1BQUluQixpREFBVSxDQUFDVyxPQUFPLEVBQUVKLFlBQVksQ0FBQztJQUU3REwsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RrQixPQUFPLEVBQUUsQ0FBQztLQUNYLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHTCxNQUFNQyxPQUFPLEdBQUcsQ0FBQ04sT0FBTyxHQUFLSSxRQUFRLENBQUM7WUFBQ0wsSUFBSSxFQUFFUixRQUFRO1lBQUVTLE9BQU87U0FBQyxDQUFDO0lBQUM7SUFFakUsTUFBTUssT0FBTyxHQUFHLFVBQVM7UUFDdkIsSUFBRztZQUNELE1BQU1FLElBQUksR0FBRyxNQUFNbkIsbUVBQXNCLEVBQUU7WUFFM0NrQixPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDO1NBQ2YsQ0FBQyxPQUFNRSxHQUFHLEVBQUM7WUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0tBQ0Y7SUFHRCxxQkFDRSw4REFBQ25CLG1CQUFtQixDQUFDc0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBQ1AsT0FBTztTQUFDO2tCQUM1Qyw0RUFBQ2pCLGdCQUFnQixDQUFDdUIsUUFBUTtZQUFDQyxLQUFLLEVBQUVoQixLQUFLO3NCQUNwQ00sUUFBUTs7Ozs7cUJBQ2lCOzs7OztpQkFDQyxDQUNoQztDQUNGO0FBRU0sTUFBTVcsWUFBWSxHQUFHLElBQU01QixpREFBVSxDQUFDRyxnQkFBZ0IsQ0FBQztBQUFBO0FBQ3ZELE1BQU0wQixlQUFlLEdBQUcsSUFBTTdCLGlEQUFVLENBQUNJLG1CQUFtQixDQUFDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW0tc2l0ZS8uL2NvbnRleHQvY2FydC5qcz83Y2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNvbW1lcmNlIGZyb20gJy4uL2xpYi9jb21tZXJjZSc7XHJcblxyXG5jb25zdCBDYXJ0U3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBDYXJ0RGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgU0VUX0NBUlQgPSBcIlNFVF9DQVJUXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdG90YWxfaXRlbXM6MCxcclxuICB0b3RhbF91bmlxdWVfaXRlbXM6MCxcclxuICBsaW5lX2l0ZW1zOltdLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTRVRfQ0FSVDpcclxuICAgICAgcmV0dXJueyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGdldENhcnQoKTtcclxufSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3Qgc2V0Q2FydCA9IChwYXlsb2FkKSA9PiBkaXNwYXRjaCh7dHlwZTogU0VUX0NBUlQsIHBheWxvYWR9KTtcclxuXHJcbiAgY29uc3QgZ2V0Q2FydCA9IGFzeW5jKCk9PntcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgY2FydCA9IGF3YWl0IGNvbW1lcmNlLmNhcnQucmV0cmlldmUoKTtcclxuXHJcbiAgICAgIHNldENhcnQoY2FydCk7XHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NldENhcnR9fT5cclxuICAgICAgPENhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQ2FydFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvQ2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0U3RhdGUgPSAoKSA9PiB1c2VDb250ZXh0KENhcnRTdGF0ZUNvbnRleHQpXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0RGlzcGF0Y2ggPSAoKSA9PiB1c2VDb250ZXh0KENhcnREaXNwYXRjaENvbnRleHQpXHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiY29tbWVyY2UiLCJDYXJ0U3RhdGVDb250ZXh0IiwiQ2FydERpc3BhdGNoQ29udGV4dCIsIlNFVF9DQVJUIiwiaW5pdGlhbFN0YXRlIiwidG90YWxfaXRlbXMiLCJ0b3RhbF91bmlxdWVfaXRlbXMiLCJsaW5lX2l0ZW1zIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJFcnJvciIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJnZXRDYXJ0Iiwic2V0Q2FydCIsImNhcnQiLCJyZXRyaWV2ZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydFN0YXRlIiwidXNlQ2FydERpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/cart.js\n");

/***/ }),

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ \"@chec/commerce.js\");\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())(\"pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tbWVyY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCwwREFBVyxDQUFDRSxrREFBMkMsQ0FBQztBQUUzRSxpRUFBZUQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tLXNpdGUvLi9saWIvY29tbWVyY2UuanM/NzU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVyY2VTREsgZnJvbSBcIkBjaGVjL2NvbW1lcmNlLmpzXCI7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQ29tbWVyY2VTREsocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfQVBJX0tFWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sIm5hbWVzIjpbIkNvbW1lcmNlU0RLIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NIRUNfUFVCTElDX0FQSV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/commerce.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/cart */ \"./context/cart.js\");\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_cart__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\09282754\\\\Desktop\\\\WD\\\\react\\\\e-comm-site\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\09282754\\\\Desktop\\\\WD\\\\react\\\\e-comm-site\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE4QztBQUUvQixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN0RCxxQkFDQSw4REFBQ0gsdURBQVk7a0JBQ1gsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDZixDQUNiO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW0tc2l0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9jYXJ0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgPENhcnRQcm92aWRlcj5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICA8L0NhcnRQcm92aWRlcj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkNhcnRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();