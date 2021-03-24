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
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXMuanMiXSwibmFtZXMiOlsiaXRlbXMiLCJzcmMiLCJhbHRUZXh0IiwiY2FwdGlvbiIsIlNsaWRlcyIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJzbGlkZXMiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQ0VDLEtBQUcsRUFBRSwwcEJBRFA7QUFFRUMsU0FBTyxFQUFFLFNBRlg7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FEWSxFQU1aO0FBQ0VGLEtBQUcsRUFBRSw0cEJBRFA7QUFFRUMsU0FBTyxFQUFFLFNBRlg7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FOWSxFQVdaO0FBQ0VGLEtBQUcsRUFBRSxtcEJBRFA7QUFFRUMsU0FBTyxFQUFFLFNBRlg7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FYWSxDQUFkOztBQWtCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxDQUFELENBRHRCO0FBQUEsTUFDakJDLFdBRGlCO0FBQUEsTUFDSkMsY0FESTs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFakJHLFNBRmlCO0FBQUEsTUFFTkMsWUFGTTs7QUFJeEIsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixRQUFJRixTQUFKLEVBQWU7QUFDZixRQUFNRyxTQUFTLEdBQUdMLFdBQVcsS0FBS1AsS0FBSyxDQUFDYSxNQUFOLEdBQWUsQ0FBL0IsR0FBbUMsQ0FBbkMsR0FBdUNOLFdBQVcsR0FBRyxDQUF2RTtBQUNBQyxrQkFBYyxDQUFDSSxTQUFELENBQWQ7QUFDRCxHQUpEOztBQU1BLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBSUwsU0FBSixFQUFlO0FBQ2YsUUFBTUcsU0FBUyxHQUFHTCxXQUFXLEtBQUssQ0FBaEIsR0FBb0JQLEtBQUssQ0FBQ2EsTUFBTixHQUFlLENBQW5DLEdBQXVDTixXQUFXLEdBQUcsQ0FBdkU7QUFDQUMsa0JBQWMsQ0FBQ0ksU0FBRCxDQUFkO0FBQ0QsR0FKRDs7QUFNQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxRQUFELEVBQWM7QUFDOUIsUUFBSVAsU0FBSixFQUFlO0FBQ2ZELGtCQUFjLENBQUNRLFFBQUQsQ0FBZDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsTUFBTSxHQUFHakIsS0FBSyxDQUFDa0IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNqQyx3QkFDRSxxRUFBQyx1REFBRDtBQUNBLGVBQVMsRUFBQyxZQURWO0FBRUEsU0FBRyxFQUFDLEtBRko7QUFHRSxlQUFTLEVBQUU7QUFBQSxlQUFNVCxZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLE9BSGI7QUFJRSxjQUFRLEVBQUU7QUFBQSxlQUFNQSxZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLE9BSlo7QUFBQSw4QkFPRTtBQUFLLFdBQUcsRUFBRVMsSUFBSSxDQUFDbEIsR0FBZjtBQUFvQixXQUFHLEVBQUVrQixJQUFJLENBQUNqQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFRRSxxRUFBQywwREFBRDtBQUFpQixtQkFBVyxFQUFFaUIsSUFBSSxDQUFDaEIsT0FBbkM7QUFBNEMscUJBQWEsRUFBRWdCLElBQUksQ0FBQ2hCO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBLE9BS09nQixJQUFJLENBQUNsQixHQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVlELEdBYmMsQ0FBZjtBQWVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVVFLHFFQUFDLG1EQUFEO0FBQ0UsaUJBQVcsRUFBRU0sV0FEZjtBQUVFLFVBQUksRUFBRUksSUFGUjtBQUdFLGNBQVEsRUFBRUcsUUFIWjtBQUFBLDhCQUtFLHFFQUFDLDZEQUFEO0FBQW9CLGFBQUssRUFBRWQsS0FBM0I7QUFBa0MsbUJBQVcsRUFBRU8sV0FBL0M7QUFBNEQsc0JBQWMsRUFBRVE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLEVBTUdFLE1BTkgsZUFPRSxxRUFBQywwREFBRDtBQUFpQixpQkFBUyxFQUFDLE1BQTNCO0FBQWtDLHFCQUFhLEVBQUMsVUFBaEQ7QUFBMkQsc0JBQWMsRUFBRUg7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUUscUVBQUMsMERBQUQ7QUFBaUIsaUJBQVMsRUFBQyxNQUEzQjtBQUFrQyxxQkFBYSxFQUFDLE1BQWhEO0FBQXVELHNCQUFjLEVBQUVIO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQTNERDs7R0FBTVAsTTs7S0FBQUEsTTtBQTZEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTg5Zjc0NTNmYzJmMjNiNmU5YjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDYXJvdXNlbCxcclxuICBDYXJvdXNlbEl0ZW0sXHJcbiAgQ2Fyb3VzZWxDb250cm9sLFxyXG4gIENhcm91c2VsSW5kaWNhdG9ycyxcclxuICBDYXJvdXNlbENhcHRpb25cclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTFkJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjM1NTUlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWExZCUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM3NzclMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjg1LjkyMTg3NSUyMiUyMHklM0QlMjIyMTguMyUyMiUzRUZpcnN0JTIwc2xpZGUlM0MlMkZ0ZXh0JTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0UnLFxyXG4gICAgYWx0VGV4dDogJ1NsaWRlIDEnLFxyXG4gICAgY2FwdGlvbjogJ1NsaWRlIDEnXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6ICdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmclMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwODAwJTIwNDAwJTIyJTIwcHJlc2VydmVBc3BlY3RSYXRpbyUzRCUyMm5vbmUlMjIlM0UlM0NkZWZzJTNFJTNDc3R5bGUlMjB0eXBlJTNEJTIydGV4dCUyRmNzcyUyMiUzRSUyM2hvbGRlcl8xNWJhODAwYWEyMCUyMHRleHQlMjAlN0IlMjBmaWxsJTNBJTIzNDQ0JTNCZm9udC13ZWlnaHQlM0Fub3JtYWwlM0Jmb250LWZhbWlseSUzQUhlbHZldGljYSUyQyUyMG1vbm9zcGFjZSUzQmZvbnQtc2l6ZSUzQTQwcHQlMjAlN0QlMjAlM0MlMkZzdHlsZSUzRSUzQyUyRmRlZnMlM0UlM0NnJTIwaWQlM0QlMjJob2xkZXJfMTViYTgwMGFhMjAlMjIlM0UlM0NyZWN0JTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjBmaWxsJTNEJTIyJTIzNjY2JTIyJTNFJTNDJTJGcmVjdCUzRSUzQ2clM0UlM0N0ZXh0JTIweCUzRCUyMjI0Ny4zMjAzMTI1JTIyJTIweSUzRCUyMjIxOC4zJTIyJTNFU2Vjb25kJTIwc2xpZGUlM0MlMkZ0ZXh0JTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0UnLFxyXG4gICAgYWx0VGV4dDogJ1NsaWRlIDInLFxyXG4gICAgY2FwdGlvbjogJ1NsaWRlIDInXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6ICdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmclMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwODAwJTIwNDAwJTIyJTIwcHJlc2VydmVBc3BlY3RSYXRpbyUzRCUyMm5vbmUlMjIlM0UlM0NkZWZzJTNFJTNDc3R5bGUlMjB0eXBlJTNEJTIydGV4dCUyRmNzcyUyMiUzRSUyM2hvbGRlcl8xNWJhODAwYWEyMSUyMHRleHQlMjAlN0IlMjBmaWxsJTNBJTIzMzMzJTNCZm9udC13ZWlnaHQlM0Fub3JtYWwlM0Jmb250LWZhbWlseSUzQUhlbHZldGljYSUyQyUyMG1vbm9zcGFjZSUzQmZvbnQtc2l6ZSUzQTQwcHQlMjAlN0QlMjAlM0MlMkZzdHlsZSUzRSUzQyUyRmRlZnMlM0UlM0NnJTIwaWQlM0QlMjJob2xkZXJfMTViYTgwMGFhMjElMjIlM0UlM0NyZWN0JTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjBmaWxsJTNEJTIyJTIzNTU1JTIyJTNFJTNDJTJGcmVjdCUzRSUzQ2clM0UlM0N0ZXh0JTIweCUzRCUyMjI3NyUyMiUyMHklM0QlMjIyMTguMyUyMiUzRVRoaXJkJTIwc2xpZGUlM0MlMkZ0ZXh0JTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0UnLFxyXG4gICAgYWx0VGV4dDogJ1NsaWRlIDMnLFxyXG4gICAgY2FwdGlvbjogJ1NsaWRlIDMnXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgU2xpZGVzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYW5pbWF0aW5nLCBzZXRBbmltYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IDAgPyBpdGVtcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdvVG9JbmRleCA9IChuZXdJbmRleCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2xpZGVzID0gaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2Fyb3VzZWxJdGVtXHJcbiAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS10YWdcIlxyXG4gICAgICB0YWc9XCJkaXZcIlxyXG4gICAgICAgIG9uRXhpdGluZz17KCkgPT4gc2V0QW5pbWF0aW5nKHRydWUpfVxyXG4gICAgICAgIG9uRXhpdGVkPXsoKSA9PiBzZXRBbmltYXRpbmcoZmFsc2UpfVxyXG4gICAgICAgIGtleT17aXRlbS5zcmN9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5hbHRUZXh0fSAvPlxyXG4gICAgICAgIDxDYXJvdXNlbENhcHRpb24gY2FwdGlvblRleHQ9e2l0ZW0uY2FwdGlvbn0gY2FwdGlvbkhlYWRlcj17aXRlbS5jYXB0aW9ufSAvPlxyXG4gICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYC5jdXN0b20tdGFnIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgfWBcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuICAgICAgICBuZXh0PXtuZXh0fVxyXG4gICAgICAgIHByZXZpb3VzPXtwcmV2aW91c31cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJvdXNlbEluZGljYXRvcnMgaXRlbXM9e2l0ZW1zfSBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9IC8+XHJcbiAgICAgICAge3NsaWRlc31cclxuICAgICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cInByZXZcIiBkaXJlY3Rpb25UZXh0PVwiUHJldmlvdXNcIiBvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9IC8+XHJcbiAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJuZXh0XCIgZGlyZWN0aW9uVGV4dD1cIk5leHRcIiBvbkNsaWNrSGFuZGxlcj17bmV4dH0gLz5cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlczsiXSwic291cmNlUm9vdCI6IiJ9