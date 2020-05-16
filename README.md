
# HtmlCompiler
Description 
webcomponents to html compiler


## Installing

	npm install @nojaja/htmlcompiler


## Running Tests

### Run tests under node:
	todo

## Usage In Node

```javascript
let htmlparser = Tautologistics.NodeHtmlParser;
let rawHtml = ''
let parseData = htmlparser.parseDOM(rawHtml, {
            enforceEmptyTags: true,
            ignoreWhitespace: true,
            caseSensitiveTags: true,
            caseSensitiveAttr: true,
            verbose: false
        })

let webComponentParser = new WebComponentParser({
    builder: ReactComponentBuilder
});
let reactRootParser = new ReactRootComponentBuilder({
    builder: ReactComponentBuilder
});
let cssbuilder = new CSSBuilder({});
let compiler1 = new Compiler(
            [cssbuilder, webComponentParser, reactRootParser],
            {}
        );
compiler1.compile(parseData); //jsonオブジェクトを各種コードに変換します
webComponentParser.build(); //react化処理の実行
reactRootParser.build(); //react化処理の実行
console.log(webComponentParser.getResult())
console.log(reactRootParser.getResult())

let htmlbuilder = new HtmlBuilder({});
let compiler2 = new Compiler([htmlbuilder], {});
compiler2.compile(parseData.children); //jsonオブジェクトを各種コードに変換します
console.log(builder.getNodes())

```

