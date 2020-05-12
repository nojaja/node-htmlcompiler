module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.babel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/cssom/build/CSSOM.js":
/*!********************************************!*\
  !*** ../node_modules/cssom/build/CSSOM.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(root) {
	'use strict';

	var exports;
	if ( true && typeof(module.exports) !== 'undefined') {
	    exports = module.exports;
	} else {
	    exports = {};
	    if (root.CSSOM) {
	        return;
	    }
			root.CSSOM = exports;
	}
	var CSSOM = exports;
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
 */
CSSOM.CSSStyleDeclaration = function CSSStyleDeclaration(){
	this.length = 0;
	this.parentRule = null;

	// NON-STANDARD
	this._importants = {};
};


CSSOM.CSSStyleDeclaration.prototype = {

	constructor: CSSOM.CSSStyleDeclaration,

	/**
	 *
	 * @param {string} name
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
	 * @return {string} the value of the property if it has been explicitly set for this declaration block.
	 * Returns the empty string if the property has not been set.
	 */
	getPropertyValue: function(name) {
		return this[name] || "";
	},

	/**
	 *
	 * @param {string} name
	 * @param {string} value
	 * @param {string} [priority=null] "important" or null
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
	 */
	setProperty: function(name, value, priority) {
		if (this[name]) {
			// Property already exist. Overwrite it.
			var index = Array.prototype.indexOf.call(this, name);
			if (index < 0) {
				this[this.length] = name;
				this.length++;
			}
		} else {
			// New property.
			this[this.length] = name;
			this.length++;
		}
		this[name] = value + "";
		this._importants[name] = priority;
	},

	/**
	 *
	 * @param {string} name
	 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
	 * @return {string} the value of the property if it has been explicitly set for this declaration block.
	 * Returns the empty string if the property has not been set or the property name does not correspond to a known CSS property.
	 */
	removeProperty: function(name) {
		if (!(name in this)) {
			return "";
		}
		var index = Array.prototype.indexOf.call(this, name);
		if (index < 0) {
			return "";
		}
		var prevValue = this[name];
		this[name] = "";

		// That's what WebKit and Opera do
		Array.prototype.splice.call(this, index, 1);

		// That's what Firefox does
		//this[index] = ""

		return prevValue;
	},

	getPropertyCSSValue: function() {
		//FIXME
	},

	/**
	 *
	 * @param {String} name
	 */
	getPropertyPriority: function(name) {
		return this._importants[name] || "";
	},


	/**
	 *   element.style.overflow = "auto"
	 *   element.style.getPropertyShorthand("overflow-x")
	 *   -> "overflow"
	 */
	getPropertyShorthand: function() {
		//FIXME
	},

	isPropertyImplicit: function() {
		//FIXME
	},

	// Doesn't work in IE < 9
	get cssText(){
		var properties = [];
		for (var i=0, length=this.length; i < length; ++i) {
			var name = this[i];
			var value = this.getPropertyValue(name);
			var priority = this.getPropertyPriority(name);
			if (priority) {
				priority = " !" + priority;
			}
			properties[i] = name + ": " + value + priority + ";";
		}
		return properties.join(" ");
	},

	set cssText(text){
		var i, name;
		for (i = this.length; i--;) {
			name = this[i];
			this[name] = "";
		}
		Array.prototype.splice.call(this, 0, this.length);
		this._importants = {};

		var dummyRule = CSSOM.parse('#bogus{' + text + '}').cssRules[0].style;
		var length = dummyRule.length;
		for (i = 0; i < length; ++i) {
			name = dummyRule[i];
			this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
		}
	}
};

//.CommonJS
exports.CSSStyleDeclaration = CSSOM.CSSStyleDeclaration;
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-cssrule-interface
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule
 */
CSSOM.CSSRule = function CSSRule() {
	this.parentRule = null;
	this.parentStyleSheet = null;
};

CSSOM.CSSRule.UNKNOWN_RULE = 0;                 // obsolete
CSSOM.CSSRule.STYLE_RULE = 1;
CSSOM.CSSRule.CHARSET_RULE = 2;                 // obsolete
CSSOM.CSSRule.IMPORT_RULE = 3;
CSSOM.CSSRule.MEDIA_RULE = 4;
CSSOM.CSSRule.FONT_FACE_RULE = 5;
CSSOM.CSSRule.PAGE_RULE = 6;
CSSOM.CSSRule.KEYFRAMES_RULE = 7;
CSSOM.CSSRule.KEYFRAME_RULE = 8;
CSSOM.CSSRule.MARGIN_RULE = 9;
CSSOM.CSSRule.NAMESPACE_RULE = 10;
CSSOM.CSSRule.COUNTER_STYLE_RULE = 11;
CSSOM.CSSRule.SUPPORTS_RULE = 12;
CSSOM.CSSRule.DOCUMENT_RULE = 13;
CSSOM.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
CSSOM.CSSRule.VIEWPORT_RULE = 15;
CSSOM.CSSRule.REGION_STYLE_RULE = 16;


CSSOM.CSSRule.prototype = {
	constructor: CSSOM.CSSRule
	//FIXME
};


//.CommonJS
exports.CSSRule = CSSOM.CSSRule;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssstylerule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule
 */
CSSOM.CSSStyleRule = function CSSStyleRule() {
	CSSOM.CSSRule.call(this);
	this.selectorText = "";
	this.style = new CSSOM.CSSStyleDeclaration();
	this.style.parentRule = this;
};

CSSOM.CSSStyleRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;
CSSOM.CSSStyleRule.prototype.type = 1;

Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
	get: function() {
		var text;
		if (this.selectorText) {
			text = this.selectorText + " {" + this.style.cssText + "}";
		} else {
			text = "";
		}
		return text;
	},
	set: function(cssText) {
		var rule = CSSOM.CSSStyleRule.parse(cssText);
		this.style = rule.style;
		this.selectorText = rule.selectorText;
	}
});


/**
 * NON-STANDARD
 * lightweight version of parse.js.
 * @param {string} ruleText
 * @return CSSStyleRule
 */
CSSOM.CSSStyleRule.parse = function(ruleText) {
	var i = 0;
	var state = "selector";
	var index;
	var j = i;
	var buffer = "";

	var SIGNIFICANT_WHITESPACE = {
		"selector": true,
		"value": true
	};

	var styleRule = new CSSOM.CSSStyleRule();
	var name, priority="";

	for (var character; (character = ruleText.charAt(i)); i++) {

		switch (character) {

		case " ":
		case "\t":
		case "\r":
		case "\n":
		case "\f":
			if (SIGNIFICANT_WHITESPACE[state]) {
				// Squash 2 or more white-spaces in the row into 1
				switch (ruleText.charAt(i - 1)) {
					case " ":
					case "\t":
					case "\r":
					case "\n":
					case "\f":
						break;
					default:
						buffer += " ";
						break;
				}
			}
			break;

		// String
		case '"':
			j = i + 1;
			index = ruleText.indexOf('"', j) + 1;
			if (!index) {
				throw '" is missing';
			}
			buffer += ruleText.slice(i, index);
			i = index - 1;
			break;

		case "'":
			j = i + 1;
			index = ruleText.indexOf("'", j) + 1;
			if (!index) {
				throw "' is missing";
			}
			buffer += ruleText.slice(i, index);
			i = index - 1;
			break;

		// Comment
		case "/":
			if (ruleText.charAt(i + 1) === "*") {
				i += 2;
				index = ruleText.indexOf("*/", i);
				if (index === -1) {
					throw new SyntaxError("Missing */");
				} else {
					i = index + 1;
				}
			} else {
				buffer += character;
			}
			break;

		case "{":
			if (state === "selector") {
				styleRule.selectorText = buffer.trim();
				buffer = "";
				state = "name";
			}
			break;

		case ":":
			if (state === "name") {
				name = buffer.trim();
				buffer = "";
				state = "value";
			} else {
				buffer += character;
			}
			break;

		case "!":
			if (state === "value" && ruleText.indexOf("!important", i) === i) {
				priority = "important";
				i += "important".length;
			} else {
				buffer += character;
			}
			break;

		case ";":
			if (state === "value") {
				styleRule.style.setProperty(name, buffer.trim(), priority);
				priority = "";
				buffer = "";
				state = "name";
			} else {
				buffer += character;
			}
			break;

		case "}":
			if (state === "value") {
				styleRule.style.setProperty(name, buffer.trim(), priority);
				priority = "";
				buffer = "";
			} else if (state === "name") {
				break;
			} else {
				buffer += character;
			}
			state = "selector";
			break;

		default:
			buffer += character;
			break;

		}
	}

	return styleRule;

};


//.CommonJS
exports.CSSStyleRule = CSSOM.CSSStyleRule;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-medialist-interface
 */
CSSOM.MediaList = function MediaList(){
	this.length = 0;
};

CSSOM.MediaList.prototype = {

	constructor: CSSOM.MediaList,

	/**
	 * @return {string}
	 */
	get mediaText() {
		return Array.prototype.join.call(this, ", ");
	},

	/**
	 * @param {string} value
	 */
	set mediaText(value) {
		var values = value.split(",");
		var length = this.length = values.length;
		for (var i=0; i<length; i++) {
			this[i] = values[i].trim();
		}
	},

	/**
	 * @param {string} medium
	 */
	appendMedium: function(medium) {
		if (Array.prototype.indexOf.call(this, medium) === -1) {
			this[this.length] = medium;
			this.length++;
		}
	},

	/**
	 * @param {string} medium
	 */
	deleteMedium: function(medium) {
		var index = Array.prototype.indexOf.call(this, medium);
		if (index !== -1) {
			Array.prototype.splice.call(this, index, 1);
		}
	}

};


//.CommonJS
exports.MediaList = CSSOM.MediaList;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssmediarule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule
 */
CSSOM.CSSMediaRule = function CSSMediaRule() {
	CSSOM.CSSRule.call(this);
	this.media = new CSSOM.MediaList();
	this.cssRules = [];
};

CSSOM.CSSMediaRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSMediaRule.prototype.constructor = CSSOM.CSSMediaRule;
CSSOM.CSSMediaRule.prototype.type = 4;
//FIXME
//CSSOM.CSSMediaRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSMediaRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

// http://opensource.apple.com/source/WebCore/WebCore-658.28/css/CSSMediaRule.cpp
Object.defineProperty(CSSOM.CSSMediaRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];
    for (var i=0, length=this.cssRules.length; i < length; i++) {
      cssTexts.push(this.cssRules[i].cssText);
    }
    return "@media " + this.media.mediaText + " {" + cssTexts.join("") + "}";
  }
});


//.CommonJS
exports.CSSMediaRule = CSSOM.CSSMediaRule;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#cssimportrule
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule
 */
CSSOM.CSSImportRule = function CSSImportRule() {
	CSSOM.CSSRule.call(this);
	this.href = "";
	this.media = new CSSOM.MediaList();
	this.styleSheet = new CSSOM.CSSStyleSheet();
};

CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
CSSOM.CSSImportRule.prototype.type = 3;

Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
  get: function() {
    var mediaText = this.media.mediaText;
    return "@import url(" + this.href + ")" + (mediaText ? " " + mediaText : "") + ";";
  },
  set: function(cssText) {
    var i = 0;

    /**
     * @import url(partial.css) screen, handheld;
     *        ||               |
     *        after-import     media
     *         |
     *         url
     */
    var state = '';

    var buffer = '';
    var index;
    for (var character; (character = cssText.charAt(i)); i++) {

      switch (character) {
        case ' ':
        case '\t':
        case '\r':
        case '\n':
        case '\f':
          if (state === 'after-import') {
            state = 'url';
          } else {
            buffer += character;
          }
          break;

        case '@':
          if (!state && cssText.indexOf('@import', i) === i) {
            state = 'after-import';
            i += 'import'.length;
            buffer = '';
          }
          break;

        case 'u':
          if (state === 'url' && cssText.indexOf('url(', i) === i) {
            index = cssText.indexOf(')', i + 1);
            if (index === -1) {
              throw i + ': ")" not found';
            }
            i += 'url('.length;
            var url = cssText.slice(i, index);
            if (url[0] === url[url.length - 1]) {
              if (url[0] === '"' || url[0] === "'") {
                url = url.slice(1, -1);
              }
            }
            this.href = url;
            i = index;
            state = 'media';
          }
          break;

        case '"':
          if (state === 'url') {
            index = cssText.indexOf('"', i + 1);
            if (!index) {
              throw i + ": '\"' not found";
            }
            this.href = cssText.slice(i + 1, index);
            i = index;
            state = 'media';
          }
          break;

        case "'":
          if (state === 'url') {
            index = cssText.indexOf("'", i + 1);
            if (!index) {
              throw i + ': "\'" not found';
            }
            this.href = cssText.slice(i + 1, index);
            i = index;
            state = 'media';
          }
          break;

        case ';':
          if (state === 'media') {
            if (buffer) {
              this.media.mediaText = buffer.trim();
            }
          }
          break;

        default:
          if (state === 'media') {
            buffer += character;
          }
          break;
      }
    }
  }
});


//.CommonJS
exports.CSSImportRule = CSSOM.CSSImportRule;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#css-font-face-rule
 */
CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
	CSSOM.CSSRule.call(this);
	this.style = new CSSOM.CSSStyleDeclaration();
	this.style.parentRule = this;
};

CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
CSSOM.CSSFontFaceRule.prototype.type = 5;
//FIXME
//CSSOM.CSSFontFaceRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSFontFaceRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSFontFaceRule.cpp
Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", {
  get: function() {
    return "@font-face {" + this.style.cssText + "}";
  }
});


//.CommonJS
exports.CSSFontFaceRule = CSSOM.CSSFontFaceRule;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/shadow-dom/#host-at-rule
 */
CSSOM.CSSHostRule = function CSSHostRule() {
	CSSOM.CSSRule.call(this);
	this.cssRules = [];
};

CSSOM.CSSHostRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSHostRule.prototype.constructor = CSSOM.CSSHostRule;
CSSOM.CSSHostRule.prototype.type = 1001;
//FIXME
//CSSOM.CSSHostRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSHostRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSHostRule.prototype, "cssText", {
	get: function() {
		var cssTexts = [];
		for (var i=0, length=this.cssRules.length; i < length; i++) {
			cssTexts.push(this.cssRules[i].cssText);
		}
		return "@host {" + cssTexts.join("") + "}";
	}
});


//.CommonJS
exports.CSSHostRule = CSSOM.CSSHostRule;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://dev.w3.org/csswg/cssom/#the-stylesheet-interface
 */
CSSOM.StyleSheet = function StyleSheet() {
	this.parentStyleSheet = null;
};


//.CommonJS
exports.StyleSheet = CSSOM.StyleSheet;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet
 */
CSSOM.CSSStyleSheet = function CSSStyleSheet() {
	CSSOM.StyleSheet.call(this);
	this.cssRules = [];
};


CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;


/**
 * Used to insert a new rule into the style sheet. The new rule now becomes part of the cascade.
 *
 *   sheet = new Sheet("body {margin: 0}")
 *   sheet.toString()
 *   -> "body{margin:0;}"
 *   sheet.insertRule("img {border: none}", 0)
 *   -> 0
 *   sheet.toString()
 *   -> "img{border:none;}body{margin:0;}"
 *
 * @param {string} rule
 * @param {number} index
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-insertRule
 * @return {number} The index within the style sheet's rule collection of the newly inserted rule.
 */
CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
	if (index < 0 || index > this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR");
	}
	var cssRule = CSSOM.parse(rule).cssRules[0];
	cssRule.parentStyleSheet = this;
	this.cssRules.splice(index, 0, cssRule);
	return index;
};


/**
 * Used to delete a rule from the style sheet.
 *
 *   sheet = new Sheet("img{border:none} body{margin:0}")
 *   sheet.toString()
 *   -> "img{border:none;}body{margin:0;}"
 *   sheet.deleteRule(0)
 *   sheet.toString()
 *   -> "body{margin:0;}"
 *
 * @param {number} index within the style sheet's rule list of the rule to remove.
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-deleteRule
 */
CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
	if (index < 0 || index >= this.cssRules.length) {
		throw new RangeError("INDEX_SIZE_ERR");
	}
	this.cssRules.splice(index, 1);
};


/**
 * NON-STANDARD
 * @return {string} serialize stylesheet
 */
CSSOM.CSSStyleSheet.prototype.toString = function() {
	var result = "";
	var rules = this.cssRules;
	for (var i=0; i<rules.length; i++) {
		result += rules[i].cssText + "\n";
	}
	return result;
};


//.CommonJS
exports.CSSStyleSheet = CSSOM.CSSStyleSheet;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframesRule
 */
CSSOM.CSSKeyframesRule = function CSSKeyframesRule() {
	CSSOM.CSSRule.call(this);
	this.name = '';
	this.cssRules = [];
};

CSSOM.CSSKeyframesRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSKeyframesRule.prototype.constructor = CSSOM.CSSKeyframesRule;
CSSOM.CSSKeyframesRule.prototype.type = 8;
//FIXME
//CSSOM.CSSKeyframesRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSKeyframesRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframesRule.cpp
Object.defineProperty(CSSOM.CSSKeyframesRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];
    for (var i=0, length=this.cssRules.length; i < length; i++) {
      cssTexts.push("  " + this.cssRules[i].cssText);
    }
    return "@" + (this._vendorPrefix || '') + "keyframes " + this.name + " { \n" + cssTexts.join("\n") + "\n}";
  }
});


//.CommonJS
exports.CSSKeyframesRule = CSSOM.CSSKeyframesRule;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframeRule
 */
CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
	CSSOM.CSSRule.call(this);
	this.keyText = '';
	this.style = new CSSOM.CSSStyleDeclaration();
	this.style.parentRule = this;
};

CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
CSSOM.CSSKeyframeRule.prototype.type = 9;
//FIXME
//CSSOM.CSSKeyframeRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSKeyframeRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

// http://www.opensource.apple.com/source/WebCore/WebCore-955.66.1/css/WebKitCSSKeyframeRule.cpp
Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", {
  get: function() {
    return this.keyText + " {" + this.style.cssText + "} ";
  }
});


//.CommonJS
exports.CSSKeyframeRule = CSSOM.CSSKeyframeRule;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see https://developer.mozilla.org/en/CSS/@-moz-document
 */
CSSOM.MatcherList = function MatcherList(){
    this.length = 0;
};

CSSOM.MatcherList.prototype = {

    constructor: CSSOM.MatcherList,

    /**
     * @return {string}
     */
    get matcherText() {
        return Array.prototype.join.call(this, ", ");
    },

    /**
     * @param {string} value
     */
    set matcherText(value) {
        // just a temporary solution, actually it may be wrong by just split the value with ',', because a url can include ','.
        var values = value.split(",");
        var length = this.length = values.length;
        for (var i=0; i<length; i++) {
            this[i] = values[i].trim();
        }
    },

    /**
     * @param {string} matcher
     */
    appendMatcher: function(matcher) {
        if (Array.prototype.indexOf.call(this, matcher) === -1) {
            this[this.length] = matcher;
            this.length++;
        }
    },

    /**
     * @param {string} matcher
     */
    deleteMatcher: function(matcher) {
        var index = Array.prototype.indexOf.call(this, matcher);
        if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
        }
    }

};


//.CommonJS
exports.MatcherList = CSSOM.MatcherList;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see https://developer.mozilla.org/en/CSS/@-moz-document
 */
CSSOM.CSSDocumentRule = function CSSDocumentRule() {
    CSSOM.CSSRule.call(this);
    this.matcher = new CSSOM.MatcherList();
    this.cssRules = [];
};

CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
CSSOM.CSSDocumentRule.prototype.type = 10;
//FIXME
//CSSOM.CSSDocumentRule.prototype.insertRule = CSSStyleSheet.prototype.insertRule;
//CSSOM.CSSDocumentRule.prototype.deleteRule = CSSStyleSheet.prototype.deleteRule;

Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", {
  get: function() {
    var cssTexts = [];
    for (var i=0, length=this.cssRules.length; i < length; i++) {
        cssTexts.push(this.cssRules[i].cssText);
    }
    return "@-moz-document " + this.matcher.matcherText + " {" + cssTexts.join("") + "}";
  }
});


//.CommonJS
exports.CSSDocumentRule = CSSOM.CSSDocumentRule;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
 *
 * TODO: add if needed
 */
CSSOM.CSSValue = function CSSValue() {
};

CSSOM.CSSValue.prototype = {
	constructor: CSSOM.CSSValue,

	// @see: http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
	set cssText(text) {
		var name = this._getConstructorName();

		throw new Error('DOMException: property "cssText" of "' + name + '" is readonly and can not be replaced with "' + text + '"!');
	},

	get cssText() {
		var name = this._getConstructorName();

		throw new Error('getter "cssText" of "' + name + '" is not implemented!');
	},

	_getConstructorName: function() {
		var s = this.constructor.toString(),
				c = s.match(/function\s([^\(]+)/),
				name = c[1];

		return name;
	}
};


//.CommonJS
exports.CSSValue = CSSOM.CSSValue;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @constructor
 * @see http://msdn.microsoft.com/en-us/library/ms537634(v=vs.85).aspx
 *
 */
CSSOM.CSSValueExpression = function CSSValueExpression(token, idx) {
	this._token = token;
	this._idx = idx;
};

CSSOM.CSSValueExpression.prototype = new CSSOM.CSSValue();
CSSOM.CSSValueExpression.prototype.constructor = CSSOM.CSSValueExpression;

/**
 * parse css expression() value
 *
 * @return {Object}
 *         - error:
 *         or
 *         - idx:
 *         - expression:
 *
 * Example:
 *
 * .selector {
 *		zoom: expression(documentElement.clientWidth > 1000 ? '1000px' : 'auto');
 * }
 */
CSSOM.CSSValueExpression.prototype.parse = function() {
	var token = this._token,
			idx = this._idx;

	var character = '',
			expression = '',
			error = '',
			info,
			paren = [];


	for (; ; ++idx) {
		character = token.charAt(idx);

		// end of token
		if (character === '') {
			error = 'css expression error: unfinished expression!';
			break;
		}

		switch(character) {
			case '(':
				paren.push(character);
				expression += character;
				break;

			case ')':
				paren.pop(character);
				expression += character;
				break;

			case '/':
				if ((info = this._parseJSComment(token, idx))) { // comment?
					if (info.error) {
						error = 'css expression error: unfinished comment in expression!';
					} else {
						idx = info.idx;
						// ignore the comment
					}
				} else if ((info = this._parseJSRexExp(token, idx))) { // regexp
					idx = info.idx;
					expression += info.text;
				} else { // other
					expression += character;
				}
				break;

			case "'":
			case '"':
				info = this._parseJSString(token, idx, character);
				if (info) { // string
					idx = info.idx;
					expression += info.text;
				} else {
					expression += character;
				}
				break;

			default:
				expression += character;
				break;
		}

		if (error) {
			break;
		}

		// end of expression
		if (paren.length === 0) {
			break;
		}
	}

	var ret;
	if (error) {
		ret = {
			error: error
		};
	} else {
		ret = {
			idx: idx,
			expression: expression
		};
	}

	return ret;
};


/**
 *
 * @return {Object|false}
 *          - idx:
 *          - text:
 *          or
 *          - error:
 *          or
 *          false
 *
 */
CSSOM.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
	var nextChar = token.charAt(idx + 1),
			text;

	if (nextChar === '/' || nextChar === '*') {
		var startIdx = idx,
				endIdx,
				commentEndChar;

		if (nextChar === '/') { // line comment
			commentEndChar = '\n';
		} else if (nextChar === '*') { // block comment
			commentEndChar = '*/';
		}

		endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
		if (endIdx !== -1) {
			endIdx = endIdx + commentEndChar.length - 1;
			text = token.substring(idx, endIdx + 1);
			return {
				idx: endIdx,
				text: text
			};
		} else {
			var error = 'css expression error: unfinished comment in expression!';
			return {
				error: error
			};
		}
	} else {
		return false;
	}
};


/**
 *
 * @return {Object|false}
 *					- idx:
 *					- text:
 *					or
 *					false
 *
 */
CSSOM.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
	var endIdx = this._findMatchedIdx(token, idx, sep),
			text;

	if (endIdx === -1) {
		return false;
	} else {
		text = token.substring(idx, endIdx + sep.length);

		return {
			idx: endIdx,
			text: text
		};
	}
};


/**
 * parse regexp in css expression
 *
 * @return {Object|false}
 *				- idx:
 *				- regExp:
 *				or
 *				false
 */

/*

all legal RegExp

/a/
(/a/)
[/a/]
[12, /a/]

!/a/

+/a/
-/a/
* /a/
/ /a/
%/a/

===/a/
!==/a/
==/a/
!=/a/
>/a/
>=/a/
</a/
<=/a/

&/a/
|/a/
^/a/
~/a/
<</a/
>>/a/
>>>/a/

&&/a/
||/a/
?/a/
=/a/
,/a/

		delete /a/
				in /a/
instanceof /a/
				new /a/
		typeof /a/
			void /a/

*/
CSSOM.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
	var before = token.substring(0, idx).replace(/\s+$/, ""),
			legalRegx = [
				/^$/,
				/\($/,
				/\[$/,
				/\!$/,
				/\+$/,
				/\-$/,
				/\*$/,
				/\/\s+/,
				/\%$/,
				/\=$/,
				/\>$/,
				/<$/,
				/\&$/,
				/\|$/,
				/\^$/,
				/\~$/,
				/\?$/,
				/\,$/,
				/delete$/,
				/in$/,
				/instanceof$/,
				/new$/,
				/typeof$/,
				/void$/
			];

	var isLegal = legalRegx.some(function(reg) {
		return reg.test(before);
	});

	if (!isLegal) {
		return false;
	} else {
		var sep = '/';

		// same logic as string
		return this._parseJSString(token, idx, sep);
	}
};


/**
 *
 * find next sep(same line) index in `token`
 *
 * @return {Number}
 *
 */
CSSOM.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
	var startIdx = idx,
			endIdx;

	var NOT_FOUND = -1;

	while(true) {
		endIdx = token.indexOf(sep, startIdx + 1);

		if (endIdx === -1) { // not found
			endIdx = NOT_FOUND;
			break;
		} else {
			var text = token.substring(idx + 1, endIdx),
					matched = text.match(/\\+$/);
			if (!matched || matched[0] % 2 === 0) { // not escaped
				break;
			} else {
				startIdx = endIdx;
			}
		}
	}

	// boundary must be in the same line(js sting or regexp)
	var nextNewLineIdx = token.indexOf('\n', idx + 1);
	if (nextNewLineIdx < endIdx) {
		endIdx = NOT_FOUND;
	}


	return endIdx;
};




//.CommonJS
exports.CSSValueExpression = CSSOM.CSSValueExpression;
///CommonJS
//.CommonJS
var CSSOM = CSSOM||{};
///CommonJS


/**
 * @param {string} token
 */
