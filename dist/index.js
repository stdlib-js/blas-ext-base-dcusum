"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var n=t(function(A,c){
var l=require('@stdlib/blas-ext-base-dcusumkbn/dist').ndarray;function R(e,r,u,a,s,i,x,j){return l(e,r,u,a,s,i,x,j)}c.exports=R
});var o=t(function(B,d){
var q=require('@stdlib/strided-base-stride2offset/dist'),_=n();function b(e,r,u,a,s,i){return _(e,r,u,a,q(e,a),s,i,q(e,i))}d.exports=b
});var f=t(function(C,y){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=o(),E=n();k(m,"ndarray",E);y.exports=m
});var O=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=f(),v,p=g(O(__dirname,"./native.js"));h(p)?v=w:v=p;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
