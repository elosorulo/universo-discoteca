(this["webpackJsonpuniverso-discoteca"]=this["webpackJsonpuniverso-discoteca"]||[]).push([[0],{27:function(n,e,t){n.exports=t.p+"static/media/1.6d0dacb8.jpg"},28:function(n,e,t){n.exports=t.p+"static/media/2.2fa7caa8.jpg"},29:function(n,e,t){n.exports=t.p+"static/media/3.765f1a8d.jpg"},30:function(n,e,t){n.exports=t.p+"static/media/4.5034b829.jpg"},31:function(n,e,t){n.exports=t.p+"static/media/5.00d277f0.jpg"},32:function(n,e,t){n.exports=t.p+"static/media/6.1bbff7a0.jpg"},33:function(n,e,t){n.exports=t.p+"static/media/universo-discoteca-sonido-entrega.6cb28cf9.mp3"},42:function(n,e,t){n.exports=t(64)},47:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),r=t(15),c=t.n(r),i=(t(47),t(4)),u=t(6),l=t(16),s=t(27),f=t.n(s),m=t(28),d=t.n(m),v=t(29),p=t.n(v),g=t(30),b=t.n(g),h=t(31),E=t.n(h),j=t(32),x=t.n(j),k=t(33),y=t.n(k),S=t(5),O=t(78),T=t(38),M=t.n(T),w=t(39),z=t.n(w),C=t(40),D=t.n(C),U=t(37),L=t.n(U);function I(){var n=Object(i.a)(["\n    top: auto;\n    right: auto;\n"]);return I=function(){return n},n}function P(){var n=Object(i.a)(["\n    border-radius: 50%;\n    padding: 0.4rem 0.5rem;\n    border: 0.1vmax solid ",";\n    box-sizing: border-box;\n    &:focus {\n        outline:none !important;\n    };\n    -webkit-user-select: none; /* Safari */        \n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+/Edge */\n    user-select: none; /* Standard */\n    position: relative;\n    color: ",";\n    ","\n    ","\n    background: ",";\n    transition: ",";\n    position: absolute;\n    top: 5%;\n    right: 5%;\n    z-index: 5000;\n"]);return P=function(){return n},n}function B(){var n=Object(i.a)(["\n    margin-top: 30vh;\n"]);return B=function(){return n},n}function J(){var n=Object(i.a)(["\n    margin-top: 5vh;\n    font-size: 1.5em;\n    text-align: center;\n    color: ",";\n"]);return J=function(){return n},n}function V(){var n=Object(i.a)(["\n    margin-top: 5vh;\n    font-size: 3em;\n    text-align: center;\n    color: ",";\n"]);return V=function(){return n},n}function W(){var n=Object(i.a)(["\n    margin-top: 15vh;\n    font-size: 5em;\n    text-align: center;\n    color: ",";\n"]);return W=function(){return n},n}function A(){var n=Object(i.a)(["\n\n"]);return A=function(){return n},n}function F(){var n=Object(i.a)(["\n"]);return F=function(){return n},n}var $="hsla(255, 80%, 80%, 1)";var q=Object(S.a)(l.ParallaxLayer)(F()),G=(S.a.img(A()),function(n){return a.a.createElement(q,{factor:1,offset:n.index,speed:.5,style:{backgroundImage:"url(".concat(n.src,")"),backgroundSize:"contain",backgroundPosition:"center"}})}),H=null,K=S.a.h1(W(),$),N=S.a.h1(V(),$),Q=S.a.h1(J(),$),R=S.a.div(B()),X=function(){var n=a.a.useState(new Audio(y.a)),e=Object(u.a)(n,1)[0],t=a.a.useState(!1),o=Object(u.a)(t,2),r=o[0],c=o[1],i=a.a.useState(!1),l=Object(u.a)(i,2),s=l[0],f=l[1],m=a.a.useState(!1),d=Object(u.a)(m,2),v=d[0],p=d[1],g=function(){var n=e.play();void 0!==n&&n.catch((function(n){console.error("error triggering play"),console.error(n),p(!0),c(!1)}))},b=function(n){return n?void window.setTimeout((function(){return g()}),100):g()};return a.a.useEffect((function(){r?b(s):e.pause()}),[r]),a.a.useEffect((function(){return e.addEventListener("ended",(function(){return c(!1)})),function(){e.removeEventListener("ended",(function(){return c(!1)}))}}),[]),[r,function(){c(!r)},s,f,v]},Y=S.a.button(P(),$,$,(function(n){return function(n){return n.active?"":"\n    @media (hover: hover) and (pointer: fine) {\n      &:hover {\n        ".concat("transform:scale(1.05, 1.05)","\n      }\n    }\n  ")}(n)}),(function(n){return n.active?"transform:scale(0.95, 0.95);":""}),(function(n){return n.active?"hsla(255, 80%, 20%, 1);":"hsla(255, 80%, 10%, 1);"}),(function(n){return"background ".concat(n.active?0:.25,"s linear;")})),Z=function(){return a.a.createElement(O.a,{item:!0,xs:12},a.a.createElement(K,null,"Universo"),a.a.createElement(N,null,"Discoteca"),a.a.createElement(Q,null,"Manuel Strajman"))},_=function(n){var e=function(n){var e=a.a.useState(!1),t=Object(u.a)(e,2),o=t[0],r=t[1],c=a.a.useState(!1),i=Object(u.a)(c,2),l=i[0],s=i[1];return{onClick:function(e){void 0!==n.onClick&&n.onClick(e)},active:o&&!l,onTouchStart:function(e){e.preventDefault(),setTimeout((function(){l||r(!0)}),100),void 0!==n.onTouchStart&&n.onTouchStart()},onTouchEnd:function(e){e.preventDefault(),e.persist(),l||n.onClick(e),s(!1),r(!1),setTimeout((function(){return r(!1)}),100),void 0!==n.onTouchEnd&&n.onTouchEnd(e)},onTouchMove:function(e){e.preventDefault(),s(!0),r(!1),setTimeout((function(){return r(!1)}),100),void 0!==n.onTouchMove&&n.onTouchMove(e)},onTouchCancel:function(e){e.preventDefault(),r(!1),s(!1),setTimeout((function(){return r(!1)}),100),void 0!==n.onTouchCancel&&n.onTouchCancel(e)},onMouseDown:function(e){void 0!==n.onMouseDown&&n.onMouseDown(e),r(!0)},onMouseUp:function(e){void 0!==n.onMouseUp&&n.onMouseUp(e),r(!1)},onMouseLeave:function(e){void 0!==n.onMouseUp&&n.onMouseUp(e),r(!1)}}}(n);return a.a.createElement(Y,Object.assign({},n,e))},nn=Object(S.a)(_)(I()),en=function(n){return n.failed?a.a.createElement(nn,{onClick:n.play},a.a.createElement(L.a,{fontSize:"small",style:{color:$}})):a.a.createElement(M.a,{style:{color:$,fontSize:50}})},tn=function(n){return a.a.createElement(O.a,{container:!0,justify:"center"},a.a.createElement(O.a,{item:!0,xs:12,container:!0,justify:"center"},a.a.createElement(Z,null),a.a.createElement(O.a,{item:!0,xs:12,align:"center"},a.a.createElement(R,null,a.a.createElement(en,{play:n.play,failed:n.failed})))))},on=function(n){return a.a.createElement(_,{onClick:n.onClick,isVisible:n.isVisible},n.playing?a.a.createElement(z.a,{fontSize:"small",style:{color:$}}):a.a.createElement(D.a,{fontSize:"small",style:{color:$}}))},an=function(n){var e=[f.a,d.a,p.a,b.a,E.a,x.a],t=X(),o=Object(u.a)(t,5),r=o[0],c=o[1],i=o[2],s=o[3],m=o[4],v=function(n){void 0!==n&&n.preventDefault(),i||(r||c(),s(!0))};return a.a.createElement("div",{onScroll:function(n){return v(n)},onMouseMove:function(n){return v(n)}},a.a.createElement(on,{playing:r,onClick:function(n){n.preventDefault(),c()}}),a.a.createElement(l.Parallax,{pages:e.length+1,scrolling:!0,vertical:!0,ref:function(n){return H=n}},a.a.createElement(q,{speed:.05},a.a.createElement(tn,{failed:m,play:function(){H.scrollTo(1),c()}})),e.map((function(n,e){return a.a.createElement(G,{src:n,key:e+1,index:e+1})}))))};var rn=function(){return a.a.createElement(an,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(rn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.1782f510.chunk.js.map