CSSOM.parse = function parse(token) {

	var i = 0;

	/**
		"before-selector" or
		"selector" or
		"atRule" or
		"atBlock" or
		"before-name" or
		"name" or
		"before-value" or
		"value"
	*/
	var state = "before-selector";

	var index;
	var buffer = "";
	var valueParenthesisDepth = 0;

	var SIGNIFICANT_WHITESPACE = {
		"selector": true,
		"value": true,
		"value-parenthesis": true,
		"atRule": true,
		"importRule-begin": true,
		"importRule": true,
		"atBlock": true,
		'documentRule-begin': true
	};

	var styleSheet = new CSSOM.CSSStyleSheet();

	// @type CSSStyleSheet|CSSMediaRule|CSSFontFaceRule|CSSKeyframesRule|CSSDocumentRule
	var currentScope = styleSheet;

	// @type CSSMediaRule|CSSKeyframesRule|CSSDocumentRule
	var parentRule;

	var name, priority="", styleRule, mediaRule, importRule, fontFaceRule, keyframesRule, documentRule, hostRule;

	var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g;

	var parseError = function(message) {
		var lines = token.substring(0, i).split('\n');
		var lineCount = lines.length;
		var charCount = lines.pop().length + 1;
		var error = new Error(message + ' (line ' + lineCount + ', char ' + charCount + ')');
		error.line = lineCount;
		/* jshint sub : true */
		error['char'] = charCount;
		error.styleSheet = styleSheet;
		throw error;
	};

	for (var character; (character = token.charAt(i)); i++) {

		switch (character) {

		case " ":
		case "\t":
		case "\r":
		case "\n":
		case "\f":
			if (SIGNIFICANT_WHITESPACE[state]) {
				buffer += character;
			}
			break;

		// String
		case '"':
			index = i + 1;
			do {
				index = token.indexOf('"', index) + 1;
				if (!index) {
					parseError('Unmatched "');
				}
			} while (token[index - 2] === '\\');
			buffer += token.slice(i, index);
			i = index - 1;
			switch (state) {
				case 'before-value':
					state = 'value';
					break;
				case 'importRule-begin':
					state = 'importRule';
					break;
			}
			break;

		case "'":
			index = i + 1;
			do {
				index = token.indexOf("'", index) + 1;
				if (!index) {
					parseError("Unmatched '");
				}
			} while (token[index - 2] === '\\');
			buffer += token.slice(i, index);
			i = index - 1;
			switch (state) {
				case 'before-value':
					state = 'value';
					break;
				case 'importRule-begin':
					state = 'importRule';
					break;
			}
			break;

		// Comment
		case "/":
			if (token.charAt(i + 1) === "*") {
				i += 2;
				index = token.indexOf("*/", i);
				if (index === -1) {
					parseError("Missing */");
				} else {
					i = index + 1;
				}
			} else {
				buffer += character;
			}
			if (state === "importRule-begin") {
				buffer += " ";
				state = "importRule";
			}
			break;

		// At-rule
		case "@":
			if (token.indexOf("@-moz-document", i) === i) {
				state = "documentRule-begin";
				documentRule = new CSSOM.CSSDocumentRule();
				documentRule.__starts = i;
				i += "-moz-document".length;
				buffer = "";
				break;
			} else if (token.indexOf("@media", i) === i) {
				state = "atBlock";
				mediaRule = new CSSOM.CSSMediaRule();
				mediaRule.__starts = i;
				i += "media".length;
				buffer = "";
				break;
			} else if (token.indexOf("@host", i) === i) {
				state = "hostRule-begin";
				i += "host".length;
				hostRule = new CSSOM.CSSHostRule();
				hostRule.__starts = i;
				buffer = "";
				break;
			} else if (token.indexOf("@import", i) === i) {
				state = "importRule-begin";
				i += "import".length;
				buffer += "@import";
				break;
			} else if (token.indexOf("@font-face", i) === i) {
				state = "fontFaceRule-begin";
				i += "font-face".length;
				fontFaceRule = new CSSOM.CSSFontFaceRule();
				fontFaceRule.__starts = i;
				buffer = "";
				break;
			} else {
				atKeyframesRegExp.lastIndex = i;
				var matchKeyframes = atKeyframesRegExp.exec(token);
				if (matchKeyframes && matchKeyframes.index === i) {
					state = "keyframesRule-begin";
					keyframesRule = new CSSOM.CSSKeyframesRule();
					keyframesRule.__starts = i;
					keyframesRule._vendorPrefix = matchKeyframes[1]; // Will come out as undefined if no prefix was found
					i += matchKeyframes[0].length - 1;
					buffer = "";
					break;
				} else if (state === "selector") {
					state = "atRule";
				}
			}
			buffer += character;
			break;

		case "{":
			if (state === "selector" || state === "atRule") {
				styleRule.selectorText = buffer.trim();
				styleRule.style.__starts = i;
				buffer = "";
				state = "before-name";
			} else if (state === "atBlock") {
				mediaRule.media.mediaText = buffer.trim();
				currentScope = parentRule = mediaRule;
				mediaRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "hostRule-begin") {
				currentScope = parentRule = hostRule;
				hostRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			} else if (state === "fontFaceRule-begin") {
				if (parentRule) {
					fontFaceRule.parentRule = parentRule;
				}
				fontFaceRule.parentStyleSheet = styleSheet;
				styleRule = fontFaceRule;
				buffer = "";
				state = "before-name";
			} else if (state === "keyframesRule-begin") {
				keyframesRule.name = buffer.trim();
				if (parentRule) {
					keyframesRule.parentRule = parentRule;
				}
				keyframesRule.parentStyleSheet = styleSheet;
				currentScope = parentRule = keyframesRule;
				buffer = "";
				state = "keyframeRule-begin";
			} else if (state === "keyframeRule-begin") {
				styleRule = new CSSOM.CSSKeyframeRule();
				styleRule.keyText = buffer.trim();
				styleRule.__starts = i;
				buffer = "";
				state = "before-name";
			} else if (state === "documentRule-begin") {
				// FIXME: what if this '{' is in the url text of the match function?
				documentRule.matcher.matcherText = buffer.trim();
				if (parentRule) {
					documentRule.parentRule = parentRule;
				}
				currentScope = parentRule = documentRule;
				documentRule.parentStyleSheet = styleSheet;
				buffer = "";
				state = "before-selector";
			}
			break;

		case ":":
			if (state === "name") {
				name = buffer.trim();
				buffer = "";
				state = "before-value";
			} else {
				buffer += character;
			}
			break;

		case "(":
			if (state === 'value') {
				// ie css expression mode
				if (buffer.trim() === 'expression') {
					var info = (new CSSOM.CSSValueExpression(token, i)).parse();

					if (info.error) {
						parseError(info.error);
					} else {
						buffer += info.expression;
						i = info.idx;
					}
				} else {
					state = 'value-parenthesis';
					//always ensure this is reset to 1 on transition
					//from value to value-parenthesis
					valueParenthesisDepth = 1;
					buffer += character;
				}
			} else if (state === 'value-parenthesis') {
				valueParenthesisDepth++;
				buffer += character;
			} else {
				buffer += character;
			}
			break;

		case ")":
			if (state === 'value-parenthesis') {
				valueParenthesisDepth--;
				if (valueParenthesisDepth === 0) state = 'value';
			}
			buffer += character;
			break;

		case "!":
			if (state === "value" && token.indexOf("!important", i) === i) {
				priority = "important";
				i += "important".length;
			} else {
				buffer += character;
			}
			break;

		case ";":
			switch (state) {
				case "value":
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					buffer = "";
					state = "before-name";
					break;
				case "atRule":
					buffer = "";
					state = "before-selector";
					break;
				case "importRule":
					importRule = new CSSOM.CSSImportRule();
					importRule.parentStyleSheet = importRule.styleSheet.parentStyleSheet = styleSheet;
					importRule.cssText = buffer + character;
					styleSheet.cssRules.push(importRule);
					buffer = "";
					state = "before-selector";
					break;
				default:
					buffer += character;
					break;
			}
			break;

		case "}":
			switch (state) {
				case "value":
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					/* falls through */
				case "before-name":
				case "name":
					styleRule.__ends = i + 1;
					if (parentRule) {
						styleRule.parentRule = parentRule;
					}
					styleRule.parentStyleSheet = styleSheet;
					currentScope.cssRules.push(styleRule);
					buffer = "";
					if (currentScope.constructor === CSSOM.CSSKeyframesRule) {
						state = "keyframeRule-begin";
					} else {
						state = "before-selector";
					}
					break;
				case "keyframeRule-begin":
				case "before-selector":
				case "selector":
					// End of media/document rule.
					if (!parentRule) {
						parseError("Unexpected }");
					}
					currentScope.__ends = i + 1;
					// Nesting rules aren't supported yet
					styleSheet.cssRules.push(currentScope);
					currentScope = styleSheet;
					parentRule = null;
					buffer = "";
					state = "before-selector";
					break;
			}
			break;

		default:
			switch (state) {
				case "before-selector":
					state = "selector";
					styleRule = new CSSOM.CSSStyleRule();
					styleRule.__starts = i;
					break;
				case "before-name":
					state = "name";
					break;
				case "before-value":
					state = "value";
					break;
				case "importRule-begin":
					state = "importRule";
					break;
			}
			buffer += character;
			break;
		}
	}

	return styleSheet;
};


//.CommonJS
exports.parse = CSSOM.parse;
// The following modules cannot be included sooner due to the mutual dependency with parse.js
///CommonJS
/**
 * Produces a deep copy of stylesheet — the instance variables of stylesheet are copied recursively.
 * @param {CSSStyleSheet|CSSOM.CSSStyleSheet} stylesheet
 * @nosideeffects
 * @return {CSSOM.CSSStyleSheet}
 */
CSSOM.clone = function clone(stylesheet) {

	var cloned = new CSSOM.CSSStyleSheet();

	var rules = stylesheet.cssRules;
	if (!rules) {
		return cloned;
	}

	var RULE_TYPES = {
		1: CSSOM.CSSStyleRule,
		4: CSSOM.CSSMediaRule,
		//3: CSSOM.CSSImportRule,
		//5: CSSOM.CSSFontFaceRule,
		//6: CSSOM.CSSPageRule,
		8: CSSOM.CSSKeyframesRule,
		9: CSSOM.CSSKeyframeRule
	};

	for (var i=0, rulesLength=rules.length; i < rulesLength; i++) {
		var rule = rules[i];
		var ruleClone = cloned.cssRules[i] = new RULE_TYPES[rule.type]();

		var style = rule.style;
		if (style) {
			var styleClone = ruleClone.style = new CSSOM.CSSStyleDeclaration();
			for (var j=0, styleLength=style.length; j < styleLength; j++) {
				var name = styleClone[j] = style[j];
				styleClone[name] = style[name];
				styleClone._importants[name] = style.getPropertyPriority(name);
			}
			styleClone.length = style.length;
		}

		if (rule.hasOwnProperty('keyText')) {
			ruleClone.keyText = rule.keyText;
		}

		if (rule.hasOwnProperty('selectorText')) {
			ruleClone.selectorText = rule.selectorText;
		}

		if (rule.hasOwnProperty('mediaText')) {
			ruleClone.mediaText = rule.mediaText;
		}

		if (rule.hasOwnProperty('cssRules')) {
			ruleClone.cssRules = clone(rule).cssRules;
		}
	}

	return cloned;

};

//.CommonJS
exports.clone = CSSOM.clone;
///CommonJS
})(this);


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./Builder.babel.js":
/*!**************************!*\
  !*** ./Builder.babel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Builder; });
/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */

/*------------------------------------------------
Builderのベースクラス
------------------------------------------------*/
  class Builder {

    /**コンストラクタ**/
    constructor(options) {
      var self = this;
      this._options = options;//生成オプション
      this.nodes = [];//生成物格納フィールド
      this.attributeDelimiter =" ";//各ノード間の区切り文字
    }
    getNodes(arg) {
      return this.nodes.join(arg || '\n');
    }
    addNode(node) {
      this.nodes.push(node);
    }
    /**
       getResult
       生成結果返却メソッド
       生成結果をラップするなどの可能が必要な場合はココに記載記載する
     **/
    getResult(arg) {
      return(`${this.getNodes()}`);
    }

    /**
       beforeCreateAttribute
       属性ノードで各Builderを呼び出す前に1回だけ実行されます。
       特定の属性を書き換えるといったケースで利用してください

    **/
    beforeCreateAttribute(attributes) {}

    /**
       createAttribute_text
       属性ノードで呼ばれます
       key:属性名
       attribute:ノード

    **/
    createAttribute_text(key, attribute) {}

    //createAttribute_keyonly(key){}
    createAttribute(key, attributes){}

    /**
       createAttribute_script
       Scriptタイプの属性ノードで呼ばれます
       attributeがScriptタイプの場合に呼び出されます
       key:属性名
       attribute:ノード

    **/
    createAttribute_script(key, attribute) {}

    beforeCreateTagElement(src, isContainer,state) {}

    /**
       createTagElement_open
       タグ開始のノードで呼ばれます
       src:{name:タグ名、attributes：ノードに含まれる属性（MAP）}
       attributes:ノードに含まれる属性が入ってます
       isContainer:子要素を含む場合はtrueになります。
       state:{depth:インデント数}

    **/
    createTagElement_open(src, attributes, isContainer,state) {}

    /**
       createTagElement_close
       タグ終了のノードで呼ばれます
       src:{name:タグ名}
       state:{depth:インデント数}

    **/
    createTagElement_close(src,state) {}

    beforeCreateNodes(src,state) {}

    /**
       createTextElement
       テキストタイプの末端ノードで呼ばれます
       src:{data:テキスト}
       state:{depth:インデント数}

    **/
    createTextElement(src,state) {}

    createCommentElement(src,state) {}
    beforeCreateScriptElement(src, isContainer,state) {}
    createScriptElement_open(src, isContainer,state) {}
    createScriptElement_close(src,state) {}

    /**
       beforeCompile
       各Builderを呼び出す前に1回だけ実行されます。
       特定のノードを書き換えるといったケースで利用してください

    **/
    beforeCompile(src) {}
  }


/***/ }),

/***/ "./CSSBuilder.babel.js":
/*!*****************************!*\
  !*** ./CSSBuilder.babel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSSBuilder; });
/* harmony import */ var _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.babel.js */ "./Builder.babel.js");
/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */




/*------------------------------------------------
CSSBuilder
htmlに指定されたstyleをCSSに分離します。
------------------------------------------------*/
  class CSSBuilder extends _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

    createAttribute(key,attributes) {
      if(key=='style'){
        return(`${attributes.join('')}`);
      }
    }
    /**
       createAttribute_text
       属性ノードで呼ばれます
       このBuilderではstyle属性の場合は値を返します

    **/
    createAttribute_text(key, attribute,state) {
      if(key=='style'){
         return(`${attribute.data||''}`); //CSSの要素　例:height:30px;
      }
    };
    createAttribute_script(key, attribute,state) {
      if(key=='style'){
        return(`${attribute.data||''}`);
      }
    };

    /**
       createTagElement_open
       タグ開始のノードで呼ばれます
       src:{name:タグ名、attributes：ノードに含まれる属性（MAP）}
       attributes:ノードに含まれる属性が入ってます
       isContainer:子要素を含む場合はtrueになります。
       state:{depth:インデント数}

    **/
    createTagElement_open(src, attributes, isContainer,state) {
      if(!src.attributes) return;
      var id = '';
      if(src.attributes['id']){ //id指定がある場合のみCSS化します。
        src.attributes['id'].forEach(function(_src) {
            if(_src.type=='text') id = `${id}${_src.data}`;
            if(_src.type=='script' && _src.langName== 'singleMustache' ) id = `${id}{${_src.data}}`;
        }, this);
      }
      if(id){this.nodes.push(`
        .${id} {
          ${' '+attributes}
        }`);
        delete src.attributes['style'];
      }
    }
  };


/***/ }),

/***/ "./DebugBuilder.babel.js":
/*!*******************************!*\
  !*** ./DebugBuilder.babel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DebugBuilder; });
/* harmony import */ var _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.babel.js */ "./Builder.babel.js");
/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */




/*------------------------------------------------
DebugBuilder
------------------------------------------------*/
  class DebugBuilder extends _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

    /**
       beforeCompile
       各Builderを呼び出す前に1回だけ実行されます。
       このタイミングでhtml内のwebComponent定義を取得して利用可能な形式に変換します。
    **/
    beforeCompile(src){
      console.log('DebugBuilder',src);
    }
  };


/***/ }),

/***/ "./HtmlBuilder.babel.js":
/*!******************************!*\
  !*** ./HtmlBuilder.babel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HtmlBuilder; });
/* harmony import */ var _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.babel.js */ "./Builder.babel.js");
/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */



  class HtmlBuilder extends _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
      createAttribute(key,attributes) {
        if(attributes.length==0) return(`${key}`);
        return(`${key}='${attributes.join('')}'`);
      }
      createAttribute_text(key, attribute,state) {
        return(`${attribute.data||''}`);
      }
      createAttribute_script(key, attribute,state) {
        return(`{${attribute.data||''}}`);
      }
      createTagElement_open(src, attributes, isContainer,state) {
        if(src.name=='script'){
          return(`${Array(state.depth).join('\t')}<${src.name}${attributes}>${isContainer?'':'</'+src.name+'>'}`);
        }
        return(`${Array(state.depth).join('\t')}<${src.name}${attributes}${isContainer?'':' /'}>`);
      }
      createTagElement_close(src,state) {
        return(`${Array(state.depth).join('\t')}</${src.name}>`);
      }
      createTextElement(src,state) {
        return(`${Array(state.depth).join('\t')}${src.data}`);
      }
      createScriptElement_open(src, isContainer,state){
        if(!isContainer) return(`${Array(state.depth).join('\t')}{${src.data}}`);
      }
  }


/***/ }),

/***/ "./IncrementalDomBuilder.babel.js":
/*!****************************************!*\
  !*** ./IncrementalDomBuilder.babel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IncrementalDomBuilder; });
/* harmony import */ var _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.babel.js */ "./Builder.babel.js");



class IncrementalDomBuilder extends _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
    createAttribute(key,attributes) {
      return(`${attributes.join(' ')}`);
    }
    createAttribute_text(key, attribute,state) {
      return(`${key}=\\'${attribute.data}\\'`);
    };
    createAttribute_script(key, attribute,state) {
      return(`${key}='+${attribute.data}+'`);
    };
    createTagElement_open(src, attributes, isContainer,state) {
      return(`${Array(state.depth).join('\t')}${isContainer?'elementOpen':'elementVoid'}('${src.name}', '','${attributes}');// ${state.nodes.length}/${state.nodes.pos}`);
    }
    createTagElement_close(src,state) {
      return(`${Array(state.depth).join('\t')}elementClose('${src.name}');// ${state.nodes.length}/${state.nodes.pos} `);
    }
    createTextElement(src,state) {
      return(`${Array(state.depth).join('\t')}text('${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")}'); `);
    }
    createCommentElement(src,state) {
      return(`${Array(state.depth).join('\t')}/* ${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")} */`);
    }
    createScriptElement_open(src, isContainer,state) {
      if (src.name == 'if') {
        return(`${Array(state.depth).join('\t')}if( ${src.data}){ `);
      }
      if (src.name == 'each') {
        return(`${Array(state.depth).join('\t')}each( ${src.data}){ `);
      }
        return(`${Array(state.depth).join('\t')}text( ${src.data}) `);
    }
    createScriptElement_close(src,state) {
      return(`${Array(state.depth).join('\t')}});`);
    }
}


/***/ }),

/***/ "./ReactComponentBuilder.babel.js":
/*!****************************************!*\
  !*** ./ReactComponentBuilder.babel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactComponentBuilder; });
/* harmony import */ var _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.babel.js */ "./Builder.babel.js");
/***********************************************
Copyright 2016 - 2017
***********************************************/
/* v1.0.0 */



  class ReactComponentBuilder extends _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**コンストラクタ **/
    constructor(options) {
      super(options);
      var self = this;
      this.elements = options.elements||{};
      this.elementNames = options.elementNames||[];//webcomponentの一覧
      this.attributeDelimiter =",";
    }
    cssToJson(css){
      var style = new CSSOM.CSSStyleDeclaration();
      style.cssText=css;
      var ret = {};
      for(var i=0;i<style.length;i++){
        ret[style[i].replace(/\-/g, '')]= style[style[i]];
      }
      return JSON.stringify(ret);
    }
    toUpperFirstLetter(str) {
      return str.split('-').map(function(block){
        return block.charAt(0).toUpperCase() + block.substring(1);
      }).join('');
    }
    createAttribute(key,attributes) {
      if(attributes.length==0) return(`'${key}':true`);
      key=(key=="class")?"className":key;
      return(`'${key}':${attributes.join('+')}`);
    }
    createAttribute_text(key, attribute,state) {
      if(key=="style"){
         return(`${this.cssToJson(attribute.data)}`);
      }else return(`'${attribute.data.replace(/\'/g, '\\\'')}'`);
    }
    createAttribute_script(key, attribute,state) {
      return(`${attribute.data}`);
    }


    nexttype(_src){
            if(_src.nextSibling==null) return false;
            if(_src.nextSibling.type!="comment") return true
            return this.nexttype(_src.nextSibling);
    }

    createTagElement_open(src, attributes, isContainer,state) {
      //tagかwebcomponentか判断する
      // Judge whether it is tag or webcomponent
      //タグ名にハイフンが含まれていたらwebcomponent
      // webcomponent if the tag name contains a '-'
      //タグ名の1文字目が大文字ならwebcomponent
      //elementNamesに登録されていたらwebcomponent
      // webcomponent if registered in elementNames
      var tagName= ( ~src.name.indexOf('-') || src.name.charAt(0)==src.name.charAt(0).toUpperCase() || this.elementNames.indexOf(src.name.toLowerCase()) >= 0)? this.toUpperFirstLetter(src.name):`'${src.name}'`;
      return(`${Array(state.depth).join('\t')}React.createElement(${tagName},${attributes?'{'+attributes+'}':'null'}${isContainer?',':(this.nexttype(src))?'),':')'}`);
    }
    createTagElement_close(src,state) {
      return(`${Array(state.depth).join('\t')})${(this.nexttype(src))?',':''}`);
    }
    createTextElement(src,state) {
      return(`${Array(state.depth).join('\t')}'${src.data.replace(/[\n\r]/g,"").replace(/\'/g,"\\\'")}'${(state.nodes.length>state.nodes.pos)?',':''}`);
    }
    createCommentElement(src,state) {
      return(`${Array(state.depth).join('\t')}/* ${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")} */`);
    }
    createScriptElement_open(src, isContainer,state) {


      if (src.name == 'map') {
        return(`${Array(state.depth).join('\t')}(${src.data}).map(function(element, index, array) { return [ `);
      }
      if (src.name == 'if') {
        return(`${Array(state.depth).join('\t')}( ${src.data})?[ `);
      }
      if (src.name == 'each') {
        return(`${Array(state.depth).join('\t')}each( ${src.data}){ `);
      }
      return(`${Array(state.depth).join('\t')}${src.data}${(state.nodes.length>state.nodes.pos)?',':''}`);
    }
    createScriptElement_close(src,state) {

      if (src.name == 'map') {
        return(`${Array(state.depth).join('\t')}]}),`);
      }
      if (src.name == 'if') {
        return(`${Array(state.depth).join('\t')}]:[],`);
      }

      return(`${Array(state.depth).join('\t')}});`);
    }
    getResult(arg) {
      //windowオブジェクトにメソッドを追加するコードを生成
      //Generate code to add a method to the window object
      return(`
class ${this.toUpperFirstLetter(arg.elementName)} extends React.Component{
  render(){
    return ${this.getNodes().trim()}
  }
${arg.script?''+arg.script.data:''}
};`);
    }
  }


/***/ }),

/***/ "./ReactRootComponentBuilder.babel.js":
/*!********************************************!*\
  !*** ./ReactRootComponentBuilder.babel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactRootComponentBuilder; });
/* harmony import */ var _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.babel.js */ "./Builder.babel.js");
/***********************************************
Copyright 2016 - 2017
***********************************************/
/* v1.0.0 */



  class ReactRootComponentBuilder extends _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**コンストラクタ
     例：
      new ReactRootParser({ builder: ReactComponentBuilder });

   **/
   constructor(options) {
     super(options);
     var self = this;
     this.builder =options.builder;//webComponentのbuildに利用するビルダーを定義します。
     this.elementNames =[];
     this.elements ={};
     this.components ={};
   }

   /**
      beforeCompile
      各Builderを呼び出す前に1回だけ実行されます。
      このタイミングでhtml内のwebComponent定義を取得して利用可能な形式に変換します。
   **/
   beforeCompile(src){
     var customElements = src.getElementsByTagName("body");
     customElements.forEach(function(customElement){
       var elementName = "app";
       this.elementNames.push(elementName);
       this.elements[elementName] =
         {
           template:customElement?customElement.cloneElement().children:[],
           script:[]
         };
       //body配下の削除
       customElement.removeChildAll();
       //body配下に追加
       var newElement = customElement.createElement('div');
       newElement.attributes = {'id':[{
                             "type": "text",
                             "data": "app"
                           }]};
       customElement.appendChild(newElement);

     },this);
   }

   /**
      build
      webComponentをbuildします。
      コンストラクタで指定したBuilderを実行します。

   **/
   build(){
     //console.log("build: ",this.elements);
     for (var elementName in this.elements) {
       //console.log("build element: " , elementName, this.elements[elementName]);

       var reactComponentBuilder = new this.builder({elements:this.elements,elementNames:this.elementNames});
       var _compiler = new Compiler([reactComponentBuilder],{});
       var compileData =_compiler.compile(this.elements[elementName].template[0]);
       this.components[elementName]=reactComponentBuilder.getResult({'elementName':elementName,'script':this.elements[elementName].script[0]});
       console.log("this.components[elementName]:"+this.components[elementName]);
     };
   }
   /**
      getResult
      生成結果返却メソッド
    **/
   getResult(arg) {
     var result = [];
     for (var elementName in this.components) {
       result.push(this.components[elementName]);
     }
     return result.join('\t');
   }
 }


/***/ }),

/***/ "./WebComponentParser.babel.js":
/*!*************************************!*\
  !*** ./WebComponentParser.babel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebComponentParser; });
/* harmony import */ var _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.babel.js */ "./Builder.babel.js");
/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */



  class WebComponentParser extends _Builder_babel_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
    /**コンストラクタ
      例：
       new WebComponentParser({ builder: ReactComponentBuilder });

    **/
    constructor(options) {
      super(options);
      var self = this;
      this.builder =options.builder;//webComponentのbuildに利用するビルダーを定義します。
      this.elementNames =[];
      this.elements ={};
      this.components ={};
    }

    /**
       beforeCompile
       各Builderを呼び出す前に1回だけ実行されます。
       このタイミングでhtml内のwebComponent定義を取得して利用可能な形式に変換します。
    **/
    beforeCompile(src){
      var customElements = src.getElementsByTagName("element");
      customElements.forEach(function(customElement){
        var template = customElement.getElementsByTagName("template");
        var script = customElement.getElementsByTagName("script");
        script = script.concat(customElement.getElementsByTagName("x-script"));

        var elementName = customElement.attributes.name[0].data.toLowerCase();
        this.elementNames.push(elementName);
        this.elements[elementName] =
          {
            template:template[0]?template[0].cloneElement().children:[],
            script:script[0]?script[0].cloneElement().children:[]
          };
        //console.log("element: " , elementName, this.elements[elementName]);
        //console.log("element: " , elementName, stringify(this.elements[elementName]));
        customElement.parentNode.removeChild(customElement);

      },this);
    }


    /**
       build
       webComponentをbuildします。
       コンストラクタで指定したBuilderを実行します。

    **/
    build(){
      //console.log("build: ",this.elements);
      for (var elementName in this.elements) {
        //console.log("build element: " , elementName, this.elements[elementName]);

        var reactComponentBuilder = new this.builder({elements:this.elements,elementNames:this.elementNames});
        var _compiler = new Compiler([reactComponentBuilder],{});
        var compileData =_compiler.compile(this.elements[elementName].template[0]);
        this.components[elementName]=reactComponentBuilder.getResult({'elementName':elementName,'script':this.elements[elementName].script[0]});
        console.log("this.components[elementName]:"+this.components[elementName]);
      };
    }
    /**
       getResult
       生成結果返却メソッド
     **/
    getResult(arg) {
      var result = [];
      for (var elementName in this.components) {
        result.push(this.components[elementName]);
      }
      return result.join('\t');
    }
  }


