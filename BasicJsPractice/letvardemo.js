var x=9;//global variable

function fun()
{
    y=20;//global variable-its creation is conditional-dep. up. the calling of fun()
    console.log(x+"  "+y);
    {
        var z=30;//function level scope
        let a=50; //block level scope
        console.log("inside block : z="+z);//30
        console.log("a="+a);
    }
    console.log(" outside block z="+z);//30
   // console.log(a);
    
}
function fun2()
{
    console.log("x="+x);
    console.log("y="+y);
}

fun();
fun2();

// const asyncHello = new Promise((resolve, reject) => { 
//     setTimeout(resolve, 1000, 'Hello!'); 
// }); 
 
// console.log(typeof asyncHello);

// async function myFunction() { 
//     return 'hello world';
//   } // prints hello world
   
//   myFunction()
//   .then((resolvedValue) => {
//     console.log(resolvedValue);
//   })