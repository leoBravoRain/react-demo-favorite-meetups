(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(e,t,n){e.exports={item:"MeetupItem_item__16n8F",image:"MeetupItem_image__1NY8N",content:"MeetupItem_content__3JjUt",actions:"MeetupItem_actions__i7I9f"}},13:function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",active:"MainNavigation_active__oN3Ka",badge:"MainNavigation_badge__QYsXO"}},18:function(e,t,n){e.exports={list:"MeetupList_list__3WMaa"}},19:function(e,t,n){e.exports={card:"Card_card__3_jzl"}},22:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},27:function(e,t,n){},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(17),r=n.n(i),a=(n(27),n.p,n(28),n(2)),s=n(11),o=n(18),d=n.n(o),j=n(12),l=n.n(j),u=n(19),b=n.n(u),h=n(0);var O=function(e){return Object(h.jsx)("div",{className:b.a.card,children:e.children})},x=Object(c.createContext)({favorites:[],totalFavorites:0,addFavoriteHandler:function(e){},removeFavoriteHandler:function(e){},itemIsFavoriteHanlder:function(e){}});function m(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),i=n[0],r=n[1];var a={favorites:i,totalFavorites:i.length,addFavoriteHandler:function(e){r((function(t){return t.concat(e)}))},removeFavoriteHandler:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavoriteHanlder:function(e){return i.some((function(t){return t.id===e}))}};return Object(h.jsx)(x.Provider,{value:a,children:e.children})}var p=x;var v=function(e){var t=Object(c.useContext)(p),n=t.itemIsFavoriteHanlder(e.id);return Object(h.jsx)("li",{className:l.a.item,children:Object(h.jsxs)(O,{children:[Object(h.jsx)("div",{className:l.a.image,children:Object(h.jsx)("img",{src:e.image,alt:e.title})}),Object(h.jsxs)("div",{className:l.a.content,children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsx)("address",{children:e.address}),Object(h.jsx)("p",{children:e.description})]}),Object(h.jsx)("div",{className:l.a.actions,children:Object(h.jsx)("button",{onClick:function(){n?t.removeFavoriteHandler(e.id):t.addFavoriteHandler({id:e.id,title:e.title,image:e.image,address:e.address,description:e.description})},children:n?"Remove favorites":"To Favorites"})})]})})};var f=function(e){return Object(h.jsx)("ul",{className:d.a.list,children:e.meetups.map((function(e){return Object(h.jsx)(v,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var _=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),a=Object(s.a)(r,2),o=a[0],d=a[1];return Object(c.useEffect)((function(){i(!0),fetch("http://localhost:3001/meetups").then((function(e){return e.json()})).then((function(e){i(!1),d(e)}))}),[]),Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"All meetups page"}),n?Object(h.jsx)("div",{children:"Loading ... "}):Object(h.jsx)(f,{meetups:o})]})},g=n(9),N=n.n(g);var F=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useRef)(),r=Object(c.useRef)();return Object(h.jsx)(O,{children:Object(h.jsxs)("form",{className:N.a.form,onSubmit:function(c){c.preventDefault();var a={title:t.current.value,image:n.current.value,enteredAddress:i.current.value,description:r.current.value};e.onAddMeetup(a)},children:[Object(h.jsxs)("div",{className:N.a.control,children:[Object(h.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(h.jsx)("input",{type:"text",required:!0,id:"'title",ref:t})]}),Object(h.jsxs)("div",{className:N.a.control,children:[Object(h.jsx)("label",{htmlFor:"image",children:"Meetup image"}),Object(h.jsx)("input",{type:"url",required:!0,id:"'image",ref:n})]}),Object(h.jsxs)("div",{className:N.a.control,children:[Object(h.jsx)("label",{htmlFor:"address",children:"Meetup address"}),Object(h.jsx)("input",{type:"text",required:!0,id:"'address",ref:i})]}),Object(h.jsxs)("div",{className:N.a.control,children:[Object(h.jsx)("label",{htmlFor:"description",children:"Meetup description"}),Object(h.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:r})]}),Object(h.jsx)("div",{className:N.a.actions,children:Object(h.jsx)("button",{children:"Add Meetup"})})]})})};var M=function(){var e=Object(a.f)();return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"New meetup page"}),Object(h.jsx)(F,{onAddMeetup:function(t){fetch("http://localhost:3001/meetups",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var w=function(){var e,t=Object(c.useContext)(p);return e=0==t.totalFavorites?Object(h.jsx)("p",{children:"No favorites yet. Please add some?"}):Object(h.jsx)(f,{meetups:t.favorites}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"Favorites page"}),e]})},y=n(7),H=n(13),I=n.n(H);var C=function(){var e=Object(c.useContext)(p).totalFavorites;return Object(h.jsxs)("header",{className:I.a.header,children:[Object(h.jsx)("div",{className:I.a.logo,children:"Meetup"}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:"/",children:"All meetups"})}),Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:"/new-meetup",children:"New meetup"})}),Object(h.jsx)("li",{children:Object(h.jsxs)(y.b,{to:"/favorites",children:["Favorites",e>0&&Object(h.jsx)("span",{className:I.a.badge,children:e})]})})]})})]})},A=n(22),S=n.n(A);var R=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{}),Object(h.jsx)("main",{className:S.a.main,children:e.children})]})};var T=function(){return Object(h.jsx)(R,{children:Object(h.jsxs)(a.c,{children:[Object(h.jsx)(a.a,{path:"/",exact:!0,children:Object(h.jsx)(_,{})}),Object(h.jsx)(a.a,{path:"/new-meetup",children:Object(h.jsx)(M,{})}),Object(h.jsx)(a.a,{path:"/favorites",children:Object(h.jsx)(w,{})})]})})};r.a.render(Object(h.jsx)(m,{children:Object(h.jsx)(y.a,{children:Object(h.jsx)(T,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"NewMeetupForm_form__1Qsl3",control:"NewMeetupForm_control__xuwh5",actions:"NewMeetupForm_actions__tMvWn"}}},[[38,1,2]]]);
//# sourceMappingURL=main.e0aa1351.chunk.js.map