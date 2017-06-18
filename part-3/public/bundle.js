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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getChangedProps = getChangedProps;
exports.cleanPath = cleanPath;
exports.isObject = isObject;
exports.isComplexObject = isComplexObject;
exports.isSerializable = isSerializable;
exports.ensurePath = ensurePath;
exports.throwError = throwError;
exports.isDeveloping = isDeveloping;
exports.delay = delay;
exports.forceSerializable = forceSerializable;
exports.getProviders = getProviders;
exports.dependencyMatch = dependencyMatch;
exports.getWithPath = getWithPath;
exports.ensureStrictPath = ensureStrictPath;
exports.createResolver = createResolver;
exports.createDummyController = createDummyController;
exports.getStateTreeProp = getStateTreeProp;

var _Tag = __webpack_require__(3);

var _Tag2 = _interopRequireDefault(_Tag);

var _Compute = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChangedProps() {
  var propsA = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var propsAKeys = Object.keys(propsA);
  var propsBKeys = Object.keys(propsB);
  var changedProps = [];

  for (var i = 0; i < propsAKeys.length; i++) {
    if (propsA[propsAKeys[i]] !== propsB[propsAKeys[i]]) {
      changedProps.push({ path: [propsAKeys[i]] });
    }
  }

  for (var _i = 0; _i < propsBKeys.length; _i++) {
    if (propsA[propsBKeys[_i]] !== propsB[propsBKeys[_i]]) {
      changedProps.push({ path: [propsBKeys[_i]] });
    }
  }

  return changedProps;
}

function cleanPath(path) {
  return typeof path === 'string' ? path.replace(/\.\*\*|\.\*/, '') : path;
}

function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && !Array.isArray(obj);
}

function isComplexObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
}

function isSerializable(value) {
  var additionalTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var validType = additionalTypes.reduce(function (currentValid, type) {
    if (currentValid || value instanceof type) {
      return true;
    }

    return currentValid;
  }, false);

  if (value !== undefined && (validType || isObject(value) && Object.prototype.toString.call(value) === '[object Object]' && (value.constructor === Object || Object.getPrototypeOf(value) === null) || typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean' || value === null || Array.isArray(value))) {
    return true;
  }
  return false;
}

function ensurePath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (Array.isArray(path)) {
    return path;
  } else if (typeof path === 'string') {
    return path.split('.');
  }

  return [];
}

function throwError(message) {
  throw new Error('Cerebral - ' + message);
}

function isDeveloping() {
  return process.env.NODE_ENV !== 'production';
}

function delay(func, wait) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      func.apply(context, args);
    };

    setTimeout(later, wait);
  };
}

function forceSerializable(value) {
  if (value && !isSerializable(value)) {
    var name = value.constructor.name;

    try {
      Object.defineProperty(value, 'toJSON', {
        value: function value() {
          return '[' + name + ']';
        }
      });
    } catch (e) {}
  }

  return value;
}

function getProviders(module) {
  return (module.provider ? [module.provider] : []).concat(Object.keys(module.modules || {}).reduce(function (nestedProviders, moduleKey) {
    return nestedProviders.concat(getProviders(module.modules[moduleKey]));
  }, []));
}

function extractAllChildMatches(children) {
  return Object.keys(children).reduce(function (matches, key) {
    if (children[key].children) {
      return matches.concat(children[key]).concat(extractAllChildMatches(children[key].children));
    }

    return matches.concat(children[key]);
  }, []);
}

function dependencyMatch(changes, dependencyMap) {
  var currentMatches = [];

  for (var changeIndex = 0; changeIndex < changes.length; changeIndex++) {
    var currentDependencyMapLevel = dependencyMap;
    for (var pathKeyIndex = 0; pathKeyIndex < changes[changeIndex].path.length; pathKeyIndex++) {
      if (!currentDependencyMapLevel) {
        break;
      }

      if (currentDependencyMapLevel['**']) {
        currentMatches.push(currentDependencyMapLevel['**']);
      }

      if (pathKeyIndex === changes[changeIndex].path.length - 1) {
        var dependency = currentDependencyMapLevel[changes[changeIndex].path[pathKeyIndex]];
        if (dependency) {
          currentMatches.push(dependency);

          if (dependency.children) {
            if (changes[changeIndex].forceChildPathUpdates) {
              currentMatches = currentMatches.concat(extractAllChildMatches(dependency.children));
            } else {
              if (dependency.children['**']) {
                currentMatches.push(dependency.children['**']);
              }

              if (dependency.children['*']) {
                currentMatches.push(dependency.children['*']);
              }
            }
          }
        }

        if (currentDependencyMapLevel['*']) {
          currentMatches.push(currentDependencyMapLevel['*']);
        }
      }

      if (!currentDependencyMapLevel[changes[changeIndex].path[pathKeyIndex]]) {
        currentDependencyMapLevel = null;
        break;
      }

      currentDependencyMapLevel = currentDependencyMapLevel[changes[changeIndex].path[pathKeyIndex]].children;
    }
  }

  return currentMatches;
}

function getWithPath(obj) {
  return function (path) {
    return path.split('.').reduce(function (currentValue, key, index) {
      if (index > 0 && currentValue === undefined) {
        throwError('You are extracting with path "' + path + '", but it is not valid for this object');
      }

      return currentValue[key];
    }, obj);
  };
}

function ensureStrictPath(path, value) {
  if (isComplexObject(value) && path.indexOf('*') === -1) {
    return path + '.**';
  }

  return path;
}

function createResolver(getters) {
  return {
    isTag: function isTag(arg) {
      if (!(arg instanceof _Tag2.default)) {
        return false;
      }

      for (var _len2 = arguments.length, types = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        types[_key2 - 1] = arguments[_key2];
      }

      if (types.length) {
        return types.reduce(function (isType, type) {
          return isType || type === arg.type;
        }, false);
      }

      return true;
    },
    isCompute: function isCompute(arg) {
      return arg instanceof _Compute.Compute;
    },
    value: function value(arg, overrideProps) {
      if (arg instanceof _Tag2.default || arg instanceof _Compute.Compute) {
        return arg.getValue(overrideProps ? Object.assign({}, getters, { props: overrideProps }) : getters);
      }

      return arg;
    },
    path: function path(arg) {
      if (arg instanceof _Tag2.default) {
        return arg.getPath(getters);
      }

      throwError('You are extracting a path from an argument that is not a Tag');
    }
  };
}

var noop = exports.noop = function noop() {};

/*
  When testing and running on the server there is no need to
  initialize all of Cerebral. So by not passing a controller
  to this Container it will create a dummy version which inserts
  state and mocks any signals when connecting the component.
*/
function createDummyController() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var signals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var getState = function getState(path) {
    return ensurePath(path).reduce(function (currentState, pathKey) {
      return currentState ? currentState[pathKey] : undefined;
    }, state);
  };
  return {
    options: {},
    on: function on() {},

    getState: getState,
    model: {
      get: getState
    },
    getSignal: function getSignal(signal) {
      return signals[signal] || function () {};
    },

    componentDependencyStore: {
      addEntity: noop
    }
  };
}

function getStateTreeProp() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return Object.keys(props).reduce(function (prop, key) {
    if (prop || isComplexObject(props[key]) && Object.isFrozen(props[key])) {
      return key;
    }

    return prop;
  }, null);
}
//# sourceMappingURL=utils.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86)


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createResponse = createResponse;
exports.mergeWith = mergeWith;
exports.urlEncode = urlEncode;
exports.convertObjectWithTemplates = convertObjectWithTemplates;
exports.parseHeaders = parseHeaders;
exports.processResponse = processResponse;
exports.getAllResponseHeaders = getAllResponseHeaders;

var _HttpProviderError = __webpack_require__(10);

var _HttpProviderError2 = _interopRequireDefault(_HttpProviderError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createResponse(options, resolve, reject) {
  return function (event) {
    switch (event.type) {
      case 'load':
        return options.onResponse(event.currentTarget, resolve, reject);
      case 'progress':
        if (options.onProgress && event.lengthComputable) {
          options.onProgress({
            progress: Number(event.loaded / event.total).toFixed(0)
          });
        }
        break;
      case 'error':
        reject(new _HttpProviderError2.default(event.currentTarget.status, null, null, 'request error'));
        break;
      case 'abort':
        reject(new _HttpProviderError2.default(event.currentTarget.status, null, null, 'request abort', true));
        break;
    }
  };
}

function mergeWith(optionsA, optionsB) {
  return Object.keys(optionsB).reduce(function (newOptions, key) {
    if (!newOptions[key]) {
      newOptions[key] = optionsB[key];
    } else if (key === 'headers') {
      newOptions[key] = mergeWith(newOptions[key], optionsB[key] || {});
    }

    return newOptions;
  }, optionsA);
}

function urlEncode(obj, prefix) {
  var str = [];

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + '[' + p + ']' : p;
      var v = obj[p];

      str.push((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? urlEncode(v, k) : encodeURIComponent(k) + '=' + encodeURIComponent(v));
    }
  }
  return str.join('&');
}

function convertObjectWithTemplates(obj, resolve) {
  if (resolve.isTag(obj)) {
    return resolve.value(obj);
  }

  return Object.keys(obj).reduce(function (convertedObject, key) {
    convertedObject[key] = resolve.value(obj[key]);
    return convertedObject;
  }, {});
}

function parseHeaders(rawHeaders) {
  var headerPairs = rawHeaders.replace(/\r?\n$/, '').split(/\r?\n/);

  return headerPairs.reduce(function (parsedHeaders, headerPair) {
    var index = headerPair.indexOf(':');
    var key = headerPair.substr(0, index).trim().toLowerCase();
    var value = headerPair.substr(index + 1).trim();
    if (key) {
      parsedHeaders[key] = parsedHeaders[key] ? parsedHeaders[key] + ', ' + value : value;
    }

    return parsedHeaders;
  }, {});
}

function processResponse(httpAction, path) {
  return httpAction.then(function (response) {
    if (path && path[response.status]) {
      return path[response.status](response);
    }

    return path && path.success ? path.success(response) : response;
  })
  // This error will be an instance of HttpError
  .catch(function (error) {
    if (!path) {
      throw error;
    }

    if (error.isAborted && path.abort) {
      return path.abort({ error: error.toJSON() });
    }

    if (path[error.status]) {
      return path[error.status]({ error: error.toJSON() });
    }

    if (path.error) {
      return path.error({ error: error.toJSON() });
    }

    throw error;
  });
}

function getAllResponseHeaders(xhr) {
  return 'getAllResponseHeaders' in xhr ? parseHeaders(xhr.getAllResponseHeaders()) : null;
}
//# sourceMappingURL=utils.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Compute = __webpack_require__(11);

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Creates tag for targetting things with a path in Cerebral
*/
var Tag = function () {
  function Tag(tag) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var strings = arguments[2];
    var values = arguments[3];

    _classCallCheck(this, Tag);

    options.hasValue = options.hasValue === undefined ? true : options.hasValue;

    this.type = tag;
    this.options = options;
    this.strings = strings;
    this.values = values;
  }
  /*
    Returns all tags, also nested to identify nested state dependencies
    in components
  */


  _createClass(Tag, [{
    key: 'getTags',
    value: function getTags() {
      return [this].concat(this.getNestedTags());
    }
    /*
      Gets the path of the tag, where nested tags are evaluated
    */

  }, {
    key: 'getPath',
    value: function getPath(getters) {
      if (!getters) {
        (0, _utils.throwError)('You can not grab the path from a Tag without getters');
      }

      return this.populatePath(getters);
    }
    /*
      Uses the path of the tag to look it up in related getter
    */

  }, {
    key: 'getValue',
    value: function getValue(getters) {
      if (!getters) {
        (0, _utils.throwError)('You can not grab a value from a Tag without getters');
      }

      if (this.options.hasValue) {
        var getter = getters[this.type];
        if (!getter) {
          (0, _utils.throwError)('Tag of type ' + this.type.toUpperCase() + ' can not be used in this context');
        }
        return typeof getter === 'function' ? getter(this.getPath(getters)) : this.extractValueWithPath(getter, this.getPath(getters));
      } else {
        return this.getPath(getters);
      }
    }
    /*
      Grab nested tags from the tags current path
    */

  }, {
    key: 'getNestedTags',
    value: function getNestedTags() {
      var _this = this;

      return this.strings.reduce(function (currentPaths, string, idx) {
        var valueTemplate = _this.values[idx];

        if (valueTemplate instanceof Tag) {
          return currentPaths.concat(valueTemplate);
        }

        return currentPaths;
      }, []);
    }
    /*
      Extracts value from object using a path
    */

  }, {
    key: 'extractValueWithPath',
    value: function extractValueWithPath(obj, path) {
      return path.split('.').reduce(function (currentValue, key, index) {
        if (index > 0 && currentValue === undefined) {
          (0, _utils.throwError)('A tag is extracting with path "' + path + '", but it is not valid');
        }

        return currentValue[key];
      }, obj);
    }
    /*
      Populates nested tags in the tags path
    */

  }, {
    key: 'populatePath',
    value: function populatePath(getters) {
      var _this2 = this;

      return this.strings.reduce(function (currentPath, string, idx) {
        var valueTemplate = _this2.values[idx];

        if (valueTemplate instanceof Tag || valueTemplate instanceof _Compute.Compute) {
          return currentPath + string + valueTemplate.getValue(getters);
        }

        return currentPath + string + (valueTemplate || '');
      }, '');
    }
    /*
      Produces a string representation of the tag
    */

  }, {
    key: 'toString',
    value: function toString() {
      return this.type + '`' + this.pathToString() + '`';
    }
    /*
      Produces a string representation of the path
    */

  }, {
    key: 'pathToString',
    value: function pathToString() {
      var _this3 = this;

      return this.strings.reduce(function (currentPath, string, idx) {
        var valueTemplate = _this3.values[idx];

        if (valueTemplate instanceof Tag) {
          return currentPath + string + '${' + valueTemplate.toString() + '}';
        }

        return currentPath + string + (valueTemplate || '');
      }, '');
    }
  }]);

  return Tag;
}();

exports.default = Tag;
//# sourceMappingURL=Tag.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92)


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65)


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(60)


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var FunctionTreeError = exports.FunctionTreeError = function (_extendableBuiltin2) {
  _inherits(FunctionTreeError, _extendableBuiltin2);

  function FunctionTreeError(error) {
    _classCallCheck(this, FunctionTreeError);

    var _this = _possibleConstructorReturn(this, (FunctionTreeError.__proto__ || Object.getPrototypeOf(FunctionTreeError)).call(this, error.message || error));

    _this.name = 'FunctionTreeError';
    return _this;
  }

  _createClass(FunctionTreeError, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        stack: this.stack
      };
    }
  }]);

  return FunctionTreeError;
}(_extendableBuiltin(Error));

var FunctionTreeExecutionError = exports.FunctionTreeExecutionError = function (_FunctionTreeError) {
  _inherits(FunctionTreeExecutionError, _FunctionTreeError);

  function FunctionTreeExecutionError(execution, funcDetails, payload, error) {
    _classCallCheck(this, FunctionTreeExecutionError);

    var _this2 = _possibleConstructorReturn(this, (FunctionTreeExecutionError.__proto__ || Object.getPrototypeOf(FunctionTreeExecutionError)).call(this, error));

    _this2.name = 'FunctionTreeExecutionError';
    _this2.execution = execution;
    _this2.funcDetails = funcDetails;
    _this2.payload = payload;
    return _this2;
  }

  _createClass(FunctionTreeExecutionError, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        execution: {
          name: this.execution.name
        },
        funcDetails: {
          name: this.funcDetails.name,
          functionIndex: this.funcDetails.functionIndex
        },
        payload: this.payload,
        stack: this.stack
      };
    }
  }]);

  return FunctionTreeExecutionError;
}(FunctionTreeError);
//# sourceMappingURL=errors.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var HttpProviderError = function (_extendableBuiltin2) {
  _inherits(HttpProviderError, _extendableBuiltin2);

  function HttpProviderError(status, headers, body) {
    var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var isAborted = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _classCallCheck(this, HttpProviderError);

    var _this = _possibleConstructorReturn(this, (HttpProviderError.__proto__ || Object.getPrototypeOf(HttpProviderError)).call(this));

    _this.name = 'HttpProviderError';
    _this.message = message;
    _this.status = status;
    _this.headers = headers;
    _this.body = body;
    _this.isAborted = isAborted;
    return _this;
  }

  _createClass(HttpProviderError, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        headers: this.headers,
        body: this.body,
        isAborted: this.isAborted
      };
    }
  }]);

  return HttpProviderError;
}(_extendableBuiltin(Error));

exports.default = HttpProviderError;
//# sourceMappingURL=HttpProviderError.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Compute = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = compute;

var _Tag = __webpack_require__(3);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Compute = exports.Compute = function () {
  function Compute(args) {
    _classCallCheck(this, Compute);

    this.args = args;
    this.value = null;
  }

  _createClass(Compute, [{
    key: 'getValue',
    value: function getValue(get) {
      var computeGet = function computeGet(tag) {
        return tag.getValue(get);
      };
      var result = this.args.reduce(function (details, arg, index) {
        if (arg instanceof Compute) {
          details.results.push(arg.getValue(get));

          return details;
        } else if (arg instanceof _Tag2.default) {
          var path = arg.getPath(get);

          if (path.indexOf('.*') > 0) {
            var value = arg.getValue(get);

            details.results.push(value ? Object.keys(value) : []);
          } else {
            details.results.push(arg.getValue(get));
          }

          return details;
        } else if (typeof arg === 'function') {
          details.results.push(arg.apply(undefined, _toConsumableArray(details.results.slice(details.previousFuncIndex, index)).concat([computeGet])));
          details.previousFuncIndex = index;

          return details;
        }

        details.results.push(arg);

        return details;
      }, {
        results: [],
        previousFuncIndex: 0
      });

      return result.results[result.results.length - 1];
    }
  }]);

  return Compute;
}();

