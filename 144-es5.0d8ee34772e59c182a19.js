var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{gLjn:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPanModule",(function(){return P}));var a,r,o=n("An66"),i=n("1VvW"),c=n("SVIu"),l=n("NE9W"),s=n("kZht"),m=n("OZlg"),d=n("e0eB"),p=n("iyc4"),u=n("ENSU"),b=n("C05f"),f=n("YtkY"),h=n("MdvI"),g=((a=function(){function e(t){var n=this;_classCallCheck(this,e),this.sanitizer=t,this.coordinates$=new b.a([0,0]),this.transform$=this.coordinates$.pipe(Object(f.a)((function(e){return n.sanitizer.bypassSecurityTrustStyle("translate(".concat(e[0],"px, ").concat(e[1],"px)"))})))}return _createClass(e,[{key:"onPan",value:function(e){this.coordinates$.next([this.currentCoords[0]+e[0],this.currentCoords[1]+e[1]])}},{key:"currentCoords",get:function(){return this.coordinates$.value}}]),e}()).\u0275fac=function(e){return new(e||a)(s["\u0275\u0275directiveInject"](u.DomSanitizer))},a.\u0275cmp=s["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-pan-example-1"]],decls:3,vars:4,consts:[[1,"container","tui-text_body-l"],[1,"circle",3,"tuiPan"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275listener"]("tuiPan",(function(e){return t.onPan(e)})),s["\u0275\u0275pipe"](2,"async"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275styleProp"]("transform",s["\u0275\u0275pipeBind1"](2,2,t.transform$)))},directives:[h.a],pipes:[o.b],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:12rem;height:12rem;background-color:var(--tui-secondary);overflow:hidden}.circle[_ngcontent-%COMP%]{width:6rem;height:6rem;border-radius:100%;-ms-touch-action:none;touch-action:none;background-color:var(--tui-support-01);-webkit-box-shadow:.25rem .25rem .5rem 0 rgba(34,60,80,.2);box-shadow:.25rem .25rem .5rem 0 rgba(34,60,80,.2);cursor:move;will-change:transform}"],changeDetection:0}),a),v=n("u8jZ"),_=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241f7cd14ceae63b4aba71ab7935638f5d3b799f4f4b\u241f9128067536654850026:Pan"])))],y=["pageTab",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"])))];r=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f9e449278077294701e8c9fe0d73e07632671088c\u241f9027170302992646472:",":START_TAG_CODE:tuiPan",":CLOSE_TAG_CODE: The directive emits delta between mousemove / touchmove events. You can use it to change the coordinates of an element as in example below "])),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var x,j,C=["heading",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"])))];function w(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,r),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](4,C),s["\u0275\u0275element"](5,"tui-pan-example-1"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example1)}}function O(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",4),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,x),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,j),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}x=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f6a3b47f295a88bb1c26bc0ed826becb749fcea6c\u241f6584529262933175347: Import ",":START_TAG_CODE:TuiPanModule",":CLOSE_TAG_CODE: into a module where you want to use our directive "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),j=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var S,T,E=((T=_createClass((function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiPanModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiPanModule,\n    ],\n...\n",this.exampleInsertTemplate='<div (tuiPan)="..."></div>\n\n',this.example1={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {BehaviorSubject} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-pan-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPanExample1 {\n    readonly coordinates$ = new BehaviorSubject([0, 0]);\n\n    readonly transform$ = this.coordinates$.pipe(\n        map(coords =>\n            this.sanitizer.bypassSecurityTrustStyle(\n                `translate(${coords[0]}px, ${coords[1]}px)`,\n            ),\n        ),\n    );\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n\n    onPan(delta: [number, number]) {\n        this.coordinates$.next([\n            this.currentCoords[0] + delta[0],\n            this.currentCoords[1] + delta[1],\n        ]);\n    }\n\n    get currentCoords() {\n        return this.coordinates$.value;\n    }\n}\n",HTML:'<div class="container tui-text_body-l">\n    <div\n        class="circle"\n        [style.transform]="transform$ | async"\n        (tuiPan)="onPan($event)"\n    ></div>\n</div>\n',LESS:".container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 12rem;\n    height: 12rem;\n    background-color: var(--tui-secondary);\n    overflow: hidden;\n}\n\n.circle {\n    width: 6rem;\n    height: 6rem;\n    border-radius: 100%;\n    touch-action: none;\n    background-color: var(--tui-support-01);\n    box-shadow: 0.25rem 0.25rem 0.5rem 0px rgba(34, 60, 80, 0.2);\n    cursor: move;\n    will-change: transform;\n}\n"}}))).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=s["\u0275\u0275defineComponent"]({type:T,selectors:[["example-tui-pan"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,_),s["\u0275\u0275template"](2,w,6,1,"ng-template",1),s["\u0275\u0275template"](3,O,10,2,"ng-template",2),s["\u0275\u0275i18nAttributes"](4,y),s["\u0275\u0275elementEnd"]())},directives:[m.a,d.a,p.a,g,v.a],encapsulation:2,changeDetection:0}),T),P=((S=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=s["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[o.c,l.a,c.h,i.f.forChild(Object(c.o)(E))]]}),S)}}]);