(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{10:function(e,o,t){e.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",colorButton:"ChangeBackground_colorButton__2QEDl",transparent:"ChangeBackground_transparent__mqomV"}},11:function(e,o,t){e.exports={wrapper:"SelectionMenu_wrapper__2E3fb",selected:"SelectionMenu_selected__1dW4V",settingButton:"SelectionMenu_settingButton__2RZd1",menu:"SelectionMenu_menu__3_fZg"}},15:function(e,o,t){e.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG"}},16:function(e,o,t){e.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},21:function(e,o,t){e.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}},22:function(e,o,t){e.exports={wrapper:"AddRow_wrapper__3NW4Q",addButton:"AddRow_addButton__1hGob"}},23:function(e,o,t){e.exports={wrapper:"AddCol_wrapper__OkM3j",addButton:"AddCol_addButton__2VG6f"}},33:function(e,o,t){e.exports={wrapper:"TextEdit_wrapper__3ANjp"}},34:function(e,o,t){e.exports={wrapper:"RemoveRow_wrapper__QxJap"}},35:function(e,o,t){e.exports={techCol:"Row_techCol__HSNZB",active:"Row_active__1oG0c"}},38:function(e,o,t){e.exports={wrapper:"RemoveCol_wrapper__2M4QV"}},39:function(e,o,t){e.exports={techCol:"TechCol_techCol__3-ePx"}},65:function(e,o,t){"use strict";t.r(o);var c=t(2),r=t.n(c),n=t(32),a=t.n(n),s=t(6),d=t(4),l=c.createContext(null),i={touched:!1,selectionState:{selectedCols:[],selected:!1},rows:[{id:1,cols:[{content:"",type:"text",display:!0,id:1},{content:"",type:"text",display:!0,id:2}]}]},u=t(1),p=t(5),j=Object(p.createStandardAction)("TABLE/SET_START_SELECTION")(),w=Object(p.createStandardAction)("TABLE/SET_END_SELECTION")(),b=Object(p.createStandardAction)("TABLE/CLEAR_SELECTION")(),f=Object(p.createStandardAction)("TABLE/ROWS_UPDATE")(),I=Object(p.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),O=Object(p.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),h=Object(p.createStandardAction)("TABLE/SELECT_ROW")(),x=Object(p.createStandardAction)("TABLE/REMOVE_ROW")(),S=Object(p.createStandardAction)("TABLE/SELECT_COL")(),m=Object(p.createStandardAction)("TABLE/REMOVE_COL")(),v=function(e,o){return{row:{min:e.rowId<o.rowId?e.rowId:o.rowId,max:e.rowId<o.rowId?o.rowId:e.rowId},col:{min:e.colId<o.colId?e.colId:o.colId,max:e.colId<o.colId?o.colId:e.colId}}},_=function(e,o,t){var c=v(e,o);return t.rowId>=c.row.min&&t.rowId<=c.row.max&&t.colId>=c.col.min&&t.colId<=c.col.max},C=function(e){var o=e.selectedCols,t=e.start,c=e.end,r=o[0],n=(null===r||void 0===r?void 0:r.rowSpan)?r.rowSpan-1:0,a=(null===r||void 0===r?void 0:r.colSpan)?r.colSpan-1:0;return!(!t||!c||t.rowId!==c.rowId||t.colId!==c.colId)||(n>0||a>0)&&!!t&&!!c&&c.rowId===t.rowId+n&&c.colId===t.colId+a&&o.length>1},E=Object(p.createReducer)(i).handleAction(j,(function(e,o){var t=o.payload.positionStart;return Object(u.a)(Object(u.a)({},e),{},{touched:!0,selectionState:{selectedCols:[],selected:!1,start:t}})})).handleAction(w,(function(e,o){var t=o.payload,c=t.positionEnd,r=t.finished,n=[],a=e.rows,s=e.selectionState.start;if(r&&s)for(var d=v(s,c),l={rowId:d.row.min,colId:d.col.min},i={rowId:d.row.max,colId:d.col.max},p=l.rowId;p<=i.rowId;p+=1)for(var j={rowId:p},w=l.colId;w<=i.colId;w+=1){var b=a[p-1].cols[w-1].colSpan,f=a[p-1].cols[w-1].rowSpan;n.push(Object(u.a)(Object(u.a)(Object(u.a)({},j),{},{colId:w},f?{rowSpan:f}:{}),b?{colSpan:b}:{}))}return Object(u.a)(Object(u.a)(Object(u.a)({},e),r?{touched:!1}:{}),{},{selectionState:Object(u.a)(Object(u.a)(Object(u.a)({},e.selectionState),{},{selectedCols:n},r?{selected:!0}:{}),{},{end:c})})})).handleAction(b,(function(e){return Object(u.a)(Object(u.a)({},e),{},{selectionState:{selectedCols:[],selected:!1}})})).handleAction(f,(function(e,o){var t=o.payload.rows;return Object(u.a)(Object(u.a)({},e),{},{rows:t})})).handleAction(h,(function(e,o){var t=o.payload.rowId,c=e.rows[t-1],r=c.cols.map((function(e){return{rowId:t,colId:e.id}}));return Object(u.a)(Object(u.a)({},e),{},{selectionState:{selected:!0,selectedCols:r,start:{rowId:t,colId:c.cols[0].id},end:{rowId:t,colId:c.cols[c.cols.length-1].id}}})})).handleAction(S,(function(e,o){for(var t=o.payload.colId,c=[],r=1;r<=e.rows.length;r+=1)c.push({rowId:r,colId:t});return Object(u.a)(Object(u.a)({},e),{},{selectionState:{selected:!0,selectedCols:c,start:{rowId:e.rows[0].id,colId:t},end:{rowId:e.rows[e.rows.length-1].id,colId:t}}})})).handleAction(x,(function(e,o){var t=o.payload.rowId,c=e.rows;return c.splice(t-1,1),Object(u.a)(Object(u.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:c.map((function(e,o){return Object(u.a)(Object(u.a)({},e),{},{id:o+1})}))})})).handleAction(m,(function(e,o){var t=o.payload.colId,c=e.rows;return c.forEach((function(e){e.cols.splice(t-1,1),e.cols=e.cols.map((function(e,o){return Object(u.a)(Object(u.a)({},e),{},{id:o+1})}))})),Object(u.a)(Object(u.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:c.map((function(e,o){return Object(u.a)(Object(u.a)({},e),{},{id:o+1})}))})})).handleAction(I,(function(e,o){var t=o.payload,c=t.colId,r=t.rowId,n=t.content,a=e.rows;return a[r-1].cols[c-1].content=n,Object(u.a)(Object(u.a)({},e),{},{rows:a})})).handleAction(O,(function(e,o){var t=o.payload,c=t.selectionState,r=t.background,n=e.rows.map((function(e){var o=e.cols.map((function(o){return c.start&&c.end&&_(c.start,c.end,{rowId:e.id,colId:o.id})?Object(u.a)(Object(u.a)({},o),{},{background:r}):o}));return Object(u.a)(Object(u.a)({},e),{},{cols:o})}));return Object(u.a)(Object(u.a)({},e),{},{rows:n})})),g=t(9),F=t.n(g),A={content:"",type:"text",display:!0},B=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffccc7"],y=t(7),k=t.n(y),R=t(33),N=t.n(R),T=t(0),L=function(e){var o=e.value,t=e.colId,n=e.rowId,a=e.background,s=e.setEditMode,d=r.a.useContext(l).dispatch,i=Object(c.useRef)(null);r.a.useEffect((function(){i.current&&i.current.focus()}),[]);var u=function(e){d(I({rowId:n,colId:t,content:e.target.value})),s(!1)};return Object(T.jsx)("input",{ref:i,defaultValue:o,onBlur:u,onKeyDown:function(e){"Enter"===e.code&&u(e)},className:N.a.wrapper,style:{background:a}})},M=t(21),D=t.n(M),P=function(e){var o=e.colData,t=e.rowId,n=r.a.useState(!1),a=Object(d.a)(n,2),i=a[0],u=a[1],p=r.a.useState(!1),b=Object(d.a)(p,2),f=b[0],I=b[1],O=r.a.useContext(l),h=O.state,x=O.dispatch,S=Object(c.useRef)(null);if(r.a.useEffect((function(){h.selectionState.start&&h.selectionState.end?u(_(h.selectionState.start,h.selectionState.end,{rowId:t,colId:o.id})):u(!1)}),[h,t,o,S]),!o.display)return null;return Object(T.jsxs)("td",{id:"col-".concat(t,"-").concat(o.id),onMouseDown:function(){h.touched?x(w({positionEnd:{rowId:o.rowSpan?t+o.rowSpan-1:t,colId:o.colSpan?o.id+o.colSpan-1:o.id},finished:!0})):x(j({positionStart:{rowId:t,colId:o.id}}))},onMouseUp:function(){x(w({positionEnd:{rowId:o.rowSpan?t+o.rowSpan-1:t,colId:o.colSpan?o.id+o.colSpan-1:o.id},finished:!0}))},onMouseEnter:function(){h.touched&&x(w({positionEnd:{rowId:t,colId:o.id},finished:!1}))},onDoubleClick:function(){return I(!0)},colSpan:o.colSpan,rowSpan:o.rowSpan,className:k()(D.a.wrapper,Object(s.a)({},D.a.selected,i)),style:{background:o.background},children:[f&&"text"===o.type&&Object(T.jsx)(L,{value:o.content,background:o.background,rowId:t,colId:o.id,setEditMode:I}),!f&&o.content]})},V=function(e,o){var t=e[o-1],c=e[o],r={id:o+1,cols:[]};t.cols.forEach((function(e,n){var a=Object(u.a)(Object(u.a)({},A),{},{id:e.id});if(c){var s=t.cols[n],d=c.cols[n];s.rowSpan&&d.resourceFor&&d.resourceFor.colId===s.id&&d.resourceFor.rowId===t.id?r.cols.push(Object(u.a)(Object(u.a)({},a),{},{display:!1,resourceFor:{rowId:o,colId:e.id}})):s.resourceFor&&d.resourceFor&&d.resourceFor.colId===s.resourceFor.colId&&d.resourceFor.rowId===s.resourceFor.rowId?r.cols.push(Object(u.a)(Object(u.a)({},a),{},{display:!1,resourceFor:s.resourceFor})):r.cols.push(a)}else r.cols.push(a)}));var n=[];r.cols.forEach((function(o){if(o.resourceFor){var t="".concat(o.resourceFor.rowId).concat(o.resourceFor.colId);if(!n.includes(t)){var c=e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan||0;e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan=c+1,n.push(t)}}}));var a=e.map((function(e){if(e.id>o){var t=e.cols.map((function(e){return Object(u.a)(Object(u.a)({},e),e.resourceFor&&e.resourceFor.rowId>o?{resourceFor:Object(u.a)(Object(u.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId+1})}:e.resourceFor)}));return Object(u.a)(Object(u.a)({},e),{},{id:e.id+1,cols:t})}return e}));return a.splice(o,0,r),a.forEach((function(e){e.cols.forEach((function(o){var t;(o.resources&&(a[e.id-1].cols[o.id-1].resources=[]),o.resourceFor)&&(null===(t=a[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].resources)||void 0===t||t.push({colId:o.id,rowId:e.id}))}))})),a},U=t(22),W=t.n(U),G=function(e){var o=e.rowId,t=r.a.useContext(l),c=t.dispatch,n=t.state;return Object(T.jsx)("div",{className:W.a.wrapper,children:Object(T.jsx)("button",{className:W.a.addButton,onClick:function(e){e.stopPropagation(),c(f({rows:V(n.rows,o)}))},children:"+"})})},J=t.p+"static/media/close-circle.50ed0904.svg",Q=t(34),Z=t.n(Q),q=function(e){var o=e.rowId,t=e.setRowSelected,c=r.a.useContext(l).dispatch;return Object(T.jsx)("button",{className:Z.a.wrapper,onClick:function(e){e.stopPropagation(),c(x({rowId:o})),t(!1)},children:Object(T.jsx)("img",{src:J,alt:""})})},K=t(35),H=t.n(K),z=function(e){var o=e.rowData,t=r.a.useState(!1),c=Object(d.a)(t,2),n=c[0],a=c[1],s=r.a.useContext(l),i=s.state,u=s.dispatch;return Object(T.jsxs)("tr",{style:{height:o.height||45},children:[Object(T.jsxs)("td",{className:H.a.techCol,onClick:function(){a(!0),u(h({rowId:o.id}))},children:[Object(T.jsx)(G,{rowId:o.id}),n&&i.rows.length>1&&Object(T.jsx)(F.a,{onOutsideClick:function(){a(!1)},children:Object(T.jsx)(q,{rowId:o.id,setRowSelected:a})})]}),o.cols.map((function(e){return Object(T.jsx)(P,{colData:e,rowId:o.id},e.id)}))]})},X=t(15),Y=t.n(X),$=function(e){var o,t=e.children,c=e.onClick,r=e.onBlur,n=e.className,a=e.style,d=e.active,l=void 0!==d&&d,i=e.disabled,u=void 0!==i&&i;return Object(T.jsx)("button",{disabled:u,onClick:c,onBlur:r,className:k()(Y.a.wrapper,n,(o={},Object(s.a)(o,Y.a.active,l),Object(s.a)(o,Y.a.disabled,u),o)),style:a,children:t})},ee=t(66),oe=function(e){var o=e.selectionState,t=e.rows,c=o.selectedCols,r=o.start,n=o.end,a=C(o),s=[],d=!1,l={maxColId:0,maxRowId:0,startColId:0,startRowId:0,get:function(){return(this.maxColId-this.startColId+1)*(this.maxRowId-this.startRowId+1)}};return t.forEach((function(e){e.cols.forEach((function(o){if(o.colSpan||o.rowSpan){var t=o.colSpan||0,c=o.rowSpan||0;s.push({row:{min:e.id,max:c?e.id+c-1:e.id},col:{min:o.id,max:t?o.id+t-1:o.id}})}}))})),c.forEach((function(e,o){var t=e.colSpan?e.colId+e.colSpan-1:e.colId,c=e.rowSpan?e.rowId+e.rowSpan-1:e.rowId;t>l.maxColId&&(l.maxColId=t),c>l.maxRowId&&(l.maxRowId=c),0===o&&(l.startColId=e.colId,l.startRowId=e.rowId)})),s.forEach((function(e){r&&n&&!d&&("part"===function(e,o){var t=Math.max(e.col.min-1,o.col.min-1),c=Math.min(e.col.max,o.col.max),r=Math.max(e.row.min-1,o.row.min-1),n=Math.min(e.row.max,o.row.max),a=(e.col.max-e.col.min+1)*(e.row.max-e.row.min+1);return t<c&&r<n?(c-t)*(n-r)===a?"full":"part":"not"}(e,{row:{min:r.rowId,max:n.rowId},col:{min:r.colId,max:n.colId}})&&(d=!0))})),!a&&l.get()===c.length&&!d},te=function(){var e=r.a.useContext(l),o=e.state,t=e.dispatch;return Object(T.jsx)("li",{children:Object(T.jsx)("button",{disabled:!oe(o),onClick:function(){!function(e,o){var t=e.selectionState,c=e.rows,r=[],n=t.selectedCols,a={rowId:n[0].rowId,colId:n[0].colId},s={prevRowId:n[0].rowId,prevColId:0,count:0},d={prevRowId:0,count:0};n.forEach((function(e,o){e.colId!==s.prevColId&&e.rowId===s.prevRowId&&(s.prevColId=e.colId,s.count+=1,n.length===o-1&&e.colSpan&&(s.count+=e.colSpan)),e.rowId!==d.prevRowId&&(d.prevRowId=e.rowId,d.count+=1,t.selectedCols.length===o-1&&e.rowSpan&&(d.count+=e.rowSpan))}));var l=c.map((function(e){var o=e.cols.map((function(o){var c={rowId:e.id,colId:o.id},n=a.rowId===e.id&&a.colId===o.id,l=_(t.start,t.end,c);return n&&s.count>1&&(o.colSpan=s.count),n&&d.count>1&&(o.rowSpan=d.count),l&&!n&&r.push(c),Object(u.a)(Object(u.a)(Object(u.a)({},l&&!n?Object(ee.a)(o,["colSpan","rowSpan"]):o),n?{resources:[]}:{}),l&&!n?{display:!1,resourceFor:a}:{})}));return Object(u.a)(Object(u.a)({},e),{},{cols:o})}));l[a.rowId-1].cols[a.colId-1].resources=r,o(f({rows:l})),o(b())}(o,t)},children:"Merge"})})},ce=function(){var e=r.a.useContext(l),o=e.state,t=e.dispatch;return Object(T.jsx)("li",{children:Object(T.jsx)("button",{disabled:!(C(o.selectionState)&&o.selectionState.selectedCols.length>1),onClick:function(){!function(e,o){var t=e.selectionState,c=e.rows,r=t.selectedCols[0],n=c[r.rowId-1].cols[r.colId-1];n&&n.resources&&n.resources.forEach((function(e){var o=c[e.rowId-1].cols[e.colId-1];c[e.rowId-1].cols[e.colId-1]=Object(u.a)(Object(u.a)({},Object(ee.a)(o,["resourceFor"])),{},{display:!0})})),c[r.rowId-1].cols[r.colId-1]=Object(ee.a)(n,["resources","colSpan","rowSpan"]),o(f({rows:c})),o(b())}(o,t)},children:"Unmerge"})})},re=t(10),ne=t.n(re),ae=function(){var e=r.a.useContext(l),o=e.state,t=e.dispatch,c=function(e){t(O({selectionState:o.selectionState,background:e}))};return Object(T.jsxs)("li",{className:ne.a.wrapper,children:[Object(T.jsx)("button",{children:"Background color"}),Object(T.jsxs)("div",{className:ne.a.colors,children:[Object(T.jsx)("button",{onClick:function(){return c(void 0)},className:k()(ne.a.colorButton,ne.a.transparent)}),B.map((function(e){return Object(T.jsx)("button",{onClick:function(){return c(e)},style:{background:e},className:ne.a.colorButton},e)}))]})]})},se=t.p+"static/media/setting.5524b19c.svg",de=t(11),le=t.n(de),ie=function(){var e=r.a.useContext(l).state,o=r.a.useState(),t=Object(d.a)(o,2),c=t[0],n=t[1],a=r.a.useState(!1),i=Object(d.a)(a,2),u=i[0],p=i[1];return r.a.useEffect((function(){e.selectionState.start&&e.selectionState.end&&n(function(e,o){var t=v(e,o),c=document.getElementById("col-".concat(t.row.min,"-").concat(t.col.min));return c?{top:c.offsetTop+5,left:c.offsetLeft+5}:{top:0,left:0}}(e.selectionState.start,e.selectionState.end))}),[e]),Object(T.jsxs)("div",{className:k()(le.a.wrapper,Object(s.a)({},le.a.selected,e.selectionState.selected&&e.selectionState.selectedCols.length>0)),style:c,children:[Object(T.jsx)($,{onClick:function(){return p(!u)},className:le.a.settingButton,children:Object(T.jsx)("img",{src:se,alt:""})}),u&&Object(T.jsx)(F.a,{onOutsideClick:function(){return p(!1)},children:Object(T.jsxs)("ul",{className:le.a.menu,children:[Object(T.jsx)(ae,{}),Object(T.jsx)(te,{}),Object(T.jsx)(ce,{})]})})]})},ue=function(e,o){var t=e.map((function(e){var t,c,r=e.cols.map((function(e){return e.id>o?Object(u.a)(Object(u.a)(Object(u.a)({},e),{},{id:e.id+1},e.resources?{resources:e.resources.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{colId:e.colId+1})}))}:{}),e.resourceFor&&e.resourceFor.colId>o?{resourceFor:Object(u.a)(Object(u.a)({},e.resourceFor),{},{colId:e.resourceFor.colId+1})}:e.resourceFor):e})),n=r[o-1]&&r[o-1].resourceFor&&r[o]&&r[o].resourceFor&&(null===(t=r[o-1].resourceFor)||void 0===t?void 0:t.colId)===(null===(c=r[o].resourceFor)||void 0===c?void 0:c.colId),a=Object(u.a)(Object(u.a)(Object(u.a)({id:o+1},A),r[o-1]&&r[o-1].colSpan?{display:!1,resourceFor:{rowId:e.id,colId:r[o-1].id}}:{}),n?{display:!1,resourceFor:r[o-1].resourceFor}:{});if(r[o-1]&&r[o-1].colSpan&&(r[o-1].colSpan+=1),n){var s=r[o-1].resourceFor;s&&r[s.colId-1]&&(r[s.colId-1].colSpan+=1)}return r.splice(o,0,a),Object(u.a)(Object(u.a)({},e),{},{cols:r})}));return t.forEach((function(e){e.cols.forEach((function(o){var c;(o.resources&&(t[e.id-1].cols[o.id-1].resources=[]),o.resourceFor)&&(null===(c=t[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].resources)||void 0===c||c.push({colId:o.id,rowId:e.id}))}))})),t},pe=t(23),je=t.n(pe),we=function(e){var o=e.colId,t=r.a.useContext(l),c=t.dispatch,n=t.state;return Object(T.jsx)("div",{className:je.a.wrapper,children:Object(T.jsx)("button",{className:je.a.addButton,onClick:function(e){e.stopPropagation(),c(f({rows:ue(n.rows,o)}))},children:"+"})})},be=t.p+"static/media/close-circle.50ed0904.svg",fe=t(38),Ie=t.n(fe),Oe=function(e){var o=e.colId,t=e.setColSelected,c=r.a.useContext(l).dispatch;return Object(T.jsx)("button",{className:Ie.a.wrapper,onClick:function(e){e.stopPropagation(),c(m({colId:o})),t(!1)},children:Object(T.jsx)("img",{src:be,alt:""})})},he=t(39),xe=t.n(he),Se=function(e){var o=e.colId,t=r.a.useContext(l),c=t.state,n=t.dispatch,a=r.a.useState(!1),s=Object(d.a)(a,2),i=s[0],u=s[1];return Object(T.jsxs)("td",{onClick:function(){u(!0),n(S({colId:o}))},className:xe.a.techCol,children:[Object(T.jsx)(we,{colId:o}),c.rows[0].cols.length>1&&i&&Object(T.jsx)(F.a,{onOutsideClick:function(){u(!1)},children:Object(T.jsx)(Oe,{colId:o,setColSelected:u})})]},o)},me=function(){var e=r.a.useContext(l).state,o=r.a.useState([]),t=Object(d.a)(o,2),c=t[0],n=t[1];return r.a.useEffect((function(){n(Array(function(e){var o=0;return e.forEach((function(e){e.cols.length>o&&(o=e.cols.length)})),o}(e.rows)).fill({}).map((function(e,o){return Object(u.a)(Object(u.a)({},e),{},{id:o+1})})))}),[e]),e.rows.length?Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{style:{width:10}}),c.map((function(e){return Object(T.jsx)(Se,{colId:e.id},e.id)}))]}):null},ve=t(16),_e=t.n(ve),Ce=function(e){var o=e.onChange,t=r.a.useReducer(E,i),c=Object(d.a)(t,2),n=c[0],a=c[1];return r.a.useEffect((function(){o&&"function"===typeof o&&o(n.rows)}),[n,o]),Object(T.jsx)(l.Provider,{value:{dispatch:a,state:n},children:Object(T.jsxs)("div",{className:_e.a.wrapper,children:[Object(T.jsx)("table",{className:k()(_e.a.table,Object(s.a)({},_e.a.filled,!!n.rows.length)),children:Object(T.jsxs)("tbody",{children:[Object(T.jsx)(me,{}),n.rows.map((function(e){return Object(T.jsx)(z,{rowData:e},e.id)}))]})}),Object(T.jsx)(ie,{})]})})};var Ee=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(Ce,{})})};a.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(Ee,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.e40c2be8.chunk.js.map