//using prependOnceListener() method 
var events=require("events");

var emitter=new events.EventEmitter();


emitter.once("event1",function(){
    console.log("Hello");
});

emitter.prependOnceListener("event1",function(){
    console.log("\nPrepend listener");
});

emitter.emit("event1");