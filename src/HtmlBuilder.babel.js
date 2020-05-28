/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */

import Builder from './Builder.babel.js'

  export default class HtmlBuilder extends Builder{
      constructor() {
        super()
        this.emptyTags = {area: 1, base: 1, basefont: 1, br: 1, col: 1, frame: 1, hr: 1, img: 1, input: 1, isindex: 1, link: 1, meta: 1, param: 1, embed: 1, '?xml': 1, wbr: 1}
      }

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
      
      //todo createCommentElement(src,state) {}
      createCommentElement(src,state) {
        return(`${Array(state.depth).join('\t')}<!-- ${src.data} -->`);
      }

      //todo isContainerは可能なtagが決まっているので、そこを考慮しないとdomが壊れる
      createTagElement_open(src, attributes, isContainer,state) {
        if(src.name=='script'){
          return(`${Array(state.depth).join('\t')}<${src.name}${attributes}>${isContainer?'':'</'+src.name+'>'}`);
        }
        let emptyTagFlg = this.emptyTags[src.name]||false
        let reqCloseTag = !isContainer && !emptyTagFlg
        let closeTag = reqCloseTag ? `</${src.name}>` : ''
        return(`${Array(state.depth).join('\t')}<${src.name}${attributes}${emptyTagFlg?' /': ''}>${reqCloseTag? closeTag : ''}`);
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
