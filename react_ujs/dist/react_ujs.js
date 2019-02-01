(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["ReactRailsUJS"] = factory(require("react"), require("react-dom"), require("react-dom/server"));
	else
		root["ReactRailsUJS"] = factory(root["React"], root["ReactDOM"], root["ReactDOMServer"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\")\r\nvar ReactDOM = __webpack_require__(/*! react-dom */ \"react-dom\")\r\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\")\r\n\r\nvar detectEvents = __webpack_require__(/*! ./src/events/detect */ \"./src/events/detect.js\")\r\nvar constructorFromGlobal = __webpack_require__(/*! ./src/getConstructor/fromGlobal */ \"./src/getConstructor/fromGlobal.js\")\r\nvar constructorFromRequireContextWithGlobalFallback = __webpack_require__(/*! ./src/getConstructor/fromRequireContextWithGlobalFallback */ \"./src/getConstructor/fromRequireContextWithGlobalFallback.js\")\r\n\r\nvar ReactRailsUJS = {\r\n  // This attribute holds the name of component which should be mounted\r\n  // example: `data-react-class=\"MyApp.Items.EditForm\"`\r\n  CLASS_NAME_ATTR: 'data-react-class',\r\n\r\n  // This attribute holds JSON stringified props for initializing the component\r\n  // example: `data-react-props=\"{\\\"item\\\": { \\\"id\\\": 1, \\\"name\\\": \\\"My Item\\\"} }\"`\r\n  PROPS_ATTR: 'data-react-props',\r\n\r\n  // This attribute holds which method to use between: ReactDOM.hydrate, ReactDOM.render\r\n  RENDER_ATTR: 'data-hydrate',\r\n\r\n  // A unique identifier to identify the node if an id doesn't exist\r\n  CACHE_ID_ATTR: \"data-react-cache-id\",\r\n\r\n  // If jQuery is detected, save a reference to it for event handlers\r\n  jQuery: (typeof window !== 'undefined') && (typeof window.jQuery !== 'undefined') && window.jQuery,\r\n\r\n  components: {},\r\n\r\n  // helper method for the mount and unmount methods to find the\r\n  // `data-react-class` DOM elements\r\n  findDOMNodes: function(searchSelector) {\r\n    var classNameAttr = ReactRailsUJS.CLASS_NAME_ATTR\r\n    // we will use fully qualified paths as we do not bind the callbacks\r\n    var selector, parent;\r\n\r\n    switch (typeof searchSelector) {\r\n      case 'undefined':\r\n        selector = '[' + classNameAttr + ']';\r\n        parent = document;\r\n        break;\r\n      case 'object':\r\n        selector = '[' + classNameAttr + ']';\r\n        parent = searchSelector;\r\n        break;\r\n      case 'string':\r\n        selector = searchSelector + '[' + classNameAttr + '], ' +\r\n                   searchSelector + ' [' + classNameAttr + ']';\r\n        parent = document;\r\n        break\r\n      default:\r\n        break;\r\n    }\r\n\r\n    if (ReactRailsUJS.jQuery) {\r\n      return ReactRailsUJS.jQuery(selector, parent);\r\n    } else {\r\n      return parent.querySelectorAll(selector);\r\n    }\r\n  },\r\n\r\n  // Get the constructor for a className (returns a React class)\r\n  // Override this function to lookup classes in a custom way,\r\n  // the default is ReactRailsUJS.ComponentGlobal\r\n  getConstructor: constructorFromGlobal,\r\n\r\n  // Given a Webpack `require.context`,\r\n  // try finding components with `require`,\r\n  // then falling back to global lookup.\r\n  useContext: function(requireContext) {\r\n    this.getConstructor = constructorFromRequireContextWithGlobalFallback(requireContext)\r\n  },\r\n\r\n  // Render `componentName` with `props` to a string,\r\n  // using the specified `renderFunction` from `react-dom/server`.\r\n  serverRender: function(renderFunction, componentName, props) {\r\n    var componentClass = this.getConstructor(componentName)\r\n    var element = React.createElement(componentClass, props)\r\n    return ReactDOMServer[renderFunction](element)\r\n  },\r\n\r\n  renderNode: function(constructor, props, node) {\r\n    \r\n  },\r\n\r\n  // Within `searchSelector`, find nodes which should have React components\r\n  // inside them, and mount them with their props.\r\n  mountComponents: function(searchSelector) {\r\n    var ujs = ReactRailsUJS\r\n    var nodes = ujs.findDOMNodes(searchSelector);\r\n\r\n    for (var i = 0; i < nodes.length; ++i) {\r\n      var node = nodes[i];\r\n      var className = node.getAttribute(ujs.CLASS_NAME_ATTR);\r\n      var constructor = ujs.getConstructor(className);\r\n      var propsJson = node.getAttribute(ujs.PROPS_ATTR);\r\n      var props = propsJson && JSON.parse(propsJson);\r\n      var hydrate = node.getAttribute(ReactRailsUJS.RENDER_ATTR);\r\n      var cacheId = node.getAttribute(ujs.CACHE_ID_ATTR);\r\n\r\n      if (!constructor) {\r\n        var message = \"Cannot find component: '\" + className + \"'\"\r\n        if (console && console.log) {\r\n          console.log(\"%c[react-rails] %c\" + message + \" for element\", \"font-weight: bold\", \"\", node)\r\n        }\r\n        throw new Error(message + \". Make sure your component is available to render.\")\r\n      } else {\r\n        let component = this.components[cacheId];\r\n        if(component === undefined) {\r\n          component = React.createElement(constructor, props);\r\n          this.components[cacheId] = component;\r\n        }\r\n\r\n        if (hydrate && typeof ReactDOM.hydrate === \"function\") {\r\n          component = ReactDOM.hydrate(component, node);\r\n        } else {\r\n          component = ReactDOM.render(component, node);\r\n        }\r\n      }\r\n    } \r\n  },\r\n\r\n  // Within `searchSelector`, find nodes which have React components\r\n  // inside them, and unmount those components.\r\n  unmountComponents: function(searchSelector) {\r\n    var nodes = ReactRailsUJS.findDOMNodes(searchSelector);\r\n\r\n    for (var i = 0; i < nodes.length; ++i) {\r\n      var node = nodes[i];\r\n      ReactDOM.unmountComponentAtNode(node);\r\n    }\r\n  },\r\n\r\n  // Check the global context for installed libraries\r\n  // and figure out which library to hook up to (pjax, Turbolinks, jQuery)\r\n  // This is called on load, but you can call it again if needed\r\n  // (It will unmount itself)\r\n  detectEvents: function() {\r\n    detectEvents(this)\r\n  },\r\n}\r\n\r\n// These stable references are so that handlers can be added and removed:\r\nReactRailsUJS.handleMount = function(e) {\r\n  var target = undefined;\r\n  if (e && e.target) {\r\n    target = e.target;\r\n  }\r\n  ReactRailsUJS.mountComponents(target);\r\n}\r\nReactRailsUJS.handleUnmount = function(e) {\r\n  var target = undefined;\r\n  if (e && e.target) {\r\n    target = e.target;\r\n  }\r\n  ReactRailsUJS.unmountComponents(target);\r\n}\r\n\r\n\r\nif (typeof window !== \"undefined\") {\r\n  // Only setup events for browser (not server-rendering)\r\n  ReactRailsUJS.detectEvents()\r\n}\r\n\r\n// It's a bit of a no-no to populate the global namespace,\r\n// but we really need it!\r\n// We need access to this object for server rendering, and\r\n// we can't do a dynamic `require`, so we'll grab it from here:\r\nself.ReactRailsUJS = ReactRailsUJS\r\n\r\nmodule.exports = ReactRailsUJS\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./index.js?");

/***/ }),

