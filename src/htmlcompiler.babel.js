/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

(function () {

  var exports;
  if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
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
  
  function Builder (options) {
      var self = this;
      this._options = options;
      this.nodes=[];
  }
    //**Public**//
  Builder.prototype.getNodes = function Builder$getNodes (arg){
      return this.nodes.join(arg||'\n');
  };
  Builder.prototype.mkAttribute_text = function Builder$mkAttribute_text (key,value,attribute){
      attribute.push(`${key}='${value}'`);
  };
  Builder.prototype.mkAttribute_script = function Builder$mkAttribute_script (key,value,attribute){
  };
  Builder.prototype.mkTagElement_open = function Builder$mkTagElement_open (src,isContainer){
      this.nodes.push(`<${src.name}${src.attributes?' '+this.mkAttribute(src.attributes):''} ${isContainer?'':'/'}>`);
  }
  Builder.prototype.mkTagElement_close = function Builder$mkTagElement_close (src){
      this.nodes.push(`</${src.name}>`);
  }
  Builder.prototype.mkTextElement = function Builder$mkTextElement (src){
      this.nodes.push(`${src.data}`);
  };
  Builder.prototype.mkScriptElement_open = function Builder$mkScriptElement_open (src,isContainer){
  };
  Builder.prototype.mkScriptElement_close = function Builder$mkScriptElement_close (src){
  };
  
  function Compiler (builders=[],options) {
        var self = this;
      this._builders = builders;
      this._options = options;
  }
  
  //**Public**//
  Compiler.prototype.mkAttribute = function Compiler$mkAttribute (attributes){
    var attribute=[];
    Object.keys(attributes).forEach(function(attrkey) {
      if(attributes[attrkey].dataType=='script'){
        this._builders.forEach(function(_builder) {
          _builder.mkAttribute_script(attrkey,attributes[attrkey].value||'',attribute);
        },this);
      }else{
        this._builders.forEach(function(_builder) {
          _builder.mkAttribute_text(attrkey,attributes[attrkey].value||'',attribute);
        },this);
      }
    },this);
    return attribute.join(' ');
  };
  
  
  
  Compiler.prototype.mkTagElement = function Compiler$mkTagElement (src){
    if(src.children) {
      this._builders.forEach(function(_builder) {
        _builder.mkTagElement_open(src,true);
      },this);
      src.children.forEach(function(_src) {
        this.mkNodes(_src);
      },this);
      
      this._builders.forEach(function(_builder) {
        _builder.mkTagElement_close(src);
      },this);
      
    }else{
      this._builders.forEach(function(_builder) {
        _builder.mkTagElement_open(src,false);
      },this);
    }
  };
  
  Compiler.prototype.mkScriptElement = function Compiler$mkScriptElement (src){
    if(src.children) {
      this._builders.forEach(function(_builder) {
        _builder.mkScriptElement_open(src,true);
      },this);
      src.children.forEach(function(_src) {
        this.mkNodes(_src);
      },this);
      this._builders.forEach(function(_builder) {
        _builder.mkScriptElement_close(src);
      },this);
    }else{
      this._builders.forEach(function(_builder) {
        _builder.mkScriptElement_open(src,false);
      },this);
    }
  };
  
  Compiler.prototype.mkNodes = function Compiler$mknodes (src){
    if(src.type=='tag')this.mkTagElement(src);
    if(src.type=='text')
      this._builders.forEach(function(_builder) {
        _builder.mkTextElement(src);
      },this);
    if(src.type=='script')this.mkScriptElement(src);
    return;
  };
  
  Compiler.prototype.compile = function Compiler$compile (src) {
    return this.mkNodes(src);
  };
    
  exports.Compiler = Compiler;
  exports.Builder = Builder;
  
})();