function compute() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new Compute(args);
}
//# sourceMappingURL=Compute.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Path = function () {
  function Path(path, payload) {
    _classCallCheck(this, Path);

    this.path = path;
    this.payload = payload;
  }

  _createClass(Path, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        path: this.path,
        payload: this.payload
      };
    }
  }]);

  return Path;
}();

exports.default = Path;
//# sourceMappingURL=Path.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parallel = exports.Sequence = exports.Primitive = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _errors = __webpack_require__(9);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Primitive = exports.Primitive = function () {
  function Primitive(type) {
    _classCallCheck(this, Primitive);

    this.type = type;

    if (typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string') {
      this.name = arguments.length <= 1 ? undefined : arguments[1];
      this.items = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      this.name = null;
      this.items = arguments.length <= 1 ? undefined : arguments[1];
    }

    if (!Array.isArray(this.items)) {
      throw new _errors.FunctionTreeError('You have not passed an array of functions to ' + type);
    }
  }

  _createClass(Primitive, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        name: this.name,
        _functionTreePrimitive: true,
        type: this.type,
        items: this.items
      };
    }
  }]);

  return Primitive;
}();

var Sequence = exports.Sequence = function (_Primitive) {
  _inherits(Sequence, _Primitive);

  function Sequence() {
    var _ref;

    _classCallCheck(this, Sequence);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Sequence.__proto__ || Object.getPrototypeOf(Sequence)).call.apply(_ref, [this, 'sequence'].concat(args)));
  }

  return Sequence;
}(Primitive);

var Parallel = exports.Parallel = function (_Primitive2) {
  _inherits(Parallel, _Primitive2);

  function Parallel() {
    var _ref2;

    _classCallCheck(this, Parallel);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(this, (_ref2 = Parallel.__proto__ || Object.getPrototypeOf(Parallel)).call.apply(_ref2, [this, 'parallel'].concat(args)));
  }

  return Parallel;
}(Primitive);
//# sourceMappingURL=primitives.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(106)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(105)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cerebral_http_operators__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cerebral_http_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cerebral_http_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['errorMessage'], ['errorMessage']),
    _templateObject2 = _taggedTemplateLiteral(['isLoading'], ['isLoading']),
    _templateObject3 = _taggedTemplateLiteral(['products'], ['products']),
    _templateObject4 = _taggedTemplateLiteral(['page'], ['page']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






// function wait(ms) {
//   const waitFn = () => new Promise((resolve) => setTimeout(resolve, ms));
//   waitFn.displayName = 'Wait (' + ms + 'ms)';
//   return waitFn;
// }

function concat(key, value) {
  return function (_ref) {
    var props = _ref.props;

    return _defineProperty({}, key, props[key].concat(props[value]));
  };
}

function fetchProducts(url) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cerebral_http_operators__["httpGet"])(url), {
    success: [concat('products', 'result')],
    error: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__["state"])(_templateObject), 'Could not load products')]
    // 401: [ set(state`errorMessage`, 'Not authorized') ],
    // 404: [ set(state`errorMessage`, 'Products not found') ],
    // 500: [ set(state`errorMessage`, 'The server encountered an error') ],
    // abort: [],
  }];
}

/* harmony default export */ __webpack_exports__["a"] = ([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__["state"])(_templateObject2), true), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__["state"])(_templateObject3), []), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__["props"])(_templateObject3), []),
// wait(200),
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_operators__["equals"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__["state"])(_templateObject4)), {
  all: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral__["parallel"])([fetchProducts('/books.json'), fetchProducts('/movies.json')]),
  books: [fetchProducts('/books.json')],
  movies: [fetchProducts('/movies.json')],
  otherwise: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__["state"])(_templateObject), 'Page not found')]
}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__["state"])(_templateObject3), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__["props"])(_templateObject3)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_cerebral_tags__["state"])(_templateObject2), false)]);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DependencyStore = __webpack_require__(53);

var _DependencyStore2 = _interopRequireDefault(_DependencyStore);

var _functionTree = __webpack_require__(21);

var _functionTree2 = _interopRequireDefault(_functionTree);

var _Module = __webpack_require__(56);

var _Module2 = _interopRequireDefault(_Module);

var _Model = __webpack_require__(55);

var _Model2 = _interopRequireDefault(_Model);

var _utils = __webpack_require__(0);

var _VerifyProps = __webpack_require__(85);

var _VerifyProps2 = _interopRequireDefault(_VerifyProps);

var _State = __webpack_require__(84);

var _State2 = _interopRequireDefault(_State);

var _Debugger = __webpack_require__(82);

var _Debugger2 = _interopRequireDefault(_Debugger);

var _Controller = __webpack_require__(81);

var _Controller2 = _interopRequireDefault(_Controller);

var _Resolve = __webpack_require__(83);

var _Resolve2 = _interopRequireDefault(_Resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getModule(path, modules) {
  var pathArray = Array.isArray(path) ? path : path.split('.');
  return pathArray.reduce(function (currentModule, key) {
    if (!currentModule.modules[key]) {
      (0, _utils.throwError)('The path "' + pathArray.join('.') + '" is invalid, can not find module. Does the path "' + pathArray.splice(0, path.length - 1).join('.') + '" exist?');
    }
    return currentModule.modules[key];
  }, modules);
}
/*
  The controller is where everything is attached. The devtools
  and router is attached directly. Also a top level module is created.
  The controller creates the function tree that will run all signals,
  based on top level providers and providers defined in modules
*/

var Controller = function (_FunctionTree) {
  _inherits(Controller, _FunctionTree);

  function Controller(config) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this));

    var _config$state = config.state,
        state = _config$state === undefined ? {} : _config$state,
        _config$signals = config.signals,
        signals = _config$signals === undefined ? {} : _config$signals,
        _config$providers = config.providers,
        providers = _config$providers === undefined ? [] : _config$providers,
        _config$modules = config.modules,
        modules = _config$modules === undefined ? {} : _config$modules,
        router = config.router,
        _config$devtools = config.devtools,
        devtools = _config$devtools === undefined ? null : _config$devtools,
        _config$options = config.options,
        options = _config$options === undefined ? {} : _config$options;

    var getSignal = _this.getSignal;

    _this.getSignal = function () {
      (0, _utils.throwError)('You are grabbing a signal before controller has initialized, please wait for "initialized" event');
    };

    if (router) {
      console.warn('DEPRECATION: the \'router\' module should be in modules.');
      modules.router = router;
    }

    _this.componentDependencyStore = new _DependencyStore2.default();
    _this.options = options;
    _this.catch = config.catch || null;
    _this.flush = _this.flush.bind(_this);
    _this.devtools = devtools;
    _this.model = new _Model2.default({}, _this.devtools);
    _this.module = new _Module2.default(_this, [], {
      state: state,
      signals: signals,
      modules: modules
    });

    if (options.strictRender) {
      console.warn('DEPRECATION - No need to use strictRender option anymore, it is the only render mode now');
    }

    _this.contextProviders = [(0, _Controller2.default)(_this)].concat(_this.devtools ? [(0, _Debugger2.default)()] : []).concat((0, _utils.isDeveloping)() ? [_VerifyProps2.default] : []).concat((0, _State2.default)(), (0, _Resolve2.default)()).concat(providers.concat((0, _utils.getProviders)(_this.module)));

    _this.on('asyncFunction', function (execution, funcDetails) {
      if (!funcDetails.isParallel) {
        _this.flush();
      }
    });
    _this.on('parallelStart', function () {
      return _this.flush();
    });
    _this.on('parallelProgress', function (execution, currentPayload, functionsResolving) {
      if (functionsResolving === 1) {
        _this.flush();
      }
    });
    _this.on('end', function () {
      return _this.flush();
    });

    if (typeof window !== 'undefined' && window.CEREBRAL_STATE) {
      Object.keys(window.CEREBRAL_STATE).forEach(function (statePath) {
        _this.model.set(statePath.split('.'), window.CEREBRAL_STATE[statePath]);
      });
    }

    if (_this.devtools) {
      _this.devtools.init(_this);
    }

    if (!_this.devtools && (0, _utils.isDeveloping)() && typeof navigator !== 'undefined' && /Chrome/.test(navigator.userAgent)) {
      console.warn('You are not using the Cerebral devtools. It is highly recommended to use it in combination with the debugger: http://cerebraljs.com/docs/get_started/debugger.html');
    }

    _this.getSignal = getSignal;

    _this.model.flush();

    _this.emit('initialized');
    return _this;
  }
  /*
    Whenever components needs to be updated, this method
    can be called
  */


  _createClass(Controller, [{
    key: 'flush',
    value: function flush(force) {
      var changes = this.model.flush();

      if (!force && !Object.keys(changes).length) {
        return;
      }

      this.updateComponents(changes, force);
      this.emit('flush', changes, Boolean(force));
    }
  }, {
    key: 'updateComponents',
    value: function updateComponents(changes, force) {
      var _this2 = this;

      var componentsToRender = [];

      if (force) {
        componentsToRender = this.componentDependencyStore.getAllUniqueEntities();
      } else {
        componentsToRender = this.componentDependencyStore.getUniqueEntities(changes);
      }

      var start = Date.now();
      componentsToRender.forEach(function (component) {
        if (_this2.devtools) {
          _this2.devtools.updateComponentsMap(component);
        }
        component.onUpdate(changes, force);
      });
      var end = Date.now();

      if (this.devtools && componentsToRender.length) {
        this.devtools.sendComponentsMap(componentsToRender, changes, start, end);
      }
    }
    /*
      Conveniance method for grabbing the model
    */

  }, {
    key: 'getModel',
    value: function getModel() {
      return this.model;
    }
    /*
      Method called by view to grab state
    */

  }, {
    key: 'getState',
    value: function getState(path) {
      return this.model.get((0, _utils.ensurePath)((0, _utils.cleanPath)(path)));
    }
    /*
      Uses function tree to run the array and optional
      payload passed in. The payload will be checkd
    */

  }, {
    key: 'runSignal',
    value: function runSignal(name, signal) {
      var _this3 = this;

      var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.devtools && (!(0, _utils.isObject)(payload) || !(0, _utils.isSerializable)(payload))) {
        console.warn('You passed an invalid payload to signal "' + name + '". Only serializable payloads can be passed to a signal. The payload has been ignored. This is the object:', payload);
        payload = {};
      }

      if (this.devtools) {
        payload = Object.keys(payload).reduce(function (currentPayload, key) {
          if (!(0, _utils.isSerializable)(payload[key], _this3.devtools.allowedTypes)) {
            console.warn('You passed an invalid payload to signal "' + name + '", on key "' + key + '". Only serializable values like Object, Array, String, Number and Boolean can be passed in. Also these special value types:', _this3.devtools.allowedTypes);

            return currentPayload;
          }

          currentPayload[key] = (0, _utils.forceSerializable)(payload[key]);

          return currentPayload;
        }, {});
      }

      this.run(name, signal, payload, function (error) {
        if (error) {
          var signalPath = error.execution.name.split('.');
          var signalCatch = signalPath.reduce(function (currentModule, key, index) {
            if (index === signalPath.length - 1 && currentModule.signals[key]) {
              return currentModule.signals[key].catch;
            }

            return currentModule ? currentModule.modules[key] : null;
          }, _this3.module);

          // if signal doesn't have a catch method and we have a global catch, try using it
          if (!signalCatch) {
            if (_this3.catch instanceof Map) {
              signalCatch = _this3.catch;
            } else {
              throw error;
            }
          }

          if (signalCatch instanceof Map) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = signalCatch[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _step$value = _slicedToArray(_step.value, 2),
                    errorType = _step$value[0],
                    signalChain = _step$value[1];

                if (error instanceof errorType) {
                  _this3.runSignal('catch', signalChain, error.payload);

                  return;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          throw error;
        }
      });
    }
    /*
      Returns a function which binds the name/path of signal,
      and the array. This allows view layer to just call it with
      an optional payload and it will run
    */

  }, {
    key: 'getSignal',
    value: function getSignal(path) {
      var pathArray = (0, _utils.ensurePath)(path);
      var signalKey = pathArray.pop();
      var module = pathArray.reduce(function (currentModule, key) {
        return currentModule ? currentModule.modules[key] : undefined;
      }, this.module);
      var signal = module && module.signals[signalKey];

      if (!signal) {
        (0, _utils.throwError)('There is no signal at path "' + path + '"');
      }

      return signal.run;
    }
  }, {
    key: 'addModule',
    value: function addModule(path, module) {
      var pathArray = path.split('.');
      var moduleKey = pathArray.pop();
      var parentModule = getModule(pathArray, this.module);
      parentModule.modules[moduleKey] = new _Module2.default(this, path.split('.'), module);

      if (module.provider) {
        this.contextProviders.push(module.provider);
      }

      this.flush();
    }
  }, {
    key: 'removeModule',
    value: function removeModule(path) {
      if (!path) {
        console.warn('Controller.removeModule requires a Module Path');
        return null;
      }

      var pathArray = path.split('.');
      var moduleKey = pathArray.pop();
      var parentModule = getModule(pathArray, this.module);

      var module = parentModule.modules[moduleKey];

      if (module.provider) {
        this.contextProviders.splice(this.contextProviders.indexOf(module.provider), 1);
      }

      delete parentModule.modules[moduleKey];

      this.model.unset(path.split('.'));

      this.flush();
    }
  }]);

  return Controller;
}(_functionTree2.default);

exports.default = Controller;
//# sourceMappingURL=Controller.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(12);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FunctionTree = exports.FunctionTreeError = exports.FunctionTreeExecutionError = undefined;

var _errors = __webpack_require__(9);

Object.defineProperty(exports, 'FunctionTreeExecutionError', {
  enumerable: true,
  get: function get() {
    return _errors.FunctionTreeExecutionError;
  }
});
Object.defineProperty(exports, 'FunctionTreeError', {
  enumerable: true,
  get: function get() {
    return _errors.FunctionTreeError;
  }
});
exports.sequence = sequence;
exports.parallel = parallel;

var _FunctionTree = __webpack_require__(94);

Object.defineProperty(exports, 'FunctionTree', {
  enumerable: true,
  get: function get() {
    return _FunctionTree.FunctionTree;
  }
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _FunctionTree.FunctionTree;
  }
});

var _primitives = __webpack_require__(15);

function sequence() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_primitives.Sequence, [null].concat(args)))();
}

function parallel() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return new (Function.prototype.bind.apply(_primitives.Parallel, [null].concat(args)))();
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Error__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Nav__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ProductList__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_SearchInput__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Title__ = __webpack_require__(42);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.onInit();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Title__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Nav__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Error__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_SearchInput__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ProductList__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Cart__["a" /* default */], null)
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cerebral_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_devtools__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_devtools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cerebral_devtools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signals_initialized__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signals_changedPage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signals_searched__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signals_addedToCart__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signals_removedFromCart__ = __webpack_require__(50);










var controller = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral__["Controller"])({
  state: {
    isLoading: false,
    page: 'books',
    errorMessage: '',
    query: '',
    cart: [],
    products: []
  },
  signals: {
    initialized: __WEBPACK_IMPORTED_MODULE_3__signals_initialized__["a" /* default */],
    changedPage: __WEBPACK_IMPORTED_MODULE_4__signals_changedPage__["a" /* default */],
    searched: __WEBPACK_IMPORTED_MODULE_5__signals_searched__["a" /* default */],
    addedToCart: __WEBPACK_IMPORTED_MODULE_6__signals_addedToCart__["a" /* default */],
    removedFromCart: __WEBPACK_IMPORTED_MODULE_7__signals_removedFromCart__["a" /* default */]
  },
  providers: [__WEBPACK_IMPORTED_MODULE_1__cerebral_http___default()({
    baseUrl: 'https://mithril-examples.firebaseio.com'
  })],
  devtools: __WEBPACK_IMPORTED_MODULE_2_cerebral_devtools___default()({
    host: 'localhost:8000'
  })
});

/* harmony default export */ __webpack_exports__["a"] = (controller);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

var _HttpProviderError = __webpack_require__(10);

