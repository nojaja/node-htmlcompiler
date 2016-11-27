/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

  export default class Builder {
    constructor(options) {
      var self = this;
      this._options = options;
      this.nodes = [];
    }
    getNodes(arg) {
      return this.nodes.join(arg || '\n');
    }
    addNode(node) {
      this.nodes.push(node);
    }

    beforeCreateAttribute(attributes) {}
    createAttribute_text(key, attribute) {}
    createAttribute_script(key, attribute) {}
    beforeCreateTagElement(src, isContainer,state) {}
    createTagElement_open(src, attributes, isContainer,state) {}
    createTagElement_close(src,state) {}
    beforeCreateNodes(src,state) {}
    createTextElement(src,state) {}
    createCommentElement(src,state) {}
    beforeCreateScriptElement(src, isContainer,state) {}
    createScriptElement_open(src, isContainer,state) {}
    createScriptElement_close(src,state) {}
    beforeCompile(src) {}
  }
