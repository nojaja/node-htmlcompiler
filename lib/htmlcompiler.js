(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function(root) {
	'use strict';

	var exports;
	if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
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

},{}],2:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.BuilderBabel = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Builder = function () {

        /**コンストラクタ**/
        function Builder(options) {
            _classCallCheck(this, Builder);

            var self = this;
            this._options = options; //生成オプション
            this.nodes = []; //生成物格納フィールド
            this.attributeDelimiter = " "; //各ノード間の区切り文字
        }

        _createClass(Builder, [{
            key: "getNodes",
            value: function getNodes(arg) {
                return this.nodes.join(arg || '\n');
            }
        }, {
            key: "addNode",
            value: function addNode(node) {
                this.nodes.push(node);
            }
        }, {
            key: "getResult",
            value: function getResult(arg) {
                return "" + this.getNodes();
            }
        }, {
            key: "beforeCreateAttribute",
            value: function beforeCreateAttribute(attributes) {}
        }, {
            key: "createAttribute_text",
            value: function createAttribute_text(key, attribute) {}
        }, {
            key: "createAttribute",
            value: function createAttribute(key, attributes) {}
        }, {
            key: "createAttribute_script",
            value: function createAttribute_script(key, attribute) {}
        }, {
            key: "beforeCreateTagElement",
            value: function beforeCreateTagElement(src, isContainer, state) {}
        }, {
            key: "createTagElement_open",
            value: function createTagElement_open(src, attributes, isContainer, state) {}
        }, {
            key: "createTagElement_close",
            value: function createTagElement_close(src, state) {}
        }, {
            key: "beforeCreateNodes",
            value: function beforeCreateNodes(src, state) {}
        }, {
            key: "createTextElement",
            value: function createTextElement(src, state) {}
        }, {
            key: "createCommentElement",
            value: function createCommentElement(src, state) {}
        }, {
            key: "beforeCreateScriptElement",
            value: function beforeCreateScriptElement(src, isContainer, state) {}
        }, {
            key: "createScriptElement_open",
            value: function createScriptElement_open(src, isContainer, state) {}
        }, {
            key: "createScriptElement_close",
            value: function createScriptElement_close(src, state) {}
        }, {
            key: "beforeCompile",
            value: function beforeCompile(src) {}
        }]);

        return Builder;
    }();

    exports.default = Builder;
});

},{}],3:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Builder.babel.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Builder.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BuilderBabel);
    global.CSSBuilderBabel = mod.exports;
  }
})(this, function (exports, _BuilderBabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _BuilderBabel2 = _interopRequireDefault(_BuilderBabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var CSSBuilder = function (_Builder) {
    _inherits(CSSBuilder, _Builder);

    function CSSBuilder() {
      _classCallCheck(this, CSSBuilder);

      return _possibleConstructorReturn(this, (CSSBuilder.__proto__ || Object.getPrototypeOf(CSSBuilder)).apply(this, arguments));
    }

    _createClass(CSSBuilder, [{
      key: 'createAttribute',
      value: function createAttribute(key, attributes) {
        if (key == 'style') {
          return '' + attributes.join('');
        }
      }
    }, {
      key: 'createAttribute_text',
      value: function createAttribute_text(key, attribute, state) {
        if (key == 'style') {
          return '' + (attribute.data || ''); //CSSの要素　例:height:30px;
        }
      }
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute, state) {
        if (key == 'style') {
          return '' + (attribute.data || '');
        }
      }
    }, {
      key: 'createTagElement_open',
      value: function createTagElement_open(src, attributes, isContainer, state) {
        if (!src.attributes) return;
        var id = '';
        if (src.attributes['id']) {
          //id指定がある場合のみCSS化します。
          src.attributes['id'].forEach(function (_src) {
            if (_src.type == 'text') id = '' + id + _src.data;
            if (_src.type == 'script' && _src.langName == 'singleMustache') id = id + '{' + _src.data + '}';
          }, this);
        }
        if (id) {
          this.nodes.push('\n        .' + id + ' {\n          ' + (' ' + attributes) + '\n        }');
          delete src.attributes['style'];
        }
      }
    }]);

    return CSSBuilder;
  }(_BuilderBabel2.default);

  exports.default = CSSBuilder;
  ;
});

},{"./Builder.babel.js":2}],4:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Builder.babel.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Builder.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BuilderBabel);
    global.DebugBuilderBabel = mod.exports;
  }
})(this, function (exports, _BuilderBabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _BuilderBabel2 = _interopRequireDefault(_BuilderBabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DebugBuilder = function (_Builder) {
    _inherits(DebugBuilder, _Builder);

    function DebugBuilder() {
      _classCallCheck(this, DebugBuilder);

      return _possibleConstructorReturn(this, (DebugBuilder.__proto__ || Object.getPrototypeOf(DebugBuilder)).apply(this, arguments));
    }

    _createClass(DebugBuilder, [{
      key: 'beforeCompile',
      value: function beforeCompile(src) {
        console.log('DebugBuilder', src);
      }
    }]);

    return DebugBuilder;
  }(_BuilderBabel2.default);

  exports.default = DebugBuilder;
  ;
});

},{"./Builder.babel.js":2}],5:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Builder.babel.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Builder.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BuilderBabel);
    global.HtmlBuilderBabel = mod.exports;
  }
})(this, function (exports, _BuilderBabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _BuilderBabel2 = _interopRequireDefault(_BuilderBabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var HtmlBuilder = function (_Builder) {
    _inherits(HtmlBuilder, _Builder);

    function HtmlBuilder() {
      _classCallCheck(this, HtmlBuilder);

      return _possibleConstructorReturn(this, (HtmlBuilder.__proto__ || Object.getPrototypeOf(HtmlBuilder)).apply(this, arguments));
    }

    _createClass(HtmlBuilder, [{
      key: 'createAttribute',
      value: function createAttribute(key, attributes) {
        if (attributes.length == 0) return '' + key;
        return key + '=\'' + attributes.join('') + '\'';
      }
    }, {
      key: 'createAttribute_text',
      value: function createAttribute_text(key, attribute, state) {
        return '' + (attribute.data || '');
      }
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute, state) {
        return '{' + (attribute.data || '') + '}';
      }
    }, {
      key: 'createTagElement_open',
      value: function createTagElement_open(src, attributes, isContainer, state) {
        if (src.name == 'script') {
          return Array(state.depth).join('\t') + '<' + src.name + attributes + '>' + (isContainer ? '' : '</' + src.name + '>');
        }
        return Array(state.depth).join('\t') + '<' + src.name + attributes + (isContainer ? '' : ' /') + '>';
      }
    }, {
      key: 'createTagElement_close',
      value: function createTagElement_close(src, state) {
        return Array(state.depth).join('\t') + '</' + src.name + '>';
      }
    }, {
      key: 'createTextElement',
      value: function createTextElement(src, state) {
        return '' + Array(state.depth).join('\t') + src.data;
      }
    }, {
      key: 'createScriptElement_open',
      value: function createScriptElement_open(src, isContainer, state) {
        if (!isContainer) return Array(state.depth).join('\t') + '{' + src.data + '}';
      }
    }]);

    return HtmlBuilder;
  }(_BuilderBabel2.default);

  exports.default = HtmlBuilder;
});

},{"./Builder.babel.js":2}],6:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Builder.babel.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Builder.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BuilderBabel);
    global.IncrementalDomBuilderBabel = mod.exports;
  }
})(this, function (exports, _BuilderBabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _BuilderBabel2 = _interopRequireDefault(_BuilderBabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var IncrementalDomBuilder = function (_Builder) {
    _inherits(IncrementalDomBuilder, _Builder);

    function IncrementalDomBuilder() {
      _classCallCheck(this, IncrementalDomBuilder);

      return _possibleConstructorReturn(this, (IncrementalDomBuilder.__proto__ || Object.getPrototypeOf(IncrementalDomBuilder)).apply(this, arguments));
    }

    _createClass(IncrementalDomBuilder, [{
      key: 'createAttribute',
      value: function createAttribute(key, attributes) {
        return '' + attributes.join(' ');
      }
    }, {
      key: 'createAttribute_text',
      value: function createAttribute_text(key, attribute, state) {
        return key + '=\\\'' + attribute.data + '\\\'';
      }
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute, state) {
        return key + '=\'+' + attribute.data + '+\'';
      }
    }, {
      key: 'createTagElement_open',
      value: function createTagElement_open(src, attributes, isContainer, state) {
        return '' + Array(state.depth).join('\t') + (isContainer ? 'elementOpen' : 'elementVoid') + '(\'' + src.name + '\', \'\',\'' + attributes + '\');// ' + state.nodes.length + '/' + state.nodes.pos;
      }
    }, {
      key: 'createTagElement_close',
      value: function createTagElement_close(src, state) {
        return Array(state.depth).join('\t') + 'elementClose(\'' + src.name + '\');// ' + state.nodes.length + '/' + state.nodes.pos + ' ';
      }
    }, {
      key: 'createTextElement',
      value: function createTextElement(src, state) {
        return Array(state.depth).join('\t') + 'text(\'' + src.data.replace(/\n/g, "").replace(/\'/g, "\\\'") + '\'); ';
      }
    }, {
      key: 'createCommentElement',
      value: function createCommentElement(src, state) {
        return Array(state.depth).join('\t') + '/* ' + src.data.replace(/\n/g, "").replace(/\'/g, "\\\'") + ' */';
      }
    }, {
      key: 'createScriptElement_open',
      value: function createScriptElement_open(src, isContainer, state) {
        if (src.name == 'if') {
          return Array(state.depth).join('\t') + 'if( ' + src.data + '){ ';
        }
        if (src.name == 'each') {
          return Array(state.depth).join('\t') + 'each( ' + src.data + '){ ';
        }
        return Array(state.depth).join('\t') + 'text( ' + src.data + ') ';
      }
    }, {
      key: 'createScriptElement_close',
      value: function createScriptElement_close(src, state) {
        return Array(state.depth).join('\t') + '});';
      }
    }]);

    return IncrementalDomBuilder;
  }(_BuilderBabel2.default);

  exports.default = IncrementalDomBuilder;
});

},{"./Builder.babel.js":2}],7:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Builder.babel.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Builder.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BuilderBabel);
    global.ReactComponentBuilderBabel = mod.exports;
  }
})(this, function (exports, _BuilderBabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _BuilderBabel2 = _interopRequireDefault(_BuilderBabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ReactComponentBuilder = function (_Builder) {
    _inherits(ReactComponentBuilder, _Builder);

    /**コンストラクタ **/
    function ReactComponentBuilder(options) {
      _classCallCheck(this, ReactComponentBuilder);

      var _this = _possibleConstructorReturn(this, (ReactComponentBuilder.__proto__ || Object.getPrototypeOf(ReactComponentBuilder)).call(this, options));

      var self = _this;
      _this.elements = options.elements || {};
      _this.elementNames = options.elementNames || []; //webcomponentの一覧
      _this.attributeDelimiter = ",";
      return _this;
    }

    _createClass(ReactComponentBuilder, [{
      key: 'cssToJson',
      value: function cssToJson(css) {
        var style = new CSSOM.CSSStyleDeclaration();
        style.cssText = css;
        var ret = {};
        for (var i = 0; i < style.length; i++) {
          ret[style[i].replace(/\-/g, '')] = style[style[i]];
        }
        return JSON.stringify(ret);
      }
    }, {
      key: 'toUpperFirstLetter',
      value: function toUpperFirstLetter(str) {
        return str.split('-').map(function (block) {
          return block.charAt(0).toUpperCase() + block.substring(1);
        }).join('');
      }
    }, {
      key: 'createAttribute',
      value: function createAttribute(key, attributes) {
        if (attributes.length == 0) return '\'' + key + '\':true';
        key = key == "class" ? "className" : key;
        return '\'' + key + '\':' + attributes.join('+');
      }
    }, {
      key: 'createAttribute_text',
      value: function createAttribute_text(key, attribute, state) {
        if (key == "style") {
          return '' + this.cssToJson(attribute.data);
        } else return '\'' + attribute.data.replace(/\'/g, '\\\'') + '\'';
      }
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute, state) {
        return '' + attribute.data;
      }
    }, {
      key: 'nexttype',
      value: function nexttype(_src) {
        if (_src.nextSibling == null) return false;
        if (_src.nextSibling.type != "comment") return true;
        return this.nexttype(_src.nextSibling);
      }
    }, {
      key: 'createTagElement_open',
      value: function createTagElement_open(src, attributes, isContainer, state) {
        //tagかwebcomponentか判断する
        // Judge whether it is tag or webcomponent
        //タグ名にハイフンが含まれていたらwebcomponent
        // webcomponent if the tag name contains a '-'
        //タグ名の1文字目が大文字ならwebcomponent
        //elementNamesに登録されていたらwebcomponent
        // webcomponent if registered in elementNames
        var tagName = ~src.name.indexOf('-') || src.name.charAt(0) == src.name.charAt(0).toUpperCase() || this.elementNames.indexOf(src.name.toLowerCase()) >= 0 ? this.toUpperFirstLetter(src.name) : '\'' + src.name + '\'';
        return Array(state.depth).join('\t') + 'React.createElement(' + tagName + ',' + (attributes ? '{' + attributes + '}' : 'null') + (isContainer ? ',' : this.nexttype(src) ? '),' : ')');
      }
    }, {
      key: 'createTagElement_close',
      value: function createTagElement_close(src, state) {
        return Array(state.depth).join('\t') + ')' + (this.nexttype(src) ? ',' : '');
      }
    }, {
      key: 'createTextElement',
      value: function createTextElement(src, state) {
        return Array(state.depth).join('\t') + '\'' + src.data.replace(/[\n\r]/g, "").replace(/\'/g, "\\\'") + '\'' + (state.nodes.length > state.nodes.pos ? ',' : '');
      }
    }, {
      key: 'createCommentElement',
      value: function createCommentElement(src, state) {
        return Array(state.depth).join('\t') + '/* ' + src.data.replace(/\n/g, "").replace(/\'/g, "\\\'") + ' */';
      }
    }, {
      key: 'createScriptElement_open',
      value: function createScriptElement_open(src, isContainer, state) {

        if (src.name == 'map') {
          return Array(state.depth).join('\t') + '(' + src.data + ').map(function(element, index, array) { return [ ';
        }
        if (src.name == 'if') {
          return Array(state.depth).join('\t') + '( ' + src.data + ')?[ ';
        }
        if (src.name == 'each') {
          return Array(state.depth).join('\t') + 'each( ' + src.data + '){ ';
        }
        return '' + Array(state.depth).join('\t') + src.data + (state.nodes.length > state.nodes.pos ? ',' : '');
      }
    }, {
      key: 'createScriptElement_close',
      value: function createScriptElement_close(src, state) {

        if (src.name == 'map') {
          return Array(state.depth).join('\t') + ']}),';
        }
        if (src.name == 'if') {
          return Array(state.depth).join('\t') + ']:[],';
        }

        return Array(state.depth).join('\t') + '});';
      }
    }, {
      key: 'getResult',
      value: function getResult(arg) {
        //windowオブジェクトにメソッドを追加するコードを生成
        //Generate code to add a method to the window object
        return '\nclass ' + this.toUpperFirstLetter(arg.elementName) + ' extends React.Component{\n  render(){\n    return ' + this.getNodes().trim() + '\n  }\n' + (arg.script ? '' + arg.script.data : '') + '\n};';
      }
    }]);

    return ReactComponentBuilder;
  }(_BuilderBabel2.default);

  exports.default = ReactComponentBuilder;
});

},{"./Builder.babel.js":2}],8:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Builder.babel.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Builder.babel.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BuilderBabel);
    global.ReactRootComponentBuilderBabel = mod.exports;
  }
})(this, function (exports, _BuilderBabel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _BuilderBabel2 = _interopRequireDefault(_BuilderBabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ReactRootComponentBuilder = function (_Builder) {
    _inherits(ReactRootComponentBuilder, _Builder);

    /**コンストラクタ
     例：
      new ReactRootParser({ builder: ReactComponentBuilder });
     **/
    function ReactRootComponentBuilder(options) {
      _classCallCheck(this, ReactRootComponentBuilder);

      var _this = _possibleConstructorReturn(this, (ReactRootComponentBuilder.__proto__ || Object.getPrototypeOf(ReactRootComponentBuilder)).call(this, options));

      var self = _this;
      _this.builder = options.builder; //webComponentのbuildに利用するビルダーを定義します。
      _this.elementNames = [];
      _this.elements = {};
      _this.components = {};
      return _this;
    }

    /**
       beforeCompile
       各Builderを呼び出す前に1回だけ実行されます。
       このタイミングでhtml内のwebComponent定義を取得して利用可能な形式に変換します。
    **/


    _createClass(ReactRootComponentBuilder, [{
      key: "beforeCompile",
      value: function beforeCompile(src) {
        var customElements = src.getElementsByTagName("body");
        customElements.forEach(function (customElement) {
          var elementName = "app";
          this.elementNames.push(elementName);
          this.elements[elementName] = {
            template: customElement ? customElement.cloneElement().children : [],
            script: []
          };
          //body配下の削除
          customElement.removeChildAll();
          //body配下に追加
          var newElement = customElement.createElement('div');
          newElement.attributes = { 'id': [{
              "type": "text",
              "data": "app"
            }] };
          customElement.appendChild(newElement);
        }, this);
      }
    }, {
      key: "build",
      value: function build() {
        //console.log("build: ",this.elements);
        for (var elementName in this.elements) {
          //console.log("build element: " , elementName, this.elements[elementName]);

          var reactComponentBuilder = new this.builder({ elements: this.elements, elementNames: this.elementNames });
          var _compiler = new Compiler([reactComponentBuilder], {});
          var compileData = _compiler.compile(this.elements[elementName].template[0]);
          this.components[elementName] = reactComponentBuilder.getResult({ 'elementName': elementName, 'script': this.elements[elementName].script[0] });
          console.log("this.components[elementName]:" + this.components[elementName]);
        };
      }
    }, {
      key: "getResult",
      value: function getResult(arg) {
        var result = [];
        for (var elementName in this.components) {
          result.push(this.components[elementName]);
        }
        return result.join('\t');
      }
    }]);

    return ReactRootComponentBuilder;
  }(_BuilderBabel2.default);

  exports.default = ReactRootComponentBuilder;
});

},{"./Builder.babel.js":2}],9:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Builder.babel.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Builder.babel.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BuilderBabel);
    global.WebComponentParserBabel = mod.exports;
  }
})(this, function (exports, _BuilderBabel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _BuilderBabel2 = _interopRequireDefault(_BuilderBabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var WebComponentParser = function (_Builder) {
    _inherits(WebComponentParser, _Builder);

    /**コンストラクタ
      例：
       new WebComponentParser({ builder: ReactComponentBuilder });
      **/
    function WebComponentParser(options) {
      _classCallCheck(this, WebComponentParser);

      var _this = _possibleConstructorReturn(this, (WebComponentParser.__proto__ || Object.getPrototypeOf(WebComponentParser)).call(this, options));

      var self = _this;
      _this.builder = options.builder; //webComponentのbuildに利用するビルダーを定義します。
      _this.elementNames = [];
      _this.elements = {};
      _this.components = {};
      return _this;
    }

    /**
       beforeCompile
       各Builderを呼び出す前に1回だけ実行されます。
       このタイミングでhtml内のwebComponent定義を取得して利用可能な形式に変換します。
    **/


    _createClass(WebComponentParser, [{
      key: "beforeCompile",
      value: function beforeCompile(src) {
        var customElements = src.getElementsByTagName("element");
        customElements.forEach(function (customElement) {
          var template = customElement.getElementsByTagName("template");
          var script = customElement.getElementsByTagName("script");
          script = script.concat(customElement.getElementsByTagName("x-script"));

          var elementName = customElement.attributes.name[0].data.toLowerCase();
          this.elementNames.push(elementName);
          this.elements[elementName] = {
            template: template[0] ? template[0].cloneElement().children : [],
            script: script[0] ? script[0].cloneElement().children : []
          };
          //console.log("element: " , elementName, this.elements[elementName]);
          //console.log("element: " , elementName, stringify(this.elements[elementName]));
          customElement.parentNode.removeChild(customElement);
        }, this);
      }
    }, {
      key: "build",
      value: function build() {
        //console.log("build: ",this.elements);
        for (var elementName in this.elements) {
          //console.log("build element: " , elementName, this.elements[elementName]);

          var reactComponentBuilder = new this.builder({ elements: this.elements, elementNames: this.elementNames });
          var _compiler = new Compiler([reactComponentBuilder], {});
          var compileData = _compiler.compile(this.elements[elementName].template[0]);
          this.components[elementName] = reactComponentBuilder.getResult({ 'elementName': elementName, 'script': this.elements[elementName].script[0] });
          console.log("this.components[elementName]:" + this.components[elementName]);
        };
      }
    }, {
      key: "getResult",
      value: function getResult(arg) {
        var result = [];
        for (var elementName in this.components) {
          result.push(this.components[elementName]);
        }
        return result.join('\t');
      }
    }]);

    return WebComponentParser;
  }(_BuilderBabel2.default);

  exports.default = WebComponentParser;
});

},{"./Builder.babel.js":2}],10:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.htmlcompilerBabel = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Compiler = function () {
    function Compiler() {
      var builders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments[1];

      _classCallCheck(this, Compiler);

      var self = this;
      this._builders = builders;
      this._options = options;
    }
    //**Public**//


    _createClass(Compiler, [{
      key: 'createAttribute',
      value: function createAttribute(attributes, _builder) {
        var ret = [];
        Object.keys(attributes).forEach(function (attrkey) {
          //if(attributes[attrkey].length==0){
          //  node.push(_builder.createAttribute_keyonly(attrkey));
          //} else
          var node = [];
          attributes[attrkey].forEach(function (attribute) {
            if (attribute.type == 'script') {
              node.push(_builder.createAttribute_script(attrkey, attribute));
            } else {
              node.push(_builder.createAttribute_text(attrkey, attribute));
            }
          }, this);
          ret.push(_builder.createAttribute(attrkey, node));
        }, this);
        return ret.join(_builder.attributeDelimiter ? _builder.attributeDelimiter : ' ');
      }
    }, {
      key: 'createTagElement',
      value: function createTagElement(src, state) {
        //srcの加工を行う
        this._builders.forEach(function (_builder) {
          _builder.beforeCreateTagElement(src, src.children ? true : false);
          if (src.attributes) _builder.beforeCreateAttribute(src.attributes);
        }, this);

        if (src.children && src.children.length > 0) {
          //This is a container element
          this._builders.forEach(function (_builder) {
            var attributes = src.attributes ? ' ' + this.createAttribute(src.attributes, _builder) : '';
            _builder.addNode(_builder.createTagElement_open(src, attributes, true, state));
          }, this);

          for (var i = 0, length = src.children.length; i < length; i++) {
            var _src = src.children[i];
            this.createNodes(_src, { nodes: { length: length, pos: i + 1 }, depth: state.depth });
          }

          this._builders.forEach(function (_builder) {
            _builder.addNode(_builder.createTagElement_close(src, state));
          }, this);
        } else {
          //This is not a container element
          this._builders.forEach(function (_builder) {
            var attributes = src.attributes ? ' ' + this.createAttribute(src.attributes, _builder) : '';
            _builder.addNode(_builder.createTagElement_open(src, attributes, false, state));
          }, this);
        }
      }
    }, {
      key: 'createScriptElement',
      value: function createScriptElement(src, state) {
        //srcの加工を行う
        this._builders.forEach(function (_builder) {
          _builder.beforeCreateScriptElement(src, src.children ? true : false, state);
        }, this);

        if (src.children && src.children.length > 0) {
          //This is a container element
          this._builders.forEach(function (_builder) {
            _builder.addNode(_builder.createScriptElement_open(src, true, state));
          }, this);

          for (var i = 0, length = src.children.length; i < length; i++) {
            var _src = src.children[i];
            this.createNodes(_src, { nodes: { length: length, pos: i + 1 }, depth: state.depth });
          }

          this._builders.forEach(function (_builder) {
            _builder.addNode(_builder.createScriptElement_close(src, state));
          }, this);
        } else {
          //This is not a container element
          this._builders.forEach(function (_builder) {
            _builder.addNode(_builder.createScriptElement_open(src, false, state));
          }, this);
        }
      }
    }, {
      key: 'createNodes',
      value: function createNodes(src, state) {
        state.depth++;
        //srcの加工を行う
        this._builders.forEach(function (_builder) {
          _builder.beforeCreateNodes(src, state);
        }, this);

        if (src.type == 'tag') this.createTagElement(src, state);
        if (src.type == 'text') this._builders.forEach(function (_builder) {
          _builder.addNode(_builder.createTextElement(src, state));
        }, this);
        if (src.type == 'script') this.createScriptElement(src, state);
        if (src.type == 'comment') this._builders.forEach(function (_builder) {
          _builder.addNode(_builder.createCommentElement(src, state));
        }, this);
        state.depth--;
        return state;
      }
    }, {
      key: 'compile',
      value: function compile(src) {
        //srcの加工を行う
        this._builders.forEach(function (_builder) {
          _builder.addNode(_builder.beforeCompile(src));
        }, this);

        var state = { nodes: { length: 1, pos: 1 }, depth: 0 };
        if (src instanceof Array) {
          src.forEach(function (src) {
            return this.createNodes(src, state);
          }, this);
        } else {
          return this.createNodes(src, state);
        }
      }
    }]);

    return Compiler;
  }();

  exports.default = Compiler;
});

},{}],11:[function(require,module,exports){
(function (global){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['cssom', './htmlcompiler.babel.js', './Builder.babel.js', './DebugBuilder.babel.js', './HtmlBuilder.babel.js', './CSSBuilder.babel.js', './IncrementalDomBuilder.babel.js', './ReactComponentBuilder.babel.js', './WebComponentParser.babel.js', './ReactRootComponentBuilder.babel.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('cssom'), require('./htmlcompiler.babel.js'), require('./Builder.babel.js'), require('./DebugBuilder.babel.js'), require('./HtmlBuilder.babel.js'), require('./CSSBuilder.babel.js'), require('./IncrementalDomBuilder.babel.js'), require('./ReactComponentBuilder.babel.js'), require('./WebComponentParser.babel.js'), require('./ReactRootComponentBuilder.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.cssom, global.htmlcompilerBabel, global.BuilderBabel, global.DebugBuilderBabel, global.HtmlBuilderBabel, global.CSSBuilderBabel, global.IncrementalDomBuilderBabel, global.ReactComponentBuilderBabel, global.WebComponentParserBabel, global.ReactRootComponentBuilderBabel);
    global.indexBabel = mod.exports;
  }
})(this, function (_cssom, _htmlcompilerBabel, _BuilderBabel, _DebugBuilderBabel, _HtmlBuilderBabel, _CSSBuilderBabel, _IncrementalDomBuilderBabel, _ReactComponentBuilderBabel, _WebComponentParserBabel, _ReactRootComponentBuilderBabel) {
  'use strict';

  var _cssom2 = _interopRequireDefault(_cssom);

  var _htmlcompilerBabel2 = _interopRequireDefault(_htmlcompilerBabel);

  var _BuilderBabel2 = _interopRequireDefault(_BuilderBabel);

  var _DebugBuilderBabel2 = _interopRequireDefault(_DebugBuilderBabel);

  var _HtmlBuilderBabel2 = _interopRequireDefault(_HtmlBuilderBabel);

  var _CSSBuilderBabel2 = _interopRequireDefault(_CSSBuilderBabel);

  var _IncrementalDomBuilderBabel2 = _interopRequireDefault(_IncrementalDomBuilderBabel);

  var _ReactComponentBuilderBabel2 = _interopRequireDefault(_ReactComponentBuilderBabel);

  var _WebComponentParserBabel2 = _interopRequireDefault(_WebComponentParserBabel);

  var _ReactRootComponentBuilderBabel2 = _interopRequireDefault(_ReactRootComponentBuilderBabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /***********************************************
  Copyright 2016 - 2016
  ***********************************************/
  /* v1.0.0 */

  //http://yutapon.hatenablog.com/entry/2015/02/09/090000

  if (typeof window === 'undefined') {
    global.CSSOM = _cssom2.default;
    global.Builder = _BuilderBabel2.default;
    global.DebugBuilder = _DebugBuilderBabel2.default;
    global.HtmlBuilder = _HtmlBuilderBabel2.default;
    global.CSSBuilder = _CSSBuilderBabel2.default;
    global.Compiler = _htmlcompilerBabel2.default;
    global.IncrementalDomBuilder = _IncrementalDomBuilderBabel2.default;
    global.ReactComponentBuilder = _ReactComponentBuilderBabel2.default;
    global.WebComponentParser = _WebComponentParserBabel2.default;
    global.ReactRootComponentBuilder = _ReactRootComponentBuilderBabel2.default;
  } else {
    window.CSSOM = _cssom2.default;
    window.Builder = _BuilderBabel2.default;
    window.DebugBuilder = _DebugBuilderBabel2.default;
    window.HtmlBuilder = _HtmlBuilderBabel2.default;
    window.CSSBuilder = _CSSBuilderBabel2.default;
    window.Compiler = _htmlcompilerBabel2.default;
    window.IncrementalDomBuilder = _IncrementalDomBuilderBabel2.default;
    window.ReactComponentBuilder = _ReactComponentBuilderBabel2.default;
    window.WebComponentParser = _WebComponentParserBabel2.default;
    window.ReactRootComponentBuilder = _ReactRootComponentBuilderBabel2.default;
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Builder.babel.js":2,"./CSSBuilder.babel.js":3,"./DebugBuilder.babel.js":4,"./HtmlBuilder.babel.js":5,"./IncrementalDomBuilder.babel.js":6,"./ReactComponentBuilder.babel.js":7,"./ReactRootComponentBuilder.babel.js":8,"./WebComponentParser.babel.js":9,"./htmlcompiler.babel.js":10,"cssom":1}]},{},[11]);
