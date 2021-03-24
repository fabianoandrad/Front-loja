webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

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
/* harmony import */ var D_Fabiano_MeusProjetos_Projeto_loja_Front_loja_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var _jsxFileName = "D:\\Fabiano\\MeusProjetos\\Projeto-loja\\Front-loja\\pages\\index.js",
    _s = $RefreshSig$();









_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fas"]);
var items = [{
  src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
  altText: "Slide 1",
  caption: "Slide 1"
}, {
  src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  altText: "Slide 2",
  caption: "Slide 2"
}, {
  src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  altText: "Slide 3",
  caption: "Slide 3"
}]; // function Home({ data }) { // em {data} esta o json vindo api

function Home() {
  _s();

  var _this = this;

  var _useState = useState(0),
      _useState2 = Object(D_Fabiano_MeusProjetos_Projeto_loja_Front_loja_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = Object(D_Fabiano_MeusProjetos_Projeto_loja_Front_loja_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      animating = _useState4[0],
      setAnimating = _useState4[1];

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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CarouselItem"], {
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
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CarouselCaption"], {
        captionText: item.caption,
        captionHeader: item.caption
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, item.src, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Site de or\xE7amento para desenvolvimento web e Apps"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Jumbotron"], {
      fluid: true,
      className: "descr-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".descr-top{\n            background-color: #ffffff;\n            color: #00a1fc;\n            margin-top: 6rem;\n            margin-bottom: 0rem;\n            padding-top: 0rem;\n          }.descr-text{\n            font-size: 40px;\n          }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Carousel"], {
            activeIndex: activeIndex,
            next: next,
            previous: previous,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CarouselIndicators"], {
              items: items,
              activeIndex: activeIndex,
              onClickHandler: goToIndex
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this), slides, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CarouselControl"], {
              direction: "prev",
              directionText: "Previous",
              onClickHandler: previous
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CarouselControl"], {
              direction: "next",
              directionText: "Next",
              onClickHandler: next
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4 descr-text",
          children: "Sua melhor op\xE7\xE3o esta aqui!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      className: "cards",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".cards{\n               padding: 4rem;\n\n            }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardColumns"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 382,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 390,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 410,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 422,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 429,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 430,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 449,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 453,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 458,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 462,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 469,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 470,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 468,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardImg"], {
            top: true,
            width: "100%",
            src: "https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg",
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 482,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
              tag: "h5",
              children: "Card title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 489,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
              tag: "h6",
              className: "mb-2 text-muted",
              children: "Card subtitle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
              children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              children: "Button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 498,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 488,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 481,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Jumbotron"], {
      fluid: true,
      className: "services",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".services{\n             background-color: #ffffff;\n             margin-bottom: 0rem !important;\n          }.circle{\n            width:140px;\n            height:140px;\n            background-color: #0a197d;\n            font-size: 52px;\n            color: #ffffff;\n            padding: 24px\n          }.centralize{\n            margin: 0 auto;\n            float: none;\n          }\n          "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        className: "text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "display-4",
            children: "Servi\xE7os"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 526,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "lead pb-4",
          children: "Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 528,
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
                lineNumber: 535,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 534,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mt-4 mb-4",
              children: "Servi\xE7o um"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 537,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 538,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 533,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rounded-circle circle centralize",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
                icon: "mobile-alt"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 547,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 546,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mt-4 mb-4",
              children: "Servi\xE7o dois"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 549,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti quam taciti"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 550,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 545,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rounded-circle circle centralize",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
                icon: "network-wired"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 558,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 557,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mt-4 mb-4",
              children: "Servi\xE7o tres"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 560,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti Lorem ipsum suscipit cras duis p quam taciti"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 561,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 556,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
} // export async function getServerSideProps() {
//   const response = await fetch("http://localhost:8080/home"); //obtem de get /home da api
//   const data = await response.json();
//   return { props: { data } }
// }


_s(Home, "FYd3Lqf74+dQScd+D3/2SfzV0cE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFzIiwiaXRlbXMiLCJzcmMiLCJhbHRUZXh0IiwiY2FwdGlvbiIsIkhvbWUiLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsInNsaWRlcyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFB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RUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUksdUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGLGVBd0JFO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLGtDQUFmO0FBQUEscUNBQ0UscUVBQUMsOEVBQUQ7QUFBaUIsb0JBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUksdUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlaRixlQThkRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa2VELEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7R0E5Z0JTTixJOztLQUFBQSxJO0FBZ2hCTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjhjY2FmOTFlZTFkMDhkMjkzOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgSnVtYm90cm9uLFxyXG4gIENvbnRhaW5lcixcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkSW1nLFxyXG4gIENhcmRUaXRsZSxcclxuICBDYXJkVGV4dCxcclxuICBDYXJkQ29sdW1ucyxcclxuICBDYXJkU3VidGl0bGUsXHJcbiAgQ2FyZEJvZHksXHJcbiAgTWVkaWEsXHJcbiAgQ2Fyb3VzZWwsXHJcbiAgQ2Fyb3VzZWxJdGVtLFxyXG4gIENhcm91c2VsQ29udHJvbCxcclxuICBDYXJvdXNlbEluZGljYXRvcnMsXHJcbiAgQ2Fyb3VzZWxDYXB0aW9uLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcblxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxubGlicmFyeS5hZGQoZmFzKTtcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHNyYzpcclxuICAgICAgXCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIixcclxuICAgIGFsdFRleHQ6IFwiU2xpZGUgMVwiLFxyXG4gICAgY2FwdGlvbjogXCJTbGlkZSAxXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6XHJcbiAgICAgIFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNDc3ZnJTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDgwMCUyMDQwMCUyMiUyMHByZXNlcnZlQXNwZWN0UmF0aW8lM0QlMjJub25lJTIyJTNFJTNDZGVmcyUzRSUzQ3N0eWxlJTIwdHlwZSUzRCUyMnRleHQlMkZjc3MlMjIlM0UlMjNob2xkZXJfMTViYTgwMGFhMjAlMjB0ZXh0JTIwJTdCJTIwZmlsbCUzQSUyMzQ0NCUzQmZvbnQtd2VpZ2h0JTNBbm9ybWFsJTNCZm9udC1mYW1pbHklM0FIZWx2ZXRpY2ElMkMlMjBtb25vc3BhY2UlM0Jmb250LXNpemUlM0E0MHB0JTIwJTdEJTIwJTNDJTJGc3R5bGUlM0UlM0MlMkZkZWZzJTNFJTNDZyUyMGlkJTNEJTIyaG9sZGVyXzE1YmE4MDBhYTIwJTIyJTNFJTNDcmVjdCUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIwZmlsbCUzRCUyMiUyMzY2NiUyMiUzRSUzQyUyRnJlY3QlM0UlM0NnJTNFJTNDdGV4dCUyMHglM0QlMjIyNDcuMzIwMzEyNSUyMiUyMHklM0QlMjIyMTguMyUyMiUzRVNlY29uZCUyMHNsaWRlJTNDJTJGdGV4dCUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXCIsXHJcbiAgICBhbHRUZXh0OiBcIlNsaWRlIDJcIixcclxuICAgIGNhcHRpb246IFwiU2xpZGUgMlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOlxyXG4gICAgICBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTIxJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjMzMzMlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWEyMSUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM1NTUlMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjc3JTIyJTIweSUzRCUyMjIxOC4zJTIyJTNFVGhpcmQlMjBzbGlkZSUzQyUyRnRleHQlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVwiLFxyXG4gICAgYWx0VGV4dDogXCJTbGlkZSAzXCIsXHJcbiAgICBjYXB0aW9uOiBcIlNsaWRlIDNcIixcclxuICB9LFxyXG5dO1xyXG5cclxuLy8gZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkgeyAvLyBlbSB7ZGF0YX0gZXN0YSBvIGpzb24gdmluZG8gYXBpXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYW5pbWF0aW5nLCBzZXRBbmltYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxO1xyXG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcclxuICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSAwID8gaXRlbXMubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMTtcclxuICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2xpZGVzID0gaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2Fyb3VzZWxJdGVtXHJcbiAgICAgICAgb25FeGl0aW5nPXsoKSA9PiBzZXRBbmltYXRpbmcodHJ1ZSl9XHJcbiAgICAgICAgb25FeGl0ZWQ9eygpID0+IHNldEFuaW1hdGluZyhmYWxzZSl9XHJcbiAgICAgICAga2V5PXtpdGVtLnNyY31cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLmFsdFRleHR9IC8+XHJcbiAgICAgICAgPENhcm91c2VsQ2FwdGlvblxyXG4gICAgICAgICAgY2FwdGlvblRleHQ9e2l0ZW0uY2FwdGlvbn1cclxuICAgICAgICAgIGNhcHRpb25IZWFkZXI9e2l0ZW0uY2FwdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiU2l0ZSBkZSBvcsOnYW1lbnRvIHBhcmEgZGVzZW52b2x2aW1lbnRvIHdlYiBlIEFwcHNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lbnUgLz5cclxuXHJcbiAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZGVzY3ItdG9wXCI+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2AuZGVzY3ItdG9we1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwYTFmYztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDByZW07XHJcbiAgICAgICAgICB9LmRlc2NyLXRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIHsvKiB0ZXh0LWNlbnRlciBqw6EgZG8gcHJvcHJpbyByZWFjdHN0cmFwICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH0gbmV4dD17bmV4dH0gcHJldmlvdXM9e3ByZXZpb3VzfT5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3NsaWRlc31cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxDb250cm9sXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJwcmV2XCJcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxDb250cm9sXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJuZXh0XCJcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvblRleHQ9XCJOZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXtuZXh0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IGRlc2NyLXRleHRcIj5TdWEgbWVsaG9yIG9ww6fDo28gZXN0YSBhcXVpITwvaDE+XHJcbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwibGVhZFwiPkZhw6dhIHNldSBvcsOnYW1lbnRvPC9wPlxyXG4gICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiL29yY2FtZW50b1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLWxnIG10LTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgT3LDp2FtZW50b1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0p1bWJvdHJvbj5cclxuXHJcbiAgICAgIHsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi99XHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY2FyZHNcIj5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YC5jYXJkc3tcclxuICAgICAgICAgICAgICAgcGFkZGluZzogNHJlbTtcclxuXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxDYXJkQ29sdW1ucz5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRJbWdcclxuICAgICAgICAgICAgICB0b3BcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNldGVhZC5vcmcuYnIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvbG9qYS12aXJ0dWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkNhcmQgdGl0bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlIHRhZz1cImg2XCIgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBDYXJkIHN1YnRpdGxlXHJcbiAgICAgICAgICAgICAgPC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsXHJcbiAgICAgICAgICAgICAgICBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGEgbGl0dGxlIGJpdFxyXG4gICAgICAgICAgICAgICAgbG9uZ2VyLlxyXG4gICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuc2V0ZWFkLm9yZy5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy9sb2phLXZpcnR1YWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgdGFnPVwiaDZcIiBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIENhcmQgc3VidGl0bGVcclxuICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICBUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWxcclxuICAgICAgICAgICAgICAgIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYSBsaXR0bGUgYml0XHJcbiAgICAgICAgICAgICAgICBsb25nZXIuXHJcbiAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZXRlYWQub3JnLmJyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL2xvamEtdmlydHVhbC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYXJkIHRpdGxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSB0YWc9XCJoNlwiIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FyZCBzdWJ0aXRsZVxyXG4gICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbFxyXG4gICAgICAgICAgICAgICAgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuIFRoaXMgY29udGVudCBpcyBhIGxpdHRsZSBiaXRcclxuICAgICAgICAgICAgICAgIGxvbmdlci5cclxuICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9DYXJkQ29sdW1ucz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICB7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovfVxyXG5cclxuICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJzZXJ2aWNlc1wiPlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgLnNlcnZpY2Vze1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIH0uY2lyY2xle1xyXG4gICAgICAgICAgICB3aWR0aDoxNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjE0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExOTdkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4XHJcbiAgICAgICAgICB9LmNlbnRyYWxpemV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+U2VydmnDp29zPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBwYi00XCI+XHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIHN1c2NpcGl0IGNyYXMgZHVpcyBwZWxsZW50ZXNxdWUgaXBzdW0gY2xhc3MgcXVhbSB0YWNpdGkuXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgY2lyY2xlIGNlbnRyYWxpemVcIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImxhcHRvcC1jb2RlXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNCBtYi00XCI+U2VydmnDp28gdW08L2gyPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gc3VzY2lwaXQgY3JhcyBkdWlzIHBlbGxlbnRlc3F1ZSBpcHN1bSBjbGFzcyBxdWFtXHJcbiAgICAgICAgICAgICAgICB0YWNpdGkgTG9yZW0gaXBzdW0gc3VzY2lwaXQgY3JhcyBkdWlzIHBlbGxlbnRlc3F1ZSBpcHN1bSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcXVhbSB0YWNpdGlcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgY2lyY2xlIGNlbnRyYWxpemVcIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cIm1vYmlsZS1hbHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC00IG1iLTRcIj5TZXJ2acOnbyBkb2lzPC9oMj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIHN1c2NpcGl0IGNyYXMgZHVpcyBwZWxsZW50ZXNxdWUgaXBzdW0gY2xhc3MgcXVhbVxyXG4gICAgICAgICAgICAgICAgdGFjaXRpIHF1YW0gdGFjaXRpXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIGNpcmNsZSBjZW50cmFsaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJuZXR3b3JrLXdpcmVkXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNCBtYi00XCI+U2VydmnDp28gdHJlczwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBzdXNjaXBpdCBjcmFzIGR1aXMgcGVsbGVudGVzcXVlIGlwc3VtIGNsYXNzIHF1YW1cclxuICAgICAgICAgICAgICAgIHRhY2l0aSBMb3JlbSBpcHN1bSBzdXNjaXBpdCBjcmFzIGR1aXMgcCBxdWFtIHRhY2l0aVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvaG9tZVwiKTsgLy9vYnRlbSBkZSBnZXQgL2hvbWUgZGEgYXBpXHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==