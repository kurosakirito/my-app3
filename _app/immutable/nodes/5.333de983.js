import{r as Ae,s as He,f as Se,n as le,c as Ne,i as De,h as se}from"../chunks/scheduler.cbf234a0.js";import{d as Pe,S as Le,i as Oe,g as M,s as P,e as re,C as Xe,h as W,f as g,c as L,y as Q,j as H,k as v,D as G,A as S,a as T,B as ee,m as N,n as D,l as R,o as te,E as Ce,F as Te}from"../chunks/index.200976ee.js";import{p as ze}from"../chunks/parse.bee59afc.js";import{j as Fe,k as Ie}from"../chunks/singletons.c620fa5d.js";import{r as qe}from"../chunks/index.14349a18.js";const Be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function I(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Me(n,e){n.d(1),e.delete(n.key)}function We(n,e,t,a,r,o,s,l,u,b,h,p){let m=n.length,f=o.length,c=m;const i={};for(;c--;)i[n[c].key]=c;const _=[],C=new Map,y=new Map,A=[];for(c=f;c--;){const k=p(r,o,c),E=t(k);let d=s.get(E);d?a&&A.push(()=>d.p(k,e)):(d=b(E,k),d.c()),C.set(E,_[c]=d),E in i&&y.set(E,Math.abs(c-i[E]))}const X=new Set,F=new Set;function O(k){Pe(k,1),k.m(l,h),s.set(k.key,k),h=k.first,f--}for(;m&&f;){const k=_[f-1],E=n[m-1],d=k.key,w=E.key;k===E?(h=k.first,m--,f--):C.has(w)?!s.has(d)||X.has(d)?O(k):F.has(w)?m--:y.get(d)>y.get(w)?(F.add(d),O(k)):(X.add(w),m--):(u(E,s),m--)}for(;m--;){const k=n[m];C.has(k.key)||u(k,s)}for(;f;)O(_[f-1]);return Ae(A),_}const Ve=(n,e={})=>{de(e);let{colors:t=["#FFC700","#FF0000","#2E3191","#41BBC7"],duration:a=3500,force:r=.5,particleCount:o=150,particleShape:s="mix",particleSize:l=12,destroyAfterDone:u=!0,stageHeight:b=800,stageWidth:h=1600}=e;(function(i){const _=Y("style");_.dataset.neoconfetti="",_.textContent='@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}',Z(document.head,_)})(),n.classList.add("fk9XWG_container"),n.style.setProperty("--stage-height",b+"px");let p,m=fe(o,t),f=ie(n,m);function c(i,_){const C=V(z()*(Ke-1)),y=s!=="rectangles"&&(s==="circles"||Qe(C)),A=(O,k)=>i.style.setProperty(O,k+"");A("--x-landing-point",J(U(ue(_,90)-180),0,180,-h/2,h/2)+"px"),A("--duration-chaos",a-V(1e3*z())+"ms");const X=z()<xe?q(z()*Re,2):0;A("--x1",X),A("--x2",-1*X),A("--x3",X),A("--x4",q(U(J(U(ue(_,90)-180),0,180,-1,1)),4)),A("--y1",q(z()*ce,4)),A("--y2",q(z()*r*(je()?1:-1),4)),A("--y3",ce),A("--y4",q(Je(J(U(_-180),0,180,r,-r),0),4)),A("--width",(y?l:V(4*z())+l/2)+"px"),A("--height",(y?l:V(2*z())+l)+"px");const F=C.toString(2).padStart(3,"0").split("");A("--half-rotation",F.map(O=>+O/2+"")),A("--rotation",F),A("--rotation-duration",q(z()*(Ue-oe)+oe)+"ms"),A("--border-radius",y?"50%":0)}for(const[i,_]of Object.entries(f))c(_,m[+i].degree);return Promise.resolve().then(()=>p=setTimeout(()=>u&&(n.innerHTML=""),a)),{update(i){de(i);const _=i.particleCount??o,C=i.colors??t,y=i.stageHeight??b;if(m=fe(_,C),_===o&&JSON.stringify(t)!==JSON.stringify(C))for(const[A,{color:X}]of Object.entries(m))f[+A].style.setProperty("--bgcolor",X);_!==o&&(n.innerHTML="",f=ie(n,m)),u&&!i.destroyAfterDone&&clearTimeout(p),n.style.setProperty("--stage-height",y+"px"),t=C,a=i.duration??a,r=i.force??r,o=_,s=i.particleShape??s,l=i.particleSize??l,u=i.destroyAfterDone??u,b=y,h=i.stageWidth??h},destroy(){clearTimeout(p)}}};function ie(n,e=[]){const t=[];for(const{color:a}of e){const r=Y("div");r.className="fk9XWG_particle",r.style.setProperty("--bgcolor",a);const o=Y("div");Z(r,o),Z(n,r),t.push(r)}return t}const oe=200,Ue=800,xe=.1,Re=.3,ce=.5,U=Math.abs,z=Math.random,V=Math.round,Je=Math.max,Y=n=>document.createElement(n),Z=(n,e)=>n.appendChild(e),fe=(n,e)=>Array.from({length:n},(t,a)=>({color:e[a%e.length],degree:360*a/n})),q=(n,e=2)=>V((n+Number.EPSILON)*10**e)/10**e,J=(n,e,t,a,r)=>(n-e)*(r-a)/(t-e)+a,ue=(n,e)=>n+e>360?n+e-360:n+e,je=()=>z()>.5,Ke=6,Qe=n=>n!==1&&je(),$=n=>n===void 0,B=(n,e)=>{if(!$(n)&&Number.isSafeInteger(n)&&n<0)throw new Error(e+" must be a positive integer")},de=({particleCount:n,duration:e,colors:t,particleSize:a,force:r,stageHeight:o,stageWidth:s,particleShape:l})=>{if(B(n,"particleCount"),B(e,"duration"),B(a,"particleSize"),B(r,"force"),B(o,"stageHeight"),B(s,"stageWidth"),!$(l)&&!/^(mix|circles|rectangles)$/i.test(l))throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');if(!$(t)&&!Array.isArray(t))throw new Error("colors must be an array of strings");if(r>1)throw new Error("force must be within 0 and 1")},Ye=Fe("invalidate_all");function Ze(n){return Ie.apply_action(n)}function $e(n){const e=JSON.parse(n);return e.data&&(e.data=ze(e.data)),e}function he(n){return HTMLElement.prototype.cloneNode.call(n)}function et(n,e=()=>{}){const t=async({action:r,result:o,reset:s=!0,invalidateAll:l=!0})=>{o.type==="success"&&(s&&HTMLFormElement.prototype.reset.call(n),l&&await Ye()),(location.origin+location.pathname===r.origin+r.pathname||o.type==="redirect"||o.type==="error")&&Ze(o)};async function a(r){var c,i,_,C;if(((c=r.submitter)!=null&&c.hasAttribute("formmethod")?r.submitter.formMethod:he(n).method)!=="post")return;r.preventDefault();const s=new URL((i=r.submitter)!=null&&i.hasAttribute("formaction")?r.submitter.formAction:he(n).action),l=new FormData(n),u=(_=r.submitter)==null?void 0:_.getAttribute("name");u&&l.append(u,((C=r.submitter)==null?void 0:C.getAttribute("value"))??"");const b=new AbortController;let h=!1;const m=await e({action:s,cancel:()=>h=!0,controller:b,get data(){return l},formData:l,get form(){return n},formElement:n,submitter:r.submitter})??t;if(h)return;let f;try{const y=await fetch(s,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:l,signal:b.signal});f=$e(await y.text()),f.type==="error"&&(f.status=y.status)}catch(y){if((y==null?void 0:y.name)==="AbortError")return;f={type:"error",error:y}}m({action:s,get data(){return l},formData:l,get form(){return n},formElement:n,update:y=>t({action:s,result:f,reset:y==null?void 0:y.reset,invalidateAll:y==null?void 0:y.invalidateAll}),result:f})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",a),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",a)}}}const Ge="(prefers-reduced-motion: reduce)",tt=()=>window.matchMedia(Ge).matches,nt=qe(tt(),n=>{{const e=a=>{n(a.matches)},t=window.matchMedia(Ge);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});const{document:K,window:at}=Be;function me(n,e,t){const a=n.slice();return a[11]=e[t],a}function _e(n,e,t){const a=n.slice();return a[14]=e[t],a}function pe(n,e,t){const a=n.slice();a[11]=e[t];const r=a[11]===a[4];return a[17]=r,a}function ge(n,e,t){var p,m;const a=n.slice();a[20]=e[t];const r=a[17]?a[3]:a[1].guesses[a[11]];a[21]=r;const o=(p=a[1].answers[a[11]])==null?void 0:p[a[20]];a[22]=o;const s=((m=a[21])==null?void 0:m[a[20]])??"";a[23]=s;const l=a[17]&&a[20]===a[21].length;a[24]=l;const u=a[22]==="x";a[25]=u;const b=a[22]==="c";a[26]=b;const h=a[22]==="_";return a[27]=h,a}function lt(n){let e;return{c(){e=N("empty")},l(t){e=D(t,"empty")},m(t,a){T(t,e,a)},d(t){t&&g(e)}}}function st(n){let e;return{c(){e=N("(absent)")},l(t){e=D(t,"(absent)")},m(t,a){T(t,e,a)},d(t){t&&g(e)}}}function rt(n){let e;return{c(){e=N("(present)")},l(t){e=D(t,"(present)")},m(t,a){T(t,e,a)},d(t){t&&g(e)}}}function it(n){let e;return{c(){e=N("(correct)")},l(t){e=D(t,"(correct)")},m(t,a){T(t,e,a)},d(t){t&&g(e)}}}function be(n,e){let t,a=e[23]+"",r,o,s,l,u,b,h;function p(c,i){return c[25]?it:c[26]?rt:c[27]?st:lt}let m=p(e),f=m(e);return{key:n,first:null,c(){t=M("div"),r=N(a),o=P(),s=M("span"),f.c(),l=P(),u=M("input"),this.h()},l(c){t=W(c,"DIV",{class:!0});var i=H(t);r=D(i,a),o=L(i),s=W(i,"SPAN",{class:!0});var _=H(s);f.l(_),_.forEach(g),l=L(i),u=W(i,"INPUT",{name:!0,type:!0}),i.forEach(g),this.h()},h(){v(s,"class","visually-hidden"),v(u,"name","guess"),u.disabled=b=!e[17],v(u,"type","hidden"),u.value=h=e[23],v(t,"class","letter svelte-1pg2j5l"),G(t,"exact",e[25]),G(t,"close",e[26]),G(t,"missing",e[27]),G(t,"selected",e[24]),this.first=t},m(c,i){T(c,t,i),S(t,r),S(t,o),S(t,s),f.m(s,null),S(t,l),S(t,u)},p(c,i){e=c,i&26&&a!==(a=e[23]+"")&&te(r,a),m!==(m=p(e))&&(f.d(1),f=m(e),f&&(f.c(),f.m(s,null))),i&16&&b!==(b=!e[17])&&(u.disabled=b),i&26&&h!==(h=e[23])&&(u.value=h),i&2&&G(t,"exact",e[25]),i&2&&G(t,"close",e[26]),i&2&&G(t,"missing",e[27]),i&26&&G(t,"selected",e[24])},d(c){c&&g(t),f.d()}}}function ye(n,e){let t,a,r=e[11]+1+"",o,s,l,u=[],b=new Map,h,p=I(Array.from(Array(5).keys()));const m=f=>f[20];for(let f=0;f<p.length;f+=1){let c=ge(e,p,f),i=m(c);b.set(i,u[f]=be(i,c))}return{key:n,first:null,c(){t=M("h2"),a=N("Row "),o=N(r),s=P(),l=M("div");for(let f=0;f<u.length;f+=1)u[f].c();h=P(),this.h()},l(f){t=W(f,"H2",{class:!0});var c=H(t);a=D(c,"Row "),o=D(c,r),c.forEach(g),s=L(f),l=W(f,"DIV",{class:!0});var i=H(l);for(let _=0;_<u.length;_+=1)u[_].l(i);h=L(i),i.forEach(g),this.h()},h(){v(t,"class","visually-hidden"),v(l,"class","row svelte-1pg2j5l"),G(l,"current",e[17]),this.first=t},m(f,c){T(f,t,c),S(t,a),S(t,o),T(f,s,c),T(f,l,c);for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(l,null);S(l,h)},p(f,c){e=f,c&26&&(p=I(Array.from(Array(5).keys())),u=We(u,c,m,1,e,p,b,l,Me,be,h,ge)),c&16&&G(l,"current",e[17])},d(f){f&&(g(t),g(s),g(l));for(let c=0;c<u.length;c+=1)u[c].d()}}}function ot(n){let e,t,a,r,o,s,l="back",u,b,h,p=I(["qwertyuiop","asdfghjkl","zxcvbnm"]),m=[];for(let f=0;f<3;f+=1)m[f]=ke(me(n,p,f));return{c(){e=M("div"),t=M("button"),a=N("enter"),o=P(),s=M("button"),s.textContent=l,u=P();for(let f=0;f<3;f+=1)m[f].c();this.h()},l(f){e=W(f,"DIV",{class:!0});var c=H(e);t=W(c,"BUTTON",{"data-key":!0,class:!0});var i=H(t);a=D(i,"enter"),i.forEach(g),o=L(c),s=W(c,"BUTTON",{"data-key":!0,formaction:!0,name:!0,class:!0,"data-svelte-h":!0}),Q(s)!=="svelte-1ptb1bp"&&(s.textContent=l),u=L(c);for(let _=0;_<3;_+=1)m[_].l(c);c.forEach(g),this.h()},h(){v(t,"data-key","enter"),t.disabled=r=!n[7],v(t,"class","svelte-1pg2j5l"),G(t,"selected",n[7]),v(s,"data-key","backspace"),v(s,"formaction","?/update"),v(s,"name","key"),s.value="backspace",v(s,"class","svelte-1pg2j5l"),v(e,"class","keyboard svelte-1pg2j5l")},m(f,c){T(f,e,c),S(e,t),S(t,a),S(e,o),S(e,s),S(e,u);for(let i=0;i<3;i+=1)m[i]&&m[i].m(e,null);b||(h=ee(s,"click",Ce(n[9])),b=!0)},p(f,c){if(c&128&&r!==(r=!f[7])&&(t.disabled=r),c&128&&G(t,"selected",f[7]),c&708){p=I(["qwertyuiop","asdfghjkl","zxcvbnm"]);let i;for(i=0;i<3;i+=1){const _=me(f,p,i);m[i]?m[i].p(_,c):(m[i]=ke(_),m[i].c(),m[i].m(e,null))}for(;i<3;i+=1)m[i].d(1)}},d(f){f&&g(e),Te(m,f),b=!1,h()}}}function ct(n){let e,t,a=n[5]?"you won :)":"game over :(",r,o,s=!n[5]&&n[1].answer&&we(n);return{c(){s&&s.c(),e=P(),t=M("button"),r=N(a),o=N(" play again?"),this.h()},l(l){s&&s.l(l),e=L(l),t=W(l,"BUTTON",{"data-key":!0,class:!0,formaction:!0});var u=H(t);r=D(u,a),o=D(u," play again?"),u.forEach(g),this.h()},h(){v(t,"data-key","enter"),v(t,"class","restart selected svelte-1pg2j5l"),v(t,"formaction","?/restart")},m(l,u){s&&s.m(l,u),T(l,e,u),T(l,t,u),S(t,r),S(t,o)},p(l,u){!l[5]&&l[1].answer?s?s.p(l,u):(s=we(l),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),u&32&&a!==(a=l[5]?"you won :)":"game over :(")&&te(r,a)},d(l){l&&(g(e),g(t)),s&&s.d(l)}}}function ve(n){let e,t,a,r,o,s;return{c(){e=M("button"),t=N(n[14]),this.h()},l(l){e=W(l,"BUTTON",{"data-key":!0,class:!0,formaction:!0,name:!0,"aria-label":!0});var u=H(e);t=D(u,n[14]),u.forEach(g),this.h()},h(){v(e,"data-key",n[14]),v(e,"class",a=se(n[2][n[14]])+" svelte-1pg2j5l"),e.disabled=n[7],v(e,"formaction","?/update"),v(e,"name","key"),e.value=n[14],v(e,"aria-label",r=n[14]+" "+(n[6][n[14]]||""))},m(l,u){T(l,e,u),S(e,t),o||(s=ee(e,"click",Ce(n[9])),o=!0)},p(l,u){u&4&&a!==(a=se(l[2][l[14]])+" svelte-1pg2j5l")&&v(e,"class",a),u&128&&(e.disabled=l[7]),u&64&&r!==(r=l[14]+" "+(l[6][l[14]]||""))&&v(e,"aria-label",r)},d(l){l&&g(e),o=!1,s()}}}function ke(n){let e,t,a=I(n[11]),r=[];for(let o=0;o<a.length;o+=1)r[o]=ve(_e(n,a,o));return{c(){e=M("div");for(let o=0;o<r.length;o+=1)r[o].c();t=P(),this.h()},l(o){e=W(o,"DIV",{class:!0});var s=H(e);for(let l=0;l<r.length;l+=1)r[l].l(s);t=L(s),s.forEach(g),this.h()},h(){v(e,"class","row svelte-1pg2j5l")},m(o,s){T(o,e,s);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);S(e,t)},p(o,s){if(s&708){a=I(o[11]);let l;for(l=0;l<a.length;l+=1){const u=_e(o,a,l);r[l]?r[l].p(u,s):(r[l]=ve(u),r[l].c(),r[l].m(e,t))}for(;l<r.length;l+=1)r[l].d(1);r.length=a.length}},d(o){o&&g(e),Te(r,o)}}}function we(n){let e,t,a=n[1].answer+"",r,o;return{c(){e=M("p"),t=N('the answer was "'),r=N(a),o=N('"')},l(s){e=W(s,"P",{});var l=H(e);t=D(l,'the answer was "'),r=D(l,a),o=D(l,'"'),l.forEach(g)},m(s,l){T(s,e,l),S(e,t),S(e,r),S(e,o)},p(s,l){l&2&&a!==(a=s[1].answer+"")&&te(r,a)},d(s){s&&g(e)}}}function Ee(n){let e,t,a,r;return{c(){e=M("div"),this.h()},l(o){e=W(o,"DIV",{style:!0}),H(e).forEach(g),this.h()},h(){R(e,"position","absolute"),R(e,"left","50%"),R(e,"top","30%")},m(o,s){T(o,e,s),a||(r=Se(t=Ve.call(null,e,{particleCount:n[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})),a=!0)},p(o,s){t&&De(t.update)&&s&256&&t.update.call(null,{particleCount:o[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})},d(o){o&&g(e),a=!1,r()}}}function ft(n){let e,t,a,r="Sverdle",o,s,l,u="How to play",b,h,p=[],m=new Map,f,c,i,_,C,y,A=I(Array.from(Array(6).keys()));const X=d=>d[11];for(let d=0;d<A.length;d+=1){let w=pe(n,A,d),j=X(w);m.set(j,p[d]=ye(j,w))}function F(d,w){return d[5]||d[1].answers.length>=6?ct:ot}let O=F(n),k=O(n),E=n[5]&&Ee(n);return{c(){e=M("meta"),t=P(),a=M("h1"),a.textContent=r,o=P(),s=M("form"),l=M("a"),l.textContent=u,b=P(),h=M("div");for(let d=0;d<p.length;d+=1)p[d].c();f=P(),c=M("div"),k.c(),i=P(),E&&E.c(),_=re(),this.h()},l(d){const w=Xe("svelte-18lvto8",K.head);e=W(w,"META",{name:!0,content:!0}),w.forEach(g),t=L(d),a=W(d,"H1",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-16hvqlg"&&(a.textContent=r),o=L(d),s=W(d,"FORM",{method:!0,action:!0,class:!0});var j=H(s);l=W(j,"A",{class:!0,href:!0,"data-svelte-h":!0}),Q(l)!=="svelte-1w3fhu3"&&(l.textContent=u),b=L(j),h=W(j,"DIV",{class:!0});var ne=H(h);for(let x=0;x<p.length;x+=1)p[x].l(ne);ne.forEach(g),f=L(j),c=W(j,"DIV",{class:!0});var ae=H(c);k.l(ae),ae.forEach(g),j.forEach(g),i=L(d),E&&E.l(d),_=re(),this.h()},h(){var d;K.title="Sverdle",v(e,"name","description"),v(e,"content","A Wordle clone written in SvelteKit"),v(a,"class","visually-hidden"),v(l,"class","how-to-play svelte-1pg2j5l"),v(l,"href","/sverdle/how-to-play"),v(h,"class","grid svelte-1pg2j5l"),G(h,"playing",!n[5]),G(h,"bad-guess",(d=n[0])==null?void 0:d.badGuess),v(c,"class","controls svelte-1pg2j5l"),v(s,"method","POST"),v(s,"action","?/enter"),v(s,"class","svelte-1pg2j5l")},m(d,w){S(K.head,e),T(d,t,w),T(d,a,w),T(d,o,w),T(d,s,w),S(s,l),S(s,b),S(s,h);for(let j=0;j<p.length;j+=1)p[j]&&p[j].m(h,null);S(s,f),S(s,c),k.m(c,null),T(d,i,w),E&&E.m(d,w),T(d,_,w),C||(y=[ee(at,"keydown",n[10]),Se(et.call(null,s,ut))],C=!0)},p(d,[w]){var j;w&26&&(A=I(Array.from(Array(6).keys())),p=We(p,w,X,1,d,A,m,h,Me,ye,null,pe)),w&32&&G(h,"playing",!d[5]),w&1&&G(h,"bad-guess",(j=d[0])==null?void 0:j.badGuess),O===(O=F(d))&&k?k.p(d,w):(k.d(1),k=O(d),k&&(k.c(),k.m(c,null))),d[5]?E?E.p(d,w):(E=Ee(d),E.c(),E.m(_.parentNode,_)):E&&(E.d(1),E=null)},i:le,o:le,d(d){d&&(g(t),g(a),g(o),g(s),g(i),g(_)),g(e);for(let w=0;w<p.length;w+=1)p[w].d();k.d(),E&&E.d(d),C=!1,Ae(y)}}}const ut=()=>({update:n})=>{n({reset:!1})};function dt(n,e,t){let a,r,o,s,l;Ne(n,nt,c=>t(8,l=c));let{data:u}=e,{form:b}=e,h,p;function m(c){const i=c.target.getAttribute("data-key");i==="backspace"?(t(3,o=o.slice(0,-1)),b!=null&&b.badGuess&&t(0,b.badGuess=!1,b)):o.length<5&&t(3,o+=i)}function f(c){var i;c.metaKey||c.key==="Enter"&&!s||(i=document.querySelector(`[data-key="${c.key}" i]`))==null||i.dispatchEvent(new MouseEvent("click",{cancelable:!0}))}return n.$$set=c=>{"data"in c&&t(1,u=c.data),"form"in c&&t(0,b=c.form)},n.$$.update=()=>{n.$$.dirty&2&&t(5,a=u.answers.at(-1)==="xxxxx"),n.$$.dirty&34&&t(4,r=a?-1:u.answers.length),n.$$.dirty&18&&t(3,o=u.guesses[r]||""),n.$$.dirty&8&&t(7,s=o.length===5),n.$$.dirty&6&&(t(2,h={}),t(6,p={}),u.answers.forEach((c,i)=>{const _=u.guesses[i];for(let C=0;C<5;C+=1){const y=_[C];c[C]==="x"?(t(2,h[y]="exact",h),t(6,p[y]="correct",p)):h[y]||(t(2,h[y]=c[C]==="c"?"close":"missing",h),t(6,p[y]=c[C]==="c"?"present":"absent",p))}}))},[b,u,h,o,r,a,p,s,l,m,f]}class bt extends Le{constructor(e){super(),Oe(this,e,dt,ft,He,{data:1,form:0})}}export{bt as component};
