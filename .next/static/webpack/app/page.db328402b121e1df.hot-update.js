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

/***/ "(app-pages-browser)/./src/entities/Card/store/store.ts":
/*!******************************************!*\
  !*** ./src/entities/Card/store/store.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCard: function() { return /* binding */ getCard; }\n/* harmony export */ });\nconst API_KEY = \"live_fGWXkt6sVYPiDjB84xWpzPtDWhxD3iccHvoi7jiwGyEQryCudqUUADIBLu0qdgyK\";\nconst LIMIT = 12;\nconst getCard = async ()=>{\n    const res = await fetch(\"https://api.thecatapi.com/v1/images/search?limit=10\", {\n        cache: \"force-cache\"\n    });\n    const data = await res.json();\n    return data.map((item)=>{\n        return {\n            id: item.id,\n            url: item.url\n        };\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9lbnRpdGllcy9DYXJkL3N0b3JlL3N0b3JlLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUNMO0FBQ0QsTUFBTUMsUUFBUTtBQU9QLE1BQU1DLFVBQVU7SUFDdEIsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQix1REFDRDtRQUFFQyxPQUFPO0lBQWM7SUFHeEIsTUFBTUMsT0FBTyxNQUFNSCxJQUFJSSxJQUFJO0lBRTNCLE9BQU9ELEtBQUtFLEdBQUcsQ0FBQyxDQUFDQztRQUNoQixPQUFPO1lBQ05DLElBQUlELEtBQUtDLEVBQUU7WUFDWEMsS0FBS0YsS0FBS0UsR0FBRztRQUNkO0lBQ0Q7QUFDRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9lbnRpdGllcy9DYXJkL3N0b3JlL3N0b3JlLnRzPzQwNWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9XG5cdCdsaXZlX2ZHV1hrdDZzVllQaURqQjg0eFdwelB0RFdoeEQzaWNjSHZvaTdqaXdHeUVRcnlDdWRxVVVBRElCTHUwcWRneUsnXG5jb25zdCBMSU1JVCA9IDEyXG5cbnR5cGUgZGF0YVR5cGUgPSB7XG5cdGlkOiBzdHJpbmdcblx0dXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGdldENhcmQgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuXHRcdGBodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2ltYWdlcy9zZWFyY2g/bGltaXQ9MTBgLFxuXHRcdHsgY2FjaGU6ICdmb3JjZS1jYWNoZScgfVxuXHQpXG5cblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRyZXR1cm4gZGF0YS5tYXAoKGl0ZW06IGRhdGFUeXBlKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBpdGVtLmlkLFxuXHRcdFx0dXJsOiBpdGVtLnVybCxcblx0XHR9XG5cdH0pXG59XG4iXSwibmFtZXMiOlsiQVBJX0tFWSIsIkxJTUlUIiwiZ2V0Q2FyZCIsInJlcyIsImZldGNoIiwiY2FjaGUiLCJkYXRhIiwianNvbiIsIm1hcCIsIml0ZW0iLCJpZCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/entities/Card/store/store.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/entities/Card/store/useDataCard.ts":
