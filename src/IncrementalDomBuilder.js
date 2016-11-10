
import { Builder} from './htmlcompiler.babel.js'

export class IncrementalDomBuilder extends Builder{
    createAttribute_text(key, attribute) {
      return(`${key}=\\'${attribute.data}\\'`);
    };
    createAttribute_script(key, attribute) {
      return(`${key}='+${attribute.data}+'`);
    };
    createTagElement_open(src, attributes, isContainer) {
      return(`${isContainer?'elementOpen':'elementVoid'}('${src.name}', '','${attributes}'); `);
    }
    createTagElement_close(src) {
      return(`elementClose('${src.name}'); `);
    }
    createTextElement(src) {
      return(`text('${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")}'); `);
    }
    createCommentElement(src) {
      return(`/* ${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")} */`);
    }  
    createScriptElement_open(src, isContainer) {
      if (src.name == 'if') {
        return(`if( ${src.data}){ `);
      }
      if (src.name == 'each') {
        return(`each( ${src.data}){ `);
      }
        return(`text( ${src.data}) `);
    }
    createScriptElement_close(src) {
      return(`});`);
    }
}