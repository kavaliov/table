(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{115:function(e,o,t){e.exports={wrapper:"Panel_wrapper__44pnv"}},116:function(e,o,t){e.exports={wrapper:"TextEdit_wrapper__3ANjp"}},117:function(e,o,t){e.exports={wrapper:"RemoveRow_wrapper__QxJap"}},118:function(e,o,t){e.exports={wrapper:"RemoveCol_wrapper__2M4QV"}},119:function(e,o,t){e.exports={wrapper:"ChangeWidth_wrapper__Ul3dY"}},239:function(e,o,t){"use strict";t.r(o);var c=t(2),r=t.n(c),n=t(61),a=t.n(n),s=t(15),l=t(6),d=t(18),i=t.n(d),u=t(19),p=t.n(u),j=c.createContext(null),b={touched:!1,selectionState:{selectedCols:[],selected:!1},rows:[{id:1,cols:[{content:"",type:"text",display:!0,id:1},{content:"",type:"text",display:!0,id:2}]}]},w=t(1),I=t(12),f=Object(I.createStandardAction)("TABLE/SET_START_SELECTION")(),O=Object(I.createStandardAction)("TABLE/SET_END_SELECTION")(),h=Object(I.createStandardAction)("TABLE/CLEAR_SELECTION")(),S=Object(I.createStandardAction)("TABLE/ROWS_UPDATE")(),v=Object(I.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),x=Object(I.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),m=Object(I.createStandardAction)("TABLE/SELECT_ROW")(),_=Object(I.createStandardAction)("TABLE/REMOVE_ROW")(),C=Object(I.createStandardAction)("TABLE/SELECT_COL")(),F=Object(I.createStandardAction)("TABLE/SET_COL_WIDTH")(),g=Object(I.createStandardAction)("TABLE/REMOVE_COL")(),E=function(e,o){return{row:{min:e.rowId<o.rowId?e.rowId:o.rowId,max:e.rowId<o.rowId?o.rowId:e.rowId},col:{min:e.colId<o.colId?e.colId:o.colId,max:e.colId<o.colId?o.colId:e.colId}}},A=function(e,o,t){var c=E(e,o);return t.rowId>=c.row.min&&t.rowId<=c.row.max&&t.colId>=c.col.min&&t.colId<=c.col.max},y=function(e){var o=e.selectedCols,t=e.start,c=e.end,r=o[0],n=(null===r||void 0===r?void 0:r.rowSpan)?r.rowSpan-1:0,a=(null===r||void 0===r?void 0:r.colSpan)?r.colSpan-1:0;return!(!t||!c||t.rowId!==c.rowId||t.colId!==c.colId)||(n>0||a>0)&&!!t&&!!c&&c.rowId===t.rowId+n&&c.colId===t.colId+a&&o.length>1},k=t(240),B=Object(I.createReducer)(b).handleAction(f,(function(e,o){var t=o.payload.positionStart;return Object(w.a)(Object(w.a)({},e),{},{touched:!0,selectionState:{selectedCols:[],selected:!1,start:t}})})).handleAction(O,(function(e,o){var t=o.payload,c=t.positionEnd,r=t.finished,n=[],a=e.rows,s=e.selectionState.start;if(r&&s)for(var l=E(s,c),d={rowId:l.row.min,colId:l.col.min},i={rowId:l.row.max,colId:l.col.max},u=d.rowId;u<=i.rowId;u+=1)for(var p={rowId:u},j=d.colId;j<=i.colId;j+=1){var b=a[u-1].cols[j-1].colSpan,I=a[u-1].cols[j-1].rowSpan;n.push(Object(w.a)(Object(w.a)(Object(w.a)({},p),{},{colId:j},I?{rowSpan:I}:{}),b?{colSpan:b}:{}))}return Object(w.a)(Object(w.a)(Object(w.a)({},e),r?{touched:!1}:{}),{},{selectionState:Object(w.a)(Object(w.a)(Object(w.a)({},e.selectionState),{},{selectedCols:n},r?{selected:!0}:{}),{},{end:c})})})).handleAction(h,(function(e){return Object(w.a)(Object(w.a)({},e),{},{selectionState:{selectedCols:[],selected:!1}})})).handleAction(S,(function(e,o){var t=o.payload.rows;return Object(w.a)(Object(w.a)({},e),{},{rows:t})})).handleAction(m,(function(e,o){var t=o.payload.rowId,c=e.rows[t-1],r=c.cols.map((function(e){return{rowId:t,colId:e.id}}));return Object(w.a)(Object(w.a)({},e),{},{selectionState:{selected:!0,selectedCols:r,start:{rowId:t,colId:c.cols[0].id},end:{rowId:t,colId:c.cols[c.cols.length-1].id}}})})).handleAction(C,(function(e,o){for(var t=o.payload.colId,c=[],r=1;r<=e.rows.length;r+=1)c.push({rowId:r,colId:t});return Object(w.a)(Object(w.a)({},e),{},{selectionState:{selected:!0,selectedCols:c,start:{rowId:e.rows[0].id,colId:t},end:{rowId:e.rows[e.rows.length-1].id,colId:t}}})})).handleAction(_,(function(e,o){var t=o.payload.rowId,c=e.rows[t-1],r=e.rows,n=[];return c.cols.forEach((function(e,o){if(e.resources&&e.rowSpan){var c=e.resources,a=null===c||void 0===c?void 0:c.slice(0,c.length-(e.colSpan||1));r[t].cols[o]=Object(w.a)(Object(w.a)({},Object(k.a)(e,["rowSpan","resources"])),e.rowSpan&&e.rowSpan>2?{rowSpan:e.rowSpan-1}:{}),a.length>0&&r[t].cols[o]&&(r[t].cols[o].resources=a)}if(e.resourceFor&&e.resourceFor.rowId!==t){var s=r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1],l="".concat(e.resourceFor.rowId,"-").concat(e.resourceFor.colId);if(!n.includes(l)){var d;n.push(l);var i=(s.rowSpan||1)-1,u=null===(d=s.resources)||void 0===d?void 0:d.slice(0,s.resources.length-(s.colSpan||1));i>1?r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].rowSpan=i:(s=Object(k.a)(s,["rowSpan"]),r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s),u&&u.length>0?r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].resources=u:(s=Object(k.a)(s,["resources"]),r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s)}}})),r.splice(t-1,1),Object(w.a)(Object(w.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:r.map((function(e,o){var c=e.cols.map((function(e){return Object(w.a)(Object(w.a)({},e),e.resourceFor&&e.resourceFor.rowId>t?{resourceFor:Object(w.a)(Object(w.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId-1})}:{})}));return Object(w.a)(Object(w.a)({},e),{},{id:o+1,cols:c})}))})})).handleAction(g,(function(e,o){var t=o.payload.colId,c=e.rows,r=[];return c.forEach((function(e,o){var n=e.cols[t-1];if(n.resources&&n.colSpan){var a=n.resources.reduce((function(e,o){return o.colId!==n.id+(n.colSpan||0)-1&&e.push(o),e}),[]);c[o].cols[t]=Object(w.a)(Object(w.a)({},Object(k.a)(n,["colSpan","resources"])),n.colSpan&&n.colSpan>2?{colSpan:n.colSpan-1}:{}),a.length>0&&(c[o].cols[t].resources=a)}if(n.resourceFor&&n.resourceFor.colId!==t){var s=c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1],l="".concat(n.resourceFor.rowId,"-").concat(n.resourceFor.colId);if(!r.includes(l)){var d;r.push(l);var i=(s.colSpan||1)-1,u=null===(d=s.resources)||void 0===d?void 0:d.reduce((function(e,o){return o.colId!==s.id+(s.colSpan||0)-1&&e.push(o),e}),[]);i>1?c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1].colSpan=i:(s=Object(k.a)(s,["colSpan"]),c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1]=s),u&&u.length>0?c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1].resources=u:(s=Object(k.a)(s,["resources"]),c[n.resourceFor.rowId-1].cols[n.resourceFor.colId-1]=s)}}e.cols.splice(t-1,1),e.cols=e.cols.map((function(e,o){return Object(w.a)(Object(w.a)({},e),{},{id:o+1})}))})),Object(w.a)(Object(w.a)({},e),{},{selectionState:{selectedCols:[],selected:!1},rows:c.map((function(e,o){var c=e.cols.map((function(e){var o,c=null===(o=e.resources)||void 0===o?void 0:o.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{colId:e.colId>t?e.colId-1:e.colId})}));return Object(w.a)(Object(w.a)(Object(w.a)({},e),c?{resources:c}:{}),e.resourceFor&&e.resourceFor.colId>t?{resourceFor:Object(w.a)(Object(w.a)({},e.resourceFor),{},{colId:e.resourceFor.colId-1})}:{})}));return Object(w.a)(Object(w.a)({},e),{},{id:o+1,cols:c})}))})})).handleAction(v,(function(e,o){var t=o.payload,c=t.colId,r=t.rowId,n=t.content,a=e.rows;return a[r-1].cols[c-1].content=n,Object(w.a)(Object(w.a)({},e),{},{rows:a})})).handleAction(F,(function(e,o){var t=o.payload,c=t.colId,r=t.width,n=e.rows.map((function(e){var o=e.cols.map((function(e){return Object(w.a)(Object(w.a)({},e),e.id===c?{width:r}:{})}));return Object(w.a)(Object(w.a)({},e),{},{cols:o})}));return Object(w.a)(Object(w.a)({},e),{},{rows:n})})).handleAction(x,(function(e,o){var t=o.payload,c=t.selectionState,r=t.background,n=e.rows.map((function(e){var o=e.cols.map((function(o){return c.start&&c.end&&A(c.start,c.end,{rowId:e.id,colId:o.id})?Object(w.a)(Object(w.a)({},o),{},{background:r}):o}));return Object(w.a)(Object(w.a)({},e),{},{cols:o})}));return Object(w.a)(Object(w.a)({},e),{},{rows:n})})),R=t(8),T=t(33),N=t.n(T),L=t(0),M=function(e){var o,t=e.children,c=e.onClick,r=e.onBlur,n=e.className,a=e.style,l=e.active,d=void 0!==l&&l,u=e.disabled,p=void 0!==u&&u,j=e.small;return Object(L.jsx)("button",{disabled:p,onClick:c?function(e){return c(e)}:void 0,onBlur:r,className:i()(N.a.wrapper,n,(o={},Object(s.a)(o,N.a.active,d),Object(s.a)(o,N.a.disabled,p),Object(s.a)(o,N.a.small,j),o)),style:a,children:t})},D=function(e){var o=e.editorState,t=e.setEditorState;return Object(L.jsx)(M,{small:!0,onClick:function(e){e.preventDefault(),t(R.RichUtils.toggleInlineStyle(o,"BOLD"))},children:"B"})},P=function(e){var o=e.editorState,t=e.setEditorState;return Object(L.jsx)(M,{small:!0,onClick:function(e){e.preventDefault(),t(R.RichUtils.toggleInlineStyle(o,"ITALIC"))},children:"I"})},W=t(115),U=t.n(W),V=function(e){var o=e.editorState,t=e.setEditorState;return Object(L.jsxs)("div",{className:U.a.wrapper,children:[Object(L.jsx)(D,{editorState:o,setEditorState:t}),Object(L.jsx)(P,{editorState:o,setEditorState:t})]})},G=t(116),H=t.n(G),J=function(e){var o=e.value,t=e.colId,n=e.rowId,a=e.setEditMode,s=r.a.useContext(j).dispatch,d=Object(c.useRef)(null),i=r.a.useState(o?R.EditorState.createWithContent(Object(R.convertFromRaw)(o)):R.EditorState.createEmpty()),u=Object(l.a)(i,2),b=u[0],w=u[1];r.a.useEffect((function(){d.current&&d.current.focus()}),[]);return Object(L.jsx)("div",{className:H.a.wrapper,children:Object(L.jsxs)(p.a,{onOutsideClick:function(){var e=b.getCurrentContent();s(v({rowId:n,colId:t,content:Object(R.convertToRaw)(e)})),a(!1)},children:[Object(L.jsx)(V,{editorState:b,setEditorState:w}),Object(L.jsx)(R.Editor,{editorState:b,onChange:w,ref:d})]})})},Q=t(62),X=t.n(Q),Z=function(e){var o=e.colData,t=e.rowId,c=r.a.useState(!1),n=Object(l.a)(c,2),a=n[0],d=n[1],u=r.a.useState(!1),p=Object(l.a)(u,2),b=p[0],w=p[1],I=r.a.useState({rowId:0,colId:0}),S=Object(l.a)(I,2),v=S[0],x=S[1],m=r.a.useContext(j),_=m.state,C=m.dispatch;if(r.a.useEffect((function(){_.selectionState.start&&_.selectionState.end?d(A(_.selectionState.start,_.selectionState.end,{rowId:t,colId:o.id})):d(!1),x({rowId:o.rowSpan&&_.selectionState.start&&_.selectionState.start.rowId<t?t+o.rowSpan-1:t,colId:o.colSpan&&_.selectionState.start&&_.selectionState.start.colId<o.id?o.id+o.colSpan-1:o.id})}),[_,t,o]),!o.display)return null;return Object(L.jsxs)("td",{id:"col-".concat(t,"-").concat(o.id),onMouseDown:function(){_.touched||b?b||C(O({positionEnd:v,finished:!0})):C(f({positionStart:{rowId:t,colId:o.id}}))},onMouseUp:function(){b||C(O({positionEnd:v,finished:!0}))},onMouseEnter:function(){_.touched&&!b&&C(O({positionEnd:{rowId:t,colId:o.id},finished:!1}))},onDoubleClick:function(){C(h()),w(!0)},colSpan:o.colSpan,rowSpan:o.rowSpan,className:i()(X.a.wrapper,Object(s.a)({},X.a.selected,a)),style:{background:o.background},children:[b&&"text"===o.type&&Object(L.jsx)(J,{value:o.content,background:o.background,rowId:t,colId:o.id,setEditMode:w}),!b&&"text"===o.type&&Object(L.jsx)(R.Editor,{editorState:o.content?R.EditorState.createWithContent(Object(R.convertFromRaw)(o.content)):R.EditorState.createEmpty(),onChange:function(){},readOnly:!0})]})},q={content:"",type:"text",display:!0},K=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffccc7"],Y=function(e,o){var t=e[o-1],c=e[o],r={id:o+1,cols:[]};t.cols.forEach((function(e,n){var a=Object(w.a)(Object(w.a)({},q),{},{id:e.id});if(c){var s=t.cols[n],l=c.cols[n];s.rowSpan&&l.resourceFor&&l.resourceFor.colId===s.id&&l.resourceFor.rowId===t.id?r.cols.push(Object(w.a)(Object(w.a)({},a),{},{display:!1,resourceFor:{rowId:o,colId:e.id}})):s.resourceFor&&l.resourceFor&&l.resourceFor.colId===s.resourceFor.colId&&l.resourceFor.rowId===s.resourceFor.rowId?r.cols.push(Object(w.a)(Object(w.a)({},a),{},{display:!1,resourceFor:s.resourceFor})):r.cols.push(a)}else r.cols.push(a)}));var n=[];r.cols.forEach((function(o){if(o.resourceFor){var t="".concat(o.resourceFor.rowId).concat(o.resourceFor.colId);if(!n.includes(t)){var c=e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan||0;e[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].rowSpan=c+1,n.push(t)}}}));var a=e.map((function(e){if(e.id>o){var t=e.cols.map((function(e){return Object(w.a)(Object(w.a)({},e),e.resourceFor&&e.resourceFor.rowId>o?{resourceFor:Object(w.a)(Object(w.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId+1})}:e.resourceFor)}));return Object(w.a)(Object(w.a)({},e),{},{id:e.id+1,cols:t})}return e}));return a.splice(o,0,r),a.forEach((function(e){e.cols.forEach((function(o){var t;(o.resources&&(a[e.id-1].cols[o.id-1].resources=[]),o.resourceFor&&a[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1])&&(null===(t=a[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1].resources)||void 0===t||t.push({colId:o.id,rowId:e.id}))}))})),a},z=t(63),$=t.n(z),ee=function(e){var o=e.rowId,t=r.a.useContext(j),c=t.dispatch,n=t.state;return Object(L.jsx)("div",{className:$.a.wrapper,children:Object(L.jsx)("button",{className:$.a.addButton,onClick:function(e){e.stopPropagation(),c(S({rows:Y(n.rows,o)}))},children:"+"})})},oe=t.p+"static/media/close-circle.50ed0904.svg",te=t(117),ce=t.n(te),re=function(e){var o=e.rowId,t=e.setRowSelected,c=r.a.useContext(j).dispatch;return Object(L.jsx)("button",{className:ce.a.wrapper,onClick:function(e){e.stopPropagation(),c(_({rowId:o})),t(!1)},children:Object(L.jsx)("img",{src:oe,alt:""})})},ne=t(64),ae=t.n(ne),se=function(e){var o=e.rowData,t=r.a.useState(!1),c=Object(l.a)(t,2),n=c[0],a=c[1],s=r.a.useContext(j),d=s.state,i=s.dispatch,u=r.a.useState(0),b=Object(l.a)(u,2),w=b[0],I=b[1],f=r.a.useRef(null);return Object(L.jsxs)("tr",{children:[Object(L.jsxs)("td",{ref:f,className:ae.a.techCol,onClick:function(){var e;(a(!0),i(h()),f.current)&&I(((null===(e=f.current.closest("table"))||void 0===e?void 0:e.offsetWidth)||0)-12)},children:[Object(L.jsx)(ee,{rowId:o.id}),n&&d.rows.length>1&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:ae.a.selectArea,style:{width:w}}),Object(L.jsx)(p.a,{onOutsideClick:function(){a(!1)},children:Object(L.jsx)(re,{rowId:o.id,setRowSelected:a})})]})]}),o.cols.map((function(e){return Object(L.jsx)(Z,{colData:e,rowId:o.id},e.id)}))]})},le=function(e){var o=e.selectionState,t=e.rows,c=o.selectedCols,r=o.start,n=o.end,a=y(o),s=[],l=!1,d={maxColId:0,maxRowId:0,startColId:0,startRowId:0,get:function(){return(this.maxColId-this.startColId+1)*(this.maxRowId-this.startRowId+1)}};return t.forEach((function(e){e.cols.forEach((function(o){if(o.colSpan||o.rowSpan){var t=o.colSpan||0,c=o.rowSpan||0;s.push({row:{min:e.id,max:c?e.id+c-1:e.id},col:{min:o.id,max:t?o.id+t-1:o.id}})}}))})),c.forEach((function(e,o){var t=e.colSpan?e.colId+e.colSpan-1:e.colId,c=e.rowSpan?e.rowId+e.rowSpan-1:e.rowId;t>d.maxColId&&(d.maxColId=t),c>d.maxRowId&&(d.maxRowId=c),0===o&&(d.startColId=e.colId,d.startRowId=e.rowId)})),s.forEach((function(e){r&&n&&!l&&("part"===function(e,o){var t=Math.max(e.col.min-1,o.col.min-1),c=Math.min(e.col.max,o.col.max),r=Math.max(e.row.min-1,o.row.min-1),n=Math.min(e.row.max,o.row.max),a=(e.col.max-e.col.min+1)*(e.row.max-e.row.min+1);return t<c&&r<n?(c-t)*(n-r)===a?"full":"part":"not"}(e,{row:{min:r.rowId,max:n.rowId},col:{min:r.colId,max:n.colId}})&&(l=!0))})),!a&&d.get()===c.length&&!l},de=function(){var e=r.a.useContext(j),o=e.state,t=e.dispatch;return Object(L.jsx)("li",{children:Object(L.jsx)("button",{disabled:!le(o),onClick:function(){!function(e,o){var t=e.selectionState,c=e.rows,r=[],n=t.selectedCols,a={rowId:n[0].rowId,colId:n[0].colId},s={prevRowId:n[0].rowId,prevColId:0,count:0},l={prevRowId:0,count:0};n.forEach((function(e,o){e.colId!==s.prevColId&&e.rowId===s.prevRowId&&(s.prevColId=e.colId,s.count+=1,n.length===o-1&&e.colSpan&&(s.count+=e.colSpan)),e.rowId!==l.prevRowId&&(l.prevRowId=e.rowId,l.count+=1,t.selectedCols.length===o-1&&e.rowSpan&&(l.count+=e.rowSpan))}));var d=c.map((function(e){var o=e.cols.map((function(o){var c={rowId:e.id,colId:o.id},n=a.rowId===e.id&&a.colId===o.id,d=A(t.start,t.end,c);return n&&s.count>1&&(o.colSpan=s.count),n&&l.count>1&&(o.rowSpan=l.count),d&&!n&&r.push(c),Object(w.a)(Object(w.a)(Object(w.a)({},d&&!n?Object(k.a)(o,["colSpan","rowSpan"]):o),n?{resources:[]}:{}),d&&!n?{display:!1,resourceFor:a}:{})}));return Object(w.a)(Object(w.a)({},e),{},{cols:o})}));d[a.rowId-1].cols[a.colId-1].resources=r,o(S({rows:d})),o(h())}(o,t)},children:"Merge"})})},ie=function(){var e=r.a.useContext(j),o=e.state,t=e.dispatch,c=r.a.useState(!1),n=Object(l.a)(c,2),a=n[0],s=n[1];return r.a.useEffect((function(){var e,t=o.selectionState.start;if(t){var c=o.rows[(e=t).rowId-1].cols[e.colId-1];(c.colSpan||c.rowSpan)&&y(o.selectionState)&&s(!0)}}),[o]),Object(L.jsx)("li",{children:Object(L.jsx)("button",{disabled:!a,onClick:function(){!function(e,o){var t=e.selectionState,c=e.rows,r=t.selectedCols[0],n=c[r.rowId-1].cols[r.colId-1];n&&n.resources&&n.resources.forEach((function(e){var o=c[e.rowId-1].cols[e.colId-1];c[e.rowId-1].cols[e.colId-1]=Object(w.a)(Object(w.a)({},Object(k.a)(o,["resourceFor"])),{},{display:!0})})),c[r.rowId-1].cols[r.colId-1]=Object(k.a)(n,["resources","colSpan","rowSpan"]),o(S({rows:c})),o(h())}(o,t)},children:"Unmerge"})})},ue=t(28),pe=t.n(ue),je=function(){var e=r.a.useContext(j),o=e.state,t=e.dispatch,c=function(e){t(x({selectionState:o.selectionState,background:e}))};return Object(L.jsxs)("li",{className:pe.a.wrapper,children:[Object(L.jsx)("button",{children:"Background color"}),Object(L.jsxs)("div",{className:pe.a.colors,children:[Object(L.jsx)("button",{onClick:function(){return c(void 0)},className:i()(pe.a.colorButton,pe.a.transparent)}),K.map((function(e){return Object(L.jsx)("button",{onClick:function(){return c(e)},style:{background:e},className:pe.a.colorButton},e)}))]})]})},be=t.p+"static/media/setting.5524b19c.svg",we=t(34),Ie=t.n(we),fe=function(){var e=r.a.useContext(j).state,o=r.a.useState(),t=Object(l.a)(o,2),c=t[0],n=t[1],a=r.a.useState(!1),d=Object(l.a)(a,2),u=d[0],b=d[1];return r.a.useEffect((function(){e.selectionState.start&&e.selectionState.end&&n(function(e,o){var t=E(e,o),c=document.getElementById("col-".concat(t.row.min,"-").concat(t.col.min));return c?{top:c.offsetTop+5,left:c.offsetLeft+5}:{top:0,left:0}}(e.selectionState.start,e.selectionState.end))}),[e]),Object(L.jsxs)("div",{className:i()(Ie.a.wrapper,Object(s.a)({},Ie.a.selected,e.selectionState.selected&&e.selectionState.selectedCols.length>0)),style:c,children:[Object(L.jsx)(M,{onClick:function(){return b(!u)},className:Ie.a.settingButton,children:Object(L.jsx)("img",{src:be,alt:""})}),u&&Object(L.jsx)(p.a,{onOutsideClick:function(){return b(!1)},children:Object(L.jsxs)("ul",{className:Ie.a.menu,children:[Object(L.jsx)(je,{}),Object(L.jsx)(de,{}),Object(L.jsx)(ie,{})]})})]})},Oe=function(e,o){var t=e.map((function(e){var t,c,r=e.cols.map((function(e){return e.id>o?Object(w.a)(Object(w.a)(Object(w.a)({},e),{},{id:e.id+1},e.resources?{resources:e.resources.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{colId:e.colId+1})}))}:{}),e.resourceFor&&e.resourceFor.colId>o?{resourceFor:Object(w.a)(Object(w.a)({},e.resourceFor),{},{colId:e.resourceFor.colId+1})}:e.resourceFor):e})),n=r[o-1]&&r[o-1].resourceFor&&r[o]&&r[o].resourceFor&&(null===(t=r[o-1].resourceFor)||void 0===t?void 0:t.colId)===(null===(c=r[o].resourceFor)||void 0===c?void 0:c.colId),a=Object(w.a)(Object(w.a)(Object(w.a)({id:o+1},q),r[o-1]&&r[o-1].colSpan?{display:!1,resourceFor:{rowId:e.id,colId:r[o-1].id}}:{}),n?{display:!1,resourceFor:r[o-1].resourceFor}:{});if(r[o-1]&&r[o-1].colSpan&&(r[o-1].colSpan+=1),n){var s=r[o-1].resourceFor;s&&r[s.colId-1]&&(r[s.colId-1].colSpan+=1)}return r.splice(o,0,a),Object(w.a)(Object(w.a)({},e),{},{cols:r})}));return t.forEach((function(e){e.cols.forEach((function(o){var c,r;(o.resources&&(t[e.id-1].cols[o.id-1].resources=[]),o.resourceFor)&&(null===(c=t[o.resourceFor.rowId-1].cols[o.resourceFor.colId-1])||void 0===c||null===(r=c.resources)||void 0===r||r.push({colId:o.id,rowId:e.id}))}))})),t},he=t(65),Se=t.n(he),ve=function(e){var o=e.colId,t=r.a.useContext(j),c=t.dispatch,n=t.state;return Object(L.jsx)("div",{className:Se.a.wrapper,children:Object(L.jsx)("button",{className:Se.a.addButton,onClick:function(e){e.stopPropagation(),c(S({rows:Oe(n.rows,o)}))},children:"+"})})},xe=t.p+"static/media/close-circle.50ed0904.svg",me=t(118),_e=t.n(me),Ce=function(e){var o=e.colId,t=e.setColSelected,c=r.a.useContext(j).dispatch;return Object(L.jsx)("button",{className:_e.a.wrapper,onClick:function(e){e.stopPropagation(),c(g({colId:o})),t(!1)},children:Object(L.jsx)("img",{src:xe,alt:""})})},Fe=t(119),ge=t.n(Fe),Ee=function(e){var o=e.tableHeight,t=e.colId,n=r.a.useContext(j),a=n.state,s=n.dispatch,d=Object(c.useState)(!1),i=Object(l.a)(d,2),u=i[0],p=i[1],b=Object(c.useState)(0),w=Object(l.a)(b,2),I=w[0],f=w[1],O=Object(c.useState)(0),S=Object(l.a)(O,2),v=S[0],x=S[1],m=Object(c.useState)(0),_=Object(l.a)(m,2),C=_[0],g=_[1],E=function(e){e.stopPropagation(),u&&(s(F({colId:t,width:I-C})),g(0),p(!1))};return a.rows[0].cols.length===t?null:Object(L.jsx)("div",{onMouseDown:function(e){e.stopPropagation(),s(h()),p(!0),x(e.screenX+C)},onMouseUp:E,onMouseLeave:E,onMouseMove:function(e){e.stopPropagation(),u&&I-C>10&&g(v-e.screenX)},onClick:function(e){return e.stopPropagation()},ref:function(e){var o;return f((null===e||void 0===e||null===(o=e.closest("td"))||void 0===o?void 0:o.offsetWidth)||0)},className:ge.a.wrapper,style:{height:o,right:C}})},Ae=t(66),ye=t.n(Ae),ke=function(e){var o,t=e.colId,c=r.a.useContext(j),n=c.state,a=c.dispatch,s=r.a.useState(!1),d=Object(l.a)(s,2),i=d[0],u=d[1],b=r.a.useState(0),w=Object(l.a)(b,2),I=w[0],f=w[1];return Object(L.jsxs)("td",{ref:function(e){var o;return f(((null===e||void 0===e||null===(o=e.closest("table"))||void 0===o?void 0:o.offsetHeight)||0)-12)},onClick:function(){a(h()),u(!0)},className:ye.a.techCol,style:{width:n.rows[0].cols.length>1?null===(o=n.rows[0].cols[t-1])||void 0===o?void 0:o.width:"auto"},children:[Object(L.jsx)(ve,{colId:t}),Object(L.jsx)(Ee,{tableHeight:I,colId:t}),n.rows[0].cols.length>1&&i&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:ye.a.selectArea,style:{height:I}}),Object(L.jsx)(p.a,{onOutsideClick:function(){u(!1)},children:Object(L.jsx)(Ce,{colId:t,setColSelected:u})})]})]})},Be=function(){var e=r.a.useContext(j).state,o=r.a.useState([]),t=Object(l.a)(o,2),c=t[0],n=t[1];return r.a.useEffect((function(){n(Array(function(e){var o=0;return e.forEach((function(e){e.cols.length>o&&(o=e.cols.length)})),o}(e.rows)).fill({}).map((function(e,o){return Object(w.a)(Object(w.a)({},e),{},{id:o+1})})))}),[e]),e.rows.length?Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{style:{width:10}}),c.map((function(e){return Object(L.jsx)(ke,{colId:e.id},e.id)}))]}):null},Re=t(48),Te=t.n(Re),Ne=function(e){var o=e.onChange,t=r.a.useReducer(B,b),c=Object(l.a)(t,2),n=c[0],a=c[1];r.a.useEffect((function(){o&&"function"===typeof o&&o(n.rows)}),[n,o]);return Object(L.jsx)(j.Provider,{value:{dispatch:a,state:n},children:Object(L.jsx)("div",{className:Te.a.wrapper,children:Object(L.jsxs)(p.a,{onOutsideClick:function(){a(h())},children:[Object(L.jsx)("table",{className:i()(Te.a.table,Object(s.a)({},Te.a.filled,!!n.rows.length)),children:Object(L.jsxs)("tbody",{children:[Object(L.jsx)(Be,{}),n.rows.map((function(e){return Object(L.jsx)(se,{rowData:e},e.id)}))]})}),Object(L.jsx)(fe,{})]})})})};var Le=function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsx)(Ne,{})})};a.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(Le,{})}),document.getElementById("root"))},28:function(e,o,t){e.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",colorButton:"ChangeBackground_colorButton__2QEDl",transparent:"ChangeBackground_transparent__mqomV"}},33:function(e,o,t){e.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG",small:"Button_small__2T4PP"}},34:function(e,o,t){e.exports={wrapper:"SelectionMenu_wrapper__2E3fb",selected:"SelectionMenu_selected__1dW4V",settingButton:"SelectionMenu_settingButton__2RZd1",menu:"SelectionMenu_menu__3_fZg"}},48:function(e,o,t){e.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},62:function(e,o,t){e.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t"}},63:function(e,o,t){e.exports={wrapper:"AddRow_wrapper__3NW4Q",addButton:"AddRow_addButton__1hGob"}},64:function(e,o,t){e.exports={techCol:"Row_techCol__HSNZB",active:"Row_active__1oG0c",selectArea:"Row_selectArea__X8N3B",blinker:"Row_blinker__6_-6l"}},65:function(e,o,t){e.exports={wrapper:"AddCol_wrapper__OkM3j",addButton:"AddCol_addButton__2VG6f"}},66:function(e,o,t){e.exports={techCol:"TechCol_techCol__3-ePx",selectArea:"TechCol_selectArea__1hdFm",blinker:"TechCol_blinker__3LS_s"}}},[[239,1,2]]]);
//# sourceMappingURL=main.e810dbb8.chunk.js.map