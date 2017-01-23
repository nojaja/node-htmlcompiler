/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

/*------------------------------------------------
Builderのベースクラス 
------------------------------------------------*/
  export default class Builder {
    
    /**コンストラクタ**/
    constructor(options) {
      var self = this;
      this._options = options;//生成オプション
      this.nodes = [];//生成物格納フィールド
      this.attributeDelimiter =" ";//各ノード間の区切り文字
    }
    getNodes(arg) {
      return this.nodes.join(arg || '\n');
    }
    addNode(node) {
      this.nodes.push(node);
    }
    /**
       getResult
       生成結果返却メソッド
       生成結果をラップするなどの可能が必要な場合はココに記載記載する
     **/
    getResult(arg) {
      return(`${this.getNodes()}`);
    }
    
    /**
       beforeCreateAttribute
       属性ノードで各Builderを呼び出す前に1回だけ実行されます。
       特定の属性を書き換えるといったケースで利用してください
       
    **/
    beforeCreateAttribute(attributes) {}

    /**
       createAttribute_text
       属性ノードで呼ばれます
       key:属性名
       attribute:ノード
       
    **/
    createAttribute_text(key, attribute) {}

    /**
       createAttribute_script
       Scriptタイプの属性ノードで呼ばれます
       attributeがScriptタイプの場合に呼び出されます
       key:属性名
       attribute:ノード
       
    **/
    createAttribute_script(key, attribute) {}

    beforeCreateTagElement(src, isContainer,state) {}

    /**
       createTagElement_open
       タグ開始のノードで呼ばれます
       src:{name:タグ名、attributes：ノードに含まれる属性（MAP）}
       attributes:ノードに含まれる属性が入ってます
       isContainer:子要素を含む場合はtrueになります。
       state:{depth:インデント数}
       
    **/
    createTagElement_open(src, attributes, isContainer,state) {}

    /**
       createTagElement_close
       タグ終了のノードで呼ばれます
       src:{name:タグ名}
       state:{depth:インデント数}
       
    **/
    createTagElement_close(src,state) {}

    beforeCreateNodes(src,state) {}

    /**
       createTextElement
       テキストタイプの末端ノードで呼ばれます
       src:{data:テキスト}
       state:{depth:インデント数}
       
    **/
    createTextElement(src,state) {}

    createCommentElement(src,state) {}
    beforeCreateScriptElement(src, isContainer,state) {}
    createScriptElement_open(src, isContainer,state) {}
    createScriptElement_close(src,state) {}

    /**
       beforeCompile
       各Builderを呼び出す前に1回だけ実行されます。
       特定のノードを書き換えるといったケースで利用してください
       
    **/
    beforeCompile(src) {}
  }