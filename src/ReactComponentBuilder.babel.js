/***********************************************
Copyright 2016 - 2017 
***********************************************/
/* v1.0.0 */

import Builder from './Builder.babel.js'

  export default class ReactComponentBuilder extends Builder{
    /**コンストラクタ **/
    constructor(options) {
      super(options);
      var self = this;
      this.elements = options.elements||{};
      this.elementNames = options.elementNames||[];//webcomponentの一覧
      this.attributeDelimiter =",";
    }
    toUpperFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }
    createAttribute_text(key, attribute,state) {
      return(`'${key}':'${attribute.data}'`);
    }
    createAttribute_script(key, attribute,state) {
      return(`'${key}':${attribute.data}`);
    }
    createTagElement_open(src, attributes, isContainer,state) {
      //tagかwebcomponentか判断する
      // Judge whether it is tag or webcomponent
      //タグ名にハイフンが含まれていたらwebcomponent
      // webcomponent if the tag name contains a '-'
      //elementNamesに登録されていたらwebcomponent
      // webcomponent if registered in elementNames
      var tagName= ( ~src.name.indexOf('-') || this.elementNames.indexOf(src.name.toLowerCase()) >= 0)? this.toUpperFirstLetter(src.name):`'${src.name}'`;
      return(`${Array(state.depth).join('\t')}React.createElement(${tagName},${attributes?'{'+attributes+'}':'null'}${isContainer?',':(state.nodes.length>state.nodes.pos)?'),':')'}`);
    }
    createTagElement_close(src,state) {
      return(`${Array(state.depth).join('\t')})${(state.nodes.length>state.nodes.pos)?',':''}`);
    }
    createTextElement(src,state) {
      return(`${Array(state.depth).join('\t')}'${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")}'${(state.nodes.length>state.nodes.pos)?',':''}`);
    }
    createCommentElement(src,state) {
      return(`${Array(state.depth).join('\t')}/* ${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")} */`);
    }  
    createScriptElement_open(src, isContainer,state) {
      if (src.name == 'if') {
        return(`${Array(state.depth).join('\t')}if( ${src.data}){ `);
      }
      if (src.name == 'each') {
        return(`${Array(state.depth).join('\t')}each( ${src.data}){ `);
      }
      return(`${Array(state.depth).join('\t')}${src.data}${(state.nodes.length>state.nodes.pos)?',':''}`);
    }
    createScriptElement_close(src,state) {
      return(`${Array(state.depth).join('\t')}});`);
    }
    getResult(arg) {
      //windowオブジェクトにメソッドを追加するコードを生成
      //Generate code to add a method to the window object
      return(`
window['${this.toUpperFirstLetter(arg.elementName)}'] = React.createClass({
  render: function() {
    return ${this.getNodes().trim()}
  }
${arg.script?','+arg.script.data:''}
});`);
    }
  }
