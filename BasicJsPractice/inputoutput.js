
// var cin=require("readline");
// var readline=cin.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// readline.question('Whats Ur name',(name)=>{
//     console.log("Welcome :"+name);

//     readline.question("Enter ur Age:",(age)=>{
//         console.log("Ur Age="+age);
//     });

// })


//----Method 2-----
// var inquirer=require("inquirer");
// var questions=[
//     {
//         type:'input',
//         name:'uid',
//         message:'Enter User id'
//     },
//     {
//         type:'input',
//         name:'pwd',
//         message:'Enter User Password'
//     }
// ];
// inquirer.prompt(questions).then((answerAry)=>{
//     console.log(answerAry['uid']);
//     console.log(answerAry['pwd']);
    
// });


// const enq=require("inquirer");
// let a;

// let q=[
//     {
//         type:'input',
//         name:'uid',
//         message:'Enter Uid'
//     }
// ];

// enq.prompt(q).then(ans => {
//     console.log(ans.uid);
//     a = ans.uid;
// })

// console.log(a);// always undefined