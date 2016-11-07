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
console.log('parameters',parameters);
console.log('attributes',attributes);
  for (var key in attributes) {
    console.log(key);
    for (var element in attributes[key]) {
      var _attribute = element;
      if(element.type=='script'){
         
      }
      _attributes[key]= element;
    };
  };
  return _attributes;
}
//webComponentを展開
webComponentBuilder.beforeCreateTagElement = function (src, isContainer) {
  if(webComponentBuilder.elements[src.name]){
    //var customElement = Object.assign({},webComponentBuilder.elements[src.name]);
    var _customElement = webComponentBuilder.elements[src.name];
    var customElement = clone(_customElement,null, null, [_customElement.parentNode]);
    var template = customElement.template[0];
    src.name = template.name;
    src.type = template.type;
    src.attributes = webComponentBuilder.expansionAttributes(template.attributes,src.attributes);
    
    var children = [];
    template.children.forEach(function(child){
      if(child.name=='yield'){
        if(isContainer && src.children)children.push(clone(src.children,null, null, [src.children.parentNode]));
      }else{
        children.push(clone(child,null, null, [child.parentNode]));
      }
    }); 
    src.children = children;
  }
}
