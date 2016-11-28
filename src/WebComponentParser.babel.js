/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

import Builder from './Builder.babel.js'

  export default class WebComponentParser extends Builder{
    constructor(options) {
      super(options);
      var self = this;
      this.builder =options.builder;
      this.elements ={};
      this.components ={};
    }
    //webComponent‚ðŽæ“¾
    beforeCompile(src){
      var customElements = src.getElementsByTagName("element");
      customElements.forEach(function(customElement){   
        var template = customElement.getElementsByTagName("template");
        var script = customElement.getElementsByTagName("script");
        
        var elementName = customElement.attributes.name[0].data;
        this.elements[elementName] = 
          {
            template:template[0]?template[0].cloneElement().children:[],
            script:script[0]?script[0].cloneElement().children:[]
          };
        console.log("element: " , elementName, this.elements[elementName]);
        //console.log("element: " , elementName, stringify(this.elements[elementName]));
        customElement.parentNode.removeChild(customElement);
        
        var reactComponentBuilder = new this.builder({});
        var _compiler = new Compiler([reactComponentBuilder],{});
        var compileData =_compiler.compile(this.elements[elementName].template[0]);

        this.components[elementName]=reactComponentBuilder.getResult({'elementName':elementName,'script':this.elements[elementName].script[0]});
        console.log("compileData",reactComponentBuilder.getResult({'elementName':elementName,'script':this.elements[elementName].script[0]}));
      },this);
    }
  }