"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/entities/Card/ui/Card.tsx":
/*!***************************************!*\
  !*** ./src/entities/Card/ui/Card.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/iconClose/ui/iconClose */ \"(app-pages-browser)/./src/shared/iconClose/ui/iconClose.tsx\");\n/* harmony import */ var _shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/iconHeart/ui/iconHeart */ \"(app-pages-browser)/./src/shared/iconHeart/ui/iconHeart.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/favorite */ \"(app-pages-browser)/./src/entities/Card/store/favorite.ts\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/entities/Card/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ Card,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Card(param) {\n    let { item: { id, url } } = param;\n    _s();\n    const [isFavorite, setIsFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleToggleFavorite = ()=>{\n        if (isFavorite) {\n            (0,_store_favorite__WEBPACK_IMPORTED_MODULE_5__.removeFromFavorites)(id) // Замените на свою функцию для удаления из избранного\n            ;\n        } else {\n            (0,_store_favorite__WEBPACK_IMPORTED_MODULE_5__.addToFavorites)({\n                id,\n                url\n            }) // Замените на свою функцию для добавления в избранное\n            ;\n        }\n        setIsFavorite(!isFavorite);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().box),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),\n                src: url,\n                alt: \"cat\",\n                width: 225,\n                height: 225\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().close)\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"\".concat((_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().heart), \" \").concat(isFavorite ? (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().favorite) : \"\"),\n                onClick: handleToggleFavorite\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, this);\n}\n_s(Card, \"k950Z1JpPS3WYtE75BCawi6VGEM=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardItem);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9lbnRpdGllcy9DYXJkL3VpL0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNBO0FBQ3pCO0FBQ0U7QUFDdUM7QUFDakM7QUFRL0IsU0FBU08sS0FBSyxLQUEwQztRQUExQyxFQUFFQyxNQUFNLEVBQUVDLEVBQUUsRUFBRUMsR0FBRyxFQUFFLEVBQXVCLEdBQTFDOztJQUNwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVUsdUJBQXVCO1FBQzVCLElBQUlGLFlBQVk7WUFDZk4sb0VBQW1CQSxDQUFDSSxJQUFJLHNEQUFzRDs7UUFDL0UsT0FBTztZQUNOTCwrREFBY0EsQ0FBQztnQkFBRUs7Z0JBQUlDO1lBQUksR0FBRyxzREFBc0Q7O1FBQ25GO1FBQ0FFLGNBQWMsQ0FBQ0Q7SUFDaEI7SUFFQSxxQkFDQyw4REFBQ0c7UUFBSUMsV0FBV1QsNkRBQVU7OzBCQUN6Qiw4REFBQ0osa0RBQUtBO2dCQUNMYSxXQUFXVCwrREFBWTtnQkFDdkJZLEtBQUtSO2dCQUNMUyxLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFROzs7Ozs7MEJBRVQsOERBQUNyQixzRUFBU0E7Z0JBQUNlLFdBQVdULCtEQUFZOzs7Ozs7MEJBQ2xDLDhEQUFDTCxzRUFBU0E7Z0JBQ1RjLFdBQVcsR0FBbUJKLE9BQWhCTCwrREFBWSxFQUFDLEtBQXFDLE9BQWxDSyxhQUFhTCxrRUFBZSxHQUFHO2dCQUM3RG1CLFNBQVNaOzs7Ozs7Ozs7Ozs7QUFJYjtHQTVCZ0JOO0tBQUFBO0FBOEJoQiwrREFBZW1CLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2VudGl0aWVzL0NhcmQvdWkvQ2FyZC50c3g/NmFjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJY29uQ2xvc2UgZnJvbSAnQC9zaGFyZWQvaWNvbkNsb3NlL3VpL2ljb25DbG9zZSdcbmltcG9ydCBJY29uSGVhcnQgZnJvbSAnQC9zaGFyZWQvaWNvbkhlYXJ0L3VpL2ljb25IZWFydCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGFkZFRvRmF2b3JpdGVzLCByZW1vdmVGcm9tRmF2b3JpdGVzIH0gZnJvbSAnLi4vc3RvcmUvZmF2b3JpdGUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJ1xuXG50eXBlIENhcmRQcm9wcyA9IHtcblx0aWQ6IHN0cmluZ1xuXHR1cmw6IHN0cmluZ1xuXHRicmVlZHM6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkKHsgaXRlbTogeyBpZCwgdXJsIH0gfTogeyBpdGVtOiBDYXJkUHJvcHMgfSkge1xuXHRjb25zdCBbaXNGYXZvcml0ZSwgc2V0SXNGYXZvcml0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRjb25zdCBoYW5kbGVUb2dnbGVGYXZvcml0ZSA9ICgpID0+IHtcblx0XHRpZiAoaXNGYXZvcml0ZSkge1xuXHRcdFx0cmVtb3ZlRnJvbUZhdm9yaXRlcyhpZCkgLy8g0JfQsNC80LXQvdC40YLQtSDQvdCwINGB0LLQvtGOINGE0YPQvdC60YbQuNGOINC00LvRjyDRg9C00LDQu9C10L3QuNGPINC40Lcg0LjQt9Cx0YDQsNC90L3QvtCz0L5cblx0XHR9IGVsc2Uge1xuXHRcdFx0YWRkVG9GYXZvcml0ZXMoeyBpZCwgdXJsIH0pIC8vINCX0LDQvNC10L3QuNGC0LUg0L3QsCDRgdCy0L7RjiDRhNGD0L3QutGG0LjRjiDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0LIg0LjQt9Cx0YDQsNC90L3QvtC1XG5cdFx0fVxuXHRcdHNldElzRmF2b3JpdGUoIWlzRmF2b3JpdGUpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cblx0XHRcdDxJbWFnZVxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cblx0XHRcdFx0c3JjPXt1cmx9XG5cdFx0XHRcdGFsdD0nY2F0J1xuXHRcdFx0XHR3aWR0aD17MjI1fVxuXHRcdFx0XHRoZWlnaHQ9ezIyNX1cblx0XHRcdC8+XG5cdFx0XHQ8SWNvbkNsb3NlIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfSAvPlxuXHRcdFx0PEljb25IZWFydFxuXHRcdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFydH0gJHtpc0Zhdm9yaXRlID8gc3R5bGVzLmZhdm9yaXRlIDogJyd9YH1cblx0XHRcdFx0b25DbGljaz17aGFuZGxlVG9nZ2xlRmF2b3JpdGV9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRJdGVtXG4iXSwibmFtZXMiOlsiSWNvbkNsb3NlIiwiSWNvbkhlYXJ0IiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsImFkZFRvRmF2b3JpdGVzIiwicmVtb3ZlRnJvbUZhdm9yaXRlcyIsInN0eWxlcyIsIkNhcmQiLCJpdGVtIiwiaWQiLCJ1cmwiLCJpc0Zhdm9yaXRlIiwic2V0SXNGYXZvcml0ZSIsImhhbmRsZVRvZ2dsZUZhdm9yaXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm94IiwiaW1hZ2UiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNsb3NlIiwiaGVhcnQiLCJmYXZvcml0ZSIsIm9uQ2xpY2siLCJDYXJkSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/entities/Card/ui/Card.tsx\n"));

/***/ })

});