var _HttpProviderError2 = _interopRequireDefault(_HttpProviderError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  method: 'get',
  baseUrl: '',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json'
  },
  onRequest: function onRequest(xhr, options) {
    if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      options.body = (0, _utils.urlEncode)(options.body);
    } else if (options.headers['Content-Type'].indexOf('application/json') >= 0) {
      options.body = JSON.stringify(options.body);
    }

    xhr.withCredentials = Boolean(options.withCredentials);

    Object.keys(options.headers).forEach(function (key) {
      xhr.setRequestHeader(key, options.headers[key]);
    });

    xhr.send(options.body);
  },
  onResponse: function onResponse(xhr, resolve, reject) {
    var result = xhr.responseText;

    if (result && xhr.getResponseHeader('Content-Type').indexOf('application/json') >= 0) {
      result = JSON.parse(xhr.responseText);
    }

    var responseHeaders = (0, _utils.getAllResponseHeaders)(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      resolve({
        status: xhr.status,
        headers: responseHeaders,
        result: result
      });
    } else {
      reject(new _HttpProviderError2.default(xhr.status, responseHeaders, result));
    }
  }
};
//# sourceMappingURL=DEFAULT_OPTIONS.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  if (!options.url) {
    console.warn('upload-controller: you must provide a url');
    return;
  }
  this.isAborted = false;
  this.xhr = new XMLHttpRequest();
  this.abort = function () {
    this.isAborted = true;
    this.xhr && this.xhr.abort();
  };

  this.send = function (files) {
    var fileUpload = this;
    var xhr = this.xhr;

    fileUpload.isAborted = false;

    return new Promise(function (resolve, reject) {
      if (files && (files instanceof FileList || files.length || files instanceof File)) {
        var formData = new FormData();

        if (files instanceof FileList || files.length) {
          for (var i = 0; i < files.length; i++) {
            formData.append(options.name || 'files', files[i]);
          }
        } else {
          formData.append(options.name || 'files', files);
        }

        if (options.data) {
          Object.keys(options.data).forEach(function (paramKey) {
            formData.append(paramKey, options.data[paramKey]);
          });
        }

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
            resolve(parseResponse(xhr));
          } else if (xhr.readyState === 4) {
            var response = parseResponse(xhr);

            response.isAborted = fileUpload.isAborted;
            reject(response);
          }
        };

        xhr.open('POST', options.url, true);

        if (options.headers) {
          Object.keys(options.headers).forEach(function (key) {
            xhr.setRequestHeader(key, options.headers[key]);
          });
        }

        xhr.upload.onprogress = function (e) {
          if (options.onProgress) {
            var percentComplete = e.loaded / e.total * 100;
            options.onProgress({
              progress: +percentComplete.toFixed(0)
            });
          }
        };

        xhr.send(formData);
      } else {
        reject('Not an instance of a File, File[] or FileList');
      }
    });
  };
};

var _utils = __webpack_require__(2);

var _HttpProviderError = __webpack_require__(10);

var _HttpProviderError2 = _interopRequireDefault(_HttpProviderError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env browser */
/* eslint-disable prefer-promise-reject-errors */
function parseResponse(xhr) {
  try {
    return {
      status: xhr.status,
      result: JSON.parse(xhr.responseText)
    };
  } catch (e) {
    throw new _HttpProviderError2.default(xhr.status, (0, _utils.getAllResponseHeaders)(xhr), xhr.responseText, e.message);
  }
}
//# sourceMappingURL=fileUpload.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpProviderError = undefined;

var _HttpProviderError = __webpack_require__(10);

Object.defineProperty(exports, 'HttpProviderError', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HttpProviderError).default;
  }
});
exports.default = HttpProviderFactory;

var _request = __webpack_require__(35);

var _request2 = _interopRequireDefault(_request);

var _utils = __webpack_require__(2);

var _fileUpload = __webpack_require__(26);

var _fileUpload2 = _interopRequireDefault(_fileUpload);

var _DEFAULT_OPTIONS = __webpack_require__(25);

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HttpProviderFactory(passedOptions) {
  var moduleOptions = (0, _utils.mergeWith)({}, _DEFAULT_OPTIONS2.default);
  if (typeof passedOptions === 'function') {
    moduleOptions = passedOptions(moduleOptions);
  } else if (passedOptions) {
    moduleOptions = (0, _utils.mergeWith)(passedOptions, _DEFAULT_OPTIONS2.default);
  }

  var cachedProvider = null;
  function HttpProvider(context) {
    var requests = {};
    function createAbortablePromise(url, cb) {
      return new Promise(function (resolve, reject) {
        requests[url] = {
          resolve: resolve,
          reject: reject,
          // eslint-disable-next-line standard/no-callback-literal
          xhr: cb(function (payload) {
            delete requests[url];
            resolve(payload);
          }, function (error) {
            delete requests[url];
            reject(error);
          })
        };
      });
    }

    function requestService(options) {
      options = (0, _utils.mergeWith)(options, moduleOptions);

      if (typeof options.onProgress === 'string') {
        options.onProgress = context.controller.getSignal(options.onProgress);
      }

      options.method = options.method.toUpperCase();

      return createAbortablePromise(options.url, function (resolve, reject) {
        return (0, _request2.default)(options, (0, _utils.createResponse)(options, resolve, reject));
      });
    }

    if (cachedProvider) {
      context.http = cachedProvider;
    } else {
      context.http = cachedProvider = {
        request: requestService,
        get: function get(url, passedQuery) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          var query = passedQuery || options.query;

          options.url = query && Object.keys(query).length ? url + '?' + (0, _utils.urlEncode)(query) : url;
          options.method = 'GET';

          return requestService(options);
        },
        post: function post(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          options.url = options.query && Object.keys(options.query).length ? url + '?' + (0, _utils.urlEncode)(options.query) : url;
          options.method = 'POST';
          options.body = body;

          return requestService(options);
        },
        put: function put(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          options.url = options.query && Object.keys(options.query).length ? url + '?' + (0, _utils.urlEncode)(options.query) : url;
          options.method = 'PUT';
          options.body = body;

          return requestService(options);
        },
        patch: function patch(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          options.url = options.query && Object.keys(options.query).length ? url + '?' + (0, _utils.urlEncode)(options.query) : url;
          options.method = 'PATCH';
          options.body = body;

          return requestService(options);
        },
        delete: function _delete(url, query) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          options.url = options.query && Object.keys(options.query).length ? url + '?' + (0, _utils.urlEncode)(options.query) : url;
          options.method = 'DELETE';

          return requestService(options);
        },
        updateOptions: function updateOptions(newOptions) {
          moduleOptions = (0, _utils.mergeWith)(newOptions, moduleOptions);
        },
        abort: function abort(regexp) {
          var matchingUrls = Object.keys(requests).filter(function (url) {
            return Boolean(url.match(new RegExp(regexp)));
          });
          matchingUrls.forEach(function (url) {
            requests[url].xhr.abort();
          });
        },
        uploadFile: function uploadFile(url, files) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          options.url = moduleOptions.baseUrl + url;

          return new _fileUpload2.default(options).send(files);
        }
      };
    }

    if (context.debugger) {
      context.debugger.wrapProvider('http');
    }

    return context;
  }
  return HttpProvider;
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

function httpDeleteFactory(url) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function httpDelete(_ref) {
    var http = _ref.http,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _utils.processResponse)(http.delete(resolve.value(url), (0, _utils.convertObjectWithTemplates)(query, resolve)), path);
  }

  return httpDelete;
}

exports.default = httpDeleteFactory;
//# sourceMappingURL=httpDelete.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

function httpGetFactory(url) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function httpGet(_ref) {
    var http = _ref.http,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _utils.processResponse)(http.get(resolve.value(url), (0, _utils.convertObjectWithTemplates)(query, resolve)), path);
  }

  return httpGet;
}

exports.default = httpGetFactory;
//# sourceMappingURL=httpGet.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

function httpPatchFactory(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function httpPatch(_ref) {
    var http = _ref.http,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _utils.processResponse)(http.patch(resolve.value(url), (0, _utils.convertObjectWithTemplates)(body, resolve)), path);
  }

  return httpPatch;
}

exports.default = httpPatchFactory;
//# sourceMappingURL=httpPatch.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

function httpPostFactory(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function httpPost(_ref) {
    var http = _ref.http,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _utils.processResponse)(http.post(resolve.value(url), (0, _utils.convertObjectWithTemplates)(body, resolve)), path);
  }

  return httpPost;
}

exports.default = httpPostFactory;
//# sourceMappingURL=httpPost.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

function httpPutFactory(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function httpPut(_ref) {
    var http = _ref.http,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _utils.processResponse)(http.put(resolve.value(url), (0, _utils.convertObjectWithTemplates)(body, resolve)), path);
  }

  return httpPut;
}

exports.default = httpPutFactory;
//# sourceMappingURL=httpPut.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

function uploadFileFactory(urlValue, filesValue) {
  var optionsValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  function uploadFile(_ref) {
    var http = _ref.http,
        resolve = _ref.resolve,
        path = _ref.path;

    var url = resolve.value(urlValue);
    var files = resolve.value(filesValue);
    var options = (0, _utils.convertObjectWithTemplates)(optionsValue, resolve);

    return (0, _utils.processResponse)(http.uploadFile(url, files, options), path);
  }
  return uploadFile;
}

exports.default = uploadFileFactory;
//# sourceMappingURL=httpUploadFile.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpDelete = __webpack_require__(28);

Object.defineProperty(exports, 'httpDelete', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_httpDelete).default;
  }
});

var _httpGet = __webpack_require__(29);

Object.defineProperty(exports, 'httpGet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_httpGet).default;
  }
});

var _httpPatch = __webpack_require__(30);

Object.defineProperty(exports, 'httpPatch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_httpPatch).default;
  }
});

var _httpPost = __webpack_require__(31);

Object.defineProperty(exports, 'httpPost', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_httpPost).default;
  }
});

var _httpPut = __webpack_require__(32);

Object.defineProperty(exports, 'httpPut', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_httpPut).default;
  }
});

var _httpUploadFile = __webpack_require__(33);

Object.defineProperty(exports, 'httpUploadFile', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_httpUploadFile).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;
/* eslint-env browser */

function request(options, cb) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('progress', cb);
  xhr.addEventListener('load', cb);
  xhr.addEventListener('error', cb);
  xhr.addEventListener('abort', cb);
  xhr.open(options.method, options.baseUrl + options.url);
  options.onRequest(xhr, options);

  return xhr;
}
//# sourceMappingURL=request.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34)


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__computed_totalPrice__ = __webpack_require__(45);
var _templateObject = _taggedTemplateLiteral(['cart'], ['cart']),
    _templateObject2 = _taggedTemplateLiteral(['removedFromCart'], ['removedFromCart']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Cart = function Cart(_ref) {
  var items = _ref.items,
      removeFromCart = _ref.removeFromCart,
      total = _ref.total;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Cart:'
    ),
    React.createElement(
      'ul',
      null,
      items.map(function (item, index) {
        return React.createElement(
          'li',
          { key: item.id },
          React.createElement(
            'div',
            null,
            React.createElement(
              'strong',
              null,
              'Title:'
            ),
            ' ',
            item.name
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'strong',
              null,
              'Price:'
            ),
            ' $',
            item.price
          ),
          React.createElement(
            'button',
            { onClick: function onClick() {
                return removeFromCart({ item: item, index: index });
              } },
            'Remove'
          ),
          React.createElement('hr', null)
        );
      })
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'strong',
        null,
        'Total: '
      ),
      '$',
      total
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__["connect"])({
  items: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject),
  removeFromCart: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["signal"])(_templateObject2),
  total: __WEBPACK_IMPORTED_MODULE_2__computed_totalPrice__["a" /* default */]
}, Cart));

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['errorMessage'], ['errorMessage']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var props = {
  error: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject)
};

var ErrorComponent = function ErrorComponent(_ref) {
  var error = _ref.error;
  return React.createElement(
    'h3',
    { style: { color: '#f55' } },
    error ? 'Error! ' + error : ''
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__["connect"])(props, ErrorComponent));

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['changedPage'], ['changedPage']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Nav = function Nav(_ref) {
  var setPage = _ref.setPage;
  return React.createElement(
    'nav',
    null,
    React.createElement(
      'button',
      { onClick: function onClick() {
          return setPage({ page: 'books' });
        } },
      'View books'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return setPage({ page: 'movies' });
        } },
      'View movies'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return setPage({ page: 'all' });
        } },
      'View all'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__["connect"])({
  setPage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["signal"])(_templateObject)
}, Nav));

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__computed_filteredProducts__ = __webpack_require__(43);
var _templateObject = _taggedTemplateLiteral(['addedToCart'], ['addedToCart']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ProductList = function ProductList(_ref) {
  var items = _ref.items,
      addToCart = _ref.addToCart;
  return React.createElement(
    'ul',
    null,
    items.map(function (item) {
      return React.createElement(
        'li',
        { key: item.id },
        React.createElement(
          'div',
          null,
          React.createElement(
            'strong',
            null,
            'Title:'
          ),
          ' ',
          item.name
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'strong',
            null,
            'Price:'
          ),
          ' $',
          item.price
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return addToCart({ item: item });
            } },
          'Add to cart'
        ),
        React.createElement('hr', null)
      );
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__["connect"])({
  items: __WEBPACK_IMPORTED_MODULE_2__computed_filteredProducts__["a" /* default */],
  addToCart: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["signal"])(_templateObject)
}, ProductList));

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['query'], ['query']),
    _templateObject2 = _taggedTemplateLiteral(['searched'], ['searched']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SearchInput = function SearchInput(_ref) {
  var query = _ref.query,
      search = _ref.search;
  return React.createElement(
    'div',
    null,
    React.createElement('input', { type: 'text', value: query, onInput: function onInput(event) {
        return search({ query: event.target.value });
      }, placeholder: 'Search' })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__["connect"])({
  query: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject),
  search: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["signal"])(_templateObject2)
}, SearchInput));

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__computed_title__ = __webpack_require__(44);
var _templateObject = _taggedTemplateLiteral(['isLoading'], ['isLoading']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Title = function Title(_ref) {
  var isLoading = _ref.isLoading,
      title = _ref.title;
  return React.createElement(
    'h1',
    null,
    isLoading ? 'Loading...' : title
  );
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_react__["connect"])({
  isLoading: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject),
  title: __WEBPACK_IMPORTED_MODULE_2__computed_title__["a" /* default */]
}, Title));

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['query'], ['query']),
    _templateObject2 = _taggedTemplateLiteral(['products'], ['products']),
    _templateObject3 = _taggedTemplateLiteral(['cart'], ['cart']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function hasId(arr, id) {
  return arr.reduce(function (idFound, nextItem) {
    return idFound || nextItem.id === id;
  }, false);
}

function alphabetically(a, b) {
  if (a.name < b.name) {
    return -1;
  };
  if (a.name > b.name) {
    return 1;
  };
  return 0;
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral__["compute"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject2), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject3), function (query, products, cart) {
  var includesQuery = function includesQuery(item) {
    return item.name.toLowerCase().includes(query.toLowerCase());
  };
  var notInCart = function notInCart(item) {
    return !hasId(cart, item.id);
  };
  return products.filter(includesQuery).filter(notInCart).sort(alphabetically);
}));

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['page'], ['page']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var pageMap = {
  books: 'Book Store',
  movies: 'Movie Store',
  all: 'Everything Store'
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral__["compute"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject), function (page) {
  return pageMap[page];
}));

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['cart'], ['cart']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral__["compute"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject), function (cart) {
  return cart.reduce(function (runningTotal, item) {
    return runningTotal + item.price;
  }, 0);
}));

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cerebral_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controller__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App_js__ = __webpack_require__(22);






__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_cerebral_react__["Container"],
  { controller: __WEBPACK_IMPORTED_MODULE_3__controller__["a" /* default */] },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__App_js__["a" /* default */], { onInit: __WEBPACK_IMPORTED_MODULE_3__controller__["a" /* default */].getSignal('initialized') })
), document.getElementById('app'));

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['cart'], ['cart']),
    _templateObject2 = _taggedTemplateLiteral(['item'], ['item']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/* harmony default export */ __webpack_exports__["a"] = ([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["push"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["props"])(_templateObject2))]);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chains_loadProducts__ = __webpack_require__(18);
var _templateObject = _taggedTemplateLiteral(['page'], ['page']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/* harmony default export */ __webpack_exports__["a"] = ([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["props"])(_templateObject)), __WEBPACK_IMPORTED_MODULE_2__chains_loadProducts__["a" /* default */]]);

// const pageChanged = [
//   setPageTitle(`currentPage`),
//   setLoading(true),
//   fetchProducts(), {
//     success: [setProducts(`results`)],
//     error: [showErrorMessage(`failed to fetch products`)]
//   },
//   setLoading(false)
// ];

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chains_loadProducts__ = __webpack_require__(18);
var _templateObject = _taggedTemplateLiteral(['page'], ['page']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/* harmony default export */ __webpack_exports__["a"] = ([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject), 'books'), __WEBPACK_IMPORTED_MODULE_2__chains_loadProducts__["a" /* default */]]);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['cart'], ['cart']),
    _templateObject2 = _taggedTemplateLiteral(['index'], ['index']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/* harmony default export */ __webpack_exports__["a"] = ([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["splice"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["props"])(_templateObject2), 1)]);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__);
