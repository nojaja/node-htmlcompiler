
import Builder from './Builder.babel.js'

export default class IncrementalDomBuilder extends Builder{
    createAttribute(key,attributes) {
      return(`${attributes.join(' ')}`);
    }
    createAttribute_text(key, attribute,state) {
      return(`${key}=\\'${attribute.data}\\'`);
    };
    createAttribute_script(key, attribute,state) {
      return(`${key}='+${attribute.data}+'`);
    };
    createTagElement_open(src, attributes, isContainer,state) {
      return(`${Array(state.depth).join('\t')}${isContainer?'elementOpen':'elementVoid'}('${src.name}', '','${attributes}');// ${state.nodes.length}/${state.nodes.pos}`);
    }
    createTagElement_close(src,state) {
      return(`${Array(state.depth).join('\t')}elementClose('${src.name}');// ${state.nodes.length}/${state.nodes.pos} `);
    }
    createTextElement(src,state) {
      return(`${Array(state.depth).join('\t')}text('${src.data.replace(/\n/g,"").replace(/\'/g,"\\\'")}'); `);
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
        return(`${Array(state.depth).join('\t')}text( ${src.data}) `);
    }
    createScriptElement_close(src,state) {
      return(`${Array(state.depth).join('\t')}});`);
    }
}
