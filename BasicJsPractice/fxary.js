// var ary=[];//its an array of references
// ary[0]=function()
// {
//     console.log("Banglore");
// }
// ary[1]=function()
// {
//     console.log("Computer");
// }
// var edu=function()
// {
//     console.log("Education");
// }
// ary[2]=edu;

// ary.forEach(ref => {
//     ref();
// });
//--------------------IIFE: Immediately Invoked Function Expression----
/*
(function sst()
    {
        console.log("Sun-Soft Technologies-Punjab-India");
    })();

    (function sst(msg)
    {
        console.log(msg);
    })("www.realJavaOnline.com");

    (function process(refSum)
    {
        refSum(10,20);
    })(
        function doSum(x=5,y)
        {
                console.log(x+y);
        }
    ); 
    */ 
function doPrint()
{
    for(var i=1;i<=4;i++)
    {
        (function process(j){
            //var j=i;
            setInterval(
                    ()=>{console.log(j);}
                    ,1000
                    );
            })(i);   
    }
    
}    
doPrint();

//---------------------------------

// function doPrint2()
// {
//     for(let i=1;i<=4;i++)
//     {
//             setInterval(
//                     ()=>{console.log(i);}
//                     ,1000
//                     );
//     }
    
// }    
// doPrint2();