/***/ "./src/events/detect.js":
/*!******************************!*\
  !*** ./src/events/detect.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeEvents = __webpack_require__(/*! ./native */ \"./src/events/native.js\")\r\nvar pjaxEvents = __webpack_require__(/*! ./pjax */ \"./src/events/pjax.js\")\r\nvar turbolinksEvents = __webpack_require__(/*! ./turbolinks */ \"./src/events/turbolinks.js\")\r\nvar turbolinksClassicDeprecatedEvents = __webpack_require__(/*! ./turbolinksClassicDeprecated */ \"./src/events/turbolinksClassicDeprecated.js\")\r\nvar turbolinksClassicEvents = __webpack_require__(/*! ./turbolinksClassic */ \"./src/events/turbolinksClassic.js\")\r\n\r\n// see what things are globally available\r\n// and setup event handlers to those things\r\nmodule.exports = function(ujs) {\r\n  if (ujs.handleEvent) {\r\n    // We're calling this a second time -- remove previous handlers\r\n    if (typeof Turbolinks !== \"undefined\" && typeof Turbolinks.EVENTS !== \"undefined\") {\r\n      turbolinksClassicEvents.teardown(ujs);\r\n    }\r\n    turbolinksEvents.teardown(ujs);\r\n    turbolinksClassicDeprecatedEvents.teardown(ujs);\r\n    pjaxEvents.teardown(ujs);\r\n    nativeEvents.teardown(ujs);\r\n  }\r\n\r\n  if ('addEventListener' in window) {\r\n    ujs.handleEvent = function(eventName, callback) {\r\n      document.addEventListener(eventName, callback);\r\n    };\r\n    ujs.removeEvent = function(eventName, callback) {\r\n      document.removeEventListener(eventName, callback);\r\n    };\r\n  } else {\r\n    ujs.handleEvent = function(eventName, callback) {\r\n      window.attachEvent(eventName, callback);\r\n    };\r\n    ujs.removeEvent = function(eventName, callback) {\r\n      window.detachEvent(eventName, callback);\r\n    };\r\n  }\r\n\r\n  // Detect which kind of events to set up:\r\n  if (typeof Turbolinks !== 'undefined' && Turbolinks.supported) {\r\n    if (typeof Turbolinks.EVENTS !== 'undefined') {\r\n      // Turbolinks.EVENTS is in classic version 2.4.0+\r\n      turbolinksClassicEvents.setup(ujs)\r\n    } else if (typeof Turbolinks.controller !== \"undefined\") {\r\n      // Turbolinks.controller is in version 5+\r\n      turbolinksEvents.setup(ujs);\r\n    } else {\r\n      turbolinksClassicDeprecatedEvents.setup(ujs);\r\n    }\r\n  } else if (typeof $ !== \"undefined\" && typeof $.pjax === 'function') {\r\n    pjaxEvents.setup(ujs);\r\n  } else {\r\n    nativeEvents.setup(ujs);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./src/events/detect.js?");

