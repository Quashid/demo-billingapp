var events=require("events");

 var emitterObj=new events.EventEmitter();

 var signup=function(uid,pwd)
 {
     console.log("Signed Up SUccessfully with:"+uid+"  and "+pwd);
 }
 var login=function(uid,pwd)
 {
     console.log("Login successfully also:"+uid+"  and "+pwd);
 }

 emitterObj.on("dashboard",signup);
 emitterObj.on("dashboard",login);
 
 emitterObj.on("signup",signup);
emitterObj.emit("signup","Sun-Soft Technologies","Bathinda-Punjab");


 emitterObj.emit("dashboard","banglore","Computers");//with parameters

 var all=emitterObj.listeners("dashboard");

 console.log("==================")
 all.forEach(element => {
     console.log("Name="+element.name+"  Code:"+ element.toString());
 });
//  //==========================----------
 var namesAry=emitterObj.eventNames();
 console.log(namesAry);