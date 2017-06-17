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
    cssToJson(css){
      var style = new CSSOM.CSSStyleDeclaration();
      style.cssText=css;
      var ret = {};
      for(var i=0;i<style.length;i++){
        ret[style[i]]= style[style[i]];
      }
      return JSON.stringify(ret);
    }
    toUpperFirstLetter(str) {
      return str.split('-').map(function(block){
        return block.charAt(0).toUpperCase() + block.substring(1);
      }).join('');
    }
    createAttribute(key,attributes) {
      if(attributes.length==0) return(`'${key}':true`);
      key=(key=="class")?"className":key;
      return(`'${key}':${attributes.join('+')}`);
    }
    createAttribute_text(key, attribute,state) {
      if(key=="style"){
         return(`${this.cssToJson(attribute.data)}`);
      }else return(`'${attribute.data.replace(/\'/g, '\\\'')}'`);
    }
    createAttribute_script(key, attribute,state) {
      return(`${attribute.data}`);
    }


    nexttype(_src){
            if(_src.nextSibling==null) return false;
            if(_src.nextSibling.type!="comment") return true
            return nexttype(_src.nextSibling);
    }

    createTagElement_open(src, attributes, isContainer,state) {
      //tagかwebcomponentか判断する
      // Judge whether it is tag or webcomponent
      //タグ名にハイフンが含まれていたらwebcomponent
      // webcomponent if the tag name contains a '-'
      //タグ名の1文字目が大文字ならwebcomponent
      //elementNamesに登録されていたらwebcomponent
      // webcomponent if registered in elementNames
      var tagName= ( ~src.name.indexOf('-') || src.name.charAt(0)==src.name.charAt(0).toUpperCase() || this.elementNames.indexOf(src.name.toLowerCase()) >= 0)? this.toUpperFirstLetter(src.name):`'${src.name}'`;
      return(`${Array(state.depth).join('\t')}React.createElement(${tagName},${attributes?'{'+attributes+'}':'null'}${isContainer?',':(nexttype(src))?'),':')'}`);
    }
    createTagElement_close(src,state) {
      return(`${Array(state.depth).join('\t')})${(nexttype(src))?',':''}`);
      //return(`${Array(state.depth).join('\t')})${(state.nodes.length>state.nodes.pos && nexttype(src))?',':''}`);
    }
    createTextElement(src,state) {
      return(`${Array(state.depth).join('\t')}'${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")}'${(state.nodes.length>state.nodes.pos)?',':''}`);
    }
    createCommentElement(src,state) {
      return(`${Array(state.depth).join('\t')}/* ${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")} */`);
    }
    createScriptElement_open(src, isContainer,state) {


      if (src.name == 'map') {
        return(`${Array(state.depth).join('\t')}(${src.data}).map(function(element, index, array) { return [ `);
      }
      if (src.name == 'if') {
        return(`${Array(state.depth).join('\t')}( ${src.data})?[ `);
      }
      if (src.name == 'each') {
        return(`${Array(state.depth).join('\t')}each( ${src.data}){ `);
      }
      return(`${Array(state.depth).join('\t')}${src.data}${(state.nodes.length>state.nodes.pos)?',':''}`);
    }
    createScriptElement_close(src,state) {

      if (src.name == 'map') {
        return(`${Array(state.depth).join('\t')}]}),`);
      }
      if (src.name == 'if') {
        return(`${Array(state.depth).join('\t')}]:[],`);
      }

      return(`${Array(state.depth).join('\t')}});`);
    }
    getResult(arg) {
      //windowオブジェクトにメソッドを追加するコードを生成
      //Generate code to add a method to the window object
      return(`
class ${this.toUpperFirstLetter(arg.elementName)} extends React.Component{
  render(){
    return ${this.getNodes().trim()}
  }
${arg.script?''+arg.script.data:''}
};`);
    }
  }
