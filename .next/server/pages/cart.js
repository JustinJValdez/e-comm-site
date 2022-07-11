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
exports.id = "pages/cart";
exports.ids = ["pages/cart"];
exports.modules = {

/***/ "./context/cart.js":
/*!*************************!*\
  !*** ./context/cart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider),\n/* harmony export */   \"useCartDispatch\": () => (/* binding */ useCartDispatch),\n/* harmony export */   \"useCartState\": () => (/* binding */ useCartState)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/commerce */ \"./lib/commerce.js\");\n\n\n\nconst CartStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartDispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst SET_CART = \"SET_CART\";\nconst initialState = {\n    total_items: 0,\n    total_unique_items: 0,\n    line_items: []\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case SET_CART:\n            return {\n                ...state,\n                ...action.payload\n            };\n        default:\n            throw new Error(`Unknown action: ${action.type}`);\n    }\n};\nconst CartProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getCart();\n    }, []);\n    const setCart = (payload)=>dispatch({\n            type: SET_CART,\n            payload\n        })\n    ;\n    const getCart = async ()=>{\n        try {\n            const cart = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cart.retrieve();\n            setCart(cart);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartDispatchContext.Provider, {\n        value: {\n            setCart\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartStateContext.Provider, {\n            value: {\n                state\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\09282754\\\\Desktop\\\\WD\\\\react\\\\e-comm-site\\\\context\\\\cart.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\09282754\\\\Desktop\\\\WD\\\\react\\\\e-comm-site\\\\context\\\\cart.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCartState = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartStateContext)\n;\nconst useCartDispatch = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF5RTtBQUVsQztBQUV2QyxNQUFNSyxnQkFBZ0IsaUJBQUdMLG9EQUFhLEVBQUU7QUFDeEMsTUFBTU0sbUJBQW1CLGlCQUFHTixvREFBYSxFQUFFO0FBRTNDLE1BQU1PLFFBQVEsR0FBRyxVQUFVO0FBRTNCLE1BQU1DLFlBQVksR0FBRztJQUNuQkMsV0FBVyxFQUFDLENBQUM7SUFDYkMsa0JBQWtCLEVBQUMsQ0FBQztJQUNwQkMsVUFBVSxFQUFDLEVBQUU7Q0FDZDtBQUVELE1BQU1DLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSTtJQUNoQyxPQUFPQSxNQUFNLENBQUNDLElBQUk7UUFDaEIsS0FBS1IsUUFBUTtZQUNYLE9BQU07Z0JBQUMsR0FBR00sS0FBSztnQkFBQyxHQUFHQyxNQUFNLENBQUNFLE9BQU87YUFBQztRQUNwQztZQUNJLE1BQU0sSUFBSUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVILE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN0RDtDQUNGO0FBSU0sTUFBTUcsWUFBWSxHQUFHLENBQUMsRUFBQ0MsUUFBUSxHQUFDLEdBQUc7SUFDeEMsTUFBTSxFQTNCUixHQTJCU04sS0FBSyxHQTNCZCxHQTJCZU8sUUFBUSxNQUFJbkIsaURBQVUsQ0FBQ1csT0FBTyxFQUFFSixZQUFZLENBQUM7SUFFNURMLGdEQUFTLENBQUMsSUFBTTtRQUNka0IsT0FBTyxFQUFFLENBQUM7S0FDWCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBR0wsTUFBTUMsT0FBTyxHQUFHLENBQUNOLE9BQU8sR0FBSUksUUFBUSxDQUFDO1lBQUNMLElBQUksRUFBQ1IsUUFBUTtZQUFFUyxPQUFPO1NBQUMsQ0FBQztJQUFDO0lBRS9ELE1BQU1LLE9BQU8sR0FBRyxVQUFTO1FBQ3ZCLElBQUc7WUFDRCxNQUFNRSxJQUFJLEdBQUcsTUFBTW5CLG1FQUFzQixFQUFFO1lBRTNDa0IsT0FBTyxDQUFDQyxJQUFJLENBQUM7U0FDZCxDQUFDLE9BQU1FLEdBQUcsRUFBQztZQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7U0FDbEI7S0FDRjtJQUdELHFCQUNFLDhEQUFDbkIsbUJBQW1CLENBQUNzQixRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDUCxPQUFPO1NBQUM7a0JBQzVDLDRFQUFDakIsZ0JBQWdCLENBQUN1QixRQUFRO1lBQUNDLEtBQUssRUFBRTtnQkFBQ2hCLEtBQUs7YUFBQztzQkFDdENNLFFBQVE7Ozs7O3FCQUNpQjs7Ozs7aUJBQ0MsQ0FDaEM7Q0FDRjtBQUVNLE1BQU1XLFlBQVksR0FBRyxJQUFNNUIsaURBQVUsQ0FBQ0csZ0JBQWdCLENBQUM7QUFBQTtBQUN2RCxNQUFNMEIsZUFBZSxHQUFHLElBQU03QixpREFBVSxDQUFDSSxtQkFBbUIsQ0FBQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tLXNpdGUvLi9jb250ZXh0L2NhcnQuanM/N2NmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjb21tZXJjZSBmcm9tICcuLi9saWIvY29tbWVyY2UnO1xyXG5cclxuY29uc3QgQ2FydFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCBDYXJ0RGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5jb25zdCBTRVRfQ0FSVCA9IFwiU0VUX0NBUlRcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHRvdGFsX2l0ZW1zOjAsXHJcbiAgdG90YWxfdW5pcXVlX2l0ZW1zOjAsXHJcbiAgbGluZV9pdGVtczpbXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+e1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICBjYXNlIFNFVF9DQVJUOlxyXG4gICAgICByZXR1cm57Li4uc3RhdGUsLi4uYWN0aW9uLnBheWxvYWR9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb246ICR7YWN0aW9uLnR5cGV9YClcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSk9PntcclxuICBjb25zdCBbc3RhdGUsZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGdldENhcnQoKTtcclxufSwgW10pO1xyXG5cclxuXHJcbiAgY29uc3Qgc2V0Q2FydCA9IChwYXlsb2FkKT0+IGRpc3BhdGNoKHt0eXBlOlNFVF9DQVJULCBwYXlsb2FkfSk7XHJcblxyXG4gIGNvbnN0IGdldENhcnQgPSBhc3luYygpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBjb21tZXJjZS5jYXJ0LnJldHJpZXZlKClcclxuXHJcbiAgICAgIHNldENhcnQoY2FydClcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2V0Q2FydH19PlxyXG4gICAgICA8Q2FydFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L0NhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2FydFN0YXRlID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0U3RhdGVDb250ZXh0KVxyXG5leHBvcnQgY29uc3QgdXNlQ2FydERpc3BhdGNoID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0RGlzcGF0Y2hDb250ZXh0KVxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImNvbW1lcmNlIiwiQ2FydFN0YXRlQ29udGV4dCIsIkNhcnREaXNwYXRjaENvbnRleHQiLCJTRVRfQ0FSVCIsImluaXRpYWxTdGF0ZSIsInRvdGFsX2l0ZW1zIiwidG90YWxfdW5pcXVlX2l0ZW1zIiwibGluZV9pdGVtcyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiRXJyb3IiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiZ2V0Q2FydCIsInNldENhcnQiLCJjYXJ0IiwicmV0cmlldmUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNhcnRTdGF0ZSIsInVzZUNhcnREaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/cart.js\n");

