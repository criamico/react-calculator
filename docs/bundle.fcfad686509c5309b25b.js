(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{15:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a){if(Object.prototype.hasOwnProperty.call(a,l)){e[l]=a[l]}}}return e};var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var n=a(0);var u=f(n);var i=a(16);var o=f(i);var s=a(20);var c=f(s);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function v(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var y={value:"0"};var h=function(e){v(t,e);function t(e){d(this,t);var a=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.setValue=function(e){var t=a.state.value==="0"?"":a.state.value.toString();var l=t.match(/[-+*/]/g);var r="";if(!l){r=t.split(".").length>=2&&e.target.value==="."?"":e.target.value}else if(l.length>=1){r=t.split(".").length>l.length+1&&e.target.value==="."?"":e.target.value}var n=t+r;a.setState({value:n})};a.resetValue=function(){a.setState(y)};a.getResult=function(){var e=c.default.getExpression(a.state.value);a.setState({value:e})};t.displayName="App";a.state=y;a.testElement=document.getElementById("fcc_test_suite_wrapper");return a}r(t,[{key:"render",value:function e(){var t=this.state.value;var a=[{value:"7",id:"seven",displayValue:"7",onClick:this.setValue},{value:"8",id:"eight",displayValue:"8",onClick:this.setValue},{value:"9",id:"nine",displayValue:"9",onClick:this.setValue}];var r=[{value:"4",id:"four",displayValue:"4",onClick:this.setValue},{value:"5",id:"five",displayValue:"5",onClick:this.setValue},{value:"6",id:"six",displayValue:"6",onClick:this.setValue}];var n=[{value:"1",id:"one",displayValue:"1",onClick:this.setValue},{value:"2",id:"two",displayValue:"2",onClick:this.setValue},{value:"3",id:"three",displayValue:"3",onClick:this.setValue}];var i=[{value:".",id:"decimal",displayValue:".",onClick:this.setValue},{value:"0",id:"zero",displayValue:"0",onClick:this.setValue},{value:"=",id:"equals",displayValue:"=",onClick:this.getResult}];var s=[{value:"+",id:"add",displayValue:"+",onClick:this.setValue},{value:"-",id:"subtract",displayValue:"-",onClick:this.setValue},{value:"*",id:"multiply",displayValue:"*",onClick:this.setValue},{value:"/",id:"divide",displayValue:"/",onClick:this.setValue},{value:"CLR",id:"clear",displayValue:"CLR",onClick:this.resetValue}];return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"calculator"},u.default.createElement("div",{className:"display-div"},u.default.createElement("p",{id:"display",type:"number"},t)),u.default.createElement("div",{className:"keypad"},u.default.createElement("div",{className:"keypad-col-1"},u.default.createElement("div",null,a.map(function(e,t){return u.default.createElement(o.default,l({key:t},e))})),u.default.createElement("div",null,r.map(function(e,t){return u.default.createElement(o.default,l({key:t},e))})),u.default.createElement("div",null,n.map(function(e,t){return u.default.createElement(o.default,l({key:t},e))})),u.default.createElement("div",null,i.map(function(e,t){return u.default.createElement(o.default,l({key:t},e))}))),u.default.createElement("div",{className:"keypad-col-2"},s.map(function(e,t){return u.default.createElement(o.default,l({key:t},e))})))),u.default.createElement("div",{className:"author"},u.default.createElement("p",null,"Created by",u.default.createElement("a",{href:"https://github.com/criamico"}," criamico")," - 2018")))}}]);return t}(u.default.Component);t.default=h},16:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||false;l.configurable=true;if("value"in l)l.writable=true;Object.defineProperty(e,l.key,l)}}return function(t,a,l){if(a)e(t.prototype,a);if(l)e(t,l);return t}}();var r=a(0);var n=o(r);var u=a(17);var i=o(u);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function f(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var d=function(e){f(t,e);function t(e){s(this,t);var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));t.displayName="NumButton";t.propTypes={value:i.default.string,displayValue:i.default.string,id:i.default.string,onClick:i.default.func};return a}l(t,[{key:"render",value:function e(){var t=this.props,a=t.displayValue,l=t.value,r=t.id,u=t.onClick;return n.default.createElement("button",{className:"key-val",value:l,id:r,onClick:u},a)}}]);return t}(n.default.Component);t.default=d},20:function(e,t,a){"use strict";var l={applyOperation:function e(t,a,l){if(!t||!a||Number.isNaN(t)||Number.isNaN(a))return"";var r={"+":t+a,"-":t-a,"*":t*a,"/":t/a};return r[l]},calcExpression:function e(t,a){var l=this;if(t.length<=1||a.length===0)return"";return t.reduce(function(e,t,r){return l.applyOperation(e,t,a[r-1])})},getExpression:function e(t){if(!t)return;var a=t.match(/(\d+\.\d+|\d+)/g);var l=t.match(/[*/+-]/g);if(!a||!l)return;var r=a.length<=l.length?l[l.length-1]:l;var n=a.map(parseFloat);var u=this.calcExpression(n,r);return u}};e.exports=l},21:function(e,t,a){},5:function(e,t,a){"use strict";var l=a(0);var r=s(l);var n=a(7);var u=s(n);var i=a(15);var o=s(i);a(21);function s(e){return e&&e.__esModule?e:{default:e}}u.default.render(r.default.createElement(o.default,null),document.getElementById("app"))}},[[5,1]]]);
//# sourceMappingURL=bundle.fcfad686509c5309b25b.js.map