/*!
* JSON-fp
* authors: Ben Lue
* license: GPL 2.0
* Copyright(c) 2015 Gocharm Inc.
*/
var  _ = require('lodash');

var  arrays = {},
     jsonfp;

arrays.install = function(jfp)  {
    jsonfp = jfp;
	jsonfp.addMethod('compact', doCompact);
    jsonfp.addMethod('difference', doDifference);
    jsonfp.addMethod('flatten', doFlatten);
    jsonfp.addMethod('head', doHead);
    jsonfp.addMethod('intersection', doIntersection);
	jsonfp.addMethod('take', doTake);
    jsonfp.addMethod('tail', doTail);
    jsonfp.addMethod('union', doUnion);
	jsonfp.addMethod('zipObject', doZipObject);
};

module.exports = arrays;

function doCompact(input, diff)  {
    return _.compact(input);
};


function doDifference(input, diff)  {
    return _.difference(input, diff);
};


function  doFlatten(input, isDeep) {
    return  _.flatten(input, isDeep);
};


function  doHead(input, option) {
    return  _.first(input);
};


function doIntersection(input, another)  {
    return _.intersection(input, another);
};


function doTake(input, count)  {
    return  _.take(input, count);
};


function doTail(input, option)  {
    return  _.tail(input);
};


function doUnion(input, another)  {
    return _.union(input, another);
};


function doZipObject(input, params) {
    return  _.zipObject(input, params);
};