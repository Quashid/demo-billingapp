var obj={
    uid:"Admin",
    pwd:"123",
    login:function(u,p)
    {
        if(u==this.uid && p==this.pwd)
            console.log("Valid");
            else
            console.log("Invalid");
    }
}
module.exports=obj;//what happened