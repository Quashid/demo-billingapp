var outerRef;

var callArea=(refArea)=>{
    console.log("Inside call area");
    console.log(refArea(30));
}
function lib()
{
    let pi=3.14;//local variables
    let ar;//local variable
    function getArea(radius)
    {
        ar=pi*radius*radius;
        return ar;
    }

  callArea(getArea);//function passed as argu
//-----------
   outerRef=getArea;
    return getArea;//returning the function
}

var getArea=lib();//calling
// var area=getArea(10);//calling
// console.log(area);

var area2=outerRef(20);//calling
console.log(area2);
