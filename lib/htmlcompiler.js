(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
      value: function createAttribute_text(key, attribute, state) {
        return key + '=\'' + (attribute.data || '') + '\'';
      }
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute, state) {
        return key + '=\'{' + (attribute.data || '') + '}\'';
      }
    }, {
      key: 'createTagElement_open',
      value: function createTagElement_open(src, attributes, isContainer, state) {
        return Array(state.depth).join('\t') + '<' + src.name + attributes + ' ' + (isContainer ? '' : '/') + '>';
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

},{"./Builder.babel.js":1}],5:[function(require,module,exports){
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

},{"./Builder.babel.js":1}],6:[function(require,module,exports){
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
      key: 'toUpperFirstLetter',
      value: function toUpperFirstLetter(str) {
        return str.split('-').map(function (block) {
          return block.charAt(0).toUpperCase() + block.substring(1);
        }).join('');
      }
    }, {
      key: 'createAttribute_text',
      value: function createAttribute_text(key, attribute, state) {
        return '\'' + key + '\':\'' + attribute.data + '\'';
      }
    }, {
      key: 'createAttribute_script',
      value: function createAttribute_script(key, attribute, state) {
        return '\'' + key + '\':' + attribute.data;
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
        return Array(state.depth).join('\t') + 'React.createElement(' + tagName + ',' + (attributes ? '{' + attributes + '}' : 'null') + (isContainer ? ',' : state.nodes.length > state.nodes.pos ? '),' : ')');
      }
    }, {
      key: 'createTagElement_close',
      value: function createTagElement_close(src, state) {
        return Array(state.depth).join('\t') + ')' + (state.nodes.length > state.nodes.pos ? ',' : '');
      }
    }, {
      key: 'createTextElement',
      value: function createTextElement(src, state) {
        return Array(state.depth).join('\t') + '\'' + src.data.replace(/\n/g, "").replace(/\'/g, "\\\'") + '\'' + (state.nodes.length > state.nodes.pos ? ',' : '');
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
        return '' + Array(state.depth).join('\t') + src.data + (state.nodes.length > state.nodes.pos ? ',' : '');
      }
    }, {
      key: 'createScriptElement_close',
      value: function createScriptElement_close(src, state) {
        return Array(state.depth).join('\t') + '});';
      }
    }, {
      key: 'getResult',
      value: function getResult(arg) {
        //windowオブジェクトにメソッドを追加するコードを生成
        //Generate code to add a method to the window object
        return '\nwindow[\'' + this.toUpperFirstLetter(arg.elementName) + '\'] = React.createClass({\n  render: function() {\n    return ' + this.getNodes().trim() + '\n  }\n' + (arg.script ? ',' + arg.script.data : '') + '\n});';
      }
    }]);

    return ReactComponentBuilder;
  }(_BuilderBabel2.default);

  exports.default = ReactComponentBuilder;
});

},{"./Builder.babel.js":1}],7:[function(require,module,exports){
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
          if (customElement.children) customElement.children.forEach(function (childElement) {
            customElement.removeChild(childElement);
          });
          //body配下に追加
          var newElement = customElement.createElement('tag');
          newElement.name = 'div';
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

},{"./Builder.babel.js":1}],8:[function(require,module,exports){
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

},{"./Builder.babel.js":1}],9:[function(require,module,exports){
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
            console.log("forEach", src);
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

},{}],10:[function(require,module,exports){
(function (global){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./htmlcompiler.babel.js', './Builder.babel.js', './DebugBuilder.babel.js', './HtmlBuilder.babel.js', './CSSBuilder.babel.js', './IncrementalDomBuilder.babel.js', './ReactComponentBuilder.babel.js', './WebComponentParser.babel.js', './ReactRootComponentBuilder.babel.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./htmlcompiler.babel.js'), require('./Builder.babel.js'), require('./DebugBuilder.babel.js'), require('./HtmlBuilder.babel.js'), require('./CSSBuilder.babel.js'), require('./IncrementalDomBuilder.babel.js'), require('./ReactComponentBuilder.babel.js'), require('./WebComponentParser.babel.js'), require('./ReactRootComponentBuilder.babel.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.htmlcompilerBabel, global.BuilderBabel, global.DebugBuilderBabel, global.HtmlBuilderBabel, global.CSSBuilderBabel, global.IncrementalDomBuilderBabel, global.ReactComponentBuilderBabel, global.WebComponentParserBabel, global.ReactRootComponentBuilderBabel);
    global.indexBabel = mod.exports;
  }
})(this, function (_htmlcompilerBabel, _BuilderBabel, _DebugBuilderBabel, _HtmlBuilderBabel, _CSSBuilderBabel, _IncrementalDomBuilderBabel, _ReactComponentBuilderBabel, _WebComponentParserBabel, _ReactRootComponentBuilderBabel) {
  'use strict';

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

  if (typeof window === 'undefined') {
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
  /***********************************************
  Copyright 2016 - 2016
  ***********************************************/
  /* v1.0.0 */

  //http://yutapon.hatenablog.com/entry/2015/02/09/090000
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Builder.babel.js":1,"./CSSBuilder.babel.js":2,"./DebugBuilder.babel.js":3,"./HtmlBuilder.babel.js":4,"./IncrementalDomBuilder.babel.js":5,"./ReactComponentBuilder.babel.js":6,"./ReactRootComponentBuilder.babel.js":7,"./WebComponentParser.babel.js":8,"./htmlcompiler.babel.js":9}]},{},[10]);
