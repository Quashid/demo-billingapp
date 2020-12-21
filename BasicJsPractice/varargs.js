// console.log(__dirname);
// console.log(__filename);

//VArargs

// function sum(...data)
// {
//     var mult=1;
//     // for(var i=0;i<data.length;i++)
//     // {
//     //     sum=sum+data[i];
//     // }
//     data.forEach(value =>{
//         mult=mult*value;
//     }); 
//     console.log("Mult="+mult);
// }
// sum(22,33,45,6,7,8,9,8);//error

//=============================Arrow/Lambda functions======
/*
//Anonymous function
var rect=function()
{
    console.log("Area of rect");
}
rect();
*/

/*var rectArea=(l,b)=>{
    return (l*b);
}*/
/*
var rectArea=(l,b)=>l*b;   //works when single statement
var ar=rectArea(3,4);
console.log(ar);

//() can be skipped when single parameter
var arCircle=r=>3.14*r*r;
console.log("area of circle="+arCircle(10));
*/

//Passing functions as argument

var doLogin=(uid,pwd)=>{
    if(uid=="Admin" && pwd=="123")
        return (1);
        else
        return 0;
}
var showData=(uid,pwd)=>{
    console.log(uid+"  "+pwd);
}

var uid="Admin";
var pwd="123";
function doShowAndLogin(loginFx,showFx)
{
 const showErrPage=function()
    {
        console.log("Its Errror Page");
    }
    showFx(uid,pwd);
    let resp=loginFx(uid,pwd);
    if(resp==1)
    return( ()=>{
        console.log("Move on Dashboard");
    });
    else
    return(showErrPage);
   
}


const respFx=doShowAndLogin(doLogin,showData);//passing functions as arguments
respFx();


// var funn=function(){
//     console.log("Hello");
// }
// funn.msg="Shocking";
// console.log(funn.msg);
// console.log(funn.toString());