var _templateObject = _taggedTemplateLiteral(['query'], ['query']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/* harmony default export */ __webpack_exports__["a"] = ([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["set"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["state"])(_templateObject), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["props"])(_templateObject))]);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59)


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DependencyStore = function () {
  function DependencyStore() {
    _classCallCheck(this, DependencyStore);

    this.map = {};
  }
  /*
    Adds the entity to all the depending paths
  */


  _createClass(DependencyStore, [{
    key: 'addEntity',
    value: function addEntity(entity, depsMap) {
      var _this = this;

      var _loop = function _loop(depsMapKey) {
        var path = depsMapKey.split('.');

        path.reduce(function (currentMapLevel, key, index) {
          if (!currentMapLevel[key]) {
            currentMapLevel[key] = {};
          }

          if (index < path.length - 1) {
            currentMapLevel[key].children = currentMapLevel[key].children || {};

            return currentMapLevel[key].children;
          }

          currentMapLevel[key].entities = currentMapLevel[key].entities ? currentMapLevel[key].entities.concat(entity) : [entity];

          return currentMapLevel;
        }, _this.map);
      };

      for (var depsMapKey in depsMap) {
        _loop(depsMapKey);
      }
    }
    /*
      Removes the entity from all depending paths
    */

  }, {
    key: 'removeEntity',
    value: function removeEntity(entity, depsMap) {
      var _this2 = this;

      var _loop2 = function _loop2(depsMapKey) {
        var path = depsMapKey.split('.');
        path.reduce(function (currentMapLevel, key, index) {
          if (index === path.length - 1) {
            currentMapLevel[key].entities.splice(currentMapLevel[key].entities.indexOf(entity), 1);

            if (!currentMapLevel[key].entities.length) {
              delete currentMapLevel[key].entities;
            }
          }

          return currentMapLevel[key].children;
        }, _this2.map);
      };

      for (var depsMapKey in depsMap) {
        _loop2(depsMapKey);
      }
    }
    /*
      Updates entity based on changed dependencies
    */

  }, {
    key: 'updateEntity',
    value: function updateEntity(entity, prevDepsMap, nextDepsMap) {
      var toRemove = Object.keys(prevDepsMap).reduce(function (removeDepsMap, prevDepsMapKey) {
        if (!nextDepsMap[prevDepsMapKey]) {
          removeDepsMap[prevDepsMapKey] = true;
        }

        return removeDepsMap;
      }, {});
      var toAdd = Object.keys(nextDepsMap).reduce(function (addDepsMap, nextDepsMapKey) {
        if (!prevDepsMap[nextDepsMapKey]) {
          addDepsMap[nextDepsMapKey] = true;
        }

        return addDepsMap;
      }, {});

      this.removeEntity(entity, toRemove);

      this.addEntity(entity, toAdd);
    }
    /*
      As same entity can appear in multiple paths, this method returns
      all unique entities. Used by view to render all components
    */

  }, {
    key: 'getAllUniqueEntities',
    value: function getAllUniqueEntities() {
      var entities = [];

      function traverseChildren(children) {
        for (var childKey in children) {
          if (children[childKey].entities) {
            for (var y = 0; y < children[childKey].entities.length; y++) {
              if (entities.indexOf(children[childKey].entities[y]) === -1) {
                entities.push(children[childKey].entities[y]);
              }
            }
          }

          if (children[childKey].children) {
            traverseChildren(children[childKey].children);
          }
        }
      }
      traverseChildren(this.map);

      return entities;
    }
    /*
      Returns entities based on a change map returned from
      the model flush method.
    */

  }, {
    key: 'getUniqueEntities',
    value: function getUniqueEntities(changesMap) {
      return (0, _utils.dependencyMatch)(changesMap, this.map).reduce(function (unique, match) {
        return (match.entities || []).reduce(function (currentUnique, entity) {
          if (currentUnique.indexOf(entity) === -1) {
            return currentUnique.concat(entity);
          }

          return currentUnique;
        }, unique);
      }, []);
    }
  }]);

  return DependencyStore;
}();

exports.default = DependencyStore;
//# sourceMappingURL=DependencyStore.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DependencyTracker = function () {
  function DependencyTracker(computed) {
    _classCallCheck(this, DependencyTracker);

    this.propsTrackMap = {};
    this.stateTrackMap = {};
    this.propsTrackFlatMap = {};
    this.stateTrackFlatMap = {};
    this.computed = computed;
    this.value = null;
  }

  _createClass(DependencyTracker, [{
    key: 'run',
    value: function run(stateGetter, props) {
      var newStateTrackMap = {};
      var newPropsTrackMap = {};
      var newPropsTrackFlatMap = {};
      var newStateTrackFlatMap = {};
      var stateTrackFlatMap = this.stateTrackFlatMap;
      var propsTrackFlatMap = this.propsTrackFlatMap;
      var propsGetter = (0, _utils.getWithPath)(props);
      var hasChanged = false;

      function setTrackMap(path, newTrackMap) {
        var pathArray = path.split('.');
        pathArray.reduce(function (currentNewTrackMapLevel, key, index) {
          if (!currentNewTrackMapLevel[key]) {
            hasChanged = true;
            currentNewTrackMapLevel[key] = {};
          }

          if (index < pathArray.length - 1) {
            currentNewTrackMapLevel[key].children = currentNewTrackMapLevel[key].children || {};
          }

          return currentNewTrackMapLevel[key].children;
        }, newTrackMap);
      }

      this.value = this.computed.getValue({
        state: function state(path) {
          var value = stateGetter(path);
          var strictPath = (0, _utils.ensureStrictPath)(path, value);

          newStateTrackFlatMap[strictPath] = true;

          if (!stateTrackFlatMap[strictPath]) hasChanged = true;
          setTrackMap(strictPath, newStateTrackMap);

          return value;
        },
        props: function props(path) {
          newPropsTrackFlatMap[path] = true;

          if (!propsTrackFlatMap[path]) hasChanged = true;
          setTrackMap(path, newPropsTrackMap);

          return propsGetter(path);
        }
      });

      this.stateTrackMap = newStateTrackMap;
      this.propsTrackMap = newPropsTrackMap;
      this.stateTrackFlatMap = newStateTrackFlatMap;
      this.propsTrackFlatMap = newPropsTrackFlatMap;

      return hasChanged;
    }
  }, {
    key: 'match',
    value: function match(stateChanges, propsChanges) {
      return Boolean((0, _utils.dependencyMatch)(stateChanges, this.stateTrackMap).length) || Boolean((0, _utils.dependencyMatch)(propsChanges, this.propsTrackMap).length);
    }
  }]);

  return DependencyTracker;
}();

exports.default = DependencyTracker;
//# sourceMappingURL=DependencyTracker.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var devtools = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Model);

    this.devtools = devtools;
    this.preventExternalMutations = devtools ? devtools.preventExternalMutations : false;

    this.state = this.preventExternalMutations ? this.freezeObject(initialState) : initialState;
    this.changedPaths = [];
  }
  /*
    Does an unfreeze and update of value, before freezing again
  */


  _createClass(Model, [{
    key: 'unfreezeObject',
    value: function unfreezeObject(value) {
      if (Array.isArray(value)) {
        return value.slice();
      } else if ((0, _utils.isObject)(value)) {
        return Object.assign({}, value);
      }

      return value;
    }
    /*
      Freezes objects and arrays recursively to avoid unwanted mutation
    */

  }, {
    key: 'freezeObject',
    value: function freezeObject(object) {
      if (!Object.isFrozen(object) && (0, _utils.isComplexObject)(object)) {
        for (var key in object) {
          // Properties might not be writable, but then there
          // is not reason to freeze its value either
          try {
            object[key] = this.freezeObject(object[key]);
          } catch (e) {}
        }

        Object.freeze(object);
      }

      return object;
    }
    /*
      Returns array of changes
    */

  }, {
    key: 'flush',
    value: function flush() {
      var changes = this.changedPaths.slice();

      this.changedPaths = [];

      return changes;
    }
    /*
      A generic method for making a change to a path, used
      by multiple mutation methods. Only adds to flush when value
      actually changed. Complex objects always causes a flush due to
      for example array sorting
    */

  }, {
    key: 'updateIn',
    value: function updateIn(path, cb) {
      var _this = this;

      var forceChildPathUpdates = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!path.length) {
        cb(this.state, this, 'state');
        this.state = this.preventExternalMutations ? this.freezeObject(this.state) : this.state;

        return;
      }

      if (this.preventExternalMutations) {
        this.updateInFrozen(path, cb, forceChildPathUpdates);

        return;
      }

      path.reduce(function (currentState, key, index) {
        if (index === path.length - 1) {
          if (!Array.isArray(currentState) && !(0, _utils.isObject)(currentState)) {
            (0, _utils.throwError)('The path "' + path.join('.') + '" is invalid, can not update state. Does the path "' + path.join('.') + '" exist?');
          }

          var currentValue = currentState[key];

          cb(currentState[key], currentState, key);
          if (currentState[key] !== currentValue || (0, _utils.isComplexObject)(currentState[key]) && (0, _utils.isComplexObject)(currentValue)) {
            _this.changedPaths.push({
              path: path,
              forceChildPathUpdates: forceChildPathUpdates
            });
          }
        } else if (!currentState[key]) {
          (0, _utils.throwError)('The path "' + path.join('.') + '" is invalid, can not update state. Does the path "' + path.splice(0, path.length - 1).join('.') + '" exist?');
        }

        return currentState[key];
      }, this.state);
    }
    /*
      Unfreezes on the way down. When done freezes state. It is optimized
      to not go down already frozen paths
    */

  }, {
    key: 'updateInFrozen',
    value: function updateInFrozen(path, cb, forceChildPathUpdates) {
      var _this2 = this;

      this.state = this.unfreezeObject(this.state);
      path.reduce(function (currentState, key, index) {
        if (index === path.length - 1) {
          if (!Array.isArray(currentState) && !(0, _utils.isObject)(currentState)) {
            (0, _utils.throwError)('The path "' + path.join('.') + '" is invalid, can not update state. Does the path "' + path.join('.') + '" exist?');
          }
          currentState[key] = _this2.unfreezeObject(currentState[key]);

          var currentValue = currentState[key];
          cb(currentState[key], currentState, key);

          if (currentState[key] !== currentValue || (0, _utils.isComplexObject)(currentState[key]) && (0, _utils.isComplexObject)(currentValue)) {
            _this2.changedPaths.push({
              path: path,
              forceChildPathUpdates: forceChildPathUpdates
            });
          }
        } else if (!currentState[key]) {
          (0, _utils.throwError)('The path "' + path.join('.') + '" is invalid, can not update state. Does the path "' + path.splice(0, path.length - 1).join('.') + '" exist?');
        } else {
          currentState[key] = _this2.unfreezeObject(currentState[key]);
        }

        return currentState[key];
      }, this.state);

      this.freezeObject(this.state);
    }
    /*
      Checks if value is serializable, if turned on
    */

  }, {
    key: 'verifyValue',
    value: function verifyValue(value, path) {
      if (this.devtools && !(0, _utils.isSerializable)(value, this.devtools.allowedTypes)) {
        (0, _utils.throwError)('You are passing a non serializable value into the state tree on path "' + path.join('.') + '"');
      }
      if (this.devtools) {
        (0, _utils.forceSerializable)(value);
      }
    }
  }, {
    key: 'verifyValues',
    value: function verifyValues(values, path) {
      var _this3 = this;

      if (this.devtools) {
        values.forEach(function (value) {
          _this3.verifyValue(value, path);
        });
      }
    }
  }, {
    key: 'get',
    value: function get() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return path.reduce(function (currentState, key) {
        return currentState ? currentState[key] : undefined;
      }, this.state);
    }
  }, {
    key: 'set',
    value: function set(path, value) {
      this.verifyValue(value, path);
      this.updateIn(path, function (_, parent, key) {
        parent[key] = value;
      }, true);
    }
  }, {
    key: 'toggle',
    value: function toggle(path) {
      this.updateIn(path, function (value, parent, key) {
        parent[key] = !value;
      });
    }
  }, {
    key: 'push',
    value: function push(path, value) {
      this.verifyValue(value, path);
      this.updateIn(path, function (array) {
        array.push(value);
      });
    }
  }, {
    key: 'merge',
    value: function merge(path) {
      for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }

      var value = Object.assign.apply(Object, values);

      // If we already have an object we make it behave
      // like multiple sets, indicating a change to very key.
      // If no value it should indicate that we are setting
      // a new object
      if (this.get(path)) {
        for (var prop in value) {
          this.set(path.concat(prop), value[prop]);
        }
      } else {
        this.set(path, value);
      }
    }
  }, {
    key: 'pop',
    value: function pop(path) {
      this.updateIn(path, function (array) {
        array.pop();
      });
    }
  }, {
    key: 'shift',
    value: function shift(path) {
      this.updateIn(path, function (array) {
        array.shift();
      });
    }
  }, {
    key: 'unshift',
    value: function unshift(path, value) {
      this.verifyValue(value, path);
      this.updateIn(path, function (array) {
        array.unshift(value);
      });
    }
  }, {
    key: 'splice',
    value: function splice(path) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this.verifyValues(args, path);
      this.updateIn(path, function (array) {
        array.splice.apply(array, args);
      });
    }
  }, {
    key: 'unset',
    value: function unset(path) {
      this.updateIn(path, function (_, parent, key) {
        delete parent[key];
      }, true);
    }
  }, {
    key: 'concat',
    value: function concat(path, value) {
      this.verifyValue(value, path);
      this.updateIn(path, function (array, parent, key) {
        parent[key] = array.concat(value);
      });
    }
  }]);

  return Model;
}();

exports.default = Model;
//# sourceMappingURL=Model.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function Module(controller, path, moduleDescription) {
  _classCallCheck(this, Module);

  var stringPath = path.join('.');
  var moduleStub = {
    controller: controller,
    path: stringPath,
    name: path.slice().pop()
  };

  var module = typeof moduleDescription === 'function' ? moduleDescription(moduleStub) : moduleDescription;

  /* Set initial module state to model */
  controller.getModel().set(path, module.state || {});
  /* Convert arrays to actually runable signals */
  module.signals = Object.keys(module.signals || {}).reduce(function (currentSignals, signalKey) {
    var signal = module.signals[signalKey];
    if (!signal) {
      (0, _utils.throwError)('Signal with name "' + signalKey + '" is undefined. Please check that the signal is set to either an array or a function.');
    }
    currentSignals[signalKey] = {
      signal: signal.signal || signal,
      catch: signal.catch || controller.catch ? new Map([].concat(controller.catch ? [].concat(_toConsumableArray(controller.catch)) : []).concat(signal.catch ? [].concat(_toConsumableArray(signal.catch)) : [])) : null,
      run: function run(payload) {
        controller.runSignal(path.concat(signalKey).join('.'), signal.signal || signal, payload);
      }
    };

    return currentSignals;
  }, {});

  /* Instantiate submodules */
  module.modules = Object.keys(module.modules || {}).reduce(function (registered, moduleKey) {
    registered[moduleKey] = new Module(controller, path.concat(moduleKey), module.modules[moduleKey]);
    return registered;
  }, {});

  return module;
};

exports.default = Module;
//# sourceMappingURL=Module.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Provide;
function Provide(name, provider) {
  return function (context) {
    context[name] = provider;

    if (context.debugger) {
      context.debugger.wrapProvider(name);
    }

    return context;
  };
}
//# sourceMappingURL=Provide.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Controller2 = __webpack_require__(19);

var _Controller3 = _interopRequireDefault(_Controller2);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UniversalController = function (_Controller) {
  _inherits(UniversalController, _Controller);

  function UniversalController(controllerOptions) {
    _classCallCheck(this, UniversalController);

    var _this = _possibleConstructorReturn(this, (UniversalController.__proto__ || Object.getPrototypeOf(UniversalController)).call(this, controllerOptions));

    _this.changes = [];
    _this.model.state = JSON.parse(JSON.stringify(_this.model.state));
    _this.trackChanges = _this.trackChanges.bind(_this);
    _this.on('flush', _this.trackChanges);
    _this.hasRun = false;
    return _this;
  }

  _createClass(UniversalController, [{
    key: 'trackChanges',
    value: function trackChanges(changes) {
      this.changes = this.changes.concat(changes);
    }
  }, {
    key: 'getScript',
    value: function getScript() {
      var _this2 = this;

      var state = JSON.stringify(this.changes.reduce(function (changes, change) {
        changes[change.path.join('.')] = _this2.getState(change.path);

        return changes;
      }, {}));

      return '<script>window.CEREBRAL_STATE = ' + state + '</script>';
    }
  }, {
    key: 'run',
    value: function run(sequence, payload) {
      if (this.hasRun) {
        (0, _utils.throwError)('You can not run the universal controller more than once, create a new one');
      }
      this.hasRun = true;

      return _get(UniversalController.prototype.__proto__ || Object.getPrototypeOf(UniversalController.prototype), 'run', this).call(this, 'UniversalController.run', sequence, payload);
    }
  }]);

  return UniversalController;
}(_Controller3.default);

exports.default = UniversalController;
//# sourceMappingURL=UniversalController.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Devtools = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Devtools, [null].concat(args)))();
};

var _utils = __webpack_require__(0);

var _base = __webpack_require__(95);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global WebSocket File FileList Blob ImageData VERSION */


var PLACEHOLDER_INITIAL_MODEL = 'PLACEHOLDER_INITIAL_MODEL';
var PLACEHOLDER_DEBUGGING_DATA = '$$DEBUGGING_DATA$$';

/*
  Connects to the Cerebral debugger
  - Triggers events with information from function tree execution
  - Stores data related to time travel, if activated
*/

