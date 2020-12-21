
console.log("statement 1");


//setInterval(call back function,duration);


// setInterval(function(){
//     console.log("hello");
// },2000); 

function doTask()
{
    var dt=new Date();
    var curTime=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
    console.log(curTime);
}

var ref=setInterval(doTask,1000);

console.time("myTimer");
//                         argument to stopTimer 
setTimeout(stopTimer,4000,"myTimer");

function stopTimer(str){
    clearInterval(ref);
    console.timeEnd(str);

}



//netTick() is having top priority over setImmediate() and setInterval())
// console.log("Hello Programmers");//1

// var ref=setInterval(function(){
//     console.log("its interval");
// },0);
// setImmediate(function(){    //2
//     console.log("Immediate-1");
//     clearInterval(ref);
// })

// setImmediate(function(){    //3
//     console.log("Immediate-2");
// })

// process.nextTick(function(){   //4
//     console.log("Its Emergency");
// });