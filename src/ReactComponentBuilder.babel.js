/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

import Builder from './Builder.babel.js'

  export default class ReactComponentBuilder extends Builder{
    constructor(options) {
      super(options);
      var self = this;
      this.attributeDelimiter =",";
    }
    createAttribute_text(key, attribute,state) {
      return(`${key}:'${attribute.data}'`);
    }
    createAttribute_script(key, attribute,state) {
      return(`${key}:${attribute.data}`);
    }
    createTagElement_open(src, attributes, isContainer,state) {
      return(`${Array(state.depth).join('\t')}React.createElement('${src.name}',${attributes?'{'+attributes+'}':'null'}${isContainer?',':')'}`);
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
      return(`
      window['${arg.elementName}'] = React.createClass({
        render: function() {
          return ${this.getNodes()}
        }
        ${arg.script?','+arg.script.data:''}
      });
        `);
    }
  }