var Devtools = exports.Devtools = function (_DevtoolsBase) {
  _inherits(Devtools, _DevtoolsBase);

  function Devtools() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$storeMutations = _ref.storeMutations,
        storeMutations = _ref$storeMutations === undefined ? true : _ref$storeMutations,
        _ref$preventExternalM = _ref.preventExternalMutations,
        preventExternalMutations = _ref$preventExternalM === undefined ? true : _ref$preventExternalM,
        _ref$preventPropsRepl = _ref.preventPropsReplacement,
        preventPropsReplacement = _ref$preventPropsRepl === undefined ? false : _ref$preventPropsRepl,
        _ref$bigComponentsWar = _ref.bigComponentsWarning,
        bigComponentsWarning = _ref$bigComponentsWar === undefined ? 10 : _ref$bigComponentsWar,
        _ref$remoteDebugger = _ref.remoteDebugger,
        remoteDebugger = _ref$remoteDebugger === undefined ? null : _ref$remoteDebugger,
        _ref$host = _ref.host,
        host = _ref$host === undefined ? null : _ref$host,
        _ref$reconnect = _ref.reconnect,
        reconnect = _ref$reconnect === undefined ? true : _ref$reconnect,
        _ref$reconnectInterva = _ref.reconnectInterval,
        reconnectInterval = _ref$reconnectInterva === undefined ? 5000 : _ref$reconnectInterva,
        _ref$allowedTypes = _ref.allowedTypes,
        allowedTypes = _ref$allowedTypes === undefined ? [] : _ref$allowedTypes;

    _classCallCheck(this, Devtools);

    var _this = _possibleConstructorReturn(this, (Devtools.__proto__ || Object.getPrototypeOf(Devtools)).call(this, {
      remoteDebugger: remoteDebugger,
      host: host,
      reconnect: reconnect,
      reconnectInterval: reconnectInterval
    }));

    _this.version = "2.0.0-beta.3";
    _this.debuggerComponentsMap = {};
    _this.debuggerComponentDetailsId = 1;
    _this.storeMutations = storeMutations;
    _this.preventExternalMutations = preventExternalMutations;
    _this.preventPropsReplacement = preventPropsReplacement;
    _this.bigComponentsWarning = bigComponentsWarning;

    _this.mutations = [];
    _this.initialModelString = null;
    _this.controller = null;
    _this.originalRunTreeFunction = null;
    _this.isResettingDebugger = false;
    _this.allowedTypes = [].concat(typeof File === 'undefined' ? [] : File).concat(typeof FileList === 'undefined' ? [] : FileList).concat(typeof Blob === 'undefined' ? [] : Blob).concat(typeof ImageData === 'undefined' ? [] : ImageData).concat(typeof RegExp === 'undefined' ? [] : RegExp).concat(allowedTypes || []);

    _this.sendInitial = _this.sendInitial.bind(_this);
    _this.sendComponentsMap = (0, _utils.delay)(_this.sendComponentsMap, 50);
    return _this;
  }
  /*
    To remember state Cerebral stores the initial model as stringified
    object. Since the model is mutable this is necessary. The debugger
    passes the execution id of the signal that was double clicked. This
    execution id is searched backwards in the array of mutations done.
    This is necessary as multiple mutations can be done on the same execution.
    Then all mutations are replayed to the model and all the components
    will be rerendered using the "flush" event and "force" flag.
     It will also replace the "run" method of the controller to
    prevent any new signals firing off when in "remember state"
  */


  _createClass(Devtools, [{
    key: 'remember',
    value: function remember(index) {
      this.controller.model.set([], JSON.parse(this.initialModelString));

      if (index === 0) {
        this.controller.run = this.originalRunTreeFunction;
      } else {
        this.controller.run = function (name) {
          console.warn('The signal "' + name + '" fired while debugger is remembering state, it was ignored');
        };
      }

      for (var x = 0; x < this.mutations.length - index; x++) {
        var _controller$model;

        var mutation = JSON.parse(this.mutations[x].data);
        (_controller$model = this.controller.model)[mutation.method].apply(_controller$model, _toConsumableArray(mutation.args));
      }

      this.controller.flush(true);
      this.controller.emit('remember', JSON.parse(this.mutations[index].data).datetime);
    }
    /*
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.controller.model.set([], JSON.parse(this.initialModelString));
      this.backlog = [];
      this.mutations = [];
      this.controller.flush(true);
    }
  }, {
    key: 'createSocket',
    value: function createSocket() {
      this.ws = new WebSocket('ws://' + this.host);
    }
  }, {
    key: 'onMessage',
    value: function onMessage(event) {
      var message = JSON.parse(event.data);
      switch (message.type) {
        case 'changeModel':
          this.controller.model.set(message.data.path, message.data.value);
          this.controller.flush();
          break;
        case 'remember':
          if (!this.storeMutations) {
            console.warn('Cerebral Devtools - You tried to time travel, but you have turned of storing of mutations');
          } else {
            this.remember(message.data);
          }
          break;
        case 'reset':
          this.reset();
          break;
        case 'pong':
          this.sendInitial();
          break;
        case 'ping':
          this.sendInitial();
          break;
      }
    }
    /*
      The debugger might be ready or it might not. The initial communication
      with the debugger requires a "ping" -> "pong" to identify that it
      is ready to receive messages.
      1. Debugger is open when app loads
        - Devtools sends "ping"
        - Debugger sends "pong"
        - Devtools sends "init"
      2. Debugger is opened after app load
        - Debugger sends "ping"
        - Devtools sends "init"
    */

  }, {
    key: 'init',
    value: function init(controller) {
      this.controller = controller || this.controller;
      this.originalRunTreeFunction = this.controller.run;

      if (this.storeMutations) {
        this.initialModelString = JSON.stringify(this.controller.model.get());
      }

      _get(Devtools.prototype.__proto__ || Object.getPrototypeOf(Devtools.prototype), 'init', this).call(this);

      if (controller) {
        this.watchExecution(this.controller, 'c');
      }
    }
    /*
      Send initial model. If model has already been stringified we reuse it. Any
      backlogged executions will also be triggered
    */

  }, {
    key: 'sendInitial',
    value: function sendInitial() {
      var initialModel = this.controller.model.get();
      var message = JSON.stringify({
        type: 'init',
        source: 'c',
        version: this.version,
        data: {
          initialModel: this.initialModelString ? PLACEHOLDER_INITIAL_MODEL : initialModel
        }
      }).replace('"' + PLACEHOLDER_INITIAL_MODEL + '"', this.initialModelString);

      this.isResettingDebugger = true;
      this.sendMessage(message);
      if (this.backlog.length) {
        this.sendBulkMessage(this.backlog, 'c');
        this.backlog = [];
      }
      this.isResettingDebugger = false;

      this.isConnected = true;

      this.sendMessage(JSON.stringify({
        type: 'components',
        source: 'c',
        version: this.version,
        data: {
          map: this.debuggerComponentsMap,
          render: {
            components: []
          }
        }
      }));
    }
    /*
      Create the stringified message for the debugger. As we need to
      store mutations with the default true "storeMutations" option used
      by time travel and jumping between Cerebral apps, we are careful
      not doing unnecessary stringifying.
    */

  }, {
    key: 'createExecutionMessage',
    value: function createExecutionMessage(debuggingData, context, functionDetails, payload) {
      var type = 'execution';
      var mutationString = '';

      if (this.storeMutations && debuggingData && debuggingData.type === 'mutation') {
        mutationString = JSON.stringify(debuggingData);
      }

      var data = {
        execution: {
          executionId: context.execution.id,
          functionIndex: functionDetails.functionIndex,
          payload: payload,
          datetime: context.execution.datetime,
          data: mutationString ? PLACEHOLDER_DEBUGGING_DATA : debuggingData
        }
      };

      if (mutationString) {
        this.mutations.push({
          executionId: context.execution.id,
          data: mutationString
        });
      }

      return JSON.stringify({
        type: type,
        source: 'c',
        version: this.version,
        data: data
      }).replace('"' + PLACEHOLDER_DEBUGGING_DATA + '"', mutationString);
    }
    /*
      The container will listen to "flush" events from the controller
      and send an event to debugger about initial registered components
    */

  }, {
    key: 'extractComponentName',
    value: function extractComponentName(component) {
      return component._displayName.replace('CerebralWrapping_', '');
    }
    /*
      Updates the map the represents what active state paths and
      components are in your app.Called from Controller. Used by the debugger
    */

  }, {
    key: 'updateComponentsMap',
    value: function updateComponentsMap(component, nextDeps, prevDeps) {
      var componentDetails = {
        name: this.extractComponentName(component),
        renderCount: component.renderCount || 0,
        id: component.componentDetailsId || this.debuggerComponentDetailsId++
      };

      if (arguments.length === 1) {
        componentDetails.renderCount++;
      }

      component.componentDetailsId = componentDetails.id;
      component.renderCount = componentDetails.renderCount;

      if (prevDeps) {
        for (var depsKey in prevDeps) {
          var debuggerComponents = this.debuggerComponentsMap[depsKey];

          for (var x = 0; x < debuggerComponents.length; x++) {
            if (debuggerComponents[x].id === component.componentDetailsId) {
              debuggerComponents.splice(x, 1);
              if (debuggerComponents.length === 0) {
                delete this.debuggerComponentsMap[depsKey];
              }
              break;
            }
          }
        }
      }

      if (nextDeps) {
        for (var _depsKey in nextDeps) {
          this.debuggerComponentsMap[_depsKey] = this.debuggerComponentsMap[_depsKey] ? this.debuggerComponentsMap[_depsKey].concat(componentDetails) : [componentDetails];
        }
      }
    }
    /*
      Sends components map to debugger. It is debounced (check constructor).
      It needs to wait because React updates async. Instead of tracking
      callbacks we just wait 50ms as it is not that important when
      debugger updates
    */

  }, {
    key: 'sendComponentsMap',
    value: function sendComponentsMap(componentsToRender, changes, start, end) {
      if (this.isConnected) {
        this.sendMessage(JSON.stringify({
          type: 'components',
          source: 'c',
          version: this.version,
          data: {
            map: this.debuggerComponentsMap,
            render: {
              start: start,
              duration: end - start,
              changes: changes,
              components: componentsToRender.map(this.extractComponentName)
            }
          }
        }));
      }
    }
  }]);

  return Devtools;
}(_base2.default);
//# sourceMappingURL=index.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parallel = exports.sequence = exports.provide = exports.compute = undefined;
exports.Controller = Controller;
exports.UniversalController = UniversalController;

var _Compute = __webpack_require__(11);

Object.defineProperty(exports, 'compute', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Compute).default;
  }
});

var _Provide = __webpack_require__(57);

Object.defineProperty(exports, 'provide', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Provide).default;
  }
});

var _functionTree = __webpack_require__(21);

Object.defineProperty(exports, 'sequence', {
  enumerable: true,
  get: function get() {
    return _functionTree.sequence;
  }
});
Object.defineProperty(exports, 'parallel', {
  enumerable: true,
  get: function get() {
    return _functionTree.parallel;
  }
});

var _Controller = __webpack_require__(19);

var _Controller2 = _interopRequireDefault(_Controller);

var _UniversalController = __webpack_require__(58);

var _UniversalController2 = _interopRequireDefault(_UniversalController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Controller(options) {
  return new _Controller2.default(options);
}
function UniversalController(options) {
  return new _UniversalController2.default(options);
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, value) {
  function concat(_ref) {
    var state = _ref.state,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state')) {
      throw new Error('Cerebral operator.concat: You have to use the STATE TAG as first argument');
    }

    state.concat(resolve.path(target), resolve.value(value));
  }

  concat.displayName = 'operator.concat(' + String(target) + ', ' + String(value) + ')';

  return concat;
};
//# sourceMappingURL=concat.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factories = __webpack_require__(93);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _factories.debounce;
  }
});
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function equalsFactory(target) {
  function equals(_ref) {
    var state = _ref.state,
        props = _ref.props,
        path = _ref.path,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state', 'props')) {
      throw new Error('Cerebral operator.equals: You have to use the STATE or PROPS TAG as first argument');
    }

    var targetValue = resolve.value(target);

    return path[targetValue] ? path[targetValue]() : path.otherwise();
  }

  equals.displayName = 'operator.equals(' + String(target) + ')';

  return equals;
}

exports.default = equalsFactory;
//# sourceMappingURL=equals.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  function increment(_ref) {
    var state = _ref.state,
        props = _ref.props,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state', 'props')) {
      throw new Error('Cerebral operator.increment: You have to use the STATE or PROPS TAG as first argument');
    }

    var resolvedValue = resolve.value(value);

    if (!Number.isInteger(resolvedValue)) {
      throw new Error('Cerebral operator.increment: You must increment by integer values');
    }

    var invalidStateMsg = 'Cerebral operator.increment: You must increment integer values';
    if (target.type === 'state') {
      var targetPath = resolve.path(target);
      var toIncrement = state.get(targetPath);

      if (!Number.isInteger(toIncrement)) {
        throw new Error(invalidStateMsg);
      }

      var incremented = toIncrement + resolvedValue;
      state.set(targetPath, incremented);
    } else {
      var result = Object.assign({}, props);
      var parts = resolve.path(target).split('.');
      var key = parts.pop();
      var targetObj = parts.reduce(function (target, key) {
        return target[key] = Object.assign({}, target[key] || {});
      }, result);

      if (!Number.isInteger(targetObj[key])) {
        throw new Error(invalidStateMsg);
      }

      targetObj[key] += resolvedValue;

      return result;
    }
  }

  increment.displayName = 'operator.increment(' + String(target) + ', ' + String(value) + ')';

  return increment;
};
//# sourceMappingURL=increment.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce = __webpack_require__(62);

Object.defineProperty(exports, 'debounce', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_debounce).default;
  }
});

var _when = __webpack_require__(80);

Object.defineProperty(exports, 'when', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_when).default;
  }
});

var _wait = __webpack_require__(79);

Object.defineProperty(exports, 'wait', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wait).default;
  }
});

var _equals = __webpack_require__(63);

Object.defineProperty(exports, 'equals', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_equals).default;
  }
});

var _state = __webpack_require__(74);

Object.defineProperty(exports, 'state', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_state).default;
  }
});

var _input = __webpack_require__(66);

Object.defineProperty(exports, 'input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_input).default;
  }
});

var _string = __webpack_require__(75);

Object.defineProperty(exports, 'string', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_string).default;
  }
});

var _signal = __webpack_require__(72);

Object.defineProperty(exports, 'signal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_signal).default;
  }
});

var _concat = __webpack_require__(61);

Object.defineProperty(exports, 'concat', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_concat).default;
  }
});

var _increment = __webpack_require__(64);

Object.defineProperty(exports, 'increment', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_increment).default;
  }
});

var _merge = __webpack_require__(67);

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_merge).default;
  }
});

var _pop = __webpack_require__(68);

Object.defineProperty(exports, 'pop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pop).default;
  }
});

var _push = __webpack_require__(69);

Object.defineProperty(exports, 'push', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_push).default;
  }
});

var _set = __webpack_require__(70);

Object.defineProperty(exports, 'set', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_set).default;
  }
});

var _shift = __webpack_require__(71);

Object.defineProperty(exports, 'shift', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_shift).default;
  }
});

var _splice = __webpack_require__(73);

Object.defineProperty(exports, 'splice', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_splice).default;
  }
});

var _toggle = __webpack_require__(76);

Object.defineProperty(exports, 'toggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toggle).default;
  }
});

var _unset = __webpack_require__(77);

Object.defineProperty(exports, 'unset', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_unset).default;
  }
});

var _unshift = __webpack_require__(78);

Object.defineProperty(exports, 'unshift', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_unshift).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = input;

var _Tag = __webpack_require__(3);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function input(strings) {
  console.warn('Importing input from cerebral/operators is deprecated, import it from cerebral/tags');

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _Tag2.default('input', {}, strings, values);
}
//# sourceMappingURL=input.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  function merge(_ref) {
    var state = _ref.state,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state')) {
      throw new Error('Cerebral operator.merge: You have to use the STATE TAG as first argument');
    }

    state.merge.apply(state, [resolve.path(target)].concat(_toConsumableArray(values.map(function (value) {
      if (resolve.isTag(value)) {
        return resolve.value(value);
      }

      return Object.keys(value).reduce(function (currentValue, key) {
        currentValue[key] = resolve.value(value[key]);

        return currentValue;
      }, {});
    }))));
  }

  merge.displayName = 'operator.merge(' + String(target) + ', ' + values.map(function (value) {
    return String(value);
  }).join(',') + ')';

  return merge;
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//# sourceMappingURL=merge.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  function pop(_ref) {
    var state = _ref.state,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state')) {
      throw new Error('Cerebral operator.pop: You have to use the STATE TAG as first argument');
    }

    state.pop(resolve.path(target));
  }

  pop.displayName = 'operator.pop(' + String(target) + ')';

  return pop;
};
//# sourceMappingURL=pop.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, value) {
  function push(_ref) {
    var state = _ref.state,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state')) {
      throw new Error('Cerebral operator.push: You have to use the STATE TAG as first argument');
    }

    state.push(resolve.path(target), resolve.value(value));
  }

  push.displayName = 'operator.push(' + String(target) + ')';

  return push;
};
//# sourceMappingURL=push.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, value) {
  function set(_ref) {
    var state = _ref.state,
        props = _ref.props,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state', 'props')) {
      throw new Error('Cerebral operator.set: You have to use the STATE or PROPS TAG as first argument');
    }

    var resolvedValue = resolve.value(value);

    if (!resolve.isTag(value) && !resolve.isCompute(value) && (0, _utils.isObject)(value)) {
      resolvedValue = Object.assign({}, resolvedValue);
    } else if (!resolve.isTag(value) && !resolve.isCompute(value) && Array.isArray(value)) {
      resolvedValue = resolvedValue.slice();
    }

    if (target.type === 'state') {
      state.set(resolve.path(target), resolvedValue);
    } else {
      var result = Object.assign({}, props);
      var parts = resolve.path(target).split('.');
      var key = parts.pop();
      var targetObj = parts.reduce(function (target, key) {
        return target[key] = Object.assign({}, target[key] || {});
      }, result);
      targetObj[key] = resolvedValue;

      return result;
    }
  }

  set.displayName = 'operator.set(' + String(target) + ', ' + String(value) + ')';

  return set;
};

