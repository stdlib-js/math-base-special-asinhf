"use strict";var o=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(a){throw (i=0, a)}};};var E=o(function(A,l){
var O=require('@stdlib/math-base-assert-is-infinitef/dist'),c=require('@stdlib/math-base-assert-is-nanf/dist'),p=require('@stdlib/math-base-special-log1pf/dist'),u=require('@stdlib/math-base-special-sqrtf/dist'),N=require('@stdlib/constants-float32-ln-two/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),t=require('@stdlib/math-base-special-lnf/dist'),R=e(0),s=e(1),n=e(2),q=e(1<<28),g=e(s/q);function Z(r){var i,a,f,v;return r=e(r),c(r)||O(r)?r:(r<R&&(r=e(-r),i=!0),r<g?v=r:r>q?v=e(t(r)+N):r>n?(a=e(r*r),f=u(e(a+s)),v=t(e(e(n*r)+e(s/e(f+r))))):(a=e(r*r),f=u(e(s+a)),v=p(e(e(r)+e(a/e(s+f))))),i?-v:v)}l.exports=Z
});var h=E();module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
