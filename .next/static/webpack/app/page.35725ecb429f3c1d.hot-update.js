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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/iconClose/ui/iconClose */ \"(app-pages-browser)/./src/shared/iconClose/ui/iconClose.tsx\");\n/* harmony import */ var _shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/iconHeart/ui/iconHeart */ \"(app-pages-browser)/./src/shared/iconHeart/ui/iconHeart.tsx\");\n/* harmony import */ var _shared_spinner_ui_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/spinner/ui/Spinner */ \"(app-pages-browser)/./src/shared/spinner/ui/Spinner.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/store */ \"(app-pages-browser)/./src/entities/Card/store/store.ts\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/entities/Card/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_useFavoriteCards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/useFavoriteCards */ \"(app-pages-browser)/./src/entities/Card/store/useFavoriteCards.ts\");\n/* __next_internal_client_entry_do_not_use__ Card auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Card() {\n    _s();\n    const [card, setCard] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setLoading(true);\n            const result = await (0,_store_store__WEBPACK_IMPORTED_MODULE_6__.getCard)();\n            setCard(result);\n            setLoading(false);\n        };\n        fetchData();\n    }, []);\n    const { addToFavorites } = (0,_store_useFavoriteCards__WEBPACK_IMPORTED_MODULE_7__.useFavoriteCards)(card);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_spinner_ui_Spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n            lineNumber: 33,\n            columnNumber: 10\n        }, this);\n    }\n    return card.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardItem, {\n            item: item,\n            onHeartClick: ()=>addToFavorites(item.id)\n        }, item.id, false, {\n            fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n            lineNumber: 37,\n            columnNumber: 3\n        }, this));\n}\n_s(Card, \"bHpgcn6Qu3Fnw+Uf34G/EpQutTM=\", false, function() {\n    return [\n        _store_useFavoriteCards__WEBPACK_IMPORTED_MODULE_7__.useFavoriteCards\n    ];\n});\n_c = Card;\nfunction CardItem(param) {\n    let { item: { id, url }, onHeartClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_8___default().box),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),\n                src: url,\n                alt: \"cat\",\n                width: 225,\n                height: 225\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_8___default().close)\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onHeartClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_8___default().heart)\n                }, void 0, false, {\n                    fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n        lineNumber: 53,\n        columnNumber: 3\n    }, this);\n}\n_c1 = CardItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CardItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9lbnRpdGllcy9DYXJkL3VpL0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ0E7QUFDTjtBQUNuQjtBQUNhO0FBQ0g7QUFDRjtBQUNzQjtBQU9yRCxTQUFTUzs7SUFDZixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1QsTUFBTVUsWUFBWTtZQUNqQkQsV0FBVztZQUNYLE1BQU1FLFNBQVMsTUFBTVQscURBQU9BO1lBQzVCSyxRQUFRSTtZQUNSRixXQUFXO1FBQ1o7UUFFQUM7SUFDRCxHQUFHLEVBQUU7SUFDTCxNQUFNLEVBQUNFLGNBQWMsRUFBQyxHQUFHUix5RUFBZ0JBLENBQUNFO0lBRTFDLElBQUlFLFNBQVM7UUFDWixxQkFBTyw4REFBQ1Ysa0VBQU9BOzs7OztJQUNoQjtJQUVBLE9BQU9RLEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEIsOERBQUNDO1lBRUFELE1BQU1BO1lBQ05FLGNBQWMsSUFBTUosZUFBZUUsS0FBS0csRUFBRTtXQUZyQ0gsS0FBS0csRUFBRTs7Ozs7QUFLZjtHQTNCZ0JaOztRQWNVRCxxRUFBZ0JBOzs7S0FkMUJDO0FBNkJoQixTQUFTVSxTQUFTLEtBTWpCO1FBTmlCLEVBQ2pCRCxNQUFNLEVBQUVHLEVBQUUsRUFBRUMsR0FBRyxFQUFFLEVBQ2pCRixZQUFZLEVBSVosR0FOaUI7SUFPakIscUJBQ0MsOERBQUNHO1FBQUlDLFdBQVdqQiw2REFBVTs7MEJBQ3pCLDhEQUFDSixrREFBS0E7Z0JBQ0xxQixXQUFXakIsK0RBQVk7Z0JBQ3ZCb0IsS0FBS0w7Z0JBQ0xNLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Ozs7OzswQkFFVCw4REFBQzlCLHNFQUFTQTtnQkFBQ3dCLFdBQVdqQiwrREFBWTs7Ozs7OzBCQUNsQyw4REFBQ3lCO2dCQUFPQyxTQUFTYjswQkFDaEIsNEVBQUNuQixzRUFBU0E7b0JBQUN1QixXQUFXakIsK0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO01BdEJTWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZW50aXRpZXMvQ2FyZC91aS9DYXJkLnRzeD82YWM5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEljb25DbG9zZSBmcm9tICdAL3NoYXJlZC9pY29uQ2xvc2UvdWkvaWNvbkNsb3NlJ1xuaW1wb3J0IEljb25IZWFydCBmcm9tICdAL3NoYXJlZC9pY29uSGVhcnQvdWkvaWNvbkhlYXJ0J1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnQC9zaGFyZWQvc3Bpbm5lci91aS9TcGlubmVyJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRDYXJkIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRmF2b3JpdGVDYXJkcyB9IGZyb20gJy4uL3N0b3JlL3VzZUZhdm9yaXRlQ2FyZHMnXG5cbmV4cG9ydCB0eXBlIENhcmRQcm9wcyA9IHtcblx0aWQ6IHN0cmluZ1xuXHR1cmw6IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZCgpIHtcblx0Y29uc3QgW2NhcmQsIHNldENhcmRdID0gdXNlU3RhdGUoW10pXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0c2V0TG9hZGluZyh0cnVlKVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Q2FyZCgpXG5cdFx0XHRzZXRDYXJkKHJlc3VsdClcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXG5cdFx0ZmV0Y2hEYXRhKClcblx0fSwgW10pXG5cdGNvbnN0IHthZGRUb0Zhdm9yaXRlc30gPSB1c2VGYXZvcml0ZUNhcmRzKGNhcmQpXG5cblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gPFNwaW5uZXIgLz5cblx0fVxuXG5cdHJldHVybiBjYXJkLm1hcCgoaXRlbTogQ2FyZFByb3BzKSA9PiAoXG5cdFx0PENhcmRJdGVtXG5cdFx0XHRrZXk9e2l0ZW0uaWR9XG5cdFx0XHRpdGVtPXtpdGVtfVxuXHRcdFx0b25IZWFydENsaWNrPXsoKSA9PiBhZGRUb0Zhdm9yaXRlcyhpdGVtLmlkKX1cblx0XHQvPlxuXHQpKVxufVxuXG5mdW5jdGlvbiBDYXJkSXRlbSh7XG5cdGl0ZW06IHsgaWQsIHVybCB9LFxuXHRvbkhlYXJ0Q2xpY2ssXG59OiB7XG5cdGl0ZW06IENhcmRQcm9wc1xuXHRvbkhlYXJ0Q2xpY2s6ICgpID0+IHZvaWRcbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XG5cdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG5cdFx0XHRcdHNyYz17dXJsfVxuXHRcdFx0XHRhbHQ9J2NhdCdcblx0XHRcdFx0d2lkdGg9ezIyNX1cblx0XHRcdFx0aGVpZ2h0PXsyMjV9XG5cdFx0XHQvPlxuXHRcdFx0PEljb25DbG9zZSBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gLz5cblx0XHRcdDxidXR0b24gb25DbGljaz17b25IZWFydENsaWNrfT5cblx0XHRcdFx0PEljb25IZWFydCBjbGFzc05hbWU9e3N0eWxlcy5oZWFydH0gLz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iXSwibmFtZXMiOlsiSWNvbkNsb3NlIiwiSWNvbkhlYXJ0IiwiU3Bpbm5lciIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRDYXJkIiwic3R5bGVzIiwidXNlRmF2b3JpdGVDYXJkcyIsIkNhcmQiLCJjYXJkIiwic2V0Q2FyZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hEYXRhIiwicmVzdWx0IiwiYWRkVG9GYXZvcml0ZXMiLCJtYXAiLCJpdGVtIiwiQ2FyZEl0ZW0iLCJvbkhlYXJ0Q2xpY2siLCJpZCIsInVybCIsImRpdiIsImNsYXNzTmFtZSIsImJveCIsImltYWdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbG9zZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoZWFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/entities/Card/ui/Card.tsx\n"));

/***/ })

});