var _utils = __webpack_require__(0);
//# sourceMappingURL=set.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  function shift(_ref) {
    var state = _ref.state,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state')) {
      throw new Error('Cerebral operator.shift: You have to use the STATE TAG as first argument');
    }

    state.shift(resolve.path(target));
  }

  shift.displayName = 'operator.shift(' + String(target) + ')';

  return shift;
};
//# sourceMappingURL=shift.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signal;

var _Tag = __webpack_require__(3);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signal(strings) {
  console.warn('Importing signal from cerebral/operators is deprecated, import it from cerebral/tags');

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _Tag2.default('signal', {}, strings, values);
}
//# sourceMappingURL=signal.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  function splice(_ref) {
    var state = _ref.state,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state')) {
      throw new Error('Cerebral operator.splice: You have to use the STATE TAG as first argument');
    }

    var spliceArgs = args.map(function (arg) {
      return resolve.value(arg);
    });

    state.splice.apply(state, [resolve.path(target)].concat(_toConsumableArray(spliceArgs)));
  }

  splice.displayName = 'operator.splice(' + String(target) + ', ' + args.map(function (arg) {
    return String(arg);
  }).join(',') + ')';

  return splice;
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//# sourceMappingURL=splice.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = state;

var _Tag = __webpack_require__(3);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function state(strings) {
  console.warn('Importing state from cerebral/operators is deprecated, import it from cerebral/tags');

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _Tag2.default('state', {}, strings, values);
}
//# sourceMappingURL=state.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = string;

var _Tag = __webpack_require__(3);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function string(strings) {
  console.warn('Importing string from cerebral/operators is deprecated, import it from cerebral/tags');

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _Tag2.default('string', {
    hasValue: false
  }, strings, values);
}
//# sourceMappingURL=string.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  function toggle(_ref) {
    var state = _ref.state,
        input = _ref.input,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state')) {
      throw new Error('Cerebral operator.toggle: You have to use the STATE TAG as first argument');
    }

    var path = resolve.path(target);

    state.toggle(path);
  }

  toggle.displayName = 'operator.toggle(' + String(target) + ')';

  return toggle;
};
//# sourceMappingURL=toggle.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  function unset(_ref) {
    var state = _ref.state,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state')) {
      throw new Error('Cerebral operator.unset: You have to use the STATE TAG as first argument');
    }

    state.unset(resolve.path(target));
  }

  unset.displayName = 'operator.unset(' + String(target) + ')';

  return unset;
};
//# sourceMappingURL=unset.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, value) {
  function unshift(_ref) {
    var state = _ref.state,
        resolve = _ref.resolve;

    if (!resolve.isTag(target, 'state')) {
      throw new Error('Cerebral operator.unshift: You have to use the STATE TAG as first argument');
    }

    state.unshift(resolve.path(target), resolve.value(value));
  }

  unshift.displayName = 'operator.unshift(' + String(target) + ', ' + String(value) + ')';

  return unshift;
};
//# sourceMappingURL=unshift.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function waitFactory(ms) {
  function wait(_ref) {
    var path = _ref.path;

    return new Promise(function (resolve) {
      setTimeout(function () {
        return resolve(path ? path.continue() : null);
      }, ms);
    });
  }
  wait.displayName = 'wait - ' + ms + 'ms';

  return wait;
}

exports.default = waitFactory;
//# sourceMappingURL=wait.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tag = __webpack_require__(3);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var HELP_URL = 'http://cerebraljs.com/docs/api/operators.html#when';

function whenFactory() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var whenFunc = args.length > 1 ? args[args.length - 1] : null;
  var valueTemplates = args.length > 1 ? args.slice(0, -1) : args;
  function when(_ref) {
    var state = _ref.state,
        path = _ref.path,
        resolve = _ref.resolve;

    if (valueTemplates.length > 0 && !(valueTemplates[0] instanceof _Tag2.default)) {
      throw new Error('Cerebral operator.when: You have to use the STATE or PROPS TAG as values, see: ' + HELP_URL);
    }
    if (!path || !path.true || !path.false) {
      throw new Error('Cerebral operator.when: true/false paths need to be provided, see: http://cerebraljs.com/docs/api/operators.html#when');
    }
    var values = valueTemplates.map(function (value) {
      return resolve.value(value);
    });
    var isTrue = Boolean(whenFunc ? whenFunc.apply(undefined, _toConsumableArray(values)) : values[0]);

    return isTrue ? path.true() : path.false();
  }

  when.displayName = 'operator.when(' + args.filter(function (arg) {
    return typeof arg !== 'function';
  }).map(function (arg) {
    return String(arg);
  }).join(',') + ')';

  return when;
}

exports.default = whenFactory;
//# sourceMappingURL=when.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function ControllerProviderFactory(controller) {
  function ControllerProvider(context) {
    context.controller = controller;

    return context;
  }

  return ControllerProvider;
}

exports.default = ControllerProviderFactory;
//# sourceMappingURL=Controller.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function DebuggerProviderFactory() {
  function DebuggerProvider(context, functionDetails, payload, prevPayload) {
    var devtools = context.controller.devtools;

    if (devtools.preventPropsReplacement) {
      Object.keys(payload).forEach(function (key) {
        if (prevPayload && key in prevPayload && prevPayload[key] !== payload[key]) {
          throw new Error('Cerebral Devtools - You have activated the "preventPropsReplacement" option and in signal "' + context.execution.name + '", before the action "' + functionDetails.name + '", the key "' + key + '" was replaced');
        }
      });
    }

    context.debugger = {
      send: function send(debuggerData) {
        devtools.sendExecutionData(debuggerData, context, functionDetails, payload);
      },
      wrapProvider: function wrapProvider(providerKey) {
        var provider = context[providerKey];

        context[providerKey] = Object.keys(provider).reduce(function (wrappedProvider, key) {
          var originalFunc = provider[key];

          wrappedProvider[key] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            context.debugger.send({
              method: providerKey + '.' + key,
              args: args
            });

            return originalFunc.apply(provider, args);
          };

          return wrappedProvider;
        }, typeof provider === 'function' ? function () {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          context.debugger.send({
            method: '' + providerKey,
            args: args
          });

          return provider.apply(provider, args);
        } : {});
      }
    };

    return context;
  }

  return DebuggerProvider;
}

exports.default = DebuggerProviderFactory;
//# sourceMappingURL=Debugger.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

function ResolveProviderFactory() {
  function ResolveProvider(context) {
    context.resolve = (0, _utils.createResolver)({
      state: context.state.get,
      props: context.props,
      input: context.input,
      signal: context.controller.getSignal.bind(context.controller)
    });

    return context;
  }

  return ResolveProvider;
}

exports.default = ResolveProviderFactory;
//# sourceMappingURL=Resolve.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function StateProviderFactory() {
  var methods = ['get', 'set', 'toggle', 'push', 'merge', 'pop', 'shift', 'unshift', 'splice', 'unset', 'concat'];
  var provider = null;

  function createProvider(context) {
    var model = context.controller.model;
    var asyncTimeout = null;

    return methods.reduce(function (currentStateContext, methodKey) {
      currentStateContext[methodKey] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var path = (0, _utils.ensurePath)((0, _utils.cleanPath)(args.shift()));

        if (methodKey !== 'get') {
          clearTimeout(asyncTimeout);
          asyncTimeout = setTimeout(function () {
            return context.controller.flush();
          });
        }

        return model[methodKey].apply(model, [path].concat(args));
      };

      return currentStateContext;
    }, {});
  }

  function StateProvider(context, functionDetails) {
    context.state = provider = provider || createProvider(context);

    if (context.debugger) {
      context.state = methods.reduce(function (currentState, methodKey) {
        if (methodKey === 'get' || methodKey === 'compute') {
          currentState[methodKey] = provider[methodKey];
        } else {
          var originFunc = provider[methodKey];

          currentState[methodKey] = function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var argsCopy = args.slice();
            var path = (0, _utils.ensurePath)(argsCopy.shift());

            context.debugger.send({
              datetime: Date.now(),
              type: 'mutation',
              color: '#333',
              method: methodKey,
              args: [path].concat(_toConsumableArray(argsCopy))
            });

            try {
              originFunc.apply(context.controller.model, args);
            } catch (e) {
              var signalName = context.execution.name;
              (0, _utils.throwError)('The Signal "' + signalName + '" with action "' + functionDetails.name + '" has an error: ' + e.message);
            }
          };
        }

        return currentState;
      }, {});
    }

    return context;
  }

  return StateProvider;
}

exports.default = StateProviderFactory;
//# sourceMappingURL=State.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

function VerifyPropsProvider(context, functionDetails) {
  try {
    JSON.stringify(context.props);
  } catch (e) {
    (0, _utils.throwError)('The function ' + functionDetails.name + ' in signal ' + context.execution.name + ' is not given a valid payload');
  }

  return context;
}

exports.default = VerifyPropsProvider;
//# sourceMappingURL=VerifyProps.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = exports.props = exports.signal = exports.input = exports.state = exports.Tag = undefined;

var _Tag = __webpack_require__(3);

Object.defineProperty(exports, 'Tag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tag).default;
  }
});

var _Tag2 = _interopRequireDefault(_Tag);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTemplateTag(tag, options) {
  return function (strings) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    if (values.some(function (value) {
      return value === undefined;
    })) {
      (0, _utils.throwError)('One of the values passed inside the tag interpolated to undefined. Please check');
    }
    return new _Tag2.default(tag, options, strings, values);
  };
}

var state = exports.state = createTemplateTag('state', {
  isStateDependency: true
});

var inputTemplateTag = createTemplateTag('input');
var input = exports.input = function input() {
  console.warn('DEPRECATION: The INPUT template tag is deprecated, use props');

  return inputTemplateTag.apply(undefined, arguments);
};
var signal = exports.signal = createTemplateTag('signal');
var props = exports.props = createTemplateTag('props');
var string = exports.string = createTemplateTag('string', {
  hasValue: false
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DependencyTracker = __webpack_require__(54);

var _DependencyTracker2 = _interopRequireDefault(_DependencyTracker);

var _Compute = __webpack_require__(11);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View(_ref) {
    var _this = this;

    var dependencies = _ref.dependencies,
        mergeProps = _ref.mergeProps,
        props = _ref.props,
        controller = _ref.controller,
        displayName = _ref.displayName,
        onUpdate = _ref.onUpdate;

    _classCallCheck(this, View);

    this.stateGetter = this.stateGetter.bind(this);
    this.signalGetter = this.signalGetter.bind(this);
    this.mergeProps = mergeProps;
    this.controller = controller;
    this._displayName = displayName;
    this._hasWarnedBigComponent = false;
    this.onUpdate = onUpdate;

    if (this.controller.devtools) {
      this.verifyProps(props);
    }

    /*
      First we find any dependency functions to convert to DependencyTrackers.
      They are instantly run to produce their value and map of state
      dependencies
    */
    this.dependencyTrackers = Object.keys(dependencies).reduce(function (currentDependencyTrackers, dependencyKey) {
      if (dependencies[dependencyKey] instanceof _Compute.Compute) {
        currentDependencyTrackers[dependencyKey] = new _DependencyTracker2.default(dependencies[dependencyKey]);
        currentDependencyTrackers[dependencyKey].run(_this.stateGetter, props);
      }

      return currentDependencyTrackers;
    }, {});
    this.dependencies = dependencies;
    this.dependencyTrackersDependencyMaps = this.getDependencyTrackersDependencyMaps(props);
    this.tagsDependencyMap = this.getTagsDependencyMap(props);
  }
  /*
    A method to ensure objects and arrays from state tree are not passed as props
  */


  _createClass(View, [{
    key: 'verifyProps',
    value: function verifyProps(props) {
      var key = (0, _utils.getStateTreeProp)(props);
      if (key) {
        console.warn('You are passing an ' + (Array.isArray(props[key]) ? 'array' : 'object') + ' to the component "' + this._displayName + '" on prop "' + key + '" which is from the Cerebral state tree. You should not do this, but rather connect it directly to this component. This will optimize the component and avoid any rerender issues.');
      }
    }
    /*
      A getter for StateTracker and tags to grab state from Cerebral
    */

  }, {
    key: 'stateGetter',
    value: function stateGetter(path) {
      return this.controller.getState(path);
    }
    /*
      A getter for tags to grab signals from Cerebral
    */

  }, {
    key: 'signalGetter',
    value: function signalGetter(path) {
      return this.controller.getSignal(path);
    }
  }, {
    key: 'onMount',
    value: function onMount() {
      var depsMap = Object.assign({}, this.dependencyTrackersDependencyMaps.state, this.tagsDependencyMap);

      this.controller.componentDependencyStore.addEntity(this, depsMap);

      if (this.controller.devtools) {
        this.controller.devtools.updateComponentsMap(this, depsMap);
      }
    }
  }, {
    key: 'onUnMount',
    value: function onUnMount() {
      var depsMap = Object.assign({}, this.dependencyTrackersDependencyMaps.state, this.tagsDependencyMap);
      this.controller.componentDependencyStore.removeEntity(this, depsMap);

      if (this.controller.devtools) {
        this.controller.devtools.updateComponentsMap(this, null, depsMap);
      }
    }
  }, {
    key: 'onPropsUpdate',
    value: function onPropsUpdate(props, nextProps) {
      if (this.controller.devtools) {
        this.verifyProps(nextProps);
      }

      var propsChanges = (0, _utils.getChangedProps)(props, nextProps);
      if (propsChanges.length) {
        this.updateFromProps(propsChanges, nextProps);

        return true;
      }

      return false;
    }
    /*
      Called by component when props are passed from parent and they
      have changed. In this situation both tags and depndency trackers might
      be affected. Tags are just updated and dependency trackers are matched
      on props changed
    */

  }, {
    key: 'updateFromProps',
    value: function updateFromProps(propsChanges, props) {
      this.update(props, this.updateDependencyTrackers({}, propsChanges, props));
    }
    /*
      Called by Container when the components state dependencies
      has changed. In this scenario we need to run any dependencyTrackers
      that matches the state changes. There is no need to update the tags
      as their declared state deps can not change
    */

  }, {
    key: 'updateFromState',
    value: function updateFromState(stateChanges, props, force) {
      this.update(props, force ? this.forceUpdateDependencyTrackers() : this.updateDependencyTrackers(stateChanges, {}, props));
    }
    /*
      Udpates the dependency trackers by checking state
      changes and props changes
    */

  }, {
    key: 'updateDependencyTrackers',
    value: function updateDependencyTrackers(stateChanges, propsChanges, props) {
      var _this2 = this;

      var hasChanged = Object.keys(this.dependencyTrackers).reduce(function (hasChanged, key) {
        if (_this2.dependencyTrackers[key].match(stateChanges, propsChanges)) {
          _this2.dependencyTrackers[key].run(_this2.stateGetter, props);

          return true;
        }

        return hasChanged;
      }, false);

      return hasChanged;
    }
    /*
      Run update, re-evaluating the tags and computed, if neccessary
    */

  }, {
    key: 'update',
    value: function update(props, hasChangedDependencyTrackers) {
      var prevDependencyTrackersDependencyMaps = this.dependencyTrackersDependencyMaps;
      var previousTagsDependencyMap = this.tagsDependencyMap;

      this.tagsDependencyMap = this.getTagsDependencyMap(props);
      this.dependencyTrackersDependencyMaps = hasChangedDependencyTrackers ? this.getDependencyTrackersDependencyMaps(props) : this.dependencyTrackersDependencyMaps;

      var prevDepsMap = Object.assign({}, prevDependencyTrackersDependencyMaps.state, previousTagsDependencyMap);
      var nextDepsMap = Object.assign({}, this.dependencyTrackersDependencyMaps.state, this.tagsDependencyMap);
      this.controller.componentDependencyStore.updateEntity(this, prevDepsMap, nextDepsMap);

      if (this.controller.devtools) {
        this.controller.devtools.updateComponentsMap(this, nextDepsMap, prevDepsMap);
      }
    }
    /*
      Forces update of all computed
    */

  }, {
    key: 'forceUpdateDependencyTrackers',
    value: function forceUpdateDependencyTrackers() {
      var _this3 = this;

      Object.keys(this.dependencyTrackers).forEach(function (key) {
        _this3.dependencyTrackers[key].run(_this3.stateGetter, _this3.props);
      });

      return true;
    }
    /*
      Go through dependencies and identify state trackers and
      merge in their state dependencies
    */

  }, {
    key: 'getDependencyTrackersDependencyMaps',
    value: function getDependencyTrackersDependencyMaps(props) {
      var _this4 = this;

      return Object.keys(this.dependencies).reduce(function (currentDepsMaps, propKey) {
        if (_this4.dependencyTrackers[propKey]) {
          currentDepsMaps.state = Object.assign(currentDepsMaps.state, _this4.dependencyTrackers[propKey].stateTrackFlatMap);
          currentDepsMaps.props = Object.assign(currentDepsMaps.props, _this4.dependencyTrackers[propKey].propsTrackFlatMap);

          return currentDepsMaps;
        }

        return currentDepsMaps;
      }, {
        state: {},
        props: {}
      });
    }
    /*
      Go through dependencies and extract tags related to state
      dependencies
    */

  }, {
    key: 'getTagsDependencyMap',
    value: function getTagsDependencyMap(props) {
      var _this5 = this;

      return Object.keys(this.dependencies).reduce(function (currentDepsMap, propKey) {
        if (_this5.dependencyTrackers[propKey]) {
          return currentDepsMap;
        }

        if (!_this5.dependencies[propKey].getTags) {
          (0, _utils.throwError)('Prop ' + propKey + ' should be tags or a function on the specific property you want to dynamically create.');
        }

        var getters = _this5.createTagGetters(props);

        return _this5.dependencies[propKey].getTags(getters).reduce(function (updatedCurrentDepsMap, tag) {
          if (tag.options.isStateDependency) {
            var path = tag.getPath(getters);
            var strictPath = (0, _utils.ensureStrictPath)(path, _this5.stateGetter(path));

            updatedCurrentDepsMap[strictPath] = true;
          }

          return updatedCurrentDepsMap;
        }, currentDepsMap);
      }, {});
    }
    /*
      Creates getters passed into tags
    */

  }, {
    key: 'createTagGetters',
    value: function createTagGetters(props) {
      return {
        state: this.stateGetter,
        props: props,
        signal: this.signalGetter
      };
    }
    /*
      Runs whenever the component has an update and renders.
      Extracts the actual values from dependency trackers and/or tags
    */

  }, {
    key: 'getProps',
    value: function getProps() {
      var _this6 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var dependenciesProps = Object.keys(this.dependencies).reduce(function (currentProps, key) {
        if (!_this6.dependencies[key]) {
          (0, _utils.throwError)('There is no dependency assigned to prop ' + key);
        }

        if (_this6.dependencyTrackers[key]) {
          currentProps[key] = _this6.dependencyTrackers[key].value;
        } else {
          var tag = _this6.dependencies[key];
          var getters = _this6.createTagGetters(props);

          if (tag.type === 'state') {
            var path = tag.getPath(getters);
            var value = _this6.stateGetter(path);

            if (path.indexOf('.*') > 0) {
              currentProps[key] = value ? Object.keys(value) : [];
            } else {
              currentProps[key] = value;
            }
          } else if (tag.type === 'signal') {
            try {
              currentProps[key] = tag.getValue(getters);
            } catch (e) {
              var _path = tag.getPath(getters);
              (0, _utils.throwError)('Component ' + _this6._displayName + ' There is no signal at \'' + _path + '\'');
            }
          } else if (tag.type === 'props') {
            currentProps[key] = tag.getValue(getters);
          }
        }

        return currentProps;
      }, {});

      if (this.controller.devtools && this.controller.devtools.bigComponentsWarning && !this._hasWarnedBigComponent && Object.keys(this.dependencies).length >= this.controller.devtools.bigComponentsWarning) {
        console.warn('Component named ' + this._displayName + ' has a lot of dependencies, consider refactoring or adjust this option in devtools');
        this._hasWarnedBigComponent = true;
      }

      if (this.mergeProps) {
        return this.mergeProps(dependenciesProps, props, (0, _utils.createResolver)(this.createTagGetters(props)));
      }

      return Object.assign({}, props, dependenciesProps);
    }
  }]);

  return View;
}();

exports.default = View;
//# sourceMappingURL=View.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var controller = this.props.controller;

      if (!controller) {
        (0, _utils.throwError)('You are not passing controller to Container');
      }

      return { controller: controller };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return Container;
}(_react2.default.Component);

