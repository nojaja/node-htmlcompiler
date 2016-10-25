(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
    if (!this.Tautologistics) {
      this.Tautologistics = {};
    }
    if (this.Tautologistics.NodeHtmlCompiler) {
      return;
    }
    this.Tautologistics.NodeHtmlCompiler = exports;
  }

  function Compiler(options) {
    var self = this;
    this._options = options;
  }

  //**Public**//
  Compiler.prototype.mkAttribute_text = function Compiler$mkAttribute_text(key, value, attribute) {
    attribute.push(key + '=\'' + value + '\'');
  };
  Compiler.prototype.mkAttribute_script = function Compiler$mkAttribute_script(key, value, attribute) {};

  Compiler.prototype.mkAttribute = function Compiler$mkAttribute(attributes) {
    var attribute = [];
    Object.keys(attributes).forEach(function (attrkey) {
      if (attributes[attrkey].dataType == 'script') {
        this.mkAttribute_script(attrkey, attributes[attrkey].value || '', attribute);
      } else {
        this.mkAttribute_text(attrkey, attributes[attrkey].value || '', attribute);
      }
    }, this);
    return attribute.join(' ');
  };

  Compiler.prototype.mkTagElement_open = function Compiler$mkTagElement_open(src, nodes, isContainer) {
    nodes.push('<' + src.name + (src.attributes ? ' ' + this.mkAttribute(src.attributes) : '') + ' ' + (isContainer ? '' : '/') + '>');
  };
  Compiler.prototype.mkTagElement_close = function Compiler$mkTagElement_close(src, nodes) {
    nodes.push('</' + src.name + '>');
  };
  Compiler.prototype.mkTextElement = function Compiler$mkTextElement(src, nodes) {
    nodes.push('' + src.data);
  };

  Compiler.prototype.mkTagElement = function Compiler$mkTagElement(src, nodes) {
    if (src.children) {
      this.mkTagElement_open(src, nodes, true);
      src.children.forEach(function (_src) {
        this.mkNodes(_src, nodes);
      }, this);
      this.mkTagElement_close(src, nodes);
    } else {
      this.mkTagElement_open(src, nodes, false);
    }
  };

  Compiler.prototype.mkScriptElement_open = function Compiler$mkScriptElement_open(src, nodes, isContainer) {};
  Compiler.prototype.mkScriptElement_close = function Compiler$mkScriptElement_close(src, nodes) {};
  Compiler.prototype.mkScriptElement = function Compiler$mkScriptElement(src, nodes) {
    if (src.children) {
      this.mkScriptElement_open(src, nodes, true);
      src.children.forEach(function (_src) {
        this.mkNodes(_src, nodes);
      }, this);
      this.mkScriptElement_close(src, nodes);
    } else {
      this.mkScriptElement_open(src, nodes, false);
    }
  };

  Compiler.prototype.mkNodes = function Compiler$mknodes(src, nodes) {
    if (src.type == 'tag') this.mkTagElement(src, nodes);
    if (src.type == 'text') this.mkTextElement(src, nodes);
    if (src.type == 'script') this.mkScriptElement(src, nodes);
    return nodes;
  };

  Compiler.prototype.compile = function Compiler$compile(src) {
    return this.mkNodes(src, []).join('\n');
  };

  exports.Compiler = Compiler;
})();

},{}]},{},[1]);
