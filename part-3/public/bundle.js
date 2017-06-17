/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// -------------------------------------
// 1. Stateless functional component
// -------------------------------------


// const App = () => (
//   <div>Hello</div>
// );


// -------------------------------------
// 2. Class component
// -------------------------------------

// class App extends Component {
//   render() {
//     return (
//       <div>Hello!</div>
//     );
//   }
// }


// -------------------------------------
// 3. Lifecycle methods & state
// -------------------------------------

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       books: [],
//       isLoading: true
//     }
//   }

//   /*
//   [
//     { id: 0, name: "The Iliad", price: 12 },
//     { id: 1, name: "The Republic", price: 10 },
//     { id: 2, name: "Beowulf", price: 5 },
//     { id: 3, name: "The Art of War", price: 9 }
//   ]
//   */
//   componentWillMount() {
//     fetch('https://mithril-examples.firebaseio.com/books.json')
//       .then((response) => response.json())
//       .then((booksJson) => this.setState({
//         books: booksJson,
//         isLoading: false
//       }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.isLoading ? 'Loading...' : 'Book Store'}</h1>
//         <ul>
//           { this.state.books.map((book) => <li key={book.id}>{book.name}</li>)}
//         </ul>
//       </div>
//     );
//   }
// }


// -------------------------------------
// 4. Complex application
// -------------------------------------

function alphabetically(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

var ProductList = function ProductList(_ref) {
  var items = _ref.items,
      addToCart = _ref.addToCart;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    null,
    items.sort(alphabetically).map(function (book) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: book.id },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            'Title:'
          ),
          ' ',
          book.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            'Price:'
          ),
          ' ',
          book.price
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: function onClick() {
              return addToCart(book);
            } },
          'Add to cart'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null)
      );
    })
  );
};

var Cart = function Cart(_ref2) {
  var items = _ref2.items,
      removeFromCart = _ref2.removeFromCart;

  var total = items.reduce(function (runningTotal, item) {
    return runningTotal + item.price;
  }, 0);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Cart:'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      items.map(function (book) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: book.id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Title:'
            ),
            ' ',
            book.name
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Price:'
            ),
            ' ',
            book.price
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return removeFromCart(book);
              } },
            'Remove'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null)
        );
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'strong',
        null,
        'Total: '
      ),
      total
    )
  );
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      books: [],
      filteredBooks: [],
      isLoading: true,
      query: '',
      cart: []
    };
    _this.performSearch = _this.performSearch.bind(_this);
    _this.addToCart = _this.addToCart.bind(_this);
    _this.removeFromCart = _this.removeFromCart.bind(_this);
    return _this;
  }

  /*
  [
    { id: 0, name: "The Iliad", price: 12 },
    { id: 1, name: "The Republic", price: 10 },
    { id: 2, name: "Beowulf", price: 5 },
    { id: 3, name: "The Art of War", price: 9 }
  ]
  */


  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      fetch('https://mithril-examples.firebaseio.com/books.json').then(function (response) {
        return response.json();
      }).then(function (booksJson) {
        return _this2.setState({
          books: booksJson,
          filteredBooks: booksJson,
          isLoading: false
        });
      });
    }
  }, {
    key: 'performSearch',
    value: function performSearch(event) {
      var _this3 = this;

      var query = event.target.value;
      var filteredBooks = this.state.books.filter(function (book) {
        return book.name.toLowerCase().includes(query.toLowerCase()) && !_this3.state.cart.includes(book);
      });
      this.setState({ query: query, filteredBooks: filteredBooks });
      setTimeout(function () {
        return console.log(_this3.state);
      }, 0);
    }
  }, {
    key: 'addToCart',
    value: function addToCart(book) {
      var bookIndex = this.state.filteredBooks.indexOf(book);
      this.setState({
        cart: this.state.cart.concat(book),
        filteredBooks: [].concat(_toConsumableArray(this.state.filteredBooks.slice(0, bookIndex)), _toConsumableArray(this.state.filteredBooks.slice(bookIndex + 1, this.state.filteredBooks.length)))
      });
    }
  }, {
    key: 'removeFromCart',
    value: function removeFromCart(book) {
      var bookIndex = this.state.cart.indexOf(book);
      this.setState({
        filteredBooks: book.name.toLowerCase().includes(this.state.query.toLowerCase()) ? this.state.filteredBooks.concat(book) : this.state.filteredBooks,
        cart: [].concat(_toConsumableArray(this.state.cart.slice(0, bookIndex)), _toConsumableArray(this.state.cart.slice(bookIndex + 1, this.state.cart.length)))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          this.state.isLoading ? 'Loading...' : 'Book Store'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: this.state.query, onInput: this.performSearch, placeholder: 'Search' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ProductList, { items: this.state.filteredBooks, addToCart: this.addToCart }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Cart, { items: this.state.cart, removeFromCart: this.removeFromCart })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), document.getElementById('app'));

/***/ })
/******/ ]);