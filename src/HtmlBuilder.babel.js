/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */

import Builder from './Builder.babel.js'

  export default class HtmlBuilder extends Builder{
      createAttribute(key,attributes) {
        if(attributes.length==0) return(`${key}`);
        return(`${key}='${attributes.join('')}'`);
      }
      createAttribute_text(key, attribute,state) {
        return(`${attribute.data||''}`);
      }
      createAttribute_script(key, attribute,state) {
        return(`{${attribute.data||''}}`);
      }
      createTagElement_open(src, attributes, isContainer,state) {
        if(src.name=='script'){
          return(`${Array(state.depth).join('\t')}<${src.name}${attributes}>${isContainer?'':'</'+src.name+'>'}`);
        }
        return(`${Array(state.depth).join('\t')}<${src.name}${attributes}${isContainer?'':' /'}>`);
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
