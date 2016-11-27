/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

import Builder from './Builder.babel.js'

  export default class HtmlBuilder extends Builder{
      createAttribute_text(key, attribute,state) {
        return(`${key}='${attribute.data||''}'`);
      }
      createAttribute_script(key, attribute,state) {
        return(`${key}='{${attribute.data||''}}'`);
      }
      createTagElement_open(src, attributes, isContainer,state) {
        return(`${Array(state.depth).join('\t')}<${src.name}${attributes} ${isContainer?'':'/'}>`);
      }
      createTagElement_close(src,state) {
        return(`${Array(state.depth).join('\t')}</${src.name}>`);
      }
      createTextElement(src,state) {
        return(`${Array(state.depth).join('\t')}${src.data}`);
      }
      createScriptElement_open(src, isContainer,state){
        if(!isContainer) return(`${Array(state.depth).join('\t')}{${src.data}}`);
      }
  }
