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

    mkAttribute_text(compiler, key, attribute, node) {}
    mkAttribute_script(compiler, key, attribute, node) {}
    mkTagElement_open(compiler, src, isContainer) {}
    mkTagElement_close(compiler, src) {}
    mkTextElement(compiler, src) {}
    mkScriptElement_open(compiler, src, isContainer) {}
    mkScriptElement_close(compiler, src) {}
  }

  class HtmlBuilder extends Builder{
      mkAttribute_text(compiler, key, attribute, node) {
        node.push(`${key}='${attribute.data||''}'`);
      }
      mkTagElement_open(compiler, src, isContainer) {
        this.nodes.push(`<${src.name}${src.attributes?' '+compiler.mkAttribute(src.attributes,this):''} ${isContainer?'':'/'}>`);
      }
      mkTagElement_close(compiler, src) {
        this.nodes.push(`</${src.name}>`);
      }
      mkTextElement(compiler, src) {
        this.nodes.push(`${src.data}`);
      }
  }

  class Compiler {
    constructor(builders = [], options) {
        var self = this;
        this._builders = builders;
        this._options = options;
      }
      //**Public**//
    mkAttribute(attributes,_builder) {
      var node = [];
      Object.keys(attributes).forEach(function(attrkey) {
        attributes[attrkey].forEach(function(attribute) {
          if(attribute.type == 'script') {
            //this._builders.forEach(function(_builder) {
              _builder.mkAttribute_script(this, attrkey, attribute, node);
            //}, this);
          } else {
            //this._builders.forEach(function(_builder) {
              _builder.mkAttribute_text(this, attrkey, attribute, node);
            //}, this);
          }
        }, this);
      }, this);
      return node.join(' ');
    }
    mkTagElement(src) {
      if (src.children) {
        this._builders.forEach(function(_builder) {
          _builder.mkTagElement_open(this, src, true);
        }, this);
        src.children.forEach(function(_src) {
          this.mkNodes(_src);
        }, this);

        this._builders.forEach(function(_builder) {
          _builder.mkTagElement_close(this, src);
        }, this);

      } else {
        this._builders.forEach(function(_builder) {
          _builder.mkTagElement_open(this, src, false);
        }, this);
      }
    }
    mkScriptElement(src) {
      if (src.children) {
        this._builders.forEach(function(_builder) {
          _builder.mkScriptElement_open(this, src, true);
        }, this);
        src.children.forEach(function(_src) {
          this.mkNodes(_src);
        }, this);
        this._builders.forEach(function(_builder) {
          _builder.mkScriptElement_close(this, src);
        }, this);
      } else {
        this._builders.forEach(function(_builder) {
          _builder.mkScriptElement_open(this, src, false);
        }, this);
      }
    }
    mkNodes(src) {
      if (src.type == 'tag') this.mkTagElement(src);
      if (src.type == 'text')
        this._builders.forEach(function(_builder) {
          _builder.mkTextElement(this,src);
        }, this);
      if (src.type == 'script') this.mkScriptElement(src);
      return;
    }
    compile(src) {
      return this.mkNodes(src);
    }

  }

window.Builder = Builder; // 追加
window.HtmlBuilder = HtmlBuilder; // 追加
window.Compiler = Compiler; // 追加
