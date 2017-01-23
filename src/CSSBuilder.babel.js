/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */


import Builder from './Builder.babel.js'

/*------------------------------------------------
CSSBuilder
html�Ɏw�肳�ꂽstyle��CSS�ɕ������܂��B
------------------------------------------------*/
  export default class CSSBuilder extends Builder{

    /**
       createAttribute_text
       �����m�[�h�ŌĂ΂�܂�
       ����Builder�ł�style�����̏ꍇ�͒l��Ԃ��܂�
       
    **/
    createAttribute_text(key, attribute,state) {
      if(key=='style'){
         return(`${attribute.data||''}`); //CSS�̗v�f�@��:height:30px;
      }
    };
    createAttribute_script(key, attribute,state) {
      if(key=='style'){
        return(`${attribute.data||''}`);
      }
    };

    /**
       createTagElement_open
       �^�O�J�n�̃m�[�h�ŌĂ΂�܂�
       src:{name:�^�O���Aattributes�F�m�[�h�Ɋ܂܂�鑮���iMAP�j}
       attributes:�m�[�h�Ɋ܂܂�鑮���������Ă܂�
       isContainer:�q�v�f���܂ޏꍇ��true�ɂȂ�܂��B
       state:{depth:�C���f���g��}
       
    **/
    createTagElement_open(src, attributes, isContainer,state) {
      if(!src.attributes) return;
      var id = '';
      if(src.attributes['id']){ //id�w�肪����ꍇ�̂�CSS�����܂��B
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