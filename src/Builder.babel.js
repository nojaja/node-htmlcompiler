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
    beforeCreateTagElement(src, isContainer) {}
    createTagElement_open(src, attributes, isContainer) {}
    createTagElement_close(src) {}
    beforeCreateNodes(src) {}
    createTextElement(src) {}
    createCommentElement(src) {}
    beforeCreateScriptElement(src, isContainer) {}
    createScriptElement_open(src, isContainer) {}
    createScriptElement_close(src) {}
    beforeCompile(src) {}
  }
