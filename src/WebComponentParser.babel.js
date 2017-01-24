/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

import Builder from './Builder.babel.js'

  export default class WebComponentParser extends Builder{
    /**コンストラクタ
       new WebComponentParser({ builder: ReactComponentBuilder });
       
    **/
    constructor(options) {
      super(options);
      var self = this;
      this.builder =options.builder;//webComponentのbuildに利用するビルダーを定義します。
      this.elementNames =[];
      this.elements ={};
      this.components ={};
    }

    /**
       beforeCompile
       各Builderを呼び出す前に1回だけ実行されます。
       このタイミングでhtml内のwebComponent定義を取得して利用可能な形式に変換します。
    **/
    beforeCompile(src){
      var customElements = src.getElementsByTagName("element");
      customElements.forEach(function(customElement){   
        var template = customElement.getElementsByTagName("template");
        var script = customElement.getElementsByTagName("script");
        script = script.concat(customElement.getElementsByTagName("x-script"));
        
        var elementName = customElement.attributes.name[0].data.toLowerCase();
        this.elementNames.push(elementName);
        this.elements[elementName] = 
          {
            template:template[0]?template[0].cloneElement().children:[],
            script:script[0]?script[0].cloneElement().children:[]
          };
        //console.log("element: " , elementName, this.elements[elementName]);
        //console.log("element: " , elementName, stringify(this.elements[elementName]));
        customElement.parentNode.removeChild(customElement);
  
      },this);
    }


    /**
       build
       webComponentをbuildします。
       コンストラクタで指定したBuilderを実行します。
       
    **/
    build(){
      //console.log("build: ",this.elements);
      for (var elementName in this.elements) {
        //console.log("build element: " , elementName, this.elements[elementName]);

        var reactComponentBuilder = new this.builder({elements:this.elements,elementNames:this.elementNames});
        var _compiler = new Compiler([reactComponentBuilder],{});
        var compileData =_compiler.compile(this.elements[elementName].template[0]);
        this.components[elementName]=reactComponentBuilder.getResult({'elementName':elementName,'script':this.elements[elementName].script[0]});
        console.log("this.components[elementName]:"+this.components[elementName]);
      };
    }
    /**
       getResult
       生成結果返却メソッド
     **/
    getResult(arg) {
      var result = [];
      for (var elementName in this.components) {
        result.push(this.components[elementName]);
      }
      return result.join('\t');
    }
  }