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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/iconClose/ui/iconClose */ \"(app-pages-browser)/./src/shared/iconClose/ui/iconClose.tsx\");\n/* harmony import */ var _shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/iconHeart/ui/iconHeart */ \"(app-pages-browser)/./src/shared/iconHeart/ui/iconHeart.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/favorite */ \"(app-pages-browser)/./src/entities/Card/store/favorite.ts\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/entities/Card/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ Card auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Card(param) {\n    let { item: { id, url } } = param;\n    _s();\n    const [isFavorite, setIsFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleToggleFavorite = ()=>{\n        if (isFavorite) {\n            (0,_store_favorite__WEBPACK_IMPORTED_MODULE_5__.removeFromFavorites)(id) // Замените на свою функцию для удаления из избранного\n            ;\n        } else {\n            (0,_store_favorite__WEBPACK_IMPORTED_MODULE_5__.addToFavorites)({\n                id,\n                url\n            }) // Замените на свою функцию для добавления в избранное\n            ;\n        }\n        setIsFavorite(!isFavorite);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().box),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),\n                src: url,\n                alt: \"cat\",\n                width: 225,\n                height: 225\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().close)\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"\".concat((_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().heart), \" \").concat(isFavorite ? (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().favorite) : \"\"),\n                onClick: handleToggleFavorite\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, this);\n}\n_s(Card, \"k950Z1JpPS3WYtE75BCawi6VGEM=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9lbnRpdGllcy9DYXJkL3VpL0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNBO0FBQ3pCO0FBQ0U7QUFDdUM7QUFDakM7QUFPL0IsU0FBU08sS0FBSyxLQUEwQztRQUExQyxFQUFFQyxNQUFNLEVBQUVDLEVBQUUsRUFBRUMsR0FBRyxFQUFFLEVBQXVCLEdBQTFDOztJQUNwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVUsdUJBQXVCO1FBQzVCLElBQUlGLFlBQVk7WUFDZk4sb0VBQW1CQSxDQUFDSSxJQUFJLHNEQUFzRDs7UUFDL0UsT0FBTztZQUNOTCwrREFBY0EsQ0FBQztnQkFBRUs7Z0JBQUlDO1lBQUksR0FBRyxzREFBc0Q7O1FBQ25GO1FBQ0FFLGNBQWMsQ0FBQ0Q7SUFDaEI7SUFFQSxxQkFDQyw4REFBQ0c7UUFBSUMsV0FBV1QsNkRBQVU7OzBCQUN6Qiw4REFBQ0osa0RBQUtBO2dCQUNMYSxXQUFXVCwrREFBWTtnQkFDdkJZLEtBQUtSO2dCQUNMUyxLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFROzs7Ozs7MEJBRVQsOERBQUNyQixzRUFBU0E7Z0JBQUNlLFdBQVdULCtEQUFZOzs7Ozs7MEJBQ2xDLDhEQUFDTCxzRUFBU0E7Z0JBQ1RjLFdBQVcsR0FBbUJKLE9BQWhCTCwrREFBWSxFQUFDLEtBQXFDLE9BQWxDSyxhQUFhTCxrRUFBZSxHQUFHO2dCQUM3RG1CLFNBQVNaOzs7Ozs7Ozs7Ozs7QUFJYjtHQTVCZ0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9lbnRpdGllcy9DYXJkL3VpL0NhcmQudHN4PzZhYzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSWNvbkNsb3NlIGZyb20gJ0Avc2hhcmVkL2ljb25DbG9zZS91aS9pY29uQ2xvc2UnXG5pbXBvcnQgSWNvbkhlYXJ0IGZyb20gJ0Avc2hhcmVkL2ljb25IZWFydC91aS9pY29uSGVhcnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhZGRUb0Zhdm9yaXRlcywgcmVtb3ZlRnJvbUZhdm9yaXRlcyB9IGZyb20gJy4uL3N0b3JlL2Zhdm9yaXRlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcydcblxudHlwZSBDYXJkUHJvcHMgPSB7XG5cdGlkOiBzdHJpbmdcblx0dXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhcmQoeyBpdGVtOiB7IGlkLCB1cmwgfSB9OiB7IGl0ZW06IENhcmRQcm9wcyB9KSB7XG5cdGNvbnN0IFtpc0Zhdm9yaXRlLCBzZXRJc0Zhdm9yaXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdGNvbnN0IGhhbmRsZVRvZ2dsZUZhdm9yaXRlID0gKCkgPT4ge1xuXHRcdGlmIChpc0Zhdm9yaXRlKSB7XG5cdFx0XHRyZW1vdmVGcm9tRmF2b3JpdGVzKGlkKSAvLyDQl9Cw0LzQtdC90LjRgtC1INC90LAg0YHQstC+0Y4g0YTRg9C90LrRhtC40Y4g0LTQu9GPINGD0LTQsNC70LXQvdC40Y8g0LjQtyDQuNC30LHRgNCw0L3QvdC+0LPQvlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhZGRUb0Zhdm9yaXRlcyh7IGlkLCB1cmwgfSkgLy8g0JfQsNC80LXQvdC40YLQtSDQvdCwINGB0LLQvtGOINGE0YPQvdC60YbQuNGOINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQsiDQuNC30LHRgNCw0L3QvdC+0LVcblx0XHR9XG5cdFx0c2V0SXNGYXZvcml0ZSghaXNGYXZvcml0ZSlcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxuXHRcdFx0PEltYWdlXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxuXHRcdFx0XHRzcmM9e3VybH1cblx0XHRcdFx0YWx0PSdjYXQnXG5cdFx0XHRcdHdpZHRoPXsyMjV9XG5cdFx0XHRcdGhlaWdodD17MjI1fVxuXHRcdFx0Lz5cblx0XHRcdDxJY29uQ2xvc2UgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IC8+XG5cdFx0XHQ8SWNvbkhlYXJ0XG5cdFx0XHRcdGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYXJ0fSAke2lzRmF2b3JpdGUgPyBzdHlsZXMuZmF2b3JpdGUgOiAnJ31gfVxuXHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVUb2dnbGVGYXZvcml0ZX1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuIl0sIm5hbWVzIjpbIkljb25DbG9zZSIsIkljb25IZWFydCIsIkltYWdlIiwidXNlU3RhdGUiLCJhZGRUb0Zhdm9yaXRlcyIsInJlbW92ZUZyb21GYXZvcml0ZXMiLCJzdHlsZXMiLCJDYXJkIiwiaXRlbSIsImlkIiwidXJsIiwiaXNGYXZvcml0ZSIsInNldElzRmF2b3JpdGUiLCJoYW5kbGVUb2dnbGVGYXZvcml0ZSIsImRpdiIsImNsYXNzTmFtZSIsImJveCIsImltYWdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbG9zZSIsImhlYXJ0IiwiZmF2b3JpdGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/entities/Card/ui/Card.tsx\n"));

/***/ })

});