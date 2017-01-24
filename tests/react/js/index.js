'use strict';
//htmlparser///////////////////////////////////////////////////

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var htmlparser = Tautologistics.NodeHtmlParser;
var parseHtml = function parseHtml(rawHtml) {
  var handler = new htmlparser.HtmlBuilder(function (err, dom) {
    if (err) {
      console.error(err);
    } else {}
  }, {
    enforceEmptyTags: true,
    caseSensitiveTags: true,
    caseSensitiveAttr: true,
    ignoreWhitespace: true,
    verbose: true,
    includeLocation: true
  });
  var parser = new htmlparser.Parser(handler, {
    includeLocation: true
  });
  parser.parseComplete(rawHtml);
  if (handler.dom.length > 1) {
    throw Error('Template must have exactly one root element. was: ' + rawHtml);
  }
  // parseしたオブジェクトを返却
  return handler.dom[0];
};

var webComponentParser = new WebComponentParser({ builder: ReactComponentBuilder });
var builder = new HtmlBuilder({});
var cssbuilder = new CSSBuilder({});
var compiler = new Compiler([webComponentParser, cssbuilder, builder], {});


webComponentParser.elementNames = webComponentParser.elementNames.concat(["reactlabel","reactinput","reactbutton","reactmargin","reactcard"]);

//webComponentParser.components = Object.assign(webComponentParser.components, components);

//-ここからDemo用処理----------------------------------
var element = document.getElementById("input");
//var rawHtml = element.innerText;
var rawHtml = element.innerHTML.trim();
var parseData = parseHtml(rawHtml); //htmlをparseしてjsonオブジェクトにします。

//console.log('element',element);
//console.log('rawHtml',rawHtml);
//console.log('test',stringify(parseData));

var compileData = compiler.compile(parseData); //jsonオブジェクトを各種コードに変換します
//document.getElementById("output2").innerText = builder.getNodes();
//document.getElementById("output3").innerText = cssbuilder.getNodes();

webComponentParser.build(); //react化処理の実行
//変換されたコードはwindowに読み込まれ実行可能になります。


//生成したreactのsource
console.log(webComponentParser.getResult());

//実行する
Function(webComponentParser.getResult())();
//Function( 'var mount = function(components ) {' + webComponentParser.getResult() +'}' )();
//var mount = Function('components', webComponentParser.getResult());

//mount(window);



//var code = document.createElement("code");
//code.innerHTML=stringify(parseData);
//document.getElementById("output").appendChild(code);