/*!************************************************!*\
  !*** ./src/entities/Card/store/useDataCard.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"(app-pages-browser)/./src/entities/Card/store/store.ts\");\n/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLocalStorage */ \"(app-pages-browser)/./src/entities/Card/store/useLocalStorage.ts\");\n// useCardData.ts\n\n\n\nconst useCardData = ()=>{\n    const [card, setCard] = (0,_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__.useLocalStorage)(\"cardData\", []);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setLoading(true);\n            try {\n                const result = await (0,_store_store__WEBPACK_IMPORTED_MODULE_1__.getCard)();\n                setCard(result);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        // Выполняем запрос только если данных еще нет\n        if (card.length === 0) {\n            fetchData();\n        }\n    }, [\n        card,\n        setCard\n    ]);\n    return {\n        card,\n        loading\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCardData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9lbnRpdGllcy9DYXJkL3N0b3JlL3VzZURhdGFDYXJkLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUJBQWlCO0FBQzBCO0FBQ0g7QUFDVztBQUVuRCxNQUFNSSxjQUFjO0lBQ25CLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCxpRUFBZUEsQ0FBQyxZQUFZLEVBQUU7SUFDdEQsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNULE1BQU1TLFlBQVk7WUFDakJELFdBQVc7WUFDWCxJQUFJO2dCQUNILE1BQU1FLFNBQVMsTUFBTVIscURBQU9BO2dCQUM1QkksUUFBUUk7WUFDVCxFQUFFLE9BQU9DLE9BQU87Z0JBQ2ZDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3ZDLFNBQVU7Z0JBQ1RILFdBQVc7WUFDWjtRQUNEO1FBRUEsOENBQThDO1FBQzlDLElBQUlILEtBQUtRLE1BQU0sS0FBSyxHQUFHO1lBQ3RCSjtRQUNEO0lBQ0QsR0FBRztRQUFDSjtRQUFNQztLQUFRO0lBRWxCLE9BQU87UUFBRUQ7UUFBTUU7SUFBUTtBQUN4QjtBQUVBLCtEQUFlSCxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9lbnRpdGllcy9DYXJkL3N0b3JlL3VzZURhdGFDYXJkLnRzPzZkODYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlQ2FyZERhdGEudHNcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldENhcmQgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vdXNlTG9jYWxTdG9yYWdlJ1xuXG5jb25zdCB1c2VDYXJkRGF0YSA9ICgpID0+IHtcblx0Y29uc3QgW2NhcmQsIHNldENhcmRdID0gdXNlTG9jYWxTdG9yYWdlKCdjYXJkRGF0YScsIFtdKVxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcblx0XHRcdHNldExvYWRpbmcodHJ1ZSlcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENhcmQoKVxuXHRcdFx0XHRzZXRDYXJkKHJlc3VsdClcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpXG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vINCS0YvQv9C+0LvQvdGP0LXQvCDQt9Cw0L/RgNC+0YEg0YLQvtC70YzQutC+INC10YHQu9C4INC00LDQvdC90YvRhSDQtdGJ0LUg0L3QtdGCXG5cdFx0aWYgKGNhcmQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRmZXRjaERhdGEoKVxuXHRcdH1cblx0fSwgW2NhcmQsIHNldENhcmRdKVxuXG5cdHJldHVybiB7IGNhcmQsIGxvYWRpbmcgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VDYXJkRGF0YVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0Q2FyZCIsInVzZUxvY2FsU3RvcmFnZSIsInVzZUNhcmREYXRhIiwiY2FyZCIsInNldENhcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRGF0YSIsInJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/entities/Card/store/useDataCard.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/entities/Card/store/useLocalStorage.ts":
