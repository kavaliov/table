(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],[,,,,,,,,function(t,e,c){t.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",opened:"ChangeBackground_opened__2cpzw",colorButton:"ChangeBackground_colorButton__2QEDl"}},,,function(t,e,c){t.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG"}},function(t,e,c){t.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},,function(t,e,c){t.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}},,function(t,e,c){t.exports={wrapper:"TextEdit_wrapper__3ANjp"}},function(t,e,c){t.exports={wrapper:"SelectionMenu_wrapper__2E3fb"}},function(t,e,c){t.exports={wrapper:"AddCol_wrapper__2LYv8"}},function(t,e,c){t.exports={wrapper:"AddRow_wrapper__g2LGC"}},,,,,,function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),o=c(15),r=c.n(o),i=c(4),l=c(5),s=n.createContext(null),d={editableCol:0,touched:!1,selectionState:{selected:!1},rows:[]},u=c(2),b=c(3),j=Object(b.createStandardAction)("TABLE/SET_START_SELECTION")(),f=Object(b.createStandardAction)("TABLE/SET_END_SELECTION")(),p=Object(b.createStandardAction)("TABLE/SET_SELECTED_SELECTION")(),O=Object(b.createStandardAction)("TABLE/SET_TOUCHED")(),w=Object(b.createStandardAction)("TABLE/CLEAR_SELECTION")(),x=Object(b.createStandardAction)("TABLE/ROWS_UPDATE")(),S=Object(b.createStandardAction)("TABLE/SET_EDITABLE_COL")(),_=Object(b.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),h=Object(b.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),m=Object(b.createReducer)(d).handleAction(j,(function(t,e){var c=e.payload.positionStart;return Object(u.a)(Object(u.a)({},t),{},{selectionState:Object(u.a)(Object(u.a)({},t.selectionState),{},{start:c})})})).handleAction(f,(function(t,e){var c=e.payload.positionEnd;return Object(u.a)(Object(u.a)({},t),{},{selectionState:Object(u.a)(Object(u.a)({},t.selectionState),{},{end:c})})})).handleAction(O,(function(t,e){var c=e.payload.touched;return Object(u.a)(Object(u.a)({},t),{},{touched:c})})).handleAction(p,(function(t,e){var c=e.payload.selected;return Object(u.a)(Object(u.a)({},t),{},{selectionState:Object(u.a)(Object(u.a)({},t.selectionState),{},{selected:c})})})).handleAction(w,(function(t){return Object(u.a)(Object(u.a)({},t),{},{selectionState:{selected:!1}})})).handleAction(x,(function(t,e){var c=e.payload.rows;return Object(u.a)(Object(u.a)({},t),{},{rows:c})})).handleAction(S,(function(t,e){var c=e.payload.editableCol;return Object(u.a)(Object(u.a)({},t),{},{editableCol:c})})).handleAction(_,(function(t,e){var c=e.payload,n=c.colId,a=c.rowId,o=c.content,r=t.rows;return r[a-1].cols[n-1].content=o,Object(u.a)(Object(u.a)({},t),{},{rows:r})})).handleAction(h,(function(t,e){var c=e.payload,n=c.colId,a=c.rowId,o=c.background,r=t.rows;return r[a-1].cols[n-1].background=o,Object(u.a)(Object(u.a)({},t),{},{rows:r})})),I={content:"",type:"text",display:!0},v=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffd6e7","#ffccc7"],E=c(6),C=c.n(E),A=function(t,e){return{row:{min:t.rowId<e.rowId?t.rowId:e.rowId,max:t.rowId<e.rowId?e.rowId:t.rowId},col:{min:t.colId<e.colId?t.colId:e.colId,max:t.colId<e.colId?e.colId:t.colId}}},g=function(t,e,c){var n=A(t,e);return c.rowId>=n.row.min&&c.rowId<=n.row.max&&c.colId>=n.col.min&&c.colId<=n.col.max},T=function(t){if(t.start&&t.end){var e=A(t.start,t.end);return(e.row.max-e.row.min+1)*(e.col.max-e.col.min+1)}return 0},y=c(14),B=c.n(y),L=c(16),N=c.n(L),k=c(0),D=function(t){var e=t.value,c=t.colId,o=t.rowId,r=a.a.useContext(s).dispatch,i=Object(n.useRef)(null);a.a.useEffect((function(){i.current&&i.current.focus()}),[]);var l=function(t){r(_({rowId:o,colId:c,content:t.target.value})),r(S({editableCol:0}))};return Object(k.jsx)("input",{ref:i,defaultValue:e,onBlur:l,onKeyDown:function(t){"Enter"===t.code&&l(t)},className:N.a.wrapper})},R=function(t){var e=t.colData,c=t.rowId,o=a.a.useState(!1),r=Object(l.a)(o,2),d=r[0],u=r[1],b=a.a.useState(!1),x=Object(l.a)(b,2),S=x[0],_=x[1],h=a.a.useContext(s),m=h.state,I=h.dispatch,v=Object(n.useRef)(null);if(a.a.useEffect((function(){m.selectionState.start&&m.selectionState.end?u(g(m.selectionState.start,m.selectionState.end,{rowId:c,colId:e.id})):u(!1),m.editableCol===+"".concat(c).concat(e.id)?_(!0):_(!1)}),[m,c,e,v]),!e.display)return null;return Object(k.jsxs)("td",{id:"col-".concat(c,"-").concat(e.id),onMouseDown:function(){I(w()),I(O({touched:!0})),I(j({positionStart:{rowId:c,colId:e.id}}))},onMouseUp:function(){I(O({touched:!1})),I(p({selected:!0})),I(f({positionEnd:{rowId:c,colId:e.id}}))},onMouseEnter:function(){m.touched&&I(f({positionEnd:{rowId:c,colId:e.id}}))},colSpan:e.colSpan,rowSpan:e.rowSpan,className:C()(B.a.wrapper,Object(i.a)({},B.a.selected,d)),style:{background:e.background},children:[S&&"text"===e.type&&Object(k.jsx)(D,{value:e.content,rowId:c,colId:e.id}),!S&&e.content]})},M=function(t){var e=t.rowData;return Object(k.jsx)("tr",{style:{height:e.height||45},children:e.cols.map((function(t){return Object(k.jsx)(R,{colData:t,rowId:e.id},t.id)}))})},U=c(11),J=c.n(U),P=function(t){var e,c=t.children,n=t.onClick,a=t.className,o=t.style,r=t.active,l=void 0!==r&&r,s=t.disabled,d=void 0!==s&&s;return Object(k.jsx)("button",{disabled:d,onClick:n,className:C()(J.a.wrapper,a,(e={},Object(i.a)(e,J.a.active,l),Object(i.a)(e,J.a.disabled,d),e)),style:o,children:c})},G=c.p+"static/media/merge.3b22c6cb.svg",F=function(){var t=a.a.useState(0),e=Object(l.a)(t,2),c=e[0],n=e[1],o=a.a.useContext(s),r=o.state,i=o.dispatch;if(a.a.useEffect((function(){n(T(r.selectionState))}),[r]),c<=1)return null;return Object(k.jsx)(P,{onClick:function(){!function(t,e){var c=t.selectionState,n=t.rows;if(c.end&&c.start){var a=A(c.start,c.end),o=a.col.max+1-a.col.min,r=a.row.max+1-a.row.min,i={row:a.row.min,col:a.col.min};o>1&&(n[i.row-1].cols[i.col-1].colSpan=o),r>1&&(n[i.row-1].cols[i.col-1].rowSpan=r),n.forEach((function(t){t.cols=t.cols.map((function(e){return!g(c.start,c.end,{rowId:t.id,colId:e.id})||i.row===t.id&&i.col===e.id?e:Object(u.a)(Object(u.a)({},e),{},{display:!1})}))})),e(x({rows:n})),e(w())}}(r,i)},children:Object(k.jsx)("img",{src:G,alt:"Merge",style:{width:40}})})},K=c.p+"static/media/edit.9fdc44c8.svg",V=function(){var t=a.a.useContext(s),e=t.dispatch,c=t.state;if(T(c.selectionState)>1)return null;return Object(k.jsx)(P,{onClick:function(){c.selectionState.start&&e(S({editableCol:+"".concat(c.selectionState.start.rowId).concat(c.selectionState.start.colId)}))},children:Object(k.jsx)("img",{src:K,alt:""})})},W=c.p+"static/media/bg-colors.a8cef9f9.svg",q=c(8),z=c.n(q),H=function(){var t=a.a.useContext(s),e=t.state,c=t.dispatch,n=a.a.useState(!1),o=Object(l.a)(n,2),r=o[0],d=o[1];return Object(k.jsxs)("div",{className:z.a.wrapper,children:[Object(k.jsx)(P,{active:r,onClick:function(){return d((function(t){return!t}))},children:Object(k.jsx)("img",{src:W,alt:""})}),Object(k.jsx)("div",{className:C()(z.a.colors,Object(i.a)({},z.a.opened,r)),children:v.map((function(t){return Object(k.jsx)("button",{onClick:function(){return function(t){if(e.selectionState.start&&e.selectionState.end){var n=A(e.selectionState.start,e.selectionState.end);c(h({rowId:n.row.min,colId:n.col.min,background:t}))}}(t)},style:{background:t},className:z.a.colorButton},t)}))})]})},Q=c(17),Y=c.n(Q),X=function(){var t=a.a.useContext(s).state,e=a.a.useState(),c=Object(l.a)(e,2),n=c[0],o=c[1];return a.a.useEffect((function(){t.selectionState.start&&t.selectionState.end&&o(function(t,e){var c=A(t,e),n=document.getElementById("col-".concat(c.row.min,"-").concat(c.col.min));return n?{top:n.offsetTop+8,left:n.offsetLeft+8}:{top:0,left:0}}(t.selectionState.start,t.selectionState.end))}),[t]),t.selectionState.selected?Object(k.jsxs)("div",{className:Y.a.wrapper,style:n,children:[Object(k.jsx)(F,{}),Object(k.jsx)(V,{}),Object(k.jsx)(H,{})]}):null},Z=c(10),$=c.p+"static/media/plus-circle.74f4afce.svg",tt=c(18),et=c.n(tt),ct=function(){var t=a.a.useContext(s),e=t.state,c=t.dispatch;return e.rows.length?Object(k.jsxs)(P,{onClick:function(){var t;c(x({rows:(t=e.rows,t.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{cols:[].concat(Object(Z.a)(t.cols),[Object(u.a)({id:t.cols.length+1},I)])})})))}))},className:et.a.wrapper,children:[Object(k.jsx)("img",{src:$,alt:""})," Cell"]}):null},nt=function(t){var e=t[0]?t[0].cols.length:1,c={id:t.length+1,cols:new Array(e).fill(I).map((function(t,e){return Object(u.a)(Object(u.a)({},t),{},{id:e+1})}))};return[].concat(Object(Z.a)(t),[c])},at=c.p+"static/media/plus-circle.74f4afce.svg",ot=c(19),rt=c.n(ot),it=function(){var t=a.a.useContext(s),e=t.dispatch,c=t.state;return Object(k.jsxs)(P,{onClick:function(){e(x({rows:nt(c.rows)}))},className:rt.a.wrapper,children:[Object(k.jsx)("img",{src:at,alt:""})," Row"]})},lt=c(12),st=c.n(lt),dt=function(){var t=a.a.useReducer(m,d),e=Object(l.a)(t,2),c=e[0],n=e[1];return Object(k.jsx)(s.Provider,{value:{dispatch:n,state:c},children:Object(k.jsxs)("div",{className:st.a.wrapper,children:[Object(k.jsx)("table",{className:C()(st.a.table,Object(i.a)({},st.a.filled,!!c.rows.length)),children:Object(k.jsx)("tbody",{children:c.rows.map((function(t){return Object(k.jsx)(M,{rowData:t},t.id)}))})}),Object(k.jsx)(X,{}),Object(k.jsx)(ct,{}),Object(k.jsx)(it,{})]})})};var ut=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(dt,{})})};r.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(ut,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.14eb821c.chunk.js.map