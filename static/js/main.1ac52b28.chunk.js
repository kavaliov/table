(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{10:function(t,e,c){t.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e"}},12:function(t,e,c){t.exports={wrapper:"SelectionMenu_wrapper__2E3fb"}},18:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),a=c(11),r=c.n(a),i=c(4),d=n.createContext(null),l={touched:!1,selectionState:{selected:!1},rows:[{id:1,height:60,cols:[{id:1,content:"11",type:"text"},{id:2,content:"12",type:"text"},{id:3,content:"13",type:"text"}]},{id:2,height:50,cols:[{id:1,content:"21",type:"text"},{id:2,content:"22",type:"text"},{id:3,content:"23",type:"text"}]},{id:3,height:70,cols:[{id:1,content:"31",type:"text"},{id:2,content:"32",type:"text"},{id:3,content:"33",type:"text"}]}]},s=c(2),u=c(3),p=Object(u.createStandardAction)("TABLE/SET_START_SELECTION")(),b=Object(u.createStandardAction)("TABLE/SET_END_SELECTION")(),j=Object(u.createStandardAction)("TABLE/SET_SELECTED_SELECTION")(),w=Object(u.createStandardAction)("TABLE/SET_TOUCHED")(),O=Object(u.createStandardAction)("TABLE/CLEAR_SELECTION")(),f=Object(u.createStandardAction)("TABLE/ROWS_UPDATE")(),S=Object(u.createReducer)(l).handleAction(p,(function(t,e){var c=e.payload.positionStart;return Object(s.a)(Object(s.a)({},t),{},{selectionState:Object(s.a)(Object(s.a)({},t.selectionState),{},{start:c})})})).handleAction(b,(function(t,e){var c=e.payload.positionEnd;return Object(s.a)(Object(s.a)({},t),{},{selectionState:Object(s.a)(Object(s.a)({},t.selectionState),{},{end:c})})})).handleAction(w,(function(t,e){var c=e.payload.touched;return Object(s.a)(Object(s.a)({},t),{},{touched:c})})).handleAction(j,(function(t,e){var c=e.payload.selected;return Object(s.a)(Object(s.a)({},t),{},{selectionState:Object(s.a)(Object(s.a)({},t.selectionState),{},{selected:c})})})).handleAction(O,(function(t){return Object(s.a)(Object(s.a)({},t),{},{selectionState:{selected:!1}})})).handleAction(f,(function(t,e){var c=e.payload.rows;return Object(s.a)(Object(s.a)({},t),{},{rows:c})})),x=c(5),h=c(6),I=c.n(h),E=function(t,e){return{row:{min:t.rowId<e.rowId?t.rowId:e.rowId,max:t.rowId<e.rowId?e.rowId:t.rowId},col:{min:t.colId<e.colId?t.colId:e.colId,max:t.colId<e.colId?e.colId:t.colId}}},m=function(t,e,c){var n=E(t,e);return c.rowId>=n.row.min&&c.rowId<=n.row.max&&c.colId>=n.col.min&&c.colId<=n.col.max},_=c(9),v=c.n(_),A=c(0),T=function(t){var e=t.colData,c=t.rowId,n=o.a.useContext(d),a=n.state,r=n.dispatch,l=o.a.useState(!1),s=Object(i.a)(l,2),u=s[0],f=s[1];o.a.useEffect((function(){a.selectionState.start&&a.selectionState.end?f(m(a.selectionState.start,a.selectionState.end,{rowId:c,colId:e.id})):f(!1)}),[a,c,e]);return Object(A.jsx)("td",{id:"col-".concat(c,"-").concat(e.id),onMouseDown:function(){r(O()),r(w({touched:!0})),r(p({positionStart:{rowId:c,colId:e.id}}))},onMouseUp:function(){r(w({touched:!1})),r(j({selected:!0})),r(b({positionEnd:{rowId:c,colId:e.id}}))},onMouseEnter:function(){a.touched&&r(b({positionEnd:{rowId:c,colId:e.id}}))},colSpan:e.colSpan,rowSpan:e.rowSpan,className:I()(v.a.wrapper,Object(x.a)({},v.a.selected,u)),children:e.content})},y=function(t){var e=t.rowData;return Object(A.jsx)("tr",{style:{height:e.height},children:e.cols.map((function(t){return Object(A.jsx)(T,{colData:t,rowId:e.id},t.id)}))})},C=c(7),L=c.n(C),N=function(t){var e,c=t.children,n=t.onClick,o=t.className,a=t.style,r=t.active,i=void 0!==r&&r,d=t.disabled,l=void 0!==d&&d;return Object(A.jsx)("button",{disabled:l,onClick:n,className:I()(L.a.wrapper,o,(e={},Object(x.a)(e,L.a.active,i),Object(x.a)(e,L.a.disabled,l),e)),style:a,children:c})},B=function(){var t=o.a.useState(0),e=Object(i.a)(t,2),c=e[0],n=e[1],a=o.a.useContext(d),r=a.state,l=a.dispatch;if(o.a.useEffect((function(){n(function(t){if(t.start&&t.end){var e=E(t.start,t.end);return(e.row.max-e.row.min+1)*(e.col.max-e.col.min+1)}return 0}(r.selectionState))}),[r]),c<=1)return null;return Object(A.jsx)(N,{onClick:function(){!function(t,e){var c=t.selectionState,n=t.rows;if(c.end&&c.start){var o=E(c.start,c.end),a=o.col.max+1-o.col.min,r=o.row.max+1-o.row.min,i={row:o.row.min,col:o.col.min};a>1&&(n[i.row-1].cols[i.col-1].colSpan=a),r>1&&(n[i.row-1].cols[i.col-1].rowSpan=r),n.forEach((function(t){t.cols=t.cols.filter((function(e){return t.id===i.row&&e.id===i.col||!m(c.start,c.end,{rowId:t.id,colId:e.id})}))})),e(f({rows:n})),e(O())}}(r,l)},children:"Merge"})},D=c(12),g=c.n(D),M=function(){var t=o.a.useContext(d).state,e=o.a.useState(),c=Object(i.a)(e,2),n=c[0],a=c[1];return o.a.useEffect((function(){t.selectionState.start&&t.selectionState.end&&a(function(t,e){var c=E(t,e),n=document.getElementById("col-".concat(c.row.min,"-").concat(c.col.min));return n?{top:n.offsetTop+8,left:n.offsetLeft+8}:{top:0,left:0}}(t.selectionState.start,t.selectionState.end))}),[t]),t.selectionState.selected?Object(A.jsx)("div",{className:g.a.wrapper,style:n,children:Object(A.jsx)(B,{})}):null},k=c(10),R=c.n(k),J=function(){var t=o.a.useReducer(S,l),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(A.jsx)(d.Provider,{value:{dispatch:n,state:c},children:Object(A.jsxs)("div",{className:R.a.wrapper,children:[Object(A.jsx)("table",{className:R.a.table,children:Object(A.jsx)("tbody",{children:c.rows.map((function(t){return Object(A.jsx)(y,{rowData:t},t.id)}))})}),Object(A.jsx)(M,{})]})})};var U=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(J,{})})};r.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(U,{})}),document.getElementById("root"))},7:function(t,e,c){t.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG"}},9:function(t,e,c){t.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}}},[[18,1,2]]]);
//# sourceMappingURL=main.1ac52b28.chunk.js.map