/*!****************************************************!*\
  !*** ./src/entities/Card/store/useLocalStorage.ts ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLocalStorage: function() { return /* binding */ useLocalStorage; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useLocalStorage = (key, initialValue)=>{\n    const storedValue =  true ? localStorage.getItem(key) : 0;\n    const initial = storedValue ? JSON.parse(storedValue) : initialValue;\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);\n    const setStoredValue = (newValue)=>{\n        setValue(newValue);\n        localStorage.setItem(key, JSON.stringify(newValue));\n    };\n    return [\n        value,\n        setStoredValue\n    ];\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9lbnRpdGllcy9DYXJkL3N0b3JlL3VzZUxvY2FsU3RvcmFnZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFFMUIsTUFBTUMsa0JBQWtCLENBQUNDLEtBQWFDO0lBQzNDLE1BQU1DLGNBQWMsS0FBa0IsR0FBY0MsYUFBYUMsT0FBTyxDQUFDSixPQUFPLENBQUk7SUFDcEYsTUFBTUssVUFBVUgsY0FBY0ksS0FBS0MsS0FBSyxDQUFDTCxlQUFlRDtJQUN4RCxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUNPO0lBRW5DLE1BQU1LLGlCQUFpQixDQUFDQztRQUN0QkYsU0FBU0U7UUFDVFIsYUFBYVMsT0FBTyxDQUFDWixLQUFLTSxLQUFLTyxTQUFTLENBQUNGO0lBQzNDO0lBRUEsT0FBTztRQUFDSDtRQUFPRTtLQUFlO0FBQ2hDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2VudGl0aWVzL0NhcmQvc3RvcmUvdXNlTG9jYWxTdG9yYWdlLnRzPzNlOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSAoa2V5OiBzdHJpbmcsIGluaXRpYWxWYWx1ZTogYW55KSA9PiB7XG4gIGNvbnN0IHN0b3JlZFZhbHVlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIDogbnVsbDtcbiAgY29uc3QgaW5pdGlhbCA9IHN0b3JlZFZhbHVlID8gSlNPTi5wYXJzZShzdG9yZWRWYWx1ZSkgOiBpbml0aWFsVmFsdWU7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbCk7XG5cbiAgY29uc3Qgc2V0U3RvcmVkVmFsdWUgPSAobmV3VmFsdWU6IGFueSkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG5ld1ZhbHVlKSk7XG4gIH07XG5cbiAgcmV0dXJuIFt2YWx1ZSwgc2V0U3RvcmVkVmFsdWVdIGFzIGNvbnN0O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUxvY2FsU3RvcmFnZSIsImtleSIsImluaXRpYWxWYWx1ZSIsInN0b3JlZFZhbHVlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWwiLCJKU09OIiwicGFyc2UiLCJ2YWx1ZSIsInNldFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJuZXdWYWx1ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/entities/Card/store/useLocalStorage.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/entities/Card/ui/Card.tsx":
