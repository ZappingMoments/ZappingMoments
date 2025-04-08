/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/nuir/page",{

/***/ "(app-pages-browser)/./src/lib/i18n/config.ts":
/*!********************************!*\
  !*** ./src/lib/i18n/config.ts ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/lib/i18n/utils.ts":
/*!*******************************!*\
  !*** ./src/lib/i18n/utils.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLocalizedPath: () => (/* binding */ useLocalizedPath)\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"(app-pages-browser)/./src/lib/i18n/config.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ useLocalizedPath auto */ \n\n/**\r\n * Returns a path with the current language prefix\r\n * @param path The path to add the language prefix to\r\n * @returns The path with the language prefix\r\n */ function useLocalizedPath() {\n    let path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname)();\n    // Extract the language from the pathname\n    const pathSegments = pathname.split('/');\n    const lang = pathSegments[1] || _config__WEBPACK_IMPORTED_MODULE_1__.defaultLanguage;\n    // Validate the language\n    const currentLang = (0,_config__WEBPACK_IMPORTED_MODULE_1__.isValidLanguage)(lang) ? lang : _config__WEBPACK_IMPORTED_MODULE_1__.defaultLanguage;\n    // If the path is empty, just return the language prefix\n    if (!path) {\n        return `/${currentLang}`;\n    }\n    // Ensure the path starts with a slash\n    const normalizedPath = path.startsWith('/') ? path : `/${path}`;\n    // If the path already has a language prefix, replace it with the current language\n    if (normalizedPath.startsWith('/en/') || normalizedPath.startsWith('/pt/')) {\n        return `/${currentLang}${normalizedPath.substring(3)}`;\n    }\n    // Return the path with the language prefix\n    return `/${currentLang}${normalizedPath}`;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvaTE4bi91dGlscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O3NFQUU4QztBQUNjO0FBRTVEOzs7O0NBSUMsR0FDTSxTQUFTRztRQUFpQkMsT0FBQUEsaUVBQWU7SUFDOUMsTUFBTUMsV0FBV0wsNERBQVdBO0lBRTVCLHlDQUF5QztJQUN6QyxNQUFNTSxlQUFlRCxTQUFTRSxLQUFLLENBQUM7SUFDcEMsTUFBTUMsT0FBT0YsWUFBWSxDQUFDLEVBQUUsSUFBSUwsb0RBQWVBO0lBRS9DLHdCQUF3QjtJQUN4QixNQUFNUSxjQUFjUCx3REFBZUEsQ0FBQ00sUUFBUUEsT0FBT1Asb0RBQWVBO0lBRWxFLHdEQUF3RDtJQUN4RCxJQUFJLENBQUNHLE1BQU07UUFDVCxPQUFPLENBQUMsQ0FBQyxFQUFFSyxhQUFhO0lBQzFCO0lBRUEsc0NBQXNDO0lBQ3RDLE1BQU1DLGlCQUFpQk4sS0FBS08sVUFBVSxDQUFDLE9BQU9QLE9BQU8sQ0FBQyxDQUFDLEVBQUVBLE1BQU07SUFFL0Qsa0ZBQWtGO0lBQ2xGLElBQUlNLGVBQWVDLFVBQVUsQ0FBQyxXQUFXRCxlQUFlQyxVQUFVLENBQUMsU0FBUztRQUMxRSxPQUFPLENBQUMsQ0FBQyxFQUFFRixjQUFjQyxlQUFlRSxTQUFTLENBQUMsSUFBSTtJQUN4RDtJQUVBLDJDQUEyQztJQUMzQyxPQUFPLENBQUMsQ0FBQyxFQUFFSCxjQUFjQyxnQkFBZ0I7QUFDM0MiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmFuZGlcXE9uZURyaXZlXFxBbWJpZW50ZSBkZSBUcmFiYWxob1xcWmFwcGluZ21vbWVudHN3ZWJcXHNyY1xcbGliXFxpMThuXFx1dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IGRlZmF1bHRMYW5ndWFnZSwgaXNWYWxpZExhbmd1YWdlIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBwYXRoIHdpdGggdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgcHJlZml4XHJcbiAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIHRvIGFkZCB0aGUgbGFuZ3VhZ2UgcHJlZml4IHRvXHJcbiAqIEByZXR1cm5zIFRoZSBwYXRoIHdpdGggdGhlIGxhbmd1YWdlIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsaXplZFBhdGgocGF0aDogc3RyaW5nID0gJycpIHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgXHJcbiAgLy8gRXh0cmFjdCB0aGUgbGFuZ3VhZ2UgZnJvbSB0aGUgcGF0aG5hbWVcclxuICBjb25zdCBwYXRoU2VnbWVudHMgPSBwYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gIGNvbnN0IGxhbmcgPSBwYXRoU2VnbWVudHNbMV0gfHwgZGVmYXVsdExhbmd1YWdlO1xyXG4gIFxyXG4gIC8vIFZhbGlkYXRlIHRoZSBsYW5ndWFnZVxyXG4gIGNvbnN0IGN1cnJlbnRMYW5nID0gaXNWYWxpZExhbmd1YWdlKGxhbmcpID8gbGFuZyA6IGRlZmF1bHRMYW5ndWFnZTtcclxuICBcclxuICAvLyBJZiB0aGUgcGF0aCBpcyBlbXB0eSwganVzdCByZXR1cm4gdGhlIGxhbmd1YWdlIHByZWZpeFxyXG4gIGlmICghcGF0aCkge1xyXG4gICAgcmV0dXJuIGAvJHtjdXJyZW50TGFuZ31gO1xyXG4gIH1cclxuICBcclxuICAvLyBFbnN1cmUgdGhlIHBhdGggc3RhcnRzIHdpdGggYSBzbGFzaFxyXG4gIGNvbnN0IG5vcm1hbGl6ZWRQYXRoID0gcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoIDogYC8ke3BhdGh9YDtcclxuICBcclxuICAvLyBJZiB0aGUgcGF0aCBhbHJlYWR5IGhhcyBhIGxhbmd1YWdlIHByZWZpeCwgcmVwbGFjZSBpdCB3aXRoIHRoZSBjdXJyZW50IGxhbmd1YWdlXHJcbiAgaWYgKG5vcm1hbGl6ZWRQYXRoLnN0YXJ0c1dpdGgoJy9lbi8nKSB8fCBub3JtYWxpemVkUGF0aC5zdGFydHNXaXRoKCcvcHQvJykpIHtcclxuICAgIHJldHVybiBgLyR7Y3VycmVudExhbmd9JHtub3JtYWxpemVkUGF0aC5zdWJzdHJpbmcoMyl9YDtcclxuICB9XHJcbiAgXHJcbiAgLy8gUmV0dXJuIHRoZSBwYXRoIHdpdGggdGhlIGxhbmd1YWdlIHByZWZpeFxyXG4gIHJldHVybiBgLyR7Y3VycmVudExhbmd9JHtub3JtYWxpemVkUGF0aH1gO1xyXG59ICJdLCJuYW1lcyI6WyJ1c2VQYXRobmFtZSIsImRlZmF1bHRMYW5ndWFnZSIsImlzVmFsaWRMYW5ndWFnZSIsInVzZUxvY2FsaXplZFBhdGgiLCJwYXRoIiwicGF0aG5hbWUiLCJwYXRoU2VnbWVudHMiLCJzcGxpdCIsImxhbmciLCJjdXJyZW50TGFuZyIsIm5vcm1hbGl6ZWRQYXRoIiwic3RhcnRzV2l0aCIsInN1YnN0cmluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/i18n/utils.ts\n"));

/***/ })

});