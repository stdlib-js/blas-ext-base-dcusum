"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=t(function(z,c){
var j=require('@stdlib/blas-ext-base-dcusumkbn/dist');function b(e,r,u,i,s,a){return j(e,r,u,i,s,a)}c.exports=b
});var q=t(function(A,d){
var k=require('@stdlib/blas-ext-base-dcusumkbn/dist').ndarray;function l(e,r,u,i,s,a,x,f){return k(e,r,u,i,s,a,x,f)}d.exports=l
});var p=t(function(B,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=v(),_=q();R(m,"ndarray",_);o.exports=m
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),n,y=O(E(__dirname,"./native.js"));g(y)?n=h:n=y;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
