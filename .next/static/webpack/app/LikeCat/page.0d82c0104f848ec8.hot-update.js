"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/LikeCat/page",{

/***/ "(app-pages-browser)/./src/app/LikeCat/page.tsx":
/*!**********************************!*\
  !*** ./src/app/LikeCat/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _entities_Card_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities/Card/ui/Card */ \"(app-pages-browser)/./src/entities/Card/ui/Card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction page() {\n    _s();\n    const [favoriteCards, setFavoriteCards] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (true) {\n            const cards = JSON.parse(localStorage.getItem(\"favoriteCards\") || \"[]\");\n            setFavoriteCards(cards);\n        }\n    }, []);\n    console.log(favoriteCards);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: style,\n        children: favoriteCards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_entities_Card_ui_Card__WEBPACK_IMPORTED_MODULE_1__.CardItem, {\n                item: card,\n                onHeartClick: ()=>{}\n            }, index, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/app/LikeCat/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/app/LikeCat/page.tsx\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, this);\n}\n_s(page, \"Rl+bUDjgL/RsDUHKXnp0yFq9cLg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvTGlrZUNhdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRzZEO0FBQ2xCO0FBRTVCLFNBQVNHOztJQUN2QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJERCxnREFBU0EsQ0FBQztRQUNULElBQUksSUFBa0IsRUFBYTtZQUNsQyxNQUFNSyxRQUFRQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQyxvQkFBb0I7WUFDbEVMLGlCQUFpQkM7UUFDbEI7SUFDRCxHQUFHLEVBQUU7SUFFTEssUUFBUUMsR0FBRyxDQUFDUjtJQUVaLHFCQUNDLDhEQUFDUztRQUFLQyxXQUFXQztrQkFDaEJYLGNBQWNZLEdBQUcsQ0FBQyxDQUFDQyxNQUFpQkMsc0JBQ25DLDhEQUFDbEIsNERBQVFBO2dCQUVWbUIsTUFBTUY7Z0JBQ05HLGNBQWMsS0FDZDtlQUhLRjs7Ozs7Ozs7OztBQVFSO0dBeEJ3QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9MaWtlQ2F0L3BhZ2UudHN4PzE5MTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcydcblxuaW1wb3J0IHsgQ2FyZEl0ZW0sIENhcmRQcm9wcyB9IGZyb20gJ0AvZW50aXRpZXMvQ2FyZC91aS9DYXJkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKCkge1xuXHRjb25zdCBbZmF2b3JpdGVDYXJkcywgc2V0RmF2b3JpdGVDYXJkc10gPSB1c2VTdGF0ZShbXSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc3QgY2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZUNhcmRzJykgfHwgJ1tdJylcblx0XHRcdHNldEZhdm9yaXRlQ2FyZHMoY2FyZHMpXG5cdFx0fVxuXHR9LCBbXSlcblxuXHRjb25zb2xlLmxvZyhmYXZvcml0ZUNhcmRzKVxuXG5cdHJldHVybiAoXG5cdFx0PG1haW4gY2xhc3NOYW1lPXtzdHlsZX0+XG5cdFx0e2Zhdm9yaXRlQ2FyZHMubWFwKChjYXJkOiBDYXJkUHJvcHMsIGluZGV4OiBudW1iZXIpID0+IChcblx0XHQgIDxDYXJkSXRlbVxuXHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdGl0ZW09e2NhcmR9XG5cdFx0XHRvbkhlYXJ0Q2xpY2s9eygpID0+IHtcblx0XHRcdH19XG5cdFx0ICAvPlxuXHRcdCkpfVxuXHQgIDwvbWFpbj5cblx0KVxufVxuIl0sIm5hbWVzIjpbIkNhcmRJdGVtIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwYWdlIiwiZmF2b3JpdGVDYXJkcyIsInNldEZhdm9yaXRlQ2FyZHMiLCJjYXJkcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFwIiwiY2FyZCIsImluZGV4IiwiaXRlbSIsIm9uSGVhcnRDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/LikeCat/page.tsx\n"));

/***/ })

});