/***/ }),

/***/ "./src/events/native.js":
/*!******************************!*\
  !*** ./src/events/native.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  // Attach handlers to browser events to mount\r\n  // (There are no unmount handlers since the page is destroyed on navigation)\r\n  setup: function(ujs) {\r\n    if ('addEventListener' in window) {\r\n      ujs.handleEvent('DOMContentLoaded', ujs.handleMount);\r\n    } else {\r\n      // add support to IE8 without jQuery\r\n      ujs.handleEvent('onload', ujs.handleMount);\r\n    }\r\n  },\r\n\r\n  teardown: function(ujs) {\r\n    ujs.removeEvent('DOMContentLoaded', ujs.handleMount);\r\n    ujs.removeEvent('onload', ujs.handleMount);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./src/events/native.js?");

/***/ }),

/***/ "./src/events/pjax.js":
/*!****************************!*\
  !*** ./src/events/pjax.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  // pjax support\r\n  setup: function(ujs) {\r\n    ujs.handleEvent('ready', ujs.handleMount);\r\n    ujs.handleEvent('pjax:end', ujs.handleMount);\r\n    ujs.handleEvent('pjax:beforeReplace', ujs.handleUnmount);\r\n  },\r\n\r\n  teardown: function(ujs) {\r\n    ujs.removeEvent('ready', ujs.handleMount);\r\n    ujs.removeEvent('pjax:end', ujs.handleMount);\r\n    ujs.removeEvent('pjax:beforeReplace', ujs.handleUnmount);\r\n  },\r\n}\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./src/events/pjax.js?");

/***/ }),

/***/ "./src/events/turbolinks.js":
/*!**********************************!*\
  !*** ./src/events/turbolinks.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  // Turbolinks 5+ got rid of named events (?!)\r\n  setup: function(ujs) {\r\n  \tujs.handleEvent('turbolinks:load', ujs.handleMount);\r\n    ujs.handleEvent('turbolinks:render', ujs.handleMount);\r\n    // ujs.handleEvent('turbolinks:before-render', ujs.handleUnmount)\r\n  },\r\n\r\n  teardown: function(ujs) {\r\n  \tujs.removeEvent('turbolinks:load', ujs.handleMount);\r\n    ujs.removeEvent('turbolinks:render', ujs.handleMount);\r\n    // ujs.removeEvent('turbolinks:before-render', ujs.handleUnmount);\r\n  },\r\n}\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./src/events/turbolinks.js?");

/***/ }),

/***/ "./src/events/turbolinksClassic.js":
/*!*****************************************!*\
  !*** ./src/events/turbolinksClassic.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  // Attach handlers to Turbolinks-Classic events\r\n  // for mounting and unmounting components\r\n  setup: function(ujs) {\r\n    ujs.handleEvent(Turbolinks.EVENTS.CHANGE, ujs.handleMount);\r\n    ujs.handleEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, ujs.handleUnmount);\r\n  },\r\n  teardown: function(ujs) {\r\n    ujs.removeEvent(Turbolinks.EVENTS.CHANGE, ujs.handleMount);\r\n    ujs.removeEvent(Turbolinks.EVENTS.BEFORE_UNLOAD, ujs.handleUnmount);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./src/events/turbolinksClassic.js?");

/***/ }),