/***/ }),

/***/ "./htmlcompiler.babel.js":
/*!*******************************!*\
  !*** ./htmlcompiler.babel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compiler; });
/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */

  class Compiler {
    constructor(builders = [], options) {
        var self = this;
        this._builders = builders;
        this._options = options;
      }
      //**Public**//
    createAttribute(attributes,_builder) {
      var ret = [];
      Object.keys(attributes).forEach(function(attrkey) {
        //if(attributes[attrkey].length==0){
        //  node.push(_builder.createAttribute_keyonly(attrkey));
        //} else
        var node = [];
        attributes[attrkey].forEach(function(attribute) {
          if(attribute.type == 'script') {
              node.push(_builder.createAttribute_script(attrkey, attribute));
          } else {
              node.push(_builder.createAttribute_text(attrkey, attribute));
          }
        }, this);
        ret.push(_builder.createAttribute(attrkey,node));
      }, this);
      return ret.join(_builder.attributeDelimiter?_builder.attributeDelimiter:' ');
    }

    createTagElement(src,state) {
      //srcの加工を行う
      this._builders.forEach(function(_builder) {
        _builder.beforeCreateTagElement(src, src.children?true:false);
        if(src.attributes)_builder.beforeCreateAttribute(src.attributes);
      }, this);

      if (src.children && src.children.length>0) {//This is a container element
        this._builders.forEach(function(_builder) {
          var attributes = src.attributes?' '+this.createAttribute(src.attributes,_builder):'';
          _builder.addNode(_builder.createTagElement_open(src, attributes, true,state));
        }, this);

        for(var i=0,length=src.children.length;i<length;i++){
          var _src = src.children[i];
          this.createNodes(_src,{nodes:{length:length,pos:i+1},depth:state.depth});
        }

        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createTagElement_close(src,state));
        }, this);

      } else {//This is not a container element
        this._builders.forEach(function(_builder) {
          var attributes = src.attributes?' '+this.createAttribute(src.attributes,_builder):'';
          _builder.addNode(_builder.createTagElement_open(src, attributes, false,state));
        }, this);
      }
    }

    createScriptElement(src,state) {
      //srcの加工を行う
      this._builders.forEach(function(_builder) {
        _builder.beforeCreateScriptElement(src, src.children?true:false,state);
      }, this);

      if (src.children && src.children.length>0) {//This is a container element
        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createScriptElement_open(src, true,state));
        }, this);

        for(var i=0,length=src.children.length;i<length;i++){
          var _src = src.children[i];
          this.createNodes(_src,{nodes:{length:length,pos:i+1},depth:state.depth});
        }

        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createScriptElement_close(src,state));
        }, this);
      } else {//This is not a container element
        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createScriptElement_open(src, false,state));
        }, this);
      }
    }

    createNodes(src,state) {
      state.depth++;
      //srcの加工を行う
      this._builders.forEach(function(_builder) {
        _builder.beforeCreateNodes(src,state);
      }, this);

      if (src.type == 'tag') this.createTagElement(src,state);
      if (src.type == 'text')
        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createTextElement(src,state));
        }, this);
      if (src.type == 'script')this.createScriptElement(src,state);
      if (src.type == 'comment')
        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createCommentElement(src,state));
        }, this);
      state.depth--;
      return state;
    }

    compile(src) {
      //srcの加工を行う
      this._builders.forEach(function(_builder) {
        _builder.addNode(_builder.beforeCompile(src));
      }, this);

      var state = {nodes:{length:1,pos:1},depth:0};
      if(src instanceof Array){
        src.forEach(function(src) {
          return this.createNodes(src,state);
        }, this);
      }else{
        return this.createNodes(src,state);
      }
    }
  }


/***/ }),

/***/ "./index.babel.js":
/*!************************!*\
  !*** ./index.babel.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var cssom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cssom */ "../node_modules/cssom/build/CSSOM.js");
/* harmony import */ var cssom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cssom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlcompiler_babel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlcompiler.babel.js */ "./htmlcompiler.babel.js");
/* harmony import */ var _Builder_babel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builder.babel.js */ "./Builder.babel.js");
/* harmony import */ var _DebugBuilder_babel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DebugBuilder.babel.js */ "./DebugBuilder.babel.js");
/* harmony import */ var _HtmlBuilder_babel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HtmlBuilder.babel.js */ "./HtmlBuilder.babel.js");
/* harmony import */ var _CSSBuilder_babel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSBuilder.babel.js */ "./CSSBuilder.babel.js");
/* harmony import */ var _IncrementalDomBuilder_babel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IncrementalDomBuilder.babel.js */ "./IncrementalDomBuilder.babel.js");
/* harmony import */ var _ReactComponentBuilder_babel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReactComponentBuilder.babel.js */ "./ReactComponentBuilder.babel.js");
/* harmony import */ var _WebComponentParser_babel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebComponentParser.babel.js */ "./WebComponentParser.babel.js");
/* harmony import */ var _ReactRootComponentBuilder_babel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReactRootComponentBuilder.babel.js */ "./ReactRootComponentBuilder.babel.js");

/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */

//http://yutapon.hatenablog.com/entry/2015/02/09/090000













