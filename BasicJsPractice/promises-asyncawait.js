//resolve and reject are the references of 2 inbuilt functions

const { resolve } = require("path");

//we have to call them dep. upon the condition
// let x=1;//equals true only 0 will evaluate to false
// const promise=new Promise((resolve,reject)=>{
//     if(x)
//         resolve("Promise Completed, Very Good");
//        else
//        reject("Not Completed... Vey Bad...");
// });

// //then takes 2 cb functions one for resolve & one for reject
// promise.then((msg)=>{
//     console.log(msg);
// },
// (err)=>
//     {
//         console.log("*****"+err);
//     }
// )
//OR

// function ok(msg)
//     {
//         console.log("Good:"+msg);
//     }
// function notOk(msg)
//     {
//         console.log("Bad:"+msg);
//     }
    
// promise.then(ok,notOk);


//===================
// new Promise(function(resolveFx,rejectFx){
//     if(x==true)
//         resolveFx("Promise Completed, Very Good");
//        else
//        rejectFx("Not Completed... Vey Bad...");
// }).then(ok,notOk);
//==============================

// new Promise(function(resolveFx,rejectFx){
//     if(x==true)
//         resolveFx("Promise Completed, Very Good");
//     else
//        rejectFx("Not Completed... Vey Bad...");
// }).then(msg=>{console.log(msg)},msg=>{console.log(msg)});
//==================

// var num=1;
// new Promise(function(resolve,reject){
//      if(num>0)
//         resolve("+ve Number");
//      else if(num<0)   
//         reject("its -Ve Number");
//         else
//         if(num==0)
//            throw new  Error("It Error , Its houl not be zero");
// }).then(
//     msg=>{ console.log("$$$$  "+msg)} //for resolve
//       //for reje
// ).catch((err)=>{console.log(err)}).finally(()=>{console.log("Very important code");
// process.exit()});


//===============
function oddEvenRequest(n)
  {
    var promise1 = new Promise(function(resolve, reject) {
      
        if(n%2==0)
         setTimeout(function(){resolve("Resolved:EVEN");},2000);
      else
         setTimeout(function(){reject("Rejected:ODD Number");},2000);
    });
  
    return promise1;
  }
//   async  function  doCall()
//      {
     
//      //here oddeven() returns promise
//        await oddEvenRequest(8).then(
//          function(msg){ 
//           console.log(msg);
//       },
//       function(err)//reject and error
//       {
//           console.log("^^^^^"+err);
//       });
      
//        console.log("***********"); //executes in order
//     }

async function doCall()
{
    try
    {
        let returnedMsg = await oddEvenRequest(7);
        
        console.log(returnedMsg);
    }
    catch(err)
    {
        console.log(err);
    }
    finally
    {
        console.log("******");
    }
}
  doCall();