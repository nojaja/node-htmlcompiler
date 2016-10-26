(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

(function () {

  var exports;
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    exports = module.exports;
  } else {
    exports = {};
    if (!self.Tautologistics) {
      self.Tautologistics = {};
    }
    if (self.Tautologistics.NodeHtmlCompiler) {
      return;
    }
    self.Tautologistics.NodeHtmlCompiler = exports;
  }

  var Builder = function () {
    function Builder(options) {
      _classCallCheck(this, Builder);

      var self = this;
      this._options = options;
      this.nodes = [];
    }

    _createClass(Builder, [{
      key: 'getNodes',
      value: function getNodes(arg) {
        return this.nodes.join(arg || '\n');
      }
    }, {
      key: 'mkAttribute_text',
      value: function mkAttribute_text(key, value, attribute) {
        attribute.push(key + '=\'' + value + '\'');
      }
    }, {
      key: 'mkAttribute_script',
      value: function mkAttribute_script(key, value, attribute) {}
    }, {
      key: 'mkTagElement_open',
      value: function mkTagElement_open(src, isContainer) {
        this.nodes.push('<' + src.name + (src.attributes ? ' ' + this.mkAttribute(src.attributes) : '') + ' ' + (isContainer ? '' : '/') + '>');
      }
    }, {
      key: 'mkTagElement_close',
      value: function mkTagElement_close(src) {
        this.nodes.push('</' + src.name + '>');
      }
    }, {
      key: 'mkTextElement',
      value: function mkTextElement(src) {
        this.nodes.push('' + src.data);
      }
    }, {
      key: 'mkScriptElement_open',
      value: function mkScriptElement_open(src, isContainer) {}
    }, {
      key: 'mkScriptElement_close',
      value: function mkScriptElement_close(src) {}
    }]);

    return Builder;
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
      key: 'mkAttribute',
      value: function mkAttribute(attributes) {
        var attribute = [];
        Object.keys(attributes).forEach(function (attrkey) {
          if (attributes[attrkey].dataType == 'script') {
            this._builders.forEach(function (_builder) {
              _builder.mkAttribute_script(attrkey, attributes[attrkey].value || '', attribute);
            }, this);
          } else {
            this._builders.forEach(function (_builder) {
              _builder.mkAttribute_text(attrkey, attributes[attrkey].value || '', attribute);
            }, this);
          }
        }, this);
        return attribute.join(' ');
      }
    }, {
      key: 'mkTagElement',
      value: function mkTagElement(src) {
        if (src.children) {
          this._builders.forEach(function (_builder) {
            _builder.mkTagElement_open(src, true);
          }, this);
          src.children.forEach(function (_src) {
            this.mkNodes(_src);
          }, this);

          this._builders.forEach(function (_builder) {
            _builder.mkTagElement_close(src);
          }, this);
        } else {
          this._builders.forEach(function (_builder) {
            _builder.mkTagElement_open(src, false);
          }, this);
        }
      }
    }, {
      key: 'mkScriptElement',
      value: function mkScriptElement(src) {
        if (src.children) {
          this._builders.forEach(function (_builder) {
            _builder.mkScriptElement_open(src, true);
          }, this);
          src.children.forEach(function (_src) {
            this.mkNodes(_src);
          }, this);
          this._builders.forEach(function (_builder) {
            _builder.mkScriptElement_close(src);
          }, this);
        } else {
          this._builders.forEach(function (_builder) {
            _builder.mkScriptElement_open(src, false);
          }, this);
        }
      }
    }, {
      key: 'mkNodes',
      value: function mkNodes(src) {
        if (src.type == 'tag') this.mkTagElement(src);
        if (src.type == 'text') this._builders.forEach(function (_builder) {
          _builder.mkTextElement(src);
        }, this);
        if (src.type == 'script') this.mkScriptElement(src);
        return;
      }
    }, {
      key: 'compile',
      value: function compile(src) {
        return this.mkNodes(src);
      }
    }]);

    return Compiler;
  }();

  exports.Compiler = Compiler;
  exports.Builder = Builder;
})();

},{}]},{},[1]);
