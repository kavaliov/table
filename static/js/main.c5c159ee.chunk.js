(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],[,,,,,,,function(t,e,n){t.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",colorButton:"ChangeBackground_colorButton__2QEDl",transparent:"ChangeBackground_transparent__mqomV"}},function(t,e,n){t.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG"}},function(t,e,n){t.exports={wrapper:"SelectionMenu_wrapper__2E3fb",settingButton:"SelectionMenu_settingButton__2RZd1",menu:"SelectionMenu_menu__3_fZg"}},function(t,e,n){t.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},,function(t,e,n){t.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}},function(t,e,n){t.exports={wrapper:"AddRow_wrapper__3NW4Q",addButton:"AddRow_addButton__1hGob"}},function(t,e,n){t.exports={wrapper:"AddCol_wrapper__OkM3j",addButton:"AddCol_addButton__2VG6f"}},,function(t,e,n){t.exports={wrapper:"TextEdit_wrapper__3ANjp"}},function(t,e,n){t.exports={techCol:"Row_techCol__HSNZB"}},function(t,e,n){t.exports={wrapper:"TechRow_wrapper__2hFdh",techCol:"TechRow_techCol__2RW0-"}},,,,,,function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(15),r=n.n(a),i=n(5),s=n(3),d=c.createContext(null),l={editableCol:0,touched:!1,selectionState:{selected:!1},rows:[{id:1,cols:[{content:"",type:"text",display:!0,id:1},{content:"",type:"text",display:!0,id:2}]}]},u=n(2),b=n(4),f=Object(b.createStandardAction)("TABLE/SET_START_SELECTION")(),j=Object(b.createStandardAction)("TABLE/SET_END_SELECTION")(),p=Object(b.createStandardAction)("TABLE/SET_SELECTED_SELECTION")(),O=Object(b.createStandardAction)("TABLE/SET_TOUCHED")(),w=Object(b.createStandardAction)("TABLE/CLEAR_SELECTION")(),_=Object(b.createStandardAction)("TABLE/ROWS_UPDATE")(),h=Object(b.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),x=Object(b.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),m=Object(b.createReducer)(l).handleAction(f,(function(t,e){var n=e.payload.positionStart;return Object(u.a)(Object(u.a)({},t),{},{selectionState:Object(u.a)(Object(u.a)({},t.selectionState),{},{start:n})})})).handleAction(j,(function(t,e){var n=e.payload.positionEnd;return Object(u.a)(Object(u.a)({},t),{},{selectionState:Object(u.a)(Object(u.a)({},t.selectionState),{},{end:n})})})).handleAction(O,(function(t,e){var n=e.payload.touched;return Object(u.a)(Object(u.a)({},t),{},{touched:n})})).handleAction(p,(function(t,e){var n=e.payload.selected;return Object(u.a)(Object(u.a)({},t),{},{selectionState:Object(u.a)(Object(u.a)({},t.selectionState),{},{selected:n})})})).handleAction(w,(function(t){return Object(u.a)(Object(u.a)({},t),{},{selectionState:{selected:!1}})})).handleAction(_,(function(t,e){var n=e.payload.rows;return Object(u.a)(Object(u.a)({},t),{},{rows:n})})).handleAction(h,(function(t,e){var n=e.payload,c=n.colId,o=n.rowId,a=n.content,r=t.rows;return r[o-1].cols[c-1].content=a,Object(u.a)(Object(u.a)({},t),{},{rows:r})})).handleAction(x,(function(t,e){var n=e.payload,c=n.colId,o=n.rowId,a=n.background,r=t.rows;return r[o-1].cols[c-1].background=a,Object(u.a)(Object(u.a)({},t),{},{rows:r})})),S={content:"",type:"text",display:!0},v=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffccc7"],E=n(6),I=n.n(E),C=function(t,e){return{row:{min:t.rowId<e.rowId?t.rowId:e.rowId,max:t.rowId<e.rowId?e.rowId:t.rowId},col:{min:t.colId<e.colId?t.colId:e.colId,max:t.colId<e.colId?e.colId:t.colId}}},A=function(t,e,n){var c=C(t,e);return n.rowId>=c.row.min&&n.rowId<=c.row.max&&n.colId>=c.col.min&&n.colId<=c.col.max},g=n(12),B=n.n(g),T=n(16),N=n.n(T),y=n(0),k=function(t){var e=t.value,n=t.colId,a=t.rowId,r=t.background,i=t.setEditMode,s=o.a.useContext(d).dispatch,l=Object(c.useRef)(null);o.a.useEffect((function(){l.current&&l.current.focus()}),[]);var u=function(t){s(h({rowId:a,colId:n,content:t.target.value})),i(!1)};return Object(y.jsx)("input",{ref:l,defaultValue:e,onBlur:u,onKeyDown:function(t){"Enter"===t.code&&u(t)},className:N.a.wrapper,style:{background:r}})},L=function(t){var e=t.colData,n=t.rowId,a=o.a.useState(!1),r=Object(s.a)(a,2),l=r[0],u=r[1],b=o.a.useState(!1),_=Object(s.a)(b,2),h=_[0],x=_[1],m=o.a.useContext(d),S=m.state,v=m.dispatch,E=Object(c.useRef)(null);if(o.a.useEffect((function(){S.selectionState.start&&S.selectionState.end?u(A(S.selectionState.start,S.selectionState.end,{rowId:n,colId:e.id})):u(!1)}),[S,n,e,E]),!e.display)return null;return Object(y.jsxs)("td",{id:"col-".concat(n,"-").concat(e.id),onMouseDown:function(){v(w()),v(O({touched:!0})),v(f({positionStart:{rowId:n,colId:e.id}}))},onMouseUp:function(){v(O({touched:!1})),v(p({selected:!0})),v(j({positionEnd:{rowId:n,colId:e.id}}))},onMouseEnter:function(){S.touched&&v(j({positionEnd:{rowId:n,colId:e.id}}))},onDoubleClick:function(){return x(!0)},colSpan:e.colSpan,rowSpan:e.rowSpan,className:I()(B.a.wrapper,Object(i.a)({},B.a.selected,l)),style:{background:e.background},children:[h&&"text"===e.type&&Object(y.jsx)(k,{value:e.content,background:e.background,rowId:n,colId:e.id,setEditMode:x}),!h&&e.content]})},R=function(t,e){var n=t[0]?t[0].cols.length:1,c={id:e+1,cols:Array(n).fill(S).map((function(t,e){return Object(u.a)(Object(u.a)({},t),{},{id:e+1})}))},o=t.map((function(t){return t.id>e?Object(u.a)(Object(u.a)({},t),{},{id:t.id+1}):t}));return o.splice(e,0,c),o},D=n(13),M=n.n(D),U=function(t){var e=t.rowId,n=o.a.useContext(d),c=n.dispatch,a=n.state;return Object(y.jsx)("div",{className:M.a.wrapper,children:Object(y.jsx)("button",{className:M.a.addButton,onClick:function(){c(_({rows:R(a.rows,e)}))},children:"+"})})},G=n(17),J=n.n(G),P=function(t){var e=t.rowData;return Object(y.jsxs)("tr",{style:{height:e.height||45},children:[Object(y.jsx)("td",{className:J.a.techCol,children:Object(y.jsx)(U,{rowId:e.id})}),e.cols.map((function(t){return Object(y.jsx)(L,{colData:t,rowId:e.id},t.id)}))]})},V=n(8),W=n.n(V),F=function(t){var e,n=t.children,c=t.onClick,o=t.onBlur,a=t.className,r=t.style,s=t.active,d=void 0!==s&&s,l=t.disabled,u=void 0!==l&&l;return Object(y.jsx)("button",{disabled:u,onClick:c,onBlur:o,className:I()(W.a.wrapper,a,(e={},Object(i.a)(e,W.a.active,d),Object(i.a)(e,W.a.disabled,u),e)),style:r,children:n})},Z=function(){var t=o.a.useState(0),e=Object(s.a)(t,2),n=e[0],c=e[1],a=o.a.useContext(d),r=a.state,i=a.dispatch;o.a.useEffect((function(){c(function(t){if(t.start&&t.end){var e=C(t.start,t.end);return(e.row.max-e.row.min+1)*(e.col.max-e.col.min+1)}return 0}(r.selectionState))}),[r]);return Object(y.jsx)("li",{children:Object(y.jsx)("button",{disabled:n<=1,onClick:function(){!function(t,e){var n=t.selectionState,c=t.rows;if(n.end&&n.start){var o=C(n.start,n.end),a=o.col.max+1-o.col.min,r=o.row.max+1-o.row.min,i={row:o.row.min,col:o.col.min};a>1&&(c[i.row-1].cols[i.col-1].colSpan=a),r>1&&(c[i.row-1].cols[i.col-1].rowSpan=r),c.forEach((function(t){t.cols=t.cols.map((function(e){return!A(n.start,n.end,{rowId:t.id,colId:e.id})||i.row===t.id&&i.col===e.id?e:Object(u.a)(Object(u.a)({},e),{},{display:!1})}))})),e(_({rows:c})),e(w())}}(r,i)},children:"Merge"})})},q=n(7),H=n.n(q),K=function(){var t=o.a.useContext(d),e=t.state,n=t.dispatch,c=function(t){if(e.selectionState.start&&e.selectionState.end){var c=C(e.selectionState.start,e.selectionState.end);n(x({rowId:c.row.min,colId:c.col.min,background:t}))}};return Object(y.jsxs)("li",{className:H.a.wrapper,children:[Object(y.jsx)("button",{children:"Background color"}),Object(y.jsxs)("div",{className:H.a.colors,children:[Object(y.jsx)("button",{onClick:function(){return c(void 0)},className:I()(H.a.colorButton,H.a.transparent)}),v.map((function(t){return Object(y.jsx)("button",{onClick:function(){return c(t)},style:{background:t},className:H.a.colorButton},t)}))]})]})},Q=n.p+"static/media/setting.5524b19c.svg",z=n(9),X=n.n(z),Y=function(){var t=o.a.useContext(d).state,e=o.a.useState(),n=Object(s.a)(e,2),a=n[0],r=n[1],i=o.a.useState(!1),l=Object(s.a)(i,2),u=l[0],b=l[1],f=function(t,e){var n=(e||{}).eventNames,o=void 0===n?["mousedown","touchstart"]:n,a=c.useRef(null);return c.useEffect((function(){var e=function(e){a.current&&!a.current.contains(e.target)&&t(e)};return o.forEach((function(t){return document.addEventListener(t,e)})),function(){o.forEach((function(t){return document.removeEventListener(t,e)}))}}),[t,o]),a}((function(){return b(!1)}));return o.a.useEffect((function(){t.selectionState.start&&t.selectionState.end&&r(function(t,e){var n=C(t,e),c=document.getElementById("col-".concat(n.row.min,"-").concat(n.col.min));return c?{top:c.offsetTop+5,left:c.offsetLeft+5}:{top:0,left:0}}(t.selectionState.start,t.selectionState.end))}),[t]),t.selectionState.selected?Object(y.jsxs)("div",{className:X.a.wrapper,style:a,children:[Object(y.jsx)(F,{onClick:function(){return b(!u)},className:X.a.settingButton,children:Object(y.jsx)("img",{src:Q,alt:""})}),u&&Object(y.jsxs)("ul",{className:X.a.menu,ref:f,children:[Object(y.jsx)(K,{}),Object(y.jsx)(Z,{})]})]}):null},$=function(t,e){return t.map((function(t){var n=t.cols.map((function(t){return t.id>e?Object(u.a)(Object(u.a)({},t),{},{id:t.id+1}):t})),c=Object(u.a)({id:e+1},S);return n.splice(e,0,c),Object(u.a)(Object(u.a)({},t),{},{cols:n})}))},tt=n(14),et=n.n(tt),nt=function(t){var e=t.colId,n=o.a.useContext(d),c=n.dispatch,a=n.state;return Object(y.jsx)("div",{className:et.a.wrapper,children:Object(y.jsx)("button",{className:et.a.addButton,onClick:function(){c(_({rows:$(a.rows,e)}))},children:"+"})})},ct=n(18),ot=n.n(ct),at=function(){var t=o.a.useContext(d).state,e=o.a.useState([]),n=Object(s.a)(e,2),c=n[0],a=n[1];return o.a.useEffect((function(){a(Array(function(t){var e=0;return t.forEach((function(t){t.cols.length>e&&(e=t.cols.length)})),e}(t.rows)).fill({}).map((function(t,e){return Object(u.a)(Object(u.a)({},t),{},{id:e})})))}),[t]),t.rows.length?Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{style:{width:10}}),c.map((function(t,e){return Object(y.jsx)("td",{className:ot.a.techCol,children:Object(y.jsx)(nt,{colId:e+1})},t.id)}))]}):null},rt=n(10),it=n.n(rt),st=function(t){var e=t.onChange,n=o.a.useReducer(m,l),c=Object(s.a)(n,2),a=c[0],r=c[1];return o.a.useEffect((function(){e&&"function"===typeof e&&e(a.rows)}),[a,e]),Object(y.jsx)(d.Provider,{value:{dispatch:r,state:a},children:Object(y.jsxs)("div",{className:it.a.wrapper,children:[Object(y.jsx)("table",{className:I()(it.a.table,Object(i.a)({},it.a.filled,!!a.rows.length)),children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)(at,{}),a.rows.map((function(t){return Object(y.jsx)(P,{rowData:t},t.id)}))]})}),Object(y.jsx)(Y,{})]})})};var dt=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(st,{})})};r.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(dt,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.c5c159ee.chunk.js.map