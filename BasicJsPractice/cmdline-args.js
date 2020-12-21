
// var args=process.argv.slice(2);
// console.log(args);
// args.forEach(element => {
//     console.log(element);
// });
//---------------------
//we need module:minimist
var minFx=require("minimist");//itreturns a fx Ref
var ary=process.argv.slice(2);
console.log(ary);
var obj=minFx(ary);//it converts the array in object
console.log(obj);
console.log(obj.uid+"   "+obj.pwd);//need to pass as node cmdline-args.js --uid=Admin --pwd=Admin@123
