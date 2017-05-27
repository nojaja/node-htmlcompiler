/***********************************************
Copyright 2016 - 2017
***********************************************/
/* v1.0.0 */

import Builder from './Builder.babel.js'

  export default class ReactRootComponentBuilder extends Builder{
    /**コンストラクタ
     例：
      new ReactRootParser({ builder: ReactComponentBuilder });

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
     var customElements = src.getElementsByTagName("body");
     customElements.forEach(function(customElement){
       var elementName = "app";
       this.elementNames.push(elementName);
       this.elements[elementName] =
         {
           template:customElement?customElement.cloneElement().children:[],
           script:[]
         };
       //body配下の削除
       if(customElement.children)
       customElement.children.forEach(function(childElement){
         customElement.removeChild(childElement);
       });
       //body配下に追加
       var newElement = customElement.createElement('tag');
       newElement.name = 'div';
       newElement.attributes = {'id':[{
                             "type": "text",
                             "data": "app"
                           }]};
       customElement.appendChild(newElement);

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
