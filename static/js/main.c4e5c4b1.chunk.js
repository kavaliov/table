(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{120:function(e,t,o){e.exports={input:"InsertImage_input__UORoF"}},121:function(e,t,o){e.exports={wrapper:"ImageMenu_wrapper__hyI8u"}},122:function(e,t,o){e.exports={wrapper:"RemoveRow_wrapper__QxJap"}},123:function(e,t,o){e.exports={wrapper:"RemoveCol_wrapper__2M4QV"}},124:function(e,t,o){e.exports={wrapper:"ChangeWidth_wrapper__Ul3dY"}},245:function(e,t,o){"use strict";o.r(t);var c=o(1),r=o.n(c),a=o(65),n=o.n(a),s=o(10),l=o(3),i=(o(129),o(14)),d=o.n(i),u=o(17),p=o.n(u),j=c.createContext(null),b={touched:!1,selectionState:{selectedCols:[],selected:!1}},f=[{id:1,cols:[{content:"",type:"text",display:!0,id:1},{content:"",type:"text",display:!0,id:2}]}],O=o(2),w=o(9),S=o(246),I=Object(w.createStandardAction)("TABLE/SET_START_SELECTION")(),v=Object(w.createStandardAction)("TABLE/SET_END_SELECTION")(),h=Object(w.createStandardAction)("TABLE/CLEAR_SELECTION")(),m=Object(w.createStandardAction)("TABLE/SELECT_ROW")(),x=Object(w.createStandardAction)("TABLE/SELECT_COL")(),g=Object(w.createStandardAction)("TABLE/ROWS_UPDATE")(),_=Object(w.createStandardAction)("TABLE/UPDATE_COL_CONTENT")(),C=Object(w.createStandardAction)("TABLE/UPDATE_COL_BACKGROUND")(),E=Object(w.createStandardAction)("TABLE/UPDATE_COL_TYPE")(),y=Object(w.createStandardAction)("TABLE/REMOVE_ROW")(),F=Object(w.createStandardAction)("TABLE/SET_COL_WIDTH")(),k=Object(w.createStandardAction)("TABLE/REMOVE_COL")(),R={setStartSelection:I,setEndSelection:v,clearSelection:h,selectCol:x,selectRow:m},T={rowsUpdate:g,updateColContent:_,updateColBackground:C,updateColType:E,removeRow:y,setColWidth:F,removeCol:k},A=function(e,t){return{row:{min:e.rowId<t.rowId?e.rowId:t.rowId,max:e.rowId<t.rowId?t.rowId:e.rowId},col:{min:e.colId<t.colId?e.colId:t.colId,max:e.colId<t.colId?t.colId:e.colId}}},B=function(e,t,o){var c=A(e,t);return o.rowId>=c.row.min&&o.rowId<=c.row.max&&o.colId>=c.col.min&&o.colId<=c.col.max},N=function(e){var t=e.selectedCols,o=e.start,c=e.end,r=t[0],a=(null===r||void 0===r?void 0:r.rowSpan)?r.rowSpan-1:0,n=(null===r||void 0===r?void 0:r.colSpan)?r.colSpan-1:0;return!(!o||!c||o.rowId!==c.rowId||o.colId!==c.colId)||(a>0||n>0)&&!!o&&!!c&&c.rowId===o.rowId+a&&c.colId===o.colId+n&&t.length>1},M=Object(w.createReducer)(b).handleAction(R.setStartSelection,(function(e,t){return{touched:!0,selectionState:{selectedCols:[],selected:!1,start:t.payload.positionStart}}})).handleAction(R.setEndSelection,(function(e,t){var o=t.payload,c=o.positionEnd,r=o.finished,a=o.rows,n=[],s=e.selectionState.start;if(r&&s)for(var l=A(s,c),i={rowId:l.row.min,colId:l.col.min},d={rowId:l.row.max,colId:l.col.max},u=i.rowId;u<=d.rowId;u+=1)for(var p={rowId:u},j=i.colId;j<=d.colId;j+=1){var b=a[u-1].cols[j-1].colSpan,f=a[u-1].cols[j-1].rowSpan;n.push(Object(O.a)(Object(O.a)(Object(O.a)({},p),{},{colId:j},f?{rowSpan:f}:{}),b?{colSpan:b}:{}))}return Object(O.a)(Object(O.a)(Object(O.a)({},e),r?{touched:!1}:{}),{},{selectionState:Object(O.a)(Object(O.a)(Object(O.a)({},e.selectionState),{},{selectedCols:n},r?{selected:!0}:{}),{},{end:c})})})).handleAction(R.clearSelection,(function(e){return Object(O.a)(Object(O.a)({},e),{},{selectionState:{selectedCols:[],selected:!1}})})).handleAction(R.selectRow,(function(e,t){var o=t.payload,c=o.rowId,r=o.rows[c-1],a=r.cols.map((function(e){return{rowId:c,colId:e.id}}));return Object(O.a)(Object(O.a)({},e),{},{selectionState:{selected:!0,selectedCols:a,start:{rowId:c,colId:r.cols[0].id},end:{rowId:c,colId:r.cols[r.cols.length-1].id}}})})).handleAction(R.selectCol,(function(e,t){for(var o=t.payload,c=o.colId,r=o.rows,a=[],n=1;n<=r.length;n+=1)a.push({rowId:n,colId:c});return Object(O.a)(Object(O.a)({},e),{},{selectionState:{selected:!0,selectedCols:a,start:{rowId:r[0].id,colId:c},end:{rowId:r[r.length-1].id,colId:c}}})})),D=Object(w.createReducer)(f).handleAction(T.rowsUpdate,(function(e,t){return t.payload.rows})).handleAction(T.updateColBackground,(function(e,t){var o=t.payload,c=o.selectionState,r=o.background;return e.map((function(e){var t=e.cols.map((function(t){return c.start&&c.end&&B(c.start,c.end,{rowId:e.id,colId:t.id})?Object(O.a)(Object(O.a)({},t),{},{background:r}):t}));return Object(O.a)(Object(O.a)({},e),{},{cols:t})}))})).handleAction(T.updateColType,(function(e,t){var o=t.payload,c=o.selectionState,r=o.type;return e.map((function(e){var t=e.cols.map((function(t){return c.start&&c.end&&B(c.start,c.end,{rowId:e.id,colId:t.id})?Object(O.a)(Object(O.a)({},t),{},{type:r}):t}));return Object(O.a)(Object(O.a)({},e),{},{cols:t})}))})).handleAction(T.setColWidth,(function(e,t){var o=t.payload,c=o.colId,r=o.width;return e.map((function(e){var t=e.cols.map((function(e){return Object(O.a)(Object(O.a)({},e),e.id===c?{width:r}:{})}));return Object(O.a)(Object(O.a)({},e),{},{cols:t})}))})).handleAction(T.updateColContent,(function(e,t){var o=t.payload,c=o.colId,r=o.rowId,a=o.content;return e.map((function(e){return Object(O.a)(Object(O.a)({},e),e.id===r?{cols:e.cols.map((function(e){return Object(O.a)(Object(O.a)({},e),e.id===c?Object(O.a)(Object(O.a)({},e),{},{content:a}):e)}))}:{})}))})).handleAction(T.removeCol,(function(e,t){var o=t.payload.colId,c=e,r=[];return c.forEach((function(e,t){var a=e.cols[o-1];if(a.resources&&a.colSpan){var n=a.resources.reduce((function(e,t){return t.colId!==a.id+(a.colSpan||0)-1&&e.push(t),e}),[]);c[t].cols[o]=Object(O.a)(Object(O.a)({},Object(S.a)(a,["colSpan","resources"])),a.colSpan&&a.colSpan>2?{colSpan:a.colSpan-1}:{}),n.length>0&&(c[t].cols[o].resources=n)}if(a.resourceFor&&a.resourceFor.colId!==o){var s=c[a.resourceFor.rowId-1].cols[a.resourceFor.colId-1],l="".concat(a.resourceFor.rowId,"-").concat(a.resourceFor.colId);if(!r.includes(l)){var i;r.push(l);var d=(s.colSpan||1)-1,u=null===(i=s.resources)||void 0===i?void 0:i.reduce((function(e,t){return t.colId!==s.id+(s.colSpan||0)-1&&e.push(t),e}),[]);d>1?c[a.resourceFor.rowId-1].cols[a.resourceFor.colId-1].colSpan=d:(s=Object(S.a)(s,["colSpan"]),c[a.resourceFor.rowId-1].cols[a.resourceFor.colId-1]=s),u&&u.length>0?c[a.resourceFor.rowId-1].cols[a.resourceFor.colId-1].resources=u:(s=Object(S.a)(s,["resources"]),c[a.resourceFor.rowId-1].cols[a.resourceFor.colId-1]=s)}}e.cols.splice(o-1,1),e.cols=e.cols.map((function(e,t){return Object(O.a)(Object(O.a)({},e),{},{id:t+1})}))})),c.map((function(e,t){var c=e.cols.map((function(e){var t,c=null===(t=e.resources)||void 0===t?void 0:t.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{colId:e.colId>o?e.colId-1:e.colId})}));return Object(O.a)(Object(O.a)(Object(O.a)({},e),c?{resources:c}:{}),e.resourceFor&&e.resourceFor.colId>o?{resourceFor:Object(O.a)(Object(O.a)({},e.resourceFor),{},{colId:e.resourceFor.colId-1})}:{})}));return Object(O.a)(Object(O.a)({},e),{},{id:t+1,cols:c})}))})).handleAction(T.removeRow,(function(e,t){var o=t.payload.rowId,c=e[o-1],r=e,a=[];return c.cols.forEach((function(e,t){if(e.resources&&e.rowSpan){var c=e.resources,n=null===c||void 0===c?void 0:c.slice(0,c.length-(e.colSpan||1));r[o].cols[t]=Object(O.a)(Object(O.a)({},Object(S.a)(e,["rowSpan","resources"])),e.rowSpan&&e.rowSpan>2?{rowSpan:e.rowSpan-1}:{}),n.length>0&&r[o].cols[t]&&(r[o].cols[t].resources=n)}if(e.resourceFor&&e.resourceFor.rowId!==o){var s=r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1],l="".concat(e.resourceFor.rowId,"-").concat(e.resourceFor.colId);if(!a.includes(l)){var i;a.push(l);var d=(s.rowSpan||1)-1,u=null===(i=s.resources)||void 0===i?void 0:i.slice(0,s.resources.length-(s.colSpan||1));d>1?r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].rowSpan=d:(s=Object(S.a)(s,["rowSpan"]),r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s),u&&u.length>0?r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1].resources=u:(s=Object(S.a)(s,["resources"]),r[e.resourceFor.rowId-1].cols[e.resourceFor.colId-1]=s)}}})),r.splice(o-1,1),r.map((function(e,t){var c=e.cols.map((function(e){return Object(O.a)(Object(O.a)({},e),e.resourceFor&&e.resourceFor.rowId>o?{resourceFor:Object(O.a)(Object(O.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId-1})}:{})}));return Object(O.a)(Object(O.a)({},e),{},{id:t+1,cols:c})}))})),L=o(4),U=function(e){switch(e.getType()){case"left":return"align-left";case"center":return"align-center";case"right":return"align-right";default:return""}},P=function(e){var t=e.getSelection();return e.getCurrentContent().getBlockForKey(t.getStartKey()).getType()},W=o.p+"static/media/bold.aaa73dad.svg",K=o(35),H=o.n(K),G=o(0),J=function(e){var t,o=e.children,c=e.onClick,r=e.onMouseDown,a=e.onBlur,n=e.className,l=e.style,i=e.active,u=void 0!==i&&i,p=e.disabled,j=void 0!==p&&p,b=e.small;return Object(G.jsx)("button",{disabled:j,onClick:c?function(e){return c(e)}:void 0,onMouseDown:r?function(e){return r(e)}:void 0,onBlur:a,className:d()(H.a.wrapper,n,(t={},Object(s.a)(t,H.a.active,u),Object(s.a)(t,H.a.disabled,j),Object(s.a)(t,H.a.small,b),t)),style:l,children:o})},V=function(e){var t=e.editorState,o=e.setEditorState,c=r.a.useState(!1),a=Object(l.a)(c,2),n=a[0],s=a[1];r.a.useEffect((function(){var e=t.getCurrentInlineStyle();s(e.has("BOLD"))}),[t]);return Object(G.jsx)(J,{active:n,small:!0,onMouseDown:function(e){return e.preventDefault()},onClick:function(){o(L.RichUtils.toggleInlineStyle(t,"BOLD"))},children:Object(G.jsx)("img",{src:W,alt:""})})},Q=o.p+"static/media/italic.8e03cb99.svg",X=function(e){var t=e.editorState,o=e.setEditorState,c=r.a.useState(!1),a=Object(l.a)(c,2),n=a[0],s=a[1];r.a.useEffect((function(){var e=t.getCurrentInlineStyle();s(e.has("ITALIC"))}),[t]);return Object(G.jsx)(J,{onMouseDown:function(e){return e.preventDefault()},active:n,small:!0,onClick:function(e){e.preventDefault(),o(L.RichUtils.toggleInlineStyle(t,"ITALIC"))},children:Object(G.jsx)("img",{src:Q,alt:""})})},Z=o.p+"static/media/underline.037f1cd5.svg",q=function(e){var t=e.editorState,o=e.setEditorState,c=r.a.useState(!1),a=Object(l.a)(c,2),n=a[0],s=a[1];r.a.useEffect((function(){var e=t.getCurrentInlineStyle();s(e.has("UNDERLINE"))}),[t]);return Object(G.jsx)(J,{onMouseDown:function(e){return e.preventDefault()},active:n,small:!0,onClick:function(e){e.preventDefault(),o(L.RichUtils.toggleInlineStyle(t,"UNDERLINE"))},children:Object(G.jsx)("img",{src:Z,alt:""})})},Y=o.p+"static/media/unordered-list.d3b3a77e.svg",z=function(e){var t=e.setEditorState,o=e.editorState,c=r.a.useState(!1),a=Object(l.a)(c,2),n=a[0],s=a[1];r.a.useEffect((function(){var e=P(o);s("unordered-list-item"===e)}),[o]);return Object(G.jsx)(J,{onMouseDown:function(e){return e.preventDefault()},active:n,small:!0,onClick:function(e){e.preventDefault(),t(L.RichUtils.toggleBlockType(o,"unordered-list-item"))},children:Object(G.jsx)("img",{src:Y,alt:""})})},$=o.p+"static/media/ordered-list.f732fa03.svg",ee=function(e){var t=e.setEditorState,o=e.editorState,c=r.a.useState(!1),a=Object(l.a)(c,2),n=a[0],s=a[1];r.a.useEffect((function(){var e=P(o);s("ordered-list-item"===e)}),[o]);return Object(G.jsx)(J,{onMouseDown:function(e){return e.preventDefault()},active:n,small:!0,onClick:function(){t(L.RichUtils.toggleBlockType(o,"ordered-list-item"))},children:Object(G.jsx)("img",{src:$,alt:""})})},te=[{label:"header 1",value:"header-one"},{label:"header 2",value:"header-two"},{label:"header 3",value:"header-three"},{label:"header 4",value:"header-four"},{label:"header 5",value:"header-five"},{label:"header 6",value:"header-six"}],oe=function(e){var t="unstyled";return te.forEach((function(o){o.value===e&&(t=o.label)})),t},ce=o(28),re=o.n(ce),ae=function(e){var t=e.editorState,o=e.setEditorState,c=r.a.useState("unstyled"),a=Object(l.a)(c,2),n=a[0],s=a[1],i=r.a.useState(!1),d=Object(l.a)(i,2),u=d[0],p=d[1];r.a.useEffect((function(){s(P(t))}),[t]);var j=function(e){s(e),o(L.RichUtils.toggleBlockType(t,e)),p(!1)};return Object(G.jsxs)("div",{className:re.a.select,children:[Object(G.jsx)(J,{onClick:function(){return p(!u)},small:!0,className:re.a.openButton,onMouseDown:function(e){return e.preventDefault()},children:oe(n)}),u&&Object(G.jsxs)("ul",{className:re.a.list,children:[Object(G.jsx)("li",{children:Object(G.jsx)("button",{value:"unstyled",onMouseDown:function(e){return e.preventDefault()},onClick:function(){return j("unstyled")},className:re.a.header,children:"unstyled"})}),te.map((function(e){return Object(G.jsx)("li",{children:Object(G.jsx)("button",{onMouseDown:function(e){return e.preventDefault()},onClick:function(){return j(e.value)},className:re.a.header,children:e.label})},e.label)}))]})]})},ne=o.p+"static/media/align-right.9b80b95b.svg",se=function(e){var t=e.editorState,o=e.setEditorState,c=r.a.useState(!1),a=Object(l.a)(c,2),n=a[0],s=a[1];r.a.useEffect((function(){var e=P(t);s("right"===e)}),[t]);return Object(G.jsx)(J,{active:n,onMouseDown:function(e){return e.preventDefault()},onClick:function(){o(L.RichUtils.toggleBlockType(t,"right"))},small:!0,children:Object(G.jsx)("img",{src:ne,alt:""})})},le=o.p+"static/media/align-left.39c3c5bc.svg",ie=function(e){var t=e.editorState,o=e.setEditorState,c=r.a.useState(!1),a=Object(l.a)(c,2),n=a[0],s=a[1];r.a.useEffect((function(){var e=P(t);s("left"===e)}),[t]);return Object(G.jsx)(J,{active:n,onMouseDown:function(e){return e.preventDefault()},onClick:function(){o(L.RichUtils.toggleBlockType(t,"left"))},small:!0,children:Object(G.jsx)("img",{src:le,alt:""})})},de=o.p+"static/media/align-center.6b7955c5.svg",ue=function(e){var t=e.editorState,o=e.setEditorState,c=r.a.useState(!1),a=Object(l.a)(c,2),n=a[0],s=a[1];r.a.useEffect((function(){var e=P(t);s("center"===e)}),[t]);return Object(G.jsx)(J,{active:n,onMouseDown:function(e){return e.preventDefault()},onClick:function(){o(L.RichUtils.toggleBlockType(t,"center"))},small:!0,children:Object(G.jsx)("img",{src:de,alt:""})})},pe=o.p+"static/media/picture.3e97766c.svg",je=o(120),be=o.n(je),fe=function(e){var t=e.editorState,o=e.setEditorState,c=r.a.useRef(null);return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("input",{ref:c,type:"file",onChange:function(){var e;c.current&&(e=c.current,new Promise((function(t,o){var c=e.files,r=new FileReader;c&&r.readAsDataURL(c[0]),r.onload=function(){return t(r.result)},r.onerror=function(e){return o(e)}}))).then((function(e){var c=t.getCurrentContent().createEntity("IMAGE","IMMUTABLE",{src:e}),r=c.getLastCreatedEntityKey(),a=L.EditorState.set(t,{currentContent:c});o(L.AtomicBlockUtils.insertAtomicBlock(a,r," "))}))},className:be.a.input}),Object(G.jsx)(J,{small:!0,onMouseDown:function(e){return e.preventDefault()},onClick:function(){var e;null===(e=c.current)||void 0===e||e.click()},children:Object(G.jsx)("img",{src:pe,alt:""})})]})},Oe=o(29),we=o.n(Oe),Se=function(e){var t=e.editorState,o=e.setEditorState;return Object(G.jsxs)("div",{className:we.a.wrapper,children:[Object(G.jsx)(V,{editorState:t,setEditorState:o}),Object(G.jsx)(X,{editorState:t,setEditorState:o}),Object(G.jsx)(q,{editorState:t,setEditorState:o}),Object(G.jsx)("div",{className:we.a.separator}),Object(G.jsx)(ie,{editorState:t,setEditorState:o}),Object(G.jsx)(ue,{editorState:t,setEditorState:o}),Object(G.jsx)(se,{editorState:t,setEditorState:o}),Object(G.jsx)("div",{className:we.a.separator}),Object(G.jsx)(z,{editorState:t,setEditorState:o}),Object(G.jsx)(ee,{editorState:t,setEditorState:o}),Object(G.jsx)("div",{className:we.a.separator}),Object(G.jsx)(fe,{editorState:t,setEditorState:o}),Object(G.jsx)("div",{className:we.a.separator}),Object(G.jsx)(ae,{editorState:t,setEditorState:o})]})},Ie=c.createContext(null),ve=o.p+"static/media/delete.a12f546f.svg",he=o(121),me=o.n(he),xe=function(e){var t=e.blockKey,o=r.a.useContext(Ie),c=o.editorState,a=o.setEditorState;return Object(G.jsx)("div",{className:me.a.wrapper,children:Object(G.jsx)(J,{small:!0,onClick:function(){a(function(e,t){var o=e.getCurrentContent(),c=o.getBlockForKey(t),r=o.getBlockBefore(c.getKey()),a=o.getBlockAfter(c.getKey()),n=e.getSelection().merge({anchorKey:null===r||void 0===r?void 0:r.getKey(),anchorOffset:0,focusKey:null===a||void 0===a?void 0:a.getKey(),focusOffset:0}),s=L.Modifier.applyEntity(o,n,null),l=L.EditorState.push(e,s,"apply-entity"),i=L.Modifier.removeRange(s,n,"backward");return L.EditorState.push(l,i,"remove-range")}(c,t))},children:Object(G.jsx)("img",{src:ve,alt:""})})})},ge=o(66),_e=o.n(ge),Ce=function(e){var t=e.entity,o=e.block,c=r.a.useContext(Ie).editMode,a=r.a.useState(!1),n=Object(l.a)(a,2),s=n[0],i=n[1],d=t.getData().src,u=o.getKey();return Object(G.jsx)(p.a,{onOutsideClick:function(){i(!1)},children:Object(G.jsxs)("div",{className:_e.a.wrapper,children:[Object(G.jsx)("img",{src:d,alt:"",onClick:function(){c&&i((function(e){return!e}))},className:s?_e.a.opened:""}),s&&Object(G.jsx)(xe,{blockKey:u})]})})},Ee=function(e){var t=e.contentState,o=e.block,c=o.getEntityAt(0);if(c){var r=t.getEntity(c);if("IMAGE"===r.getType())return Object(G.jsx)(Ce,{entity:r,block:o})}return null},ye=o(67),Fe=o.n(ye),ke=function(e){var t=e.value,o=e.colId,a=e.rowId,n=e.editMode,i=e.setEditMode,u=r.a.useContext(j).dispatchRowsState,b=Object(c.useRef)(null),f=r.a.useState(L.EditorState.createEmpty()),O=Object(l.a)(f,2),w=O[0],S=O[1];r.a.useEffect((function(){b.current&&b.current.focus()}),[n]),r.a.useEffect((function(){t?(S(L.EditorState.createWithContent(Object(L.convertFromRaw)(t))),console.log(t)):S(L.EditorState.createEmpty())}),[t]);return Object(G.jsx)(Ie.Provider,{value:{editMode:n,editorState:w,setEditorState:S},children:Object(G.jsx)("div",{className:d()(Fe.a.wrapper,Object(s.a)({},Fe.a.editMode,n)),children:Object(G.jsxs)(p.a,{onOutsideClick:function(){if(n){var e=w.getCurrentContent();u(T.updateColContent({rowId:a,colId:o,content:Object(L.convertToRaw)(e)})),i(!1)}},children:[n&&Object(G.jsx)(Se,{editorState:w,setEditorState:S}),Object(G.jsx)(L.Editor,{blockStyleFn:U,blockRendererFn:function(e){return"atomic"===e.getType()?{component:Ee,editable:!1}:null},readOnly:!n,editorState:w,onChange:S,ref:b})]})})})},Re=o(51),Te=o.n(Re),Ae=r.a.memo((function(e){var t,o=e.colData,c=e.rowId,a=r.a.useState(!1),n=Object(l.a)(a,2),i=n[0],u=n[1],p=r.a.useState(!1),b=Object(l.a)(p,2),f=b[0],O=b[1],w=r.a.useState({rowId:0,colId:0}),S=Object(l.a)(w,2),I=S[0],v=S[1],h=r.a.useContext(j),m=h.rowsState,x=h.tableState,g=h.dispatchTableState;if(r.a.useEffect((function(){x.selectionState.start&&x.selectionState.end?u(B(x.selectionState.start,x.selectionState.end,{rowId:c,colId:o.id})):u(!1),v({rowId:o.rowSpan&&x.selectionState.start&&x.selectionState.start.rowId<c?c+o.rowSpan-1:c,colId:o.colSpan&&x.selectionState.start&&x.selectionState.start.colId<o.id?o.id+o.colSpan-1:o.id})}),[x,c,o]),!o.display)return null;return Object(G.jsx)("td",{id:"col-".concat(c,"-").concat(o.id),onMouseDown:function(){x.touched||f?f||g(R.setEndSelection({positionEnd:I,finished:!0,rows:m})):g(R.setStartSelection({positionStart:{rowId:c,colId:o.id}}))},onMouseUp:function(){f||g(R.setEndSelection({positionEnd:I,finished:!0,rows:m}))},onMouseEnter:function(){x.touched&&!f&&g(R.setEndSelection({positionEnd:{rowId:c,colId:o.id},finished:!1,rows:m}))},onDoubleClick:function(){x.selectionState.selected&&g(R.clearSelection()),O(!0)},colSpan:o.colSpan,rowSpan:o.rowSpan,className:d()(Te.a.wrapper,(t={},Object(s.a)(t,Te.a.selected,i),Object(s.a)(t,Te.a.editMode,f),t)),style:{background:o.background},children:"text"===o.type&&Object(G.jsx)(ke,{value:o.content,background:o.background,rowId:c,colId:o.id,editMode:f,setEditMode:O})})})),Be={content:"",type:"text",display:!0},Ne=["#fff1b8","#ffffb8","#f4ffb8","#d9f7be","#b5f5ec","#bae7ff","#d6e4ff","#efdbff","#ffccc7"],Me=function(e,t){var o=e[t-1],c=e[t],r={id:t+1,cols:[]};o.cols.forEach((function(e,a){var n=Object(O.a)(Object(O.a)({},Be),{},{id:e.id});if(c){var s=o.cols[a],l=c.cols[a];s.rowSpan&&l.resourceFor&&l.resourceFor.colId===s.id&&l.resourceFor.rowId===o.id?r.cols.push(Object(O.a)(Object(O.a)({},n),{},{display:!1,resourceFor:{rowId:t,colId:e.id}})):s.resourceFor&&l.resourceFor&&l.resourceFor.colId===s.resourceFor.colId&&l.resourceFor.rowId===s.resourceFor.rowId?r.cols.push(Object(O.a)(Object(O.a)({},n),{},{display:!1,resourceFor:s.resourceFor})):r.cols.push(n)}else r.cols.push(n)}));var a=[];r.cols.forEach((function(t){if(t.resourceFor){var o="".concat(t.resourceFor.rowId).concat(t.resourceFor.colId);if(!a.includes(o)){var c=e[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1].rowSpan||0;e[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1].rowSpan=c+1,a.push(o)}}}));var n=e.map((function(e){if(e.id>t){var o=e.cols.map((function(e){return Object(O.a)(Object(O.a)({},e),e.resourceFor&&e.resourceFor.rowId>t?{resourceFor:Object(O.a)(Object(O.a)({},e.resourceFor),{},{rowId:e.resourceFor.rowId+1})}:e.resourceFor)}));return Object(O.a)(Object(O.a)({},e),{},{id:e.id+1,cols:o})}return e}));return n.splice(t,0,r),n.forEach((function(e){e.cols.forEach((function(t){var o;(t.resources&&(n[e.id-1].cols[t.id-1].resources=[]),t.resourceFor&&n[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1])&&(null===(o=n[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1].resources)||void 0===o||o.push({colId:t.id,rowId:e.id}))}))})),n},De=o(68),Le=o.n(De),Ue=function(e){var t=e.rowId,o=r.a.useContext(j),c=o.dispatchRowsState,a=o.rowsState;return Object(G.jsx)("div",{className:Le.a.wrapper,children:Object(G.jsx)("button",{className:Le.a.addButton,onClick:function(e){e.stopPropagation(),c(T.rowsUpdate({rows:Me(a,t)}))},children:"+"})})},Pe=o.p+"static/media/close-circle.50ed0904.svg",We=o(122),Ke=o.n(We),He=function(e){var t=e.rowId,o=e.setRowSelected,c=r.a.useContext(j).dispatchRowsState;return Object(G.jsx)("button",{className:Ke.a.wrapper,onClick:function(e){e.stopPropagation(),c(T.removeRow({rowId:t})),o(!1)},children:Object(G.jsx)("img",{src:Pe,alt:""})})},Ge=o(69),Je=o.n(Ge),Ve=function(e){var t=e.rowData,o=r.a.useState(!1),c=Object(l.a)(o,2),a=c[0],n=c[1],s=r.a.useContext(j),i=s.rowsState,d=s.dispatchTableState,u=r.a.useState(0),b=Object(l.a)(u,2),f=b[0],O=b[1],w=r.a.useRef(null);return Object(G.jsxs)("tr",{children:[Object(G.jsxs)("td",{ref:w,className:Je.a.techCol,onClick:function(){var e;(n(!0),d(R.clearSelection()),w.current)&&O(((null===(e=w.current.closest("table"))||void 0===e?void 0:e.offsetWidth)||0)-12)},children:[Object(G.jsx)(Ue,{rowId:t.id}),a&&i.length>1&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("div",{className:Je.a.selectArea,style:{width:f}}),Object(G.jsx)(p.a,{onOutsideClick:function(){a&&n(!1)},children:Object(G.jsx)(He,{rowId:t.id,setRowSelected:n})})]})]}),t.cols.map((function(e){return Object(G.jsx)(Ae,{colData:e,rowId:t.id},e.id)}))]})},Qe=function(e){var t=e.tableState.selectionState,o=e.rowsState,c=t.selectedCols,r=t.start,a=t.end,n=N(t),s=[],l=!1,i={maxColId:0,maxRowId:0,startColId:0,startRowId:0,get:function(){return(this.maxColId-this.startColId+1)*(this.maxRowId-this.startRowId+1)}};return o.forEach((function(e){e.cols.forEach((function(t){if(t.colSpan||t.rowSpan){var o=t.colSpan||0,c=t.rowSpan||0;s.push({row:{min:e.id,max:c?e.id+c-1:e.id},col:{min:t.id,max:o?t.id+o-1:t.id}})}}))})),c.forEach((function(e,t){var o=e.colSpan?e.colId+e.colSpan-1:e.colId,c=e.rowSpan?e.rowId+e.rowSpan-1:e.rowId;o>i.maxColId&&(i.maxColId=o),c>i.maxRowId&&(i.maxRowId=c),0===t&&(i.startColId=e.colId,i.startRowId=e.rowId)})),s.forEach((function(e){r&&a&&!l&&("part"===function(e,t){var o=Math.max(e.col.min-1,t.col.min-1),c=Math.min(e.col.max,t.col.max),r=Math.max(e.row.min-1,t.row.min-1),a=Math.min(e.row.max,t.row.max),n=(e.col.max-e.col.min+1)*(e.row.max-e.row.min+1);return o<c&&r<a?(c-o)*(a-r)===n?"full":"part":"not"}(e,{row:{min:r.rowId,max:a.rowId},col:{min:r.colId,max:a.colId}})&&(l=!0))})),!n&&i.get()===c.length&&!l},Xe=function(){var e=r.a.useContext(j);return Object(G.jsx)("li",{children:Object(G.jsx)("button",{disabled:!Qe(e),onClick:function(){!function(e){var t=e.tableState.selectionState,o=e.rowsState,c=[],r=t.selectedCols,a={rowId:r[0].rowId,colId:r[0].colId},n={prevRowId:r[0].rowId,prevColId:0,count:0},s={prevRowId:0,count:0};r.forEach((function(e,o){e.colId!==n.prevColId&&e.rowId===n.prevRowId&&(n.prevColId=e.colId,n.count+=1,r.length===o-1&&e.colSpan&&(n.count+=e.colSpan)),e.rowId!==s.prevRowId&&(s.prevRowId=e.rowId,s.count+=1,t.selectedCols.length===o-1&&e.rowSpan&&(s.count+=e.rowSpan))}));var l=o.map((function(e){var o=e.cols.map((function(o){var r={rowId:e.id,colId:o.id},l=a.rowId===e.id&&a.colId===o.id,i=B(t.start,t.end,r);return l&&n.count>1&&(o.colSpan=n.count),l&&s.count>1&&(o.rowSpan=s.count),i&&!l&&c.push(r),Object(O.a)(Object(O.a)(Object(O.a)({},i&&!l?Object(S.a)(o,["colSpan","rowSpan"]):o),l?{resources:[]}:{}),i&&!l?{display:!1,resourceFor:a}:{})}));return Object(O.a)(Object(O.a)({},e),{},{cols:o})}));l[a.rowId-1].cols[a.colId-1].resources=c,e.dispatchRowsState(T.rowsUpdate({rows:l})),e.dispatchTableState(R.clearSelection())}(e)},children:"Merge"})})},Ze=function(){var e=r.a.useContext(j),t=r.a.useState(!1),o=Object(l.a)(t,2),c=o[0],a=o[1],n=e.tableState,s=e.rowsState;return r.a.useEffect((function(){var e,t=n.selectionState.start;if(t){var o=s[(e=t).rowId-1].cols[e.colId-1];(o.colSpan||o.rowSpan)&&N(n.selectionState)&&a(!0)}}),[n,s]),Object(G.jsx)("li",{children:Object(G.jsx)("button",{disabled:!c,onClick:function(){!function(e){var t=e.tableState.selectionState,o=e.rowsState,c=t.selectedCols[0],r=o[c.rowId-1].cols[c.colId-1];r&&r.resources&&r.resources.forEach((function(e){var t=o[e.rowId-1].cols[e.colId-1];o[e.rowId-1].cols[e.colId-1]=Object(O.a)(Object(O.a)({},Object(S.a)(t,["resourceFor"])),{},{display:!0})})),o[c.rowId-1].cols[c.colId-1]=Object(S.a)(r,["resources","colSpan","rowSpan"]),e.dispatchRowsState(T.rowsUpdate({rows:o})),e.dispatchTableState(R.clearSelection())}(e)},children:"Unmerge"})})},qe=o(30),Ye=o.n(qe),ze=function(){var e=r.a.useContext(j),t=e.dispatchRowsState,o=e.tableState,c=function(e){t(T.updateColBackground({selectionState:o.selectionState,background:e}))};return Object(G.jsxs)("li",{className:Ye.a.wrapper,children:[Object(G.jsx)("button",{children:"Background color"}),Object(G.jsxs)("div",{className:Ye.a.colors,children:[Object(G.jsx)("button",{onClick:function(){return c(void 0)},className:d()(Ye.a.colorButton,Ye.a.transparent)}),Ne.map((function(e){return Object(G.jsx)("button",{onClick:function(){return c(e)},style:{background:e},className:Ye.a.colorButton},e)}))]})]})},$e=[{label:"Text",value:"text"}],et=o.p+"static/media/check-circle.c253255a.svg",tt=o(36),ot=o.n(tt),ct=function(){var e=r.a.useContext(j),t=e.dispatchRowsState,o=e.tableState,c=e.rowsState,a=r.a.useState(""),n=Object(l.a)(a,2),s=n[0],i=n[1],d=o.selectionState;r.a.useEffect((function(){if(d.selected){var e=d.selectedCols[0].rowId,t=d.selectedCols[0].colId;i(c[e-1].cols[t-1].type)}}),[d,c]);return Object(G.jsxs)("li",{className:ot.a.wrapper,children:[Object(G.jsx)("button",{children:"Type"}),Object(G.jsx)("ul",{className:ot.a.types,children:$e.map((function(e){return Object(G.jsx)("li",{children:Object(G.jsxs)("button",{className:s===e.value?ot.a.selected:"",onClick:function(){return function(e){var c=d.selectedCols[0].rowId,r=d.selectedCols[0].colId;t(T.updateColType({selectionState:o.selectionState,type:e})),t(T.updateColContent({colId:r,rowId:c,content:""}))}(e.value)},children:[e.label,s===e.value&&Object(G.jsx)("img",{src:et,alt:"",className:ot.a.icon})]})},e.value)}))})]})},rt=o.p+"static/media/setting.5524b19c.svg",at=o(37),nt=o.n(at),st=function(){var e=r.a.useContext(j).tableState,t=r.a.useState(),o=Object(l.a)(t,2),c=o[0],a=o[1],n=r.a.useState(!1),i=Object(l.a)(n,2),u=i[0],b=i[1];r.a.useEffect((function(){e.selectionState.start&&e.selectionState.end&&a(function(e,t){var o=A(e,t),c=document.getElementById("col-".concat(o.row.min,"-").concat(o.col.min));return c?{top:c.offsetTop+5,left:c.offsetLeft+5}:{top:0,left:0}}(e.selectionState.start,e.selectionState.end))}),[e]);return Object(G.jsxs)("div",{className:d()(nt.a.wrapper,Object(s.a)({},nt.a.selected,e.selectionState.selected&&e.selectionState.selectedCols.length>0)),style:c,children:[Object(G.jsx)(J,{onClick:function(){return b(!u)},className:nt.a.settingButton,children:Object(G.jsx)("img",{src:rt,alt:""})}),u&&Object(G.jsx)(p.a,{onOutsideClick:function(){u&&b(!1)},children:Object(G.jsxs)("ul",{className:nt.a.menu,children:[Object(G.jsx)(ze,{}),Object(G.jsx)(ct,{}),Object(G.jsx)(Xe,{}),Object(G.jsx)(Ze,{})]})})]})},lt=function(e,t){var o=e.map((function(e){var o,c,r=e.cols.map((function(e){return e.id>t?Object(O.a)(Object(O.a)(Object(O.a)({},e),{},{id:e.id+1},e.resources?{resources:e.resources.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{colId:e.colId+1})}))}:{}),e.resourceFor&&e.resourceFor.colId>t?{resourceFor:Object(O.a)(Object(O.a)({},e.resourceFor),{},{colId:e.resourceFor.colId+1})}:e.resourceFor):e})),a=r[t-1]&&r[t-1].resourceFor&&r[t]&&r[t].resourceFor&&(null===(o=r[t-1].resourceFor)||void 0===o?void 0:o.colId)===(null===(c=r[t].resourceFor)||void 0===c?void 0:c.colId),n=Object(O.a)(Object(O.a)(Object(O.a)({id:t+1},Be),r[t-1]&&r[t-1].colSpan?{display:!1,resourceFor:{rowId:e.id,colId:r[t-1].id}}:{}),a?{display:!1,resourceFor:r[t-1].resourceFor}:{});if(r[t-1]&&r[t-1].colSpan&&(r[t-1].colSpan+=1),a){var s=r[t-1].resourceFor;s&&r[s.colId-1]&&(r[s.colId-1].colSpan+=1)}return r.splice(t,0,n),Object(O.a)(Object(O.a)({},e),{},{cols:r})}));return o.forEach((function(e){e.cols.forEach((function(t){var c,r;(t.resources&&(o[e.id-1].cols[t.id-1].resources=[]),t.resourceFor)&&(null===(c=o[t.resourceFor.rowId-1].cols[t.resourceFor.colId-1])||void 0===c||null===(r=c.resources)||void 0===r||r.push({colId:t.id,rowId:e.id}))}))})),o},it=o(70),dt=o.n(it),ut=function(e){var t=e.colId,o=r.a.useContext(j),c=o.rowsState,a=o.dispatchRowsState;return Object(G.jsx)("div",{className:dt.a.wrapper,children:Object(G.jsx)("button",{className:dt.a.addButton,onClick:function(e){e.stopPropagation(),a(T.rowsUpdate({rows:lt(c,t)}))},children:"+"})})},pt=o.p+"static/media/close-circle.50ed0904.svg",jt=o(123),bt=o.n(jt),ft=function(e){var t=e.colId,o=e.setColSelected,c=r.a.useContext(j).dispatchRowsState;return Object(G.jsx)("button",{className:bt.a.wrapper,onClick:function(e){e.stopPropagation(),c(T.removeCol({colId:t})),o(!1)},children:Object(G.jsx)("img",{src:pt,alt:""})})},Ot=o(124),wt=o.n(Ot),St=function(e){var t=e.tableHeight,o=e.colId,a=r.a.useContext(j),n=a.rowsState,s=a.dispatchTableState,i=a.dispatchRowsState,d=Object(c.useState)(!1),u=Object(l.a)(d,2),p=u[0],b=u[1],f=Object(c.useState)(0),O=Object(l.a)(f,2),w=O[0],S=O[1],I=Object(c.useState)(0),v=Object(l.a)(I,2),h=v[0],m=v[1],x=Object(c.useState)(0),g=Object(l.a)(x,2),_=g[0],C=g[1],E=function(e){e.stopPropagation(),p&&(i(T.setColWidth({colId:o,width:w-_})),C(0),b(!1))};return n[0].cols.length===o?null:Object(G.jsx)("div",{onMouseDown:function(e){e.stopPropagation(),s(R.clearSelection()),b(!0),m(e.screenX+_)},onMouseUp:E,onMouseLeave:E,onMouseMove:function(e){e.stopPropagation(),p&&w-_>10&&C(h-e.screenX)},onClick:function(e){return e.stopPropagation()},ref:function(e){var t;return S((null===e||void 0===e||null===(t=e.closest("td"))||void 0===t?void 0:t.offsetWidth)||0)},className:wt.a.wrapper,style:{height:t,right:_}})},It=o(71),vt=o.n(It),ht=function(e){var t,o=e.colId,c=r.a.useContext(j),a=c.rowsState,n=c.dispatchTableState,s=r.a.useState(!1),i=Object(l.a)(s,2),d=i[0],u=i[1],b=r.a.useState(0),f=Object(l.a)(b,2),O=f[0],w=f[1];return Object(G.jsxs)("td",{ref:function(e){var t;return w(((null===e||void 0===e||null===(t=e.closest("table"))||void 0===t?void 0:t.offsetHeight)||0)-12)},onClick:function(){n(R.clearSelection()),u(!0)},className:vt.a.techCol,style:{width:a[0].cols.length>1?null===(t=a[0].cols[o-1])||void 0===t?void 0:t.width:"auto"},children:[Object(G.jsx)(ut,{colId:o}),Object(G.jsx)(St,{tableHeight:O,colId:o}),a[0].cols.length>1&&d&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("div",{className:vt.a.selectArea,style:{height:O}}),Object(G.jsx)(p.a,{onOutsideClick:function(){d&&u(!1)},children:Object(G.jsx)(ft,{colId:o,setColSelected:u})})]})]})},mt=function(){var e=r.a.useContext(j).rowsState,t=r.a.useState([]),o=Object(l.a)(t,2),c=o[0],a=o[1];return r.a.useEffect((function(){a(Array(function(e){var t=0;return e.forEach((function(e){e.cols.length>t&&(t=e.cols.length)})),t}(e)).fill({}).map((function(e,t){return Object(O.a)(Object(O.a)({},e),{},{id:t+1})})))}),[e]),e.length?Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{style:{width:10}}),c.map((function(e){return Object(G.jsx)(ht,{colId:e.id},e.id)}))]}):null},xt=o(52),gt=o.n(xt),_t=function(e){var t=e.onChange,o=r.a.useReducer(M,b),c=Object(l.a)(o,2),a=c[0],n=c[1],i=r.a.useReducer(D,f),u=Object(l.a)(i,2),O=u[0],w=u[1];r.a.useEffect((function(){t&&"function"===typeof t&&t(O)}),[O,t]);return Object(G.jsx)(j.Provider,{value:{dispatchTableState:n,tableState:a,rowsState:O,dispatchRowsState:w},children:Object(G.jsx)("div",{className:d()(gt.a.wrapper,"notranslate"),children:Object(G.jsxs)(p.a,{onOutsideClick:function(){a.selectionState.selected&&n(R.clearSelection())},children:[Object(G.jsx)("table",{className:d()(gt.a.table,Object(s.a)({},gt.a.filled,!!O.length)),children:Object(G.jsxs)("tbody",{children:[Object(G.jsx)(mt,{}),O.map((function(e){return Object(G.jsx)(Ve,{rowData:e},e.id)}))]})}),Object(G.jsx)(st,{})]})})})};var Ct=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(_t,{})})};n.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(Ct,{})}),document.getElementById("root"))},28:function(e,t,o){e.exports={wrapper:"Headers_wrapper__X7WTc",select:"Headers_select__1J-Af",openButton:"Headers_openButton__fmsxb",list:"Headers_list__33JR1",header:"Headers_header__pg6Cl"}},29:function(e,t,o){e.exports={wrapper:"Panel_wrapper__15ls_",separator:"Panel_separator__3uLZj"}},30:function(e,t,o){e.exports={wrapper:"ChangeBackground_wrapper__2Uwxj",colors:"ChangeBackground_colors__Je-TV",colorButton:"ChangeBackground_colorButton__2QEDl",transparent:"ChangeBackground_transparent__mqomV"}},35:function(e,t,o){e.exports={wrapper:"Button_wrapper__pj90c",active:"Button_active__FWtIw",disabled:"Button_disabled__1AAMG",small:"Button_small__2T4PP"}},36:function(e,t,o){e.exports={wrapper:"ChangeType_wrapper__1P-DQ",types:"ChangeType_types__bLLj_",icon:"ChangeType_icon__1EOsa"}},37:function(e,t,o){e.exports={wrapper:"SelectionMenu_wrapper__2E3fb",selected:"SelectionMenu_selected__1dW4V",settingButton:"SelectionMenu_settingButton__2RZd1",menu:"SelectionMenu_menu__3_fZg"}},51:function(e,t,o){e.exports={wrapper:"Col_wrapper__3FddR",selected:"Col_selected__29n3t",editMode:"Col_editMode__3GAwp"}},52:function(e,t,o){e.exports={wrapper:"Table_wrapper__2oJSk",table:"Table_table__3Cw9e",filled:"Table_filled__wq5i1"}},66:function(e,t,o){e.exports={wrapper:"Image_wrapper__1UzAe",opened:"Image_opened__2scOB"}},67:function(e,t,o){e.exports={wrapper:"Text_wrapper__2zOXf",editMode:"Text_editMode__2BkYq"}},68:function(e,t,o){e.exports={wrapper:"AddRow_wrapper__3NW4Q",addButton:"AddRow_addButton__1hGob"}},69:function(e,t,o){e.exports={techCol:"Row_techCol__HSNZB",active:"Row_active__1oG0c",selectArea:"Row_selectArea__X8N3B",blinker:"Row_blinker__6_-6l"}},70:function(e,t,o){e.exports={wrapper:"AddCol_wrapper__OkM3j",addButton:"AddCol_addButton__2VG6f"}},71:function(e,t,o){e.exports={techCol:"TechCol_techCol__3-ePx",selectArea:"TechCol_selectArea__1hdFm",blinker:"TechCol_blinker__3LS_s"}}},[[245,1,2]]]);
//# sourceMappingURL=main.c4e5c4b1.chunk.js.map