(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{10:function(e,o,c){e.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",colorButton:"ChangeBackground_colorButton__2QEDl",transparent:"ChangeBackground_transparent__mqomV"}},11:function(e,o,c){e.exports={wrapper:"SelectionMenu_wrapper__2E3fb",selected:"SelectionMenu_selected__1dW4V",settingButton:"SelectionMenu_settingButton__2RZd1",menu:"SelectionMenu_menu__3_fZg"}},15:function(e,o,c){e.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG"}},16:function(e,o,c){e.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},21:function(e,o,c){e.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}},22:function(e,o,c){e.exports={wrapper:"AddRow_wrapper__3NW4Q",addButton:"AddRow_addButton__1hGob"}},23:function(e,o,c){e.exports={techCol:"Row_techCol__HSNZB",active:"Row_active__1oG0c",selectArea:"Row_selectArea__X8N3B",blinker:"Row_blinker__6_-6l"}},24:function(e,o,c){e.exports={wrapper:"AddCol_wrapper__OkM3j",addButton:"AddCol_addButton__2VG6f"}},25:function(e,o,c){e.exports={techCol:"TechCol_techCol__3-ePx",selectArea:"TechCol_selectArea__1hdFm",blinker:"TechCol_blinker__3LS_s"}},38:function(e,o,c){e.exports={wrapper:"TextEdit_wrapper__3ANjp"}},39:function(e,o,c){e.exports={wrapper:"RemoveRow_wrapper__QxJap"}},40:function(e,o,c){e.exports={wrapper:"RemoveCol_wrapper__2M4QV"}},65:function(e,o,c){"use strict";c.r(o);var r=c(2),t=c.n(r),n=c(35),a=c.n(n),s=c(6),l=c(4),d=r.createContext(null),u={touched:!1,selectionState:{selectedCols:[],selected:!1},rows:[{id:1,cols:[{content:"",type:"text",display:!0,id:1},{content:"",type:"text",display:!0,id:2}]}]},i=c(0),p=c(5),j=Object(p.createStandardAction)("TABLE/SET_START_SELECTION")(),w=Object(p.createStandardAction)("TABLE/SET_END_SELECTION")(),b=Object(p.createStandardAction)("TABLE/CLEAR_SELECTION")(),I=Object(p.createStandardAction)("TABLE/ROWS_UPDATE")(),f=Object(p.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),O=Object(p.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),h=Object(p.createStandardAction)("TABLE/SELECT_ROW")(),S=Object(p.createStandardAction)("TABLE/REMOVE_ROW")(),v=Object(p.createStandardAction)("TABLE/SELECT_COL")(),x=Object(p.createStandardAction)("TABLE/REMOVE_COL")(),m=function(e,o){return{row:{min:e.rowId<o.rowId?e.rowId:o.rowId,max:e.rowId<o.rowId?o.rowId:e.rowId},col:{min:e.colId<o.colId?e.colId:o.colId,max:e.colId<o.colId?o.colId:e.colId}}},_=function(e,o,c){var r=m(e,o);return c.rowId>=r.row.min&&c.rowId<=r.row.max&&c.colId>=r.col.min&&c.colId<=r.col.max},F=c(66),C=Object(p.createReducer)(u).handleAction(j,(function(e,o){var c=o.payload.positionStart;return Object(i.a)(Object(i.a)({},e),{},{touched:!0,selectionState:{selectedCols:[],selected:!1,start:c}})})).handleAction(w,(function(e,o){var c=o.payload,r=c.positionEnd,t=c.finished,n=[],a=e.rows,s=e.selectionState.start;if(t&&s)for(var l=m(s,r),d={rowId:l.row.min,colId:l.col.min},u={rowId:l.row.max,colId:l.col.max},p=d.rowId;p<=u.rowId;p+=1)for(var j={rowId:p},w=d.colId;w<=u.colId;w+=1){var b=a[p-1].cols[w-1].colSpan,I=a[p-1].cols[w-1].rowSpan;n.push(Object(i.a)(Object(i.a)(Object(i.a)({},j),{},{colId:w},I?{rowSpan:I}:{}),b?{colSpan:b}:{}))}return Object(i.a)(Object(i.a)(Object(i.a)({},e),t?{touched:!1}:{}),{},{selectionState:Object(i.a)(Object(i.a)(Object(i.a)({},e.selectionState),{},{selectedCols:n},t?{selected:!0}:{}),{},{end:r})})})).handleAction(b,(function(e){return Object(i.a)(Object(i.a)({},e),{},{selectionState:{selectedCols:[],selected:!1}})})).handleAction(I,(function(e,o){var c=o.payload.rows;return Object(i.a)(Object(i.a)({},e),{},{rows:c})})).handleAction(h,(function(e,o){var c=o.payload.rowId,r=e.rows[c-1],t=r.cols.map((function(e){return{rowId:c,colId:e.id}}));return Object(i.a)(Object(i.a)({},e),{},{selectionState:{selected:!0,selectedCols:t,start:{rowId:c,colId:r.cols[0].id},end:{rowId:c,colId:r.cols[r.cols.length-1].id}}})})).handleAction(v,(function(e,o){for(var c=o.payload.colId,r=[],t=1;t<=e.rows.length;t+=1)r.push({rowId:t,colId:c});return Object(i.a)(Object(i.a)({},e),{},{selectionState:{selected:!0,selectedCols:r,start:{rowId:e.rows[0].id,colId:c},end:{rowId:e.rows[e.rows.length-1].id,colId:c}}})})).handleAction(S,(function(e,o){var c=o.payload.rowId,r=e.rows[c-1],t=e.rows,n=[];return r.cols.forEach((function(e,o){if(e.resources&&e.rowSpan){var r=e.resources,a=r.reduce((function(e,o,c){return r[c+1]&&o.colId===r[c+1].colId&&e.push(o),e}),[]);t[c].cols[o]=Object(i.a)(Object(i.a)({},Object(F.a)(e,["rowSpan","resources"])),e.colSpan&&e.rowSpan>2?{rowSpan:e.rowSpan-1}:{}),a.length>0&&(t[c].cols[o+1].resources=a)}if(e.resourceFor&&e.resourceFor.rowId!==c){var s=t[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1],l="".concat(e.resourceFor.rowId,"-").concat(e.resourceFor.colId);if(!n.includes(l)){var d;n.push(l);var u=(s.rowSpan||1)-1,p=null===(d=s.resources)||void 0===d?void 0:d.slice(0,s.resources.length-(s.colSpan||1));u>1?t[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].rowSpan=u:(s=Object(F.a)(s,["rowSpan"]),t[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s),p&&p.length>0?t[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].resources=p:(s=Object(F.a)(s,["resources"]),t[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s)}}})),t.splice(c-1,1),Object(i.a)(Object(i.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:t.map((function(e,o){var r=e.cols.map((function(e){var o,r=null===(o=e.resources)||void 0===o?void 0:o.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{colId:e.rowId>c?e.rowId-1:e.rowId})}));return Object(i.a)(Object(i.a)(Object(i.a)({},e),r?{resources:r}:{}),e.resourceFor&&e.resourceFor.rowId>c?{resourceFor:Object(i.a)(Object(i.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId-1})}:{})}));return Object(i.a)(Object(i.a)({},e),{},{id:o+1,cols:r})}))})})).handleAction(x,(function(e,o){var c=o.payload.colId,r=e.rows,t=[];return r.forEach((function(e,o){var n=e.cols[c-1];if(n.resources&&n.colSpan){var a=n.resources,s=a.reduce((function(e,o,c){return a[c+1]&&o.rowId===a[c+1].rowId&&e.push(o),e}),[]);r[o].cols[c]=Object(i.a)(Object(i.a)({},Object(F.a)(n,["colSpan","resources"])),n.colSpan&&n.colSpan>2?{colSpan:n.colSpan-1}:{}),s.length>0&&(r[o].cols[c].resources=s)}if(n.resourceFor&&n.resourceFor.colId!==c){var l=r[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1],d="".concat(n.resourceFor.rowId,"-").concat(n.resourceFor.colId);if(!t.includes(d)){var u;t.push(d);var p=(l.colSpan||1)-1,j=null===(u=l.resources)||void 0===u?void 0:u.reduce((function(e,c){return c.colId!==n.id&&c.rowId!==o+1&&e.push(c),e}),[]);p>1?r[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1].colSpan=p:(l=Object(F.a)(l,["colSpan"]),r[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1]=l),j&&j.length>0?r[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1].resources=j:(l=Object(F.a)(l,["resources"]),r[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1]=l)}}e.cols.splice(c-1,1),e.cols=e.cols.map((function(e,o){return Object(i.a)(Object(i.a)({},e),{},{id:o+1})}))})),Object(i.a)(Object(i.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:r.map((function(e,o){var r=e.cols.map((function(e){var o,r=null===(o=e.resources)||void 0===o?void 0:o.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{colId:e.colId>c?e.colId-1:e.colId})}));return Object(i.a)(Object(i.a)(Object(i.a)({},e),r?{resources:r}:{}),e.resourceFor&&e.resourceFor.colId>c?{resourceFor:Object(i.a)(Object(i.a)({},e.resourceFor),{},{colId:e.resourceFor.colId-1})}:{})}));return Object(i.a)(Object(i.a)({},e),{},{id:o+1,cols:r})}))})})).handleAction(f,(function(e,o){var c=o.payload,r=c.colId,t=c.rowId,n=c.content,a=e.rows;return a[t-1].cols[r-1].content=n,Object(i.a)(Object(i.a)({},e),{},{rows:a})})).handleAction(O,(function(e,o){var c=o.payload,r=c.selectionState,t=c.background,n=e.rows.map((function(e){var o=e.cols.map((function(o){return r.start&&r.end&&_(r.start,r.end,{rowId:e.id,colId:o.id})?Object(i.a)(Object(i.a)({},o),{},{background:t}):o}));return Object(i.a)(Object(i.a)({},e),{},{cols:o})}));return Object(i.a)(Object(i.a)({},e),{},{rows:n})})),g=c(9),E=c.n(g),A={content:"",type:"text",display:!0},k=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffccc7"],y=c(7),B=c.n(y),R=c(38),N=c.n(R),T=c(1),L=function(e){var o=e.value,c=e.colId,n=e.rowId,a=e.background,s=e.setEditMode,l=t.a.useContext(d).dispatch,u=Object(r.useRef)(null);t.a.useEffect((function(){u.current&&u.current.focus()}),[]);var i=function(e){l(f({rowId:n,colId:c,content:e.target.value})),s(!1)};return Object(T.jsx)("input",{ref:u,defaultValue:o,onBlur:i,onKeyDown:function(e){"Enter"===e.code&&i(e)},className:N.a.wrapper,style:{background:a}})},M=c(21),D=c.n(M),P=function(e){var o=e.colData,c=e.rowId,r=t.a.useState(!1),n=Object(l.a)(r,2),a=n[0],u=n[1],i=t.a.useState(!1),p=Object(l.a)(i,2),b=p[0],I=p[1],f=t.a.useState({rowId:0,colId:0}),O=Object(l.a)(f,2),h=O[0],S=O[1],v=t.a.useContext(d),x=v.state,m=v.dispatch;if(t.a.useEffect((function(){x.selectionState.start&&x.selectionState.end?u(_(x.selectionState.start,x.selectionState.end,{rowId:c,colId:o.id})):u(!1),S({rowId:o.rowSpan&&x.selectionState.start&&x.selectionState.start.rowId<c?c+o.rowSpan-1:c,colId:o.colSpan&&x.selectionState.start&&x.selectionState.start.colId<o.id?o.id+o.colSpan-1:o.id})}),[x,c,o]),!o.display)return null;return Object(T.jsxs)("td",{id:"col-".concat(c,"-").concat(o.id),onMouseDown:function(){x.touched?m(w({positionEnd:h,finished:!0})):m(j({positionStart:{rowId:c,colId:o.id}}))},onMouseUp:function(){m(w({positionEnd:h,finished:!0}))},onMouseEnter:function(){x.touched&&m(w({positionEnd:{rowId:c,colId:o.id},finished:!1}))},onDoubleClick:function(){return I(!0)},colSpan:o.colSpan,rowSpan:o.rowSpan,className:B()(D.a.wrapper,Object(s.a)({},D.a.selected,a)),style:{background:o.background},children:[b&&"text"===o.type&&Object(T.jsx)(L,{value:o.content,background:o.background,rowId:c,colId:o.id,setEditMode:I}),!b&&o.content]})},V=function(e,o){var c=e[o-1],r=e[o],t={id:o+1,cols:[]};c.cols.forEach((function(e,n){var a=Object(i.a)(Object(i.a)({},A),{},{id:e.id});if(r){var s=c.cols[n],l=r.cols[n];s.rowSpan&&l.resourceFor&&l.resourceFor.colId===s.id&&l.resourceFor.rowId===c.id?t.cols.push(Object(i.a)(Object(i.a)({},a),{},{display:!1,resourceFor:{rowId:o,colId:e.id}})):s.resourceFor&&l.resourceFor&&l.resourceFor.colId===s.resourceFor.colId&&l.resourceFor.rowId===s.resourceFor.rowId?t.cols.push(Object(i.a)(Object(i.a)({},a),{},{display:!1,resourceFor:s.resourceFor})):t.cols.push(a)}else t.cols.push(a)}));var n=[];t.cols.forEach((function(o){if(o.resourceFor){var c="".concat(o.resourceFor.rowId).concat(o.resourceFor.colId);if(!n.includes(c)){var r=e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan||0;e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan=r+1,n.push(c)}}}));var a=e.map((function(e){if(e.id>o){var c=e.cols.map((function(e){return Object(i.a)(Object(i.a)({},e),e.resourceFor&&e.resourceFor.rowId>o?{resourceFor:Object(i.a)(Object(i.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId+1})}:e.resourceFor)}));return Object(i.a)(Object(i.a)({},e),{},{id:e.id+1,cols:c})}return e}));return a.splice(o,0,t),a.forEach((function(e){e.cols.forEach((function(o){var c;(o.resources&&(a[e.id-1].cols[o.id-1].resources=[]),o.resourceFor&&a[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1])&&(null===(c=a[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].resources)||void 0===c||c.push({colId:o.id,rowId:e.id}))}))})),a},U=c(22),W=c.n(U),G=function(e){var o=e.rowId,c=t.a.useContext(d),r=c.dispatch,n=c.state;return Object(T.jsx)("div",{className:W.a.wrapper,children:Object(T.jsx)("button",{className:W.a.addButton,onClick:function(e){e.stopPropagation(),r(I({rows:V(n.rows,o)}))},children:"+"})})},J=c.p+"static/media/close-circle.50ed0904.svg",Q=c(39),Z=c.n(Q),q=function(e){var o=e.rowId,c=e.setRowSelected,r=t.a.useContext(d).dispatch;return Object(T.jsx)("button",{className:Z.a.wrapper,onClick:function(e){e.stopPropagation(),r(S({rowId:o})),c(!1)},children:Object(T.jsx)("img",{src:J,alt:""})})},H=c(23),K=c.n(H),X=function(e){var o=e.rowData,c=t.a.useState(!1),r=Object(l.a)(c,2),n=r[0],a=r[1],s=t.a.useContext(d),u=s.state,i=s.dispatch,p=t.a.useState(0),j=Object(l.a)(p,2),w=j[0],I=j[1],f=t.a.useRef(null);return Object(T.jsxs)("tr",{style:{height:o.height||45},children:[Object(T.jsxs)("td",{ref:f,className:K.a.techCol,onClick:function(){var e;(a(!0),i(b()),f.current)&&I(((null===(e=f.current.closest("table"))||void 0===e?void 0:e.offsetWidth)||0)-12)},children:[Object(T.jsx)(G,{rowId:o.id}),n&&u.rows.length>1&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:K.a.selectArea,style:{width:w}}),Object(T.jsx)(E.a,{onOutsideClick:function(){a(!1)},children:Object(T.jsx)(q,{rowId:o.id,setRowSelected:a})})]})]}),o.cols.map((function(e){return Object(T.jsx)(P,{colData:e,rowId:o.id},e.id)}))]})},z=c(15),Y=c.n(z),$=function(e){var o,c=e.children,r=e.onClick,t=e.onBlur,n=e.className,a=e.style,l=e.active,d=void 0!==l&&l,u=e.disabled,i=void 0!==u&&u;return Object(T.jsx)("button",{disabled:i,onClick:r,onBlur:t,className:B()(Y.a.wrapper,n,(o={},Object(s.a)(o,Y.a.active,d),Object(s.a)(o,Y.a.disabled,i),o)),style:a,children:c})},ee=function(e){var o=e.selectionState,c=e.rows,r=o.selectedCols,t=o.start,n=o.end,a=function(e){var o=e.selectedCols,c=e.start,r=e.end,t=o[0],n=(null===t||void 0===t?void 0:t.rowSpan)?t.rowSpan-1:0,a=(null===t||void 0===t?void 0:t.colSpan)?t.colSpan-1:0;return!(!c||!r||c.rowId!==r.rowId||c.colId!==r.colId)||(n>0||a>0)&&!!c&&!!r&&r.rowId===c.rowId+n&&r.colId===c.colId+a&&o.length>1}(o),s=[],l=!1,d={maxColId:0,maxRowId:0,startColId:0,startRowId:0,get:function(){return(this.maxColId-this.startColId+1)*(this.maxRowId-this.startRowId+1)}};return c.forEach((function(e){e.cols.forEach((function(o){if(o.colSpan||o.rowSpan){var c=o.colSpan||0,r=o.rowSpan||0;s.push({row:{min:e.id,max:r?e.id+r-1:e.id},col:{min:o.id,max:c?o.id+c-1:o.id}})}}))})),r.forEach((function(e,o){var c=e.colSpan?e.colId+e.colSpan-1:e.colId,r=e.rowSpan?e.rowId+e.rowSpan-1:e.rowId;c>d.maxColId&&(d.maxColId=c),r>d.maxRowId&&(d.maxRowId=r),0===o&&(d.startColId=e.colId,d.startRowId=e.rowId)})),s.forEach((function(e){t&&n&&!l&&("part"===function(e,o){var c=Math.max(e.col.min-1,o.col.min-1),r=Math.min(e.col.max,o.col.max),t=Math.max(e.row.min-1,o.row.min-1),n=Math.min(e.row.max,o.row.max),a=(e.col.max-e.col.min+1)*(e.row.max-e.row.min+1);return c<r&&t<n?(r-c)*(n-t)===a?"full":"part":"not"}(e,{row:{min:t.rowId,max:n.rowId},col:{min:t.colId,max:n.colId}})&&(l=!0))})),!a&&d.get()===r.length&&!l},oe=function(){var e=t.a.useContext(d),o=e.state,c=e.dispatch;return Object(T.jsx)("li",{children:Object(T.jsx)("button",{disabled:!ee(o),onClick:function(){!function(e,o){var c=e.selectionState,r=e.rows,t=[],n=c.selectedCols,a={rowId:n[0].rowId,colId:n[0].colId},s={prevRowId:n[0].rowId,prevColId:0,count:0},l={prevRowId:0,count:0};n.forEach((function(e,o){e.colId!==s.prevColId&&e.rowId===s.prevRowId&&(s.prevColId=e.colId,s.count+=1,n.length===o-1&&e.colSpan&&(s.count+=e.colSpan)),e.rowId!==l.prevRowId&&(l.prevRowId=e.rowId,l.count+=1,c.selectedCols.length===o-1&&e.rowSpan&&(l.count+=e.rowSpan))}));var d=r.map((function(e){var o=e.cols.map((function(o){var r={rowId:e.id,colId:o.id},n=a.rowId===e.id&&a.colId===o.id,d=_(c.start,c.end,r);return n&&s.count>1&&(o.colSpan=s.count),n&&l.count>1&&(o.rowSpan=l.count),d&&!n&&t.push(r),Object(i.a)(Object(i.a)(Object(i.a)({},d&&!n?Object(F.a)(o,["colSpan","rowSpan"]):o),n?{resources:[]}:{}),d&&!n?{display:!1,resourceFor:a}:{})}));return Object(i.a)(Object(i.a)({},e),{},{cols:o})}));d[a.rowId-1].cols[a.colId-1].resources=t,o(I({rows:d})),o(b())}(o,c)},children:"Merge"})})},ce=function(){var e=t.a.useContext(d),o=e.state,c=e.dispatch,r=t.a.useState(!1),n=Object(l.a)(r,2),a=n[0],s=n[1];return t.a.useEffect((function(){var e,c=o.selectionState.start;if(c){var r=o.rows[(e=c).rowId-1].cols[e.colId-1];(r.colSpan||r.rowSpan)&&s(!0)}}),[o]),Object(T.jsx)("li",{children:Object(T.jsx)("button",{disabled:!a,onClick:function(){!function(e,o){var c=e.selectionState,r=e.rows,t=c.selectedCols[0],n=r[t.rowId-1].cols[t.colId-1];n&&n.resources&&n.resources.forEach((function(e){var o=r[e.rowId-1].cols[e.colId-1];r[e.rowId-1].cols[e.colId-1]=Object(i.a)(Object(i.a)({},Object(F.a)(o,["resourceFor"])),{},{display:!0})})),r[t.rowId-1].cols[t.colId-1]=Object(F.a)(n,["resources","colSpan","rowSpan"]),o(I({rows:r})),o(b())}(o,c)},children:"Unmerge"})})},re=c(10),te=c.n(re),ne=function(){var e=t.a.useContext(d),o=e.state,c=e.dispatch,r=function(e){c(O({selectionState:o.selectionState,background:e}))};return Object(T.jsxs)("li",{className:te.a.wrapper,children:[Object(T.jsx)("button",{children:"Background color"}),Object(T.jsxs)("div",{className:te.a.colors,children:[Object(T.jsx)("button",{onClick:function(){return r(void 0)},className:B()(te.a.colorButton,te.a.transparent)}),k.map((function(e){return Object(T.jsx)("button",{onClick:function(){return r(e)},style:{background:e},className:te.a.colorButton},e)}))]})]})},ae=c.p+"static/media/setting.5524b19c.svg",se=c(11),le=c.n(se),de=function(){var e=t.a.useContext(d).state,o=t.a.useState(),c=Object(l.a)(o,2),r=c[0],n=c[1],a=t.a.useState(!1),u=Object(l.a)(a,2),i=u[0],p=u[1];return t.a.useEffect((function(){e.selectionState.start&&e.selectionState.end&&n(function(e,o){var c=m(e,o),r=document.getElementById("col-".concat(c.row.min,"-").concat(c.col.min));return r?{top:r.offsetTop+5,left:r.offsetLeft+5}:{top:0,left:0}}(e.selectionState.start,e.selectionState.end))}),[e]),Object(T.jsxs)("div",{className:B()(le.a.wrapper,Object(s.a)({},le.a.selected,e.selectionState.selected&&e.selectionState.selectedCols.length>0)),style:r,children:[Object(T.jsx)($,{onClick:function(){return p(!i)},className:le.a.settingButton,children:Object(T.jsx)("img",{src:ae,alt:""})}),i&&Object(T.jsx)(E.a,{onOutsideClick:function(){return p(!1)},children:Object(T.jsxs)("ul",{className:le.a.menu,children:[Object(T.jsx)(ne,{}),Object(T.jsx)(oe,{}),Object(T.jsx)(ce,{})]})})]})},ue=function(e,o){var c=e.map((function(e){var c,r,t=e.cols.map((function(e){return e.id>o?Object(i.a)(Object(i.a)(Object(i.a)({},e),{},{id:e.id+1},e.resources?{resources:e.resources.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{colId:e.colId+1})}))}:{}),e.resourceFor&&e.resourceFor.colId>o?{resourceFor:Object(i.a)(Object(i.a)({},e.resourceFor),{},{colId:e.resourceFor.colId+1})}:e.resourceFor):e})),n=t[o-1]&&t[o-1].resourceFor&&t[o]&&t[o].resourceFor&&(null===(c=t[o-1].resourceFor)||void 0===c?void 0:c.colId)===(null===(r=t[o].resourceFor)||void 0===r?void 0:r.colId),a=Object(i.a)(Object(i.a)(Object(i.a)({id:o+1},A),t[o-1]&&t[o-1].colSpan?{display:!1,resourceFor:{rowId:e.id,colId:t[o-1].id}}:{}),n?{display:!1,resourceFor:t[o-1].resourceFor}:{});if(t[o-1]&&t[o-1].colSpan&&(t[o-1].colSpan+=1),n){var s=t[o-1].resourceFor;s&&t[s.colId-1]&&(t[s.colId-1].colSpan+=1)}return t.splice(o,0,a),Object(i.a)(Object(i.a)({},e),{},{cols:t})}));return c.forEach((function(e){e.cols.forEach((function(o){var r,t;(o.resources&&(c[e.id-1].cols[o.id-1].resources=[]),o.resourceFor)&&(null===(r=c[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1])||void 0===r||null===(t=r.resources)||void 0===t||t.push({colId:o.id,rowId:e.id}))}))})),c},ie=c(24),pe=c.n(ie),je=function(e){var o=e.colId,c=t.a.useContext(d),r=c.dispatch,n=c.state;return Object(T.jsx)("div",{className:pe.a.wrapper,children:Object(T.jsx)("button",{className:pe.a.addButton,onClick:function(e){e.stopPropagation(),r(I({rows:ue(n.rows,o)}))},children:"+"})})},we=c.p+"static/media/close-circle.50ed0904.svg",be=c(40),Ie=c.n(be),fe=function(e){var o=e.colId,c=e.setColSelected,r=t.a.useContext(d).dispatch;return Object(T.jsx)("button",{className:Ie.a.wrapper,onClick:function(e){e.stopPropagation(),r(x({colId:o})),c(!1)},children:Object(T.jsx)("img",{src:we,alt:""})})},Oe=c(25),he=c.n(Oe),Se=function(e){var o=e.colId,c=t.a.useContext(d),r=c.state,n=c.dispatch,a=t.a.useState(!1),s=Object(l.a)(a,2),u=s[0],i=s[1],p=t.a.useState(0),j=Object(l.a)(p,2),w=j[0],I=j[1],f=t.a.useRef(null);return Object(T.jsxs)("td",{ref:f,onClick:function(){var e;(n(b()),i(!0),f.current)&&I(((null===(e=f.current.closest("table"))||void 0===e?void 0:e.offsetHeight)||0)-12)},className:he.a.techCol,children:[Object(T.jsx)(je,{colId:o}),r.rows[0].cols.length>1&&u&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:he.a.selectArea,style:{height:w}}),Object(T.jsx)(E.a,{onOutsideClick:function(){i(!1)},children:Object(T.jsx)(fe,{colId:o,setColSelected:i})})]})]})},ve=function(){var e=t.a.useContext(d).state,o=t.a.useState([]),c=Object(l.a)(o,2),r=c[0],n=c[1];return t.a.useEffect((function(){n(Array(function(e){var o=0;return e.forEach((function(e){e.cols.length>o&&(o=e.cols.length)})),o}(e.rows)).fill({}).map((function(e,o){return Object(i.a)(Object(i.a)({},e),{},{id:o+1})})))}),[e]),e.rows.length?Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{style:{width:10}}),r.map((function(e){return Object(T.jsx)(Se,{colId:e.id},e.id)}))]}):null},xe=c(16),me=c.n(xe),_e=function(e){var o=e.onChange,c=t.a.useReducer(C,u),r=Object(l.a)(c,2),n=r[0],a=r[1];return t.a.useEffect((function(){o&&"function"===typeof o&&o(n.rows)}),[n,o]),Object(T.jsx)(d.Provider,{value:{dispatch:a,state:n},children:Object(T.jsxs)("div",{className:me.a.wrapper,children:[Object(T.jsx)("table",{className:B()(me.a.table,Object(s.a)({},me.a.filled,!!n.rows.length)),children:Object(T.jsxs)("tbody",{children:[Object(T.jsx)(ve,{}),n.rows.map((function(e){return Object(T.jsx)(X,{rowData:e},e.id)}))]})}),Object(T.jsx)(de,{})]})})};var Fe=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(_e,{})})};a.a.render(Object(T.jsx)(t.a.StrictMode,{children:Object(T.jsx)(Fe,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.a4e4f953.chunk.js.map