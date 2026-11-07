(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Rd={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function EE(){if(N_)return dl;N_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return dl.Fragment=e,dl.jsx=i,dl.jsxs=i,dl}var U_;function TE(){return U_||(U_=1,Rd.exports=EE()),Rd.exports}var vt=TE(),Dd={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function bE(){if(L_)return ue;L_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function z(D,Y,_t){this.props=D,this.context=Y,this.refs=y,this.updater=_t||A}z.prototype.isReactComponent={},z.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},z.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function U(){}U.prototype=z.prototype;function C(D,Y,_t){this.props=D,this.context=Y,this.refs=y,this.updater=_t||A}var J=C.prototype=new U;J.constructor=C,M(J,z.prototype),J.isPureReactComponent=!0;var H=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function w(D,Y,_t){var ut=_t.ref;return{$$typeof:o,type:D,key:Y,ref:ut!==void 0?ut:null,props:_t}}function F(D,Y){return w(D.type,Y,D.props)}function rt(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function nt(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(_t){return Y[_t]})}var ct=/\/+/g;function ft(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?nt(""+D.key):Y.toString(36)}function V(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(L,L):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function it(D,Y,_t,ut,Ct){var Pt=typeof D;(Pt==="undefined"||Pt==="boolean")&&(D=null);var Ot=!1;if(D===null)Ot=!0;else switch(Pt){case"bigint":case"string":case"number":Ot=!0;break;case"object":switch(D.$$typeof){case o:case e:Ot=!0;break;case v:return Ot=D._init,it(Ot(D._payload),Y,_t,ut,Ct)}}if(Ot)return Ct=Ct(D),Ot=ut===""?"."+ft(D,0):ut,H(Ct)?(_t="",Ot!=null&&(_t=Ot.replace(ct,"$&/")+"/"),it(Ct,Y,_t,"",function(bt){return bt})):Ct!=null&&(rt(Ct)&&(Ct=F(Ct,_t+(Ct.key==null||D&&D.key===Ct.key?"":(""+Ct.key).replace(ct,"$&/")+"/")+Ot)),Y.push(Ct)),1;Ot=0;var wt=ut===""?".":ut+":";if(H(D))for(var at=0;at<D.length;at++)ut=D[at],Pt=wt+ft(ut,at),Ot+=it(ut,Y,_t,Pt,Ct);else if(at=E(D),typeof at=="function")for(D=at.call(D),at=0;!(ut=D.next()).done;)ut=ut.value,Pt=wt+ft(ut,at++),Ot+=it(ut,Y,_t,Pt,Ct);else if(Pt==="object"){if(typeof D.then=="function")return it(V(D),Y,_t,ut,Ct);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Ot}function Z(D,Y,_t){if(D==null)return D;var ut=[],Ct=0;return it(D,ut,"","",function(Pt){return Y.call(_t,Pt,Ct++)}),ut}function xt(D){if(D._status===-1){var Y=D._result,_t=Y();_t.then(function(ut){(D._status===0||D._status===-1)&&(D._status=1,D._result=ut,_t.status===void 0&&(_t.status="fulfilled",_t.value=ut))},function(ut){(D._status===0||D._status===-1)&&(D._status=2,D._result=ut,_t.status===void 0&&(_t.status="rejected",_t.reason=ut))}),D._status===-1&&(D._status=0,D._result=_t)}if(D._status===1)return D._result.default;throw D._result}var Tt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function zt(D){var Y=B.T,_t={};_t.types=Y!==null?Y.types:null,B.T=_t;try{var ut=D(),Ct=B.S;Ct!==null&&Ct(_t,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(L,Tt)}catch(Pt){Tt(Pt)}finally{Y!==null&&_t.types!==null&&(Y.types=_t.types),B.T=Y}}function se(D){var Y=B.T;if(Y!==null){var _t=Y.types;_t===null?Y.types=[D]:_t.indexOf(D)===-1&&_t.push(D)}else zt(se.bind(null,D))}var ge={map:Z,forEach:function(D,Y,_t){Z(D,function(){Y.apply(this,arguments)},_t)},count:function(D){var Y=0;return Z(D,function(){Y++}),Y},toArray:function(D){return Z(D,function(Y){return Y})||[]},only:function(D){if(!rt(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ue.Activity=g,ue.Children=ge,ue.Component=z,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=C,ue.StrictMode=s,ue.Suspense=p,ue.ViewTransition=x,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ue.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},ue.addTransitionType=se,ue.cache=function(D){return function(){return D.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(D,Y,_t){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ut=M({},D.props),Ct=D.key;if(Y!=null)for(Pt in Y.key!==void 0&&(Ct=""+Y.key),Y)!N.call(Y,Pt)||Pt==="key"||Pt==="__self"||Pt==="__source"||Pt==="ref"&&Y.ref===void 0||(ut[Pt]=Y[Pt]);var Pt=arguments.length-2;if(Pt===1)ut.children=_t;else if(1<Pt){for(var Ot=Array(Pt),wt=0;wt<Pt;wt++)Ot[wt]=arguments[wt+2];ut.children=Ot}return w(D.type,Ct,ut)},ue.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ue.createElement=function(D,Y,_t){var ut,Ct={},Pt=null;if(Y!=null)for(ut in Y.key!==void 0&&(Pt=""+Y.key),Y)N.call(Y,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(Ct[ut]=Y[ut]);var Ot=arguments.length-2;if(Ot===1)Ct.children=_t;else if(1<Ot){for(var wt=Array(Ot),at=0;at<Ot;at++)wt[at]=arguments[at+2];Ct.children=wt}if(D&&D.defaultProps)for(ut in Ot=D.defaultProps,Ot)Ct[ut]===void 0&&(Ct[ut]=Ot[ut]);return w(D,Pt,Ct)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(D){return{$$typeof:d,render:D}},ue.isValidElement=rt,ue.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:xt}},ue.memo=function(D,Y){return{$$typeof:m,type:D,compare:Y===void 0?null:Y}},ue.startTransition=zt,ue.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ue.use=function(D){return B.H.use(D)},ue.useActionState=function(D,Y,_t){return B.H.useActionState(D,Y,_t)},ue.useCallback=function(D,Y){return B.H.useCallback(D,Y)},ue.useContext=function(D){return B.H.useContext(D)},ue.useDebugValue=function(){},ue.useDeferredValue=function(D,Y){return B.H.useDeferredValue(D,Y)},ue.useEffect=function(D,Y){return B.H.useEffect(D,Y)},ue.useEffectEvent=function(D){return B.H.useEffectEvent(D)},ue.useId=function(){return B.H.useId()},ue.useImperativeHandle=function(D,Y,_t){return B.H.useImperativeHandle(D,Y,_t)},ue.useInsertionEffect=function(D,Y){return B.H.useInsertionEffect(D,Y)},ue.useLayoutEffect=function(D,Y){return B.H.useLayoutEffect(D,Y)},ue.useMemo=function(D,Y){return B.H.useMemo(D,Y)},ue.useOptimistic=function(D,Y){return B.H.useOptimistic(D,Y)},ue.useReducer=function(D,Y,_t){return B.H.useReducer(D,Y,_t)},ue.useRef=function(D){return B.H.useRef(D)},ue.useState=function(D){return B.H.useState(D)},ue.useSyncExternalStore=function(D,Y,_t){return B.H.useSyncExternalStore(D,Y,_t)},ue.useTransition=function(){return B.H.useTransition()},ue.version="19.3.1",ue}var O_;function rm(){return O_||(O_=1,Dd.exports=bE()),Dd.exports}var qe=rm(),Nd={exports:{}},pl={},Ud={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function AE(){return z_||(z_=1,(function(o){function e(V,it){var Z=V.length;V.push(it);t:for(;0<Z;){var xt=Z-1>>>1,Tt=V[xt];if(0<l(Tt,it))V[xt]=it,V[Z]=Tt,Z=xt;else break t}}function i(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var it=V[0],Z=V.pop();if(Z!==it){V[0]=Z;t:for(var xt=0,Tt=V.length,zt=Tt>>>1;xt<zt;){var se=2*(xt+1)-1,ge=V[se],D=se+1,Y=V[D];if(0>l(ge,Z))D<Tt&&0>l(Y,ge)?(V[xt]=Y,V[D]=Z,xt=D):(V[xt]=ge,V[se]=Z,xt=se);else if(D<Tt&&0>l(Y,Z))V[xt]=Y,V[D]=Z,xt=D;else break t}}return it}function l(V,it){var Z=V.sortIndex-it.sortIndex;return Z!==0?Z:V.id-it.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,g=null,x=3,S=!1,E=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(V){for(var it=i(m);it!==null;){if(it.callback===null)s(m);else if(it.startTime<=V)s(m),it.sortIndex=it.expirationTime,e(p,it);else break;it=i(m)}}function J(V){if(A=!1,C(V),!E)if(i(p)!==null)E=!0,H||(H=!0,rt());else{var it=i(m);it!==null&&ft(J,it.startTime-V)}}var H=!1,L=-1,B=5,N=-1;function w(){return M?!0:!(o.unstable_now()-N<B)}function F(){if(M=!1,H){var V=o.unstable_now();N=V;var it=!0;try{t:{E=!1,A&&(A=!1,z(L),L=-1),S=!0;var Z=x;try{e:{for(C(V),g=i(p);g!==null&&!(g.expirationTime>V&&w());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,x=g.priorityLevel;var Tt=xt(g.expirationTime<=V);if(V=o.unstable_now(),typeof Tt=="function"){g.callback=Tt,C(V),it=!0;break e}g===i(p)&&s(p),C(V)}else s(p);g=i(p)}if(g!==null)it=!0;else{var zt=i(m);zt!==null&&ft(J,zt.startTime-V),it=!1}}break t}finally{g=null,x=Z,S=!1}it=void 0}}finally{it?rt():H=!1}}}var rt;if(typeof U=="function")rt=function(){U(F)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ct=nt.port2;nt.port1.onmessage=F,rt=function(){ct.postMessage(null)}}else rt=function(){y(F,0)};function ft(V,it){L=y(function(){V(o.unstable_now())},it)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(V){switch(x){case 1:case 2:case 3:var it=3;break;default:it=x}var Z=x;x=it;try{return V()}finally{x=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(V,it){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Z=x;x=V;try{return it()}finally{x=Z}},o.unstable_scheduleCallback=function(V,it,Z){var xt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,V){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Z+Tt,V={id:v++,callback:it,priorityLevel:V,startTime:Z,expirationTime:Tt,sortIndex:-1},Z>xt?(V.sortIndex=Z,e(m,V),i(p)===null&&V===i(m)&&(A?(z(L),L=-1):A=!0,ft(J,Z-xt))):(V.sortIndex=Tt,e(p,V),E||S||(E=!0,H||(H=!0,rt()))),V},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(V){var it=x;return function(){var Z=x;x=it;try{return V.apply(this,arguments)}finally{x=Z}}}})(Ld)),Ld}var P_;function wE(){return P_||(P_=1,Ud.exports=AE()),Ud.exports}var Od={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function CE(){if(I_)return Cn;I_=1;var o=rm();function e(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:v,containerInfo:g,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.browser=function(v){return{$$typeof:c,_reason:v}},Cn.createPortal=function(v,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(v,g,null,x)},Cn.flushSync=function(v){var g=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=x,s.d.f()}},Cn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},Cn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Cn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var x=g.as,S=m(x,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:A}):x==="script"&&s.d.X(v,{crossOrigin:S,integrity:E,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Cn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=m(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},Cn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=m(x,g.crossOrigin);s.d.L(v,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Cn.preloadModule=function(v,g){if(typeof v=="string")if(g){var x=m(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},Cn.requestFormReset=function(v){s.d.r(v)},Cn.unstable_batchedUpdates=function(v,g){return v(g)},Cn.useFormState=function(v,g,x){return p.H.useFormState(v,g,x)},Cn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Cn.version="19.3.1",Cn}var B_;function RE(){if(B_)return Od.exports;B_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Od.exports=CE(),Od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function DE(){if(F_)return pl;F_=1;var o=wE(),e=rm(),i=RE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===r)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,T=u.child;T;){if(T===a){_=!0,a=u,r=f;break}if(T===r){_=!0,r=u,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,r=u;break}if(T===r){_=!0,r=f,a=u;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,r,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,r,u,f))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=x(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,z=null;function U(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function C(t,n,a){return t===a?(z=t,!1):t===n?(z!==null&&(y=t),!0):!1}function J(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function H(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var f=n;f;f=a(f))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,B=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),rt=Symbol.for("react.strict_mode"),nt=Symbol.for("react.profiler"),ct=Symbol.for("react.consumer"),ft=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),se=Symbol.for("react.legacy_hidden"),ge=Symbol.for("react.memo_cache_sentinel"),D=Symbol.for("react.view_transition"),Y=Symbol.for("react.recoverable"),_t=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=_t&&t[_t]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Symbol.for("react.client.reference");function Pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case nt:return"Profiler";case rt:return"StrictMode";case it:return"Suspense";case Z:return"SuspenseList";case zt:return"Activity";case D:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ft:return t.displayName||"Context";case ct:return(t._context.displayName||"Context")+".Consumer";case V:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:Pt(t.type)||"Memo";case Tt:n=t._payload,t=t._init;try{return Pt(t(n))}catch{}}return null}var Ot=Array.isArray,wt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,bt={pending:!1,data:null,method:null,action:null},I=[],jt=-1;function Et(t){return{current:t}}function Lt(t){0>jt||(t.current=I[jt],I[jt]=null,jt--)}function yt(t,n){jt++,I[jt]=t.current,t.current=n}var te=Et(null),Ft=Et(null),O=Et(null),b=Et(null);function et(t,n){switch(yt(O,n),yt(Ft,t),yt(te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Hv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Hv(n),t=Gv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(te),yt(te,t)}function dt(){Lt(te),Lt(Ft),Lt(O)}function Mt(t){var n=t.memoizedState;n!==null&&(Pr._currentValue=n.memoizedState,yt(b,t)),n=te.current;var a=Gv(n,t.type);n!==a&&(yt(Ft,t),yt(te,a))}function gt(t){Ft.current===t&&(Lt(te),Lt(Ft)),b.current===t&&(Lt(b),Pr._currentValue=bt)}var Zt,Nt;function Ut(t){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",Nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+Nt}var oe=!1;function At(t,n){if(!t||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(It){var q=It}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(It){q=It}mt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(It){q=It}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(It){if(It&&q&&typeof It.stack=="string")return[It.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var P=_.split(`
`),j=T.split(`
`);for(u=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(r===P.length||u===j.length)for(r=P.length-1,u=j.length-1;1<=r&&0<=u&&P[r]!==j[u];)u--;for(;1<=r&&0<=u;r--,u--)if(P[r]!==j[u]){if(r!==1||u!==1)do if(r--,u--,0>u||P[r]!==j[u]){var st=`
`+P[r].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=r&&0<=u);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ut(a):""}function Xt(t,n){switch(t.tag){case 26:case 27:case 5:return Ut(t.type);case 16:return Ut("Lazy");case 13:return t.child!==n&&n!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return At(t.type,!1);case 11:return At(t.type.render,!1);case 1:return At(t.type,!0);case 31:return Ut("Activity");case 30:return Ut("ViewTransition");default:return""}}function Kt(t){try{var n="",a=null;do n+=Xt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Jt=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,de=o.unstable_cancelCallback,ce=o.unstable_shouldYield,Ne=o.unstable_requestPaint,X=o.unstable_now,Ht=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,Gt=o.unstable_NormalPriority,Yt=o.unstable_LowPriority,fe=o.unstable_IdlePriority,Qe=o.log,gn=o.unstable_setDisableYieldValue,be=null,je=null;function vn(t){if(typeof Qe=="function"&&gn(t),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(be,t)}catch{}}var Dn=Math.clz32?Math.clz32:Mo,Gl=Math.log,na=Math.LN2;function Mo(t){return t>>>=0,t===0?32:31-(Gl(t)/na|0)|0}var gs=256,vs=262144,ia=4194304;function Fi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function aa(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=Fi(r):(_&=T,_!==0?u=Fi(_):a||(a=T&~t,a!==0&&(u=Fi(a))))):(T=r&~f,T!==0?u=Fi(T):_!==0?u=Fi(_):a||(a=r&~t,a!==0&&(u=Fi(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Da(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Eo(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Dn(a),u=1<<r;n|=t[r],a&=~u}return n}function af(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vl(){var t=ia;return ia<<=1,(ia&62914560)===0&&(ia=4194304),t}function To(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function R(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Q(t,n,a,r,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,j=t.hiddenUpdates;for(a=_&~a;0<a;){var st=31-Dn(a),mt=1<<st;T[st]=0,P[st]=-1;var q=j[st];if(q!==null)for(j[st]=null,st=0;st<q.length;st++){var tt=q[st];tt!==null&&(tt.lane&=-536870913)}a&=~mt}r!==0&&ot(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function ot(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Dn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function lt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Dn(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function K(t,n){var a=n&-n;return a=(a&42)!==0?1:Rt(a),(a&(t.suspendedLanes|n))!==0?0:a}function Rt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ee(){var t=at.p;return t!==0?t:(t=window.event,t===void 0?32:T_(t.type))}function ne(t,n){var a=at.p;try{return at.p=t,n()}finally{at.p=a}}var re=Math.random().toString(36).slice(2),ie="__reactFiber$"+re,kt="__reactProps$"+re,xe="__reactContainer$"+re,ze="__reactEvents$"+re,Xe="__reactListeners$"+re,Nn="__reactHandles$"+re,Re="__reactResources$"+re,$t="__reactMarker$"+re,qn="__reactLoad$"+re;function Ae(t){delete t[ie],delete t[kt],delete t[Xe],delete t[Nn]}function cn(t){var n;if(n=t[ie])return n;for(var a=t.parentNode;a;){if(n=a[xe]||a[ie]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=a_(t);t!==null;){if(a=t[ie])return a;t=a_(t)}return n}t=a,a=t.parentNode}return null}function Jn(t){if(t=t[ie]||t[xe]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function hi(t){var n=t[Re];return n||(n=t[Re]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function he(t){t[$t]=!0}function $n(t){t[qn]=void 0}var Na=new Set,Pn={};function Un(t,n){In(t,n),In(t+"Capture",n)}function In(t,n){for(Pn[t]=n,t=0;t<n.length;t++)Na.add(n[t])}var Xl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tm={},bm={};function Vy(t){return Jt.call(bm,t)?!0:Jt.call(Tm,t)?!1:Xl.test(t)?bm[t]=!0:(Tm[t]=!0,!1)}var Ue=!1;function Am(){var t=Ue;return Ue=!1,t}function kl(t,n,a){if(Vy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ql(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function sa(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ti(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xy(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function sf(t){if(!t._valueTracker){var n=wm(t)?"checked":"value";t._valueTracker=Xy(t,n,""+t[n])}}function Cm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=wm(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var ky=/[\n"\\]/g;function di(t){return t.replace(ky,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function rf(t,n,a,r,u,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ti(n)):t.value!==""+ti(n)&&(t.value=""+ti(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?of(t,ti(t.value)):of(t,ti(n)):a!=null?of(t,ti(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ti(T):t.removeAttribute("name")}function Rm(t,n,a,r,u,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){sf(t);return}a=a!=null?""+ti(a):"",n=n!=null?""+ti(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),sf(t)}function of(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function tr(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ti(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Dm(t,n,a){if(n!=null&&(n=""+ti(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ti(a):""}function Nm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Ot(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ti(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),sf(t)}function er(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var qy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Um(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||qy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Lm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ue=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(Um(t,u,r),Ue=!0)}else for(var f in n)n.hasOwnProperty(f)&&Um(t,f,n[f])}function lf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(t){return Wy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var uf=null;function cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,ir=null;function Om(t){var n=Jn(t);if(n&&(t=n.stateNode)){var a=t[kt]||null;t:switch(t=n.stateNode,n.type){case"input":if(rf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+di(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[kt]||null;if(!u)throw Error(s(90));rf(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Cm(r)}break t;case"textarea":Dm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tr(t,!!a.multiple,n,!1)}}}var ff=!1;function zm(t,n,a){if(ff)return t(n,a);ff=!0;try{var r=t(n);return r}finally{if(ff=!1,(nr!==null||ir!==null)&&(Yu(),nr&&(n=nr,t=ir,ir=nr=null,Om(n),t)))for(n=0;n<t.length;n++)Om(t[n])}}function bo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[kt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=!1;if(ra)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){hf=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{hf=!1}var Ua=null,df=null,Wl=null;function Pm(){if(Wl)return Wl;var t,n=df,a=n.length,r,u="value"in Ua?Ua.value:Ua.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return Wl=u.slice(t,1<r?1-r:void 0)}function jl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function Im(){return!1}function Bn(t){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zl:Im,this.isPropagationStopped=Im,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),n}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Bn(La),wo=L({},La,{view:0,detail:0}),jy=Bn(wo),pf,mf,Co,Kl=L({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(pf=t.screenX-Co.screenX,mf=t.screenY-Co.screenY):mf=pf=0,Co=t),pf)},movementY:function(t){return"movementY"in t?t.movementY:mf}}),Bm=Bn(Kl),Zy=L({},Kl,{dataTransfer:0}),Qy=Bn(Zy),Ky=L({},wo,{relatedTarget:0}),gf=Bn(Ky),Jy=L({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),$y=Bn(Jy),tS=L({},La,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eS=Bn(tS),nS=L({},La,{data:0}),Fm=Bn(nS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=sS[t])?!!n[t]:!1}function vf(){return rS}var oS=L({},wo,{key:function(t){if(t.key){var n=iS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lS=Bn(oS),uS=L({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=Bn(uS),cS=L({},La,{submitter:0}),fS=Bn(cS),hS=L({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),dS=Bn(hS),pS=L({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Bn(pS),gS=L({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=Bn(gS),_S=L({},La,{newState:0,oldState:0,source:0}),xS=Bn(_S),yS=[9,13,27,32],_f=ra&&"CompositionEvent"in window,Ro=null;ra&&"documentMode"in document&&(Ro=document.documentMode);var SS=ra&&"TextEvent"in window&&!Ro,Gm=ra&&(!_f||Ro&&8<Ro&&11>=Ro),Vm=" ",Xm=!1;function km(t,n){switch(t){case"keyup":return yS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function MS(t,n){switch(t){case"compositionend":return qm(n);case"keypress":return n.which!==32?null:(Xm=!0,Vm);case"textInput":return t=n.data,t===Vm&&Xm?null:t;default:return null}}function ES(t,n){if(ar)return t==="compositionend"||!_f&&km(t,n)?(t=Pm(),Wl=df=Ua=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gm&&n.locale!=="ko"?null:n.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!TS[t.type]:n==="textarea"}function Wm(t,n,a,r){nr?ir?ir.push(r):ir=[r]:nr=r,n=Ju(n,"onChange"),0<n.length&&(a=new Ql("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Do=null,No=null;function bS(t){Ov(t,0)}function Jl(t){var n=fn(t);if(Cm(n))return t}function jm(t,n){if(t==="change")return n}var Zm=!1;if(ra){var xf;if(ra){var yf="oninput"in document;if(!yf){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),yf=typeof Qm.oninput=="function"}xf=yf}else xf=!1;Zm=xf&&(!document.documentMode||9<document.documentMode)}function Km(){Do&&(Do.detachEvent("onpropertychange",Jm),No=Do=null)}function Jm(t){if(t.propertyName==="value"&&Jl(No)){var n=[];Wm(n,No,t,cf(t)),zm(bS,n)}}function AS(t,n,a){t==="focusin"?(Km(),Do=n,No=a,Do.attachEvent("onpropertychange",Jm)):t==="focusout"&&Km()}function wS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(No)}function CS(t,n){if(t==="click")return Jl(n)}function RS(t,n){if(t==="input"||t==="change")return Jl(n)}function DS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:DS;function Uo(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Jt.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function Sf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function t0(t,n){var a=$m(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$m(a)}}function e0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?e0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function n0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Sf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Sf(t.document)}return n}function Mf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var NS=ra&&"documentMode"in document&&11>=document.documentMode,sr=null,Ef=null,Lo=null,Tf=!1;function i0(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tf||sr==null||sr!==Sf(r)||(r=sr,"selectionStart"in r&&Mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lo&&Uo(Lo,r)||(Lo=r,r=Ju(Ef,"onSelect"),0<r.length&&(n=new Ql("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=sr)))}function _s(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var rr={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},bf={},a0={};ra&&(a0=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function xs(t){if(bf[t])return bf[t];if(!rr[t])return t;var n=rr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in a0)return bf[t]=n[a];return t}var s0=xs("animationend"),r0=xs("animationiteration"),o0=xs("animationstart"),US=xs("transitionrun"),LS=xs("transitionstart"),OS=xs("transitioncancel"),l0=xs("transitionend"),u0=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function bi(t,n){u0.set(t,n),Un(n,[t])}var zS=0;function oa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ri.identifierPrefix;var a=zS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function c0(t){if(t==null||typeof t=="string")return t;var n=null,a=Ar;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function la(t,n){return t=c0(t),n=c0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],or=0,wf=0;function tu(){for(var t=or,n=wf=or=0;n<t;){var a=pi[n];pi[n++]=null;var r=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var f=pi[n];if(pi[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&f0(a,u,f)}}function eu(t,n,a,r){pi[or++]=t,pi[or++]=n,pi[or++]=a,pi[or++]=r,wf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Cf(t,n,a,r){return eu(t,n,a,r),nu(t)}function ys(t,n){return eu(t,null,null,n),nu(t)}function f0(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Dn(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function nu(t){if(50<el)throw el=0,qu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var lr={};function PS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,r){return new PS(t,n,a,r)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function h0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function iu(t,n,a,r,u,f){var _=0;if(r=t,typeof r=="function")Rf(r)&&(_=1);else if(typeof r=="string")_=cE(t,a,te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case zt:return t=Yn(31,a,n,u),t.elementType=zt,t.lanes=f,t;case F:return Ss(a.children,u,f,n);case rt:_=8,u|=24;break;case nt:return t=Yn(12,a,n,u|2),t.elementType=nt,t.lanes=f,t;case it:return t=Yn(13,a,n,u),t.elementType=it,t.lanes=f,t;case Z:return t=Yn(19,a,n,u),t.elementType=Z,t.lanes=f,t;case se:case D:return t=u|32,t=Yn(30,a,n,t),t.elementType=D,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ft:_=10;break t;case ct:_=9;break t;case V:_=11;break t;case xt:_=14;break t;case Tt:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(_,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function Ss(t,n,a,r){return t=Yn(7,t,r,n),t.lanes=a,t}function Df(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function d0(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function Nf(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var p0=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var a=p0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Kt(n)},p0.set(t,n),n)}return{value:t,source:n,stack:Kt(n)}}var ur=[],cr=0,au=null,Oo=0,gi=[],vi=0,Oa=null,Gi=1,Vi="";function ca(t,n){ur[cr++]=Oo,ur[cr++]=au,au=t,Oo=n}function m0(t,n,a){gi[vi++]=Gi,gi[vi++]=Vi,gi[vi++]=Oa,Oa=t;var r=Gi;t=Vi;var u=32-Dn(r)-1;r&=~(1<<u),a+=1;var f=32-Dn(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Gi=1<<32-Dn(n)+u|a<<u|r,Vi=f+t}else Gi=1<<f|a<<u|r,Vi=t}function su(t){t.return!==null&&(ca(t,1),m0(t,1,0))}function Uf(t){for(;t===au;)au=ur[--cr],ur[cr]=null,Oo=ur[--cr],ur[cr]=null;for(;t===Oa;)Oa=gi[--vi],gi[vi]=null,Vi=gi[--vi],gi[vi]=null,Gi=gi[--vi],gi[vi]=null}function g0(t,n){gi[vi++]=Gi,gi[vi++]=Vi,gi[vi++]=Oa,Gi=n.id,Vi=n.overflow,Oa=t}var _n=null,Ye=null,ye=!1,za=null,_i=!1,Lf=Error(s(519));function Pa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(mi(n,t)),Lf}function v0(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[ie]=t,n[kt]=r,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<il.length;a++)Me(il[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Rm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Nm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Bv(n.textContent,a)?(r.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),r.onScroll!=null&&Me("scroll",n),r.onScrollEnd!=null&&Me("scrollend",n),r.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||Pa(t,!0)}function ru(t){for(_n=t.return;_n;)switch(_n.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:_n=_n.return}}function fr(t){if(t!==_n)return!1;if(!ye)return ru(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ud(t.type,t.memoizedProps)),a=!a),a&&Ye&&Pa(t),ru(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=i_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=i_(t)}else n===27?(n=Ye,Ja(t.type)?(t=_d,_d=null,Ye=t):Ye=n):Ye=_n?yi(t.stateNode.nextSibling):null;return!0}function Ms(){Ye=_n=null,ye=!1}function Of(){var t=za;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),za=null),t}function zo(t){za===null?za=[t]:za.push(t)}var zf=Et(null),Es=null,fa=null;function Ia(t,n,a){yt(zf,n._currentValue),n._currentValue=a}function ha(t){t._currentValue=zf.current,Lt(zf)}function ou(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Pf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),ou(f.return,a,t),r||(_=null);break t}f=T.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),ou(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),ou(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ts(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=u.type;ei(u.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(u===b.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Pr):t=[Pr])}u=u.return}return t!==null&&Pf(n,t,a,r),n.flags|=262144,t!==null}function lu(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){Es=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return _0(Es,t)}function uu(t,n){return Es===null&&bs(t),_0(t,n)}function _0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(t===null)throw Error(s(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return a}var IS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},BS=o.unstable_scheduleCallback,FS=o.unstable_NormalPriority,sn={$$typeof:ft,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function If(){return{controller:new IS,data:new Map,refCount:0}}function Po(t){t.refCount--,t.refCount===0&&BS(FS,function(){t.controller.abort()})}function x0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Io=null;function HS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Bo=null,Bf=0,As=0,hr=null;function GS(t,n){if(Bo===null){var a=Bo=[];Bf=0,As=td(),hr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Bf++,n.then(y0,y0),n}function y0(){if(--Bf===0&&(Io=null,Bo!==null)){hr!==null&&(hr.status="fulfilled");var t=Bo;Bo=null,As=0,hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function VS(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var S0=wt.S;wt.S=function(t,n){if(dv=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&GS(t,n),Io!==null)for(var a=Dr;a!==null;)x0(a,Io),a=a.next;if(a=t.types,a!==null){for(var r=Dr;r!==null;)x0(r,a),r=r.next;if(As!==0){r=Io,r===null&&(r=Io=[]);for(var u=0;u<a.length;u++){var f=a[u];r.indexOf(f)===-1&&r.push(f)}}}S0!==null&&S0(t,n)};var ws=Et(null);function Ff(){var t=ws.current;return t!==null?t:ke.pooledCache}function cu(t,n){n===null?yt(ws,ws.current):yt(ws,n.pool)}function M0(){var t=Ff();return t===null?null:{parent:sn._currentValue,pool:t}}var dr=Error(s(460)),Hf=Error(s(474)),fu=Error(s(542)),hu={then:function(){}};function E0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function T0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,A0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,A0(t),t}throw Rs=n,dr}}function Cs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rs=a,dr):a}}var Rs=null;function b0(){if(Rs===null)throw Error(s(459));var t=Rs;return Rs=null,t}function A0(t){if(t===dr||t===fu)throw Error(s(483))}var pr=null,Fo=0;function du(t){var n=Fo;return Fo+=1,pr===null&&(pr=[]),T0(pr,t,n)}function Ba(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pu(t,n){throw n.$$typeof===B?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function w0(t){function n(W,G){if(t){var $=W.deletions;$===null?(W.deletions=[G],W.flags|=16):$.push(G)}}function a(W,G){if(!t)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function r(W){for(var G=new Map;W!==null;)W.key===null?G.set(W.index,W):G.set(W.key,W),W=W.sibling;return G}function u(W,G){return W=ua(W,G),W.index=0,W.sibling=null,W}function f(W,G,$){return W.index=$,t?($=W.alternate,$!==null?($=$.index,$<G?(W.flags|=2,G):$):(W.flags|=134217730,G)):(W.flags|=1048576,G)}function _(W){return t&&W.alternate===null&&(W.flags|=134217730),W}function T(W,G,$,pt){return G===null||G.tag!==6?(G=Df($,W.mode,pt),G.return=W,G):(G=u(G,$),G.return=W,G)}function P(W,G,$,pt){var Wt=$.type;return Wt===F?(W=st(W,G,$.props.children,pt,$.key),Ba(W,$),W):G!==null&&(G.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===Tt&&Cs(Wt)===G.type)?(G=u(G,$.props),Ba(G,$),G.return=W,G):(G=iu($.type,$.key,$.props,null,W.mode,pt),Ba(G,$),G.return=W,G)}function j(W,G,$,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=Nf($,W.mode,pt),G.return=W,G):(G=u(G,$.children||[]),G.return=W,G)}function st(W,G,$,pt,Wt){return G===null||G.tag!==7?(G=Ss($,W.mode,pt,Wt),G.return=W,G):(G=u(G,$),G.return=W,G)}function mt(W,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Df(""+G,W.mode,$),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return $=iu(G.type,G.key,G.props,null,W.mode,$),Ba($,G),$.return=W,$;case w:return G=Nf(G,W.mode,$),G.return=W,G;case Tt:return G=Cs(G),mt(W,G,$)}if(Ot(G)||ut(G))return G=Ss(G,W.mode,$,null),G.return=W,G;if(typeof G.then=="function")return mt(W,du(G),$);if(G.$$typeof===ft)return mt(W,uu(W,G),$);pu(W,G)}return null}function q(W,G,$,pt){var Wt=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Wt!==null?null:T(W,G,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return $.key===Wt?P(W,G,$,pt):null;case w:return $.key===Wt?j(W,G,$,pt):null;case Tt:return $=Cs($),q(W,G,$,pt)}if(Ot($)||ut($))return Wt!==null?null:st(W,G,$,pt,null);if(typeof $.then=="function")return q(W,G,du($),pt);if($.$$typeof===ft)return q(W,G,uu(W,$),pt);pu(W,$)}return null}function tt(W,G,$,pt,Wt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return W=W.get($)||null,T(G,W,""+pt,Wt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case N:return W=W.get(pt.key===null?$:pt.key)||null,P(G,W,pt,Wt);case w:return W=W.get(pt.key===null?$:pt.key)||null,j(G,W,pt,Wt);case Tt:return pt=Cs(pt),tt(W,G,$,pt,Wt)}if(Ot(pt)||ut(pt))return W=W.get($)||null,st(G,W,pt,Wt,null);if(typeof pt.then=="function")return tt(W,G,$,du(pt),Wt);if(pt.$$typeof===ft)return tt(W,G,$,uu(G,pt),Wt);pu(G,pt)}return null}function It(W,G,$,pt){for(var Wt=null,Te=null,ae=G,le=G=0,ln=null;ae!==null&&le<$.length;le++){ae.index>le?(ln=ae,ae=null):ln=ae.sibling;var Ce=q(W,ae,$[le],pt);if(Ce===null){ae===null&&(ae=ln);break}t&&ae&&Ce.alternate===null&&n(W,ae),G=f(Ce,G,le),Te===null?Wt=Ce:Te.sibling=Ce,Te=Ce,ae=ln}if(le===$.length)return a(W,ae),ye&&ca(W,le),Wt;if(ae===null){for(;le<$.length;le++)ae=mt(W,$[le],pt),ae!==null&&(G=f(ae,G,le),Te===null?Wt=ae:Te.sibling=ae,Te=ae);return ye&&ca(W,le),Wt}for(ae=r(ae);le<$.length;le++)ln=tt(ae,W,le,$[le],pt),ln!==null&&(t&&(Ce=ln.alternate,Ce!==null&&ae.delete(Ce.key===null?le:Ce.key)),G=f(ln,G,le),Te===null?Wt=ln:Te.sibling=ln,Te=ln);return t&&ae.forEach(function(is){return n(W,is)}),ye&&ca(W,le),Wt}function Qt(W,G,$,pt){if($==null)throw Error(s(151));for(var Wt=null,Te=null,ae=G,le=G=0,ln=null,Ce=$.next();ae!==null&&!Ce.done;le++,Ce=$.next()){ae.index>le?(ln=ae,ae=null):ln=ae.sibling;var is=q(W,ae,Ce.value,pt);if(is===null){ae===null&&(ae=ln);break}t&&ae&&is.alternate===null&&n(W,ae),G=f(is,G,le),Te===null?Wt=is:Te.sibling=is,Te=is,ae=ln}if(Ce.done)return a(W,ae),ye&&ca(W,le),Wt;if(ae===null){for(;!Ce.done;le++,Ce=$.next())Ce=mt(W,Ce.value,pt),Ce!==null&&(G=f(Ce,G,le),Te===null?Wt=Ce:Te.sibling=Ce,Te=Ce);return ye&&ca(W,le),Wt}for(ae=r(ae);!Ce.done;le++,Ce=$.next())Ce=tt(ae,W,le,Ce.value,pt),Ce!==null&&(t&&(ln=Ce.alternate,ln!==null&&ae.delete(ln.key===null?le:ln.key)),G=f(Ce,G,le),Te===null?Wt=Ce:Te.sibling=Ce,Te=Ce);return t&&ae.forEach(function(ME){return n(W,ME)}),ye&&ca(W,le),Wt}function me(W,G,$,pt){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case N:t:{for(var Wt=$.key;G!==null;){if(G.key===Wt){if(Wt=$.type,Wt===F){if(G.tag===7){a(W,G.sibling),pt=u(G,$.props.children),Ba(pt,$),pt.return=W,W=pt;break t}}else if(G.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===Tt&&Cs(Wt)===G.type){a(W,G.sibling),pt=u(G,$.props),Ba(pt,$),pt.return=W,W=pt;break t}a(W,G);break}else n(W,G);G=G.sibling}$.type===F?(pt=Ss($.props.children,W.mode,pt,$.key),Ba(pt,$),pt.return=W,W=pt):(pt=iu($.type,$.key,$.props,null,W.mode,pt),Ba(pt,$),pt.return=W,W=pt)}return _(W);case w:t:{for(Wt=$.key;G!==null;){if(G.key===Wt)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(W,G.sibling),pt=u(G,$.children||[]),pt.return=W,W=pt;break t}else{a(W,G);break}else n(W,G);G=G.sibling}pt=Nf($,W.mode,pt),pt.return=W,W=pt}return _(W);case Tt:return $=Cs($),me(W,G,$,pt)}if(Ot($))return It(W,G,$,pt);if(ut($)){if(Wt=ut($),typeof Wt!="function")throw Error(s(150));return $=Wt.call($),Qt(W,G,$,pt)}if(typeof $.then=="function")return me(W,G,du($),pt);if($.$$typeof===ft)return me(W,G,uu(W,$),pt);pu(W,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(W,G.sibling),pt=u(G,$),pt.return=W,W=pt):(a(W,G),pt=Df($,W.mode,pt),pt.return=W,W=pt),_(W)):a(W,G)}return function(W,G,$,pt){try{Fo=0;var Wt=me(W,G,$,pt);return pr=null,Wt}catch(ae){if(ae===dr||ae===fu)throw ae;var Te=Yn(29,ae,null,W.mode);return Te.lanes=pt,Te.return=W,Te}finally{}}}var Ds=w0(!0),C0=w0(!1),Fa=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ga(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=nu(t),f0(t,null,a),n}return eu(t,r,n,a),nu(t)}function Ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,lt(t,a)}}function Xf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var kf=!1;function Go(){if(kf){var t=hr;if(t!==null)throw t}}function Vo(t,n,a,r){kf=!1;var u=t.updateQueue;Fa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,j=P.next;P.next=null,_===null?f=j:_.next=j,_=P;var st=t.alternate;st!==null&&(st=st.updateQueue,T=st.lastBaseUpdate,T!==_&&(T===null?st.firstBaseUpdate=j:T.next=j,st.lastBaseUpdate=P))}if(f!==null){var mt=u.baseState;_=0,st=j=P=null,T=f;do{var q=T.lane&-536870913,tt=q!==T.lane;if(tt?(Ee&q)===q:(r&q)===q){q!==0&&q===As&&(kf=!0),st!==null&&(st=st.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var It=t,Qt=T;q=n;var me=a;switch(Qt.tag){case 1:if(It=Qt.payload,typeof It=="function"){mt=It.call(me,mt,q);break t}mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Qt.payload,q=typeof It=="function"?It.call(me,mt,q):It,q==null)break t;mt=L({},mt,q);break t;case 2:Fa=!0}}q=T.callback,q!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=u.callbacks,tt===null?u.callbacks=[q]:tt.push(q))}else tt={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},st===null?(j=st=tt,P=mt):st=st.next=tt,_|=q;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;tt=T,T=tt.next,tt.next=null,u.lastBaseUpdate=tt,u.shared.pending=null}}while(!0);st===null&&(P=mt),u.baseState=P,u.firstBaseUpdate=j,u.lastBaseUpdate=st,f===null&&(u.shared.lanes=0),ja|=_,t.lanes=_,t.memoizedState=mt}}function R0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function D0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)R0(a[t],n)}var Va=Et(null),mu=Et(0);function N0(t,n){t=va,yt(mu,t),yt(Va,n),va=t|n.baseLanes}function qf(){yt(mu,va),yt(Va,Va.current)}function Yf(){va=mu.current,Lt(Va),Lt(mu)}var Tn=Et(null),Ln=null;function Xa(t){var n=t.alternate;yt(bn,bn.current&1),yt(Tn,t),Ln===null&&(n===null||Va.current!==null||n.memoizedState!==null)&&(Ln=t)}function Wf(t){yt(bn,bn.current),yt(Tn,t),Ln===null&&(Ln=t)}function U0(t){t.tag===22?(yt(bn,bn.current),yt(Tn,t),Ln===null&&(Ln=t)):ka()}function ka(){yt(bn,bn.current),yt(Tn,Tn.current)}function ni(t){Lt(Tn),Ln===t&&(Ln=null),Lt(bn)}var bn=Et(0);function Xo(t,n){yt(Tn,Tn.current),yt(bn,n)}function jf(t){Lt(bn),Lt(Tn),Ln===t&&(Ln=null)}function gu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||gd(a)||vd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,pe=null,He=null,rn=null,vu=!1,mr=!1,Ns=!1,_u=0,ko=0,gr=null,XS=0;function tn(){throw Error(s(321))}function Zf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Qf(t,n,a,r,u,f){return da=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wt.H=t===null||t.memoizedState===null?mg:gg,Ns=!1,f=a(r,u),Ns=!1,mr&&(f=O0(n,a,r,u)),L0(t),f}function L0(t){wt.H=bu;var n=He!==null&&He.next!==null;if(da=0,rn=He=pe=null,vu=!1,ko=0,gr=null,n)throw Error(s(300));t===null||on||(t=t.dependencies,t!==null&&lu(t)&&(on=!0))}function O0(t,n,a,r){pe=t;var u=0;do{if(mr&&(gr=null),ko=0,mr=!1,25<=u)throw Error(s(301));if(u+=1,rn=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}wt.H=KS,f=n(a,r)}while(mr);return f}function kS(){var t=wt.H,n=t.useState()[0];return n=typeof n.then=="function"?qo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(pe.flags|=1024),n}function Kf(){var t=_u!==0;return _u=0,t}function Jf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $f(t){if(vu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vu=!1}da=0,rn=He=pe=null,mr=!1,ko=_u=0,gr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?pe.memoizedState=rn=t:rn=rn.next=t,rn}function nn(){if(He===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=rn===null?pe.memoizedState:rn.next;if(n!==null)rn=n,He=t;else{if(t===null)throw pe.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},rn===null?pe.memoizedState=rn=t:rn=rn.next=t}return rn}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(t){var n=ko;return ko+=1,gr===null&&(gr=[]),t=T0(gr,t,n),n=pe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,wt.H=n===null||n.memoizedState===null?mg:gg),t}function yu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qo(t);if(t.$$typeof===Y)return;if(t.$$typeof===ft)return En(t)}throw Error(s(438,String(t)))}function th(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xu(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=ge;return n.index++,a}function pa(t,n){return typeof n=="function"?n(t):n}function Su(t){var n=nn();return eh(n,He,t)}function eh(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=_=null,P=null,j=n,st=!1;do{var mt=j.lane&-536870913;if(mt!==j.lane?(Ee&mt)===mt:(da&mt)===mt){var q=j.revertLane;if(q===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),mt===As&&(st=!0);else if((da&q)===q){j=j.next,q===As&&(st=!0);continue}else mt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(T=P=mt,_=f):P=P.next=mt,pe.lanes|=q,ja|=q;mt=j.action,Ns&&a(f,mt),f=j.hasEagerState?j.eagerState:a(f,mt)}else q={lane:mt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(T=P=q,_=f):P=P.next=q,pe.lanes|=mt,ja|=mt;j=j.next}while(j!==null&&j!==n);if(P===null?_=f:P.next=T,!ei(f,t.memoizedState)&&(on=!0,st&&(a=hr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=P,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function nh(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ei(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function z0(t,n,a){var r=pe,u=nn(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ei((He||u).memoizedState,a);if(_&&(u.memoizedState=a,on=!0),u=u.queue,sh(B0.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||_||rn!==null&&(rn.memoizedState.tag&1)!==0,vr(t?9:8,{destroy:void 0},I0.bind(null,r,u,a,n),null),t){if(r.flags|=2048,ke===null)throw Error(s(349));f||(da&127)!==0||P0(r,n,a)}return a}function P0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=xu(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function I0(t,n,a,r){n.value=a,n.getSnapshot=r,F0(n)&&H0(t)}function B0(t,n,a){return a(function(){F0(n)&&H0(t)})}function F0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function H0(t){var n=ys(t,2);n!==null&&Qn(n,t,2)}function ih(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Ns){vn(!0);try{a()}finally{vn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function G0(t,n,a,r){return t.baseState=a,eh(t,He,typeof r=="function"?r:pa)}function qS(t,n,a,r,u){if(Tu(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};wt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,V0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function V0(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=wt.T,_={};_.types=f!==null?f.types:null,wt.T=_;try{var T=a(u,r),P=wt.S;P!==null&&P(_,T),X0(t,n,T)}catch(j){ah(t,n,j)}finally{f!==null&&_.types!==null&&(f.types=_.types),wt.T=f}}else try{f=a(u,r),X0(t,n,f)}catch(j){ah(t,n,j)}}function X0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){k0(t,n,r)},function(r){return ah(t,n,r)}):k0(t,n,a)}function k0(t,n,a){n.status="fulfilled",n.value=a,q0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,V0(t,a)))}function ah(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,q0(n),n=n.next;while(n!==r)}t.action=null}function q0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Y0(t,n){return n}function W0(t,n){if(ye){var a=ke.formState;if(a!==null){t:{var r=pe;if(ye){if(Ye){e:{for(var u=Ye,f=_i;u.nodeType!==8;){if(!f){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=yi(u.nextSibling),r=u.data==="F!";break t}}Pa(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y0,lastRenderedState:n},a.queue=r,a=hg.bind(null,pe,r),r.dispatch=a,r=ih(!1),f=ch.bind(null,pe,!1,r.queue),r=Fn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=qS.bind(null,pe,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function j0(t){var n=nn();return Z0(n,He,t)}function Z0(t,n,a){if(n=eh(t,n,Y0)[0],t=Su(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=qo(n)}catch(_){throw _===dr?fu:_}else r=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,vr(9,{destroy:void 0},YS.bind(null,u,a),null)),[r,f,t]}function YS(t,n){t.action=n}function Q0(t){var n=nn(),a=He;if(a!==null)return Z0(n,a,t);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function vr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=xu(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function K0(){return nn().memoizedState}function Mu(t,n,a,r){var u=Fn();pe.flags|=t,u.memoizedState=vr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Eu(t,n,a,r){var u=nn();r=r===void 0?null:r;var f=u.memoizedState.inst;He!==null&&r!==null&&Zf(r,He.memoizedState.deps)?u.memoizedState=vr(n,f,a,r):(pe.flags|=t,u.memoizedState=vr(1|n,f,a,r))}function J0(t,n){Mu(8390656,8,t,n)}function sh(t,n){Eu(2048,8,t,n)}function WS(t){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=xu(),pe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function $0(t){var n=nn().memoizedState;return WS({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function tg(t,n){return Eu(4,2,t,n)}function eg(t,n){return Eu(4,4,t,n)}function ng(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ig(t,n,a){a=a!=null?a.concat([t]):null,Eu(4,4,ng.bind(null,n,t),a)}function rh(){}function ag(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Zf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function sg(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Zf(n,r[1]))return r[0];if(r=t(),Ns){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[r,n],r}function oh(t,n,a){return a===void 0||(da&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=mv(),pe.lanes|=t,ja|=t,a)}function rg(t,n,a,r){return ei(a,n)?a:Va.current!==null?(t=oh(t,a,r),ei(t,n)||(on=!0),t):(da&106)===0||(da&1073741824)!==0&&(Ee&261930)===0?(on=!0,t.memoizedState=a):(t=mv(),pe.lanes|=t,ja|=t,n)}function og(t,n,a,r,u){var f=at.p;at.p=f!==0&&8>f?f:8;var _=wt.T,T={};T.types=_!==null?_.types:null,wt.T=T,ch(t,!1,n,a);try{var P=u(),j=wt.S;if(j!==null&&j(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var st=VS(P,r);Yo(t,n,st,ri(t))}else Yo(t,n,r,ri(t))}catch(mt){Yo(t,n,{then:function(){},status:"rejected",reason:mt},ri())}finally{at.p=f,_!==null&&T.types!==null&&(_.types=T.types),wt.T=_}}function jS(){}function lh(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=lg(t).queue;og(t,u,n,bt,a===null?jS:function(){return ug(t),a(r)})}function lg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:bt,baseState:bt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:bt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ug(t){var n=lg(t);n.next===null&&(n=t.alternate.memoizedState),Yo(t,n.next.queue,{},ri())}function uh(){return En(Pr)}function cg(){return nn().memoizedState}function fg(){return nn().memoizedState}function ZS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Ha(a);var r=Ga(n,t,a);r!==null&&(Qn(r,n,a),Ho(r,n,a)),n={cache:If()},t.payload=n;return}n=n.return}}function QS(t,n,a){var r=ri();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tu(t)?dg(n,a):(a=Cf(t,n,a,r),a!==null&&(Qn(a,t,r),pg(a,n,r)))}function hg(t,n,a){var r=ri();Yo(t,n,a,r)}function Yo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tu(t))dg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(u.hasEagerState=!0,u.eagerState=T,ei(T,_))return eu(t,n,u,0),ke===null&&tu(),!1}catch{}finally{}if(a=Cf(t,n,u,r),a!==null)return Qn(a,t,r),pg(a,n,r),!0}return!1}function ch(t,n,a,r){if(r={lane:2,revertLane:td(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tu(t)){if(n)throw Error(s(479))}else n=Cf(t,a,r,2),n!==null&&Qn(n,t,2)}function Tu(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function dg(t,n){mr=vu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function pg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,lt(t,a)}}var bu={readContext:En,use:yu,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn,useEffectEvent:tn},mg={readContext:En,use:yu,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:J0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Mu(4194308,4,ng.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Mu(4194308,4,t,n)},useInsertionEffect:function(t,n){Mu(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var r=t();if(Ns){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Fn();if(a!==void 0){var u=a(n);if(Ns){vn(!0);try{a(n)}finally{vn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=QS.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=ih(t);var n=t.queue,a=hg.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:rh,useDeferredValue:function(t,n){var a=Fn();return oh(a,t,n)},useTransition:function(){var t=ih(!1);return t=og.bind(null,pe,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=pe,u=Fn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(Ee&127)!==0||P0(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,J0(B0.bind(null,r,f,t),[t]),r.flags|=2048,vr(9,{destroy:void 0},I0.bind(null,r,f,a,n),null),a},useId:function(){var t=Fn(),n=ke.identifierPrefix;if(ye){var a=Vi,r=Gi;a=(r&~(1<<32-Dn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=_u++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=XS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uh,useFormState:W0,useActionState:W0,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ch.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:th,useCacheRefresh:function(){return Fn().memoizedState=ZS.bind(null,pe)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},gg={readContext:En,use:yu,useCallback:ag,useContext:En,useEffect:sh,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:sg,useReducer:Su,useRef:K0,useState:function(){return Su(pa)},useDebugValue:rh,useDeferredValue:function(t,n){var a=nn();return rg(a,He.memoizedState,t,n)},useTransition:function(){var t=Su(pa)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:qo(t),n]},useSyncExternalStore:z0,useId:cg,useHostTransitionStatus:uh,useFormState:j0,useActionState:j0,useOptimistic:function(t,n){var a=nn();return G0(a,He,t,n)},useMemoCache:th,useCacheRefresh:fg,useEffectEvent:$0},KS={readContext:En,use:yu,useCallback:ag,useContext:En,useEffect:sh,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:sg,useReducer:nh,useRef:K0,useState:function(){return nh(pa)},useDebugValue:rh,useDeferredValue:function(t,n){var a=nn();return He===null?oh(a,t,n):rg(a,He.memoizedState,t,n)},useTransition:function(){var t=nh(pa)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:qo(t),n]},useSyncExternalStore:z0,useId:cg,useHostTransitionStatus:uh,useFormState:Q0,useActionState:Q0,useOptimistic:function(t,n){var a=nn();return He!==null?G0(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:th,useCacheRefresh:fg,useEffectEvent:$0};function fh(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var hh={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ri(),u=Ha(r);u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,r),n!==null&&(Qn(n,t,r),Ho(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ri(),u=Ha(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,r),n!==null&&(Qn(n,t,r),Ho(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),r=Ha(a);r.tag=2,n!=null&&(r.callback=n),n=Ga(t,r,a),n!==null&&(Qn(n,t,a),Ho(n,t,a))}};function vg(t,n,a,r,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Uo(a,r)||!Uo(u,f):!0}function _g(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&hh.enqueueReplaceState(n,n.state,null)}function Us(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function xg(t){$l(t)}function yg(t){console.error(t)}function Sg(t){$l(t)}function Au(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Mg(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function dh(t,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Au(t,n)},a}function Eg(t){return t=Ha(t),t.tag=3,t}function Tg(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Mg(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Mg(n,a,r),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function JS(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ts(n,a,u,!0),a=Tn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Wu():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Kh(t,r,u)),!1;case 22:return a.flags|=65536,r===hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Kh(t,r,u)),!1}throw Error(s(435,a.tag))}return Kh(t,r,u),Wu(),!1}if(ye)return n=Tn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Lf&&(t=Error(s(422),{cause:r}),zo(mi(t,a)))):(r!==Lf&&(n=Error(s(423),{cause:r}),zo(mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=mi(r,a),u=dh(t.stateNode,r,u),Xf(t,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=mi(f,a),tl===null?tl=[f]:tl.push(f),en!==4&&(en=2),n===null)return!0;r=mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=dh(a.stateNode,r,t),Xf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Za===null||!Za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Eg(u),Tg(u,t,a,r),Xf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ph=Error(s(461)),on=!1;function hn(t,n,a,r){n.child=t===null?C0(n,null,a,r):Ds(n,t.child,a,r)}function bg(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var T in r)T!=="ref"&&(_[T]=r[T])}else _=r;return bs(n),r=Qf(t,n,a,_,f,u),T=Kf(),t!==null&&!on?(Jf(t,n,u),ma(t,n,u)):(ye&&T&&su(n),n.flags|=1,hn(t,n,r,u),n.child)}function Ag(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!Rf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wg(t,n,f,r,u)):(t=iu(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Mh(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(_,r)&&t.ref===n.ref)return ma(t,n,u)}return n.flags|=1,t=ua(f,r),t.ref=n.ref,t.return=n,n.child=t}function wg(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(Uo(f,r)&&t.ref===n.ref)if(on=!1,n.pendingProps=r=f,Mh(t,u))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,ma(t,n,u)}return mh(t,n,a,r,u)}function Cg(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Rg(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&cu(n,f!==null?f.cachePool:null),f!==null?N0(n,f):qf(),U0(n);else return r=n.lanes=536870912,Rg(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(cu(n,f.cachePool),N0(n,f),ka(),n.memoizedState=null):(t!==null&&cu(n,null),qf(),ka());return hn(t,n,u,a),n.child}function Wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rg(t,n,a,r,u){var f=Ff();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&cu(n,null),qf(),U0(n),t!==null&&Ts(t,n,r,!0),n.childLanes=u,null}function wu(t,n){return n=Cu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Dg(t,n,a){return Ds(n,t.child,null,a),t=wu(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function $S(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(r.mode==="hidden")return t=wu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Wo(null,t);if(Wf(n),(t=Ye)?(t=n_(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=d0(t),a.return=n,n.child=a,_n=n,Ye=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return wu(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Wf(n),u)if(n.flags&256)n.flags&=-257,n=Dg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||Ts(t,n,a,!1),u=(a&t.childLanes)!==0,on||u){if(Va.current===null){if(r=ke,r!==null&&(_=K(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ys(t,_),Qn(r,t,_),ph;Wu()}n=Dg(t,n,a)}else t=f.treeContext,Ye=yi(_.nextSibling),_n=n,ye=!0,za=null,_i=!1,t!==null&&g0(n,t),n=wu(n,r),n.flags|=134221824;return n}return t=ua(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function _r(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function mh(t,n,a,r,u){return bs(n),a=Qf(t,n,a,r,void 0,u),r=Kf(),t!==null&&!on?(Jf(t,n,u),ma(t,n,u)):(ye&&r&&su(n),n.flags|=1,hn(t,n,a,u),n.child)}function Ng(t,n,a,r,u,f){return bs(n),n.updateQueue=null,a=O0(n,r,a,u),L0(t),r=Kf(),t!==null&&!on?(Jf(t,n,f),ma(t,n,f)):(ye&&r&&su(n),n.flags|=1,hn(t,n,a,f),n.child)}function Ug(t,n,a,r,u){if(bs(n),n.stateNode===null){var f=lr,_=a.contextType;typeof _=="object"&&_!==null&&(f=En(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Gf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?En(_):lr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(fh(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&hh.enqueueReplaceState(f,f.state,null),Vo(n,r,f,u),Go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=Us(a,T);f.props=P;var j=f.context,st=a.contextType;_=lr,typeof st=="object"&&st!==null&&(_=En(st));var mt=a.getDerivedStateFromProps;st=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,st||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||j!==_)&&_g(n,f,r,_),Fa=!1;var q=n.memoizedState;f.state=q,Vo(n,r,f,u),Go(),j=n.memoizedState,T||q!==j||Fa?(typeof mt=="function"&&(fh(n,a,mt,r),j=n.memoizedState),(P=Fa||vg(n,a,P,r,q,j,_))?(st||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),f.props=r,f.state=j,f.context=_,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Vf(t,n),_=n.memoizedProps,st=Us(a,_),f.props=st,mt=n.pendingProps,q=f.context,j=a.contextType,P=lr,typeof j=="object"&&j!==null&&(P=En(j)),T=a.getDerivedStateFromProps,(j=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==mt||q!==P)&&_g(n,f,r,P),Fa=!1,q=n.memoizedState,f.state=q,Vo(n,r,f,u),Go();var tt=n.memoizedState;_!==mt||q!==tt||Fa||t!==null&&t.dependencies!==null&&lu(t.dependencies)?(typeof T=="function"&&(fh(n,a,T,r),tt=n.memoizedState),(st=Fa||vg(n,a,st,r,q,tt,P)||t!==null&&t.dependencies!==null&&lu(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,tt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,tt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=P,r=st):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,_r(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Ds(n,t.child,null,u),n.child=Ds(n,null,a,u)):hn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ma(t,n,u),t}function Lg(t,n,a,r){return Ms(),n.flags|=256,hn(t,n,a,r),n.child}var gh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vh(t){return{baseLanes:t,cachePool:M0()}}function _h(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function Og(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(u?Xa(n):ka(),(t=Ye)?(t=n_(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=d0(t),a.return=n,n.child=a,_n=n,Ye=null)):t=null,t===null)throw Pa(n);return vd(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,u?(ka(),u=n.mode,f=Cu({mode:"hidden",children:f},u),r=Ss(r,u,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=vh(a),r.childLanes=_h(t,_,a),n.memoizedState=gh,Wo(null,r)):(Xa(n),xh(n,f))}var T=t.memoizedState;if(T!==null){var P=T.dehydrated;if(P!==null)return tM(t,n,f,_,r,P,T,a)}return u?(ka(),u=r.fallback,f=n.mode,T=t.child,P=T.sibling,r=ua(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,P!==null?u=ua(P,u):(u=Ss(u,f,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,Wo(null,r),r=n.child,u=t.child.memoizedState,u===null?u=vh(a):(f=u.cachePool,f!==null?(T=sn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=M0(),u={baseLanes:u.baseLanes|a,cachePool:f}),r.memoizedState=u,r.childLanes=_h(t,_,a),n.memoizedState=gh,Wo(t.child,r)):(Xa(n),a=t.child,t=a.sibling,a=ua(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function xh(t,n){return n=Cu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cu(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function Ru(t,n,a){return Ds(n,t.child,null,a),t=xh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function tM(t,n,a,r,u,f,_,T){if(a)return n.flags&256?(Xa(n),n.flags&=-257,Ru(t,n,T)):n.memoizedState!==null?(ka(),n.child=t.child,n.flags|=128,null):(ka(),f=u.fallback,_=n.mode,u=Cu({mode:"visible",children:u.children},_),f=Ss(f,_,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Ds(n,t.child,null,T),u=n.child,u.memoizedState=vh(T),u.childLanes=_h(t,r,T),n.memoizedState=gh,Wo(null,u));if(Xa(n),vd(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var P=r.dgst;return r=P,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,zo({value:u,source:null,stack:null})),Ru(t,n,T)}if(on||Ts(t,n,T,!1),r=(T&t.childLanes)!==0,on||r){if(Va.current!==null)return Ru(t,n,T);if(r=ke,r!==null&&(u=K(r,T),u!==0&&u!==_.retryLane))throw _.retryLane=u,ys(t,u),Qn(r,t,u),ph;return gd(f)||Wu(),Ru(t,n,T)}return gd(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ye=yi(f.nextSibling),_n=n,ye=!0,za=null,_i=!1,t!==null&&g0(n,t),n=xh(n,u.children),n.flags|=134221824,n)}function zg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ou(t.return,n,a)}function Pg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&gu(a)===null&&(n=t),t=t.sibling}return n}function Du(t,n,a,r,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function yh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Sh(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=bn.current;if(n.flags&128)return Xo(n,_),null;var T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,Xo(n,_),u==="backwards"&&t!==null?(yh(t),hn(t,n,r,a),yh(t)):hn(t,n,r,a),r=ye?Oo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zg(t,a,n);else if(t.tag===19)zg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=Pg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,yh(n)),Du(n,!0,u,null,f,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&gu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Du(n,!0,a,null,f,r);break;case"together":Du(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Pg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Du(n,!1,u,a,f,r)}return n.child}function Ig(t,n,a){var r=n.pendingProps;return Ia(n,n.type,r.value),hn(t,n,r.children,a),n.child}function ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ts(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ua(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ua(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Mh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&lu(t)))}function eM(t,n,a){switch(n.tag){case 3:et(n,n.stateNode.containerInfo),Ia(n,sn,t.memoizedState.cache),Ms();break;case 27:case 5:Mt(n);break;case 4:et(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Wf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Xa(n),n.flags|=128,null;r=Ts(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?Og(t,n,a):(Xa(n),t=ma(t,n,a),t!==null?t.sibling:null)}Xa(n);break;case 19:if(n.flags&128)return Sh(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ts(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Sh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Xo(n,bn.current),r)break;return null;case 22:return n.lanes=0,Cg(t,n,a,n.pendingProps);case 24:Ia(n,sn,t.memoizedState.cache)}return ma(t,n,a)}function Bg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!Mh(t,a)&&(n.flags&128)===0)return on=!1,eM(t,n,a);on=(t.flags&131072)!==0}else on=!1,ye&&(n.flags&1048576)!==0&&m0(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Cs(n.elementType),n.type=t,typeof t=="function")Rf(t)?(r=Us(t,r),n.tag=1,n=Ug(null,n,t,r,a)):(n.tag=0,n=mh(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===V){n.tag=11,n=bg(null,n,t,r,a);break t}else if(u===xt){n.tag=14,n=Ag(null,n,t,r,a);break t}else if(u===ft){n.tag=10,n.type=t,n=Ig(null,n,a);break t}}throw n=Pt(t)||t,Error(s(306,n,""))}}return n;case 0:return mh(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Us(r,n.pendingProps),Ug(t,n,r,u,a);case 3:t:{if(et(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Vf(t,n),Vo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ia(n,sn,r),r!==f.cache&&Pf(n,[sn],a,!0),Go(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Lg(t,n,r,a);break t}else if(r!==u){u=mi(Error(s(424)),n),zo(u),n=Lg(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ye=yi(t.firstChild),_n=n,ye=!0,za=null,_i=!0,a=C0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ms(),r===u){n=ma(t,n,a);break t}hn(t,n,r,a)}n=n.child}return n;case 26:return _r(t,n),t===null?(a=u_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(n.stateNode=Vv(n.type,n.pendingProps,O.current,n)):n.memoizedState=u_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Mt(n),t===null&&ye&&(r=n.stateNode=s_(n.type,n.pendingProps,O.current),_n=n,_i=!0,u=Ye,Ja(n.type)?(_d=u,Ye=yi(r.firstChild)):Ye=u),hn(t,n,n.pendingProps.children,a),_r(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((u=r=Ye)&&(r=ZM(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,_n=n,Ye=yi(r.firstChild),_i=!1,u=!0):u=!1),u||Pa(n)),Mt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,ud(u,f)?r=null:_!==null&&ud(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Qf(t,n,kS,null,null,a),Pr._currentValue=u),_r(t,n),hn(t,n,r,a),n.child;case 6:return t===null&&ye&&((t=a=Ye)&&(a=QM(a,n.pendingProps,_i),a!==null?(n.stateNode=a,_n=n,Ye=null,t=!0):t=!1),t||Pa(n)),null;case 13:return Og(t,n,a);case 4:return et(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ds(n,null,r,a):hn(t,n,r,a),n.child;case 11:return bg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,_r(t,n),hn(t,n,r,a),n.child;case 8:return hn(t,n,n.pendingProps.children,a),n.child;case 12:return hn(t,n,n.pendingProps.children,a),n.child;case 10:return Ig(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,bs(n),u=En(u),r=r(u),n.flags|=1,hn(t,n,r,a),n.child;case 14:return Ag(t,n,n.type,n.pendingProps,a);case 15:return wg(t,n,n.type,n.pendingProps,a);case 19:return Sh(t,n,a);case 31:return $S(t,n,a);case 22:return Cg(t,n,a,n.pendingProps);case 24:return bs(n),r=En(sn),t===null?(u=Ff(),u===null&&(u=ke,f=If(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Gf(n),Ia(n,sn,u)):((t.lanes&a)!==0&&(Vf(t,n),Vo(n,null,null,a),Go()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,sn,r)):(r=f.cache,Ia(n,sn,r),r!==u.cache&&Pf(n,[sn],a,!0))),hn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ye&&su(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:_r(t,n),hn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(t){t.flags|=4}function Eh(t,n,a,r,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?d_(n,r):d_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(xv())t.flags|=8192;else throw Rs=hu,Hf}else t.flags&=-16777217}function Fg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!p_(n))if(xv())t.flags|=8192;else throw Rs=hu,Hf}function Nu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Vl():536870912,t.lanes|=n,Er|=n)}function jo(t,n){if(!ye)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function nM(t,n,a){var r=n.pendingProps;switch(Uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ha(sn),dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fr(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Of())),We(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ga(n),f!==null?(We(n),Fg(n,f)):(We(n),Eh(n,u,null,r,a))):f?f!==t.memoizedState?(ga(n),We(n),Fg(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ga(n),We(n),Eh(n,u,t,r,a)),null;case 27:if(gt(n),a=O.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),n.subtreeFlags&=-33554433,null}t=te.current,fr(n)?v0(n):(t=s_(u,r,a),n.stateNode=t,ga(n))}return We(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),n.subtreeFlags&=-33554433,null}if(f=te.current,fr(n))v0(n);else{var _=sl(O.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[ie]=n,f[kt]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(wn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ga(n)}}return We(n),n.subtreeFlags&=-33554433,Eh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ga(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=O.current,fr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=_n,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[ie]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Bv(t.nodeValue,a)),t||Pa(n,!0)}else t=sl(t).createTextNode(r),t[ie]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=fr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ie]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=Of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=fr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ie]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=Of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nu(n,n.updateQueue),We(n),null);case 4:return dt(),t===null&&ad(n.stateNode.containerInfo),n.flags|=67108864,We(n),null;case 10:return ha(n.type),We(n),null;case 19:if(jf(n),r=n.memoizedState,r===null)return We(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)jo(r,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=gu(t),f!==null){for(n.flags|=128,jo(r,!1),t=f.updateQueue,n.updateQueue=t,Nu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)h0(a,t),a=a.sibling;return Xo(n,bn.current&1|2),ye&&ca(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&X()>Xu&&(n.flags|=128,u=!0,jo(r,!1),n.lanes=4194304)}else{if(!u)if(t=gu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Nu(n,t),jo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!ye)return We(n),null}else 2*X()-r.renderingStartTime>Xu&&a!==536870912&&(n.flags|=128,u=!0,jo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=X(),t.sibling=null,f=bn.current,f=u?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||ye?Xo(n,f):(a=f,yt(Tn,n),yt(bn,a),Ln===null&&(Ln=n)),ye&&ca(n,r.treeForkCount),t}return We(n),null;case 22:case 23:return ni(n),Yf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Nu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Lt(ws),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(sn),We(n),null;case 25:return null;case 30:return n.flags|=33554432,We(n),null}throw Error(s(156,n.tag))}function iM(t,n){switch(Uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ha(sn),dt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return jf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return dt(),null;case 10:return ha(n.type),null;case 22:case 23:return ni(n),Yf(),t!==null&&Lt(ws),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ha(sn),null;case 25:return null;default:return null}}function Hg(t,n){switch(Uf(n),n.tag){case 3:ha(sn),dt();break;case 26:case 27:case 5:gt(n);break;case 4:dt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:jf(n);break;case 10:ha(n.type);break;case 22:case 23:ni(n),Yf(),t!==null&&Lt(ws);break;case 24:ha(sn)}}function Zo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(T){Ie(n,n.return,T)}}function qa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var _=r.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,u=n;var P=a,j=T;try{j()}catch(st){Ie(u,P,st)}}}r=r.next}while(r!==f)}}catch(st){Ie(n,n.return,st)}}function Gg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{D0(n,a)}catch(r){Ie(t,t.return,r)}}}function Vg(t,n,a){a.props=Us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ie(t,n,r)}}function Xi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,f=oa(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=Zv(f)),r=u.ref;break;case 7:if(t.stateNode===null){var _=new oi(t);g(t.child,!1,WM,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(T){Ie(t,n,T)}}function An(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ie(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(t,n,u)}else a.current=null}function Uu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)e_(t.stateNode,n[a])}function Xg(t){for(var n=t.return;n!==null&&(bh(n)&&e_(t.stateNode,n.stateNode),!Th(n));)n=n.return}function Qo(t){for(var n=t.return;n!==null&&(bh(n)&&jM(t.stateNode,n.stateNode),!Th(n));)n=n.return}function Th(t){return t.tag===5||t.tag===3||t.tag===27}function bh(t){return t&&t.tag===7&&t.stateNode!==null}function Ah(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ie(t,t.return,u)}}function wh(t,n,a){try{var r=t.stateNode;RM(r,t.type,a,n),r[kt]=n}catch(u){Ie(t,t.return,u)}}function kg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ja(t.type)||t.tag===4}function Ch(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rh(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi)),Uu(t,r),Ue=!0;else if(u!==4&&(u===27&&(Uu(t,r),r=null,Ja(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Rh(t,n,a,r),t=t.sibling;t!==null;)Rh(t,n,a,r),t=t.sibling}function Lu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Uu(t,r),Ue=!0;else if(u!==4&&(u===27&&(Uu(t,r),r=null,Ja(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Lu(t,n,a,r),t=t.sibling;t!==null;)Lu(t,n,a,r),t=t.sibling}function qg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,r,a),n[ie]=t,n[kt]=a}catch(f){Ie(t,t.return,f)}}var Ou=!1,ii=null;function Yg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ou=!0)}var ki=null;function Wg(){var t=ki;return ki=null,t}var Wn=0;function xr(t,n,a,r,u){return Wn=0,jg(t.child,n,a,r,u)}function jg(t,n,a,r,u){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var T=hd(_);r.push(T),T.view&&(f=!0)}else f||hd(_).view&&(f=!0);Ou=!0,Wv(_,Wn===0?n:n+"_"+Wn,a),Wn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||jg(t.child,n,a,r,u)&&(f=!0));t=t.sibling}return f}function qi(t,n){for(;t!==null;)t.tag===5?jv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||qi(t.child,n)),t=t.sibling}function zu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(zu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=la(n.default,n.share),n!=="none"&&(xr(t,a,n,null,!1)||qi(t.child,!1))}t=t.sibling}}function Dh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=oa(r,a),f=la(r.default,a.paired?r.share:r.enter);f!=="none"?xr(t,u,f,null,!1)?(zu(t),a.paired||n||wr(t,r.onEnter)):qi(t.child,!1):zu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Dh(t,n),t=t.sibling;else zu(t)}function Nh(t){if(ii!==null&&ii.size!==0){var n=ii;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var f=la(a.default,a.share);if(f!=="none"&&(xr(t,r,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,wr(t,a.onShare)):qi(t.child,!1)),n.delete(r),n.size===0)break}}}Nh(t)}t=t.sibling}}}function Uh(t){if(t.tag===30){var n=t.memoizedProps,a=oa(n,t.stateNode),r=ii!==null?ii.get(a):void 0,u=la(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(xr(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,ii.delete(a),wr(t,n.onShare)):wr(t,n.onExit):qi(t.child,!1)),ii!==null&&Nh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Uh(t),t=t.sibling;else ii!==null&&Nh(t)}function Zg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=oa(n,t.stateNode);n=la(n.default,n.update),t.flags&=-5,n!=="none"&&xr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Zg(t);t=t.sibling}}function Lh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,qi(t.child,!1))}Lh(t)}t=t.sibling}}function Pu(t){if(t.tag===30)t.stateNode.paired=null,qi(t.child,!1),Lh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Pu(t),t=t.sibling;else Lh(t)}function Qg(t){for(t=t.child;t!==null;)t.tag===30?qi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Qg(t),t=t.sibling}function Oh(t,n,a,r,u,f,_){for(var T=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(f!==null&&Wn<f.length){var j=f[Wn],st=hd(P);(j.view||st.view)&&(T=!0);var mt;if(mt=(t.flags&4)===0)if(st.clip)mt=!0;else{mt=j.rect;var q=st.rect;mt=mt.y!==q.y||mt.x!==q.x||mt.height!==q.height||mt.width!==q.width}mt&&(t.flags|=4),st.abs?st=!j.abs:(j=j.rect,st=st.rect,st=j.height!==st.height||j.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Wv(P,Wn===0?a:a+"_"+Wn,u),T&&(t.flags&4)!==0||(ki===null&&(ki=[]),ki.push(P,Wn===0?r:r+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Oh(t,n.child,a,r,u,f,_)&&(T=!0));n=n.sibling}return T}function Kg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=oa(a,r),f=la(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var T=t.child;Wn=0,u=Oh(r,T,u,u,f,_,!1),(t.flags&4)!==0&&u&&wr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Kg(t);t=t.sibling}}var xn=!1,Oe=!1,Yi=!1,zh=!1,Jg=typeof WeakSet=="function"?WeakSet:Set,yn=null,Wi=!1,Ko=!1,Iu=!1,Ph=!1;function aM(t,n,a){if(t=t.containerInfo,od=Ir,t=n0(t),Mf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var T=0,P=-1,j=-1,st=0,mt=0,q=t,tt=null;e:for(;;){for(var It;q!==r||f!==0&&q.nodeType!==3||(P=T+f),q!==_||u!==0&&q.nodeType!==3||(j=T+u),q.nodeType===3&&(T+=q.nodeValue.length),(It=q.firstChild)!==null;)tt=q,q=It;for(;;){if(q===t)break e;if(tt===r&&++st===f&&(P=T),tt===_&&++mt===u&&(j=T),(It=q.nextSibling)!==null)break;q=tt,tt=q.parentNode}q=It}r=P===-1||j===-1?null:{start:P,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(ld={focusedElem:t,selectionRange:r},Ir=!1,a=(a&335544064)===a,yn=n,n=a?9270:1024;yn!==null;){if(t=yn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&Uh(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&Yg(t),Bu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Uh(r),Bu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Yg(t),Bu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,yn=r):(a&&Zg(t),Bu(a))}}ii=null}function Bu(t){for(;yn!==null;){var n=yn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=Us(n.type,u);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){Ie(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)md(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":md(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=oa(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=la(u.default,u.update),u!=="none"&&xr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,yn=r;break}yn=n.return}}function $g(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),r&4&&Zo(5,a);break;case 1:if(ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ie(a,a.return,_)}else{var u=Us(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ie(a,a.return,_)}}r&64&&Gg(a),r&512&&Xi(a,a.return);break;case 3:if(ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{D0(t,n)}catch(_){Ie(a,a.return,_)}}break;case 27:n===null&&r&4&&qg(a);case 26:case 5:ji(t,a),n===null&&r&4&&Ah(a),r&512&&Xi(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),r&4&&iv(t,a);break;case 13:ji(t,a),r&4&&av(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=gM.bind(null,a),KM(t,a))));break;case 22:if(r=a.memoizedState!==null||xn,!r){var f=n!==null&&n.memoizedState!==null||Oe;n=xn,u=Oe,xn=r,(Oe=f)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ci(t,a,r)):ji(t,a),xn=n,Oe=u}break;case 30:ji(t,a),r&512&&Xi(a,a.return);break;case 7:r&512&&Xi(a,a.return);default:ji(t,a)}}function Ih(t,n){for(t=t.child;t!==null;)tv(t,n),t=t.sibling}function tv(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(P){Ie(t,t.return,P)}Bh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(P){Ie(t,t.return,P)}break;case 18:try{var T=t.stateNode;n?Yv(T,!0):Yv(t.stateNode,!1)}catch(P){Ie(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&Ih(t,n);break;default:Ih(t,n)}}function Bh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:tv(a,r);break t;case 22:a.memoizedState===null&&Bh(a,r);break t;default:Bh(a,r)}}t=t.sibling}}function ev(t){var n=t.alternate;n!==null&&(t.alternate=null,ev(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ae(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,jn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)nv(t,n,a),a=a.sibling}function nv(t,n,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:Oe||An(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Oe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Oe||An(a,n),Qo(a);var r=Ke,u=jn;Ja(a.type)&&(Ke=a.stateNode,jn=!1),Ai(t,n,a),r_(a.stateNode,a.type,a.memoizedProps),Ke=r,jn=u;break;case 5:Oe||An(a,n),Qo(a);case 6:if(a.tag===6&&Qo(a),r=Ke,u=jn,Ke=null,Ai(t,n,a),Ke=r,jn=u,Ke!==null)if(jn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode),Ue=!0}catch(f){Ie(a,n,f)}else try{Ke.removeChild(a.stateNode),Ue=!0}catch(f){Ie(a,n,f)}break;case 18:Ke!==null&&(jn?(t=Ke,qv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Br(t)):qv(Ke,a.stateNode));break;case 4:r=Ke,u=jn,Ke=a.stateNode.containerInfo,jn=!0,Ai(t,n,a),Ke=r,jn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),Oe||qa(4,a,n),Ai(t,n,a);break;case 1:Oe||(An(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Vg(a,n,r)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:Oe=(r=Oe)||a.memoizedState!==null,Ai(t,n,a),Oe=r;break;case 30:An(a,n),Ai(t,n,a);break;case 7:Oe||An(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function iv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Br(t)}catch(a){Ie(n,n.return,a)}}}function av(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Br(t)}catch(a){Ie(n,n.return,a)}}function sM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Jg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Jg),n;default:throw Error(s(435,t.tag))}}function Fu(t,n){var a=sM(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=vM.bind(null,t,r);r.then(u,u)}})}function Hn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],_=t,T=n,P=T;t:for(;P!==null;){switch(P.tag){case 27:if(Ja(P.type)){Ke=P.stateNode,jn=!1;break t}break;case 5:Ke=P.stateNode,jn=!1;break t;case 3:case 4:Ke=P.stateNode.containerInfo,jn=!0;break t}P=P.return}if(Ke===null)throw Error(s(160));nv(_,T,f),Ke=null,jn=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sv(n,t,a),n=n.sibling}var wi=null;function sv(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}Hn(n,t,a),Gn(t),u&4&&(qa(3,t,t.return),Zo(3,t),qa(5,t,t.return));break;case 1:Hn(n,t,a),Gn(t),u&512&&(Oe||r===null||An(r,r.return)),u&64&&xn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=wi,Hn(n,t,a),Gn(t),u&512&&(Oe||r===null||An(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(xn)t.stateNode=Vv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[$t]||r[ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),wn(r,n,a),r[ie]=t,he(r),n=r;break t;case"link":if(f=h_("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}r=u.createElement(n),wn(r,n,a),u.head.appendChild(r);break;case"meta":if(f=h_("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}r=u.createElement(n),wn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[ie]=t,he(r),n=r}t.stateNode=n}else xn||Md(f,t.type,t.stateNode);else t.stateNode=f_(f,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Oe||n.parentNode.removeChild(n)):u.count--,a===null?xn||Md(f,t.type,t.stateNode):f_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&wh(t,t.memoizedProps,r.memoizedProps);break;case 27:Hn(n,t,a),Gn(t),u&512&&(Oe||r===null||An(r,r.return)),r!==null&&u&4&&wh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=Yi,Yi=!1,Hn(n,t,a),Yi=f,Gn(t),u&512&&(Oe||r===null||An(r,r.return)),t.flags&32){n=t.stateNode;try{er(n,""),Ue=!0}catch(st){Ie(t,t.return,st)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,wh(t,n,r!==null?r.memoizedProps:n)),u&1024&&(zh=!0);break;case 6:if(Hn(n,t,a),Gn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ue=!0}catch(st){Ie(t,t.return,st)}}break;case 3:if(Ue=!1,tc=null,f=wi,wi=rl(n.containerInfo),Hn(n,t,a),wi=f,Gn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(n.containerInfo)}catch(st){Ie(t,t.return,st)}zh&&(zh=!1,rv(t)),Ue=!1;break;case 4:u=Yi,Yi=xn,r=Am(),f=wi,wi=rl(t.stateNode.containerInfo),Hn(n,t,a),Gn(t),wi=f,Ue&&Ko&&(Iu=!0),Ue=r,Yi=u;break;case 12:Hn(n,t,a),Gn(t);break;case 31:Hn(n,t,a),Gn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 13:Hn(n,t,a),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Vu=X()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 22:f=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var T=xn,P=Oe,j=Yi;xn=T||f,Yi=j||f,Oe=P||_,Hn(n,t,a),Oe=P,Yi=j,xn=T,Gn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||xn||Oe||(n=_||Oe,a=xn,r=Oe,xn=f||xn,Oe=n,Ya(t,2),xn=a,Oe=r),!f&&Yi||Ih(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Fu(t,a))));break;case 19:Hn(n,t,a),Gn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 30:u&512&&(Oe||r===null||An(r,r.return)),u=Am(),f=Ko,_=(a&335544064)===a,T=t.memoizedProps,Ko=_&&la(T.default,T.update)!=="none",Hn(n,t,a),Gn(t),_&&r!==null&&Ue&&(t.flags|=4),Ko=f,Ue=u;break;case 21:break;case 7:u&512&&(Oe||r===null||An(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Hn(n,t,a),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(kg(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(bh(u)){var f=u.stateNode;r===null?r=[f]:r.push(f)}if(Th(u))break;u=u.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var T=a.stateNode,P=Ch(t);Lu(t,P,T,_);break;case 5:var j=a.stateNode;a.flags&32&&(er(j,""),a.flags&=-33);var st=Ch(t);Lu(t,st,j,_);break;case 3:case 4:var mt=a.stateNode.containerInfo,q=Ch(t);Rh(t,q,mt,_);break;default:throw Error(s(161))}}catch(tt){Ie(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ir=!0,n.reset(),Ir=!1),t=t.sibling}}function yr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)ov(n,t),n=n.sibling;else Kg(n)}function ov(t,n){var a=t.alternate;if(a===null)Dh(t,!1);else switch(t.tag){case 3:if(Ph=Wi=!1,Wg(),yr(n,t),!Wi&&!Iu){if(t=ki,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];jv(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ph=!0}ki=null;break;case 5:yr(n,t);break;case 4:r=Wi,Wi=!1,yr(n,t),Wi&&(Iu=!0),Wi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Dh(t,!1):yr(n,t));break;case 30:r=Wi,u=Wg(),Wi=!1,yr(n,t),Wi&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=oa(f,_),_=oa(a.memoizedProps,_);var T=la(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Wn=0,n=Oh(t,a,n,_,T,f,!0),Wn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(wr(t,t.memoizedProps.onUpdate),ki=u):u!==null&&(u.push.apply(u,ki),ki=u),Wi=(t.flags&32)!==0?!0:r;break;default:yr(n,t)}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$g(t,n.alternate,n),n=n.sibling}function Ya(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:qa(4,a,a.return),Ya(a,r);break;case 1:An(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&Vg(a,a.return,u),Ya(a,r);break;case 27:(r&2)!==0&&r_(a.stateNode,a.type,a.memoizedProps);case 5:An(a,a.return),a.tag!==5&&a.tag!==27||Qo(a),Ya(a,r);break;case 6:Qo(a);break;case 26:An(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Oe||u.parentNode.removeChild(u),Ya(a,r);break;case 22:a.memoizedState===null&&Ya(a,r);break;case 30:An(a,a.return),Ya(a,r);break;case 7:An(a,a.return);default:Ya(a,r)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,_=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ci(u,f,a),Zo(4,f);break;case 1:if(Ci(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Ie(r,r.return,st)}if(r=f,u=r.updateQueue,u!==null){var P=r.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)R0(j[u],P)}catch(st){Ie(r,r.return,st)}}T&&_&64&&Gg(f),Xi(f,f.return);break;case 27:(a&2)!==0&&qg(f);case 5:f.tag!==5&&f.tag!==27||Xg(f),Ci(u,f,a),T&&r===null&&_&4&&Ah(f),Xi(f,f.return);break;case 6:Xg(f);break;case 26:P=f.stateNode,f.memoizedState!==null||P===null||xn||Md(rl(P.ownerDocument),f.type,P),Ci(u,f,a),T&&r===null&&_&4&&Ah(f),Xi(f,f.return);break;case 12:Ci(u,f,a);break;case 31:Ci(u,f,a),T&&_&4&&iv(u,f);break;case 13:Ci(u,f,a),T&&_&4&&av(u,f);break;case 22:f.memoizedState===null&&Ci(u,f,a),Xi(f,f.return);break;case 30:Ci(u,f,a),Xi(f,f.return);break;case 7:Xi(f,f.return);default:Ci(u,f,a)}n=n.sibling}}function Fh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Po(a))}function Hh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Po(t))}function xi(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)lv(t,n,a,r),n=n.sibling;else u&&Qg(n)}function lv(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Pu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),f&2048&&Zo(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),u&&Ph&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Po(f)));break;case 12:if(f&2048){xi(t,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,T=_.id,P=_.onPostCommit;typeof P=="function"&&P(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(j){Ie(n,n.return,j)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:_=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&Pu(T),_._visibility&2?xi(t,n,a,r):Jo(t,n)):(u&&T!==null&&T.memoizedState!==null&&Pu(n),_._visibility&2?xi(t,n,a,r):(_._visibility|=2,Sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Fh(T,n);break;case 24:xi(t,n,a,r),f&2048&&Hh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(qi(f.child,!0),qi(n.child,!0))),xi(t,n,a,r);break;default:xi(t,n,a,r)}}function Sr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,P=r,j=_.flags;switch(_.tag){case 0:case 11:case 15:Sr(f,_,T,P,u),Zo(8,_);break;case 23:break;case 22:var st=_.stateNode;_.memoizedState!==null?st._visibility&2?Sr(f,_,T,P,u):Jo(f,_):(st._visibility|=2,Sr(f,_,T,P,u)),u&&j&2048&&Fh(_.alternate,_);break;case 24:Sr(f,_,T,P,u),u&&j&2048&&Hh(_.alternate,_);break;default:Sr(f,_,T,P,u)}n=n.sibling}}function Jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Jo(a,r),u&2048&&Fh(r.alternate,r);break;case 24:Jo(a,r),u&2048&&Hh(r.alternate,r);break;default:Jo(a,r)}n=n.sibling}}var Ls=8192;function Os(t,n,a){if(t.subtreeFlags&Ls)for(t=t.child;t!==null;)uv(t,n,a),t=t.sibling}function uv(t,n,a){switch(t.tag){case 26:Os(t,n,a),t.flags&Ls&&(t.memoizedState!==null?fE(a,wi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&g_(a,t)));break;case 5:Os(t,n,a),t.flags&Ls&&(t=t.stateNode,(n&335544128)===n&&g_(a,t));break;case 3:case 4:var r=wi;wi=rl(t.stateNode.containerInfo),Os(t,n,a),wi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ls,Ls=16777216,Os(t,n,a),Ls=r):Os(t,n,a));break;case 30:if((t.flags&Ls)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,ii===null&&(ii=new Map),ii.set(r,u)}Os(t,n,a);break;default:Os(t,n,a)}}function cv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,hv(r,t)}cv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fv(t),t=t.sibling}function fv(t){switch(t.tag){case 0:case 11:case 15:$o(t),t.flags&2048&&qa(9,t,t.return);break;case 3:$o(t);break;case 12:$o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hu(t)):$o(t);break;default:$o(t)}}function Hu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,hv(r,t)}cv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Hu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hu(n));break;default:Hu(n)}t=t.sibling}}function hv(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Po(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,yn=r;else t:for(a=t;yn!==null;){r=yn;var u=r.sibling,f=r.return;if(ev(r),r===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var rM={getCacheForType:function(t){var n=En(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return En(sn).controller.signal}},oM=typeof WeakMap=="function"?WeakMap:Map,Le=0,ke=null,Se=null,Ee=0,Pe=0,ai=null,Wa=!1,Mr=!1,Gh=!1,va=0,en=0,ja=0,zs=0,Gu=0,si=0,Er=0,tl=null,Zn=null,Vh=!1,Vu=0,dv=0,Xu=1/0,ku=null,Za=null,Je=0,Ri=null,Ps=null,Zi=0,Xh=0,kh=null,pv=null,Tr=null,br=null,Ar=null,el=0,qu=null;function ri(){return(Le&2)!==0&&Ee!==0?Ee&-Ee:wt.T!==null?td():ee()}function mv(){if(si===0)if((Ee&536870912)===0||ye){var t=vs;vs<<=1,(vs&3932160)===0&&(vs=262144),si=t}else si=536870912;return t=Tn.current,t!==null&&(t.flags|=32),si}function wr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=Zv(oa(t.memoizedProps,a))),br===null&&(br=[]),br.push(n.bind(null,r))}}function Qn(t,n,a){(t===ke&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(Cr(t,0),Qa(t,Ee,si,!1)),R(t,a),((Le&2)===0||t!==ke)&&(t===ke&&((Le&2)===0&&(zs|=a),en===4&&Qa(t,Ee,si,!1)),Qi(t))}function gv(t,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Da(t,n),u=r?cM(t,n):Yh(t,n,!0),f=r;do{if(u===0){Mr&&!r&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!lM(a)){u=Yh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=t;u=tl;var P=T.current.memoizedState.isDehydrated;if(P&&(Cr(T,_).flags|=256),_=Yh(T,_,!1),_!==2&&_!==6){if(Gh&&!P){T.errorRecoveryDisabledLanes|=f,zs|=f,u=4;break t}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Cr(t,0),Qa(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Qa(r,n,si,!Wa);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vu+300-X(),10<u)){if(Qa(r,n,si,!Wa),aa(r,0,!0)!==0)break t;Zi=n,r.timeoutHandle=fd(vv.bind(null,r,a,Zn,ku,Vh,n,si,zs,Er,Wa,f,"Throttled",-0,0),u);break t}vv(r,a,Zn,ku,Vh,n,si,zs,Er,Wa,f,null,-0,0)}}break}while(!0);Qi(t)}function vv(t,n,a,r,u,f,_,T,P,j,st,mt,q,tt){t.timeoutHandle=-1;var It=n.subtreeFlags,Qt=(f&335544064)===f;if(mt=null,(Qt||It&8192||(It&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},ii=null,uv(n,f,mt),Qt&&(It=mt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(It.count++,It.waitingForViewTransition=!0,It=ul.bind(It),Qt.finished.then(It,It))),It=(f&62914560)===f?Vu-X():(f&4194048)===f?dv-X():0,It=hE(mt,It),It!==null)){Zi=f,t.cancelPendingCommit=It(bv.bind(null,t,n,f,a,r,u,_,T,P,j,st,mt,null,q,tt)),Qa(t,f,_,!j);return}bv(t,n,f,a,r,u,_,T,P,j,st,mt)}function lM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,r){n=Eo(t,n),n&=~Gu,n&=~zs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Dn(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&ot(t,a,n)}function Yu(){return(Le&6)===0?(nl(0),!1):!0}function qh(){if(Se!==null){if(Pe===0)var t=Se.return;else t=Se,fa=Es=null,$f(t),pr=null,Fo=0,t=Se;for(;t!==null;)Hg(t.alternate,t),t=t.return;Se=null}}function Cr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,UM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Zi=0,qh(),ke=t,Se=a=ua(t.current,null),Ee=n,Pe=0,ai=null,Wa=!1,Mr=Da(t,n),Gh=!1,Er=si=Gu=zs=ja=en=0,Zn=tl=null,Vh=!1,va=Eo(t,n),tu(),a}function _v(t,n){pe=null,wt.H=bu,n===dr||n===fu?(n=b0(),Pe=3):n===Hf?(n=b0(),Pe=4):Pe=n===ph?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,Se===null&&(en=1,Au(t,mi(n,t.current)))}function xv(){var t=Tn.current;return t===null?!0:(Ee&4194048)===Ee?Ln===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Ln:!1}function yv(){var t=wt.H;return wt.H=bu,t===null?bu:t}function Sv(){var t=wt.A;return wt.A=rM,t}function Wu(){en=4,Wa||(Ee&4194048)!==Ee&&Tn.current!==null||(Mr=!0),(ja&134217727)===0&&(zs&134217727)===0||ke===null||Qa(ke,Ee,si,!1)}function Yh(t,n,a){var r=Le;Le|=2;var u=yv(),f=Sv();(ke!==t||Ee!==n)&&(ku=null,Cr(t,n)),n=!1;var _=en;t:do try{if(Pe!==0&&Se!==null){var T=Se,P=ai;switch(Pe){case 8:qh(),_=6;break t;case 3:case 2:case 9:case 6:Tn.current===null&&(n=!0);var j=Pe;if(Pe=0,ai=null,Rr(t,T,P,j),a&&Mr){_=0;break t}break;default:j=Pe,Pe=0,ai=null,Rr(t,T,P,j)}}uM(),_=en;break}catch(st){_v(t,st)}while(!0);return n&&t.shellSuspendCounter++,fa=Es=null,Le=r,wt.H=u,wt.A=f,Se===null&&(ke=null,Ee=0,tu()),_}function uM(){for(;Se!==null;)Mv(Se)}function cM(t,n){var a=Le;Le|=2;var r=yv(),u=Sv();ke!==t||Ee!==n?(ku=null,Xu=X()+500,Cr(t,n)):Mr=Da(t,n);t:do try{if(Pe!==0&&Se!==null){n=Se;var f=ai;e:switch(Pe){case 1:Pe=0,ai=null,Rr(t,n,f,1);break;case 2:case 9:if(E0(f)){Pe=0,ai=null,Ev(n);break}n=function(){Pe!==2&&Pe!==9||ke!==t||(Pe=7),Qi(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:E0(f)?(Pe=0,ai=null,Ev(n)):(Pe=0,ai=null,Rr(t,n,f,7));break;case 5:var _=null;switch(Se.tag){case 26:_=Se.memoizedState;case 5:case 27:var T=Se;if(_?p_(_):T.stateNode.complete){Pe=0,ai=null;var P=T.sibling;if(P!==null)Se=P;else{var j=T.return;j!==null?(Se=j,ju(j)):Se=null}break e}}Pe=0,ai=null,Rr(t,n,f,5);break;case 6:Pe=0,ai=null,Rr(t,n,f,6);break;case 8:qh(),en=6;break t;default:throw Error(s(462))}}fM();break}catch(st){_v(t,st)}while(!0);return fa=Es=null,wt.H=r,wt.A=u,Le=a,Se!==null?0:(ke=null,Ee=0,tu(),en)}function fM(){for(;Se!==null&&!ce();)Mv(Se)}function Mv(t){var n=Bg(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?ju(t):Se=n}function Ev(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ng(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Ng(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:$f(n);var r=n;r===_n&&(ye?(ru(r),r.tag===5&&r.stateNode!=null&&(Ye=r.stateNode)):(ru(r),ye=!0));default:Hg(a,n),n=Se=h0(n,va),n=Bg(a,n,va)}t.memoizedProps=t.pendingProps,n===null?ju(t):Se=n}function Rr(t,n,a,r){fa=Es=null,$f(n),pr=null,Fo=0;var u=n.return;try{if(JS(t,u,n,a,Ee)){en=1,Au(t,mi(a,t.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;en=1,Au(t,mi(a,t.current)),Se=null;return}n.flags&32768?(ye||r===1?t=!0:Mr||(Ee&536870912)!==0?t=!1:(Wa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Tn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Tv(n,t)):ju(n)}function ju(t){var n=t;do{if((n.flags&32768)!==0){Tv(n,Wa);return}t=n.return;var a=nM(n.alternate,n,va);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);en===0&&(en=5)}function Tv(t,n){do{var a=iM(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);en=6,Se=null}function bv(t,n,a,r,u,f,_,T,P,j,st,mt){t.cancelPendingCommit=null;do Zu();while(Je!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===ke&&(Se=ke=null,Ee=0),Ps=n,Ri=t,Zi=a,kh=u,pv=r,hM(t,n,a,_,T,P,mt)}}function hM(t,n,a,r,u,f,_){var T=n.lanes|n.childLanes;if(Xh=T,T|=wf,Q(t,a,T,r,u,f),br=null,(a&335544064)===a?(Ar=HS(t),r=10262):(Ar=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,_M(Gt,function(){return Qh(),null})):(t.callbackNode=null,t.callbackPriority=0),Ou=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=wt.T,wt.T=null,u=at.p,at.p=2,f=Le,Le|=4;try{aM(t,n,a)}finally{Le=f,at.p=u,wt.T=r}}Je=1,Ou?Tr=BM(_,t.containerInfo,Ar,Wh,jh,pM,Zh,Qh,dM):(Wh(),jh(),Zh())}function dM(t){if(Je!==0){var n=Ri.onRecoverableError;n(t,{componentStack:null})}}function pM(){Je===3&&(Je=0,ov(Ps,Ri),Je=4)}function Wh(){if(Je===1){Je=0;var t=Ri,n=Ps,a=Zi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=wt.T,wt.T=null;var u=at.p;at.p=2;var f=Le;Le|=4;try{Ko=Iu=!1,sv(n,t,a),a=ld;var _=n0(t.containerInfo),T=a.focusedElem,P=a.selectionRange;if(_!==T&&T&&T.ownerDocument&&e0(T.ownerDocument.documentElement,T)){if(P!==null&&Mf(T)){var j=P.start,st=P.end;if(st===void 0&&(st=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(st,T.value.length);else{var mt=T.ownerDocument||document,q=mt&&mt.defaultView||window;if(q.getSelection){var tt=q.getSelection(),It=T.textContent.length,Qt=Math.min(P.start,It),me=P.end===void 0?Qt:Math.min(P.end,It);!tt.extend&&Qt>me&&(_=me,me=Qt,Qt=_);var W=t0(T,Qt),G=t0(T,me);if(W&&G&&(tt.rangeCount!==1||tt.anchorNode!==W.node||tt.anchorOffset!==W.offset||tt.focusNode!==G.node||tt.focusOffset!==G.offset)){var $=mt.createRange();$.setStart(W.node,W.offset),tt.removeAllRanges(),Qt>me?(tt.addRange($),tt.extend(G.node,G.offset)):($.setEnd(G.node,G.offset),tt.addRange($))}}}}for(mt=[],tt=T;tt=tt.parentNode;)tt.nodeType===1&&mt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Ir=!!od,ld=od=null}finally{Le=f,at.p=u,wt.T=r}}t.current=n,Je=2}}function jh(){if(Je===2){Je=0;var t=Ri,n=Ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=wt.T,wt.T=null;var r=at.p;at.p=2;var u=Le;Le|=4;try{$g(t,n.alternate,n)}finally{Le=u,at.p=r,wt.T=a}}Je=3}}function Zh(){if(Je===4||Je===3){Je=0;var t=Tr;Tr=null,Ne();var n=Ri,a=Ps,r=Zi,u=pv,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?Je=5:(Je=0,Ps=Ri=null,Av(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(Za=null),Vt(r),a=a.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(be,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=wt.T,f=at.p,at.p=2,wt.T=null;try{for(var _=n.onRecoverableError,T=0;T<u.length;T++){var P=u[T];_(P.value,{componentStack:P.stack})}}finally{wt.T=a,at.p=f}}if(u=br,_=Ar,Ar=null,u!==null&&(br=null,_===null&&(_=[]),t!==null))for(P=0;P<u.length;P++)a=(0,u[P])(_),a!==void 0&&t.finished.finally(a);(Zi&3)!==0&&Zu(),Qi(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===qu?el++:(el=0,qu=n):(el=0,qu=null),nl(0)}}function Av(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Po(n)))}function Zu(){return Tr!==null&&(Tr.skipTransition(),Tr=null),Wh(),jh(),Zh(),Qh()}function Qh(){if(Je!==5)return!1;var t=Ri,n=Xh;Xh=0;var a=Vt(Zi),r=wt.T,u=at.p;try{at.p=32>a?32:a,wt.T=null,a=kh,kh=null;var f=Ri,_=Zi;if(Je=0,Ps=Ri=null,Zi=0,(Le&6)!==0)throw Error(s(331));var T=Le;if(Le|=4,fv(f.current),lv(f,f.current,_,a),Le=T,nl(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{at.p=u,wt.T=r,Av(t,n)}}function wv(t,n,a){n=mi(a,n),n=dh(t.stateNode,n,2),t=Ga(t,n,2),t!==null&&(R(t,2),Qi(t))}function Ie(t,n,a){if(t.tag===3)wv(t,t,a);else for(;n!==null;){if(n.tag===3){wv(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Za===null||!Za.has(r))){t=mi(a,t),a=Eg(2),r=Ga(n,a,2),r!==null&&(Tg(a,r,n,t),R(r,2),Qi(r));break}}n=n.return}}function Kh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new oM;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Gh=!0,u.add(a),t=mM.bind(null,t,n,a),n.then(t,t))}function mM(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(Ee&a)===a&&((en===4||en===3&&(Ee&62914560)===Ee&&300>X()-Vu)&&(Le&2)===0?Cr(t,0):Gu|=a,Er===Ee&&(Er=0)),Qi(t)}function Cv(t,n){n===0&&(n=Vl()),t=ys(t,n),t!==null&&(R(t,n),Qi(t))}function gM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Cv(t,a)}function vM(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Cv(t,a)}function _M(t,n){return qt(t,n)}var Dr=null,Nr=null,Jh=!1,Qu=!1,$h=!1,Ka=0;function Qi(t){t!==Nr&&t.next===null&&(Nr===null?Dr=Nr=t:Nr=Nr.next=t),Qu=!0,Jh||(Jh=!0,yM())}function nl(t,n){if(!$h&&Qu){$h=!0;do for(var a=!1,r=Dr;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Dn(42|t)+1)-1,f&=u&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Uv(r,f))}else f=Ee,f=aa(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Da(r,f)||(a=!0,Uv(r,f));r=r.next}while(a);$h=!1}}function xM(){Rv()}function Rv(){Qu=Jh=!1;var t=0;Ka!==0&&NM()&&(t=Ka);for(var n=X(),a=null,r=Dr;r!==null;){var u=r.next,f=Dv(r,n);f===0?(r.next=null,a===null?Dr=u:a.next=u,u===null&&(Nr=a)):(a=r,(t!==0||(f&3)!==0)&&(Qu=!0)),r=u}Je!==0&&Je!==5||nl(t),Ka!==0&&(Ka=0)}function Dv(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Dn(f),T=1<<_,P=u[_];P===-1?((T&a)===0||(T&r)!==0)&&(u[_]=af(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=ke,a=Ee,a=aa(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&de(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Da(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&de(r),Vt(a)){case 2:case 8:a=St;break;case 32:a=Gt;break;case 268435456:a=fe;break;default:a=Gt}return r=Nv.bind(null,t),a=qt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&de(r),t.callbackPriority=2,t.callbackNode=null,2}function Nv(t,n){if(Je!==0&&Je!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zu()&&t.callbackNode!==a)return null;var r=Ee;return r=aa(t,t===ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(gv(t,r,n),Dv(t,X()),t.callbackNode!=null&&t.callbackNode===a?Nv.bind(null,t):null)}function Uv(t,n){if(Zu())return null;gv(t,n,!0)}function yM(){LM(function(){(Le&6)!==0?qt(ht,xM):Rv()})}function td(){if(Ka===0){var t=As;t===0&&(t=gs,gs<<=1,(gs&261888)===0&&(gs=256)),Ka=t}return Ka}function Lv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yl(t)}function SM(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Lv((u[kt]||null).action),_=r.submitter;_&&(n=(n=_[kt]||null)?Lv(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new Ql("action","action",null,r,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ka!==0){var P=new FormData(u,_);lh(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=new FormData(u,_),lh(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var ed=0;ed<Af.length;ed++){var nd=Af[ed],MM=nd.toLowerCase(),EM=nd[0].toUpperCase()+nd.slice(1);bi(MM,"on"+EM)}bi(s0,"onAnimationEnd"),bi(r0,"onAnimationIteration"),bi(o0,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(US,"onTransitionRun"),bi(LS,"onTransitionStart"),bi(OS,"onTransitionCancel"),bi(l0,"onTransitionEnd"),In("onMouseEnter",["mouseout","mouseover"]),In("onMouseLeave",["mouseout","mouseover"]),In("onPointerEnter",["pointerout","pointerover"]),In("onPointerLeave",["pointerout","pointerover"]),Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function Ov(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var T=r[_],P=T.instance,j=T.currentTarget;if(T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=j;try{f(u)}catch(st){$l(st)}u.currentTarget=null,f=P}else for(_=0;_<r.length;_++){if(T=r[_],P=T.instance,j=T.currentTarget,T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=j;try{f(u)}catch(st){$l(st)}u.currentTarget=null,f=P}}}}function Me(t,n){var a=n[ze];a===void 0&&(a=n[ze]=new Set);var r=t+"__bubble";a.has(r)||(zv(n,t,2,!1),a.add(r))}function id(t,n,a){var r=0;n&&(r|=4),zv(a,t,r,n)}var Ku="_reactListening"+Math.random().toString(36).slice(2);function ad(t){if(!t[Ku]){t[Ku]=!0,Na.forEach(function(a){a!=="selectionchange"&&(TM.has(a)||id(a,!1,t),id(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ku]||(n[Ku]=!0,id("selectionchange",!1,n))}}function zv(t,n,a,r){switch(T_(n)){case 2:var u=gE;break;case 8:u=vE;break;default:u=Td}a=u.bind(null,n,a,t),u=void 0,!hf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function sd(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var T=r.stateNode.containerInfo;if(T===u)break;if(_===4)for(_=r.return;_!==null;){var P=_.tag;if((P===3||P===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;T!==null;){if(_=cn(T),_===null)return;if(P=_.tag,P===5||P===6||P===26||P===27){r=f=_;continue t}T=T.parentNode}}r=r.return}zm(function(){var j=f,st=cf(a),mt=[];t:{var q=u0.get(t);if(q!==void 0){var tt=Ql,It=t;switch(t){case"keypress":if(jl(a)===0)break t;case"keydown":case"keyup":tt=lS;break;case"focusin":It="focus",tt=gf;break;case"focusout":It="blur",tt=gf;break;case"beforeblur":case"afterblur":tt=gf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=dS;break;case s0:case r0:case o0:tt=$y;break;case l0:tt=mS;break;case"scroll":case"scrollend":tt=jy;break;case"wheel":tt=vS;break;case"copy":case"cut":case"paste":tt=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Hm;break;case"submit":tt=fS;break;case"toggle":case"beforetoggle":tt=xS}var Qt=(n&4)!==0,me=!Qt&&(t==="scroll"||t==="scrollend"),W=Qt?q!==null?q+"Capture":null:q;Qt=[];for(var G=j,$;G!==null;){var pt=G;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||W===null||(pt=bo(G,W),pt!=null&&Qt.push(al(G,pt,$))),me)break;G=G.return}0<Qt.length&&(q=new tt(q,It,null,a,st),mt.push({event:q,listeners:Qt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",tt&&a!==uf&&(It=a.relatedTarget||a.fromElement)&&(cn(It)||It[xe]))break t;(q||tt)&&(It=st.window===st?st:(tt=st.ownerDocument)?tt.defaultView||tt.parentWindow:window,q?(tt=a.relatedTarget||a.toElement,q=j,tt=tt?cn(tt):null,tt!==null&&(me=c(tt),Qt=tt.tag,tt!==me||Qt!==5&&Qt!==27&&Qt!==6)&&(tt=null)):(q=null,tt=j),q!==tt&&(Qt=Bm,pt="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Hm,pt="onPointerLeave",W="onPointerEnter",G="pointer"),me=q==null?It:fn(q),$=tt==null?It:fn(tt),It=new Qt(pt,G+"leave",q,a,st),It.target=me,It.relatedTarget=$,pt=null,cn(st)===j&&(Qt=new Qt(W,G+"enter",tt,a,st),Qt.target=$,Qt.relatedTarget=me,pt=Qt),me=pt,Qt=q&&tt?H(q,tt,bM):null,q!==null&&Pv(mt,It,q,Qt,!1),tt!==null&&me!==null&&Pv(mt,me,tt,Qt,!0)))}t:{if(q=j?fn(j):window,tt=q.nodeName&&q.nodeName.toLowerCase(),tt==="select"||tt==="input"&&q.type==="file")var Wt=jm;else if(Ym(q))if(Zm)Wt=RS;else{Wt=wS;var Te=AS}else tt=q.nodeName,!tt||tt.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?j&&lf(j.elementType)&&(Wt=jm):Wt=CS;if(Wt&&(Wt=Wt(t,j))){Wm(mt,Wt,a,st);break t}Te&&Te(t,q,j)}switch(Te=j?fn(j):window,t){case"focusin":(Ym(Te)||Te.contentEditable==="true")&&(sr=Te,Ef=j,Lo=null);break;case"focusout":Lo=Ef=sr=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,i0(mt,a,st);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":i0(mt,a,st)}var ae;if(_f)t:{switch(t){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else ar?km(t,a)&&(le="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Gm&&a.locale!=="ko"&&(ar||le!=="onCompositionStart"?le==="onCompositionEnd"&&ar&&(ae=Pm()):(Ua=st,df="value"in Ua?Ua.value:Ua.textContent,ar=!0)),Te=Ju(j,le),0<Te.length&&(le=new Fm(le,t,null,a,st),mt.push({event:le,listeners:Te}),ae?le.data=ae:(ae=qm(a),ae!==null&&(le.data=ae)))),(ae=SS?MS(t,a):ES(t,a))&&(le=Ju(j,"onBeforeInput"),0<le.length&&(Te=new Fm("onBeforeInput","beforeinput",null,a,st),mt.push({event:Te,listeners:le}),Te.data=ae)),SM(mt,t,j,a,st)}Ov(mt,n)})}function al(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ju(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=bo(t,a),u!=null&&r.unshift(al(t,u,f)),u=bo(t,n),u!=null&&r.push(al(t,u,f))),t.tag===3)return r;t=t.return}return[]}function bM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pv(t,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var T=a,P=T.alternate,j=T.stateNode;if(T=T.tag,P!==null&&P===r)break;T!==5&&T!==26&&T!==27||j===null||(P=j,u?(j=bo(a,f),j!=null&&_.unshift(al(a,j,P))):u||(j=bo(a,f),j!=null&&_.push(al(a,j,P)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var AM=/\r\n?/g,wM=/\u0000|\uFFFD/g;function Iv(t){return(typeof t=="string"?t:""+t).replace(AM,`
`).replace(wM,"")}function Bv(t,n){return n=Iv(n),Iv(t)===n}function Be(t,n,a,r,u,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||er(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&er(t,""+r);else return;break;case"className":ql(t,"class",r);break;case"tabIndex":ql(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ql(t,a,r);break;case"style":Lm(t,r,f);return;case"data":if(n!=="object"){ql(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",u.name,u,null),Be(t,n,"formEncType",u.formEncType,u,null),Be(t,n,"formMethod",u.formMethod,u,null),Be(t,n,"formTarget",u.formTarget,u,null)):(Be(t,n,"encType",u.encType,u,null),Be(t,n,"method",u.method,u,null),Be(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Hi);return;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Yl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Me("beforetoggle",t),Me("toggle",t),kl(t,"popover",r);break;case"xlinkActuate":sa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":sa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":sa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":sa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":sa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":sa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":sa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":sa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":sa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":kl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Yy.get(a)||a,kl(t,a,r);else return}Ue=!0}function rd(t,n,a,r,u,f){switch(a){case"style":Lm(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")er(t,r);else if(typeof r=="number"||typeof r=="bigint")er(t,""+r);else return;break;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Hi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Pn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[kt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,u);break t}Ue=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):kl(t,a,r)}return}Ue=!0}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,_,a,null)}}u&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var T=f=_=u=null,P=null,j=null;for(r in a)if(a.hasOwnProperty(r)){var st=a[r];if(st!=null)switch(r){case"name":u=st;break;case"type":_=st;break;case"checked":P=st;break;case"defaultChecked":j=st;break;case"value":f=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Be(t,n,r,st,a,null)}}Rm(t,f,T,P,j,_,u,!1);return;case"select":Me("invalid",t),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":r=T;default:Be(t,n,u,T,a,null)}n=f,a=_,t.multiple=!!r,n!=null?tr(t,!!r,n,!1):a!=null&&tr(t,!!r,a,!0);return;case"textarea":Me("invalid",t),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Be(t,n,_,T,a,null)}Nm(t,r,u,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Be(t,n,P,r,a,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(r=0;r<il.length;r++)Me(il[r],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,j,r,a,null)}return;default:if(lf(n)){for(st in a)a.hasOwnProperty(st)&&(r=a[st],r!==void 0&&rd(t,n,st,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Be(t,n,T,r,a,null))}var CM={};function RM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,T=null,P=null,j=null,st=null;for(tt in a){var mt=a[tt];if(a.hasOwnProperty(tt)&&mt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":P=mt;default:r.hasOwnProperty(tt)||Be(t,n,tt,null,r,mt)}}for(var q in r){var tt=r[q];if(mt=a[q],r.hasOwnProperty(q)&&(tt!=null||mt!=null))switch(q){case"type":tt!==mt&&(Ue=!0),f=tt;break;case"name":tt!==mt&&(Ue=!0),u=tt;break;case"checked":tt!==mt&&(Ue=!0),j=tt;break;case"defaultChecked":tt!==mt&&(Ue=!0),st=tt;break;case"value":tt!==mt&&(Ue=!0),_=tt;break;case"defaultValue":tt!==mt&&(Ue=!0),T=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:tt!==mt&&Be(t,n,q,tt,r,mt)}}rf(t,_,T,P,j,st,f,u);return;case"select":tt=_=T=q=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":tt=P;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,P)}for(u in r)if(f=r[u],P=a[u],r.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":f!==P&&(Ue=!0),q=f;break;case"defaultValue":f!==P&&(Ue=!0),T=f;break;case"multiple":f!==P&&(Ue=!0),_=f;default:f!==P&&Be(t,n,u,f,r,P)}n=T,a=_,r=tt,q!=null?tr(t,!!a,q,!1):!!r!=!!a&&(n!=null?tr(t,!!a,n,!0):tr(t,!!a,a?[]:"",!1));return;case"textarea":tt=q=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(t,n,T,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(Ue=!0),q=u;break;case"defaultValue":u!==f&&(Ue=!0),tt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Be(t,n,_,u,r,f)}Dm(t,q,tt);return;case"option":for(var It in a)if(q=a[It],a.hasOwnProperty(It)&&q!=null&&!r.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:Be(t,n,It,null,r,q)}for(P in r)if(q=r[P],tt=a[P],r.hasOwnProperty(P)&&q!==tt&&(q!=null||tt!=null))switch(P){case"selected":q!==tt&&(Ue=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Be(t,n,P,q,r,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)q=a[Qt],a.hasOwnProperty(Qt)&&q!=null&&!r.hasOwnProperty(Qt)&&Be(t,n,Qt,null,r,q);for(j in r)if(q=r[j],tt=a[j],r.hasOwnProperty(j)&&q!==tt&&(q!=null||tt!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,n));break;default:Be(t,n,j,q,r,tt)}return;default:if(lf(n)){for(var me in a)q=a[me],a.hasOwnProperty(me)&&q!==void 0&&!r.hasOwnProperty(me)&&rd(t,n,me,void 0,r,q);for(st in r)q=r[st],tt=a[st],!r.hasOwnProperty(st)||q===tt||q===void 0&&tt===void 0||rd(t,n,st,q,r,tt);return}}for(var W in a)q=a[W],a.hasOwnProperty(W)&&q!=null&&!r.hasOwnProperty(W)&&Be(t,n,W,null,r,q);for(mt in r)q=r[mt],tt=a[mt],!r.hasOwnProperty(mt)||q===tt||q==null&&tt==null||Be(t,n,mt,q,r,tt)}function Fv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,T=u.duration;if(f&&T&&Fv(_)){for(_=0,T=u.responseEnd,r+=1;r<a.length;r++){var P=a[r],j=P.startTime;if(j>T)break;var st=P.transferSize,mt=P.initiatorType;st&&Fv(mt)&&(P=P.responseEnd,_+=st*(P<T?1:(T-j)/(P-j)))}if(--r,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var od=null,ld=null;function sl(t){return t.nodeType===9?t:t.ownerDocument}function Hv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Vv(t,n,a,r){return a=sl(a).createElement(t),a[ie]=r,a[kt]=n,wn(a,t,n),he(a),a}function ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function NM(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var fd=typeof setTimeout=="function"?setTimeout:void 0,UM=typeof clearTimeout=="function"?clearTimeout:void 0,Xv=typeof Promise=="function"?Promise:void 0,kv=typeof requestAnimationFrame=="function"?requestAnimationFrame:fd,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof Xv<"u"?function(t){return Xv.resolve(null).then(t).catch(OM)}:fd;function OM(t){setTimeout(function(){throw t})}function Ja(t){return t==="head"}function qv(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Br(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")xd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,xd(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[$t]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&xd(t.ownerDocument.body);a=u}while(a);Br(n)}function Yv(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Wv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function jv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function zM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function hd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return zM(n,a,t)}function PM(t){return t.documentElement.clientHeight}function IM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function BM(t,n,a,r,u,f,_,T,P){var j=n.nodeType===9?n:n.ownerDocument;try{var st=j.startViewTransition({update:function(){var q=j.defaultView,tt=q.navigation&&q.navigation.transition,It=j.fonts.status;r();var Qt=[];if(It==="loaded"&&(PM(j),j.fonts.status==="loading"&&Qt.push(j.fonts.ready)),It=Qt.length,t!==null)for(var me=t.suspenseyImages,W=0,G=0;G<me.length;G++){var $=me[G];if(!$.complete){var pt=$.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<q.innerHeight&&pt.left<q.innerWidth){if(W+=m_($),W>ec){Qt.length=It;break}$=new Promise(IM.bind($)),Qt.push($)}}}if(0<Qt.length)return q=Promise.race([Promise.all(Qt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(u,u),(tt?Promise.allSettled([tt.finished,q]):q).then(f,f);if(u(),tt)return tt.finished.then(f,f);f()},types:a});j.__reactViewTransition=st;var mt=[];return st.ready.then(function(){for(var q=j.documentElement.getAnimations({subtree:!0}),tt=0;tt<q.length;tt++){var It=q[tt],Qt=It.effect,me=Qt.pseudoElement;if(me!=null&&me.startsWith("::view-transition")){mt.push(It),It=Qt.getKeyframes();for(var W=me=void 0,G=!0,$=0;$<It.length;$++){var pt=It[$],Wt=pt.width;if(me===void 0)me=Wt;else if(me!==Wt){G=!1;break}if(Wt=pt.height,W===void 0)W=Wt;else if(W!==Wt){G=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}G&&me!==void 0&&W!==void 0&&(Qt.setKeyframes(It),G=getComputedStyle(Qt.target,Qt.pseudoElement),G.width!==me||G.height!==W)&&(G=It[0],G.width=me,G.height=W,G=It[It.length-1],G.width=me,G.height=W,Qt.setKeyframes(It))}}_()},function(q){j.__reactViewTransition===st&&(j.__reactViewTransition=null);try{if(typeof q=="object"&&q!==null)switch(q.name){case"InvalidStateError":(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null)}q!==null&&P(q)}finally{r(),u(),_()}}),st.finished.finally(function(){for(var q=0;q<mt.length;q++)mt[q].cancel();j.__reactViewTransition===st&&(j.__reactViewTransition=null),T()}),st}catch{return r(),u(),_(),null}}function Is(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Is.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Is.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[u])}return r},Is.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Zv(t){return{name:t,group:new Is("group",t),imagePair:new Is("image-pair",t),old:new Is("old",t),new:new Is("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Kv(f,t,n,a)===-1){var _=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(P){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),r!==null&&(u=_.removeEventListener.bind(_,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Ur(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),g(this._fragmentFiber.child,!1,FM,t,T,r)}this._eventListeners=f}};function FM(t,n,a,r){return M(t).addEventListener(n,a,r),!1}oi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=Kv(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var f=u.cleanup;u=Ur(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,HM,t,a,u),r.splice(n,1),f!==null&&f()}};function HM(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Ur(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Qv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Kv(t,n,a,r){if(t.length===0)return-1;r=Qv(r);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&Qv(f.optionsOrUseCapture)===r)return u}return-1}oi.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];r.addEventListener(f.type,f.attachedListener,Ur(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],r.removeEventListener(f.type,f.attachedListener,Ur(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},oi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,Jv,t,void 0,void 0)};function Jv(t,n){return t.tag===6?!1:(t=M(t),JM(t,n))}oi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,dd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Jv(n[a],t);a--);};function dd(t,n){return n.push(t),!1}oi.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=M(t),t=sl(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,GM,t,void 0,void 0))};function GM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,VM,t,void 0,void 0)};function VM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,XM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Di[n++]=r}Di.length=n}};function XM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Di=[],pd=!1;function kM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),pd||(pd=!0,$M(function(){pd=!1;var r=Di;Di=[];for(var u=0;u<r.length;u++){var f=r[u];f.observer.unobserve(f.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,qM,t,void 0,void 0),t};function qM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},oi.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,dd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),P=_&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&u===t||P||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||YM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function YM(t,n,a,r,u){var f=cn(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=x(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=H(a,f,J),n===null?n=!1:(g(n,!0,U,f,a),f=y,y=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=H(r,f,J),n===null?n=!1:(g(n,!0,C,f,r),f=y,z=y=null,n=f!==null)),n):!1}function $v(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,dd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),$v(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),$v(u,a)):M(u).scrollIntoView(t),r+=a?-1:1}};function WM(t,n){return t=M(t),t_(t,n),!1}function t_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function e_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Ur(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,T=0;T<Di.length;T++){var P=Di[T];(P.fragmentInstance!==n||P.observer!==f||P.instance!==t)&&(Di[_++]=P)}Di.length=_,f.observe(t)}),t_(t,n))}function jM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Ur(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?kM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function md(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":md(a),Ae(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ZM(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[$t])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function QM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function n_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function gd(t){return t.data==="$?"||t.data==="$~"}function vd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function KM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var _d=null;function i_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function a_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function JM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function $M(t){kv(function(){kv(function(n){return t(n)})})}function s_(t,n,a){switch(n=sl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function r_(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&Be(t,n,r,null,CM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Hi&&(t.onclick=null),Ae(t)}function xd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ae(t)}var Si=new Map,o_=new Set;function rl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=at.d;at.d={f:tE,r:eE,D:nE,C:iE,L:aE,m:sE,X:oE,S:rE,M:lE};function tE(){var t=_a.f(),n=Yu();return t||n}function eE(t){var n=Jn(t);n!==null&&n.tag===5&&n.type==="form"?ug(n):_a.r(t)}var Lr=typeof document>"u"?null:document;function l_(t,n,a){var r=Lr;if(r&&typeof n=="string"&&n){var u=di(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),o_.has(u)||(o_.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),wn(n,"link",t),he(n),r.head.appendChild(n)))}}function nE(t){_a.D(t),l_("dns-prefetch",t,null)}function iE(t,n){_a.C(t,n),l_("preconnect",t,n)}function aE(t,n,a){_a.L(t,n,a);var r=Lr;if(r&&t&&n){var u='link[rel="preload"][as="'+di(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+di(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+di(a.imageSizes)+'"]')):u+='[href="'+di(t)+'"]';var f=u;switch(n){case"style":f=Or(t);break;case"script":f=zr(t)}if(!(Si.has(f)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(ol(f))||n==="script"&&r.querySelector(ll(f))))){var _=r.createElement("link");wn(_,"link",t),n==="style"&&(_[qn]=!0,_.onload=_.onerror=function(){$n(_)}),he(_),r.head.appendChild(_)}}}function sE(t,n){_a.m(t,n);var a=Lr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+di(r)+'"][href="'+di(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=zr(t)}if(!Si.has(f)&&(t=L({rel:"modulepreload",href:t},n),Si.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(f)))return}r=a.createElement("link"),wn(r,"link",t),he(r),a.head.appendChild(r)}}}function rE(t,n,a){_a.S(t,n,a);var r=Lr;if(r&&t){var u=hi(r).hoistableStyles,f=Or(t);n=n||"default";var _=u.get(f);if(!_){var T={loading:0,preload:null};if(_=r.querySelector(ol(f)))T.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(f))&&yd(t,a);var P=_=r.createElement("link");he(P),wn(P,"link",t),P._p=new Promise(function(j,st){P.onload=j,P.onerror=st}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,$u(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:T},u.set(f,_)}}}function oE(t,n){_a.X(t,n);var a=Lr;if(a&&t){var r=hi(a).hoistableScripts,u=zr(t),f=r.get(u);f||(f=a.querySelector(ll(u)),f||(t=L({src:t,async:!0},n),(n=Si.get(u))&&Sd(t,n),f=a.createElement("script"),he(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function lE(t,n){_a.M(t,n);var a=Lr;if(a&&t){var r=hi(a).hoistableScripts,u=zr(t),f=r.get(u);f||(f=a.querySelector(ll(u)),f||(t=L({src:t,async:!0,type:"module"},n),(n=Si.get(u))&&Sd(t,n),f=a.createElement("script"),he(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function u_(t,n,a,r){var u=(u=O.current)?rl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Or(a.href),n=hi(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Or(a.href);var f=hi(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(ol(t)))?f._p||(_.instance=f,_.state.loading=5):(f=Si.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,f)),uE(u,t,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=zr(a),n=hi(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Or(t){return'href="'+di(t)+'"'}function ol(t){return'link[rel="stylesheet"]['+t+"]"}function c_(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function uE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[qn]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[qn]=!0,n.onload=n.onerror=$n.bind(null,n),wn(n,"link",a),he(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function zr(t){return'[src="'+di(t)+'"]'}function ll(t){return"script[async]"+t}function f_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+di(a.href)+'"]');if(r)return n.instance=r,he(r),r;var u=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),he(r),wn(r,"style",u),$u(r,a.precedence,t),n.instance=r;case"stylesheet":u=Or(a.href);var f=t.querySelector(ol(u));if(f)return n.state.loading|=4,n.instance=f,he(f),f;r=c_(a),(u=Si.get(u))&&yd(r,u),f=(t.ownerDocument||t).createElement("link"),he(f);var _=f;return _._p=new Promise(function(T,P){_.onload=T,_.onerror=P}),wn(f,"link",r),n.state.loading|=4,$u(f,a.precedence,t),n.instance=f;case"script":return f=zr(a.src),(u=t.querySelector(ll(f)))?(n.instance=u,he(u),u):(r=a,(u=Si.get(f))&&(r=L({},a),Sd(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),he(u),wn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,$u(r,a.precedence,t));return n.instance}function $u(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var T=r[_];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function yd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function h_(t,n,a){if(tc===null){var r=new Map,u=tc=new Map;u.set(a,r)}else u=tc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[$t]||f[ie]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=r.get(_);T?T.push(f):r.set(_,[f])}}return r}function Md(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function cE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function d_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function p_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function m_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function g_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=m_(n),t.suspenseyImages.push(n)),t=dE.bind(t),n.decode().then(t,t))}function fE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Or(r.href),f=n.querySelector(ol(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ul.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,he(f);return}f=n.ownerDocument||n,r=c_(r),(u=Si.get(u))&&yd(r,u),f=f.createElement("link"),he(f);var _=f;_._p=new Promise(function(T,P){_.onload=T,_.onerror=P}),wn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ul.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ec=0;function hE(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ec===0&&(ec=62500*DM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ec?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function v_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ic(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ul(){this.count--,v_(this)}function dE(){this.imgCount--,v_(this)}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(pE,t),nc=null,ul.call(t))}function pE(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var r=a.get(null);else{a=new Map,nc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=ul.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Pr={$$typeof:ft,Provider:null,Consumer:null,_currentValue:bt,_currentValue2:bt,_threadCount:0};function mE(t,n,a,r,u,f,_,T,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=To(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.hiddenUpdates=To(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function __(t,n,a,r,u,f,_,T,P,j,st,mt){return t=new mE(t,n,a,_,P,j,st,mt,T),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=If(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Gf(f),t}function x_(t){return t?(t=lr,t):lr}function y_(t,n,a,r,u,f){u=x_(u),r.context===null?r.context=u:r.pendingContext=u,r=Ha(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ga(t,r,n),a!==null&&(Qn(a,t,n),Ho(a,t,n))}function S_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ed(t,n){S_(t,n),(t=t.alternate)&&S_(t,n)}function M_(t){if(t.tag===13||t.tag===31){var n=ys(t,67108864);n!==null&&Qn(n,t,67108864),Ed(t,67108864)}}function E_(t){if(t.tag===13||t.tag===31){var n=ri();n=Rt(n);var a=ys(t,n);a!==null&&Qn(a,t,n),Ed(t,n)}}var Ir=!0;function gE(t,n,a,r){var u=wt.T;wt.T=null;var f=at.p;try{at.p=2,Td(t,n,a,r)}finally{at.p=f,wt.T=u}}function vE(t,n,a,r){var u=wt.T;wt.T=null;var f=at.p;try{at.p=8,Td(t,n,a,r)}finally{at.p=f,wt.T=u}}function Td(t,n,a,r){if(Ir){var u=bd(r);if(u===null)sd(t,n,r,ac,a),b_(t,r);else if(xE(u,t,n,a,r))r.stopPropagation();else if(b_(t,r),n&4&&-1<_E.indexOf(t)){for(;u!==null;){var f=Jn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Fi(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var P=1<<31-Dn(_);T.entanglements[1]|=P,_&=~P}Qi(f),(Le&6)===0&&(Xu=X()+500,nl(0))}}break;case 31:case 13:T=ys(f,2),T!==null&&Qn(T,f,2),Yu(),Ed(f,2)}if(f=bd(r),f===null&&sd(t,n,r,ac,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else sd(t,n,r,null,a)}}function bd(t){return t=cf(t),Ad(t)}var ac=null;function Ad(t){if(ac=null,t=cn(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function T_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case ht:return 2;case St:return 8;case Gt:case Yt:return 32;case fe:return 268435456;default:return 32}default:return 32}}var wd=!1,$a=null,ts=null,es=null,cl=new Map,fl=new Map,ns=[],_E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b_(t,n){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(n.pointerId)}}function hl(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Jn(n),n!==null&&M_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function xE(t,n,a,r,u){switch(n){case"focusin":return $a=hl($a,t,n,a,r,u),!0;case"dragenter":return ts=hl(ts,t,n,a,r,u),!0;case"mouseover":return es=hl(es,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return cl.set(f,hl(cl.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,fl.set(f,hl(fl.get(f)||null,t,n,a,r,u)),!0}return!1}function A_(t){var n=cn(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ne(t.priority,function(){E_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ne(t.priority,function(){E_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=bd(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);uf=r,a.target.dispatchEvent(r),uf=null}else return n=Jn(a),n!==null&&M_(n),t.blockedOn=a,!1;n.shift()}return!0}function w_(t,n,a){sc(t)&&a.delete(n)}function yE(){wd=!1,$a!==null&&sc($a)&&($a=null),ts!==null&&sc(ts)&&(ts=null),es!==null&&sc(es)&&(es=null),cl.forEach(w_),fl.forEach(w_)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,wd||(wd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yE)))}var oc=null;function C_(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(Ad(r||a)===null)continue;break}var f=Jn(a);f!==null&&(t.splice(n,3),n-=3,lh(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Br(t){function n(P){return rc(P,t)}$a!==null&&rc($a,t),ts!==null&&rc(ts,t),es!==null&&rc(es,t),cl.forEach(n),fl.forEach(n);for(var a=0;a<ns.length;a++){var r=ns[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ns.length&&(a=ns[0],a.blockedOn===null);)A_(a),a.blockedOn===null&&ns.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[kt]||null;if(typeof f=="function")_||C_(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[kt]||null)T=_.formAction;else if(Ad(u)!==null)continue}else T=_.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),C_(a)}}}function R_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Cd(t){this._internalRoot=t}lc.prototype.render=Cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ri();y_(a,r,t,n,null,null)},lc.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;y_(t.current,2,null,t,null,null),Yu(),n[xe]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ee();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ns.length&&n!==0&&n<ns[a].priority;a++);ns.splice(a,0,t),a===0&&A_(t)}};var D_=e.version;if(D_!=="19.3.1")throw Error(s(527,D_,"19.3.1"));at.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var SE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:wt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{be=uc.inject(SE),je=uc}catch{}}return pl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=xg,f=yg,_=Sg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=__(t,1,!1,null,null,a,r,null,u,f,_,R_),t[xe]=n.current,ad(t),new Cd(n)},pl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=xg,_=yg,T=Sg,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=__(t,1,!0,n,a??null,r,u,P,f,_,T,R_),n.context=x_(null),a=n.current,r=ri(),r=Rt(r),u=Ha(r),u.callback=null,Ga(a,u,r),a=r,n.current.lanes=a,R(n,a),Qi(n),t[xe]=n.current,ad(t),new lc(n)},pl.version="19.3.1",pl}var H_;function NE(){if(H_)return Nd.exports;H_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nd.exports=DE(),Nd.exports}var UE=NE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kx=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=qe.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},p)=>qe.createElement("svg",{ref:p,...OE,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Kx("lucide",l),...d},[...h.map(([m,v])=>qe.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=(o,e)=>{const i=qe.forwardRef(({className:s,...l},c)=>qe.createElement(zE,{ref:c,iconNode:e,className:Kx(`lucide-${LE(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=Bi("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=Bi("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=Bi("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=Bi("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=Bi("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=Bi("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=Bi("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Bi("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=Bi("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=Bi("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=Bi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const om="170",qE=0,V_=1,YE=2,Jx=1,WE=2,Ta=3,ps=0,Kn=1,ba=2,fs=0,lo=1,X_=2,k_=3,q_=4,jE=5,Ys=100,ZE=101,QE=102,KE=103,JE=104,$E=200,t1=201,e1=202,n1=203,vp=204,_p=205,i1=206,a1=207,s1=208,r1=209,o1=210,l1=211,u1=212,c1=213,f1=214,xp=0,yp=1,Sp=2,fo=3,Mp=4,Ep=5,Tp=6,bp=7,$x=0,h1=1,d1=2,hs=0,p1=1,m1=2,g1=3,ty=4,v1=5,_1=6,x1=7,ey=300,ho=301,po=302,Ap=303,wp=304,$c=306,Dl=1e3,js=1001,Cp=1002,Pi=1003,y1=1004,cc=1005,Ji=1006,Pd=1007,Zs=1008,Ra=1009,ny=1010,iy=1011,Nl=1012,lm=1013,Ks=1014,Aa=1015,Pl=1016,um=1017,cm=1018,mo=1020,ay=35902,sy=1021,ry=1022,zi=1023,oy=1024,ly=1025,uo=1026,go=1027,uy=1028,fm=1029,cy=1030,hm=1031,dm=1033,Bc=33776,Fc=33777,Hc=33778,Gc=33779,Rp=35840,Dp=35841,Np=35842,Up=35843,Lp=36196,Op=37492,zp=37496,Pp=37808,Ip=37809,Bp=37810,Fp=37811,Hp=37812,Gp=37813,Vp=37814,Xp=37815,kp=37816,qp=37817,Yp=37818,Wp=37819,jp=37820,Zp=37821,Vc=36492,Qp=36494,Kp=36495,fy=36283,Jp=36284,$p=36285,tm=36286,S1=3200,M1=3201,hy=0,E1=1,cs="",Ei="srgb",_o="srgb-linear",tf="linear",Ge="srgb",Fr=7680,Y_=519,T1=512,b1=513,A1=514,dy=515,w1=516,C1=517,R1=518,D1=519,em=35044,W_="300 es",wa=2e3,qc=2001;class xo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let j_=1234567;const Al=Math.PI/180,Ul=180/Math.PI;function $i(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function dn(o,e,i){return Math.max(e,Math.min(i,o))}function pm(o,e){return(o%e+e)%e}function N1(o,e,i,s,l){return s+(o-e)*(l-s)/(i-e)}function U1(o,e,i){return o!==e?(i-o)/(e-o):0}function wl(o,e,i){return(1-i)*o+i*e}function L1(o,e,i,s){return wl(o,e,1-Math.exp(-i*s))}function O1(o,e=1){return e-Math.abs(pm(o,e*2)-e)}function z1(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function P1(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function I1(o,e){return o+Math.floor(Math.random()*(e-o+1))}function B1(o,e){return o+Math.random()*(e-o)}function F1(o){return o*(.5-Math.random())}function H1(o){o!==void 0&&(j_=o);let e=j_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function G1(o){return o*Al}function V1(o){return o*Ul}function X1(o){return(o&o-1)===0&&o!==0}function k1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function q1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Y1(o,e,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),m=c((e+s)/2),v=h((e+s)/2),g=c((e-s)/2),x=h((e-s)/2),S=c((s-e)/2),E=h((s-e)/2);switch(l){case"XYX":o.set(d*v,p*g,p*x,d*m);break;case"YZY":o.set(p*x,d*v,p*g,d*m);break;case"ZXZ":o.set(p*g,p*x,d*v,d*m);break;case"XZX":o.set(d*v,p*E,p*S,d*m);break;case"YXY":o.set(p*S,d*v,p*E,d*m);break;case"ZYZ":o.set(p*E,p*S,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Oi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fe(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Id={DEG2RAD:Al,RAD2DEG:Ul,generateUUID:$i,clamp:dn,euclideanModulo:pm,mapLinear:N1,inverseLerp:U1,lerp:wl,damp:L1,pingpong:O1,smoothstep:z1,smootherstep:P1,randInt:I1,randFloat:B1,randFloatSpread:F1,seededRandom:H1,degToRad:G1,radToDeg:V1,isPowerOfTwo:X1,ceilPowerOfTwo:k1,floorPowerOfTwo:q1,setQuaternionFromProperEuler:Y1,normalize:Fe,denormalize:Oi};class Dt{constructor(e=0,i=0){Dt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(e,i,s,l,c,h,d,p,m){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m)}set(e,i,s,l,c,h,d,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=p,v[6]=s,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],x=s[2],S=s[5],E=s[8],A=l[0],M=l[3],y=l[6],z=l[1],U=l[4],C=l[7],J=l[2],H=l[5],L=l[8];return c[0]=h*A+d*z+p*J,c[3]=h*M+d*U+p*H,c[6]=h*y+d*C+p*L,c[1]=m*A+v*z+g*J,c[4]=m*M+v*U+g*H,c[7]=m*y+v*C+g*L,c[2]=x*A+S*z+E*J,c[5]=x*M+S*U+E*H,c[8]=x*y+S*C+E*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return i*h*v-i*d*m-s*c*v+s*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*h-d*m,x=d*p-v*c,S=m*c-h*p,E=i*g+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(l*m-v*s)*A,e[2]=(d*s-l*h)*A,e[3]=x*A,e[4]=(v*i-l*p)*A,e[5]=(l*c-d*i)*A,e[6]=S*A,e[7]=(s*p-m*i)*A,e[8]=(h*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Bd.makeScale(e,i)),this}rotate(e){return this.premultiply(Bd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Bd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bd=new ve;function py(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function W1(){const o=Yc("canvas");return o.style.display="block",o}const Z_={};function Tl(o){o in Z_||(Z_[o]=!0,console.warn(o))}function j1(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function Z1(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Q1(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const De={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(o,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===Ge&&(o.r=Ca(o.r),o.g=Ca(o.g),o.b=Ca(o.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Ge&&(o.r=co(o.r),o.g=co(o.g),o.b=co(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cs?tf:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,i){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Q_=[.64,.33,.3,.6,.15,.06],K_=[.2126,.7152,.0722],J_=[.3127,.329],$_=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tx=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);De.define({[_o]:{primaries:Q_,whitePoint:J_,transfer:tf,toXYZ:$_,fromXYZ:tx,luminanceCoefficients:K_,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:Q_,whitePoint:J_,transfer:Ge,toXYZ:$_,fromXYZ:tx,luminanceCoefficients:K_,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}});let Hr;class K1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=Yc("canvas")),Hr.width=e.width,Hr.height=e.height;const s=Hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ca(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J1=0;class my{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Fd(l[h].image)):c.push(Fd(l[h]))}else c=Fd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Fd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?K1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $1=0;class kn extends xo{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=js,l=js,c=Ji,h=Zs,d=zi,p=Ra,m=kn.DEFAULT_ANISOTROPY,v=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=$i(),this.name="",this.source=new my(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ey)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case js:e.x=e.x<0?0:1;break;case Cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case js:e.y=e.y<0?0:1;break;case Cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=ey;kn.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,i=0,s=0,l=1){Ve.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],v=p[4],g=p[8],x=p[1],S=p[5],E=p[9],A=p[2],M=p[6],y=p[10];if(Math.abs(v-x)<.01&&Math.abs(g-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+A)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,C=(S+1)/2,J=(y+1)/2,H=(v+x)/4,L=(g+A)/4,B=(E+M)/4;return U>C&&U>J?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=H/s,c=L/s):C>J?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=H/l,c=B/l):J<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(J),s=L/c,l=B/c),this.set(s,l,c,i),this}let z=Math.sqrt((M-E)*(M-E)+(g-A)*(g-A)+(x-v)*(x-v));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(g-A)/z,this.z=(x-v)/z,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tT extends xo{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ve(0,0,e,i),this.scissorTest=!1,this.viewport=new Ve(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new kn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new my(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends tT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class gy extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eT extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const x=c[h+0],S=c[h+1],E=c[h+2],A=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=x,e[i+1]=S,e[i+2]=E,e[i+3]=A;return}if(g!==A||p!==x||m!==S||v!==E){let M=1-d;const y=p*x+m*S+v*E+g*A,z=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const J=Math.sqrt(U),H=Math.atan2(J,y*z);M=Math.sin(M*H)/J,d=Math.sin(d*H)/J}const C=d*z;if(p=p*M+x*C,m=m*M+S*C,v=v*M+E*C,g=g*M+A*C,M===1-d){const J=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=J,m*=J,v*=J,g*=J}}e[i]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=c[h],x=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+v*g+p*S-m*x,e[i+1]=p*E+v*x+m*g-d*S,e[i+2]=m*E+v*S+d*x-p*g,e[i+3]=v*E-d*g-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(l/2),g=d(c/2),x=p(s/2),S=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=x*v*g+m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g-x*S*E;break;case"YXZ":this._x=x*v*g+m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g+x*S*E;break;case"ZXY":this._x=x*v*g-m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g-x*S*E;break;case"ZYX":this._x=x*v*g-m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g+x*S*E;break;case"YZX":this._x=x*v*g+m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g-x*S*E;break;case"XZY":this._x=x*v*g-m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],x=s+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(v-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+h*d+l*m-c*p,this._y=l*v+h*p+c*d-s*m,this._z=c*v+h*m+s*p-l*d,this._w=h*v-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,x=Math.sin(i*v)/m;return this._w=h*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,s=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(ex.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(ex.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*s),v=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+p*m+h*g-d*v,this.y=s+p*v+d*m-c*g,this.z=l+p*g+c*v-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new k,ex=new Il;class Bl{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ni):Ni.fromBufferAttribute(c,h),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ml),hc.subVectors(this.max,ml),Gr.subVectors(e.a,ml),Vr.subVectors(e.b,ml),Xr.subVectors(e.c,ml),as.subVectors(Vr,Gr),ss.subVectors(Xr,Vr),Bs.subVectors(Gr,Xr);let i=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Bs.z,Bs.y,as.z,0,-as.x,ss.z,0,-ss.x,Bs.z,0,-Bs.x,-as.y,as.x,0,-ss.y,ss.x,0,-Bs.y,Bs.x,0];return!Gd(i,Gr,Vr,Xr,hc)||(i=[1,0,0,0,1,0,0,0,1],!Gd(i,Gr,Vr,Xr,hc))?!1:(dc.crossVectors(as,ss),i=[dc.x,dc.y,dc.z],Gd(i,Gr,Vr,Xr,hc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xa=[new k,new k,new k,new k,new k,new k,new k,new k],Ni=new k,fc=new Bl,Gr=new k,Vr=new k,Xr=new k,as=new k,ss=new k,Bs=new k,ml=new k,hc=new k,dc=new k,Fs=new k;function Gd(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Fs.fromArray(o,c);const d=l.x*Math.abs(Fs.x)+l.y*Math.abs(Fs.y)+l.z*Math.abs(Fs.z),p=e.dot(Fs),m=i.dot(Fs),v=s.dot(Fs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const nT=new Bl,gl=new k,Vd=new k;class mm{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):nT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gl.subVectors(e,this.center);const i=gl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(gl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gl.copy(e.center).add(Vd)),this.expandByPoint(gl.copy(e.center).sub(Vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ya=new k,Xd=new k,pc=new k,rs=new k,kd=new k,mc=new k,qd=new k;class iT{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Xd.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),rs.copy(this.origin).sub(Xd);const c=e.distanceTo(i)*.5,h=-this.direction.dot(pc),d=rs.dot(this.direction),p=-rs.dot(pc),m=rs.lengthSq(),v=Math.abs(1-h*h);let g,x,S,E;if(v>0)if(g=h*p-d,x=h*d-p,E=c*v,g>=0)if(x>=-E)if(x<=E){const A=1/v;g*=A,x*=A,S=g*(g+h*x+2*d)+x*(h*g+x+2*p)+m}else x=c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*p)+m;else x=-c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*p)+m;else x<=-E?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+x*(x+2*p)+m):x<=E?(g=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+x*(x+2*p)+m);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Xd).addScaledVector(pc,x),S}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-x.z)*g,p=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,p=(e.min.z-x.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,s,l,c){kd.subVectors(i,e),mc.subVectors(s,e),qd.crossVectors(kd,mc);let h=this.direction.dot(qd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;rs.subVectors(this.origin,e);const p=d*this.direction.dot(mc.crossVectors(rs,mc));if(p<0)return null;const m=d*this.direction.dot(kd.cross(rs));if(m<0||p+m>h)return null;const v=-d*rs.dot(qd);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,s,l,c,h,d,p,m,v,g,x,S,E,A,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m,v,g,x,S,E,A,M)}set(e,i,s,l,c,h,d,p,m,v,g,x,S,E,A,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=h,y[9]=d,y[13]=p,y[2]=m,y[6]=v,y[10]=g,y[14]=x,y[3]=S,y[7]=E,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/kr.setFromMatrixColumn(e,0).length(),c=1/kr.setFromMatrixColumn(e,1).length(),h=1/kr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=h*v,S=h*g,E=d*v,A=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=S+E*m,i[5]=x-A*m,i[9]=-d*p,i[2]=A-x*m,i[6]=E+S*m,i[10]=h*p}else if(e.order==="YXZ"){const x=p*v,S=p*g,E=m*v,A=m*g;i[0]=x+A*d,i[4]=E*d-S,i[8]=h*m,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=A+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*v,S=p*g,E=m*v,A=m*g;i[0]=x-A*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=A-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*v,S=h*g,E=d*v,A=d*g;i[0]=p*v,i[4]=E*m-S,i[8]=x*m+A,i[1]=p*g,i[5]=A*m+x,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,S=h*m,E=d*p,A=d*m;i[0]=p*v,i[4]=A-x*g,i[8]=E*g+S,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=S*g+E,i[10]=x-A*g}else if(e.order==="XZY"){const x=h*p,S=h*m,E=d*p,A=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=x*g+A,i[5]=h*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*v,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aT,e,sT)}lookAt(e,i,s){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),os.crossVectors(s,li),os.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),os.crossVectors(s,li)),os.normalize(),gc.crossVectors(li,os),l[0]=os.x,l[4]=gc.x,l[8]=li.x,l[1]=os.y,l[5]=gc.y,l[9]=li.y,l[2]=os.z,l[6]=gc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],x=s[9],S=s[13],E=s[2],A=s[6],M=s[10],y=s[14],z=s[3],U=s[7],C=s[11],J=s[15],H=l[0],L=l[4],B=l[8],N=l[12],w=l[1],F=l[5],rt=l[9],nt=l[13],ct=l[2],ft=l[6],V=l[10],it=l[14],Z=l[3],xt=l[7],Tt=l[11],zt=l[15];return c[0]=h*H+d*w+p*ct+m*Z,c[4]=h*L+d*F+p*ft+m*xt,c[8]=h*B+d*rt+p*V+m*Tt,c[12]=h*N+d*nt+p*it+m*zt,c[1]=v*H+g*w+x*ct+S*Z,c[5]=v*L+g*F+x*ft+S*xt,c[9]=v*B+g*rt+x*V+S*Tt,c[13]=v*N+g*nt+x*it+S*zt,c[2]=E*H+A*w+M*ct+y*Z,c[6]=E*L+A*F+M*ft+y*xt,c[10]=E*B+A*rt+M*V+y*Tt,c[14]=E*N+A*nt+M*it+y*zt,c[3]=z*H+U*w+C*ct+J*Z,c[7]=z*L+U*F+C*ft+J*xt,c[11]=z*B+U*rt+C*V+J*Tt,c[15]=z*N+U*nt+C*it+J*zt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],x=e[10],S=e[14],E=e[3],A=e[7],M=e[11],y=e[15];return E*(+c*p*g-l*m*g-c*d*x+s*m*x+l*d*S-s*p*S)+A*(+i*p*S-i*m*x+c*h*x-l*h*S+l*m*v-c*p*v)+M*(+i*m*g-i*d*S-c*h*g+s*h*S+c*d*v-s*m*v)+y*(-l*d*v-i*p*g+i*d*x+l*h*g-s*h*x+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],x=e[10],S=e[11],E=e[12],A=e[13],M=e[14],y=e[15],z=g*M*m-A*x*m+A*p*S-d*M*S-g*p*y+d*x*y,U=E*x*m-v*M*m-E*p*S+h*M*S+v*p*y-h*x*y,C=v*A*m-E*g*m+E*d*S-h*A*S-v*d*y+h*g*y,J=E*g*p-v*A*p-E*d*x+h*A*x+v*d*M-h*g*M,H=i*z+s*U+l*C+c*J;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/H;return e[0]=z*L,e[1]=(A*x*c-g*M*c-A*l*S+s*M*S+g*l*y-s*x*y)*L,e[2]=(d*M*c-A*p*c+A*l*m-s*M*m-d*l*y+s*p*y)*L,e[3]=(g*p*c-d*x*c-g*l*m+s*x*m+d*l*S-s*p*S)*L,e[4]=U*L,e[5]=(v*M*c-E*x*c+E*l*S-i*M*S-v*l*y+i*x*y)*L,e[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*y-i*p*y)*L,e[7]=(h*x*c-v*p*c+v*l*m-i*x*m-h*l*S+i*p*S)*L,e[8]=C*L,e[9]=(E*g*c-v*A*c-E*s*S+i*A*S+v*s*y-i*g*y)*L,e[10]=(h*A*c-E*d*c+E*s*m-i*A*m-h*s*y+i*d*y)*L,e[11]=(v*d*c-h*g*c-v*s*m+i*g*m+h*s*S-i*d*S)*L,e[12]=J*L,e[13]=(v*A*l-E*g*l+E*s*x-i*A*x-v*s*M+i*g*M)*L,e[14]=(E*d*l-h*A*l-E*s*p+i*A*p+h*s*M-i*d*M)*L,e[15]=(h*g*l-v*d*l+v*s*p-i*g*p-h*s*x+i*d*x)*L,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,p=e.z,m=c*h,v=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+s,v*p-l*h,0,m*p-l*d,v*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,v=h+h,g=d+d,x=c*m,S=c*v,E=c*g,A=h*v,M=h*g,y=d*g,z=p*m,U=p*v,C=p*g,J=s.x,H=s.y,L=s.z;return l[0]=(1-(A+y))*J,l[1]=(S+C)*J,l[2]=(E-U)*J,l[3]=0,l[4]=(S-C)*H,l[5]=(1-(x+y))*H,l[6]=(M+z)*H,l[7]=0,l[8]=(E+U)*L,l[9]=(M-z)*L,l[10]=(1-(x+A))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=kr.set(l[0],l[1],l[2]).length();const h=kr.set(l[4],l[5],l[6]).length(),d=kr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ui.copy(this);const m=1/c,v=1/h,g=1/d;return Ui.elements[0]*=m,Ui.elements[1]*=m,Ui.elements[2]*=m,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=g,Ui.elements[9]*=g,Ui.elements[10]*=g,i.setFromRotationMatrix(Ui),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=wa){const p=this.elements,m=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),x=(s+l)/(s-l);let S,E;if(d===wa)S=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===qc)S=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=wa){const p=this.elements,m=1/(i-e),v=1/(s-l),g=1/(h-c),x=(i+e)*m,S=(s+l)*v;let E,A;if(d===wa)E=(h+c)*g,A=-2*g;else if(d===qc)E=c*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const kr=new k,Ui=new Ze,aT=new k(0,0,0),sT=new k(1,1,1),os=new k,gc=new k,li=new k,nx=new Ze,ix=new Il;class ta{constructor(e=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(dn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-dn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return nx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ix.setFromEuler(this),this.setFromQuaternion(ix,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class vy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rT=0;const ax=new k,qr=new Il,Sa=new Ze,vc=new k,vl=new k,oT=new k,lT=new Il,sx=new k(1,0,0),rx=new k(0,1,0),ox=new k(0,0,1),lx={type:"added"},uT={type:"removed"},Yr={type:"childadded",child:null},Yd={type:"childremoved",child:null};class Rn extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new k,i=new ta,s=new Il,l=new k(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ve}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return qr.setFromAxisAngle(e,i),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,i){return qr.setFromAxisAngle(e,i),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(sx,e)}rotateY(e){return this.rotateOnAxis(rx,e)}rotateZ(e){return this.rotateOnAxis(ox,e)}translateOnAxis(e,i){return ax.copy(e).applyQuaternion(this.quaternion),this.position.add(ax.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(sx,e)}translateY(e){return this.translateOnAxis(rx,e)}translateZ(e){return this.translateOnAxis(ox,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?vc.copy(e):vc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(vl,vc,this.up):Sa.lookAt(vc,vl,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),qr.setFromRotationMatrix(Sa),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lx),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(uT),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lx),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,oT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,lT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),v=h(e.images),g=h(e.shapes),x=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new k(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new k,Ma=new k,Wd=new k,Ea=new k,Wr=new k,jr=new k,ux=new k,jd=new k,Zd=new k,Qd=new k,Kd=new Ve,Jd=new Ve,$d=new Ve;class Ti{constructor(e=new k,i=new k,s=new k){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Li.subVectors(e,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Li.subVectors(l,i),Ma.subVectors(s,i),Wd.subVectors(e,i);const h=Li.dot(Li),d=Li.dot(Ma),p=Li.dot(Wd),m=Ma.dot(Ma),v=Ma.dot(Wd),g=h*m-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(m*p-d*v)*x,E=(h*v-d*p)*x;return c.set(1-S-E,E,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(e,i,s,l,c,h,d,p){return this.getBarycoord(e,i,s,l,Ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ea.x),p.addScaledVector(h,Ea.y),p.addScaledVector(d,Ea.z),p)}static getInterpolatedAttribute(e,i,s,l,c,h){return Kd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Kd.fromBufferAttribute(e,i),Jd.fromBufferAttribute(e,s),$d.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Kd,c.x),h.addScaledVector(Jd,c.y),h.addScaledVector($d,c.z),h}static isFrontFacing(e,i,s,l){return Li.subVectors(s,i),Ma.subVectors(e,i),Li.cross(Ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Li.cross(Ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ti.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Wr.subVectors(l,s),jr.subVectors(c,s),jd.subVectors(e,s);const p=Wr.dot(jd),m=jr.dot(jd);if(p<=0&&m<=0)return i.copy(s);Zd.subVectors(e,l);const v=Wr.dot(Zd),g=jr.dot(Zd);if(v>=0&&g<=v)return i.copy(l);const x=p*g-v*m;if(x<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector(Wr,h);Qd.subVectors(e,c);const S=Wr.dot(Qd),E=jr.dot(Qd);if(E>=0&&S<=E)return i.copy(c);const A=S*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(jr,d);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return ux.subVectors(c,l),d=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(ux,d);const y=1/(M+A+x);return h=A*y,d=x*y,i.copy(s).addScaledVector(Wr,h).addScaledVector(jr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},_c={h:0,s:0,l:0};function tp(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class we{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=s,De.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=De.workingColorSpace){if(e=pm(e,1),i=dn(i,0,1),s=dn(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=tp(h,c,e+1/3),this.g=tp(h,c,e),this.b=tp(h,c,e-1/3)}return De.toWorkingColorSpace(this,l),this}setStyle(e,i=Ei){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const s=_y[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return De.fromWorkingColorSpace(zn.copy(this),e),Math.round(dn(zn.r*255,0,255))*65536+Math.round(dn(zn.g*255,0,255))*256+Math.round(dn(zn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.fromWorkingColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=v<=.5?g/(h+d):g/(2-h-d),h){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,i=De.workingColorSpace){return De.fromWorkingColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Ei){De.fromWorkingColorSpace(zn.copy(this),e);const i=zn.r,s=zn.g,l=zn.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+i,ls.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ls),e.getHSL(_c);const s=wl(ls.h,_c.h,i),l=wl(ls.s,_c.s,i),c=wl(ls.l,_c.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new we;we.NAMES=_y;let cT=0;class yo extends xo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=$i(),this.name="",this.blending=lo,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vp,this.blendDst=_p,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==vp&&(s.blendSrc=this.blendSrc),this.blendDst!==_p&&(s.blendDst=this.blendDst),this.blendEquation!==Ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wc extends yo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new k,xc=new Dt;class Ii{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=em,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(e),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Oi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Fe(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Oi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Oi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Oi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Oi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==em&&(e.usage=this.usage),e}}class xy extends Ii{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class yy extends Ii{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class an extends Ii{constructor(e,i,s){super(new Float32Array(e),i,s)}}let fT=0;const Mi=new Ze,ep=new Rn,Zr=new k,ui=new Bl,_l=new Bl,Sn=new k;class fi extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(py(e)?yy:xy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ve().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return ep.lookAt(e),ep.updateMatrix(),this.applyMatrix4(ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new an(s,3))}else{for(let s=0,l=i.count;s<l;s++){const c=e[s];i.setXYZ(s,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];_l.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ui.min,_l.min),ui.expandByPoint(Sn),Sn.addVectors(ui.max,_l.max),ui.expandByPoint(Sn)):(ui.expandByPoint(_l.min),ui.expandByPoint(_l.max))}ui.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Sn.fromBufferAttribute(d,m),p&&(Zr.fromBufferAttribute(e,m),Sn.add(Zr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<s.count;B++)d[B]=new k,p[B]=new k;const m=new k,v=new k,g=new k,x=new Dt,S=new Dt,E=new Dt,A=new k,M=new k;function y(B,N,w){m.fromBufferAttribute(s,B),v.fromBufferAttribute(s,N),g.fromBufferAttribute(s,w),x.fromBufferAttribute(c,B),S.fromBufferAttribute(c,N),E.fromBufferAttribute(c,w),v.sub(m),g.sub(m),S.sub(x),E.sub(x);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(F),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(F),d[B].add(A),d[N].add(A),d[w].add(A),p[B].add(M),p[N].add(M),p[w].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let B=0,N=z.length;B<N;++B){const w=z[B],F=w.start,rt=w.count;for(let nt=F,ct=F+rt;nt<ct;nt+=3)y(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const U=new k,C=new k,J=new k,H=new k;function L(B){J.fromBufferAttribute(l,B),H.copy(J);const N=d[B];U.copy(N),U.sub(J.multiplyScalar(J.dot(N))).normalize(),C.crossVectors(H,N);const F=C.dot(p[B])<0?-1:1;h.setXYZW(B,U.x,U.y,U.z,F)}for(let B=0,N=z.length;B<N;++B){const w=z[B],F=w.start,rt=w.count;for(let nt=F,ct=F+rt;nt<ct;nt+=3)L(e.getX(nt+0)),L(e.getX(nt+1)),L(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new k,c=new k,h=new k,d=new k,p=new k,m=new k,v=new k,g=new k;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),A=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,M),d.add(v),p.add(v),m.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,x=new m.constructor(p.length*v);let S=0,E=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*v;for(let y=0;y<v;y++)x[E++]=m[S++]}return new Ii(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fi,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const x=m[v],S=e(x,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,x=m.length;g<x;g++){const S=m[g];v.push(S.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=e.morphAttributes;for(const m in c){const v=[],g=c[m];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,v=h.length;m<v;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cx=new Ze,Hs=new iT,yc=new mm,fx=new k,Sc=new k,Mc=new k,Ec=new k,np=new k,Tc=new k,hx=new k,bc=new k;class Mn extends Rn{constructor(e=new fi,i=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Tc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(np.fromBufferAttribute(g,e),h?Tc.addScaledVector(np,v):Tc.addScaledVector(np.sub(i),v))}i.add(Tc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),Hs.copy(e.ray).recast(e.near),!(yc.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(yc,fx)===null||Hs.origin.distanceToSquared(fx)>(e.far-e.near)**2))&&(cx.copy(c).invert(),Hs.copy(e.ray).applyMatrix4(cx),!(s.boundingBox!==null&&Hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Hs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const M=x[E],y=h[M.materialIndex],z=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=z,J=U;C<J;C+=3){const H=d.getX(C),L=d.getX(C+1),B=d.getX(C+2);l=Ac(this,y,e,s,m,v,g,H,L,B),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=E,y=A;M<y;M+=3){const z=d.getX(M),U=d.getX(M+1),C=d.getX(M+2);l=Ac(this,h,e,s,m,v,g,z,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const M=x[E],y=h[M.materialIndex],z=Math.max(M.start,S.start),U=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let C=z,J=U;C<J;C+=3){const H=C,L=C+1,B=C+2;l=Ac(this,y,e,s,m,v,g,H,L,B),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let M=E,y=A;M<y;M+=3){const z=M,U=M+1,C=M+2;l=Ac(this,h,e,s,m,v,g,z,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function hT(o,e,i,s,l,c,h,d){let p;if(e.side===Kn?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,e.side===ps,d),p===null)return null;bc.copy(d),bc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(bc);return m<i.near||m>i.far?null:{distance:m,point:bc.clone(),object:o}}function Ac(o,e,i,s,l,c,h,d,p,m){o.getVertexPosition(d,Sc),o.getVertexPosition(p,Mc),o.getVertexPosition(m,Ec);const v=hT(o,e,i,s,Sc,Mc,Ec,hx);if(v){const g=new k;Ti.getBarycoord(hx,Sc,Mc,Ec,g),l&&(v.uv=Ti.getInterpolatedAttribute(l,d,p,m,g,new Dt)),c&&(v.uv1=Ti.getInterpolatedAttribute(c,d,p,m,g,new Dt)),h&&(v.normal=Ti.getInterpolatedAttribute(h,d,p,m,g,new k),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new k,materialIndex:0};Ti.getNormal(Sc,Mc,Ec,x.normal),v.face=x,v.barycoord=g}return v}class Fl extends fi{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],v=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,e,h,c,0),E("z","y","x",1,-1,s,i,-e,h,c,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new an(m,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(g,2));function E(A,M,y,z,U,C,J,H,L,B,N){const w=C/L,F=J/B,rt=C/2,nt=J/2,ct=H/2,ft=L+1,V=B+1;let it=0,Z=0;const xt=new k;for(let Tt=0;Tt<V;Tt++){const zt=Tt*F-nt;for(let se=0;se<ft;se++){const ge=se*w-rt;xt[A]=ge*z,xt[M]=zt*U,xt[y]=ct,m.push(xt.x,xt.y,xt.z),xt[A]=0,xt[M]=0,xt[y]=H>0?1:-1,v.push(xt.x,xt.y,xt.z),g.push(se/L),g.push(1-Tt/B),it+=1}}for(let Tt=0;Tt<B;Tt++)for(let zt=0;zt<L;zt++){const se=x+zt+ft*Tt,ge=x+zt+ft*(Tt+1),D=x+(zt+1)+ft*(Tt+1),Y=x+(zt+1)+ft*Tt;p.push(se,ge,Y),p.push(ge,D,Y),Z+=6}d.addGroup(S,Z,N),S+=Z,x+=it}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Xn(o){const e={};for(let i=0;i<o.length;i++){const s=vo(o[i]);for(const l in s)e[l]=s[l]}return e}function dT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Sy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const pT={clone:vo,merge:Xn};var mT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ms extends yo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mT,this.fragmentShader=gT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=dT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class My extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=wa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new k,dx=new Dt,px=new Dt;class ci extends My{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,i){return this.getViewBounds(e,dx,px),i.subVectors(px,dx)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Al*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Qr=-90,Kr=1;class vT extends Rn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(Qr,Kr,e,i);l.layers=this.layers,this.add(l);const c=new ci(Qr,Kr,e,i);c.layers=this.layers,this.add(c);const h=new ci(Qr,Kr,e,i);h.layers=this.layers,this.add(h);const d=new ci(Qr,Kr,e,i);d.layers=this.layers,this.add(d);const p=new ci(Qr,Kr,e,i);p.layers=this.layers,this.add(p);const m=new ci(Qr,Kr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===wa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===qc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,x,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Ey extends kn{constructor(e,i,s,l,c,h,d,p,m,v){e=e!==void 0?e:[],i=i!==void 0?i:ho,super(e,i,s,l,c,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _T extends Js{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Ey(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ji}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Fl(5,5,5),c=new ms({name:"CubemapFromEquirect",uniforms:vo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:fs});c.uniforms.tEquirect.value=i;const h=new Mn(l,c),d=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Ji),new vT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}const ip=new k,xT=new k,yT=new ve;class ks{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=ip.subVectors(s,i).cross(xT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(ip),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||yT.getNormalMatrix(e),l=this.coplanarPoint(ip).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new mm,wc=new k;class gm{constructor(e=new ks,i=new ks,s=new ks,l=new ks,c=new ks,h=new ks){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=wa){const s=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],v=l[5],g=l[6],x=l[7],S=l[8],E=l[9],A=l[10],M=l[11],y=l[12],z=l[13],U=l[14],C=l[15];if(s[0].setComponents(p-c,x-m,M-S,C-y).normalize(),s[1].setComponents(p+c,x+m,M+S,C+y).normalize(),s[2].setComponents(p+h,x+v,M+E,C+z).normalize(),s[3].setComponents(p-h,x-v,M-E,C-z).normalize(),s[4].setComponents(p-d,x-g,M-A,C-U).normalize(),i===wa)s[5].setComponents(p+d,x+g,M+A,C+U).normalize();else if(i===qc)s[5].setComponents(d,g,A,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(wc.x=l.normal.x>0?e.max.x:e.min.x,wc.y=l.normal.y>0?e.max.y:e.min.y,wc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ty(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ST(o){const e=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,v);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],A=g[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,g[x]=A)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const A=g[S];o.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}class Hl extends fi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,v=p+1,g=e/d,x=i/p,S=[],E=[],A=[],M=[];for(let y=0;y<v;y++){const z=y*x-h;for(let U=0;U<m;U++){const C=U*g-c;E.push(C,-z,0),A.push(0,0,1),M.push(U/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let z=0;z<d;z++){const U=z+m*y,C=z+m*(y+1),J=z+1+m*(y+1),H=z+1+m*y;S.push(U,C,H),S.push(C,J,H)}this.setIndex(S),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(A,3)),this.setAttribute("uv",new an(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}var MT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ET=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JT="gl_FragColor = linearToOutputTexel( gl_FragColor );",$T=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,db=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:MT,alphahash_pars_fragment:ET,alphamap_fragment:TT,alphamap_pars_fragment:bT,alphatest_fragment:AT,alphatest_pars_fragment:wT,aomap_fragment:CT,aomap_pars_fragment:RT,batching_pars_vertex:DT,batching_vertex:NT,begin_vertex:UT,beginnormal_vertex:LT,bsdfs:OT,iridescence_fragment:zT,bumpmap_pars_fragment:PT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:BT,clipping_planes_pars_vertex:FT,clipping_planes_vertex:HT,color_fragment:GT,color_pars_fragment:VT,color_pars_vertex:XT,color_vertex:kT,common:qT,cube_uv_reflection_fragment:YT,defaultnormal_vertex:WT,displacementmap_pars_vertex:jT,displacementmap_vertex:ZT,emissivemap_fragment:QT,emissivemap_pars_fragment:KT,colorspace_fragment:JT,colorspace_pars_fragment:$T,envmap_fragment:tb,envmap_common_pars_fragment:eb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:ab,fog_vertex:sb,fog_pars_vertex:rb,fog_fragment:ob,fog_pars_fragment:lb,gradientmap_pars_fragment:ub,lightmap_pars_fragment:cb,lights_lambert_fragment:fb,lights_lambert_pars_fragment:hb,lights_pars_begin:db,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:vb,lights_phong_pars_fragment:_b,lights_physical_fragment:xb,lights_physical_pars_fragment:yb,lights_fragment_begin:Sb,lights_fragment_maps:Mb,lights_fragment_end:Eb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:Ab,logdepthbuf_vertex:wb,map_fragment:Cb,map_pars_fragment:Rb,map_particle_fragment:Db,map_particle_pars_fragment:Nb,metalnessmap_fragment:Ub,metalnessmap_pars_fragment:Lb,morphinstance_vertex:Ob,morphcolor_vertex:zb,morphnormal_vertex:Pb,morphtarget_pars_vertex:Ib,morphtarget_vertex:Bb,normal_fragment_begin:Fb,normal_fragment_maps:Hb,normal_pars_fragment:Gb,normal_pars_vertex:Vb,normal_vertex:Xb,normalmap_pars_fragment:kb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:jb,opaque_fragment:Zb,packing:Qb,premultiplied_alpha_fragment:Kb,project_vertex:Jb,dithering_fragment:$b,dithering_pars_fragment:tA,roughnessmap_fragment:eA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:aA,shadowmap_vertex:sA,shadowmask_pars_fragment:rA,skinbase_vertex:oA,skinning_pars_vertex:lA,skinning_vertex:uA,skinnormal_vertex:cA,specularmap_fragment:fA,specularmap_pars_fragment:hA,tonemapping_fragment:dA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:vA,uv_pars_vertex:_A,uv_vertex:xA,worldpos_vertex:yA,background_vert:SA,background_frag:MA,backgroundCube_vert:EA,backgroundCube_frag:TA,cube_vert:bA,cube_frag:AA,depth_vert:wA,depth_frag:CA,distanceRGBA_vert:RA,distanceRGBA_frag:DA,equirect_vert:NA,equirect_frag:UA,linedashed_vert:LA,linedashed_frag:OA,meshbasic_vert:zA,meshbasic_frag:PA,meshlambert_vert:IA,meshlambert_frag:BA,meshmatcap_vert:FA,meshmatcap_frag:HA,meshnormal_vert:GA,meshnormal_frag:VA,meshphong_vert:XA,meshphong_frag:kA,meshphysical_vert:qA,meshphysical_frag:YA,meshtoon_vert:WA,meshtoon_frag:jA,points_vert:ZA,points_frag:QA,shadow_vert:KA,shadow_frag:JA,sprite_vert:$A,sprite_frag:t2},Bt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Ki={basic:{uniforms:Xn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Xn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Xn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Xn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Xn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new we(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Xn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Xn([Bt.points,Bt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Xn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Xn([Bt.common,Bt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Xn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Xn([Bt.sprite,Bt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Xn([Bt.common,Bt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Xn([Bt.lights,Bt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ki.physical={uniforms:Xn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Cc={r:0,b:0,g:0},Vs=new ta,e2=new Ze;function n2(o,e,i,s,l,c,h){const d=new we(0);let p=c===!0?0:1,m,v,g=null,x=0,S=null;function E(z){let U=z.isScene===!0?z.background:null;return U&&U.isTexture&&(U=(z.backgroundBlurriness>0?i:e).get(U)),U}function A(z){let U=!1;const C=E(z);C===null?y(d,p):C&&C.isColor&&(y(C,1),U=!0);const J=o.xr.getEnvironmentBlendMode();J==="additive"?s.buffers.color.setClear(0,0,0,1,h):J==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(z,U){const C=E(U);C&&(C.isCubeTexture||C.mapping===$c)?(v===void 0&&(v=new Mn(new Fl(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:vo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(J,H,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Vs.copy(U.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),v.material.uniforms.envMap.value=C,v.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(e2.makeRotationFromEuler(Vs)),v.material.toneMapped=De.getTransfer(C.colorSpace)!==Ge,(g!==C||x!==C.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,g=C,x=C.version,S=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Mn(new Hl(2,2),new ms({name:"BackgroundMaterial",uniforms:vo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=De.getTransfer(C.colorSpace)!==Ge,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||x!==C.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,g=C,x=C.version,S=o.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function y(z,U){z.getRGB(Cc,Sy(o)),s.buffers.color.setClear(Cc.r,Cc.g,Cc.b,U,h)}return{getClearColor:function(){return d},setClearColor:function(z,U=1){d.set(z),p=U,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,y(d,p)},render:A,addToRenderList:M}}function i2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(w,F,rt,nt,ct){let ft=!1;const V=g(nt,rt,F);c!==V&&(c=V,m(c.object)),ft=S(w,nt,rt,ct),ft&&E(w,nt,rt,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,C(w,F,rt,nt),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function p(){return o.createVertexArray()}function m(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function g(w,F,rt){const nt=rt.wireframe===!0;let ct=s[w.id];ct===void 0&&(ct={},s[w.id]=ct);let ft=ct[F.id];ft===void 0&&(ft={},ct[F.id]=ft);let V=ft[nt];return V===void 0&&(V=x(p()),ft[nt]=V),V}function x(w){const F=[],rt=[],nt=[];for(let ct=0;ct<i;ct++)F[ct]=0,rt[ct]=0,nt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:rt,attributeDivisors:nt,object:w,attributes:{},index:null}}function S(w,F,rt,nt){const ct=c.attributes,ft=F.attributes;let V=0;const it=rt.getAttributes();for(const Z in it)if(it[Z].location>=0){const Tt=ct[Z];let zt=ft[Z];if(zt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(zt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(zt=w.instanceColor)),Tt===void 0||Tt.attribute!==zt||zt&&Tt.data!==zt.data)return!0;V++}return c.attributesNum!==V||c.index!==nt}function E(w,F,rt,nt){const ct={},ft=F.attributes;let V=0;const it=rt.getAttributes();for(const Z in it)if(it[Z].location>=0){let Tt=ft[Z];Tt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));const zt={};zt.attribute=Tt,Tt&&Tt.data&&(zt.data=Tt.data),ct[Z]=zt,V++}c.attributes=ct,c.attributesNum=V,c.index=nt}function A(){const w=c.newAttributes;for(let F=0,rt=w.length;F<rt;F++)w[F]=0}function M(w){y(w,0)}function y(w,F){const rt=c.newAttributes,nt=c.enabledAttributes,ct=c.attributeDivisors;rt[w]=1,nt[w]===0&&(o.enableVertexAttribArray(w),nt[w]=1),ct[w]!==F&&(o.vertexAttribDivisor(w,F),ct[w]=F)}function z(){const w=c.newAttributes,F=c.enabledAttributes;for(let rt=0,nt=F.length;rt<nt;rt++)F[rt]!==w[rt]&&(o.disableVertexAttribArray(rt),F[rt]=0)}function U(w,F,rt,nt,ct,ft,V){V===!0?o.vertexAttribIPointer(w,F,rt,ct,ft):o.vertexAttribPointer(w,F,rt,nt,ct,ft)}function C(w,F,rt,nt){A();const ct=nt.attributes,ft=rt.getAttributes(),V=F.defaultAttributeValues;for(const it in ft){const Z=ft[it];if(Z.location>=0){let xt=ct[it];if(xt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor)),xt!==void 0){const Tt=xt.normalized,zt=xt.itemSize,se=e.get(xt);if(se===void 0)continue;const ge=se.buffer,D=se.type,Y=se.bytesPerElement,_t=D===o.INT||D===o.UNSIGNED_INT||xt.gpuType===lm;if(xt.isInterleavedBufferAttribute){const ut=xt.data,Ct=ut.stride,Pt=xt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ot=0;Ot<Z.locationSize;Ot++)y(Z.location+Ot,ut.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ot=0;Ot<Z.locationSize;Ot++)M(Z.location+Ot);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Ot=0;Ot<Z.locationSize;Ot++)U(Z.location+Ot,zt/Z.locationSize,D,Tt,Ct*Y,(Pt+zt/Z.locationSize*Ot)*Y,_t)}else{if(xt.isInstancedBufferAttribute){for(let ut=0;ut<Z.locationSize;ut++)y(Z.location+ut,xt.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ut=0;ut<Z.locationSize;ut++)M(Z.location+ut);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let ut=0;ut<Z.locationSize;ut++)U(Z.location+ut,zt/Z.locationSize,D,Tt,zt*Y,zt/Z.locationSize*ut*Y,_t)}}else if(V!==void 0){const Tt=V[it];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(Z.location,Tt);break;case 3:o.vertexAttrib3fv(Z.location,Tt);break;case 4:o.vertexAttrib4fv(Z.location,Tt);break;default:o.vertexAttrib1fv(Z.location,Tt)}}}}z()}function J(){B();for(const w in s){const F=s[w];for(const rt in F){const nt=F[rt];for(const ct in nt)v(nt[ct].object),delete nt[ct];delete F[rt]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const F=s[w.id];for(const rt in F){const nt=F[rt];for(const ct in nt)v(nt[ct].object),delete nt[ct];delete F[rt]}delete s[w.id]}function L(w){for(const F in s){const rt=s[F];if(rt[w.id]===void 0)continue;const nt=rt[w.id];for(const ct in nt)v(nt[ct].object),delete nt[ct];delete rt[w.id]}}function B(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:N,dispose:J,releaseStatesOfGeometry:H,releaseStatesOfProgram:L,initAttributes:A,enableAttribute:M,disableUnusedAttributes:z}}function a2(o,e,i){let s;function l(m){s=m}function c(m,v){o.drawArrays(s,m,v),i.update(v,s,1)}function h(m,v,g){g!==0&&(o.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,s,1)}function p(m,v,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)h(m[E],v[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,v,0,x,0,g);let E=0;for(let A=0;A<g;A++)E+=v[A]*x[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function s2(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==zi&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const B=L===Pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ra&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Aa&&!B)}function p(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),J=E>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:z,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:J,maxSamples:H}}function r2(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new ks,d=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||s!==0||l;return l=x,s=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,y=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):m();else{const z=c?0:s,U=z*4;let C=y.clippingState||null;p.value=C,C=v(E,x,U,S);for(let J=0;J!==U;++J)C[J]=i[J];y.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,x,S,E){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=p.value,E!==!0||M===null){const y=S+A*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<y)&&(M=new Float32Array(y));for(let U=0,C=S;U!==A;++U,C+=4)h.copy(g[U]).applyMatrix4(z,d),h.normal.toArray(M,C),M[C+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function o2(o){let e=new WeakMap;function i(h,d){return d===Ap?h.mapping=ho:d===wp&&(h.mapping=po),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ap||d===wp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new _T(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class by extends My{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const so=4,mx=[.125,.215,.35,.446,.526,.582],Ws=20,ap=new by,gx=new we;let sp=null,rp=0,op=0,lp=!1;const qs=(1+Math.sqrt(5))/2,Jr=1/qs,vx=[new k(-qs,Jr,0),new k(qs,Jr,0),new k(-Jr,0,qs),new k(Jr,0,qs),new k(0,qs,-Jr),new k(0,qs,Jr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class _x{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){sp=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sp,rp,op),this._renderer.xr.enabled=lp,e.scissorTest=!1,Rc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sp=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:Pl,format:zi,colorSpace:_o,depthBuffer:!1},l=xx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xx(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l2(c)),this._blurMaterial=u2(c,e,i)}return l}_compileMaterial(e){const i=new Mn(this._lodPlanes[0],e);this._renderer.compile(i,ap)}_sceneToCubeUV(e,i,s,l){const d=new ci(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(gx),v.toneMapping=hs,v.autoClear=!1;const S=new Wc({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),E=new Mn(new Fl,S);let A=!1;const M=e.background;M?M.isColor&&(S.color.copy(M),e.background=null,A=!0):(S.color.copy(gx),A=!0);for(let y=0;y<6;y++){const z=y%3;z===0?(d.up.set(0,p[y],0),d.lookAt(m[y],0,0)):z===1?(d.up.set(0,0,p[y]),d.lookAt(0,m[y],0)):(d.up.set(0,p[y],0),d.lookAt(0,0,m[y]));const U=this._cubeSize;Rc(l,z*U,y>2?U:0,U,U),v.setRenderTarget(l),A&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=g,e.background=M}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ho||e.mapping===po;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Mn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Rc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,ap)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=vx[(l-c-1)%vx.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Mn(this._lodPlanes[l],m),x=m.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ws-1),A=c/E,M=isFinite(c)?1+Math.floor(v*A):Ws;M>Ws&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ws}`);const y=[];let z=0;for(let L=0;L<Ws;++L){const B=L/A,N=Math.exp(-B*B/2);y.push(N),L===0?z+=N:L<M&&(z+=2*N)}for(let L=0;L<y.length;L++)y[L]=y[L]/z;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=y,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-s;const C=this._sizeLods[l],J=3*C*(l>U-so?l-U+so:0),H=4*(this._cubeSize-C);Rc(i,J,H,3*C,2*C),p.setRenderTarget(i),p.render(g,ap)}}function l2(o){const e=[],i=[],s=[];let l=o;const c=o-so+1+mx.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-so?p=mx[h-o+so-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,g=1+m,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,A=3,M=2,y=1,z=new Float32Array(A*E*S),U=new Float32Array(M*E*S),C=new Float32Array(y*E*S);for(let H=0;H<S;H++){const L=H%3*2/3-1,B=H>2?0:-1,N=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];z.set(N,A*E*H),U.set(x,M*E*H);const w=[H,H,H,H,H,H];C.set(w,y*E*H)}const J=new fi;J.setAttribute("position",new Ii(z,A)),J.setAttribute("uv",new Ii(U,M)),J.setAttribute("faceIndex",new Ii(C,y)),e.push(J),l>so&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function xx(o,e,i){const s=new Js(o,e,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function u2(o,e,i){const s=new Float32Array(Ws),l=new k(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function yx(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Sx(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function vm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c2(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ap||p===wp,v=p===ho||p===po;if(m||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new _x(o)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new _x(o)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function f2(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Tl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function h2(o,e,i,s){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const A=x.morphAttributes[E];for(let M=0,y=A.length;M<y;M++)e.remove(A[M])}x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(g){const x=g.attributes;for(const E in x)e.update(x[E],o.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const A=S[E];for(let M=0,y=A.length;M<y;M++)e.update(A[M],o.ARRAY_BUFFER)}}function m(g){const x=[],S=g.index,E=g.attributes.position;let A=0;if(S!==null){const z=S.array;A=S.version;for(let U=0,C=z.length;U<C;U+=3){const J=z[U+0],H=z[U+1],L=z[U+2];x.push(J,H,H,L,L,J)}}else if(E!==void 0){const z=E.array;A=E.version;for(let U=0,C=z.length/3-1;U<C;U+=3){const J=U+0,H=U+1,L=U+2;x.push(J,H,H,L,L,J)}}else return;const M=new(py(x)?yy:xy)(x,1);M.version=A;const y=c.get(g);y&&e.remove(y),c.set(g,M)}function v(g){const x=c.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function d2(o,e,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,S){o.drawElements(s,S,c,x*h),i.update(S,s,1)}function m(x,S,E){E!==0&&(o.drawElementsInstanced(s,S,c,x*h,E),i.update(S,s,E))}function v(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,s,1)}function g(x,S,E,A){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<x.length;y++)m(x[y]/h,S[y],A[y]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,A,0,E);let y=0;for(let z=0;z<E;z++)y+=S[z]*A[z];i.update(y,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function p2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function m2(o,e,i){const s=new WeakMap,l=new Ve;function c(h,d,p){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let w=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),M===!0&&(C=3);let J=d.attributes.position.count*C,H=1;J>e.maxTextureSize&&(H=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const L=new Float32Array(J*H*4*g),B=new gy(L,J,H,g);B.type=Aa,B.needsUpdate=!0;const N=C*4;for(let F=0;F<g;F++){const rt=y[F],nt=z[F],ct=U[F],ft=J*H*4*F;for(let V=0;V<rt.count;V++){const it=V*N;E===!0&&(l.fromBufferAttribute(rt,V),L[ft+it+0]=l.x,L[ft+it+1]=l.y,L[ft+it+2]=l.z,L[ft+it+3]=0),A===!0&&(l.fromBufferAttribute(nt,V),L[ft+it+4]=l.x,L[ft+it+5]=l.y,L[ft+it+6]=l.z,L[ft+it+7]=0),M===!0&&(l.fromBufferAttribute(ct,V),L[ft+it+8]=l.x,L[ft+it+9]=l.y,L[ft+it+10]=l.z,L[ft+it+11]=ct.itemSize===4?l.w:1)}}x={count:g,texture:B,size:new Dt(J,H)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function g2(o,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,v=p.geometry,g=e.get(p,v);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return g}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}class Ay extends kn{constructor(e,i,s,l,c,h,d,p,m,v=uo){if(v!==uo&&v!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===uo&&(s=Ks),s===void 0&&v===go&&(s=mo),super(null,l,c,h,d,p,v,s,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Pi,this.minFilter=p!==void 0?p:Pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const wy=new kn,Mx=new Ay(1,1),Cy=new gy,Ry=new eT,Dy=new Ey,Ex=[],Tx=[],bx=new Float32Array(16),Ax=new Float32Array(9),wx=new Float32Array(4);function So(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=Ex[l];if(c===void 0&&(c=new Float32Array(l),Ex[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function ef(o,e){let i=Tx[e];i===void 0&&(i=new Int32Array(e),Tx[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function v2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function _2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function x2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function y2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function S2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;wx.set(s),o.uniformMatrix2fv(this.addr,!1,wx),mn(i,s)}}function M2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;Ax.set(s),o.uniformMatrix3fv(this.addr,!1,Ax),mn(i,s)}}function E2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;bx.set(s),o.uniformMatrix4fv(this.addr,!1,bx),mn(i,s)}}function T2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function b2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function A2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function w2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function C2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function R2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function D2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function N2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function U2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Mx.compareFunction=dy,c=Mx):c=wy,i.setTexture2D(e||c,l)}function L2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Ry,l)}function O2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Dy,l)}function z2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Cy,l)}function P2(o){switch(o){case 5126:return v2;case 35664:return _2;case 35665:return x2;case 35666:return y2;case 35674:return S2;case 35675:return M2;case 35676:return E2;case 5124:case 35670:return T2;case 35667:case 35671:return b2;case 35668:case 35672:return A2;case 35669:case 35673:return w2;case 5125:return C2;case 36294:return R2;case 36295:return D2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return O2;case 36289:case 36303:case 36311:case 36292:return z2}}function I2(o,e){o.uniform1fv(this.addr,e)}function B2(o,e){const i=So(e,this.size,2);o.uniform2fv(this.addr,i)}function F2(o,e){const i=So(e,this.size,3);o.uniform3fv(this.addr,i)}function H2(o,e){const i=So(e,this.size,4);o.uniform4fv(this.addr,i)}function G2(o,e){const i=So(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function V2(o,e){const i=So(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function X2(o,e){const i=So(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function k2(o,e){o.uniform1iv(this.addr,e)}function q2(o,e){o.uniform2iv(this.addr,e)}function Y2(o,e){o.uniform3iv(this.addr,e)}function W2(o,e){o.uniform4iv(this.addr,e)}function j2(o,e){o.uniform1uiv(this.addr,e)}function Z2(o,e){o.uniform2uiv(this.addr,e)}function Q2(o,e){o.uniform3uiv(this.addr,e)}function K2(o,e){o.uniform4uiv(this.addr,e)}function J2(o,e,i){const s=this.cache,l=e.length,c=ef(i,l);pn(s,c)||(o.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||wy,c[h])}function $2(o,e,i){const s=this.cache,l=e.length,c=ef(i,l);pn(s,c)||(o.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ry,c[h])}function tw(o,e,i){const s=this.cache,l=e.length,c=ef(i,l);pn(s,c)||(o.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Dy,c[h])}function ew(o,e,i){const s=this.cache,l=e.length,c=ef(i,l);pn(s,c)||(o.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Cy,c[h])}function nw(o){switch(o){case 5126:return I2;case 35664:return B2;case 35665:return F2;case 35666:return H2;case 35674:return G2;case 35675:return V2;case 35676:return X2;case 5124:case 35670:return k2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return W2;case 5125:return j2;case 36294:return Z2;case 36295:return Q2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return $2;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return ew}}class iw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=P2(i.type)}}class aw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nw(i.type)}}class sw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const up=/(\w+)(\])?(\[|\.)?/g;function Cx(o,e){o.seq.push(e),o.map[e.id]=e}function rw(o,e,i){const s=o.name,l=s.length;for(up.lastIndex=0;;){const c=up.exec(s),h=up.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Cx(i,m===void 0?new iw(d,o,e):new aw(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new sw(d),Cx(i,g)),i=g}}}class Xc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);rw(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function Rx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const ow=37297;let lw=0;function uw(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Dx=new ve;function cw(o){De._getMatrix(Dx,De.workingColorSpace,o);const e=`mat3( ${Dx.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case tf:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Nx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+uw(o.getShaderSource(e),h)}else return l}function fw(o,e){const i=cw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function hw(o,e){let i;switch(e){case p1:i="Linear";break;case m1:i="Reinhard";break;case g1:i="Cineon";break;case ty:i="ACESFilmic";break;case _1:i="AgX";break;case x1:i="Neutral";break;case v1:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new k;function dw(){De.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),e=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function mw(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function gw(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function bl(o){return o!==""}function Ux(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function nm(o){return o.replace(vw,xw)}const _w=new Map;function xw(o,e){let i=_e[e];if(i===void 0){const s=_w.get(e);if(s!==void 0)i=_e[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return nm(i)}const yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ox(o){return o.replace(yw,Sw)}function Sw(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function zx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mw(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Jx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===WE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ta&&(e="SHADOWMAP_TYPE_VSM"),e}function Ew(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function bw(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $x:e="ENVMAP_BLENDING_MULTIPLY";break;case h1:e="ENVMAP_BLENDING_MIX";break;case d1:e="ENVMAP_BLENDING_ADD";break}return e}function Aw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function ww(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Mw(i),m=Ew(i),v=Tw(i),g=bw(i),x=Aw(i),S=pw(i),E=mw(c),A=l.createProgram();let M,y,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bl).join(`
`),y.length>0&&(y+=`
`)):(M=[zx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),y=[zx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==hs?"#define TONE_MAPPING":"",i.toneMapping!==hs?_e.tonemapping_pars_fragment:"",i.toneMapping!==hs?hw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,fw("linearToOutputTexel",i.outputColorSpace),dw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bl).join(`
`)),h=nm(h),h=Ux(h,i),h=Lx(h,i),d=nm(d),d=Ux(d,i),d=Lx(d,i),h=Ox(h),d=Ox(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===W_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===W_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=z+M+h,C=z+y+d,J=Rx(l,l.VERTEX_SHADER,U),H=Rx(l,l.FRAGMENT_SHADER,C);l.attachShader(A,J),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function L(F){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(A).trim(),nt=l.getShaderInfoLog(J).trim(),ct=l.getShaderInfoLog(H).trim();let ft=!0,V=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,J,H);else{const it=Nx(l,J,"vertex"),Z=Nx(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+rt+`
`+it+`
`+Z)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(nt===""||ct==="")&&(V=!1);V&&(F.diagnostics={runnable:ft,programLog:rt,vertexShader:{log:nt,prefix:M},fragmentShader:{log:ct,prefix:y}})}l.deleteShader(J),l.deleteShader(H),B=new Xc(l,A),N=gw(l,A)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let N;this.getAttributes=function(){return N===void 0&&L(this),N};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,ow)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=J,this.fragmentShader=H,this}let Cw=0;class Rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Dw(e),i.set(e,s)),s}}class Dw{constructor(e){this.id=Cw++,this.code=e,this.usedTimes=0}}function Nw(o,e,i,s,l,c,h){const d=new vy,p=new Rw,m=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(N){return m.add(N),N===0?"uv":`uv${N}`}function M(N,w,F,rt,nt){const ct=rt.fog,ft=nt.geometry,V=N.isMeshStandardMaterial?rt.environment:null,it=(N.isMeshStandardMaterial?i:e).get(N.envMap||V),Z=it&&it.mapping===$c?it.image.height:null,xt=E[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const Tt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,zt=Tt!==void 0?Tt.length:0;let se=0;ft.morphAttributes.position!==void 0&&(se=1),ft.morphAttributes.normal!==void 0&&(se=2),ft.morphAttributes.color!==void 0&&(se=3);let ge,D,Y,_t;if(xt){const be=Ki[xt];ge=be.vertexShader,D=be.fragmentShader}else ge=N.vertexShader,D=N.fragmentShader,p.update(N),Y=p.getVertexShaderID(N),_t=p.getFragmentShaderID(N);const ut=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Pt=nt.isInstancedMesh===!0,Ot=nt.isBatchedMesh===!0,wt=!!N.map,at=!!N.matcap,bt=!!it,I=!!N.aoMap,jt=!!N.lightMap,Et=!!N.bumpMap,Lt=!!N.normalMap,yt=!!N.displacementMap,te=!!N.emissiveMap,Ft=!!N.metalnessMap,O=!!N.roughnessMap,b=N.anisotropy>0,et=N.clearcoat>0,dt=N.dispersion>0,Mt=N.iridescence>0,gt=N.sheen>0,Zt=N.transmission>0,Nt=b&&!!N.anisotropyMap,Ut=et&&!!N.clearcoatMap,oe=et&&!!N.clearcoatNormalMap,At=et&&!!N.clearcoatRoughnessMap,Xt=Mt&&!!N.iridescenceMap,Kt=Mt&&!!N.iridescenceThicknessMap,Jt=gt&&!!N.sheenColorMap,qt=gt&&!!N.sheenRoughnessMap,de=!!N.specularMap,ce=!!N.specularColorMap,Ne=!!N.specularIntensityMap,X=Zt&&!!N.transmissionMap,Ht=Zt&&!!N.thicknessMap,ht=!!N.gradientMap,St=!!N.alphaMap,Gt=N.alphaTest>0,Yt=!!N.alphaHash,fe=!!N.extensions;let Qe=hs;N.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Qe=o.toneMapping);const gn={shaderID:xt,shaderType:N.type,shaderName:N.name,vertexShader:ge,fragmentShader:D,defines:N.defines,customVertexShaderID:Y,customFragmentShaderID:_t,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:Ot,batchingColor:Ot&&nt._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&nt.instanceColor!==null,instancingMorph:Pt&&nt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:_o,alphaToCoverage:!!N.alphaToCoverage,map:wt,matcap:at,envMap:bt,envMapMode:bt&&it.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:jt,bumpMap:Et,normalMap:Lt,displacementMap:x&&yt,emissiveMap:te,normalMapObjectSpace:Lt&&N.normalMapType===E1,normalMapTangentSpace:Lt&&N.normalMapType===hy,metalnessMap:Ft,roughnessMap:O,anisotropy:b,anisotropyMap:Nt,clearcoat:et,clearcoatMap:Ut,clearcoatNormalMap:oe,clearcoatRoughnessMap:At,dispersion:dt,iridescence:Mt,iridescenceMap:Xt,iridescenceThicknessMap:Kt,sheen:gt,sheenColorMap:Jt,sheenRoughnessMap:qt,specularMap:de,specularColorMap:ce,specularIntensityMap:Ne,transmission:Zt,transmissionMap:X,thicknessMap:Ht,gradientMap:ht,opaque:N.transparent===!1&&N.blending===lo&&N.alphaToCoverage===!1,alphaMap:St,alphaTest:Gt,alphaHash:Yt,combine:N.combine,mapUv:wt&&A(N.map.channel),aoMapUv:I&&A(N.aoMap.channel),lightMapUv:jt&&A(N.lightMap.channel),bumpMapUv:Et&&A(N.bumpMap.channel),normalMapUv:Lt&&A(N.normalMap.channel),displacementMapUv:yt&&A(N.displacementMap.channel),emissiveMapUv:te&&A(N.emissiveMap.channel),metalnessMapUv:Ft&&A(N.metalnessMap.channel),roughnessMapUv:O&&A(N.roughnessMap.channel),anisotropyMapUv:Nt&&A(N.anisotropyMap.channel),clearcoatMapUv:Ut&&A(N.clearcoatMap.channel),clearcoatNormalMapUv:oe&&A(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&A(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&A(N.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&A(N.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&A(N.sheenColorMap.channel),sheenRoughnessMapUv:qt&&A(N.sheenRoughnessMap.channel),specularMapUv:de&&A(N.specularMap.channel),specularColorMapUv:ce&&A(N.specularColorMap.channel),specularIntensityMapUv:Ne&&A(N.specularIntensityMap.channel),transmissionMapUv:X&&A(N.transmissionMap.channel),thicknessMapUv:Ht&&A(N.thicknessMap.channel),alphaMapUv:St&&A(N.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Lt||b),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ft.attributes.uv&&(wt||St),fog:!!ct,useFog:N.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ct,skinning:nt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Qe,decodeVideoTexture:wt&&N.map.isVideoTexture===!0&&De.getTransfer(N.map.colorSpace)===Ge,decodeVideoTextureEmissive:te&&N.emissiveMap.isVideoTexture===!0&&De.getTransfer(N.emissiveMap.colorSpace)===Ge,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ba,flipSided:N.side===Kn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:fe&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&N.extensions.multiDraw===!0||Ot)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return gn.vertexUv1s=m.has(1),gn.vertexUv2s=m.has(2),gn.vertexUv3s=m.has(3),m.clear(),gn}function y(N){const w=[];if(N.shaderID?w.push(N.shaderID):(w.push(N.customVertexShaderID),w.push(N.customFragmentShaderID)),N.defines!==void 0)for(const F in N.defines)w.push(F),w.push(N.defines[F]);return N.isRawShaderMaterial===!1&&(z(w,N),U(w,N),w.push(o.outputColorSpace)),w.push(N.customProgramCacheKey),w.join()}function z(N,w){N.push(w.precision),N.push(w.outputColorSpace),N.push(w.envMapMode),N.push(w.envMapCubeUVHeight),N.push(w.mapUv),N.push(w.alphaMapUv),N.push(w.lightMapUv),N.push(w.aoMapUv),N.push(w.bumpMapUv),N.push(w.normalMapUv),N.push(w.displacementMapUv),N.push(w.emissiveMapUv),N.push(w.metalnessMapUv),N.push(w.roughnessMapUv),N.push(w.anisotropyMapUv),N.push(w.clearcoatMapUv),N.push(w.clearcoatNormalMapUv),N.push(w.clearcoatRoughnessMapUv),N.push(w.iridescenceMapUv),N.push(w.iridescenceThicknessMapUv),N.push(w.sheenColorMapUv),N.push(w.sheenRoughnessMapUv),N.push(w.specularMapUv),N.push(w.specularColorMapUv),N.push(w.specularIntensityMapUv),N.push(w.transmissionMapUv),N.push(w.thicknessMapUv),N.push(w.combine),N.push(w.fogExp2),N.push(w.sizeAttenuation),N.push(w.morphTargetsCount),N.push(w.morphAttributeCount),N.push(w.numDirLights),N.push(w.numPointLights),N.push(w.numSpotLights),N.push(w.numSpotLightMaps),N.push(w.numHemiLights),N.push(w.numRectAreaLights),N.push(w.numDirLightShadows),N.push(w.numPointLightShadows),N.push(w.numSpotLightShadows),N.push(w.numSpotLightShadowsWithMaps),N.push(w.numLightProbes),N.push(w.shadowMapType),N.push(w.toneMapping),N.push(w.numClippingPlanes),N.push(w.numClipIntersection),N.push(w.depthPacking)}function U(N,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),N.push(d.mask)}function C(N){const w=E[N.type];let F;if(w){const rt=Ki[w];F=pT.clone(rt.uniforms)}else F=N.uniforms;return F}function J(N,w){let F;for(let rt=0,nt=v.length;rt<nt;rt++){const ct=v[rt];if(ct.cacheKey===w){F=ct,++F.usedTimes;break}}return F===void 0&&(F=new ww(o,w,N,c),v.push(F)),F}function H(N){if(--N.usedTimes===0){const w=v.indexOf(N);v[w]=v[v.length-1],v.pop(),N.destroy()}}function L(N){p.remove(N)}function B(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:C,acquireProgram:J,releaseProgram:H,releaseShaderCache:L,programs:v,dispose:B}}function Uw(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function Lw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Px(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ix(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g,x,S,E,A,M){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:A,group:M},o[e]=y):(y.id=g.id,y.object=g,y.geometry=x,y.material=S,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=A,y.group=M),e++,y}function d(g,x,S,E,A,M){const y=h(g,x,S,E,A,M);S.transmission>0?s.push(y):S.transparent===!0?l.push(y):i.push(y)}function p(g,x,S,E,A,M){const y=h(g,x,S,E,A,M);S.transmission>0?s.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function m(g,x){i.length>1&&i.sort(g||Lw),s.length>1&&s.sort(x||Px),l.length>1&&l.sort(x||Px)}function v(){for(let g=e,x=o.length;g<x;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:v,sort:m}}function Ow(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new Ix,o.set(s,[h])):l>=c.length?(h=new Ix,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function zw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new we};break;case"SpotLight":i={position:new k,direction:new k,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function Pw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Iw=0;function Bw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Fw(o){const e=new zw,i=Pw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new k);const l=new k,c=new Ze,h=new Ze;function d(m){let v=0,g=0,x=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,E=0,A=0,M=0,y=0,z=0,U=0,C=0,J=0,H=0,L=0;m.sort(Bw);for(let N=0,w=m.length;N<w;N++){const F=m[N],rt=F.color,nt=F.intensity,ct=F.distance,ft=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=rt.r*nt,g+=rt.g*nt,x+=rt.b*nt;else if(F.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(F.sh.coefficients[V],nt);L++}else if(F.isDirectionalLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const it=F.shadow,Z=i.get(F);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,s.directionalShadow[S]=Z,s.directionalShadowMap[S]=ft,s.directionalShadowMatrix[S]=F.shadow.matrix,z++}s.directional[S]=V,S++}else if(F.isSpotLight){const V=e.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(rt).multiplyScalar(nt),V.distance=ct,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,s.spot[A]=V;const it=F.shadow;if(F.map&&(s.spotLightMap[J]=F.map,J++,it.updateMatrices(F),F.castShadow&&H++),s.spotLightMatrix[A]=it.matrix,F.castShadow){const Z=i.get(F);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,s.spotShadow[A]=Z,s.spotShadowMap[A]=ft,C++}A++}else if(F.isRectAreaLight){const V=e.get(F);V.color.copy(rt).multiplyScalar(nt),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=V,M++}else if(F.isPointLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){const it=F.shadow,Z=i.get(F);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,Z.shadowCameraNear=it.camera.near,Z.shadowCameraFar=it.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=ft,s.pointShadowMatrix[E]=F.shadow.matrix,U++}s.point[E]=V,E++}else if(F.isHemisphereLight){const V=e.get(F);V.skyColor.copy(F.color).multiplyScalar(nt),V.groundColor.copy(F.groundColor).multiplyScalar(nt),s.hemi[y]=V,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const B=s.hash;(B.directionalLength!==S||B.pointLength!==E||B.spotLength!==A||B.rectAreaLength!==M||B.hemiLength!==y||B.numDirectionalShadows!==z||B.numPointShadows!==U||B.numSpotShadows!==C||B.numSpotMaps!==J||B.numLightProbes!==L)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=M,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+J-H,s.spotLightMap.length=J,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=L,B.directionalLength=S,B.pointLength=E,B.spotLength=A,B.rectAreaLength=M,B.hemiLength=y,B.numDirectionalShadows=z,B.numPointShadows=U,B.numSpotShadows=C,B.numSpotMaps=J,B.numLightProbes=L,s.version=Iw++)}function p(m,v){let g=0,x=0,S=0,E=0,A=0;const M=v.matrixWorldInverse;for(let y=0,z=m.length;y<z;y++){const U=m[y];if(U.isDirectionalLight){const C=s.directional[g];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),g++}else if(U.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const C=s.hemi[A];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(M),A++}}}return{setup:d,setupView:p,state:s}}function Bx(o){const e=new Fw(o),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function p(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function Hw(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Bx(o),e.set(l,[d])):c>=h.length?(d=new Bx(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gw extends yo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=S1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vw extends yo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qw(o,e,i){let s=new gm;const l=new Dt,c=new Dt,h=new Ve,d=new Gw({depthPacking:M1}),p=new Vw,m={},v=i.maxTextureSize,g={[ps]:Kn,[Kn]:ps,[ba]:ba},x=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Xw,fragmentShader:kw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new fi;E.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Mn(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jx;let y=this.type;this.render=function(H,L,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const N=o.getRenderTarget(),w=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(fs),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const nt=y!==Ta&&this.type===Ta,ct=y===Ta&&this.type!==Ta;for(let ft=0,V=H.length;ft<V;ft++){const it=H[ft],Z=it.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const xt=Z.getFrameExtents();if(l.multiply(xt),c.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/xt.x),l.x=c.x*xt.x,Z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/xt.y),l.y=c.y*xt.y,Z.mapSize.y=c.y)),Z.map===null||nt===!0||ct===!0){const zt=this.type!==Ta?{minFilter:Pi,magFilter:Pi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Js(l.x,l.y,zt),Z.map.texture.name=it.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const Tt=Z.getViewportCount();for(let zt=0;zt<Tt;zt++){const se=Z.getViewport(zt);h.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),rt.viewport(h),Z.updateMatrices(it,zt),s=Z.getFrustum(),C(L,B,Z.camera,it,this.type)}Z.isPointLightShadow!==!0&&this.type===Ta&&z(Z,B),Z.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(N,w,F)};function z(H,L){const B=e.update(A);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Js(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(L,null,B,x,A,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(L,null,B,S,A,null)}function U(H,L,B,N){let w=null;const F=B.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)w=F;else if(w=B.isPointLight===!0?p:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const rt=w.uuid,nt=L.uuid;let ct=m[rt];ct===void 0&&(ct={},m[rt]=ct);let ft=ct[nt];ft===void 0&&(ft=w.clone(),ct[nt]=ft,L.addEventListener("dispose",J)),w=ft}if(w.visible=L.visible,w.wireframe=L.wireframe,N===Ta?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:g[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=o.properties.get(w);rt.light=B}return w}function C(H,L,B,N,w){if(H.visible===!1)return;if(H.layers.test(L.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Ta)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,H.matrixWorld);const nt=e.update(H),ct=H.material;if(Array.isArray(ct)){const ft=nt.groups;for(let V=0,it=ft.length;V<it;V++){const Z=ft[V],xt=ct[Z.materialIndex];if(xt&&xt.visible){const Tt=U(H,xt,N,w);H.onBeforeShadow(o,H,L,B,nt,Tt,Z),o.renderBufferDirect(B,null,nt,Tt,H,Z),H.onAfterShadow(o,H,L,B,nt,Tt,Z)}}}else if(ct.visible){const ft=U(H,ct,N,w);H.onBeforeShadow(o,H,L,B,nt,ft,null),o.renderBufferDirect(B,null,nt,ft,H,null),H.onAfterShadow(o,H,L,B,nt,ft,null)}}const rt=H.children;for(let nt=0,ct=rt.length;nt<ct;nt++)C(rt[nt],L,B,N,w)}function J(H){H.target.removeEventListener("dispose",J);for(const B in m){const N=m[B],w=H.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}const Yw={[xp]:yp,[Sp]:Tp,[Mp]:bp,[fo]:Ep,[yp]:xp,[Tp]:Sp,[bp]:Mp,[Ep]:fo};function Ww(o,e){function i(){let X=!1;const Ht=new Ve;let ht=null;const St=new Ve(0,0,0,0);return{setMask:function(Gt){ht!==Gt&&!X&&(o.colorMask(Gt,Gt,Gt,Gt),ht=Gt)},setLocked:function(Gt){X=Gt},setClear:function(Gt,Yt,fe,Qe,gn){gn===!0&&(Gt*=Qe,Yt*=Qe,fe*=Qe),Ht.set(Gt,Yt,fe,Qe),St.equals(Ht)===!1&&(o.clearColor(Gt,Yt,fe,Qe),St.copy(Ht))},reset:function(){X=!1,ht=null,St.set(-1,0,0,0)}}}function s(){let X=!1,Ht=!1,ht=null,St=null,Gt=null;return{setReversed:function(Yt){if(Ht!==Yt){const fe=e.get("EXT_clip_control");Ht?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);const Qe=Gt;Gt=null,this.setClear(Qe)}Ht=Yt},getReversed:function(){return Ht},setTest:function(Yt){Yt?ut(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(Yt){ht!==Yt&&!X&&(o.depthMask(Yt),ht=Yt)},setFunc:function(Yt){if(Ht&&(Yt=Yw[Yt]),St!==Yt){switch(Yt){case xp:o.depthFunc(o.NEVER);break;case yp:o.depthFunc(o.ALWAYS);break;case Sp:o.depthFunc(o.LESS);break;case fo:o.depthFunc(o.LEQUAL);break;case Mp:o.depthFunc(o.EQUAL);break;case Ep:o.depthFunc(o.GEQUAL);break;case Tp:o.depthFunc(o.GREATER);break;case bp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}St=Yt}},setLocked:function(Yt){X=Yt},setClear:function(Yt){Gt!==Yt&&(Ht&&(Yt=1-Yt),o.clearDepth(Yt),Gt=Yt)},reset:function(){X=!1,ht=null,St=null,Gt=null,Ht=!1}}}function l(){let X=!1,Ht=null,ht=null,St=null,Gt=null,Yt=null,fe=null,Qe=null,gn=null;return{setTest:function(be){X||(be?ut(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(be){Ht!==be&&!X&&(o.stencilMask(be),Ht=be)},setFunc:function(be,je,vn){(ht!==be||St!==je||Gt!==vn)&&(o.stencilFunc(be,je,vn),ht=be,St=je,Gt=vn)},setOp:function(be,je,vn){(Yt!==be||fe!==je||Qe!==vn)&&(o.stencilOp(be,je,vn),Yt=be,fe=je,Qe=vn)},setLocked:function(be){X=be},setClear:function(be){gn!==be&&(o.clearStencil(be),gn=be)},reset:function(){X=!1,Ht=null,ht=null,St=null,Gt=null,Yt=null,fe=null,Qe=null,gn=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},x=new WeakMap,S=[],E=null,A=!1,M=null,y=null,z=null,U=null,C=null,J=null,H=null,L=new we(0,0,0),B=0,N=!1,w=null,F=null,rt=null,nt=null,ct=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,it=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=it>=1):Z.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=it>=2);let xt=null,Tt={};const zt=o.getParameter(o.SCISSOR_BOX),se=o.getParameter(o.VIEWPORT),ge=new Ve().fromArray(zt),D=new Ve().fromArray(se);function Y(X,Ht,ht,St){const Gt=new Uint8Array(4),Yt=o.createTexture();o.bindTexture(X,Yt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let fe=0;fe<ht;fe++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ht,0,o.RGBA,1,1,St,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(Ht+fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return Yt}const _t={};_t[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),_t[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),_t[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(o.DEPTH_TEST),h.setFunc(fo),Et(!1),Lt(V_),ut(o.CULL_FACE),I(fs);function ut(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Ct(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function Pt(X,Ht){return g[X]!==Ht?(o.bindFramebuffer(X,Ht),g[X]=Ht,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ht),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ht),!0):!1}function Ot(X,Ht){let ht=S,St=!1;if(X){ht=x.get(Ht),ht===void 0&&(ht=[],x.set(Ht,ht));const Gt=X.textures;if(ht.length!==Gt.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let Yt=0,fe=Gt.length;Yt<fe;Yt++)ht[Yt]=o.COLOR_ATTACHMENT0+Yt;ht.length=Gt.length,St=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,St=!0);St&&o.drawBuffers(ht)}function wt(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const at={[Ys]:o.FUNC_ADD,[ZE]:o.FUNC_SUBTRACT,[QE]:o.FUNC_REVERSE_SUBTRACT};at[KE]=o.MIN,at[JE]=o.MAX;const bt={[$E]:o.ZERO,[t1]:o.ONE,[e1]:o.SRC_COLOR,[vp]:o.SRC_ALPHA,[o1]:o.SRC_ALPHA_SATURATE,[s1]:o.DST_COLOR,[i1]:o.DST_ALPHA,[n1]:o.ONE_MINUS_SRC_COLOR,[_p]:o.ONE_MINUS_SRC_ALPHA,[r1]:o.ONE_MINUS_DST_COLOR,[a1]:o.ONE_MINUS_DST_ALPHA,[l1]:o.CONSTANT_COLOR,[u1]:o.ONE_MINUS_CONSTANT_COLOR,[c1]:o.CONSTANT_ALPHA,[f1]:o.ONE_MINUS_CONSTANT_ALPHA};function I(X,Ht,ht,St,Gt,Yt,fe,Qe,gn,be){if(X===fs){A===!0&&(Ct(o.BLEND),A=!1);return}if(A===!1&&(ut(o.BLEND),A=!0),X!==jE){if(X!==M||be!==N){if((y!==Ys||C!==Ys)&&(o.blendEquation(o.FUNC_ADD),y=Ys,C=Ys),be)switch(X){case lo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case X_:o.blendFunc(o.ONE,o.ONE);break;case k_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case q_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case lo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case X_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case k_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case q_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}z=null,U=null,J=null,H=null,L.set(0,0,0),B=0,M=X,N=be}return}Gt=Gt||Ht,Yt=Yt||ht,fe=fe||St,(Ht!==y||Gt!==C)&&(o.blendEquationSeparate(at[Ht],at[Gt]),y=Ht,C=Gt),(ht!==z||St!==U||Yt!==J||fe!==H)&&(o.blendFuncSeparate(bt[ht],bt[St],bt[Yt],bt[fe]),z=ht,U=St,J=Yt,H=fe),(Qe.equals(L)===!1||gn!==B)&&(o.blendColor(Qe.r,Qe.g,Qe.b,gn),L.copy(Qe),B=gn),M=X,N=!1}function jt(X,Ht){X.side===ba?Ct(o.CULL_FACE):ut(o.CULL_FACE);let ht=X.side===Kn;Ht&&(ht=!ht),Et(ht),X.blending===lo&&X.transparent===!1?I(fs):I(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const St=X.stencilWrite;d.setTest(St),St&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),te(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function Et(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function Lt(X){X!==qE?(ut(o.CULL_FACE),X!==F&&(X===V_?o.cullFace(o.BACK):X===YE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),F=X}function yt(X){X!==rt&&(V&&o.lineWidth(X),rt=X)}function te(X,Ht,ht){X?(ut(o.POLYGON_OFFSET_FILL),(nt!==Ht||ct!==ht)&&(o.polygonOffset(Ht,ht),nt=Ht,ct=ht)):Ct(o.POLYGON_OFFSET_FILL)}function Ft(X){X?ut(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function O(X){X===void 0&&(X=o.TEXTURE0+ft-1),xt!==X&&(o.activeTexture(X),xt=X)}function b(X,Ht,ht){ht===void 0&&(xt===null?ht=o.TEXTURE0+ft-1:ht=xt);let St=Tt[ht];St===void 0&&(St={type:void 0,texture:void 0},Tt[ht]=St),(St.type!==X||St.texture!==Ht)&&(xt!==ht&&(o.activeTexture(ht),xt=ht),o.bindTexture(X,Ht||_t[X]),St.type=X,St.texture=Ht)}function et(){const X=Tt[xt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function dt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Jt(X){ge.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ge.copy(X))}function qt(X){D.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),D.copy(X))}function de(X,Ht){let ht=m.get(Ht);ht===void 0&&(ht=new WeakMap,m.set(Ht,ht));let St=ht.get(X);St===void 0&&(St=o.getUniformBlockIndex(Ht,X.name),ht.set(X,St))}function ce(X,Ht){const St=m.get(Ht).get(X);p.get(Ht)!==St&&(o.uniformBlockBinding(Ht,St,X.__bindingPointIndex),p.set(Ht,St))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},xt=null,Tt={},g={},x=new WeakMap,S=[],E=null,A=!1,M=null,y=null,z=null,U=null,C=null,J=null,H=null,L=new we(0,0,0),B=0,N=!1,w=null,F=null,rt=null,nt=null,ct=null,ge.set(0,0,o.canvas.width,o.canvas.height),D.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ut,disable:Ct,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:wt,setBlending:I,setMaterial:jt,setFlipSided:Et,setCullFace:Lt,setLineWidth:yt,setPolygonOffset:te,setScissorTest:Ft,activeTexture:O,bindTexture:b,unbindTexture:et,compressedTexImage2D:dt,compressedTexImage3D:Mt,texImage2D:Xt,texImage3D:Kt,updateUBOMapping:de,uniformBlockBinding:ce,texStorage2D:oe,texStorage3D:At,texSubImage2D:gt,texSubImage3D:Zt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Ut,scissor:Jt,viewport:qt,reset:Ne}}function Fx(o,e,i,s){const l=jw(s);switch(i){case sy:return o*e;case oy:return o*e;case ly:return o*e*2;case uy:return o*e/l.components*l.byteLength;case fm:return o*e/l.components*l.byteLength;case cy:return o*e*2/l.components*l.byteLength;case hm:return o*e*2/l.components*l.byteLength;case ry:return o*e*3/l.components*l.byteLength;case zi:return o*e*4/l.components*l.byteLength;case dm:return o*e*4/l.components*l.byteLength;case Bc:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dp:case Up:return Math.max(o,16)*Math.max(e,8)/4;case Rp:case Np:return Math.max(o,8)*Math.max(e,8)/2;case Lp:case Op:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ip:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Bp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case kp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case qp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Wp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case jp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Zp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Vc:case Qp:case Kp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case fy:case Jp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case $p:case tm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jw(o){switch(o){case Ra:case ny:return{byteLength:1,components:1};case Nl:case iy:case Pl:return{byteLength:2,components:1};case um:case cm:return{byteLength:2,components:4};case Ks:case lm:case Aa:return{byteLength:4,components:1};case ay:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Zw(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Dt,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return S?new OffscreenCanvas(O,b):Yc("canvas")}function A(O,b,et){let dt=1;const Mt=Ft(O);if((Mt.width>et||Mt.height>et)&&(dt=et/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const gt=Math.floor(dt*Mt.width),Zt=Math.floor(dt*Mt.height);g===void 0&&(g=E(gt,Zt));const Nt=b?E(gt,Zt):g;return Nt.width=gt,Nt.height=Zt,Nt.getContext("2d").drawImage(O,0,0,gt,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+Zt+")."),Nt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),O;return O}function M(O){return O.generateMipmaps}function y(O){o.generateMipmap(O)}function z(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,b,et,dt,Mt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let gt=b;if(b===o.RED&&(et===o.FLOAT&&(gt=o.R32F),et===o.HALF_FLOAT&&(gt=o.R16F),et===o.UNSIGNED_BYTE&&(gt=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.R8UI),et===o.UNSIGNED_SHORT&&(gt=o.R16UI),et===o.UNSIGNED_INT&&(gt=o.R32UI),et===o.BYTE&&(gt=o.R8I),et===o.SHORT&&(gt=o.R16I),et===o.INT&&(gt=o.R32I)),b===o.RG&&(et===o.FLOAT&&(gt=o.RG32F),et===o.HALF_FLOAT&&(gt=o.RG16F),et===o.UNSIGNED_BYTE&&(gt=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RG8UI),et===o.UNSIGNED_SHORT&&(gt=o.RG16UI),et===o.UNSIGNED_INT&&(gt=o.RG32UI),et===o.BYTE&&(gt=o.RG8I),et===o.SHORT&&(gt=o.RG16I),et===o.INT&&(gt=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),et===o.UNSIGNED_INT&&(gt=o.RGB32UI),et===o.BYTE&&(gt=o.RGB8I),et===o.SHORT&&(gt=o.RGB16I),et===o.INT&&(gt=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),et===o.UNSIGNED_INT&&(gt=o.RGBA32UI),et===o.BYTE&&(gt=o.RGBA8I),et===o.SHORT&&(gt=o.RGBA16I),et===o.INT&&(gt=o.RGBA32I)),b===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),b===o.RGBA){const Zt=Mt?tf:De.getTransfer(dt);et===o.FLOAT&&(gt=o.RGBA32F),et===o.HALF_FLOAT&&(gt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(gt=Zt===Ge?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function C(O,b){let et;return O?b===null||b===Ks||b===mo?et=o.DEPTH24_STENCIL8:b===Aa?et=o.DEPTH32F_STENCIL8:b===Nl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ks||b===mo?et=o.DEPTH_COMPONENT24:b===Aa?et=o.DEPTH_COMPONENT32F:b===Nl&&(et=o.DEPTH_COMPONENT16),et}function J(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Pi&&O.minFilter!==Ji?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function H(O){const b=O.target;b.removeEventListener("dispose",H),B(b),b.isVideoTexture&&v.delete(b)}function L(O){const b=O.target;b.removeEventListener("dispose",L),w(b)}function B(O){const b=s.get(O);if(b.__webglInit===void 0)return;const et=O.source,dt=x.get(et);if(dt){const Mt=dt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&N(O),Object.keys(dt).length===0&&x.delete(et)}s.remove(O)}function N(O){const b=s.get(O);o.deleteTexture(b.__webglTexture);const et=O.source,dt=x.get(et);delete dt[b.__cacheKey],h.memory.textures--}function w(O){const b=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let Mt=0;Mt<b.__webglFramebuffer[dt].length;Mt++)o.deleteFramebuffer(b.__webglFramebuffer[dt][Mt]);else o.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)o.deleteFramebuffer(b.__webglFramebuffer[dt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=O.textures;for(let dt=0,Mt=et.length;dt<Mt;dt++){const gt=s.get(et[dt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),h.memory.textures--),s.remove(et[dt])}s.remove(O)}let F=0;function rt(){F=0}function nt(){const O=F;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),F+=1,O}function ct(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function ft(O,b){const et=s.get(O);if(O.isVideoTexture&&yt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const dt=O.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(et,O,b);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function V(O,b){const et=s.get(O);if(O.version>0&&et.__version!==O.version){D(et,O,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function it(O,b){const et=s.get(O);if(O.version>0&&et.__version!==O.version){D(et,O,b);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function Z(O,b){const et=s.get(O);if(O.version>0&&et.__version!==O.version){Y(et,O,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const xt={[Dl]:o.REPEAT,[js]:o.CLAMP_TO_EDGE,[Cp]:o.MIRRORED_REPEAT},Tt={[Pi]:o.NEAREST,[y1]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Ji]:o.LINEAR,[Pd]:o.LINEAR_MIPMAP_NEAREST,[Zs]:o.LINEAR_MIPMAP_LINEAR},zt={[T1]:o.NEVER,[D1]:o.ALWAYS,[b1]:o.LESS,[dy]:o.LEQUAL,[A1]:o.EQUAL,[R1]:o.GEQUAL,[w1]:o.GREATER,[C1]:o.NOTEQUAL};function se(O,b){if(b.type===Aa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ji||b.magFilter===Pd||b.magFilter===cc||b.magFilter===Zs||b.minFilter===Ji||b.minFilter===Pd||b.minFilter===cc||b.minFilter===Zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,xt[b.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,xt[b.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,xt[b.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Tt[b.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Tt[b.minFilter]),b.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,zt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pi||b.minFilter!==cc&&b.minFilter!==Zs||b.type===Aa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ge(O,b){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",H));const dt=b.source;let Mt=x.get(dt);Mt===void 0&&(Mt={},x.set(dt,Mt));const gt=ct(b);if(gt!==O.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Mt[gt].usedTimes++;const Zt=Mt[O.__cacheKey];Zt!==void 0&&(Mt[O.__cacheKey].usedTimes--,Zt.usedTimes===0&&N(b)),O.__cacheKey=gt,O.__webglTexture=Mt[gt].texture}return et}function D(O,b,et){let dt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=o.TEXTURE_3D);const Mt=ge(O,b),gt=b.source;i.bindTexture(dt,O.__webglTexture,o.TEXTURE0+et);const Zt=s.get(gt);if(gt.version!==Zt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+et);const Nt=De.getPrimaries(De.workingColorSpace),Ut=b.colorSpace===cs?null:De.getPrimaries(b.colorSpace),oe=b.colorSpace===cs||Nt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let At=A(b.image,!1,l.maxTextureSize);At=te(b,At);const Xt=c.convert(b.format,b.colorSpace),Kt=c.convert(b.type);let Jt=U(b.internalFormat,Xt,Kt,b.colorSpace,b.isVideoTexture);se(dt,b);let qt;const de=b.mipmaps,ce=b.isVideoTexture!==!0,Ne=Zt.__version===void 0||Mt===!0,X=gt.dataReady,Ht=J(b,At);if(b.isDepthTexture)Jt=C(b.format===go,b.type),Ne&&(ce?i.texStorage2D(o.TEXTURE_2D,1,Jt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Jt,At.width,At.height,0,Xt,Kt,null));else if(b.isDataTexture)if(de.length>0){ce&&Ne&&i.texStorage2D(o.TEXTURE_2D,Ht,Jt,de[0].width,de[0].height);for(let ht=0,St=de.length;ht<St;ht++)qt=de[ht],ce?X&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,qt.width,qt.height,Xt,Kt,qt.data):i.texImage2D(o.TEXTURE_2D,ht,Jt,qt.width,qt.height,0,Xt,Kt,qt.data);b.generateMipmaps=!1}else ce?(Ne&&i.texStorage2D(o.TEXTURE_2D,Ht,Jt,At.width,At.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Xt,Kt,At.data)):i.texImage2D(o.TEXTURE_2D,0,Jt,At.width,At.height,0,Xt,Kt,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,Jt,de[0].width,de[0].height,At.depth);for(let ht=0,St=de.length;ht<St;ht++)if(qt=de[ht],b.format!==zi)if(Xt!==null)if(ce){if(X)if(b.layerUpdates.size>0){const Gt=Fx(qt.width,qt.height,b.format,b.type);for(const Yt of b.layerUpdates){const fe=qt.data.subarray(Yt*Gt/qt.data.BYTES_PER_ELEMENT,(Yt+1)*Gt/qt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,Yt,qt.width,qt.height,1,Xt,fe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,qt.width,qt.height,At.depth,Xt,qt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ht,Jt,qt.width,qt.height,At.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,qt.width,qt.height,At.depth,Xt,Kt,qt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ht,Jt,qt.width,qt.height,At.depth,0,Xt,Kt,qt.data)}else{ce&&Ne&&i.texStorage2D(o.TEXTURE_2D,Ht,Jt,de[0].width,de[0].height);for(let ht=0,St=de.length;ht<St;ht++)qt=de[ht],b.format!==zi?Xt!==null?ce?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,ht,0,0,qt.width,qt.height,Xt,qt.data):i.compressedTexImage2D(o.TEXTURE_2D,ht,Jt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?X&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,qt.width,qt.height,Xt,Kt,qt.data):i.texImage2D(o.TEXTURE_2D,ht,Jt,qt.width,qt.height,0,Xt,Kt,qt.data)}else if(b.isDataArrayTexture)if(ce){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,Jt,At.width,At.height,At.depth),X)if(b.layerUpdates.size>0){const ht=Fx(At.width,At.height,b.format,b.type);for(const St of b.layerUpdates){const Gt=At.data.subarray(St*ht/At.data.BYTES_PER_ELEMENT,(St+1)*ht/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,At.width,At.height,1,Xt,Kt,Gt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Xt,Kt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Jt,At.width,At.height,At.depth,0,Xt,Kt,At.data);else if(b.isData3DTexture)ce?(Ne&&i.texStorage3D(o.TEXTURE_3D,Ht,Jt,At.width,At.height,At.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Xt,Kt,At.data)):i.texImage3D(o.TEXTURE_3D,0,Jt,At.width,At.height,At.depth,0,Xt,Kt,At.data);else if(b.isFramebufferTexture){if(Ne)if(ce)i.texStorage2D(o.TEXTURE_2D,Ht,Jt,At.width,At.height);else{let ht=At.width,St=At.height;for(let Gt=0;Gt<Ht;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Jt,ht,St,0,Xt,Kt,null),ht>>=1,St>>=1}}else if(de.length>0){if(ce&&Ne){const ht=Ft(de[0]);i.texStorage2D(o.TEXTURE_2D,Ht,Jt,ht.width,ht.height)}for(let ht=0,St=de.length;ht<St;ht++)qt=de[ht],ce?X&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Xt,Kt,qt):i.texImage2D(o.TEXTURE_2D,ht,Jt,Xt,Kt,qt);b.generateMipmaps=!1}else if(ce){if(Ne){const ht=Ft(At);i.texStorage2D(o.TEXTURE_2D,Ht,Jt,ht.width,ht.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Xt,Kt,At)}else i.texImage2D(o.TEXTURE_2D,0,Jt,Xt,Kt,At);M(b)&&y(dt),Zt.__version=gt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Y(O,b,et){if(b.image.length!==6)return;const dt=ge(O,b),Mt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+et);const gt=s.get(Mt);if(Mt.version!==gt.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Zt=De.getPrimaries(De.workingColorSpace),Nt=b.colorSpace===cs?null:De.getPrimaries(b.colorSpace),Ut=b.colorSpace===cs||Zt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Xt=[];for(let St=0;St<6;St++)!oe&&!At?Xt[St]=A(b.image[St],!0,l.maxCubemapSize):Xt[St]=At?b.image[St].image:b.image[St],Xt[St]=te(b,Xt[St]);const Kt=Xt[0],Jt=c.convert(b.format,b.colorSpace),qt=c.convert(b.type),de=U(b.internalFormat,Jt,qt,b.colorSpace),ce=b.isVideoTexture!==!0,Ne=gt.__version===void 0||dt===!0,X=Mt.dataReady;let Ht=J(b,Kt);se(o.TEXTURE_CUBE_MAP,b);let ht;if(oe){ce&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,de,Kt.width,Kt.height);for(let St=0;St<6;St++){ht=Xt[St].mipmaps;for(let Gt=0;Gt<ht.length;Gt++){const Yt=ht[Gt];b.format!==zi?Jt!==null?ce?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,0,0,Yt.width,Yt.height,Jt,Yt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,de,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,0,0,Yt.width,Yt.height,Jt,qt,Yt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,de,Yt.width,Yt.height,0,Jt,qt,Yt.data)}}}else{if(ht=b.mipmaps,ce&&Ne){ht.length>0&&Ht++;const St=Ft(Xt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,de,St.width,St.height)}for(let St=0;St<6;St++)if(At){ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Xt[St].width,Xt[St].height,Jt,qt,Xt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,de,Xt[St].width,Xt[St].height,0,Jt,qt,Xt[St].data);for(let Gt=0;Gt<ht.length;Gt++){const fe=ht[Gt].image[St].image;ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,0,0,fe.width,fe.height,Jt,qt,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,de,fe.width,fe.height,0,Jt,qt,fe.data)}}else{ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Jt,qt,Xt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,de,Jt,qt,Xt[St]);for(let Gt=0;Gt<ht.length;Gt++){const Yt=ht[Gt];ce?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,0,0,Jt,qt,Yt.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,de,Jt,qt,Yt.image[St])}}}M(b)&&y(o.TEXTURE_CUBE_MAP),gt.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function _t(O,b,et,dt,Mt,gt){const Zt=c.convert(et.format,et.colorSpace),Nt=c.convert(et.type),Ut=U(et.internalFormat,Zt,Nt,et.colorSpace),oe=s.get(b),At=s.get(et);if(At.__renderTarget=b,!oe.__hasExternalTextures){const Xt=Math.max(1,b.width>>gt),Kt=Math.max(1,b.height>>gt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,gt,Ut,Xt,Kt,b.depth,0,Zt,Nt,null):i.texImage2D(Mt,gt,Ut,Xt,Kt,0,Zt,Nt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Lt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Mt,At.__webglTexture,0,Et(b)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Mt,At.__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(O,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,O),b.depthBuffer){const dt=b.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,gt=C(b.stencilBuffer,Mt),Zt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=Et(b);Lt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,gt,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,gt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,gt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,O)}else{const dt=b.textures;for(let Mt=0;Mt<dt.length;Mt++){const gt=dt[Mt],Zt=c.convert(gt.format,gt.colorSpace),Nt=c.convert(gt.type),Ut=U(gt.internalFormat,Zt,Nt,gt.colorSpace),oe=Et(b);et&&Lt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,oe,Ut,b.width,b.height):Lt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,oe,Ut,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ut,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ct(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const Mt=dt.__webglTexture,gt=Et(b);if(b.depthTexture.format===uo)Lt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(b.depthTexture.format===go)Lt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Pt(O){const b=s.get(O),et=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const dt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=dt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,O)}else if(et){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=o.createRenderbuffer(),ut(b.__webglDepthbuffer[dt],O,!1);else{const Mt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,gt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),ut(b.__webglDepthbuffer,O,!1);else{const dt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(O,b,et){const dt=s.get(O);b!==void 0&&_t(dt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Pt(O)}function wt(O){const b=O.texture,et=s.get(O),dt=s.get(b);O.addEventListener("dispose",L);const Mt=O.textures,gt=O.isWebGLCubeRenderTarget===!0,Zt=Mt.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=b.version,h.memory.textures++),gt){et.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Nt]=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)et.__webglFramebuffer[Nt][Ut]=o.createFramebuffer()}else et.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)et.__webglFramebuffer[Nt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Nt=0,Ut=Mt.length;Nt<Ut;Nt++){const oe=s.get(Mt[Nt]);oe.__webglTexture===void 0&&(oe.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Lt(O)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Nt=0;Nt<Mt.length;Nt++){const Ut=Mt[Nt];et.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Nt]);const oe=c.convert(Ut.format,Ut.colorSpace),At=c.convert(Ut.type),Xt=U(Ut.internalFormat,oe,At,Ut.colorSpace,O.isXRRenderTarget===!0),Kt=Et(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Xt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),ut(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),se(o.TEXTURE_CUBE_MAP,b);for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ut=0;Ut<b.mipmaps.length;Ut++)_t(et.__webglFramebuffer[Nt][Ut],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ut);else _t(et.__webglFramebuffer[Nt],O,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);M(b)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Nt=0,Ut=Mt.length;Nt<Ut;Nt++){const oe=Mt[Nt],At=s.get(oe);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),se(o.TEXTURE_2D,oe),_t(et.__webglFramebuffer,O,oe,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,0),M(oe)&&y(o.TEXTURE_2D)}i.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Nt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,dt.__webglTexture),se(Nt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ut=0;Ut<b.mipmaps.length;Ut++)_t(et.__webglFramebuffer[Ut],O,b,o.COLOR_ATTACHMENT0,Nt,Ut);else _t(et.__webglFramebuffer,O,b,o.COLOR_ATTACHMENT0,Nt,0);M(b)&&y(Nt),i.unbindTexture()}O.depthBuffer&&Pt(O)}function at(O){const b=O.textures;for(let et=0,dt=b.length;et<dt;et++){const Mt=b[et];if(M(Mt)){const gt=z(O),Zt=s.get(Mt).__webglTexture;i.bindTexture(gt,Zt),y(gt),i.unbindTexture()}}}const bt=[],I=[];function jt(O){if(O.samples>0){if(Lt(O)===!1){const b=O.textures,et=O.width,dt=O.height;let Mt=o.COLOR_BUFFER_BIT;const gt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(O),Nt=b.length>1;if(Nt)for(let Ut=0;Ut<b.length;Ut++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Ut=0;Ut<b.length;Ut++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Ut]);const oe=s.get(b[Ut]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,oe,0)}o.blitFramebuffer(0,0,et,dt,0,0,et,dt,Mt,o.NEAREST),p===!0&&(bt.length=0,I.length=0,bt.push(o.COLOR_ATTACHMENT0+Ut),O.depthBuffer&&O.resolveDepthBuffer===!1&&(bt.push(gt),I.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,bt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let Ut=0;Ut<b.length;Ut++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Ut]);const oe=s.get(b[Ut]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,oe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const b=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Et(O){return Math.min(l.maxSamples,O.samples)}function Lt(O){const b=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function yt(O){const b=h.render.frame;v.get(O)!==b&&(v.set(O,b),O.update())}function te(O,b){const et=O.colorSpace,dt=O.format,Mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==_o&&et!==cs&&(De.getTransfer(et)===Ge?(dt!==zi||Mt!==Ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Ft(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=nt,this.resetTextureUnits=rt,this.setTexture2D=ft,this.setTexture2DArray=V,this.setTexture3D=it,this.setTextureCube=Z,this.rebindTextures=Ot,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Lt}function Qw(o,e){function i(s,l=cs){let c;const h=De.getTransfer(l);if(s===Ra)return o.UNSIGNED_BYTE;if(s===um)return o.UNSIGNED_SHORT_4_4_4_4;if(s===cm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ay)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ny)return o.BYTE;if(s===iy)return o.SHORT;if(s===Nl)return o.UNSIGNED_SHORT;if(s===lm)return o.INT;if(s===Ks)return o.UNSIGNED_INT;if(s===Aa)return o.FLOAT;if(s===Pl)return o.HALF_FLOAT;if(s===sy)return o.ALPHA;if(s===ry)return o.RGB;if(s===zi)return o.RGBA;if(s===oy)return o.LUMINANCE;if(s===ly)return o.LUMINANCE_ALPHA;if(s===uo)return o.DEPTH_COMPONENT;if(s===go)return o.DEPTH_STENCIL;if(s===uy)return o.RED;if(s===fm)return o.RED_INTEGER;if(s===cy)return o.RG;if(s===hm)return o.RG_INTEGER;if(s===dm)return o.RGBA_INTEGER;if(s===Bc||s===Fc||s===Hc||s===Gc)if(h===Ge)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rp||s===Dp||s===Np||s===Up)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Rp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Up)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lp||s===Op||s===zp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Lp||s===Op)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===zp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pp||s===Ip||s===Bp||s===Fp||s===Hp||s===Gp||s===Vp||s===Xp||s===kp||s===qp||s===Yp||s===Wp||s===jp||s===Zp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Pp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ip)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vc||s===Qp||s===Kp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Vc)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fy||s===Jp||s===$p||s===tm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Vc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Jp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$p)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===mo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class Kw extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qs extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jw={type:"move"};class cp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,s),y=this._getHandJoint(m,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Jw)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Qs;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const $w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new kn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ms({vertexShader:$w,fragmentShader:tC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mn(new Hl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nC extends xo{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,v=null,g=null,x=null,S=null,E=null;const A=new eC,M=i.getContextAttributes();let y=null,z=null;const U=[],C=[],J=new Dt;let H=null;const L=new ci;L.viewport=new Ve;const B=new ci;B.viewport=new Ve;const N=[L,B],w=new Kw;let F=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let Y=U[D];return Y===void 0&&(Y=new cp,U[D]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(D){let Y=U[D];return Y===void 0&&(Y=new cp,U[D]=Y),Y.getGripSpace()},this.getHand=function(D){let Y=U[D];return Y===void 0&&(Y=new cp,U[D]=Y),Y.getHandSpace()};function nt(D){const Y=C.indexOf(D.inputSource);if(Y===-1)return;const _t=U[Y];_t!==void 0&&(_t.update(D.inputSource,D.frame,m||h),_t.dispatchEvent({type:D.type,data:D.inputSource}))}function ct(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",ft);for(let D=0;D<U.length;D++){const Y=C[D];Y!==null&&(C[D]=null,U[D].disconnect(Y))}F=null,rt=null,A.reset(),e.setRenderTarget(y),S=null,x=null,g=null,l=null,z=null,ge.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(J.width,J.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){c=D,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){d=D,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(D){m=D},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(D){if(l=D,l!==null){if(y=e.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(J),l.renderState.layers===void 0){const Y={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Y),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),z=new Js(S.framebufferWidth,S.framebufferHeight,{format:zi,type:Ra,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let Y=null,_t=null,ut=null;M.depth&&(ut=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Y=M.stencil?go:uo,_t=M.stencil?mo:Ks);const Ct={colorFormat:i.RGBA8,depthFormat:ut,scaleFactor:c};g=new XRWebGLBinding(l,i),x=g.createProjectionLayer(Ct),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),z=new Js(x.textureWidth,x.textureHeight,{format:zi,type:Ra,depthTexture:new Ay(x.textureWidth,x.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),ge.setContext(l),ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ft(D){for(let Y=0;Y<D.removed.length;Y++){const _t=D.removed[Y],ut=C.indexOf(_t);ut>=0&&(C[ut]=null,U[ut].disconnect(_t))}for(let Y=0;Y<D.added.length;Y++){const _t=D.added[Y];let ut=C.indexOf(_t);if(ut===-1){for(let Pt=0;Pt<U.length;Pt++)if(Pt>=C.length){C.push(_t),ut=Pt;break}else if(C[Pt]===null){C[Pt]=_t,ut=Pt;break}if(ut===-1)break}const Ct=U[ut];Ct&&Ct.connect(_t)}}const V=new k,it=new k;function Z(D,Y,_t){V.setFromMatrixPosition(Y.matrixWorld),it.setFromMatrixPosition(_t.matrixWorld);const ut=V.distanceTo(it),Ct=Y.projectionMatrix.elements,Pt=_t.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),wt=Ct[14]/(Ct[10]+1),at=(Ct[9]+1)/Ct[5],bt=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],jt=(Pt[8]+1)/Pt[0],Et=Ot*I,Lt=Ot*jt,yt=ut/(-I+jt),te=yt*-I;if(Y.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(te),D.translateZ(yt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Ct[10]===-1)D.projectionMatrix.copy(Y.projectionMatrix),D.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Ft=Ot+yt,O=wt+yt,b=Et-te,et=Lt+(ut-te),dt=at*wt/O*Ft,Mt=bt*wt/O*Ft;D.projectionMatrix.makePerspective(b,et,dt,Mt,Ft,O),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function xt(D,Y){Y===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(Y.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(l===null)return;let Y=D.near,_t=D.far;A.texture!==null&&(A.depthNear>0&&(Y=A.depthNear),A.depthFar>0&&(_t=A.depthFar)),w.near=B.near=L.near=Y,w.far=B.far=L.far=_t,(F!==w.near||rt!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,rt=w.far),L.layers.mask=D.layers.mask|2,B.layers.mask=D.layers.mask|4,w.layers.mask=L.layers.mask|B.layers.mask;const ut=D.parent,Ct=w.cameras;xt(w,ut);for(let Pt=0;Pt<Ct.length;Pt++)xt(Ct[Pt],ut);Ct.length===2?Z(w,L,B):w.projectionMatrix.copy(L.projectionMatrix),Tt(D,w,ut)};function Tt(D,Y,_t){_t===null?D.matrix.copy(Y.matrixWorld):(D.matrix.copy(_t.matrixWorld),D.matrix.invert(),D.matrix.multiply(Y.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(Y.projectionMatrix),D.projectionMatrixInverse.copy(Y.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Ul*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(D){p=D,x!==null&&(x.fixedFoveation=D),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=D)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let zt=null;function se(D,Y){if(v=Y.getViewerPose(m||h),E=Y,v!==null){const _t=v.views;S!==null&&(e.setRenderTargetFramebuffer(z,S.framebuffer),e.setRenderTarget(z));let ut=!1;_t.length!==w.cameras.length&&(w.cameras.length=0,ut=!0);for(let Pt=0;Pt<_t.length;Pt++){const Ot=_t[Pt];let wt=null;if(S!==null)wt=S.getViewport(Ot);else{const bt=g.getViewSubImage(x,Ot);wt=bt.viewport,Pt===0&&(e.setRenderTargetTextures(z,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(z))}let at=N[Pt];at===void 0&&(at=new ci,at.layers.enable(Pt),at.viewport=new Ve,N[Pt]=at),at.matrix.fromArray(Ot.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ot.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(wt.x,wt.y,wt.width,wt.height),Pt===0&&(w.matrix.copy(at.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ut===!0&&w.cameras.push(at)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Pt=g.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&A.init(e,Pt,l.renderState)}}for(let _t=0;_t<U.length;_t++){const ut=C[_t],Ct=U[_t];ut!==null&&Ct!==void 0&&Ct.update(ut,Y,m||h)}zt&&zt(D,Y),Y.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Y}),E=null}const ge=new Ty;ge.setAnimationLoop(se),this.setAnimationLoop=function(D){zt=D},this.dispose=function(){}}}const Xs=new ta,iC=new Ze;function aC(o,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,Sy(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,z,U,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),g(M,y)):y.isMeshPhongMaterial?(c(M,y),v(M,y)):y.isMeshStandardMaterial?(c(M,y),x(M,y),y.isMeshPhysicalMaterial&&S(M,y,C)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),A(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,z,U):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const z=e.get(y),U=z.envMap,C=z.envMapRotation;U&&(M.envMap.value=U,Xs.copy(C),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),M.envMapRotation.value.setFromMatrix4(iC.makeRotationFromEuler(Xs)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,z,U){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*z,M.scale.value=U*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,z){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const z=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function sC(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,U){const C=U.program;s.uniformBlockBinding(z,C)}function m(z,U){let C=l[z.id];C===void 0&&(E(z),C=v(z),l[z.id]=C,z.addEventListener("dispose",M));const J=U.program;s.updateUBOMapping(z,J);const H=e.render.frame;c[z.id]!==H&&(x(z),c[z.id]=H)}function v(z){const U=g();z.__bindingPointIndex=U;const C=o.createBuffer(),J=z.__size,H=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,J,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,C),C}function g(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const U=l[z.id],C=z.uniforms,J=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let H=0,L=C.length;H<L;H++){const B=Array.isArray(C[H])?C[H]:[C[H]];for(let N=0,w=B.length;N<w;N++){const F=B[N];if(S(F,H,N,J)===!0){const rt=F.__offset,nt=Array.isArray(F.value)?F.value:[F.value];let ct=0;for(let ft=0;ft<nt.length;ft++){const V=nt[ft],it=A(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,rt+ct,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,ct),ct+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(z,U,C,J){const H=z.value,L=U+"_"+C;if(J[L]===void 0)return typeof H=="number"||typeof H=="boolean"?J[L]=H:J[L]=H.clone(),!0;{const B=J[L];if(typeof H=="number"||typeof H=="boolean"){if(B!==H)return J[L]=H,!0}else if(B.equals(H)===!1)return B.copy(H),!0}return!1}function E(z){const U=z.uniforms;let C=0;const J=16;for(let L=0,B=U.length;L<B;L++){const N=Array.isArray(U[L])?U[L]:[U[L]];for(let w=0,F=N.length;w<F;w++){const rt=N[w],nt=Array.isArray(rt.value)?rt.value:[rt.value];for(let ct=0,ft=nt.length;ct<ft;ct++){const V=nt[ct],it=A(V),Z=C%J,xt=Z%it.boundary,Tt=Z+xt;C+=xt,Tt!==0&&J-Tt<it.storage&&(C+=J-Tt),rt.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=C,C+=it.storage}}}const H=C%J;return H>0&&(C+=J-H),z.__size=C,z.__cache={},this}function A(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),U}function M(z){const U=z.target;U.removeEventListener("dispose",M);const C=h.indexOf(U.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function y(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:p,update:m,dispose:y}}class rC{constructor(e={}){const{canvas:i=W1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,y=null;const z=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ei,this.toneMapping=hs,this.toneMappingExposure=1;const C=this;let J=!1,H=0,L=0,B=null,N=-1,w=null;const F=new Ve,rt=new Ve;let nt=null;const ct=new we(0);let ft=0,V=i.width,it=i.height,Z=1,xt=null,Tt=null;const zt=new Ve(0,0,V,it),se=new Ve(0,0,V,it);let ge=!1;const D=new gm;let Y=!1,_t=!1;const ut=new Ze,Ct=new Ze,Pt=new k,Ot=new Ve,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function bt(){return B===null?Z:1}let I=s;function jt(R,Q){return i.getContext(R,Q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${om}`),i.addEventListener("webglcontextlost",St,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",Yt,!1),I===null){const Q="webgl2";if(I=jt(Q,R),I===null)throw jt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Et,Lt,yt,te,Ft,O,b,et,dt,Mt,gt,Zt,Nt,Ut,oe,At,Xt,Kt,Jt,qt,de,ce,Ne,X;function Ht(){Et=new f2(I),Et.init(),ce=new Qw(I,Et),Lt=new s2(I,Et,e,ce),yt=new Ww(I,Et),Lt.reverseDepthBuffer&&x&&yt.buffers.depth.setReversed(!0),te=new p2(I),Ft=new Uw,O=new Zw(I,Et,yt,Ft,Lt,ce,te),b=new o2(C),et=new c2(C),dt=new ST(I),Ne=new i2(I,dt),Mt=new h2(I,dt,te,Ne),gt=new g2(I,Mt,dt,te),Jt=new m2(I,Lt,O),At=new r2(Ft),Zt=new Nw(C,b,et,Et,Lt,Ne,At),Nt=new aC(C,Ft),Ut=new Ow,oe=new Hw(Et),Kt=new n2(C,b,et,yt,gt,S,p),Xt=new qw(C,gt,Lt),X=new sC(I,te,Lt,yt),qt=new a2(I,Et,te),de=new d2(I,Et,te),te.programs=Zt.programs,C.capabilities=Lt,C.extensions=Et,C.properties=Ft,C.renderLists=Ut,C.shadowMap=Xt,C.state=yt,C.info=te}Ht();const ht=new nC(C,I);this.xr=ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(V,it,!1))},this.getSize=function(R){return R.set(V,it)},this.setSize=function(R,Q,ot=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,it=Q,i.width=Math.floor(R*Z),i.height=Math.floor(Q*Z),ot===!0&&(i.style.width=R+"px",i.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(V*Z,it*Z).floor()},this.setDrawingBufferSize=function(R,Q,ot){V=R,it=Q,Z=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Q*ot),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(zt)},this.setViewport=function(R,Q,ot,lt){R.isVector4?zt.set(R.x,R.y,R.z,R.w):zt.set(R,Q,ot,lt),yt.viewport(F.copy(zt).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,Q,ot,lt){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,Q,ot,lt),yt.scissor(rt.copy(se).multiplyScalar(Z).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){yt.setScissorTest(ge=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){Tt=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(R=!0,Q=!0,ot=!0){let lt=0;if(R){let K=!1;if(B!==null){const Rt=B.texture.format;K=Rt===dm||Rt===hm||Rt===fm}if(K){const Rt=B.texture.type,Vt=Rt===Ra||Rt===Ks||Rt===Nl||Rt===mo||Rt===um||Rt===cm,ee=Kt.getClearColor(),ne=Kt.getClearAlpha(),re=ee.r,ie=ee.g,kt=ee.b;Vt?(E[0]=re,E[1]=ie,E[2]=kt,E[3]=ne,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=re,A[1]=ie,A[2]=kt,A[3]=ne,I.clearBufferiv(I.COLOR,0,A))}else lt|=I.COLOR_BUFFER_BIT}Q&&(lt|=I.DEPTH_BUFFER_BIT),ot&&(lt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",St,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",Yt,!1),Ut.dispose(),oe.dispose(),Ft.dispose(),b.dispose(),et.dispose(),gt.dispose(),Ne.dispose(),X.dispose(),Zt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Dn),ht.removeEventListener("sessionend",Gl),na.stop()};function St(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),J=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),J=!1;const R=te.autoReset,Q=Xt.enabled,ot=Xt.autoUpdate,lt=Xt.needsUpdate,K=Xt.type;Ht(),te.autoReset=R,Xt.enabled=Q,Xt.autoUpdate=ot,Xt.needsUpdate=lt,Xt.type=K}function Yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function fe(R){const Q=R.target;Q.removeEventListener("dispose",fe),Qe(Q)}function Qe(R){gn(R),Ft.remove(R)}function gn(R){const Q=Ft.get(R).programs;Q!==void 0&&(Q.forEach(function(ot){Zt.releaseProgram(ot)}),R.isShaderMaterial&&Zt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ot,lt,K,Rt){Q===null&&(Q=wt);const Vt=K.isMesh&&K.matrixWorld.determinant()<0,ee=af(R,Q,ot,lt,K);yt.setMaterial(lt,Vt);let ne=ot.index,re=1;if(lt.wireframe===!0){if(ne=Mt.getWireframeAttribute(ot),ne===void 0)return;re=2}const ie=ot.drawRange,kt=ot.attributes.position;let xe=ie.start*re,ze=(ie.start+ie.count)*re;Rt!==null&&(xe=Math.max(xe,Rt.start*re),ze=Math.min(ze,(Rt.start+Rt.count)*re)),ne!==null?(xe=Math.max(xe,0),ze=Math.min(ze,ne.count)):kt!=null&&(xe=Math.max(xe,0),ze=Math.min(ze,kt.count));const Xe=ze-xe;if(Xe<0||Xe===1/0)return;Ne.setup(K,lt,ee,ot,ne);let Nn,Re=qt;if(ne!==null&&(Nn=dt.get(ne),Re=de,Re.setIndex(Nn)),K.isMesh)lt.wireframe===!0?(yt.setLineWidth(lt.wireframeLinewidth*bt()),Re.setMode(I.LINES)):Re.setMode(I.TRIANGLES);else if(K.isLine){let $t=lt.linewidth;$t===void 0&&($t=1),yt.setLineWidth($t*bt()),K.isLineSegments?Re.setMode(I.LINES):K.isLineLoop?Re.setMode(I.LINE_LOOP):Re.setMode(I.LINE_STRIP)}else K.isPoints?Re.setMode(I.POINTS):K.isSprite&&Re.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Re.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Re.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $t=K._multiDrawStarts,qn=K._multiDrawCounts,Ae=K._multiDrawCount,cn=ne?dt.get(ne).bytesPerElement:1,Jn=Ft.get(lt).currentProgram.getUniforms();for(let fn=0;fn<Ae;fn++)Jn.setValue(I,"_gl_DrawID",fn),Re.render($t[fn]/cn,qn[fn])}else if(K.isInstancedMesh)Re.renderInstances(xe,Xe,K.count);else if(ot.isInstancedBufferGeometry){const $t=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,qn=Math.min(ot.instanceCount,$t);Re.renderInstances(xe,Xe,qn)}else Re.render(xe,Xe)};function be(R,Q,ot){R.transparent===!0&&R.side===ba&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,aa(R,Q,ot),R.side=ps,R.needsUpdate=!0,aa(R,Q,ot),R.side=ba):aa(R,Q,ot)}this.compile=function(R,Q,ot=null){ot===null&&(ot=R),y=oe.get(ot),y.init(Q),U.push(y),ot.traverseVisible(function(K){K.isLight&&K.layers.test(Q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),R!==ot&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Q.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const lt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Rt=K.material;if(Rt)if(Array.isArray(Rt))for(let Vt=0;Vt<Rt.length;Vt++){const ee=Rt[Vt];be(ee,ot,K),lt.add(ee)}else be(Rt,ot,K),lt.add(Rt)}),U.pop(),y=null,lt},this.compileAsync=function(R,Q,ot=null){const lt=this.compile(R,Q,ot);return new Promise(K=>{function Rt(){if(lt.forEach(function(Vt){Ft.get(Vt).currentProgram.isReady()&&lt.delete(Vt)}),lt.size===0){K(R);return}setTimeout(Rt,10)}Et.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let je=null;function vn(R){je&&je(R)}function Dn(){na.stop()}function Gl(){na.start()}const na=new Ty;na.setAnimationLoop(vn),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(R){je=R,ht.setAnimationLoop(R),R===null?na.stop():na.start()},ht.addEventListener("sessionstart",Dn),ht.addEventListener("sessionend",Gl),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(Q),Q=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Q,B),y=oe.get(R,U.length),y.init(Q),U.push(y),Ct.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),D.setFromProjectionMatrix(Ct),_t=this.localClippingEnabled,Y=At.init(this.clippingPlanes,_t),M=Ut.get(R,z.length),M.init(),z.push(M),ht.enabled===!0&&ht.isPresenting===!0){const Rt=C.xr.getDepthSensingMesh();Rt!==null&&Mo(Rt,Q,-1/0,C.sortObjects)}Mo(R,Q,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(xt,Tt),at=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,at&&Kt.addToRenderList(M,R),this.info.render.frame++,Y===!0&&At.beginShadows();const ot=y.state.shadowsArray;Xt.render(ot,R,Q),Y===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=M.opaque,K=M.transmissive;if(y.setupLights(),Q.isArrayCamera){const Rt=Q.cameras;if(K.length>0)for(let Vt=0,ee=Rt.length;Vt<ee;Vt++){const ne=Rt[Vt];vs(lt,K,R,ne)}at&&Kt.render(R);for(let Vt=0,ee=Rt.length;Vt<ee;Vt++){const ne=Rt[Vt];gs(M,R,ne,ne.viewport)}}else K.length>0&&vs(lt,K,R,Q),at&&Kt.render(R),gs(M,R,Q);B!==null&&(O.updateMultisampleRenderTarget(B),O.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(C,R,Q),Ne.resetDefaultState(),N=-1,w=null,U.pop(),U.length>0?(y=U[U.length-1],Y===!0&&At.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Mo(R,Q,ot,lt){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||D.intersectsSprite(R)){lt&&Ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const Vt=gt.update(R),ee=R.material;ee.visible&&M.push(R,Vt,ee,ot,Ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||D.intersectsObject(R))){const Vt=gt.update(R),ee=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ot.copy(R.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Ot.copy(Vt.boundingSphere.center)),Ot.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(ee)){const ne=Vt.groups;for(let re=0,ie=ne.length;re<ie;re++){const kt=ne[re],xe=ee[kt.materialIndex];xe&&xe.visible&&M.push(R,Vt,xe,ot,Ot.z,kt)}}else ee.visible&&M.push(R,Vt,ee,ot,Ot.z,null)}}const Rt=R.children;for(let Vt=0,ee=Rt.length;Vt<ee;Vt++)Mo(Rt[Vt],Q,ot,lt)}function gs(R,Q,ot,lt){const K=R.opaque,Rt=R.transmissive,Vt=R.transparent;y.setupLightsView(ot),Y===!0&&At.setGlobalState(C.clippingPlanes,ot),lt&&yt.viewport(F.copy(lt)),K.length>0&&ia(K,Q,ot),Rt.length>0&&ia(Rt,Q,ot),Vt.length>0&&ia(Vt,Q,ot),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function vs(R,Q,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[lt.id]===void 0&&(y.state.transmissionRenderTarget[lt.id]=new Js(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Pl:Ra,minFilter:Zs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Rt=y.state.transmissionRenderTarget[lt.id],Vt=lt.viewport||F;Rt.setSize(Vt.z,Vt.w);const ee=C.getRenderTarget();C.setRenderTarget(Rt),C.getClearColor(ct),ft=C.getClearAlpha(),ft<1&&C.setClearColor(16777215,.5),C.clear(),at&&Kt.render(ot);const ne=C.toneMapping;C.toneMapping=hs;const re=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),y.setupLightsView(lt),Y===!0&&At.setGlobalState(C.clippingPlanes,lt),ia(R,ot,lt),O.updateMultisampleRenderTarget(Rt),O.updateRenderTargetMipmap(Rt),Et.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let kt=0,xe=Q.length;kt<xe;kt++){const ze=Q[kt],Xe=ze.object,Nn=ze.geometry,Re=ze.material,$t=ze.group;if(Re.side===ba&&Xe.layers.test(lt.layers)){const qn=Re.side;Re.side=Kn,Re.needsUpdate=!0,Fi(Xe,ot,lt,Nn,Re,$t),Re.side=qn,Re.needsUpdate=!0,ie=!0}}ie===!0&&(O.updateMultisampleRenderTarget(Rt),O.updateRenderTargetMipmap(Rt))}C.setRenderTarget(ee),C.setClearColor(ct,ft),re!==void 0&&(lt.viewport=re),C.toneMapping=ne}function ia(R,Q,ot){const lt=Q.isScene===!0?Q.overrideMaterial:null;for(let K=0,Rt=R.length;K<Rt;K++){const Vt=R[K],ee=Vt.object,ne=Vt.geometry,re=lt===null?Vt.material:lt,ie=Vt.group;ee.layers.test(ot.layers)&&Fi(ee,Q,ot,ne,re,ie)}}function Fi(R,Q,ot,lt,K,Rt){R.onBeforeRender(C,Q,ot,lt,K,Rt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,Q,ot,lt,R,Rt),K.transparent===!0&&K.side===ba&&K.forceSinglePass===!1?(K.side=Kn,K.needsUpdate=!0,C.renderBufferDirect(ot,Q,lt,K,R,Rt),K.side=ps,K.needsUpdate=!0,C.renderBufferDirect(ot,Q,lt,K,R,Rt),K.side=ba):C.renderBufferDirect(ot,Q,lt,K,R,Rt),R.onAfterRender(C,Q,ot,lt,K,Rt)}function aa(R,Q,ot){Q.isScene!==!0&&(Q=wt);const lt=Ft.get(R),K=y.state.lights,Rt=y.state.shadowsArray,Vt=K.state.version,ee=Zt.getParameters(R,K.state,Rt,Q,ot),ne=Zt.getProgramCacheKey(ee);let re=lt.programs;lt.environment=R.isMeshStandardMaterial?Q.environment:null,lt.fog=Q.fog,lt.envMap=(R.isMeshStandardMaterial?et:b).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",fe),re=new Map,lt.programs=re);let ie=re.get(ne);if(ie!==void 0){if(lt.currentProgram===ie&&lt.lightsStateVersion===Vt)return Eo(R,ee),ie}else ee.uniforms=Zt.getUniforms(R),R.onBeforeCompile(ee,C),ie=Zt.acquireProgram(ee,ne),re.set(ne,ie),lt.uniforms=ee.uniforms;const kt=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=At.uniform),Eo(R,ee),lt.needsLights=To(R),lt.lightsStateVersion=Vt,lt.needsLights&&(kt.ambientLightColor.value=K.state.ambient,kt.lightProbe.value=K.state.probe,kt.directionalLights.value=K.state.directional,kt.directionalLightShadows.value=K.state.directionalShadow,kt.spotLights.value=K.state.spot,kt.spotLightShadows.value=K.state.spotShadow,kt.rectAreaLights.value=K.state.rectArea,kt.ltc_1.value=K.state.rectAreaLTC1,kt.ltc_2.value=K.state.rectAreaLTC2,kt.pointLights.value=K.state.point,kt.pointLightShadows.value=K.state.pointShadow,kt.hemisphereLights.value=K.state.hemi,kt.directionalShadowMap.value=K.state.directionalShadowMap,kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,kt.spotShadowMap.value=K.state.spotShadowMap,kt.spotLightMatrix.value=K.state.spotLightMatrix,kt.spotLightMap.value=K.state.spotLightMap,kt.pointShadowMap.value=K.state.pointShadowMap,kt.pointShadowMatrix.value=K.state.pointShadowMatrix),lt.currentProgram=ie,lt.uniformsList=null,ie}function Da(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=Xc.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Eo(R,Q){const ot=Ft.get(R);ot.outputColorSpace=Q.outputColorSpace,ot.batching=Q.batching,ot.batchingColor=Q.batchingColor,ot.instancing=Q.instancing,ot.instancingColor=Q.instancingColor,ot.instancingMorph=Q.instancingMorph,ot.skinning=Q.skinning,ot.morphTargets=Q.morphTargets,ot.morphNormals=Q.morphNormals,ot.morphColors=Q.morphColors,ot.morphTargetsCount=Q.morphTargetsCount,ot.numClippingPlanes=Q.numClippingPlanes,ot.numIntersection=Q.numClipIntersection,ot.vertexAlphas=Q.vertexAlphas,ot.vertexTangents=Q.vertexTangents,ot.toneMapping=Q.toneMapping}function af(R,Q,ot,lt,K){Q.isScene!==!0&&(Q=wt),O.resetTextureUnits();const Rt=Q.fog,Vt=lt.isMeshStandardMaterial?Q.environment:null,ee=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:_o,ne=(lt.isMeshStandardMaterial?et:b).get(lt.envMap||Vt),re=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ie=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),kt=!!ot.morphAttributes.position,xe=!!ot.morphAttributes.normal,ze=!!ot.morphAttributes.color;let Xe=hs;lt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Xe=C.toneMapping);const Nn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Re=Nn!==void 0?Nn.length:0,$t=Ft.get(lt),qn=y.state.lights;if(Y===!0&&(_t===!0||R!==w)){const Pn=R===w&&lt.id===N;At.setState(lt,R,Pn)}let Ae=!1;lt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==qn.state.version||$t.outputColorSpace!==ee||K.isBatchedMesh&&$t.batching===!1||!K.isBatchedMesh&&$t.batching===!0||K.isBatchedMesh&&$t.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$t.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$t.instancing===!1||!K.isInstancedMesh&&$t.instancing===!0||K.isSkinnedMesh&&$t.skinning===!1||!K.isSkinnedMesh&&$t.skinning===!0||K.isInstancedMesh&&$t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$t.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$t.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$t.instancingMorph===!1&&K.morphTexture!==null||$t.envMap!==ne||lt.fog===!0&&$t.fog!==Rt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==At.numPlanes||$t.numIntersection!==At.numIntersection)||$t.vertexAlphas!==re||$t.vertexTangents!==ie||$t.morphTargets!==kt||$t.morphNormals!==xe||$t.morphColors!==ze||$t.toneMapping!==Xe||$t.morphTargetsCount!==Re)&&(Ae=!0):(Ae=!0,$t.__version=lt.version);let cn=$t.currentProgram;Ae===!0&&(cn=aa(lt,Q,K));let Jn=!1,fn=!1,hi=!1;const he=cn.getUniforms(),$n=$t.uniforms;if(yt.useProgram(cn.program)&&(Jn=!0,fn=!0,hi=!0),lt.id!==N&&(N=lt.id,fn=!0),Jn||w!==R){yt.buffers.depth.getReversed()?(ut.copy(R.projectionMatrix),Z1(ut),Q1(ut),he.setValue(I,"projectionMatrix",ut)):he.setValue(I,"projectionMatrix",R.projectionMatrix),he.setValue(I,"viewMatrix",R.matrixWorldInverse);const Un=he.map.cameraPosition;Un!==void 0&&Un.setValue(I,Pt.setFromMatrixPosition(R.matrixWorld)),Lt.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&he.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,fn=!0,hi=!0)}if(K.isSkinnedMesh){he.setOptional(I,K,"bindMatrix"),he.setOptional(I,K,"bindMatrixInverse");const Pn=K.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),he.setValue(I,"boneTexture",Pn.boneTexture,O))}K.isBatchedMesh&&(he.setOptional(I,K,"batchingTexture"),he.setValue(I,"batchingTexture",K._matricesTexture,O),he.setOptional(I,K,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",K._indirectTexture,O),he.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",K._colorsTexture,O));const Na=ot.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0)&&Jt.update(K,ot,cn),(fn||$t.receiveShadow!==K.receiveShadow)&&($t.receiveShadow=K.receiveShadow,he.setValue(I,"receiveShadow",K.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&($n.envMap.value=ne,$n.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Q.environment!==null&&($n.envMapIntensity.value=Q.environmentIntensity),fn&&(he.setValue(I,"toneMappingExposure",C.toneMappingExposure),$t.needsLights&&Vl($n,hi),Rt&&lt.fog===!0&&Nt.refreshFogUniforms($n,Rt),Nt.refreshMaterialUniforms($n,lt,Z,it,y.state.transmissionRenderTarget[R.id]),Xc.upload(I,Da($t),$n,O)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Xc.upload(I,Da($t),$n,O),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&he.setValue(I,"center",K.center),he.setValue(I,"modelViewMatrix",K.modelViewMatrix),he.setValue(I,"normalMatrix",K.normalMatrix),he.setValue(I,"modelMatrix",K.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Pn=lt.uniformsGroups;for(let Un=0,In=Pn.length;Un<In;Un++){const Xl=Pn[Un];X.update(Xl,cn),X.bind(Xl,cn)}}return cn}function Vl(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function To(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,Q,ot){Ft.get(R.texture).__webglTexture=Q,Ft.get(R.depthTexture).__webglTexture=ot;const lt=Ft.get(R);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=ot===void 0,lt.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Q){const ot=Ft.get(R);ot.__webglFramebuffer=Q,ot.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(R,Q=0,ot=0){B=R,H=Q,L=ot;let lt=!0,K=null,Rt=!1,Vt=!1;if(R){const ne=Ft.get(R);if(ne.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(I.FRAMEBUFFER,null),lt=!1;else if(ne.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(ne.__hasExternalTextures)O.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(ne.__boundDepthTexture!==kt){if(kt!==null&&Ft.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const re=R.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Vt=!0);const ie=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[Q])?K=ie[Q][ot]:K=ie[Q],Rt=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?K=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?K=ie[ot]:K=ie,F.copy(R.viewport),rt.copy(R.scissor),nt=R.scissorTest}else F.copy(zt).multiplyScalar(Z).floor(),rt.copy(se).multiplyScalar(Z).floor(),nt=ge;if(yt.bindFramebuffer(I.FRAMEBUFFER,K)&&lt&&yt.drawBuffers(R,K),yt.viewport(F),yt.scissor(rt),yt.setScissorTest(nt),Rt){const ne=Ft.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne.__webglTexture,ot)}else if(Vt){const ne=Ft.get(R.texture),re=Q||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ne.__webglTexture,ot||0,re)}N=-1},this.readRenderTargetPixels=function(R,Q,ot,lt,K,Rt,Vt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(ee=ee[Vt]),ee){yt.bindFramebuffer(I.FRAMEBUFFER,ee);try{const ne=R.texture,re=ne.format,ie=ne.type;if(!Lt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-lt&&ot>=0&&ot<=R.height-K&&I.readPixels(Q,ot,lt,K,ce.convert(re),ce.convert(ie),Rt)}finally{const ne=B!==null?Ft.get(B).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,Q,ot,lt,K,Rt,Vt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(ee=ee[Vt]),ee){const ne=R.texture,re=ne.format,ie=ne.type;if(!Lt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=R.width-lt&&ot>=0&&ot<=R.height-K){yt.bindFramebuffer(I.FRAMEBUFFER,ee);const kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,Rt.byteLength,I.STREAM_READ),I.readPixels(Q,ot,lt,K,ce.convert(re),ce.convert(ie),0);const xe=B!==null?Ft.get(B).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,xe);const ze=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await j1(I,ze,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Rt),I.deleteBuffer(kt),I.deleteSync(ze),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Q=null,ot=0){R.isTexture!==!0&&(Tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1]);const lt=Math.pow(2,-ot),K=Math.floor(R.image.width*lt),Rt=Math.floor(R.image.height*lt),Vt=Q!==null?Q.x:0,ee=Q!==null?Q.y:0;O.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,ot,0,0,Vt,ee,K,Rt),yt.unbindTexture()},this.copyTextureToTexture=function(R,Q,ot=null,lt=null,K=0){R.isTexture!==!0&&(Tl("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,R=arguments[1],Q=arguments[2],K=arguments[3]||0,ot=null);let Rt,Vt,ee,ne,re,ie,kt,xe,ze;const Xe=R.isCompressedTexture?R.mipmaps[K]:R.image;ot!==null?(Rt=ot.max.x-ot.min.x,Vt=ot.max.y-ot.min.y,ee=ot.isBox3?ot.max.z-ot.min.z:1,ne=ot.min.x,re=ot.min.y,ie=ot.isBox3?ot.min.z:0):(Rt=Xe.width,Vt=Xe.height,ee=Xe.depth||1,ne=0,re=0,ie=0),lt!==null?(kt=lt.x,xe=lt.y,ze=lt.z):(kt=0,xe=0,ze=0);const Nn=ce.convert(Q.format),Re=ce.convert(Q.type);let $t;Q.isData3DTexture?(O.setTexture3D(Q,0),$t=I.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(O.setTexture2DArray(Q,0),$t=I.TEXTURE_2D_ARRAY):(O.setTexture2D(Q,0),$t=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment);const qn=I.getParameter(I.UNPACK_ROW_LENGTH),Ae=I.getParameter(I.UNPACK_IMAGE_HEIGHT),cn=I.getParameter(I.UNPACK_SKIP_PIXELS),Jn=I.getParameter(I.UNPACK_SKIP_ROWS),fn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Xe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ie);const hi=R.isDataArrayTexture||R.isData3DTexture,he=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const $n=Ft.get(R),Na=Ft.get(Q),Pn=Ft.get($n.__renderTarget),Un=Ft.get(Na.__renderTarget);yt.bindFramebuffer(I.READ_FRAMEBUFFER,Pn.__webglFramebuffer),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let In=0;In<ee;In++)hi&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,K,ie+In),R.isDepthTexture?(he&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(Q).__webglTexture,K,ze+In),I.blitFramebuffer(ne,re,Rt,Vt,kt,xe,Rt,Vt,I.DEPTH_BUFFER_BIT,I.NEAREST)):he?I.copyTexSubImage3D($t,K,kt,xe,ze+In,ne,re,Rt,Vt):I.copyTexSubImage2D($t,K,kt,xe,ze+In,ne,re,Rt,Vt);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else he?R.isDataTexture||R.isData3DTexture?I.texSubImage3D($t,K,kt,xe,ze,Rt,Vt,ee,Nn,Re,Xe.data):Q.isCompressedArrayTexture?I.compressedTexSubImage3D($t,K,kt,xe,ze,Rt,Vt,ee,Nn,Xe.data):I.texSubImage3D($t,K,kt,xe,ze,Rt,Vt,ee,Nn,Re,Xe):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,K,kt,xe,Rt,Vt,Nn,Re,Xe.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,K,kt,xe,Xe.width,Xe.height,Nn,Xe.data):I.texSubImage2D(I.TEXTURE_2D,K,kt,xe,Rt,Vt,Nn,Re,Xe);I.pixelStorei(I.UNPACK_ROW_LENGTH,qn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ae),I.pixelStorei(I.UNPACK_SKIP_PIXELS,cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fn),K===0&&Q.generateMipmaps&&I.generateMipmap($t),yt.unbindTexture()},this.copyTextureToTexture3D=function(R,Q,ot=null,lt=null,K=0){return R.isTexture!==!0&&(Tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,lt=arguments[1]||null,R=arguments[2],Q=arguments[3],K=arguments[4]||0),Tl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Q,ot,lt,K)},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),yt.unbindTexture()},this.resetState=function(){H=0,L=0,B=null,yt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}class oC extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class lC{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=em,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new k;class jc{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Oi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Fe(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Fe(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Oi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Oi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Oi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Oi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Fe(i,this.array),s=Fe(s,this.array),l=Fe(l,this.array),c=Fe(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ii(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ny extends yo{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $r;const xl=new k,to=new k,eo=new k,no=new Dt,yl=new Dt,Uy=new Ze,Nc=new k,Sl=new k,Uc=new k,Hx=new Dt,fp=new Dt,Gx=new Dt;class uC extends Rn{constructor(e=new Ny){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new fi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new lC(i,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new jc(s,3,0,!1)),$r.setAttribute("uv",new jc(s,2,3,!1))}this.geometry=$r,this.material=e,this.center=new Dt(.5,.5)}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),Uy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-eo.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;Lc(Nc.set(-.5,-.5,0),eo,h,to,l,c),Lc(Sl.set(.5,-.5,0),eo,h,to,l,c),Lc(Uc.set(.5,.5,0),eo,h,to,l,c),Hx.set(0,0),fp.set(1,0),Gx.set(1,1);let d=e.ray.intersectTriangle(Nc,Sl,Uc,!1,xl);if(d===null&&(Lc(Sl.set(-.5,.5,0),eo,h,to,l,c),fp.set(0,1),d=e.ray.intersectTriangle(Nc,Uc,Sl,!1,xl),d===null))return;const p=e.ray.origin.distanceTo(xl);p<e.near||p>e.far||i.push({distance:p,point:xl.clone(),uv:Ti.getInterpolation(xl,Nc,Sl,Uc,Hx,fp,Gx,new Dt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lc(o,e,i,s,l,c){no.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(yl.x=c*no.x-l*no.y,yl.y=l*no.x+c*no.y):yl.copy(no),o.copy(e),o.x+=yl.x,o.y+=yl.y,o.applyMatrix4(Uy)}class Ly extends kn{constructor(e,i,s,l,c,h,d,p,m){super(e,i,s,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ea{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=e*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===h)return l/(c-1);const v=s[l],x=s[l+1]-v,S=(h-v)/x;return(l+S)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),p=i||(h.isVector2?new Dt:new k);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i){const s=new k,l=[],c=[],h=[],d=new k,p=new Ze;for(let S=0;S<=e;S++){const E=S/e;l[S]=this.getTangentAt(E,new k)}c[0]=new k,h[0]=new k;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),x=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),x<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(dn(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,E))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(dn(c[0].dot(c[e]),-1,1));S/=e,l[0].dot(d.crossVectors(c[0],c[e]))>0&&(S=-S);for(let E=1;E<=e;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _m extends ea{constructor(e=0,i=0,s=1,l=1,c=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(e,i=new Dt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),x=p-this.aX,S=m-this.aY;p=x*v-S*g+this.aX,m=x*g+S*v+this.aY}return s.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cC extends _m{constructor(e,i,s,l,c,h){super(e,i,s,s,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function xm(){let o=0,e=0,i=0,s=0;function l(c,h,d,p){o=c,e=d,i=-3*c+3*h-2*d-p,s=2*c-2*h+d+p}return{initCatmullRom:function(c,h,d,p,m){l(h,d,m*(d-c),m*(p-h))},initNonuniformCatmullRom:function(c,h,d,p,m,v,g){let x=(h-c)/m-(d-c)/(m+v)+(d-h)/v,S=(d-h)/v-(p-h)/(v+g)+(p-d)/g;x*=v,S*=v,l(h,d,x,S)},calc:function(c){const h=c*c,d=h*c;return o+e*c+i*h+s*d}}}const Oc=new k,hp=new xm,dp=new xm,pp=new xm;class fC extends ea{constructor(e=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=s,this.tension=l}getPoint(e,i=new k){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%c]:(Oc.subVectors(l[0],l[1]).add(l[0]),m=Oc);const g=l[d%c],x=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(Oc.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Oc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),S),A=Math.pow(g.distanceToSquared(x),S),M=Math.pow(x.distanceToSquared(v),S);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),hp.initNonuniformCatmullRom(m.x,g.x,x.x,v.x,E,A,M),dp.initNonuniformCatmullRom(m.y,g.y,x.y,v.y,E,A,M),pp.initNonuniformCatmullRom(m.z,g.z,x.z,v.z,E,A,M)}else this.curveType==="catmullrom"&&(hp.initCatmullRom(m.x,g.x,x.x,v.x,this.tension),dp.initCatmullRom(m.y,g.y,x.y,v.y,this.tension),pp.initCatmullRom(m.z,g.z,x.z,v.z,this.tension));return s.set(hp.calc(p),dp.calc(p),pp.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new k().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vx(o,e,i,s,l){const c=(s-e)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+c+h)*p+(-3*i+3*s-2*c-h)*d+c*o+i}function hC(o,e){const i=1-o;return i*i*e}function dC(o,e){return 2*(1-o)*o*e}function pC(o,e){return o*o*e}function Cl(o,e,i,s){return hC(o,e)+dC(o,i)+pC(o,s)}function mC(o,e){const i=1-o;return i*i*i*e}function gC(o,e){const i=1-o;return 3*i*i*o*e}function vC(o,e){return 3*(1-o)*o*o*e}function _C(o,e){return o*o*o*e}function Rl(o,e,i,s,l){return mC(o,e)+gC(o,i)+vC(o,s)+_C(o,l)}class Oy extends ea{constructor(e=new Dt,i=new Dt,s=new Dt,l=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new Dt){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(Rl(e,l.x,c.x,h.x,d.x),Rl(e,l.y,c.y,h.y,d.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xC extends ea{constructor(e=new k,i=new k,s=new k,l=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new k){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(Rl(e,l.x,c.x,h.x,d.x),Rl(e,l.y,c.y,h.y,d.y),Rl(e,l.z,c.z,h.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zy extends ea{constructor(e=new Dt,i=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new Dt){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Dt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yC extends ea{constructor(e=new k,i=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new k){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new k){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Py extends ea{constructor(e=new Dt,i=new Dt,s=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new Dt){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Cl(e,l.x,c.x,h.x),Cl(e,l.y,c.y,h.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SC extends ea{constructor(e=new k,i=new k,s=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new k){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Cl(e,l.x,c.x,h.x),Cl(e,l.y,c.y,h.y),Cl(e,l.z,c.z,h.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iy extends ea{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new Dt){const s=i,l=this.points,c=(l.length-1)*e,h=Math.floor(c),d=c-h,p=l[h===0?h:h-1],m=l[h],v=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return s.set(Vx(d,p.x,m.x,v.x,g.x),Vx(d,p.y,m.y,v.y,g.y)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new Dt().fromArray(l))}return this}}var im=Object.freeze({__proto__:null,ArcCurve:cC,CatmullRomCurve3:fC,CubicBezierCurve:Oy,CubicBezierCurve3:xC,EllipseCurve:_m,LineCurve:zy,LineCurve3:yC,QuadraticBezierCurve:Py,QuadraticBezierCurve3:SC,SplineCurve:Iy});class MC extends ea{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(i)){const s=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new im[s](i,e))}return this}getPoint(e,i){const s=e*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const h=l[c]-s,d=this.curves[c],p=d.getLength(),m=p===0?0:1-h/p;return d.getPointAt(m,i)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),e.push(i);return this.cacheLengths=e,e}getSpacedPoints(e=40){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return this.autoClose&&i.push(i[0]),i}getPoints(e=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?e*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?e*h.points.length:e,p=h.getPoints(d);for(let m=0;m<p.length;m++){const v=p[m];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(e){super.copy(e),this.curves=[];for(let i=0,s=e.curves.length;i<s;i++){const l=e.curves[i];this.curves.push(l.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];e.curves.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let i=0,s=e.curves.length;i<s;i++){const l=e.curves[i];this.curves.push(new im[l.type]().fromJSON(l))}return this}}class Zc extends MC{constructor(e){super(),this.type="Path",this.currentPoint=new Dt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let i=1,s=e.length;i<s;i++)this.lineTo(e[i].x,e[i].y);return this}moveTo(e,i){return this.currentPoint.set(e,i),this}lineTo(e,i){const s=new zy(this.currentPoint.clone(),new Dt(e,i));return this.curves.push(s),this.currentPoint.set(e,i),this}quadraticCurveTo(e,i,s,l){const c=new Py(this.currentPoint.clone(),new Dt(e,i),new Dt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(e,i,s,l,c,h){const d=new Oy(this.currentPoint.clone(),new Dt(e,i),new Dt(s,l),new Dt(c,h));return this.curves.push(d),this.currentPoint.set(c,h),this}splineThru(e){const i=[this.currentPoint.clone()].concat(e),s=new Iy(i);return this.curves.push(s),this.currentPoint.copy(e[e.length-1]),this}arc(e,i,s,l,c,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+d,i+p,s,l,c,h),this}absarc(e,i,s,l,c,h){return this.absellipse(e,i,s,s,l,c,h),this}ellipse(e,i,s,l,c,h,d,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+m,i+v,s,l,c,h,d,p),this}absellipse(e,i,s,l,c,h,d,p){const m=new _m(e,i,s,l,c,h,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ym extends fi{constructor(e=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],i=12,s=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:i,phiStart:s,phiLength:l},i=Math.floor(i),l=dn(l,0,Math.PI*2);const c=[],h=[],d=[],p=[],m=[],v=1/i,g=new k,x=new Dt,S=new k,E=new k,A=new k;let M=0,y=0;for(let z=0;z<=e.length-1;z++)switch(z){case 0:M=e[z+1].x-e[z].x,y=e[z+1].y-e[z].y,S.x=y*1,S.y=-M,S.z=y*0,A.copy(S),S.normalize(),p.push(S.x,S.y,S.z);break;case e.length-1:p.push(A.x,A.y,A.z);break;default:M=e[z+1].x-e[z].x,y=e[z+1].y-e[z].y,S.x=y*1,S.y=-M,S.z=y*0,E.copy(S),S.x+=A.x,S.y+=A.y,S.z+=A.z,S.normalize(),p.push(S.x,S.y,S.z),A.copy(E)}for(let z=0;z<=i;z++){const U=s+z*v*l,C=Math.sin(U),J=Math.cos(U);for(let H=0;H<=e.length-1;H++){g.x=e[H].x*C,g.y=e[H].y,g.z=e[H].x*J,h.push(g.x,g.y,g.z),x.x=z/i,x.y=H/(e.length-1),d.push(x.x,x.y);const L=p[3*H+0]*C,B=p[3*H+1],N=p[3*H+0]*J;m.push(L,B,N)}}for(let z=0;z<i;z++)for(let U=0;U<e.length-1;U++){const C=U+z*e.length,J=C,H=C+e.length,L=C+e.length+1,B=C+1;c.push(J,H,B),c.push(L,B,H)}this.setIndex(c),this.setAttribute("position",new an(h,3)),this.setAttribute("uv",new an(d,2)),this.setAttribute("normal",new an(m,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ym(e.points,e.segments,e.phiStart,e.phiLength)}}class Qc extends ym{constructor(e=1,i=1,s=4,l=8){const c=new Zc;c.absarc(0,-i/2,e,Math.PI*1.5,0),c.absarc(0,i/2,e,0,Math.PI*.5),super(c.getPoints(s),l),this.type="CapsuleGeometry",this.parameters={radius:e,length:i,capSegments:s,radialSegments:l}}static fromJSON(e){return new Qc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Sm extends fi{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],x=[],S=[];let E=0;const A=[],M=s/2;let y=0;z(),h===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(S,2));function z(){const C=new k,J=new k;let H=0;const L=(i-e)/s;for(let B=0;B<=c;B++){const N=[],w=B/c,F=w*(i-e)+e;for(let rt=0;rt<=l;rt++){const nt=rt/l,ct=nt*p+d,ft=Math.sin(ct),V=Math.cos(ct);J.x=F*ft,J.y=-w*s+M,J.z=F*V,g.push(J.x,J.y,J.z),C.set(ft,L,V).normalize(),x.push(C.x,C.y,C.z),S.push(nt,1-w),N.push(E++)}A.push(N)}for(let B=0;B<l;B++)for(let N=0;N<c;N++){const w=A[N][B],F=A[N+1][B],rt=A[N+1][B+1],nt=A[N][B+1];(e>0||N!==0)&&(v.push(w,F,nt),H+=3),(i>0||N!==c-1)&&(v.push(F,rt,nt),H+=3)}m.addGroup(y,H,0),y+=H}function U(C){const J=E,H=new Dt,L=new k;let B=0;const N=C===!0?e:i,w=C===!0?1:-1;for(let rt=1;rt<=l;rt++)g.push(0,M*w,0),x.push(0,w,0),S.push(.5,.5),E++;const F=E;for(let rt=0;rt<=l;rt++){const ct=rt/l*p+d,ft=Math.cos(ct),V=Math.sin(ct);L.x=N*V,L.y=M*w,L.z=N*ft,g.push(L.x,L.y,L.z),x.push(0,w,0),H.x=ft*.5+.5,H.y=V*.5*w+.5,S.push(H.x,H.y),E++}for(let rt=0;rt<l;rt++){const nt=J+rt,ct=F+rt;C===!0?v.push(ct,ct+1,nt):v.push(ct+1,ct,nt),B+=3}m.addGroup(y,B,C===!0?1:2),y+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ro extends Zc{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(e);return i}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let i=0,s=e.holes.length;i<s;i++){const l=e.holes[i];this.holes.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];e.holes.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let i=0,s=e.holes.length;i<s;i++){const l=e.holes[i];this.holes.push(new Zc().fromJSON(l))}return this}}const EC={triangulate:function(o,e,i=2){const s=e&&e.length,l=s?e[0]*i:o.length;let c=By(o,0,l,i,!0);const h=[];if(!c||c.next===c.prev)return h;let d,p,m,v,g,x,S;if(s&&(c=CC(o,e,c,i)),o.length>80*i){d=m=o[0],p=v=o[1];for(let E=i;E<l;E+=i)g=o[E],x=o[E+1],g<d&&(d=g),x<p&&(p=x),g>m&&(m=g),x>v&&(v=x);S=Math.max(m-d,v-p),S=S!==0?32767/S:0}return Ll(c,h,i,d,p,S,0),h}};function By(o,e,i,s,l){let c,h;if(l===FC(o,e,i,s)>0)for(c=e;c<i;c+=s)h=Xx(c,o[c],o[c+1],h);else for(c=i-s;c>=e;c-=s)h=Xx(c,o[c],o[c+1],h);return h&&nf(h,h.next)&&(zl(h),h=h.next),h}function $s(o,e){if(!o)return o;e||(e=o);let i=o,s;do if(s=!1,!i.steiner&&(nf(i,i.next)||$e(i.prev,i,i.next)===0)){if(zl(i),i=e=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==e);return e}function Ll(o,e,i,s,l,c,h){if(!o)return;!h&&c&&LC(o,s,l,c);let d=o,p,m;for(;o.prev!==o.next;){if(p=o.prev,m=o.next,c?bC(o,s,l,c):TC(o)){e.push(p.i/i|0),e.push(o.i/i|0),e.push(m.i/i|0),zl(o),o=m.next,d=m.next;continue}if(o=m,o===d){h?h===1?(o=AC($s(o),e,i),Ll(o,e,i,s,l,c,2)):h===2&&wC(o,e,i,s,l,c):Ll($s(o),e,i,s,l,c,1);break}}}function TC(o){const e=o.prev,i=o,s=o.next;if($e(e,i,s)>=0)return!1;const l=e.x,c=i.x,h=s.x,d=e.y,p=i.y,m=s.y,v=l<c?l<h?l:h:c<h?c:h,g=d<p?d<m?d:m:p<m?p:m,x=l>c?l>h?l:h:c>h?c:h,S=d>p?d>m?d:m:p>m?p:m;let E=s.next;for(;E!==e;){if(E.x>=v&&E.x<=x&&E.y>=g&&E.y<=S&&oo(l,d,c,p,h,m,E.x,E.y)&&$e(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function bC(o,e,i,s){const l=o.prev,c=o,h=o.next;if($e(l,c,h)>=0)return!1;const d=l.x,p=c.x,m=h.x,v=l.y,g=c.y,x=h.y,S=d<p?d<m?d:m:p<m?p:m,E=v<g?v<x?v:x:g<x?g:x,A=d>p?d>m?d:m:p>m?p:m,M=v>g?v>x?v:x:g>x?g:x,y=am(S,E,e,i,s),z=am(A,M,e,i,s);let U=o.prevZ,C=o.nextZ;for(;U&&U.z>=y&&C&&C.z<=z;){if(U.x>=S&&U.x<=A&&U.y>=E&&U.y<=M&&U!==l&&U!==h&&oo(d,v,p,g,m,x,U.x,U.y)&&$e(U.prev,U,U.next)>=0||(U=U.prevZ,C.x>=S&&C.x<=A&&C.y>=E&&C.y<=M&&C!==l&&C!==h&&oo(d,v,p,g,m,x,C.x,C.y)&&$e(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;U&&U.z>=y;){if(U.x>=S&&U.x<=A&&U.y>=E&&U.y<=M&&U!==l&&U!==h&&oo(d,v,p,g,m,x,U.x,U.y)&&$e(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;C&&C.z<=z;){if(C.x>=S&&C.x<=A&&C.y>=E&&C.y<=M&&C!==l&&C!==h&&oo(d,v,p,g,m,x,C.x,C.y)&&$e(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function AC(o,e,i){let s=o;do{const l=s.prev,c=s.next.next;!nf(l,c)&&Fy(l,s,s.next,c)&&Ol(l,c)&&Ol(c,l)&&(e.push(l.i/i|0),e.push(s.i/i|0),e.push(c.i/i|0),zl(s),zl(s.next),s=o=c),s=s.next}while(s!==o);return $s(s)}function wC(o,e,i,s,l,c){let h=o;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&PC(h,d)){let p=Hy(h,d);h=$s(h,h.next),p=$s(p,p.next),Ll(h,e,i,s,l,c,0),Ll(p,e,i,s,l,c,0);return}d=d.next}h=h.next}while(h!==o)}function CC(o,e,i,s){const l=[];let c,h,d,p,m;for(c=0,h=e.length;c<h;c++)d=e[c]*s,p=c<h-1?e[c+1]*s:o.length,m=By(o,d,p,s,!1),m===m.next&&(m.steiner=!0),l.push(zC(m));for(l.sort(RC),c=0;c<l.length;c++)i=DC(l[c],i);return i}function RC(o,e){return o.x-e.x}function DC(o,e){const i=NC(o,e);if(!i)return e;const s=Hy(i,o);return $s(s,s.next),$s(i,i.next)}function NC(o,e){let i=e,s=-1/0,l;const c=o.x,h=o.y;do{if(h<=i.y&&h>=i.next.y&&i.next.y!==i.y){const x=i.x+(h-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(x<=c&&x>s&&(s=x,l=i.x<i.next.x?i:i.next,x===c))return l}i=i.next}while(i!==e);if(!l)return null;const d=l,p=l.x,m=l.y;let v=1/0,g;i=l;do c>=i.x&&i.x>=p&&c!==i.x&&oo(h<m?c:s,h,p,m,h<m?s:c,h,i.x,i.y)&&(g=Math.abs(h-i.y)/(c-i.x),Ol(i,o)&&(g<v||g===v&&(i.x>l.x||i.x===l.x&&UC(l,i)))&&(l=i,v=g)),i=i.next;while(i!==d);return l}function UC(o,e){return $e(o.prev,o,e.prev)<0&&$e(e.next,o,o.next)<0}function LC(o,e,i,s){let l=o;do l.z===0&&(l.z=am(l.x,l.y,e,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==o);l.prevZ.nextZ=null,l.prevZ=null,OC(l)}function OC(o){let e,i,s,l,c,h,d,p,m=1;do{for(i=o,o=null,c=null,h=0;i;){for(h++,s=i,d=0,e=0;e<m&&(d++,s=s.nextZ,!!s);e++);for(p=m;d>0||p>0&&s;)d!==0&&(p===0||!s||i.z<=s.z)?(l=i,i=i.nextZ,d--):(l=s,s=s.nextZ,p--),c?c.nextZ=l:o=l,l.prevZ=c,c=l;i=s}c.nextZ=null,m*=2}while(h>1);return o}function am(o,e,i,s,l){return o=(o-i)*l|0,e=(e-s)*l|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function zC(o){let e=o,i=o;do(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;while(e!==o);return i}function oo(o,e,i,s,l,c,h,d){return(l-h)*(e-d)>=(o-h)*(c-d)&&(o-h)*(s-d)>=(i-h)*(e-d)&&(i-h)*(c-d)>=(l-h)*(s-d)}function PC(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!IC(o,e)&&(Ol(o,e)&&Ol(e,o)&&BC(o,e)&&($e(o.prev,o,e.prev)||$e(o,e.prev,e))||nf(o,e)&&$e(o.prev,o,o.next)>0&&$e(e.prev,e,e.next)>0)}function $e(o,e,i){return(e.y-o.y)*(i.x-e.x)-(e.x-o.x)*(i.y-e.y)}function nf(o,e){return o.x===e.x&&o.y===e.y}function Fy(o,e,i,s){const l=Pc($e(o,e,i)),c=Pc($e(o,e,s)),h=Pc($e(i,s,o)),d=Pc($e(i,s,e));return!!(l!==c&&h!==d||l===0&&zc(o,i,e)||c===0&&zc(o,s,e)||h===0&&zc(i,o,s)||d===0&&zc(i,e,s))}function zc(o,e,i){return e.x<=Math.max(o.x,i.x)&&e.x>=Math.min(o.x,i.x)&&e.y<=Math.max(o.y,i.y)&&e.y>=Math.min(o.y,i.y)}function Pc(o){return o>0?1:o<0?-1:0}function IC(o,e){let i=o;do{if(i.i!==o.i&&i.next.i!==o.i&&i.i!==e.i&&i.next.i!==e.i&&Fy(i,i.next,o,e))return!0;i=i.next}while(i!==o);return!1}function Ol(o,e){return $e(o.prev,o,o.next)<0?$e(o,e,o.next)>=0&&$e(o,o.prev,e)>=0:$e(o,e,o.prev)<0||$e(o,o.next,e)<0}function BC(o,e){let i=o,s=!1;const l=(o.x+e.x)/2,c=(o.y+e.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==o);return s}function Hy(o,e){const i=new sm(o.i,o.x,o.y),s=new sm(e.i,e.x,e.y),l=o.next,c=e.prev;return o.next=e,e.prev=o,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function Xx(o,e,i,s){const l=new sm(o,e,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function zl(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function sm(o,e,i){this.i=o,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function FC(o,e,i,s){let l=0;for(let c=e,h=i-s;c<i;c+=s)l+=(o[h]-o[c])*(o[c+1]+o[h+1]),h=c;return l}class ds{static area(e){const i=e.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=e[l].x*e[c].y-e[c].x*e[l].y;return s*.5}static isClockWise(e){return ds.area(e)<0}static triangulateShape(e,i){const s=[],l=[],c=[];kx(e),qx(s,e);let h=e.length;i.forEach(kx);for(let p=0;p<i.length;p++)l.push(h),h+=i[p].length,qx(s,i[p]);const d=EC.triangulate(s,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function kx(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function qx(o,e){for(let i=0;i<e.length;i++)o.push(e[i].x),o.push(e[i].y)}class Kc extends fi{constructor(e=new ro([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:i},e=Array.isArray(e)?e:[e];const s=this,l=[],c=[];for(let d=0,p=e.length;d<p;d++){const m=e[d];h(m)}this.setAttribute("position",new an(l,3)),this.setAttribute("uv",new an(c,2)),this.computeVertexNormals();function h(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let x=i.bevelEnabled!==void 0?i.bevelEnabled:!0,S=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:S-.1,A=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const y=i.extrudePath,z=i.UVGenerator!==void 0?i.UVGenerator:HC;let U,C=!1,J,H,L,B;y&&(U=y.getSpacedPoints(v),C=!0,x=!1,J=y.computeFrenetFrames(v,!1),H=new k,L=new k,B=new k),x||(M=0,S=0,E=0,A=0);const N=d.extractPoints(m);let w=N.shape;const F=N.holes;if(!ds.isClockWise(w)){w=w.reverse();for(let at=0,bt=F.length;at<bt;at++){const I=F[at];ds.isClockWise(I)&&(F[at]=I.reverse())}}const nt=ds.triangulateShape(w,F),ct=w;for(let at=0,bt=F.length;at<bt;at++){const I=F[at];w=w.concat(I)}function ft(at,bt,I){return bt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(bt,I)}const V=w.length,it=nt.length;function Z(at,bt,I){let jt,Et,Lt;const yt=at.x-bt.x,te=at.y-bt.y,Ft=I.x-at.x,O=I.y-at.y,b=yt*yt+te*te,et=yt*O-te*Ft;if(Math.abs(et)>Number.EPSILON){const dt=Math.sqrt(b),Mt=Math.sqrt(Ft*Ft+O*O),gt=bt.x-te/dt,Zt=bt.y+yt/dt,Nt=I.x-O/Mt,Ut=I.y+Ft/Mt,oe=((Nt-gt)*O-(Ut-Zt)*Ft)/(yt*O-te*Ft);jt=gt+yt*oe-at.x,Et=Zt+te*oe-at.y;const At=jt*jt+Et*Et;if(At<=2)return new Dt(jt,Et);Lt=Math.sqrt(At/2)}else{let dt=!1;yt>Number.EPSILON?Ft>Number.EPSILON&&(dt=!0):yt<-Number.EPSILON?Ft<-Number.EPSILON&&(dt=!0):Math.sign(te)===Math.sign(O)&&(dt=!0),dt?(jt=-te,Et=yt,Lt=Math.sqrt(b)):(jt=yt,Et=te,Lt=Math.sqrt(b/2))}return new Dt(jt/Lt,Et/Lt)}const xt=[];for(let at=0,bt=ct.length,I=bt-1,jt=at+1;at<bt;at++,I++,jt++)I===bt&&(I=0),jt===bt&&(jt=0),xt[at]=Z(ct[at],ct[I],ct[jt]);const Tt=[];let zt,se=xt.concat();for(let at=0,bt=F.length;at<bt;at++){const I=F[at];zt=[];for(let jt=0,Et=I.length,Lt=Et-1,yt=jt+1;jt<Et;jt++,Lt++,yt++)Lt===Et&&(Lt=0),yt===Et&&(yt=0),zt[jt]=Z(I[jt],I[Lt],I[yt]);Tt.push(zt),se=se.concat(zt)}for(let at=0;at<M;at++){const bt=at/M,I=S*Math.cos(bt*Math.PI/2),jt=E*Math.sin(bt*Math.PI/2)+A;for(let Et=0,Lt=ct.length;Et<Lt;Et++){const yt=ft(ct[Et],xt[Et],jt);ut(yt.x,yt.y,-I)}for(let Et=0,Lt=F.length;Et<Lt;Et++){const yt=F[Et];zt=Tt[Et];for(let te=0,Ft=yt.length;te<Ft;te++){const O=ft(yt[te],zt[te],jt);ut(O.x,O.y,-I)}}}const ge=E+A;for(let at=0;at<V;at++){const bt=x?ft(w[at],se[at],ge):w[at];C?(L.copy(J.normals[0]).multiplyScalar(bt.x),H.copy(J.binormals[0]).multiplyScalar(bt.y),B.copy(U[0]).add(L).add(H),ut(B.x,B.y,B.z)):ut(bt.x,bt.y,0)}for(let at=1;at<=v;at++)for(let bt=0;bt<V;bt++){const I=x?ft(w[bt],se[bt],ge):w[bt];C?(L.copy(J.normals[at]).multiplyScalar(I.x),H.copy(J.binormals[at]).multiplyScalar(I.y),B.copy(U[at]).add(L).add(H),ut(B.x,B.y,B.z)):ut(I.x,I.y,g/v*at)}for(let at=M-1;at>=0;at--){const bt=at/M,I=S*Math.cos(bt*Math.PI/2),jt=E*Math.sin(bt*Math.PI/2)+A;for(let Et=0,Lt=ct.length;Et<Lt;Et++){const yt=ft(ct[Et],xt[Et],jt);ut(yt.x,yt.y,g+I)}for(let Et=0,Lt=F.length;Et<Lt;Et++){const yt=F[Et];zt=Tt[Et];for(let te=0,Ft=yt.length;te<Ft;te++){const O=ft(yt[te],zt[te],jt);C?ut(O.x,O.y+U[v-1].y,U[v-1].x+I):ut(O.x,O.y,g+I)}}}D(),Y();function D(){const at=l.length/3;if(x){let bt=0,I=V*bt;for(let jt=0;jt<it;jt++){const Et=nt[jt];Ct(Et[2]+I,Et[1]+I,Et[0]+I)}bt=v+M*2,I=V*bt;for(let jt=0;jt<it;jt++){const Et=nt[jt];Ct(Et[0]+I,Et[1]+I,Et[2]+I)}}else{for(let bt=0;bt<it;bt++){const I=nt[bt];Ct(I[2],I[1],I[0])}for(let bt=0;bt<it;bt++){const I=nt[bt];Ct(I[0]+V*v,I[1]+V*v,I[2]+V*v)}}s.addGroup(at,l.length/3-at,0)}function Y(){const at=l.length/3;let bt=0;_t(ct,bt),bt+=ct.length;for(let I=0,jt=F.length;I<jt;I++){const Et=F[I];_t(Et,bt),bt+=Et.length}s.addGroup(at,l.length/3-at,1)}function _t(at,bt){let I=at.length;for(;--I>=0;){const jt=I;let Et=I-1;Et<0&&(Et=at.length-1);for(let Lt=0,yt=v+M*2;Lt<yt;Lt++){const te=V*Lt,Ft=V*(Lt+1),O=bt+jt+te,b=bt+Et+te,et=bt+Et+Ft,dt=bt+jt+Ft;Pt(O,b,et,dt)}}}function ut(at,bt,I){p.push(at),p.push(bt),p.push(I)}function Ct(at,bt,I){Ot(at),Ot(bt),Ot(I);const jt=l.length/3,Et=z.generateTopUV(s,l,jt-3,jt-2,jt-1);wt(Et[0]),wt(Et[1]),wt(Et[2])}function Pt(at,bt,I,jt){Ot(at),Ot(bt),Ot(jt),Ot(bt),Ot(I),Ot(jt);const Et=l.length/3,Lt=z.generateSideWallUV(s,l,Et-6,Et-3,Et-2,Et-1);wt(Lt[0]),wt(Lt[1]),wt(Lt[3]),wt(Lt[1]),wt(Lt[2]),wt(Lt[3])}function Ot(at){l.push(p[at*3+0]),l.push(p[at*3+1]),l.push(p[at*3+2])}function wt(at){c.push(at.x),c.push(at.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return GC(i,s,e)}static fromJSON(e,i){const s=[];for(let c=0,h=e.shapes.length;c<h;c++){const d=i[e.shapes[c]];s.push(d)}const l=e.options.extrudePath;return l!==void 0&&(e.options.extrudePath=new im[l.type]().fromJSON(l)),new Kc(s,e.options)}}const HC={generateTopUV:function(o,e,i,s,l){const c=e[i*3],h=e[i*3+1],d=e[s*3],p=e[s*3+1],m=e[l*3],v=e[l*3+1];return[new Dt(c,h),new Dt(d,p),new Dt(m,v)]},generateSideWallUV:function(o,e,i,s,l,c){const h=e[i*3],d=e[i*3+1],p=e[i*3+2],m=e[s*3],v=e[s*3+1],g=e[s*3+2],x=e[l*3],S=e[l*3+1],E=e[l*3+2],A=e[c*3],M=e[c*3+1],y=e[c*3+2];return Math.abs(d-v)<Math.abs(h-m)?[new Dt(h,1-p),new Dt(m,1-g),new Dt(x,1-E),new Dt(A,1-y)]:[new Dt(d,1-p),new Dt(v,1-g),new Dt(S,1-E),new Dt(M,1-y)]}};function GC(o,e,i){if(i.shapes=[],Array.isArray(o))for(let s=0,l=o.length;s<l;s++){const c=o[s];i.shapes.push(c.uuid)}else i.shapes.push(o.uuid);return i.options=Object.assign({},e),e.extrudePath!==void 0&&(i.options.extrudePath=e.extrudePath.toJSON()),i}class Mm extends fi{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let g=e;const x=(i-e)/l,S=new k,E=new Dt;for(let A=0;A<=l;A++){for(let M=0;M<=s;M++){const y=c+M/s*h;S.x=g*Math.cos(y),S.y=g*Math.sin(y),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,v.push(E.x,E.y)}g+=x}for(let A=0;A<l;A++){const M=A*(s+1);for(let y=0;y<s;y++){const z=y+M,U=z,C=z+s+1,J=z+s+2,H=z+1;d.push(U,C,H),d.push(C,J,H)}}this.setIndex(d),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(m,3)),this.setAttribute("uv",new an(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jc extends fi{constructor(e=new ro([new Dt(0,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:i};const s=[],l=[],c=[],h=[];let d=0,p=0;if(Array.isArray(e)===!1)m(e);else for(let v=0;v<e.length;v++)m(e[v]),this.addGroup(d,p,v),d+=p,p=0;this.setIndex(s),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(h,2));function m(v){const g=l.length/3,x=v.extractPoints(i);let S=x.shape;const E=x.holes;ds.isClockWise(S)===!1&&(S=S.reverse());for(let M=0,y=E.length;M<y;M++){const z=E[M];ds.isClockWise(z)===!0&&(E[M]=z.reverse())}const A=ds.triangulateShape(S,E);for(let M=0,y=E.length;M<y;M++){const z=E[M];S=S.concat(z)}for(let M=0,y=S.length;M<y;M++){const z=S[M];l.push(z.x,z.y,0),c.push(0,0,1),h.push(z.x,z.y)}for(let M=0,y=A.length;M<y;M++){const z=A[M],U=z[0]+g,C=z[1]+g,J=z[2]+g;s.push(U,C,J),p+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),i=this.parameters.shapes;return VC(i,e)}static fromJSON(e,i){const s=[];for(let l=0,c=e.shapes.length;l<c;l++){const h=i[e.shapes[l]];s.push(h)}return new Jc(s,e.curveSegments)}}function VC(o,e){if(e.shapes=[],Array.isArray(o))for(let i=0,s=o.length;i<s;i++){const l=o[i];e.shapes.push(l.uuid)}else e.shapes.push(o.uuid);return e}class kc extends yo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hy,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ic extends kc{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Em extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const mp=new Ze,Yx=new k,Wx=new k;class Gy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gm,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Yx.setFromMatrixPosition(e.matrixWorld),i.position.copy(Yx),Wx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Wx),i.updateMatrixWorld(),mp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mp),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(mp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jx=new Ze,Ml=new k,gp=new k;class XC extends Gy{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,c=e.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Ml.setFromMatrixPosition(e.matrixWorld),s.position.copy(Ml),gp.copy(s.position),gp.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(gp),s.updateMatrixWorld(),l.makeTranslation(-Ml.x,-Ml.y,-Ml.z),jx.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jx)}}class kC extends Em{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new XC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qC extends Gy{constructor(){super(new by(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zx extends Em{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new qC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YC extends Em{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class WC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=Qx();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Qx(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:om}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=om);function io(o,e,i=64){const s=new Zc,l=o/2,c=Math.max(.01,(e-o)/2);return s.absarc(0,c,l,0,Math.PI,!1),s.absarc(0,-c,l,Math.PI,Math.PI*2,!1),s.closePath(),s.getPoints(i),s}function jC(){const o=document.createElement("canvas");o.width=256,o.height=256;const e=o.getContext("2d"),i=e.createRadialGradient(128,128,12,128,128,124);i.addColorStop(0,"rgba(255, 255, 255, 0.92)"),i.addColorStop(.32,"rgba(250, 254, 255, 0.72)"),i.addColorStop(.62,"rgba(230, 248, 255, 0.32)"),i.addColorStop(.85,"rgba(210, 242, 255, 0.08)"),i.addColorStop(1,"rgba(210, 242, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,256,256);const s=new Ly(o);return s.needsUpdate=!0,s}function ZC(){const o=document.createElement("canvas");o.width=128,o.height=128;const e=o.getContext("2d"),i=e.createImageData(128,128);for(let l=0;l<i.data.length;l+=4){const c=120+l*73%31;i.data[l]=c,i.data[l+1]=c,i.data[l+2]=c,i.data[l+3]=255}e.putImageData(i,0,0);const s=new Ly(o);return s.wrapS=Dl,s.wrapT=Dl,s.repeat.set(6,6),s}const QC=({scrollProgress:o,shadeLevel:e,skyPreset:i})=>{const s=qe.useRef(null),l=qe.useRef(o),c=qe.useRef(e),h=qe.useRef(i);return qe.useEffect(()=>{l.current=o},[o]),qe.useEffect(()=>{c.current=e},[e]),qe.useEffect(()=>{h.current=i},[i]),qe.useEffect(()=>{const d=s.current;if(!d)return;const p=new oC,m=new ci(42,window.innerWidth/window.innerHeight,.1,200);m.position.set(0,0,8.2);const v=new rC({antialias:!0,alpha:!0,powerPreference:"high-performance"});v.setSize(window.innerWidth,window.innerHeight),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.toneMapping=ty,v.toneMappingExposure=1.08,d.appendChild(v.domElement);const g=new YC(14412542,1.35);p.add(g);const x=new Zx(16777215,2.2);x.position.set(-2.5,4.2,6.5),p.add(x);const S=new Zx(6872319,1.45);S.position.set(2.8,-3,4),p.add(S);const E=new kC(45823,1.8,14);E.position.set(0,0,1.2),p.add(E);const A=new Qs;p.add(A);const M=jC(),y=[];[{x:-5.8,y:-1.6,z:-2.5,s:5.2,speed:.14},{x:-4.6,y:-2.1,z:-2.2,s:4.6,speed:.16},{x:-6.4,y:-.4,z:-2.8,s:4.9,speed:.12},{x:-3.5,y:-2.6,z:-2.6,s:4,speed:.18},{x:-5.2,y:-1.1,z:-1.8,s:3.8,speed:.15},{x:5.9,y:-1.2,z:-2.3,s:5,speed:.13},{x:6.6,y:.8,z:-2.7,s:4.8,speed:.15},{x:4.8,y:-1.9,z:-2.4,s:4.3,speed:.17},{x:5.4,y:2.2,z:-3.1,s:4.5,speed:.11},{x:6.2,y:-.2,z:-1.9,s:3.9,speed:.14},{x:-5.5,y:2.9,z:-3.4,s:3.6,speed:.1},{x:-4.2,y:2.6,z:-3.8,s:3.2,speed:.09},{x:-1.4,y:-1.9,z:-6.5,s:3.4,speed:.08},{x:1.6,y:-1.7,z:-6.8,s:3.6,speed:.07},{x:.2,y:-2.4,z:-6.2,s:4.2,speed:.09},{x:-2.2,y:1.5,z:-7.5,s:3,speed:.06},{x:2.4,y:1.8,z:-7.2,s:3.2,speed:.08}].forEach((Nt,Ut)=>{for(let oe=0;oe<2;oe++){const At=new Ny({map:M,color:16777215,transparent:!0,opacity:oe===0?.86:.62,depthWrite:!1}),Xt=new uC(At),Kt=oe===0?0:Ut%2===0?.65:-.65,Jt=oe===0?0:Ut%3===0?.42:-.35,qt=Nt.x+Kt,de=Nt.y+Jt,ce=Nt.z-oe*.25,Ne=Nt.s*(oe===0?1:.78);Xt.position.set(qt,de,ce),Xt.scale.set(Ne*1.25,Ne*.92,1),A.add(Xt),y.push({sprite:Xt,baseX:qt,baseY:de,baseZ:ce,speed:Nt.speed,scale:Ne,phase:Ut*.9+oe*1.4})}});const U=new Qs;p.add(U);const C=ZC(),J=new ro;J.moveTo(-22,-16),J.lineTo(22,-16),J.lineTo(22,16),J.lineTo(-22,16),J.closePath();const H=io(2.96,4.18,96);J.holes.push(H);const L=new Jc(J,64),B=new kc({color:1513759,roughness:.88,metalness:.08,bumpMap:C,bumpScale:.015,transparent:!0,opacity:1}),N=new Mn(L,B);N.position.z=-.18,U.add(N);const w=new ro(io(4.25,5.48,96).getPoints(96)),F=io(2.92,4.14,96);w.holes.push(F);const rt={depth:.34,bevelEnabled:!0,bevelSegments:24,steps:2,bevelSize:.32,bevelThickness:.28,curveSegments:96},nt=new Kc(w,rt);nt.center();const ct=new Ic({color:14474719,roughness:.32,metalness:.08,clearcoat:.45,clearcoatRoughness:.28,bumpMap:C,bumpScale:.004,transparent:!0,opacity:1}),ft=new Mn(nt,ct);ft.position.z=.08,U.add(ft);const V=new ro(io(3.22,4.44,96).getPoints(96)),it=io(2.68,3.88,96);V.holes.push(it);const Z=new Kc(V,{depth:.24,bevelEnabled:!0,bevelSegments:16,steps:1,bevelSize:.11,bevelThickness:.14,curveSegments:96});Z.center();const xt=new Ic({color:16251387,roughness:.18,metalness:.05,clearcoat:.75,clearcoatRoughness:.15,transparent:!0,opacity:1}),Tt=new Mn(Z,xt);Tt.position.z=.14,U.add(Tt);const zt=new Qs;U.add(zt);const se=new Hl(3.2,4.4),ge=new kc({color:14212322,roughness:.45,metalness:.05,transparent:!0,opacity:.96}),D=new Mn(se,ge);D.position.set(0,4.15,.12),zt.add(D);const Y=new Sm(1.18,1.28,.26,48);Y.scale(1,1,.32);const _t=new Ic({color:13159634,roughness:.35,metalness:.14,clearcoat:.4,transparent:!0,opacity:1}),ut=new Mn(Y,_t);ut.position.set(0,1.92,.22),zt.add(ut);const Ct=new Qc(.11,.95,16,32);Ct.rotateZ(Math.PI/2),Ct.scale(1,.65,.45);const Pt=new kc({color:9409694,roughness:.55,metalness:.2,transparent:!0,opacity:1}),Ot=new Mn(Ct,Pt);Ot.position.set(0,1.98,.32),zt.add(Ot);const wt=new Qc(.032,.48,8,16);wt.rotateZ(.58);const at=new Wc({color:3883081,transparent:!0,opacity:.72}),bt=new Mn(wt,at);bt.position.set(-1.32,.62,.32),U.add(bt);const I=bt.clone();I.scale.set(.65,.85,1),I.position.set(-1.25,.58,.33),U.add(I);const jt=new ro(io(2.74,3.94,64).getPoints(64)),Et=new Jc(jt,48),Lt=new Ic({color:16777215,transparent:!0,opacity:.07,roughness:.05,metalness:.1,transmission:.85,reflectivity:.9}),yt=new Mn(Et,Lt);yt.position.z=.25,U.add(yt);const te=new Mm(.015,.028,24),Ft=new Wc({color:16777215,transparent:!0,opacity:.55}),O=new Mn(te,Ft);O.position.set(0,-1.72,.26),U.add(O);const b={x:0,y:0,targetX:0,targetY:0},et=Nt=>{b.targetX=(Nt.clientX/window.innerWidth-.5)*2,b.targetY=-(Nt.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",et,{passive:!0});const dt=()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",dt);let Mt=0;const gt=new WC,Zt=()=>{Mt=requestAnimationFrame(Zt);const Nt=gt.getElapsedTime(),Ut=Id.clamp(l.current,0,1),oe=Id.clamp(c.current,0,.85);b.x+=(b.targetX-b.x)*.06,b.y+=(b.targetY-b.y)*.06;const At=oe*3.1;zt.position.y=-At;const Xt=1+Math.pow(Ut,1.65)*7.5;U.scale.set(Xt,Xt,1+Ut*1.5),U.rotation.y=b.x*.08*(1-Ut),U.rotation.x=-b.y*.06*(1-Ut);const Kt=Id.clamp(1-(Ut-.36)*2.6,0,1);B.opacity=Kt,ct.opacity=Kt,xt.opacity=Kt,_t.opacity=Kt,Pt.opacity=Kt,ge.opacity=Kt*.96,at.opacity=Kt*.72,U.visible=Kt>.005,y.forEach(Jt=>{const qt=Math.sin(Nt*Jt.speed+Jt.phase)*.45,de=Math.cos(Nt*(Jt.speed*.8)+Jt.phase)*.18;Jt.sprite.position.x=Jt.baseX+qt+b.x*.35,Jt.sprite.position.y=Jt.baseY+de+b.y*.22,Jt.sprite.position.z=Jt.baseZ+Ut*1.35}),h.current==="golden"?E.color.setHex(3718648):h.current==="aurora"?E.color.setHex(3003583):E.color.setHex(45823),v.render(p,m)};return Zt(),()=>{cancelAnimationFrame(Mt),window.removeEventListener("mousemove",et),window.removeEventListener("resize",dt),v.domElement&&d.contains(v.domElement)&&d.removeChild(v.domElement),v.dispose()}},[]),vt.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-10","aria-hidden":"true"})},ao=[{id:"reverie-prime",quote:'"Stepping into it was effortless and the worlds have been unlike anything I dreamt."',worldTitle:"Cloud Sanctuary 01",author:"Elena Vance — Creative Director",coordinates:"ALT 34,000 FT / SECTOR A-1"},{id:"horizon-echo",quote:'"I finally feel immersed, like the worlds were built just for me."',worldTitle:"Solstice Archipelago",author:"Marcus Sterling — World Architect",coordinates:"ALT 36,500 FT / SECTOR B-4"},{id:"wonder-tear",quote:'"The wonder of it all really moved me and brought a tear to my eye."',worldTitle:"Aetherial Spire",author:"Sora Takahashi — Narrative Designer",coordinates:"ALT 38,200 FT / SECTOR C-9"},{id:"horizon-feel",quote:'"It is amazing to see and feel the worlds I am stepping into each day."',worldTitle:"Luminance Drift",author:"Julian Mercer — Spatial Lead",coordinates:"ALT 35,100 FT / SECTOR D-2"},{id:"living-scale",quote:'"Every portal transition responds at 60fps with zero visual seams."',worldTitle:"Stratus Citadel",author:"Clara Lindqvist — Principal Engineer",coordinates:"ALT 39,000 FT / SECTOR E-7"}],El={cerulean:{name:"Cerulean Stratosphere",gradient:"linear-gradient(180deg, #00A6FF 0%, #19BEFF 52%, #4DD5FF 100%)",accent:"#00B2FF",description:"High-altitude midday azure sky with volumetric cumulus banks."},golden:{name:"Alpenglow Horizon",gradient:"linear-gradient(180deg, #0284C7 0%, #38BDF8 55%, #BAE6FD 100%)",accent:"#38BDF8",description:"Crisp glacial horizon with bright atmospheric scattering."},aurora:{name:"Cyan Ionosphere",gradient:"linear-gradient(180deg, #0088E0 0%, #00B8FF 52%, #6CE5FF 100%)",accent:"#00C8FF",description:"Deep upper-troposphere luminance with crystalline cloud drift."}};function KC(){const[o,e]=qe.useState(0),[i,s]=qe.useState(0),[l,c]=qe.useState(0),[h,d]=qe.useState("cerulean"),[p,m]=qe.useState(!1),[v,g]=qe.useState(!1),[x,S]=qe.useState(null),[E,A]=qe.useState(!1);qe.useEffect(()=>{const L=()=>{const B=Math.max(1,document.documentElement.scrollHeight-window.innerHeight),N=Math.min(1,Math.max(0,window.scrollY/B));e(N)};return window.addEventListener("scroll",L,{passive:!0}),L(),()=>window.removeEventListener("scroll",L)},[]);const M=qe.useCallback(L=>{const B=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:L*B,behavior:"smooth"})},[]),y=qe.useCallback(()=>{s(L=>(L-1+ao.length)%ao.length)},[]),z=qe.useCallback(()=>{s(L=>(L+1)%ao.length)},[]);qe.useEffect(()=>{const L=B=>{B.key==="ArrowLeft"&&y(),B.key==="ArrowRight"&&z()};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[y,z]);const U=Math.max(0,Math.min(1,1-o*2.5)),C=o*-48,J=Math.max(0,Math.min(1,(o-.42)*2.1)),H=o>.5;return vt.jsxs("div",{className:"relative min-h-[260vh] select-none",children:[vt.jsx("div",{className:"fixed inset-0 z-0 transition-all duration-700",style:{background:El[h].gradient},children:vt.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(circle at 50% 46%, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.12) 32%, transparent 65%)"}})}),vt.jsx("div",{className:"fixed inset-0 z-[5] pointer-events-none cabin-wall-texture transition-opacity duration-150",style:{opacity:Math.max(0,Math.min(1,1-(o-.25)*2.2)),WebkitMaskImage:"radial-gradient(ellipse 145px 215px at 50% 49.5%, transparent 94%, black 100%)",maskImage:"radial-gradient(ellipse 145px 215px at 50% 49.5%, transparent 94%, black 100%)"}}),vt.jsx("div",{className:"fixed inset-0 z-[6] pointer-events-none flex items-center justify-center",style:{opacity:Math.max(0,Math.min(1,1-o*2.3)),transform:`scale(${1+Math.pow(o,1.65)*6.5})`},children:vt.jsx("div",{className:"w-[410px] h-[540px] sm:w-[465px] sm:h-[605px] rounded-full",style:{boxShadow:"0 36px 85px 28px rgba(0, 0, 0, 0.82), 0 8px 30px 6px rgba(0, 0, 0, 0.65)"}})}),vt.jsx(QC,{scrollProgress:o,shadeLevel:l,skyPreset:h}),vt.jsxs("header",{className:"fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 py-6 flex items-center justify-between",children:[vt.jsxs("button",{onClick:()=>M(0),className:"group flex items-baseline text-white focus:outline-none cursor-pointer","aria-label":"Auragate Home",children:[vt.jsx("span",{className:"font-script text-3xl sm:text-[34px] leading-none tracking-normal drop-shadow-sm",children:"Aura"}),vt.jsx("span",{className:"text-lg sm:text-[19px] font-medium tracking-tight -ml-0.5 drop-shadow-sm",children:"gate"})]}),vt.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3",children:[vt.jsxs("div",{className:"hidden md:flex items-center bg-black/25 backdrop-blur-md border border-white/20 rounded-full p-1 text-[11px] font-medium text-white",children:[vt.jsx("button",{onClick:()=>M(0),className:`px-3 py-1 rounded-full transition cursor-pointer ${o<.45?"bg-white text-slate-900 font-semibold shadow-sm":"text-white/85 hover:text-white"}`,children:"Cabin Portal"}),vt.jsx("button",{onClick:()=>M(1),className:`px-3 py-1 rounded-full transition cursor-pointer ${o>=.45?"bg-white text-slate-900 font-semibold shadow-sm":"text-white/85 hover:text-white"}`,children:"Sky Horizon"})]}),vt.jsx("button",{onClick:()=>m(!0),className:"bg-white hover:bg-slate-50 text-slate-900 px-5 py-2.5 rounded-full text-xs font-semibold shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer",children:"Watch Demo"}),vt.jsxs("button",{onClick:()=>g(!0),"aria-label":"Open Studio Controls Menu",className:"w-10 h-10 rounded-full bg-white hover:bg-slate-50 text-slate-900 flex flex-col items-center justify-center gap-[4px] shadow-lg transition transform hover:scale-105 cursor-pointer",children:[vt.jsx("span",{className:"w-3.5 h-[1.6px] bg-slate-900 rounded-full"}),vt.jsx("span",{className:"w-3.5 h-[1.6px] bg-slate-900 rounded-full"})]})]})]}),vt.jsx("section",{className:"fixed inset-0 z-20 pointer-events-none flex flex-col justify-end px-6 sm:px-10 pb-8 sm:pb-11",style:{opacity:U,transform:`translateY(${C}px)`,visibility:U<=.01?"hidden":"visible"},children:vt.jsxs("div",{className:"w-full flex flex-col md:flex-row md:items-end justify-between gap-8",children:[vt.jsxs("div",{className:"max-w-lg pointer-events-auto",children:[vt.jsxs("h1",{className:"leading-[1.06] tracking-tight text-white",children:[vt.jsxs("span",{className:"block",children:[vt.jsx("span",{className:"font-script text-5xl sm:text-[64px] text-white/75 font-normal mr-3",children:"Discover"}),vt.jsx("span",{className:"text-4xl sm:text-[54px] font-light text-white",children:"Living"})]}),vt.jsx("span",{className:"block text-4xl sm:text-[54px] font-light text-white mt-0.5",children:"Digital Worlds"}),vt.jsx("span",{className:"block text-4xl sm:text-[54px] font-normal text-white mt-0.5",children:"Vivid, Alive, Endless"})]}),vt.jsx("p",{className:"text-xs sm:text-[13px] text-white/55 max-w-[310px] mt-5 leading-relaxed font-normal",children:"Experience immersive worlds with stories that blur the line between imagination, AI and living reality made for you."}),vt.jsxs("div",{className:"mt-5 flex flex-wrap items-center gap-3",children:[vt.jsxs("button",{onClick:()=>M(1),className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white/90 backdrop-blur-md transition cursor-pointer",children:[vt.jsx(PE,{className:"w-3.5 h-3.5 text-[#38CEFF]"}),vt.jsx("span",{children:"Enter Portal Window"})]}),vt.jsxs("button",{onClick:()=>c(L=>L>.2?0:.45),className:"inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-[11px] text-white/75 transition cursor-pointer",children:[vt.jsx(VE,{className:"w-3 h-3 text-white/70"}),vt.jsx("span",{children:l>.2?"Raise Shade":"Pull Shade"})]})]})]}),vt.jsxs("div",{className:"flex items-center gap-3.5 pointer-events-auto self-start md:self-end",children:[vt.jsx("span",{className:"font-script text-5xl sm:text-[56px] leading-none text-white select-none","aria-hidden":"true",children:"a."}),vt.jsx("p",{className:"text-[11px] text-white/60 max-w-[155px] leading-[1.45]",children:"A studio is a trusted partner in your journey through wonderland."})]})]})}),vt.jsxs("section",{className:`fixed inset-0 z-30 flex flex-col justify-between pt-24 pb-5 px-6 sm:px-10 transition-opacity duration-300 ${H?"pointer-events-auto":"pointer-events-none"}`,style:{opacity:J,visibility:J<=.01?"hidden":"visible"},children:[vt.jsxs("div",{className:"relative flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto",children:[vt.jsx("div",{className:"relative w-full h-[420px] sm:h-[460px] flex items-center justify-center",style:{perspective:"1600px"},children:[-2,-1,0,1,2].map(L=>{const B=(i+L+ao.length)%ao.length,N=ao[B],w=L===0,F=Math.abs(L)===1,rt=L*255,nt=Math.abs(L)===1?22:Math.abs(L)===2?78:0,ct=L*8.5,ft=L*-6,V=w?1:F?.94:.88,it=30-Math.abs(L)*5,Z=w?"auragate-glass-card-active text-slate-800":F?"auragate-glass-card-side text-white/90":"auragate-glass-card-far text-white/60";return vt.jsxs("div",{onClick:()=>{L!==0&&s(B)},role:"button",tabIndex:0,onKeyDown:xt=>{(xt.key==="Enter"||xt.key===" ")&&s(B)},"aria-label":`World testimonial: ${N.worldTitle}`,className:`absolute w-[265px] sm:w-[315px] h-[365px] sm:h-[420px] rounded-[28px] p-7 sm:p-9 flex flex-col justify-center items-center text-center transition-all duration-500 ease-out cursor-pointer ${Z}`,style:{transform:`translate3d(${rt}px, ${nt}px, 0) rotateZ(${ct}deg) rotateY(${ft}deg) scale(${V})`,zIndex:it},children:[vt.jsx("div",{className:`text-[10px] uppercase tracking-[0.18em] mb-4 font-semibold transition-opacity ${w?"text-sky-700/75 opacity-100":"text-white/50 opacity-75"}`,children:N.worldTitle}),vt.jsx("p",{className:`text-[15px] sm:text-[17px] leading-[1.55] font-normal max-w-[235px] ${w?"text-slate-800 font-medium":F?"text-white/90":"text-white/65"}`,children:N.quote}),vt.jsx("div",{className:`mt-6 text-[11px] transition-opacity ${w?"text-slate-600 opacity-90":"text-white/55 opacity-70"}`,children:N.author})]},`${N.id}-${L}`)})}),vt.jsxs("div",{className:"mt-4 flex items-center gap-3 z-40",children:[vt.jsx("button",{onClick:y,"aria-label":"Previous World Testimonial",className:"w-11 h-11 rounded-full bg-white/30 hover:bg-white/45 border border-white/55 text-white flex items-center justify-center backdrop-blur-md transition transform hover:scale-105 active:scale-95 cursor-pointer",children:vt.jsx(IE,{className:"w-4 h-4"})}),vt.jsx("button",{onClick:z,"aria-label":"Next World Testimonial",className:"w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-900 flex items-center justify-center shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer",children:vt.jsx(BE,{className:"w-4 h-4"})})]})]}),vt.jsxs("footer",{className:"w-full flex items-center justify-between text-xs text-white/85 pt-2 z-40",children:[vt.jsx("button",{onClick:()=>M(0),className:"font-script text-3xl text-white/90 hover:text-white cursor-pointer",title:"Return to Cabin Window",children:"a."}),vt.jsxs("nav",{className:"flex items-center gap-12 sm:gap-24 text-[12px] font-medium text-white/85",children:[vt.jsx("button",{onClick:()=>S("explore"),className:"hover:text-white transition cursor-pointer",children:"Explore"}),vt.jsx("button",{onClick:()=>S("contact"),className:"hover:text-white transition cursor-pointer",children:"Contact"}),vt.jsx("button",{onClick:()=>S("legal"),className:"hover:text-white transition cursor-pointer",children:"Legal"})]}),vt.jsx("div",{className:"w-8"})]})]}),p&&vt.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xl flex items-center justify-center p-4",children:vt.jsxs("div",{className:"relative w-full max-w-2xl rounded-3xl bg-[#16181D] border border-white/15 p-6 sm:p-8 text-white shadow-2xl",children:[vt.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10",children:[vt.jsxs("div",{className:"flex items-center gap-2.5",children:[vt.jsx(G_,{className:"w-5 h-5 text-[#00B2FF]"}),vt.jsx("h2",{className:"text-lg font-semibold",children:"Auragate Reverie Engine — Interactive Portal Demo"})]}),vt.jsx("button",{onClick:()=>m(!1),"aria-label":"Close Watch Demo Modal",className:"w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 cursor-pointer",children:vt.jsx(zd,{className:"w-4 h-4"})})]}),vt.jsx("div",{className:"mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:Object.keys(El).map(L=>{const B=El[L],N=h===L;return vt.jsxs("button",{onClick:()=>d(L),className:`text-left p-4 rounded-2xl border transition cursor-pointer ${N?"bg-white/15 border-[#38CEFF] shadow-lg":"bg-white/5 border-white/10 hover:bg-white/10"}`,children:[vt.jsx("div",{className:"w-full h-16 rounded-xl mb-3 border border-white/20",style:{background:B.gradient}}),vt.jsx("div",{className:"text-xs font-semibold text-white",children:B.name}),vt.jsx("p",{className:"text-[11px] text-white/60 mt-1 leading-relaxed",children:B.description})]},L)})}),vt.jsxs("div",{className:"mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[vt.jsxs("div",{children:[vt.jsx("div",{className:"text-xs font-semibold text-white",children:"Real-Time Portal Telemetry"}),vt.jsx("p",{className:"text-[11px] text-white/60 mt-0.5",children:"Scroll or click below to fly the camera through the 3D molded cabin aperture into the live cloud carousel."})]}),vt.jsxs("div",{className:"flex items-center gap-2.5",children:[vt.jsx("button",{onClick:()=>{m(!1),M(0)},className:"px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white cursor-pointer",children:"Cabin Window"}),vt.jsxs("button",{onClick:()=>{m(!1),M(1)},className:"px-4 py-2 rounded-full bg-[#00B2FF] hover:bg-[#38CEFF] text-xs font-semibold text-slate-950 flex items-center gap-1.5 cursor-pointer",children:[vt.jsx(GE,{className:"w-3.5 h-3.5 fill-current"}),vt.jsx("span",{children:"Fly Into Sky"})]})]})]})]})}),v&&vt.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex justify-end",children:vt.jsxs("div",{className:"w-full max-w-sm bg-[#16181D] border-l border-white/15 h-full p-7 flex flex-col justify-between text-white shadow-2xl",children:[vt.jsxs("div",{children:[vt.jsxs("div",{className:"flex items-center justify-between pb-5 border-b border-white/10",children:[vt.jsxs("div",{className:"flex items-baseline",children:[vt.jsx("span",{className:"font-script text-3xl",children:"Aura"}),vt.jsx("span",{className:"text-base font-medium -ml-0.5",children:"gate"})]}),vt.jsx("button",{onClick:()=>g(!1),"aria-label":"Close Menu",className:"w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer",children:vt.jsx(zd,{className:"w-4 h-4"})})]}),vt.jsxs("div",{className:"mt-6",children:[vt.jsxs("label",{className:"text-xs uppercase tracking-wider text-white/50 font-semibold block mb-2",children:["3D Cabin Window Shade (",Math.round(l*100),"%)"]}),vt.jsx("input",{type:"range",min:0,max:.85,step:.01,value:l,onChange:L=>c(parseFloat(L.target.value)),className:"w-full accent-[#00B2FF] cursor-pointer"})]}),vt.jsxs("div",{className:"mt-6",children:[vt.jsx("div",{className:"text-xs uppercase tracking-wider text-white/50 font-semibold mb-2.5",children:"Atmosphere Horizon"}),vt.jsx("div",{className:"space-y-2",children:Object.keys(El).map(L=>vt.jsxs("button",{onClick:()=>d(L),className:`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs border transition cursor-pointer ${h===L?"bg-[#00B2FF]/20 border-[#00B2FF] text-white font-semibold":"bg-white/5 border-white/10 text-white/75 hover:bg-white/10"}`,children:[vt.jsx("span",{children:El[L].name}),vt.jsx(HE,{className:"w-3.5 h-3.5"})]},L))})]}),vt.jsxs("div",{className:"mt-7 space-y-2 border-t border-white/10 pt-5",children:[vt.jsxs("button",{onClick:()=>{g(!1),M(0)},className:"w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-sm font-medium flex items-center justify-between cursor-pointer",children:[vt.jsx("span",{children:"01 / Cabin Portal Hero"}),vt.jsx(FE,{className:"w-4 h-4 text-[#38CEFF]"})]}),vt.jsxs("button",{onClick:()=>{g(!1),M(1)},className:"w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-sm font-medium flex items-center justify-between cursor-pointer",children:[vt.jsx("span",{children:"02 / Sky Cloud Testimonials"}),vt.jsx(G_,{className:"w-4 h-4 text-[#38CEFF]"})]}),vt.jsxs("button",{onClick:()=>A(L=>!L),className:"w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-sm font-medium flex items-center justify-between cursor-pointer",children:[vt.jsxs("span",{children:["Cabin Stratosphere Audio (",E?"Active":"Muted",")"]}),E?vt.jsx(XE,{className:"w-4 h-4 text-[#00B2FF]"}):vt.jsx(kE,{className:"w-4 h-4 text-white/50"})]})]})]}),vt.jsx("div",{className:"text-[11px] text-white/45 border-t border-white/10 pt-4",children:"Auragate Spatial Portal Engine — Real-time Three.js WebGL"})]})}),x&&vt.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4",children:vt.jsxs("div",{className:"w-full max-w-md rounded-3xl bg-[#16181D] border border-white/15 p-6 text-white shadow-2xl",children:[vt.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[vt.jsxs("h3",{className:"text-base font-semibold capitalize",children:["Auragate — ",x]}),vt.jsx("button",{onClick:()=>S(null),className:"w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer",children:vt.jsx(zd,{className:"w-4 h-4"})})]}),vt.jsxs("p",{className:"text-xs text-white/70 mt-4 leading-relaxed",children:[x==="explore"&&"Browse 5 curated spatial worlds crafted with volumetric cloud rendering, real-time horizon physics, and seamless 60fps portal transitions.",x==="contact"&&"Partner with A. Studio to architect custom spatial portals and interactive 3D world experiences for your brand.",x==="legal"&&"All spatial environments, volumetric shaders, and interactive portal architectures are rendered in real time via WebGL."]}),vt.jsx("div",{className:"mt-5 flex justify-end",children:vt.jsx("button",{onClick:()=>S(null),className:"px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-semibold cursor-pointer",children:"Close"})})]})})]})}UE.createRoot(document.getElementById("root")).render(vt.jsx(qe.StrictMode,{children:vt.jsx(KC,{})}));
