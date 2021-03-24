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
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
        captionText: item.caption,
        captionHeader: item.caption
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, item.src, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselIndicators"], {
      items: items,
      activeIndex: activeIndex,
      onClickHandler: goToIndex
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), slides, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: previous
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
      direction: "next",
      directionText: "Next",
      onClickHandler: next
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Slides__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Slides */ "./components/Slides.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

var _jsxFileName = "D:\\Fabiano\\MeusProjetos\\Projeto-loja\\Front-loja\\pages\\index.js";









_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fas"]); // function Home({ data }) { // em {data} esta o json vindo api

function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Site de or\xE7amento para desenvolvimento web e Apps"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Jumbotron"], {
      fluid: true,
      className: "descr-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".descr-top{\n            background-color: #ffffff;\n            color: #00a1fc;\n            margin-top: 6rem;\n            margin-bottom: 0rem;\n            padding-top: 0rem;\n          }.descr-text{\n            font-size: 40px;\n          }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slides__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4 descr-text",
          children: "Sua melhor op\xE7\xE3o esta aqui!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "cards",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".cards{\n               padding: 4rem;\n\n            }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardColumns"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 351,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 391,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 411,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 412,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 420,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 410,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Jumbotron"], {
      fluid: true,
      className: "services",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".services{\n             background-color: #ffffff;\n             margin-bottom: 0rem !important;\n          }.circle{\n            width:140px;\n            height:140px;\n            background-color: #0a197d;\n            font-size: 52px;\n            color: #ffffff;\n            padding: 24px\n          }.centralize{\n            margin: 0 auto;\n            float: none;\n          }\n          "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "display-4",
            children: "Servi\xE7os"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "lead pb-4",
          children: "Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rounded-circle circle centralize",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
                icon: "laptop-code"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 457,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mt-4 mb-4",
              children: "Servi\xE7o um"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 459,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 460,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rounded-circle circle centralize",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
                icon: "mobile-alt"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 469,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mt-4 mb-4",
              children: "Servi\xE7o dois"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti quam taciti"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 467,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rounded-circle circle centralize",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
                icon: "network-wired"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 480,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mt-4 mb-4",
              children: "Servi\xE7o tres"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 482,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti Lorem ipsum suscipit cras duis p quam taciti"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 478,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
} // export async function getServerSideProps() {
//   const response = await fetch("http://localhost:8080/home"); //obtem de get /home da api
//   const data = await response.json();
//   return { props: { data } }
// }


_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIml0ZW1zIiwic3JjIiwiYWx0VGV4dCIsImNhcHRpb24iLCJTbGlkZXMiLCJwcm9wcyIsInVzZVN0YXRlIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImFuaW1hdGluZyIsInNldEFuaW1hdGluZyIsIm5leHQiLCJuZXh0SW5kZXgiLCJsZW5ndGgiLCJwcmV2aW91cyIsImdvVG9JbmRleCIsIm5ld0luZGV4Iiwic2xpZGVzIiwibWFwIiwiaXRlbSIsImxpYnJhcnkiLCJhZGQiLCJmYXMiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQ0VDLEtBQUcsRUFBRSwwcEJBRFA7QUFFRUMsU0FBTyxFQUFFLFNBRlg7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FEWSxFQU1aO0FBQ0VGLEtBQUcsRUFBRSw0cEJBRFA7QUFFRUMsU0FBTyxFQUFFLFNBRlg7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FOWSxFQVdaO0FBQ0VGLEtBQUcsRUFBRSxtcEJBRFA7QUFFRUMsU0FBTyxFQUFFLFNBRlg7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FYWSxDQUFkOztBQWtCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxDQUFELENBRHRCO0FBQUEsTUFDakJDLFdBRGlCO0FBQUEsTUFDSkMsY0FESTs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFakJHLFNBRmlCO0FBQUEsTUFFTkMsWUFGTTs7QUFJeEIsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixRQUFJRixTQUFKLEVBQWU7QUFDZixRQUFN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Q0FBZjtBQUFBLHFDQUNFLHFFQUFDLDhFQUFEO0FBQWlCLG9CQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRixlQXdCRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxrQ0FBZjtBQUFBLHFDQUNFLHFFQUFDLDhFQUFEO0FBQWlCLG9CQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3WUYsZUE2Y0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdjRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlkRCxDLENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0tBemRTQSxJO0FBMmRNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOWQ0MGY0MDExY2FlMzM2MDIzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENhcm91c2VsLFxyXG4gIENhcm91c2VsSXRlbSxcclxuICBDYXJvdXNlbENvbnRyb2wsXHJcbiAgQ2Fyb3VzZWxJbmRpY2F0b3JzLFxyXG4gIENhcm91c2VsQ2FwdGlvblxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgc3JjOiAnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNDc3ZnJTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDgwMCUyMDQwMCUyMiUyMHByZXNlcnZlQXNwZWN0UmF0aW8lM0QlMjJub25lJTIyJTNFJTNDZGVmcyUzRSUzQ3N0eWxlJTIwdHlwZSUzRCUyMnRleHQlMkZjc3MlMjIlM0UlMjNob2xkZXJfMTViYTgwMGFhMWQlMjB0ZXh0JTIwJTdCJTIwZmlsbCUzQSUyMzU1NSUzQmZvbnQtd2VpZ2h0JTNBbm9ybWFsJTNCZm9udC1mYW1pbHklM0FIZWx2ZXRpY2ElMkMlMjBtb25vc3BhY2UlM0Jmb250LXNpemUlM0E0MHB0JTIwJTdEJTIwJTNDJTJGc3R5bGUlM0UlM0MlMkZkZWZzJTNFJTNDZyUyMGlkJTNEJTIyaG9sZGVyXzE1YmE4MDBhYTFkJTIyJTNFJTNDcmVjdCUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIwZmlsbCUzRCUyMiUyMzc3NyUyMiUzRSUzQyUyRnJlY3QlM0UlM0NnJTNFJTNDdGV4dCUyMHglM0QlMjIyODUuOTIxODc1JTIyJTIweSUzRCUyMjIxOC4zJTIyJTNFRmlyc3QlMjBzbGlkZSUzQyUyRnRleHQlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMScsXHJcbiAgICBjYXB0aW9uOiAnU2xpZGUgMSdcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTIwJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjM0NDQlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWEyMCUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM2NjYlMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjQ3LjMyMDMxMjUlMjIlMjB5JTNEJTIyMjE4LjMlMjIlM0VTZWNvbmQlMjBzbGlkZSUzQyUyRnRleHQlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMicsXHJcbiAgICBjYXB0aW9uOiAnU2xpZGUgMidcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTIxJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjMzMzMlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWEyMSUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM1NTUlMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjc3JTIyJTIweSUzRCUyMjIxOC4zJTIyJTNFVGhpcmQlMjBzbGlkZSUzQyUyRnRleHQlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScsXHJcbiAgICBhbHRUZXh0OiAnU2xpZGUgMycsXHJcbiAgICBjYXB0aW9uOiAnU2xpZGUgMydcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBTbGlkZXMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzbGlkZXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJvdXNlbEl0ZW1cclxuICAgICAgICBvbkV4aXRpbmc9eygpID0+IHNldEFuaW1hdGluZyh0cnVlKX1cclxuICAgICAgICBvbkV4aXRlZD17KCkgPT4gc2V0QW5pbWF0aW5nKGZhbHNlKX1cclxuICAgICAgICBrZXk9e2l0ZW0uc3JjfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gLz5cclxuICAgICAgICA8Q2Fyb3VzZWxDYXB0aW9uIGNhcHRpb25UZXh0PXtpdGVtLmNhcHRpb259IGNhcHRpb25IZWFkZXI9e2l0ZW0uY2FwdGlvbn0gLz5cclxuICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcm91c2VsXHJcbiAgICAgIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuICAgICAgbmV4dD17bmV4dH1cclxuICAgICAgcHJldmlvdXM9e3ByZXZpb3VzfVxyXG4gICAgPlxyXG4gICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzIGl0ZW1zPXtpdGVtc30gYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fSAvPlxyXG4gICAgICB7c2xpZGVzfVxyXG4gICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cInByZXZcIiBkaXJlY3Rpb25UZXh0PVwiUHJldmlvdXNcIiBvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9IC8+XHJcbiAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwibmV4dFwiIGRpcmVjdGlvblRleHQ9XCJOZXh0XCIgb25DbGlja0hhbmRsZXI9e25leHR9IC8+XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEp1bWJvdHJvbixcclxuICBDb250YWluZXIsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgQ2FyZEltZyxcclxuICBDYXJkVGl0bGUsXHJcbiAgQ2FyZFRleHQsXHJcbiAgQ2FyZENvbHVtbnMsXHJcbiAgQ2FyZFN1YnRpdGxlLFxyXG4gIENhcmRCb2R5LFxyXG4gIE1lZGlhLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVzXCI7XHJcblxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxubGlicmFyeS5hZGQoZmFzKTtcclxuXHJcbi8vIGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHsgLy8gZW0ge2RhdGF9IGVzdGEgbyBqc29uIHZpbmRvIGFwaVxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiU2l0ZSBkZSBvcsOnYW1lbnRvIHBhcmEgZGVzZW52b2x2aW1lbnRvIHdlYiBlIEFwcHNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lbnUgLz5cclxuXHJcbiAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZGVzY3ItdG9wXCI+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2AuZGVzY3ItdG9we1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwYTFmYztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDByZW07XHJcbiAgICAgICAgICB9LmRlc2NyLXRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIHsvKiB0ZXh0LWNlbnRlciBqw6EgZG8gcHJvcHJpbyByZWFjdHN0cmFwICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFNsaWRlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBkZXNjci10ZXh0XCI+U3VhIG1lbGhvciBvcMOnw6NvIGVzdGEgYXF1aSE8L2gxPlxyXG4gICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5GYcOnYSBzZXUgb3LDp2FtZW50bzwvcD5cclxuICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9vcmNhbWVudG9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1sZyBtdC00XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE9yw6dhbWVudG9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICB7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovfVxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNhcmRzXCI+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2AuY2FyZHN7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDRyZW07XHJcblxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICA8Q2FyZENvbHVtbnM+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ2FyZENvbHVtbnM+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgey8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL31cclxuXHJcbiAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwic2VydmljZXNcIj5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YC5zZXJ2aWNlc3tcclxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9LmNpcmNsZXtcclxuICAgICAgICAgICAgd2lkdGg6MTQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoxNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTk3ZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjRweFxyXG4gICAgICAgICAgfS5jZW50cmFsaXple1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPlNlcnZpw6dvczwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgcGItNFwiPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBzdXNjaXBpdCBjcmFzIGR1aXMgcGVsbGVudGVzcXVlIGlwc3VtIGNsYXNzIHF1YW0gdGFjaXRpLlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIGNpcmNsZSBjZW50cmFsaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJsYXB0b3AtY29kZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTQgbWItNFwiPlNlcnZpw6dvIHVtPC9oMj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIHN1c2NpcGl0IGNyYXMgZHVpcyBwZWxsZW50ZXNxdWUgaXBzdW0gY2xhc3MgcXVhbVxyXG4gICAgICAgICAgICAgICAgdGFjaXRpIExvcmVtIGlwc3VtIHN1c2NpcGl0IGNyYXMgZHVpcyBwZWxsZW50ZXNxdWUgaXBzdW0gY2xhc3NcclxuICAgICAgICAgICAgICAgIHF1YW0gdGFjaXRpXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIGNpcmNsZSBjZW50cmFsaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJtb2JpbGUtYWx0XCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNCBtYi00XCI+U2VydmnDp28gZG9pczwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBzdXNjaXBpdCBjcmFzIGR1aXMgcGVsbGVudGVzcXVlIGlwc3VtIGNsYXNzIHF1YW1cclxuICAgICAgICAgICAgICAgIHRhY2l0aSBxdWFtIHRhY2l0aVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBjaXJjbGUgY2VudHJhbGl6ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwibmV0d29yay13aXJlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTQgbWItNFwiPlNlcnZpw6dvIHRyZXM8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gc3VzY2lwaXQgY3JhcyBkdWlzIHBlbGxlbnRlc3F1ZSBpcHN1bSBjbGFzcyBxdWFtXHJcbiAgICAgICAgICAgICAgICB0YWNpdGkgTG9yZW0gaXBzdW0gc3VzY2lwaXQgY3JhcyBkdWlzIHAgcXVhbSB0YWNpdGlcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2hvbWVcIik7IC8vb2J0ZW0gZGUgZ2V0IC9ob21lIGRhIGFwaVxyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=