Container.propTypes = {
  controller: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired
};
Container.childContextTypes = {
  controller: _propTypes2.default.object.isRequired
};

exports.default = Container;
//# sourceMappingURL=Container.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = HOC;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(0);

var _View = __webpack_require__(87);

var _View2 = _interopRequireDefault(_View);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = function (_React$Component) {
  _inherits(BaseComponent, _React$Component);

  function BaseComponent(dependencies, mergeProps, props, controller, name) {
    _classCallCheck(this, BaseComponent);

    var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

    if (!controller) {
      (0, _utils.throwError)('Can not find controller, did you remember to use the Container component? Read more at: https://cerebral.github.io/api/05_connect.html');
    }

    _this.onUpdate = _this.onUpdate.bind(_this);
    _this.view = new _View2.default({
      dependencies: dependencies,
      mergeProps: mergeProps,
      props: props,
      controller: controller,
      displayName: name,
      onUpdate: _this.onUpdate
    });
    return _this;
  }
  /*
    Register the component to the dependency store with its
    state tracker and tags state dependencies
  */


  _createClass(BaseComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.view.onMount();
    }
    /*
      We only allow forced render by change of props passed
      or Container tells it to render
    */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
    /*
      If received props differ, we need to update any
      StateTrackers and tags, cause they might be using
      props to define a state dependency
    */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasUpdate = this.view.onPropsUpdate(this.props, nextProps);
      if (hasUpdate) {
        this.forceUpdate();
      }
    }
    /*
      Unregister with existing state dependencies
    */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isUnmounting = true;
      this.view.onUnMount();
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(stateChanges, force) {
      if (this._isUnmounting) {
        return;
      }
      this.view.updateFromState(stateChanges, this.props, force);
      this.forceUpdate();
    }
  }]);

  return BaseComponent;
}(_react2.default.Component);

function HOC(dependencies, mergeProps, Component) {
  if (typeof dependencies === 'function') {
    (0, _utils.throwError)('You can not use a function to define dependencies. Use tags or a function on the specific property you want to dynamically create');
  }

  if (!dependencies) {
    (0, _utils.throwError)('There is no reason to connect a component that has no dependencies');
  }

  var CerebralComponent = function (_BaseComponent) {
    _inherits(CerebralComponent, _BaseComponent);

    function CerebralComponent(props, context) {
      _classCallCheck(this, CerebralComponent);

      return _possibleConstructorReturn(this, (CerebralComponent.__proto__ || Object.getPrototypeOf(CerebralComponent)).call(this, dependencies, mergeProps, props, context.controller, Component.displayName || Component.name));
    }

    _createClass(CerebralComponent, [{
      key: 'toJSON',
      value: function toJSON() {
        return this.view._displayName;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, this.view.getProps(this.props));
      }
    }]);

    return CerebralComponent;
  }(BaseComponent);

  CerebralComponent.displayName = 'CerebralWrapping_' + (Component.displayName || Component.name);

  CerebralComponent.contextTypes = {
    controller: _propTypes2.default.object
  };

  return CerebralComponent;
}
//# sourceMappingURL=Hoc.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateContainer = function (_React$Component) {
  _inherits(StateContainer, _React$Component);

  function StateContainer() {
    _classCallCheck(this, StateContainer);

    return _possibleConstructorReturn(this, (StateContainer.__proto__ || Object.getPrototypeOf(StateContainer)).apply(this, arguments));
  }

  _createClass(StateContainer, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        controller: (0, _utils.createDummyController)(this.props.state, this.props.signals)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return StateContainer;
}(_react2.default.Component);

StateContainer.propTypes = {
  state: _propTypes2.default.object,
  children: _propTypes2.default.node.isRequired
};
StateContainer.childContextTypes = {
  controller: _propTypes2.default.object.isRequired
};

exports.default = StateContainer;
//# sourceMappingURL=StateContainer.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function connect(HOC, dependencies, mergeProps, passedComponent) {
  var component = passedComponent;
  var props = mergeProps;

  if (arguments.length === 3) {
    component = props;
    props = null;
  }

  return HOC(dependencies, props, component);
}

exports.default = function (HOC) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return connect.apply(undefined, [HOC].concat(args));
  };
};

var decoratorFactory = exports.decoratorFactory = function decoratorFactory(HOC) {
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return function (component) {
      return connect.apply(undefined, [HOC].concat(args, [component]));
    };
  };
};
//# sourceMappingURL=connect.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorator = exports.connect = exports.StateContainer = exports.Container = undefined;

var _Container = __webpack_require__(88);

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Container).default;
  }
});

var _StateContainer = __webpack_require__(90);

Object.defineProperty(exports, 'StateContainer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StateContainer).default;
  }
});

var _Hoc = __webpack_require__(89);

var _Hoc2 = _interopRequireDefault(_Hoc);

var _connect = __webpack_require__(91);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = exports.connect = (0, _connect2.default)(_Hoc2.default);
var decorator = exports.decorator = (0, _connect.decoratorFactory)(_Hoc2.default);
//# sourceMappingURL=index.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports.debounce = __webpack_require__(97).default


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunctionTree = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _eventemitter = __webpack_require__(103);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _executeTree = __webpack_require__(96);

var _executeTree2 = _interopRequireDefault(_executeTree);

var _staticTree = __webpack_require__(102);

var _staticTree2 = _interopRequireDefault(_staticTree);

var _Execution = __webpack_require__(99);

var _Execution2 = _interopRequireDefault(_Execution);

var _Context = __webpack_require__(98);

var _Context2 = _interopRequireDefault(_Context);

var _Props = __webpack_require__(101);

var _Props2 = _interopRequireDefault(_Props);

var _Path = __webpack_require__(100);

var _Path2 = _interopRequireDefault(_Path);

var _Path3 = __webpack_require__(14);

var _Path4 = _interopRequireDefault(_Path3);

var _primitives = __webpack_require__(15);

var _errors = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Need to create a unique ID for each execution to identify it
  in debugger
*/
function createUniqueId() {
  return Date.now() + '_' + Math.floor(Math.random() * 10000);
}

/*
  Validate any returned value from a function. Has
  to be nothing or an object
*/
function isValidResult(result) {
  return !result || (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && !Array.isArray(result);
}

/*
  Create an error with execution details
*/
function createErrorObject(error, execution, functionDetails, payload) {
  var errorToReturn = error;

  errorToReturn.execution = execution;
  errorToReturn.functionDetails = functionDetails;
  errorToReturn.payload = Object.assign({}, payload, {
    _execution: {
      id: execution.id,
      functionIndex: functionDetails.functionIndex
    },
    error: error.toJSON ? error.toJSON() : {
      name: error.name,
      message: error.message,
      stack: error.stack
    }
  });

  return errorToReturn;
}

/*
  If it walks like a duck and quacks like a duck...
*/
function isPromise(result) {
  return result && typeof result.then === 'function' && typeof result.catch === 'function';
}

var FunctionTreeExecution = function () {
  function FunctionTreeExecution(name, staticTree, functionTree, errorCallback) {
    _classCallCheck(this, FunctionTreeExecution);

    this.id = createUniqueId();
    this.name = name || staticTree.name || this.id;
    this.staticTree = staticTree;
    this.functionTree = functionTree;
    this.datetime = Date.now();
    this.errorCallback = errorCallback;
    this.hasThrown = false;

    this.runFunction = this.runFunction.bind(this);
  }

  /*
    Creates the context for the current function to be run,
    emits events and handles its returned value. Also handles
    the returned value being a promise
  */


  _createClass(FunctionTreeExecution, [{
    key: 'runFunction',
    value: function runFunction(funcDetails, payload, prevPayload, next) {
      if (this.hasThrown) {
        return;
      }

      var context = this.createContext(funcDetails, payload, prevPayload);
      var functionTree = this.functionTree;
      var errorCallback = this.errorCallback;
      var execution = this;
      var result = void 0;

      functionTree.emit('functionStart', execution, funcDetails, payload);
      try {
        result = funcDetails.function(context);
      } catch (error) {
        this.hasThrown = true;

        return errorCallback(createErrorObject(error, execution, funcDetails, payload), execution, funcDetails, payload);
      }

      /*
        If result is a promise we want to emit an event and wait for it to resolve to
        move on
      */
      if (isPromise(result)) {
        functionTree.emit('asyncFunction', execution, funcDetails, payload, result);
        result.then(function (result) {
          if (result instanceof _Path4.default) {
            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
            next(result.toJSON());
          } else if (funcDetails.outputs) {
            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
            throw new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' needs to be a path of either ' + Object.keys(funcDetails.outputs)));
          } else if (isValidResult(result)) {
            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
            next({
              payload: result
            });
          } else {
            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
            throw new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' is not a valid result'));
          }
        }).catch(function (result) {
          if (result instanceof Error) {
            execution.hasThrown = true;
            errorCallback(createErrorObject(result, execution, funcDetails, payload), execution, funcDetails, payload);
          } else if (result instanceof _Path4.default) {
            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
            next(result.toJSON());
          } else if (funcDetails.outputs) {
            var error = new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' needs to be a path of either ' + Object.keys(funcDetails.outputs)));

            execution.hasThrown = true;
            errorCallback(createErrorObject(error, execution, funcDetails, payload), execution, funcDetails, payload);
          } else if (isValidResult(result)) {
            functionTree.emit('functionEnd', execution, funcDetails, payload, result);
            next({
              payload: result
            });
          } else {
            var _error = new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' is not a valid result'));
            execution.hasThrown = true;

            errorCallback(createErrorObject(_error, execution, funcDetails, payload), execution, funcDetails, payload);
          }
        });
      } else if (result instanceof _Path4.default) {
        functionTree.emit('functionEnd', execution, funcDetails, payload, result);
        next(result.toJSON());
      } else if (funcDetails.outputs) {
        var error = new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' needs to be a path of either ' + Object.keys(funcDetails.outputs)));

        this.hasThrown = true;
        errorCallback(createErrorObject(error, execution, funcDetails, payload), execution, funcDetails, payload);
      } else if (isValidResult(result)) {
        functionTree.emit('functionEnd', execution, funcDetails, payload, result);
        next({
          payload: result
        });
      } else {
        var _error2 = new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, new Error('The result ' + JSON.stringify(result) + ' from function ' + funcDetails.name + ' is not a valid result'));
        this.hasThrown = true;

        errorCallback(createErrorObject(_error2, execution, funcDetails, payload), execution, funcDetails, payload);
      }
    }

    /*
      Creates the context for the next running function
    */

  }, {
    key: 'createContext',
    value: function createContext(funcDetails, payload, prevPayload) {
      return [(0, _Execution2.default)(this), (0, _Props2.default)(), (0, _Path2.default)()].concat(this.functionTree.contextProviders).reduce(function (currentContext, contextProvider) {
        var newContext = typeof contextProvider === 'function' ? contextProvider(currentContext, funcDetails, payload, prevPayload) : (0, _Context2.default)(contextProvider)(currentContext, funcDetails, payload, prevPayload);

        if (newContext !== currentContext) {
          throw new _errors.FunctionTreeError('A provider is not returning the context object, maybe it is a function factory and you forgot to call it?');
        }

        return newContext;
      }, {});
    }
  }]);

  return FunctionTreeExecution;
}();

var FunctionTree = exports.FunctionTree = function (_EventEmitter) {
  _inherits(FunctionTree, _EventEmitter);

  function FunctionTree(contextProviders) {
    _classCallCheck(this, FunctionTree);

    var _this = _possibleConstructorReturn(this, (FunctionTree.__proto__ || Object.getPrototypeOf(FunctionTree)).call(this));

    _this.cachedTrees = [];
    _this.cachedStaticTrees = [];
    if (Array.isArray(contextProviders)) {
      _this.contextProviders = contextProviders;
    } else if (contextProviders) {
      _this.contextProviders = [(0, _Context2.default)(contextProviders)];
    } else {
      _this.contextProviders = [];
    }

    _this.run = _this.run.bind(_this);
    return _this;
  }

  /*
    Analyses the tree to identify paths and its validity. This analysis
    is cached. Then the method creates an execution for the tree to run.
  */


  _createClass(FunctionTree, [{
    key: 'run',
    value: function run() {
      var _this2 = this;

      var name = void 0;
      var tree = void 0;
      var payload = void 0;
      var cb = void 0;
      var staticTree = void 0;
      var args = [].slice.call(arguments);
      args.forEach(function (arg) {
        if (typeof arg === 'string') {
          name = arg;
        } else if (Array.isArray(arg) || arg instanceof _primitives.Primitive) {
          tree = arg;
        } else if (!tree && typeof arg === 'function') {
          tree = arg;
        } else if (typeof arg === 'function') {
          cb = arg;
        } else {
          payload = arg;
        }
      });

      if (!tree) {
        throw new Error('function-tree - You did not pass in a function tree');
      }

      var withResolveAndReject = function withResolveAndReject(resolve, reject) {
        var treeIdx = _this2.cachedTrees.indexOf(tree);
        if (treeIdx === -1) {
          staticTree = (0, _staticTree2.default)(tree);
          _this2.cachedTrees.push(tree);
          _this2.cachedStaticTrees.push(staticTree);
        } else {
          staticTree = _this2.cachedStaticTrees[treeIdx];
        }
        var execution = new FunctionTreeExecution(name, staticTree, _this2, function (error, execution, funcDetails, finalPayload) {
          _this2.emit('error', error, execution, funcDetails, finalPayload);
          reject(error);
        });

        _this2.emit('start', execution, payload);
        (0, _executeTree2.default)(execution, payload, function (funcDetails, path, currentPayload) {
          _this2.emit('pathStart', path, execution, funcDetails, currentPayload);
        }, function (currentPayload) {
          _this2.emit('pathEnd', execution, currentPayload);
        }, function (currentPayload, functionsToResolve) {
          _this2.emit('parallelStart', execution, currentPayload, functionsToResolve);
        }, function (currentPayload, functionsResolved) {
          _this2.emit('parallelProgress', execution, currentPayload, functionsResolved);
        }, function (currentPayload, functionsResolved) {
          _this2.emit('parallelEnd', execution, currentPayload, functionsResolved);
        }, function (finalPayload) {
          _this2.emit('end', execution, finalPayload);
          resolve === reject ? resolve(null, finalPayload) : resolve(finalPayload);
        });
      };

      if (cb) {
        withResolveAndReject(cb, cb);
      } else {
        return new Promise(withResolveAndReject);
      }
    }
  }]);

  return FunctionTree;
}(_eventemitter2.default);
//# sourceMappingURL=FunctionTree.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevtoolsBase = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(14);

