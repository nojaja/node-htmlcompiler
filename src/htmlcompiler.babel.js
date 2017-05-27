/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */

  export default class Compiler {
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
      return node.join(_builder.attributeDelimiter?_builder.attributeDelimiter:' ');
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
          console.log("forEach",src);
          return this.createNodes(src,state);
        }, this);
      }else{
        return this.createNodes(src,state);
      }
    }
  }