/***/ "./src/events/turbolinksClassicDeprecated.js":
/*!***************************************************!*\
  !*** ./src/events/turbolinksClassicDeprecated.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  // Before Turbolinks 2.4.0, Turbolinks didn't\r\n  // have named events and didn't have a before-unload event.\r\n  // Also, it didn't work with the Turbolinks cache, see\r\n  // https://github.com/reactjs/react-rails/issues/87\r\n  setup: function(ujs) {\r\n    Turbolinks.pagesCached(0)\r\n    ujs.handleEvent('page:change', ujs.handleMount);\r\n    ujs.handleEvent('page:receive', ujs.handleUnmount);\r\n  },\r\n  teardown: function(ujs) {\r\n    ujs.removeEvent('page:change', ujs.handleMount);\r\n    ujs.removeEvent('page:receive', ujs.handleUnmount);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./src/events/turbolinksClassicDeprecated.js?");

/***/ }),

/***/ "./src/getConstructor/fromGlobal.js":
/*!******************************************!*\
  !*** ./src/getConstructor/fromGlobal.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Assume className is simple and can be found at top-level (window).\r\n// Fallback to eval to handle cases like 'My.React.ComponentName'.\r\n// Also, try to gracefully import Babel 6 style default exports\r\nvar topLevel = typeof window === \"undefined\" ? this : window;\r\n\r\nmodule.exports = function(className) {\r\n  var constructor;\r\n  // Try to access the class globally first\r\n  constructor = topLevel[className];\r\n\r\n  // If that didn't work, try eval\r\n  if (!constructor) {\r\n    constructor = eval(className);\r\n  }\r\n\r\n  // Lastly, if there is a default attribute try that\r\n  if (constructor && constructor['default']) {\r\n    constructor = constructor['default'];\r\n  }\r\n\r\n  return constructor;\r\n}\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./src/getConstructor/fromGlobal.js?");

/***/ }),

/***/ "./src/getConstructor/fromRequireContext.js":
/*!**************************************************!*\
  !*** ./src/getConstructor/fromRequireContext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Load React components by requiring them from \"components/\", for example:\r\n//\r\n// - \"pages/index\" -> `require(\"components/pages/index\")`\r\n// - \"pages/show.Header\" -> `require(\"components/pages/show\").Header`\r\n// - \"pages/show.Body.Content\" -> `require(\"components/pages/show\").Body.Content`\r\n//\r\nmodule.exports = function(reqctx) {\r\n  return function(className) {\r\n    var parts = className.split(\".\")\r\n    var filename = parts.shift()\r\n    var keys = parts\r\n    // Load the module:\r\n    var component = reqctx(\"./\" + filename)\r\n    // Then access each key:\r\n    keys.forEach(function(k) {\r\n      component = component[k]\r\n    })\r\n    // support `export default`\r\n    if (component.__esModule) {\r\n      component = component[\"default\"]\r\n    }\r\n    return component\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./src/getConstructor/fromRequireContext.js?");

/***/ }),

/***/ "./src/getConstructor/fromRequireContextWithGlobalFallback.js":
/*!********************************************************************!*\
  !*** ./src/getConstructor/fromRequireContextWithGlobalFallback.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Make a function which:\r\n// - First tries to require the name\r\n// - Then falls back to global lookup\r\nvar fromGlobal = __webpack_require__(/*! ./fromGlobal */ \"./src/getConstructor/fromGlobal.js\")\r\nvar fromRequireContext = __webpack_require__(/*! ./fromRequireContext */ \"./src/getConstructor/fromRequireContext.js\")\r\n\r\nmodule.exports = function(reqctx) {\r\n  var fromCtx = fromRequireContext(reqctx)\r\n  return function(className) {\r\n    var component;\r\n    try {\r\n      // `require` will raise an error if this className isn't found:\r\n      component = fromCtx(className)\r\n    } catch (firstErr) {\r\n      // fallback to global:\r\n      try {\r\n        component = fromGlobal(className)\r\n      } catch (secondErr) {\r\n        console.error(firstErr)\r\n        console.error(secondErr)\r\n      }\r\n    }\r\n    return component\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ReactRailsUJS/./src/getConstructor/fromRequireContextWithGlobalFallback.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ReactRailsUJS/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://ReactRailsUJS/external_%7B%22root%22:%22ReactDOM%22,%22commonjs2%22:%22react-dom%22,%22commonjs%22:%22react-dom%22,%22amd%22:%22react-dom%22%7D?");

/***/ }),

/***/ "react-dom/server":
/*!********************************************************************************************************************************!*\
  !*** external {"root":"ReactDOMServer","commonjs2":"react-dom/server","commonjs":"react-dom/server","amd":"react-dom/server"} ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;\n\n//# sourceURL=webpack://ReactRailsUJS/external_%7B%22root%22:%22ReactDOMServer%22,%22commonjs2%22:%22react-dom/server%22,%22commonjs%22:%22react-dom/server%22,%22amd%22:%22react-dom/server%22%7D?");

/***/ })

/******/ });
});