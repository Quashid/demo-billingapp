var datetime=require("node-datetime");// for printing current time



function basicMiddleware(req,resp,nextCall){
    resp.setHeader("Content-Type","text/html");
    console.log("Inside the middleware");
    resp.write("Inside the Basic middleware<br>");
    nextCall(); //calls the next function 
}

function curDateAndTime(req,resp,next)
{
    console.log("Adding current date and time");
    resp.write("Adding current date and time<br>");

    //--------------
    //formated date and time 
    var dt = datetime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    req.curdatetime=formatted;//added new property in request object
    console.log("Date Time added to req ");
    //--------------
    next();
}

function signupMiddleware(req,resp,next)
{
    resp.write("Special middleware for signup<br>");
    resp.write("<b>Welcome :"+req.query.uid);//access the query object
    req.query.password=req.query.uid+"@#$$123Akcv@@";//modify the query obj
    next();
}

const loginMiddleware = (req,resp,next) =>
{
    resp.write("Special middleware for Login <br>");
    resp.write("<b> Hello :"+req.params.name+"<br>");
    next();
}
module.exports={basicMiddleware,curDateAndTime,signupMiddleware,loginMiddleware}