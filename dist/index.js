"use strict";var o=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var E=o(function(A,l){
var O=require('@stdlib/math-base-assert-is-infinitef/dist'),c=require('@stdlib/math-base-assert-is-nanf/dist'),p=require('@stdlib/math-base-special-log1pf/dist'),u=require('@stdlib/math-base-special-sqrtf/dist'),N=require('@stdlib/constants-float32-ln-two/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),t=require('@stdlib/math-base-special-lnf/dist'),R=e(0),s=e(1),n=e(2),q=e(1<<28),g=e(s/q);function Z(r){var i,v,f,a;return r=e(r),c(r)||O(r)?r:(r<R&&(r=e(-r),i=!0),r<g?a=r:r>q?a=e(t(r)+N):r>n?(v=e(r*r),f=u(e(v+s)),a=t(e(e(n*r)+e(s/e(f+r))))):(v=e(r*r),f=u(e(s+v)),a=p(e(e(r)+e(v/e(s+f))))),i?-a:a)}l.exports=Z
});var h=E();module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
