// var server= require("./literals");//./ current directory
// console.log(server);//localhost

//====================
// var expoObj=require("./adding-litfx");//got the reference of whole module.exports object
// console.log(expoObj.port);
// expoObj.connectToServer(1011);
// //====================
// var {port,connectToServer}=require("./adding-litfx");
// console.log("port="+port);
// connectToServer(1023);
///===================
// var myobj= require("./export-myobj");
// myobj.login("Admin","123");
//=-=-=-=-=-=-=-=-=-=-=

//var serverConnection=require("./export-fx");
//serverConnection();
//=-=-=-=============================
// var Product=require("./export-class");
// var lap=new Product();
// lap.setData("Laptop",60000,10);
// lap.billing();
//-=-=-==-==-=-=-=-=-=-=-=-=-=-Concised way=====
var consObj=require("./export-concisely");
console.log(consObj.uid,consObj.pwd);
consObj.signup();
consObj.login();
var {signup}=consObj;
signup();