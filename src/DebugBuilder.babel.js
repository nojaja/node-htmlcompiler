/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */


import Builder from './Builder.babel.js'

/*------------------------------------------------
DebugBuilder
------------------------------------------------*/
  export default class DebugBuilder extends Builder{

    /**
       beforeCompile
       各Builderを呼び出す前に1回だけ実行されます。
       このタイミングでhtml内のwebComponent定義を取得して利用可能な形式に変換します。
    **/
    beforeCompile(src){
      console.log('DebugBuilder',src);
    }
  };
