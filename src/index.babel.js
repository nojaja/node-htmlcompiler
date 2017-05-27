
/***********************************************
Copyright 2016 - 2016
***********************************************/
/* v1.0.0 */

//http://yutapon.hatenablog.com/entry/2015/02/09/090000

import Compiler from './htmlcompiler.babel.js'
import Builder from './Builder.babel.js'
import DebugBuilder from './DebugBuilder.babel.js'
import HtmlBuilder from './HtmlBuilder.babel.js'
import CSSBuilder from './CSSBuilder.babel.js'
import IncrementalDomBuilder from './IncrementalDomBuilder.babel.js'
import ReactComponentBuilder from './ReactComponentBuilder.babel.js'
import WebComponentParser from './WebComponentParser.babel.js'
import ReactRootComponentBuilder from './ReactRootComponentBuilder.babel.js'


if (typeof window === 'undefined') {
global.Builder = Builder;
global.DebugBuilder = DebugBuilder;
global.HtmlBuilder = HtmlBuilder;
global.CSSBuilder = CSSBuilder;
global.Compiler = Compiler;
global.IncrementalDomBuilder = IncrementalDomBuilder;
global.ReactComponentBuilder = ReactComponentBuilder;
global.WebComponentParser = WebComponentParser;
global.ReactRootComponentBuilder = ReactRootComponentBuilder;
}else{
window.Builder = Builder;
window.DebugBuilder = DebugBuilder;
window.HtmlBuilder = HtmlBuilder;
window.CSSBuilder = CSSBuilder;
window.Compiler = Compiler;
window.IncrementalDomBuilder = IncrementalDomBuilder;
window.ReactComponentBuilder = ReactComponentBuilder;
window.WebComponentParser = WebComponentParser;
window.ReactRootComponentBuilder = ReactRootComponentBuilder;
}
