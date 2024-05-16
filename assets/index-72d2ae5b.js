(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qs(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const oe={},on=[],Ae=()=>{},Tl=()=>!1,$r=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zs=t=>t.startsWith("onUpdate:"),fe=Object.assign,ei=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cl=Object.prototype.hasOwnProperty,G=(t,e)=>Cl.call(t,e),M=Array.isArray,an=t=>qn(t)==="[object Map]",Hr=t=>qn(t)==="[object Set]",Ni=t=>qn(t)==="[object Date]",j=t=>typeof t=="function",de=t=>typeof t=="string",it=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",da=t=>(se(t)||j(t))&&j(t.then)&&j(t.catch),ha=Object.prototype.toString,qn=t=>ha.call(t),Rl=t=>qn(t).slice(8,-1),pa=t=>qn(t)==="[object Object]",ti=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rn=Qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Al=/-(\w)/g,Ye=Vr(t=>t.replace(Al,(e,n)=>n?n.toUpperCase():"")),Pl=/\B([A-Z])/g,Xt=Vr(t=>t.replace(Pl,"-$1").toLowerCase()),jr=Vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),cs=Vr(t=>t?`on${jr(t)}`:""),Ot=(t,e)=>!Object.is(t,e),dr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ga=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ir=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ol=t=>{const e=de(t)?Number(t):NaN;return isNaN(e)?t:e};let Li;const ma=()=>Li||(Li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ni(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?Dl(r):ni(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(de(t)||se(t))return t}const kl=/;(?![^(]*\))/g,Nl=/:([^]+)/,Ll=/\/\*[^]*?\*\//g;function Dl(t){const e={};return t.replace(Ll,"").split(kl).forEach(n=>{if(n){const r=n.split(Nl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ri(t){let e="";if(de(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const r=ri(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ml="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xl=Qs(Ml);function _a(t){return!!t||t===""}function Ul(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Wr(t[r],e[r]);return n}function Wr(t,e){if(t===e)return!0;let n=Ni(t),r=Ni(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=it(t),r=it(e),n||r)return t===e;if(n=M(t),r=M(e),n||r)return n&&r?Ul(t,e):!1;if(n=se(t),r=se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(c&&!a||!c&&a||!Wr(t[o],e[o]))return!1}}return String(t)===String(e)}function Fl(t,e){return t.findIndex(n=>Wr(n,e))}const d_=t=>de(t)?t:t==null?"":M(t)||se(t)&&(t.toString===ha||!j(t.toString))?JSON.stringify(t,ya,2):String(t),ya=(t,e)=>e&&e.__v_isRef?ya(t,e.value):an(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ls(r,i)+" =>"]=s,n),{})}:Hr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ls(n))}:it(e)?ls(e):se(e)&&!M(e)&&!pa(e)?String(e):e,ls=(t,e="")=>{var n;return it(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class Bl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $l(t,e=De){e&&e.active&&e.effects.push(t)}function Hl(){return De}let zt;class si{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,$l(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Nt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Vl(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Lt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ct,n=zt;try{return Ct=!0,zt=this,this._runnings++,Di(this),this.fn()}finally{Mi(this),this._runnings--,zt=n,Ct=e}}stop(){this.active&&(Di(this),Mi(this),this.onStop&&this.onStop(),this.active=!1)}}function Vl(t){return t.value}function Di(t){t._trackId++,t._depsLength=0}function Mi(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)va(t.deps[e],t);t.deps.length=t._depsLength}}function va(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ct=!0,Rs=0;const ba=[];function Nt(){ba.push(Ct),Ct=!1}function Lt(){const t=ba.pop();Ct=t===void 0?!0:t}function ii(){Rs++}function oi(){for(Rs--;!Rs&&As.length;)As.shift()()}function Ea(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&va(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const As=[];function wa(t,e,n){ii();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&As.push(r.scheduler)))}oi()}const Ia=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ps=new WeakMap,Gt=Symbol(""),Os=Symbol("");function Te(t,e,n){if(Ct&&zt){let r=Ps.get(t);r||Ps.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ia(()=>r.delete(n))),Ea(zt,s)}}function rt(t,e,n,r,s,i){const o=Ps.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&M(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||!it(u)&&u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":M(t)?ti(n)&&c.push(o.get("length")):(c.push(o.get(Gt)),an(t)&&c.push(o.get(Os)));break;case"delete":M(t)||(c.push(o.get(Gt)),an(t)&&c.push(o.get(Os)));break;case"set":an(t)&&c.push(o.get(Gt));break}ii();for(const a of c)a&&wa(a,4);oi()}const jl=Qs("__proto__,__v_isRef,__isVue"),Sa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(it)),xi=Wl();function Wl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Te(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Nt(),ii();const r=q(this)[e].apply(this,n);return oi(),Lt(),r}}),t}function Kl(t){it(t)||(t=String(t));const e=q(this);return Te(e,"has",t),e.hasOwnProperty(t)}class Ta{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?su:Pa:i?Aa:Ra).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=M(e);if(!s){if(o&&G(xi,n))return Reflect.get(xi,n,r);if(n==="hasOwnProperty")return Kl}const c=Reflect.get(e,n,r);return(it(n)?Sa.has(n):jl(n))||(s||Te(e,"get",n),i)?c:Ce(c)?o&&ti(n)?c:c.value:se(c)?s?ka(c):zr(c):c}}class Ca extends Ta{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=xn(i);if(!Sr(r)&&!xn(r)&&(i=q(i),r=q(r)),!M(e)&&Ce(i)&&!Ce(r))return a?!1:(i.value=r,!0)}const o=M(e)&&ti(n)?Number(n)<e.length:G(e,n),c=Reflect.set(e,n,r,s);return e===q(s)&&(o?Ot(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),c}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!it(n)||!Sa.has(n))&&Te(e,"has",n),r}ownKeys(e){return Te(e,"iterate",M(e)?"length":Gt),Reflect.ownKeys(e)}}class zl extends Ta{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gl=new Ca,ql=new zl,Jl=new Ca(!0);const ai=t=>t,Kr=t=>Reflect.getPrototypeOf(t);function sr(t,e,n=!1,r=!1){t=t.__v_raw;const s=q(t),i=q(e);n||(Ot(e,i)&&Te(s,"get",e),Te(s,"get",i));const{has:o}=Kr(s),c=r?ai:n?ui:Un;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function ir(t,e=!1){const n=this.__v_raw,r=q(n),s=q(t);return e||(Ot(t,s)&&Te(r,"has",t),Te(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function or(t,e=!1){return t=t.__v_raw,!e&&Te(q(t),"iterate",Gt),Reflect.get(t,"size",t)}function Ui(t){t=q(t);const e=q(this);return Kr(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function Fi(t,e){e=q(e);const n=q(this),{has:r,get:s}=Kr(n);let i=r.call(n,t);i||(t=q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ot(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function Bi(t){const e=q(this),{has:n,get:r}=Kr(e);let s=n.call(e,t);s||(t=q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function $i(){const t=q(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function ar(t,e){return function(r,s){const i=this,o=i.__v_raw,c=q(o),a=e?ai:t?ui:Un;return!t&&Te(c,"iterate",Gt),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function cr(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=an(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?ai:e?ui:Un;return!e&&Te(i,"iterate",a?Os:Gt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yl(){const t={get(i){return sr(this,i)},get size(){return or(this)},has:ir,add:Ui,set:Fi,delete:Bi,clear:$i,forEach:ar(!1,!1)},e={get(i){return sr(this,i,!1,!0)},get size(){return or(this)},has:ir,add:Ui,set:Fi,delete:Bi,clear:$i,forEach:ar(!1,!0)},n={get(i){return sr(this,i,!0)},get size(){return or(this,!0)},has(i){return ir.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ar(!0,!1)},r={get(i){return sr(this,i,!0,!0)},get size(){return or(this,!0)},has(i){return ir.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=cr(i,!1,!1),n[i]=cr(i,!0,!1),e[i]=cr(i,!1,!0),r[i]=cr(i,!0,!0)}),[t,n,e,r]}const[Xl,Ql,Zl,eu]=Yl();function ci(t,e){const n=e?t?eu:Zl:t?Ql:Xl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const tu={get:ci(!1,!1)},nu={get:ci(!1,!0)},ru={get:ci(!0,!1)};const Ra=new WeakMap,Aa=new WeakMap,Pa=new WeakMap,su=new WeakMap;function iu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ou(t){return t.__v_skip||!Object.isExtensible(t)?0:iu(Rl(t))}function zr(t){return xn(t)?t:li(t,!1,Gl,tu,Ra)}function Oa(t){return li(t,!1,Jl,nu,Aa)}function ka(t){return li(t,!0,ql,ru,Pa)}function li(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ou(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function An(t){return xn(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function xn(t){return!!(t&&t.__v_isReadonly)}function Sr(t){return!!(t&&t.__v_isShallow)}function Na(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function au(t){return Object.isExtensible(t)&&ga(t,"__v_skip",!0),t}const Un=t=>se(t)?zr(t):t,ui=t=>se(t)?ka(t):t;class La{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new si(()=>e(this._value),()=>hr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=q(this);return(!e._cacheable||e.effect.dirty)&&Ot(e._value,e._value=e.effect.run())&&hr(e,4),Da(e),e.effect._dirtyLevel>=2&&hr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function cu(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=Ae):(r=t.get,s=t.set),new La(r,s,i||!s,n)}function Da(t){var e;Ct&&zt&&(t=q(t),Ea(zt,(e=t.dep)!=null?e:t.dep=Ia(()=>t.dep=void 0,t instanceof La?t:void 0)))}function hr(t,e=4,n){t=q(t);const r=t.dep;r&&wa(r,e)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function Ma(t){return xa(t,!1)}function lu(t){return xa(t,!0)}function xa(t,e){return Ce(t)?t:new uu(t,e)}class uu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:Un(e)}get value(){return Da(this),this._value}set value(e){const n=this.__v_isShallow||Sr(e)||xn(e);e=n?e:q(e),Ot(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Un(e),hr(this,4))}}function cn(t){return Ce(t)?t.value:t}const fu={get:(t,e,n)=>cn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ce(s)&&!Ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ua(t){return An(t)?t:new Proxy(t,fu)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rt(t,e,n,r){try{return r?t(...r):t()}catch(s){Gr(s,e,n)}}function Ne(t,e,n,r){if(j(t)){const s=Rt(t,e,n,r);return s&&da(s)&&s.catch(i=>{Gr(i,e,n)}),s}if(M(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}}function Gr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){Nt(),Rt(a,null,10,[t,o,c]),Lt();return}}du(t,n,s,r)}function du(t,e,n,r=!0){console.error(t)}let Fn=!1,ks=!1;const ye=[];let Ke=0;const ln=[];let mt=null,Vt=0;const Fa=Promise.resolve();let fi=null;function di(t){const e=fi||Fa;return t?e.then(this?t.bind(this):t):e}function hu(t){let e=Ke+1,n=ye.length;for(;e<n;){const r=e+n>>>1,s=ye[r],i=Bn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function hi(t){(!ye.length||!ye.includes(t,Fn&&t.allowRecurse?Ke+1:Ke))&&(t.id==null?ye.push(t):ye.splice(hu(t.id),0,t),Ba())}function Ba(){!Fn&&!ks&&(ks=!0,fi=Fa.then(Ha))}function pu(t){const e=ye.indexOf(t);e>Ke&&ye.splice(e,1)}function gu(t){M(t)?ln.push(...t):(!mt||!mt.includes(t,t.allowRecurse?Vt+1:Vt))&&ln.push(t),Ba()}function Hi(t,e,n=Fn?Ke+1:0){for(;n<ye.length;n++){const r=ye[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ye.splice(n,1),n--,r()}}}function $a(t){if(ln.length){const e=[...new Set(ln)].sort((n,r)=>Bn(n)-Bn(r));if(ln.length=0,mt){mt.push(...e);return}for(mt=e,Vt=0;Vt<mt.length;Vt++)mt[Vt]();mt=null,Vt=0}}const Bn=t=>t.id==null?1/0:t.id,mu=(t,e)=>{const n=Bn(t)-Bn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ha(t){ks=!1,Fn=!0,ye.sort(mu);const e=Ae;try{for(Ke=0;Ke<ye.length;Ke++){const n=ye[Ke];n&&n.active!==!1&&Rt(n,null,14)}}finally{Ke=0,ye.length=0,$a(),Fn=!1,fi=null,(ye.length||ln.length)&&Ha()}}function _u(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||oe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||oe;p&&(s=n.map(m=>de(m)?m.trim():m)),h&&(s=n.map(Ir))}let c,a=r[c=cs(e)]||r[c=cs(Ye(e))];!a&&i&&(a=r[c=cs(Xt(e))]),a&&Ne(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ne(l,t,6,s)}}function Va(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!j(t)){const a=l=>{const u=Va(l,e,!0);u&&(c=!0,fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(se(t)&&r.set(t,null),null):(M(i)?i.forEach(a=>o[a]=null):fe(o,i),se(t)&&r.set(t,o),o)}function qr(t,e){return!t||!$r(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Xt(e))||G(t,e))}let pe=null,Jr=null;function Tr(t){const e=pe;return pe=t,Jr=t&&t.type.__scopeId||null,e}function yu(t){Jr=t}function vu(){Jr=null}function je(t,e=pe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&eo(-1);const i=Tr(e);let o;try{o=t(...s)}finally{Tr(i),r._d&&eo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function us(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:u,props:h,data:p,setupState:m,ctx:S,inheritAttrs:O}=t,$=Tr(t);let P,k;try{if(n.shapeFlag&4){const W=s||r,z=W;P=We(l.call(z,W,u,h,m,p,S)),k=c}else{const W=e;P=We(W.length>1?W(h,{attrs:c,slots:o,emit:a}):W(h,null)),k=e.props?c:bu(c)}}catch(W){Nn.length=0,Gr(W,t,1),P=ie(Pe)}let U=P;if(k&&O!==!1){const W=Object.keys(k),{shapeFlag:z}=U;W.length&&z&7&&(i&&W.some(Zs)&&(k=Eu(k,i)),U=kt(U,k,!1,!0))}return n.dirs&&(U=kt(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),P=U,Tr($),P}const bu=t=>{let e;for(const n in t)(n==="class"||n==="style"||$r(n))&&((e||(e={}))[n]=t[n]);return e},Eu=(t,e)=>{const n={};for(const r in t)(!Zs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function wu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Vi(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!qr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Vi(r,o,l):!0:!!o;return!1}function Vi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!qr(n,i))return!0}return!1}function Iu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ja="components";function ji(t,e){return Tu(ja,t,!0,e)||t}const Su=Symbol.for("v-ndc");function Tu(t,e,n=!0,r=!1){const s=pe||me;if(s){const i=s.type;if(t===ja){const c=Ef(i,!1);if(c&&(c===e||c===Ye(e)||c===jr(Ye(e))))return i}const o=Wi(s[t]||i[t],e)||Wi(s.appContext[t],e);return!o&&r?i:o}}function Wi(t,e){return t&&(t[e]||t[Ye(e)]||t[jr(Ye(e))])}const Cu=t=>t.__isSuspense;function Ru(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):gu(t)}const Au=Symbol.for("v-scx"),Pu=()=>Ge(Au),lr={};function pr(t,e,n){return Wa(t,e,n)}function Wa(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=oe){if(e&&i){const F=e;e=(...ae)=>{F(...ae),z()}}const a=me,l=F=>r===!0?F:Kt(F,r===!1?1:void 0);let u,h=!1,p=!1;if(Ce(t)?(u=()=>t.value,h=Sr(t)):An(t)?(u=()=>l(t),h=!0):M(t)?(p=!0,h=t.some(F=>An(F)||Sr(F)),u=()=>t.map(F=>{if(Ce(F))return F.value;if(An(F))return l(F);if(j(F))return Rt(F,a,2)})):j(t)?e?u=()=>Rt(t,a,2):u=()=>(m&&m(),Ne(t,a,3,[S])):u=Ae,e&&r){const F=u;u=()=>Kt(F())}let m,S=F=>{m=U.onStop=()=>{Rt(F,a,4),m=U.onStop=void 0}},O;if(Zr)if(S=Ae,e?n&&Ne(e,a,3,[u(),p?[]:void 0,S]):u(),s==="sync"){const F=Pu();O=F.__watcherHandles||(F.__watcherHandles=[])}else return Ae;let $=p?new Array(t.length).fill(lr):lr;const P=()=>{if(!(!U.active||!U.dirty))if(e){const F=U.run();(r||h||(p?F.some((ae,H)=>Ot(ae,$[H])):Ot(F,$)))&&(m&&m(),Ne(e,a,3,[F,$===lr?void 0:p&&$[0]===lr?[]:$,S]),$=F)}else U.run()};P.allowRecurse=!!e;let k;s==="sync"?k=P:s==="post"?k=()=>Ie(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),k=()=>hi(P));const U=new si(u,Ae,k),W=Hl(),z=()=>{U.stop(),W&&ei(W.effects,U)};return e?n?P():$=U.run():s==="post"?Ie(U.run.bind(U),a&&a.suspense):U.run(),O&&O.push(z),z}function Ou(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?Ka(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=Jn(this),c=Wa(s,i.bind(r),n);return o(),c}function Ka(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kt(t,e=1/0,n){if(e<=0||!se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ce(t))Kt(t.value,e,n);else if(M(t))for(let r=0;r<t.length;r++)Kt(t[r],e,n);else if(Hr(t)||an(t))t.forEach(r=>{Kt(r,e,n)});else if(pa(t))for(const r in t)Kt(t[r],e,n);return t}function h_(t,e){if(pe===null)return t;const n=es(pe)||pe.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=oe]=e[s];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&Kt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Ut(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Nt(),Ne(a,n,8,[t.el,c,t,e]),Lt())}}const _t=Symbol("_leaveCb"),ur=Symbol("_enterCb");function ku(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xa(()=>{t.isMounted=!0}),Qa(()=>{t.isUnmounting=!0}),t}const Oe=[Function,Array],za={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},Nu={name:"BaseTransition",props:za,setup(t,{slots:e}){const n=mf(),r=ku();return()=>{const s=e.default&&qa(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const p of s)if(p.type!==Pe){i=p;break}}const o=q(t),{mode:c}=o;if(r.isLeaving)return fs(i);const a=Ki(i);if(!a)return fs(i);const l=Ns(a,o,r,n);Ls(a,l);const u=n.subTree,h=u&&Ki(u);if(h&&h.type!==Pe&&!jt(a,h)){const p=Ns(h,o,r,n);if(Ls(h,p),c==="out-in"&&a.type!==Pe)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},fs(i);c==="in-out"&&a.type!==Pe&&(p.delayLeave=(m,S,O)=>{const $=Ga(r,h);$[String(h.key)]=h,m[_t]=()=>{S(),m[_t]=void 0,delete l.delayedLeave},l.delayedLeave=O})}return i}}},Lu=Nu;function Ga(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ns(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:S,onBeforeAppear:O,onAppear:$,onAfterAppear:P,onAppearCancelled:k}=e,U=String(t.key),W=Ga(n,t),z=(H,J)=>{H&&Ne(H,r,9,J)},F=(H,J)=>{const Y=J[1];z(H,J),M(H)?H.every(he=>he.length<=1)&&Y():H.length<=1&&Y()},ae={mode:i,persisted:o,beforeEnter(H){let J=c;if(!n.isMounted)if(s)J=O||c;else return;H[_t]&&H[_t](!0);const Y=W[U];Y&&jt(t,Y)&&Y.el[_t]&&Y.el[_t](),z(J,[H])},enter(H){let J=a,Y=l,he=u;if(!n.isMounted)if(s)J=$||a,Y=P||l,he=k||u;else return;let L=!1;const Z=H[ur]=be=>{L||(L=!0,be?z(he,[H]):z(Y,[H]),ae.delayedLeave&&ae.delayedLeave(),H[ur]=void 0)};J?F(J,[H,Z]):Z()},leave(H,J){const Y=String(t.key);if(H[ur]&&H[ur](!0),n.isUnmounting)return J();z(h,[H]);let he=!1;const L=H[_t]=Z=>{he||(he=!0,J(),Z?z(S,[H]):z(m,[H]),H[_t]=void 0,W[Y]===t&&delete W[Y])};W[Y]=t,p?F(p,[H,L]):L()},clone(H){return Ns(H,e,n,r)}};return ae}function fs(t){if(Yr(t))return t=kt(t),t.children=null,t}function Ki(t){if(!Yr(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&j(n.default))return n.default()}}function Ls(t,e){t.shapeFlag&6&&t.component?Ls(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qa(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ke?(o.patchFlag&128&&s++,r=r.concat(qa(o.children,e,c))):(e||o.type!==Pe)&&r.push(c!=null?kt(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ja(t,e){return j(t)?(()=>fe({name:t.name},e,{setup:t}))():t}const Pn=t=>!!t.type.__asyncLoader,Yr=t=>t.type.__isKeepAlive;function Du(t,e){Ya(t,"a",e)}function Mu(t,e){Ya(t,"da",e)}function Ya(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Yr(s.parent.vnode)&&xu(r,e,n,s),s=s.parent}}function xu(t,e,n,r){const s=Xr(e,t,r,!0);Za(()=>{ei(r[e],s)},n)}function Xr(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Nt();const c=Jn(n),a=Ne(e,n,t,o);return c(),Lt(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=me)=>(!Zr||t==="sp")&&Xr(t,(...r)=>e(...r),n),Uu=at("bm"),Xa=at("m"),Fu=at("bu"),Bu=at("u"),Qa=at("bum"),Za=at("um"),$u=at("sp"),Hu=at("rtg"),Vu=at("rtc");function ju(t,e=me){Xr("ec",t,e)}function p_(t,e,n,r){let s;const i=n&&n[r];if(M(t)||de(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(se(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,a=o.length;c<a;c++){const l=o[c];s[c]=e(t[l],l,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function g_(t,e,n={},r,s){if(pe.isCE||pe.parent&&Pn(pe.parent)&&pe.parent.isCE)return e!=="default"&&(n.name=e),ie("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),yt();const o=i&&ec(i(n)),c=pc(ke,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function ec(t){return t.some(e=>Rr(e)?!(e.type===Pe||e.type===ke&&!ec(e.children)):!0)?t:null}const Ds=t=>t?mc(t)?es(t)||t.proxy:Ds(t.parent):null,On=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ds(t.parent),$root:t=>Ds(t.root),$emit:t=>t.emit,$options:t=>pi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,hi(t.update)}),$nextTick:t=>t.n||(t.n=di.bind(t.proxy)),$watch:t=>Ou.bind(t)}),ds=(t,e)=>t!==oe&&!t.__isScriptSetup&&G(t,e),Wu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ds(r,e))return o[e]=1,r[e];if(s!==oe&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==oe&&G(n,e))return o[e]=4,n[e];Ms&&(o[e]=0)}}const u=On[e];let h,p;if(u)return e==="$attrs"&&Te(t.attrs,"get",""),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==oe&&G(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ds(s,e)?(s[e]=n,!0):r!==oe&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==oe&&G(t,o)||ds(e,o)||(c=i[0])&&G(c,o)||G(r,o)||G(On,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zi(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ms=!0;function Ku(t){const e=pi(t),n=t.proxy,r=t.ctx;Ms=!1,e.beforeCreate&&Gi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:S,activated:O,deactivated:$,beforeDestroy:P,beforeUnmount:k,destroyed:U,unmounted:W,render:z,renderTracked:F,renderTriggered:ae,errorCaptured:H,serverPrefetch:J,expose:Y,inheritAttrs:he,components:L,directives:Z,filters:be}=e;if(l&&zu(l,r,null),o)for(const te in o){const X=o[te];j(X)&&(r[te]=X.bind(n))}if(s){const te=s.call(n,n);se(te)&&(t.data=zr(te))}if(Ms=!0,i)for(const te in i){const X=i[te],Qe=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):Ae,lt=!j(X)&&j(X.set)?X.set.bind(n):Ae,$e=xe({get:Qe,set:lt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>$e.value,set:we=>$e.value=we})}if(c)for(const te in c)tc(c[te],r,n,te);if(a){const te=j(a)?a.call(n):a;Reflect.ownKeys(te).forEach(X=>{gr(X,te[X])})}u&&Gi(u,t,"c");function ue(te,X){M(X)?X.forEach(Qe=>te(Qe.bind(n))):X&&te(X.bind(n))}if(ue(Uu,h),ue(Xa,p),ue(Fu,m),ue(Bu,S),ue(Du,O),ue(Mu,$),ue(ju,H),ue(Vu,F),ue(Hu,ae),ue(Qa,k),ue(Za,W),ue($u,J),M(Y))if(Y.length){const te=t.exposed||(t.exposed={});Y.forEach(X=>{Object.defineProperty(te,X,{get:()=>n[X],set:Qe=>n[X]=Qe})})}else t.exposed||(t.exposed={});z&&t.render===Ae&&(t.render=z),he!=null&&(t.inheritAttrs=he),L&&(t.components=L),Z&&(t.directives=Z)}function zu(t,e,n=Ae){M(t)&&(t=xs(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=Ge(s.from||r,s.default,!0):i=Ge(s.from||r):i=Ge(s),Ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Gi(t,e,n){Ne(M(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function tc(t,e,n,r){const s=r.includes(".")?Ka(n,r):()=>n[r];if(de(t)){const i=e[t];j(i)&&pr(s,i)}else if(j(t))pr(s,t.bind(n));else if(se(t))if(M(t))t.forEach(i=>tc(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&pr(s,i,t)}}function pi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>Cr(a,l,o,!0)),Cr(a,e,o)),se(e)&&i.set(e,a),a}function Cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cr(t,i,n,!0),s&&s.forEach(o=>Cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Gu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Gu={data:qi,props:Ji,emits:Ji,methods:Sn,computed:Sn,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Sn,directives:Sn,watch:Ju,provide:qi,inject:qu};function qi(t,e){return e?t?function(){return fe(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function qu(t,e){return Sn(xs(t),xs(e))}function xs(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?fe(Object.create(null),t,e):e}function Ji(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:fe(Object.create(null),zi(t),zi(e??{})):e}function Ju(t,e){if(!t)return e;if(!e)return t;const n=fe(Object.create(null),t);for(const r in e)n[r]=Ee(t[r],e[r]);return n}function nc(){return{app:null,config:{isNativeTag:Tl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yu=0;function Xu(t,e){return function(r,s=null){j(r)||(r=fe({},r)),s!=null&&!se(s)&&(s=null);const i=nc(),o=new WeakSet;let c=!1;const a=i.app={_uid:Yu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:If,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(a,...u)):j(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const p=ie(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,es(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){const u=kn;kn=a;try{return l()}finally{kn=u}}};return a}}let kn=null;function gr(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function Ge(t,e,n=!1){const r=me||pe;if(r||kn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:kn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}const rc={},sc=()=>Object.create(rc),ic=t=>Object.getPrototypeOf(t)===rc;function Qu(t,e,n,r=!1){const s={},i=sc();t.propsDefaults=Object.create(null),oc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Oa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Zu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=q(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(qr(t.emitsOptions,p))continue;const m=e[p];if(a)if(G(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const S=Ye(p);s[S]=Us(a,c,S,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{oc(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!G(e,h)&&((u=Xt(h))===h||!G(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Us(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!G(e,h))&&(delete i[h],l=!0)}l&&rt(t.attrs,"set","")}function oc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Rn(a))continue;const l=e[a];let u;s&&G(s,u=Ye(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:qr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=q(n),l=c||oe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Us(s,a,h,l[h],t,!G(l,h))}}return o}function Us(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=G(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&j(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Jn(s);r=l[n]=a.call(null,e),u()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}function ac(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!j(t)){const u=h=>{a=!0;const[p,m]=ac(h,e,!0);fe(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return se(t)&&r.set(t,on),on;if(M(i))for(let u=0;u<i.length;u++){const h=Ye(i[u]);Yi(h)&&(o[h]=oe)}else if(i)for(const u in i){const h=Ye(u);if(Yi(h)){const p=i[u],m=o[h]=M(p)||j(p)?{type:p}:fe({},p);if(m){const S=Zi(Boolean,m.type),O=Zi(String,m.type);m[0]=S>-1,m[1]=O<0||S<O,(S>-1||G(m,"default"))&&c.push(h)}}}const l=[o,c];return se(t)&&r.set(t,l),l}function Yi(t){return t[0]!=="$"&&!Rn(t)}function Xi(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Qi(t,e){return Xi(t)===Xi(e)}function Zi(t,e){return M(e)?e.findIndex(n=>Qi(n,t)):j(e)&&Qi(e,t)?0:-1}const cc=t=>t[0]==="_"||t==="$stable",gi=t=>M(t)?t.map(We):[We(t)],ef=(t,e,n)=>{if(e._n)return e;const r=je((...s)=>gi(e(...s)),n);return r._c=!1,r},lc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cc(s))continue;const i=t[s];if(j(i))e[s]=ef(s,i,r);else if(i!=null){const o=gi(i);e[s]=()=>o}}},uc=(t,e)=>{const n=gi(e);t.slots.default=()=>n},tf=(t,e)=>{const n=t.slots=sc();if(t.vnode.shapeFlag&32){const r=e._;r?(fe(n,e),ga(n,"_",r,!0)):lc(e,n)}else e&&uc(t,e)},nf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(fe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,lc(e,s)),o=e}else e&&(uc(t,e),o={default:1});if(i)for(const c in s)!cc(c)&&o[c]==null&&delete s[c]};function Fs(t,e,n,r,s=!1){if(M(t)){t.forEach((p,m)=>Fs(p,e&&(M(e)?e[m]:e),n,r,s));return}if(Pn(r)&&!s)return;const i=r.shapeFlag&4?es(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===oe?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(de(l)?(u[l]=null,G(h,l)&&(h[l]=null)):Ce(l)&&(l.value=null)),j(a))Rt(a,c,12,[o,u]);else{const p=de(a),m=Ce(a);if(p||m){const S=()=>{if(t.f){const O=p?G(h,a)?h[a]:u[a]:a.value;s?M(O)&&ei(O,i):M(O)?O.includes(i)||O.push(i):p?(u[a]=[i],G(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else p?(u[a]=o,G(h,a)&&(h[a]=o)):m&&(a.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,Ie(S,n)):S()}}}const Ie=Ru;function rf(t){return sf(t)}function sf(t,e){const n=ma();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=Ae,insertStaticContent:S}=t,O=(f,d,g,v=null,_=null,w=null,C=void 0,E=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!jt(f,d)&&(v=y(f),we(f,_,w,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:A,shapeFlag:x}=d;switch(b){case Qr:$(f,d,g,v);break;case Pe:P(f,d,g,v);break;case mr:f==null&&k(d,g,v,C);break;case ke:L(f,d,g,v,_,w,C,E,I);break;default:x&1?z(f,d,g,v,_,w,C,E,I):x&6?Z(f,d,g,v,_,w,C,E,I):(x&64||x&128)&&b.process(f,d,g,v,_,w,C,E,I,N)}A!=null&&_&&Fs(A,f&&f.ref,w,d||f,!d)},$=(f,d,g,v)=>{if(f==null)r(d.el=c(d.children),g,v);else{const _=d.el=f.el;d.children!==f.children&&l(_,d.children)}},P=(f,d,g,v)=>{f==null?r(d.el=a(d.children||""),g,v):d.el=f.el},k=(f,d,g,v)=>{[f.el,f.anchor]=S(f.children,d,g,v,f.el,f.anchor)},U=({el:f,anchor:d},g,v)=>{let _;for(;f&&f!==d;)_=p(f),r(f,g,v),f=_;r(d,g,v)},W=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},z=(f,d,g,v,_,w,C,E,I)=>{d.type==="svg"?C="svg":d.type==="math"&&(C="mathml"),f==null?F(d,g,v,_,w,C,E,I):J(f,d,_,w,C,E,I)},F=(f,d,g,v,_,w,C,E)=>{let I,b;const{props:A,shapeFlag:x,transition:D,dirs:V}=f;if(I=f.el=o(f.type,w,A&&A.is,A),x&8?u(I,f.children):x&16&&H(f.children,I,null,v,_,hs(f,w),C,E),V&&Ut(f,null,v,"created"),ae(I,f,f.scopeId,C,v),A){for(const ne in A)ne!=="value"&&!Rn(ne)&&i(I,ne,null,A[ne],w,f.children,v,_,_e);"value"in A&&i(I,"value",null,A.value,w),(b=A.onVnodeBeforeMount)&&Ve(b,v,f)}V&&Ut(f,null,v,"beforeMount");const K=of(_,D);K&&D.beforeEnter(I),r(I,d,g),((b=A&&A.onVnodeMounted)||K||V)&&Ie(()=>{b&&Ve(b,v,f),K&&D.enter(I),V&&Ut(f,null,v,"mounted")},_)},ae=(f,d,g,v,_)=>{if(g&&m(f,g),v)for(let w=0;w<v.length;w++)m(f,v[w]);if(_){let w=_.subTree;if(d===w){const C=_.vnode;ae(f,C,C.scopeId,C.slotScopeIds,_.parent)}}},H=(f,d,g,v,_,w,C,E,I=0)=>{for(let b=I;b<f.length;b++){const A=f[b]=E?vt(f[b]):We(f[b]);O(null,A,d,g,v,_,w,C,E)}},J=(f,d,g,v,_,w,C)=>{const E=d.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:A}=d;I|=f.patchFlag&16;const x=f.props||oe,D=d.props||oe;let V;if(g&&Ft(g,!1),(V=D.onVnodeBeforeUpdate)&&Ve(V,g,d,f),A&&Ut(d,f,g,"beforeUpdate"),g&&Ft(g,!0),b?Y(f.dynamicChildren,b,E,g,v,hs(d,_),w):C||X(f,d,E,null,g,v,hs(d,_),w,!1),I>0){if(I&16)he(E,d,x,D,g,v,_);else if(I&2&&x.class!==D.class&&i(E,"class",null,D.class,_),I&4&&i(E,"style",x.style,D.style,_),I&8){const K=d.dynamicProps;for(let ne=0;ne<K.length;ne++){const le=K[ne],ge=x[le],Le=D[le];(Le!==ge||le==="value")&&i(E,le,ge,Le,_,f.children,g,v,_e)}}I&1&&f.children!==d.children&&u(E,d.children)}else!C&&b==null&&he(E,d,x,D,g,v,_);((V=D.onVnodeUpdated)||A)&&Ie(()=>{V&&Ve(V,g,d,f),A&&Ut(d,f,g,"updated")},v)},Y=(f,d,g,v,_,w,C)=>{for(let E=0;E<d.length;E++){const I=f[E],b=d[E],A=I.el&&(I.type===ke||!jt(I,b)||I.shapeFlag&70)?h(I.el):g;O(I,b,A,null,v,_,w,C,!0)}},he=(f,d,g,v,_,w,C)=>{if(g!==v){if(g!==oe)for(const E in g)!Rn(E)&&!(E in v)&&i(f,E,g[E],null,C,d.children,_,w,_e);for(const E in v){if(Rn(E))continue;const I=v[E],b=g[E];I!==b&&E!=="value"&&i(f,E,b,I,C,d.children,_,w,_e)}"value"in v&&i(f,"value",g.value,v.value,C)}},L=(f,d,g,v,_,w,C,E,I)=>{const b=d.el=f?f.el:c(""),A=d.anchor=f?f.anchor:c("");let{patchFlag:x,dynamicChildren:D,slotScopeIds:V}=d;V&&(E=E?E.concat(V):V),f==null?(r(b,g,v),r(A,g,v),H(d.children||[],g,A,_,w,C,E,I)):x>0&&x&64&&D&&f.dynamicChildren?(Y(f.dynamicChildren,D,g,_,w,C,E),(d.key!=null||_&&d===_.subTree)&&fc(f,d,!0)):X(f,d,g,A,_,w,C,E,I)},Z=(f,d,g,v,_,w,C,E,I)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?_.ctx.activate(d,g,v,C,I):be(d,g,v,_,w,C,I):Xe(f,d,I)},be=(f,d,g,v,_,w,C)=>{const E=f.component=gf(f,v,_);if(Yr(f)&&(E.ctx.renderer=N),_f(E),E.asyncDep){if(_&&_.registerDep(E,ue),!f.el){const I=E.subTree=ie(Pe);P(null,I,d,g)}}else ue(E,f,d,g,_,w,C)},Xe=(f,d,g)=>{const v=d.component=f.component;if(wu(f,d,g))if(v.asyncDep&&!v.asyncResolved){te(v,d,g);return}else v.next=d,pu(v.update),v.effect.dirty=!0,v.update();else d.el=f.el,v.vnode=d},ue=(f,d,g,v,_,w,C)=>{const E=()=>{if(f.isMounted){let{next:A,bu:x,u:D,parent:V,vnode:K}=f;{const tn=dc(f);if(tn){A&&(A.el=K.el,te(f,A,C)),tn.asyncDep.then(()=>{f.isUnmounted||E()});return}}let ne=A,le;Ft(f,!1),A?(A.el=K.el,te(f,A,C)):A=K,x&&dr(x),(le=A.props&&A.props.onVnodeBeforeUpdate)&&Ve(le,V,A,K),Ft(f,!0);const ge=us(f),Le=f.subTree;f.subTree=ge,O(Le,ge,h(Le.el),y(Le),f,_,w),A.el=ge.el,ne===null&&Iu(f,ge.el),D&&Ie(D,_),(le=A.props&&A.props.onVnodeUpdated)&&Ie(()=>Ve(le,V,A,K),_)}else{let A;const{el:x,props:D}=d,{bm:V,m:K,parent:ne}=f,le=Pn(d);if(Ft(f,!1),V&&dr(V),!le&&(A=D&&D.onVnodeBeforeMount)&&Ve(A,ne,d),Ft(f,!0),x&&ce){const ge=()=>{f.subTree=us(f),ce(x,f.subTree,f,_,null)};le?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ge()):ge()}else{const ge=f.subTree=us(f);O(null,ge,g,v,f,_,w),d.el=ge.el}if(K&&Ie(K,_),!le&&(A=D&&D.onVnodeMounted)){const ge=d;Ie(()=>Ve(A,ne,ge),_)}(d.shapeFlag&256||ne&&Pn(ne.vnode)&&ne.vnode.shapeFlag&256)&&f.a&&Ie(f.a,_),f.isMounted=!0,d=g=v=null}},I=f.effect=new si(E,Ae,()=>hi(b),f.scope),b=f.update=()=>{I.dirty&&I.run()};b.id=f.uid,Ft(f,!0),b()},te=(f,d,g)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,Zu(f,d.props,v,g),nf(f,d.children,g),Nt(),Hi(f),Lt()},X=(f,d,g,v,_,w,C,E,I=!1)=>{const b=f&&f.children,A=f?f.shapeFlag:0,x=d.children,{patchFlag:D,shapeFlag:V}=d;if(D>0){if(D&128){lt(b,x,g,v,_,w,C,E,I);return}else if(D&256){Qe(b,x,g,v,_,w,C,E,I);return}}V&8?(A&16&&_e(b,_,w),x!==b&&u(g,x)):A&16?V&16?lt(b,x,g,v,_,w,C,E,I):_e(b,_,w,!0):(A&8&&u(g,""),V&16&&H(x,g,v,_,w,C,E,I))},Qe=(f,d,g,v,_,w,C,E,I)=>{f=f||on,d=d||on;const b=f.length,A=d.length,x=Math.min(b,A);let D;for(D=0;D<x;D++){const V=d[D]=I?vt(d[D]):We(d[D]);O(f[D],V,g,null,_,w,C,E,I)}b>A?_e(f,_,w,!0,!1,x):H(d,g,v,_,w,C,E,I,x)},lt=(f,d,g,v,_,w,C,E,I)=>{let b=0;const A=d.length;let x=f.length-1,D=A-1;for(;b<=x&&b<=D;){const V=f[b],K=d[b]=I?vt(d[b]):We(d[b]);if(jt(V,K))O(V,K,g,null,_,w,C,E,I);else break;b++}for(;b<=x&&b<=D;){const V=f[x],K=d[D]=I?vt(d[D]):We(d[D]);if(jt(V,K))O(V,K,g,null,_,w,C,E,I);else break;x--,D--}if(b>x){if(b<=D){const V=D+1,K=V<A?d[V].el:v;for(;b<=D;)O(null,d[b]=I?vt(d[b]):We(d[b]),g,K,_,w,C,E,I),b++}}else if(b>D)for(;b<=x;)we(f[b],_,w,!0),b++;else{const V=b,K=b,ne=new Map;for(b=K;b<=D;b++){const Re=d[b]=I?vt(d[b]):We(d[b]);Re.key!=null&&ne.set(Re.key,b)}let le,ge=0;const Le=D-K+1;let tn=!1,Pi=0;const vn=new Array(Le);for(b=0;b<Le;b++)vn[b]=0;for(b=V;b<=x;b++){const Re=f[b];if(ge>=Le){we(Re,_,w,!0);continue}let He;if(Re.key!=null)He=ne.get(Re.key);else for(le=K;le<=D;le++)if(vn[le-K]===0&&jt(Re,d[le])){He=le;break}He===void 0?we(Re,_,w,!0):(vn[He-K]=b+1,He>=Pi?Pi=He:tn=!0,O(Re,d[He],g,null,_,w,C,E,I),ge++)}const Oi=tn?af(vn):on;for(le=Oi.length-1,b=Le-1;b>=0;b--){const Re=K+b,He=d[Re],ki=Re+1<A?d[Re+1].el:v;vn[b]===0?O(null,He,g,ki,_,w,C,E,I):tn&&(le<0||b!==Oi[le]?$e(He,g,ki,2):le--)}}},$e=(f,d,g,v,_=null)=>{const{el:w,type:C,transition:E,children:I,shapeFlag:b}=f;if(b&6){$e(f.component.subTree,d,g,v);return}if(b&128){f.suspense.move(d,g,v);return}if(b&64){C.move(f,d,g,N);return}if(C===ke){r(w,d,g);for(let x=0;x<I.length;x++)$e(I[x],d,g,v);r(f.anchor,d,g);return}if(C===mr){U(f,d,g);return}if(v!==2&&b&1&&E)if(v===0)E.beforeEnter(w),r(w,d,g),Ie(()=>E.enter(w),_);else{const{leave:x,delayLeave:D,afterLeave:V}=E,K=()=>r(w,d,g),ne=()=>{x(w,()=>{K(),V&&V()})};D?D(w,K,ne):ne()}else r(w,d,g)},we=(f,d,g,v=!1,_=!1)=>{const{type:w,props:C,ref:E,children:I,dynamicChildren:b,shapeFlag:A,patchFlag:x,dirs:D}=f;if(E!=null&&Fs(E,null,g,f,!0),A&256){d.ctx.deactivate(f);return}const V=A&1&&D,K=!Pn(f);let ne;if(K&&(ne=C&&C.onVnodeBeforeUnmount)&&Ve(ne,d,f),A&6)rr(f.component,g,v);else{if(A&128){f.suspense.unmount(g,v);return}V&&Ut(f,null,d,"beforeUnmount"),A&64?f.type.remove(f,d,g,_,N,v):b&&(w!==ke||x>0&&x&64)?_e(b,d,g,!1,!0):(w===ke&&x&384||!_&&A&16)&&_e(I,d,g),v&&Zt(f)}(K&&(ne=C&&C.onVnodeUnmounted)||V)&&Ie(()=>{ne&&Ve(ne,d,f),V&&Ut(f,null,d,"unmounted")},g)},Zt=f=>{const{type:d,el:g,anchor:v,transition:_}=f;if(d===ke){en(g,v);return}if(d===mr){W(f);return}const w=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:E}=_,I=()=>C(g,w);E?E(f.el,w,I):I()}else w()},en=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},rr=(f,d,g)=>{const{bum:v,scope:_,update:w,subTree:C,um:E}=f;v&&dr(v),_.stop(),w&&(w.active=!1,we(C,f,d,g)),E&&Ie(E,d),Ie(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},_e=(f,d,g,v=!1,_=!1,w=0)=>{for(let C=w;C<f.length;C++)we(f[C],d,g,v,_)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let R=!1;const T=(f,d,g)=>{f==null?d._vnode&&we(d._vnode,null,null,!0):O(d._vnode||null,f,d,null,null,null,g),R||(R=!0,Hi(),$a(),R=!1),d._vnode=f},N={p:O,um:we,m:$e,r:Zt,mt:be,mc:H,pc:X,pbc:Y,n:y,o:t};let Q,ce;return e&&([Q,ce]=e(N)),{render:T,hydrate:Q,createApp:Xu(T,Q)}}function hs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function of(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fc(t,e,n=!1){const r=t.children,s=e.children;if(M(r)&&M(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=vt(s[i]),c.el=o.el),n||fc(o,c)),c.type===Qr&&(c.el=o.el)}}function af(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function dc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dc(e)}const cf=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),Qr=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),Nn=[];let Ue=null;function yt(t=!1){Nn.push(Ue=t?null:[])}function lf(){Nn.pop(),Ue=Nn[Nn.length-1]||null}let $n=1;function eo(t){$n+=t}function hc(t){return t.dynamicChildren=$n>0?Ue||on:null,lf(),$n>0&&Ue&&Ue.push(t),t}function nn(t,e,n,r,s,i){return hc(Se(t,e,n,r,s,i,!0))}function pc(t,e,n,r,s){return hc(ie(t,e,n,r,s,!0))}function Rr(t){return t?t.__v_isVNode===!0:!1}function jt(t,e){return t.type===e.type&&t.key===e.key}const gc=({key:t})=>t??null,_r=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||Ce(t)||j(t)?{i:pe,r:t,k:e,f:!!n}:t:null);function Se(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gc(e),ref:e&&_r(e),scopeId:Jr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pe};return c?(mi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=de(n)?8:16),$n>0&&!o&&Ue&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ue.push(a),a}const ie=uf;function uf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Su)&&(t=Pe),Rr(t)){const c=kt(t,e,!0);return n&&mi(c,n),$n>0&&!i&&Ue&&(c.shapeFlag&6?Ue[Ue.indexOf(t)]=c:Ue.push(c)),c.patchFlag|=-2,c}if(wf(t)&&(t=t.__vccOpts),e){e=ff(e);let{class:c,style:a}=e;c&&!de(c)&&(e.class=ri(c)),se(a)&&(Na(a)&&!M(a)&&(a=fe({},a)),e.style=ni(a))}const o=de(t)?1:Cu(t)?128:cf(t)?64:se(t)?4:j(t)?2:0;return Se(t,e,n,r,s,o,i,!0)}function ff(t){return t?Na(t)||ic(t)?fe({},t):t:null}function kt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?df(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&gc(l),ref:e&&e.ref?n&&i?M(i)?i.concat(_r(e)):[i,_r(e)]:_r(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kt(t.ssContent),ssFallback:t.ssFallback&&kt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&(u.transition=a.clone(u)),u}function Me(t=" ",e=0){return ie(Qr,null,t,e)}function m_(t,e){const n=ie(mr,null,t);return n.staticCount=e,n}function bn(t="",e=!1){return e?(yt(),pc(Pe,null,t)):ie(Pe,null,t)}function We(t){return t==null||typeof t=="boolean"?ie(Pe):M(t)?ie(ke,null,t.slice()):typeof t=="object"?vt(t):ie(Qr,null,String(t))}function vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kt(t)}function mi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),mi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ic(e)?e._ctx=pe:s===3&&pe&&(pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:pe},n=32):(e=String(e),r&64?(n=16,e=[Me(e)]):n=8);t.children=e,t.shapeFlag|=n}function df(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ri([e.class,r.class]));else if(s==="style")e.style=ni([e.style,r.style]);else if($r(s)){const i=e[s],o=r[s];o&&i!==o&&!(M(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){Ne(t,e,7,[n,r])}const hf=nc();let pf=0;function gf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hf,i={uid:pf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ac(r,s),emitsOptions:Va(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_u.bind(null,i),t.ce&&t.ce(i),i}let me=null;const mf=()=>me||pe;let Ar,Bs;{const t=ma(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ar=e("__VUE_INSTANCE_SETTERS__",n=>me=n),Bs=e("__VUE_SSR_SETTERS__",n=>Zr=n)}const Jn=t=>{const e=me;return Ar(t),t.scope.on(),()=>{t.scope.off(),Ar(e)}},to=()=>{me&&me.scope.off(),Ar(null)};function mc(t){return t.vnode.shapeFlag&4}let Zr=!1;function _f(t,e=!1){e&&Bs(e);const{props:n,children:r}=t.vnode,s=mc(t);Qu(t,n,s,e),tf(t,r);const i=s?yf(t,e):void 0;return e&&Bs(!1),i}function yf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Wu);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?bf(t):null,i=Jn(t);Nt();const o=Rt(r,t,0,[t.props,s]);if(Lt(),i(),da(o)){if(o.then(to,to),e)return o.then(c=>{no(t,c,e)}).catch(c=>{Gr(c,t,0)});t.asyncDep=o}else no(t,o,e)}else _c(t,e)}function no(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=Ua(e)),_c(t,n)}let ro;function _c(t,e,n){const r=t.type;if(!t.render){if(!e&&ro&&!r.render){const s=r.template||pi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=fe(fe({isCustomElement:i,delimiters:c},o),a);r.render=ro(s,l)}}t.render=r.render||Ae}{const s=Jn(t);Nt();try{Ku(t)}finally{Lt(),s()}}}const vf={get(t,e){return Te(t,"get",""),t[e]}};function bf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,vf),slots:t.slots,emit:t.emit,expose:e}}function es(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ua(au(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in On)return On[n](t)},has(e,n){return n in e||n in On}}))}function Ef(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function wf(t){return j(t)&&"__vccOpts"in t}const xe=(t,e)=>cu(t,e,Zr);function _i(t,e,n){const r=arguments.length;return r===2?se(e)&&!M(e)?Rr(e)?ie(t,null,[e]):ie(t,e):ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),ie(t,e,n))}const If="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sf="http://www.w3.org/2000/svg",Tf="http://www.w3.org/1998/Math/MathML",bt=typeof document<"u"?document:null,so=bt&&bt.createElement("template"),Cf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?bt.createElementNS(Sf,t):e==="mathml"?bt.createElementNS(Tf,t):bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{so.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=so.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ft="transition",En="animation",Hn=Symbol("_vtc"),yc=(t,{slots:e})=>_i(Lu,Rf(t),e);yc.displayName="Transition";const vc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yc.props=fe({},za,vc);const Bt=(t,e=[])=>{M(t)?t.forEach(n=>n(...e)):t&&t(...e)},io=t=>t?M(t)?t.some(e=>e.length>1):t.length>1:!1;function Rf(t){const e={};for(const L in t)L in vc||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:u=c,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,S=Af(s),O=S&&S[0],$=S&&S[1],{onBeforeEnter:P,onEnter:k,onEnterCancelled:U,onLeave:W,onLeaveCancelled:z,onBeforeAppear:F=P,onAppear:ae=k,onAppearCancelled:H=U}=e,J=(L,Z,be)=>{$t(L,Z?u:c),$t(L,Z?l:o),be&&be()},Y=(L,Z)=>{L._isLeaving=!1,$t(L,h),$t(L,m),$t(L,p),Z&&Z()},he=L=>(Z,be)=>{const Xe=L?ae:k,ue=()=>J(Z,L,be);Bt(Xe,[Z,ue]),oo(()=>{$t(Z,L?a:i),dt(Z,L?u:c),io(Xe)||ao(Z,r,O,ue)})};return fe(e,{onBeforeEnter(L){Bt(P,[L]),dt(L,i),dt(L,o)},onBeforeAppear(L){Bt(F,[L]),dt(L,a),dt(L,l)},onEnter:he(!1),onAppear:he(!0),onLeave(L,Z){L._isLeaving=!0;const be=()=>Y(L,Z);dt(L,h),dt(L,p),kf(),oo(()=>{L._isLeaving&&($t(L,h),dt(L,m),io(W)||ao(L,r,$,be))}),Bt(W,[L,be])},onEnterCancelled(L){J(L,!1),Bt(U,[L])},onAppearCancelled(L){J(L,!0),Bt(H,[L])},onLeaveCancelled(L){Y(L),Bt(z,[L])}})}function Af(t){if(t==null)return null;if(se(t))return[ps(t.enter),ps(t.leave)];{const e=ps(t);return[e,e]}}function ps(t){return Ol(t)}function dt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Hn]||(t[Hn]=new Set)).add(e)}function $t(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Hn];n&&(n.delete(e),n.size||(t[Hn]=void 0))}function oo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Pf=0;function ao(t,e,n,r){const s=t._endId=++Pf,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=Of(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,p),i()},p=m=>{m.target===t&&++u>=a&&h()};setTimeout(()=>{u<a&&h()},c+1),t.addEventListener(l,p)}function Of(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${ft}Delay`),i=r(`${ft}Duration`),o=co(s,i),c=r(`${En}Delay`),a=r(`${En}Duration`),l=co(c,a);let u=null,h=0,p=0;e===ft?o>0&&(u=ft,h=o,p=i.length):e===En?l>0&&(u=En,h=l,p=a.length):(h=Math.max(o,l),u=h>0?o>l?ft:En:null,p=u?u===ft?i.length:a.length:0);const m=u===ft&&/\b(transform|all)(,|$)/.test(r(`${ft}Property`).toString());return{type:u,timeout:h,propCount:p,hasTransform:m}}function co(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>lo(n)+lo(t[r])))}function lo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function kf(){return document.body.offsetHeight}function Nf(t,e,n){const r=t[Hn];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pr=Symbol("_vod"),bc=Symbol("_vsh"),__={beforeMount(t,{value:e},{transition:n}){t[Pr]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),wn(t,!0),r.enter(t)):r.leave(t,()=>{wn(t,!1)}):wn(t,e))},beforeUnmount(t,{value:e}){wn(t,e)}};function wn(t,e){t.style.display=e?t[Pr]:"none",t[bc]=!e}const Lf=Symbol(""),Df=/(^|;)\s*display\s*:/;function Mf(t,e,n){const r=t.style,s=de(n);let i=!1;if(n&&!s){if(e)if(de(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&yr(r,c,"")}else for(const o in e)n[o]==null&&yr(r,o,"");for(const o in n)o==="display"&&(i=!0),yr(r,o,n[o])}else if(s){if(e!==n){const o=r[Lf];o&&(n+=";"+o),r.cssText=n,i=Df.test(n)}}else e&&t.removeAttribute("style");Pr in t&&(t[Pr]=i?r.display:"",t[bc]&&(r.display="none"))}const uo=/\s*!important$/;function yr(t,e,n){if(M(n))n.forEach(r=>yr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xf(t,e);uo.test(n)?t.setProperty(Xt(r),n.replace(uo,""),"important"):t[r]=n}}const fo=["Webkit","Moz","ms"],gs={};function xf(t,e){const n=gs[e];if(n)return n;let r=Ye(e);if(r!=="filter"&&r in t)return gs[e]=r;r=jr(r);for(let s=0;s<fo.length;s++){const i=fo[s]+r;if(i in t)return gs[e]=i}return e}const ho="http://www.w3.org/1999/xlink";function Uf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ho,e.slice(6,e.length)):t.setAttributeNS(ho,e,n);else{const i=xl(e);n==null||i&&!_a(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ff(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=_a(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Wt(t,e,n,r){t.addEventListener(e,n,r)}function Bf(t,e,n,r){t.removeEventListener(e,n,r)}const po=Symbol("_vei");function $f(t,e,n,r,s=null){const i=t[po]||(t[po]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Hf(e);if(r){const l=i[e]=Wf(r,s);Wt(t,c,l,a)}else o&&(Bf(t,c,o,a),i[e]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function Hf(t){let e;if(go.test(t)){e={};let r;for(;r=t.match(go);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xt(t.slice(2)),e]}let ms=0;const Vf=Promise.resolve(),jf=()=>ms||(Vf.then(()=>ms=0),ms=Date.now());function Wf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne(Kf(r,n.value),e,5,[r])};return n.value=t,n.attached=jf(),n}function Kf(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zf=(t,e,n,r,s,i,o,c,a)=>{const l=s==="svg";e==="class"?Nf(t,r,l):e==="style"?Mf(t,n,r):$r(e)?Zs(e)||$f(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gf(t,e,r,l))?Ff(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Uf(t,e,r,l))};function Gf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&mo(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mo(e)&&de(n)?!1:e in t}const Or=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>dr(e,n):e};function qf(t){t.target.composing=!0}function _o(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const un=Symbol("_assign"),y_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[un]=Or(s);const i=r||s.props&&s.props.type==="number";Wt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ir(c)),t[un](c)}),n&&Wt(t,"change",()=>{t.value=t.value.trim()}),e||(Wt(t,"compositionstart",qf),Wt(t,"compositionend",_o),Wt(t,"change",_o))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[un]=Or(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?Ir(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},v_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Hr(e);Wt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ir(kr(o)):kr(o));t[un](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,di(()=>{t._assigning=!1})}),t[un]=Or(r)},mounted(t,{value:e,modifiers:{number:n}}){yo(t,e)},beforeUpdate(t,e,n){t[un]=Or(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||yo(t,e)}};function yo(t,e,n){const r=t.multiple,s=M(e);if(!(r&&!s&&!Hr(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],a=kr(c);if(r)if(s){const l=typeof a;l==="string"||l==="number"?c.selected=e.some(u=>String(u)===String(a)):c.selected=Fl(e,a)>-1}else c.selected=e.has(a);else if(Wr(kr(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function kr(t){return"_value"in t?t._value:t.value}const Jf=["ctrl","shift","alt","meta"],Yf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Jf.some(n=>t[`${n}Key`]&&!e.includes(n))},b_=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Yf[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Xf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},E_=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Xt(s.key);if(e.some(o=>o===i||Xf[o]===i))return t(s)})},Qf=fe({patchProp:zf},Cf);let vo;function Zf(){return vo||(vo=rf(Qf))}const ed=(...t)=>{const e=Zf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nd(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,td(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function td(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function nd(t){return de(t)?document.querySelector(t):t}const rd="modulepreload",sd=function(t){return"/Projekt_FoodBuddy/"+t},bo={},ht=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=sd(i),i in bo)return;bo[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":rd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof document<"u";function id(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function _s(t,e){const n={};for(const r in e){const s=e[r];n[r]=Fe(s)?s.map(t):t(s)}return n}const Ln=()=>{},Fe=Array.isArray,Ec=/#/g,od=/&/g,ad=/\//g,cd=/=/g,ld=/\?/g,wc=/\+/g,ud=/%5B/g,fd=/%5D/g,Ic=/%5E/g,dd=/%60/g,Sc=/%7B/g,hd=/%7C/g,Tc=/%7D/g,pd=/%20/g;function yi(t){return encodeURI(""+t).replace(hd,"|").replace(ud,"[").replace(fd,"]")}function gd(t){return yi(t).replace(Sc,"{").replace(Tc,"}").replace(Ic,"^")}function $s(t){return yi(t).replace(wc,"%2B").replace(pd,"+").replace(Ec,"%23").replace(od,"%26").replace(dd,"`").replace(Sc,"{").replace(Tc,"}").replace(Ic,"^")}function md(t){return $s(t).replace(cd,"%3D")}function _d(t){return yi(t).replace(Ec,"%23").replace(ld,"%3F")}function yd(t){return t==null?"":_d(t).replace(ad,"%2F")}function Vn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const vd=/\/$/,bd=t=>t.replace(vd,"");function ys(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Sd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Vn(o)}}function Ed(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Eo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gn(e.matched[r],n.matched[s])&&Cc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Id(t[n],e[n]))return!1;return!0}function Id(t,e){return Fe(t)?wo(t,e):Fe(e)?wo(e,t):t===e}function wo(t,e){return Fe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Sd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var jn;(function(t){t.pop="pop",t.push="push"})(jn||(jn={}));var Dn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dn||(Dn={}));function Td(t){if(!t)if(rn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bd(t)}const Cd=/^[^#]+#/;function Rd(t,e){return t.replace(Cd,"#")+e}function Ad(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ts=()=>({left:window.scrollX,top:window.scrollY});function Pd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ad(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Io(t,e){return(history.state?history.state.position-e:-1)+t}const Hs=new Map;function Od(t,e){Hs.set(t,e)}function kd(t){const e=Hs.get(t);return Hs.delete(t),e}let Nd=()=>location.protocol+"//"+location.host;function Rc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Eo(a,"")}return Eo(n,t)+r+s}function Ld(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=Rc(t,location),S=n.value,O=e.value;let $=0;if(p){if(n.value=m,e.value=p,o&&o===S){o=null;return}$=O?p.position-O.position:0}else r(m);s.forEach(P=>{P(n.value,S,{delta:$,type:jn.pop,direction:$?$>0?Dn.forward:Dn.back:Dn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const m=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:ts()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function So(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ts():null}}function Dd(t){const{history:e,location:n}=window,r={value:Rc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Nd()+t+a;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(a,l){const u=ee({},e.state,So(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=ee({},s.value,e.state,{forward:a,scroll:ts()});i(u.current,u,!0);const h=ee({},So(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Md(t){t=Td(t);const e=Dd(t),n=Ld(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:t,go:r,createHref:Rd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xd(t){return typeof t=="string"||t&&typeof t=="object"}function Ac(t){return typeof t=="string"||typeof t=="symbol"}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pc=Symbol("");var To;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(To||(To={}));function mn(t,e){return ee(new Error,{type:t,[Pc]:!0},e)}function Ze(t,e){return t instanceof Error&&Pc in t&&(e==null||!!(t.type&e))}const Co="[^/]+?",Ud={sensitive:!1,strict:!1,start:!0,end:!0},Fd=/[.+*?^${}()[\]/\\]/g;function Bd(t,e){const n=ee({},Ud,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Fd,"\\$&"),m+=40;else if(p.type===1){const{value:S,repeatable:O,optional:$,regexp:P}=p;i.push({name:S,repeatable:O,optional:$});const k=P||Co;if(k!==Co){m+=10;try{new RegExp(`(${k})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${S}" (${k}): `+W.message)}}let U=O?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(U=$&&l.length<2?`(?:/${U})`:"/"+U),$&&(U+="?"),s+=U,m+=20,$&&(m+=-8),O&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",S=i[p-1];h[S.name]=m&&S.repeatable?m.split("/"):m}return h}function a(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:S,repeatable:O,optional:$}=m,P=S in l?l[S]:"";if(Fe(P)&&!O)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const k=Fe(P)?P.join("/"):P;if(!k)if($)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function $d(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Hd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=$d(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ro(r))return 1;if(Ro(s))return-1}return s.length-r.length}function Ro(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vd={type:0,value:""},jd=/[a-zA-Z0-9_]/;function Wd(t){if(!t)return[[]];if(t==="/")return[[Vd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:jd.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Kd(t,e,n){const r=Bd(Wd(t.path),n),s=ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zd(t,e){const n=[],r=new Map;e=Oo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const m=!p,S=Gd(u);S.aliasOf=p&&p.record;const O=Oo(e,u),$=[S];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of U)$.push(ee({},S,{components:p?p.record.components:S.components,path:W,aliasOf:p?p.record:S}))}let P,k;for(const U of $){const{path:W}=U;if(h&&W[0]!=="/"){const z=h.record.path,F=z[z.length-1]==="/"?"":"/";U.path=h.record.path+(W&&F+W)}if(P=Kd(U,h,O),p?p.alias.push(P):(k=k||P,k!==P&&k.alias.push(P),m&&u.name&&!Po(P)&&o(u.name)),S.children){const z=S.children;for(let F=0;F<z.length;F++)i(z[F],P,p&&p.children[F])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&a(P)}return k?()=>{o(k)}:Ln}function o(u){if(Ac(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&Hd(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Oc(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Po(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},S,O;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw mn(1,{location:u});O=p.record.name,m=ee(Ao(h.params,p.keys.filter(k=>!k.optional).concat(p.parent?p.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),u.params&&Ao(u.params,p.keys.map(k=>k.name))),S=p.stringify(m)}else if(u.path!=null)S=u.path,p=n.find(k=>k.re.test(S)),p&&(m=p.parse(S),O=p.record.name);else{if(p=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!p)throw mn(1,{location:u,currentLocation:h});O=p.record.name,m=ee({},h.params,u.params),S=p.stringify(m)}const $=[];let P=p;for(;P;)$.unshift(P.record),P=P.parent;return{name:O,path:S,params:m,matched:$,meta:Jd($)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Ao(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Gd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function qd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Po(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Jd(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function Oo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Oc(t,e){return e.children.some(n=>n===t||Oc(t,n))}function Yd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(wc," "),o=i.indexOf("="),c=Vn(o<0?i:i.slice(0,o)),a=o<0?null:Vn(i.slice(o+1));if(c in e){let l=e[c];Fe(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function ko(t){let e="";for(let n in t){const r=t[n];if(n=md(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fe(r)?r.map(i=>i&&$s(i)):[r&&$s(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Xd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Qd=Symbol(""),No=Symbol(""),ns=Symbol(""),kc=Symbol(""),Vs=Symbol("");function In(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Et(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(mn(4,{from:n,to:e})):p instanceof Error?a(p):xd(p)?a(mn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(p=>a(p))})}function vs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Zd(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Et(u,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const h=id(u)?u.default:u;o.components[c]=h;const m=(h.__vccOpts||h)[e];return m&&Et(m,n,r,o,c,s)()}))}}return i}function Zd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lo(t){const e=Ge(ns),n=Ge(kc),r=xe(()=>{const a=cn(t.to);return e.resolve(a)}),s=xe(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(gn.bind(null,u));if(p>-1)return p;const m=Do(a[l-2]);return l>1&&Do(u)===m&&h[h.length-1].path!==m?h.findIndex(gn.bind(null,a[l-2])):p}),i=xe(()=>s.value>-1&&rh(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Cc(n.params,r.value.params));function c(a={}){return nh(a)?e[cn(t.replace)?"replace":"push"](cn(t.to)).catch(Ln):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const eh=Ja({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lo,setup(t,{slots:e}){const n=zr(Lo(t)),{options:r}=Ge(ns),s=xe(()=>({[Mo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Mo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:_i("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),th=eh;function nh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Fe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Do(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mo=(t,e,n)=>t??e??n,sh=Ja({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ge(Vs),s=xe(()=>t.route||r.value),i=Ge(No,0),o=xe(()=>{let l=cn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=xe(()=>s.value.matched[o.value]);gr(No,xe(()=>o.value+1)),gr(Qd,c),gr(Vs,s);const a=Ma();return pr(()=>[a.value,c.value,t.name],([l,u,h],[p,m,S])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!gn(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(O=>O(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,p=h&&h.components[u];if(!p)return xo(n.default,{Component:p,route:l});const m=h.props[u],S=m?m===!0?l.params:typeof m=="function"?m(l):m:null,$=_i(p,ee({},S,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return xo(n.default,{Component:$,route:l})||$}}});function xo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ih=sh;function oh(t){const e=zd(t.routes,t),n=t.parseQuery||Yd,r=t.stringifyQuery||ko,s=t.history,i=In(),o=In(),c=In(),a=lu(pt);let l=pt;rn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_s.bind(null,y=>""+y),h=_s.bind(null,yd),p=_s.bind(null,Vn);function m(y,R){let T,N;return Ac(y)?(T=e.getRecordMatcher(y),N=R):N=y,e.addRoute(N,T)}function S(y){const R=e.getRecordMatcher(y);R&&e.removeRoute(R)}function O(){return e.getRoutes().map(y=>y.record)}function $(y){return!!e.getRecordMatcher(y)}function P(y,R){if(R=ee({},R||a.value),typeof y=="string"){const d=ys(n,y,R.path),g=e.resolve({path:d.path},R),v=s.createHref(d.fullPath);return ee(d,g,{params:p(g.params),hash:Vn(d.hash),redirectedFrom:void 0,href:v})}let T;if(y.path!=null)T=ee({},y,{path:ys(n,y.path,R.path).path});else{const d=ee({},y.params);for(const g in d)d[g]==null&&delete d[g];T=ee({},y,{params:h(d)}),R.params=h(R.params)}const N=e.resolve(T,R),Q=y.hash||"";N.params=u(p(N.params));const ce=Ed(r,ee({},y,{hash:gd(Q),path:N.path})),f=s.createHref(ce);return ee({fullPath:ce,hash:Q,query:r===ko?Xd(y.query):y.query||{}},N,{redirectedFrom:void 0,href:f})}function k(y){return typeof y=="string"?ys(n,y,a.value.path):ee({},y)}function U(y,R){if(l!==y)return mn(8,{from:R,to:y})}function W(y){return ae(y)}function z(y){return W(ee(k(y),{replace:!0}))}function F(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:T}=R;let N=typeof T=="function"?T(y):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=k(N):{path:N},N.params={}),ee({query:y.query,hash:y.hash,params:N.path!=null?{}:y.params},N)}}function ae(y,R){const T=l=P(y),N=a.value,Q=y.state,ce=y.force,f=y.replace===!0,d=F(T);if(d)return ae(ee(k(d),{state:typeof d=="object"?ee({},Q,d.state):Q,force:ce,replace:f}),R||T);const g=T;g.redirectedFrom=R;let v;return!ce&&wd(r,N,T)&&(v=mn(16,{to:g,from:N}),$e(N,N,!0,!1)),(v?Promise.resolve(v):Y(g,N)).catch(_=>Ze(_)?Ze(_,2)?_:lt(_):X(_,g,N)).then(_=>{if(_){if(Ze(_,2))return ae(ee({replace:f},k(_.to),{state:typeof _.to=="object"?ee({},Q,_.to.state):Q,force:ce}),R||g)}else _=L(g,N,!0,f,Q);return he(g,N,_),_})}function H(y,R){const T=U(y,R);return T?Promise.reject(T):Promise.resolve()}function J(y){const R=en.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(y):y()}function Y(y,R){let T;const[N,Q,ce]=ah(y,R);T=vs(N.reverse(),"beforeRouteLeave",y,R);for(const d of N)d.leaveGuards.forEach(g=>{T.push(Et(g,y,R))});const f=H.bind(null,y,R);return T.push(f),_e(T).then(()=>{T=[];for(const d of i.list())T.push(Et(d,y,R));return T.push(f),_e(T)}).then(()=>{T=vs(Q,"beforeRouteUpdate",y,R);for(const d of Q)d.updateGuards.forEach(g=>{T.push(Et(g,y,R))});return T.push(f),_e(T)}).then(()=>{T=[];for(const d of ce)if(d.beforeEnter)if(Fe(d.beforeEnter))for(const g of d.beforeEnter)T.push(Et(g,y,R));else T.push(Et(d.beforeEnter,y,R));return T.push(f),_e(T)}).then(()=>(y.matched.forEach(d=>d.enterCallbacks={}),T=vs(ce,"beforeRouteEnter",y,R,J),T.push(f),_e(T))).then(()=>{T=[];for(const d of o.list())T.push(Et(d,y,R));return T.push(f),_e(T)}).catch(d=>Ze(d,8)?d:Promise.reject(d))}function he(y,R,T){c.list().forEach(N=>J(()=>N(y,R,T)))}function L(y,R,T,N,Q){const ce=U(y,R);if(ce)return ce;const f=R===pt,d=rn?history.state:{};T&&(N||f?s.replace(y.fullPath,ee({scroll:f&&d&&d.scroll},Q)):s.push(y.fullPath,Q)),a.value=y,$e(y,R,T,f),lt()}let Z;function be(){Z||(Z=s.listen((y,R,T)=>{if(!rr.listening)return;const N=P(y),Q=F(N);if(Q){ae(ee(Q,{replace:!0}),N).catch(Ln);return}l=N;const ce=a.value;rn&&Od(Io(ce.fullPath,T.delta),ts()),Y(N,ce).catch(f=>Ze(f,12)?f:Ze(f,2)?(ae(f.to,N).then(d=>{Ze(d,20)&&!T.delta&&T.type===jn.pop&&s.go(-1,!1)}).catch(Ln),Promise.reject()):(T.delta&&s.go(-T.delta,!1),X(f,N,ce))).then(f=>{f=f||L(N,ce,!1),f&&(T.delta&&!Ze(f,8)?s.go(-T.delta,!1):T.type===jn.pop&&Ze(f,20)&&s.go(-1,!1)),he(N,ce,f)}).catch(Ln)}))}let Xe=In(),ue=In(),te;function X(y,R,T){lt(y);const N=ue.list();return N.length?N.forEach(Q=>Q(y,R,T)):console.error(y),Promise.reject(y)}function Qe(){return te&&a.value!==pt?Promise.resolve():new Promise((y,R)=>{Xe.add([y,R])})}function lt(y){return te||(te=!y,be(),Xe.list().forEach(([R,T])=>y?T(y):R()),Xe.reset()),y}function $e(y,R,T,N){const{scrollBehavior:Q}=t;if(!rn||!Q)return Promise.resolve();const ce=!T&&kd(Io(y.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return di().then(()=>Q(y,R,ce)).then(f=>f&&Pd(f)).catch(f=>X(f,y,R))}const we=y=>s.go(y);let Zt;const en=new Set,rr={currentRoute:a,listening:!0,addRoute:m,removeRoute:S,hasRoute:$,getRoutes:O,resolve:P,options:t,push:W,replace:z,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ue.add,isReady:Qe,install(y){const R=this;y.component("RouterLink",th),y.component("RouterView",ih),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(a)}),rn&&!Zt&&a.value===pt&&(Zt=!0,W(s.location).catch(Q=>{}));const T={};for(const Q in pt)Object.defineProperty(T,Q,{get:()=>a.value[Q],enumerable:!0});y.provide(ns,R),y.provide(kc,Oa(T)),y.provide(Vs,a);const N=y.unmount;en.add(y),y.unmount=function(){en.delete(y),en.size<1&&(l=pt,Z&&Z(),Z=null,a.value=pt,Zt=!1,te=!1),N()}}};function _e(y){return y.reduce((R,T)=>R.then(()=>J(T)),Promise.resolve())}return rr}function ah(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>gn(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>gn(l,a))||s.push(a))}return[n,r,s]}function w_(){return Ge(ns)}const ch=oh({history:Md(),routes:[{path:"/",name:"Home",component:()=>ht(()=>import("./Home-aeb044d7.js"),["assets/Home-aeb044d7.js","assets/Home-57d3065a.css"])},{path:"/About_us",name:"About_us",component:()=>ht(()=>import("./About_us-8c9ff71d.js"),["assets/About_us-8c9ff71d.js","assets/About_us-dd642250.css"])},{path:"/Find_recipe",name:"Find_recipe",component:()=>ht(()=>import("./Find_recipe-8cdaf197.js"),["assets/Find_recipe-8cdaf197.js","assets/index.esm2017-66dc5ead.js","assets/vue-multiselect.esm-a2ba8487.js","assets/Find_recipe-170918e0.css"])},{path:"/Add_recipe",name:"Add_recipe",component:()=>ht(()=>import("./Add_recipe-b274cbb2.js"),["assets/Add_recipe-b274cbb2.js","assets/index.esm2017-66dc5ead.js","assets/Add_recipe-9b8c6239.css"])},{path:"/Login",name:"Login",component:()=>ht(()=>import("./Login-2178adc1.js"),["assets/Login-2178adc1.js","assets/Login-6f239dca.css"])},{path:"/My_recipes",name:"My_recipes",component:()=>ht(()=>import("./My_recipes-48e16d04.js"),["assets/My_recipes-48e16d04.js","assets/index.esm2017-66dc5ead.js","assets/vue-multiselect.esm-a2ba8487.js","assets/My_recipes-38f67c90.css"])},{path:"/Cookbook",name:"Cookbook",component:()=>ht(()=>import("./Cookbook-e8a2f99f.js"),["assets/Cookbook-e8a2f99f.js","assets/Cookbook-9177a7a9.css"])},{path:"/Chatbot",name:"Chatbot",component:()=>ht(()=>import("./Chatbot-702f2504.js"),[])}]}),lh="/Projekt_FoodBuddy/logo.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,m=l&63;a||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new fh;const p=i<<2|c>>4;if(r.push(p),l!==64){const m=c<<4&240|l>>2;if(r.push(m),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dh=function(t){const e=Nc(t);return Lc.encodeByteArray(e,!0)},Nr=function(t){return dh(t).replace(/\./g,"")},Dc=function(t){try{return Lc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=()=>hh().__FIREBASE_DEFAULTS__,gh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dc(t[1]);return e&&JSON.parse(e)},rs=()=>{try{return ph()||gh()||mh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mc=t=>{var e,n;return(n=(e=rs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},I_=t=>{const e=Mc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xc=()=>{var t;return(t=rs())===null||t===void 0?void 0:t.config},Uc=t=>{var e;return(e=rs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[Nr(JSON.stringify(n)),Nr(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function vh(){var t;const e=(t=rs())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wh(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function T_(){return!vh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ih(){try{return typeof indexedDB=="object"}catch{return!1}}function Sh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="FirebaseError";class Dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Th,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ch(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Dt(s,c,r)}}function Ch(t,e){return t.replace(Rh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rh=/\{\$([^}]+)}/g;function Ah(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Uo(i)&&Uo(o)){if(!Lr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Uo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ph(t,e){const n=new Oh(t,e);return n.subscribe.bind(n)}class Oh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bs),s.error===void 0&&(s.error=bs),s.complete===void 0&&(s.complete=bs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _h;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dh(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lh(t){return t===Ht?void 0:t}function Dh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const xh={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Uh=re.INFO,Fh={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Bh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Fh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=Uh,this._logHandler=Bh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const $h=(t,e)=>e.some(n=>t instanceof n);let Fo,Bo;function Hh(){return Fo||(Fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vh(){return Bo||(Bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bc=new WeakMap,js=new WeakMap,$c=new WeakMap,Es=new WeakMap,vi=new WeakMap;function jh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bc.set(n,t)}).catch(()=>{}),vi.set(e,t),e}function Wh(t){if(js.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});js.set(t,e)}let Ws={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return js.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$c.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kh(t){Ws=t(Ws)}function zh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ws(this),e,...n);return $c.set(r,e.sort?e.sort():[e]),At(r)}:Vh().includes(t)?function(...e){return t.apply(ws(this),e),At(Bc.get(this))}:function(...e){return At(t.apply(ws(this),e))}}function Gh(t){return typeof t=="function"?zh(t):(t instanceof IDBTransaction&&Wh(t),$h(t,Hh())?new Proxy(t,Ws):t)}function At(t){if(t instanceof IDBRequest)return jh(t);if(Es.has(t))return Es.get(t);const e=Gh(t);return e!==t&&(Es.set(t,e),vi.set(e,t)),e}const ws=t=>vi.get(t);function qh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=At(o);return r&&o.addEventListener("upgradeneeded",a=>{r(At(o.result),a.oldVersion,a.newVersion,At(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Jh=["get","getKey","getAll","getAllKeys","count"],Yh=["put","add","delete","clear"],Is=new Map;function $o(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Is.get(e))return Is.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Yh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Is.set(e,i),i}Kh(t=>({...t,get:(e,n,r)=>$o(e,n)||t.get(e,n,r),has:(e,n)=>!!$o(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ks="@firebase/app",Ho="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Fc("@firebase/app"),Zh="@firebase/app-compat",ep="@firebase/analytics-compat",tp="@firebase/analytics",np="@firebase/app-check-compat",rp="@firebase/app-check",sp="@firebase/auth",ip="@firebase/auth-compat",op="@firebase/database",ap="@firebase/database-compat",cp="@firebase/functions",lp="@firebase/functions-compat",up="@firebase/installations",fp="@firebase/installations-compat",dp="@firebase/messaging",hp="@firebase/messaging-compat",pp="@firebase/performance",gp="@firebase/performance-compat",mp="@firebase/remote-config",_p="@firebase/remote-config-compat",yp="@firebase/storage",vp="@firebase/storage-compat",bp="@firebase/firestore",Ep="@firebase/firestore-compat",wp="firebase",Ip="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="[DEFAULT]",Sp={[Ks]:"fire-core",[Zh]:"fire-core-compat",[tp]:"fire-analytics",[ep]:"fire-analytics-compat",[rp]:"fire-app-check",[np]:"fire-app-check-compat",[sp]:"fire-auth",[ip]:"fire-auth-compat",[op]:"fire-rtdb",[ap]:"fire-rtdb-compat",[cp]:"fire-fn",[lp]:"fire-fn-compat",[up]:"fire-iid",[fp]:"fire-iid-compat",[dp]:"fire-fcm",[hp]:"fire-fcm-compat",[pp]:"fire-perf",[gp]:"fire-perf-compat",[mp]:"fire-rc",[_p]:"fire-rc-compat",[yp]:"fire-gcs",[vp]:"fire-gcs-compat",[bp]:"fire-fst",[Ep]:"fire-fst-compat","fire-js":"fire-js",[wp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,Tp=new Map,Gs=new Map;function Vo(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(Gs.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Gs.set(e,t);for(const n of Dr.values())Vo(n,t);for(const n of Tp.values())Vo(n,t);return!0}function Hc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ze(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new Yn("app","Firebase",Cp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=Ip;function Vc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(n||(n=xc()),!n)throw Pt.create("no-options");const i=Dr.get(s);if(i){if(Lr(n,i.options)&&Lr(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const o=new Mh(s);for(const a of Gs.values())o.addComponent(a);const c=new Rp(n,r,o);return Dr.set(s,c),c}function Ap(t=zs){const e=Dr.get(t);if(!e&&t===zs&&xc())return Vc();if(!e)throw Pt.create("no-app",{appName:t});return e}function fn(t,e,n){var r;let s=(r=Sp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}Wn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="firebase-heartbeat-database",Op=1,Kn="firebase-heartbeat-store";let Ss=null;function jc(){return Ss||(Ss=qh(Pp,Op,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Kn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),Ss}async function kp(t){try{const n=(await jc()).transaction(Kn),r=await n.objectStore(Kn).get(Wc(t));return await n.done,r}catch(e){if(e instanceof Dt)qt.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function jo(t,e){try{const r=(await jc()).transaction(Kn,"readwrite");await r.objectStore(Kn).put(e,Wc(t)),await r.done}catch(n){if(n instanceof Dt)qt.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function Wc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=1024,Lp=30*24*60*60*1e3;class Dp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Lp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wo(),{heartbeatsToSend:r,unsentEntries:s}=Mp(this._heartbeatsCache.heartbeats),i=Nr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wo(){return new Date().toISOString().substring(0,10)}function Mp(t,e=Np){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ko(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ko(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ih()?Sh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ko(t){return Nr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){Wn(new _n("platform-logger",e=>new Xh(e),"PRIVATE")),Wn(new _n("heartbeat",e=>new Dp(e),"PRIVATE")),fn(Ks,Ho,t),fn(Ks,Ho,"esm2017"),fn("fire-js","")}Up("");function bi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Kc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fp=Kc,zc=new Yn("auth","Firebase",Kc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Fc("@firebase/auth");function Bp(t,...e){Mr.logLevel<=re.WARN&&Mr.warn(`Auth (${Qn}): ${t}`,...e)}function vr(t,...e){Mr.logLevel<=re.ERROR&&Mr.error(`Auth (${Qn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,...e){throw Ei(t,...e)}function qe(t,...e){return Ei(t,...e)}function Gc(t,e,n){const r=Object.assign(Object.assign({},Fp()),{[e]:n});return new Yn("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return Gc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ei(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zc.create(t,...e)}function B(t,e,...n){if(!t)throw Ei(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vr(e),new Error(e)}function ot(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $p(){return zo()==="http:"||zo()==="https:"}function zo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($p()||bh()||"connection"in navigator)?navigator.onLine:!0}function Vp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=yh()||Eh()}get(){return Hp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new Zn(3e4,6e4);function Mt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xt(t,e,n,r,s={}){return Jc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Xn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),qc.fetch()(Yc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Jc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jp),e);try{const s=new zp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw fr(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw fr(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw fr(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gc(t,u,l);Be(t,u)}}catch(s){if(s instanceof Dt)throw s;Be(t,"network-request-failed",{message:String(s)})}}async function er(t,e,n,r,s={}){const i=await xt(t,e,n,r,s);return"mfaPendingCredential"in i&&Be(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Yc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?wi(t.config,s):`${t.config.apiScheme}://${s}`}function Kp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),Wp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qe(t,e,r);return s.customData._tokenResponse=n,s}function Go(t){return t!==void 0&&t.enterprise!==void 0}class Gp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Kp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qp(t,e){return xt(t,"GET","/v2/recaptchaConfig",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(t,e){return xt(t,"POST","/v1/accounts:delete",e)}async function Xc(t,e){return xt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yp(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=Ii(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mn(Ts(s.auth_time)),issuedAtTime:Mn(Ts(s.iat)),expirationTime:Mn(Ts(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ts(t){return Number(t)*1e3}function Ii(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Dc(n);return s?JSON.parse(s):(vr("Failed to decode base64 JWT payload"),null)}catch(s){return vr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qo(t){const e=Ii(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dt&&Xp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await zn(t,Xc(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qc(i.providerUserInfo):[],c=eg(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Js(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Zp(t){const e=ct(t);await xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qc(t){return t.map(e=>{var{providerId:n}=e,r=bi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t,e){const n=await Jc(t,{},async()=>{const r=Xn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Yc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",qc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ng(t,e){return xt(t,"POST","/v2/accounts:revokeToken",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=qo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new dn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=bi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Js(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zn(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yp(this,e)}reload(){return Zp(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await zn(this,Jp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,$=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:W,isAnonymous:z,providerData:F,stsTokenManager:ae}=n;B(U&&ae,e,"internal-error");const H=dn.fromJSON(this.name,ae);B(typeof U=="string",e,"internal-error"),gt(h,e.name),gt(p,e.name),B(typeof W=="boolean",e,"internal-error"),B(typeof z=="boolean",e,"internal-error"),gt(m,e.name),gt(S,e.name),gt(O,e.name),gt($,e.name),gt(P,e.name),gt(k,e.name);const J=new tt({uid:U,auth:e,email:p,emailVerified:W,displayName:h,isAnonymous:z,photoURL:S,phoneNumber:m,tenantId:O,stsTokenManager:H,createdAt:P,lastLoginAt:k});return F&&Array.isArray(F)&&(J.providerData=F.map(Y=>Object.assign({},Y))),$&&(J._redirectEventId=$),J}static async _fromIdTokenResponse(e,n,r=!1){const s=new dn;s.updateFromServerResponse(n);const i=new tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new dn;c.updateFromIdToken(r);const a=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Js(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Map;function nt(t){ot(t instanceof Function,"Expected a class definition");let e=Jo.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zc.type="NONE";const Yo=Zc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=br(this.userKey,s.apiKey,i),this.fullPersistenceKey=br("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hn(nt(Yo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||nt(Yo);const o=br(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=tt._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new hn(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new hn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(el(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sl(e))return"Blackberry";if(il(e))return"Webos";if(Si(e))return"Safari";if((e.includes("chrome/")||tl(e))&&!e.includes("edge/"))return"Chrome";if(rl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function el(t=ve()){return/firefox\//i.test(t)}function Si(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tl(t=ve()){return/crios\//i.test(t)}function nl(t=ve()){return/iemobile/i.test(t)}function rl(t=ve()){return/android/i.test(t)}function sl(t=ve()){return/blackberry/i.test(t)}function il(t=ve()){return/webos/i.test(t)}function ss(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rg(t=ve()){var e;return ss(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sg(){return wh()&&document.documentMode===10}function ol(t=ve()){return ss(t)||rl(t)||il(t)||sl(t)||/windows phone/i.test(t)||nl(t)}function ig(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e=[]){let n;switch(t){case"Browser":n=Xo(ve());break;case"Worker":n=`${Xo(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e={}){return xt(t,"GET","/v2/passwordPolicy",Mt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=6;class lg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qo(this),this.idTokenSubscription=new Qo(this),this.beforeStateQueue=new og(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xc(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(st(this));const n=e?ct(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ag(this),n=new lg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ng(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=al(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Bp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qt(t){return ct(t)}class Qo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ph(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fg(t){is=t}function cl(t){return is.loadJS(t)}function dg(){return is.recaptchaEnterpriseScript}function hg(){return is.gapiScript}function pg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gg="recaptcha-enterprise",mg="NO_RECAPTCHA";class _g{constructor(e){this.type=gg,this.auth=Qt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{qp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Gp(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Go(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(mg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Go(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=dg();a.length!==0&&(a+=c),cl(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Zo(t,e,n,r=!1){const s=new _g(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ys(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Zo(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zo(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e){const n=Hc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Lr(i,e??{}))return s;Be(s,"already-initialized")}return n.initialize({options:e})}function vg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bg(t,e,n){const r=Qt(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ll(e),{host:o,port:c}=Eg(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||wg()}function ll(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Eg(t){const e=ll(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ea(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ea(o)}}}function ea(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function Ig(t,e){return xt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t,e){return er(t,"POST","/v1/accounts:signInWithPassword",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Mt(t,e))}async function Cg(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Ti{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ys(e,n,"signInWithPassword",Sg);case"emailLink":return Tg(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ys(e,r,"signUpPassword",Ig);case"emailLink":return Cg(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e){return er(t,"POST","/v1/accounts:signInWithIdp",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="http://localhost";class Jt extends Ti{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=bi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:Rg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pg(t){const e=Tn(Cn(t)).link,n=e?Tn(Cn(e)).deep_link_id:null,r=Tn(Cn(t)).deep_link_id;return(r?Tn(Cn(r)).link:null)||r||n||e||t}class Ci{constructor(e){var n,r,s,i,o,c;const a=Tn(Cn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=Ag((s=a.mode)!==null&&s!==void 0?s:null);B(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Pg(e);try{return new Ci(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.providerId=yn.PROVIDER_ID}static credential(e,n){return Gn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ci.parseLink(n);return B(r,"argument-error"),Gn._fromEmailAndCode(e,r.code,r.tenantId)}}yn.PROVIDER_ID="password";yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends ul{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends tr{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends tr{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends tr{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t,e){return er(t,"POST","/v1/accounts:signUp",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),o=ta(r);return new Yt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ta(r);return new Yt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ta(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Dt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ur.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ur(e,n,r,s)}}function fl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ur._fromErrorAndOperation(t,i,e,r):i})}async function kg(t,e,n=!1){const r=await zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(t,e,n=!1){const{auth:r}=t;if(ze(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await zn(t,fl(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=Ii(i.idToken);B(o,r,"internal-error");const{sub:c}=o;return B(t.uid===c,r,"user-mismatch"),Yt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t,e,n=!1){if(ze(t.app))return Promise.reject(st(t));const r="signIn",s=await fl(t,r,e),i=await Yt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Lg(t,e){return dl(Qt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(t){const e=Qt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function C_(t,e,n){if(ze(t.app))return Promise.reject(st(t));const r=Qt(t),o=await Ys(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Og).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&hl(t),a}),c=await Yt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function R_(t,e,n){return ze(t.app)?Promise.reject(st(t)):Lg(ct(t),yn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hl(t),r})}function Dg(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function Mg(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function xg(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function Ug(t){return ct(t).signOut()}const Fr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fr,"1"),this.storage.removeItem(Fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){const t=ve();return Si(t)||ss(t)}const Bg=1e3,$g=10;class gl extends pl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fg()&&ig(),this.fallbackToPolling=ol(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$g):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gl.type="LOCAL";const Hg=gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ml.type="SESSION";const _l=ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new os(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Vg(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Ri("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Wg(t){Je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function Kg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gg(){return yl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="firebaseLocalStorageDb",qg=1,Br="firebaseLocalStorage",bl="fbase_key";class nr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(t,e){return t.transaction([Br],e?"readwrite":"readonly").objectStore(Br)}function Jg(){const t=indexedDB.deleteDatabase(vl);return new nr(t).toPromise()}function Xs(){const t=indexedDB.open(vl,qg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Br,{keyPath:bl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Br)?e(r):(r.close(),await Jg(),e(await Xs()))})})}async function na(t,e,n){const r=as(t,!0).put({[bl]:e,value:n});return new nr(r).toPromise()}async function Yg(t,e){const n=as(t,!1).get(e),r=await new nr(n).toPromise();return r===void 0?null:r.value}function ra(t,e){const n=as(t,!0).delete(e);return new nr(n).toPromise()}const Xg=800,Qg=3;class El{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Qg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(Gg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Kg(),!this.activeServiceWorker)return;this.sender=new jg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xs();return await na(e,Fr,"1"),await ra(e,Fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>na(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ra(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=as(s,!1).getAll();return new nr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}El.type="LOCAL";const Zg=El;new Zn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e){return e?nt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Ti{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tm(t){return dl(t.auth,new Ai(t),t.bypassAuthState)}function nm(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Ng(n,new Ai(t),t.bypassAuthState)}async function rm(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),kg(n,new Ai(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tm;case"linkViaPopup":case"linkViaRedirect":return rm;case"reauthViaPopup":case"reauthViaRedirect":return nm;default:Be(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=new Zn(2e3,1e4);class sn extends wl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sm.get())};e()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="pendingRedirect",Er=new Map;class om extends wl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Er.get(this.auth._key());if(!e){try{const r=await am(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Er.set(this.auth._key(),e)}return this.bypassAuthState||Er.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function am(t,e){const n=um(e),r=lm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function cm(t,e){Er.set(t._key(),e)}function lm(t){return nt(t._redirectPersistence)}function um(t){return br(im,t.config.apiKey,t.name)}async function fm(t,e,n=!1){if(ze(t.app))return Promise.reject(st(t));const r=Qt(t),s=em(r,e),o=await new om(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=10*60*1e3;class hm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Il(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dm&&this.cachedEventUids.clear(),this.cachedEventUids.has(sa(e))}saveEventToCache(e){this.cachedEventUids.add(sa(e)),this.lastProcessedEventTime=Date.now()}}function sa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Il({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Il(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(t,e={}){return xt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_m=/^https?/;async function ym(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gm(t);for(const n of e)try{if(vm(n))return}catch{}Be(t,"unauthorized-domain")}function vm(t){const e=qs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_m.test(n))return!1;if(mm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new Zn(3e4,6e4);function ia(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Em(t){return new Promise((e,n)=>{var r,s,i;function o(){ia(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ia(),n(qe(t,"network-request-failed"))},timeout:bm.get()})}if(!((s=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)o();else{const c=pg("iframefcb");return Je()[c]=()=>{gapi.load?o():n(qe(t,"network-request-failed"))},cl(`${hg()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw wr=null,e})}let wr=null;function wm(t){return wr=wr||Em(t),wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new Zn(5e3,15e3),Sm="__/auth/iframe",Tm="emulator/auth/iframe",Cm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Am(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wi(e,Tm):`https://${t.config.authDomain}/${Sm}`,r={apiKey:e.apiKey,appName:t.name,v:Qn},s=Rm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xn(r).slice(1)}`}async function Pm(t){const e=await wm(t),n=Je().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Am(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),c=Je().setTimeout(()=>{i(o)},Im.get());function a(){Je().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},km=500,Nm=600,Lm="_blank",Dm="http://localhost";class oa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mm(t,e,n,r=km,s=Nm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Om),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ve().toLowerCase();n&&(c=tl(l)?Lm:n),el(l)&&(e=e||Dm,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[m,S])=>`${p}${m}=${S},`,"");if(rg(l)&&c!=="_self")return xm(e||"",c),new oa(null);const h=window.open(e||"",c,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new oa(h)}function xm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="__/auth/handler",Fm="emulator/auth/handler",Bm=encodeURIComponent("fac");async function aa(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qn,eventId:s};if(e instanceof ul){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ah(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof tr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Bm}=${encodeURIComponent(a)}`:"";return`${$m(t)}?${Xn(c).slice(1)}${l}`}function $m({config:t}){return t.emulator?wi(t,Fm):`https://${t.authDomain}/${Um}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="webStorageSupport";class Hm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_l,this._completeRedirectFn=fm,this._overrideRedirectResult=cm}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await aa(e,n,r,qs(),s);return Mm(e,o,Ri())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await aa(e,n,r,qs(),s);return Wg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pm(e),r=new hm(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cs,{type:Cs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cs];o!==void 0&&n(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ym(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ol()||Si()||ss()}}const Vm=Hm;var ca="@firebase/auth",la="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Km(t){Wn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:al(t)},l=new ug(r,s,i,a);return vg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new _n("auth-internal",e=>{const n=Qt(e.getProvider("auth").getImmediate());return(r=>new jm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(ca,la,Wm(t)),fn(ca,la,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=5*60,Gm=Uc("authIdTokenMaxAge")||zm;let ua=null;const qm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gm)return;const s=n==null?void 0:n.token;ua!==s&&(ua=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jm(t=Ap()){const e=Hc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yg(t,{popupRedirectResolver:Vm,persistence:[Zg,Hg,_l]}),r=Uc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qm(i.toString());Mg(n,o,()=>o(n.currentUser)),Dg(n,c=>o(c))}}const s=Mc("auth");return s&&bg(n,`http://${s}`),n}function Ym(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ym().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Km("Browser");var Xm="firebase",Qm="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(Xm,Qm,"app");const Zm={apiKey:"AIzaSyDcvt3tNCGlU8YwSBsZQakfo9hiTpmpOuo",authDomain:"foodbuddy-3c448.firebaseapp.com",databaseURL:"https://foodbuddy-3c448.firebaseio.com",projectId:"foodbuddy-3c448",storageBucket:"foodbuddy-3c448.appspot.com",messagingSenderId:"864698295961",appId:"1:864698295961:web:beb2e5b10d1c88b7fd7a08",measurementId:"G-DMB55S2KMY"},e_=Vc(Zm),fa=Jm(e_);const t_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Sl=t=>(yu("data-v-e576c588"),t=t(),vu(),t),n_={class:"wrapper"},r_=Sl(()=>Se("header",null,[Se("h1",null,[Se("img",{src:lh,alt:"FoodBuddy Logo",class:"logo"}),Me(" FoodBuddy ")])],-1)),s_={key:0},i_={key:1},o_={key:2},a_={key:3},c_={key:4},l_=Sl(()=>Se("footer",null,[Se("p",null,"© 2024 FoodBuddy")],-1)),u_={__name:"App",setup(t){const e=Ma(!1);xg(fa,r=>{e.value=!!r});const n=async()=>{await Ug(fa),e.value=!1};return(r,s)=>{const i=ji("router-link"),o=ji("router-view");return yt(),nn("div",n_,[r_,Se("nav",null,[Se("ul",null,[Se("li",null,[ie(i,{to:{name:"Home"}},{default:je(()=>[Me("Strona główna")]),_:1})]),Se("li",null,[ie(i,{to:{name:"About_us"}},{default:je(()=>[Me("O nas")]),_:1})]),Se("li",null,[ie(i,{to:{name:"Find_recipe"}},{default:je(()=>[Me("Znajdź przepis")]),_:1})]),Se("li",null,[ie(i,{to:{name:"Cookbook"}},{default:je(()=>[Me("Cookbook")]),_:1})]),e.value?(yt(),nn("li",s_,[ie(i,{to:{name:"Add_recipe"}},{default:je(()=>[Me("Dodaj przepis")]),_:1})])):bn("",!0),e.value?(yt(),nn("li",i_,[ie(i,{to:{name:"My_recipes"}},{default:je(()=>[Me("Moje przepisy")]),_:1})])):bn("",!0),e.value?(yt(),nn("li",o_,[ie(i,{to:{name:"Chatbot"}},{default:je(()=>[Me("Chatbot")]),_:1})])):bn("",!0),e.value?bn("",!0):(yt(),nn("li",a_,[ie(i,{to:{name:"Login"}},{default:je(()=>[Me("Zaloguj")]),_:1})])),e.value?(yt(),nn("li",c_,[ie(i,{to:"/",onClick:n},{default:je(()=>[Me("Wyloguj")]),_:1})])):bn("",!0)])]),Se("main",null,[ie(o)]),l_])}}},f_=t_(u_,[["__scopeId","data-v-e576c588"]]);ed(f_).use(ch).mount("#app");export{g_ as A,je as B,E_ as C,__ as D,Wn as E,ke as F,_n as G,fn as H,Dt as I,ct as J,Ap as K,Hc as L,I_ as M,re as N,S_ as O,Fc as P,T_ as Q,ve as R,Qn as S,yc as T,t_ as _,Se as a,vu as b,nn as c,m_ as d,ie as e,p_ as f,Me as g,Jm as h,Vc as i,xg as j,v_ as k,b_ as l,Ma as m,ri as n,yt as o,yu as p,fa as q,ji as r,R_ as s,d_ as t,w_ as u,y_ as v,h_ as w,C_ as x,bn as y,pc as z};
