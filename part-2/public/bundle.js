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
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    items.sort(alphabetically).map(function (item) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: item.id },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            'Title:'
          ),
          ' ',
          item.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            'Price:'
          ),
          ' $',
          item.price
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: function onClick() {
              return addToCart(item);
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
      items.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: item.id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Title:'
            ),
            ' ',
            item.name
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Price:'
            ),
            ' $',
            item.price
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return removeFromCart(item);
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
      '$',
      total
    )
  );
};

function hasId(arr, id) {
  return arr.reduce(function (idFound, nextItem) {
    return idFound || nextItem.id === id;
  }, false);
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      page: 'Book',
      items: [],
      filteredItems: [],
      isLoading: true,
      query: '',
      cart: []
    };
    _this.setPage = _this.setPage.bind(_this);
    _this.performSearch = _this.performSearch.bind(_this);
    _this.addToCart = _this.addToCart.bind(_this);
    _this.removeFromCart = _this.removeFromCart.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'setPage',
    value: function setPage(page) {
      var _this2 = this;

      this.setState({ page: page, isLoading: true, items: [], filteredItems: [] });
      switch (page) {
        case 'Book':
          this.fetchItems('books').then(function (json) {
            return _this2.setState({
              items: json,
              filteredItems: json.filter(function (item) {
                return item.name.toLowerCase().includes(_this2.state.query.toLowerCase()) && !hasId(_this2.state.cart, item.id);
              }),
              isLoading: false
            });
          });
          break;
        case 'Movie':
          this.fetchItems('movies').then(function (json) {
            return _this2.setState({
              items: json,
              filteredItems: json.filter(function (item) {
                return item.name.toLowerCase().includes(_this2.state.query.toLowerCase()) && !hasId(_this2.state.cart, item.id);
              }),
              isLoading: false
            });
          });
          break;
        case 'Everything':
          Promise.all([this.fetchItems('books'), this.fetchItems('movies')]).then(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                books = _ref4[0],
                movies = _ref4[1];

            return [].concat(_toConsumableArray(books), _toConsumableArray(movies));
          }).then(function (json) {
            return _this2.setState({
              items: json,
              filteredItems: json.filter(function (item) {
                return item.name.toLowerCase().includes(_this2.state.query.toLowerCase()) && !hasId(_this2.state.cart, item.id);
              }),
              isLoading: false
            });
          });
          break;
        default:
          console.error('Unknown page type: ', page);
      }
    }
  }, {
    key: 'fetchItems',
    value: function fetchItems(type) {
      return fetch('https://mithril-examples.firebaseio.com/' + type + '.json').then(function (response) {
        return response.json();
      });
    }

    /*
    [
      { id: 0, name: "The Iliad", price: 12 },
      { id: 1, name: "The Republic", price: 10 },
      { id: 2, name: "Beowulf", price: 5 },
      { id: 3, name: "The Art of War", price: 9 }
    ]
    */

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      this.fetchItems('books').then(function (json) {
        return _this3.setState({
          items: json,
          filteredItems: json,
          isLoading: false
        });
      });
    }
  }, {
    key: 'performSearch',
    value: function performSearch(event) {
      var _this4 = this;

      var query = event.target.value;
      var filteredItems = this.state.items.filter(function (item) {
        return item.name.toLowerCase().includes(query.toLowerCase()) && !hasId(_this4.state.cart, item.id);
      });
      this.setState({ query: query, filteredItems: filteredItems });
    }
  }, {
    key: 'addToCart',
    value: function addToCart(item) {
      var itemIndex = this.state.filteredItems.indexOf(item);
      this.setState({
        cart: this.state.cart.concat(item),
        filteredItems: [].concat(_toConsumableArray(this.state.filteredItems.slice(0, itemIndex)), _toConsumableArray(this.state.filteredItems.slice(itemIndex + 1, this.state.filteredItems.length)))
      });
    }
  }, {
    key: 'removeFromCart',
    value: function removeFromCart(item) {
      var itemIndex = this.state.cart.indexOf(item);
      this.setState({
        filteredItems: item.name.toLowerCase().includes(this.state.query.toLowerCase()) ? this.state.filteredItems.concat(item) : this.state.filteredItems,
        cart: [].concat(_toConsumableArray(this.state.cart.slice(0, itemIndex)), _toConsumableArray(this.state.cart.slice(itemIndex + 1, this.state.cart.length)))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          this.state.isLoading ? 'Loading...' : this.state.page + ' Store'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this5.setPage('Book');
              } },
            'View books'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this5.setPage('Movie');
              } },
            'View movies'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { onClick: function onClick() {
                return _this5.setPage('Everything');
              } },
            'View all'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: this.state.query, onInput: this.performSearch, placeholder: 'Search' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ProductList, { items: this.state.filteredItems, addToCart: this.addToCart }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Cart, { items: this.state.cart, removeFromCart: this.removeFromCart })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), document.getElementById('app'));

/***/ })
/******/ ]);