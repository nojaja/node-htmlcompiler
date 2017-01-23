#!/usr/bin/env node

;
(function() { // wrapper in case we're in module_context mode
	/**
	 * build.js
	 * buildを行います。
	 * プロジェクトファイルに含まれるprj.jsonのバージョン情報を元に
	 * 各バージョンにあった処理を呼び出します。
	 * 【注意】
	 * このファイルの改行コードはLFにすること、CRLFだとLinuxで動作しません
	 *
	 */

	process.title = "build";

	global.baseDir = __dirname;

	// fsとpathはglobalに展開
	global.fs = require('fs');
	global.path = require('path');

	var htmlparser = require("htmlparser");
	var htmlcompiler = require("./lib/htmlcompiler");
	
	var webComponentParser = new WebComponentParser({ builder: ReactComponentBuilder });
	var builder = new HtmlBuilder({});
	var cssbuilder = new CSSBuilder({});
	var compiler = new Compiler([webComponentParser, cssbuilder, builder], {});


	// package.json取得
	var packageInfo = require('./package.json');
	// コマンドラインのパラメータ設定
	var program = require('commander');
	program
		.version(packageInfo.version)
		.option('-w, --workspace [workspace path]', 'workspace path.')
		.option('-o, --output [output path]', 'output path.')
		.parse(process.argv);

	// ワークスペースが指定されていればそれを利用する
	// 設定されて無ければ、コマンドを実行した場所をワークスペースとする
	//  cd /workspace
	var workspace =  path.resolve(program.workspace || process.cwd());
	var output =  path.resolve(program.output || workspace);

	
	if (!fs.existsSync(workspace) || !fs.statSync(workspace).isDirectory()) {  
		console.log(workspace + ' is not directory.'); // workspace is not directory.
		process.exit(-1);
	}

	if (!fs.existsSync(output) || !fs.statSync(output).isDirectory()) {  
		console.log(output + ' is not directory.'); // output is not directory.
		process.exit(-1);
	}
	main();

	
	function fileLoad(targetPath,callback) {
		fs.readdirSync(targetPath).forEach(function (filename) {
			if( path.extname(filename) == ".html" ){
				console.log("file:"+filename);
				var contents = fs.readFileSync(path.join( targetPath, filename), 'utf-8');
				callback(filename,contents);
			};
		});
	}
	function main() {

		console.log("workspace:"+workspace);
		console.log("output:"+output);
		
		fileLoad(workspace,function(filename,rawHtml){
		

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

				var parseData = parseHtml(rawHtml); //htmlをparseしてjsonオブジェクトにします。

				var compileData =compiler.compile(parseData);//jsonオブジェクトを各種コードに変換します

				webComponentParser.build();//react化処理の実行
				//変換されたコードはwindowに読み込まれ実行可能になります。
				//生成したreactの
				var source =webComponentParser.getResult(); 
				console.log(source);
				var outputFile= path.join(output,path.basename(filename, path.extname(filename))+'.js');
				console.log("outputFile:"+outputFile);
				fs.writeFile(outputFile, source);
		});
		
	}

})()
