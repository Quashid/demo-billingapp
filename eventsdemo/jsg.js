var events=require("events");

 var emitterObj=new events.EventEmitter();

 var click=function()
 {
     console.log("User Clicked...");
 }
 var doubleClick=function()
 {
     console.log("User Performed Double Clicked...");
 }
 
 emitterObj.addListener("sClick",click);
emitterObj.on("dClick",doubleClick);

emitterObj.emit("sClick");//event performed/Fired
emitterObj.emit("dClick");
emitterObj.emit("sClick");//event performed/Fired
emitterObj.emit("sClick");//event performed/Fired

var signupFx=function()
{
    console.log("Signup once with ur mobile number");
}

emitterObj.once("doSignup",signupFx);


//use if else to make sure the event fired/worked or not
if(emitterObj.emit("doSignup"))
    {
        console.log("Successful");
    }
else
    console.log("Sorrryyyy");

if(emitterObj.emit("doSignup"))
    {
        console.log("Successful");
    }
    else
    console.log("Sorrryyyy");

    
//---------------------getting all events------
//emitterObj.listeners