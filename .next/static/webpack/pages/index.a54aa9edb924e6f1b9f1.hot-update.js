webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Slides.js":
/*!******************************!*\
  !*** ./components/Slides.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "D:\\Fabiano\\MeusProjetos\\Projeto-loja\\Front-loja\\components\\Slides.js",
    _this = undefined,
    _s = $RefreshSig$();



var items = [{
  id: 1,
  altText: 'Slide 1',
  caption: 'Slide 1'
}, {
  id: 2,
  altText: 'Slide 2',
  caption: 'Slide 2'
}, {
  id: 3,
  altText: 'Slide 3',
  caption: 'Slide 3'
}];

var Slides = function Slides(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animating = _useState2[0],
      setAnimating = _useState2[1];

  var next = function next() {
    if (animating) return;
    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  var previous = function previous() {
    if (animating) return;
    var nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  var goToIndex = function goToIndex(newIndex) {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  var slides = items.map(function (item) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselItem"], {
      className: "custom-tag",
      tag: "div",
      onExiting: function onExiting() {
        return setAnimating(true);
      },
      onExited: function onExited() {
        return setAnimating(false);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
        className: "text-danger",
        captionText: item.caption,
        captionHeader: item.caption
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, item.id, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
      children: ".custom-tag {\n              max-width: 100%;\n              height: 500px;\n              background: black;\n            }"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
      activeIndex: activeIndex,
      next: next,
      previous: previous,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselIndicators"], {
        items: items,
        activeIndex: activeIndex,
        onClickHandler: goToIndex
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), slides, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: previous
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        direction: "next",
        directionText: "Next",
        onClickHandler: next
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);
};

_s(Slides, "FYd3Lqf74+dQScd+D3/2SfzV0cE=");

_c = Slides;
/* harmony default export */ __webpack_exports__["default"] = (Slides);

var _c;

