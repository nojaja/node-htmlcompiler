/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */


import Builder from './Builder.babel.js'

/*------------------------------------------------
CSSBuilder
htmlに指定されたstyleをCSSに分離します。
------------------------------------------------*/
  export default class CSSBuilder extends Builder{

    /**
       createAttribute_text
       属性ノードで呼ばれます
       このBuilderではstyle属性の場合は値を返します
       
    **/
    createAttribute_text(key, attribute,state) {
      if(key=='style'){
         return(`${attribute.data||''}`); //CSSの要素　例:height:30px;
      }
    };
    createAttribute_script(key, attribute,state) {
      if(key=='style'){
        return(`${attribute.data||''}`);
      }
    };

    /**
       createTagElement_open
       タグ開始のノードで呼ばれます
       src:{name:タグ名、attributes：ノードに含まれる属性（MAP）}
       attributes:ノードに含まれる属性が入ってます
       isContainer:子要素を含む場合はtrueになります。
       state:{depth:インデント数}
       
    **/
    createTagElement_open(src, attributes, isContainer,state) {
      if(!src.attributes) return;
      var id = '';
      if(src.attributes['id']){ //id指定がある場合のみCSS化します。
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