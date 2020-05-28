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
      constructor() {
        super()
        this.emptyTags = {area: 1, base: 1, basefont: 1, br: 1, col: 1, frame: 1, hr: 1, img: 1, input: 1, isindex: 1, link: 1, meta: 1, param: 1, embed: 1, '?xml': 1, wbr: 1}
      }

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
      
      //todo createCommentElement(src,state) {}
      createCommentElement(src,state) {
        return(`${Array(state.depth).join('\t')}<!-- ${src.data} -->`);
      }

      //todo isContainerは可能なtagが決まっているので、そこを考慮しないとdomが壊れる
      createTagElement_open(src, attributes, isContainer,state) {
        if(src.name=='script'){
          return(`${Array(state.depth).join('\t')}<${src.name}${attributes}>${isContainer?'':'</'+src.name+'>'}`);
        }
        let emptyTagFlg = this.emptyTags[src.name]||false
        let reqCloseTag = !isContainer && !emptyTagFlg
        let closeTag = reqCloseTag ? `</${src.name}>` : ''
        return(`${Array(state.depth).join('\t')}<${src.name}${attributes}${emptyTagFlg?' /': ''}>${reqCloseTag? closeTag : ''}`);
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
       // console.log("this.components[elementName]:"+this.components[elementName]);
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
        //console.log("this.components[elementName]:"+this.components[elementName]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3NvbS9idWlsZC9DU1NPTS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vQnVpbGRlci5iYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9DU1NCdWlsZGVyLmJhYmVsLmpzIiwid2VicGFjazovLy8uL0RlYnVnQnVpbGRlci5iYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9IdG1sQnVpbGRlci5iYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9JbmNyZW1lbnRhbERvbUJ1aWxkZXIuYmFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RDb21wb25lbnRCdWlsZGVyLmJhYmVsLmpzIiwid2VicGFjazovLy8uL1JlYWN0Um9vdENvbXBvbmVudEJ1aWxkZXIuYmFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vV2ViQ29tcG9uZW50UGFyc2VyLmJhYmVsLmpzIiwid2VicGFjazovLy8uL2h0bWxjb21waWxlci5iYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5iYWJlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMx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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsK0JBQStCOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QSxTQUFTO0FBQ1QsT0FBTyxPQUFPO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsbUJBQW1CLE9BQU8sZUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFeUI7QUFDcUI7QUFDTjtBQUNVO0FBQ0Y7QUFDRjtBQUNzQjtBQUNBO0FBQ047QUFDYzs7O0FBRzVFO0FBQ0EsZUFBZSw0Q0FBSztBQUNwQixpQkFBaUIseURBQU87QUFDeEIsc0JBQXNCLDhEQUFZO0FBQ2xDLHFCQUFxQiw2REFBVztBQUNoQyxvQkFBb0IsNERBQVU7QUFDOUIsa0JBQWtCLDhEQUFRO0FBQzFCLCtCQUErQix1RUFBcUI7QUFDcEQsK0JBQStCLHVFQUFxQjtBQUNwRCw0QkFBNEIsb0VBQWtCO0FBQzlDLG1DQUFtQywyRUFBeUI7QUFDNUQsQ0FBQztBQUNELGVBQWUsNENBQUs7QUFDcEIsaUJBQWlCLHlEQUFPO0FBQ3hCLHNCQUFzQiw4REFBWTtBQUNsQyxxQkFBcUIsNkRBQVc7QUFDaEMsb0JBQW9CLDREQUFVO0FBQzlCLGtCQUFrQiw4REFBUTtBQUMxQiwrQkFBK0IsdUVBQXFCO0FBQ3BELCtCQUErQix1RUFBcUI7QUFDcEQsNEJBQTRCLG9FQUFrQjtBQUM5QyxtQ0FBbUMsMkVBQXlCO0FBQzVEIiwiZmlsZSI6Imh0bWxjb21waWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguYmFiZWwuanNcIik7XG4iLCIoZnVuY3Rpb24ocm9vdCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIGV4cG9ydHM7XHJcblx0aWYgKHR5cGVvZihtb2R1bGUpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YobW9kdWxlLmV4cG9ydHMpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdCAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XHJcblx0fSBlbHNlIHtcclxuXHQgICAgZXhwb3J0cyA9IHt9O1xyXG5cdCAgICBpZiAocm9vdC5DU1NPTSkge1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblx0XHRcdHJvb3QuQ1NTT00gPSBleHBvcnRzO1xyXG5cdH1cclxuXHR2YXIgQ1NTT00gPSBleHBvcnRzO1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLVN0eWxlL2Nzcy5odG1sI0NTUy1DU1NTdHlsZURlY2xhcmF0aW9uXHJcbiAqL1xyXG5DU1NPTS5DU1NTdHlsZURlY2xhcmF0aW9uID0gZnVuY3Rpb24gQ1NTU3R5bGVEZWNsYXJhdGlvbigpe1xyXG5cdHRoaXMubGVuZ3RoID0gMDtcclxuXHR0aGlzLnBhcmVudFJ1bGUgPSBudWxsO1xyXG5cclxuXHQvLyBOT04tU1RBTkRBUkRcclxuXHR0aGlzLl9pbXBvcnRhbnRzID0ge307XHJcbn07XHJcblxyXG5cclxuQ1NTT00uQ1NTU3R5bGVEZWNsYXJhdGlvbi5wcm90b3R5cGUgPSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yOiBDU1NPTS5DU1NTdHlsZURlY2xhcmF0aW9uLFxyXG5cclxuXHQvKipcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1TdHlsZS9jc3MuaHRtbCNDU1MtQ1NTU3R5bGVEZWNsYXJhdGlvbi1nZXRQcm9wZXJ0eVZhbHVlXHJcblx0ICogQHJldHVybiB7c3RyaW5nfSB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGlmIGl0IGhhcyBiZWVuIGV4cGxpY2l0bHkgc2V0IGZvciB0aGlzIGRlY2xhcmF0aW9uIGJsb2NrLlxyXG5cdCAqIFJldHVybnMgdGhlIGVtcHR5IHN0cmluZyBpZiB0aGUgcHJvcGVydHkgaGFzIG5vdCBiZWVuIHNldC5cclxuXHQgKi9cclxuXHRnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHRyZXR1cm4gdGhpc1tuYW1lXSB8fCBcIlwiO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3ByaW9yaXR5PW51bGxdIFwiaW1wb3J0YW50XCIgb3IgbnVsbFxyXG5cdCAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU1N0eWxlRGVjbGFyYXRpb24tc2V0UHJvcGVydHlcclxuXHQgKi9cclxuXHRzZXRQcm9wZXJ0eTogZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XHJcblx0XHRpZiAodGhpc1tuYW1lXSkge1xyXG5cdFx0XHQvLyBQcm9wZXJ0eSBhbHJlYWR5IGV4aXN0LiBPdmVyd3JpdGUgaXQuXHJcblx0XHRcdHZhciBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcywgbmFtZSk7XHJcblx0XHRcdGlmIChpbmRleCA8IDApIHtcclxuXHRcdFx0XHR0aGlzW3RoaXMubGVuZ3RoXSA9IG5hbWU7XHJcblx0XHRcdFx0dGhpcy5sZW5ndGgrKztcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gTmV3IHByb3BlcnR5LlxyXG5cdFx0XHR0aGlzW3RoaXMubGVuZ3RoXSA9IG5hbWU7XHJcblx0XHRcdHRoaXMubGVuZ3RoKys7XHJcblx0XHR9XHJcblx0XHR0aGlzW25hbWVdID0gdmFsdWUgKyBcIlwiO1xyXG5cdFx0dGhpcy5faW1wb3J0YW50c1tuYW1lXSA9IHByaW9yaXR5O1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLVN0eWxlL2Nzcy5odG1sI0NTUy1DU1NTdHlsZURlY2xhcmF0aW9uLXJlbW92ZVByb3BlcnR5XHJcblx0ICogQHJldHVybiB7c3RyaW5nfSB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGlmIGl0IGhhcyBiZWVuIGV4cGxpY2l0bHkgc2V0IGZvciB0aGlzIGRlY2xhcmF0aW9uIGJsb2NrLlxyXG5cdCAqIFJldHVybnMgdGhlIGVtcHR5IHN0cmluZyBpZiB0aGUgcHJvcGVydHkgaGFzIG5vdCBiZWVuIHNldCBvciB0aGUgcHJvcGVydHkgbmFtZSBkb2VzIG5vdCBjb3JyZXNwb25kIHRvIGEga25vd24gQ1NTIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHJlbW92ZVByb3BlcnR5OiBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHRpZiAoIShuYW1lIGluIHRoaXMpKSB7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fVxyXG5cdFx0dmFyIGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLCBuYW1lKTtcclxuXHRcdGlmIChpbmRleCA8IDApIHtcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHR9XHJcblx0XHR2YXIgcHJldlZhbHVlID0gdGhpc1tuYW1lXTtcclxuXHRcdHRoaXNbbmFtZV0gPSBcIlwiO1xyXG5cclxuXHRcdC8vIFRoYXQncyB3aGF0IFdlYktpdCBhbmQgT3BlcmEgZG9cclxuXHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbCh0aGlzLCBpbmRleCwgMSk7XHJcblxyXG5cdFx0Ly8gVGhhdCdzIHdoYXQgRmlyZWZveCBkb2VzXHJcblx0XHQvL3RoaXNbaW5kZXhdID0gXCJcIlxyXG5cclxuXHRcdHJldHVybiBwcmV2VmFsdWU7XHJcblx0fSxcclxuXHJcblx0Z2V0UHJvcGVydHlDU1NWYWx1ZTogZnVuY3Rpb24oKSB7XHJcblx0XHQvL0ZJWE1FXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxyXG5cdCAqL1xyXG5cdGdldFByb3BlcnR5UHJpb3JpdHk6IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRcdHJldHVybiB0aGlzLl9pbXBvcnRhbnRzW25hbWVdIHx8IFwiXCI7XHJcblx0fSxcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXHJcblx0ICogICBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5U2hvcnRoYW5kKFwib3ZlcmZsb3cteFwiKVxyXG5cdCAqICAgLT4gXCJvdmVyZmxvd1wiXHJcblx0ICovXHJcblx0Z2V0UHJvcGVydHlTaG9ydGhhbmQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly9GSVhNRVxyXG5cdH0sXHJcblxyXG5cdGlzUHJvcGVydHlJbXBsaWNpdDogZnVuY3Rpb24oKSB7XHJcblx0XHQvL0ZJWE1FXHJcblx0fSxcclxuXHJcblx0Ly8gRG9lc24ndCB3b3JrIGluIElFIDwgOVxyXG5cdGdldCBjc3NUZXh0KCl7XHJcblx0XHR2YXIgcHJvcGVydGllcyA9IFtdO1xyXG5cdFx0Zm9yICh2YXIgaT0wLCBsZW5ndGg9dGhpcy5sZW5ndGg7IGkgPCBsZW5ndGg7ICsraSkge1xyXG5cdFx0XHR2YXIgbmFtZSA9IHRoaXNbaV07XHJcblx0XHRcdHZhciB2YWx1ZSA9IHRoaXMuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcclxuXHRcdFx0dmFyIHByaW9yaXR5ID0gdGhpcy5nZXRQcm9wZXJ0eVByaW9yaXR5KG5hbWUpO1xyXG5cdFx0XHRpZiAocHJpb3JpdHkpIHtcclxuXHRcdFx0XHRwcmlvcml0eSA9IFwiICFcIiArIHByaW9yaXR5O1xyXG5cdFx0XHR9XHJcblx0XHRcdHByb3BlcnRpZXNbaV0gPSBuYW1lICsgXCI6IFwiICsgdmFsdWUgKyBwcmlvcml0eSArIFwiO1wiO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHByb3BlcnRpZXMuam9pbihcIiBcIik7XHJcblx0fSxcclxuXHJcblx0c2V0IGNzc1RleHQodGV4dCl7XHJcblx0XHR2YXIgaSwgbmFtZTtcclxuXHRcdGZvciAoaSA9IHRoaXMubGVuZ3RoOyBpLS07KSB7XHJcblx0XHRcdG5hbWUgPSB0aGlzW2ldO1xyXG5cdFx0XHR0aGlzW25hbWVdID0gXCJcIjtcclxuXHRcdH1cclxuXHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbCh0aGlzLCAwLCB0aGlzLmxlbmd0aCk7XHJcblx0XHR0aGlzLl9pbXBvcnRhbnRzID0ge307XHJcblxyXG5cdFx0dmFyIGR1bW15UnVsZSA9IENTU09NLnBhcnNlKCcjYm9ndXN7JyArIHRleHQgKyAnfScpLmNzc1J1bGVzWzBdLnN0eWxlO1xyXG5cdFx0dmFyIGxlbmd0aCA9IGR1bW15UnVsZS5sZW5ndGg7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0bmFtZSA9IGR1bW15UnVsZVtpXTtcclxuXHRcdFx0dGhpcy5zZXRQcm9wZXJ0eShkdW1teVJ1bGVbaV0sIGR1bW15UnVsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpLCBkdW1teVJ1bGUuZ2V0UHJvcGVydHlQcmlvcml0eShuYW1lKSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5DU1NTdHlsZURlY2xhcmF0aW9uID0gQ1NTT00uQ1NTU3R5bGVEZWNsYXJhdGlvbjtcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3NvbS8jdGhlLWNzc3J1bGUtaW50ZXJmYWNlXHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU1J1bGVcclxuICovXHJcbkNTU09NLkNTU1J1bGUgPSBmdW5jdGlvbiBDU1NSdWxlKCkge1xyXG5cdHRoaXMucGFyZW50UnVsZSA9IG51bGw7XHJcblx0dGhpcy5wYXJlbnRTdHlsZVNoZWV0ID0gbnVsbDtcclxufTtcclxuXHJcbkNTU09NLkNTU1J1bGUuVU5LTk9XTl9SVUxFID0gMDsgICAgICAgICAgICAgICAgIC8vIG9ic29sZXRlXHJcbkNTU09NLkNTU1J1bGUuU1RZTEVfUlVMRSA9IDE7XHJcbkNTU09NLkNTU1J1bGUuQ0hBUlNFVF9SVUxFID0gMjsgICAgICAgICAgICAgICAgIC8vIG9ic29sZXRlXHJcbkNTU09NLkNTU1J1bGUuSU1QT1JUX1JVTEUgPSAzO1xyXG5DU1NPTS5DU1NSdWxlLk1FRElBX1JVTEUgPSA0O1xyXG5DU1NPTS5DU1NSdWxlLkZPTlRfRkFDRV9SVUxFID0gNTtcclxuQ1NTT00uQ1NTUnVsZS5QQUdFX1JVTEUgPSA2O1xyXG5DU1NPTS5DU1NSdWxlLktFWUZSQU1FU19SVUxFID0gNztcclxuQ1NTT00uQ1NTUnVsZS5LRVlGUkFNRV9SVUxFID0gODtcclxuQ1NTT00uQ1NTUnVsZS5NQVJHSU5fUlVMRSA9IDk7XHJcbkNTU09NLkNTU1J1bGUuTkFNRVNQQUNFX1JVTEUgPSAxMDtcclxuQ1NTT00uQ1NTUnVsZS5DT1VOVEVSX1NUWUxFX1JVTEUgPSAxMTtcclxuQ1NTT00uQ1NTUnVsZS5TVVBQT1JUU19SVUxFID0gMTI7XHJcbkNTU09NLkNTU1J1bGUuRE9DVU1FTlRfUlVMRSA9IDEzO1xyXG5DU1NPTS5DU1NSdWxlLkZPTlRfRkVBVFVSRV9WQUxVRVNfUlVMRSA9IDE0O1xyXG5DU1NPTS5DU1NSdWxlLlZJRVdQT1JUX1JVTEUgPSAxNTtcclxuQ1NTT00uQ1NTUnVsZS5SRUdJT05fU1RZTEVfUlVMRSA9IDE2O1xyXG5cclxuXHJcbkNTU09NLkNTU1J1bGUucHJvdG90eXBlID0ge1xyXG5cdGNvbnN0cnVjdG9yOiBDU1NPTS5DU1NSdWxlXHJcblx0Ly9GSVhNRVxyXG59O1xyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuQ1NTUnVsZSA9IENTU09NLkNTU1J1bGU7XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3Nzb20vI2Nzc3N0eWxlcnVsZVxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLVN0eWxlL2Nzcy5odG1sI0NTUy1DU1NTdHlsZVJ1bGVcclxuICovXHJcbkNTU09NLkNTU1N0eWxlUnVsZSA9IGZ1bmN0aW9uIENTU1N0eWxlUnVsZSgpIHtcclxuXHRDU1NPTS5DU1NSdWxlLmNhbGwodGhpcyk7XHJcblx0dGhpcy5zZWxlY3RvclRleHQgPSBcIlwiO1xyXG5cdHRoaXMuc3R5bGUgPSBuZXcgQ1NTT00uQ1NTU3R5bGVEZWNsYXJhdGlvbigpO1xyXG5cdHRoaXMuc3R5bGUucGFyZW50UnVsZSA9IHRoaXM7XHJcbn07XHJcblxyXG5DU1NPTS5DU1NTdHlsZVJ1bGUucHJvdG90eXBlID0gbmV3IENTU09NLkNTU1J1bGUoKTtcclxuQ1NTT00uQ1NTU3R5bGVSdWxlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENTU09NLkNTU1N0eWxlUnVsZTtcclxuQ1NTT00uQ1NTU3R5bGVSdWxlLnByb3RvdHlwZS50eXBlID0gMTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDU1NPTS5DU1NTdHlsZVJ1bGUucHJvdG90eXBlLCBcImNzc1RleHRcIiwge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdGV4dDtcclxuXHRcdGlmICh0aGlzLnNlbGVjdG9yVGV4dCkge1xyXG5cdFx0XHR0ZXh0ID0gdGhpcy5zZWxlY3RvclRleHQgKyBcIiB7XCIgKyB0aGlzLnN0eWxlLmNzc1RleHQgKyBcIn1cIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRleHQgPSBcIlwiO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRzZXQ6IGZ1bmN0aW9uKGNzc1RleHQpIHtcclxuXHRcdHZhciBydWxlID0gQ1NTT00uQ1NTU3R5bGVSdWxlLnBhcnNlKGNzc1RleHQpO1xyXG5cdFx0dGhpcy5zdHlsZSA9IHJ1bGUuc3R5bGU7XHJcblx0XHR0aGlzLnNlbGVjdG9yVGV4dCA9IHJ1bGUuc2VsZWN0b3JUZXh0O1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuLyoqXHJcbiAqIE5PTi1TVEFOREFSRFxyXG4gKiBsaWdodHdlaWdodCB2ZXJzaW9uIG9mIHBhcnNlLmpzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcnVsZVRleHRcclxuICogQHJldHVybiBDU1NTdHlsZVJ1bGVcclxuICovXHJcbkNTU09NLkNTU1N0eWxlUnVsZS5wYXJzZSA9IGZ1bmN0aW9uKHJ1bGVUZXh0KSB7XHJcblx0dmFyIGkgPSAwO1xyXG5cdHZhciBzdGF0ZSA9IFwic2VsZWN0b3JcIjtcclxuXHR2YXIgaW5kZXg7XHJcblx0dmFyIGogPSBpO1xyXG5cdHZhciBidWZmZXIgPSBcIlwiO1xyXG5cclxuXHR2YXIgU0lHTklGSUNBTlRfV0hJVEVTUEFDRSA9IHtcclxuXHRcdFwic2VsZWN0b3JcIjogdHJ1ZSxcclxuXHRcdFwidmFsdWVcIjogdHJ1ZVxyXG5cdH07XHJcblxyXG5cdHZhciBzdHlsZVJ1bGUgPSBuZXcgQ1NTT00uQ1NTU3R5bGVSdWxlKCk7XHJcblx0dmFyIG5hbWUsIHByaW9yaXR5PVwiXCI7XHJcblxyXG5cdGZvciAodmFyIGNoYXJhY3RlcjsgKGNoYXJhY3RlciA9IHJ1bGVUZXh0LmNoYXJBdChpKSk7IGkrKykge1xyXG5cclxuXHRcdHN3aXRjaCAoY2hhcmFjdGVyKSB7XHJcblxyXG5cdFx0Y2FzZSBcIiBcIjpcclxuXHRcdGNhc2UgXCJcXHRcIjpcclxuXHRcdGNhc2UgXCJcXHJcIjpcclxuXHRcdGNhc2UgXCJcXG5cIjpcclxuXHRcdGNhc2UgXCJcXGZcIjpcclxuXHRcdFx0aWYgKFNJR05JRklDQU5UX1dISVRFU1BBQ0Vbc3RhdGVdKSB7XHJcblx0XHRcdFx0Ly8gU3F1YXNoIDIgb3IgbW9yZSB3aGl0ZS1zcGFjZXMgaW4gdGhlIHJvdyBpbnRvIDFcclxuXHRcdFx0XHRzd2l0Y2ggKHJ1bGVUZXh0LmNoYXJBdChpIC0gMSkpIHtcclxuXHRcdFx0XHRcdGNhc2UgXCIgXCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiXFx0XCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiXFxyXCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiXFxuXCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiXFxmXCI6XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0YnVmZmVyICs9IFwiIFwiO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Ly8gU3RyaW5nXHJcblx0XHRjYXNlICdcIic6XHJcblx0XHRcdGogPSBpICsgMTtcclxuXHRcdFx0aW5kZXggPSBydWxlVGV4dC5pbmRleE9mKCdcIicsIGopICsgMTtcclxuXHRcdFx0aWYgKCFpbmRleCkge1xyXG5cdFx0XHRcdHRocm93ICdcIiBpcyBtaXNzaW5nJztcclxuXHRcdFx0fVxyXG5cdFx0XHRidWZmZXIgKz0gcnVsZVRleHQuc2xpY2UoaSwgaW5kZXgpO1xyXG5cdFx0XHRpID0gaW5kZXggLSAxO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIFwiJ1wiOlxyXG5cdFx0XHRqID0gaSArIDE7XHJcblx0XHRcdGluZGV4ID0gcnVsZVRleHQuaW5kZXhPZihcIidcIiwgaikgKyAxO1xyXG5cdFx0XHRpZiAoIWluZGV4KSB7XHJcblx0XHRcdFx0dGhyb3cgXCInIGlzIG1pc3NpbmdcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRidWZmZXIgKz0gcnVsZVRleHQuc2xpY2UoaSwgaW5kZXgpO1xyXG5cdFx0XHRpID0gaW5kZXggLSAxO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHQvLyBDb21tZW50XHJcblx0XHRjYXNlIFwiL1wiOlxyXG5cdFx0XHRpZiAocnVsZVRleHQuY2hhckF0KGkgKyAxKSA9PT0gXCIqXCIpIHtcclxuXHRcdFx0XHRpICs9IDI7XHJcblx0XHRcdFx0aW5kZXggPSBydWxlVGV4dC5pbmRleE9mKFwiKi9cIiwgaSk7XHJcblx0XHRcdFx0aWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiTWlzc2luZyAqL1wiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aSA9IGluZGV4ICsgMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YnVmZmVyICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIFwie1wiOlxyXG5cdFx0XHRpZiAoc3RhdGUgPT09IFwic2VsZWN0b3JcIikge1xyXG5cdFx0XHRcdHN0eWxlUnVsZS5zZWxlY3RvclRleHQgPSBidWZmZXIudHJpbSgpO1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0c3RhdGUgPSBcIm5hbWVcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIFwiOlwiOlxyXG5cdFx0XHRpZiAoc3RhdGUgPT09IFwibmFtZVwiKSB7XHJcblx0XHRcdFx0bmFtZSA9IGJ1ZmZlci50cmltKCk7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRzdGF0ZSA9IFwidmFsdWVcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCIhXCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gXCJ2YWx1ZVwiICYmIHJ1bGVUZXh0LmluZGV4T2YoXCIhaW1wb3J0YW50XCIsIGkpID09PSBpKSB7XHJcblx0XHRcdFx0cHJpb3JpdHkgPSBcImltcG9ydGFudFwiO1xyXG5cdFx0XHRcdGkgKz0gXCJpbXBvcnRhbnRcIi5sZW5ndGg7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YnVmZmVyICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIFwiO1wiOlxyXG5cdFx0XHRpZiAoc3RhdGUgPT09IFwidmFsdWVcIikge1xyXG5cdFx0XHRcdHN0eWxlUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBidWZmZXIudHJpbSgpLCBwcmlvcml0eSk7XHJcblx0XHRcdFx0cHJpb3JpdHkgPSBcIlwiO1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0c3RhdGUgPSBcIm5hbWVcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCJ9XCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gXCJ2YWx1ZVwiKSB7XHJcblx0XHRcdFx0c3R5bGVSdWxlLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGJ1ZmZlci50cmltKCksIHByaW9yaXR5KTtcclxuXHRcdFx0XHRwcmlvcml0eSA9IFwiXCI7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJuYW1lXCIpIHtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0YXRlID0gXCJzZWxlY3RvclwiO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3R5bGVSdWxlO1xyXG5cclxufTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLkNTU1N0eWxlUnVsZSA9IENTU09NLkNTU1N0eWxlUnVsZTtcclxuLy8vQ29tbW9uSlNcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3NvbS8jdGhlLW1lZGlhbGlzdC1pbnRlcmZhY2VcclxuICovXHJcbkNTU09NLk1lZGlhTGlzdCA9IGZ1bmN0aW9uIE1lZGlhTGlzdCgpe1xyXG5cdHRoaXMubGVuZ3RoID0gMDtcclxufTtcclxuXHJcbkNTU09NLk1lZGlhTGlzdC5wcm90b3R5cGUgPSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yOiBDU1NPTS5NZWRpYUxpc3QsXHJcblxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXQgbWVkaWFUZXh0KCkge1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwodGhpcywgXCIsIFwiKTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcclxuXHQgKi9cclxuXHRzZXQgbWVkaWFUZXh0KHZhbHVlKSB7XHJcblx0XHR2YXIgdmFsdWVzID0gdmFsdWUuc3BsaXQoXCIsXCIpO1xyXG5cdFx0dmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcclxuXHRcdGZvciAodmFyIGk9MDsgaTxsZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzW2ldID0gdmFsdWVzW2ldLnRyaW0oKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVkaXVtXHJcblx0ICovXHJcblx0YXBwZW5kTWVkaXVtOiBmdW5jdGlvbihtZWRpdW0pIHtcclxuXHRcdGlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMsIG1lZGl1bSkgPT09IC0xKSB7XHJcblx0XHRcdHRoaXNbdGhpcy5sZW5ndGhdID0gbWVkaXVtO1xyXG5cdFx0XHR0aGlzLmxlbmd0aCsrO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZWRpdW1cclxuXHQgKi9cclxuXHRkZWxldGVNZWRpdW06IGZ1bmN0aW9uKG1lZGl1bSkge1xyXG5cdFx0dmFyIGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLCBtZWRpdW0pO1xyXG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwodGhpcywgaW5kZXgsIDEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5NZWRpYUxpc3QgPSBDU1NPTS5NZWRpYUxpc3Q7XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3Nzb20vI2Nzc21lZGlhcnVsZVxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLVN0eWxlL2Nzcy5odG1sI0NTUy1DU1NNZWRpYVJ1bGVcclxuICovXHJcbkNTU09NLkNTU01lZGlhUnVsZSA9IGZ1bmN0aW9uIENTU01lZGlhUnVsZSgpIHtcclxuXHRDU1NPTS5DU1NSdWxlLmNhbGwodGhpcyk7XHJcblx0dGhpcy5tZWRpYSA9IG5ldyBDU1NPTS5NZWRpYUxpc3QoKTtcclxuXHR0aGlzLmNzc1J1bGVzID0gW107XHJcbn07XHJcblxyXG5DU1NPTS5DU1NNZWRpYVJ1bGUucHJvdG90eXBlID0gbmV3IENTU09NLkNTU1J1bGUoKTtcclxuQ1NTT00uQ1NTTWVkaWFSdWxlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENTU09NLkNTU01lZGlhUnVsZTtcclxuQ1NTT00uQ1NTTWVkaWFSdWxlLnByb3RvdHlwZS50eXBlID0gNDtcclxuLy9GSVhNRVxyXG4vL0NTU09NLkNTU01lZGlhUnVsZS5wcm90b3R5cGUuaW5zZXJ0UnVsZSA9IENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmluc2VydFJ1bGU7XHJcbi8vQ1NTT00uQ1NTTWVkaWFSdWxlLnByb3RvdHlwZS5kZWxldGVSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuZGVsZXRlUnVsZTtcclxuXHJcbi8vIGh0dHA6Ly9vcGVuc291cmNlLmFwcGxlLmNvbS9zb3VyY2UvV2ViQ29yZS9XZWJDb3JlLTY1OC4yOC9jc3MvQ1NTTWVkaWFSdWxlLmNwcFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ1NTT00uQ1NTTWVkaWFSdWxlLnByb3RvdHlwZSwgXCJjc3NUZXh0XCIsIHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNzc1RleHRzID0gW107XHJcbiAgICBmb3IgKHZhciBpPTAsIGxlbmd0aD10aGlzLmNzc1J1bGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNzc1RleHRzLnB1c2godGhpcy5jc3NSdWxlc1tpXS5jc3NUZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBcIkBtZWRpYSBcIiArIHRoaXMubWVkaWEubWVkaWFUZXh0ICsgXCIge1wiICsgY3NzVGV4dHMuam9pbihcIlwiKSArIFwifVwiO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5DU1NNZWRpYVJ1bGUgPSBDU1NPTS5DU1NNZWRpYVJ1bGU7XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3Nzb20vI2Nzc2ltcG9ydHJ1bGVcclxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1TdHlsZS9jc3MuaHRtbCNDU1MtQ1NTSW1wb3J0UnVsZVxyXG4gKi9cclxuQ1NTT00uQ1NTSW1wb3J0UnVsZSA9IGZ1bmN0aW9uIENTU0ltcG9ydFJ1bGUoKSB7XHJcblx0Q1NTT00uQ1NTUnVsZS5jYWxsKHRoaXMpO1xyXG5cdHRoaXMuaHJlZiA9IFwiXCI7XHJcblx0dGhpcy5tZWRpYSA9IG5ldyBDU1NPTS5NZWRpYUxpc3QoKTtcclxuXHR0aGlzLnN0eWxlU2hlZXQgPSBuZXcgQ1NTT00uQ1NTU3R5bGVTaGVldCgpO1xyXG59O1xyXG5cclxuQ1NTT00uQ1NTSW1wb3J0UnVsZS5wcm90b3R5cGUgPSBuZXcgQ1NTT00uQ1NTUnVsZSgpO1xyXG5DU1NPTS5DU1NJbXBvcnRSdWxlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENTU09NLkNTU0ltcG9ydFJ1bGU7XHJcbkNTU09NLkNTU0ltcG9ydFJ1bGUucHJvdG90eXBlLnR5cGUgPSAzO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENTU09NLkNTU0ltcG9ydFJ1bGUucHJvdG90eXBlLCBcImNzc1RleHRcIiwge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbWVkaWFUZXh0ID0gdGhpcy5tZWRpYS5tZWRpYVRleHQ7XHJcbiAgICByZXR1cm4gXCJAaW1wb3J0IHVybChcIiArIHRoaXMuaHJlZiArIFwiKVwiICsgKG1lZGlhVGV4dCA/IFwiIFwiICsgbWVkaWFUZXh0IDogXCJcIikgKyBcIjtcIjtcclxuICB9LFxyXG4gIHNldDogZnVuY3Rpb24oY3NzVGV4dCkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGltcG9ydCB1cmwocGFydGlhbC5jc3MpIHNjcmVlbiwgaGFuZGhlbGQ7XHJcbiAgICAgKiAgICAgICAgfHwgICAgICAgICAgICAgICB8XHJcbiAgICAgKiAgICAgICAgYWZ0ZXItaW1wb3J0ICAgICBtZWRpYVxyXG4gICAgICogICAgICAgICB8XHJcbiAgICAgKiAgICAgICAgIHVybFxyXG4gICAgICovXHJcbiAgICB2YXIgc3RhdGUgPSAnJztcclxuXHJcbiAgICB2YXIgYnVmZmVyID0gJyc7XHJcbiAgICB2YXIgaW5kZXg7XHJcbiAgICBmb3IgKHZhciBjaGFyYWN0ZXI7IChjaGFyYWN0ZXIgPSBjc3NUZXh0LmNoYXJBdChpKSk7IGkrKykge1xyXG5cclxuICAgICAgc3dpdGNoIChjaGFyYWN0ZXIpIHtcclxuICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICBjYXNlICdcXHQnOlxyXG4gICAgICAgIGNhc2UgJ1xccic6XHJcbiAgICAgICAgY2FzZSAnXFxuJzpcclxuICAgICAgICBjYXNlICdcXGYnOlxyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSAnYWZ0ZXItaW1wb3J0Jykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9ICd1cmwnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnVmZmVyICs9IGNoYXJhY3RlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdAJzpcclxuICAgICAgICAgIGlmICghc3RhdGUgJiYgY3NzVGV4dC5pbmRleE9mKCdAaW1wb3J0JywgaSkgPT09IGkpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSAnYWZ0ZXItaW1wb3J0JztcclxuICAgICAgICAgICAgaSArPSAnaW1wb3J0Jy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ3UnOlxyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSAndXJsJyAmJiBjc3NUZXh0LmluZGV4T2YoJ3VybCgnLCBpKSA9PT0gaSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IGNzc1RleHQuaW5kZXhPZignKScsIGkgKyAxKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIHRocm93IGkgKyAnOiBcIilcIiBub3QgZm91bmQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkgKz0gJ3VybCgnLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIHVybCA9IGNzc1RleHQuc2xpY2UoaSwgaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAodXJsWzBdID09PSB1cmxbdXJsLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHVybFswXSA9PT0gJ1wiJyB8fCB1cmxbMF0gPT09IFwiJ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIGkgPSBpbmRleDtcclxuICAgICAgICAgICAgc3RhdGUgPSAnbWVkaWEnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ1wiJzpcclxuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ3VybCcpIHtcclxuICAgICAgICAgICAgaW5kZXggPSBjc3NUZXh0LmluZGV4T2YoJ1wiJywgaSArIDEpO1xyXG4gICAgICAgICAgICBpZiAoIWluZGV4KSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgaSArIFwiOiAnXFxcIicgbm90IGZvdW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ocmVmID0gY3NzVGV4dC5zbGljZShpICsgMSwgaW5kZXgpO1xyXG4gICAgICAgICAgICBpID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHN0YXRlID0gJ21lZGlhJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiJ1wiOlxyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSAndXJsJykge1xyXG4gICAgICAgICAgICBpbmRleCA9IGNzc1RleHQuaW5kZXhPZihcIidcIiwgaSArIDEpO1xyXG4gICAgICAgICAgICBpZiAoIWluZGV4KSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgaSArICc6IFwiXFwnXCIgbm90IGZvdW5kJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhyZWYgPSBjc3NUZXh0LnNsaWNlKGkgKyAxLCBpbmRleCk7XHJcbiAgICAgICAgICAgIGkgPSBpbmRleDtcclxuICAgICAgICAgICAgc3RhdGUgPSAnbWVkaWEnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJzsnOlxyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSAnbWVkaWEnKSB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIpIHtcclxuICAgICAgICAgICAgICB0aGlzLm1lZGlhLm1lZGlhVGV4dCA9IGJ1ZmZlci50cmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSAnbWVkaWEnKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5DU1NJbXBvcnRSdWxlID0gQ1NTT00uQ1NTSW1wb3J0UnVsZTtcclxuLy8vQ29tbW9uSlNcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3NvbS8jY3NzLWZvbnQtZmFjZS1ydWxlXHJcbiAqL1xyXG5DU1NPTS5DU1NGb250RmFjZVJ1bGUgPSBmdW5jdGlvbiBDU1NGb250RmFjZVJ1bGUoKSB7XHJcblx0Q1NTT00uQ1NTUnVsZS5jYWxsKHRoaXMpO1xyXG5cdHRoaXMuc3R5bGUgPSBuZXcgQ1NTT00uQ1NTU3R5bGVEZWNsYXJhdGlvbigpO1xyXG5cdHRoaXMuc3R5bGUucGFyZW50UnVsZSA9IHRoaXM7XHJcbn07XHJcblxyXG5DU1NPTS5DU1NGb250RmFjZVJ1bGUucHJvdG90eXBlID0gbmV3IENTU09NLkNTU1J1bGUoKTtcclxuQ1NTT00uQ1NTRm9udEZhY2VSdWxlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENTU09NLkNTU0ZvbnRGYWNlUnVsZTtcclxuQ1NTT00uQ1NTRm9udEZhY2VSdWxlLnByb3RvdHlwZS50eXBlID0gNTtcclxuLy9GSVhNRVxyXG4vL0NTU09NLkNTU0ZvbnRGYWNlUnVsZS5wcm90b3R5cGUuaW5zZXJ0UnVsZSA9IENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmluc2VydFJ1bGU7XHJcbi8vQ1NTT00uQ1NTRm9udEZhY2VSdWxlLnByb3RvdHlwZS5kZWxldGVSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuZGVsZXRlUnVsZTtcclxuXHJcbi8vIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5hcHBsZS5jb20vc291cmNlL1dlYkNvcmUvV2ViQ29yZS05NTUuNjYuMS9jc3MvV2ViS2l0Q1NTRm9udEZhY2VSdWxlLmNwcFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ1NTT00uQ1NTRm9udEZhY2VSdWxlLnByb3RvdHlwZSwgXCJjc3NUZXh0XCIsIHtcclxuICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIFwiQGZvbnQtZmFjZSB7XCIgKyB0aGlzLnN0eWxlLmNzc1RleHQgKyBcIn1cIjtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuQ1NTRm9udEZhY2VSdWxlID0gQ1NTT00uQ1NTRm9udEZhY2VSdWxlO1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL3NoYWRvdy1kb20vI2hvc3QtYXQtcnVsZVxyXG4gKi9cclxuQ1NTT00uQ1NTSG9zdFJ1bGUgPSBmdW5jdGlvbiBDU1NIb3N0UnVsZSgpIHtcclxuXHRDU1NPTS5DU1NSdWxlLmNhbGwodGhpcyk7XHJcblx0dGhpcy5jc3NSdWxlcyA9IFtdO1xyXG59O1xyXG5cclxuQ1NTT00uQ1NTSG9zdFJ1bGUucHJvdG90eXBlID0gbmV3IENTU09NLkNTU1J1bGUoKTtcclxuQ1NTT00uQ1NTSG9zdFJ1bGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NTT00uQ1NTSG9zdFJ1bGU7XHJcbkNTU09NLkNTU0hvc3RSdWxlLnByb3RvdHlwZS50eXBlID0gMTAwMTtcclxuLy9GSVhNRVxyXG4vL0NTU09NLkNTU0hvc3RSdWxlLnByb3RvdHlwZS5pbnNlcnRSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuaW5zZXJ0UnVsZTtcclxuLy9DU1NPTS5DU1NIb3N0UnVsZS5wcm90b3R5cGUuZGVsZXRlUnVsZSA9IENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmRlbGV0ZVJ1bGU7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ1NTT00uQ1NTSG9zdFJ1bGUucHJvdG90eXBlLCBcImNzc1RleHRcIiwge1xyXG5cdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgY3NzVGV4dHMgPSBbXTtcclxuXHRcdGZvciAodmFyIGk9MCwgbGVuZ3RoPXRoaXMuY3NzUnVsZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y3NzVGV4dHMucHVzaCh0aGlzLmNzc1J1bGVzW2ldLmNzc1RleHQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFwiQGhvc3Qge1wiICsgY3NzVGV4dHMuam9pbihcIlwiKSArIFwifVwiO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5DU1NIb3N0UnVsZSA9IENTU09NLkNTU0hvc3RSdWxlO1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzc29tLyN0aGUtc3R5bGVzaGVldC1pbnRlcmZhY2VcclxuICovXHJcbkNTU09NLlN0eWxlU2hlZXQgPSBmdW5jdGlvbiBTdHlsZVNoZWV0KCkge1xyXG5cdHRoaXMucGFyZW50U3R5bGVTaGVldCA9IG51bGw7XHJcbn07XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5TdHlsZVNoZWV0ID0gQ1NTT00uU3R5bGVTaGVldDtcclxuLy8vQ29tbW9uSlNcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1TdHlsZS9jc3MuaHRtbCNDU1MtQ1NTU3R5bGVTaGVldFxyXG4gKi9cclxuQ1NTT00uQ1NTU3R5bGVTaGVldCA9IGZ1bmN0aW9uIENTU1N0eWxlU2hlZXQoKSB7XHJcblx0Q1NTT00uU3R5bGVTaGVldC5jYWxsKHRoaXMpO1xyXG5cdHRoaXMuY3NzUnVsZXMgPSBbXTtcclxufTtcclxuXHJcblxyXG5DU1NPTS5DU1NTdHlsZVNoZWV0LnByb3RvdHlwZSA9IG5ldyBDU1NPTS5TdHlsZVNoZWV0KCk7XHJcbkNTU09NLkNTU1N0eWxlU2hlZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NTT00uQ1NTU3R5bGVTaGVldDtcclxuXHJcblxyXG4vKipcclxuICogVXNlZCB0byBpbnNlcnQgYSBuZXcgcnVsZSBpbnRvIHRoZSBzdHlsZSBzaGVldC4gVGhlIG5ldyBydWxlIG5vdyBiZWNvbWVzIHBhcnQgb2YgdGhlIGNhc2NhZGUuXHJcbiAqXHJcbiAqICAgc2hlZXQgPSBuZXcgU2hlZXQoXCJib2R5IHttYXJnaW46IDB9XCIpXHJcbiAqICAgc2hlZXQudG9TdHJpbmcoKVxyXG4gKiAgIC0+IFwiYm9keXttYXJnaW46MDt9XCJcclxuICogICBzaGVldC5pbnNlcnRSdWxlKFwiaW1nIHtib3JkZXI6IG5vbmV9XCIsIDApXHJcbiAqICAgLT4gMFxyXG4gKiAgIHNoZWV0LnRvU3RyaW5nKClcclxuICogICAtPiBcImltZ3tib3JkZXI6bm9uZTt9Ym9keXttYXJnaW46MDt9XCJcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHJ1bGVcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU1N0eWxlU2hlZXQtaW5zZXJ0UnVsZVxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbmRleCB3aXRoaW4gdGhlIHN0eWxlIHNoZWV0J3MgcnVsZSBjb2xsZWN0aW9uIG9mIHRoZSBuZXdseSBpbnNlcnRlZCBydWxlLlxyXG4gKi9cclxuQ1NTT00uQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uKHJ1bGUsIGluZGV4KSB7XHJcblx0aWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuY3NzUnVsZXMubGVuZ3RoKSB7XHJcblx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIklOREVYX1NJWkVfRVJSXCIpO1xyXG5cdH1cclxuXHR2YXIgY3NzUnVsZSA9IENTU09NLnBhcnNlKHJ1bGUpLmNzc1J1bGVzWzBdO1xyXG5cdGNzc1J1bGUucGFyZW50U3R5bGVTaGVldCA9IHRoaXM7XHJcblx0dGhpcy5jc3NSdWxlcy5zcGxpY2UoaW5kZXgsIDAsIGNzc1J1bGUpO1xyXG5cdHJldHVybiBpbmRleDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogVXNlZCB0byBkZWxldGUgYSBydWxlIGZyb20gdGhlIHN0eWxlIHNoZWV0LlxyXG4gKlxyXG4gKiAgIHNoZWV0ID0gbmV3IFNoZWV0KFwiaW1ne2JvcmRlcjpub25lfSBib2R5e21hcmdpbjowfVwiKVxyXG4gKiAgIHNoZWV0LnRvU3RyaW5nKClcclxuICogICAtPiBcImltZ3tib3JkZXI6bm9uZTt9Ym9keXttYXJnaW46MDt9XCJcclxuICogICBzaGVldC5kZWxldGVSdWxlKDApXHJcbiAqICAgc2hlZXQudG9TdHJpbmcoKVxyXG4gKiAgIC0+IFwiYm9keXttYXJnaW46MDt9XCJcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHdpdGhpbiB0aGUgc3R5bGUgc2hlZXQncyBydWxlIGxpc3Qgb2YgdGhlIHJ1bGUgdG8gcmVtb3ZlLlxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLVN0eWxlL2Nzcy5odG1sI0NTUy1DU1NTdHlsZVNoZWV0LWRlbGV0ZVJ1bGVcclxuICovXHJcbkNTU09NLkNTU1N0eWxlU2hlZXQucHJvdG90eXBlLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cdGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5jc3NSdWxlcy5sZW5ndGgpIHtcclxuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKFwiSU5ERVhfU0laRV9FUlJcIik7XHJcblx0fVxyXG5cdHRoaXMuY3NzUnVsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogTk9OLVNUQU5EQVJEXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gc2VyaWFsaXplIHN0eWxlc2hlZXRcclxuICovXHJcbkNTU09NLkNTU1N0eWxlU2hlZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblx0dmFyIHJ1bGVzID0gdGhpcy5jc3NSdWxlcztcclxuXHRmb3IgKHZhciBpPTA7IGk8cnVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHJlc3VsdCArPSBydWxlc1tpXS5jc3NUZXh0ICsgXCJcXG5cIjtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLkNTU1N0eWxlU2hlZXQgPSBDU1NPTS5DU1NTdHlsZVNoZWV0O1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtYW5pbWF0aW9ucy8jRE9NLUNTU0tleWZyYW1lc1J1bGVcclxuICovXHJcbkNTU09NLkNTU0tleWZyYW1lc1J1bGUgPSBmdW5jdGlvbiBDU1NLZXlmcmFtZXNSdWxlKCkge1xyXG5cdENTU09NLkNTU1J1bGUuY2FsbCh0aGlzKTtcclxuXHR0aGlzLm5hbWUgPSAnJztcclxuXHR0aGlzLmNzc1J1bGVzID0gW107XHJcbn07XHJcblxyXG5DU1NPTS5DU1NLZXlmcmFtZXNSdWxlLnByb3RvdHlwZSA9IG5ldyBDU1NPTS5DU1NSdWxlKCk7XHJcbkNTU09NLkNTU0tleWZyYW1lc1J1bGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NTT00uQ1NTS2V5ZnJhbWVzUnVsZTtcclxuQ1NTT00uQ1NTS2V5ZnJhbWVzUnVsZS5wcm90b3R5cGUudHlwZSA9IDg7XHJcbi8vRklYTUVcclxuLy9DU1NPTS5DU1NLZXlmcmFtZXNSdWxlLnByb3RvdHlwZS5pbnNlcnRSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuaW5zZXJ0UnVsZTtcclxuLy9DU1NPTS5DU1NLZXlmcmFtZXNSdWxlLnByb3RvdHlwZS5kZWxldGVSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuZGVsZXRlUnVsZTtcclxuXHJcbi8vIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5hcHBsZS5jb20vc291cmNlL1dlYkNvcmUvV2ViQ29yZS05NTUuNjYuMS9jc3MvV2ViS2l0Q1NTS2V5ZnJhbWVzUnVsZS5jcHBcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENTU09NLkNTU0tleWZyYW1lc1J1bGUucHJvdG90eXBlLCBcImNzc1RleHRcIiwge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY3NzVGV4dHMgPSBbXTtcclxuICAgIGZvciAodmFyIGk9MCwgbGVuZ3RoPXRoaXMuY3NzUnVsZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY3NzVGV4dHMucHVzaChcIiAgXCIgKyB0aGlzLmNzc1J1bGVzW2ldLmNzc1RleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiQFwiICsgKHRoaXMuX3ZlbmRvclByZWZpeCB8fCAnJykgKyBcImtleWZyYW1lcyBcIiArIHRoaXMubmFtZSArIFwiIHsgXFxuXCIgKyBjc3NUZXh0cy5qb2luKFwiXFxuXCIpICsgXCJcXG59XCI7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLkNTU0tleWZyYW1lc1J1bGUgPSBDU1NPTS5DU1NLZXlmcmFtZXNSdWxlO1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtYW5pbWF0aW9ucy8jRE9NLUNTU0tleWZyYW1lUnVsZVxyXG4gKi9cclxuQ1NTT00uQ1NTS2V5ZnJhbWVSdWxlID0gZnVuY3Rpb24gQ1NTS2V5ZnJhbWVSdWxlKCkge1xyXG5cdENTU09NLkNTU1J1bGUuY2FsbCh0aGlzKTtcclxuXHR0aGlzLmtleVRleHQgPSAnJztcclxuXHR0aGlzLnN0eWxlID0gbmV3IENTU09NLkNTU1N0eWxlRGVjbGFyYXRpb24oKTtcclxuXHR0aGlzLnN0eWxlLnBhcmVudFJ1bGUgPSB0aGlzO1xyXG59O1xyXG5cclxuQ1NTT00uQ1NTS2V5ZnJhbWVSdWxlLnByb3RvdHlwZSA9IG5ldyBDU1NPTS5DU1NSdWxlKCk7XHJcbkNTU09NLkNTU0tleWZyYW1lUnVsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDU1NPTS5DU1NLZXlmcmFtZVJ1bGU7XHJcbkNTU09NLkNTU0tleWZyYW1lUnVsZS5wcm90b3R5cGUudHlwZSA9IDk7XHJcbi8vRklYTUVcclxuLy9DU1NPTS5DU1NLZXlmcmFtZVJ1bGUucHJvdG90eXBlLmluc2VydFJ1bGUgPSBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5pbnNlcnRSdWxlO1xyXG4vL0NTU09NLkNTU0tleWZyYW1lUnVsZS5wcm90b3R5cGUuZGVsZXRlUnVsZSA9IENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmRlbGV0ZVJ1bGU7XHJcblxyXG4vLyBodHRwOi8vd3d3Lm9wZW5zb3VyY2UuYXBwbGUuY29tL3NvdXJjZS9XZWJDb3JlL1dlYkNvcmUtOTU1LjY2LjEvY3NzL1dlYktpdENTU0tleWZyYW1lUnVsZS5jcHBcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENTU09NLkNTU0tleWZyYW1lUnVsZS5wcm90b3R5cGUsIFwiY3NzVGV4dFwiLCB7XHJcbiAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmtleVRleHQgKyBcIiB7XCIgKyB0aGlzLnN0eWxlLmNzc1RleHQgKyBcIn0gXCI7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLkNTU0tleWZyYW1lUnVsZSA9IENTU09NLkNTU0tleWZyYW1lUnVsZTtcclxuLy8vQ29tbW9uSlNcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9DU1MvQC1tb3otZG9jdW1lbnRcclxuICovXHJcbkNTU09NLk1hdGNoZXJMaXN0ID0gZnVuY3Rpb24gTWF0Y2hlckxpc3QoKXtcclxuICAgIHRoaXMubGVuZ3RoID0gMDtcclxufTtcclxuXHJcbkNTU09NLk1hdGNoZXJMaXN0LnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogQ1NTT00uTWF0Y2hlckxpc3QsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldCBtYXRjaGVyVGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbCh0aGlzLCBcIiwgXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzZXQgbWF0Y2hlclRleHQodmFsdWUpIHtcclxuICAgICAgICAvLyBqdXN0IGEgdGVtcG9yYXJ5IHNvbHV0aW9uLCBhY3R1YWxseSBpdCBtYXkgYmUgd3JvbmcgYnkganVzdCBzcGxpdCB0aGUgdmFsdWUgd2l0aCAnLCcsIGJlY2F1c2UgYSB1cmwgY2FuIGluY2x1ZGUgJywnLlxyXG4gICAgICAgIHZhciB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8bGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpc1tpXSA9IHZhbHVlc1tpXS50cmltKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZE1hdGNoZXI6IGZ1bmN0aW9uKG1hdGNoZXIpIHtcclxuICAgICAgICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLCBtYXRjaGVyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpc1t0aGlzLmxlbmd0aF0gPSBtYXRjaGVyO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCsrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hlclxyXG4gICAgICovXHJcbiAgICBkZWxldGVNYXRjaGVyOiBmdW5jdGlvbihtYXRjaGVyKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLCBtYXRjaGVyKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbCh0aGlzLCBpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG4vLy5Db21tb25KU1xyXG5leHBvcnRzLk1hdGNoZXJMaXN0ID0gQ1NTT00uTWF0Y2hlckxpc3Q7XHJcbi8vL0NvbW1vbkpTXHJcbi8vLkNvbW1vbkpTXHJcbnZhciBDU1NPTSA9IENTU09NfHx7fTtcclxuLy8vQ29tbW9uSlNcclxuXHJcblxyXG4vKipcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vQ1NTL0AtbW96LWRvY3VtZW50XHJcbiAqL1xyXG5DU1NPTS5DU1NEb2N1bWVudFJ1bGUgPSBmdW5jdGlvbiBDU1NEb2N1bWVudFJ1bGUoKSB7XHJcbiAgICBDU1NPTS5DU1NSdWxlLmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLm1hdGNoZXIgPSBuZXcgQ1NTT00uTWF0Y2hlckxpc3QoKTtcclxuICAgIHRoaXMuY3NzUnVsZXMgPSBbXTtcclxufTtcclxuXHJcbkNTU09NLkNTU0RvY3VtZW50UnVsZS5wcm90b3R5cGUgPSBuZXcgQ1NTT00uQ1NTUnVsZSgpO1xyXG5DU1NPTS5DU1NEb2N1bWVudFJ1bGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NTT00uQ1NTRG9jdW1lbnRSdWxlO1xyXG5DU1NPTS5DU1NEb2N1bWVudFJ1bGUucHJvdG90eXBlLnR5cGUgPSAxMDtcclxuLy9GSVhNRVxyXG4vL0NTU09NLkNTU0RvY3VtZW50UnVsZS5wcm90b3R5cGUuaW5zZXJ0UnVsZSA9IENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmluc2VydFJ1bGU7XHJcbi8vQ1NTT00uQ1NTRG9jdW1lbnRSdWxlLnByb3RvdHlwZS5kZWxldGVSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuZGVsZXRlUnVsZTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDU1NPTS5DU1NEb2N1bWVudFJ1bGUucHJvdG90eXBlLCBcImNzc1RleHRcIiwge1xyXG4gIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY3NzVGV4dHMgPSBbXTtcclxuICAgIGZvciAodmFyIGk9MCwgbGVuZ3RoPXRoaXMuY3NzUnVsZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjc3NUZXh0cy5wdXNoKHRoaXMuY3NzUnVsZXNbaV0uY3NzVGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJALW1vei1kb2N1bWVudCBcIiArIHRoaXMubWF0Y2hlci5tYXRjaGVyVGV4dCArIFwiIHtcIiArIGNzc1RleHRzLmpvaW4oXCJcIikgKyBcIn1cIjtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuQ1NTRG9jdW1lbnRSdWxlID0gQ1NTT00uQ1NTRG9jdW1lbnRSdWxlO1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLVN0eWxlL2Nzcy5odG1sI0NTUy1DU1NWYWx1ZVxyXG4gKlxyXG4gKiBUT0RPOiBhZGQgaWYgbmVlZGVkXHJcbiAqL1xyXG5DU1NPTS5DU1NWYWx1ZSA9IGZ1bmN0aW9uIENTU1ZhbHVlKCkge1xyXG59O1xyXG5cclxuQ1NTT00uQ1NTVmFsdWUucHJvdG90eXBlID0ge1xyXG5cdGNvbnN0cnVjdG9yOiBDU1NPTS5DU1NWYWx1ZSxcclxuXHJcblx0Ly8gQHNlZTogaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItU3R5bGUvY3NzLmh0bWwjQ1NTLUNTU1ZhbHVlXHJcblx0c2V0IGNzc1RleHQodGV4dCkge1xyXG5cdFx0dmFyIG5hbWUgPSB0aGlzLl9nZXRDb25zdHJ1Y3Rvck5hbWUoKTtcclxuXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RPTUV4Y2VwdGlvbjogcHJvcGVydHkgXCJjc3NUZXh0XCIgb2YgXCInICsgbmFtZSArICdcIiBpcyByZWFkb25seSBhbmQgY2FuIG5vdCBiZSByZXBsYWNlZCB3aXRoIFwiJyArIHRleHQgKyAnXCIhJyk7XHJcblx0fSxcclxuXHJcblx0Z2V0IGNzc1RleHQoKSB7XHJcblx0XHR2YXIgbmFtZSA9IHRoaXMuX2dldENvbnN0cnVjdG9yTmFtZSgpO1xyXG5cclxuXHRcdHRocm93IG5ldyBFcnJvcignZ2V0dGVyIFwiY3NzVGV4dFwiIG9mIFwiJyArIG5hbWUgKyAnXCIgaXMgbm90IGltcGxlbWVudGVkIScpO1xyXG5cdH0sXHJcblxyXG5cdF9nZXRDb25zdHJ1Y3Rvck5hbWU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHMgPSB0aGlzLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCksXHJcblx0XHRcdFx0YyA9IHMubWF0Y2goL2Z1bmN0aW9uXFxzKFteXFwoXSspLyksXHJcblx0XHRcdFx0bmFtZSA9IGNbMV07XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuQ1NTVmFsdWUgPSBDU1NPTS5DU1NWYWx1ZTtcclxuLy8vQ29tbW9uSlNcclxuLy8uQ29tbW9uSlNcclxudmFyIENTU09NID0gQ1NTT018fHt9O1xyXG4vLy9Db21tb25KU1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHNlZSBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc2MzQodj12cy44NSkuYXNweFxyXG4gKlxyXG4gKi9cclxuQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uID0gZnVuY3Rpb24gQ1NTVmFsdWVFeHByZXNzaW9uKHRva2VuLCBpZHgpIHtcclxuXHR0aGlzLl90b2tlbiA9IHRva2VuO1xyXG5cdHRoaXMuX2lkeCA9IGlkeDtcclxufTtcclxuXHJcbkNTU09NLkNTU1ZhbHVlRXhwcmVzc2lvbi5wcm90b3R5cGUgPSBuZXcgQ1NTT00uQ1NTVmFsdWUoKTtcclxuQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENTU09NLkNTU1ZhbHVlRXhwcmVzc2lvbjtcclxuXHJcbi8qKlxyXG4gKiBwYXJzZSBjc3MgZXhwcmVzc2lvbigpIHZhbHVlXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogICAgICAgICAtIGVycm9yOlxyXG4gKiAgICAgICAgIG9yXHJcbiAqICAgICAgICAgLSBpZHg6XHJcbiAqICAgICAgICAgLSBleHByZXNzaW9uOlxyXG4gKlxyXG4gKiBFeGFtcGxlOlxyXG4gKlxyXG4gKiAuc2VsZWN0b3Ige1xyXG4gKlx0XHR6b29tOiBleHByZXNzaW9uKGRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+IDEwMDAgPyAnMTAwMHB4JyA6ICdhdXRvJyk7XHJcbiAqIH1cclxuICovXHJcbkNTU09NLkNTU1ZhbHVlRXhwcmVzc2lvbi5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgdG9rZW4gPSB0aGlzLl90b2tlbixcclxuXHRcdFx0aWR4ID0gdGhpcy5faWR4O1xyXG5cclxuXHR2YXIgY2hhcmFjdGVyID0gJycsXHJcblx0XHRcdGV4cHJlc3Npb24gPSAnJyxcclxuXHRcdFx0ZXJyb3IgPSAnJyxcclxuXHRcdFx0aW5mbyxcclxuXHRcdFx0cGFyZW4gPSBbXTtcclxuXHJcblxyXG5cdGZvciAoOyA7ICsraWR4KSB7XHJcblx0XHRjaGFyYWN0ZXIgPSB0b2tlbi5jaGFyQXQoaWR4KTtcclxuXHJcblx0XHQvLyBlbmQgb2YgdG9rZW5cclxuXHRcdGlmIChjaGFyYWN0ZXIgPT09ICcnKSB7XHJcblx0XHRcdGVycm9yID0gJ2NzcyBleHByZXNzaW9uIGVycm9yOiB1bmZpbmlzaGVkIGV4cHJlc3Npb24hJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoKGNoYXJhY3Rlcikge1xyXG5cdFx0XHRjYXNlICcoJzpcclxuXHRcdFx0XHRwYXJlbi5wdXNoKGNoYXJhY3Rlcik7XHJcblx0XHRcdFx0ZXhwcmVzc2lvbiArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICcpJzpcclxuXHRcdFx0XHRwYXJlbi5wb3AoY2hhcmFjdGVyKTtcclxuXHRcdFx0XHRleHByZXNzaW9uICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJy8nOlxyXG5cdFx0XHRcdGlmICgoaW5mbyA9IHRoaXMuX3BhcnNlSlNDb21tZW50KHRva2VuLCBpZHgpKSkgeyAvLyBjb21tZW50P1xyXG5cdFx0XHRcdFx0aWYgKGluZm8uZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0ZXJyb3IgPSAnY3NzIGV4cHJlc3Npb24gZXJyb3I6IHVuZmluaXNoZWQgY29tbWVudCBpbiBleHByZXNzaW9uISc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZHggPSBpbmZvLmlkeDtcclxuXHRcdFx0XHRcdFx0Ly8gaWdub3JlIHRoZSBjb21tZW50XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmICgoaW5mbyA9IHRoaXMuX3BhcnNlSlNSZXhFeHAodG9rZW4sIGlkeCkpKSB7IC8vIHJlZ2V4cFxyXG5cdFx0XHRcdFx0aWR4ID0gaW5mby5pZHg7XHJcblx0XHRcdFx0XHRleHByZXNzaW9uICs9IGluZm8udGV4dDtcclxuXHRcdFx0XHR9IGVsc2UgeyAvLyBvdGhlclxyXG5cdFx0XHRcdFx0ZXhwcmVzc2lvbiArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIidcIjpcclxuXHRcdFx0Y2FzZSAnXCInOlxyXG5cdFx0XHRcdGluZm8gPSB0aGlzLl9wYXJzZUpTU3RyaW5nKHRva2VuLCBpZHgsIGNoYXJhY3Rlcik7XHJcblx0XHRcdFx0aWYgKGluZm8pIHsgLy8gc3RyaW5nXHJcblx0XHRcdFx0XHRpZHggPSBpbmZvLmlkeDtcclxuXHRcdFx0XHRcdGV4cHJlc3Npb24gKz0gaW5mby50ZXh0O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRleHByZXNzaW9uICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGV4cHJlc3Npb24gKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChlcnJvcikge1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBlbmQgb2YgZXhwcmVzc2lvblxyXG5cdFx0aWYgKHBhcmVuLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciByZXQ7XHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHRyZXQgPSB7XHJcblx0XHRcdGVycm9yOiBlcnJvclxyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0ID0ge1xyXG5cdFx0XHRpZHg6IGlkeCxcclxuXHRcdFx0ZXhwcmVzc2lvbjogZXhwcmVzc2lvblxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXQ7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdHxmYWxzZX1cclxuICogICAgICAgICAgLSBpZHg6XHJcbiAqICAgICAgICAgIC0gdGV4dDpcclxuICogICAgICAgICAgb3JcclxuICogICAgICAgICAgLSBlcnJvcjpcclxuICogICAgICAgICAgb3JcclxuICogICAgICAgICAgZmFsc2VcclxuICpcclxuICovXHJcbkNTU09NLkNTU1ZhbHVlRXhwcmVzc2lvbi5wcm90b3R5cGUuX3BhcnNlSlNDb21tZW50ID0gZnVuY3Rpb24odG9rZW4sIGlkeCkge1xyXG5cdHZhciBuZXh0Q2hhciA9IHRva2VuLmNoYXJBdChpZHggKyAxKSxcclxuXHRcdFx0dGV4dDtcclxuXHJcblx0aWYgKG5leHRDaGFyID09PSAnLycgfHwgbmV4dENoYXIgPT09ICcqJykge1xyXG5cdFx0dmFyIHN0YXJ0SWR4ID0gaWR4LFxyXG5cdFx0XHRcdGVuZElkeCxcclxuXHRcdFx0XHRjb21tZW50RW5kQ2hhcjtcclxuXHJcblx0XHRpZiAobmV4dENoYXIgPT09ICcvJykgeyAvLyBsaW5lIGNvbW1lbnRcclxuXHRcdFx0Y29tbWVudEVuZENoYXIgPSAnXFxuJztcclxuXHRcdH0gZWxzZSBpZiAobmV4dENoYXIgPT09ICcqJykgeyAvLyBibG9jayBjb21tZW50XHJcblx0XHRcdGNvbW1lbnRFbmRDaGFyID0gJyovJztcclxuXHRcdH1cclxuXHJcblx0XHRlbmRJZHggPSB0b2tlbi5pbmRleE9mKGNvbW1lbnRFbmRDaGFyLCBzdGFydElkeCArIDEgKyAxKTtcclxuXHRcdGlmIChlbmRJZHggIT09IC0xKSB7XHJcblx0XHRcdGVuZElkeCA9IGVuZElkeCArIGNvbW1lbnRFbmRDaGFyLmxlbmd0aCAtIDE7XHJcblx0XHRcdHRleHQgPSB0b2tlbi5zdWJzdHJpbmcoaWR4LCBlbmRJZHggKyAxKTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpZHg6IGVuZElkeCxcclxuXHRcdFx0XHR0ZXh0OiB0ZXh0XHJcblx0XHRcdH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgZXJyb3IgPSAnY3NzIGV4cHJlc3Npb24gZXJyb3I6IHVuZmluaXNoZWQgY29tbWVudCBpbiBleHByZXNzaW9uISc7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZXJyb3I6IGVycm9yXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdHxmYWxzZX1cclxuICpcdFx0XHRcdFx0LSBpZHg6XHJcbiAqXHRcdFx0XHRcdC0gdGV4dDpcclxuICpcdFx0XHRcdFx0b3JcclxuICpcdFx0XHRcdFx0ZmFsc2VcclxuICpcclxuICovXHJcbkNTU09NLkNTU1ZhbHVlRXhwcmVzc2lvbi5wcm90b3R5cGUuX3BhcnNlSlNTdHJpbmcgPSBmdW5jdGlvbih0b2tlbiwgaWR4LCBzZXApIHtcclxuXHR2YXIgZW5kSWR4ID0gdGhpcy5fZmluZE1hdGNoZWRJZHgodG9rZW4sIGlkeCwgc2VwKSxcclxuXHRcdFx0dGV4dDtcclxuXHJcblx0aWYgKGVuZElkeCA9PT0gLTEpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGV4dCA9IHRva2VuLnN1YnN0cmluZyhpZHgsIGVuZElkeCArIHNlcC5sZW5ndGgpO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGlkeDogZW5kSWR4LFxyXG5cdFx0XHR0ZXh0OiB0ZXh0XHJcblx0XHR9O1xyXG5cdH1cclxufTtcclxuXHJcblxyXG4vKipcclxuICogcGFyc2UgcmVnZXhwIGluIGNzcyBleHByZXNzaW9uXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdHxmYWxzZX1cclxuICpcdFx0XHRcdC0gaWR4OlxyXG4gKlx0XHRcdFx0LSByZWdFeHA6XHJcbiAqXHRcdFx0XHRvclxyXG4gKlx0XHRcdFx0ZmFsc2VcclxuICovXHJcblxyXG4vKlxyXG5cclxuYWxsIGxlZ2FsIFJlZ0V4cFxyXG5cclxuL2EvXHJcbigvYS8pXHJcblsvYS9dXHJcblsxMiwgL2EvXVxyXG5cclxuIS9hL1xyXG5cclxuKy9hL1xyXG4tL2EvXHJcbiogL2EvXHJcbi8gL2EvXHJcbiUvYS9cclxuXHJcbj09PS9hL1xyXG4hPT0vYS9cclxuPT0vYS9cclxuIT0vYS9cclxuPi9hL1xyXG4+PS9hL1xyXG48L2EvXHJcbjw9L2EvXHJcblxyXG4mL2EvXHJcbnwvYS9cclxuXi9hL1xyXG5+L2EvXHJcbjw8L2EvXHJcbj4+L2EvXHJcbj4+Pi9hL1xyXG5cclxuJiYvYS9cclxufHwvYS9cclxuPy9hL1xyXG49L2EvXHJcbiwvYS9cclxuXHJcblx0XHRkZWxldGUgL2EvXHJcblx0XHRcdFx0aW4gL2EvXHJcbmluc3RhbmNlb2YgL2EvXHJcblx0XHRcdFx0bmV3IC9hL1xyXG5cdFx0dHlwZW9mIC9hL1xyXG5cdFx0XHR2b2lkIC9hL1xyXG5cclxuKi9cclxuQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uLnByb3RvdHlwZS5fcGFyc2VKU1JleEV4cCA9IGZ1bmN0aW9uKHRva2VuLCBpZHgpIHtcclxuXHR2YXIgYmVmb3JlID0gdG9rZW4uc3Vic3RyaW5nKDAsIGlkeCkucmVwbGFjZSgvXFxzKyQvLCBcIlwiKSxcclxuXHRcdFx0bGVnYWxSZWd4ID0gW1xyXG5cdFx0XHRcdC9eJC8sXHJcblx0XHRcdFx0L1xcKCQvLFxyXG5cdFx0XHRcdC9cXFskLyxcclxuXHRcdFx0XHQvXFwhJC8sXHJcblx0XHRcdFx0L1xcKyQvLFxyXG5cdFx0XHRcdC9cXC0kLyxcclxuXHRcdFx0XHQvXFwqJC8sXHJcblx0XHRcdFx0L1xcL1xccysvLFxyXG5cdFx0XHRcdC9cXCUkLyxcclxuXHRcdFx0XHQvXFw9JC8sXHJcblx0XHRcdFx0L1xcPiQvLFxyXG5cdFx0XHRcdC88JC8sXHJcblx0XHRcdFx0L1xcJiQvLFxyXG5cdFx0XHRcdC9cXHwkLyxcclxuXHRcdFx0XHQvXFxeJC8sXHJcblx0XHRcdFx0L1xcfiQvLFxyXG5cdFx0XHRcdC9cXD8kLyxcclxuXHRcdFx0XHQvXFwsJC8sXHJcblx0XHRcdFx0L2RlbGV0ZSQvLFxyXG5cdFx0XHRcdC9pbiQvLFxyXG5cdFx0XHRcdC9pbnN0YW5jZW9mJC8sXHJcblx0XHRcdFx0L25ldyQvLFxyXG5cdFx0XHRcdC90eXBlb2YkLyxcclxuXHRcdFx0XHQvdm9pZCQvXHJcblx0XHRcdF07XHJcblxyXG5cdHZhciBpc0xlZ2FsID0gbGVnYWxSZWd4LnNvbWUoZnVuY3Rpb24ocmVnKSB7XHJcblx0XHRyZXR1cm4gcmVnLnRlc3QoYmVmb3JlKTtcclxuXHR9KTtcclxuXHJcblx0aWYgKCFpc0xlZ2FsKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBzZXAgPSAnLyc7XHJcblxyXG5cdFx0Ly8gc2FtZSBsb2dpYyBhcyBzdHJpbmdcclxuXHRcdHJldHVybiB0aGlzLl9wYXJzZUpTU3RyaW5nKHRva2VuLCBpZHgsIHNlcCk7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBmaW5kIG5leHQgc2VwKHNhbWUgbGluZSkgaW5kZXggaW4gYHRva2VuYFxyXG4gKlxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XHJcbiAqXHJcbiAqL1xyXG5DU1NPTS5DU1NWYWx1ZUV4cHJlc3Npb24ucHJvdG90eXBlLl9maW5kTWF0Y2hlZElkeCA9IGZ1bmN0aW9uKHRva2VuLCBpZHgsIHNlcCkge1xyXG5cdHZhciBzdGFydElkeCA9IGlkeCxcclxuXHRcdFx0ZW5kSWR4O1xyXG5cclxuXHR2YXIgTk9UX0ZPVU5EID0gLTE7XHJcblxyXG5cdHdoaWxlKHRydWUpIHtcclxuXHRcdGVuZElkeCA9IHRva2VuLmluZGV4T2Yoc2VwLCBzdGFydElkeCArIDEpO1xyXG5cclxuXHRcdGlmIChlbmRJZHggPT09IC0xKSB7IC8vIG5vdCBmb3VuZFxyXG5cdFx0XHRlbmRJZHggPSBOT1RfRk9VTkQ7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHRleHQgPSB0b2tlbi5zdWJzdHJpbmcoaWR4ICsgMSwgZW5kSWR4KSxcclxuXHRcdFx0XHRcdG1hdGNoZWQgPSB0ZXh0Lm1hdGNoKC9cXFxcKyQvKTtcclxuXHRcdFx0aWYgKCFtYXRjaGVkIHx8IG1hdGNoZWRbMF0gJSAyID09PSAwKSB7IC8vIG5vdCBlc2NhcGVkXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3RhcnRJZHggPSBlbmRJZHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGJvdW5kYXJ5IG11c3QgYmUgaW4gdGhlIHNhbWUgbGluZShqcyBzdGluZyBvciByZWdleHApXHJcblx0dmFyIG5leHROZXdMaW5lSWR4ID0gdG9rZW4uaW5kZXhPZignXFxuJywgaWR4ICsgMSk7XHJcblx0aWYgKG5leHROZXdMaW5lSWR4IDwgZW5kSWR4KSB7XHJcblx0XHRlbmRJZHggPSBOT1RfRk9VTkQ7XHJcblx0fVxyXG5cclxuXHJcblx0cmV0dXJuIGVuZElkeDtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuQ1NTVmFsdWVFeHByZXNzaW9uID0gQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uO1xyXG4vLy9Db21tb25KU1xyXG4vLy5Db21tb25KU1xyXG52YXIgQ1NTT00gPSBDU1NPTXx8e307XHJcbi8vL0NvbW1vbkpTXHJcblxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblxyXG4gKi9cclxuQ1NTT00ucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSh0b2tlbikge1xyXG5cclxuXHR2YXIgaSA9IDA7XHJcblxyXG5cdC8qKlxyXG5cdFx0XCJiZWZvcmUtc2VsZWN0b3JcIiBvclxyXG5cdFx0XCJzZWxlY3RvclwiIG9yXHJcblx0XHRcImF0UnVsZVwiIG9yXHJcblx0XHRcImF0QmxvY2tcIiBvclxyXG5cdFx0XCJiZWZvcmUtbmFtZVwiIG9yXHJcblx0XHRcIm5hbWVcIiBvclxyXG5cdFx0XCJiZWZvcmUtdmFsdWVcIiBvclxyXG5cdFx0XCJ2YWx1ZVwiXHJcblx0Ki9cclxuXHR2YXIgc3RhdGUgPSBcImJlZm9yZS1zZWxlY3RvclwiO1xyXG5cclxuXHR2YXIgaW5kZXg7XHJcblx0dmFyIGJ1ZmZlciA9IFwiXCI7XHJcblx0dmFyIHZhbHVlUGFyZW50aGVzaXNEZXB0aCA9IDA7XHJcblxyXG5cdHZhciBTSUdOSUZJQ0FOVF9XSElURVNQQUNFID0ge1xyXG5cdFx0XCJzZWxlY3RvclwiOiB0cnVlLFxyXG5cdFx0XCJ2YWx1ZVwiOiB0cnVlLFxyXG5cdFx0XCJ2YWx1ZS1wYXJlbnRoZXNpc1wiOiB0cnVlLFxyXG5cdFx0XCJhdFJ1bGVcIjogdHJ1ZSxcclxuXHRcdFwiaW1wb3J0UnVsZS1iZWdpblwiOiB0cnVlLFxyXG5cdFx0XCJpbXBvcnRSdWxlXCI6IHRydWUsXHJcblx0XHRcImF0QmxvY2tcIjogdHJ1ZSxcclxuXHRcdCdkb2N1bWVudFJ1bGUtYmVnaW4nOiB0cnVlXHJcblx0fTtcclxuXHJcblx0dmFyIHN0eWxlU2hlZXQgPSBuZXcgQ1NTT00uQ1NTU3R5bGVTaGVldCgpO1xyXG5cclxuXHQvLyBAdHlwZSBDU1NTdHlsZVNoZWV0fENTU01lZGlhUnVsZXxDU1NGb250RmFjZVJ1bGV8Q1NTS2V5ZnJhbWVzUnVsZXxDU1NEb2N1bWVudFJ1bGVcclxuXHR2YXIgY3VycmVudFNjb3BlID0gc3R5bGVTaGVldDtcclxuXHJcblx0Ly8gQHR5cGUgQ1NTTWVkaWFSdWxlfENTU0tleWZyYW1lc1J1bGV8Q1NTRG9jdW1lbnRSdWxlXHJcblx0dmFyIHBhcmVudFJ1bGU7XHJcblxyXG5cdHZhciBuYW1lLCBwcmlvcml0eT1cIlwiLCBzdHlsZVJ1bGUsIG1lZGlhUnVsZSwgaW1wb3J0UnVsZSwgZm9udEZhY2VSdWxlLCBrZXlmcmFtZXNSdWxlLCBkb2N1bWVudFJ1bGUsIGhvc3RSdWxlO1xyXG5cclxuXHR2YXIgYXRLZXlmcmFtZXNSZWdFeHAgPSAvQCgtKD86XFx3Ky0pKyk/a2V5ZnJhbWVzL2c7XHJcblxyXG5cdHZhciBwYXJzZUVycm9yID0gZnVuY3Rpb24obWVzc2FnZSkge1xyXG5cdFx0dmFyIGxpbmVzID0gdG9rZW4uc3Vic3RyaW5nKDAsIGkpLnNwbGl0KCdcXG4nKTtcclxuXHRcdHZhciBsaW5lQ291bnQgPSBsaW5lcy5sZW5ndGg7XHJcblx0XHR2YXIgY2hhckNvdW50ID0gbGluZXMucG9wKCkubGVuZ3RoICsgMTtcclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlICsgJyAobGluZSAnICsgbGluZUNvdW50ICsgJywgY2hhciAnICsgY2hhckNvdW50ICsgJyknKTtcclxuXHRcdGVycm9yLmxpbmUgPSBsaW5lQ291bnQ7XHJcblx0XHQvKiBqc2hpbnQgc3ViIDogdHJ1ZSAqL1xyXG5cdFx0ZXJyb3JbJ2NoYXInXSA9IGNoYXJDb3VudDtcclxuXHRcdGVycm9yLnN0eWxlU2hlZXQgPSBzdHlsZVNoZWV0O1xyXG5cdFx0dGhyb3cgZXJyb3I7XHJcblx0fTtcclxuXHJcblx0Zm9yICh2YXIgY2hhcmFjdGVyOyAoY2hhcmFjdGVyID0gdG9rZW4uY2hhckF0KGkpKTsgaSsrKSB7XHJcblxyXG5cdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcclxuXHJcblx0XHRjYXNlIFwiIFwiOlxyXG5cdFx0Y2FzZSBcIlxcdFwiOlxyXG5cdFx0Y2FzZSBcIlxcclwiOlxyXG5cdFx0Y2FzZSBcIlxcblwiOlxyXG5cdFx0Y2FzZSBcIlxcZlwiOlxyXG5cdFx0XHRpZiAoU0lHTklGSUNBTlRfV0hJVEVTUEFDRVtzdGF0ZV0pIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdC8vIFN0cmluZ1xyXG5cdFx0Y2FzZSAnXCInOlxyXG5cdFx0XHRpbmRleCA9IGkgKyAxO1xyXG5cdFx0XHRkbyB7XHJcblx0XHRcdFx0aW5kZXggPSB0b2tlbi5pbmRleE9mKCdcIicsIGluZGV4KSArIDE7XHJcblx0XHRcdFx0aWYgKCFpbmRleCkge1xyXG5cdFx0XHRcdFx0cGFyc2VFcnJvcignVW5tYXRjaGVkIFwiJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IHdoaWxlICh0b2tlbltpbmRleCAtIDJdID09PSAnXFxcXCcpO1xyXG5cdFx0XHRidWZmZXIgKz0gdG9rZW4uc2xpY2UoaSwgaW5kZXgpO1xyXG5cdFx0XHRpID0gaW5kZXggLSAxO1xyXG5cdFx0XHRzd2l0Y2ggKHN0YXRlKSB7XHJcblx0XHRcdFx0Y2FzZSAnYmVmb3JlLXZhbHVlJzpcclxuXHRcdFx0XHRcdHN0YXRlID0gJ3ZhbHVlJztcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2ltcG9ydFJ1bGUtYmVnaW4nOlxyXG5cdFx0XHRcdFx0c3RhdGUgPSAnaW1wb3J0UnVsZSc7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIFwiJ1wiOlxyXG5cdFx0XHRpbmRleCA9IGkgKyAxO1xyXG5cdFx0XHRkbyB7XHJcblx0XHRcdFx0aW5kZXggPSB0b2tlbi5pbmRleE9mKFwiJ1wiLCBpbmRleCkgKyAxO1xyXG5cdFx0XHRcdGlmICghaW5kZXgpIHtcclxuXHRcdFx0XHRcdHBhcnNlRXJyb3IoXCJVbm1hdGNoZWQgJ1wiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gd2hpbGUgKHRva2VuW2luZGV4IC0gMl0gPT09ICdcXFxcJyk7XHJcblx0XHRcdGJ1ZmZlciArPSB0b2tlbi5zbGljZShpLCBpbmRleCk7XHJcblx0XHRcdGkgPSBpbmRleCAtIDE7XHJcblx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlICdiZWZvcmUtdmFsdWUnOlxyXG5cdFx0XHRcdFx0c3RhdGUgPSAndmFsdWUnO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnaW1wb3J0UnVsZS1iZWdpbic6XHJcblx0XHRcdFx0XHRzdGF0ZSA9ICdpbXBvcnRSdWxlJztcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdC8vIENvbW1lbnRcclxuXHRcdGNhc2UgXCIvXCI6XHJcblx0XHRcdGlmICh0b2tlbi5jaGFyQXQoaSArIDEpID09PSBcIipcIikge1xyXG5cdFx0XHRcdGkgKz0gMjtcclxuXHRcdFx0XHRpbmRleCA9IHRva2VuLmluZGV4T2YoXCIqL1wiLCBpKTtcclxuXHRcdFx0XHRpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0XHRwYXJzZUVycm9yKFwiTWlzc2luZyAqL1wiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aSA9IGluZGV4ICsgMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YnVmZmVyICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3RhdGUgPT09IFwiaW1wb3J0UnVsZS1iZWdpblwiKSB7XHJcblx0XHRcdFx0YnVmZmVyICs9IFwiIFwiO1xyXG5cdFx0XHRcdHN0YXRlID0gXCJpbXBvcnRSdWxlXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Ly8gQXQtcnVsZVxyXG5cdFx0Y2FzZSBcIkBcIjpcclxuXHRcdFx0aWYgKHRva2VuLmluZGV4T2YoXCJALW1vei1kb2N1bWVudFwiLCBpKSA9PT0gaSkge1xyXG5cdFx0XHRcdHN0YXRlID0gXCJkb2N1bWVudFJ1bGUtYmVnaW5cIjtcclxuXHRcdFx0XHRkb2N1bWVudFJ1bGUgPSBuZXcgQ1NTT00uQ1NTRG9jdW1lbnRSdWxlKCk7XHJcblx0XHRcdFx0ZG9jdW1lbnRSdWxlLl9fc3RhcnRzID0gaTtcclxuXHRcdFx0XHRpICs9IFwiLW1vei1kb2N1bWVudFwiLmxlbmd0aDtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLmluZGV4T2YoXCJAbWVkaWFcIiwgaSkgPT09IGkpIHtcclxuXHRcdFx0XHRzdGF0ZSA9IFwiYXRCbG9ja1wiO1xyXG5cdFx0XHRcdG1lZGlhUnVsZSA9IG5ldyBDU1NPTS5DU1NNZWRpYVJ1bGUoKTtcclxuXHRcdFx0XHRtZWRpYVJ1bGUuX19zdGFydHMgPSBpO1xyXG5cdFx0XHRcdGkgKz0gXCJtZWRpYVwiLmxlbmd0aDtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLmluZGV4T2YoXCJAaG9zdFwiLCBpKSA9PT0gaSkge1xyXG5cdFx0XHRcdHN0YXRlID0gXCJob3N0UnVsZS1iZWdpblwiO1xyXG5cdFx0XHRcdGkgKz0gXCJob3N0XCIubGVuZ3RoO1xyXG5cdFx0XHRcdGhvc3RSdWxlID0gbmV3IENTU09NLkNTU0hvc3RSdWxlKCk7XHJcblx0XHRcdFx0aG9zdFJ1bGUuX19zdGFydHMgPSBpO1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW4uaW5kZXhPZihcIkBpbXBvcnRcIiwgaSkgPT09IGkpIHtcclxuXHRcdFx0XHRzdGF0ZSA9IFwiaW1wb3J0UnVsZS1iZWdpblwiO1xyXG5cdFx0XHRcdGkgKz0gXCJpbXBvcnRcIi5sZW5ndGg7XHJcblx0XHRcdFx0YnVmZmVyICs9IFwiQGltcG9ydFwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLmluZGV4T2YoXCJAZm9udC1mYWNlXCIsIGkpID09PSBpKSB7XHJcblx0XHRcdFx0c3RhdGUgPSBcImZvbnRGYWNlUnVsZS1iZWdpblwiO1xyXG5cdFx0XHRcdGkgKz0gXCJmb250LWZhY2VcIi5sZW5ndGg7XHJcblx0XHRcdFx0Zm9udEZhY2VSdWxlID0gbmV3IENTU09NLkNTU0ZvbnRGYWNlUnVsZSgpO1xyXG5cdFx0XHRcdGZvbnRGYWNlUnVsZS5fX3N0YXJ0cyA9IGk7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhdEtleWZyYW1lc1JlZ0V4cC5sYXN0SW5kZXggPSBpO1xyXG5cdFx0XHRcdHZhciBtYXRjaEtleWZyYW1lcyA9IGF0S2V5ZnJhbWVzUmVnRXhwLmV4ZWModG9rZW4pO1xyXG5cdFx0XHRcdGlmIChtYXRjaEtleWZyYW1lcyAmJiBtYXRjaEtleWZyYW1lcy5pbmRleCA9PT0gaSkge1xyXG5cdFx0XHRcdFx0c3RhdGUgPSBcImtleWZyYW1lc1J1bGUtYmVnaW5cIjtcclxuXHRcdFx0XHRcdGtleWZyYW1lc1J1bGUgPSBuZXcgQ1NTT00uQ1NTS2V5ZnJhbWVzUnVsZSgpO1xyXG5cdFx0XHRcdFx0a2V5ZnJhbWVzUnVsZS5fX3N0YXJ0cyA9IGk7XHJcblx0XHRcdFx0XHRrZXlmcmFtZXNSdWxlLl92ZW5kb3JQcmVmaXggPSBtYXRjaEtleWZyYW1lc1sxXTsgLy8gV2lsbCBjb21lIG91dCBhcyB1bmRlZmluZWQgaWYgbm8gcHJlZml4IHdhcyBmb3VuZFxyXG5cdFx0XHRcdFx0aSArPSBtYXRjaEtleWZyYW1lc1swXS5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09IFwic2VsZWN0b3JcIikge1xyXG5cdFx0XHRcdFx0c3RhdGUgPSBcImF0UnVsZVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIFwie1wiOlxyXG5cdFx0XHRpZiAoc3RhdGUgPT09IFwic2VsZWN0b3JcIiB8fCBzdGF0ZSA9PT0gXCJhdFJ1bGVcIikge1xyXG5cdFx0XHRcdHN0eWxlUnVsZS5zZWxlY3RvclRleHQgPSBidWZmZXIudHJpbSgpO1xyXG5cdFx0XHRcdHN0eWxlUnVsZS5zdHlsZS5fX3N0YXJ0cyA9IGk7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRzdGF0ZSA9IFwiYmVmb3JlLW5hbWVcIjtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJhdEJsb2NrXCIpIHtcclxuXHRcdFx0XHRtZWRpYVJ1bGUubWVkaWEubWVkaWFUZXh0ID0gYnVmZmVyLnRyaW0oKTtcclxuXHRcdFx0XHRjdXJyZW50U2NvcGUgPSBwYXJlbnRSdWxlID0gbWVkaWFSdWxlO1xyXG5cdFx0XHRcdG1lZGlhUnVsZS5wYXJlbnRTdHlsZVNoZWV0ID0gc3R5bGVTaGVldDtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdHN0YXRlID0gXCJiZWZvcmUtc2VsZWN0b3JcIjtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJob3N0UnVsZS1iZWdpblwiKSB7XHJcblx0XHRcdFx0Y3VycmVudFNjb3BlID0gcGFyZW50UnVsZSA9IGhvc3RSdWxlO1xyXG5cdFx0XHRcdGhvc3RSdWxlLnBhcmVudFN0eWxlU2hlZXQgPSBzdHlsZVNoZWV0O1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0c3RhdGUgPSBcImJlZm9yZS1zZWxlY3RvclwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImZvbnRGYWNlUnVsZS1iZWdpblwiKSB7XHJcblx0XHRcdFx0aWYgKHBhcmVudFJ1bGUpIHtcclxuXHRcdFx0XHRcdGZvbnRGYWNlUnVsZS5wYXJlbnRSdWxlID0gcGFyZW50UnVsZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9udEZhY2VSdWxlLnBhcmVudFN0eWxlU2hlZXQgPSBzdHlsZVNoZWV0O1xyXG5cdFx0XHRcdHN0eWxlUnVsZSA9IGZvbnRGYWNlUnVsZTtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdHN0YXRlID0gXCJiZWZvcmUtbmFtZVwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSBcImtleWZyYW1lc1J1bGUtYmVnaW5cIikge1xyXG5cdFx0XHRcdGtleWZyYW1lc1J1bGUubmFtZSA9IGJ1ZmZlci50cmltKCk7XHJcblx0XHRcdFx0aWYgKHBhcmVudFJ1bGUpIHtcclxuXHRcdFx0XHRcdGtleWZyYW1lc1J1bGUucGFyZW50UnVsZSA9IHBhcmVudFJ1bGU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGtleWZyYW1lc1J1bGUucGFyZW50U3R5bGVTaGVldCA9IHN0eWxlU2hlZXQ7XHJcblx0XHRcdFx0Y3VycmVudFNjb3BlID0gcGFyZW50UnVsZSA9IGtleWZyYW1lc1J1bGU7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRzdGF0ZSA9IFwia2V5ZnJhbWVSdWxlLWJlZ2luXCI7XHJcblx0XHRcdH0gZWxzZSBpZiAoc3RhdGUgPT09IFwia2V5ZnJhbWVSdWxlLWJlZ2luXCIpIHtcclxuXHRcdFx0XHRzdHlsZVJ1bGUgPSBuZXcgQ1NTT00uQ1NTS2V5ZnJhbWVSdWxlKCk7XHJcblx0XHRcdFx0c3R5bGVSdWxlLmtleVRleHQgPSBidWZmZXIudHJpbSgpO1xyXG5cdFx0XHRcdHN0eWxlUnVsZS5fX3N0YXJ0cyA9IGk7XHJcblx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRzdGF0ZSA9IFwiYmVmb3JlLW5hbWVcIjtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJkb2N1bWVudFJ1bGUtYmVnaW5cIikge1xyXG5cdFx0XHRcdC8vIEZJWE1FOiB3aGF0IGlmIHRoaXMgJ3snIGlzIGluIHRoZSB1cmwgdGV4dCBvZiB0aGUgbWF0Y2ggZnVuY3Rpb24/XHJcblx0XHRcdFx0ZG9jdW1lbnRSdWxlLm1hdGNoZXIubWF0Y2hlclRleHQgPSBidWZmZXIudHJpbSgpO1xyXG5cdFx0XHRcdGlmIChwYXJlbnRSdWxlKSB7XHJcblx0XHRcdFx0XHRkb2N1bWVudFJ1bGUucGFyZW50UnVsZSA9IHBhcmVudFJ1bGU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGN1cnJlbnRTY29wZSA9IHBhcmVudFJ1bGUgPSBkb2N1bWVudFJ1bGU7XHJcblx0XHRcdFx0ZG9jdW1lbnRSdWxlLnBhcmVudFN0eWxlU2hlZXQgPSBzdHlsZVNoZWV0O1xyXG5cdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0c3RhdGUgPSBcImJlZm9yZS1zZWxlY3RvclwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCI6XCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gXCJuYW1lXCIpIHtcclxuXHRcdFx0XHRuYW1lID0gYnVmZmVyLnRyaW0oKTtcclxuXHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdHN0YXRlID0gXCJiZWZvcmUtdmFsdWVcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCIoXCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gJ3ZhbHVlJykge1xyXG5cdFx0XHRcdC8vIGllIGNzcyBleHByZXNzaW9uIG1vZGVcclxuXHRcdFx0XHRpZiAoYnVmZmVyLnRyaW0oKSA9PT0gJ2V4cHJlc3Npb24nKSB7XHJcblx0XHRcdFx0XHR2YXIgaW5mbyA9IChuZXcgQ1NTT00uQ1NTVmFsdWVFeHByZXNzaW9uKHRva2VuLCBpKSkucGFyc2UoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoaW5mby5lcnJvcikge1xyXG5cdFx0XHRcdFx0XHRwYXJzZUVycm9yKGluZm8uZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YnVmZmVyICs9IGluZm8uZXhwcmVzc2lvbjtcclxuXHRcdFx0XHRcdFx0aSA9IGluZm8uaWR4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdGF0ZSA9ICd2YWx1ZS1wYXJlbnRoZXNpcyc7XHJcblx0XHRcdFx0XHQvL2Fsd2F5cyBlbnN1cmUgdGhpcyBpcyByZXNldCB0byAxIG9uIHRyYW5zaXRpb25cclxuXHRcdFx0XHRcdC8vZnJvbSB2YWx1ZSB0byB2YWx1ZS1wYXJlbnRoZXNpc1xyXG5cdFx0XHRcdFx0dmFsdWVQYXJlbnRoZXNpc0RlcHRoID0gMTtcclxuXHRcdFx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09PSAndmFsdWUtcGFyZW50aGVzaXMnKSB7XHJcblx0XHRcdFx0dmFsdWVQYXJlbnRoZXNpc0RlcHRoKys7XHJcblx0XHRcdFx0YnVmZmVyICs9IGNoYXJhY3RlcjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgXCIpXCI6XHJcblx0XHRcdGlmIChzdGF0ZSA9PT0gJ3ZhbHVlLXBhcmVudGhlc2lzJykge1xyXG5cdFx0XHRcdHZhbHVlUGFyZW50aGVzaXNEZXB0aC0tO1xyXG5cdFx0XHRcdGlmICh2YWx1ZVBhcmVudGhlc2lzRGVwdGggPT09IDApIHN0YXRlID0gJ3ZhbHVlJztcclxuXHRcdFx0fVxyXG5cdFx0XHRidWZmZXIgKz0gY2hhcmFjdGVyO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIFwiIVwiOlxyXG5cdFx0XHRpZiAoc3RhdGUgPT09IFwidmFsdWVcIiAmJiB0b2tlbi5pbmRleE9mKFwiIWltcG9ydGFudFwiLCBpKSA9PT0gaSkge1xyXG5cdFx0XHRcdHByaW9yaXR5ID0gXCJpbXBvcnRhbnRcIjtcclxuXHRcdFx0XHRpICs9IFwiaW1wb3J0YW50XCIubGVuZ3RoO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSBcIjtcIjpcclxuXHRcdFx0c3dpdGNoIChzdGF0ZSkge1xyXG5cdFx0XHRcdGNhc2UgXCJ2YWx1ZVwiOlxyXG5cdFx0XHRcdFx0c3R5bGVSdWxlLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGJ1ZmZlci50cmltKCksIHByaW9yaXR5KTtcclxuXHRcdFx0XHRcdHByaW9yaXR5ID0gXCJcIjtcclxuXHRcdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwiYmVmb3JlLW5hbWVcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJhdFJ1bGVcIjpcclxuXHRcdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwiYmVmb3JlLXNlbGVjdG9yXCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiaW1wb3J0UnVsZVwiOlxyXG5cdFx0XHRcdFx0aW1wb3J0UnVsZSA9IG5ldyBDU1NPTS5DU1NJbXBvcnRSdWxlKCk7XHJcblx0XHRcdFx0XHRpbXBvcnRSdWxlLnBhcmVudFN0eWxlU2hlZXQgPSBpbXBvcnRSdWxlLnN0eWxlU2hlZXQucGFyZW50U3R5bGVTaGVldCA9IHN0eWxlU2hlZXQ7XHJcblx0XHRcdFx0XHRpbXBvcnRSdWxlLmNzc1RleHQgPSBidWZmZXIgKyBjaGFyYWN0ZXI7XHJcblx0XHRcdFx0XHRzdHlsZVNoZWV0LmNzc1J1bGVzLnB1c2goaW1wb3J0UnVsZSk7XHJcblx0XHRcdFx0XHRidWZmZXIgPSBcIlwiO1xyXG5cdFx0XHRcdFx0c3RhdGUgPSBcImJlZm9yZS1zZWxlY3RvclwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIFwifVwiOlxyXG5cdFx0XHRzd2l0Y2ggKHN0YXRlKSB7XHJcblx0XHRcdFx0Y2FzZSBcInZhbHVlXCI6XHJcblx0XHRcdFx0XHRzdHlsZVJ1bGUuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgYnVmZmVyLnRyaW0oKSwgcHJpb3JpdHkpO1xyXG5cdFx0XHRcdFx0cHJpb3JpdHkgPSBcIlwiO1xyXG5cdFx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xyXG5cdFx0XHRcdGNhc2UgXCJiZWZvcmUtbmFtZVwiOlxyXG5cdFx0XHRcdGNhc2UgXCJuYW1lXCI6XHJcblx0XHRcdFx0XHRzdHlsZVJ1bGUuX19lbmRzID0gaSArIDE7XHJcblx0XHRcdFx0XHRpZiAocGFyZW50UnVsZSkge1xyXG5cdFx0XHRcdFx0XHRzdHlsZVJ1bGUucGFyZW50UnVsZSA9IHBhcmVudFJ1bGU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzdHlsZVJ1bGUucGFyZW50U3R5bGVTaGVldCA9IHN0eWxlU2hlZXQ7XHJcblx0XHRcdFx0XHRjdXJyZW50U2NvcGUuY3NzUnVsZXMucHVzaChzdHlsZVJ1bGUpO1xyXG5cdFx0XHRcdFx0YnVmZmVyID0gXCJcIjtcclxuXHRcdFx0XHRcdGlmIChjdXJyZW50U2NvcGUuY29uc3RydWN0b3IgPT09IENTU09NLkNTU0tleWZyYW1lc1J1bGUpIHtcclxuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImtleWZyYW1lUnVsZS1iZWdpblwiO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c3RhdGUgPSBcImJlZm9yZS1zZWxlY3RvclwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImtleWZyYW1lUnVsZS1iZWdpblwiOlxyXG5cdFx0XHRcdGNhc2UgXCJiZWZvcmUtc2VsZWN0b3JcIjpcclxuXHRcdFx0XHRjYXNlIFwic2VsZWN0b3JcIjpcclxuXHRcdFx0XHRcdC8vIEVuZCBvZiBtZWRpYS9kb2N1bWVudCBydWxlLlxyXG5cdFx0XHRcdFx0aWYgKCFwYXJlbnRSdWxlKSB7XHJcblx0XHRcdFx0XHRcdHBhcnNlRXJyb3IoXCJVbmV4cGVjdGVkIH1cIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjdXJyZW50U2NvcGUuX19lbmRzID0gaSArIDE7XHJcblx0XHRcdFx0XHQvLyBOZXN0aW5nIHJ1bGVzIGFyZW4ndCBzdXBwb3J0ZWQgeWV0XHJcblx0XHRcdFx0XHRzdHlsZVNoZWV0LmNzc1J1bGVzLnB1c2goY3VycmVudFNjb3BlKTtcclxuXHRcdFx0XHRcdGN1cnJlbnRTY29wZSA9IHN0eWxlU2hlZXQ7XHJcblx0XHRcdFx0XHRwYXJlbnRSdWxlID0gbnVsbDtcclxuXHRcdFx0XHRcdGJ1ZmZlciA9IFwiXCI7XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwiYmVmb3JlLXNlbGVjdG9yXCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRzd2l0Y2ggKHN0YXRlKSB7XHJcblx0XHRcdFx0Y2FzZSBcImJlZm9yZS1zZWxlY3RvclwiOlxyXG5cdFx0XHRcdFx0c3RhdGUgPSBcInNlbGVjdG9yXCI7XHJcblx0XHRcdFx0XHRzdHlsZVJ1bGUgPSBuZXcgQ1NTT00uQ1NTU3R5bGVSdWxlKCk7XHJcblx0XHRcdFx0XHRzdHlsZVJ1bGUuX19zdGFydHMgPSBpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImJlZm9yZS1uYW1lXCI6XHJcblx0XHRcdFx0XHRzdGF0ZSA9IFwibmFtZVwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImJlZm9yZS12YWx1ZVwiOlxyXG5cdFx0XHRcdFx0c3RhdGUgPSBcInZhbHVlXCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiaW1wb3J0UnVsZS1iZWdpblwiOlxyXG5cdFx0XHRcdFx0c3RhdGUgPSBcImltcG9ydFJ1bGVcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ1ZmZlciArPSBjaGFyYWN0ZXI7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0eWxlU2hlZXQ7XHJcbn07XHJcblxyXG5cclxuLy8uQ29tbW9uSlNcclxuZXhwb3J0cy5wYXJzZSA9IENTU09NLnBhcnNlO1xyXG4vLyBUaGUgZm9sbG93aW5nIG1vZHVsZXMgY2Fubm90IGJlIGluY2x1ZGVkIHNvb25lciBkdWUgdG8gdGhlIG11dHVhbCBkZXBlbmRlbmN5IHdpdGggcGFyc2UuanNcclxuLy8vQ29tbW9uSlNcclxuLyoqXHJcbiAqIFByb2R1Y2VzIGEgZGVlcCBjb3B5IG9mIHN0eWxlc2hlZXQg4oCUIHRoZSBpbnN0YW5jZSB2YXJpYWJsZXMgb2Ygc3R5bGVzaGVldCBhcmUgY29waWVkIHJlY3Vyc2l2ZWx5LlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlU2hlZXR8Q1NTT00uQ1NTU3R5bGVTaGVldH0gc3R5bGVzaGVldFxyXG4gKiBAbm9zaWRlZWZmZWN0c1xyXG4gKiBAcmV0dXJuIHtDU1NPTS5DU1NTdHlsZVNoZWV0fVxyXG4gKi9cclxuQ1NTT00uY2xvbmUgPSBmdW5jdGlvbiBjbG9uZShzdHlsZXNoZWV0KSB7XHJcblxyXG5cdHZhciBjbG9uZWQgPSBuZXcgQ1NTT00uQ1NTU3R5bGVTaGVldCgpO1xyXG5cclxuXHR2YXIgcnVsZXMgPSBzdHlsZXNoZWV0LmNzc1J1bGVzO1xyXG5cdGlmICghcnVsZXMpIHtcclxuXHRcdHJldHVybiBjbG9uZWQ7XHJcblx0fVxyXG5cclxuXHR2YXIgUlVMRV9UWVBFUyA9IHtcclxuXHRcdDE6IENTU09NLkNTU1N0eWxlUnVsZSxcclxuXHRcdDQ6IENTU09NLkNTU01lZGlhUnVsZSxcclxuXHRcdC8vMzogQ1NTT00uQ1NTSW1wb3J0UnVsZSxcclxuXHRcdC8vNTogQ1NTT00uQ1NTRm9udEZhY2VSdWxlLFxyXG5cdFx0Ly82OiBDU1NPTS5DU1NQYWdlUnVsZSxcclxuXHRcdDg6IENTU09NLkNTU0tleWZyYW1lc1J1bGUsXHJcblx0XHQ5OiBDU1NPTS5DU1NLZXlmcmFtZVJ1bGVcclxuXHR9O1xyXG5cclxuXHRmb3IgKHZhciBpPTAsIHJ1bGVzTGVuZ3RoPXJ1bGVzLmxlbmd0aDsgaSA8IHJ1bGVzTGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBydWxlID0gcnVsZXNbaV07XHJcblx0XHR2YXIgcnVsZUNsb25lID0gY2xvbmVkLmNzc1J1bGVzW2ldID0gbmV3IFJVTEVfVFlQRVNbcnVsZS50eXBlXSgpO1xyXG5cclxuXHRcdHZhciBzdHlsZSA9IHJ1bGUuc3R5bGU7XHJcblx0XHRpZiAoc3R5bGUpIHtcclxuXHRcdFx0dmFyIHN0eWxlQ2xvbmUgPSBydWxlQ2xvbmUuc3R5bGUgPSBuZXcgQ1NTT00uQ1NTU3R5bGVEZWNsYXJhdGlvbigpO1xyXG5cdFx0XHRmb3IgKHZhciBqPTAsIHN0eWxlTGVuZ3RoPXN0eWxlLmxlbmd0aDsgaiA8IHN0eWxlTGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHR2YXIgbmFtZSA9IHN0eWxlQ2xvbmVbal0gPSBzdHlsZVtqXTtcclxuXHRcdFx0XHRzdHlsZUNsb25lW25hbWVdID0gc3R5bGVbbmFtZV07XHJcblx0XHRcdFx0c3R5bGVDbG9uZS5faW1wb3J0YW50c1tuYW1lXSA9IHN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkobmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVDbG9uZS5sZW5ndGggPSBzdHlsZS5sZW5ndGg7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHJ1bGUuaGFzT3duUHJvcGVydHkoJ2tleVRleHQnKSkge1xyXG5cdFx0XHRydWxlQ2xvbmUua2V5VGV4dCA9IHJ1bGUua2V5VGV4dDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocnVsZS5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0b3JUZXh0JykpIHtcclxuXHRcdFx0cnVsZUNsb25lLnNlbGVjdG9yVGV4dCA9IHJ1bGUuc2VsZWN0b3JUZXh0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChydWxlLmhhc093blByb3BlcnR5KCdtZWRpYVRleHQnKSkge1xyXG5cdFx0XHRydWxlQ2xvbmUubWVkaWFUZXh0ID0gcnVsZS5tZWRpYVRleHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHJ1bGUuaGFzT3duUHJvcGVydHkoJ2Nzc1J1bGVzJykpIHtcclxuXHRcdFx0cnVsZUNsb25lLmNzc1J1bGVzID0gY2xvbmUocnVsZSkuY3NzUnVsZXM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY2xvbmVkO1xyXG5cclxufTtcclxuXHJcbi8vLkNvbW1vbkpTXHJcbmV4cG9ydHMuY2xvbmUgPSBDU1NPTS5jbG9uZTtcclxuLy8vQ29tbW9uSlNcclxufSkodGhpcyk7XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgMjAxNiAtIDIwMTZcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qIHYxLjAuMCAqL1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQnVpbGRlcuOBruODmeODvOOCueOCr+ODqeOCuVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1aWxkZXIge1xyXG5cclxuICAgIC8qKuOCs+ODs+OCueODiOODqeOCr+OCvyoqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zOy8v55Sf5oiQ44Kq44OX44K344On44OzXHJcbiAgICAgIHRoaXMubm9kZXMgPSBbXTsvL+eUn+aIkOeJqeagvOe0jeODleOCo+ODvOODq+ODiVxyXG4gICAgICB0aGlzLmF0dHJpYnV0ZURlbGltaXRlciA9XCIgXCI7Ly/lkITjg47jg7zjg4nplpPjga7ljLrliIfjgormloflrZdcclxuICAgIH1cclxuICAgIGdldE5vZGVzKGFyZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5ub2Rlcy5qb2luKGFyZyB8fCAnXFxuJyk7XHJcbiAgICB9XHJcbiAgICBhZGROb2RlKG5vZGUpIHtcclxuICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICBnZXRSZXN1bHRcclxuICAgICAgIOeUn+aIkOe1kOaenOi/lOWNtOODoeOCveODg+ODiVxyXG4gICAgICAg55Sf5oiQ57WQ5p6c44KS44Op44OD44OX44GZ44KL44Gq44Gp44Gu5Y+v6IO944GM5b+F6KaB44Gq5aC05ZCI44Gv44Kz44Kz44Gr6KiY6LyJ6KiY6LyJ44GZ44KLXHJcbiAgICAgKiovXHJcbiAgICBnZXRSZXN1bHQoYXJnKSB7XHJcbiAgICAgIHJldHVybihgJHt0aGlzLmdldE5vZGVzKCl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICBiZWZvcmVDcmVhdGVBdHRyaWJ1dGVcclxuICAgICAgIOWxnuaAp+ODjuODvOODieOBp+WQhEJ1aWxkZXLjgpLlkbzjgbPlh7rjgZnliY3jgasx5Zue44Gg44GR5a6f6KGM44GV44KM44G+44GZ44CCXHJcbiAgICAgICDnibnlrprjga7lsZ7mgKfjgpLmm7jjgY3mj5vjgYjjgovjgajjgYTjgaPjgZ/jgrHjg7zjgrnjgafliKnnlKjjgZfjgabjgY/jgaDjgZXjgYRcclxuXHJcbiAgICAqKi9cclxuICAgIGJlZm9yZUNyZWF0ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgY3JlYXRlQXR0cmlidXRlX3RleHRcclxuICAgICAgIOWxnuaAp+ODjuODvOODieOBp+WRvOOBsOOCjOOBvuOBmVxyXG4gICAgICAga2V5OuWxnuaAp+WQjVxyXG4gICAgICAgYXR0cmlidXRlOuODjuODvOODiVxyXG5cclxuICAgICoqL1xyXG4gICAgY3JlYXRlQXR0cmlidXRlX3RleHQoa2V5LCBhdHRyaWJ1dGUpIHt9XHJcblxyXG4gICAgLy9jcmVhdGVBdHRyaWJ1dGVfa2V5b25seShrZXkpe31cclxuICAgIGNyZWF0ZUF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXMpe31cclxuXHJcbiAgICAvKipcclxuICAgICAgIGNyZWF0ZUF0dHJpYnV0ZV9zY3JpcHRcclxuICAgICAgIFNjcmlwdOOCv+OCpOODl+OBruWxnuaAp+ODjuODvOODieOBp+WRvOOBsOOCjOOBvuOBmVxyXG4gICAgICAgYXR0cmlidXRl44GMU2NyaXB044K/44Kk44OX44Gu5aC05ZCI44Gr5ZG844Gz5Ye644GV44KM44G+44GZXHJcbiAgICAgICBrZXk65bGe5oCn5ZCNXHJcbiAgICAgICBhdHRyaWJ1dGU644OO44O844OJXHJcblxyXG4gICAgKiovXHJcbiAgICBjcmVhdGVBdHRyaWJ1dGVfc2NyaXB0KGtleSwgYXR0cmlidXRlKSB7fVxyXG5cclxuICAgIGJlZm9yZUNyZWF0ZVRhZ0VsZW1lbnQoc3JjLCBpc0NvbnRhaW5lcixzdGF0ZSkge31cclxuXHJcbiAgICAvKipcclxuICAgICAgIGNyZWF0ZVRhZ0VsZW1lbnRfb3BlblxyXG4gICAgICAg44K/44Kw6ZaL5aeL44Gu44OO44O844OJ44Gn5ZG844Gw44KM44G+44GZXHJcbiAgICAgICBzcmM6e25hbWU644K/44Kw5ZCN44CBYXR0cmlidXRlc++8muODjuODvOODieOBq+WQq+OBvuOCjOOCi+WxnuaAp++8iE1BUO+8iX1cclxuICAgICAgIGF0dHJpYnV0ZXM644OO44O844OJ44Gr5ZCr44G+44KM44KL5bGe5oCn44GM5YWl44Gj44Gm44G+44GZXHJcbiAgICAgICBpc0NvbnRhaW5lcjrlrZDopoHntKDjgpLlkKvjgoDloLTlkIjjga90cnVl44Gr44Gq44KK44G+44GZ44CCXHJcbiAgICAgICBzdGF0ZTp7ZGVwdGg644Kk44Oz44OH44Oz44OI5pWwfVxyXG5cclxuICAgICoqL1xyXG4gICAgY3JlYXRlVGFnRWxlbWVudF9vcGVuKHNyYywgYXR0cmlidXRlcywgaXNDb250YWluZXIsc3RhdGUpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICBjcmVhdGVUYWdFbGVtZW50X2Nsb3NlXHJcbiAgICAgICDjgr/jgrDntYLkuobjga7jg47jg7zjg4njgaflkbzjgbDjgozjgb7jgZlcclxuICAgICAgIHNyYzp7bmFtZTrjgr/jgrDlkI19XHJcbiAgICAgICBzdGF0ZTp7ZGVwdGg644Kk44Oz44OH44Oz44OI5pWwfVxyXG5cclxuICAgICoqL1xyXG4gICAgY3JlYXRlVGFnRWxlbWVudF9jbG9zZShzcmMsc3RhdGUpIHt9XHJcblxyXG4gICAgYmVmb3JlQ3JlYXRlTm9kZXMoc3JjLHN0YXRlKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgY3JlYXRlVGV4dEVsZW1lbnRcclxuICAgICAgIOODhuOCreOCueODiOOCv+OCpOODl+OBruacq+err+ODjuODvOODieOBp+WRvOOBsOOCjOOBvuOBmVxyXG4gICAgICAgc3JjOntkYXRhOuODhuOCreOCueODiH1cclxuICAgICAgIHN0YXRlOntkZXB0aDrjgqTjg7Pjg4fjg7Pjg4jmlbB9XHJcblxyXG4gICAgKiovXHJcbiAgICBjcmVhdGVUZXh0RWxlbWVudChzcmMsc3RhdGUpIHt9XHJcblxyXG4gICAgY3JlYXRlQ29tbWVudEVsZW1lbnQoc3JjLHN0YXRlKSB7fVxyXG4gICAgYmVmb3JlQ3JlYXRlU2NyaXB0RWxlbWVudChzcmMsIGlzQ29udGFpbmVyLHN0YXRlKSB7fVxyXG4gICAgY3JlYXRlU2NyaXB0RWxlbWVudF9vcGVuKHNyYywgaXNDb250YWluZXIsc3RhdGUpIHt9XHJcbiAgICBjcmVhdGVTY3JpcHRFbGVtZW50X2Nsb3NlKHNyYyxzdGF0ZSkge31cclxuXHJcbiAgICAvKipcclxuICAgICAgIGJlZm9yZUNvbXBpbGVcclxuICAgICAgIOWQhEJ1aWxkZXLjgpLlkbzjgbPlh7rjgZnliY3jgasx5Zue44Gg44GR5a6f6KGM44GV44KM44G+44GZ44CCXHJcbiAgICAgICDnibnlrprjga7jg47jg7zjg4njgpLmm7jjgY3mj5vjgYjjgovjgajjgYTjgaPjgZ/jgrHjg7zjgrnjgafliKnnlKjjgZfjgabjgY/jgaDjgZXjgYRcclxuXHJcbiAgICAqKi9cclxuICAgIGJlZm9yZUNvbXBpbGUoc3JjKSB7fVxyXG4gIH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAyMDE2IC0gMjAxNlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogdjEuMC4wICovXHJcblxyXG5cclxuaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyLmJhYmVsLmpzJ1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQ1NTQnVpbGRlclxyXG5odG1s44Gr5oyH5a6a44GV44KM44Gfc3R5bGXjgpJDU1PjgavliIbpm6LjgZfjgb7jgZnjgIJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NCdWlsZGVyIGV4dGVuZHMgQnVpbGRlcntcclxuXHJcbiAgICBjcmVhdGVBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXMpIHtcclxuICAgICAgaWYoa2V5PT0nc3R5bGUnKXtcclxuICAgICAgICByZXR1cm4oYCR7YXR0cmlidXRlcy5qb2luKCcnKX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICBjcmVhdGVBdHRyaWJ1dGVfdGV4dFxyXG4gICAgICAg5bGe5oCn44OO44O844OJ44Gn5ZG844Gw44KM44G+44GZXHJcbiAgICAgICDjgZPjga5CdWlsZGVy44Gn44Gvc3R5bGXlsZ7mgKfjga7loLTlkIjjga/lgKTjgpLov5TjgZfjgb7jgZlcclxuXHJcbiAgICAqKi9cclxuICAgIGNyZWF0ZUF0dHJpYnV0ZV90ZXh0KGtleSwgYXR0cmlidXRlLHN0YXRlKSB7XHJcbiAgICAgIGlmKGtleT09J3N0eWxlJyl7XHJcbiAgICAgICAgIHJldHVybihgJHthdHRyaWJ1dGUuZGF0YXx8Jyd9YCk7IC8vQ1NT44Gu6KaB57Sg44CA5L6LOmhlaWdodDozMHB4O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY3JlYXRlQXR0cmlidXRlX3NjcmlwdChrZXksIGF0dHJpYnV0ZSxzdGF0ZSkge1xyXG4gICAgICBpZihrZXk9PSdzdHlsZScpe1xyXG4gICAgICAgIHJldHVybihgJHthdHRyaWJ1dGUuZGF0YXx8Jyd9YCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICBjcmVhdGVUYWdFbGVtZW50X29wZW5cclxuICAgICAgIOOCv+OCsOmWi+Wni+OBruODjuODvOODieOBp+WRvOOBsOOCjOOBvuOBmVxyXG4gICAgICAgc3JjOntuYW1lOuOCv+OCsOWQjeOAgWF0dHJpYnV0ZXPvvJrjg47jg7zjg4njgavlkKvjgb7jgozjgovlsZ7mgKfvvIhNQVDvvIl9XHJcbiAgICAgICBhdHRyaWJ1dGVzOuODjuODvOODieOBq+WQq+OBvuOCjOOCi+WxnuaAp+OBjOWFpeOBo+OBpuOBvuOBmVxyXG4gICAgICAgaXNDb250YWluZXI65a2Q6KaB57Sg44KS5ZCr44KA5aC05ZCI44GvdHJ1ZeOBq+OBquOCiuOBvuOBmeOAglxyXG4gICAgICAgc3RhdGU6e2RlcHRoOuOCpOODs+ODh+ODs+ODiOaVsH1cclxuXHJcbiAgICAqKi9cclxuICAgIGNyZWF0ZVRhZ0VsZW1lbnRfb3BlbihzcmMsIGF0dHJpYnV0ZXMsIGlzQ29udGFpbmVyLHN0YXRlKSB7XHJcbiAgICAgIGlmKCFzcmMuYXR0cmlidXRlcykgcmV0dXJuO1xyXG4gICAgICB2YXIgaWQgPSAnJztcclxuICAgICAgaWYoc3JjLmF0dHJpYnV0ZXNbJ2lkJ10peyAvL2lk5oyH5a6a44GM44GC44KL5aC05ZCI44Gu44G/Q1NT5YyW44GX44G+44GZ44CCXHJcbiAgICAgICAgc3JjLmF0dHJpYnV0ZXNbJ2lkJ10uZm9yRWFjaChmdW5jdGlvbihfc3JjKSB7XHJcbiAgICAgICAgICAgIGlmKF9zcmMudHlwZT09J3RleHQnKSBpZCA9IGAke2lkfSR7X3NyYy5kYXRhfWA7XHJcbiAgICAgICAgICAgIGlmKF9zcmMudHlwZT09J3NjcmlwdCcgJiYgX3NyYy5sYW5nTmFtZT09ICdzaW5nbGVNdXN0YWNoZScgKSBpZCA9IGAke2lkfXske19zcmMuZGF0YX19YDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICBpZihpZCl7dGhpcy5ub2Rlcy5wdXNoKGBcclxuICAgICAgICAuJHtpZH0ge1xyXG4gICAgICAgICAgJHsnICcrYXR0cmlidXRlc31cclxuICAgICAgICB9YCk7XHJcbiAgICAgICAgZGVsZXRlIHNyYy5hdHRyaWJ1dGVzWydzdHlsZSddO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAyMDE2IC0gMjAxNlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogdjEuMC4wICovXHJcblxyXG5cclxuaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyLmJhYmVsLmpzJ1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuRGVidWdCdWlsZGVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdCdWlsZGVyIGV4dGVuZHMgQnVpbGRlcntcclxuXHJcbiAgICAvKipcclxuICAgICAgIGJlZm9yZUNvbXBpbGVcclxuICAgICAgIOWQhEJ1aWxkZXLjgpLlkbzjgbPlh7rjgZnliY3jgasx5Zue44Gg44GR5a6f6KGM44GV44KM44G+44GZ44CCXHJcbiAgICAgICDjgZPjga7jgr/jgqTjg5/jg7PjgrDjgadodG1s5YaF44Gud2ViQ29tcG9uZW505a6a576p44KS5Y+W5b6X44GX44Gm5Yip55So5Y+v6IO944Gq5b2i5byP44Gr5aSJ5o+b44GX44G+44GZ44CCXHJcbiAgICAqKi9cclxuICAgIGJlZm9yZUNvbXBpbGUoc3JjKXtcclxuICAgICAgY29uc29sZS5sb2coJ0RlYnVnQnVpbGRlcicsc3JjKTtcclxuICAgIH1cclxuICB9O1xyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IDIwMTYgLSAyMDE2XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiB2MS4wLjAgKi9cclxuXHJcbmltcG9ydCBCdWlsZGVyIGZyb20gJy4vQnVpbGRlci5iYWJlbC5qcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHRtbEJ1aWxkZXIgZXh0ZW5kcyBCdWlsZGVye1xyXG4gICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5lbXB0eVRhZ3MgPSB7YXJlYTogMSwgYmFzZTogMSwgYmFzZWZvbnQ6IDEsIGJyOiAxLCBjb2w6IDEsIGZyYW1lOiAxLCBocjogMSwgaW1nOiAxLCBpbnB1dDogMSwgaXNpbmRleDogMSwgbGluazogMSwgbWV0YTogMSwgcGFyYW06IDEsIGVtYmVkOiAxLCAnP3htbCc6IDEsIHdicjogMX1cclxuICAgICAgfVxyXG5cclxuICAgICAgY3JlYXRlQXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgaWYoYXR0cmlidXRlcy5sZW5ndGg9PTApIHJldHVybihgJHtrZXl9YCk7XHJcbiAgICAgICAgcmV0dXJuKGAke2tleX09JyR7YXR0cmlidXRlcy5qb2luKCcnKX0nYCk7XHJcbiAgICAgIH1cclxuICAgICAgY3JlYXRlQXR0cmlidXRlX3RleHQoa2V5LCBhdHRyaWJ1dGUsc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4oYCR7YXR0cmlidXRlLmRhdGF8fCcnfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZUF0dHJpYnV0ZV9zY3JpcHQoa2V5LCBhdHRyaWJ1dGUsc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4oYHske2F0dHJpYnV0ZS5kYXRhfHwnJ319YCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vdG9kbyBjcmVhdGVDb21tZW50RWxlbWVudChzcmMsc3RhdGUpIHt9XHJcbiAgICAgIGNyZWF0ZUNvbW1lbnRFbGVtZW50KHNyYyxzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9PCEtLSAke3NyYy5kYXRhfSAtLT5gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy90b2RvIGlzQ29udGFpbmVy44Gv5Y+v6IO944GqdGFn44GM5rG644G+44Gj44Gm44GE44KL44Gu44Gn44CB44Gd44GT44KS6ICD5oWu44GX44Gq44GE44GoZG9t44GM5aOK44KM44KLXHJcbiAgICAgIGNyZWF0ZVRhZ0VsZW1lbnRfb3BlbihzcmMsIGF0dHJpYnV0ZXMsIGlzQ29udGFpbmVyLHN0YXRlKSB7XHJcbiAgICAgICAgaWYoc3JjLm5hbWU9PSdzY3JpcHQnKXtcclxuICAgICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9PCR7c3JjLm5hbWV9JHthdHRyaWJ1dGVzfT4ke2lzQ29udGFpbmVyPycnOic8Lycrc3JjLm5hbWUrJz4nfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZW1wdHlUYWdGbGcgPSB0aGlzLmVtcHR5VGFnc1tzcmMubmFtZV18fGZhbHNlXHJcbiAgICAgICAgbGV0IHJlcUNsb3NlVGFnID0gIWlzQ29udGFpbmVyICYmICFlbXB0eVRhZ0ZsZ1xyXG4gICAgICAgIGxldCBjbG9zZVRhZyA9IHJlcUNsb3NlVGFnID8gYDwvJHtzcmMubmFtZX0+YCA6ICcnXHJcbiAgICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX08JHtzcmMubmFtZX0ke2F0dHJpYnV0ZXN9JHtlbXB0eVRhZ0ZsZz8nIC8nOiAnJ30+JHtyZXFDbG9zZVRhZz8gY2xvc2VUYWcgOiAnJ31gKTtcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVUYWdFbGVtZW50X2Nsb3NlKHNyYyxzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9PC8ke3NyYy5uYW1lfT5gKTtcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVUZXh0RWxlbWVudChzcmMsc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfSR7c3JjLmRhdGF9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY3JlYXRlU2NyaXB0RWxlbWVudF9vcGVuKHNyYywgaXNDb250YWluZXIsc3RhdGUpe1xyXG4gICAgICAgIGlmKCFpc0NvbnRhaW5lcikgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX17JHtzcmMuZGF0YX19YCk7XHJcbiAgICAgIH1cclxuICB9XHJcbiIsIlxyXG5pbXBvcnQgQnVpbGRlciBmcm9tICcuL0J1aWxkZXIuYmFiZWwuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNyZW1lbnRhbERvbUJ1aWxkZXIgZXh0ZW5kcyBCdWlsZGVye1xyXG4gICAgY3JlYXRlQXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIHJldHVybihgJHthdHRyaWJ1dGVzLmpvaW4oJyAnKX1gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUF0dHJpYnV0ZV90ZXh0KGtleSwgYXR0cmlidXRlLHN0YXRlKSB7XHJcbiAgICAgIHJldHVybihgJHtrZXl9PVxcXFwnJHthdHRyaWJ1dGUuZGF0YX1cXFxcJ2ApO1xyXG4gICAgfTtcclxuICAgIGNyZWF0ZUF0dHJpYnV0ZV9zY3JpcHQoa2V5LCBhdHRyaWJ1dGUsc3RhdGUpIHtcclxuICAgICAgcmV0dXJuKGAke2tleX09Jyske2F0dHJpYnV0ZS5kYXRhfSsnYCk7XHJcbiAgICB9O1xyXG4gICAgY3JlYXRlVGFnRWxlbWVudF9vcGVuKHNyYywgYXR0cmlidXRlcywgaXNDb250YWluZXIsc3RhdGUpIHtcclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX0ke2lzQ29udGFpbmVyPydlbGVtZW50T3Blbic6J2VsZW1lbnRWb2lkJ30oJyR7c3JjLm5hbWV9JywgJycsJyR7YXR0cmlidXRlc30nKTsvLyAke3N0YXRlLm5vZGVzLmxlbmd0aH0vJHtzdGF0ZS5ub2Rlcy5wb3N9YCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVUYWdFbGVtZW50X2Nsb3NlKHNyYyxzdGF0ZSkge1xyXG4gICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfWVsZW1lbnRDbG9zZSgnJHtzcmMubmFtZX0nKTsvLyAke3N0YXRlLm5vZGVzLmxlbmd0aH0vJHtzdGF0ZS5ub2Rlcy5wb3N9IGApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVGV4dEVsZW1lbnQoc3JjLHN0YXRlKSB7XHJcbiAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9dGV4dCgnJHtzcmMuZGF0YS5yZXBsYWNlKC9cXG4vZyxcIlwiKS5yZXBsYWNlKC9cXCcvZyxcIlxcXFxcXCdcIil9Jyk7IGApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ29tbWVudEVsZW1lbnQoc3JjLHN0YXRlKSB7XHJcbiAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9LyogJHtzcmMuZGF0YS5yZXBsYWNlKC9cXG4vZyxcIlwiKS5yZXBsYWNlKC9cXCcvZyxcIlxcXFxcXCdcIil9ICovYCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTY3JpcHRFbGVtZW50X29wZW4oc3JjLCBpc0NvbnRhaW5lcixzdGF0ZSkge1xyXG4gICAgICBpZiAoc3JjLm5hbWUgPT0gJ2lmJykge1xyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9aWYoICR7c3JjLmRhdGF9KXsgYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNyYy5uYW1lID09ICdlYWNoJykge1xyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9ZWFjaCggJHtzcmMuZGF0YX0peyBgKTtcclxuICAgICAgfVxyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9dGV4dCggJHtzcmMuZGF0YX0pIGApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU2NyaXB0RWxlbWVudF9jbG9zZShzcmMsc3RhdGUpIHtcclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX19KTtgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IDIwMTYgLSAyMDE3XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiB2MS4wLjAgKi9cclxuXHJcbmltcG9ydCBCdWlsZGVyIGZyb20gJy4vQnVpbGRlci5iYWJlbC5qcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDb21wb25lbnRCdWlsZGVyIGV4dGVuZHMgQnVpbGRlcntcclxuICAgIC8qKuOCs+ODs+OCueODiOODqeOCr+OCvyAqKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgdGhpcy5lbGVtZW50cyA9IG9wdGlvbnMuZWxlbWVudHN8fHt9O1xyXG4gICAgICB0aGlzLmVsZW1lbnROYW1lcyA9IG9wdGlvbnMuZWxlbWVudE5hbWVzfHxbXTsvL3dlYmNvbXBvbmVudOOBruS4gOimp1xyXG4gICAgICB0aGlzLmF0dHJpYnV0ZURlbGltaXRlciA9XCIsXCI7XHJcbiAgICB9XHJcbiAgICBjc3NUb0pzb24oY3NzKXtcclxuICAgICAgdmFyIHN0eWxlID0gbmV3IENTU09NLkNTU1N0eWxlRGVjbGFyYXRpb24oKTtcclxuICAgICAgc3R5bGUuY3NzVGV4dD1jc3M7XHJcbiAgICAgIHZhciByZXQgPSB7fTtcclxuICAgICAgZm9yKHZhciBpPTA7aTxzdHlsZS5sZW5ndGg7aSsrKXtcclxuICAgICAgICByZXRbc3R5bGVbaV0ucmVwbGFjZSgvXFwtL2csICcnKV09IHN0eWxlW3N0eWxlW2ldXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmV0KTtcclxuICAgIH1cclxuICAgIHRvVXBwZXJGaXJzdExldHRlcihzdHIpIHtcclxuICAgICAgcmV0dXJuIHN0ci5zcGxpdCgnLScpLm1hcChmdW5jdGlvbihibG9jayl7XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYmxvY2suc3Vic3RyaW5nKDEpO1xyXG4gICAgICB9KS5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUF0dHJpYnV0ZShrZXksYXR0cmlidXRlcykge1xyXG4gICAgICBpZihhdHRyaWJ1dGVzLmxlbmd0aD09MCkgcmV0dXJuKGAnJHtrZXl9Jzp0cnVlYCk7XHJcbiAgICAgIGtleT0oa2V5PT1cImNsYXNzXCIpP1wiY2xhc3NOYW1lXCI6a2V5O1xyXG4gICAgICByZXR1cm4oYCcke2tleX0nOiR7YXR0cmlidXRlcy5qb2luKCcrJyl9YCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVBdHRyaWJ1dGVfdGV4dChrZXksIGF0dHJpYnV0ZSxzdGF0ZSkge1xyXG4gICAgICBpZihrZXk9PVwic3R5bGVcIil7XHJcbiAgICAgICAgIHJldHVybihgJHt0aGlzLmNzc1RvSnNvbihhdHRyaWJ1dGUuZGF0YSl9YCk7XHJcbiAgICAgIH1lbHNlIHJldHVybihgJyR7YXR0cmlidXRlLmRhdGEucmVwbGFjZSgvXFwnL2csICdcXFxcXFwnJyl9J2ApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQXR0cmlidXRlX3NjcmlwdChrZXksIGF0dHJpYnV0ZSxzdGF0ZSkge1xyXG4gICAgICByZXR1cm4oYCR7YXR0cmlidXRlLmRhdGF9YCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5leHR0eXBlKF9zcmMpe1xyXG4gICAgICAgICAgICBpZihfc3JjLm5leHRTaWJsaW5nPT1udWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKF9zcmMubmV4dFNpYmxpbmcudHlwZSE9XCJjb21tZW50XCIpIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5leHR0eXBlKF9zcmMubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRhZ0VsZW1lbnRfb3BlbihzcmMsIGF0dHJpYnV0ZXMsIGlzQ29udGFpbmVyLHN0YXRlKSB7XHJcbiAgICAgIC8vdGFn44GLd2ViY29tcG9uZW5044GL5Yik5pat44GZ44KLXHJcbiAgICAgIC8vIEp1ZGdlIHdoZXRoZXIgaXQgaXMgdGFnIG9yIHdlYmNvbXBvbmVudFxyXG4gICAgICAvL+OCv+OCsOWQjeOBq+ODj+OCpOODleODs+OBjOWQq+OBvuOCjOOBpuOBhOOBn+OCiXdlYmNvbXBvbmVudFxyXG4gICAgICAvLyB3ZWJjb21wb25lbnQgaWYgdGhlIHRhZyBuYW1lIGNvbnRhaW5zIGEgJy0nXHJcbiAgICAgIC8v44K/44Kw5ZCN44GuMeaWh+Wtl+ebruOBjOWkp+aWh+Wtl+OBquOCiXdlYmNvbXBvbmVudFxyXG4gICAgICAvL2VsZW1lbnROYW1lc+OBq+eZu+mMsuOBleOCjOOBpuOBhOOBn+OCiXdlYmNvbXBvbmVudFxyXG4gICAgICAvLyB3ZWJjb21wb25lbnQgaWYgcmVnaXN0ZXJlZCBpbiBlbGVtZW50TmFtZXNcclxuICAgICAgdmFyIHRhZ05hbWU9ICggfnNyYy5uYW1lLmluZGV4T2YoJy0nKSB8fCBzcmMubmFtZS5jaGFyQXQoMCk9PXNyYy5uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpIHx8IHRoaXMuZWxlbWVudE5hbWVzLmluZGV4T2Yoc3JjLm5hbWUudG9Mb3dlckNhc2UoKSkgPj0gMCk/IHRoaXMudG9VcHBlckZpcnN0TGV0dGVyKHNyYy5uYW1lKTpgJyR7c3JjLm5hbWV9J2A7XHJcbiAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9UmVhY3QuY3JlYXRlRWxlbWVudCgke3RhZ05hbWV9LCR7YXR0cmlidXRlcz8neycrYXR0cmlidXRlcysnfSc6J251bGwnfSR7aXNDb250YWluZXI/JywnOih0aGlzLm5leHR0eXBlKHNyYykpPycpLCc6JyknfWApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVGFnRWxlbWVudF9jbG9zZShzcmMsc3RhdGUpIHtcclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX0pJHsodGhpcy5uZXh0dHlwZShzcmMpKT8nLCc6Jyd9YCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVUZXh0RWxlbWVudChzcmMsc3RhdGUpIHtcclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX0nJHtzcmMuZGF0YS5yZXBsYWNlKC9bXFxuXFxyXS9nLFwiXCIpLnJlcGxhY2UoL1xcJy9nLFwiXFxcXFxcJ1wiKX0nJHsoc3RhdGUubm9kZXMubGVuZ3RoPnN0YXRlLm5vZGVzLnBvcyk/JywnOicnfWApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ29tbWVudEVsZW1lbnQoc3JjLHN0YXRlKSB7XHJcbiAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9LyogJHtzcmMuZGF0YS5yZXBsYWNlKC9cXG4vZyxcIlwiKS5yZXBsYWNlKC9cXCcvZyxcIlxcXFxcXCdcIil9ICovYCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTY3JpcHRFbGVtZW50X29wZW4oc3JjLCBpc0NvbnRhaW5lcixzdGF0ZSkge1xyXG5cclxuXHJcbiAgICAgIGlmIChzcmMubmFtZSA9PSAnbWFwJykge1xyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9KCR7c3JjLmRhdGF9KS5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7IHJldHVybiBbIGApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzcmMubmFtZSA9PSAnaWYnKSB7XHJcbiAgICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX0oICR7c3JjLmRhdGF9KT9bIGApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzcmMubmFtZSA9PSAnZWFjaCcpIHtcclxuICAgICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfWVhY2goICR7c3JjLmRhdGF9KXsgYCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX0ke3NyYy5kYXRhfSR7KHN0YXRlLm5vZGVzLmxlbmd0aD5zdGF0ZS5ub2Rlcy5wb3MpPycsJzonJ31gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVNjcmlwdEVsZW1lbnRfY2xvc2Uoc3JjLHN0YXRlKSB7XHJcblxyXG4gICAgICBpZiAoc3JjLm5hbWUgPT0gJ21hcCcpIHtcclxuICAgICAgICByZXR1cm4oYCR7QXJyYXkoc3RhdGUuZGVwdGgpLmpvaW4oJ1xcdCcpfV19KSxgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3JjLm5hbWUgPT0gJ2lmJykge1xyXG4gICAgICAgIHJldHVybihgJHtBcnJheShzdGF0ZS5kZXB0aCkuam9pbignXFx0Jyl9XTpbXSxgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuKGAke0FycmF5KHN0YXRlLmRlcHRoKS5qb2luKCdcXHQnKX19KTtgKTtcclxuICAgIH1cclxuICAgIGdldFJlc3VsdChhcmcpIHtcclxuICAgICAgLy93aW5kb3fjgqrjg5bjgrjjgqfjgq/jg4jjgavjg6Hjgr3jg4Pjg4njgpLov73liqDjgZnjgovjgrPjg7zjg4njgpLnlJ/miJBcclxuICAgICAgLy9HZW5lcmF0ZSBjb2RlIHRvIGFkZCBhIG1ldGhvZCB0byB0aGUgd2luZG93IG9iamVjdFxyXG4gICAgICByZXR1cm4oYFxyXG5jbGFzcyAke3RoaXMudG9VcHBlckZpcnN0TGV0dGVyKGFyZy5lbGVtZW50TmFtZSl9IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuICR7dGhpcy5nZXROb2RlcygpLnRyaW0oKX1cclxuICB9XHJcbiR7YXJnLnNjcmlwdD8nJythcmcuc2NyaXB0LmRhdGE6Jyd9XHJcbn07YCk7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IDIwMTYgLSAyMDE3XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiB2MS4wLjAgKi9cclxuXHJcbmltcG9ydCBCdWlsZGVyIGZyb20gJy4vQnVpbGRlci5iYWJlbC5qcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RSb290Q29tcG9uZW50QnVpbGRlciBleHRlbmRzIEJ1aWxkZXJ7XHJcbiAgICAvKirjgrPjg7Pjgrnjg4jjg6njgq/jgr9cclxuICAgICDkvovvvJpcclxuICAgICAgbmV3IFJlYWN0Um9vdFBhcnNlcih7IGJ1aWxkZXI6IFJlYWN0Q29tcG9uZW50QnVpbGRlciB9KTtcclxuXHJcbiAgICoqL1xyXG4gICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgIHRoaXMuYnVpbGRlciA9b3B0aW9ucy5idWlsZGVyOy8vd2ViQ29tcG9uZW5044GuYnVpbGTjgavliKnnlKjjgZnjgovjg5Pjg6vjg4Djg7zjgpLlrprnvqnjgZfjgb7jgZnjgIJcclxuICAgICB0aGlzLmVsZW1lbnROYW1lcyA9W107XHJcbiAgICAgdGhpcy5lbGVtZW50cyA9e307XHJcbiAgICAgdGhpcy5jb21wb25lbnRzID17fTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAgIGJlZm9yZUNvbXBpbGVcclxuICAgICAg5ZCEQnVpbGRlcuOCkuWRvOOBs+WHuuOBmeWJjeOBqzHlm57jgaDjgZHlrp/ooYzjgZXjgozjgb7jgZnjgIJcclxuICAgICAg44GT44Gu44K/44Kk44Of44Oz44Kw44GnaHRtbOWGheOBrndlYkNvbXBvbmVudOWumue+qeOCkuWPluW+l+OBl+OBpuWIqeeUqOWPr+iDveOBquW9ouW8j+OBq+WkieaPm+OBl+OBvuOBmeOAglxyXG4gICAqKi9cclxuICAgYmVmb3JlQ29tcGlsZShzcmMpe1xyXG4gICAgIHZhciBjdXN0b21FbGVtZW50cyA9IHNyYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIik7XHJcbiAgICAgY3VzdG9tRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjdXN0b21FbGVtZW50KXtcclxuICAgICAgIHZhciBlbGVtZW50TmFtZSA9IFwiYXBwXCI7XHJcbiAgICAgICB0aGlzLmVsZW1lbnROYW1lcy5wdXNoKGVsZW1lbnROYW1lKTtcclxuICAgICAgIHRoaXMuZWxlbWVudHNbZWxlbWVudE5hbWVdID1cclxuICAgICAgICAge1xyXG4gICAgICAgICAgIHRlbXBsYXRlOmN1c3RvbUVsZW1lbnQ/Y3VzdG9tRWxlbWVudC5jbG9uZUVsZW1lbnQoKS5jaGlsZHJlbjpbXSxcclxuICAgICAgICAgICBzY3JpcHQ6W11cclxuICAgICAgICAgfTtcclxuICAgICAgIC8vYm9keemFjeS4i+OBruWJiumZpFxyXG4gICAgICAgY3VzdG9tRWxlbWVudC5yZW1vdmVDaGlsZEFsbCgpO1xyXG4gICAgICAgLy9ib2R56YWN5LiL44Gr6L+95YqgXHJcbiAgICAgICB2YXIgbmV3RWxlbWVudCA9IGN1c3RvbUVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICBuZXdFbGVtZW50LmF0dHJpYnV0ZXMgPSB7J2lkJzpbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogXCJhcHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XX07XHJcbiAgICAgICBjdXN0b21FbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG5cclxuICAgICB9LHRoaXMpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICAgYnVpbGRcclxuICAgICAgd2ViQ29tcG9uZW5044KSYnVpbGTjgZfjgb7jgZnjgIJcclxuICAgICAg44Kz44Oz44K544OI44Op44Kv44K/44Gn5oyH5a6a44GX44GfQnVpbGRlcuOCkuWun+ihjOOBl+OBvuOBmeOAglxyXG5cclxuICAgKiovXHJcbiAgIGJ1aWxkKCl7XHJcbiAgICAgLy9jb25zb2xlLmxvZyhcImJ1aWxkOiBcIix0aGlzLmVsZW1lbnRzKTtcclxuICAgICBmb3IgKHZhciBlbGVtZW50TmFtZSBpbiB0aGlzLmVsZW1lbnRzKSB7XHJcbiAgICAgICAvL2NvbnNvbGUubG9nKFwiYnVpbGQgZWxlbWVudDogXCIgLCBlbGVtZW50TmFtZSwgdGhpcy5lbGVtZW50c1tlbGVtZW50TmFtZV0pO1xyXG5cclxuICAgICAgIHZhciByZWFjdENvbXBvbmVudEJ1aWxkZXIgPSBuZXcgdGhpcy5idWlsZGVyKHtlbGVtZW50czp0aGlzLmVsZW1lbnRzLGVsZW1lbnROYW1lczp0aGlzLmVsZW1lbnROYW1lc30pO1xyXG4gICAgICAgdmFyIF9jb21waWxlciA9IG5ldyBDb21waWxlcihbcmVhY3RDb21wb25lbnRCdWlsZGVyXSx7fSk7XHJcbiAgICAgICB2YXIgY29tcGlsZURhdGEgPV9jb21waWxlci5jb21waWxlKHRoaXMuZWxlbWVudHNbZWxlbWVudE5hbWVdLnRlbXBsYXRlWzBdKTtcclxuICAgICAgIHRoaXMuY29tcG9uZW50c1tlbGVtZW50TmFtZV09cmVhY3RDb21wb25lbnRCdWlsZGVyLmdldFJlc3VsdCh7J2VsZW1lbnROYW1lJzplbGVtZW50TmFtZSwnc2NyaXB0Jzp0aGlzLmVsZW1lbnRzW2VsZW1lbnROYW1lXS5zY3JpcHRbMF19KTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5jb21wb25lbnRzW2VsZW1lbnROYW1lXTpcIit0aGlzLmNvbXBvbmVudHNbZWxlbWVudE5hbWVdKTtcclxuICAgICB9O1xyXG4gICB9XHJcbiAgIC8qKlxyXG4gICAgICBnZXRSZXN1bHRcclxuICAgICAg55Sf5oiQ57WQ5p6c6L+U5Y2044Oh44K944OD44OJXHJcbiAgICAqKi9cclxuICAgZ2V0UmVzdWx0KGFyZykge1xyXG4gICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICBmb3IgKHZhciBlbGVtZW50TmFtZSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcclxuICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY29tcG9uZW50c1tlbGVtZW50TmFtZV0pO1xyXG4gICAgIH1cclxuICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJ1xcdCcpO1xyXG4gICB9XHJcbiB9XHJcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgMjAxNiAtIDIwMTZcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qIHYxLjAuMCAqL1xyXG5cclxuaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyLmJhYmVsLmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJDb21wb25lbnRQYXJzZXIgZXh0ZW5kcyBCdWlsZGVye1xyXG4gICAgLyoq44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAgICAgIOS+i++8mlxyXG4gICAgICAgbmV3IFdlYkNvbXBvbmVudFBhcnNlcih7IGJ1aWxkZXI6IFJlYWN0Q29tcG9uZW50QnVpbGRlciB9KTtcclxuXHJcbiAgICAqKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgdGhpcy5idWlsZGVyID1vcHRpb25zLmJ1aWxkZXI7Ly93ZWJDb21wb25lbnTjga5idWlsZOOBq+WIqeeUqOOBmeOCi+ODk+ODq+ODgOODvOOCkuWumue+qeOBl+OBvuOBmeOAglxyXG4gICAgICB0aGlzLmVsZW1lbnROYW1lcyA9W107XHJcbiAgICAgIHRoaXMuZWxlbWVudHMgPXt9O1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMgPXt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgYmVmb3JlQ29tcGlsZVxyXG4gICAgICAg5ZCEQnVpbGRlcuOCkuWRvOOBs+WHuuOBmeWJjeOBqzHlm57jgaDjgZHlrp/ooYzjgZXjgozjgb7jgZnjgIJcclxuICAgICAgIOOBk+OBruOCv+OCpOODn+ODs+OCsOOBp2h0bWzlhoXjga53ZWJDb21wb25lbnTlrprnvqnjgpLlj5blvpfjgZfjgabliKnnlKjlj6/og73jgarlvaLlvI/jgavlpInmj5vjgZfjgb7jgZnjgIJcclxuICAgICoqL1xyXG4gICAgYmVmb3JlQ29tcGlsZShzcmMpe1xyXG4gICAgICB2YXIgY3VzdG9tRWxlbWVudHMgPSBzcmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJlbGVtZW50XCIpO1xyXG4gICAgICBjdXN0b21FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGN1c3RvbUVsZW1lbnQpe1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IGN1c3RvbUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZW1wbGF0ZVwiKTtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gY3VzdG9tRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcclxuICAgICAgICBzY3JpcHQgPSBzY3JpcHQuY29uY2F0KGN1c3RvbUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ4LXNjcmlwdFwiKSk7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50TmFtZSA9IGN1c3RvbUVsZW1lbnQuYXR0cmlidXRlcy5uYW1lWzBdLmRhdGEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnROYW1lcy5wdXNoKGVsZW1lbnROYW1lKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2VsZW1lbnROYW1lXSA9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOnRlbXBsYXRlWzBdP3RlbXBsYXRlWzBdLmNsb25lRWxlbWVudCgpLmNoaWxkcmVuOltdLFxyXG4gICAgICAgICAgICBzY3JpcHQ6c2NyaXB0WzBdP3NjcmlwdFswXS5jbG9uZUVsZW1lbnQoKS5jaGlsZHJlbjpbXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZWxlbWVudDogXCIgLCBlbGVtZW50TmFtZSwgdGhpcy5lbGVtZW50c1tlbGVtZW50TmFtZV0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJlbGVtZW50OiBcIiAsIGVsZW1lbnROYW1lLCBzdHJpbmdpZnkodGhpcy5lbGVtZW50c1tlbGVtZW50TmFtZV0pKTtcclxuICAgICAgICBjdXN0b21FbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3VzdG9tRWxlbWVudCk7XHJcblxyXG4gICAgICB9LHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAgIGJ1aWxkXHJcbiAgICAgICB3ZWJDb21wb25lbnTjgpJidWlsZOOBl+OBvuOBmeOAglxyXG4gICAgICAg44Kz44Oz44K544OI44Op44Kv44K/44Gn5oyH5a6a44GX44GfQnVpbGRlcuOCkuWun+ihjOOBl+OBvuOBmeOAglxyXG5cclxuICAgICoqL1xyXG4gICAgYnVpbGQoKXtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImJ1aWxkOiBcIix0aGlzLmVsZW1lbnRzKTtcclxuICAgICAgZm9yICh2YXIgZWxlbWVudE5hbWUgaW4gdGhpcy5lbGVtZW50cykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJidWlsZCBlbGVtZW50OiBcIiAsIGVsZW1lbnROYW1lLCB0aGlzLmVsZW1lbnRzW2VsZW1lbnROYW1lXSk7XHJcblxyXG4gICAgICAgIHZhciByZWFjdENvbXBvbmVudEJ1aWxkZXIgPSBuZXcgdGhpcy5idWlsZGVyKHtlbGVtZW50czp0aGlzLmVsZW1lbnRzLGVsZW1lbnROYW1lczp0aGlzLmVsZW1lbnROYW1lc30pO1xyXG4gICAgICAgIHZhciBfY29tcGlsZXIgPSBuZXcgQ29tcGlsZXIoW3JlYWN0Q29tcG9uZW50QnVpbGRlcl0se30pO1xyXG4gICAgICAgIHZhciBjb21waWxlRGF0YSA9X2NvbXBpbGVyLmNvbXBpbGUodGhpcy5lbGVtZW50c1tlbGVtZW50TmFtZV0udGVtcGxhdGVbMF0pO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tlbGVtZW50TmFtZV09cmVhY3RDb21wb25lbnRCdWlsZGVyLmdldFJlc3VsdCh7J2VsZW1lbnROYW1lJzplbGVtZW50TmFtZSwnc2NyaXB0Jzp0aGlzLmVsZW1lbnRzW2VsZW1lbnROYW1lXS5zY3JpcHRbMF19KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwidGhpcy5jb21wb25lbnRzW2VsZW1lbnROYW1lXTpcIit0aGlzLmNvbXBvbmVudHNbZWxlbWVudE5hbWVdKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgZ2V0UmVzdWx0XHJcbiAgICAgICDnlJ/miJDntZDmnpzov5TljbTjg6Hjgr3jg4Pjg4lcclxuICAgICAqKi9cclxuICAgIGdldFJlc3VsdChhcmcpIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBlbGVtZW50TmFtZSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcclxuICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNvbXBvbmVudHNbZWxlbWVudE5hbWVdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJ1xcdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAyMDE2IC0gMjAxNlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogdjEuMC4wICovXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBpbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJ1aWxkZXJzID0gW10sIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMgPSBidWlsZGVycztcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgfVxyXG4gICAgICAvLyoqUHVibGljKiovL1xyXG4gICAgY3JlYXRlQXR0cmlidXRlKGF0dHJpYnV0ZXMsX2J1aWxkZXIpIHtcclxuICAgICAgdmFyIHJldCA9IFtdO1xyXG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGF0dHJrZXkpIHtcclxuICAgICAgICAvL2lmKGF0dHJpYnV0ZXNbYXR0cmtleV0ubGVuZ3RoPT0wKXtcclxuICAgICAgICAvLyAgbm9kZS5wdXNoKF9idWlsZGVyLmNyZWF0ZUF0dHJpYnV0ZV9rZXlvbmx5KGF0dHJrZXkpKTtcclxuICAgICAgICAvL30gZWxzZVxyXG4gICAgICAgIHZhciBub2RlID0gW107XHJcbiAgICAgICAgYXR0cmlidXRlc1thdHRya2V5XS5mb3JFYWNoKGZ1bmN0aW9uKGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgaWYoYXR0cmlidXRlLnR5cGUgPT0gJ3NjcmlwdCcpIHtcclxuICAgICAgICAgICAgICBub2RlLnB1c2goX2J1aWxkZXIuY3JlYXRlQXR0cmlidXRlX3NjcmlwdChhdHRya2V5LCBhdHRyaWJ1dGUpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbm9kZS5wdXNoKF9idWlsZGVyLmNyZWF0ZUF0dHJpYnV0ZV90ZXh0KGF0dHJrZXksIGF0dHJpYnV0ZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHJldC5wdXNoKF9idWlsZGVyLmNyZWF0ZUF0dHJpYnV0ZShhdHRya2V5LG5vZGUpKTtcclxuICAgICAgfSwgdGhpcyk7XHJcbiAgICAgIHJldHVybiByZXQuam9pbihfYnVpbGRlci5hdHRyaWJ1dGVEZWxpbWl0ZXI/X2J1aWxkZXIuYXR0cmlidXRlRGVsaW1pdGVyOicgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGFnRWxlbWVudChzcmMsc3RhdGUpIHtcclxuICAgICAgLy9zcmPjga7liqDlt6XjgpLooYzjgYZcclxuICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgIF9idWlsZGVyLmJlZm9yZUNyZWF0ZVRhZ0VsZW1lbnQoc3JjLCBzcmMuY2hpbGRyZW4/dHJ1ZTpmYWxzZSk7XHJcbiAgICAgICAgaWYoc3JjLmF0dHJpYnV0ZXMpX2J1aWxkZXIuYmVmb3JlQ3JlYXRlQXR0cmlidXRlKHNyYy5hdHRyaWJ1dGVzKTtcclxuICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICBpZiAoc3JjLmNoaWxkcmVuICYmIHNyYy5jaGlsZHJlbi5sZW5ndGg+MCkgey8vVGhpcyBpcyBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzcmMuYXR0cmlidXRlcz8nICcrdGhpcy5jcmVhdGVBdHRyaWJ1dGUoc3JjLmF0dHJpYnV0ZXMsX2J1aWxkZXIpOicnO1xyXG4gICAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5jcmVhdGVUYWdFbGVtZW50X29wZW4oc3JjLCBhdHRyaWJ1dGVzLCB0cnVlLHN0YXRlKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wLGxlbmd0aD1zcmMuY2hpbGRyZW4ubGVuZ3RoO2k8bGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICB2YXIgX3NyYyA9IHNyYy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlTm9kZXMoX3NyYyx7bm9kZXM6e2xlbmd0aDpsZW5ndGgscG9zOmkrMX0sZGVwdGg6c3RhdGUuZGVwdGh9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJzLmZvckVhY2goZnVuY3Rpb24oX2J1aWxkZXIpIHtcclxuICAgICAgICAgIF9idWlsZGVyLmFkZE5vZGUoX2J1aWxkZXIuY3JlYXRlVGFnRWxlbWVudF9jbG9zZShzcmMsc3RhdGUpKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7Ly9UaGlzIGlzIG5vdCBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzcmMuYXR0cmlidXRlcz8nICcrdGhpcy5jcmVhdGVBdHRyaWJ1dGUoc3JjLmF0dHJpYnV0ZXMsX2J1aWxkZXIpOicnO1xyXG4gICAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5jcmVhdGVUYWdFbGVtZW50X29wZW4oc3JjLCBhdHRyaWJ1dGVzLCBmYWxzZSxzdGF0ZSkpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2NyaXB0RWxlbWVudChzcmMsc3RhdGUpIHtcclxuICAgICAgLy9zcmPjga7liqDlt6XjgpLooYzjgYZcclxuICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgIF9idWlsZGVyLmJlZm9yZUNyZWF0ZVNjcmlwdEVsZW1lbnQoc3JjLCBzcmMuY2hpbGRyZW4/dHJ1ZTpmYWxzZSxzdGF0ZSk7XHJcbiAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgaWYgKHNyYy5jaGlsZHJlbiAmJiBzcmMuY2hpbGRyZW4ubGVuZ3RoPjApIHsvL1RoaXMgaXMgYSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJzLmZvckVhY2goZnVuY3Rpb24oX2J1aWxkZXIpIHtcclxuICAgICAgICAgIF9idWlsZGVyLmFkZE5vZGUoX2J1aWxkZXIuY3JlYXRlU2NyaXB0RWxlbWVudF9vcGVuKHNyYywgdHJ1ZSxzdGF0ZSkpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGk9MCxsZW5ndGg9c3JjLmNoaWxkcmVuLmxlbmd0aDtpPGxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgdmFyIF9zcmMgPSBzcmMuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVzKF9zcmMse25vZGVzOntsZW5ndGg6bGVuZ3RoLHBvczppKzF9LGRlcHRoOnN0YXRlLmRlcHRofSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9idWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uKF9idWlsZGVyKSB7XHJcbiAgICAgICAgICBfYnVpbGRlci5hZGROb2RlKF9idWlsZGVyLmNyZWF0ZVNjcmlwdEVsZW1lbnRfY2xvc2Uoc3JjLHN0YXRlKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgIH0gZWxzZSB7Ly9UaGlzIGlzIG5vdCBhIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5jcmVhdGVTY3JpcHRFbGVtZW50X29wZW4oc3JjLCBmYWxzZSxzdGF0ZSkpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTm9kZXMoc3JjLHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmRlcHRoKys7XHJcbiAgICAgIC8vc3Jj44Gu5Yqg5bel44KS6KGM44GGXHJcbiAgICAgIHRoaXMuX2J1aWxkZXJzLmZvckVhY2goZnVuY3Rpb24oX2J1aWxkZXIpIHtcclxuICAgICAgICBfYnVpbGRlci5iZWZvcmVDcmVhdGVOb2RlcyhzcmMsc3RhdGUpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgIGlmIChzcmMudHlwZSA9PSAndGFnJykgdGhpcy5jcmVhdGVUYWdFbGVtZW50KHNyYyxzdGF0ZSk7XHJcbiAgICAgIGlmIChzcmMudHlwZSA9PSAndGV4dCcpXHJcbiAgICAgICAgdGhpcy5fYnVpbGRlcnMuZm9yRWFjaChmdW5jdGlvbihfYnVpbGRlcikge1xyXG4gICAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5jcmVhdGVUZXh0RWxlbWVudChzcmMsc3RhdGUpKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgaWYgKHNyYy50eXBlID09ICdzY3JpcHQnKXRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudChzcmMsc3RhdGUpO1xyXG4gICAgICBpZiAoc3JjLnR5cGUgPT0gJ2NvbW1lbnQnKVxyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJzLmZvckVhY2goZnVuY3Rpb24oX2J1aWxkZXIpIHtcclxuICAgICAgICAgIF9idWlsZGVyLmFkZE5vZGUoX2J1aWxkZXIuY3JlYXRlQ29tbWVudEVsZW1lbnQoc3JjLHN0YXRlKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgIHN0YXRlLmRlcHRoLS07XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlKHNyYykge1xyXG4gICAgICAvL3NyY+OBruWKoOW3peOCkuihjOOBhlxyXG4gICAgICB0aGlzLl9idWlsZGVycy5mb3JFYWNoKGZ1bmN0aW9uKF9idWlsZGVyKSB7XHJcbiAgICAgICAgX2J1aWxkZXIuYWRkTm9kZShfYnVpbGRlci5iZWZvcmVDb21waWxlKHNyYykpO1xyXG4gICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgIHZhciBzdGF0ZSA9IHtub2Rlczp7bGVuZ3RoOjEscG9zOjF9LGRlcHRoOjB9O1xyXG4gICAgICBpZihzcmMgaW5zdGFuY2VvZiBBcnJheSl7XHJcbiAgICAgICAgc3JjLmZvckVhY2goZnVuY3Rpb24oc3JjKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlcyhzcmMsc3RhdGUpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlcyhzcmMsc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iLCJcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAyMDE2IC0gMjAxNlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyogdjEuMC4wICovXHJcblxyXG4vL2h0dHA6Ly95dXRhcG9uLmhhdGVuYWJsb2cuY29tL2VudHJ5LzIwMTUvMDIvMDkvMDkwMDAwXHJcblxyXG5pbXBvcnQgQ1NTT00gZnJvbSAnY3Nzb20nXHJcbmltcG9ydCBDb21waWxlciBmcm9tICcuL2h0bWxjb21waWxlci5iYWJlbC5qcydcclxuaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgRGVidWdCdWlsZGVyIGZyb20gJy4vRGVidWdCdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgSHRtbEJ1aWxkZXIgZnJvbSAnLi9IdG1sQnVpbGRlci5iYWJlbC5qcydcclxuaW1wb3J0IENTU0J1aWxkZXIgZnJvbSAnLi9DU1NCdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgSW5jcmVtZW50YWxEb21CdWlsZGVyIGZyb20gJy4vSW5jcmVtZW50YWxEb21CdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgUmVhY3RDb21wb25lbnRCdWlsZGVyIGZyb20gJy4vUmVhY3RDb21wb25lbnRCdWlsZGVyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgV2ViQ29tcG9uZW50UGFyc2VyIGZyb20gJy4vV2ViQ29tcG9uZW50UGFyc2VyLmJhYmVsLmpzJ1xyXG5pbXBvcnQgUmVhY3RSb290Q29tcG9uZW50QnVpbGRlciBmcm9tICcuL1JlYWN0Um9vdENvbXBvbmVudEJ1aWxkZXIuYmFiZWwuanMnXHJcblxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbmdsb2JhbC5DU1NPTSA9IENTU09NO1xyXG5nbG9iYWwuQnVpbGRlciA9IEJ1aWxkZXI7XHJcbmdsb2JhbC5EZWJ1Z0J1aWxkZXIgPSBEZWJ1Z0J1aWxkZXI7XHJcbmdsb2JhbC5IdG1sQnVpbGRlciA9IEh0bWxCdWlsZGVyO1xyXG5nbG9iYWwuQ1NTQnVpbGRlciA9IENTU0J1aWxkZXI7XHJcbmdsb2JhbC5Db21waWxlciA9IENvbXBpbGVyO1xyXG5nbG9iYWwuSW5jcmVtZW50YWxEb21CdWlsZGVyID0gSW5jcmVtZW50YWxEb21CdWlsZGVyO1xyXG5nbG9iYWwuUmVhY3RDb21wb25lbnRCdWlsZGVyID0gUmVhY3RDb21wb25lbnRCdWlsZGVyO1xyXG5nbG9iYWwuV2ViQ29tcG9uZW50UGFyc2VyID0gV2ViQ29tcG9uZW50UGFyc2VyO1xyXG5nbG9iYWwuUmVhY3RSb290Q29tcG9uZW50QnVpbGRlciA9IFJlYWN0Um9vdENvbXBvbmVudEJ1aWxkZXI7XHJcbn1lbHNle1xyXG53aW5kb3cuQ1NTT00gPSBDU1NPTTtcclxud2luZG93LkJ1aWxkZXIgPSBCdWlsZGVyO1xyXG53aW5kb3cuRGVidWdCdWlsZGVyID0gRGVidWdCdWlsZGVyO1xyXG53aW5kb3cuSHRtbEJ1aWxkZXIgPSBIdG1sQnVpbGRlcjtcclxud2luZG93LkNTU0J1aWxkZXIgPSBDU1NCdWlsZGVyO1xyXG53aW5kb3cuQ29tcGlsZXIgPSBDb21waWxlcjtcclxud2luZG93LkluY3JlbWVudGFsRG9tQnVpbGRlciA9IEluY3JlbWVudGFsRG9tQnVpbGRlcjtcclxud2luZG93LlJlYWN0Q29tcG9uZW50QnVpbGRlciA9IFJlYWN0Q29tcG9uZW50QnVpbGRlcjtcclxud2luZG93LldlYkNvbXBvbmVudFBhcnNlciA9IFdlYkNvbXBvbmVudFBhcnNlcjtcclxud2luZG93LlJlYWN0Um9vdENvbXBvbmVudEJ1aWxkZXIgPSBSZWFjdFJvb3RDb21wb25lbnRCdWlsZGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=