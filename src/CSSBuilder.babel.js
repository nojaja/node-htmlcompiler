/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */


import Builder from './Builder.babel.js'

  export default class CSSBuilder extends Builder{
    createAttribute_text(key, attribute,state) {
      if(key=='style'){
         return(`${attribute.data||''}`);
      }
    };
    createAttribute_script(key, attribute,state) {
      if(key=='style'){
        return(`${attribute.data||''}`);
      }
    };

    createTagElement_open(src, attributes, isContainer,state) {
      if(!src.attributes) return;
      var id = '';
      if(src.attributes['id']){
        src.attributes['id'].forEach(function(_src) {
            if(_src.type=='text') id = `${id}${_src.data}`;
            if(_src.type=='script' && _src.langName== 'singleMustache' ) id = `${id}{${_src.data}}`;
        }, this);
      }
      if(id){this.nodes.push(`
        .${id} {
          ${' '+attributes}
        }`);
        delete src.attributes['style'];
      }
    }
  };