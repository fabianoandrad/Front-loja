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
  src: 'assets/carrinho.png',
  altText: '',
  caption: ''
}, {
  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  altText: 'Slide 2',
  caption: 'Slide 2'
}, {
  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: item.src,
        alt: item.altText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
        className: "text-danger",
        captionText: item.caption,
        captionHeader: item.caption
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this)]
    }, item.src, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
      children: ".custom-tag {\n              max-width: 100%;\n              height: 600px;\n              background: black;\n            }"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
        lineNumber: 80,
        columnNumber: 9
      }, _this), slides, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: previous
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        direction: "next",
        directionText: "Next",
        onClickHandler: next
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXMuanMiXSwibmFtZXMiOlsiaXRlbXMiLCJzcmMiLCJhbHRUZXh0IiwiY2FwdGlvbiIsIlNsaWRlcyIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJzbGlkZXMiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQ0VDLEtBQUcsRUFBRSxxQkFEUDtBQUVFQyxTQUFPLEVBQUUsRUFGWDtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQURZLEVBTVo7QUFDRUYsS0FBRyxFQUFFLDRwQkFEUDtBQUVFQyxTQUFPLEVBQUUsU0FGWDtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQU5ZLEVBV1o7QUFDRUYsS0FBRyxFQUFFLG1wQkFEUDtBQUVFQyxTQUFPLEVBQUUsU0FGWDtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQVhZLENBQWQ7O0FBa0JBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLENBQUQsQ0FEdEI7QUFBQSxNQUNqQkMsV0FEaUI7QUFBQSxNQUNKQyxjQURJOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLEtBQUQsQ0FGbEI7QUFBQSxNQUVqQkcsU0FGaUI7QUFBQSxNQUVOQyxZQUZNOztBQUl4QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFFBQUlGLFNBQUosRUFBZTtBQUNmLFFBQU1HLFNBQVMsR0FBR0wsV0FBVyxLQUFLUCxLQUFLLENBQUNhLE1BQU4sR0FBZSxDQUEvQixHQUFtQyxDQUFuQyxHQUF1Q04sV0FBVyxHQUFHLENBQXZFO0FBQ0FDLGtCQUFjLENBQUNJLFNBQUQsQ0FBZDtBQUNELEdBSkQ7O0FBTUEsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFJTCxTQUFKLEVBQWU7QUFDZixRQUFNRyxTQUFTLEdBQUdMLFdBQVcsS0FBSyxDQUFoQixHQUFvQlAsS0FBSyxDQUFDYSxNQUFOLEdBQWUsQ0FBbkMsR0FBdUNOLFdBQVcsR0FBRyxDQUF2RTtBQUNBQyxrQkFBYyxDQUFDSSxTQUFELENBQWQ7QUFDRCxHQUpEOztBQU1BLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFFBQUQsRUFBYztBQUM5QixRQUFJUCxTQUFKLEVBQWU7QUFDZkQsa0JBQWMsQ0FBQ1EsUUFBRCxDQUFkO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxNQUFNLEdBQUdqQixLQUFLLENBQUNrQixHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pDLHdCQUNFLHFFQUFDLHVEQUFEO0FBQ0UsZUFBUyxFQUFDLFlBRFo7QUFFRSxTQUFHLEVBQUMsS0FGTjtBQUlFLGVBQVMsRUFBRTtBQUFBLGVBQU1ULFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsT0FKYjtBQUtFLGNBQVEsRUFBRTtBQUFBLGVBQU1BLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsT0FMWjtBQUFBLDhCQU9JO0FBQUssV0FBRyxFQUFFUyxJQUFJLENBQUNsQixHQUFmO0FBQW9CLFdBQUcsRUFBRWtCLElBQUksQ0FBQ2pCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixlQVFFLHFFQUFDLDBEQUFEO0FBQWlCLGlCQUFTLEVBQUMsYUFBM0I7QUFBeUMsbUJBQVcsRUFBRWlCLElBQUksQ0FBQ2hCLE9BQTNEO0FBQW9FLHFCQUFhLEVBQUVnQixJQUFJLENBQUNoQjtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQSxPQUdPZ0IsSUFBSSxDQUFDbEIsR0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFZRCxHQWJjLENBQWY7QUFlQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFVRSxxRUFBQyxtREFBRDtBQUNFLGlCQUFXLEVBQUVNLFdBRGY7QUFFRSxVQUFJLEVBQUVJLElBRlI7QUFHRSxjQUFRLEVBQUVHLFFBSFo7QUFBQSw4QkFLRSxxRUFBQyw2REFBRDtBQUFvQixhQUFLLEVBQUVkLEtBQTNCO0FBQWtDLG1CQUFXLEVBQUVPLFdBQS9DO0FBQTRELHNCQUFjLEVBQUVRO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQU1HRSxNQU5ILGVBT0UscUVBQUMsMERBQUQ7QUFBaUIsaUJBQVMsRUFBQyxNQUEzQjtBQUFrQyxxQkFBYSxFQUFDLFVBQWhEO0FBQTJELHNCQUFjLEVBQUVIO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVFFLHFFQUFDLDBEQUFEO0FBQWlCLGlCQUFTLEVBQUMsTUFBM0I7QUFBa0MscUJBQWEsRUFBQyxNQUFoRDtBQUF1RCxzQkFBYyxFQUFFSDtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0EzREQ7O0dBQU1QLE07O0tBQUFBLE07QUE2RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI1NDk2NjdhZjFiYTc4ZTc0NmQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2Fyb3VzZWwsXHJcbiAgQ2Fyb3VzZWxJdGVtLFxyXG4gIENhcm91c2VsQ29udHJvbCxcclxuICBDYXJvdXNlbEluZGljYXRvcnMsXHJcbiAgQ2Fyb3VzZWxDYXB0aW9uXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7XHJcbiAgICBzcmM6ICdhc3NldHMvY2FycmluaG8ucG5nJyxcclxuICAgIGFsdFRleHQ6ICcnLFxyXG4gICAgY2FwdGlvbjogJydcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTIwJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjM0NDQlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWEyMCUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM2NjYlMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjQ3LjMyMDMxMjUlMjIlMjB5JTNEJTIyMjE4LjMlMjIlM0VTZWNvbmQlMjBzbGlkZSUzQyUyRnRleHQlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMicsXHJcbiAgICBjYXB0aW9uOiAnU2xpZGUgMidcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTIxJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjMzMzMlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWEyMSUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM1NTUlMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjc3JTIyJTIweSUzRCUyMjIxOC4zJTIyJTNFVGhpcmQlMjBzbGlkZSUzQyUyRnRleHQlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMycsXHJcbiAgICBjYXB0aW9uOiAnU2xpZGUgMydcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBTbGlkZXMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzbGlkZXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJvdXNlbEl0ZW1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tdGFnXCJcclxuICAgICAgICB0YWc9XCJkaXZcIlxyXG4gICAgICAgIGtleT17aXRlbS5zcmN9XHJcbiAgICAgICAgb25FeGl0aW5nPXsoKSA9PiBzZXRBbmltYXRpbmcodHJ1ZSl9XHJcbiAgICAgICAgb25FeGl0ZWQ9eygpID0+IHNldEFuaW1hdGluZyhmYWxzZSl9XHJcbiAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLmFsdFRleHR9IC8+XHJcbiAgICAgICAgPENhcm91c2VsQ2FwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiIGNhcHRpb25UZXh0PXtpdGVtLmNhcHRpb259IGNhcHRpb25IZWFkZXI9e2l0ZW0uY2FwdGlvbn0gLz5cclxuICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGAuY3VzdG9tLXRhZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcbiAgICAgICAgbmV4dD17bmV4dH1cclxuICAgICAgICBwcmV2aW91cz17cHJldmlvdXN9XHJcbiAgICAgID5cclxuICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzIGl0ZW1zPXtpdGVtc30gYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fSAvPlxyXG4gICAgICAgIHtzbGlkZXN9XHJcbiAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJwcmV2XCIgZGlyZWN0aW9uVGV4dD1cIlByZXZpb3VzXCIgb25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfSAvPlxyXG4gICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwibmV4dFwiIGRpcmVjdGlvblRleHQ9XCJOZXh0XCIgb25DbGlja0hhbmRsZXI9e25leHR9IC8+XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==