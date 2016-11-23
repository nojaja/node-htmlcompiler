(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    global.BuilderBabel = mod.exports;
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
      key: 'addNode',
      value: function addNode(node) {
        this.nodes.push(node);
      }
    }, {
      key: 'beforeCreateAttribute',
      value: function beforeCreateAttribute(attributes) {}
    }, {
      key: 'createAttribute_text',
      value: function createAttribute_text(key, attribute) {}
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute) {}
    }, {
      key: 'beforeCreateTagElement',
      value: function beforeCreateTagElement(src, isContainer) {}
    }, {
      key: 'createTagElement_open',
      value: function createTagElement_open(src, attributes, isContainer) {}
    }, {
      key: 'createTagElement_close',
      value: function createTagElement_close(src) {}
    }, {
      key: 'beforeCreateNodes',
      value: function beforeCreateNodes(src) {}
    }, {
      key: 'createTextElement',
      value: function createTextElement(src) {}
    }, {
      key: 'createCommentElement',
      value: function createCommentElement(src) {}
    }, {
      key: 'beforeCreateScriptElement',
      value: function beforeCreateScriptElement(src, isContainer) {}
    }, {
      key: 'createScriptElement_open',
      value: function createScriptElement_open(src, isContainer) {}
    }, {
      key: 'createScriptElement_close',
      value: function createScriptElement_close(src) {}
    }, {
      key: 'beforeCompile',
      value: function beforeCompile(src) {}
    }]);

    return Builder;
  }();

  exports.default = Builder;
});

},{}],2:[function(require,module,exports){
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
      key: 'createAttribute_text',
      value: function createAttribute_text(key, attribute) {
        if (key == 'style') {
          return '' + (attribute.data || '');
        }
      }
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute) {
        if (key == 'style') {
          return '' + (attribute.data || '');
        }
      }
    }, {
      key: 'createTagElement_open',
      value: function createTagElement_open(src, attributes, isContainer) {
        if (!src.attributes) return;
        var id = '';
        if (src.attributes['id']) {
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

},{"./Builder.babel.js":1}],3:[function(require,module,exports){
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
      key: 'createAttribute_text',
      value: function createAttribute_text(key, attribute) {
        return key + '=\'' + (attribute.data || '') + '\'';
      }
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute) {
        return key + '=\'{' + (attribute.data || '') + '}\'';
      }
    }, {
      key: 'createTagElement_open',
      value: function createTagElement_open(src, attributes, isContainer) {
        return '<' + src.name + attributes + ' ' + (isContainer ? '' : '/') + '>';
      }
    }, {
      key: 'createTagElement_close',
      value: function createTagElement_close(src) {
        return '</' + src.name + '>';
      }
    }, {
      key: 'createTextElement',
      value: function createTextElement(src) {
        return '' + src.data;
      }
    }, {
      key: 'createScriptElement_open',
      value: function createScriptElement_open(src, isContainer) {
        if (!isContainer) return '{' + src.data + '}';
      }
    }]);

    return HtmlBuilder;
  }(_BuilderBabel2.default);

  exports.default = HtmlBuilder;
});

},{"./Builder.babel.js":1}],4:[function(require,module,exports){
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
      key: 'createAttribute_text',
      value: function createAttribute_text(key, attribute) {
        return key + '=\\\'' + attribute.data + '\\\'';
      }
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute) {
        return key + '=\'+' + attribute.data + '+\'';
      }
    }, {
      key: 'createTagElement_open',
      value: function createTagElement_open(src, attributes, isContainer) {
        return (isContainer ? 'elementOpen' : 'elementVoid') + '(\'' + src.name + '\', \'\',\'' + attributes + '\'); ';
      }
    }, {
      key: 'createTagElement_close',
      value: function createTagElement_close(src) {
        return 'elementClose(\'' + src.name + '\'); ';
      }
    }, {
      key: 'createTextElement',
      value: function createTextElement(src) {
        return 'text(\'' + src.data.replace(/\n/g, "").replace(/\'/g, "\\\'") + '\'); ';
      }
    }, {
      key: 'createCommentElement',
      value: function createCommentElement(src) {
        return '/* ' + src.data.replace(/\n/g, "").replace(/\'/g, "\\\'") + ' */';
      }
    }, {
      key: 'createScriptElement_open',
      value: function createScriptElement_open(src, isContainer) {
        if (src.name == 'if') {
          return 'if( ' + src.data + '){ ';
        }
        if (src.name == 'each') {
          return 'each( ' + src.data + '){ ';
        }
        return 'text( ' + src.data + ') ';
      }
    }, {
      key: 'createScriptElement_close',
      value: function createScriptElement_close(src) {
        return '});';
      }
    }]);

    return IncrementalDomBuilder;
  }(_BuilderBabel2.default);

  exports.default = IncrementalDomBuilder;
});

},{"./Builder.babel.js":1}],5:[function(require,module,exports){
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
        var node = [];
        Object.keys(attributes).forEach(function (attrkey) {
          attributes[attrkey].forEach(function (attribute) {
            if (attribute.type == 'script') {
              node.push(_builder.createAttribute_script(attrkey, attribute));
            } else {
              node.push(_builder.createAttribute_text(attrkey, attribute));
            }
          }, this);
        }, this);
        return node.join(_builder.attributeDelimiter ? _builder.attributeDelimiter : ' ');
      }
    }, {
      key: 'createTagElement',
      value: function createTagElement(src) {
        //srcの加工を行う
        this._builders.forEach(function (_builder) {
          _builder.beforeCreateTagElement(src, src.children ? true : false);
          if (src.attributes) _builder.beforeCreateAttribute(src.attributes);
        }, this);

        if (src.children && src.children.length > 0) {
          //This is a container element
          this._builders.forEach(function (_builder) {
            var attributes = src.attributes ? (_builder.attributeDelimiter ? _builder.attributeDelimiter : ' ') + this.createAttribute(src.attributes, _builder) : '';
            _builder.addNode(_builder.createTagElement_open(src, attributes, true));
          }, this);

          src.children.forEach(function (_src) {
            this.createNodes(_src);
          }, this);

          this._builders.forEach(function (_builder) {
            _builder.addNode(_builder.createTagElement_close(src));
          }, this);
        } else {
          //This is not a container element
          this._builders.forEach(function (_builder) {
            var attributes = src.attributes ? ' ' + this.createAttribute(src.attributes, _builder) : '';
            _builder.addNode(_builder.createTagElement_open(src, attributes, false));
          }, this);
        }
      }
    }, {
      key: 'createScriptElement',
      value: function createScriptElement(src) {
        //srcの加工を行う
        this._builders.forEach(function (_builder) {
          _builder.beforeCreateScriptElement(src, src.children ? true : false);
        }, this);

        if (src.children && src.children.length > 0) {
          //This is a container element
          this._builders.forEach(function (_builder) {
            _builder.addNode(_builder.createScriptElement_open(src, true));
          }, this);
          src.children.forEach(function (_src) {
            this.createNodes(_src);
          }, this);
          this._builders.forEach(function (_builder) {
            _builder.addNode(_builder.createScriptElement_close(src));
          }, this);
        } else {
          //This is not a container element
          this._builders.forEach(function (_builder) {
            _builder.addNode(_builder.createScriptElement_open(src, false));
          }, this);
        }
      }
    }, {
      key: 'createNodes',
      value: function createNodes(src) {
        //srcの加工を行う
        this._builders.forEach(function (_builder) {
          _builder.beforeCreateNodes(src);
        }, this);

        if (src.type == 'tag') this.createTagElement(src);
        if (src.type == 'text') this._builders.forEach(function (_builder) {
          _builder.addNode(_builder.createTextElement(src));
        }, this);
        if (src.type == 'script') this.createScriptElement(src);
        if (src.type == 'comment') this._builders.forEach(function (_builder) {
          _builder.addNode(_builder.createCommentElement(src));
        }, this);
        return;
      }
    }, {
      key: 'compile',
      value: function compile(src) {
        //srcの加工を行う
        this._builders.forEach(function (_builder) {
          _builder.beforeCompile(src);
        }, this);
        return this.createNodes(src);
      }
    }]);

    return Compiler;
  }();

  exports.default = Compiler;
});

},{}],6:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./htmlcompiler.babel.js', './Builder.babel.js', './HtmlBuilder.babel.js', './CSSBuilder.babel.js', './IncrementalDomBuilder.babel.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./htmlcompiler.babel.js'), require('./Builder.babel.js'), require('./HtmlBuilder.babel.js'), require('./CSSBuilder.babel.js'), require('./IncrementalDomBuilder.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.htmlcompilerBabel, global.BuilderBabel, global.HtmlBuilderBabel, global.CSSBuilderBabel, global.IncrementalDomBuilderBabel);
    global.indexBabel = mod.exports;
  }
})(this, function (_htmlcompilerBabel, _BuilderBabel, _HtmlBuilderBabel, _CSSBuilderBabel, _IncrementalDomBuilderBabel) {
  'use strict';

  var _htmlcompilerBabel2 = _interopRequireDefault(_htmlcompilerBabel);

  var _BuilderBabel2 = _interopRequireDefault(_BuilderBabel);

  var _HtmlBuilderBabel2 = _interopRequireDefault(_HtmlBuilderBabel);

  var _CSSBuilderBabel2 = _interopRequireDefault(_CSSBuilderBabel);

  var _IncrementalDomBuilderBabel2 = _interopRequireDefault(_IncrementalDomBuilderBabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  window.Builder = _BuilderBabel2.default;
  /***********************************************
  Copyright 2016 - 2016 
  ***********************************************/
  /* v1.0.0 */

  //http://yutapon.hatenablog.com/entry/2015/02/09/090000

  window.HtmlBuilder = _HtmlBuilderBabel2.default;
  window.CSSBuilder = _CSSBuilderBabel2.default;
  window.Compiler = _htmlcompilerBabel2.default;
  window.IncrementalDomBuilder = _IncrementalDomBuilderBabel2.default;
});

},{"./Builder.babel.js":1,"./CSSBuilder.babel.js":2,"./HtmlBuilder.babel.js":3,"./IncrementalDomBuilder.babel.js":4,"./htmlcompiler.babel.js":5}]},{},[6]);
