(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{115:function(e,t,o){e.exports={wrapper:"Panel_wrapper__44pnv"}},116:function(e,t,o){e.exports={wrapper:"TextEdit_wrapper__3ANjp"}},117:function(e,t,o){e.exports={wrapper:"RemoveRow_wrapper__QxJap"}},118:function(e,t,o){e.exports={wrapper:"RemoveCol_wrapper__2M4QV"}},119:function(e,t,o){e.exports={wrapper:"ChangeWidth_wrapper__Ul3dY"}},240:function(e,t,o){"use strict";o.r(t);var c=o(2),r=o.n(c),n=o(61),a=o.n(n),s=o(15),l=o(6),d=(o(124),o(18)),i=o.n(d),u=o(19),j=o.n(u),p=c.createContext(null),b={touched:!1,selectionState:{selectedCols:[],selected:!1},rows:[{id:1,cols:[{content:"",type:"text",display:!0,id:1},{content:"",type:"text",display:!0,id:2}]}]},w=o(1),f=o(12),O=Object(f.createStandardAction)("TABLE/SET_START_SELECTION")(),I=Object(f.createStandardAction)("TABLE/SET_END_SELECTION")(),h=Object(f.createStandardAction)("TABLE/CLEAR_SELECTION")(),S=Object(f.createStandardAction)("TABLE/ROWS_UPDATE")(),v=Object(f.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),x=Object(f.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),m=Object(f.createStandardAction)("TABLE/SELECT_ROW")(),_=Object(f.createStandardAction)("TABLE/REMOVE_ROW")(),C=Object(f.createStandardAction)("TABLE/SELECT_COL")(),F=Object(f.createStandardAction)("TABLE/SET_COL_WIDTH")(),g=Object(f.createStandardAction)("TABLE/REMOVE_COL")(),E=function(e,t){return{row:{min:e.rowId<t.rowId?e.rowId:t.rowId,max:e.rowId<t.rowId?t.rowId:e.rowId},col:{min:e.colId<t.colId?e.colId:t.colId,max:e.colId<t.colId?t.colId:e.colId}}},A=function(e,t,o){var c=E(e,t);return o.rowId>=c.row.min&&o.rowId<=c.row.max&&o.colId>=c.col.min&&o.colId<=c.col.max},y=function(e){var t=e.selectedCols,o=e.start,c=e.end,r=t[0],n=(null===r||void 0===r?void 0:r.rowSpan)?r.rowSpan-1:0,a=(null===r||void 0===r?void 0:r.colSpan)?r.colSpan-1:0;return!(!o||!c||o.rowId!==c.rowId||o.colId!==c.colId)||(n>0||a>0)&&!!o&&!!c&&c.rowId===o.rowId+n&&c.colId===o.colId+a&&t.length>1},k=o(241),R=Object(f.createReducer)(b).handleAction(O,(function(e,t){var o=t.payload.positionStart;return Object(w.a)(Object(w.a)({},e),{},{touched:!0,selectionState:{selectedCols:[],selected:!1,start:o}})})).handleAction(I,(function(e,t){var o=t.payload,c=o.positionEnd,r=o.finished,n=[],a=e.rows,s=e.selectionState.start;if(r&&s)for(var l=E(s,c),d={rowId:l.row.min,colId:l.col.min},i={rowId:l.row.max,colId:l.col.max},u=d.rowId;u<=i.rowId;u+=1)for(var j={rowId:u},p=d.colId;p<=i.colId;p+=1){var b=a[u-1].cols[p-1].colSpan,f=a[u-1].cols[p-1].rowSpan;n.push(Object(w.a)(Object(w.a)(Object(w.a)({},j),{},{colId:p},f?{rowSpan:f}:{}),b?{colSpan:b}:{}))}return Object(w.a)(Object(w.a)(Object(w.a)({},e),r?{touched:!1}:{}),{},{selectionState:Object(w.a)(Object(w.a)(Object(w.a)({},e.selectionState),{},{selectedCols:n},r?{selected:!0}:{}),{},{end:c})})})).handleAction(h,(function(e){return Object(w.a)(Object(w.a)({},e),{},{selectionState:{selectedCols:[],selected:!1}})})).handleAction(S,(function(e,t){var o=t.payload.rows;return Object(w.a)(Object(w.a)({},e),{},{rows:o})})).handleAction(m,(function(e,t){var o=t.payload.rowId,c=e.rows[o-1],r=c.cols.map((function(e){return{rowId:o,colId:e.id}}));return Object(w.a)(Object(w.a)({},e),{},{selectionState:{selected:!0,selectedCols:r,start:{rowId:o,colId:c.cols[0].id},end:{rowId:o,colId:c.cols[c.cols.length-1].id}}})})).handleAction(C,(function(e,t){for(var o=t.payload.colId,c=[],r=1;r<=e.rows.length;r+=1)c.push({rowId:r,colId:o});return Object(w.a)(Object(w.a)({},e),{},{selectionState:{selected:!0,selectedCols:c,start:{rowId:e.rows[0].id,colId:o},end:{rowId:e.rows[e.rows.length-1].id,colId:o}}})})).handleAction(_,(function(e,t){var o=t.payload.rowId,c=e.rows[o-1],r=e.rows,n=[];return c.cols.forEach((function(e,t){if(e.resources&&e.rowSpan){var c=e.resources,a=null===c||void 0===c?void 0:c.slice(0,c.length-(e.colSpan||1));r[o].cols[t]=Object(w.a)(Object(w.a)({},Object(k.a)(e,["rowSpan","resources"])),e.rowSpan&&e.rowSpan>2?{rowSpan:e.rowSpan-1}:{}),a.length>0&&r[o].cols[t]&&(r[o].cols[t].resources=a)}if(e.resourceFor&&e.resourceFor.rowId!==o){var s=r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1],l="".concat(e.resourceFor.rowId,"-").concat(e.resourceFor.colId);if(!n.includes(l)){var d;n.push(l);var i=(s.rowSpan||1)-1,u=null===(d=s.resources)||void 0===d?void 0:d.slice(0,s.resources.length-(s.colSpan||1));i>1?r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].rowSpan=i:(s=Object(k.a)(s,["rowSpan"]),r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s),u&&u.length>0?r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].resources=u:(s=Object(k.a)(s,["resources"]),r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s)}}})),r.splice(o-1,1),Object(w.a)(Object(w.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:r.map((function(e,t){var c=e.cols.map((function(e){return Object(w.a)(Object(w.a)({},e),e.resourceFor&&e.resourceFor.rowId>o?{resourceFor:Object(w.a)(Object(w.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId-1})}:{})}));return Object(w.a)(Object(w.a)({},e),{},{id:t+1,cols:c})}))})})).handleAction(g,(function(e,t){var o=t.payload.colId,c=e.rows,r=[];return c.forEach((function(e,t){var n=e.cols[o-1];if(n.resources&&n.colSpan){var a=n.resources.reduce((function(e,t){return t.colId!==n.id+(n.colSpan||0)-1&&e.push(t),e}),[]);c[t].cols[o]=Object(w.a)(Object(w.a)({},Object(k.a)(n,["colSpan","resources"])),n.colSpan&&n.colSpan>2?{colSpan:n.colSpan-1}:{}),a.length>0&&(c[t].cols[o].resources=a)}if(n.resourceFor&&n.resourceFor.colId!==o){var s=c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1],l="".concat(n.resourceFor.rowId,"-").concat(n.resourceFor.colId);if(!r.includes(l)){var d;r.push(l);var i=(s.colSpan||1)-1,u=null===(d=s.resources)||void 0===d?void 0:d.reduce((function(e,t){return t.colId!==s.id+(s.colSpan||0)-1&&e.push(t),e}),[]);i>1?c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1].colSpan=i:(s=Object(k.a)(s,["colSpan"]),c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1]=s),u&&u.length>0?c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1].resources=u:(s=Object(k.a)(s,["resources"]),c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1]=s)}}e.cols.splice(o-1,1),e.cols=e.cols.map((function(e,t){return Object(w.a)(Object(w.a)({},e),{},{id:t+1})}))})),Object(w.a)(Object(w.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:c.map((function(e,t){var c=e.cols.map((function(e){var t,c=null===(t=e.resources)||void 0===t?void 0:t.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{colId:e.colId>o?e.colId-1:e.colId})}));return Object(w.a)(Object(w.a)(Object(w.a)({},e),c?{resources:c}:{}),e.resourceFor&&e.resourceFor.colId>o?{resourceFor:Object(w.a)(Object(w.a)({},e.resourceFor),{},{colId:e.resourceFor.colId-1})}:{})}));return Object(w.a)(Object(w.a)({},e),{},{id:t+1,cols:c})}))})})).handleAction(v,(function(e,t){var o=t.payload,c=o.colId,r=o.rowId,n=o.content,a=e.rows;return a[r-1].cols[c-1].content=n,Object(w.a)(Object(w.a)({},e),{},{rows:a})})).handleAction(F,(function(e,t){var o=t.payload,c=o.colId,r=o.width,n=e.rows.map((function(e){var t=e.cols.map((function(e){return Object(w.a)(Object(w.a)({},e),e.id===c?{width:r}:{})}));return Object(w.a)(Object(w.a)({},e),{},{cols:t})}));return Object(w.a)(Object(w.a)({},e),{},{rows:n})})).handleAction(x,(function(e,t){var o=t.payload,c=o.selectionState,r=o.background,n=e.rows.map((function(e){var t=e.cols.map((function(t){return c.start&&c.end&&A(c.start,c.end,{rowId:e.id,colId:t.id})?Object(w.a)(Object(w.a)({},t),{},{background:r}):t}));return Object(w.a)(Object(w.a)({},e),{},{cols:t})}));return Object(w.a)(Object(w.a)({},e),{},{rows:n})})),B=o(8),T=o.p+"static/media/bold.aaa73dad.svg",N=o(33),L=o.n(N),M=o(0),D=function(e){var t,o=e.children,c=e.onClick,r=e.onBlur,n=e.className,a=e.style,l=e.active,d=void 0!==l&&l,u=e.disabled,j=void 0!==u&&u,p=e.small;return Object(M.jsx)("button",{disabled:j,onClick:c?function(e){return c(e)}:void 0,onBlur:r,className:i()(L.a.wrapper,n,(t={},Object(s.a)(t,L.a.active,d),Object(s.a)(t,L.a.disabled,j),Object(s.a)(t,L.a.small,p),t)),style:a,children:o})},P=function(e){var t=e.editorState,o=e.setEditorState;return Object(M.jsx)(D,{small:!0,onClick:function(e){e.preventDefault(),o(B.RichUtils.toggleInlineStyle(t,"BOLD"))},children:Object(M.jsx)("img",{src:T,alt:""})})},U=o.p+"static/media/italic.8e03cb99.svg",W=function(e){var t=e.editorState,o=e.setEditorState;return Object(M.jsx)(D,{small:!0,onClick:function(e){e.preventDefault(),o(B.RichUtils.toggleInlineStyle(t,"ITALIC"))},children:Object(M.jsx)("img",{src:U,alt:""})})},V=o.p+"static/media/underline.037f1cd5.svg",G=function(e){var t=e.editorState,o=e.setEditorState;return Object(M.jsx)(D,{small:!0,onClick:function(e){e.preventDefault(),o(B.RichUtils.toggleInlineStyle(t,"UNDERLINE"))},children:Object(M.jsx)("img",{src:V,alt:""})})},H=o.p+"static/media/unordered-list.d3b3a77e.svg",J=function(e){var t=e.setEditorState,o=e.editorState;return Object(M.jsx)(D,{small:!0,onClick:function(e){e.preventDefault(),t(B.RichUtils.toggleBlockType(o,"unordered-list-item"))},children:Object(M.jsx)("img",{src:H,alt:""})})},Q=o(115),X=o.n(Q),Z=function(e){var t=e.editorState,o=e.setEditorState;return Object(M.jsxs)("div",{className:X.a.wrapper,children:[Object(M.jsx)(P,{editorState:t,setEditorState:o}),Object(M.jsx)(W,{editorState:t,setEditorState:o}),Object(M.jsx)(G,{editorState:t,setEditorState:o}),Object(M.jsx)(J,{editorState:t,setEditorState:o})]})},q=o(116),K=o.n(q),Y=function(e){var t=e.value,o=e.colId,n=e.rowId,a=e.setEditMode,s=r.a.useContext(p).dispatch,d=Object(c.useRef)(null),i=r.a.useState(t?B.EditorState.createWithContent(Object(B.convertFromRaw)(t)):B.EditorState.createEmpty()),u=Object(l.a)(i,2),b=u[0],w=u[1];r.a.useEffect((function(){d.current&&d.current.focus()}),[]);return Object(M.jsx)("div",{className:K.a.wrapper,children:Object(M.jsxs)(j.a,{onOutsideClick:function(){var e=b.getCurrentContent();s(v({rowId:n,colId:o,content:Object(B.convertToRaw)(e)})),a(!1)},children:[Object(M.jsx)(Z,{editorState:b,setEditorState:w}),Object(M.jsx)(B.Editor,{editorState:b,onChange:w,ref:d})]})})},z=o(62),$=o.n(z),ee=function(e){var t=e.colData,o=e.rowId,c=r.a.useState(!1),n=Object(l.a)(c,2),a=n[0],d=n[1],u=r.a.useState(!1),j=Object(l.a)(u,2),b=j[0],w=j[1],f=r.a.useState({rowId:0,colId:0}),S=Object(l.a)(f,2),v=S[0],x=S[1],m=r.a.useContext(p),_=m.state,C=m.dispatch;if(r.a.useEffect((function(){_.selectionState.start&&_.selectionState.end?d(A(_.selectionState.start,_.selectionState.end,{rowId:o,colId:t.id})):d(!1),x({rowId:t.rowSpan&&_.selectionState.start&&_.selectionState.start.rowId<o?o+t.rowSpan-1:o,colId:t.colSpan&&_.selectionState.start&&_.selectionState.start.colId<t.id?t.id+t.colSpan-1:t.id})}),[_,o,t]),!t.display)return null;return Object(M.jsxs)("td",{id:"col-".concat(o,"-").concat(t.id),onMouseDown:function(){_.touched||b?b||C(I({positionEnd:v,finished:!0})):C(O({positionStart:{rowId:o,colId:t.id}}))},onMouseUp:function(){b||C(I({positionEnd:v,finished:!0}))},onMouseEnter:function(){_.touched&&!b&&C(I({positionEnd:{rowId:o,colId:t.id},finished:!1}))},onDoubleClick:function(){C(h()),w(!0)},colSpan:t.colSpan,rowSpan:t.rowSpan,className:i()($.a.wrapper,Object(s.a)({},$.a.selected,a)),style:{background:t.background},children:[b&&"text"===t.type&&Object(M.jsx)(Y,{value:t.content,background:t.background,rowId:o,colId:t.id,setEditMode:w}),!b&&"text"===t.type&&Object(M.jsx)(B.Editor,{editorState:t.content?B.EditorState.createWithContent(Object(B.convertFromRaw)(t.content)):B.EditorState.createEmpty(),onChange:function(){},readOnly:!0})]})},te={content:"",type:"text",display:!0},oe=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffccc7"],ce=function(e,t){var o=e[t-1],c=e[t],r={id:t+1,cols:[]};o.cols.forEach((function(e,n){var a=Object(w.a)(Object(w.a)({},te),{},{id:e.id});if(c){var s=o.cols[n],l=c.cols[n];s.rowSpan&&l.resourceFor&&l.resourceFor.colId===s.id&&l.resourceFor.rowId===o.id?r.cols.push(Object(w.a)(Object(w.a)({},a),{},{display:!1,resourceFor:{rowId:t,colId:e.id}})):s.resourceFor&&l.resourceFor&&l.resourceFor.colId===s.resourceFor.colId&&l.resourceFor.rowId===s.resourceFor.rowId?r.cols.push(Object(w.a)(Object(w.a)({},a),{},{display:!1,resourceFor:s.resourceFor})):r.cols.push(a)}else r.cols.push(a)}));var n=[];r.cols.forEach((function(t){if(t.resourceFor){var o="".concat(t.resourceFor.rowId).concat(t.resourceFor.colId);if(!n.includes(o)){var c=e[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1].rowSpan||0;e[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1].rowSpan=c+1,n.push(o)}}}));var a=e.map((function(e){if(e.id>t){var o=e.cols.map((function(e){return Object(w.a)(Object(w.a)({},e),e.resourceFor&&e.resourceFor.rowId>t?{resourceFor:Object(w.a)(Object(w.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId+1})}:e.resourceFor)}));return Object(w.a)(Object(w.a)({},e),{},{id:e.id+1,cols:o})}return e}));return a.splice(t,0,r),a.forEach((function(e){e.cols.forEach((function(t){var o;(t.resources&&(a[e.id-1].cols[t.id-1].resources=[]),t.resourceFor&&a[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1])&&(null===(o=a[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1].resources)||void 0===o||o.push({colId:t.id,rowId:e.id}))}))})),a},re=o(63),ne=o.n(re),ae=function(e){var t=e.rowId,o=r.a.useContext(p),c=o.dispatch,n=o.state;return Object(M.jsx)("div",{className:ne.a.wrapper,children:Object(M.jsx)("button",{className:ne.a.addButton,onClick:function(e){e.stopPropagation(),c(S({rows:ce(n.rows,t)}))},children:"+"})})},se=o.p+"static/media/close-circle.50ed0904.svg",le=o(117),de=o.n(le),ie=function(e){var t=e.rowId,o=e.setRowSelected,c=r.a.useContext(p).dispatch;return Object(M.jsx)("button",{className:de.a.wrapper,onClick:function(e){e.stopPropagation(),c(_({rowId:t})),o(!1)},children:Object(M.jsx)("img",{src:se,alt:""})})},ue=o(64),je=o.n(ue),pe=function(e){var t=e.rowData,o=r.a.useState(!1),c=Object(l.a)(o,2),n=c[0],a=c[1],s=r.a.useContext(p),d=s.state,i=s.dispatch,u=r.a.useState(0),b=Object(l.a)(u,2),w=b[0],f=b[1],O=r.a.useRef(null);return Object(M.jsxs)("tr",{children:[Object(M.jsxs)("td",{ref:O,className:je.a.techCol,onClick:function(){var e;(a(!0),i(h()),O.current)&&f(((null===(e=O.current.closest("table"))||void 0===e?void 0:e.offsetWidth)||0)-12)},children:[Object(M.jsx)(ae,{rowId:t.id}),n&&d.rows.length>1&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:je.a.selectArea,style:{width:w}}),Object(M.jsx)(j.a,{onOutsideClick:function(){a(!1)},children:Object(M.jsx)(ie,{rowId:t.id,setRowSelected:a})})]})]}),t.cols.map((function(e){return Object(M.jsx)(ee,{colData:e,rowId:t.id},e.id)}))]})},be=function(e){var t=e.selectionState,o=e.rows,c=t.selectedCols,r=t.start,n=t.end,a=y(t),s=[],l=!1,d={maxColId:0,maxRowId:0,startColId:0,startRowId:0,get:function(){return(this.maxColId-this.startColId+1)*(this.maxRowId-this.startRowId+1)}};return o.forEach((function(e){e.cols.forEach((function(t){if(t.colSpan||t.rowSpan){var o=t.colSpan||0,c=t.rowSpan||0;s.push({row:{min:e.id,max:c?e.id+c-1:e.id},col:{min:t.id,max:o?t.id+o-1:t.id}})}}))})),c.forEach((function(e,t){var o=e.colSpan?e.colId+e.colSpan-1:e.colId,c=e.rowSpan?e.rowId+e.rowSpan-1:e.rowId;o>d.maxColId&&(d.maxColId=o),c>d.maxRowId&&(d.maxRowId=c),0===t&&(d.startColId=e.colId,d.startRowId=e.rowId)})),s.forEach((function(e){r&&n&&!l&&("part"===function(e,t){var o=Math.max(e.col.min-1,t.col.min-1),c=Math.min(e.col.max,t.col.max),r=Math.max(e.row.min-1,t.row.min-1),n=Math.min(e.row.max,t.row.max),a=(e.col.max-e.col.min+1)*(e.row.max-e.row.min+1);return o<c&&r<n?(c-o)*(n-r)===a?"full":"part":"not"}(e,{row:{min:r.rowId,max:n.rowId},col:{min:r.colId,max:n.colId}})&&(l=!0))})),!a&&d.get()===c.length&&!l},we=function(){var e=r.a.useContext(p),t=e.state,o=e.dispatch;return Object(M.jsx)("li",{children:Object(M.jsx)("button",{disabled:!be(t),onClick:function(){!function(e,t){var o=e.selectionState,c=e.rows,r=[],n=o.selectedCols,a={rowId:n[0].rowId,colId:n[0].colId},s={prevRowId:n[0].rowId,prevColId:0,count:0},l={prevRowId:0,count:0};n.forEach((function(e,t){e.colId!==s.prevColId&&e.rowId===s.prevRowId&&(s.prevColId=e.colId,s.count+=1,n.length===t-1&&e.colSpan&&(s.count+=e.colSpan)),e.rowId!==l.prevRowId&&(l.prevRowId=e.rowId,l.count+=1,o.selectedCols.length===t-1&&e.rowSpan&&(l.count+=e.rowSpan))}));var d=c.map((function(e){var t=e.cols.map((function(t){var c={rowId:e.id,colId:t.id},n=a.rowId===e.id&&a.colId===t.id,d=A(o.start,o.end,c);return n&&s.count>1&&(t.colSpan=s.count),n&&l.count>1&&(t.rowSpan=l.count),d&&!n&&r.push(c),Object(w.a)(Object(w.a)(Object(w.a)({},d&&!n?Object(k.a)(t,["colSpan","rowSpan"]):t),n?{resources:[]}:{}),d&&!n?{display:!1,resourceFor:a}:{})}));return Object(w.a)(Object(w.a)({},e),{},{cols:t})}));d[a.rowId-1].cols[a.colId-1].resources=r,t(S({rows:d})),t(h())}(t,o)},children:"Merge"})})},fe=function(){var e=r.a.useContext(p),t=e.state,o=e.dispatch,c=r.a.useState(!1),n=Object(l.a)(c,2),a=n[0],s=n[1];return r.a.useEffect((function(){var e,o=t.selectionState.start;if(o){var c=t.rows[(e=o).rowId-1].cols[e.colId-1];(c.colSpan||c.rowSpan)&&y(t.selectionState)&&s(!0)}}),[t]),Object(M.jsx)("li",{children:Object(M.jsx)("button",{disabled:!a,onClick:function(){!function(e,t){var o=e.selectionState,c=e.rows,r=o.selectedCols[0],n=c[r.rowId-1].cols[r.colId-1];n&&n.resources&&n.resources.forEach((function(e){var t=c[e.rowId-1].cols[e.colId-1];c[e.rowId-1].cols[e.colId-1]=Object(w.a)(Object(w.a)({},Object(k.a)(t,["resourceFor"])),{},{display:!0})})),c[r.rowId-1].cols[r.colId-1]=Object(k.a)(n,["resources","colSpan","rowSpan"]),t(S({rows:c})),t(h())}(t,o)},children:"Unmerge"})})},Oe=o(28),Ie=o.n(Oe),he=function(){var e=r.a.useContext(p),t=e.state,o=e.dispatch,c=function(e){o(x({selectionState:t.selectionState,background:e}))};return Object(M.jsxs)("li",{className:Ie.a.wrapper,children:[Object(M.jsx)("button",{children:"Background color"}),Object(M.jsxs)("div",{className:Ie.a.colors,children:[Object(M.jsx)("button",{onClick:function(){return c(void 0)},className:i()(Ie.a.colorButton,Ie.a.transparent)}),oe.map((function(e){return Object(M.jsx)("button",{onClick:function(){return c(e)},style:{background:e},className:Ie.a.colorButton},e)}))]})]})},Se=o.p+"static/media/setting.5524b19c.svg",ve=o(34),xe=o.n(ve),me=function(){var e=r.a.useContext(p).state,t=r.a.useState(),o=Object(l.a)(t,2),c=o[0],n=o[1],a=r.a.useState(!1),d=Object(l.a)(a,2),u=d[0],b=d[1];return r.a.useEffect((function(){e.selectionState.start&&e.selectionState.end&&n(function(e,t){var o=E(e,t),c=document.getElementById("col-".concat(o.row.min,"-").concat(o.col.min));return c?{top:c.offsetTop+5,left:c.offsetLeft+5}:{top:0,left:0}}(e.selectionState.start,e.selectionState.end))}),[e]),Object(M.jsxs)("div",{className:i()(xe.a.wrapper,Object(s.a)({},xe.a.selected,e.selectionState.selected&&e.selectionState.selectedCols.length>0)),style:c,children:[Object(M.jsx)(D,{onClick:function(){return b(!u)},className:xe.a.settingButton,children:Object(M.jsx)("img",{src:Se,alt:""})}),u&&Object(M.jsx)(j.a,{onOutsideClick:function(){return b(!1)},children:Object(M.jsxs)("ul",{className:xe.a.menu,children:[Object(M.jsx)(he,{}),Object(M.jsx)(we,{}),Object(M.jsx)(fe,{})]})})]})},_e=function(e,t){var o=e.map((function(e){var o,c,r=e.cols.map((function(e){return e.id>t?Object(w.a)(Object(w.a)(Object(w.a)({},e),{},{id:e.id+1},e.resources?{resources:e.resources.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{colId:e.colId+1})}))}:{}),e.resourceFor&&e.resourceFor.colId>t?{resourceFor:Object(w.a)(Object(w.a)({},e.resourceFor),{},{colId:e.resourceFor.colId+1})}:e.resourceFor):e})),n=r[t-1]&&r[t-1].resourceFor&&r[t]&&r[t].resourceFor&&(null===(o=r[t-1].resourceFor)||void 0===o?void 0:o.colId)===(null===(c=r[t].resourceFor)||void 0===c?void 0:c.colId),a=Object(w.a)(Object(w.a)(Object(w.a)({id:t+1},te),r[t-1]&&r[t-1].colSpan?{display:!1,resourceFor:{rowId:e.id,colId:r[t-1].id}}:{}),n?{display:!1,resourceFor:r[t-1].resourceFor}:{});if(r[t-1]&&r[t-1].colSpan&&(r[t-1].colSpan+=1),n){var s=r[t-1].resourceFor;s&&r[s.colId-1]&&(r[s.colId-1].colSpan+=1)}return r.splice(t,0,a),Object(w.a)(Object(w.a)({},e),{},{cols:r})}));return o.forEach((function(e){e.cols.forEach((function(t){var c,r;(t.resources&&(o[e.id-1].cols[t.id-1].resources=[]),t.resourceFor)&&(null===(c=o[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1])||void 0===c||null===(r=c.resources)||void 0===r||r.push({colId:t.id,rowId:e.id}))}))})),o},Ce=o(65),Fe=o.n(Ce),ge=function(e){var t=e.colId,o=r.a.useContext(p),c=o.dispatch,n=o.state;return Object(M.jsx)("div",{className:Fe.a.wrapper,children:Object(M.jsx)("button",{className:Fe.a.addButton,onClick:function(e){e.stopPropagation(),c(S({rows:_e(n.rows,t)}))},children:"+"})})},Ee=o.p+"static/media/close-circle.50ed0904.svg",Ae=o(118),ye=o.n(Ae),ke=function(e){var t=e.colId,o=e.setColSelected,c=r.a.useContext(p).dispatch;return Object(M.jsx)("button",{className:ye.a.wrapper,onClick:function(e){e.stopPropagation(),c(g({colId:t})),o(!1)},children:Object(M.jsx)("img",{src:Ee,alt:""})})},Re=o(119),Be=o.n(Re),Te=function(e){var t=e.tableHeight,o=e.colId,n=r.a.useContext(p),a=n.state,s=n.dispatch,d=Object(c.useState)(!1),i=Object(l.a)(d,2),u=i[0],j=i[1],b=Object(c.useState)(0),w=Object(l.a)(b,2),f=w[0],O=w[1],I=Object(c.useState)(0),S=Object(l.a)(I,2),v=S[0],x=S[1],m=Object(c.useState)(0),_=Object(l.a)(m,2),C=_[0],g=_[1],E=function(e){e.stopPropagation(),u&&(s(F({colId:o,width:f-C})),g(0),j(!1))};return a.rows[0].cols.length===o?null:Object(M.jsx)("div",{onMouseDown:function(e){e.stopPropagation(),s(h()),j(!0),x(e.screenX+C)},onMouseUp:E,onMouseLeave:E,onMouseMove:function(e){e.stopPropagation(),u&&f-C>10&&g(v-e.screenX)},onClick:function(e){return e.stopPropagation()},ref:function(e){var t;return O((null===e||void 0===e||null===(t=e.closest("td"))||void 0===t?void 0:t.offsetWidth)||0)},className:Be.a.wrapper,style:{height:t,right:C}})},Ne=o(66),Le=o.n(Ne),Me=function(e){var t,o=e.colId,c=r.a.useContext(p),n=c.state,a=c.dispatch,s=r.a.useState(!1),d=Object(l.a)(s,2),i=d[0],u=d[1],b=r.a.useState(0),w=Object(l.a)(b,2),f=w[0],O=w[1];return Object(M.jsxs)("td",{ref:function(e){var t;return O(((null===e||void 0===e||null===(t=e.closest("table"))||void 0===t?void 0:t.offsetHeight)||0)-12)},onClick:function(){a(h()),u(!0)},className:Le.a.techCol,style:{width:n.rows[0].cols.length>1?null===(t=n.rows[0].cols[o-1])||void 0===t?void 0:t.width:"auto"},children:[Object(M.jsx)(ge,{colId:o}),Object(M.jsx)(Te,{tableHeight:f,colId:o}),n.rows[0].cols.length>1&&i&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:Le.a.selectArea,style:{height:f}}),Object(M.jsx)(j.a,{onOutsideClick:function(){u(!1)},children:Object(M.jsx)(ke,{colId:o,setColSelected:u})})]})]})},De=function(){var e=r.a.useContext(p).state,t=r.a.useState([]),o=Object(l.a)(t,2),c=o[0],n=o[1];return r.a.useEffect((function(){n(Array(function(e){var t=0;return e.forEach((function(e){e.cols.length>t&&(t=e.cols.length)})),t}(e.rows)).fill({}).map((function(e,t){return Object(w.a)(Object(w.a)({},e),{},{id:t+1})})))}),[e]),e.rows.length?Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{style:{width:10}}),c.map((function(e){return Object(M.jsx)(Me,{colId:e.id},e.id)}))]}):null},Pe=o(48),Ue=o.n(Pe),We=function(e){var t=e.onChange,o=r.a.useReducer(R,b),c=Object(l.a)(o,2),n=c[0],a=c[1];r.a.useEffect((function(){t&&"function"===typeof t&&t(n.rows)}),[n,t]);return Object(M.jsx)(p.Provider,{value:{dispatch:a,state:n},children:Object(M.jsx)("div",{className:Ue.a.wrapper,children:Object(M.jsxs)(j.a,{onOutsideClick:function(){a(h())},children:[Object(M.jsx)("table",{className:i()(Ue.a.table,Object(s.a)({},Ue.a.filled,!!n.rows.length)),children:Object(M.jsxs)("tbody",{children:[Object(M.jsx)(De,{}),n.rows.map((function(e){return Object(M.jsx)(pe,{rowData:e},e.id)}))]})}),Object(M.jsx)(me,{})]})})})};var Ve=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsx)(We,{})})};a.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(Ve,{})}),document.getElementById("root"))},28:function(e,t,o){e.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",colorButton:"ChangeBackground_colorButton__2QEDl",transparent:"ChangeBackground_transparent__mqomV"}},33:function(e,t,o){e.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG",small:"Button_small__2T4PP"}},34:function(e,t,o){e.exports={wrapper:"SelectionMenu_wrapper__2E3fb",selected:"SelectionMenu_selected__1dW4V",settingButton:"SelectionMenu_settingButton__2RZd1",menu:"SelectionMenu_menu__3_fZg"}},48:function(e,t,o){e.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},62:function(e,t,o){e.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}},63:function(e,t,o){e.exports={wrapper:"AddRow_wrapper__3NW4Q",addButton:"AddRow_addButton__1hGob"}},64:function(e,t,o){e.exports={techCol:"Row_techCol__HSNZB",active:"Row_active__1oG0c",selectArea:"Row_selectArea__X8N3B",blinker:"Row_blinker__6_-6l"}},65:function(e,t,o){e.exports={wrapper:"AddCol_wrapper__OkM3j",addButton:"AddCol_addButton__2VG6f"}},66:function(e,t,o){e.exports={techCol:"TechCol_techCol__3-ePx",selectArea:"TechCol_selectArea__1hdFm",blinker:"TechCol_blinker__3LS_s"}}},[[240,1,2]]]);
//# sourceMappingURL=main.c681d005.chunk.js.map