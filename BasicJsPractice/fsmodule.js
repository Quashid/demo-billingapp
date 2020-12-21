//fs Module is used to intract with the file system of our machine
var fileScanner=require("fs");
var fs=require("fs");
// fs.open("banglorecomputer.txt","a",(err)=>{
//     if(err)
//         console.log(err.message);
//     else
//         console.log("File Created Successfully");
// });

// fileScanner.open("TestFile.txt","a",(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("Creation Successful");
// })
//-----------------------------
// var fscallback=(err)=>{
//     if(err)
//        console.log(err.message) ;
//        else
//        console.log("Written in file Successfully");
// }
//it delete the existing contents
//fs.writeFile("banglorecomputer.txt","www.banglorecomputeredu.com",fscallback);
//fs.appendFile("banglorecomputer.txt","\nwww.realjavaonline.com",fscallback);
fileScanner.writeFile("testFile.txt","Hello Welcome \n MrXYZ",callback);

function callback(err)
{
    if(err)
    console.log(err);
    else
    console.log("successfull");
}
// fs.readFile("banglorecomputer.txt",(err,data)=>{
//     console.log(data.toString());
// })
fileScanner.readFile("testFile.txt",(err,data) => {
    console.log(data.toString());
})
// fs.stat("banglorecomputer.txt",(err,stats)=>{
//     if(err){
//         console.log(err.message);
//         return;
//     }
//         console.log(stats.isDirectory());
//         console.log(stats.isFile());
//         console.log(stats.ctime);
//         console.log(stats.size+" Bytes");
// });

// fileScanner.stat("testFile.txt",(err,stats)=>
// {
//     if(err)
//     {
//     console.log(err);
//     return;
//     }
//     else
//     {
//         console.log(stats.isDirectory());
//         console.log(stats.isFile());
//         console.log(stats.ctime);//last update time
//         console.log(stats.size);
//     }
// })
// fs.stat("node_modules",(err,stats)=>{
//     console.log(stats.isDirectory());
// });
// fs.unlink("DemoFile.txt",(err)=>{
//     if(err)
//         console.log(err.message);
//     else
//         console.log("File Deleted");
// })




// fs.copyFile("test1.txt","DemoFile.txt",(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else
//     console.log("File copied");
// })
//=-=-=-=-=-Copy file====-=-=
//HW: copy file without using the above function
// fileScanner.createReadStream('testFile.txt').pipe(fs.createWriteStream('test1.txt')); //better way
//Creating Directory
fs.mkdir("export-modules",(err)=>{
    console.log("Directory created");
})
//getting the list of files and directories
var cur=__dirname;//global lib variable



// var count=0;
//  function doAll()
// {
    
// fs.readdir(cur,(err,aryList)=>{
      
//         for(var i=0;i<aryList.length;i++)
//         {
//             let name=aryList[i];
//             console.log(name);
//             fs.statSync(name,(err,stats)=>{
//                     if(stats.isFile())
//                         {
//                            count=count+1;
                          
//                         }
//             })
//             console.log("No of files only :"+count);
//         }
       
     
      
//   });
 
// }
// doAll();
let count = 0;
fileScanner.readdir(cur, (err,arr)=>
{
  if(err)
  console.log(err);
  else
  {   
       arr.forEach((val) => {console.log(val);
                           var val = val + (fileScanner.stat(val,(err,stat)=>
                            {
                                if(err)
                                return err;
                                else
                                {
                                if(stat.isFile());
                                {
                                  return count++;}
                                }
                            }));  
                        });
        console.log(val);
    //   console.log(arr);
  }
})