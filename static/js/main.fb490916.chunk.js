(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{10:function(e,o,t){e.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",colorButton:"ChangeBackground_colorButton__2QEDl",transparent:"ChangeBackground_transparent__mqomV"}},12:function(e,o,t){e.exports={wrapper:"SelectionMenu_wrapper__2E3fb",selected:"SelectionMenu_selected__1dW4V",settingButton:"SelectionMenu_settingButton__2RZd1",menu:"SelectionMenu_menu__3_fZg"}},17:function(e,o,t){e.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG"}},18:function(e,o,t){e.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},23:function(e,o,t){e.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}},24:function(e,o,t){e.exports={wrapper:"AddRow_wrapper__3NW4Q",addButton:"AddRow_addButton__1hGob"}},25:function(e,o,t){e.exports={wrapper:"AddCol_wrapper__OkM3j",addButton:"AddCol_addButton__2VG6f"}},38:function(e,o,t){e.exports={wrapper:"TextEdit_wrapper__3ANjp"}},39:function(e,o,t){e.exports={wrapper:"RemoveRow_wrapper__QxJap"}},40:function(e,o,t){e.exports={techCol:"Row_techCol__HSNZB",active:"Row_active__1oG0c"}},41:function(e,o,t){e.exports={wrapper:"RemoveCol_wrapper__2M4QV"}},42:function(e,o,t){e.exports={techCol:"TechCol_techCol__3-ePx"}},68:function(e,o,t){"use strict";t.r(o);var c=t(2),r=t.n(c),n=t(35),a=t.n(n),s=t(6),d=t(4),l=c.createContext(null),i={touched:!1,selectionState:{selectedCols:[],selected:!1},rows:[{id:1,cols:[{content:"",type:"text",display:!0,id:1},{content:"",type:"text",display:!0,id:2}]}]},u=t(43),p=t(0),w=t(5),j=Object(w.createStandardAction)("TABLE/SET_START_SELECTION")(),b=Object(w.createStandardAction)("TABLE/SET_END_SELECTION")(),f=Object(w.createStandardAction)("TABLE/CLEAR_SELECTION")(),I=Object(w.createStandardAction)("TABLE/ROWS_UPDATE")(),O=Object(w.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),h=Object(w.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),S=Object(w.createStandardAction)("TABLE/SELECT_ROW")(),x=Object(w.createStandardAction)("TABLE/REMOVE_ROW")(),v=Object(w.createStandardAction)("TABLE/SELECT_COL")(),m=Object(w.createStandardAction)("TABLE/REMOVE_COL")(),_=function(e,o){return{row:{min:e.rowId<o.rowId?e.rowId:o.rowId,max:e.rowId<o.rowId?o.rowId:e.rowId},col:{min:e.colId<o.colId?e.colId:o.colId,max:e.colId<o.colId?o.colId:e.colId}}},C=function(e,o,t){var c=_(e,o);return t.rowId>=c.row.min&&t.rowId<=c.row.max&&t.colId>=c.col.min&&t.colId<=c.col.max},E=function(e){var o=e.selectedCols,t=e.start,c=e.end,r=o[0],n=(null===r||void 0===r?void 0:r.rowSpan)?r.rowSpan-1:0,a=(null===r||void 0===r?void 0:r.colSpan)?r.colSpan-1:0;return!(!t||!c||t.rowId!==c.rowId||t.colId!==c.colId)||(n>0||a>0)&&!!t&&!!c&&c.rowId===t.rowId+n&&c.colId===t.colId+a&&o.length>1},g=t(69),F=Object(w.createReducer)(i).handleAction(j,(function(e,o){var t=o.payload.positionStart;return Object(p.a)(Object(p.a)({},e),{},{touched:!0,selectionState:{selectedCols:[],selected:!1,start:t}})})).handleAction(b,(function(e,o){var t=o.payload,c=t.positionEnd,r=t.finished,n=[],a=e.rows,s=e.selectionState.start;if(r&&s)for(var d=_(s,c),l={rowId:d.row.min,colId:d.col.min},i={rowId:d.row.max,colId:d.col.max},u=l.rowId;u<=i.rowId;u+=1)for(var w={rowId:u},j=l.colId;j<=i.colId;j+=1){var b=a[u-1].cols[j-1].colSpan,f=a[u-1].cols[j-1].rowSpan;n.push(Object(p.a)(Object(p.a)(Object(p.a)({},w),{},{colId:j},f?{rowSpan:f}:{}),b?{colSpan:b}:{}))}return Object(p.a)(Object(p.a)(Object(p.a)({},e),r?{touched:!1}:{}),{},{selectionState:Object(p.a)(Object(p.a)(Object(p.a)({},e.selectionState),{},{selectedCols:n},r?{selected:!0}:{}),{},{end:c})})})).handleAction(f,(function(e){return Object(p.a)(Object(p.a)({},e),{},{selectionState:{selectedCols:[],selected:!1}})})).handleAction(I,(function(e,o){var t=o.payload.rows;return Object(p.a)(Object(p.a)({},e),{},{rows:t})})).handleAction(S,(function(e,o){var t=o.payload.rowId,c=e.rows[t-1],r=c.cols.map((function(e){return{rowId:t,colId:e.id}}));return Object(p.a)(Object(p.a)({},e),{},{selectionState:{selected:!0,selectedCols:r,start:{rowId:t,colId:c.cols[0].id},end:{rowId:t,colId:c.cols[c.cols.length-1].id}}})})).handleAction(v,(function(e,o){for(var t=o.payload.colId,c=[],r=1;r<=e.rows.length;r+=1)c.push({rowId:r,colId:t});return Object(p.a)(Object(p.a)({},e),{},{selectionState:{selected:!0,selectedCols:c,start:{rowId:e.rows[0].id,colId:t},end:{rowId:e.rows[e.rows.length-1].id,colId:t}}})})).handleAction(x,(function(e,o){var t=o.payload.rowId,c=e.rows[t-1],r={parentCols:[],resourceFor:[]};c.cols.forEach((function(e){if(e.resourceFor){var o="".concat(e.resourceFor.rowId,"-").concat(e.resourceFor.colId);r.resourceFor.includes(o)||e.resourceFor.rowId===t||r.resourceFor.push(o)}e.resources&&r.parentCols.push(e)}));var n=e.rows;return r.resourceFor.length>0&&r.resourceFor.forEach((function(e){var o=e.split("-"),t=+o[0],c=+o[1],r=n[t-1].cols[c-1];r.rowSpan&&r.rowSpan>2?n[t-1].cols[c-1].rowSpan=r.rowSpan-1:n[t-1].cols[c-1]=Object(g.a)(r,["resources","rowSpan"])})),r.parentCols.length>0&&r.parentCols.forEach((function(e){var o=e.id,c=t+1,r=2===e.rowSpan;n[c-1].cols[o-1]=Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)({},Object(g.a)(e,["resourceFor"].concat(Object(u.a)(r?["resources","rowSpan"]:[])))),{},{display:!0},r?{}:{resources:e.resources.slice(0,e.resources.length-e.colSpan||1)}),e.rowSpan&&!r?{rowSpan:e.rowSpan-1}:{}),e.colSpan?{colSpan:e.colSpan}:{})})),n.splice(t-1,1),Object(p.a)(Object(p.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:n.map((function(e,o){return Object(p.a)(Object(p.a)({},e),{},{id:o+1})}))})})).handleAction(m,(function(e,o){var t=o.payload.colId,c=e.rows;return c.forEach((function(e){e.cols.splice(t-1,1),e.cols=e.cols.map((function(e,o){return Object(p.a)(Object(p.a)({},e),{},{id:o+1})}))})),Object(p.a)(Object(p.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:c.map((function(e,o){return Object(p.a)(Object(p.a)({},e),{},{id:o+1})}))})})).handleAction(O,(function(e,o){var t=o.payload,c=t.colId,r=t.rowId,n=t.content,a=e.rows;return a[r-1].cols[c-1].content=n,Object(p.a)(Object(p.a)({},e),{},{rows:a})})).handleAction(h,(function(e,o){var t=o.payload,c=t.selectionState,r=t.background,n=e.rows.map((function(e){var o=e.cols.map((function(o){return c.start&&c.end&&C(c.start,c.end,{rowId:e.id,colId:o.id})?Object(p.a)(Object(p.a)({},o),{},{background:r}):o}));return Object(p.a)(Object(p.a)({},e),{},{cols:o})}));return Object(p.a)(Object(p.a)({},e),{},{rows:n})})),A=t(9),y=t.n(A),B={content:"",type:"text",display:!0},k=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffccc7"],R=t(7),N=t.n(R),T=t(38),L=t.n(T),M=t(1),D=function(e){var o=e.value,t=e.colId,n=e.rowId,a=e.background,s=e.setEditMode,d=r.a.useContext(l).dispatch,i=Object(c.useRef)(null);r.a.useEffect((function(){i.current&&i.current.focus()}),[]);var u=function(e){d(O({rowId:n,colId:t,content:e.target.value})),s(!1)};return Object(M.jsx)("input",{ref:i,defaultValue:o,onBlur:u,onKeyDown:function(e){"Enter"===e.code&&u(e)},className:L.a.wrapper,style:{background:a}})},P=t(23),V=t.n(P),U=function(e){var o=e.colData,t=e.rowId,c=r.a.useState(!1),n=Object(d.a)(c,2),a=n[0],i=n[1],u=r.a.useState(!1),p=Object(d.a)(u,2),w=p[0],f=p[1],I=r.a.useState({rowId:0,colId:0}),O=Object(d.a)(I,2),h=O[0],S=O[1],x=r.a.useContext(l),v=x.state,m=x.dispatch;if(r.a.useEffect((function(){v.selectionState.start&&v.selectionState.end?i(C(v.selectionState.start,v.selectionState.end,{rowId:t,colId:o.id})):i(!1),S({rowId:o.rowSpan&&v.selectionState.start&&v.selectionState.start.rowId<t?t+o.rowSpan-1:t,colId:o.colSpan&&v.selectionState.start&&v.selectionState.start.colId<o.id?o.id+o.colSpan-1:o.id})}),[v,t,o]),!o.display)return null;return Object(M.jsxs)("td",{id:"col-".concat(t,"-").concat(o.id),onMouseDown:function(){v.touched?m(b({positionEnd:h,finished:!0})):m(j({positionStart:{rowId:t,colId:o.id}}))},onMouseUp:function(){m(b({positionEnd:h,finished:!0}))},onMouseEnter:function(){v.touched&&m(b({positionEnd:{rowId:t,colId:o.id},finished:!1}))},onDoubleClick:function(){return f(!0)},colSpan:o.colSpan,rowSpan:o.rowSpan,className:N()(V.a.wrapper,Object(s.a)({},V.a.selected,a)),style:{background:o.background},children:[w&&"text"===o.type&&Object(M.jsx)(D,{value:o.content,background:o.background,rowId:t,colId:o.id,setEditMode:f}),!w&&o.content]})},W=function(e,o){var t=e[o-1],c=e[o],r={id:o+1,cols:[]};t.cols.forEach((function(e,n){var a=Object(p.a)(Object(p.a)({},B),{},{id:e.id});if(c){var s=t.cols[n],d=c.cols[n];s.rowSpan&&d.resourceFor&&d.resourceFor.colId===s.id&&d.resourceFor.rowId===t.id?r.cols.push(Object(p.a)(Object(p.a)({},a),{},{display:!1,resourceFor:{rowId:o,colId:e.id}})):s.resourceFor&&d.resourceFor&&d.resourceFor.colId===s.resourceFor.colId&&d.resourceFor.rowId===s.resourceFor.rowId?r.cols.push(Object(p.a)(Object(p.a)({},a),{},{display:!1,resourceFor:s.resourceFor})):r.cols.push(a)}else r.cols.push(a)}));var n=[];r.cols.forEach((function(o){if(o.resourceFor){var t="".concat(o.resourceFor.rowId).concat(o.resourceFor.colId);if(!n.includes(t)){var c=e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan||0;e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan=c+1,n.push(t)}}}));var a=e.map((function(e){if(e.id>o){var t=e.cols.map((function(e){return Object(p.a)(Object(p.a)({},e),e.resourceFor&&e.resourceFor.rowId>o?{resourceFor:Object(p.a)(Object(p.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId+1})}:e.resourceFor)}));return Object(p.a)(Object(p.a)({},e),{},{id:e.id+1,cols:t})}return e}));return a.splice(o,0,r),a.forEach((function(e){e.cols.forEach((function(o){var t;(o.resources&&(a[e.id-1].cols[o.id-1].resources=[]),o.resourceFor)&&(null===(t=a[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].resources)||void 0===t||t.push({colId:o.id,rowId:e.id}))}))})),a},G=t(24),J=t.n(G),Q=function(e){var o=e.rowId,t=r.a.useContext(l),c=t.dispatch,n=t.state;return Object(M.jsx)("div",{className:J.a.wrapper,children:Object(M.jsx)("button",{className:J.a.addButton,onClick:function(e){e.stopPropagation(),c(I({rows:W(n.rows,o)}))},children:"+"})})},Z=t.p+"static/media/close-circle.50ed0904.svg",q=t(39),K=t.n(q),H=function(e){var o=e.rowId,t=e.setRowSelected,c=r.a.useContext(l).dispatch;return Object(M.jsx)("button",{className:K.a.wrapper,onClick:function(e){e.stopPropagation(),c(x({rowId:o})),t(!1)},children:Object(M.jsx)("img",{src:Z,alt:""})})},z=t(40),X=t.n(z),Y=function(e){var o=e.rowData,t=r.a.useState(!1),c=Object(d.a)(t,2),n=c[0],a=c[1],s=r.a.useContext(l),i=s.state,u=s.dispatch;return Object(M.jsxs)("tr",{style:{height:o.height||45},children:[Object(M.jsxs)("td",{className:X.a.techCol,onClick:function(){a(!0),u(S({rowId:o.id}))},children:[Object(M.jsx)(Q,{rowId:o.id}),n&&i.rows.length>1&&Object(M.jsx)(y.a,{onOutsideClick:function(){a(!1)},children:Object(M.jsx)(H,{rowId:o.id,setRowSelected:a})})]}),o.cols.map((function(e){return Object(M.jsx)(U,{colData:e,rowId:o.id},e.id)}))]})},$=t(17),ee=t.n($),oe=function(e){var o,t=e.children,c=e.onClick,r=e.onBlur,n=e.className,a=e.style,d=e.active,l=void 0!==d&&d,i=e.disabled,u=void 0!==i&&i;return Object(M.jsx)("button",{disabled:u,onClick:c,onBlur:r,className:N()(ee.a.wrapper,n,(o={},Object(s.a)(o,ee.a.active,l),Object(s.a)(o,ee.a.disabled,u),o)),style:a,children:t})},te=function(e){var o=e.selectionState,t=e.rows,c=o.selectedCols,r=o.start,n=o.end,a=E(o),s=[],d=!1,l={maxColId:0,maxRowId:0,startColId:0,startRowId:0,get:function(){return(this.maxColId-this.startColId+1)*(this.maxRowId-this.startRowId+1)}};return t.forEach((function(e){e.cols.forEach((function(o){if(o.colSpan||o.rowSpan){var t=o.colSpan||0,c=o.rowSpan||0;s.push({row:{min:e.id,max:c?e.id+c-1:e.id},col:{min:o.id,max:t?o.id+t-1:o.id}})}}))})),c.forEach((function(e,o){var t=e.colSpan?e.colId+e.colSpan-1:e.colId,c=e.rowSpan?e.rowId+e.rowSpan-1:e.rowId;t>l.maxColId&&(l.maxColId=t),c>l.maxRowId&&(l.maxRowId=c),0===o&&(l.startColId=e.colId,l.startRowId=e.rowId)})),s.forEach((function(e){r&&n&&!d&&("part"===function(e,o){var t=Math.max(e.col.min-1,o.col.min-1),c=Math.min(e.col.max,o.col.max),r=Math.max(e.row.min-1,o.row.min-1),n=Math.min(e.row.max,o.row.max),a=(e.col.max-e.col.min+1)*(e.row.max-e.row.min+1);return t<c&&r<n?(c-t)*(n-r)===a?"full":"part":"not"}(e,{row:{min:r.rowId,max:n.rowId},col:{min:r.colId,max:n.colId}})&&(d=!0))})),!a&&l.get()===c.length&&!d},ce=function(){var e=r.a.useContext(l),o=e.state,t=e.dispatch;return Object(M.jsx)("li",{children:Object(M.jsx)("button",{disabled:!te(o),onClick:function(){!function(e,o){var t=e.selectionState,c=e.rows,r=[],n=t.selectedCols,a={rowId:n[0].rowId,colId:n[0].colId},s={prevRowId:n[0].rowId,prevColId:0,count:0},d={prevRowId:0,count:0};n.forEach((function(e,o){e.colId!==s.prevColId&&e.rowId===s.prevRowId&&(s.prevColId=e.colId,s.count+=1,n.length===o-1&&e.colSpan&&(s.count+=e.colSpan)),e.rowId!==d.prevRowId&&(d.prevRowId=e.rowId,d.count+=1,t.selectedCols.length===o-1&&e.rowSpan&&(d.count+=e.rowSpan))}));var l=c.map((function(e){var o=e.cols.map((function(o){var c={rowId:e.id,colId:o.id},n=a.rowId===e.id&&a.colId===o.id,l=C(t.start,t.end,c);return n&&s.count>1&&(o.colSpan=s.count),n&&d.count>1&&(o.rowSpan=d.count),l&&!n&&r.push(c),Object(p.a)(Object(p.a)(Object(p.a)({},l&&!n?Object(g.a)(o,["colSpan","rowSpan"]):o),n?{resources:[]}:{}),l&&!n?{display:!1,resourceFor:a}:{})}));return Object(p.a)(Object(p.a)({},e),{},{cols:o})}));l[a.rowId-1].cols[a.colId-1].resources=r,o(I({rows:l})),o(f())}(o,t)},children:"Merge"})})},re=function(){var e=r.a.useContext(l),o=e.state,t=e.dispatch;return Object(M.jsx)("li",{children:Object(M.jsx)("button",{disabled:!E(o.selectionState),onClick:function(){!function(e,o){var t=e.selectionState,c=e.rows,r=t.selectedCols[0],n=c[r.rowId-1].cols[r.colId-1];n&&n.resources&&n.resources.forEach((function(e){var o=c[e.rowId-1].cols[e.colId-1];c[e.rowId-1].cols[e.colId-1]=Object(p.a)(Object(p.a)({},Object(g.a)(o,["resourceFor"])),{},{display:!0})})),c[r.rowId-1].cols[r.colId-1]=Object(g.a)(n,["resources","colSpan","rowSpan"]),o(I({rows:c})),o(f())}(o,t)},children:"Unmerge"})})},ne=t(10),ae=t.n(ne),se=function(){var e=r.a.useContext(l),o=e.state,t=e.dispatch,c=function(e){t(h({selectionState:o.selectionState,background:e}))};return Object(M.jsxs)("li",{className:ae.a.wrapper,children:[Object(M.jsx)("button",{children:"Background color"}),Object(M.jsxs)("div",{className:ae.a.colors,children:[Object(M.jsx)("button",{onClick:function(){return c(void 0)},className:N()(ae.a.colorButton,ae.a.transparent)}),k.map((function(e){return Object(M.jsx)("button",{onClick:function(){return c(e)},style:{background:e},className:ae.a.colorButton},e)}))]})]})},de=t.p+"static/media/setting.5524b19c.svg",le=t(12),ie=t.n(le),ue=function(){var e=r.a.useContext(l).state,o=r.a.useState(),t=Object(d.a)(o,2),c=t[0],n=t[1],a=r.a.useState(!1),i=Object(d.a)(a,2),u=i[0],p=i[1];return r.a.useEffect((function(){e.selectionState.start&&e.selectionState.end&&n(function(e,o){var t=_(e,o),c=document.getElementById("col-".concat(t.row.min,"-").concat(t.col.min));return c?{top:c.offsetTop+5,left:c.offsetLeft+5}:{top:0,left:0}}(e.selectionState.start,e.selectionState.end))}),[e]),Object(M.jsxs)("div",{className:N()(ie.a.wrapper,Object(s.a)({},ie.a.selected,e.selectionState.selected&&e.selectionState.selectedCols.length>0)),style:c,children:[Object(M.jsx)(oe,{onClick:function(){return p(!u)},className:ie.a.settingButton,children:Object(M.jsx)("img",{src:de,alt:""})}),u&&Object(M.jsx)(y.a,{onOutsideClick:function(){return p(!1)},children:Object(M.jsxs)("ul",{className:ie.a.menu,children:[Object(M.jsx)(se,{}),Object(M.jsx)(ce,{}),Object(M.jsx)(re,{})]})})]})},pe=function(e,o){var t=e.map((function(e){var t,c,r=e.cols.map((function(e){return e.id>o?Object(p.a)(Object(p.a)(Object(p.a)({},e),{},{id:e.id+1},e.resources?{resources:e.resources.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{colId:e.colId+1})}))}:{}),e.resourceFor&&e.resourceFor.colId>o?{resourceFor:Object(p.a)(Object(p.a)({},e.resourceFor),{},{colId:e.resourceFor.colId+1})}:e.resourceFor):e})),n=r[o-1]&&r[o-1].resourceFor&&r[o]&&r[o].resourceFor&&(null===(t=r[o-1].resourceFor)||void 0===t?void 0:t.colId)===(null===(c=r[o].resourceFor)||void 0===c?void 0:c.colId),a=Object(p.a)(Object(p.a)(Object(p.a)({id:o+1},B),r[o-1]&&r[o-1].colSpan?{display:!1,resourceFor:{rowId:e.id,colId:r[o-1].id}}:{}),n?{display:!1,resourceFor:r[o-1].resourceFor}:{});if(r[o-1]&&r[o-1].colSpan&&(r[o-1].colSpan+=1),n){var s=r[o-1].resourceFor;s&&r[s.colId-1]&&(r[s.colId-1].colSpan+=1)}return r.splice(o,0,a),Object(p.a)(Object(p.a)({},e),{},{cols:r})}));return t.forEach((function(e){e.cols.forEach((function(o){var c;(o.resources&&(t[e.id-1].cols[o.id-1].resources=[]),o.resourceFor)&&(null===(c=t[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].resources)||void 0===c||c.push({colId:o.id,rowId:e.id}))}))})),t},we=t(25),je=t.n(we),be=function(e){var o=e.colId,t=r.a.useContext(l),c=t.dispatch,n=t.state;return Object(M.jsx)("div",{className:je.a.wrapper,children:Object(M.jsx)("button",{className:je.a.addButton,onClick:function(e){e.stopPropagation(),c(I({rows:pe(n.rows,o)}))},children:"+"})})},fe=t.p+"static/media/close-circle.50ed0904.svg",Ie=t(41),Oe=t.n(Ie),he=function(e){var o=e.colId,t=e.setColSelected,c=r.a.useContext(l).dispatch;return Object(M.jsx)("button",{className:Oe.a.wrapper,onClick:function(e){e.stopPropagation(),c(m({colId:o})),t(!1)},children:Object(M.jsx)("img",{src:fe,alt:""})})},Se=t(42),xe=t.n(Se),ve=function(e){var o=e.colId,t=r.a.useContext(l),c=t.state,n=t.dispatch,a=r.a.useState(!1),s=Object(d.a)(a,2),i=s[0],u=s[1];return Object(M.jsxs)("td",{onClick:function(){u(!0),n(v({colId:o}))},className:xe.a.techCol,children:[Object(M.jsx)(be,{colId:o}),c.rows[0].cols.length>1&&i&&Object(M.jsx)(y.a,{onOutsideClick:function(){u(!1)},children:Object(M.jsx)(he,{colId:o,setColSelected:u})})]},o)},me=function(){var e=r.a.useContext(l).state,o=r.a.useState([]),t=Object(d.a)(o,2),c=t[0],n=t[1];return r.a.useEffect((function(){n(Array(function(e){var o=0;return e.forEach((function(e){e.cols.length>o&&(o=e.cols.length)})),o}(e.rows)).fill({}).map((function(e,o){return Object(p.a)(Object(p.a)({},e),{},{id:o+1})})))}),[e]),e.rows.length?Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{style:{width:10}}),c.map((function(e){return Object(M.jsx)(ve,{colId:e.id},e.id)}))]}):null},_e=t(18),Ce=t.n(_e),Ee=function(e){var o=e.onChange,t=r.a.useReducer(F,i),c=Object(d.a)(t,2),n=c[0],a=c[1];return r.a.useEffect((function(){o&&"function"===typeof o&&o(n.rows),console.log(n.rows,"rows state")}),[n,o]),Object(M.jsx)(l.Provider,{value:{dispatch:a,state:n},children:Object(M.jsxs)("div",{className:Ce.a.wrapper,children:[Object(M.jsx)("table",{className:N()(Ce.a.table,Object(s.a)({},Ce.a.filled,!!n.rows.length)),children:Object(M.jsxs)("tbody",{children:[Object(M.jsx)(me,{}),n.rows.map((function(e){return Object(M.jsx)(Y,{rowData:e},e.id)}))]})}),Object(M.jsx)(ue,{})]})})};var ge=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsx)(Ee,{})})};a.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(ge,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.fb490916.chunk.js.map