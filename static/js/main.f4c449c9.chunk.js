(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],{10:function(e,t,a){e.exports={navlink:"Header_navlink__21Eao",active:"Header_active__1dmn0",arrow:"Header_arrow__2M442",navbar:"Header_navbar__2UxIr",errorImg:"Header_errorImg__1Bt2y",errorPage:"Header_errorPage__3IaH1"}},13:function(e,t,a){e.exports={btn:"Affairs_btn__2fsK5",hw2:"Affairs_hw2__1gonf",affair:"Affairs_affair__179X1",red:"Affairs_red__2Rwj5",yellow:"Affairs_yellow__7Ir_n",green:"Affairs_green__2qh3J",activeBtn:"Affairs_activeBtn__23e1j"}},18:function(e,t,a){e.exports={messageComponent:"Message_messageComponent__2ZeUJ",img:"Message_img__2hw3a",messageBox:"Message_messageBox__KdDBl",message:"Message_message__8WR15",time:"Message_time__HOFTG",name:"Message_name__Tzmp0",mesAll:"Message_mesAll__2OW7g",tail:"Message_tail__sQC4c"}},24:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3XH9u",input:"SuperInputText_input__1P_Mf",divInput:"SuperInputText_divInput__10VI4",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},28:function(e,t,a){e.exports={greeting:"Greeting_greeting__21ydZ",errorMessage:"Greeting_errorMessage__zEoF5",error:"Greeting_error__1uvQ8",btn:"Greeting_btn__1zEPl"}},36:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch",label:"SuperCheckbox_label__kF06l"}},37:function(e,t,a){e.exports={divSpan:"SuperEditableSpan_divSpan__1rETp",input:"SuperEditableSpan_input__1o4dc",span:"SuperEditableSpan_span__TqnG3"}},38:function(e,t,a){e.exports={select:"SuperSelect_select__3fEsa",option:"SuperSelect_option__33I2a"}},39:function(e,t,a){e.exports={dark:"HW12_dark__-yEnK","dark-text":"HW12_dark-text__3aY9r",red:"HW12_red__b8fxn","red-text":"HW12_red-text__Xlm6C",blue:"HW12_blue__3Q2SK","blue-text":"HW12_blue-text__1X9Mu",light:"HW12_light__2nYS2","light-text":"HW12_light-text__yCVdF"}},42:function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},43:function(e,t,a){e.exports={radio:"SuperRadio_radio__3l3uR",label:"SuperRadio_label__2lqMv"}},44:function(e,t,a){e.exports={wrapper:"HW10_wrapper__11Ivh",loading:"HW10_loading__2tkwm"}},58:function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},59:function(e,t,a){},60:function(e,t,a){e.exports={range:"SuperDoubleRange_range__3CsZO"}},73:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(21),s=a.n(r),i=(a(73),a(3)),o=a(20),l=a(10),j=a.n(l),u=a(0);var b=function(){return Object(u.jsxs)("div",{className:j.a.errorPage,children:[Object(u.jsx)("div",{children:"Sorry, this page does not exist. Try again!"}),Object(u.jsx)("img",{className:j.a.errorImg,src:"https://www.pngkit.com/png/full/930-9306497_4042x-graphics.png"})]})},d=a(5),h=a(18),O=a.n(h);var x=function(e){return Object(u.jsxs)("div",{className:O.a.messageComponent,children:[Object(u.jsx)("img",{className:O.a.img,src:e.avatar,alt:"avatar"}),Object(u.jsxs)("div",{className:O.a.mesAll,children:[Object(u.jsx)("div",{className:O.a.tail}),Object(u.jsxs)("div",{className:O.a.messageBox,children:[Object(u.jsx)("p",{className:O.a.name,children:e.name}),Object(u.jsx)("p",{className:O.a.message,children:e.message}),Object(u.jsx)("p",{className:O.a.time,children:e.time})]})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Some Name",g="some text",f="22:00";var v=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(x,{avatar:p,name:m,message:g,time:f}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},_=a(4),C=a(13),k=a.n(C);var y=function(e){return Object(u.jsxs)("div",{className:k.a.affair,children:[Object(u.jsx)("div",{children:e.affair.name}),Object(u.jsxs)("div",{className:function(){switch(e.affair.priority){case"high":return k.a.red;case"middle":return k.a.yellow;case"low":return k.a.green}}(),children:["[",e.affair.priority,"]"]}),Object(u.jsx)("button",{className:k.a.btn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(u.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),a=function(t){e.setFilter(t.currentTarget.value)},n=function(t){return k.a.btn+(e.filter===t?" ".concat(k.a.activeBtn):"")};return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{className:n("all"),onClick:a,value:"all",children:"All"}),Object(u.jsx)("button",{className:n("high"),onClick:a,value:"high",children:"High"}),Object(u.jsx)("button",{className:n("middle"),onClick:a,value:"middle",children:"Middle"}),Object(u.jsx)("button",{className:n("low"),onClick:a,value:"low",children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(n.useState)(w),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("all"),s=Object(_.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(u.jsxs)("div",{className:k.a.hw2,children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(N,{data:l,setFilter:o,filter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},I=a(23),T=a(28),E=a.n(T),H=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,c=e.error,r=e.totalUsers,s=c?E.a.error:"";return Object(u.jsxs)("div",{className:E.a.greeting,children:[Object(u.jsx)("input",{value:t,onChange:a,className:s,onKeyPress:function(e){"Enter"===e.key&&n()}}),Object(u.jsx)("button",{className:E.a.btn,onClick:n,children:"Add"}),Object(u.jsx)("span",{children:0===r?"no users yet":"".concat(r,1===r?" user added":" users added")}),Object(u.jsx)("span",{className:E.a.errorMessage,children:c})]})},A=function(e){var t=e.users,a=e.addUserCallback,c=Object(n.useState)(""),r=Object(_.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(""),l=Object(_.a)(o,2),j=l[0],b=l[1],d=t.length;return Object(u.jsx)(H,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;Number(t)||!t.trim()?(b(" Invalid name! "),i(t)):(i(t),b(""))},addUser:function(){if(j||""===s)b(" Invalid name! "),i("");else{var e=function(e){return e.split(" ").filter((function(e){return e.trim()})).map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")}(s);a(e),i(""),alert("Hello  ".concat(e,"!"))}},error:j,totalUsers:d})},M=a(113);var R=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(A,{users:a,addUserCallback:function(e){var t={_id:Object(M.a)(),name:e};c([t].concat(Object(I.a)(a)))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},B=a(7),W=a(24),L=a.n(W),P=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,l=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(L.a.error," ").concat(o||""),b="".concat(L.a.input," ").concat(r?L.a.errorInput:""," ").concat(L.a.superInput," ").concat(s||"");return Object(u.jsxs)("div",{className:L.a.divInput,children:[Object(u.jsx)("input",Object(i.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),c&&"Enter"===e.key&&c()},className:b},l)),r&&Object(u.jsx)("span",{className:j,children:r})]})},F=a(58),G=a.n(F),J=a(42),U=a.n(J),D=function(e){var t=e.red,a=e.className,n=Object(B.a)(e,["red","className"]),c="".concat(t?U.a.red:""," ").concat(U.a.default," ").concat(a);return Object(u.jsx)("button",Object(i.a)({className:c},n))},K=a(36),X=a.n(K),q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),r=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(n||"");return Object(u.jsxs)("label",{className:X.a.label,children:[Object(u.jsx)("input",Object(i.a)({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:s},r)),c&&Object(u.jsx)("span",{className:X.a.spanClassName,children:c})]})};var z=function(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=a?"":"Could not be empty!",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(_.a)(i,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:G.a.column,children:[Object(u.jsx)(P,{value:a,onChangeText:c,onEnter:s,error:r}),Object(u.jsx)(P,{}),Object(u.jsx)(D,{children:"default"}),Object(u.jsx)(D,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(D,{disabled:!0,children:"disabled"}),Object(u.jsx)(q,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(q,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},Z=a(37),Q=a.n(Z),V=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,c=e.spanProps,r=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),o=Object(_.a)(s,2),l=o[0],j=o[1],b=c||{},d=b.children,h=b.onDoubleClick,O=b.className,x=Object(B.a)(b,["children","onDoubleClick","className"]),p="".concat(Q.a.span," ").concat(O);return Object(u.jsx)("div",{className:Q.a.divSpan,children:l?Object(u.jsx)(P,Object(i.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),a&&a()},className:Q.a.input},r)):Object(u.jsxs)("span",Object(i.a)(Object(i.a)({onDoubleClick:function(e){j(!0),h&&h(e)},className:p},x),{},{children:["\u270e ",d||r.value]}))})};var Y=function(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsx)("div",{children:Object(u.jsx)(V,{value:a,onChangeText:c,spanProps:{children:a?void 0:"enter text..."}})}),Object(u.jsx)(D,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("editable-span-value",a)},children:"save"}),Object(u.jsx)(D,{onClick:function(){var e=function(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}("editable-span-value","");c(e)},children:"restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var $=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{}),Object(u.jsx)(S,{}),Object(u.jsx)(R,{}),Object(u.jsx)(z,{}),Object(u.jsx)(Y,{})]})},ee=a(38),te=a.n(ee),ae=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,c=e.className,r=Object(B.a)(e,["options","onChange","onChangeOption","className"]),s=t?t.map((function(e,t){return Object(u.jsx)("option",{className:te.a.option,children:e},e+"-"+t)})):[],o=te.a.select+(c?" "+c:"");return Object(u.jsx)("select",Object(i.a)(Object(i.a)({className:o,onChange:function(e){a&&a(e),n&&n(e.currentTarget.value),o+=" ".concat(te.a.onBlur)}},r),{},{children:s}))},ne=a(43),ce=a.n(ne),re=function(e){e.type;var t=e.name,a=e.options,n=e.value,c=e.onChange,r=e.onChangeOption,s=e.className,o=Object(B.a)(e,["type","name","options","value","onChange","onChangeOption","className"]),l=function(e){c&&c(e),r&&r(e.currentTarget.value)},j=a?a.map((function(e,a){return Object(u.jsxs)("label",{className:ce.a.label+(s?" "+s:""),children:[Object(u.jsx)("input",Object(i.a)({type:"radio",name:t,value:e,checked:e===n,onChange:l,className:ce.a.radio+(s?" "+s:"")},o)),e]},t+"-"+a)})):[];return Object(u.jsx)(u.Fragment,{children:j})},se=["x","y","z"];var ie=function(){var e=Object(n.useState)(se[1]),t=Object(_.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 7",Object(u.jsx)("div",{style:{margin:"10px 20px"},children:Object(u.jsx)(ae,{options:se,value:a,onChangeOption:c})}),Object(u.jsx)("div",{style:{margin:"30px 12px"},children:Object(u.jsx)(re,{name:"radio",options:se,value:a,onChangeOption:c})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},oe=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(I.a)(e).sort((function(e,t){return e.name>t.name?1:-1})):Object(I.a)(e).sort((function(e,t){return e.name<t.name?1:-1}));case"check":return Object(I.a)(e).filter((function(e){return e.age>t.payload}));default:return e}},le=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var je=function(){var e=Object(n.useState)(le),t=Object(_.a)(e,2),a=t[0],c=t[1],r={display:"flex",justifyContent:"space-between",width:"300px",margin:"3px",padding:"5px",borderBottom:"1px dashed grey"},s=a.map((function(e){return Object(u.jsxs)("div",{style:r,children:[Object(u.jsx)("span",{children:e.name})," ",Object(u.jsx)("span",{children:e.age})]},e._id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 8",Object(u.jsx)("div",{style:{margin:"5px 10px",padding:"5px"},children:s}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{children:Object(u.jsx)(D,{onClick:function(){return c(oe(le,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(u.jsx)("div",{children:Object(u.jsx)(D,{onClick:function(){return c(oe(le,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(u.jsx)("div",{children:Object(u.jsx)(D,{onClick:function(){return c(oe(le,{type:"check",payload:18}))},children:"check 18"})})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var ue=function(){var e=Object(n.useState)(0),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),s=Object(_.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(!1),j=Object(_.a)(l,2),b=j[0],d=j[1],h=function(){clearInterval(a)},O=null===i||void 0===i?void 0:i.toLocaleTimeString(),x=null===i||void 0===i?void 0:i.toLocaleDateString(),p={display:"flex",height:"30px",width:"65px",margin:"0 60px",alignItems:"center",justifyContent:"center"};return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:p,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:O}),Object(u.jsx)("div",{style:p,children:b&&x}),Object(u.jsx)(D,{onClick:function(){h();var e=+setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(u.jsx)(D,{onClick:h,children:"stop"})]})};var be=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 9",Object(u.jsx)(ue,{}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},de=a(16),he={isLoading:!1},Oe=function(e){return{type:"SET-LOADING",loading:e}},xe=a(44),pe=a.n(xe);var me=function(){var e=Object(de.c)((function(e){return e.loading.isLoading})),t=Object(de.b)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 10",Object(u.jsx)("div",{className:pe.a.wrapper,children:e?Object(u.jsx)("img",{className:pe.a.loading,alt:"loading",src:"https://www.blackview.ru/upload/medialibrary/818/8187a44741ec1bc337686b53ce22cc10.gif"}):Object(u.jsx)(D,{onClick:function(){t(Oe(!0)),setTimeout((function(){t(Oe(!1))}),2e3),console.log("loading...")},children:"set loading..."})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},ge=a(59),fe=a.n(ge),ve=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,c=Object(B.a)(e,["type","onChange","onChangeRange","className"]),r="".concat(fe.a.range," ").concat(n||"");return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",Object(i.a)({type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value)},className:r,value:c.value},c))})},_e=a(60),Ce=a.n(_e),ke=a(112),ye=function(e){var t=e.onChangeRange,a=e.value,n=e.min,c=e.max,r=e.step,s=e.disabled,o=Object(B.a)(e,["onChangeRange","value","min","max","step","disabled"]);return Object(u.jsx)("div",{className:Ce.a.range,children:Object(u.jsx)(ke.a,Object(i.a)({value:a,onChange:function(e,a){t&&Array.isArray(a)&&t(a)},"aria-labelledby":"range-slider",valueLabelDisplay:"auto",min:n,max:c,step:r,disabled:s},o))})},Ne=a(33),we=function(){var e=Object(n.useState)([30,50]),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(Ne.a)({root:{color:"#9fc8d7",height:3,padding:"13px 0"},thumb:{height:15,width:15,backgroundColor:"#fff",border:"1px solid currentColor",marginTop:-6,marginLeft:-6,boxShadow:"#ebebeb 0 0 0","&:focus, &:hover, &$active":{boxShadow:"#ccc 0.5px 0.5px 3px"},"& .bar":{height:6,width:1.5,backgroundColor:"currentColor",marginLeft:1,marginRight:1}},active:{},track:{height:4},rail:{color:"#d8d8d8",opacity:1,height:4,borderRadius:7}})(ke.a);return Object(u.jsx)("div",{style:{width:300},children:Object(u.jsx)(r,{ThumbComponent:function(e){return Object(u.jsxs)("span",Object(i.a)(Object(i.a)({},e),{},{children:[Object(u.jsx)("span",{className:"bar"}),Object(u.jsx)("span",{className:"bar"}),Object(u.jsx)("span",{className:"bar"})]}))},getAriaLabel:function(e){return 0===e?"Minimum price":"Maximum price"},defaultValue:a,onChange:function(e,t){Array.isArray(t)&&c(t)}})})};var Se=function(){var e=Object(n.useState)(0),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(100),s=Object(_.a)(r,2),i=s[0],o=s[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 11",Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(u.jsx)("span",{style:{display:"inline-block",width:"30px"},children:a}),Object(u.jsx)(ve,{onChangeRange:c,value:a})]}),Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(u.jsx)("span",{style:{display:"inline-block",width:"30px"},children:a}),Object(u.jsx)(ye,{onChangeRange:function(e){return function(e){c(e[0]),o(e[1])}(e)},value:[a,i]}),Object(u.jsx)("span",{children:i})]}),Object(u.jsx)("hr",{}),Object(u.jsx)(we,{}),Object(u.jsx)("hr",{})]})},Ie=a(39),Te=a.n(Ie),Ee={currentTheme:""},He=["dark","light","red","blue","default"];var Ae=function(){var e=Object(de.c)((function(e){return e.theme.currentTheme})),t=Object(de.b)();return Object(u.jsxs)("div",{className:Te.a[e],children:[Object(u.jsx)("hr",{}),Object(u.jsx)("span",{style:{display:"block",margin:15},className:Te.a[e+"-text"],children:"homeworks 12"}),Object(u.jsx)(re,{options:He,onChangeOption:function(e){t(function(e){return{theme:e,type:"CHANGE-THEME"}}(e))},value:e,className:Te.a[e+"-text"]}),Object(u.jsx)("hr",{})]})};var Me=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(ie,{}),Object(u.jsx)(je,{}),Object(u.jsx)(be,{}),Object(u.jsx)(me,{}),Object(u.jsx)(Se,{}),Object(u.jsx)(Ae,{})]})},Re=a(65),Be=a.n(Re);var We=function(e){return Object(u.jsxs)("div",{children:["Request:",Object(u.jsx)("br",{}),e.request]})};var Le=function(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homework 13",Object(u.jsx)("hr",{}),Object(u.jsx)(q,{onChangeChecked:function(e){var t;(t=e,Be.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:t})).then((function(e){console.log("SUCCESS:"),console.log(e.data),c(JSON.stringify(e.data.errorText))})).catch((function(e){console.log("ERROR:"),console.log(e),c(JSON.stringify(e.message))}))}}),Object(u.jsx)(We,{request:a}),Object(u.jsx)("hr",{})]})};var Pe=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(Le,{})})},Fe="/pre-junior",Ge="/junior",Je="/junior-plus";var Ue=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(d.a,{to:Fe})}}),Object(u.jsx)(d.b,{path:Fe,render:function(){return Object(u.jsx)($,{})}}),Object(u.jsx)(d.b,{path:Ge,render:function(){return Object(u.jsx)(Me,{})}}),Object(u.jsx)(d.b,{path:Je,render:function(){return Object(u.jsx)(Pe,{})}}),Object(u.jsx)(d.b,{render:function(){return Object(u.jsx)(b,{})}})]})})};var De=function(){return Object(u.jsxs)("div",{className:j.a.navbar,children:[Object(u.jsx)(o.b,{to:Fe,className:j.a.navlink,activeClassName:j.a.active,children:"pre-junior"}),Object(u.jsx)(o.b,{to:Ge,className:j.a.navlink,activeClassName:j.a.active,children:"junior"}),Object(u.jsx)(o.b,{to:Je,className:j.a.navlink,activeClassName:j.a.active,children:"junior-plus"}),Object(u.jsx)("img",{src:"https://thypix.com/wp-content/uploads/blue-arrow-71.png",className:j.a.arrow})]})};var Ke=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(De,{}),Object(u.jsx)(Ue,{})]})})},Xe=a.p+"static/media/default.9a60e9ba.jpg",qe=a.p+"static/media/dark.a8fd1df1.png",ze=a.p+"static/media/light.3cdc09bc.jpg",Ze=a.p+"static/media/red.a9189a59.jpg",Qe=a.p+"static/media/blue.5f9e19d7.jpg";var Ve=function(){var e={backgroundImage:"url(".concat(Xe,")"),color:"#d9f1ed"};switch(Object(de.c)((function(e){return e.theme.currentTheme}))){case"dark":e=Object(i.a)(Object(i.a)({},e),{},{backgroundImage:"url(".concat(qe,")")});break;case"light":e=Object(i.a)(Object(i.a)({},e),{},{backgroundImage:"url(".concat(ze,")"),color:"#242828"});break;case"red":e=Object(i.a)(Object(i.a)({},e),{},{backgroundImage:"url(".concat(Ze,")")});break;case"blue":e=Object(i.a)(Object(i.a)({},e),{},{backgroundImage:"url(".concat(Qe,")")})}var t=Object(i.a)({padding:30,backgroundSize:"cover",minHeight:"100vh"},e);return Object(u.jsxs)("div",{style:t,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(Ke,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=a(48),$e=Object(Ye.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOADING":return Object(i.a)(Object(i.a)({},e),{},{isLoading:t.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return Object(i.a)(Object(i.a)({},e),{},{currentTheme:t.theme});default:return e}}}),et=Object(Ye.b)($e),tt=et;window.state=et.getState(),s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(de.a,{store:tt,children:Object(u.jsx)(Ve,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[99,1,2]]]);
//# sourceMappingURL=main.f4c449c9.chunk.js.map