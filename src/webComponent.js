var webComponentBuilder = new Builder({});

webComponentBuilder.elements={};
//webComponentを取得
webComponentBuilder.beforeCompile = function (src){
      var customElements = src.getElementsByTagName("element");
      customElements.forEach(function(customElement){   
        var template = customElement.getElementsByTagName("template");
        var script = customElement.getElementsByTagName("x-script");
        
        var elementName = customElement.attributes.name[0].data;
        webComponentBuilder.elements[elementName] = 
          {
            template:template[0]?clone(template[0].children):[],
            script:script[0]?clone(script[0].children):[]
          };
        webComponentBuilder.elements[elementName].template.parentNode=null;
        webComponentBuilder.elements[elementName].script.parentNode=null;
        //console.log("element: " , elementName, webComponentBuilder.elements[elementName]);
        customElement.parentNode.removeChild(customElement);
      });
}

webComponentBuilder.expansionAttributes = function (attributes,parameters) {
  var _attributes = {};
  for (var key in attributes) {
    var attribute = attributes[key];
    var _attribute = attributes[key];
    for (var i = 0; i < attribute.length; i ++) {
      var _attributeElement = attribute[i];
      if(_attributeElement.type=='script' && _attributeElement.langName=='singleMustache'){
        if(parameters[_attributeElement.data]){
          //属性を入れ替える
          _attribute = attribute.slice(0, i-1)
            .concat(parameters[_attributeElement.data])
            .concat(attribute.slice(i+1, attribute.length));
        }else{
          _attribute = attribute.slice(0, i-1)
            .concat(attribute.slice(i+1, attribute.length));
        }
      }
    }
    _attributes[key]= _attribute;
  };
  return _attributes;
}

webComponentBuilder.cloneElement = function (customElement,src, parentNode,isContainer) {
  var _customElement ={};
  _customElement.name = customElement.name;
  _customElement.type = customElement.type;
  _customElement.parentNode = parentNode;
  if(customElement.langName)_customElement.langName = customElement.langName;
  if(customElement.data)_customElement.data = customElement.data;

  //srcの子要素に入れ替えるタグ
  if(customElement.name=='yield'){
    if(src.children){
      for (var j = 0; j < src.children.length; j ++) {
        parentNode.children.push(src.children[j]);
      }
    }
    return;
  }
  
  //スクリプトの展開
  if(customElement.type=='script' && customElement.langName=='singleMustache'){
        var key = customElement.data.trim();
        var __customElement = src.attributes[key];
        if(__customElement){
          _customElement.data = __customElement[0].data;
          _customElement.type = __customElement[0].type;
          delete _customElement.langName;
        }else{
          return;//対象の変数が無ければスキップ
        }
   }
  
  if(customElement.attributes)_customElement.attributes = webComponentBuilder.expansionAttributes(customElement.attributes,src.attributes);
  if(customElement.children){  
    _customElement.children = [];
    for (var i = 0; i < customElement.children.length; i ++) {
      var child = customElement.children[i];
      webComponentBuilder.cloneElement(child,src, _customElement,isContainer);
    }
  };
  parentNode.children.push(_customElement);
  return _customElement;
}

//webComponentを展開
webComponentBuilder.beforeCreateTagElement = function (src, isContainer) {
  if(webComponentBuilder.elements[src.name]){
    var _customElement = webComponentBuilder.elements[src.name]; 
    var _template = _customElement.template[0];
    var template = webComponentBuilder.cloneElement(_template,src,src.parentNode,isContainer);
    src.name = template.name;
    src.type = template.type;
    src.attributes = template.attributes;
    src.children = template.children;
  }
}
