(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n,a=c(4),s=c.n(a),o=c(5),r=c(6),d=c(8),l=c(7),i=c(1),u=(c(13),c(14),c(2)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e.remove="RemoveButton",e.add="AddButton"}(n||(n={}));var m=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e.handleClick=function(t){e.setState({selectedGood:t})},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,c=t?"".concat(t," is selected"):"No goods selected";return Object(j.jsxs)("main",{className:"section container",children:[Object(j.jsxs)("h1",{className:b()("title",{"is-flex is-align-items-center":t}),children:[c,t&&Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.handleClick("")}})]}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(c){var a=t===c,s=a?n.remove:n.add,o=s===n.add?c:"",r=s===n.add?"+":"-";return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":a}),children:[Object(j.jsx)("td",{children:Object(j.jsx)("button",{"data-cy":s,type:"button",className:b()("button",{"is-info":a}),onClick:function(){return e.handleClick(o)},children:r})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})}))})})]})}}]),c}(i.Component);s.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f7f7a4b3.chunk.js.map