if (typeof window === 'undefined') {
global.CSSOM = cssom__WEBPACK_IMPORTED_MODULE_0___default.a;
global.Builder = _Builder_babel_js__WEBPACK_IMPORTED_MODULE_2__["default"];
global.DebugBuilder = _DebugBuilder_babel_js__WEBPACK_IMPORTED_MODULE_3__["default"];
global.HtmlBuilder = _HtmlBuilder_babel_js__WEBPACK_IMPORTED_MODULE_4__["default"];
global.CSSBuilder = _CSSBuilder_babel_js__WEBPACK_IMPORTED_MODULE_5__["default"];
global.Compiler = _htmlcompiler_babel_js__WEBPACK_IMPORTED_MODULE_1__["default"];
global.IncrementalDomBuilder = _IncrementalDomBuilder_babel_js__WEBPACK_IMPORTED_MODULE_6__["default"];
global.ReactComponentBuilder = _ReactComponentBuilder_babel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
global.WebComponentParser = _WebComponentParser_babel_js__WEBPACK_IMPORTED_MODULE_8__["default"];
global.ReactRootComponentBuilder = _ReactRootComponentBuilder_babel_js__WEBPACK_IMPORTED_MODULE_9__["default"];
}else{
window.CSSOM = cssom__WEBPACK_IMPORTED_MODULE_0___default.a;
window.Builder = _Builder_babel_js__WEBPACK_IMPORTED_MODULE_2__["default"];
window.DebugBuilder = _DebugBuilder_babel_js__WEBPACK_IMPORTED_MODULE_3__["default"];
window.HtmlBuilder = _HtmlBuilder_babel_js__WEBPACK_IMPORTED_MODULE_4__["default"];
window.CSSBuilder = _CSSBuilder_babel_js__WEBPACK_IMPORTED_MODULE_5__["default"];
window.Compiler = _htmlcompiler_babel_js__WEBPACK_IMPORTED_MODULE_1__["default"];
window.IncrementalDomBuilder = _IncrementalDomBuilder_babel_js__WEBPACK_IMPORTED_MODULE_6__["default"];
window.ReactComponentBuilder = _ReactComponentBuilder_babel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
window.WebComponentParser = _WebComponentParser_babel_js__WEBPACK_IMPORTED_MODULE_8__["default"];
window.ReactRootComponentBuilder = _ReactRootComponentBuilder_babel_js__WEBPACK_IMPORTED_MODULE_9__["default"];
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3NvbS9idWlsZC9DU1NPTS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vQnVpbGRlci5iYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9DU1NCdWlsZGVyLmJhYmVsLmpzIiwid2VicGFjazovLy8uL0RlYnVnQnVpbGRlci5iYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9IdG1sQnVpbGRlci5iYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9JbmNyZW1lbnRhbERvbUJ1aWxkZXIuYmFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RDb21wb25lbnRCdWlsZGVyLmJhYmVsLmpzIiwid2VicGFjazovLy8uL1JlYWN0Um9vdENvbXBvbmVudEJ1aWxkZXIuYmFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vV2ViQ29tcG9uZW50UGFyc2VyLmJhYmVsLmpzIiwid2VicGFjazovLy8uL2h0bWxjb21waWxlci5iYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5iYWJlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMx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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsK0JBQStCOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxtQkFBbUIsT0FBTyxlQUFlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUV5QjtBQUNxQjtBQUNOO0FBQ1U7QUFDRjtBQUNGO0FBQ3NCO0FBQ0E7QUFDTjtBQUNjOzs7QUFHNUU7QUFDQSxlQUFlLDRDQUFLO0FBQ3BCLGlCQUFpQix5REFBTztBQUN4QixzQkFBc0IsOERBQVk7QUFDbEMscUJBQXFCLDZEQUFXO0FBQ2hDLG9CQUFvQiw0REFBVTtBQUM5QixrQkFBa0IsOERBQVE7QUFDMUIsK0JBQStCLHVFQUFxQjtBQUNwRCwrQkFBK0IsdUVBQXFCO0FBQ3BELDRCQUE0QixvRUFBa0I7QUFDOUMsbUNBQW1DLDJFQUF5QjtBQUM1RCxDQUFDO0FBQ0QsZUFBZSw0Q0FBSztBQUNwQixpQkFBaUIseURBQU87QUFDeEIsc0JBQXNCLDhEQUFZO0FBQ2xDLHFCQUFxQiw2REFBVztBQUNoQyxvQkFBb0IsNERBQVU7QUFDOUIsa0JBQWtCLDhEQUFRO0FBQzFCLCtCQUErQix1RUFBcUI7QUFDcEQsK0JBQStCLHVFQUFxQjtBQUNwRCw0QkFBNEIsb0VBQWtCO0FBQzlDLG1DQUFtQywyRUFBeUI7QUFDNUQiLCJmaWxlIjoiaHRtbGNvbXBpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5iYWJlbC5qc1wiKTtcbiIsIihmdW5jdGlvbihyb290KSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgZXhwb3J0cztcclxuXHRpZiAodHlwZW9mKG1vZHVsZSkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZihtb2R1bGUuZXhwb3J0cykgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0ICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcclxuXHR9IGVsc2Uge1xyXG5cdCAgICBleHBvcnRzID0ge307XHJcblx0ICAgIGlmIChyb290LkNTU09NKSB7XHJcblx0ICAgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHRcdFx0cm9vdC5DU1NPTSA9IGV4cG9ydHM7XHJcblx0fVxyXG5cdHZhciBDU1NPTSA9IGV4cG9ydHM7XHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU1N0eWxlRGVjbGFyYXRpb25cclxuICovXHJcbkNTU09NLkNTU1N0eWxlRGVjbGFyYXRpb24gPSBmdW5jdGlvbiBDU1NTdHlsZURlY2xhcmF0aW9uKCl7XHJcblx0dGhpcy5sZW5ndGggPSAwO1xyXG5cdHRoaXMucGFyZW50UnVsZSA9IG51bGw7XHJcblxyXG5cdC8vIE5PTi1TVEFOREFSRFxyXG5cdHRoaXMuX2ltcG9ydGFudHMgPSB7fTtcclxufTtcclxuXHJcblxyXG5DU1NPTS5DU1NTdHlsZURlY2xhcmF0aW9uLnByb3RvdHlwZSA9IHtcclxuXHJcblx0Y29uc3RydWN0b3I6IENTU09NLkNTU1N0eWxlRGVjbGFyYXRpb24sXHJcblxyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLVN0eWxlL2Nzcy5odG1sI0NTUy1DU1NTdHlsZURlY2xhcmF0aW9uLWdldFByb3BlcnR5VmFsdWVcclxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgaWYgaXQgaGFzIGJlZW4gZXhwbGljaXRseSBzZXQgZm9yIHRoaXMgZGVjbGFyYXRpb24gYmxvY2suXHJcblx0ICogUmV0dXJucyB0aGUgZW1wdHkgc3RyaW5nIGlmIHRoZSBwcm9wZXJ0eSBoYXMgbm90IGJlZW4gc2V0LlxyXG5cdCAqL1xyXG5cdGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRcdHJldHVybiB0aGlzW25hbWVdIHx8IFwiXCI7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcHJpb3JpdHk9bnVsbF0gXCJpbXBvcnRhbnRcIiBvciBudWxsXHJcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1TdHlsZS9jc3MuaHRtbCNDU1MtQ1NTU3R5bGVEZWNsYXJhdGlvbi1zZXRQcm9wZXJ0eVxyXG5cdCAqL1xyXG5cdHNldFByb3BlcnR5OiBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcclxuXHRcdGlmICh0aGlzW25hbWVdKSB7XHJcblx0XHRcdC8vIFByb3BlcnR5IGFscmVhZHkgZXhpc3QuIE92ZXJ3cml0ZSBpdC5cclxuXHRcdFx0dmFyIGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLCBuYW1lKTtcclxuXHRcdFx0aWYgKGluZGV4IDwgMCkge1xyXG5cdFx0XHRcdHRoaXNbdGhpcy5sZW5ndGhdID0gbmFtZTtcclxuXHRcdFx0XHR0aGlzLmxlbmd0aCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBOZXcgcHJvcGVydHkuXHJcblx0XHRcdHRoaXNbdGhpcy5sZW5ndGhdID0gbmFtZTtcclxuXHRcdFx0dGhpcy5sZW5ndGgrKztcclxuXHRcdH1cclxuXHRcdHRoaXNbbmFtZV0gPSB2YWx1ZSArIFwiXCI7XHJcblx0XHR0aGlzLl9pbXBvcnRhbnRzW25hbWVdID0gcHJpb3JpdHk7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG5cdCAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU1N0eWxlRGVjbGFyYXRpb24tcmVtb3ZlUHJvcGVydHlcclxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgaWYgaXQgaGFzIGJlZW4gZXhwbGljaXRseSBzZXQgZm9yIHRoaXMgZGVjbGFyYXRpb24gYmxvY2suXHJcblx0ICogUmV0dXJucyB0aGUgZW1wdHkgc3RyaW5nIGlmIHRoZSBwcm9wZXJ0eSBoYXMgbm90IGJlZW4gc2V0IG9yIHRoZSBwcm9wZXJ0eSBuYW1lIGRvZXMgbm90IGNvcnJlc3BvbmQgdG8gYSBrbm93biBDU1MgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cmVtb3ZlUHJvcGVydHk6IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRcdGlmICghKG5hbWUgaW4gdGhpcykpIHtcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHR9XHJcblx0XHR2YXIgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIG5hbWUpO1xyXG5cdFx0aWYgKGluZGV4IDwgMCkge1xyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdH1cclxuXHRcdHZhciBwcmV2VmFsdWUgPSB0aGlzW25hbWVdO1xyXG5cdFx0dGhpc1tuYW1lXSA9IFwiXCI7XHJcblxyXG5cdFx0Ly8gVGhhdCdzIHdoYXQgV2ViS2l0IGFuZCBPcGVyYSBkb1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKHRoaXMsIGluZGV4LCAxKTtcclxuXHJcblx0XHQvLyBUaGF0J3Mgd2hhdCBGaXJlZm94IGRvZXNcclxuXHRcdC8vdGhpc1tpbmRleF0gPSBcIlwiXHJcblxyXG5cdFx0cmV0dXJuIHByZXZWYWx1ZTtcclxuXHR9LFxyXG5cclxuXHRnZXRQcm9wZXJ0eUNTU1ZhbHVlOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vRklYTUVcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXHJcblx0ICovXHJcblx0Z2V0UHJvcGVydHlQcmlvcml0eTogZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2ltcG9ydGFudHNbbmFtZV0gfHwgXCJcIjtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcclxuXHQgKiAgIGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlTaG9ydGhhbmQoXCJvdmVyZmxvdy14XCIpXHJcblx0ICogICAtPiBcIm92ZXJmbG93XCJcclxuXHQgKi9cclxuXHRnZXRQcm9wZXJ0eVNob3J0aGFuZDogZnVuY3Rpb24oKSB7XHJcblx0XHQvL0ZJWE1FXHJcblx0fSxcclxuXHJcblx0aXNQcm9wZXJ0eUltcGxpY2l0OiBmdW5jdGlvbigpIHtcclxuXHRcdC8vRklYTUVcclxuXHR9LFxyXG5cclxuXHQvLyBEb2Vzbid0IHdvcmsgaW4gSUUgPCA5XHJcblx0Z2V0IGNzc1RleHQoKXtcclxuXHRcdHZhciBwcm9wZXJ0aWVzID0gW107XHJcblx0XHRmb3IgKHZhciBpPTAsIGxlbmd0aD10aGlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHZhciBuYW1lID0gdGhpc1tpXTtcclxuXHRcdFx0dmFyIHZhbHVlID0gdGhpcy5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xyXG5cdFx0XHR2YXIgcHJpb3JpdHkgPSB0aGlzLmdldFByb3BlcnR5UHJpb3JpdHkobmFtZSk7XHJcblx0XHRcdGlmIChwcmlvcml0eSkge1xyXG5cdFx0XHRcdHByaW9yaXR5ID0gXCIgIVwiICsgcHJpb3JpdHk7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJvcGVydGllc1tpXSA9IG5hbWUgKyBcIjogXCIgKyB2YWx1ZSArIHByaW9yaXR5ICsgXCI7XCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHJvcGVydGllcy5qb2luKFwiIFwiKTtcclxuXHR9LFxyXG5cclxuXHRzZXQgY3NzVGV4dCh0ZXh0KXtcclxuXHRcdHZhciBpLCBuYW1lO1xyXG5cdFx0Zm9yIChpID0gdGhpcy5sZW5ndGg7IGktLTspIHtcclxuXHRcdFx0bmFtZSA9IHRoaXNbaV07XHJcblx0XHRcdHRoaXNbbmFtZV0gPSBcIlwiO1xyXG5cdFx0fVxyXG5cdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKHRoaXMsIDAsIHRoaXMubGVuZ3RoKTtcclxuXHRcdHRoaXMuX2ltcG9ydGFudHMgPSB7fTtcclxuXHJcblx0XHR2YXIgZHVtbXlSdWxlID0gQ1NTT00ucGFyc2UoJyNib2d1c3snICsgdGV4dCArICd9JykuY3NzUnVsZXNbMF0uc3R5bGU7XHJcblx0XHR2YXIgbGVuZ3RoID0gZHVtbXlSdWxlLmxlbmd0aDtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xyXG5cdFx0XHRuYW1lID0gZHVtbXlSdWxlW2ldO1xyXG5cdFx0XHR0aGlzLnNldFByb3BlcnR5KGR1bW15UnVsZVtpXSwgZHVtbXlSdWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSksIGR1bW15UnVsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KG5hbWUpKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLkNTU1N0eWxlRGVjbGFyYXRpb24gPSBDU1NPTS5DU1NTdHlsZURlY2xhcmF0aW9uO1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzc29tLyN0aGUtY3NzcnVsZS1pbnRlcmZhY2VcclxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1TdHlsZS9jc3MuaHRtbCNDU1MtQ1NTUnVsZVxyXG4gKi9cclxuQ1NTT00uQ1NTUnVsZSA9IGZ1bmN0aW9uIENTU1J1bGUoKSB7XHJcblx0dGhpcy5wYXJlbnRSdWxlID0gbnVsbDtcclxuXHR0aGlzLnBhcmVudFN0eWxlU2hlZXQgPSBudWxsO1xyXG59O1xyXG5cclxuQ1NTT00uQ1NTUnVsZS5VTktOT1dOX1JVTEUgPSAwOyAgICAgICAgICAgICAgICAgLy8gb2Jzb2xldGVcclxuQ1NTT00uQ1NTUnVsZS5TVFlMRV9SVUxFID0gMTtcclxuQ1NTT00uQ1NTUnVsZS5DSEFSU0VUX1JVTEUgPSAyOyAgICAgICAgICAgICAgICAgLy8gb2Jzb2xldGVcclxuQ1NTT00uQ1NTUnVsZS5JTVBPUlRfUlVMRSA9IDM7XHJcbkNTU09NLkNTU1J1bGUuTUVESUFfUlVMRSA9IDQ7XHJcbkNTU09NLkNTU1J1bGUuRk9OVF9GQUNFX1JVTEUgPSA1O1xyXG5DU1NPTS5DU1NSdWxlLlBBR0VfUlVMRSA9IDY7XHJcbkNTU09NLkNTU1J1bGUuS0VZRlJBTUVTX1JVTEUgPSA3O1xyXG5DU1NPTS5DU1NSdWxlLktFWUZSQU1FX1JVTEUgPSA4O1xyXG5DU1NPTS5DU1NSdWxlLk1BUkdJTl9SVUxFID0gOTtcclxuQ1NTT00uQ1NTUnVsZS5OQU1FU1BBQ0VfUlVMRSA9IDEwO1xyXG5DU1NPTS5DU1NSdWxlLkNPVU5URVJfU1RZTEVfUlVMRSA9IDExO1xyXG5DU1NPTS5DU1NSdWxlLlNVUFBPUlRTX1JVTEUgPSAxMjtcclxuQ1NTT00uQ1NTUnVsZS5ET0NVTUVOVF9SVUxFID0gMTM7XHJcbkNTU09NLkNTU1J1bGUuRk9OVF9GRUFUVVJFX1ZBTFVFU19SVUxFID0gMTQ7XHJcbkNTU09NLkNTU1J1bGUuVklFV1BPUlRfUlVMRSA9IDE1O1xyXG5DU1NPTS5DU1NSdWxlLlJFR0lPTl9TVFlMRV9SVUxFID0gMTY7XHJcblxyXG5cclxuQ1NTT00uQ1NTUnVsZS5wcm90b3R5cGUgPSB7XHJcblx0Y29uc3RydWN0b3I6IENTU09NLkNTU1J1bGVcclxuXHQvL0ZJWE1FXHJcbn07XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5DU1NSdWxlID0gQ1NTT00uQ1NTUnVsZTtcclxuLy8vQ29tbW9uSlNcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3NvbS8jY3Nzc3R5bGVydWxlXHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU1N0eWxlUnVsZVxyXG4gKi9cclxuQ1NTT00uQ1NTU3R5bGVSdWxlID0gZnVuY3Rpb24gQ1NTU3R5bGVSdWxlKCkge1xyXG5cdENTU09NLkNTU1J1bGUuY2FsbCh0aGlzKTtcclxuXHR0aGlzLnNlbGVjdG9yVGV4dCA9IFwiXCI7XHJcblx0dGhpcy5zdHlsZSA9IG5ldyBDU1NPTS5DU1NTdHlsZURlY2xhcmF0aW9uKCk7XHJcblx0dGhpcy5zdHlsZS5wYXJlbnRSdWxlID0gdGhpcztcclxufTtcclxuXHJcbkNTU09NLkNTU1N0eWxlUnVsZS5wcm90b3R5cGUgPSBuZXcgQ1NTT00uQ1NTUnVsZSgpO1xyXG5DU1NPTS5DU1NTdHlsZVJ1bGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NTT00uQ1NTU3R5bGVSdWxlO1xyXG5DU1NPTS5DU1NTdHlsZVJ1bGUucHJvdG90eXBlLnR5cGUgPSAxO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENTU09NLkNTU1N0eWxlUnVsZS5wcm90b3R5cGUsIFwiY3NzVGV4dFwiLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0ZXh0O1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0b3JUZXh0KSB7XHJcblx0XHRcdHRleHQgPSB0aGlzLnNlbGVjdG9yVGV4dCArIFwiIHtcIiArIHRoaXMuc3R5bGUuY3NzVGV4dCArIFwifVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGV4dCA9IFwiXCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9LFxyXG5cdHNldDogZnVuY3Rpb24oY3NzVGV4dCkge1xyXG5cdFx0dmFyIHJ1bGUgPSBDU1NPTS5DU1NTdHlsZVJ1bGUucGFyc2UoY3NzVGV4dCk7XHJcblx0XHR0aGlzLnN0eWxlID0gcnVsZS5zdHlsZTtcclxuXHRcdHRoaXMuc2VsZWN0b3JUZXh0ID0gcnVsZS5zZWxlY3RvclRleHQ7XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG4vKipcclxuICogTk9OLVNUQU5EQVJEXHJcbiAqIGxpZ2h0d2VpZ2h0IHZlcnNpb24gb2YgcGFyc2UuanMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBydWxlVGV4dFxyXG4gKiBAcmV0dXJuIENTU1N0eWxlUnVsZVxyXG4gKi9cclxuQ1NTT00uQ1NTU3R5bGVSdWxlLnBhcnNlID0gZnVuY3Rpb24ocnVsZVRleHQpIHtcclxuXHR2YXIgaSA9IDA7XHJcblx0dmFyIHN0YXRlID0gXCJzZWxlY3RvclwiO1xyXG5cdHZhciBpbmRleDtcclxuXHR2YXIgaiA9IGk7XHJcblx0dmFyIGJ1ZmZlciA9IFwiXCI7XHJcblxyXG5cdHZhciBTSUdOSUZJQ0FOVF9XSElURVNQQUNFID0ge1xyXG5cdFx0XCJzZWxlY3RvclwiOiB0cnVlLFxyXG5cdFx0XCJ2YWx1ZVwiOiB0cnVlXHJcblx0fTtcclxuXHJcblx0dmFyIHN0eWxlUnVsZSA9IG5ldyBDU1NPTS5DU1NTdHlsZVJ1bGUoKTtcclxuXHR2YXIgbmFtZSwgcHJpb3JpdHk9XCJcIjtcclxuXHJcblx0Zm9yICh2YXIgY2hhcmFjdGVyOyAoY2hhcmFjdGVyID0gcnVsZVRleHQuY2hhckF0KGkpKTsgaSsrKSB7XHJcblxyXG5cdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcclxuXHJcblx0XHRjYXNlIFwiIFwiOlxyXG5cdFx0Y2FzZSBcIlxcdFwiOlxyXG5cdFx0Y2FzZSBcIlxcclwiOlxyXG5cdFx0Y2FzZSBcIlxcblwiOlxyXG5cdFx0Y2FzZSBcIlxcZlwiOlxyXG5cdFx0XHRpZiAoU0lHTklGSUNBTlRfV0hJVEVTUEFDRVtzdGF0ZV0pIHtcclxuXHRcdFx0XHQvLyBTcXVhc2ggMiBvciBtb3JlIHdoaXRlLXNwYWNlcyBpbiB0aGUgcm93IGludG8gMVxyXG5cdFx0XHRcdHN3aXRjaCAocnVsZVRleHQuY2hhckF0KGkgLSAxKSkge1xyXG5cdFx0XHRcdFx0Y2FzZSBcIiBcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJcXHRcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJcXHJcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJcXG5cIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJcXGZcIjpcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRidWZmZXIgKz0gXCIgXCI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHQvLyBTdHJpbmdcclxuXHRcdGNhc2UgJ1wiJzpcclxuXHRcdFx0aiA9IGkgKyAxO1xyXG5cdFx0XHRpbmRleCA9IHJ1bGVUZXh0LmluZGV4T2YoJ1wiJywgaikgKyAxO1xyXG5cdFx0XHRpZiAoIWluZGV4KSB7XHJcblx0XHRcdFx0dGhyb3cgJ1wiIGlzIG1pc3NpbmcnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ1ZmZlciArPSBydWxlVGV4dC5zbGljZShpLCBpbmRleCk7XHJcblx0XHRcdGkgPSBpbmRleCAtIDE7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCInXCI6XHJcblx0XHRcdGogPSBpICsgMTtcclxuXHRcdFx0aW5kZXggPSBydWxlVGV4dC5pbmRleE9mKFwiJ1wiLCBqKSArIDE7XHJcblx0XHRcdGlmICghaW5kZXgpIHtcclxuXHRcdFx0XHR0aHJvdyBcIicgaXMgbWlzc2luZ1wiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ1ZmZlciArPSBydWxlVGV4dC5zbGljZShpLCBpbmRleCk7XHJcblx0XHRcdGkgPSBpbmRleCAtIDE7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdC8vIENvbW1lbnRcclxuXHRcdGNhc2UgXCIvXCI6XHJcblx0XHRcdGlmIChydWxlVGV4dC5jaGFyQXQoaSArIDEpID09PSBcIipcIikge1xyXG5cdFx0XHRcdGkgKz0gMjtcclxuXHRcdFx0XHRpbmRleCA9IHJ1bGVUZXh0LmluZGV4T2YoXCIqL1wiLCBpKTtcclxuXHRcdFx0XHRpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJNaXNzaW5nICovXCIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpID0gaW5kZXggKyAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCJ7XCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gXCJzZWxlY3RvclwiKSB7XHJcblx0XHRcdFx0c3R5bGVSdWxlLnNlbGVjdG9yVGV4dCA9IGJ1ZmZlci50cmltKCk7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRzdGF0ZSA9IFwibmFtZVwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCI6XCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gXCJuYW1lXCIpIHtcclxuXHRcdFx0XHRuYW1lID0gYnVmZmVyLnRyaW0oKTtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdHN0YXRlID0gXCJ2YWx1ZVwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSBcIiFcIjpcclxuXHRcdFx0aWYgKHN0YXRlID09PSBcInZhbHVlXCIgJiYgcnVsZVRleHQuaW5kZXhPZihcIiFpbXBvcnRhbnRcIiwgaSkgPT09IGkpIHtcclxuXHRcdFx0XHRwcmlvcml0eSA9IFwiaW1wb3J0YW50XCI7XHJcblx0XHRcdFx0aSArPSBcImltcG9ydGFudFwiLmxlbmd0aDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCI7XCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gXCJ2YWx1ZVwiKSB7XHJcblx0XHRcdFx0c3R5bGVSdWxlLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGJ1ZmZlci50cmltKCksIHByaW9yaXR5KTtcclxuXHRcdFx0XHRwcmlvcml0eSA9IFwiXCI7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRzdGF0ZSA9IFwibmFtZVwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSBcIn1cIjpcclxuXHRcdFx0aWYgKHN0YXRlID09PSBcInZhbHVlXCIpIHtcclxuXHRcdFx0XHRzdHlsZVJ1bGUuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgYnVmZmVyLnRyaW0oKSwgcHJpb3JpdHkpO1xyXG5cdFx0XHRcdHByaW9yaXR5ID0gXCJcIjtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcIm5hbWVcIikge1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0c3RhdGUgPSBcInNlbGVjdG9yXCI7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzdHlsZVJ1bGU7XHJcblxyXG59O1xyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuQ1NTU3R5bGVSdWxlID0gQ1NTT00uQ1NTU3R5bGVSdWxlO1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzc29tLyN0aGUtbWVkaWFsaXN0LWludGVyZmFjZVxyXG4gKi9cclxuQ1NTT00uTWVkaWFMaXN0ID0gZnVuY3Rpb24gTWVkaWFMaXN0KCl7XHJcblx0dGhpcy5sZW5ndGggPSAwO1xyXG59O1xyXG5cclxuQ1NTT00uTWVkaWFMaXN0LnByb3RvdHlwZSA9IHtcclxuXHJcblx0Y29uc3RydWN0b3I6IENTU09NLk1lZGlhTGlzdCxcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdGdldCBtZWRpYVRleHQoKSB7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbCh0aGlzLCBcIiwgXCIpO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG5cdCAqL1xyXG5cdHNldCBtZWRpYVRleHQodmFsdWUpIHtcclxuXHRcdHZhciB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIixcIik7XHJcblx0XHR2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xyXG5cdFx0Zm9yICh2YXIgaT0wOyBpPGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXNbaV0gPSB2YWx1ZXNbaV0udHJpbSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZWRpdW1cclxuXHQgKi9cclxuXHRhcHBlbmRNZWRpdW06IGZ1bmN0aW9uKG1lZGl1bSkge1xyXG5cdFx0aWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcywgbWVkaXVtKSA9PT0gLTEpIHtcclxuXHRcdFx0dGhpc1t0aGlzLmxlbmd0aF0gPSBtZWRpdW07XHJcblx0XHRcdHRoaXMubGVuZ3RoKys7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lZGl1bVxyXG5cdCAqL1xyXG5cdGRlbGV0ZU1lZGl1bTogZnVuY3Rpb24obWVkaXVtKSB7XHJcblx0XHR2YXIgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIG1lZGl1bSk7XHJcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbCh0aGlzLCBpbmRleCwgMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLk1lZGlhTGlzdCA9IENTU09NLk1lZGlhTGlzdDtcclxuLy8vQ29tbW9uSlNcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3NvbS8jY3NzbWVkaWFydWxlXHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU01lZGlhUnVsZVxyXG4gKi9cclxuQ1NTT00uQ1NTTWVkaWFSdWxlID0gZnVuY3Rpb24gQ1NTTWVkaWFSdWxlKCkge1xyXG5cdENTU09NLkNTU1J1bGUuY2FsbCh0aGlzKTtcclxuXHR0aGlzLm1lZGlhID0gbmV3IENTU09NLk1lZGlhTGlzdCgpO1xyXG5cdHRoaXMuY3NzUnVsZXMgPSBbXTtcclxufTtcclxuXHJcbkNTU09NLkNTU01lZGlhUnVsZS5wcm90b3R5cGUgPSBuZXcgQ1NTT00uQ1NTUnVsZSgpO1xyXG5DU1NPTS5DU1NNZWRpYVJ1bGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NTT00uQ1NTTWVkaWFSdWxlO1xyXG5DU1NPTS5DU1NNZWRpYVJ1bGUucHJvdG90eXBlLnR5cGUgPSA0O1xyXG4vL0ZJWE1FXHJcbi8vQ1NTT00uQ1NTTWVkaWFSdWxlLnByb3RvdHlwZS5pbnNlcnRSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuaW5zZXJ0UnVsZTtcclxuLy9DU1NPTS5DU1NNZWRpYVJ1bGUucHJvdG90eXBlLmRlbGV0ZVJ1bGUgPSBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWxldGVSdWxlO1xyXG5cclxuLy8gaHR0cDovL29wZW5zb3VyY2UuYXBwbGUuY29tL3NvdXJjZS9XZWJDb3JlL1dlYkNvcmUtNjU4LjI4L2Nzcy9DU1NNZWRpYVJ1bGUuY3BwXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDU1NPTS5DU1NNZWRpYVJ1bGUucHJvdG90eXBlLCBcImNzc1RleHRcIiwge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY3NzVGV4dHMgPSBbXTtcclxuICAgIGZvciAodmFyIGk9MCwgbGVuZ3RoPXRoaXMuY3NzUnVsZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY3NzVGV4dHMucHVzaCh0aGlzLmNzc1J1bGVzW2ldLmNzc1RleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiQG1lZGlhIFwiICsgdGhpcy5tZWRpYS5tZWRpYVRleHQgKyBcIiB7XCIgKyBjc3NUZXh0cy5qb2luKFwiXCIpICsgXCJ9XCI7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLkNTU01lZGlhUnVsZSA9IENTU09NLkNTU01lZGlhUnVsZTtcclxuLy8vQ29tbW9uSlNcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3NvbS8jY3NzaW1wb3J0cnVsZVxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLVN0eWxlL2Nzcy5odG1sI0NTUy1DU1NJbXBvcnRSdWxlXHJcbiAqL1xyXG5DU1NPTS5DU1NJbXBvcnRSdWxlID0gZnVuY3Rpb24gQ1NTSW1wb3J0UnVsZSgpIHtcclxuXHRDU1NPTS5DU1NSdWxlLmNhbGwodGhpcyk7XHJcblx0dGhpcy5ocmVmID0gXCJcIjtcclxuXHR0aGlzLm1lZGlhID0gbmV3IENTU09NLk1lZGlhTGlzdCgpO1xyXG5cdHRoaXMuc3R5bGVTaGVldCA9IG5ldyBDU1NPTS5DU1NTdHlsZVNoZWV0KCk7XHJcbn07XHJcblxyXG5DU1NPTS5DU1NJbXBvcnRSdWxlLnByb3RvdHlwZSA9IG5ldyBDU1NPTS5DU1NSdWxlKCk7XHJcbkNTU09NLkNTU0ltcG9ydFJ1bGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NTT00uQ1NTSW1wb3J0UnVsZTtcclxuQ1NTT00uQ1NTSW1wb3J0UnVsZS5wcm90b3R5cGUudHlwZSA9IDM7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ1NTT00uQ1NTSW1wb3J0UnVsZS5wcm90b3R5cGUsIFwiY3NzVGV4dFwiLCB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBtZWRpYVRleHQgPSB0aGlzLm1lZGlhLm1lZGlhVGV4dDtcclxuICAgIHJldHVybiBcIkBpbXBvcnQgdXJsKFwiICsgdGhpcy5ocmVmICsgXCIpXCIgKyAobWVkaWFUZXh0ID8gXCIgXCIgKyBtZWRpYVRleHQgOiBcIlwiKSArIFwiO1wiO1xyXG4gIH0sXHJcbiAgc2V0OiBmdW5jdGlvbihjc3NUZXh0KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW1wb3J0IHVybChwYXJ0aWFsLmNzcykgc2NyZWVuLCBoYW5kaGVsZDtcclxuICAgICAqICAgICAgICB8fCAgICAgICAgICAgICAgIHxcclxuICAgICAqICAgICAgICBhZnRlci1pbXBvcnQgICAgIG1lZGlhXHJcbiAgICAgKiAgICAgICAgIHxcclxuICAgICAqICAgICAgICAgdXJsXHJcbiAgICAgKi9cclxuICAgIHZhciBzdGF0ZSA9ICcnO1xyXG5cclxuICAgIHZhciBidWZmZXIgPSAnJztcclxuICAgIHZhciBpbmRleDtcclxuICAgIGZvciAodmFyIGNoYXJhY3RlcjsgKGNoYXJhY3RlciA9IGNzc1RleHQuY2hhckF0KGkpKTsgaSsrKSB7XHJcblxyXG4gICAgICBzd2l0Y2ggKGNoYXJhY3Rlcikge1xyXG4gICAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgIGNhc2UgJ1xcdCc6XHJcbiAgICAgICAgY2FzZSAnXFxyJzpcclxuICAgICAgICBjYXNlICdcXG4nOlxyXG4gICAgICAgIGNhc2UgJ1xcZic6XHJcbiAgICAgICAgICBpZiAoc3RhdGUgPT09ICdhZnRlci1pbXBvcnQnKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gJ3VybCc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ0AnOlxyXG4gICAgICAgICAgaWYgKCFzdGF0ZSAmJiBjc3NUZXh0LmluZGV4T2YoJ0BpbXBvcnQnLCBpKSA9PT0gaSkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9ICdhZnRlci1pbXBvcnQnO1xyXG4gICAgICAgICAgICBpICs9ICdpbXBvcnQnLmxlbmd0aDtcclxuICAgICAgICAgICAgYnVmZmVyID0gJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAndSc6XHJcbiAgICAgICAgICBpZiAoc3RhdGUgPT09ICd1cmwnICYmIGNzc1RleHQuaW5kZXhPZigndXJsKCcsIGkpID09PSBpKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gY3NzVGV4dC5pbmRleE9mKCcpJywgaSArIDEpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgaSArICc6IFwiKVwiIG5vdCBmb3VuZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSArPSAndXJsKCcubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gY3NzVGV4dC5zbGljZShpLCBpbmRleCk7XHJcbiAgICAgICAgICAgIGlmICh1cmxbMF0gPT09IHVybFt1cmwubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgICAgICBpZiAodXJsWzBdID09PSAnXCInIHx8IHVybFswXSA9PT0gXCInXCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgaSA9IGluZGV4O1xyXG4gICAgICAgICAgICBzdGF0ZSA9ICdtZWRpYSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnXCInOlxyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSAndXJsJykge1xyXG4gICAgICAgICAgICBpbmRleCA9IGNzc1RleHQuaW5kZXhPZignXCInLCBpICsgMSk7XHJcbiAgICAgICAgICAgIGlmICghaW5kZXgpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBpICsgXCI6ICdcXFwiJyBub3QgZm91bmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhyZWYgPSBjc3NUZXh0LnNsaWNlKGkgKyAxLCBpbmRleCk7XHJcbiAgICAgICAgICAgIGkgPSBpbmRleDtcclxuICAgICAgICAgICAgc3RhdGUgPSAnbWVkaWEnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCInXCI6XHJcbiAgICAgICAgICBpZiAoc3RhdGUgPT09ICd1cmwnKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gY3NzVGV4dC5pbmRleE9mKFwiJ1wiLCBpICsgMSk7XHJcbiAgICAgICAgICAgIGlmICghaW5kZXgpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBpICsgJzogXCJcXCdcIiBub3QgZm91bmQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaHJlZiA9IGNzc1RleHQuc2xpY2UoaSArIDEsIGluZGV4KTtcclxuICAgICAgICAgICAgaSA9IGluZGV4O1xyXG4gICAgICAgICAgICBzdGF0ZSA9ICdtZWRpYSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnOyc6XHJcbiAgICAgICAgICBpZiAoc3RhdGUgPT09ICdtZWRpYScpIHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgIHRoaXMubWVkaWEubWVkaWFUZXh0ID0gYnVmZmVyLnRyaW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBpZiAoc3RhdGUgPT09ICdtZWRpYScpIHtcclxuICAgICAgICAgICAgYnVmZmVyICs9IGNoYXJhY3RlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLkNTU0ltcG9ydFJ1bGUgPSBDU1NPTS5DU1NJbXBvcnRSdWxlO1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzc29tLyNjc3MtZm9udC1mYWNlLXJ1bGVcclxuICovXHJcbkNTU09NLkNTU0ZvbnRGYWNlUnVsZSA9IGZ1bmN0aW9uIENTU0ZvbnRGYWNlUnVsZSgpIHtcclxuXHRDU1NPTS5DU1NSdWxlLmNhbGwodGhpcyk7XHJcblx0dGhpcy5zdHlsZSA9IG5ldyBDU1NPTS5DU1NTdHlsZURlY2xhcmF0aW9uKCk7XHJcblx0dGhpcy5zdHlsZS5wYXJlbnRSdWxlID0gdGhpcztcclxufTtcclxuXHJcbkNTU09NLkNTU0ZvbnRGYWNlUnVsZS5wcm90b3R5cGUgPSBuZXcgQ1NTT00uQ1NTUnVsZSgpO1xyXG5DU1NPTS5DU1NGb250RmFjZVJ1bGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NTT00uQ1NTRm9udEZhY2VSdWxlO1xyXG5DU1NPTS5DU1NGb250RmFjZVJ1bGUucHJvdG90eXBlLnR5cGUgPSA1O1xyXG4vL0ZJWE1FXHJcbi8vQ1NTT00uQ1NTRm9udEZhY2VSdWxlLnByb3RvdHlwZS5pbnNlcnRSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuaW5zZXJ0UnVsZTtcclxuLy9DU1NPTS5DU1NGb250RmFjZVJ1bGUucHJvdG90eXBlLmRlbGV0ZVJ1bGUgPSBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWxldGVSdWxlO1xyXG5cclxuLy8gaHR0cDovL3d3dy5vcGVuc291cmNlLmFwcGxlLmNvbS9zb3VyY2UvV2ViQ29yZS9XZWJDb3JlLTk1NS42Ni4xL2Nzcy9XZWJLaXRDU1NGb250RmFjZVJ1bGUuY3BwXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDU1NPTS5DU1NGb250RmFjZVJ1bGUucHJvdG90eXBlLCBcImNzc1RleHRcIiwge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gXCJAZm9udC1mYWNlIHtcIiArIHRoaXMuc3R5bGUuY3NzVGV4dCArIFwifVwiO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5DU1NGb250RmFjZVJ1bGUgPSBDU1NPTS5DU1NGb250RmFjZVJ1bGU7XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvc2hhZG93LWRvbS8jaG9zdC1hdC1ydWxlXHJcbiAqL1xyXG5DU1NPTS5DU1NIb3N0UnVsZSA9IGZ1bmN0aW9uIENTU0hvc3RSdWxlKCkge1xyXG5cdENTU09NLkNTU1J1bGUuY2FsbCh0aGlzKTtcclxuXHR0aGlzLmNzc1J1bGVzID0gW107XHJcbn07XHJcblxyXG5DU1NPTS5DU1NIb3N0UnVsZS5wcm90b3R5cGUgPSBuZXcgQ1NTT00uQ1NTUnVsZSgpO1xyXG5DU1NPTS5DU1NIb3N0UnVsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDU1NPTS5DU1NIb3N0UnVsZTtcclxuQ1NTT00uQ1NTSG9zdFJ1bGUucHJvdG90eXBlLnR5cGUgPSAxMDAxO1xyXG4vL0ZJWE1FXHJcbi8vQ1NTT00uQ1NTSG9zdFJ1bGUucHJvdG90eXBlLmluc2VydFJ1bGUgPSBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5pbnNlcnRSdWxlO1xyXG4vL0NTU09NLkNTU0hvc3RSdWxlLnByb3RvdHlwZS5kZWxldGVSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuZGVsZXRlUnVsZTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDU1NPTS5DU1NIb3N0UnVsZS5wcm90b3R5cGUsIFwiY3NzVGV4dFwiLCB7XHJcblx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBjc3NUZXh0cyA9IFtdO1xyXG5cdFx0Zm9yICh2YXIgaT0wLCBsZW5ndGg9dGhpcy5jc3NSdWxlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjc3NUZXh0cy5wdXNoKHRoaXMuY3NzUnVsZXNbaV0uY3NzVGV4dCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gXCJAaG9zdCB7XCIgKyBjc3NUZXh0cy5qb2luKFwiXCIpICsgXCJ9XCI7XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLkNTU0hvc3RSdWxlID0gQ1NTT00uQ1NTSG9zdFJ1bGU7XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3Nzb20vI3RoZS1zdHlsZXNoZWV0LWludGVyZmFjZVxyXG4gKi9cclxuQ1NTT00uU3R5bGVTaGVldCA9IGZ1bmN0aW9uIFN0eWxlU2hlZXQoKSB7XHJcblx0dGhpcy5wYXJlbnRTdHlsZVNoZWV0ID0gbnVsbDtcclxufTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLlN0eWxlU2hlZXQgPSBDU1NPTS5TdHlsZVNoZWV0O1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLVN0eWxlL2Nzcy5odG1sI0NTUy1DU1NTdHlsZVNoZWV0XHJcbiAqL1xyXG5DU1NPTS5DU1NTdHlsZVNoZWV0ID0gZnVuY3Rpb24gQ1NTU3R5bGVTaGVldCgpIHtcclxuXHRDU1NPTS5TdHlsZVNoZWV0LmNhbGwodGhpcyk7XHJcblx0dGhpcy5jc3NSdWxlcyA9IFtdO1xyXG59O1xyXG5cclxuXHJcbkNTU09NLkNTU1N0eWxlU2hlZXQucHJvdG90eXBlID0gbmV3IENTU09NLlN0eWxlU2hlZXQoKTtcclxuQ1NTT00uQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDU1NPTS5DU1NTdHlsZVNoZWV0O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBVc2VkIHRvIGluc2VydCBhIG5ldyBydWxlIGludG8gdGhlIHN0eWxlIHNoZWV0LiBUaGUgbmV3IHJ1bGUgbm93IGJlY29tZXMgcGFydCBvZiB0aGUgY2FzY2FkZS5cclxuICpcclxuICogICBzaGVldCA9IG5ldyBTaGVldChcImJvZHkge21hcmdpbjogMH1cIilcclxuICogICBzaGVldC50b1N0cmluZygpXHJcbiAqICAgLT4gXCJib2R5e21hcmdpbjowO31cIlxyXG4gKiAgIHNoZWV0Lmluc2VydFJ1bGUoXCJpbWcge2JvcmRlcjogbm9uZX1cIiwgMClcclxuICogICAtPiAwXHJcbiAqICAgc2hlZXQudG9TdHJpbmcoKVxyXG4gKiAgIC0+IFwiaW1ne2JvcmRlcjpub25lO31ib2R5e21hcmdpbjowO31cIlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcnVsZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1TdHlsZS9jc3MuaHRtbCNDU1MtQ1NTU3R5bGVTaGVldC1pbnNlcnRSdWxlXHJcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGluZGV4IHdpdGhpbiB0aGUgc3R5bGUgc2hlZXQncyBydWxlIGNvbGxlY3Rpb24gb2YgdGhlIG5ld2x5IGluc2VydGVkIHJ1bGUuXHJcbiAqL1xyXG5DU1NPTS5DU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5pbnNlcnRSdWxlID0gZnVuY3Rpb24ocnVsZSwgaW5kZXgpIHtcclxuXHRpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5jc3NSdWxlcy5sZW5ndGgpIHtcclxuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKFwiSU5ERVhfU0laRV9FUlJcIik7XHJcblx0fVxyXG5cdHZhciBjc3NSdWxlID0gQ1NTT00ucGFyc2UocnVsZSkuY3NzUnVsZXNbMF07XHJcblx0Y3NzUnVsZS5wYXJlbnRTdHlsZVNoZWV0ID0gdGhpcztcclxuXHR0aGlzLmNzc1J1bGVzLnNwbGljZShpbmRleCwgMCwgY3NzUnVsZSk7XHJcblx0cmV0dXJuIGluZGV4O1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBVc2VkIHRvIGRlbGV0ZSBhIHJ1bGUgZnJvbSB0aGUgc3R5bGUgc2hlZXQuXHJcbiAqXHJcbiAqICAgc2hlZXQgPSBuZXcgU2hlZXQoXCJpbWd7Ym9yZGVyOm5vbmV9IGJvZHl7bWFyZ2luOjB9XCIpXHJcbiAqICAgc2hlZXQudG9TdHJpbmcoKVxyXG4gKiAgIC0+IFwiaW1ne2JvcmRlcjpub25lO31ib2R5e21hcmdpbjowO31cIlxyXG4gKiAgIHNoZWV0LmRlbGV0ZVJ1bGUoMClcclxuICogICBzaGVldC50b1N0cmluZygpXHJcbiAqICAgLT4gXCJib2R5e21hcmdpbjowO31cIlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggd2l0aGluIHRoZSBzdHlsZSBzaGVldCdzIHJ1bGUgbGlzdCBvZiB0aGUgcnVsZSB0byByZW1vdmUuXHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU1N0eWxlU2hlZXQtZGVsZXRlUnVsZVxyXG4gKi9cclxuQ1NTT00uQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuZGVsZXRlUnVsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0aWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmNzc1J1bGVzLmxlbmd0aCkge1xyXG5cdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJTkRFWF9TSVpFX0VSUlwiKTtcclxuXHR9XHJcblx0dGhpcy5jc3NSdWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBOT04tU1RBTkRBUkRcclxuICogQHJldHVybiB7c3RyaW5nfSBzZXJpYWxpemUgc3R5bGVzaGVldFxyXG4gKi9cclxuQ1NTT00uQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHR2YXIgcnVsZXMgPSB0aGlzLmNzc1J1bGVzO1xyXG5cdGZvciAodmFyIGk9MDsgaTxydWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0cmVzdWx0ICs9IHJ1bGVzW2ldLmNzc1RleHQgKyBcIlxcblwiO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuQ1NTU3R5bGVTaGVldCA9IENTU09NLkNTU1N0eWxlU2hlZXQ7XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1hbmltYXRpb25zLyNET00tQ1NTS2V5ZnJhbWVzUnVsZVxyXG4gKi9cclxuQ1NTT00uQ1NTS2V5ZnJhbWVzUnVsZSA9IGZ1bmN0aW9uIENTU0tleWZyYW1lc1J1bGUoKSB7XHJcblx0Q1NTT00uQ1NTUnVsZS5jYWxsKHRoaXMpO1xyXG5cdHRoaXMubmFtZSA9ICcnO1xyXG5cdHRoaXMuY3NzUnVsZXMgPSBbXTtcclxufTtcclxuXHJcbkNTU09NLkNTU0tleWZyYW1lc1J1bGUucHJvdG90eXBlID0gbmV3IENTU09NLkNTU1J1bGUoKTtcclxuQ1NTT00uQ1NTS2V5ZnJhbWVzUnVsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDU1NPTS5DU1NLZXlmcmFtZXNSdWxlO1xyXG5DU1NPTS5DU1NLZXlmcmFtZXNSdWxlLnByb3RvdHlwZS50eXBlID0gODtcclxuLy9GSVhNRVxyXG4vL0NTU09NLkNTU0tleWZyYW1lc1J1bGUucHJvdG90eXBlLmluc2VydFJ1bGUgPSBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5pbnNlcnRSdWxlO1xyXG4vL0NTU09NLkNTU0tleWZyYW1lc1J1bGUucHJvdG90eXBlLmRlbGV0ZVJ1bGUgPSBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWxldGVSdWxlO1xyXG5cclxuLy8gaHR0cDovL3d3dy5vcGVuc291cmNlLmFwcGxlLmNvbS9zb3VyY2UvV2ViQ29yZS9XZWJDb3JlLTk1NS42Ni4xL2Nzcy9XZWJLaXRDU1NLZXlmcmFtZXNSdWxlLmNwcFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ1NTT00uQ1NTS2V5ZnJhbWVzUnVsZS5wcm90b3R5cGUsIFwiY3NzVGV4dFwiLCB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjc3NUZXh0cyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaT0wLCBsZW5ndGg9dGhpcy5jc3NSdWxlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjc3NUZXh0cy5wdXNoKFwiICBcIiArIHRoaXMuY3NzUnVsZXNbaV0uY3NzVGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJAXCIgKyAodGhpcy5fdmVuZG9yUHJlZml4IHx8ICcnKSArIFwia2V5ZnJhbWVzIFwiICsgdGhpcy5uYW1lICsgXCIgeyBcXG5cIiArIGNzc1RleHRzLmpvaW4oXCJcXG5cIikgKyBcIlxcbn1cIjtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuQ1NTS2V5ZnJhbWVzUnVsZSA9IENTU09NLkNTU0tleWZyYW1lc1J1bGU7XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1hbmltYXRpb25zLyNET00tQ1NTS2V5ZnJhbWVSdWxlXHJcbiAqL1xyXG5DU1NPTS5DU1NLZXlmcmFtZVJ1bGUgPSBmdW5jdGlvbiBDU1NLZXlmcmFtZVJ1bGUoKSB7XHJcblx0Q1NTT00uQ1NTUnVsZS5jYWxsKHRoaXMpO1xyXG5cdHRoaXMua2V5VGV4dCA9ICcnO1xyXG5cdHRoaXMuc3R5bGUgPSBuZXcgQ1NTT00uQ1NTU3R5bGVEZWNsYXJhdGlvbigpO1xyXG5cdHRoaXMuc3R5bGUucGFyZW50UnVsZSA9IHRoaXM7XHJcbn07XHJcblxyXG5DU1NPTS5DU1NLZXlmcmFtZVJ1bGUucHJvdG90eXBlID0gbmV3IENTU09NLkNTU1J1bGUoKTtcclxuQ1NTT00uQ1NTS2V5ZnJhbWVSdWxlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENTU09NLkNTU0tleWZyYW1lUnVsZTtcclxuQ1NTT00uQ1NTS2V5ZnJhbWVSdWxlLnByb3RvdHlwZS50eXBlID0gOTtcclxuLy9GSVhNRVxyXG4vL0NTU09NLkNTU0tleWZyYW1lUnVsZS5wcm90b3R5cGUuaW5zZXJ0UnVsZSA9IENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmluc2VydFJ1bGU7XHJcbi8vQ1NTT00uQ1NTS2V5ZnJhbWVSdWxlLnByb3RvdHlwZS5kZWxldGVSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuZGVsZXRlUnVsZTtcclxuXHJcbi8vIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5hcHBsZS5jb20vc291cmNlL1dlYkNvcmUvV2ViQ29yZS05NTUuNjYuMS9jc3MvV2ViS2l0Q1NTS2V5ZnJhbWVSdWxlLmNwcFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ1NTT00uQ1NTS2V5ZnJhbWVSdWxlLnByb3RvdHlwZSwgXCJjc3NUZXh0XCIsIHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMua2V5VGV4dCArIFwiIHtcIiArIHRoaXMuc3R5bGUuY3NzVGV4dCArIFwifSBcIjtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuQ1NTS2V5ZnJhbWVSdWxlID0gQ1NTT00uQ1NTS2V5ZnJhbWVSdWxlO1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0NTUy9ALW1vei1kb2N1bWVudFxyXG4gKi9cclxuQ1NTT00uTWF0Y2hlckxpc3QgPSBmdW5jdGlvbiBNYXRjaGVyTGlzdCgpe1xyXG4gICAgdGhpcy5sZW5ndGggPSAwO1xyXG59O1xyXG5cclxuQ1NTT00uTWF0Y2hlckxpc3QucHJvdG90eXBlID0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBDU1NPTS5NYXRjaGVyTGlzdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0IG1hdGNoZXJUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKHRoaXMsIFwiLCBcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHNldCBtYXRjaGVyVGV4dCh2YWx1ZSkge1xyXG4gICAgICAgIC8vIGp1c3QgYSB0ZW1wb3Jhcnkgc29sdXRpb24sIGFjdHVhbGx5IGl0IG1heSBiZSB3cm9uZyBieSBqdXN0IHNwbGl0IHRoZSB2YWx1ZSB3aXRoICcsJywgYmVjYXVzZSBhIHVybCBjYW4gaW5jbHVkZSAnLCcuXHJcbiAgICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzW2ldID0gdmFsdWVzW2ldLnRyaW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoZXJcclxuICAgICAqL1xyXG4gICAgYXBwZW5kTWF0Y2hlcjogZnVuY3Rpb24obWF0Y2hlcikge1xyXG4gICAgICAgIGlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIG1hdGNoZXIpID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzW3RoaXMubGVuZ3RoXSA9IG1hdGNoZXI7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZU1hdGNoZXI6IGZ1bmN0aW9uKG1hdGNoZXIpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIG1hdGNoZXIpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKHRoaXMsIGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuTWF0Y2hlckxpc3QgPSBDU1NPTS5NYXRjaGVyTGlzdDtcclxuLy8vQ29tbW9uSlNcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9DU1MvQC1tb3otZG9jdW1lbnRcclxuICovXHJcbkNTU09NLkNTU0RvY3VtZW50UnVsZSA9IGZ1bmN0aW9uIENTU0RvY3VtZW50UnVsZSgpIHtcclxuICAgIENTU09NLkNTU1J1bGUuY2FsbCh0aGlzKTtcclxuICAgIHRoaXMubWF0Y2hlciA9IG5ldyBDU1NPTS5NYXRjaGVyTGlzdCgpO1xyXG4gICAgdGhpcy5jc3NSdWxlcyA9IFtdO1xyXG59O1xyXG5cclxuQ1NTT00uQ1NTRG9jdW1lbnRSdWxlLnByb3RvdHlwZSA9IG5ldyBDU1NPTS5DU1NSdWxlKCk7XHJcbkNTU09NLkNTU0RvY3VtZW50UnVsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDU1NPTS5DU1NEb2N1bWVudFJ1bGU7XHJcbkNTU09NLkNTU0RvY3VtZW50UnVsZS5wcm90b3R5cGUudHlwZSA9IDEwO1xyXG4vL0ZJWE1FXHJcbi8vQ1NTT00uQ1NTRG9jdW1lbnRSdWxlLnByb3RvdHlwZS5pbnNlcnRSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuaW5zZXJ0UnVsZTtcclxuLy9DU1NPTS5DU1NEb2N1bWVudFJ1bGUucHJvdG90eXBlLmRlbGV0ZVJ1bGUgPSBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWxldGVSdWxlO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENTU09NLkNTU0RvY3VtZW50UnVsZS5wcm90b3R5cGUsIFwiY3NzVGV4dFwiLCB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjc3NUZXh0cyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaT0wLCBsZW5ndGg9dGhpcy5jc3NSdWxlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNzc1RleHRzLnB1c2godGhpcy5jc3NSdWxlc1tpXS5jc3NUZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIkAtbW96LWRvY3VtZW50IFwiICsgdGhpcy5tYXRjaGVyLm1hdGNoZXJUZXh0ICsgXCIge1wiICsgY3NzVGV4dHMuam9pbihcIlwiKSArIFwifVwiO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5DU1NEb2N1bWVudFJ1bGUgPSBDU1NPTS5DU1NEb2N1bWVudFJ1bGU7XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU1ZhbHVlXHJcbiAqXHJcbiAqIFRPRE86IGFkZCBpZiBuZWVkZWRcclxuICovXHJcbkNTU09NLkNTU1ZhbHVlID0gZnVuY3Rpb24gQ1NTVmFsdWUoKSB7XHJcbn07XHJcblxyXG5DU1NPTS5DU1NWYWx1ZS5wcm90b3R5cGUgPSB7XHJcblx0Y29uc3RydWN0b3I6IENTU09NLkNTU1ZhbHVlLFxyXG5cclxuXHQvLyBAc2VlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1TdHlsZS9jc3MuaHRtbCNDU1MtQ1NTVmFsdWVcclxuXHRzZXQgY3NzVGV4dCh0ZXh0KSB7XHJcblx0XHR2YXIgbmFtZSA9IHRoaXMuX2dldENvbnN0cnVjdG9yTmFtZSgpO1xyXG5cclxuXHRcdHRocm93IG5ldyBFcnJvcignRE9NRXhjZXB0aW9uOiBwcm9wZXJ0eSBcImNzc1RleHRcIiBvZiBcIicgKyBuYW1lICsgJ1wiIGlzIHJlYWRvbmx5IGFuZCBjYW4gbm90IGJlIHJlcGxhY2VkIHdpdGggXCInICsgdGV4dCArICdcIiEnKTtcclxuXHR9LFxyXG5cclxuXHRnZXQgY3NzVGV4dCgpIHtcclxuXHRcdHZhciBuYW1lID0gdGhpcy5fZ2V0Q29uc3RydWN0b3JOYW1lKCk7XHJcblxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdnZXR0ZXIgXCJjc3NUZXh0XCIgb2YgXCInICsgbmFtZSArICdcIiBpcyBub3QgaW1wbGVtZW50ZWQhJyk7XHJcblx0fSxcclxuXHJcblx0X2dldENvbnN0cnVjdG9yTmFtZTogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcyA9IHRoaXMuY29uc3RydWN0b3IudG9TdHJpbmcoKSxcclxuXHRcdFx0XHRjID0gcy5tYXRjaCgvZnVuY3Rpb25cXHMoW15cXChdKykvKSxcclxuXHRcdFx0XHRuYW1lID0gY1sxXTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5DU1NWYWx1ZSA9IENTU09NLkNTU1ZhbHVlO1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzYzNCh2PXZzLjg1KS5hc3B4XHJcbiAqXHJcbiAqL1xyXG5DU1NPTS5DU1NWYWx1ZUV4cHJlc3Npb24gPSBmdW5jdGlvbiBDU1NWYWx1ZUV4cHJlc3Npb24odG9rZW4sIGlkeCkge1xyXG5cdHRoaXMuX3Rva2VuID0gdG9rZW47XHJcblx0dGhpcy5faWR4ID0gaWR4O1xyXG59O1xyXG5cclxuQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uLnByb3RvdHlwZSA9IG5ldyBDU1NPTS5DU1NWYWx1ZSgpO1xyXG5DU1NPTS5DU1NWYWx1ZUV4cHJlc3Npb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uO1xyXG5cclxuLyoqXHJcbiAqIHBhcnNlIGNzcyBleHByZXNzaW9uKCkgdmFsdWVcclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiAgICAgICAgIC0gZXJyb3I6XHJcbiAqICAgICAgICAgb3JcclxuICogICAgICAgICAtIGlkeDpcclxuICogICAgICAgICAtIGV4cHJlc3Npb246XHJcbiAqXHJcbiAqIEV4YW1wbGU6XHJcbiAqXHJcbiAqIC5zZWxlY3RvciB7XHJcbiAqXHRcdHpvb206IGV4cHJlc3Npb24oZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gMTAwMCA/ICcxMDAwcHgnIDogJ2F1dG8nKTtcclxuICogfVxyXG4gKi9cclxuQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciB0b2tlbiA9IHRoaXMuX3Rva2VuLFxyXG5cdFx0XHRpZHggPSB0aGlzLl9pZHg7XHJcblxyXG5cdHZhciBjaGFyYWN0ZXIgPSAnJyxcclxuXHRcdFx0ZXhwcmVzc2lvbiA9ICcnLFxyXG5cdFx0XHRlcnJvciA9ICcnLFxyXG5cdFx0XHRpbmZvLFxyXG5cdFx0XHRwYXJlbiA9IFtdO1xyXG5cclxuXHJcblx0Zm9yICg7IDsgKytpZHgpIHtcclxuXHRcdGNoYXJhY3RlciA9IHRva2VuLmNoYXJBdChpZHgpO1xyXG5cclxuXHRcdC8vIGVuZCBvZiB0b2tlblxyXG5cdFx0aWYgKGNoYXJhY3RlciA9PT0gJycpIHtcclxuXHRcdFx0ZXJyb3IgPSAnY3NzIGV4cHJlc3Npb24gZXJyb3I6IHVuZmluaXNoZWQgZXhwcmVzc2lvbiEnO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2goY2hhcmFjdGVyKSB7XHJcblx0XHRcdGNhc2UgJygnOlxyXG5cdFx0XHRcdHBhcmVuLnB1c2goY2hhcmFjdGVyKTtcclxuXHRcdFx0XHRleHByZXNzaW9uICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJyknOlxyXG5cdFx0XHRcdHBhcmVuLnBvcChjaGFyYWN0ZXIpO1xyXG5cdFx0XHRcdGV4cHJlc3Npb24gKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnLyc6XHJcblx0XHRcdFx0aWYgKChpbmZvID0gdGhpcy5fcGFyc2VKU0NvbW1lbnQodG9rZW4sIGlkeCkpKSB7IC8vIGNvbW1lbnQ/XHJcblx0XHRcdFx0XHRpZiAoaW5mby5lcnJvcikge1xyXG5cdFx0XHRcdFx0XHRlcnJvciA9ICdjc3MgZXhwcmVzc2lvbiBlcnJvcjogdW5maW5pc2hlZCBjb21tZW50IGluIGV4cHJlc3Npb24hJztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlkeCA9IGluZm8uaWR4O1xyXG5cdFx0XHRcdFx0XHQvLyBpZ25vcmUgdGhlIGNvbW1lbnRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKChpbmZvID0gdGhpcy5fcGFyc2VKU1JleEV4cCh0b2tlbiwgaWR4KSkpIHsgLy8gcmVnZXhwXHJcblx0XHRcdFx0XHRpZHggPSBpbmZvLmlkeDtcclxuXHRcdFx0XHRcdGV4cHJlc3Npb24gKz0gaW5mby50ZXh0O1xyXG5cdFx0XHRcdH0gZWxzZSB7IC8vIG90aGVyXHJcblx0XHRcdFx0XHRleHByZXNzaW9uICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwiJ1wiOlxyXG5cdFx0XHRjYXNlICdcIic6XHJcblx0XHRcdFx0aW5mbyA9IHRoaXMuX3BhcnNlSlNTdHJpbmcodG9rZW4sIGlkeCwgY2hhcmFjdGVyKTtcclxuXHRcdFx0XHRpZiAoaW5mbykgeyAvLyBzdHJpbmdcclxuXHRcdFx0XHRcdGlkeCA9IGluZm8uaWR4O1xyXG5cdFx0XHRcdFx0ZXhwcmVzc2lvbiArPSBpbmZvLnRleHQ7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGV4cHJlc3Npb24gKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0ZXhwcmVzc2lvbiArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGVycm9yKSB7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGVuZCBvZiBleHByZXNzaW9uXHJcblx0XHRpZiAocGFyZW4ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIHJldDtcclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdHJldCA9IHtcclxuXHRcdFx0ZXJyb3I6IGVycm9yXHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXQgPSB7XHJcblx0XHRcdGlkeDogaWR4LFxyXG5cdFx0XHRleHByZXNzaW9uOiBleHByZXNzaW9uXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJldDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fGZhbHNlfVxyXG4gKiAgICAgICAgICAtIGlkeDpcclxuICogICAgICAgICAgLSB0ZXh0OlxyXG4gKiAgICAgICAgICBvclxyXG4gKiAgICAgICAgICAtIGVycm9yOlxyXG4gKiAgICAgICAgICBvclxyXG4gKiAgICAgICAgICBmYWxzZVxyXG4gKlxyXG4gKi9cclxuQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uLnByb3RvdHlwZS5fcGFyc2VKU0NvbW1lbnQgPSBmdW5jdGlvbih0b2tlbiwgaWR4KSB7XHJcblx0dmFyIG5leHRDaGFyID0gdG9rZW4uY2hhckF0KGlkeCArIDEpLFxyXG5cdFx0XHR0ZXh0O1xyXG5cclxuXHRpZiAobmV4dENoYXIgPT09ICcvJyB8fCBuZXh0Q2hhciA9PT0gJyonKSB7XHJcblx0XHR2YXIgc3RhcnRJZHggPSBpZHgsXHJcblx0XHRcdFx0ZW5kSWR4LFxyXG5cdFx0XHRcdGNvbW1lbnRFbmRDaGFyO1xyXG5cclxuXHRcdGlmIChuZXh0Q2hhciA9PT0gJy8nKSB7IC8vIGxpbmUgY29tbWVudFxyXG5cdFx0XHRjb21tZW50RW5kQ2hhciA9ICdcXG4nO1xyXG5cdFx0fSBlbHNlIGlmIChuZXh0Q2hhciA9PT0gJyonKSB7IC8vIGJsb2NrIGNvbW1lbnRcclxuXHRcdFx0Y29tbWVudEVuZENoYXIgPSAnKi8nO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVuZElkeCA9IHRva2VuLmluZGV4T2YoY29tbWVudEVuZENoYXIsIHN0YXJ0SWR4ICsgMSArIDEpO1xyXG5cdFx0aWYgKGVuZElkeCAhPT0gLTEpIHtcclxuXHRcdFx0ZW5kSWR4ID0gZW5kSWR4ICsgY29tbWVudEVuZENoYXIubGVuZ3RoIC0gMTtcclxuXHRcdFx0dGV4dCA9IHRva2VuLnN1YnN0cmluZyhpZHgsIGVuZElkeCArIDEpO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlkeDogZW5kSWR4LFxyXG5cdFx0XHRcdHRleHQ6IHRleHRcclxuXHRcdFx0fTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBlcnJvciA9ICdjc3MgZXhwcmVzc2lvbiBlcnJvcjogdW5maW5pc2hlZCBjb21tZW50IGluIGV4cHJlc3Npb24hJztcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRlcnJvcjogZXJyb3JcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKipcclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fGZhbHNlfVxyXG4gKlx0XHRcdFx0XHQtIGlkeDpcclxuICpcdFx0XHRcdFx0LSB0ZXh0OlxyXG4gKlx0XHRcdFx0XHRvclxyXG4gKlx0XHRcdFx0XHRmYWxzZVxyXG4gKlxyXG4gKi9cclxuQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uLnByb3RvdHlwZS5fcGFyc2VKU1N0cmluZyA9IGZ1bmN0aW9uKHRva2VuLCBpZHgsIHNlcCkge1xyXG5cdHZhciBlbmRJZHggPSB0aGlzLl9maW5kTWF0Y2hlZElkeCh0b2tlbiwgaWR4LCBzZXApLFxyXG5cdFx0XHR0ZXh0O1xyXG5cclxuXHRpZiAoZW5kSWR4ID09PSAtMSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0ZXh0ID0gdG9rZW4uc3Vic3RyaW5nKGlkeCwgZW5kSWR4ICsgc2VwLmxlbmd0aCk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aWR4OiBlbmRJZHgsXHJcblx0XHRcdHRleHQ6IHRleHRcclxuXHRcdH07XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBwYXJzZSByZWdleHAgaW4gY3NzIGV4cHJlc3Npb25cclxuICpcclxuICogQHJldHVybiB7T2JqZWN0fGZhbHNlfVxyXG4gKlx0XHRcdFx0LSBpZHg6XHJcbiAqXHRcdFx0XHQtIHJlZ0V4cDpcclxuICpcdFx0XHRcdG9yXHJcbiAqXHRcdFx0XHRmYWxzZVxyXG4gKi9cclxuXHJcbi8qXHJcblxyXG5hbGwgbGVnYWwgUmVnRXhwXHJcblxyXG4vYS9cclxuKC9hLylcclxuWy9hL11cclxuWzEyLCAvYS9dXHJcblxyXG4hL2EvXHJcblxyXG4rL2EvXHJcbi0vYS9cclxuKiAvYS9cclxuLyAvYS9cclxuJS9hL1xyXG5cclxuPT09L2EvXHJcbiE9PS9hL1xyXG49PS9hL1xyXG4hPS9hL1xyXG4+L2EvXHJcbj49L2EvXHJcbjwvYS9cclxuPD0vYS9cclxuXHJcbiYvYS9cclxufC9hL1xyXG5eL2EvXHJcbn4vYS9cclxuPDwvYS9cclxuPj4vYS9cclxuPj4+L2EvXHJcblxyXG4mJi9hL1xyXG58fC9hL1xyXG4/L2EvXHJcbj0vYS9cclxuLC9hL1xyXG5cclxuXHRcdGRlbGV0ZSAvYS9cclxuXHRcdFx0XHRpbiAvYS9cclxuaW5zdGFuY2VvZiAvYS9cclxuXHRcdFx0XHRuZXcgL2EvXHJcblx0XHR0eXBlb2YgL2EvXHJcblx0XHRcdHZvaWQgL2EvXHJcblxyXG4qL1xyXG5DU1NPTS5DU1NWYWx1ZUV4cHJlc3Npb24ucHJvdG90eXBlLl9wYXJzZUpTUmV4RXhwID0gZnVuY3Rpb24odG9rZW4sIGlkeCkge1xyXG5cdHZhciBiZWZvcmUgPSB0b2tlbi5zdWJzdHJpbmcoMCwgaWR4KS5yZXBsYWNlKC9cXHMrJC8sIFwiXCIpLFxyXG5cdFx0XHRsZWdhbFJlZ3ggPSBbXHJcblx0XHRcdFx0L14kLyxcclxuXHRcdFx0XHQvXFwoJC8sXHJcblx0XHRcdFx0L1xcWyQvLFxyXG5cdFx0XHRcdC9cXCEkLyxcclxuXHRcdFx0XHQvXFwrJC8sXHJcblx0XHRcdFx0L1xcLSQvLFxyXG5cdFx0XHRcdC9cXCokLyxcclxuXHRcdFx0XHQvXFwvXFxzKy8sXHJcblx0XHRcdFx0L1xcJSQvLFxyXG5cdFx0XHRcdC9cXD0kLyxcclxuXHRcdFx0XHQvXFw+JC8sXHJcblx0XHRcdFx0LzwkLyxcclxuXHRcdFx0XHQvXFwmJC8sXHJcblx0XHRcdFx0L1xcfCQvLFxyXG5cdFx0XHRcdC9cXF4kLyxcclxuXHRcdFx0XHQvXFx+JC8sXHJcblx0XHRcdFx0L1xcPyQvLFxyXG5cdFx0XHRcdC9cXCwkLyxcclxuXHRcdFx0XHQvZGVsZXRlJC8sXHJcblx0XHRcdFx0L2luJC8sXHJcblx0XHRcdFx0L2luc3RhbmNlb2YkLyxcclxuXHRcdFx0XHQvbmV3JC8sXHJcblx0XHRcdFx0L3R5cGVvZiQvLFxyXG5cdFx0XHRcdC92b2lkJC9cclxuXHRcdFx0XTtcclxuXHJcblx0dmFyIGlzTGVnYWwgPSBsZWdhbFJlZ3guc29tZShmdW5jdGlvbihyZWcpIHtcclxuXHRcdHJldHVybiByZWcudGVzdChiZWZvcmUpO1xyXG5cdH0pO1xyXG5cclxuXHRpZiAoIWlzTGVnYWwpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIHNlcCA9ICcvJztcclxuXHJcblx0XHQvLyBzYW1lIGxvZ2ljIGFzIHN0cmluZ1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhcnNlSlNTdHJpbmcodG9rZW4sIGlkeCwgc2VwKTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIGZpbmQgbmV4dCBzZXAoc2FtZSBsaW5lKSBpbmRleCBpbiBgdG9rZW5gXHJcbiAqXHJcbiAqIEByZXR1cm4ge051bWJlcn1cclxuICpcclxuICovXHJcbkNTU09NLkNTU1ZhbHVlRXhwcmVzc2lvbi5wcm90b3R5cGUuX2ZpbmRNYXRjaGVkSWR4ID0gZnVuY3Rpb24odG9rZW4sIGlkeCwgc2VwKSB7XHJcblx0dmFyIHN0YXJ0SWR4ID0gaWR4LFxyXG5cdFx0XHRlbmRJZHg7XHJcblxyXG5cdHZhciBOT1RfRk9VTkQgPSAtMTtcclxuXHJcblx0d2hpbGUodHJ1ZSkge1xyXG5cdFx0ZW5kSWR4ID0gdG9rZW4uaW5kZXhPZihzZXAsIHN0YXJ0SWR4ICsgMSk7XHJcblxyXG5cdFx0aWYgKGVuZElkeCA9PT0gLTEpIHsgLy8gbm90IGZvdW5kXHJcblx0XHRcdGVuZElkeCA9IE5PVF9GT1VORDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgdGV4dCA9IHRva2VuLnN1YnN0cmluZyhpZHggKyAxLCBlbmRJZHgpLFxyXG5cdFx0XHRcdFx0bWF0Y2hlZCA9IHRleHQubWF0Y2goL1xcXFwrJC8pO1xyXG5cdFx0XHRpZiAoIW1hdGNoZWQgfHwgbWF0Y2hlZFswXSAlIDIgPT09IDApIHsgLy8gbm90IGVzY2FwZWRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzdGFydElkeCA9IGVuZElkeDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gYm91bmRhcnkgbXVzdCBiZSBpbiB0aGUgc2FtZSBsaW5lKGpzIHN0aW5nIG9yIHJlZ2V4cClcclxuXHR2YXIgbmV4dE5ld0xpbmVJZHggPSB0b2tlbi5pbmRleE9mKCdcXG4nLCBpZHggKyAxKTtcclxuXHRpZiAobmV4dE5ld0xpbmVJZHggPCBlbmRJZHgpIHtcclxuXHRcdGVuZElkeCA9IE5PVF9GT1VORDtcclxuXHR9XHJcblxyXG5cclxuXHRyZXR1cm4gZW5kSWR4O1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5DU1NWYWx1ZUV4cHJlc3Npb24gPSBDU1NPTS5DU1NWYWx1ZUV4cHJlc3Npb247XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXHJcbiAqL1xyXG5DU1NPTS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKHRva2VuKSB7XHJcblxyXG5cdHZhciBpID0gMDtcclxuXHJcblx0LyoqXHJcblx0XHRcImJlZm9yZS1zZWxlY3RvclwiIG9yXHJcblx0XHRcInNlbGVjdG9yXCIgb3JcclxuXHRcdFwiYXRSdWxlXCIgb3JcclxuXHRcdFwiYXRCbG9ja1wiIG9yXHJcblx0XHRcImJlZm9yZS1uYW1lXCIgb3JcclxuXHRcdFwibmFtZVwiIG9yXHJcblx0XHRcImJlZm9yZS12YWx1ZVwiIG9yXHJcblx0XHRcInZhbHVlXCJcclxuXHQqL1xyXG5cdHZhciBzdGF0ZSA9IFwiYmVmb3JlLXNlbGVjdG9yXCI7XHJcblxyXG5cdHZhciBpbmRleDtcclxuXHR2YXIgYnVmZmVyID0gXCJcIjtcclxuXHR2YXIgdmFsdWVQYXJlbnRoZXNpc0RlcHRoID0gMDtcclxuXHJcblx0dmFyIFNJR05JRklDQU5UX1dISVRFU1BBQ0UgPSB7XHJcblx0XHRcInNlbGVjdG9yXCI6IHRydWUsXHJcblx0XHRcInZhbHVlXCI6IHRydWUsXHJcblx0XHRcInZhbHVlLXBhcmVudGhlc2lzXCI6IHRydWUsXHJcblx0XHRcImF0UnVsZVwiOiB0cnVlLFxyXG5cdFx0XCJpbXBvcnRSdWxlLWJlZ2luXCI6IHRydWUsXHJcblx0XHRcImltcG9ydFJ1bGVcIjogdHJ1ZSxcclxuXHRcdFwiYXRCbG9ja1wiOiB0cnVlLFxyXG5cdFx0J2RvY3VtZW50UnVsZS1iZWdpbic6IHRydWVcclxuXHR9O1xyXG5cclxuXHR2YXIgc3R5bGVTaGVldCA9IG5ldyBDU1NPTS5DU1NTdHlsZVNoZWV0KCk7XHJcblxyXG5cdC8vIEB0eXBlIENTU1N0eWxlU2hlZXR8Q1NTTWVkaWFSdWxlfENTU0ZvbnRGYWNlUnVsZXxDU1NLZXlmcmFtZXNSdWxlfENTU0RvY3VtZW50UnVsZVxyXG5cdHZhciBjdXJyZW50U2NvcGUgPSBzdHlsZVNoZWV0O1xyXG5cclxuXHQvLyBAdHlwZSBDU1NNZWRpYVJ1bGV8Q1NTS2V5ZnJhbWVzUnVsZXxDU1NEb2N1bWVudFJ1bGVcclxuXHR2YXIgcGFyZW50UnVsZTtcclxuXHJcblx0dmFyIG5hbWUsIHByaW9yaXR5PVwiXCIsIHN0eWxlUnVsZSwgbWVkaWFSdWxlLCBpbXBvcnRSdWxlLCBmb250RmFjZVJ1bGUsIGtleWZyYW1lc1J1bGUsIGRvY3VtZW50UnVsZSwgaG9zdFJ1bGU7XHJcblxyXG5cdHZhciBhdEtleWZyYW1lc1JlZ0V4cCA9IC9AKC0oPzpcXHcrLSkrKT9rZXlmcmFtZXMvZztcclxuXHJcblx0dmFyIHBhcnNlRXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XHJcblx0XHR2YXIgbGluZXMgPSB0b2tlbi5zdWJzdHJpbmcoMCwgaSkuc3BsaXQoJ1xcbicpO1xyXG5cdFx0dmFyIGxpbmVDb3VudCA9IGxpbmVzLmxlbmd0aDtcclxuXHRcdHZhciBjaGFyQ291bnQgPSBsaW5lcy5wb3AoKS5sZW5ndGggKyAxO1xyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UgKyAnIChsaW5lICcgKyBsaW5lQ291bnQgKyAnLCBjaGFyICcgKyBjaGFyQ291bnQgKyAnKScpO1xyXG5cdFx0ZXJyb3IubGluZSA9IGxpbmVDb3VudDtcclxuXHRcdC8qIGpzaGludCBzdWIgOiB0cnVlICovXHJcblx0XHRlcnJvclsnY2hhciddID0gY2hhckNvdW50O1xyXG5cdFx0ZXJyb3Iuc3R5bGVTaGVldCA9IHN0eWxlU2hlZXQ7XHJcblx0XHR0aHJvdyBlcnJvcjtcclxuXHR9O1xyXG5cclxuXHRmb3IgKHZhciBjaGFyYWN0ZXI7IChjaGFyYWN0ZXIgPSB0b2tlbi5jaGFyQXQoaSkpOyBpKyspIHtcclxuXHJcblx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xyXG5cclxuXHRcdGNhc2UgXCIgXCI6XHJcblx0XHRjYXNlIFwiXFx0XCI6XHJcblx0XHRjYXNlIFwiXFxyXCI6XHJcblx0XHRjYXNlIFwiXFxuXCI6XHJcblx0XHRjYXNlIFwiXFxmXCI6XHJcblx0XHRcdGlmIChTSUdOSUZJQ0FOVF9XSElURVNQQUNFW3N0YXRlXSkge1xyXG5cdFx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Ly8gU3RyaW5nXHJcblx0XHRjYXNlICdcIic6XHJcblx0XHRcdGluZGV4ID0gaSArIDE7XHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHRpbmRleCA9IHRva2VuLmluZGV4T2YoJ1wiJywgaW5kZXgpICsgMTtcclxuXHRcdFx0XHRpZiAoIWluZGV4KSB7XHJcblx0XHRcdFx0XHRwYXJzZUVycm9yKCdVbm1hdGNoZWQgXCInKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gd2hpbGUgKHRva2VuW2luZGV4IC0gMl0gPT09ICdcXFxcJyk7XHJcblx0XHRcdGJ1ZmZlciArPSB0b2tlbi5zbGljZShpLCBpbmRleCk7XHJcblx0XHRcdGkgPSBpbmRleCAtIDE7XHJcblx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlICdiZWZvcmUtdmFsdWUnOlxyXG5cdFx0XHRcdFx0c3RhdGUgPSAndmFsdWUnO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaW1wb3J0UnVsZS1iZWdpbic6XHJcblx0XHRcdFx0XHRzdGF0ZSA9ICdpbXBvcnRSdWxlJztcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCInXCI6XHJcblx0XHRcdGluZGV4ID0gaSArIDE7XHJcblx0XHRcdGRvIHtcclxuXHRcdFx0XHRpbmRleCA9IHRva2VuLmluZGV4T2YoXCInXCIsIGluZGV4KSArIDE7XHJcblx0XHRcdFx0aWYgKCFpbmRleCkge1xyXG5cdFx0XHRcdFx0cGFyc2VFcnJvcihcIlVubWF0Y2hlZCAnXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSB3aGlsZSAodG9rZW5baW5kZXggLSAyXSA9PT0gJ1xcXFwnKTtcclxuXHRcdFx0YnVmZmVyICs9IHRva2VuLnNsaWNlKGksIGluZGV4KTtcclxuXHRcdFx0aSA9IGluZGV4IC0gMTtcclxuXHRcdFx0c3dpdGNoIChzdGF0ZSkge1xyXG5cdFx0XHRcdGNhc2UgJ2JlZm9yZS12YWx1ZSc6XHJcblx0XHRcdFx0XHRzdGF0ZSA9ICd2YWx1ZSc7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdpbXBvcnRSdWxlLWJlZ2luJzpcclxuXHRcdFx0XHRcdHN0YXRlID0gJ2ltcG9ydFJ1bGUnO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Ly8gQ29tbWVudFxyXG5cdFx0Y2FzZSBcIi9cIjpcclxuXHRcdFx0aWYgKHRva2VuLmNoYXJBdChpICsgMSkgPT09IFwiKlwiKSB7XHJcblx0XHRcdFx0aSArPSAyO1xyXG5cdFx0XHRcdGluZGV4ID0gdG9rZW4uaW5kZXhPZihcIiovXCIsIGkpO1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0XHRcdHBhcnNlRXJyb3IoXCJNaXNzaW5nICovXCIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpID0gaW5kZXggKyAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gXCJpbXBvcnRSdWxlLWJlZ2luXCIpIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gXCIgXCI7XHJcblx0XHRcdFx0c3RhdGUgPSBcImltcG9ydFJ1bGVcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHQvLyBBdC1ydWxlXHJcblx0XHRjYXNlIFwiQFwiOlxyXG5cdFx0XHRpZiAodG9rZW4uaW5kZXhPZihcIkAtbW96LWRvY3VtZW50XCIsIGkpID09PSBpKSB7XHJcblx0XHRcdFx0c3RhdGUgPSBcImRvY3VtZW50UnVsZS1iZWdpblwiO1xyXG5cdFx0XHRcdGRvY3VtZW50UnVsZSA9IG5ldyBDU1NPTS5DU1NEb2N1bWVudFJ1bGUoKTtcclxuXHRcdFx0XHRkb2N1bWVudFJ1bGUuX19zdGFydHMgPSBpO1xyXG5cdFx0XHRcdGkgKz0gXCItbW96LWRvY3VtZW50XCIubGVuZ3RoO1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW4uaW5kZXhPZihcIkBtZWRpYVwiLCBpKSA9PT0gaSkge1xyXG5cdFx0XHRcdHN0YXRlID0gXCJhdEJsb2NrXCI7XHJcblx0XHRcdFx0bWVkaWFSdWxlID0gbmV3IENTU09NLkNTU01lZGlhUnVsZSgpO1xyXG5cdFx0XHRcdG1lZGlhUnVsZS5fX3N0YXJ0cyA9IGk7XHJcblx0XHRcdFx0aSArPSBcIm1lZGlhXCIubGVuZ3RoO1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW4uaW5kZXhPZihcIkBob3N0XCIsIGkpID09PSBpKSB7XHJcblx0XHRcdFx0c3RhdGUgPSBcImhvc3RSdWxlLWJlZ2luXCI7XHJcblx0XHRcdFx0aSArPSBcImhvc3RcIi5sZW5ndGg7XHJcblx0XHRcdFx0aG9zdFJ1bGUgPSBuZXcgQ1NTT00uQ1NTSG9zdFJ1bGUoKTtcclxuXHRcdFx0XHRob3N0UnVsZS5fX3N0YXJ0cyA9IGk7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fSBlbHNlIGlmICh0b2tlbi5pbmRleE9mKFwiQGltcG9ydFwiLCBpKSA9PT0gaSkge1xyXG5cdFx0XHRcdHN0YXRlID0gXCJpbXBvcnRSdWxlLWJlZ2luXCI7XHJcblx0XHRcdFx0aSArPSBcImltcG9ydFwiLmxlbmd0aDtcclxuXHRcdFx0XHRidWZmZXIgKz0gXCJAaW1wb3J0XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW4uaW5kZXhPZihcIkBmb250LWZhY2VcIiwgaSkgPT09IGkpIHtcclxuXHRcdFx0XHRzdGF0ZSA9IFwiZm9udEZhY2VSdWxlLWJlZ2luXCI7XHJcblx0XHRcdFx0aSArPSBcImZvbnQtZmFjZVwiLmxlbmd0aDtcclxuXHRcdFx0XHRmb250RmFjZVJ1bGUgPSBuZXcgQ1NTT00uQ1NTRm9udEZhY2VSdWxlKCk7XHJcblx0XHRcdFx0Zm9udEZhY2VSdWxlLl9fc3RhcnRzID0gaTtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF0S2V5ZnJhbWVzUmVnRXhwLmxhc3RJbmRleCA9IGk7XHJcblx0XHRcdFx0dmFyIG1hdGNoS2V5ZnJhbWVzID0gYXRLZXlmcmFtZXNSZWdFeHAuZXhlYyh0b2tlbik7XHJcblx0XHRcdFx0aWYgKG1hdGNoS2V5ZnJhbWVzICYmIG1hdGNoS2V5ZnJhbWVzLmluZGV4ID09PSBpKSB7XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwia2V5ZnJhbWVzUnVsZS1iZWdpblwiO1xyXG5cdFx0XHRcdFx0a2V5ZnJhbWVzUnVsZSA9IG5ldyBDU1NPTS5DU1NLZXlmcmFtZXNSdWxlKCk7XHJcblx0XHRcdFx0XHRrZXlmcmFtZXNSdWxlLl9fc3RhcnRzID0gaTtcclxuXHRcdFx0XHRcdGtleWZyYW1lc1J1bGUuX3ZlbmRvclByZWZpeCA9IG1hdGNoS2V5ZnJhbWVzWzFdOyAvLyBXaWxsIGNvbWUgb3V0IGFzIHVuZGVmaW5lZCBpZiBubyBwcmVmaXggd2FzIGZvdW5kXHJcblx0XHRcdFx0XHRpICs9IG1hdGNoS2V5ZnJhbWVzWzBdLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJzZWxlY3RvclwiKSB7XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwiYXRSdWxlXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCJ7XCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gXCJzZWxlY3RvclwiIHx8IHN0YXRlID09PSBcImF0UnVsZVwiKSB7XHJcblx0XHRcdFx0c3R5bGVSdWxlLnNlbGVjdG9yVGV4dCA9IGJ1ZmZlci50cmltKCk7XHJcblx0XHRcdFx0c3R5bGVSdWxlLnN0eWxlLl9fc3RhcnRzID0gaTtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdHN0YXRlID0gXCJiZWZvcmUtbmFtZVwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImF0QmxvY2tcIikge1xyXG5cdFx0XHRcdG1lZGlhUnVsZS5tZWRpYS5tZWRpYVRleHQgPSBidWZmZXIudHJpbSgpO1xyXG5cdFx0XHRcdGN1cnJlbnRTY29wZSA9IHBhcmVudFJ1bGUgPSBtZWRpYVJ1bGU7XHJcblx0XHRcdFx0bWVkaWFSdWxlLnBhcmVudFN0eWxlU2hlZXQgPSBzdHlsZVNoZWV0O1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0c3RhdGUgPSBcImJlZm9yZS1zZWxlY3RvclwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImhvc3RSdWxlLWJlZ2luXCIpIHtcclxuXHRcdFx0XHRjdXJyZW50U2NvcGUgPSBwYXJlbnRSdWxlID0gaG9zdFJ1bGU7XHJcblx0XHRcdFx0aG9zdFJ1bGUucGFyZW50U3R5bGVTaGVldCA9IHN0eWxlU2hlZXQ7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRzdGF0ZSA9IFwiYmVmb3JlLXNlbGVjdG9yXCI7XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09IFwiZm9udEZhY2VSdWxlLWJlZ2luXCIpIHtcclxuXHRcdFx0XHRpZiAocGFyZW50UnVsZSkge1xyXG5cdFx0XHRcdFx0Zm9udEZhY2VSdWxlLnBhcmVudFJ1bGUgPSBwYXJlbnRSdWxlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb250RmFjZVJ1bGUucGFyZW50U3R5bGVTaGVldCA9IHN0eWxlU2hlZXQ7XHJcblx0XHRcdFx0c3R5bGVSdWxlID0gZm9udEZhY2VSdWxlO1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0c3RhdGUgPSBcImJlZm9yZS1uYW1lXCI7XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09IFwia2V5ZnJhbWVzUnVsZS1iZWdpblwiKSB7XHJcblx0XHRcdFx0a2V5ZnJhbWVzUnVsZS5uYW1lID0gYnVmZmVyLnRyaW0oKTtcclxuXHRcdFx0XHRpZiAocGFyZW50UnVsZSkge1xyXG5cdFx0XHRcdFx0a2V5ZnJhbWVzUnVsZS5wYXJlbnRSdWxlID0gcGFyZW50UnVsZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0a2V5ZnJhbWVzUnVsZS5wYXJlbnRTdHlsZVNoZWV0ID0gc3R5bGVTaGVldDtcclxuXHRcdFx0XHRjdXJyZW50U2NvcGUgPSBwYXJlbnRSdWxlID0ga2V5ZnJhbWVzUnVsZTtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdHN0YXRlID0gXCJrZXlmcmFtZVJ1bGUtYmVnaW5cIjtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJrZXlmcmFtZVJ1bGUtYmVnaW5cIikge1xyXG5cdFx0XHRcdHN0eWxlUnVsZSA9IG5ldyBDU1NPTS5DU1NLZXlmcmFtZVJ1bGUoKTtcclxuXHRcdFx0XHRzdHlsZVJ1bGUua2V5VGV4dCA9IGJ1ZmZlci50cmltKCk7XHJcblx0XHRcdFx0c3R5bGVSdWxlLl9fc3RhcnRzID0gaTtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdHN0YXRlID0gXCJiZWZvcmUtbmFtZVwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImRvY3VtZW50UnVsZS1iZWdpblwiKSB7XHJcblx0XHRcdFx0Ly8gRklYTUU6IHdoYXQgaWYgdGhpcyAneycgaXMgaW4gdGhlIHVybCB0ZXh0IG9mIHRoZSBtYXRjaCBmdW5jdGlvbj9cclxuXHRcdFx0XHRkb2N1bWVudFJ1bGUubWF0Y2hlci5tYXRjaGVyVGV4dCA9IGJ1ZmZlci50cmltKCk7XHJcblx0XHRcdFx0aWYgKHBhcmVudFJ1bGUpIHtcclxuXHRcdFx0XHRcdGRvY3VtZW50UnVsZS5wYXJlbnRSdWxlID0gcGFyZW50UnVsZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3VycmVudFNjb3BlID0gcGFyZW50UnVsZSA9IGRvY3VtZW50UnVsZTtcclxuXHRcdFx0XHRkb2N1bWVudFJ1bGUucGFyZW50U3R5bGVTaGVldCA9IHN0eWxlU2hlZXQ7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRzdGF0ZSA9IFwiYmVmb3JlLXNlbGVjdG9yXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSBcIjpcIjpcclxuXHRcdFx0aWYgKHN0YXRlID09PSBcIm5hbWVcIikge1xyXG5cdFx0XHRcdG5hbWUgPSBidWZmZXIudHJpbSgpO1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0c3RhdGUgPSBcImJlZm9yZS12YWx1ZVwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSBcIihcIjpcclxuXHRcdFx0aWYgKHN0YXRlID09PSAndmFsdWUnKSB7XHJcblx0XHRcdFx0Ly8gaWUgY3NzIGV4cHJlc3Npb24gbW9kZVxyXG5cdFx0XHRcdGlmIChidWZmZXIudHJpbSgpID09PSAnZXhwcmVzc2lvbicpIHtcclxuXHRcdFx0XHRcdHZhciBpbmZvID0gKG5ldyBDU1NPTS5DU1NWYWx1ZUV4cHJlc3Npb24odG9rZW4sIGkpKS5wYXJzZSgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChpbmZvLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdHBhcnNlRXJyb3IoaW5mby5lcnJvcik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRidWZmZXIgKz0gaW5mby5leHByZXNzaW9uO1xyXG5cdFx0XHRcdFx0XHRpID0gaW5mby5pZHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHN0YXRlID0gJ3ZhbHVlLXBhcmVudGhlc2lzJztcclxuXHRcdFx0XHRcdC8vYWx3YXlzIGVuc3VyZSB0aGlzIGlzIHJlc2V0IHRvIDEgb24gdHJhbnNpdGlvblxyXG5cdFx0XHRcdFx0Ly9mcm9tIHZhbHVlIHRvIHZhbHVlLXBhcmVudGhlc2lzXHJcblx0XHRcdFx0XHR2YWx1ZVBhcmVudGhlc2lzRGVwdGggPSAxO1xyXG5cdFx0XHRcdFx0YnVmZmVyICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09ICd2YWx1ZS1wYXJlbnRoZXNpcycpIHtcclxuXHRcdFx0XHR2YWx1ZVBhcmVudGhlc2lzRGVwdGgrKztcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSBcIilcIjpcclxuXHRcdFx0aWYgKHN0YXRlID09PSAndmFsdWUtcGFyZW50aGVzaXMnKSB7XHJcblx0XHRcdFx0dmFsdWVQYXJlbnRoZXNpc0RlcHRoLS07XHJcblx0XHRcdFx0aWYgKHZhbHVlUGFyZW50aGVzaXNEZXB0aCA9PT0gMCkgc3RhdGUgPSAndmFsdWUnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCIhXCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gXCJ2YWx1ZVwiICYmIHRva2VuLmluZGV4T2YoXCIhaW1wb3J0YW50XCIsIGkpID09PSBpKSB7XHJcblx0XHRcdFx0cHJpb3JpdHkgPSBcImltcG9ydGFudFwiO1xyXG5cdFx0XHRcdGkgKz0gXCJpbXBvcnRhbnRcIi5sZW5ndGg7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YnVmZmVyICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIFwiO1wiOlxyXG5cdFx0XHRzd2l0Y2ggKHN0YXRlKSB7XHJcblx0XHRcdFx0Y2FzZSBcInZhbHVlXCI6XHJcblx0XHRcdFx0XHRzdHlsZVJ1bGUuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgYnVmZmVyLnRyaW0oKSwgcHJpb3JpdHkpO1xyXG5cdFx0XHRcdFx0cHJpb3JpdHkgPSBcIlwiO1xyXG5cdFx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRcdHN0YXRlID0gXCJiZWZvcmUtbmFtZVwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImF0UnVsZVwiOlxyXG5cdFx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRcdHN0YXRlID0gXCJiZWZvcmUtc2VsZWN0b3JcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJpbXBvcnRSdWxlXCI6XHJcblx0XHRcdFx0XHRpbXBvcnRSdWxlID0gbmV3IENTU09NLkNTU0ltcG9ydFJ1bGUoKTtcclxuXHRcdFx0XHRcdGltcG9ydFJ1bGUucGFyZW50U3R5bGVTaGVldCA9IGltcG9ydFJ1bGUuc3R5bGVTaGVldC5wYXJlbnRTdHlsZVNoZWV0ID0gc3R5bGVTaGVldDtcclxuXHRcdFx0XHRcdGltcG9ydFJ1bGUuY3NzVGV4dCA9IGJ1ZmZlciArIGNoYXJhY3RlcjtcclxuXHRcdFx0XHRcdHN0eWxlU2hlZXQuY3NzUnVsZXMucHVzaChpbXBvcnRSdWxlKTtcclxuXHRcdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwiYmVmb3JlLXNlbGVjdG9yXCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0YnVmZmVyICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCJ9XCI6XHJcblx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlIFwidmFsdWVcIjpcclxuXHRcdFx0XHRcdHN0eWxlUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBidWZmZXIudHJpbSgpLCBwcmlvcml0eSk7XHJcblx0XHRcdFx0XHRwcmlvcml0eSA9IFwiXCI7XHJcblx0XHRcdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXHJcblx0XHRcdFx0Y2FzZSBcImJlZm9yZS1uYW1lXCI6XHJcblx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcclxuXHRcdFx0XHRcdHN0eWxlUnVsZS5fX2VuZHMgPSBpICsgMTtcclxuXHRcdFx0XHRcdGlmIChwYXJlbnRSdWxlKSB7XHJcblx0XHRcdFx0XHRcdHN0eWxlUnVsZS5wYXJlbnRSdWxlID0gcGFyZW50UnVsZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHN0eWxlUnVsZS5wYXJlbnRTdHlsZVNoZWV0ID0gc3R5bGVTaGVldDtcclxuXHRcdFx0XHRcdGN1cnJlbnRTY29wZS5jc3NSdWxlcy5wdXNoKHN0eWxlUnVsZSk7XHJcblx0XHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRTY29wZS5jb25zdHJ1Y3RvciA9PT0gQ1NTT00uQ1NTS2V5ZnJhbWVzUnVsZSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwia2V5ZnJhbWVSdWxlLWJlZ2luXCI7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFwiYmVmb3JlLXNlbGVjdG9yXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwia2V5ZnJhbWVSdWxlLWJlZ2luXCI6XHJcblx0XHRcdFx0Y2FzZSBcImJlZm9yZS1zZWxlY3RvclwiOlxyXG5cdFx0XHRcdGNhc2UgXCJzZWxlY3RvclwiOlxyXG5cdFx0XHRcdFx0Ly8gRW5kIG9mIG1lZGlhL2RvY3VtZW50IHJ1bGUuXHJcblx0XHRcdFx0XHRpZiAoIXBhcmVudFJ1bGUpIHtcclxuXHRcdFx0XHRcdFx0cGFyc2VFcnJvcihcIlVuZXhwZWN0ZWQgfVwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGN1cnJlbnRTY29wZS5fX2VuZHMgPSBpICsgMTtcclxuXHRcdFx0XHRcdC8vIE5lc3RpbmcgcnVsZXMgYXJlbid0IHN1cHBvcnRlZCB5ZXRcclxuXHRcdFx0XHRcdHN0eWxlU2hlZXQuY3NzUnVsZXMucHVzaChjdXJyZW50U2NvcGUpO1xyXG5cdFx0XHRcdFx0Y3VycmVudFNjb3BlID0gc3R5bGVTaGVldDtcclxuXHRcdFx0XHRcdHBhcmVudFJ1bGUgPSBudWxsO1xyXG5cdFx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRcdHN0YXRlID0gXCJiZWZvcmUtc2VsZWN0b3JcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlIFwiYmVmb3JlLXNlbGVjdG9yXCI6XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwic2VsZWN0b3JcIjtcclxuXHRcdFx0XHRcdHN0eWxlUnVsZSA9IG5ldyBDU1NPTS5DU1NTdHlsZVJ1bGUoKTtcclxuXHRcdFx0XHRcdHN0eWxlUnVsZS5fX3N0YXJ0cyA9IGk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiYmVmb3JlLW5hbWVcIjpcclxuXHRcdFx0XHRcdHN0YXRlID0gXCJuYW1lXCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiYmVmb3JlLXZhbHVlXCI6XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwidmFsdWVcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJpbXBvcnRSdWxlLWJlZ2luXCI6XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwiaW1wb3J0UnVsZVwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0YnVmZmVyICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3R5bGVTaGVldDtcclxufTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLnBhcnNlID0gQ1NTT00ucGFyc2U7XHJcbi8vIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjYW5ub3QgYmUgaW5jbHVkZWQgc29vbmVyIGR1ZSB0byB0aGUgbXV0dWFsIGRlcGVuZGVuY3kgd2l0aCBwYXJzZS5qc1xyXG4vLy9Db21tb25KU1xyXG4vKipcclxuICogUHJvZHVjZXMgYSBkZWVwIGNvcHkgb2Ygc3R5bGVzaGVldCDigJQgdGhlIGluc3RhbmNlIHZhcmlhYmxlcyBvZiBzdHlsZXNoZWV0IGFyZSBjb3BpZWQgcmVjdXJzaXZlbHkuXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVTaGVldHxDU1NPTS5DU1NTdHlsZVNoZWV0fSBzdHlsZXNoZWV0XHJcbiAqIEBub3NpZGVlZmZlY3RzXHJcbiAqIEByZXR1cm4ge0NTU09NLkNTU1N0eWxlU2hlZXR9XHJcbiAqL1xyXG5DU1NPTS5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKHN0eWxlc2hlZXQpIHtcclxuXHJcblx0dmFyIGNsb25lZCA9IG5ldyBDU1NPTS5DU1NTdHlsZVNoZWV0KCk7XHJcblxyXG5cdHZhciBydWxlcyA9IHN0eWxlc2hlZXQuY3NzUnVsZXM7XHJcblx0aWYgKCFydWxlcykge1xyXG5cdFx0cmV0dXJuIGNsb25lZDtcclxuXHR9XHJcblxyXG5cdHZhciBSVUxFX1RZUEVTID0ge1xyXG5cdFx0MTogQ1NTT00uQ1NTU3R5bGVSdWxlLFxyXG5cdFx0NDogQ1NTT00uQ1NTTWVkaWFSdWxlLFxyXG5cdFx0Ly8zOiBDU1NPTS5DU1NJbXBvcnRSdWxlLFxyXG5cdFx0Ly81OiBDU1NPTS5DU1NGb250RmFjZVJ1bGUsXHJcblx0XHQvLzY6IENTU09NLkNTU1BhZ2VSdWxlLFxyXG5cdFx0ODogQ1NTT00uQ1NTS2V5ZnJhbWVzUnVsZSxcclxuXHRcdDk6IENTU09NLkNTU0tleWZyYW1lUnVsZVxyXG5cdH07XHJcblxyXG5cdGZvciAodmFyIGk9MCwgcnVsZXNMZW5ndGg9cnVsZXMubGVuZ3RoOyBpIDwgcnVsZXNMZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIHJ1bGUgPSBydWxlc1tpXTtcclxuXHRcdHZhciBydWxlQ2xvbmUgPSBjbG9uZWQuY3NzUnVsZXNbaV0gPSBuZXcgUlVMRV9UWVBFU1tydWxlLnR5cGVdKCk7XHJcblxyXG5cdFx0dmFyIHN0eWxlID0gcnVsZS5zdHlsZTtcclxuXHRcdGlmIChzdHlsZSkge1xyXG5cdFx0XHR2YXIgc3R5bGVDbG9uZSA9IHJ1bGVDbG9uZS5zdHlsZSA9IG5ldyBDU1NPTS5DU1NTdHlsZURlY2xhcmF0aW9uKCk7XHJcblx0XHRcdGZvciAodmFyIGo9MCwgc3R5bGVMZW5ndGg9c3R5bGUubGVuZ3RoOyBqIDwgc3R5bGVMZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHZhciBuYW1lID0gc3R5bGVDbG9uZVtqXSA9IHN0eWxlW2pdO1xyXG5cdFx0XHRcdHN0eWxlQ2xvbmVbbmFtZV0gPSBzdHlsZVtuYW1lXTtcclxuXHRcdFx0XHRzdHlsZUNsb25lLl9pbXBvcnRhbnRzW25hbWVdID0gc3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShuYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZUNsb25lLmxlbmd0aCA9IHN0eWxlLmxlbmd0aDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocnVsZS5oYXNPd25Qcm9wZXJ0eSgna2V5VGV4dCcpKSB7XHJcblx0XHRcdHJ1bGVDbG9uZS5rZXlUZXh0ID0gcnVsZS5rZXlUZXh0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChydWxlLmhhc093blByb3BlcnR5KCdzZWxlY3RvclRleHQnKSkge1xyXG5cdFx0XHRydWxlQ2xvbmUuc2VsZWN0b3JUZXh0ID0gcnVsZS5zZWxlY3RvclRleHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHJ1bGUuaGFzT3duUHJvcGVydHkoJ21lZGlhVGV4dCcpKSB7XHJcblx0XHRcdHJ1bGVDbG9uZS5tZWRpYVRleHQgPSBydWxlLm1lZGlhVGV4dDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocnVsZS5oYXNPd25Qcm9wZXJ0eSgnY3NzUnVsZXMnKSkge1xyXG5cdFx0XHRydWxlQ2xvbmUuY3NzUnVsZXMgPSBjbG9uZShydWxlKS5jc3NSdWxlcztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBjbG9uZWQ7XHJcblxyXG59O1xyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5jbG9uZSA9IENTU09NLmNsb25lO1xyXG4vLy9Db21tb25KU1xyXG59KSh0aGlzKTtcclxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAyMDE2IC0gMjAxNlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogdjEuMC4wICovXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5CdWlsZGVy44Gu44OZ44O844K544Kv44Op44K5XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVpbGRlciB7XHJcblxyXG4gICAgLyoq44Kz44Oz44K544OI44Op44Kv44K/KiovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7Ly/nlJ/miJDjgqrjg5fjgrfjg6fjg7NcclxuICAgICAgdGhpcy5ub2RlcyA9IFtdOy8v55Sf5oiQ54mp5qC857SN44OV44Kj44O844Or44OJXHJcbiAgICAgIHRoaXMuYXR0cmlidXRlRGVsaW1pdGVyID1cIiBcIjsvL+WQhOODjuODvOODiemWk+OBruWMuuWIh+OCiuaWh+Wtl1xyXG4gICAgfVxyXG4gICAgZ2V0Tm9kZXMoYXJnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzLmpvaW4oYXJnIHx8ICdcXG4nKTtcclxuICAgIH1cclxuICAgIGFkZE5vZGUobm9kZSkge1xyXG4gICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgIGdldFJlc3VsdFxyXG4gICAgICAg55Sf5oiQ57WQ5p6c6L+U5Y2044Oh44K944OD44OJXHJcbiAgICAgICDnlJ/miJDntZDmnpzjgpLjg6njg4Pjg5fjgZnjgovjgarjganjga7lj6/og73jgYzlv4XopoHjgarloLTlkIjjga/jgrPjgrPjgavoqJjovInoqJjovInjgZnjgotcclxuICAgICAqKi9cclxuICAgIGdldFJlc3VsdChhcmcpIHtcclxuICAgICAgcmV0dXJuKGAke3RoaXMuZ2V0Tm9kZXMoKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgIGJlZm9yZUNyZWF0ZUF0dHJpYnV0ZVxyXG4gICAgICAg5bGe5oCn44OO44O844OJ44Gn5ZCEQnVpbGRlcuOCkuWRvOOBs+WHuuOBmeWJjeOBqzHlm57jgaDjgZHlrp/ooYzjgZXjgozjgb7jgZnjgIJcclxuICAgICAgIOeJueWumuOBruWxnuaAp+OCkuabuOOBjeaPm+OBiOOCi+OBqOOBhOOBo+OBn+OCseODvOOCueOBp+WIqeeUqOOBl+OBpuOBj+OBoOOBleOBhFxyXG5cclxuICAgICoqL1xyXG4gICAgYmVmb3JlQ3JlYXRlQXR0cmlidXRlKGF0dHJpYnV0ZXMpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICBjcmVhdGVBdHRyaWJ1dGVfdGV4dFxyXG4gICAgICAg5bGe5oCn44OO44O844OJ44Gn5ZG844Gw44KM44G+44GZXHJcbiAgICAgICBrZXk65bGe5oCn5ZCNXHJcbiAgICAgICBhdHRyaWJ1dGU644OO44O844OJXHJcblxyXG4gICAgKiovXHJcbiAgICBjcmVhdGVBdHRyaWJ1dGVfdGV4dChrZXksIGF0dHJpYnV0ZSkge31cclxuXHJcbiAgICAvL2NyZWF0ZUF0dHJpYnV0ZV9rZXlvbmx5KGtleSl7fVxyXG4gICAgY3JlYXRlQXR0cmlidXRlKGtleSwgYXR0cmlidXRlcyl7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgY3JlYXRlQXR0cmlidXRlX3NjcmlwdFxyXG4gICAgICAgU2NyaXB044K/44Kk44OX44Gu5bGe5oCn44OO44O844OJ44Gn5ZG844Gw44KM44G+44GZXHJcbiAgICAgICBhdHRyaWJ1dGXjgYxTY3JpcHTjgr/jgqTjg5fjga7loLTlkIjjgavlkbzjgbPlh7rjgZXjgozjgb7jgZlcclxuICAgICAgIGtleTrlsZ7mgKflkI1cclxuICAgICAgIGF0dHJpYnV0ZTrjg47jg7zjg4lcclxuXHJcbiAgICAqKi9cclxuICAgIGNyZWF0ZUF0dHJpYnV0ZV9zY3JpcHQoa2V5LCBhdHRyaWJ1dGUpIHt9XHJcblxyXG4gICAgYmVmb3JlQ3JlYXRlVGFnRWxlbWVudChzcmMsIGlzQ29udGFpbmVyLHN0YXRlKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgY3JlYXRlVGFnRWxlbWVudF9vcGVuXHJcbiAgICAgICDjgr/jgrDplovlp4vjga7jg47jg7zjg4njgaflkbzjgbDjgozjgb7jgZlcclxuICAgICAgIHNyYzp7bmFtZTrjgr/jgrDlkI3jgIFhdHRyaWJ1dGVz77ya44OO44O844OJ44Gr5ZCr44G+44KM44KL5bGe5oCn77yITUFQ77yJfVxyXG4gICAgICAgYXR0cmlidXRlczrjg47jg7zjg4njgavlkKvjgb7jgozjgovlsZ7mgKfjgYzlhaXjgaPjgabjgb7jgZlcclxuICAgICAgIGlzQ29udGFpbmVyOuWtkOimgee0oOOCkuWQq+OCgOWgtOWQiOOBr3RydWXjgavjgarjgorjgb7jgZnjgIJcclxuICAgICAgIHN0YXRlOntkZXB0aDrjgqTjg7Pjg4fjg7Pjg4jmlbB9XHJcblxyXG4gICAgKiovXHJcbiAgICBjcmVhdGVUYWdFbGVtZW50X29wZW4oc3JjLCBhdHRyaWJ1dGVzLCBpc0NvbnRhaW5lcixzdGF0ZSkge31cclxuXHJcbiAgICAvKipcclxuICAgICAgIGNyZWF0ZVRhZ0VsZW1lbnRfY2xvc2VcclxuICAgICAgIOOCv+OCsOe1guS6huOBruODjuODvOODieOBp+WRvOOBsOOCjOOBvuOBmVxyXG4gICAgICAgc3JjOntuYW1lOuOCv+OCsOWQjX1cclxuICAgICAgIHN0YXRlOntkZXB0aDrjgqTjg7Pjg4fjg7Pjg4jmlbB9XHJcblxyXG4gICAgKiovXHJcbiAgICBjcmVhdGVUYWdFbGVtZW50X2Nsb3NlKHNyYyxzdGF0ZSkge31cclxuXHJcbiAgICBiZWZvcmVDcmVhdGVOb2RlcyhzcmMsc3RhdGUpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICBjcmVhdGVUZXh0RWxlbWVudFxyXG4gICAgICAg44OG44Kt44K544OI44K/44Kk44OX44Gu5pyr56uv44OO44O844OJ44Gn5ZG844Gw44KM44G+44GZXHJcbiAgICAgICBzcmM6e2RhdGE644OG44Kt44K544OIfVxyXG4gICAgICAgc3RhdGU6e2RlcHRoOuOCpOODs+ODh+ODs+ODiOaVsH1cclxuXHJcbiAgICAqKi9cclxuICAgIGNyZWF0ZVRleHRFbGVtZW50KHNyYyxzdGF0ZSkge31cclxuXHJcbiAgICBjcmVhdGVDb21tZW50RWxlbWVudChzcmMsc3RhdGUpIHt9XHJcbiAgICBiZWZvcmVDcmVhdGVTY3JpcHRFbGVtZW50KHNyYywgaXNDb250YWluZXIsc3RhdGUpIHt9XHJcbiAgICBjcmVhdGVTY3JpcHRFbGVtZW50X29wZW4oc3JjLCBpc0NvbnRhaW5lcixzdGF0ZSkge31cclxuICAgIGNyZWF0ZVNjcmlwdEVsZW1lbnRfY2xvc2Uoc3JjLHN0YXRlKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgYmVmb3JlQ29tcGlsZVxyXG4gICAgICAg5ZCEQnVpbGRlcuOCkuWRvOOBs+WHuuOBmeWJjeOBqzHlm57jgaDjgZHlrp/ooYzjgZXjgozjgb7jgZnjgIJcclxuICAgICAgIOeJueWumuOBruODjuODvOODieOCkuabuOOBjeaPm+OBiOOCi+OBqOOBhOOBo+OBn+OCseODvOOCueOBp+WIqeeUqOOBl+OBpuOBj+OBoOOBleOBhFxyXG5cclxuICAgICoqL1xyXG4gICAgYmVmb3JlQ29tcGlsZShzcmMpIHt9XHJcbiAgfVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IDIwMTYgLSAyMDE2XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiB2MS4wLjAgKi9cclxuXHJcblxyXG5pbXBvcnQgQnVpbGRlciBmcm9tICcuL0J1aWxkZXIuYmFiZWwuanMnXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5DU1NCdWlsZGVyXHJcbmh0bWzjgavmjIflrprjgZXjgozjgZ9zdHlsZeOCkkNTU+OBq+WIhumbouOBl+OBvuOBmeOAglxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENTU0J1aWxkZXIgZXh0ZW5kcyBCdWlsZGVye1xyXG5cclxuICAgIGNyZWF0ZUF0dHJpYnV0ZShrZXksYXR0cmlidXRlcykge1xyXG4gICAgICBpZihrZXk9PSdzdHlsZScpe1xyXG4gICAgICAgIHJldHVybihgJHthdHRyaWJ1dGVzLmpvaW4oJycpfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgIGNyZWF0ZUF0dHJpYnV0ZV90ZXh0XHJcbiAgICAgICDlsZ7mgKfjg47jg7zjg4njgaflkbzjgbDjgozjgb7jgZlcclxuICAgICAgIOOBk+OBrkJ1aWxkZXLjgafjga9zdHlsZeWxnuaAp+OBruWgtOWQiOOBr+WApOOCkui/lOOBl+OBvuOBmVxyXG5cclxuICAgICoqL1xyXG4gICAgY3JlYXRlQXR0cmlidXRlX3RleHQoa2V5LCBhdHRyaWJ1dGUsc3RhdGUpIHtcclxuICAgICAgaWYoa2V5PT0nc3R5bGUnKXtcclxuICAgICAgICAgcmV0dXJuKGAke2F0dHJpYnV0ZS5kYXRhfHwnJ31gKTsgLy9DU1Pjga7opoHntKDjgIDkvos6aGVpZ2h0OjMwcHg7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjcmVhdGVBdHRyaWJ1dGVfc2NyaXB0KGtleSwgYXR0cmlidXRlLHN0YXRlKSB7XHJcbiAgICAgIGlmKGtleT09J3N0eWxlJyl7XHJcbiAgICAgICAgcmV0dXJuKGAke2F0dHJpYnV0ZS5kYXRhfHwnJ31gKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAgIGNyZWF0ZVRhZ0VsZW1lbnRfb3BlblxyXG4gICAgICAg44K/44Kw6ZaL5aeL44Gu44OO44O844OJ44Gn5ZG844Gw44KM44G+44GZXHJcbiAgICAgICBzcmM6e25hbWU644K/44Kw5ZCN44CBYXR0cmlidXRlc++8muODjuODvOODieOBq+WQq+OBvuOCjOOCi+WxnuaAp++8iE1BUO+8iX1cclxuICAgICAgIGF0dHJpYnV0ZXM644OO44O844OJ44Gr5ZCr44G+44KM44KL5bGe5oCn44GM5YWl44Gj44Gm44G+44GZXHJcbiAgICAgICBpc0NvbnRhaW5lcjrlrZDopoHntKDjgpLlkKvjgoDloLTlkIjjga90cnVl44Gr44Gq44KK44G+44GZ44CCXHJcbiAgICAgICBzdGF0ZTp7ZGVwdGg644Kk44Oz44OH44Oz44OI5pWwfVxyXG5cclxuICAgICoqL1xyXG4gICAgY3JlYXRlVGFnRWxlbWVudF9vcGVuKHNyYywgYXR0cmlidXRlcywgaXNDb250YWluZXIsc3RhdGUpIHtcclxuICAgICAgaWYoIXNyYy5hdHRyaWJ1dGVzKSByZXR1cm47XHJcbiAgICAgIHZhciBpZCA9ICcnO1xyXG4gICAgICBpZihzcmMuYXR0cmlidXRlc1snaWQnXSl7IC8vaWTmjIflrprjgYzjgYLjgovloLTlkIjjga7jgb9DU1PljJbjgZfjgb7jgZnjgIJcclxuICAgICAgICBzcmMuYXR0cmlidXRlc1snaWQnXS5mb3JFYWNoKGZ1bmN0aW9uKF9zcmMpIHtcclxuICAgICAgICAgICAgaWYoX3NyYy50eXBlPT0ndGV4dCcpIGlkID0gYCR7aWR9JHtfc3JjLmRhdGF9YDtcclxuICAgICAgICAgICAgaWYoX3NyYy50eXBlPT0nc2NyaXB0JyAmJiBfc3JjLmxhbmdOYW1lPT0gJ3NpbmdsZU11c3RhY2hlJyApIGlkID0gYCR7aWR9eyR7X3NyYy5kYXRhfX1gO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGlkKXt0aGlzLm5vZGVzLnB1c2goYFxyXG4gICAgICAgIC4ke2lkfSB7XHJcbiAgICAgICAgICAkeycgJythdHRyaWJ1dGVzfVxyXG4gICAgICAgIH1gKTtcclxuICAgICAgICBkZWxldGUgc3JjLmF0dHJpYnV0ZXNbJ3N0eWxlJ107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IDIwMTYgLSAyMDE2XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiB2MS4wLjAgKi9cclxuXHJcblxyXG5pbXBvcnQgQnVpbGRlciBmcm9tICcuL0J1aWxkZXIuYmFiZWwuanMnXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5EZWJ1Z0J1aWxkZXJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1Z0J1aWxkZXIgZXh0ZW5kcyBCdWlsZGVye1xyXG5cclxuICAgIC8qKlxyXG4gICAgICAgYmVmb3JlQ29tcGlsZVxyXG4gICAgICAg5ZCEQnVpbGRlcuOCkuWRvOOBs+WHuuOBmeWJjeOBqzHlm57jgaDjgZHlrp/ooYzjgZXjgozjgb7jgZnjgIJcclxuICAgICAgIOOBk+OBruOCv+OCpOODn+ODs+OCsOOBp2h0bWzlhoXjga53ZWJDb21wb25lbnTlrprnvqnjgpLlj5blvpfjgZfjgabliKnnlKjlj6/og73jgarlvaLlvI/jgavlpInmj5vjgZfjgb7jgZnjgIJcclxuICAgICoqL1xyXG4gICAgYmVmb3JlQ29tcGlsZShzcmMpe1xyXG4gICAgICBjb25zb2xlLmxvZygnRGVidWdCdWlsZGVyJyxzcmMpO1xyXG4gICAgfVxyXG4gIH07XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgMjAxNiAtIDIwMTZcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qIHYxLjAuMCAqL1xyXG5cclxuaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyLmJhYmVsLmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIdG1sQnVpbGRlciBleHRlbmRzIEJ1aWxkZXJ7XHJcbiAgICAgIGNyZWF0ZUF0dHJpYnV0ZShrZXksYXR0cmlidXRlcykge1xyXG4gICAgICAgIGlmKGF0dHJpYnV0ZXMubGVuZ3RoPT0wKSByZXR1cm4oYCR7a2V5fWApO1xyXG4gICAgICAgIHJldHVybihgJHtrZXl9PScke2F0dHJpYnV0ZXMuam9pbignJyl9J2ApO1xyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZUF0dHJpYnV0ZV90ZXh0KGtleSwgYXR0cmlidXRlLHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuKGAke2F0dHJpYnV0ZS5kYXRhfHwnJ31gKTtcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVBdHRyaWJ1dGVfc2NyaXB0KGtleSwgYXR0cmlidXRlLHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuKGB7JHthdHRyaWJ1dGUuZGF0YXx8Jyd9fWApO1xyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZVRhZ0VsZW1lbnRfb3BlbihzcmMsIGF0dHJpYnV0ZXMsIGlzQ29udGFpbmVyLHN0YXRlKSB7XHJcbiAgICAgICAgaWYoc3JjLm5hbWU9PSdzY3JpcHQnKXtcclxuICAgICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9PCR7c3JjLm5hbWV9JHthdHRyaWJ1dGVzfT4ke2lzQ29udGFpbmVyPycnOic8Lycrc3JjLm5hbWUrJz4nfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfTwke3NyYy5uYW1lfSR7YXR0cmlidXRlc30ke2lzQ29udGFpbmVyPycnOicgLyd9PmApO1xyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZVRhZ0VsZW1lbnRfY2xvc2Uoc3JjLHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX08LyR7c3JjLm5hbWV9PmApO1xyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZVRleHRFbGVtZW50KHNyYyxzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9JHtzcmMuZGF0YX1gKTtcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVTY3JpcHRFbGVtZW50X29wZW4oc3JjLCBpc0NvbnRhaW5lcixzdGF0ZSl7XHJcbiAgICAgICAgaWYoIWlzQ29udGFpbmVyKSByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfXske3NyYy5kYXRhfX1gKTtcclxuICAgICAgfVxyXG4gIH1cclxuIiwiXHJcbmltcG9ydCBCdWlsZGVyIGZyb20gJy4vQnVpbGRlci5iYWJlbC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY3JlbWVudGFsRG9tQnVpbGRlciBleHRlbmRzIEJ1aWxkZXJ7XHJcbiAgICBjcmVhdGVBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXMpIHtcclxuICAgICAgcmV0dXJuKGAke2F0dHJpYnV0ZXMuam9pbignICcpfWApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQXR0cmlidXRlX3RleHQoa2V5LCBhdHRyaWJ1dGUsc3RhdGUpIHtcclxuICAgICAgcmV0dXJuKGAke2tleX09XFxcXCcke2F0dHJpYnV0ZS5kYXRhfVxcXFwnYCk7XHJcbiAgICB9O1xyXG4gICAgY3JlYXRlQXR0cmlidXRlX3NjcmlwdChrZXksIGF0dHJpYnV0ZSxzdGF0ZSkge1xyXG4gICAgICByZXR1cm4oYCR7a2V5fT0nKyR7YXR0cmlidXRlLmRhdGF9KydgKTtcclxuICAgIH07XHJcbiAgICBjcmVhdGVUYWdFbGVtZW50X29wZW4oc3JjLCBhdHRyaWJ1dGVzLCBpc0NvbnRhaW5lcixzdGF0ZSkge1xyXG4gICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfSR7aXNDb250YWluZXI/J2VsZW1lbnRPcGVuJzonZWxlbWVudFZvaWQnfSgnJHtzcmMubmFtZX0nLCAnJywnJHthdHRyaWJ1dGVzfScpOy8vICR7c3RhdGUubm9kZXMubGVuZ3RofS8ke3N0YXRlLm5vZGVzLnBvc31gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVRhZ0VsZW1lbnRfY2xvc2Uoc3JjLHN0YXRlKSB7XHJcbiAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9ZWxlbWVudENsb3NlKCcke3NyYy5uYW1lfScpOy8vICR7c3RhdGUubm9kZXMubGVuZ3RofS8ke3N0YXRlLm5vZGVzLnBvc30gYCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVUZXh0RWxlbWVudChzcmMsc3RhdGUpIHtcclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX10ZXh0KCcke3NyYy5kYXRhLnJlcGxhY2UoL1xcbi9nLFwiXCIpLnJlcGxhY2UoL1xcJy9nLFwiXFxcXFxcJ1wiKX0nKTsgYCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDb21tZW50RWxlbWVudChzcmMsc3RhdGUpIHtcclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX0vKiAke3NyYy5kYXRhLnJlcGxhY2UoL1xcbi9nLFwiXCIpLnJlcGxhY2UoL1xcJy9nLFwiXFxcXFxcJ1wiKX0gKi9gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVNjcmlwdEVsZW1lbnRfb3BlbihzcmMsIGlzQ29udGFpbmVyLHN0YXRlKSB7XHJcbiAgICAgIGlmIChzcmMubmFtZSA9PSAnaWYnKSB7XHJcbiAgICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX1pZiggJHtzcmMuZGF0YX0peyBgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3JjLm5hbWUgPT0gJ2VhY2gnKSB7XHJcbiAgICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX1lYWNoKCAke3NyYy5kYXRhfSl7IGApO1xyXG4gICAgICB9XHJcbiAgICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX10ZXh0KCAke3NyYy5kYXRhfSkgYCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTY3JpcHRFbGVtZW50X2Nsb3NlKHNyYyxzdGF0ZSkge1xyXG4gICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfX0pO2ApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgMjAxNiAtIDIwMTdcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qIHYxLjAuMCAqL1xyXG5cclxuaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyLmJhYmVsLmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENvbXBvbmVudEJ1aWxkZXIgZXh0ZW5kcyBCdWlsZGVye1xyXG4gICAgLyoq44Kz44Oz44K544OI44Op44Kv44K/ICoqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICB0aGlzLmVsZW1lbnRzID0gb3B0aW9ucy5lbGVtZW50c3x8e307XHJcbiAgICAgIHRoaXMuZWxlbWVudE5hbWVzID0gb3B0aW9ucy5lbGVtZW50TmFtZXN8fFtdOy8vd2ViY29tcG9uZW5044Gu5LiA6KanXHJcbiAgICAgIHRoaXMuYXR0cmlidXRlRGVsaW1pdGVyID1cIixcIjtcclxuICAgIH1cclxuICAgIGNzc1RvSnNvbihjc3Mpe1xyXG4gICAgICB2YXIgc3R5bGUgPSBuZXcgQ1NTT00uQ1NTU3R5bGVEZWNsYXJhdGlvbigpO1xyXG4gICAgICBzdHlsZS5jc3NUZXh0PWNzcztcclxuICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICBmb3IodmFyIGk9MDtpPHN0eWxlLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIHJldFtzdHlsZVtpXS5yZXBsYWNlKC9cXC0vZywgJycpXT0gc3R5bGVbc3R5bGVbaV1dO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXQpO1xyXG4gICAgfVxyXG4gICAgdG9VcHBlckZpcnN0TGV0dGVyKHN0cikge1xyXG4gICAgICByZXR1cm4gc3RyLnNwbGl0KCctJykubWFwKGZ1bmN0aW9uKGJsb2NrKXtcclxuICAgICAgICByZXR1cm4gYmxvY2suY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBibG9jay5zdWJzdHJpbmcoMSk7XHJcbiAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIGlmKGF0dHJpYnV0ZXMubGVuZ3RoPT0wKSByZXR1cm4oYCcke2tleX0nOnRydWVgKTtcclxuICAgICAga2V5PShrZXk9PVwiY2xhc3NcIik/XCJjbGFzc05hbWVcIjprZXk7XHJcbiAgICAgIHJldHVybihgJyR7a2V5fSc6JHthdHRyaWJ1dGVzLmpvaW4oJysnKX1gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUF0dHJpYnV0ZV90ZXh0KGtleSwgYXR0cmlidXRlLHN0YXRlKSB7XHJcbiAgICAgIGlmKGtleT09XCJzdHlsZVwiKXtcclxuICAgICAgICAgcmV0dXJuKGAke3RoaXMuY3NzVG9Kc29uKGF0dHJpYnV0ZS5kYXRhKX1gKTtcclxuICAgICAgfWVsc2UgcmV0dXJuKGAnJHthdHRyaWJ1dGUuZGF0YS5yZXBsYWNlKC9cXCcvZywgJ1xcXFxcXCcnKX0nYCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVBdHRyaWJ1dGVfc2NyaXB0KGtleSwgYXR0cmlidXRlLHN0YXRlKSB7XHJcbiAgICAgIHJldHVybihgJHthdHRyaWJ1dGUuZGF0YX1gKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmV4dHR5cGUoX3NyYyl7XHJcbiAgICAgICAgICAgIGlmKF9zcmMubmV4dFNpYmxpbmc9PW51bGwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYoX3NyYy5uZXh0U2libGluZy50eXBlIT1cImNvbW1lbnRcIikgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dHR5cGUoX3NyYy5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGFnRWxlbWVudF9vcGVuKHNyYywgYXR0cmlidXRlcywgaXNDb250YWluZXIsc3RhdGUpIHtcclxuICAgICAgLy90YWfjgYt3ZWJjb21wb25lbnTjgYvliKTmlq3jgZnjgotcclxuICAgICAgLy8gSnVkZ2Ugd2hldGhlciBpdCBpcyB0YWcgb3Igd2ViY29tcG9uZW50XHJcbiAgICAgIC8v44K/44Kw5ZCN44Gr44OP44Kk44OV44Oz44GM5ZCr44G+44KM44Gm44GE44Gf44KJd2ViY29tcG9uZW50XHJcbiAgICAgIC8vIHdlYmNvbXBvbmVudCBpZiB0aGUgdGFnIG5hbWUgY29udGFpbnMgYSAnLSdcclxuICAgICAgLy/jgr/jgrDlkI3jga4x5paH5a2X55uu44GM5aSn5paH5a2X44Gq44KJd2ViY29tcG9uZW50XHJcbiAgICAgIC8vZWxlbWVudE5hbWVz44Gr55m76Yyy44GV44KM44Gm44GE44Gf44KJd2ViY29tcG9uZW50XHJcbiAgICAgIC8vIHdlYmNvbXBvbmVudCBpZiByZWdpc3RlcmVkIGluIGVsZW1lbnROYW1lc1xyXG4gICAgICB2YXIgdGFnTmFtZT0gKCB+c3JjLm5hbWUuaW5kZXhPZignLScpIHx8IHNyYy5uYW1lLmNoYXJBdCgwKT09c3JjLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgfHwgdGhpcy5lbGVtZW50TmFtZXMuaW5kZXhPZihzcmMubmFtZS50b0xvd2VyQ2FzZSgpKSA+PSAwKT8gdGhpcy50b1VwcGVyRmlyc3RMZXR0ZXIoc3JjLm5hbWUpOmAnJHtzcmMubmFtZX0nYDtcclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX1SZWFjdC5jcmVhdGVFbGVtZW50KCR7dGFnTmFtZX0sJHthdHRyaWJ1dGVzPyd7JythdHRyaWJ1dGVzKyd9JzonbnVsbCd9JHtpc0NvbnRhaW5lcj8nLCc6KHRoaXMubmV4dHR5cGUoc3JjKSk/JyksJzonKSd9YCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVUYWdFbGVtZW50X2Nsb3NlKHNyYyxzdGF0ZSkge1xyXG4gICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfSkkeyh0aGlzLm5leHR0eXBlKHNyYykpPycsJzonJ31gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVRleHRFbGVtZW50KHNyYyxzdGF0ZSkge1xyXG4gICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfScke3NyYy5kYXRhLnJlcGxhY2UoL1tcXG5cXHJdL2csXCJcIikucmVwbGFjZSgvXFwnL2csXCJcXFxcXFwnXCIpfSckeyhzdGF0ZS5ub2Rlcy5sZW5ndGg+c3RhdGUubm9kZXMucG9zKT8nLCc6Jyd9YCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDb21tZW50RWxlbWVudChzcmMsc3RhdGUpIHtcclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX0vKiAke3NyYy5kYXRhLnJlcGxhY2UoL1xcbi9nLFwiXCIpLnJlcGxhY2UoL1xcJy9nLFwiXFxcXFxcJ1wiKX0gKi9gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVNjcmlwdEVsZW1lbnRfb3BlbihzcmMsIGlzQ29udGFpbmVyLHN0YXRlKSB7XHJcblxyXG5cclxuICAgICAgaWYgKHNyYy5uYW1lID09ICdtYXAnKSB7XHJcbiAgICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX0oJHtzcmMuZGF0YX0pLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgYXJyYXkpIHsgcmV0dXJuIFsgYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNyYy5uYW1lID09ICdpZicpIHtcclxuICAgICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfSggJHtzcmMuZGF0YX0pP1sgYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNyYy5uYW1lID09ICdlYWNoJykge1xyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9ZWFjaCggJHtzcmMuZGF0YX0peyBgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfSR7c3JjLmRhdGF9JHsoc3RhdGUubm9kZXMubGVuZ3RoPnN0YXRlLm5vZGVzLnBvcyk/JywnOicnfWApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU2NyaXB0RWxlbWVudF9jbG9zZShzcmMsc3RhdGUpIHtcclxuXHJcbiAgICAgIGlmIChzcmMubmFtZSA9PSAnbWFwJykge1xyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9XX0pLGApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzcmMubmFtZSA9PSAnaWYnKSB7XHJcbiAgICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX1dOltdLGApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfX0pO2ApO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVzdWx0KGFyZykge1xyXG4gICAgICAvL3dpbmRvd+OCquODluOCuOOCp+OCr+ODiOOBq+ODoeOCveODg+ODieOCkui/veWKoOOBmeOCi+OCs+ODvOODieOCkueUn+aIkFxyXG4gICAgICAvL0dlbmVyYXRlIGNvZGUgdG8gYWRkIGEgbWV0aG9kIHRvIHRoZSB3aW5kb3cgb2JqZWN0XHJcbiAgICAgIHJldHVybihgXHJcbmNsYXNzICR7dGhpcy50b1VwcGVyRmlyc3RMZXR0ZXIoYXJnLmVsZW1lbnROYW1lKX0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gJHt0aGlzLmdldE5vZGVzKCkudHJpbSgpfVxyXG4gIH1cclxuJHthcmcuc2NyaXB0PycnK2FyZy5zY3JpcHQuZGF0YTonJ31cclxufTtgKTtcclxuICAgIH1cclxuICB9XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgMjAxNiAtIDIwMTdcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qIHYxLjAuMCAqL1xyXG5cclxuaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyLmJhYmVsLmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFJvb3RDb21wb25lbnRCdWlsZGVyIGV4dGVuZHMgQnVpbGRlcntcclxuICAgIC8qKuOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gICAgIOS+i++8mlxyXG4gICAgICBuZXcgUmVhY3RSb290UGFyc2VyKHsgYnVpbGRlcjogUmVhY3RDb21wb25lbnRCdWlsZGVyIH0pO1xyXG5cclxuICAgKiovXHJcbiAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgdGhpcy5idWlsZGVyID1vcHRpb25zLmJ1aWxkZXI7Ly93ZWJDb21wb25lbnTjga5idWlsZOOBq+WIqeeUqOOBmeOCi+ODk+ODq+ODgOODvOOCkuWumue+qeOBl+OBvuOBmeOAglxyXG4gICAgIHRoaXMuZWxlbWVudE5hbWVzID1bXTtcclxuICAgICB0aGlzLmVsZW1lbnRzID17fTtcclxuICAgICB0aGlzLmNvbXBvbmVudHMgPXt9O1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICAgYmVmb3JlQ29tcGlsZVxyXG4gICAgICDlkIRCdWlsZGVy44KS5ZG844Gz5Ye644GZ5YmN44GrMeWbnuOBoOOBkeWun+ihjOOBleOCjOOBvuOBmeOAglxyXG4gICAgICDjgZPjga7jgr/jgqTjg5/jg7PjgrDjgadodG1s5YaF44Gud2ViQ29tcG9uZW505a6a576p44KS5Y+W5b6X44GX44Gm5Yip55So5Y+v6IO944Gq5b2i5byP44Gr5aSJ5o+b44GX44G+44GZ44CCXHJcbiAgICoqL1xyXG4gICBiZWZvcmVDb21waWxlKHNyYyl7XHJcbiAgICAgdmFyIGN1c3RvbUVsZW1lbnRzID0gc3JjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKTtcclxuICAgICBjdXN0b21FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGN1c3RvbUVsZW1lbnQpe1xyXG4gICAgICAgdmFyIGVsZW1lbnROYW1lID0gXCJhcHBcIjtcclxuICAgICAgIHRoaXMuZWxlbWVudE5hbWVzLnB1c2goZWxlbWVudE5hbWUpO1xyXG4gICAgICAgdGhpcy5lbGVtZW50c1tlbGVtZW50TmFtZV0gPVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgdGVtcGxhdGU6Y3VzdG9tRWxlbWVudD9jdXN0b21FbGVtZW50LmNsb25lRWxlbWVudCgpLmNoaWxkcmVuOltdLFxyXG4gICAgICAgICAgIHNjcmlwdDpbXVxyXG4gICAgICAgICB9O1xyXG4gICAgICAgLy9ib2R56YWN5LiL44Gu5YmK6ZmkXHJcbiAgICAgICBjdXN0b21FbGVtZW50LnJlbW92ZUNoaWxkQWxsKCk7XHJcbiAgICAgICAvL2JvZHnphY3kuIvjgavov73liqBcclxuICAgICAgIHZhciBuZXdFbGVtZW50ID0gY3VzdG9tRWxlbWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgIG5ld0VsZW1lbnQuYXR0cmlidXRlcyA9IHsnaWQnOlt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcImFwcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dfTtcclxuICAgICAgIGN1c3RvbUVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcblxyXG4gICAgIH0sdGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgICBidWlsZFxyXG4gICAgICB3ZWJDb21wb25lbnTjgpJidWlsZOOBl+OBvuOBmeOAglxyXG4gICAgICDjgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafmjIflrprjgZfjgZ9CdWlsZGVy44KS5a6f6KGM44GX44G+44GZ44CCXHJcblxyXG4gICAqKi9cclxuICAgYnVpbGQoKXtcclxuICAgICAvL2NvbnNvbGUubG9nKFwiYnVpbGQ6IFwiLHRoaXMuZWxlbWVudHMpO1xyXG4gICAgIGZvciAodmFyIGVsZW1lbnROYW1lIGluIHRoaXMuZWxlbWVudHMpIHtcclxuICAgICAgIC8vY29uc29sZS5sb2coXCJidWlsZCBlbGVtZW50OiBcIiAsIGVsZW1lbnROYW1lLCB0aGlzLmVsZW1lbnRzW2VsZW1lbnROYW1lXSk7XHJcblxyXG4gICAgICAgdmFyIHJlYWN0Q29tcG9uZW50QnVpbGRlciA9IG5ldyB0aGlzLmJ1aWxkZXIoe2VsZW1lbnRzOnRoaXMuZWxlbWVudHMsZWxlbWVudE5hbWVzOnRoaXMuZWxlbWVudE5hbWVzfSk7XHJcbiAgICAgICB2YXIgX2NvbXBpbGVyID0gbmV3IENvbXBpbGVyKFtyZWFjdENvbXBvbmVudEJ1aWxkZXJdLHt9KTtcclxuICAgICAgIHZhciBjb21waWxlRGF0YSA9X2NvbXBpbGVyLmNvbXBpbGUodGhpcy5lbGVtZW50c1tlbGVtZW50TmFtZV0udGVtcGxhdGVbMF0pO1xyXG4gICAgICAgdGhpcy5jb21wb25lbnRzW2VsZW1lbnROYW1lXT1yZWFjdENvbXBvbmVudEJ1aWxkZXIuZ2V0UmVzdWx0KHsnZWxlbWVudE5hbWUnOmVsZW1lbnROYW1lLCdzY3JpcHQnOnRoaXMuZWxlbWVudHNbZWxlbWVudE5hbWVdLnNjcmlwdFswXX0pO1xyXG4gICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmNvbXBvbmVudHNbZWxlbWVudE5hbWVdOlwiK3RoaXMuY29tcG9uZW50c1tlbGVtZW50TmFtZV0pO1xyXG4gICAgIH07XHJcbiAgIH1cclxuICAgLyoqXHJcbiAgICAgIGdldFJlc3VsdFxyXG4gICAgICDnlJ/miJDntZDmnpzov5TljbTjg6Hjgr3jg4Pjg4lcclxuICAgICoqL1xyXG4gICBnZXRSZXN1bHQoYXJnKSB7XHJcbiAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgIGZvciAodmFyIGVsZW1lbnROYW1lIGluIHRoaXMuY29tcG9uZW50cykge1xyXG4gICAgICAgcmVzdWx0LnB1c2godGhpcy5jb21wb25lbnRzW2VsZW1lbnROYW1lXSk7XHJcbiAgICAgfVxyXG4gICAgIHJldHVybiByZXN1bHQuam9pbignXFx0Jyk7XHJcbiAgIH1cclxuIH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAyMDE2IC0gMjAxNlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogdjEuMC4wICovXHJcblxyXG5pbXBvcnQgQnVpbGRlciBmcm9tICcuL0J1aWxkZXIuYmFiZWwuanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYkNvbXBvbmVudFBhcnNlciBleHRlbmRzIEJ1aWxkZXJ7XHJcbiAgICAvKirjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICAg5L6L77yaXHJcbiAgICAgICBuZXcgV2ViQ29tcG9uZW50UGFyc2VyKHsgYnVpbGRlcjogUmVhY3RDb21wb25lbnRCdWlsZGVyIH0pO1xyXG5cclxuICAgICoqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICB0aGlzLmJ1aWxkZXIgPW9wdGlvbnMuYnVpbGRlcjsvL3dlYkNvbXBvbmVudOOBrmJ1aWxk44Gr5Yip55So44GZ44KL44OT44Or44OA44O844KS5a6a576p44GX44G+44GZ44CCXHJcbiAgICAgIHRoaXMuZWxlbWVudE5hbWVzID1bXTtcclxuICAgICAgdGhpcy5lbGVtZW50cyA9e307XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cyA9e307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICBiZWZvcmVDb21waWxlXHJcbiAgICAgICDlkIRCdWlsZGVy44KS5ZG844Gz5Ye644GZ5YmN44GrMeWbnuOBoOOBkeWun+ihjOOBleOCjOOBvuOBmeOAglxyXG4gICAgICAg44GT44Gu44K/44Kk44Of44Oz44Kw44GnaHRtbOWGheOBrndlYkNvbXBvbmVudOWumue+qeOCkuWPluW+l+OBl+OBpuWIqeeUqOWPr+iDveOBquW9ouW8j+OBq+WkieaPm+OBl+OBvuOBmeOAglxyXG4gICAgKiovXHJcbiAgICBiZWZvcmVDb21waWxlKHNyYyl7XHJcbiAgICAgIHZhciBjdXN0b21FbGVtZW50cyA9IHNyYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImVsZW1lbnRcIik7XHJcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY3VzdG9tRWxlbWVudCl7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gY3VzdG9tRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRlbXBsYXRlXCIpO1xyXG4gICAgICAgIHZhciBzY3JpcHQgPSBjdXN0b21FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHNjcmlwdCA9IHNjcmlwdC5jb25jYXQoY3VzdG9tRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIngtc2NyaXB0XCIpKTtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnROYW1lID0gY3VzdG9tRWxlbWVudC5hdHRyaWJ1dGVzLm5hbWVbMF0uZGF0YS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudE5hbWVzLnB1c2goZWxlbWVudE5hbWUpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNbZWxlbWVudE5hbWVdID1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6dGVtcGxhdGVbMF0/dGVtcGxhdGVbMF0uY2xvbmVFbGVtZW50KCkuY2hpbGRyZW46W10sXHJcbiAgICAgICAgICAgIHNjcmlwdDpzY3JpcHRbMF0/c2NyaXB0WzBdLmNsb25lRWxlbWVudCgpLmNoaWxkcmVuOltdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJlbGVtZW50OiBcIiAsIGVsZW1lbnROYW1lLCB0aGlzLmVsZW1lbnRzW2VsZW1lbnROYW1lXSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImVsZW1lbnQ6IFwiICwgZWxlbWVudE5hbWUsIHN0cmluZ2lmeSh0aGlzLmVsZW1lbnRzW2VsZW1lbnROYW1lXSkpO1xyXG4gICAgICAgIGN1c3RvbUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXN0b21FbGVtZW50KTtcclxuXHJcbiAgICAgIH0sdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgYnVpbGRcclxuICAgICAgIHdlYkNvbXBvbmVudOOCkmJ1aWxk44GX44G+44GZ44CCXHJcbiAgICAgICDjgrPjg7Pjgrnjg4jjg6njgq/jgr/jgafmjIflrprjgZfjgZ9CdWlsZGVy44KS5a6f6KGM44GX44G+44GZ44CCXHJcblxyXG4gICAgKiovXHJcbiAgICBidWlsZCgpe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiYnVpbGQ6IFwiLHRoaXMuZWxlbWVudHMpO1xyXG4gICAgICBmb3IgKHZhciBlbGVtZW50TmFtZSBpbiB0aGlzLmVsZW1lbnRzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJ1aWxkIGVsZW1lbnQ6IFwiICwgZWxlbWVudE5hbWUsIHRoaXMuZWxlbWVudHNbZWxlbWVudE5hbWVdKTtcclxuXHJcbiAgICAgICAgdmFyIHJlYWN0Q29tcG9uZW50QnVpbGRlciA9IG5ldyB0aGlzLmJ1aWxkZXIoe2VsZW1lbnRzOnRoaXMuZWxlbWVudHMsZWxlbWVudE5hbWVzOnRoaXMuZWxlbWVudE5hbWVzfSk7XHJcbiAgICAgICAgdmFyIF9jb21waWxlciA9IG5ldyBDb21waWxlcihbcmVhY3RDb21wb25lbnRCdWlsZGVyXSx7fSk7XHJcbiAgICAgICAgdmFyIGNvbXBpbGVEYXRhID1fY29tcGlsZXIuY29tcGlsZSh0aGlzLmVsZW1lbnRzW2VsZW1lbnROYW1lXS50ZW1wbGF0ZVswXSk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW2VsZW1lbnROYW1lXT1yZWFjdENvbXBvbmVudEJ1aWxkZXIuZ2V0UmVzdWx0KHsnZWxlbWVudE5hbWUnOmVsZW1lbnROYW1lLCdzY3JpcHQnOnRoaXMuZWxlbWVudHNbZWxlbWVudE5hbWVdLnNjcmlwdFswXX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5jb21wb25lbnRzW2VsZW1lbnROYW1lXTpcIit0aGlzLmNvbXBvbmVudHNbZWxlbWVudE5hbWVdKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgZ2V0UmVzdWx0XHJcbiAgICAgICDnlJ/miJDntZDmnpzov5TljbTjg6Hjgr3jg4Pjg4lcclxuICAgICAqKi9cclxuICAgIGdldFJlc3VsdChhcmcpIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBlbGVtZW50TmFtZSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcclxuICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNvbXBvbmVudHNbZWxlbWVudE5hbWVdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJ1xcdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAyMDE2IC0gMjAxNlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogdjEuMC4wICovXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBpbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJ1aWxkZXJzID0gW10sIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMgPSBidWlsZGVycztcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgfVxyXG4gICAgICAvLyoqUHVibGljKiovL1xyXG4gICAgY3JlYXRlQXR0cmlidXRlKGF0dHJpYnV0ZXMsX2J1aWxkZXIpIHtcclxuICAgICAgdmFyIHJldCA9IFtdO1xyXG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGF0dHJrZXkpIHtcclxuICAgICAgICAvL2lmKGF0dHJpYnV0ZXNbYXR0cmtleV0ubGVuZ3RoPT0wKXtcclxuICAgICAgICAvLyAgbm9kZS5wdXNoKF9idWlsZGVyLmNyZWF0ZUF0dHJpYnV0ZV9rZXlvbmx5KGF0dHJrZXkpKTtcclxuICAgICAgICAvL30gZWxzZVxyXG4gICAgICAgIHZhciBub2RlID0gW107XHJcbiAgICAgICAgYXR0cmlidXRlc1thdHRya2V5XS5mb3JFYWNoKGZ1bmN0aW9uKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgaWYoYXR0cmlidXRlLnR5cGUgPT0gJ3NjcmlwdCcpIHtcclxuICAgICAgICAgICAgICBub2RlLnB1c2goX2J1aWxkZXIuY3JlYXRlQXR0cmlidXRlX3NjcmlwdChhdHRya2V5LCBhdHRyaWJ1dGUpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbm9kZS5wdXNoKF9idWlsZGVyLmNyZWF0ZUF0dHJpYnV0ZV90ZXh0KGF0dHJrZXksIGF0dHJpYnV0ZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHJldC5wdXNoKF9idWlsZGVyLmNyZWF0ZUF0dHJpYnV0ZShhdHRya2V5LG5vZGUpKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICAgIHJldHVybiByZXQuam9pbihfYnVpbGRlci5hdHRyaWJ1dGVEZWxpbWl0ZXI/X2J1aWxkZXIuYXR0cmlidXRlRGVsaW1pdGVyOicgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGFnRWxlbWVudChzcmMsc3RhdGUpIHtcclxuICAgICAgLy9zcmPjga7liqDlt6XjgpLooYzjgYZcclxuICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgIF9idWlsZGVyLmJlZm9yZUNyZWF0ZVRhZ0VsZW1lbnQoc3JjLCBzcmMuY2hpbGRyZW4/dHJ1ZTpmYWxzZSk7XHJcbiAgICAgICAgaWYoc3JjLmF0dHJpYnV0ZXMpX2J1aWxkZXIuYmVmb3JlQ3JlYXRlQXR0cmlidXRlKHNyYy5hdHRyaWJ1dGVzKTtcclxuICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICBpZiAoc3JjLmNoaWxkcmVuICYmIHNyYy5jaGlsZHJlbi5sZW5ndGg+MCkgey8vVGhpcyBpcyBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzcmMuYXR0cmlidXRlcz8nICcrdGhpcy5jcmVhdGVBdHRyaWJ1dGUoc3JjLmF0dHJpYnV0ZXMsX2J1aWxkZXIpOicnO1xyXG4gICAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5jcmVhdGVUYWdFbGVtZW50X29wZW4oc3JjLCBhdHRyaWJ1dGVzLCB0cnVlLHN0YXRlKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wLGxlbmd0aD1zcmMuY2hpbGRyZW4ubGVuZ3RoO2k8bGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICB2YXIgX3NyYyA9IHNyYy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlTm9kZXMoX3NyYyx7bm9kZXM6e2xlbmd0aDpsZW5ndGgscG9zOmkrMX0sZGVwdGg6c3RhdGUuZGVwdGh9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJzLmZvckVhY2goZnVuY3Rpb24oX2J1aWxkZXIpIHtcclxuICAgICAgICAgIF9idWlsZGVyLmFkZE5vZGUoX2J1aWxkZXIuY3JlYXRlVGFnRWxlbWVudF9jbG9zZShzcmMsc3RhdGUpKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7Ly9UaGlzIGlzIG5vdCBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzcmMuYXR0cmlidXRlcz8nICcrdGhpcy5jcmVhdGVBdHRyaWJ1dGUoc3JjLmF0dHJpYnV0ZXMsX2J1aWxkZXIpOicnO1xyXG4gICAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5jcmVhdGVUYWdFbGVtZW50X29wZW4oc3JjLCBhdHRyaWJ1dGVzLCBmYWxzZSxzdGF0ZSkpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2NyaXB0RWxlbWVudChzcmMsc3RhdGUpIHtcclxuICAgICAgLy9zcmPjga7liqDlt6XjgpLooYzjgYZcclxuICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgIF9idWlsZGVyLmJlZm9yZUNyZWF0ZVNjcmlwdEVsZW1lbnQoc3JjLCBzcmMuY2hpbGRyZW4/dHJ1ZTpmYWxzZSxzdGF0ZSk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgaWYgKHNyYy5jaGlsZHJlbiAmJiBzcmMuY2hpbGRyZW4ubGVuZ3RoPjApIHsvL1RoaXMgaXMgYSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJzLmZvckVhY2goZnVuY3Rpb24oX2J1aWxkZXIpIHtcclxuICAgICAgICAgIF9idWlsZGVyLmFkZE5vZGUoX2J1aWxkZXIuY3JlYXRlU2NyaXB0RWxlbWVudF9vcGVuKHNyYywgdHJ1ZSxzdGF0ZSkpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGk9MCxsZW5ndGg9c3JjLmNoaWxkcmVuLmxlbmd0aDtpPGxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgdmFyIF9zcmMgPSBzcmMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKF9zcmMse25vZGVzOntsZW5ndGg6bGVuZ3RoLHBvczppKzF9LGRlcHRoOnN0YXRlLmRlcHRofSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9idWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uKF9idWlsZGVyKSB7XHJcbiAgICAgICAgICBfYnVpbGRlci5hZGROb2RlKF9idWlsZGVyLmNyZWF0ZVNjcmlwdEVsZW1lbnRfY2xvc2Uoc3JjLHN0YXRlKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgIH0gZWxzZSB7Ly9UaGlzIGlzIG5vdCBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5jcmVhdGVTY3JpcHRFbGVtZW50X29wZW4oc3JjLCBmYWxzZSxzdGF0ZSkpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTm9kZXMoc3JjLHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmRlcHRoKys7XHJcbiAgICAgIC8vc3Jj44Gu5Yqg5bel44KS6KGM44GGXHJcbiAgICAgIHRoaXMuX2J1aWxkZXJzLmZvckVhY2goZnVuY3Rpb24oX2J1aWxkZXIpIHtcclxuICAgICAgICBfYnVpbGRlci5iZWZvcmVDcmVhdGVOb2RlcyhzcmMsc3RhdGUpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgIGlmIChzcmMudHlwZSA9PSAndGFnJykgdGhpcy5jcmVhdGVUYWdFbGVtZW50KHNyYyxzdGF0ZSk7XHJcbiAgICAgIGlmIChzcmMudHlwZSA9PSAndGV4dCcpXHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5jcmVhdGVUZXh0RWxlbWVudChzcmMsc3RhdGUpKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgaWYgKHNyYy50eXBlID09ICdzY3JpcHQnKXRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudChzcmMsc3RhdGUpO1xyXG4gICAgICBpZiAoc3JjLnR5cGUgPT0gJ2NvbW1lbnQnKVxyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJzLmZvckVhY2goZnVuY3Rpb24oX2J1aWxkZXIpIHtcclxuICAgICAgICAgIF9idWlsZGVyLmFkZE5vZGUoX2J1aWxkZXIuY3JlYXRlQ29tbWVudEVsZW1lbnQoc3JjLHN0YXRlKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgIHN0YXRlLmRlcHRoLS07XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlKHNyYykge1xyXG4gICAgICAvL3NyY+OBruWKoOW3peOCkuihjOOBhlxyXG4gICAgICB0aGlzLl9idWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uKF9idWlsZGVyKSB7XHJcbiAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5iZWZvcmVDb21waWxlKHNyYykpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgIHZhciBzdGF0ZSA9IHtub2Rlczp7bGVuZ3RoOjEscG9zOjF9LGRlcHRoOjB9O1xyXG4gICAgICBpZihzcmMgaW5zdGFuY2VvZiBBcnJheSl7XHJcbiAgICAgICAgc3JjLmZvckVhY2goZnVuY3Rpb24oc3JjKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlcyhzcmMsc3RhdGUpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlcyhzcmMsc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iLCJcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAyMDE2IC0gMjAxNlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogdjEuMC4wICovXHJcblxyXG4vL2h0dHA6Ly95dXRhcG9uLmhhdGVuYWJsb2cuY29tL2VudHJ5LzIwMTUvMDIvMDkvMDkwMDAwXHJcblxyXG5pbXBvcnQgQ1NTT00gZnJvbSAnY3Nzb20nXHJcbmltcG9ydCBDb21waWxlciBmcm9tICcuL2h0bWxjb21waWxlci5iYWJlbC5qcydcclxuaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgRGVidWdCdWlsZGVyIGZyb20gJy4vRGVidWdCdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgSHRtbEJ1aWxkZXIgZnJvbSAnLi9IdG1sQnVpbGRlci5iYWJlbC5qcydcclxuaW1wb3J0IENTU0J1aWxkZXIgZnJvbSAnLi9DU1NCdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgSW5jcmVtZW50YWxEb21CdWlsZGVyIGZyb20gJy4vSW5jcmVtZW50YWxEb21CdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgUmVhY3RDb21wb25lbnRCdWlsZGVyIGZyb20gJy4vUmVhY3RDb21wb25lbnRCdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgV2ViQ29tcG9uZW50UGFyc2VyIGZyb20gJy4vV2ViQ29tcG9uZW50UGFyc2VyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgUmVhY3RSb290Q29tcG9uZW50QnVpbGRlciBmcm9tICcuL1JlYWN0Um9vdENvbXBvbmVudEJ1aWxkZXIuYmFiZWwuanMnXHJcblxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbmdsb2JhbC5DU1NPTSA9IENTU09NO1xyXG5nbG9iYWwuQnVpbGRlciA9IEJ1aWxkZXI7XHJcbmdsb2JhbC5EZWJ1Z0J1aWxkZXIgPSBEZWJ1Z0J1aWxkZXI7XHJcbmdsb2JhbC5IdG1sQnVpbGRlciA9IEh0bWxCdWlsZGVyO1xyXG5nbG9iYWwuQ1NTQnVpbGRlciA9IENTU0J1aWxkZXI7XHJcbmdsb2JhbC5Db21waWxlciA9IENvbXBpbGVyO1xyXG5nbG9iYWwuSW5jcmVtZW50YWxEb21CdWlsZGVyID0gSW5jcmVtZW50YWxEb21CdWlsZGVyO1xyXG5nbG9iYWwuUmVhY3RDb21wb25lbnRCdWlsZGVyID0gUmVhY3RDb21wb25lbnRCdWlsZGVyO1xyXG5nbG9iYWwuV2ViQ29tcG9uZW50UGFyc2VyID0gV2ViQ29tcG9uZW50UGFyc2VyO1xyXG5nbG9iYWwuUmVhY3RSb290Q29tcG9uZW50QnVpbGRlciA9IFJlYWN0Um9vdENvbXBvbmVudEJ1aWxkZXI7XHJcbn1lbHNle1xyXG53aW5kb3cuQ1NTT00gPSBDU1NPTTtcclxud2luZG93LkJ1aWxkZXIgPSBCdWlsZGVyO1xyXG53aW5kb3cuRGVidWdCdWlsZGVyID0gRGVidWdCdWlsZGVyO1xyXG53aW5kb3cuSHRtbEJ1aWxkZXIgPSBIdG1sQnVpbGRlcjtcclxud2luZG93LkNTU0J1aWxkZXIgPSBDU1NCdWlsZGVyO1xyXG53aW5kb3cuQ29tcGlsZXIgPSBDb21waWxlcjtcclxud2luZG93LkluY3JlbWVudGFsRG9tQnVpbGRlciA9IEluY3JlbWVudGFsRG9tQnVpbGRlcjtcclxud2luZG93LlJlYWN0Q29tcG9uZW50QnVpbGRlciA9IFJlYWN0Q29tcG9uZW50QnVpbGRlcjtcclxud2luZG93LldlYkNvbXBvbmVudFBhcnNlciA9IFdlYkNvbXBvbmVudFBhcnNlcjtcclxud2luZG93LlJlYWN0Um9vdENvbXBvbmVudEJ1aWxkZXIgPSBSZWFjdFJvb3RDb21wb25lbnRCdWlsZGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=