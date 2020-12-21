/*class PRODUCT
{
    constructor()
    {
        console.log("COnstructor called");
    }
    setData(it,pr,qty)
    {
            this.item=it;
            this.price=pr;
            this.qty=qty;
            
    }
    billing(){
        this.bill=this.price*this.qty;
        console.log("Bill="+this.bill);
    }
     
}
module.exports=PRODUCT;*/
//Method 2
function PRODUCT()
{
    
    this.setData=function(it,pr,qty)
    {
            this.item=it;
            this.price=pr;
            this.qty=qty;
            
    }
    this.billing=()=>{
        this.bill=this.price*this.qty;
        console.log("Bill="+this.bill);
    }
}
module.exports=PRODUCT;