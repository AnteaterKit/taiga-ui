var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{bUBm:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleBrowserModule",(function(){return x}));var r,a,o=n("An66"),i=n("1VvW"),c=n("SVIu"),l=n("kZht"),s=n("OZlg"),p=n("e0eB"),m=n("iyc4"),u=n("FTac"),d=n("l4xa"),f=((r=function(){function e(t){_classCallCheck(this,e),this.userAgent=t}return _createClass(e,[{key:"aboutMyBrowser",get:function(){return Object(d.isEdge)(this.userAgent)?Object(d.isEdgeOlderThan)(13,this.userAgent)?"Edge older than 13":"Edge until 13":Object(d.isIE)(this.userAgent)?"Unfortunately, you have IE11":Object(d.isFirefox)(this.userAgent)?"Okay, you have Firefox!":"You have Chromium based browser, cool!"}}]),e}()).\u0275fac=function(e){return new(e||r)(l["\u0275\u0275directiveInject"](u.h))},r.\u0275cmp=l["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-browser-example-1"]],decls:4,vars:1,template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"label"),l["\u0275\u0275text"](1,"Your browser is:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275text"](3),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](t.aboutMyBrowser))},encapsulation:2,changeDetection:0}),r),b=n("u8jZ"),g=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241ff9c6a0ed822ca3080f9a3110255f7e8337323d18\u241f1141403969432151030:Browser utils"])))],h=["pageTab",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"])))];a=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f40ec2c87f7f7e9226eff45bce9c943aa0c744f71\u241f5545918984621976325:A set of tools for work with browser"])));var E,w=["heading",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f1e0d211c5dc58e7091fbbdd270900b2936cfd886\u241f6921954424489541591:Browser detection"])))];function _(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,a),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-example",3),l["\u0275\u0275i18nAttributes"](3,w),l["\u0275\u0275element"](4,"tui-browser-example-1"),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",n.example1)}}function j(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",4),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18n"](3,E),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](4,"tui-doc-code",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("code",n.importComponentExample)}}E=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f331439c9b8ee5b975fc037bbc742a75012cb302f\u241f5059560669993049040:Import into component and use:"])));var O,y,v=((y=_createClass((function e(){_classCallCheck(this,e),this.importComponentExample="import {isIE} from '@taiga-ui/cdk';\nimport {USER_AGENT} from '@ng-web-apis/common';\n\n...\n    constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}\n\n    areThereProblems = isIE(this.userAgent);\n...\n",this.example1={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {USER_AGENT} from '@ng-web-apis/common';\nimport {isEdge, isEdgeOlderThan, isFirefox, isIE} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-browser-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBrowserExample1 {\n    constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}\n\n    get aboutMyBrowser(): string {\n        if (isEdge(this.userAgent)) {\n            if (isEdgeOlderThan(13, this.userAgent)) {\n                return 'Edge older than 13';\n            }\n\n            return 'Edge until 13';\n        }\n\n        if (isIE(this.userAgent)) {\n            return 'Unfortunately, you have IE11';\n        }\n\n        if (isFirefox(this.userAgent)) {\n            return 'Okay, you have Firefox!';\n        }\n\n        return 'You have Chromium based browser, cool!';\n    }\n}\n",HTML:"<label>Your browser is:</label>\n\n<p>{{ aboutMyBrowser }}</p>\n"}}))).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=l["\u0275\u0275defineComponent"]({type:y,selectors:[["example-browser"]],decls:5,vars:0,consts:[["package","CDK","path","cdk/utils/browser",6,"header"],["pageTab",""],[6,"pageTab"],["id","browser",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,g),l["\u0275\u0275template"](2,_,5,1,"ng-template",1),l["\u0275\u0275template"](3,j,5,1,"ng-template",2),l["\u0275\u0275i18nAttributes"](4,h),l["\u0275\u0275elementEnd"]())},directives:[s.a,p.a,m.a,f,b.a],encapsulation:2,changeDetection:0}),y),x=((O=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=l["\u0275\u0275defineNgModule"]({type:O}),O.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||O)},imports:[[o.c,c.h,i.f.forChild(Object(c.o)(v))]]}),O)}}]);