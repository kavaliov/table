(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{10:function(e,o,t){e.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",colorButton:"ChangeBackground_colorButton__2QEDl",transparent:"ChangeBackground_transparent__mqomV"}},11:function(e,o,t){e.exports={wrapper:"SelectionMenu_wrapper__2E3fb",selected:"SelectionMenu_selected__1dW4V",settingButton:"SelectionMenu_settingButton__2RZd1",menu:"SelectionMenu_menu__3_fZg"}},15:function(e,o,t){e.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG"}},16:function(e,o,t){e.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},21:function(e,o,t){e.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}},22:function(e,o,t){e.exports={wrapper:"AddRow_wrapper__3NW4Q",addButton:"AddRow_addButton__1hGob"}},23:function(e,o,t){e.exports={techCol:"Row_techCol__HSNZB",active:"Row_active__1oG0c",selectArea:"Row_selectArea__X8N3B",blinker:"Row_blinker__6_-6l"}},24:function(e,o,t){e.exports={wrapper:"AddCol_wrapper__OkM3j",addButton:"AddCol_addButton__2VG6f"}},25:function(e,o,t){e.exports={techCol:"TechCol_techCol__3-ePx",selectArea:"TechCol_selectArea__1hdFm",blinker:"TechCol_blinker__3LS_s"}},38:function(e,o,t){e.exports={wrapper:"TextEdit_wrapper__3ANjp"}},39:function(e,o,t){e.exports={wrapper:"RemoveRow_wrapper__QxJap"}},40:function(e,o,t){e.exports={wrapper:"RemoveCol_wrapper__2M4QV"}},41:function(e,o,t){e.exports={wrapper:"ChangeWidth_wrapper__Ul3dY"}},66:function(e,o,t){"use strict";t.r(o);var c=t(2),r=t.n(c),n=t(35),a=t.n(n),s=t(6),l=t(3),d=t(9),i=t.n(d),u=c.createContext(null),p={touched:!1,selectionState:{selectedCols:[],selected:!1},rows:[{id:1,cols:[{content:"",type:"text",display:!0,id:1},{content:"",type:"text",display:!0,id:2}]}]},j=t(0),b=t(5),w=Object(b.createStandardAction)("TABLE/SET_START_SELECTION")(),I=Object(b.createStandardAction)("TABLE/SET_END_SELECTION")(),f=Object(b.createStandardAction)("TABLE/CLEAR_SELECTION")(),O=Object(b.createStandardAction)("TABLE/ROWS_UPDATE")(),h=Object(b.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),S=Object(b.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),v=Object(b.createStandardAction)("TABLE/SELECT_ROW")(),x=Object(b.createStandardAction)("TABLE/REMOVE_ROW")(),m=Object(b.createStandardAction)("TABLE/SELECT_COL")(),_=Object(b.createStandardAction)("TABLE/SET_COL_WIDTH")(),C=Object(b.createStandardAction)("TABLE/REMOVE_COL")(),F=function(e,o){return{row:{min:e.rowId<o.rowId?e.rowId:o.rowId,max:e.rowId<o.rowId?o.rowId:e.rowId},col:{min:e.colId<o.colId?e.colId:o.colId,max:e.colId<o.colId?o.colId:e.colId}}},g=function(e,o,t){var c=F(e,o);return t.rowId>=c.row.min&&t.rowId<=c.row.max&&t.colId>=c.col.min&&t.colId<=c.col.max},E=function(e){var o=e.selectedCols,t=e.start,c=e.end,r=o[0],n=(null===r||void 0===r?void 0:r.rowSpan)?r.rowSpan-1:0,a=(null===r||void 0===r?void 0:r.colSpan)?r.colSpan-1:0;return!(!t||!c||t.rowId!==c.rowId||t.colId!==c.colId)||(n>0||a>0)&&!!t&&!!c&&c.rowId===t.rowId+n&&c.colId===t.colId+a&&o.length>1},A=t(67),k=Object(b.createReducer)(p).handleAction(w,(function(e,o){var t=o.payload.positionStart;return Object(j.a)(Object(j.a)({},e),{},{touched:!0,selectionState:{selectedCols:[],selected:!1,start:t}})})).handleAction(I,(function(e,o){var t=o.payload,c=t.positionEnd,r=t.finished,n=[],a=e.rows,s=e.selectionState.start;if(r&&s)for(var l=F(s,c),d={rowId:l.row.min,colId:l.col.min},i={rowId:l.row.max,colId:l.col.max},u=d.rowId;u<=i.rowId;u+=1)for(var p={rowId:u},b=d.colId;b<=i.colId;b+=1){var w=a[u-1].cols[b-1].colSpan,I=a[u-1].cols[b-1].rowSpan;n.push(Object(j.a)(Object(j.a)(Object(j.a)({},p),{},{colId:b},I?{rowSpan:I}:{}),w?{colSpan:w}:{}))}return Object(j.a)(Object(j.a)(Object(j.a)({},e),r?{touched:!1}:{}),{},{selectionState:Object(j.a)(Object(j.a)(Object(j.a)({},e.selectionState),{},{selectedCols:n},r?{selected:!0}:{}),{},{end:c})})})).handleAction(f,(function(e){return Object(j.a)(Object(j.a)({},e),{},{selectionState:{selectedCols:[],selected:!1}})})).handleAction(O,(function(e,o){var t=o.payload.rows;return Object(j.a)(Object(j.a)({},e),{},{rows:t})})).handleAction(v,(function(e,o){var t=o.payload.rowId,c=e.rows[t-1],r=c.cols.map((function(e){return{rowId:t,colId:e.id}}));return Object(j.a)(Object(j.a)({},e),{},{selectionState:{selected:!0,selectedCols:r,start:{rowId:t,colId:c.cols[0].id},end:{rowId:t,colId:c.cols[c.cols.length-1].id}}})})).handleAction(m,(function(e,o){for(var t=o.payload.colId,c=[],r=1;r<=e.rows.length;r+=1)c.push({rowId:r,colId:t});return Object(j.a)(Object(j.a)({},e),{},{selectionState:{selected:!0,selectedCols:c,start:{rowId:e.rows[0].id,colId:t},end:{rowId:e.rows[e.rows.length-1].id,colId:t}}})})).handleAction(x,(function(e,o){var t=o.payload.rowId,c=e.rows[t-1],r=e.rows,n=[];return c.cols.forEach((function(e,o){if(e.resources&&e.rowSpan){var c=e.resources,a=null===c||void 0===c?void 0:c.slice(0,c.length-(e.colSpan||1));r[t].cols[o]=Object(j.a)(Object(j.a)({},Object(A.a)(e,["rowSpan","resources"])),e.rowSpan&&e.rowSpan>2?{rowSpan:e.rowSpan-1}:{}),a.length>0&&r[t].cols[o]&&(r[t].cols[o].resources=a)}if(e.resourceFor&&e.resourceFor.rowId!==t){var s=r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1],l="".concat(e.resourceFor.rowId,"-").concat(e.resourceFor.colId);if(!n.includes(l)){var d;n.push(l);var i=(s.rowSpan||1)-1,u=null===(d=s.resources)||void 0===d?void 0:d.slice(0,s.resources.length-(s.colSpan||1));i>1?r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].rowSpan=i:(s=Object(A.a)(s,["rowSpan"]),r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s),u&&u.length>0?r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].resources=u:(s=Object(A.a)(s,["resources"]),r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s)}}})),r.splice(t-1,1),Object(j.a)(Object(j.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:r.map((function(e,o){var c=e.cols.map((function(e){return Object(j.a)(Object(j.a)({},e),e.resourceFor&&e.resourceFor.rowId>t?{resourceFor:Object(j.a)(Object(j.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId-1})}:{})}));return Object(j.a)(Object(j.a)({},e),{},{id:o+1,cols:c})}))})})).handleAction(C,(function(e,o){var t=o.payload.colId,c=e.rows,r=[];return c.forEach((function(e,o){var n=e.cols[t-1];if(n.resources&&n.colSpan){var a=n.resources.reduce((function(e,o){return o.colId!==n.id+(n.colSpan||0)-1&&e.push(o),e}),[]);c[o].cols[t]=Object(j.a)(Object(j.a)({},Object(A.a)(n,["colSpan","resources"])),n.colSpan&&n.colSpan>2?{colSpan:n.colSpan-1}:{}),a.length>0&&(c[o].cols[t].resources=a)}if(n.resourceFor&&n.resourceFor.colId!==t){var s=c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1],l="".concat(n.resourceFor.rowId,"-").concat(n.resourceFor.colId);if(!r.includes(l)){var d;r.push(l);var i=(s.colSpan||1)-1,u=null===(d=s.resources)||void 0===d?void 0:d.reduce((function(e,o){return o.colId!==s.id+(s.colSpan||0)-1&&e.push(o),e}),[]);i>1?c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1].colSpan=i:(s=Object(A.a)(s,["colSpan"]),c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1]=s),u&&u.length>0?c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1].resources=u:(s=Object(A.a)(s,["resources"]),c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1]=s)}}e.cols.splice(t-1,1),e.cols=e.cols.map((function(e,o){return Object(j.a)(Object(j.a)({},e),{},{id:o+1})}))})),Object(j.a)(Object(j.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:c.map((function(e,o){var c=e.cols.map((function(e){var o,c=null===(o=e.resources)||void 0===o?void 0:o.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{colId:e.colId>t?e.colId-1:e.colId})}));return Object(j.a)(Object(j.a)(Object(j.a)({},e),c?{resources:c}:{}),e.resourceFor&&e.resourceFor.colId>t?{resourceFor:Object(j.a)(Object(j.a)({},e.resourceFor),{},{colId:e.resourceFor.colId-1})}:{})}));return Object(j.a)(Object(j.a)({},e),{},{id:o+1,cols:c})}))})})).handleAction(h,(function(e,o){var t=o.payload,c=t.colId,r=t.rowId,n=t.content,a=e.rows;return a[r-1].cols[c-1].content=n,Object(j.a)(Object(j.a)({},e),{},{rows:a})})).handleAction(_,(function(e,o){var t=o.payload,c=t.colId,r=t.width,n=e.rows.map((function(e){var o=e.cols.map((function(e){return Object(j.a)(Object(j.a)({},e),e.id===c?{width:r}:{})}));return Object(j.a)(Object(j.a)({},e),{},{cols:o})}));return Object(j.a)(Object(j.a)({},e),{},{rows:n})})).handleAction(S,(function(e,o){var t=o.payload,c=t.selectionState,r=t.background,n=e.rows.map((function(e){var o=e.cols.map((function(o){return c.start&&c.end&&g(c.start,c.end,{rowId:e.id,colId:o.id})?Object(j.a)(Object(j.a)({},o),{},{background:r}):o}));return Object(j.a)(Object(j.a)({},e),{},{cols:o})}));return Object(j.a)(Object(j.a)({},e),{},{rows:n})})),y=t(7),B=t.n(y),R=t(38),N=t.n(R),T=t(1),L=function(e){var o=e.value,t=e.colId,n=e.rowId,a=e.background,s=e.setEditMode,l=r.a.useContext(u).dispatch,d=Object(c.useRef)(null);r.a.useEffect((function(){d.current&&d.current.focus()}),[]);var i=function(e){l(h({rowId:n,colId:t,content:e.target.value})),s(!1)};return Object(T.jsx)("textarea",{ref:d,defaultValue:o,onBlur:i,onKeyDown:function(e){"Enter"===e.code&&e.ctrlKey&&i(e)},className:N.a.wrapper,style:{background:a}})},M=t(21),D=t.n(M),P=function(e){var o=e.colData,t=e.rowId,c=r.a.useState(!1),n=Object(l.a)(c,2),a=n[0],d=n[1],i=r.a.useState(!1),p=Object(l.a)(i,2),j=p[0],b=p[1],f=r.a.useState({rowId:0,colId:0}),O=Object(l.a)(f,2),h=O[0],S=O[1],v=r.a.useContext(u),x=v.state,m=v.dispatch;if(r.a.useEffect((function(){x.selectionState.start&&x.selectionState.end?d(g(x.selectionState.start,x.selectionState.end,{rowId:t,colId:o.id})):d(!1),S({rowId:o.rowSpan&&x.selectionState.start&&x.selectionState.start.rowId<t?t+o.rowSpan-1:t,colId:o.colSpan&&x.selectionState.start&&x.selectionState.start.colId<o.id?o.id+o.colSpan-1:o.id})}),[x,t,o]),!o.display)return null;return Object(T.jsxs)("td",{id:"col-".concat(t,"-").concat(o.id),onMouseDown:function(){x.touched?m(I({positionEnd:h,finished:!0})):m(w({positionStart:{rowId:t,colId:o.id}}))},onMouseUp:function(){m(I({positionEnd:h,finished:!0}))},onMouseEnter:function(){x.touched&&m(I({positionEnd:{rowId:t,colId:o.id},finished:!1}))},onDoubleClick:function(){return b(!0)},colSpan:o.colSpan,rowSpan:o.rowSpan,className:B()(D.a.wrapper,Object(s.a)({},D.a.selected,a)),style:{background:o.background},children:[j&&"text"===o.type&&Object(T.jsx)(L,{value:o.content,background:o.background,rowId:t,colId:o.id,setEditMode:b}),!j&&Object(T.jsx)("div",{children:o.content})]})},W={content:"",type:"text",display:!0},U=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffccc7"],V=function(e,o){var t=e[o-1],c=e[o],r={id:o+1,cols:[]};t.cols.forEach((function(e,n){var a=Object(j.a)(Object(j.a)({},W),{},{id:e.id});if(c){var s=t.cols[n],l=c.cols[n];s.rowSpan&&l.resourceFor&&l.resourceFor.colId===s.id&&l.resourceFor.rowId===t.id?r.cols.push(Object(j.a)(Object(j.a)({},a),{},{display:!1,resourceFor:{rowId:o,colId:e.id}})):s.resourceFor&&l.resourceFor&&l.resourceFor.colId===s.resourceFor.colId&&l.resourceFor.rowId===s.resourceFor.rowId?r.cols.push(Object(j.a)(Object(j.a)({},a),{},{display:!1,resourceFor:s.resourceFor})):r.cols.push(a)}else r.cols.push(a)}));var n=[];r.cols.forEach((function(o){if(o.resourceFor){var t="".concat(o.resourceFor.rowId).concat(o.resourceFor.colId);if(!n.includes(t)){var c=e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan||0;e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan=c+1,n.push(t)}}}));var a=e.map((function(e){if(e.id>o){var t=e.cols.map((function(e){return Object(j.a)(Object(j.a)({},e),e.resourceFor&&e.resourceFor.rowId>o?{resourceFor:Object(j.a)(Object(j.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId+1})}:e.resourceFor)}));return Object(j.a)(Object(j.a)({},e),{},{id:e.id+1,cols:t})}return e}));return a.splice(o,0,r),a.forEach((function(e){e.cols.forEach((function(o){var t;(o.resources&&(a[e.id-1].cols[o.id-1].resources=[]),o.resourceFor&&a[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1])&&(null===(t=a[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].resources)||void 0===t||t.push({colId:o.id,rowId:e.id}))}))})),a},G=t(22),H=t.n(G),J=function(e){var o=e.rowId,t=r.a.useContext(u),c=t.dispatch,n=t.state;return Object(T.jsx)("div",{className:H.a.wrapper,children:Object(T.jsx)("button",{className:H.a.addButton,onClick:function(e){e.stopPropagation(),c(O({rows:V(n.rows,o)}))},children:"+"})})},Q=t.p+"static/media/close-circle.50ed0904.svg",K=t(39),X=t.n(K),Z=function(e){var o=e.rowId,t=e.setRowSelected,c=r.a.useContext(u).dispatch;return Object(T.jsx)("button",{className:X.a.wrapper,onClick:function(e){e.stopPropagation(),c(x({rowId:o})),t(!1)},children:Object(T.jsx)("img",{src:Q,alt:""})})},q=t(23),Y=t.n(q),z=function(e){var o=e.rowData,t=r.a.useState(!1),c=Object(l.a)(t,2),n=c[0],a=c[1],s=r.a.useContext(u),d=s.state,p=s.dispatch,j=r.a.useState(0),b=Object(l.a)(j,2),w=b[0],I=b[1],O=r.a.useRef(null);return Object(T.jsxs)("tr",{children:[Object(T.jsxs)("td",{ref:O,className:Y.a.techCol,onClick:function(){var e;(a(!0),p(f()),O.current)&&I(((null===(e=O.current.closest("table"))||void 0===e?void 0:e.offsetWidth)||0)-12)},children:[Object(T.jsx)(J,{rowId:o.id}),n&&d.rows.length>1&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:Y.a.selectArea,style:{width:w}}),Object(T.jsx)(i.a,{onOutsideClick:function(){a(!1)},children:Object(T.jsx)(Z,{rowId:o.id,setRowSelected:a})})]})]}),o.cols.map((function(e){return Object(T.jsx)(P,{colData:e,rowId:o.id},e.id)}))]})},$=t(15),ee=t.n($),oe=function(e){var o,t=e.children,c=e.onClick,r=e.onBlur,n=e.className,a=e.style,l=e.active,d=void 0!==l&&l,i=e.disabled,u=void 0!==i&&i;return Object(T.jsx)("button",{disabled:u,onClick:c,onBlur:r,className:B()(ee.a.wrapper,n,(o={},Object(s.a)(o,ee.a.active,d),Object(s.a)(o,ee.a.disabled,u),o)),style:a,children:t})},te=function(e){var o=e.selectionState,t=e.rows,c=o.selectedCols,r=o.start,n=o.end,a=E(o),s=[],l=!1,d={maxColId:0,maxRowId:0,startColId:0,startRowId:0,get:function(){return(this.maxColId-this.startColId+1)*(this.maxRowId-this.startRowId+1)}};return t.forEach((function(e){e.cols.forEach((function(o){if(o.colSpan||o.rowSpan){var t=o.colSpan||0,c=o.rowSpan||0;s.push({row:{min:e.id,max:c?e.id+c-1:e.id},col:{min:o.id,max:t?o.id+t-1:o.id}})}}))})),c.forEach((function(e,o){var t=e.colSpan?e.colId+e.colSpan-1:e.colId,c=e.rowSpan?e.rowId+e.rowSpan-1:e.rowId;t>d.maxColId&&(d.maxColId=t),c>d.maxRowId&&(d.maxRowId=c),0===o&&(d.startColId=e.colId,d.startRowId=e.rowId)})),s.forEach((function(e){r&&n&&!l&&("part"===function(e,o){var t=Math.max(e.col.min-1,o.col.min-1),c=Math.min(e.col.max,o.col.max),r=Math.max(e.row.min-1,o.row.min-1),n=Math.min(e.row.max,o.row.max),a=(e.col.max-e.col.min+1)*(e.row.max-e.row.min+1);return t<c&&r<n?(c-t)*(n-r)===a?"full":"part":"not"}(e,{row:{min:r.rowId,max:n.rowId},col:{min:r.colId,max:n.colId}})&&(l=!0))})),!a&&d.get()===c.length&&!l},ce=function(){var e=r.a.useContext(u),o=e.state,t=e.dispatch;return Object(T.jsx)("li",{children:Object(T.jsx)("button",{disabled:!te(o),onClick:function(){!function(e,o){var t=e.selectionState,c=e.rows,r=[],n=t.selectedCols,a={rowId:n[0].rowId,colId:n[0].colId},s={prevRowId:n[0].rowId,prevColId:0,count:0},l={prevRowId:0,count:0};n.forEach((function(e,o){e.colId!==s.prevColId&&e.rowId===s.prevRowId&&(s.prevColId=e.colId,s.count+=1,n.length===o-1&&e.colSpan&&(s.count+=e.colSpan)),e.rowId!==l.prevRowId&&(l.prevRowId=e.rowId,l.count+=1,t.selectedCols.length===o-1&&e.rowSpan&&(l.count+=e.rowSpan))}));var d=c.map((function(e){var o=e.cols.map((function(o){var c={rowId:e.id,colId:o.id},n=a.rowId===e.id&&a.colId===o.id,d=g(t.start,t.end,c);return n&&s.count>1&&(o.colSpan=s.count),n&&l.count>1&&(o.rowSpan=l.count),d&&!n&&r.push(c),Object(j.a)(Object(j.a)(Object(j.a)({},d&&!n?Object(A.a)(o,["colSpan","rowSpan"]):o),n?{resources:[]}:{}),d&&!n?{display:!1,resourceFor:a}:{})}));return Object(j.a)(Object(j.a)({},e),{},{cols:o})}));d[a.rowId-1].cols[a.colId-1].resources=r,o(O({rows:d})),o(f())}(o,t)},children:"Merge"})})},re=function(){var e=r.a.useContext(u),o=e.state,t=e.dispatch,c=r.a.useState(!1),n=Object(l.a)(c,2),a=n[0],s=n[1];return r.a.useEffect((function(){var e,t=o.selectionState.start;if(t){var c=o.rows[(e=t).rowId-1].cols[e.colId-1];(c.colSpan||c.rowSpan)&&E(o.selectionState)&&s(!0)}}),[o]),Object(T.jsx)("li",{children:Object(T.jsx)("button",{disabled:!a,onClick:function(){!function(e,o){var t=e.selectionState,c=e.rows,r=t.selectedCols[0],n=c[r.rowId-1].cols[r.colId-1];n&&n.resources&&n.resources.forEach((function(e){var o=c[e.rowId-1].cols[e.colId-1];c[e.rowId-1].cols[e.colId-1]=Object(j.a)(Object(j.a)({},Object(A.a)(o,["resourceFor"])),{},{display:!0})})),c[r.rowId-1].cols[r.colId-1]=Object(A.a)(n,["resources","colSpan","rowSpan"]),o(O({rows:c})),o(f())}(o,t)},children:"Unmerge"})})},ne=t(10),ae=t.n(ne),se=function(){var e=r.a.useContext(u),o=e.state,t=e.dispatch,c=function(e){t(S({selectionState:o.selectionState,background:e}))};return Object(T.jsxs)("li",{className:ae.a.wrapper,children:[Object(T.jsx)("button",{children:"Background color"}),Object(T.jsxs)("div",{className:ae.a.colors,children:[Object(T.jsx)("button",{onClick:function(){return c(void 0)},className:B()(ae.a.colorButton,ae.a.transparent)}),U.map((function(e){return Object(T.jsx)("button",{onClick:function(){return c(e)},style:{background:e},className:ae.a.colorButton},e)}))]})]})},le=t.p+"static/media/setting.5524b19c.svg",de=t(11),ie=t.n(de),ue=function(){var e=r.a.useContext(u).state,o=r.a.useState(),t=Object(l.a)(o,2),c=t[0],n=t[1],a=r.a.useState(!1),d=Object(l.a)(a,2),p=d[0],j=d[1];return r.a.useEffect((function(){e.selectionState.start&&e.selectionState.end&&n(function(e,o){var t=F(e,o),c=document.getElementById("col-".concat(t.row.min,"-").concat(t.col.min));return c?{top:c.offsetTop+5,left:c.offsetLeft+5}:{top:0,left:0}}(e.selectionState.start,e.selectionState.end))}),[e]),Object(T.jsxs)("div",{className:B()(ie.a.wrapper,Object(s.a)({},ie.a.selected,e.selectionState.selected&&e.selectionState.selectedCols.length>0)),style:c,children:[Object(T.jsx)(oe,{onClick:function(){return j(!p)},className:ie.a.settingButton,children:Object(T.jsx)("img",{src:le,alt:""})}),p&&Object(T.jsx)(i.a,{onOutsideClick:function(){return j(!1)},children:Object(T.jsxs)("ul",{className:ie.a.menu,children:[Object(T.jsx)(se,{}),Object(T.jsx)(ce,{}),Object(T.jsx)(re,{})]})})]})},pe=function(e,o){var t=e.map((function(e){var t,c,r=e.cols.map((function(e){return e.id>o?Object(j.a)(Object(j.a)(Object(j.a)({},e),{},{id:e.id+1},e.resources?{resources:e.resources.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{colId:e.colId+1})}))}:{}),e.resourceFor&&e.resourceFor.colId>o?{resourceFor:Object(j.a)(Object(j.a)({},e.resourceFor),{},{colId:e.resourceFor.colId+1})}:e.resourceFor):e})),n=r[o-1]&&r[o-1].resourceFor&&r[o]&&r[o].resourceFor&&(null===(t=r[o-1].resourceFor)||void 0===t?void 0:t.colId)===(null===(c=r[o].resourceFor)||void 0===c?void 0:c.colId),a=Object(j.a)(Object(j.a)(Object(j.a)({id:o+1},W),r[o-1]&&r[o-1].colSpan?{display:!1,resourceFor:{rowId:e.id,colId:r[o-1].id}}:{}),n?{display:!1,resourceFor:r[o-1].resourceFor}:{});if(r[o-1]&&r[o-1].colSpan&&(r[o-1].colSpan+=1),n){var s=r[o-1].resourceFor;s&&r[s.colId-1]&&(r[s.colId-1].colSpan+=1)}return r.splice(o,0,a),Object(j.a)(Object(j.a)({},e),{},{cols:r})}));return t.forEach((function(e){e.cols.forEach((function(o){var c,r;(o.resources&&(t[e.id-1].cols[o.id-1].resources=[]),o.resourceFor)&&(null===(c=t[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1])||void 0===c||null===(r=c.resources)||void 0===r||r.push({colId:o.id,rowId:e.id}))}))})),t},je=t(24),be=t.n(je),we=function(e){var o=e.colId,t=r.a.useContext(u),c=t.dispatch,n=t.state;return Object(T.jsx)("div",{className:be.a.wrapper,children:Object(T.jsx)("button",{className:be.a.addButton,onClick:function(e){e.stopPropagation(),c(O({rows:pe(n.rows,o)}))},children:"+"})})},Ie=t.p+"static/media/close-circle.50ed0904.svg",fe=t(40),Oe=t.n(fe),he=function(e){var o=e.colId,t=e.setColSelected,c=r.a.useContext(u).dispatch;return Object(T.jsx)("button",{className:Oe.a.wrapper,onClick:function(e){e.stopPropagation(),c(C({colId:o})),t(!1)},children:Object(T.jsx)("img",{src:Ie,alt:""})})},Se=t(41),ve=t.n(Se),xe=function(e){var o=e.tableHeight,t=e.colId,n=r.a.useContext(u),a=n.state,s=n.dispatch,d=Object(c.useState)(!1),i=Object(l.a)(d,2),p=i[0],j=i[1],b=Object(c.useState)(0),w=Object(l.a)(b,2),I=w[0],O=w[1],h=Object(c.useState)(0),S=Object(l.a)(h,2),v=S[0],x=S[1],m=Object(c.useState)(0),C=Object(l.a)(m,2),F=C[0],g=C[1],E=function(e){e.stopPropagation(),p&&(s(_({colId:t,width:I-F})),g(0),j(!1))};return a.rows[0].cols.length===t?null:Object(T.jsx)("div",{onMouseDown:function(e){e.stopPropagation(),s(f()),j(!0),x(e.screenX+F)},onMouseUp:E,onMouseLeave:E,onMouseMove:function(e){e.stopPropagation(),p&&I-F>10&&g(v-e.screenX)},onClick:function(e){return e.stopPropagation()},ref:function(e){var o;return O((null===e||void 0===e||null===(o=e.closest("td"))||void 0===o?void 0:o.offsetWidth)||0)},className:ve.a.wrapper,style:{height:o,right:F}})},me=t(25),_e=t.n(me),Ce=function(e){var o,t=e.colId,c=r.a.useContext(u),n=c.state,a=c.dispatch,s=r.a.useState(!1),d=Object(l.a)(s,2),p=d[0],j=d[1],b=r.a.useState(0),w=Object(l.a)(b,2),I=w[0],O=w[1];return Object(T.jsxs)("td",{ref:function(e){var o;return O(((null===e||void 0===e||null===(o=e.closest("table"))||void 0===o?void 0:o.offsetHeight)||0)-12)},onClick:function(){a(f()),j(!0)},className:_e.a.techCol,style:{width:n.rows[0].cols.length>1?null===(o=n.rows[0].cols[t-1])||void 0===o?void 0:o.width:"auto"},children:[Object(T.jsx)(we,{colId:t}),Object(T.jsx)(xe,{tableHeight:I,colId:t}),n.rows[0].cols.length>1&&p&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:_e.a.selectArea,style:{height:I}}),Object(T.jsx)(i.a,{onOutsideClick:function(){j(!1)},children:Object(T.jsx)(he,{colId:t,setColSelected:j})})]})]})},Fe=function(){var e=r.a.useContext(u).state,o=r.a.useState([]),t=Object(l.a)(o,2),c=t[0],n=t[1];return r.a.useEffect((function(){n(Array(function(e){var o=0;return e.forEach((function(e){e.cols.length>o&&(o=e.cols.length)})),o}(e.rows)).fill({}).map((function(e,o){return Object(j.a)(Object(j.a)({},e),{},{id:o+1})})))}),[e]),e.rows.length?Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{style:{width:10}}),c.map((function(e){return Object(T.jsx)(Ce,{colId:e.id},e.id)}))]}):null},ge=t(16),Ee=t.n(ge),Ae=function(e){var o=e.onChange,t=r.a.useReducer(k,p),c=Object(l.a)(t,2),n=c[0],a=c[1];r.a.useEffect((function(){o&&"function"===typeof o&&o(n.rows)}),[n,o]);return Object(T.jsx)(u.Provider,{value:{dispatch:a,state:n},children:Object(T.jsx)("div",{className:Ee.a.wrapper,children:Object(T.jsxs)(i.a,{onOutsideClick:function(){a(f())},children:[Object(T.jsx)("table",{className:B()(Ee.a.table,Object(s.a)({},Ee.a.filled,!!n.rows.length)),children:Object(T.jsxs)("tbody",{children:[Object(T.jsx)(Fe,{}),n.rows.map((function(e){return Object(T.jsx)(z,{rowData:e},e.id)}))]})}),Object(T.jsx)(ue,{})]})})})};var ke=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(Ae,{})})};a.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(ke,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7442785d.chunk.js.map