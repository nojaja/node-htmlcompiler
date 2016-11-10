/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

import Builder from './Builder.babel.js'

  export default class HtmlBuilder extends Builder{
      createAttribute_text(key, attribute) {
        return(`${key}='${attribute.data||''}'`);
      }
      createAttribute_script(key, attribute) {
        return(`${key}='{${attribute.data||''}}'`);
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
      createScriptElement_open(src, isContainer){
        if(!isContainer) return(`{${src.data}}`);
      }
  }
