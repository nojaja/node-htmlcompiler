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
    addNode(node) {
      this.nodes.push(node);
    }

    beforeCreateAttribute(attributes) {}
    createAttribute_text(key, attribute) {}
    createAttribute_script(key, attribute) {}
    beforeCreateTagElement(src, isContainer) {}
    createTagElement_open(src, attributes, isContainer) {}
    createTagElement_close(src) {}
    beforeCreateNodes(src) {}
    createTextElement(src) {}
    createCommentElement(src) {}
    beforeCreateScriptElement(src, isContainer) {}
    createScriptElement_open(src, isContainer) {}
    createScriptElement_close(src) {}
    beforeCompile(src) {}
  }

  class HtmlBuilder extends Builder{
      createAttribute_text(key, attribute) {
        return(`${key}='${attribute.data||''}'`);
      }
      createTagElement_open(src, attributes, isContainer) {
        return(`<${src.name}${attributes} ${isContainer?'':'/'}>`);
      }
      createTagElement_close(src) {
        return(`</${src.name}>`);
      }
      createTextElement(src) {
        return(`${src.data}`);
      }
  }

  class Compiler {
    constructor(builders = [], options) {
        var self = this;
        this._builders = builders;
        this._options = options;
      }
      //**Public**//
    createAttribute(attributes,_builder) {
      var node = [];
      Object.keys(attributes).forEach(function(attrkey) {
        attributes[attrkey].forEach(function(attribute) {
          if(attribute.type == 'script') {
              node.push(_builder.createAttribute_script(attrkey, attribute));
          } else {
              node.push(_builder.createAttribute_text(attrkey, attribute));
          }
        }, this);
      }, this);
      return node.join(' ');
    }
    
    createTagElement(src) {
      //srcの加工を行う
      this._builders.forEach(function(_builder) {
        _builder.beforeCreateTagElement(src, src.children?true:false);
        if(src.attributes)_builder.beforeCreateAttribute(src.attributes);
      }, this);
      
      if (src.children) {//This is a container element
        this._builders.forEach(function(_builder) {
          var attributes = src.attributes?' '+this.createAttribute(src.attributes,_builder):'';
          _builder.addNode(_builder.createTagElement_open(src, attributes, true));
        }, this);
        
        src.children.forEach(function(_src) {
          this.createNodes(_src);
        }, this);

        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createTagElement_close(src));
        }, this);

      } else {//This is not a container element
        this._builders.forEach(function(_builder) {
          var attributes = src.attributes?' '+this.createAttribute(src.attributes,_builder):'';
          _builder.addNode(_builder.createTagElement_open(src, attributes, false));
        }, this);
      }
    }
    
    createScriptElement(src) {
      //srcの加工を行う
      this._builders.forEach(function(_builder) {
        _builder.beforeCreateScriptElement(src, src.children?true:false);
      }, this);
      
      if (src.children) {//This is a container element
        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createScriptElement_open(src, true));
        }, this);
        src.children.forEach(function(_src) {
          this.createNodes(_src);
        }, this);
        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createScriptElement_close(src));
        }, this);
      } else {//This is not a container element
        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createScriptElement_open(src, false));
        }, this);
      }
    }
    
    createNodes(src) {
      //srcの加工を行う
      this._builders.forEach(function(_builder) {
        _builder.beforeCreateNodes(src);
      }, this);
      
      if (src.type == 'tag') this.createTagElement(src);
      if (src.type == 'text')
        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createTextElement(src));
        }, this);
      if (src.type == 'script')this.createScriptElement(src);
      if (src.type == 'comment')
        this._builders.forEach(function(_builder) {
          _builder.addNode(_builder.createCommentElement(src));
        }, this);
      return;
    }
    
    compile(src) {
      //srcの加工を行う
      this._builders.forEach(function(_builder) {
        _builder.beforeCompile(src);
      }, this);
      return this.createNodes(src);
    }

  }

window.Builder = Builder;
window.HtmlBuilder = HtmlBuilder;
window.Compiler = Compiler;
