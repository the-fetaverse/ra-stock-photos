(this.webpackJsonpstock_photos=this.webpackJsonpstock_photos||[]).push([[0],{16:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(8),a=c.n(r),o=(c(16),c(11)),i=c(7),l=c.n(i),u=c(3),j=c(9),h=c(4),b=c(10),p=c(0),d=function(e){var t=e.urls.regular,c=e.alt_description,n=e.likes,s=e.user,r=s.name,a=s.portfolio_url,o=s.profile_image.medium;return Object(p.jsxs)("article",{className:"photo",children:[Object(p.jsx)("img",{src:t,alt:c}),Object(p.jsxs)("div",{className:"photo-info",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:r}),Object(p.jsxs)("p",{children:[n," Likes"]})]}),Object(p.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:o,alt:r,className:"user-img"})})]})]})},O="?client_id=".concat("M6LgWPLyQrqAmUM_HpO98QOy8ujjnqqtM6xWe6hpqIQ");var f=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),a=Object(h.a)(r,2),i=a[0],f=a[1],m=Object(n.useState)(0),x=Object(h.a)(m,2),v=x[0],g=x[1],w=Object(n.useState)(""),k=Object(h.a)(w,2),N=k[0],y=k[1],_=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),c="&page=".concat(v),n="&query=".concat(N),t=N?"".concat("https://api.unsplash.com/search/photos/").concat(O).concat(c).concat(n):"".concat("https://api.unsplash.com/photos/").concat(O).concat(c),e.prev=4,e.next=7,fetch(t);case 7:return r=e.sent,e.next=10,r.json();case 10:a=e.sent,f((function(e){return N&&1===v?a.results:[].concat(Object(u.a)(e),N?Object(u.a)(a.results):Object(u.a)(a))})),s(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),s(!1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){_()}),[v]),Object(n.useEffect)((function(){var e=window.addEventListener("scroll",(function(){!c&&window.innerHeight+window.scrollY>=document.body.scrollHeight-2&&g((function(e){return e+1}))}));return function(){return window.removeEventListener("scroll",e)}}),[]),Object(p.jsxs)("main",{children:[Object(p.jsx)("section",{className:"serach",children:Object(p.jsxs)("form",{className:"search-form",children:[Object(p.jsx)("input",{type:"text",placeholder:"search",className:"form-input",value:N,onChange:function(e){return y(e.target.value)}}),Object(p.jsx)("button",{type:"submit",className:"submit-btn",onClick:function(e){e.preventDefault(),g(1)},children:Object(p.jsx)(b.a,{})})]})}),Object(p.jsxs)("section",{className:"photos",children:[Object(p.jsx)("div",{className:"photos-center",children:i.map((function(e){return Object(p.jsx)(d,Object(o.a)({},e),e.id)}))}),c&&Object(p.jsx)("h2",{className:"loading",children:"Loading..."})]})]})};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.05e50a54.chunk.js.map