/*!***************************************!*\
  !*** ./src/entities/Card/ui/Card.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/iconClose/ui/iconClose */ \"(app-pages-browser)/./src/shared/iconClose/ui/iconClose.tsx\");\n/* harmony import */ var _shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/iconHeart/ui/iconHeart */ \"(app-pages-browser)/./src/shared/iconHeart/ui/iconHeart.tsx\");\n/* harmony import */ var _shared_spinner_ui_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/spinner/ui/Spinner */ \"(app-pages-browser)/./src/shared/spinner/ui/Spinner.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/entities/Card/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_useDataCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/useDataCard */ \"(app-pages-browser)/./src/entities/Card/store/useDataCard.ts\");\n/* __next_internal_client_entry_do_not_use__ Card auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Card() {\n    _s();\n    const { card, loading } = (0,_store_useDataCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_spinner_ui_Spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n            lineNumber: 22,\n            columnNumber: 10\n        }, this);\n    }\n    return card.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardItem, {\n            item: item\n        }, item.id, false, {\n            fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n            lineNumber: 25,\n            columnNumber: 39\n        }, this));\n}\n_s(Card, \"olV1P1biMS98K/kMC/8ex7h5TMo=\", false, function() {\n    return [\n        _store_useDataCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Card;\nfunction CardItem(param) {\n    let { item: { url } } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().box),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),\n                src: url,\n                alt: \"cat\",\n                width: 225,\n                height: 225\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconClose_ui_iconClose__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().close)\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_iconHeart_ui_iconHeart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_6___default().heart)\n            }, void 0, false, {\n                fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maksimkorablev/Desktop/web-project/new_project/cats/src/entities/Card/ui/Card.tsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, this);\n}\n_c1 = CardItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"CardItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9lbnRpdGllcy9DYXJkL3VpL0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ0E7QUFDTjtBQUNuQjtBQUlRO0FBQ1E7QUFRdkMsU0FBU007O0lBQ2YsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHSCw4REFBV0E7SUFFckMsSUFBSUcsU0FBUztRQUNaLHFCQUFPLDhEQUFDTixrRUFBT0E7Ozs7O0lBQ2hCO0lBRUEsT0FBT0ssS0FBS0UsR0FBRyxDQUFDLENBQUNDLHFCQUFvQiw4REFBQ0M7WUFBdUJELE1BQU1BO1dBQWZBLEtBQUtFLEVBQUU7Ozs7O0FBQzVEO0dBUmdCTjs7UUFDV0QsMERBQVdBOzs7S0FEdEJDO0FBVWhCLFNBQVNLLFNBQVMsS0FBc0M7UUFBdEMsRUFBRUQsTUFBTSxFQUFFRyxHQUFHLEVBQUUsRUFBdUIsR0FBdEM7SUFDakIscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVdYLDZEQUFVOzswQkFDekIsOERBQUNELGtEQUFLQTtnQkFDTFksV0FBV1gsK0RBQVk7Z0JBQ3ZCYyxLQUFLTDtnQkFDTE0sS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7OzBCQUVULDhEQUFDckIsc0VBQVNBO2dCQUFDZSxXQUFXWCwrREFBWTs7Ozs7OzBCQUNsQyw4REFBQ0gsc0VBQVNBO2dCQUFDYyxXQUFXWCwrREFBWTs7Ozs7Ozs7Ozs7O0FBR3JDO01BZFNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9lbnRpdGllcy9DYXJkL3VpL0NhcmQudHN4PzZhYzkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSWNvbkNsb3NlIGZyb20gJ0Avc2hhcmVkL2ljb25DbG9zZS91aS9pY29uQ2xvc2UnXG5pbXBvcnQgSWNvbkhlYXJ0IGZyb20gJ0Avc2hhcmVkL2ljb25IZWFydC91aS9pY29uSGVhcnQnXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdAL3NoYXJlZC9zcGlubmVyL3VpL1NwaW5uZXInXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldENhcmQgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uL3N0b3JlL3VzZUxvY2FsU3RvcmFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnXG5pbXBvcnQgdXNlQ2FyZERhdGEgZnJvbSAnLi4vc3RvcmUvdXNlRGF0YUNhcmQnXG5cbnR5cGUgQ2FyZFByb3BzID0ge1xuXHRpZDogc3RyaW5nXG5cdHVybDogc3RyaW5nXG5cdGJyZWVkczogW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhcmQoKSB7XG5cdGNvbnN0IHsgY2FyZCwgbG9hZGluZyB9ID0gdXNlQ2FyZERhdGEoKTtcblxuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiA8U3Bpbm5lciAvPlxuXHR9XG5cblx0cmV0dXJuIGNhcmQubWFwKChpdGVtOiBDYXJkUHJvcHMpID0+IDxDYXJkSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+KVxufVxuXG5mdW5jdGlvbiBDYXJkSXRlbSh7IGl0ZW06IHsgdXJsIH0gfTogeyBpdGVtOiBDYXJkUHJvcHMgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cblx0XHRcdDxJbWFnZVxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cblx0XHRcdFx0c3JjPXt1cmx9XG5cdFx0XHRcdGFsdD0nY2F0J1xuXHRcdFx0XHR3aWR0aD17MjI1fVxuXHRcdFx0XHRoZWlnaHQ9ezIyNX1cblx0XHRcdC8+XG5cdFx0XHQ8SWNvbkNsb3NlIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfSAvPlxuXHRcdFx0PEljb25IZWFydCBjbGFzc05hbWU9e3N0eWxlcy5oZWFydH0gLz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sIm5hbWVzIjpbIkljb25DbG9zZSIsIkljb25IZWFydCIsIlNwaW5uZXIiLCJJbWFnZSIsInN0eWxlcyIsInVzZUNhcmREYXRhIiwiQ2FyZCIsImNhcmQiLCJsb2FkaW5nIiwibWFwIiwiaXRlbSIsIkNhcmRJdGVtIiwiaWQiLCJ1cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJib3giLCJpbWFnZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xvc2UiLCJoZWFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/entities/Card/ui/Card.tsx\n"));

/***/ })

});