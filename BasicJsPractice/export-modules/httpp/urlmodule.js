var url=require("url");
var fullurl="https://realjavaonline.com:80/users/signup.html?uid=banglore&pwd=computer";// demo url with all properties
purl=url.parse(fullurl,true);//it returns a json object- true: we wanr .query as an object Parsed url
// console.log(purl.host);//with port
// console.log(purl.hostname);//only name of host/site
// console.log(purl.port);
// console.log(purl.protocol);
// console.log(purl.path); // /users/signup.html?uid=banglore&pwd=computer the path after the hostname
// console.log(purl.pathname); // /users/signup.html only pathname
// console.log(purl.href); // full Url 
// console.log(purl.method);
// console.log(purl.query); // returns the query in form of obj if true keyword is used 
// var {uid,pwd}=purl.query;//gives json object
// console.log(uid,pwd);

//======= querystring Module======
// var querystring=require("querystring");

// var purl=url.parse(fullurl);

// var qs=purl.query;//gives query string in string format
// obj=querystring.parse(qs);//converts string fromat to json object
// console.log(obj);
// console.log(obj.uid,obj.pwd);

//========path module=========
var path=require("path");
// console.log(path.resolve("anyfilename.html")); // returns full path /Users/user/demo-billingapp/BasicJsPractice/export-modules/httpp/anyfilename.html
// console.log(__dirname);
var signupPath=path.join(__dirname,"public/signup.html");
console.log(signupPath);

// var signupPath2=__dirname+"\\public\\signup.html";
// console.log(signupPath2);

var arryfile=path.join(__dirname,"..","arrays.js"); // can create the path of anyfile needed
console.log(arryfile);