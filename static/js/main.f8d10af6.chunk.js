(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(4),s=c.n(n),a=c(5),o=c(6),r=c(8),i=c(7),l=c(1),d=(c(13),c(14),c(2)),u=c.n(d),b=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(r.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={selectedGood:"Jam"},t.pushButton=function(e){t.setState({selectedGood:e})},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this,e=this.state.selectedGood,c=e?"".concat(e," is selected"):"No goods selected";return Object(b.jsxs)("main",{className:"section container",children:[Object(b.jsxs)("h1",{className:u()("title",{"is-flex is-align-items-center":e}),children:[c,e&&Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return t.pushButton("")}})]}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(c){var n=e===c,s=n?"RemoveButton":"AddButton",a="AddButton"===s?c:"",o="AddButton"===s?"+":"-";return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":n}),children:[Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":s,type:"button",className:u()("button",{"is-info":n}),onClick:function(){return t.pushButton(a)},children:o})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})}))})})]})}}]),c}(l.Component);s.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f8d10af6.chunk.js.map