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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/iconClose/ui/iconClose */ \"(app-pages-browser)/./src/shared/iconClose/ui/iconClose.tsx\");\n/* harmony import */ var _shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/iconHeart/ui/iconHeart */ \"(app-pages-browser)/./src/shared/iconHeart/ui/iconHeart.tsx\");\n/* harmony import */ var _shared_spinner_ui_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/spinner/ui/Spinner */ \"(app-pages-browser)/./src/shared/spinner/ui/Spinner.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/store */ \"(app-pages-browser)/./src/entities/Card/store/store.ts\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/entities/Card/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ Card auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Card() {\n    _s();\n    const [card, setCard] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setLoading(true);\n            const result = await (0,_store_store__WEBPACK_IMPORTED_MODULE_6__.getCard)();\n            setCard(result);\n            setLoading(false);\n        };\n        fetchData();\n    }, []);\n    const addToFavorites = (card)=>{\n        // Проверяем доступность localStorage\n        if (true) {\n            // Получаем текущее избранное из localStorage\n            const localStorageData = JSON.parse(localStorage.getItem(\"favoriteCards\") || \"[]\");\n            // Проверяем, не добавлена ли уже эта карточка в избранное\n            if (!localStorageData.some((item)=>item.id === card.id)) {\n                // Если нет, добавляем её\n                localStorageData.push(card);\n                // Обновляем localStorage\n                localStorage.setItem(\"favoriteCards\", JSON.stringify(localStorageData));\n            }\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_spinner_ui_Spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n            lineNumber: 47,\n            columnNumber: 10\n        }, this);\n    }\n    return card.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardItem, {\n            item: item,\n            onHeartClick: ()=>handleHeartClick(item.id)\n        }, item.id, false, {\n            fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n            lineNumber: 51,\n            columnNumber: 3\n        }, this));\n}\n_s(Card, \"NjOSx+23qWptxA2s+99TbnNmAT0=\");\n_c = Card;\nfunction CardItem(param) {\n    let { item: { id, url }, onHeartClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_7___default().box),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                src: url,\n                alt: \"cat\",\n                width: 225,\n                height: 225\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 68,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_7___default().close)\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 75,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onHeartClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_7___default().heart)\n                }, void 0, false, {\n                    fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 76,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n        lineNumber: 67,\n        columnNumber: 3\n    }, this);\n}\n_c1 = CardItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CardItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9lbnRpdGllcy9DYXJkL3VpL0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDQTtBQUNOO0FBQ25CO0FBQ2E7QUFDSDtBQUNGO0FBTy9CLFNBQVNROztJQUNmLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDVCxNQUFNUyxZQUFZO1lBQ2pCRCxXQUFXO1lBQ1gsTUFBTUUsU0FBUyxNQUFNUixxREFBT0E7WUFDNUJJLFFBQVFJO1lBQ1JGLFdBQVc7UUFDWjtRQUVBQztJQUNELEdBQUcsRUFBRTtJQUVMLE1BQU1FLGlCQUFpQixDQUFDTjtRQUN2QixxQ0FBcUM7UUFDckMsSUFBSSxJQUFrQixFQUFhO1lBQ2pDLDZDQUE2QztZQUM3QyxNQUFNTyxtQkFBbUJDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLG9CQUFvQjtZQUU3RSwwREFBMEQ7WUFDMUQsSUFBSSxDQUFDSixpQkFBaUJLLElBQUksQ0FBQyxDQUFDQyxPQUFvQkEsS0FBS0MsRUFBRSxLQUFLZCxLQUFLYyxFQUFFLEdBQUc7Z0JBQ3ZFLHlCQUF5QjtnQkFDekJQLGlCQUFpQlEsSUFBSSxDQUFDZjtnQkFDdEIseUJBQXlCO2dCQUN6QlUsYUFBYU0sT0FBTyxDQUFDLGlCQUFpQlIsS0FBS1MsU0FBUyxDQUFDVjtZQUNwRDtRQUNGO0lBQ0M7SUFFRixJQUFJTCxTQUFTO1FBQ1oscUJBQU8sOERBQUNULGtFQUFPQTs7Ozs7SUFDaEI7SUFFQSxPQUFPTyxLQUFLa0IsR0FBRyxDQUFDLENBQUNMLHFCQUNoQiw4REFBQ007WUFFQU4sTUFBTUE7WUFDTk8sY0FBYyxJQUFNQyxpQkFBaUJSLEtBQUtDLEVBQUU7V0FGdkNELEtBQUtDLEVBQUU7Ozs7O0FBS2Y7R0ExQ2dCZjtLQUFBQTtBQTRDaEIsU0FBU29CLFNBQVMsS0FNakI7UUFOaUIsRUFDakJOLE1BQU0sRUFBRUMsRUFBRSxFQUFFUSxHQUFHLEVBQUUsRUFDakJGLFlBQVksRUFJWixHQU5pQjtJQU9qQixxQkFDQyw4REFBQ0c7UUFBSUMsV0FBVzFCLDZEQUFVOzswQkFDekIsOERBQUNKLGtEQUFLQTtnQkFDTDhCLFdBQVcxQiwrREFBWTtnQkFDdkI2QixLQUFLTDtnQkFDTE0sS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7OzBCQUVULDhEQUFDdkMsc0VBQVNBO2dCQUFDaUMsV0FBVzFCLCtEQUFZOzs7Ozs7MEJBQ2xDLDhEQUFDa0M7Z0JBQU9DLFNBQVNiOzBCQUNoQiw0RUFBQzVCLHNFQUFTQTtvQkFBQ2dDLFdBQVcxQiwrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEM7TUF0QlNxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZW50aXRpZXMvQ2FyZC91aS9DYXJkLnRzeD82YWM5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEljb25DbG9zZSBmcm9tICdAL3NoYXJlZC9pY29uQ2xvc2UvdWkvaWNvbkNsb3NlJ1xuaW1wb3J0IEljb25IZWFydCBmcm9tICdAL3NoYXJlZC9pY29uSGVhcnQvdWkvaWNvbkhlYXJ0J1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnQC9zaGFyZWQvc3Bpbm5lci91aS9TcGlubmVyJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRDYXJkIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJ1xuXG50eXBlIENhcmRQcm9wcyA9IHtcblx0aWQ6IHN0cmluZ1xuXHR1cmw6IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZCgpIHtcblx0Y29uc3QgW2NhcmQsIHNldENhcmRdID0gdXNlU3RhdGUoW10pXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0c2V0TG9hZGluZyh0cnVlKVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Q2FyZCgpXG5cdFx0XHRzZXRDYXJkKHJlc3VsdClcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXG5cdFx0ZmV0Y2hEYXRhKClcblx0fSwgW10pXG5cblx0Y29uc3QgYWRkVG9GYXZvcml0ZXMgPSAoY2FyZDogQ2FyZFByb3BzKSA9PiB7XG5cdFx0Ly8g0J/RgNC+0LLQtdGA0Y/QtdC8INC00L7RgdGC0YPQv9C90L7RgdGC0YwgbG9jYWxTdG9yYWdlXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0ICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQtdC1INC40LfQsdGA0LDQvdC90L7QtSDQuNC3IGxvY2FsU3RvcmFnZVxuXHRcdCAgY29uc3QgbG9jYWxTdG9yYWdlRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlQ2FyZHMnKSB8fCAnW10nKVxuXHQgIFxuXHRcdCAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQvdC1INC00L7QsdCw0LLQu9C10L3QsCDQu9C4INGD0LbQtSDRjdGC0LAg0LrQsNGA0YLQvtGH0LrQsCDQsiDQuNC30LHRgNCw0L3QvdC+0LVcblx0XHQgIGlmICghbG9jYWxTdG9yYWdlRGF0YS5zb21lKChpdGVtOiBDYXJkUHJvcHMpID0+IGl0ZW0uaWQgPT09IGNhcmQuaWQpKSB7XG5cdFx0XHQvLyDQldGB0LvQuCDQvdC10YIsINC00L7QsdCw0LLQu9GP0LXQvCDQtdGRXG5cdFx0XHRsb2NhbFN0b3JhZ2VEYXRhLnB1c2goY2FyZClcblx0XHRcdC8vINCe0LHQvdC+0LLQu9GP0LXQvCBsb2NhbFN0b3JhZ2Vcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZUNhcmRzJywgSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlRGF0YSkpXG5cdFx0ICB9XG5cdFx0fVxuXHQgIH1cblxuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiA8U3Bpbm5lciAvPlxuXHR9XG5cblx0cmV0dXJuIGNhcmQubWFwKChpdGVtOiBDYXJkUHJvcHMpID0+IChcblx0XHQ8Q2FyZEl0ZW1cblx0XHRcdGtleT17aXRlbS5pZH1cblx0XHRcdGl0ZW09e2l0ZW19XG5cdFx0XHRvbkhlYXJ0Q2xpY2s9eygpID0+IGhhbmRsZUhlYXJ0Q2xpY2soaXRlbS5pZCl9XG5cdFx0Lz5cblx0KSlcbn1cblxuZnVuY3Rpb24gQ2FyZEl0ZW0oe1xuXHRpdGVtOiB7IGlkLCB1cmwgfSxcblx0b25IZWFydENsaWNrLFxufToge1xuXHRpdGVtOiBDYXJkUHJvcHNcblx0b25IZWFydENsaWNrOiAoKSA9PiB2b2lkXG59KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxuXHRcdFx0PEltYWdlXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxuXHRcdFx0XHRzcmM9e3VybH1cblx0XHRcdFx0YWx0PSdjYXQnXG5cdFx0XHRcdHdpZHRoPXsyMjV9XG5cdFx0XHRcdGhlaWdodD17MjI1fVxuXHRcdFx0Lz5cblx0XHRcdDxJY29uQ2xvc2UgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IC8+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e29uSGVhcnRDbGlja30+XG5cdFx0XHRcdDxJY29uSGVhcnQgY2xhc3NOYW1lPXtzdHlsZXMuaGVhcnR9IC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sIm5hbWVzIjpbIkljb25DbG9zZSIsIkljb25IZWFydCIsIlNwaW5uZXIiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0Q2FyZCIsInN0eWxlcyIsIkNhcmQiLCJjYXJkIiwic2V0Q2FyZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hEYXRhIiwicmVzdWx0IiwiYWRkVG9GYXZvcml0ZXMiLCJsb2NhbFN0b3JhZ2VEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNvbWUiLCJpdGVtIiwiaWQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm1hcCIsIkNhcmRJdGVtIiwib25IZWFydENsaWNrIiwiaGFuZGxlSGVhcnRDbGljayIsInVybCIsImRpdiIsImNsYXNzTmFtZSIsImJveCIsImltYWdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbG9zZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoZWFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/entities/Card/ui/Card.tsx\n"));

/***/ })

});