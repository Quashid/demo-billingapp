// var library=function()
// {
//     var price,qty,total,discount=100;
//     function setData(p,q)//inner function
//     {
//         console.log("inside setData");
//         console.log(discount);
//         price=p;
//         qty=q;
//     }
//     function billing()//is hidden to the outside world
//     {
//         console.log("inside billing");
//         total=price*qty-discount;
//         return total;
//     }
//     function showDetails()
//     {
//         console.log("inside showDetails");
//         billing();
//         console.log(price,qty,total);
//     }
//      return{
//          setData,showDetails,discount
//      }
// }
// var obj=  library();//not possible to create its object
// console.log(obj.discount);
// obj.discount=10;//this change will not affetct the original value in side the function

// obj.setData(22,333);
// obj.showDetails();
// //obj.billing();


const anotherLib = ()=>
{
    let var1,var2,sum=0;

   
    const setData = (a,b) =>
    {
        var1 = a;
        var2 = b;
        console.log(var1,var2);
       
        sum = a+b;
        console.log(sum);
    }

    const retSum = () =>
    {
        sum = var1+var2;
        return sum;
    }
    
    return { setData,retSum};
}

let x = anotherLib();
x.setData(3,5);
console.log(x.retSum());
// if we use anotherlib directly each function will have separate instances hence sum will be 0 