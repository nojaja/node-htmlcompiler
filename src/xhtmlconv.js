var conv = new Builder({});

//attributeの値をstyle属性に移動する
conv.moveAttribute2Style = function (attributes,fromName,toName){
  var target='';
  if(attributes[fromName]){
    attributes[fromName].forEach(function(_src) {
        if(_src.type=='text') target = `${_src.data}`;
        if(_src.type=='script' && _src.langName== 'singleMustache' ) target = `{${_src.data}}`;
    }, this);
    if(!attributes['style'])attributes['style']=[{data:'',type:'text'}];
    attributes['style'][0].data=`${attributes['style'][0].data?attributes['style'][0].data+';':''}${toName||fromName}:${target}`;
    delete attributes[fromName];
  }
  
}
//特殊attributeの標準化
conv.beforeCreateAttribute = function (attributes){
  conv.moveAttribute2Style(attributes,'height');
  conv.moveAttribute2Style(attributes,'width');
  conv.moveAttribute2Style(attributes,'padding-left');
  conv.moveAttribute2Style(attributes,'margin-top');
  conv.moveAttribute2Style(attributes,'margin-right');
  conv.moveAttribute2Style(attributes,'color');
  conv.moveAttribute2Style(attributes,'background-color');
  conv.moveAttribute2Style(attributes,'floatclear','clear');
}

//attributeをJSONに変換する
conv.attributestoJson = function(list,json){
  json=json||{};
  if(list)list.forEach(function(nestedElement){ 
    if(nestedElement.type=='text'){
      json['data']=nestedElement.data.trim();
      return json;
    }
    var attributes = {};
    for (var key in nestedElement.attributes) {
      attributes[key]=nestedElement.attributes[key].value;
    };
    json[nestedElement.name]=attributes;  
    conv.attributestoJson(nestedElement.children,json[nestedElement.name]);
  });
  return json;
};

//特殊タグの標準化
conv.beforeCompile = function (src){
      var version = src.getElementsByTagName("x-version");
      if(version.length>0){
        console.log("Version: " + version[0].children[0].data);
        version[0].parentNode.removeChild(version[0]);
      }
      
      var lang = src.getElementsByTagName("x-langs");
      lang.forEach(function(nestedElement){   
        var element = nestedElement.getElementsByTagName("ja");
        nestedElement.parentNode.attributes['ja'] = element[0].attributes.text;
        nestedElement.parentNode.removeChild(nestedElement);
      });
      
      var events = src.getElementsByTagName("x-events");
      events.forEach(function(nestedElement){
        var attr = JSON.stringify(conv.attributestoJson(nestedElement.children));
        nestedElement.parentNode.attributes['events']=[{type:'text',data:attr}];
        nestedElement.parentNode.removeChild(nestedElement);
      });

}
