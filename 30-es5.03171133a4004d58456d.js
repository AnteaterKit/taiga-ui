var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15;function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(u){l=!0,r=u}finally{try{o||null==n.return||n.return()}finally{if(l)throw r}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{tdHe:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLineDaysChartModule",(function(){return _e}));var a=n("An66"),r=n("3kIJ"),i=n("1VvW"),o=n("UTYu"),l=n("SVIu"),u=n("l4xa"),c=n("Qq0t"),m=n("dvRg"),p=n("YtkY"),s=n("kZht"),d=n("OZlg"),y=n("e0eB"),g=n("iyc4"),h=n("D57K"),f=n("Yj6K"),b=n("ae/2"),T=n("ItKm");function x(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-axes",3),s["\u0275\u0275element"](1,"tui-line-days-chart",4),s["\u0275\u0275pipe"](2,"async"),s["\u0275\u0275elementEnd"]()),2&e){var n=t.ngIf,a=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("verticalLines",n.length)("horizontalLines",4)("axisXLabels",n),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("height",200)("value",a.value)("yStringify",a.yStringify)("xStringify",s["\u0275\u0275pipeBind1"](2,7,a.xStringify$))}}var v,_,C=((v=function(){function e(t){_classCallCheck(this,e),this.months$=t,this.range=new u.TuiDayRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({year:1})),this.maxLength={month:12},this.xStringify$=this.months$.pipe(Object(p.a)((function(e){return function(t){var n=t.month,a=t.day;return"".concat(e[n],", ").concat(a)}}))),this.yStringify=function(e){return(10*e).toLocaleString("en-US",{maximumFractionDigits:0})+" $"}}return _createClass(e,[{key:"value",get:function(){return this.computeValue(this.range)}},{key:"computeLabels$",value:function(e){var t=e.from,n=e.to;return this.months$.pipe(Object(p.a)((function(e){return Array.from({length:u.TuiMonth.lengthBetween(t,n)+1},(function(n,a){return e[t.append({month:a}).month]}))})))}},{key:"computeValue",value:function(e){var t=e.from,n=e.to;return new Array(u.TuiDay.lengthBetween(t,n)+1).fill(0).reduce((function(e,n,a){return[].concat(_toConsumableArray(e),[[t.append({day:a}),(a?e[a-1][1]:100)+10*Math.random()-5]])}),[])}}]),e}()).\u0275fac=function(e){return new(e||v)(s["\u0275\u0275directiveInject"](c.TUI_MONTHS))},v.\u0275cmp=s["\u0275\u0275defineComponent"]({type:v,selectors:[["tui-line-days-chart-example-1"]],decls:5,vars:5,consts:[[1,"b-form"],[3,"maxLength","ngModel","ngModelChange"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels",4,"ngIf"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[1,"chart",3,"height","value","yStringify","xStringify"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",0),s["\u0275\u0275elementStart"](1,"tui-input-date-range",1),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.range=e})),s["\u0275\u0275text"](2," Range "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,x,3,9,"tui-axes",2),s["\u0275\u0275pipe"](4,"async")),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("maxLength",t.maxLength)("ngModel",t.range),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](4,3,t.computeLabels$(t.range))))},directives:[f.a,r.NgControlStatus,r.NgModel,a.t,b.a,T.a],pipes:[a.b],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;color:#bc71c9}"],changeDetection:0}),Object(h.b)([u.tuiPure],v.prototype,"computeLabels$",null),Object(h.b)([u.tuiPure],v.prototype,"computeValue",null),v),O=n("aPft"),D=n("JPmT"),S=n("+JAB"),L=n("Hot6"),P=n("ROBh"),w=((_=function(){function e(t){_classCallCheck(this,e),this.months$=t}return _createClass(e,[{key:"transform",value:function(e){var t=e.from,n=e.to,a=u.TuiDay.lengthBetween(t,n);if(a>90)return this.months$.pipe(Object(p.a)((function(e){return Array.from({length:u.TuiMonth.lengthBetween(t,n)+1},(function(n,a){return e[t.append({month:a}).month]}))})));var r=Array.from({length:a},(function(e,n){return t.append({day:n})})),i=function(e){return e.filter((function(e){return!e.dayOfWeek()})).map(String)}(r),o=r.map(String);return a>60?Object(P.a)(M(i)):a>14?Object(P.a)(i):a>7?Object(P.a)(M(o)):Object(P.a)(o)}}]),e}()).\u0275fac=function(e){return new(e||_)(s["\u0275\u0275directiveInject"](c.TUI_MONTHS))},_.\u0275pipe=s["\u0275\u0275definePipe"]({name:"labels",type:_,pure:!0}),_);function M(e){return e.filter((function(e,t){return!(t%2)}))}var j,A=n("DzXc"),V=n("M03u");function $(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"span",7),s["\u0275\u0275elementStart"](1,"small",8),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=t.index;s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("Chart ",n+1,"")}}function R(e,t){if(1&e&&(s["\u0275\u0275element"](0,"tui-line-days-chart",13),s["\u0275\u0275pipe"](1,"tuiFilter")),2&e){var n=t.$implicit,a=s["\u0275\u0275nextContext"](3);s["\u0275\u0275property"]("height",200)("value",s["\u0275\u0275pipeBind3"](1,2,n,a.filter,a.range))}}function k(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,R,2,6,"tui-line-days-chart",12),s["\u0275\u0275elementContainerEnd"]()),2&e){var n=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",n.days)}}function E(e,t){if(1&e&&(s["\u0275\u0275element"](0,"tui-line-chart",15),s["\u0275\u0275pipe"](1,"tuiMapper"),s["\u0275\u0275pipe"](2,"tuiFilter")),2&e){var n=t.$implicit,a=s["\u0275\u0275nextContext"](3);s["\u0275\u0275property"]("height",200)("width",a.getWidth(a.range))("value",s["\u0275\u0275pipeBind3"](1,3,s["\u0275\u0275pipeBind3"](2,7,n,a.filter,a.range),a.toNumbers,a.range))}}function I(e,t){if(1&e&&s["\u0275\u0275template"](0,E,3,11,"tui-line-chart",14),2&e){var n=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("ngForOf",n.days)}}function F(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-axes",9),s["\u0275\u0275template"](1,k,2,1,"ng-container",10),s["\u0275\u0275template"](2,I,1,1,"ng-template",null,11,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"]()),2&e){var n=t.ngIf,a=s["\u0275\u0275reference"](3),r=s["\u0275\u0275nextContext"](),i=s["\u0275\u0275reference"](14);s["\u0275\u0275property"]("verticalLines",n.length)("horizontalLines",4)("axisXLabels",n)("tuiLineChartHint",i),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",r.getWidth(r.show)>90)("ngIfElse",a)}}function B(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",7),s["\u0275\u0275elementStart"](1,"span",17),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("$",n[1].toFixed(0),"")}}function z(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",16),s["\u0275\u0275elementStart"](1,"strong"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"div"),s["\u0275\u0275template"](4,B,3,1,"div",4),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](a.getDate(n[0][0],a.range.from)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",n)}}j=$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241fb531bdcd2946536395ab29b2d7130911e7e22ada\u241f844234805878457:",":START_TAG_CODE:TuiLineDaysChart",":CLOSE_TAG_CODE: is used to show data of several months to simplify working with different number of days in months\n"])),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var N,H,W=((N=function(){function e(){_classCallCheck(this,e),this.data=new u.TuiDayRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({month:5})),this.show=this.data,this.days=this.computeArrays(this.data),this.maxLength={month:6},this.filter=function(e,t){var n=_slicedToArray(e,1)[0],a=t.from,r=t.to;return n.daySameOrAfter(a)&&n.daySameOrBefore(r)},this.toNumbers=function(e,t){var n=t.from;return e.map((function(e){var t=_slicedToArray(e,2),a=t[0],r=t[1];return[u.TuiDay.lengthBetween(n,a),r]}))}}return _createClass(e,[{key:"range",get:function(){return this.computeRange(this.show)}},{key:"getWidth",value:function(e){var t=e.from,n=e.to;return u.TuiDay.lengthBetween(t,n)}},{key:"getDate",value:function(e,t){return e instanceof u.TuiDay?e:t.append({day:e})}},{key:"onDataChange",value:function(e){this.days=this.computeArrays(e)}},{key:"computeRange",value:function(e){var t=e.from,n=e.to,a=u.TuiDay.lengthBetween(t,n),r=t.dayOfWeek(),i=n.dayOfWeek(),o=r?t.append({day:7-r}):t,l=i?n.append({day:7-i}):n,c=u.TuiDay.lengthBetween(o,l);return a>60?new u.TuiDayRange(o,l.append({day:c%14})):a>14?new u.TuiDayRange(o,l):a>7?new u.TuiDayRange(t,n.append({day:a%2})):e}},{key:"computeData",value:function(e,t){var n=e.from,a=e.to;return new Array(u.TuiDay.lengthBetween(n,a)+1).fill(0).reduce((function(e,a,r){return[].concat(_toConsumableArray(e),[[n.append({day:r}),Math.max((r?e[r-1][1]:t)+10*Math.random()-5,0)]])}),[]).filter((function(e){return _slicedToArray(e,1)[0].dayOfWeek()<5}))}},{key:"computeArrays",value:function(e){return[this.computeData(e,100),this.computeData(e,75),this.computeData(e,50)]}}]),e}()).\u0275fac=function(e){return new(e||N)},N.\u0275cmp=s["\u0275\u0275defineComponent"]({type:N,selectors:[["tui-line-days-chart-example-2"]],decls:15,vars:10,consts:[[1,"controls"],[1,"b-form",3,"maxLength","ngModel","ngModelChange"],[1,"b-form","tui-space_left-4",3,"maxLength","ngModel","ngModelChange"],[1,"legend"],["class","item",4,"ngFor","ngForOf"],["class","axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint",4,"ngIf"],["hint",""],[1,"item"],[1,"name"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels","tuiLineChartHint"],[4,"ngIf","ngIfElse"],["line",""],["class","chart",3,"height","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","value"],["class","chart",3,"height","width","value",4,"ngFor","ngForOf"],[1,"chart",3,"height","width","value"],[1,"tui-space_bottom-2"],[1,"value"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-notification"),s["\u0275\u0275i18nStart"](1,j),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p",0),s["\u0275\u0275elementStart"](4,"tui-input-date-range",1),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.data=e}))("ngModelChange",(function(e){return t.onDataChange(e)})),s["\u0275\u0275text"](5," Data "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"tui-input-date-range",2),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.show=e})),s["\u0275\u0275text"](7," Visible range "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"p",3),s["\u0275\u0275template"](9,$,3,1,"span",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](10,F,4,6,"tui-axes",5),s["\u0275\u0275pipe"](11,"async"),s["\u0275\u0275pipe"](12,"labels"),s["\u0275\u0275template"](13,z,5,2,"ng-template",null,6,s["\u0275\u0275templateRefExtractor"])),2&e&&(s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("maxLength",t.maxLength)("ngModel",t.data),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("maxLength",t.maxLength)("ngModel",t.show),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngForOf",t.days),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](11,6,s["\u0275\u0275pipeBind1"](12,8,t.show))))},directives:[O.a,f.a,r.NgControlStatus,r.NgModel,a.s,a.t,b.a,D.a,S.a,T.a,L.a],pipes:[a.b,w,A.a,V.a],styles:['.axes[_ngcontent-%COMP%]{height:12.5rem}.controls[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.controls[_ngcontent-%COMP%]   .b-form[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1}.legend[_ngcontent-%COMP%]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.item[_ngcontent-%COMP%], .legend[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.item[_ngcontent-%COMP%]{color:var(--tui-support-01);margin:0 .75rem}.item[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.item[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}.item[_ngcontent-%COMP%]:before{content:"";border-bottom:.125rem solid;width:1rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{color:var(--tui-text-01)}.value[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.chart[_ngcontent-%COMP%]{color:var(--tui-support-01);position:absolute;top:0;left:0;width:100%;height:100%}.chart[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.chart[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}'],changeDetection:0}),Object(h.b)([u.tuiPure],N.prototype,"getWidth",null),Object(h.b)([u.tuiPure],N.prototype,"getDate",null),Object(h.b)([u.tuiPure],N.prototype,"computeRange",null),Object(h.b)([u.tuiPure],N.prototype,"computeData",null),N),U=n("EPR0"),X=n("yHor"),G=n("zGJC"),Y=n("u8jZ"),J=["header",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241f564c05c6be43d102bc2b0bbeace4ff3bdc8b5fea\u241f8320178618805624268:LineDaysChart"])))];H=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f8b3686ee0181ab81f9ff51025cf35b0a03e625e7\u241f590759144044987818:Line chart but for days"])));var K,Z,q,Q,ee,te,ne,ae,re,ie,oe=["heading",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"])))],le=["heading",$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241fe75362b1b5b0d9038fcafc9670ef18bba17e61d0\u241f7049130908974374044:Complex"])))];function ue(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,H),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](3,oe),s["\u0275\u0275element"](4,"tui-line-days-chart-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](6,le),s["\u0275\u0275element"](7,"tui-line-days-chart-example-2"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",n.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example2)}}function ce(e,t){1&e&&s["\u0275\u0275i18n"](0,K)}function me(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,Z),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"]())}function pe(e,t){1&e&&s["\u0275\u0275i18n"](0,q)}function se(e,t){1&e&&s["\u0275\u0275i18n"](0,Q)}function de(e,t){1&e&&s["\u0275\u0275i18n"](0,ee)}function ye(e,t){1&e&&s["\u0275\u0275i18n"](0,te)}function ge(e,t){1&e&&s["\u0275\u0275i18n"](0,ne)}function he(e,t){1&e&&s["\u0275\u0275i18n"](0,ae)}function fe(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"tui-axes",4),s["\u0275\u0275pipe"](2,"async"),s["\u0275\u0275element"](3,"tui-line-days-chart",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-doc-documentation"),s["\u0275\u0275template"](5,ce,1,0,"ng-template",6),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().dots=e})),s["\u0275\u0275template"](6,me,3,0,"ng-template",7),s["\u0275\u0275pipe"](7,"async"),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().hintContent=e})),s["\u0275\u0275template"](8,pe,1,0,"ng-template",8),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().height=e})),s["\u0275\u0275template"](9,se,1,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().y=e})),s["\u0275\u0275template"](10,de,1,0,"ng-template",10),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().smoothingFactor=e})),s["\u0275\u0275template"](11,ye,1,0,"ng-template",11),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().value=e})),s["\u0275\u0275template"](12,ge,1,0,"ng-template",12),s["\u0275\u0275pipe"](13,"async"),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().xStringify=e})),s["\u0275\u0275template"](14,he,1,0,"ng-template",13),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().yStringify=e})),s["\u0275\u0275elementEnd"]()}if(2&e){var a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("verticalLines",3)("horizontalLines",4)("axisXLabels",s["\u0275\u0275pipeBind1"](2,23,a.labels$)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("value",a.value)("y",a.y)("height",a.height)("hintContent",a.hintContent)("xStringify",a.xStringify)("yStringify",a.yStringify)("smoothingFactor",a.smoothingFactor)("dots",a.dots),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValue",a.dots),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",s["\u0275\u0275pipeBind1"](7,25,a.hintContentVariants$))("documentationPropertyValue",a.hintContent),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValue",a.height),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",a.y),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",a.smoothingFactor),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",a.valueVariants)("documentationPropertyValue",a.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",s["\u0275\u0275pipeBind1"](13,27,a.xStringifyVariants$))("documentationPropertyValue",a.xStringify),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValues",a.yStringifyVariants)("documentationPropertyValue",a.yStringify)}}function be(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",14),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,re),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,ie),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}K=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241fc4d83e70435953f62ccae3cbf6016420df475424\u241f4740076445307023096: Show dots on chart "]))),Z=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241fbedcb3b37d5f24d2f77a8c3cb483fdf13759efd7\u241f6338178794566893901: Content of hint for hover. It has ",":START_TAG_CODE:$implicit",":CLOSE_TAG_CODE: in context with a tuple ",":START_TAG_CODE:[TuiDay, number]",":CLOSE_TAG_CODE:"])),"[\ufffd#1\ufffd|\ufffd#2\ufffd]","[\ufffd/#1\ufffd|\ufffd/#2\ufffd]","[\ufffd#1\ufffd|\ufffd#2\ufffd]","[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"),Z=s["\u0275\u0275i18nPostprocess"](Z),q=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241f1148b851b9d07a503fe83074185fada4c56bc932\u241f4329060505650601384: Axis Y range, pixel scale is 1:1 "]))),Q=$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241ff33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7\u241f9084820970498059965: Start of Y axis "]))),ee=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241fdbcff3658adbc7241a4e120d0403b9b59203cf6f\u241f7622132382477188848: Smoothing factor from 0 to 99 "]))),te=$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241f2eb20b3adec45476e892d48624603eec29f04ca7\u241f620827304048157009: Array of data "]))),ne=$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241fa95376fd00f2c7de89ef1205191f686e9bb93ceb\u241f8840512580092681625: Function to stringify a value number to a string in axis X hint "]))),ae=$localize(_templateObject13||(_templateObject13=_taggedTemplateLiteral([":\u241faa03eea8f292367391947b1ee6d45d8e5fe1c884\u241f8439308556823064311: Function to stringify a value number to a string in axis Y hint "]))),re=$localize(_templateObject14||(_templateObject14=_taggedTemplateLiteral([":\u241f3faf4a45d660c91f821e2f11c0184ec80a25404a\u241f5226796676451500758: Import ",":START_TAG_CODE:TuiLineDaysChartModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),ie=$localize(_templateObject15||(_templateObject15=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var Te,xe,ve=((xe=_createClass((function e(t){_classCallCheck(this,e),this.months$=t,this.exampleImportModule="import {TuiLineDaysChartModule} from '@taiga-ui/addon-charts';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiLineDaysChartModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-line-days-chart [y]="0" [height]="100" [value]="value"></tui-line-days-chart>\n',this.example1={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiDay,\n    TuiDayLike,\n    TuiDayRange,\n    TuiMonth,\n    tuiPure,\n    TuiStringHandler,\n} from '@taiga-ui/cdk';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n// @dynamic\n@Component({\n    selector: 'tui-line-days-chart-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLineDaysChartExample1 {\n    range = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({year: 1}),\n    );\n\n    readonly maxLength: TuiDayLike = {month: 12};\n\n    readonly xStringify$: Observable<TuiStringHandler<TuiDay>> = this.months$.pipe(\n        map(\n            months =>\n                ({month, day}) =>\n                    `${months[month]}, ${day}`,\n        ),\n    );\n\n    constructor(\n        @Inject(TUI_MONTHS) private readonly months$: Observable<readonly string[]>,\n    ) {}\n\n    get value(): ReadonlyArray<[TuiDay, number]> {\n        return this.computeValue(this.range);\n    }\n\n    @tuiPure\n    computeLabels$({from, to}: TuiDayRange): Observable<readonly string[]> {\n        return this.months$.pipe(\n            map(months =>\n                Array.from(\n                    {length: TuiMonth.lengthBetween(from, to) + 1},\n                    (_, i) => months[from.append({month: i}).month],\n                ),\n            ),\n        );\n    }\n\n    readonly yStringify: TuiStringHandler<number> = y =>\n        `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`;\n\n    @tuiPure\n    private computeValue({from, to}: TuiDayRange): ReadonlyArray<[TuiDay, number]> {\n        return new Array(TuiDay.lengthBetween(from, to) + 1)\n            .fill(0)\n            .reduce<ReadonlyArray<[TuiDay, number]>>(\n                (array, _, i) => [\n                    ...array,\n                    [\n                        from.append({day: i}),\n                        (i ? array[i - 1][1] : 100) + Math.random() * 10 - 5,\n                    ],\n                ],\n                [],\n            );\n    }\n}\n",HTML:'<p class="b-form">\n    <tui-input-date-range [maxLength]="maxLength" [(ngModel)]="range">\n        Range\n    </tui-input-date-range>\n</p>\n<tui-axes\n    *ngIf="computeLabels$(range) | async as labels"\n    class="axes"\n    [verticalLines]="labels.length"\n    [horizontalLines]="4"\n    [axisXLabels]="labels"\n>\n    <tui-line-days-chart\n        class="chart"\n        [height]="200"\n        [value]="value"\n        [yStringify]="yStringify"\n        [xStringify]="xStringify$ | async"\n    ></tui-line-days-chart>\n</tui-axes>\n',LESS:".axes {\n    height: 12.5rem;\n    color: #bc71c9;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    TuiDay,\n    TuiDayLike,\n    TuiDayRange,\n    TuiMapper,\n    TuiMatcher,\n    tuiPure,\n} from '@taiga-ui/cdk';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-line-days-chart-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TuiLineDaysChartExample2 {\n    data = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({month: 5}),\n    );\n\n    show = this.data;\n\n    days: ReadonlyArray<ReadonlyArray<[TuiDay, number]>> = this.computeArrays(this.data);\n\n    readonly maxLength: TuiDayLike = {month: 6};\n\n    get range(): TuiDayRange {\n        return this.computeRange(this.show);\n    }\n\n    @tuiPure\n    getWidth({from, to}: TuiDayRange): number {\n        return TuiDay.lengthBetween(from, to);\n    }\n\n    @tuiPure\n    getDate(day: number | TuiDay, date: TuiDay): TuiDay {\n        return day instanceof TuiDay ? day : date.append({day});\n    }\n\n    readonly filter: TuiMatcher<[TuiDay, number]> = ([day], {from, to}: TuiDayRange) =>\n        day.daySameOrAfter(from) && day.daySameOrBefore(to);\n\n    readonly toNumbers: TuiMapper<\n        ReadonlyArray<[TuiDay, number]>,\n        ReadonlyArray<TuiPoint>\n    > = (days, {from}: TuiDayRange) =>\n        days.map(\n            ([day, value]) =>\n                [TuiDay.lengthBetween(from, day), value] as [number, number],\n        );\n\n    onDataChange(data: TuiDayRange) {\n        this.days = this.computeArrays(data);\n    }\n\n    @tuiPure\n    private computeRange(range: TuiDayRange): TuiDayRange {\n        const {from, to} = range;\n        const length = TuiDay.lengthBetween(from, to);\n        const dayOfWeekFrom = from.dayOfWeek();\n        const dayOfWeekTo = to.dayOfWeek();\n        const mondayFrom = dayOfWeekFrom ? from.append({day: 7 - dayOfWeekFrom}) : from;\n        const mondayTo = dayOfWeekTo ? to.append({day: 7 - dayOfWeekTo}) : to;\n        const mondaysLength = TuiDay.lengthBetween(mondayFrom, mondayTo);\n\n        if (length > 60) {\n            return new TuiDayRange(\n                mondayFrom,\n                mondayTo.append({day: mondaysLength % 14}),\n            );\n        }\n\n        if (length > 14) {\n            return new TuiDayRange(mondayFrom, mondayTo);\n        }\n\n        if (length > 7) {\n            return new TuiDayRange(from, to.append({day: length % 2}));\n        }\n\n        return range;\n    }\n\n    // Random data generation\n    @tuiPure\n    private computeData(\n        {from, to}: TuiDayRange,\n        initial: number,\n    ): ReadonlyArray<[TuiDay, number]> {\n        return new Array(TuiDay.lengthBetween(from, to) + 1)\n            .fill(0)\n            .reduce<ReadonlyArray<[TuiDay, number]>>(\n                (array, _, i) => [\n                    ...array,\n                    [\n                        from.append({day: i}),\n                        Math.max(\n                            (i ? array[i - 1][1] : initial) + Math.random() * 10 - 5,\n                            0,\n                        ),\n                    ],\n                ],\n                [],\n            )\n            .filter(([day]) => day.dayOfWeek() < 5);\n    }\n\n    private computeArrays(\n        data: TuiDayRange,\n    ): ReadonlyArray<ReadonlyArray<[TuiDay, number]>> {\n        return [\n            this.computeData(data, 100),\n            this.computeData(data, 75),\n            this.computeData(data, 50),\n        ];\n    }\n}\n",HTML:'<tui-notification i18n>\n    <code>TuiLineDaysChart</code>\n    is used to show data of several months to simplify working with different\n    number of days in months\n</tui-notification>\n<p class="controls">\n    <tui-input-date-range\n        class="b-form"\n        [maxLength]="maxLength"\n        [(ngModel)]="data"\n        (ngModelChange)="onDataChange($event)"\n    >\n        Data\n    </tui-input-date-range>\n    <tui-input-date-range\n        class="b-form tui-space_left-4"\n        [maxLength]="maxLength"\n        [(ngModel)]="show"\n    >\n        Visible range\n    </tui-input-date-range>\n</p>\n<p class="legend">\n    <span *ngFor="let chart of days; let index = index" class="item">\n        <small class="name">Chart {{index + 1}}</small>\n    </span>\n</p>\n<tui-axes\n    *ngIf="show | labels | async as labels"\n    class="axes"\n    [verticalLines]="labels.length"\n    [horizontalLines]="4"\n    [axisXLabels]="labels"\n    [tuiLineChartHint]="hint"\n>\n    <ng-container *ngIf="getWidth(show) > 90; else line">\n        <tui-line-days-chart\n            *ngFor="let chart of days"\n            class="chart"\n            [height]="200"\n            [value]="chart | tuiFilter : filter : range"\n        ></tui-line-days-chart>\n    </ng-container>\n    <ng-template #line>\n        <tui-line-chart\n            *ngFor="let chart of days"\n            class="chart"\n            [height]="200"\n            [width]="getWidth(range)"\n            [value]="chart | tuiFilter : filter : range | tuiMapper : toNumbers : range"\n        ></tui-line-chart>\n    </ng-template>\n</tui-axes>\n\n<ng-template #hint let-data>\n    <div class="tui-space_bottom-2">\n        <strong>{{getDate(data[0][0], range.from)}}</strong>\n    </div>\n    <div>\n        <div *ngFor="let point of data" class="item">\n            <span class="value">${{point[1].toFixed(0)}}</span>\n        </div>\n    </div>\n</ng-template>\n',LESS:"@import 'taiga-ui-local';\n\n.color() {\n    color: var(--tui-support-01);\n\n    &:first-child {\n        color: var(--tui-support-08);\n    }\n\n    &:last-child {\n        color: var(--tui-support-12);\n    }\n}\n\n.axes {\n    height: 12.5rem;\n}\n\n.controls {\n    display: flex;\n\n    .b-form {\n        flex: 1;\n    }\n}\n\n.legend {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item {\n    .color();\n    display: flex;\n    align-items: center;\n    margin: 0 0.75rem;\n\n    &:before {\n        content: '';\n        border-bottom: 0.125rem solid;\n        width: 1rem;\n        margin-right: 0.5rem;\n    }\n}\n\n.name {\n    color: var(--tui-text-01);\n}\n\n.value {\n    color: var(--tui-text-01-night);\n}\n\n.chart {\n    .color();\n    .fullsize();\n}\n",Pipe:"import {Inject, Pipe, PipeTransform} from '@angular/core';\nimport {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {Observable, of} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n// @dynamic\n@Pipe({\n    name: 'labels',\n})\nexport class LabelsPipe implements PipeTransform {\n    constructor(\n        @Inject(TUI_MONTHS) private readonly months$: Observable<readonly string[]>,\n    ) {}\n\n    transform({from, to}: TuiDayRange): Observable<readonly string[]> {\n        const length = TuiDay.lengthBetween(from, to);\n\n        if (length > 90) {\n            return this.months$.pipe(\n                map(months =>\n                    Array.from(\n                        {length: TuiMonth.lengthBetween(from, to) + 1},\n                        (_, i) => months[from.append({month: i}).month],\n                    ),\n                ),\n            );\n        }\n\n        const range = Array.from({length}, (_, day) => from.append({day}));\n        const mondays = onlyMondays(range);\n        const days = range.map(String);\n\n        if (length > 60) {\n            return of(even(mondays));\n        }\n\n        if (length > 14) {\n            return of(mondays);\n        }\n\n        if (length > 7) {\n            return of(even(days));\n        }\n\n        return of(days);\n    }\n}\n\nfunction onlyMondays(range: ReadonlyArray<TuiDay>): readonly string[] {\n    return range.filter(day => !day.dayOfWeek()).map(String);\n}\n\nfunction even<T>(array: ReadonlyArray<T>): ReadonlyArray<T> {\n    return array.filter((_, i) => !(i % 2));\n}\n"},this.valueVariants=[new Array(91).fill(0).reduce((function(e,t,n){return[].concat(_toConsumableArray(e),[[new u.TuiDay(2020,0,1).append({day:n}),(n?e[n-1][1]:100)+20*Math.random()-10]])}),[]),[[new u.TuiDay(2020,1,10),10],[new u.TuiDay(2020,1,15),150],[new u.TuiDay(2020,1,17),10],[new u.TuiDay(2020,1,20),10],[new u.TuiDay(2020,1,25),150],[new u.TuiDay(2020,1,27),10]]],this.value=this.valueVariants[0],this.labels$=this.months$.pipe(Object(p.a)((function(e){return Array.from({length:3},(function(t,n){return e[n]}))}))),this.yStringifyVariants=[function(e){return(10*e).toLocaleString("en-US",{maximumFractionDigits:0})+" $"}],this.xStringifyVariants$=this.months$.pipe(Object(p.a)((function(e){return[function(t){var n=t.month,a=t.day;return"".concat(e[n],", ").concat(a)}]}))),this.hintContentVariants$=this.months$.pipe(Object(p.a)((function(e){return["",function(t){var n=t.$implicit;return"".concat(e[n[0].month],", ").concat(n[0].day,"\n").concat((10*n[1]).toLocaleString("en-US",{maximumFractionDigits:0})," $")}]}))),this.yStringify=null,this.xStringify=null,this.hintContent="",this.dots=!1,this.smoothingFactor=0,this.y=0,this.height=200}))).\u0275fac=function(e){return new(e||xe)(s["\u0275\u0275directiveInject"](c.TUI_MONTHS))},xe.\u0275cmp=s["\u0275\u0275defineComponent"]({type:xe,selectors:[["example-tui-line-days-chart"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","complex",3,"content",6,"heading"],[1,"axes",3,"verticalLines","horizontalLines","axisXLabels"],[3,"value","y","height","hintContent","xStringify","yStringify","smoothingFactor","dots"],["documentationPropertyName","dots","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","height","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","y","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","smoothingFactor","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","[TuiDay, number][]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","xStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<TuiDay> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","yStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,J),s["\u0275\u0275template"](2,ue,8,2,"ng-template",1),s["\u0275\u0275template"](3,fe,15,29,"ng-template",1),s["\u0275\u0275template"](4,be,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[d.a,y.a,g.a,C,W,U.a,b.a,T.a,X.a,G.a,Y.a],pipes:[a.b],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:45.5rem;color:#bc71c9}"],changeDetection:0}),xe),_e=((Te=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=s["\u0275\u0275defineNgModule"]({type:Te}),Te.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Te)},imports:[[a.c,r.FormsModule,o.TuiAxesModule,m.TuiSelectModule,o.TuiLineChartModule,u.TuiMapperPipeModule,c.TuiNotificationModule,u.TuiFilterPipeModule,o.TuiLineDaysChartModule,m.TuiInputDateRangeModule,l.h,i.f.forChild(Object(l.o)(ve))]]}),Te)}}]);