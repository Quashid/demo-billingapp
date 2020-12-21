//... spread operator is used for copying the arrays and objects
/*var techs=["Java","Nodejs","React"];

var copyTechs=["C++",...techs,"J2EE"];
//var copyTechs=["C++"].concat(...techs,["J2EE"]);
console.log(copyTechs);

function getData()
{
    return ["Laptop","80000"];
}
var [item,price]=getData();
console.log(item,price);
//-----------------------------
var config={
    uid:"Admin123", //des:src
    pwd:"123",
    mob:"9872246056"
};
var {uid,pwd}=config;
console.log(uid,pwd);

//src:des
 var {uid:user,pwd:password}=config;
 console.log(user,password,uid,pwd);
 //-------------------------------------
*/
//  function shopping()
//  {
//      return (
//          {
//              price:50000,
//              qty:10,
//              billing:function(p,q)
//              {
//                     console.log(p*q);
//              }
//          }
//      );
//  }
//  var {price,qty,billing:printBill}=shopping();
//  //var obj=shopping();
//  printBill(price,qty);

 //---------- Nested Destructuring--------
 /*
 var database={
     port:3306,
     db:"realjava",
     loginCred:{
         uid:"banglore",
         pwd:"computer",
         doLogin:function()
         {
                console.log("Login Processed here");
         }

     }
 }

 var {loginCred:{doLogin:kashidFx}}=database;
 kashidFx();
 */

var s1=new String("java");
var s2={
    a:4
}
 var techs=[s2];
 var cpy=[...techs];
 cpy[0].a=10;
 console.log(techs[0].a);
 
// //-----Concise Properties and Methods----
// var uid="banglore";
// var pwd="computer";
// var signup=function(){
//     console.log("signup");
// }
// var loginCred={
// uid,
// pwd,
// site:"www.bangloreCOmputerEducation.com",
// doLogin:function()
// {
//        console.log("Login Processed here");
// },
// signup
// }
// function showDetails(  {site,doLogin,signup,uid}  )
// {
// console.log(site,uid);
// doLogin();
// signup();
// }
// showDetails(loginCred);