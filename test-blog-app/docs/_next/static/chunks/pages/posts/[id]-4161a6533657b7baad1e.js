_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"HaE+":function(n,t,e){"use strict";function r(n,t,e,r,o,u,a){try{var s=n[u](a),i=s.value}catch(c){return void e(c)}s.done?t(i):Promise.resolve(i).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var a=n.apply(t,e);function s(n){r(a,o,u,s,i,"next",n)}function i(n){r(a,o,u,s,i,"throw",n)}s(void 0)}))}}e.d(t,"a",(function(){return o}))},u7QL:function(n,t,e){"use strict";e.r(t);var r=e("o0o1"),o=e.n(r),u=e("HaE+"),a=e("h4VS"),s=e("nOHt"),i=e("/MKj"),c=e("hcB2"),l=e("YG6n"),d=e("q1tI"),p=e.n(d),f=e("5KpL"),y=e("/8qk"),b=e("l40F"),v=e("aBMD"),P=e("YFqc"),h=e.n(P),w=e("vOnD"),m=p.a.createElement;function x(){var n=Object(a.a)(["\n    display: block;\n    position: center;\n    font-family: Roboto;\n"]);return x=function(){return n},n}function g(){var n=Object(a.a)(["\n    font-size: 18px;\n    text-decoration: none;\n    padding: 10px 0 0 0;\n"]);return g=function(){return n},n}function q(){var n=Object(a.a)(["\n        font-size: 25px;\n        text-shadow: 0 0 5px black;\n        border-bottom: 2px solid black; \n        padding: 20px 0 10px 0;\n"]);return q=function(){return n},n}var E=function(n){var t,e=Object(s.useRouter)();console.log(e);var r=n.fetchedPost||n.ssrPost;return Object(d.useEffect)((function(){if(!r&&!n.errorType.errorQueryPost&&e.query.id){var t=Array.isArray(e.query.id)?e.query.id[0]:e.query.id;n.requestedPost(t)}return function(){n.setPost(null),n.setReceivedPostError(!1)}}),[e.query.id]),m(v.a,{title:"Post page"},!r&&m("div",null,"is loading"),m(b.a,null,!r&&!n.errorType.errorQueryPost&&m("h2",null,"loading..."),!r&&n.errorType.errorQueryPost&&m("p",null,m("p",null,"Please, ",m(h.a,{href:"/"},m("a",null,"go back to safety"))),m("span",null,"| Looks like queried post doesn't exist")),r&&!n.errorType.errorQueryPost&&m(p.a.Fragment,null,m(_,null,m(k,null,"title: ",r.title),m(O,null,r.body),m("hr",null),m(O,null,"Comments:"),m("ul",null,(null===(t=r.comments)||void 0===t?void 0:t.length)?r.comments.map((function(n){return m("li",{key:n.id},"user".concat(n.id,": ").concat(n.body))})):m("li",null,"No comments yet"))))))},k=w.a.h2(q()),O=w.a.p(g()),_=w.a.div(x());E.getInitialProps=function(){var n=Object(u.a)(o.a.mark((function n(t){var e,r,u,a,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.req,r=t.query,e){n.next=3;break}return n.abrupt("return",{ssrPost:null});case 3:return n.prev=3,u=r.id,n.next=7,f.a.getPostQuery(u);case 7:return a=n.sent,s=Object(y.a)(a.data)?a.data:null,n.abrupt("return",{ssrPost:s});case 12:return n.prev=12,n.t0=n.catch(3),console.log(n.t0),n.abrupt("return",{ssrPost:null});case 16:case"end":return n.stop()}}),n,null,[[3,12]])})));return function(t){return n.apply(this,arguments)}}();var j=Object(i.b)((function(n){return{fetchedPost:Object(l.c)(n),errorType:Object(l.b)(n)}}),{requestedPost:c.b,setPost:c.f,setReceivedPostError:c.g})(E);t.default=j},wyEa:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return e("u7QL")}])}},[["wyEa",1,2,0,3,4]]]);