var _Path2 = _interopRequireDefault(_Path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DevtoolsBase = exports.DevtoolsBase = function () {
  function DevtoolsBase() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$host = _ref.host,
        host = _ref$host === undefined ? null : _ref$host,
        _ref$remoteDebugger = _ref.remoteDebugger,
        remoteDebugger = _ref$remoteDebugger === undefined ? null : _ref$remoteDebugger,
        _ref$reconnect = _ref.reconnect,
        reconnect = _ref$reconnect === undefined ? true : _ref$reconnect,
        _ref$reconnectInterva = _ref.reconnectInterval,
        reconnectInterval = _ref$reconnectInterva === undefined ? 10000 : _ref$reconnectInterva;

    _classCallCheck(this, DevtoolsBase);

    if (remoteDebugger) {
      console.warn('The "remoteDebugger" property is DEPRECATED, please use "host" instead');
    }
    this.host = host || remoteDebugger;
    this.version = 0;
    if (!this.host) {
      throw new Error('Devtools: You have to pass in the "host" option');
    }
    this.backlog = [];
    this.isConnected = false;
    this.ws = null;
    this.reconnectInterval = reconnectInterval;
    this.doReconnect = reconnect;

    this.sendInitial = this.sendInitial.bind(this);
  }

  _createClass(DevtoolsBase, [{
    key: 'createSocket',
    value: function createSocket() {}
    /*
      Sets up the listeners to Chrome Extension or remote debugger
    */

  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.createSocket();
      this.ws.onmessage = this.onMessage.bind(this);
    }
  }, {
    key: 'onMessage',
    value: function onMessage(event) {}
  }, {
    key: 'reconnect',
    value: function reconnect() {
      var _this = this;

      setTimeout(function () {
        _this.init();
      }, this.reconnectInterval);
    }
    /*
      The debugger might be ready or it might not. The initial communication
      with the debugger requires a "ping" -> "pong" to identify that it
      is ready to receive messages.
      1. Debugger is open when app loads
        - Devtools sends "ping"
        - Debugger sends "pong"
        - Devtools sends "init"
      2. Debugger is opened after app load
        - Debugger sends "ping"
        - Devtools sends "init"
    */

  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.addListeners();
      this.ws.onopen = function () {
        _this2.ws.send(JSON.stringify({ type: 'ping' }));
      };
      this.ws.onerror = function () {};
      this.ws.onclose = function () {
        _this2.isConnected = false;

        if (_this2.doReconnect) {
          console.warn('Debugger application is not running on selected port... will reconnect automatically behind the scenes');
          _this2.reconnect();
        }
      };
    }
    /*
      Sends message to chrome extension or remote debugger
    */

  }, {
    key: 'sendMessage',
    value: function sendMessage(stringifiedMessage) {
      this.ws.send(stringifiedMessage);
    }
    /*
      Sends multiple message in one batch to debugger, causing debugger
      also to synchronously run all updates before rendering
    */

  }, {
    key: 'sendBulkMessage',
    value: function sendBulkMessage(messages, source) {
      var message = JSON.stringify({
        type: 'bulk',
        source: source,
        version: this.version,
        data: {
          messages: messages
        }
      });

      this.sendMessage(message);
    }
    /*
      Watches function tree for execution of signals. This is passed to
      debugger to prevent time travelling when executing. It also tracks
      latest executed signal for "remember" to know when signals can be
      called again
    */

  }, {
    key: 'watchExecution',
    value: function watchExecution(tree, source) {
      var _this3 = this;

      tree.on('start', function (execution, payload) {
        var message = JSON.stringify({
          type: 'executionStart',
          source: source,
          version: _this3.version,
          data: {
            execution: {
              executionId: execution.id,
              name: execution.name,
              staticTree: execution.staticTree,
              datetime: execution.datetime,
              executedBy: payload && payload._execution ? payload._execution : null
            }
          }
        });

        _this3.sendExecutionMessage(message);
      });
      tree.on('end', function (execution) {
        var message = JSON.stringify({
          type: 'executionEnd',
          source: source,
          version: _this3.version,
          data: {
            execution: {
              executionId: execution.id
            }
          }
        });
        _this3.latestExecutionId = execution.id;

        _this3.sendExecutionMessage(message);
      });
      tree.on('pathStart', function (path, execution, funcDetails) {
        var message = JSON.stringify({
          type: 'executionPathStart',
          source: source,
          version: _this3.version,
          data: {
            execution: {
              executionId: execution.id,
              functionIndex: funcDetails.functionIndex,
              path: path
            }
          }
        });

        _this3.sendExecutionMessage(message);
      });
      tree.on('functionStart', function (execution, funcDetails, payload) {
        var message = _this3.safeStringify({
          type: 'execution',
          source: source,
          version: _this3.version,
          data: {
            execution: {
              executionId: execution.id,
              functionIndex: funcDetails.functionIndex,
              payload: payload,
              data: null
            }
          }
        });

        _this3.sendExecutionMessage(message);
      });
      tree.on('functionEnd', function (execution, funcDetails, payload, result) {
        if (!result || result instanceof _Path2.default && !result.payload) {
          return;
        }

        var message = _this3.safeStringify({
          type: 'executionFunctionEnd',
          source: source,
          version: _this3.version,
          data: {
            execution: {
              executionId: execution.id,
              functionIndex: funcDetails.functionIndex,
              output: result instanceof _Path2.default ? result.payload : result
            }
          }
        });

        _this3.sendExecutionMessage(message);
      });
      tree.on('error', function (error, execution, funcDetails) {
        var message = JSON.stringify({
          type: 'executionFunctionError',
          source: source,
          version: _this3.version,
          data: {
            execution: {
              executionId: execution.id,
              functionIndex: funcDetails.functionIndex,
              error: {
                name: error.name,
                message: error.message,
                stack: error.stack,
                func: funcDetails.function.toString()
              }
            }
          }
        });

        _this3.sendExecutionMessage(message);
      });
    }
  }, {
    key: 'safeStringify',
    value: function safeStringify(object) {
      var refs = [];

      return JSON.stringify(object, function (key, value) {
        var isObject = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && !Array.isArray(value);

        if (isObject && refs.indexOf(value) > -1) {
          return '[CIRCULAR]';
        } else if (isObject) {
          refs.push(value);
        }

        return value;
      });
    }
  }, {
    key: 'sendExecutionMessage',
    value: function sendExecutionMessage(message) {
      if (this.isConnected) {
        this.sendMessage(message);
      } else {
        this.backlog.push(message);
      }
    }
  }, {
    key: 'sendInitial',
    value: function sendInitial() {}
  }, {
    key: 'createExecutionMessage',
    value: function createExecutionMessage(debuggingData, context, functionDetails, payload) {}
    /*
      Sends execution data to the debugger. Whenever a signal starts
      it will send a message to the debugger, but any functions in the
      function tree might also use this to send debugging data. Like when
      mutations are done or any wrapped methods run.
    */

  }, {
    key: 'sendExecutionData',
    value: function sendExecutionData(debuggingData, context, functionDetails, payload) {
      var message = this.createExecutionMessage(debuggingData, context, functionDetails, payload);

      this.sendExecutionMessage(message);
    }
  }]);

  return DevtoolsBase;
}();

exports.default = DevtoolsBase;
//# sourceMappingURL=base.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = executeTree;

var _errors = __webpack_require__(9);

function isPrimitive(primitive, type) {
  return primitive._functionTreePrimitive && primitive.type === type;
}

/*
  Runs through the tree providing a "next" callback to process next step
  of execution
*/
function executeTree(execution, initialPayload, branchStart, branchEnd, parallelStart, parallelProgress, parallelEnd, end) {
  function runBranch(branch, index, payload, prevPayload, nextBranch) {
    function runNextItem(result) {
      runBranch(branch, index + 1, result, payload, nextBranch);
    }

    function processFunctionOutput(funcDetails, outputResult) {
      return function (result) {
        var newPayload = Object.assign({}, payload, result ? result.payload : {});

        if (result && funcDetails.outputs) {
          var outputs = Object.keys(funcDetails.outputs);

          if (~outputs.indexOf(result.path)) {
            branchStart(funcDetails, result.path, newPayload);
            runBranch(funcDetails.outputs[result.path].items, 0, newPayload, payload, outputResult);
          } else {
            throw new _errors.FunctionTreeExecutionError(execution, funcDetails, payload, 'function ' + funcDetails.name + ' must use one of its possible outputs: ' + outputs.join(', ') + '.');
          }
        } else {
          outputResult(newPayload);
        }
      };
    }

    var currentItem = branch[index];

    if (!currentItem) {
      if (branch !== execution.staticTree) {
        branchEnd(payload);
      }
      nextBranch(payload);
    } else if (isPrimitive(currentItem, 'sequence')) {
      runBranch(currentItem.items, 0, payload, prevPayload, runNextItem);
    } else if (isPrimitive(currentItem, 'parallel')) {
      var itemLength = currentItem.items.length;
      var payloads = [];

      parallelStart(payload, itemLength);
      currentItem.items.forEach(function (func, index) {
        if (func.function) {
          execution.runFunction(func, payload, prevPayload, processFunctionOutput(func, function (payload) {
            payloads.push(payload);
            if (payloads.length === itemLength) {
              parallelEnd(payload, itemLength);
              runNextItem(Object.assign.apply(Object, [{}].concat(payloads)));
            } else {
              parallelProgress(payload, itemLength - payloads.length);
            }
          }));
        } else {
          runBranch(func.items, 0, payload, prevPayload, function (payload) {
            payloads.push(payload);
            if (payloads.length === itemLength) {
              parallelEnd(payload, itemLength);
              runNextItem(Object.assign.apply(Object, [{}].concat(payloads)));
            } else {
              parallelProgress(payload, itemLength - payloads.length);
            }
          });
        }

        return payloads;
      });
    } else {
      execution.runFunction(currentItem, payload, prevPayload, processFunctionOutput(currentItem, runNextItem));
    }
  }

  return runBranch([execution.staticTree], 0, initialPayload, null, end);
}
//# sourceMappingURL=executeTree.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function createDebounce(time, execution) {
  function debounce(_ref) {
    var path = _ref.path;

    return new Promise(function (resolve) {
      if (execution.timer) {
        execution.resolve(path.discard());
        clearTimeout(execution.timer);
      }

      execution.timer = setTimeout(function () {
        execution.resolve(path.continue());
        execution.timer = null;
        execution.resolve = null;
      }, time);
      execution.resolve = resolve;
    });
  }
  debounce.displayName = 'debounce - ' + time + 'ms';

  return debounce;
}

function debounceFactory(time) {
  // New execution on every call
  var execution = { timer: null, resolve: null };

  return createDebounce(time, execution);
}

debounceFactory.shared = function () {
  // Shared execution
  var execution = { timer: null, resolve: null };

  return function debounceSharedFactory(time) {
    return createDebounce(time, execution);
  };
};

exports.default = debounceFactory;
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContextProvider;
function ContextProvider(extendedContext) {
  return function (context, funcDetails, payload) {
    return Object.keys(extendedContext).reduce(function (context, key) {
      if (context.debugger) {
        context[key] = {};

        /*
          Grab the prototype to add methods to proxy.
          We only grab actual added prototypes on first level, not nested and not
          where prototype is base prototypes like Objects and Functions
        */
        var proto = null;

        if (extendedContext[key].constructor && extendedContext[key].constructor.prototype.constructor !== Object.prototype.constructor && extendedContext[key].constructor.prototype.constructor !== Function.prototype.constructor) {
          proto = extendedContext[key].constructor.prototype;
        }

        // The value might be a function that is already wrapped, try grabbing the original
        var contextValue = extendedContext[key];

        /*
          Wraps methods and sends their payload through the debugger
        */
        var proxy = function proxy(sourceKeys, target) {
          return sourceKeys.reduce(function (obj, objKey) {
            if (typeof contextValue[objKey] === 'function') {
              obj[objKey] = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                context.debugger.send({
                  method: key + '.' + objKey,
                  args: args
                });

                return contextValue[objKey].apply(contextValue, args);
              };
            } else if (!(objKey in obj)) {
              Object.defineProperty(obj, objKey, {
                get: function get() {
                  return contextValue[objKey];
                },
                set: function set(value) {
                  context.debugger.send({
                    method: key + '.' + objKey + ' =',
                    args: [value]
                  });
                  contextValue[objKey] = value;
                }
              });
            }

            return obj;
          }, target);
        };

        // If the context value is a function, wrap it
        if (typeof contextValue === 'function') {
          context[key] = function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            context.debugger.send({
              method: key,
              args: args
            });
            return contextValue.apply(null, args);
          };
        }

        // Go through keys original value and wrap any attached methods
        context[key] = proxy(Object.keys(contextValue), context[key]); // Object.keys(contextValue).reduce(proxy, context[key])
        // Go through proto
        context[key] = proto ? proxy(Object.getOwnPropertyNames(proto), context[key]) : context[key];
      } else {
        context[key] = extendedContext[key];
      }

      return context;
    }, context);
  };
}
//# sourceMappingURL=Context.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExecutionProvider;
function ExecutionProvider(execution) {
  return function (context) {
    context.execution = execution;

    return context;
  };
}
//# sourceMappingURL=Execution.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PathProvider;

var _Path = __webpack_require__(14);

var _Path2 = _interopRequireDefault(_Path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createNext(next, path) {
  return function (payload) {
    return new _Path2.default(path, payload);
  };
}

function PathProvider() {
  return function (context, functionDetails, payload, next) {
    if (functionDetails.outputs) {
      context.path = Object.keys(functionDetails.outputs).reduce(function (output, outputPath) {
        output[outputPath] = createNext(next, outputPath);

        return output;
      }, {});
    }

    return context;
  };
}
//# sourceMappingURL=Path.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PropsProvider;
function PropsProvider() {
  return function (context, funcDetails, payload) {
    context.props = payload || {};

    return context;
  };
}
//# sourceMappingURL=Props.js.map

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _primitives = __webpack_require__(15);

var _errors = __webpack_require__(9);

function getFunctionName(fn) {
  var ret = fn.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));

  return ret;
}

function isPaths(item) {
  return item && !Array.isArray(item) && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !(item instanceof _primitives.Primitive);
}

function analyze(functions, item, isParallel) {
  if (item instanceof _primitives.Primitive) {
    var instance = item.toJSON();

    return Object.assign(instance, {
      items: analyze(functions, instance.items, item instanceof _primitives.Parallel).items
    });
  } else if (Array.isArray(item)) {
    return new _primitives.Sequence(item.reduce(function (allItems, subItem, index) {
      if (subItem instanceof _primitives.Primitive) {
        var _instance = subItem.toJSON();

        return allItems.concat(Object.assign(_instance, {
          items: analyze(functions, _instance.items, subItem instanceof _primitives.Parallel).items
        }));
      } else if (typeof subItem === 'function') {
        var funcDetails = {
          name: subItem.displayName || getFunctionName(subItem),
          functionIndex: functions.push(subItem) - 1,
          function: subItem
        };
        var nextItem = item[index + 1];

        if (isPaths(nextItem)) {
          funcDetails.outputs = {};
          Object.keys(nextItem).forEach(function (key) {
            if (subItem.outputs && !~subItem.outputs.indexOf(key)) {
              throw new _errors.FunctionTreeError('Outputs object doesn\'t match list of possible outputs defined for function.');
            }
            funcDetails.outputs[key] = analyze(functions, typeof nextItem[key] === 'function' ? [nextItem[key]] : nextItem[key]);
          });
        }

        return allItems.concat(funcDetails);
      } else if (isPaths(subItem)) {
        return allItems;
      } else if (Array.isArray(subItem)) {
        var items = analyze(functions, subItem);

        return allItems.concat(items);
      } else {
        throw new _errors.FunctionTreeError('Unexpected entry in tree');
      }
    }, [])).toJSON();
  } else {
    throw new _errors.FunctionTreeError('Unexpected entry in tree');
  }
}

exports.default = function (tree) {
  var functions = [];

  return analyze(functions, typeof tree === 'function' ? [tree] : tree);
};
//# sourceMappingURL=staticTree.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(13);
  var warning = __webpack_require__(20);
  var ReactPropTypesSecret = __webpack_require__(17);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(12);
var invariant = __webpack_require__(13);
var ReactPropTypesSecret = __webpack_require__(17);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(12);
var invariant = __webpack_require__(13);
var warning = __webpack_require__(20);

var ReactPropTypesSecret = __webpack_require__(17);
var checkPropTypes = __webpack_require__(104);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })
/******/ ]);