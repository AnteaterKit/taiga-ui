function _slicedToArray(t,r){return _arrayWithHoles(t)||_iterableToArrayLimit(t,r)||_unsupportedIterableToArray(t,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,r):void 0}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function _iterableToArrayLimit(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,i,a=[],o=!0,u=!1;try{for(n=n.call(t);!(o=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);o=!0);}catch(l){u=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(u)throw i}}return a}}function _arrayWithHoles(t){if(Array.isArray(t))return t}(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{rgiy:function(t,r,n){"use strict";n.r(r),n.d(r,"Image",(function(){return a})),n.d(r,"default",(function(){return a})),n.d(r,"inputRegex",(function(){return i}));var e=n("jgtz"),i=/(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))/,a=e.Node.create({name:"image",addOptions:function(){return{inline:!1,HTMLAttributes:{}}},inline:function(){return this.options.inline},group:function(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes:function(){return{src:{default:null},alt:{default:null},title:{default:null}}},parseHTML:function(){return[{tag:"img[src]"}]},renderHTML:function(t){var r=t.HTMLAttributes;return["img",Object(e.mergeAttributes)(this.options.HTMLAttributes,r)]},addCommands:function(){var t=this;return{setImage:function(r){return function(n){return n.commands.insertContent({type:t.name,attrs:r})}}}},addInputRules:function(){return[Object(e.nodeInputRule)({find:i,type:this.type,getAttributes:function(t){var r=_slicedToArray(t,5),n=r[2];return{src:r[3],alt:n,title:r[4]}}})]}})}}]);