$RefreshReg$(_c, "Slides");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXMuanMiXSwibmFtZXMiOlsiaXRlbXMiLCJpZCIsImFsdFRleHQiLCJjYXB0aW9uIiwiU2xpZGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsInNsaWRlcyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsU0FBTyxFQUFFLFNBRlg7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FEWSxFQU1aO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLFNBQU8sRUFBRSxTQUZYO0FBR0VDLFNBQU8sRUFBRTtBQUhYLENBTlksRUFXWjtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxTQUFPLEVBQUUsU0FGWDtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQVhZLENBQWQ7O0FBa0JBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLENBQUQsQ0FEdEI7QUFBQSxNQUNqQkMsV0FEaUI7QUFBQSxNQUNKQyxjQURJOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLEtBQUQsQ0FGbEI7QUFBQSxNQUVqQkcsU0FGaUI7QUFBQSxNQUVOQyxZQUZNOztBQUl4QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFFBQUlGLFNBQUosRUFBZTtBQUNmLFFBQU1HLFNBQVMsR0FBR0wsV0FBVyxLQUFLUCxLQUFLLENBQUNhLE1BQU4sR0FBZSxDQUEvQixHQUFtQyxDQUFuQyxHQUF1Q04sV0FBVyxHQUFHLENBQXZFO0FBQ0FDLGtCQUFjLENBQUNJLFNBQUQsQ0FBZDtBQUNELEdBSkQ7O0FBTUEsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFJTCxTQUFKLEVBQWU7QUFDZixRQUFNRyxTQUFTLEdBQUdMLFdBQVcsS0FBSyxDQUFoQixHQUFvQlAsS0FBSyxDQUFDYSxNQUFOLEdBQWUsQ0FBbkMsR0FBdUNOLFdBQVcsR0FBRyxDQUF2RTtBQUNBQyxrQkFBYyxDQUFDSSxTQUFELENBQWQ7QUFDRCxHQUpEOztBQU1BLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFFBQUQsRUFBYztBQUM5QixRQUFJUCxTQUFKLEVBQWU7QUFDZkQsa0JBQWMsQ0FBQ1EsUUFBRCxDQUFkO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxNQUFNLEdBQUdqQixLQUFLLENBQUNrQixHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pDLHdCQUNFLHFFQUFDLHVEQUFEO0FBQ0UsZUFBUyxFQUFDLFlBRFo7QUFFRSxTQUFHLEVBQUMsS0FGTjtBQUlFLGVBQVMsRUFBRTtBQUFBLGVBQU1ULFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsT0FKYjtBQUtFLGNBQVEsRUFBRTtBQUFBLGVBQU1BLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsT0FMWjtBQUFBLDZCQU9FLHFFQUFDLDBEQUFEO0FBQWlCLGlCQUFTLEVBQUMsYUFBM0I7QUFBeUMsbUJBQVcsRUFBRVMsSUFBSSxDQUFDaEIsT0FBM0Q7QUFBb0UscUJBQWEsRUFBRWdCLElBQUksQ0FBQ2hCO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixPQUdPZ0IsSUFBSSxDQUFDbEIsRUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFXRCxHQVpjLENBQWY7QUFjQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFVRSxxRUFBQyxtREFBRDtBQUNFLGlCQUFXLEVBQUVNLFdBRGY7QUFFRSxVQUFJLEVBQUVJLElBRlI7QUFHRSxjQUFRLEVBQUVHLFFBSFo7QUFBQSw4QkFLRSxxRUFBQyw2REFBRDtBQUFvQixhQUFLLEVBQUVkLEtBQTNCO0FBQWtDLG1CQUFXLEVBQUVPLFdBQS9DO0FBQTRELHNCQUFjLEVBQUVRO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQU1HRSxNQU5ILGVBT0UscUVBQUMsMERBQUQ7QUFBaUIsaUJBQVMsRUFBQyxNQUEzQjtBQUFrQyxxQkFBYSxFQUFDLFVBQWhEO0FBQTJELHNCQUFjLEVBQUVIO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFLHFFQUFDLDBEQUFEO0FBQWlCLGlCQUFTLEVBQUMsTUFBM0I7QUFBa0MscUJBQWEsRUFBQyxNQUFoRDtBQUF1RCxzQkFBYyxFQUFFSDtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0ExREQ7O0dBQU1QLE07O0tBQUFBLE07QUE0RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE1NGFhOWVkYjkyNGU2ZjFiOWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2Fyb3VzZWwsXHJcbiAgQ2Fyb3VzZWxJdGVtLFxyXG4gIENhcm91c2VsQ29udHJvbCxcclxuICBDYXJvdXNlbEluZGljYXRvcnMsXHJcbiAgQ2Fyb3VzZWxDYXB0aW9uXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGFsdFRleHQ6ICdTbGlkZSAxJyxcclxuICAgIGNhcHRpb246ICdTbGlkZSAxJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMicsXHJcbiAgICBjYXB0aW9uOiAnU2xpZGUgMidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgYWx0VGV4dDogJ1NsaWRlIDMnLFxyXG4gICAgY2FwdGlvbjogJ1NsaWRlIDMnXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgU2xpZGVzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYW5pbWF0aW5nLCBzZXRBbmltYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IDAgPyBpdGVtcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdvVG9JbmRleCA9IChuZXdJbmRleCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2xpZGVzID0gaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2Fyb3VzZWxJdGVtXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXRhZ1wiXHJcbiAgICAgICAgdGFnPVwiZGl2XCJcclxuICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgb25FeGl0aW5nPXsoKSA9PiBzZXRBbmltYXRpbmcodHJ1ZSl9XHJcbiAgICAgICAgb25FeGl0ZWQ9eygpID0+IHNldEFuaW1hdGluZyhmYWxzZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8Q2Fyb3VzZWxDYXB0aW9uIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCIgY2FwdGlvblRleHQ9e2l0ZW0uY2FwdGlvbn0gY2FwdGlvbkhlYWRlcj17aXRlbS5jYXB0aW9ufSAvPlxyXG4gICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYC5jdXN0b20tdGFnIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgfWBcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuICAgICAgICBuZXh0PXtuZXh0fVxyXG4gICAgICAgIHByZXZpb3VzPXtwcmV2aW91c31cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJvdXNlbEluZGljYXRvcnMgaXRlbXM9e2l0ZW1zfSBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9IC8+XHJcbiAgICAgICAge3NsaWRlc31cclxuICAgICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cInByZXZcIiBkaXJlY3Rpb25UZXh0PVwiUHJldmlvdXNcIiBvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9IC8+XHJcbiAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJuZXh0XCIgZGlyZWN0aW9uVGV4dD1cIk5leHRcIiBvbkNsaWNrSGFuZGxlcj17bmV4dH0gLz5cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlczsiXSwic291cmNlUm9vdCI6IiJ9