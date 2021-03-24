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
  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXMuanMiXSwibmFtZXMiOlsiaXRlbXMiLCJzcmMiLCJhbHRUZXh0IiwiY2FwdGlvbiIsImlkIiwiU2xpZGVzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsInNsaWRlcyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsS0FBRyxFQUFFLDBwQkFEUDtBQUVFQyxTQUFPLEVBQUUsU0FGWDtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQURZLEVBTVo7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUYsU0FBTyxFQUFFLFNBRlg7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FOWSxFQVdaO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVGLFNBQU8sRUFBRSxTQUZYO0FBR0VDLFNBQU8sRUFBRTtBQUhYLENBWFksQ0FBZDs7QUFrQkEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsQ0FBRCxDQUR0QjtBQUFBLE1BQ2pCQyxXQURpQjtBQUFBLE1BQ0pDLGNBREk7O0FBQUEsbUJBRVVGLHNEQUFRLENBQUMsS0FBRCxDQUZsQjtBQUFBLE1BRWpCRyxTQUZpQjtBQUFBLE1BRU5DLFlBRk07O0FBSXhCLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsUUFBSUYsU0FBSixFQUFlO0FBQ2YsUUFBTUcsU0FBUyxHQUFHTCxXQUFXLEtBQUtSLEtBQUssQ0FBQ2MsTUFBTixHQUFlLENBQS9CLEdBQW1DLENBQW5DLEdBQXVDTixXQUFXLEdBQUcsQ0FBdkU7QUFDQUMsa0JBQWMsQ0FBQ0ksU0FBRCxDQUFkO0FBQ0QsR0FKRDs7QUFNQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQUlMLFNBQUosRUFBZTtBQUNmLFFBQU1HLFNBQVMsR0FBR0wsV0FBVyxLQUFLLENBQWhCLEdBQW9CUixLQUFLLENBQUNjLE1BQU4sR0FBZSxDQUFuQyxHQUF1Q04sV0FBVyxHQUFHLENBQXZFO0FBQ0FDLGtCQUFjLENBQUNJLFNBQUQsQ0FBZDtBQUNELEdBSkQ7O0FBTUEsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsUUFBRCxFQUFjO0FBQzlCLFFBQUlQLFNBQUosRUFBZTtBQUNmRCxrQkFBYyxDQUFDUSxRQUFELENBQWQ7QUFDRCxHQUhEOztBQUtBLE1BQU1DLE1BQU0sR0FBR2xCLEtBQUssQ0FBQ21CLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDakMsd0JBQ0UscUVBQUMsdURBQUQ7QUFDRSxlQUFTLEVBQUMsWUFEWjtBQUVFLFNBQUcsRUFBQyxLQUZOO0FBSUUsZUFBUyxFQUFFO0FBQUEsZUFBTVQsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxPQUpiO0FBS0UsY0FBUSxFQUFFO0FBQUEsZUFBTUEsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxPQUxaO0FBQUEsNkJBT0UscUVBQUMsMERBQUQ7QUFBaUIsaUJBQVMsRUFBQyxhQUEzQjtBQUF5QyxtQkFBVyxFQUFFUyxJQUFJLENBQUNqQixPQUEzRDtBQUFvRSxxQkFBYSxFQUFFaUIsSUFBSSxDQUFDakI7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGLE9BR09pQixJQUFJLENBQUNoQixFQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVdELEdBWmMsQ0FBZjtBQWNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVVFLHFFQUFDLG1EQUFEO0FBQ0UsaUJBQVcsRUFBRUksV0FEZjtBQUVFLFVBQUksRUFBRUksSUFGUjtBQUdFLGNBQVEsRUFBRUcsUUFIWjtBQUFBLDhCQUtFLHFFQUFDLDZEQUFEO0FBQW9CLGFBQUssRUFBRWYsS0FBM0I7QUFBa0MsbUJBQVcsRUFBRVEsV0FBL0M7QUFBNEQsc0JBQWMsRUFBRVE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLEVBTUdFLE1BTkgsZUFPRSxxRUFBQywwREFBRDtBQUFpQixpQkFBUyxFQUFDLE1BQTNCO0FBQWtDLHFCQUFhLEVBQUMsVUFBaEQ7QUFBMkQsc0JBQWMsRUFBRUg7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUUscUVBQUMsMERBQUQ7QUFBaUIsaUJBQVMsRUFBQyxNQUEzQjtBQUFrQyxxQkFBYSxFQUFDLE1BQWhEO0FBQXVELHNCQUFjLEVBQUVIO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQTFERDs7R0FBTVAsTTs7S0FBQUEsTTtBQTREU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzA2NWUxZDkxM2E5MGUzNDA1ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDYXJvdXNlbCxcclxuICBDYXJvdXNlbEl0ZW0sXHJcbiAgQ2Fyb3VzZWxDb250cm9sLFxyXG4gIENhcm91c2VsSW5kaWNhdG9ycyxcclxuICBDYXJvdXNlbENhcHRpb25cclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTFkJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjM1NTUlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWExZCUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM3NzclMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjg1LjkyMTg3NSUyMiUyMHklM0QlMjIyMTguMyUyMiUzRUZpcnN0JTIwc2xpZGUlM0MlMkZ0ZXh0JTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0UnLFxyXG4gICAgYWx0VGV4dDogJ1NsaWRlIDEnLFxyXG4gICAgY2FwdGlvbjogJ1NsaWRlIDEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGFsdFRleHQ6ICdTbGlkZSAyJyxcclxuICAgIGNhcHRpb246ICdTbGlkZSAyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMycsXHJcbiAgICBjYXB0aW9uOiAnU2xpZGUgMydcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBTbGlkZXMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzbGlkZXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJvdXNlbEl0ZW1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tdGFnXCJcclxuICAgICAgICB0YWc9XCJkaXZcIlxyXG4gICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICBvbkV4aXRpbmc9eygpID0+IHNldEFuaW1hdGluZyh0cnVlKX1cclxuICAgICAgICBvbkV4aXRlZD17KCkgPT4gc2V0QW5pbWF0aW5nKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJvdXNlbENhcHRpb24gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIiBjYXB0aW9uVGV4dD17aXRlbS5jYXB0aW9ufSBjYXB0aW9uSGVhZGVyPXtpdGVtLmNhcHRpb259IC8+XHJcbiAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBgLmN1c3RvbS10YWcge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICB9YFxyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG4gICAgICAgIG5leHQ9e25leHR9XHJcbiAgICAgICAgcHJldmlvdXM9e3ByZXZpb3VzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcm91c2VsSW5kaWNhdG9ycyBpdGVtcz17aXRlbXN9IGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH0gb25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH0gLz5cclxuICAgICAgICB7c2xpZGVzfVxyXG4gICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwicHJldlwiIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiIG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c30gLz5cclxuICAgICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cIm5leHRcIiBkaXJlY3Rpb25UZXh0PVwiTmV4dFwiIG9uQ2xpY2tIYW5kbGVyPXtuZXh0fSAvPlxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzOyJdLCJzb3VyY2VSb290IjoiIn0=