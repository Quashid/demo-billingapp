// var ary1=[2,4,5,7];
// console.log(ary1);

// const { ary } = require("lodash");

// var ary2=Array(2,3,4,6);//creation cum Initialization of array
// console.log(ary2);//2,3,4,6 
// console.log(ary2.length);//4

// var ary2=Array(4);//4 is the length
// console.log(ary2);// empty
// console.log(ary2.length);//4

// var ary3=Array.of(4);//of () is the static method of Array class
// console.log(ary3);
// console.log(ary3.length);

/*var ary4=new Array(5);//an empty array with 5 locations
console.log(ary4);
ary4.fill(1);//not a static function
console.log(ary4);
ary4.fill(0,2);
console.log(ary4);
ary4.fill(2,2,4);//from 2 to <4
console.log(ary4);
//copying an array
*/
//  var techs=["C++","Java","Nodejs"];
// var dup=Array.from(techs);//.from() is a static function
// console.log(dup);
// dup[0]="CPP";
// console.log(techs);
// console.log(dup);

//Destructuring of arrays
/*
var techs=["C++","Java","Nodejs"];
var [tech1,tech2]=techs;//copy values
console.log(tech1,tech2);
tech1="***";
console.log(techs);
*/

// var x=10,y=20;
// var [x,y]=[y,x];//values are copied only not references
// console.log(x,y);

var marks=Array(50,90,80,40,60);



// marks.sort((a,b)=> a-b);
// marks.sort((a,b)=> b-a); // reverse 
// marks.reverse();
// console.log(marks);
// var filteredMarks = marks.filter(marks => marks>50);
// console.log(filteredMarks.join(' '));

//var top=[];
// Array.from(marks,(value)=>{
//     if(value>=70)
//         top.push(value);
// })
// marks.forEach((value)=>{
//     if(value>=70)
//         top.push(value);
// });
// console.log(top);

// var res=marks.findIndex((value)=>value>=70);//gives u ist occurance
// console.log(res);
// var res2=marks.filter((value)=>value>=70);//gives u ist occurance
// console.log(res2);

// var res2=marks.filter((value)=>{
//  if(value>=70)
//     return marks.indexOf(value);

// });//gives u ist occurance
// console.log(res2);

// console.log(marks.indexOf(90));

// var res=marks.every((value)=>value>=50);
// console.log(res);

var collegeJsonAry=[
    {name:"aman",branch:'cse',per:90},
    {name:"Ram",branch:'ece',per:60},
    {name:"Amit Shah",branch:'cse',per:70},
    {name:"Raman",branch:'mech',per:99},
    {name:"Modi",branch:'civil',per:98},
    {name:"Gabbar",branch:'cse',per:90}
  ];

//   console.log(marks.reduce((x,y)=> x+y))//  reduce function
//   var resultJson=collegeJsonAry.filter((obj)=>obj.branch=="cse");
//   console.log(resultJson);
//   //Method -2
//   var resultJson2=[];
//   collegeJsonAry.forEach((obj)=>{
//       if(obj.branch=="cse")
//             resultJson2.push(obj);
//   });
//   console.log(resultJson2);

//map()//used to work with each object and it can modify the original elements of an array
// var resultJson3=collegeJsonAry.map((obj)=>{
//     //obj.branch="***";
//        return obj.branch="***";
// });
// console.log(resultJson3);
///-----------------Sort-----
// var sortedCollegeAry=collegeJsonAry.sort((obj1,obj2)=>obj1.per>obj2.per?1:0);
// console.log("Sorted Data( on Per) ):");
// console.log(sortedCollegeAry);

collegeJsonAry.sort((a,b)=>{
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();

    if(x < y)
    return -1;
    if(x > y)
    return 1;
    else
    return 0;

})

console.log(collegeJsonAry);


// // for in & forEach combo
// collegeJsonAry.forEach(obj => 
//     {
//         for(key in obj)
//         {
//             console.log(`${key} is ${obj[key]}`)
//         }
//     })