/***/ }),

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ \"@chec/commerce.js\");\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())(\"pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tbWVyY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCwwREFBVyxDQUFDRSxrREFBMkMsQ0FBQztBQUUzRSxpRUFBZUQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tLXNpdGUvLi9saWIvY29tbWVyY2UuanM/NzU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVyY2VTREsgZnJvbSBcIkBjaGVjL2NvbW1lcmNlLmpzXCI7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQ29tbWVyY2VTREsocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfQVBJX0tFWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sIm5hbWVzIjpbIkNvbW1lcmNlU0RLIiwiY2xpZW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NIRUNfUFVCTElDX0FQSV9LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/commerce.js\n");

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CartPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/cart */ \"./context/cart.js\");\n\n\nfunction CartPage() {\n    const { line_items  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_1__.useCartState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n        children: JSON.stringify(line_items, null, 2)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\09282754\\\\Desktop\\\\WD\\\\react\\\\e-comm-site\\\\pages\\\\cart.js\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUErQztBQUdoQyxTQUFTQyxRQUFRLEdBQUc7SUFDakMsTUFBTSxFQUFDQyxVQUFVLEdBQUMsR0FBR0YsMkRBQVksRUFBRTtJQUVuQyxxQkFBTyw4REFBQ0csS0FBRztrQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNILFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7OztZQUFPLENBQUM7Q0FDekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW0tc2l0ZS8uL3BhZ2VzL2NhcnQuanM/ZjQ1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYXJ0U3RhdGUgfSBmcm9tICcuLi9jb250ZXh0L2NhcnQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRQYWdlKCkge1xyXG4gIGNvbnN0IHtsaW5lX2l0ZW1zfSA9IHVzZUNhcnRTdGF0ZSgpO1xyXG5cclxuICByZXR1cm4gPHByZT57SlNPTi5zdHJpbmdpZnkobGluZV9pdGVtcywgbnVsbCwgMil9PC9wcmU+O1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlQ2FydFN0YXRlIiwiQ2FydFBhZ2UiLCJsaW5lX2l0ZW1zIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/cart.js"));
module.exports = __webpack_exports__;

})();