(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{11:function(e,t,c){e.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG"}},12:function(e,t,c){e.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},16:function(e,t,c){e.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}},17:function(e,t,c){e.exports={wrapper:"AddRow_wrapper__3NW4Q",addButton:"AddRow_addButton__1hGob"}},18:function(e,t,c){e.exports={wrapper:"AddCol_wrapper__OkM3j",addButton:"AddCol_addButton__2VG6f"}},27:function(e,t,c){e.exports={wrapper:"TextEdit_wrapper__3ANjp"}},28:function(e,t,c){e.exports={wrapper:"RemoveRow_wrapper__QxJap"}},29:function(e,t,c){e.exports={techCol:"Row_techCol__HSNZB",active:"Row_active__1oG0c"}},30:function(e,t,c){e.exports={wrapper:"RemoveCol_wrapper__2M4QV"}},31:function(e,t,c){e.exports={techCol:"TechCol_techCol__3-ePx"}},57:function(e,t,c){"use strict";c.r(t);var o=c(2),n=c.n(o),a=c(26),r=c.n(a),s=c(5),d=c(3),l=o.createContext(null),i={touched:!1,selectionState:{selectedCols:[],selected:!1},rows:[{id:1,cols:[{content:"",type:"text",display:!0,id:1},{content:"",type:"text",display:!0,id:2}]}]},u=c(1),p=c(4),j=Object(p.createStandardAction)("TABLE/SET_START_SELECTION")(),b=Object(p.createStandardAction)("TABLE/SET_END_SELECTION")(),f=Object(p.createStandardAction)("TABLE/CLEAR_SELECTION")(),w=Object(p.createStandardAction)("TABLE/ROWS_UPDATE")(),O=Object(p.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),I=Object(p.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),h=Object(p.createStandardAction)("TABLE/SELECT_ROW")(),_=Object(p.createStandardAction)("TABLE/REMOVE_ROW")(),S=Object(p.createStandardAction)("TABLE/SELECT_COL")(),x=Object(p.createStandardAction)("TABLE/REMOVE_COL")(),v=function(e,t){return{row:{min:e.rowId<t.rowId?e.rowId:t.rowId,max:e.rowId<t.rowId?t.rowId:e.rowId},col:{min:e.colId<t.colId?e.colId:t.colId,max:e.colId<t.colId?t.colId:e.colId}}},C=function(e,t,c){var o=v(e,t);return c.rowId>=o.row.min&&c.rowId<=o.row.max&&c.colId>=o.col.min&&c.colId<=o.col.max},m=Object(p.createReducer)(i).handleAction(j,(function(e,t){var c=t.payload.positionStart;return Object(u.a)(Object(u.a)({},e),{},{touched:!0,selectionState:{selectedCols:[],selected:!1,start:c}})})).handleAction(b,(function(e,t){var c=t.payload,o=c.positionEnd,n=c.finished,a=[],r=e.rows;if(n&&e.selectionState.start)for(var s=e.selectionState.start.rowId;s<=o.rowId;s+=1)for(var d={rowId:s},l=e.selectionState.start.colId;l<=o.colId;l+=1){var i=r[s-1].cols[l-1].colSpan,p=r[s-1].cols[l-1].rowSpan;a.push(Object(u.a)(Object(u.a)(Object(u.a)({},d),{},{colId:l},p?{rowSpan:p}:{}),i?{colSpan:i}:{}))}return Object(u.a)(Object(u.a)(Object(u.a)({},e),n?{touched:!1}:{}),{},{selectionState:Object(u.a)(Object(u.a)(Object(u.a)({},e.selectionState),{},{selectedCols:a},n?{selected:!0}:{}),{},{end:o})})})).handleAction(f,(function(e){return Object(u.a)(Object(u.a)({},e),{},{selectionState:{selectedCols:[],selected:!1}})})).handleAction(w,(function(e,t){var c=t.payload.rows;return Object(u.a)(Object(u.a)({},e),{},{rows:c})})).handleAction(h,(function(e,t){var c=t.payload.rowId,o=e.rows[c-1],n=o.cols.map((function(e){return{rowId:c,colId:e.id}}));return Object(u.a)(Object(u.a)({},e),{},{selectionState:{selected:!0,selectedCols:n,start:{rowId:c,colId:o.cols[0].id},end:{rowId:c,colId:o.cols[o.cols.length-1].id}}})})).handleAction(S,(function(e,t){for(var c=t.payload.colId,o=[],n=1;n<=e.rows.length;n+=1)o.push({rowId:n,colId:c});return Object(u.a)(Object(u.a)({},e),{},{selectionState:{selected:!0,selectedCols:o,start:{rowId:e.rows[0].id,colId:c},end:{rowId:e.rows[e.rows.length-1].id,colId:c}}})})).handleAction(_,(function(e,t){var c=t.payload.rowId,o=e.rows;return o.splice(c-1,1),Object(u.a)(Object(u.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:o.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{id:t+1})}))})})).handleAction(x,(function(e,t){var c=t.payload.colId,o=e.rows;return o.forEach((function(e){e.cols.splice(c-1,1),e.cols=e.cols.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{id:t+1})}))})),Object(u.a)(Object(u.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:o.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{id:t+1})}))})})).handleAction(O,(function(e,t){var c=t.payload,o=c.colId,n=c.rowId,a=c.content,r=e.rows;return r[n-1].cols[o-1].content=a,Object(u.a)(Object(u.a)({},e),{},{rows:r})})).handleAction(I,(function(e,t){var c=t.payload,o=c.selectionState,n=c.background,a=e.rows.map((function(e){var t=e.cols.map((function(t){return o.start&&o.end&&C(o.start,o.end,{rowId:e.id,colId:t.id})?Object(u.a)(Object(u.a)({},t),{},{background:n}):t}));return Object(u.a)(Object(u.a)({},e),{},{cols:t})}));return Object(u.a)(Object(u.a)({},e),{},{rows:a})})),E=c(7),g=c.n(E),A={content:"",type:"text",display:!0},B=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffccc7"],y=c(6),k=c.n(y),N=c(27),T=c.n(N),R=c(0),L=function(e){var t=e.value,c=e.colId,a=e.rowId,r=e.background,s=e.setEditMode,d=n.a.useContext(l).dispatch,i=Object(o.useRef)(null);n.a.useEffect((function(){i.current&&i.current.focus()}),[]);var u=function(e){d(O({rowId:a,colId:c,content:e.target.value})),s(!1)};return Object(R.jsx)("input",{ref:i,defaultValue:t,onBlur:u,onKeyDown:function(e){"Enter"===e.code&&u(e)},className:T.a.wrapper,style:{background:r}})},F=c(16),M=c.n(F),D=function(e){var t=e.colData,c=e.rowId,a=n.a.useState(!1),r=Object(d.a)(a,2),i=r[0],u=r[1],p=n.a.useState(!1),f=Object(d.a)(p,2),w=f[0],O=f[1],I=n.a.useContext(l),h=I.state,_=I.dispatch,S=Object(o.useRef)(null);if(n.a.useEffect((function(){h.selectionState.start&&h.selectionState.end?u(C(h.selectionState.start,h.selectionState.end,{rowId:c,colId:t.id})):u(!1)}),[h,c,t,S]),!t.display)return null;return Object(R.jsxs)("td",{id:"col-".concat(c,"-").concat(t.id),onMouseDown:function(){_(j({positionStart:{rowId:c,colId:t.id}}))},onMouseUp:function(){_(b({positionEnd:{rowId:t.rowSpan?c+t.rowSpan-1:c,colId:t.colSpan?t.id+t.colSpan-1:t.id},finished:!0}))},onMouseEnter:function(){h.touched&&_(b({positionEnd:{rowId:c,colId:t.id},finished:!1}))},onDoubleClick:function(){return O(!0)},colSpan:t.colSpan,rowSpan:t.rowSpan,className:k()(M.a.wrapper,Object(s.a)({},M.a.selected,i)),style:{background:t.background},children:[w&&"text"===t.type&&Object(R.jsx)(L,{value:t.content,background:t.background,rowId:c,colId:t.id,setEditMode:O}),!w&&t.content]})},P=function(e,t){var c=e[t-1],o=[],n={id:t+1,cols:[]};c.cols.forEach((function(a,r){if(a.rowSpan){var s="".concat(c.id).concat(a.id);o.includes(s)||(e[t-1].cols[r].rowSpan=a.rowSpan+1,o.push(s)),n.cols.push(Object(u.a)(Object(u.a)({},A),{},{id:a.id,display:!1,resourceFor:{rowId:t,colId:a.id}}))}else if(a.resourceFor){if(n.cols.push(Object(u.a)(Object(u.a)({},A),{},{id:a.id,resourceFor:a.resourceFor,display:!1})),a.resourceFor.rowId!==c.id){var d="".concat(a.resourceFor.rowId).concat(a.resourceFor.colId);o.includes(d)||(e[a.resourceFor.rowId-1].cols[a.resourceFor.colId-1].rowSpan+=1,o.push(d))}}else n.cols.push(Object(u.a)(Object(u.a)({},A),{},{id:a.id}))}));var a=e.map((function(e){return e.id>t?Object(u.a)(Object(u.a)({},e),{},{id:e.id+1}):e}));return a.splice(t,0,n),a},V=c(17),U=c.n(V),W=function(e){var t=e.rowId,c=n.a.useContext(l),o=c.dispatch,a=c.state;return Object(R.jsx)("div",{className:U.a.wrapper,children:Object(R.jsx)("button",{className:U.a.addButton,onClick:function(e){e.stopPropagation(),o(w({rows:P(a.rows,t)}))},children:"+"})})},G=c.p+"static/media/close-circle.50ed0904.svg",J=c(28),Q=c.n(J),Z=function(e){var t=e.rowId,c=e.setRowSelected,o=n.a.useContext(l).dispatch;return Object(R.jsx)("button",{className:Q.a.wrapper,onClick:function(e){e.stopPropagation(),o(_({rowId:t})),c(!1)},children:Object(R.jsx)("img",{src:G,alt:""})})},q=c(29),K=c.n(q),H=function(e){var t=e.rowData,c=n.a.useState(!1),o=Object(d.a)(c,2),a=o[0],r=o[1],s=n.a.useContext(l),i=s.state,u=s.dispatch;return Object(R.jsxs)("tr",{style:{height:t.height||45},children:[Object(R.jsxs)("td",{className:K.a.techCol,onClick:function(){r(!0),u(h({rowId:t.id}))},children:[Object(R.jsx)(W,{rowId:t.id}),a&&i.rows.length>1&&Object(R.jsx)(g.a,{onOutsideClick:function(){r(!1)},children:Object(R.jsx)(Z,{rowId:t.id,setRowSelected:r})})]}),t.cols.map((function(e){return Object(R.jsx)(D,{colData:e,rowId:t.id},e.id)}))]})},z=c(11),X=c.n(z),Y=function(e){var t,c=e.children,o=e.onClick,n=e.onBlur,a=e.className,r=e.style,d=e.active,l=void 0!==d&&d,i=e.disabled,u=void 0!==i&&i;return Object(R.jsx)("button",{disabled:u,onClick:o,onBlur:n,className:k()(X.a.wrapper,a,(t={},Object(s.a)(t,X.a.active,l),Object(s.a)(t,X.a.disabled,u),t)),style:r,children:c})},$=function(){var e=n.a.useState(0),t=Object(d.a)(e,2),c=t[0],o=t[1],a=n.a.useContext(l),r=a.state,s=a.dispatch;n.a.useEffect((function(){o(function(e){if(e.start&&e.end){var t=v(e.start,e.end);return(t.row.max-t.row.min+1)*(t.col.max-t.col.min+1)}return 0}(r.selectionState))}),[r]);return Object(R.jsx)("li",{children:Object(R.jsx)("button",{disabled:c<=1,onClick:function(){!function(e,t){var c=e.selectionState,o=e.rows,n=c.selectedCols,a={rowId:n[0].rowId,colId:n[0].colId},r={prevRowId:n[0].rowId,prevColId:0,count:0},s={prevRowId:0,count:0};n.forEach((function(e,t){e.colId!==r.prevColId&&e.rowId===r.prevRowId&&(r.prevColId=e.colId,r.count+=1,n.length===t-1&&e.colSpan&&(r.count+=e.colSpan)),e.rowId!==s.prevRowId&&(s.prevRowId=e.rowId,s.count+=1,c.selectedCols.length===t-1&&e.rowSpan&&(s.count+=e.rowSpan))}));var d=o.map((function(e){var t=e.cols.map((function(t){var o=a.rowId===e.id&&a.colId===t.id,n=C(c.start,c.end,{rowId:e.id,colId:t.id});return o&&r.count>1&&(t.colSpan=r.count),o&&s.count>1&&(t.rowSpan=s.count),Object(u.a)(Object(u.a)({},t),n&&!o?{display:!1,resourceFor:a}:{})}));return Object(u.a)(Object(u.a)({},e),{},{cols:t})}));t(w({rows:d})),t(f())}(r,s)},children:"Merge"})})},ee=c(8),te=c.n(ee),ce=function(){var e=n.a.useContext(l),t=e.state,c=e.dispatch,o=function(e){c(I({selectionState:t.selectionState,background:e}))};return Object(R.jsxs)("li",{className:te.a.wrapper,children:[Object(R.jsx)("button",{children:"Background color"}),Object(R.jsxs)("div",{className:te.a.colors,children:[Object(R.jsx)("button",{onClick:function(){return o(void 0)},className:k()(te.a.colorButton,te.a.transparent)}),B.map((function(e){return Object(R.jsx)("button",{onClick:function(){return o(e)},style:{background:e},className:te.a.colorButton},e)}))]})]})},oe=c.p+"static/media/setting.5524b19c.svg",ne=c(9),ae=c.n(ne),re=function(){var e=n.a.useContext(l).state,t=n.a.useState(),c=Object(d.a)(t,2),o=c[0],a=c[1],r=n.a.useState(!1),i=Object(d.a)(r,2),u=i[0],p=i[1];return n.a.useEffect((function(){e.selectionState.start&&e.selectionState.end&&a(function(e,t){var c=v(e,t),o=document.getElementById("col-".concat(c.row.min,"-").concat(c.col.min));return o?{top:o.offsetTop+5,left:o.offsetLeft+5}:{top:0,left:0}}(e.selectionState.start,e.selectionState.end))}),[e]),Object(R.jsxs)("div",{className:k()(ae.a.wrapper,Object(s.a)({},ae.a.selected,e.selectionState.selected)),style:o,children:[Object(R.jsx)(Y,{onClick:function(){return p(!u)},className:ae.a.settingButton,children:Object(R.jsx)("img",{src:oe,alt:""})}),u&&Object(R.jsx)(g.a,{onOutsideClick:function(){return p(!1)},children:Object(R.jsxs)("ul",{className:ae.a.menu,children:[Object(R.jsx)(ce,{}),Object(R.jsx)($,{})]})})]})},se=function(e,t){return e.map((function(e){var c,o=e.cols.map((function(e){return e.id>t?Object(u.a)(Object(u.a)({},e),{},{id:e.id+1}):e})),n=Object(u.a)(Object(u.a)(Object(u.a)({id:t+1},A),o[t-1].colSpan?{display:!1,resourceFor:{rowId:e.id,colId:o[t-1].id}}:{}),o[t-1].resourceFor&&o[t].resourceFor?{display:!1,resourceFor:o[t-1].resourceFor}:{});o[t-1].colSpan&&(o[t-1].colSpan+=1,null===(c=o[t-1].resources)||void 0===c||c.push({rowId:e.id,colId:n.id}));o[t-1].resourceFor&&o[t].resourceFor&&(o[o[t-1].resourceFor.colId-1].colSpan+=1);return o.splice(t,0,n),Object(u.a)(Object(u.a)({},e),{},{cols:o})}))},de=c(18),le=c.n(de),ie=function(e){var t=e.colId,c=n.a.useContext(l),o=c.dispatch,a=c.state;return Object(R.jsx)("div",{className:le.a.wrapper,children:Object(R.jsx)("button",{className:le.a.addButton,onClick:function(e){e.stopPropagation(),o(w({rows:se(a.rows,t)}))},children:"+"})})},ue=c.p+"static/media/close-circle.50ed0904.svg",pe=c(30),je=c.n(pe),be=function(e){var t=e.colId,c=e.setColSelected,o=n.a.useContext(l).dispatch;return Object(R.jsx)("button",{className:je.a.wrapper,onClick:function(e){e.stopPropagation(),o(x({colId:t})),c(!1)},children:Object(R.jsx)("img",{src:ue,alt:""})})},fe=c(31),we=c.n(fe),Oe=function(e){var t=e.colId,c=n.a.useContext(l),o=c.state,a=c.dispatch,r=n.a.useState(!1),s=Object(d.a)(r,2),i=s[0],u=s[1];return Object(R.jsxs)("td",{onClick:function(){u(!0),a(S({colId:t}))},className:we.a.techCol,children:[Object(R.jsx)(ie,{colId:t}),o.rows[0].cols.length>1&&i&&Object(R.jsx)(g.a,{onOutsideClick:function(){u(!1)},children:Object(R.jsx)(be,{colId:t,setColSelected:u})})]},t)},Ie=function(){var e=n.a.useContext(l).state,t=n.a.useState([]),c=Object(d.a)(t,2),o=c[0],a=c[1];return n.a.useEffect((function(){a(Array(function(e){var t=0;return e.forEach((function(e){e.cols.length>t&&(t=e.cols.length)})),t}(e.rows)).fill({}).map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{id:t+1})})))}),[e]),e.rows.length?Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{style:{width:10}}),o.map((function(e){return Object(R.jsx)(Oe,{colId:e.id},e.id)}))]}):null},he=c(12),_e=c.n(he),Se=function(e){var t=e.onChange,c=n.a.useReducer(m,i),o=Object(d.a)(c,2),a=o[0],r=o[1];return n.a.useEffect((function(){t&&"function"===typeof t&&t(a.rows),console.log(a)}),[a,t]),Object(R.jsx)(l.Provider,{value:{dispatch:r,state:a},children:Object(R.jsxs)("div",{className:_e.a.wrapper,children:[Object(R.jsx)("table",{className:k()(_e.a.table,Object(s.a)({},_e.a.filled,!!a.rows.length)),children:Object(R.jsxs)("tbody",{children:[Object(R.jsx)(Ie,{}),a.rows.map((function(e){return Object(R.jsx)(H,{rowData:e},e.id)}))]})}),Object(R.jsx)(re,{})]})})};var xe=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsx)(Se,{})})};r.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(xe,{})}),document.getElementById("root"))},8:function(e,t,c){e.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",colorButton:"ChangeBackground_colorButton__2QEDl",transparent:"ChangeBackground_transparent__mqomV"}},9:function(e,t,c){e.exports={wrapper:"SelectionMenu_wrapper__2E3fb",selected:"SelectionMenu_selected__1dW4V",settingButton:"SelectionMenu_settingButton__2RZd1",menu:"SelectionMenu_menu__3_fZg"}}},[[57,1,2]]]);
//# sourceMappingURL=main.fd7a01a1.chunk.js.map