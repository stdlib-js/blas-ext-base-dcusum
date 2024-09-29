"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=t(function(A,c){
var l=require('@stdlib/blas-ext-base-dcusumkbn/dist').ndarray;function R(e,r,i,u,s,a,x,j){return l(e,r,i,u,s,a,x,j)}c.exports=R
});var o=t(function(B,d){
var q=require('@stdlib/strided-base-stride2offset/dist'),_=n();function b(e,r,i,u,s,a){return _(e,r,i,u,q(e,u),s,a,q(e,a))}d.exports=b
});var f=t(function(C,y){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=o(),E=n();k(m,"ndarray",E);y.exports=m
});var O=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=f(),v,p=g(O(__dirname,"./native.js"));h(p)?v=w:v=p;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
