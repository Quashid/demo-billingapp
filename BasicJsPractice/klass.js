// function PRODUCT()
// {
    
//     this.setData=function(it,pr,qty)
//     {
//             this.item=it;
//             this.price=pr;
//             this.qty=qty;
            
//     }
//     this.billing=()=>{
//         this.bill=this.price*this.qty;
//         console.log("Bill="+this.bill);
//     }
// }
// var obj=new PRODUCT();
// obj.setData("pen",10,20);
// obj.billing();
// //===============================
// class PRODUCT
// {
//     constructor()
//     {
//         console.log("COnstructor called");
//     }
//     setData(it,pr,qty)
//     {
//             this.item=it;
//             this.price=pr;
//             this.qty=qty;
            
//     }
//     billing(){
//         this.bill=this.price*this.qty;
//         console.log("Bill="+this.bill);
//     }
//      // NOT allowed here
//     //this.line=function(){
//        // console.log("=-=-=-=-=-=-=-=-=-=-=");
//         //}
// }
// var obj=new PRODUCT();
// obj.setData("pen",10,20);
// obj.billing();

//======================Class Expression=========
var PRODUCT=class{
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
     // NOT allowed here
    //this.line=function(){
       // console.log("=-=-=-=-=-=-=-=-=-=-=");
        //}
}
class Mall extends PRODUCT
{

}
var obj=new Mall();
obj.setData("pen",10,20);
obj.billing();
