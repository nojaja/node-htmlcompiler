/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

  class Builder {
    constructor(options) {
      var self = this;
      this._options = options;
      this.nodes = [];
    }
    getNodes(arg) {
      return this.nodes.join(arg || '\n');
    }

    mkAttribute_text(key, value, attribute) {
      attribute.push(`${key}='${value}'`);
    }
    mkAttribute_script(key, value, attribute) {}
    mkTagElement_open(src, isContainer) {
      this.nodes.push(`<${src.name}${src.attributes?' '+this.mkAttribute(src.attributes):''} ${isContainer?'':'/'}>`);
    }
    mkTagElement_close(src) {
      this.nodes.push(`</${src.name}>`);
    }
    mkTextElement(src) {
      this.nodes.push(`${src.data}`);
    }
    mkScriptElement_open(src, isContainer) {}
    mkScriptElement_close(src) {}
  }

  class Compiler {
    constructor(builders = [], options) {
        var self = this;
        this._builders = builders;
        this._options = options;
      }
      //**Public**//
    mkAttribute(attributes) {
      var attribute = [];
      Object.keys(attributes).forEach(function(attrkey) {
        if (attributes[attrkey].dataType == 'script') {
          this._builders.forEach(function(_builder) {
            _builder.mkAttribute_script(attrkey, attributes[attrkey].value || '', attribute);
          }, this);
        } else {
          this._builders.forEach(function(_builder) {
            _builder.mkAttribute_text(attrkey, attributes[attrkey].value || '', attribute);
          }, this);
        }
      }, this);
      return attribute.join(' ');
    }
    mkTagElement(src) {
      if (src.children) {
        this._builders.forEach(function(_builder) {
          _builder.mkTagElement_open(src, true);
        }, this);
        src.children.forEach(function(_src) {
          this.mkNodes(_src);
        }, this);

        this._builders.forEach(function(_builder) {
          _builder.mkTagElement_close(src);
        }, this);

      } else {
        this._builders.forEach(function(_builder) {
          _builder.mkTagElement_open(src, false);
        }, this);
      }
    }
    mkScriptElement(src) {
      if (src.children) {
        this._builders.forEach(function(_builder) {
          _builder.mkScriptElement_open(src, true);
        }, this);
        src.children.forEach(function(_src) {
          this.mkNodes(_src);
        }, this);
        this._builders.forEach(function(_builder) {
          _builder.mkScriptElement_close(src);
        }, this);
      } else {
        this._builders.forEach(function(_builder) {
          _builder.mkScriptElement_open(src, false);
        }, this);
      }
    }
    mkNodes(src) {
      if (src.type == 'tag') this.mkTagElement(src);
      if (src.type == 'text')
        this._builders.forEach(function(_builder) {
          _builder.mkTextElement(src);
        }, this);
      if (src.type == 'script') this.mkScriptElement(src);
      return;
    }
    compile(src) {
      return this.mkNodes(src);
    }

  }
