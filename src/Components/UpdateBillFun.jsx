import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Secure from './Secure';
import {updateId,curBill} from './BillFun';
import {ValidateMyForm,getCount,billCalc} from './FunctionalComponent'
import {withRouter} from 'react-router-dom';

const UpdateBillFun = (props) =>
{
    const[newBill,setnewBill]=useState(null);
    const [currId,setId] = useState(null);
    const[isFormValid,setIsFormValid]=useState(false);
    const[totalNoOfErrors,setTotalNoOfErrrors]=useState(null);
    const[flag,setFlag] = useState(false);


    const[error,setError]=useState({
        itemSpecification:'',
        dateOfOrder:'',
        orderedBy:'',
        deliveryDate:'',
        supervisedBy:'',
        quantity:'',
        rate:'',
        gst:'',
        paidBy:'',
        paidAmount:'',
        paidRemarks:'',
        selectedUnit:'',
        selectedPaymentMode:'',
       }) ;

     useEffect(
         ()=>{
            
            setnewBill(curBill);
            // console.log("currBill is",curBill);
            setId(updateId.title);
            
         },[]
     )


     const editData = (data) => {
        let editPath = "http://localhost:8082/api/billing/"+currId;
        fetch(editPath,{method:"PATCH",headers:{'Content-Type':'application/json'},body: JSON.stringify(data)})
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err)) 

    }
       
    const routeToHome = (flag) =>
    {
      setTimeout(
        () =>{
          props.history.push('./home');
        }, 5000
      )
      
    }

    useEffect(()=>{
      if(isFormValid && totalNoOfErrors==0)
       {
           console.log("inside if statement & newBill is",newBill);
            setFlag(true);
          //  props.addNewBill(newBill);
          editData(newBill);
          routeToHome();

       }
    },[isFormValid,totalNoOfErrors])
   

   const updateBillItem = (event) =>{
     event.preventDefault();
    
       setTotalNoOfErrrors(getCount(error));
       setIsFormValid(ValidateMyForm(newBill));
       console.log("form is"+isFormValid);
       console.log("total no of errors is"+totalNoOfErrors);

   }


   const onDataModified = (args) =>
   {

        args.preventDefault();
        const {name, value} = args.target; 
    // console.log("name is",name);
   switch(name)
   {
    case 'itemSpecification':
        
        setError({...error,itemSpecification: value==''?'Item name can not be blank':''});
        setnewBill({...newBill,itemSpecification:value});
        // console.log("Specification is"+newBill.itemSpecification);
        break;
     case 'dateOfOrder':        
        setError({...error,dateOfOrder : value==''?'Date of order can not be blank':''});
        setnewBill({...newBill,dateOfOrder:value});
        
        break;
    case 'orderedBy':
        setError({...error,orderedBy : value==''?'orderBy can not be blank':''});
        setnewBill({...newBill,orderedBy:value});
        break;
    case 'deliveryDate':
        setError({...error,deliveryDate : value==''?'deliveryDate can not be blank':''});
        setnewBill({...newBill,deliveryDate:value});
        break;
    case 'supervisedBy':{
        setError({...error,supervisedBy : value==''?'supervisedBy can not be blank':''});
        setnewBill({...newBill,supervisedBy:value});
        }
        break;
    case 'quantity':
        setError({...error,quantity : value==''?'quantity can not be blank':''});
        setnewBill({...newBill,quantity:value});
        console.log("new amount is",newBill.paidAmount);
        break;
    case 'rate':
        setError({...error,rate : value==''?'rate can not be blank':''});
        setnewBill({...newBill,rate:value});
        setnewBill({...newBill,paidAmount:billCalc(newBill.quantity,newBill.rate)});
        console.log("new amount is",newBill.paidAmount);
        break;
    case 'gst':
        setError({...error,gst : value==''?'gst can not be blank':''})
        setnewBill({...newBill,gst:value});;
        // setnewBill({...newBill,gst:billCalc(newBill).gst});
        break;
    case 'paidBy':
        setError({...error,paidBy : value==''?'paidBy can not be blank':''});
        setnewBill({...newBill,paidBy:value});
        break;
    case 'paidAmount':
        setError({...error,paidAmount : value==''?'paidAmount can not be blank':''});
        // setnewBill({...newBill,paidAmount:value});
        // let tempBill = billCalc(newBill);
        // let newAmt= tempBill.amount;
        // setnewBill({...newBill,paidAmount:newAmt});
        console.log("new amount is",newBill.paidAmount);
        break;
    case 'paidRemarks':{
        setError({...error,paidRemarks : value==''?'paidRemarks can not be blank':''});
        setnewBill({...newBill,paidRemarks:value});
    }
        break;
    case 'selectedUnit':{
        setError({...error,selectedUnit : value==''?'selectedUnit can not be blank':''});
        setnewBill({...newBill,selectedUnit:value});
    }
        break;
    case 'selectedPaymentMode':
        setError({...error,selectedPaymentMode : value==''?'paymentMode can not be blank':''});
        setnewBill({...newBill,selectedPaymentMode:value});
        break; 
    
    default:
        break;

   }

   }

  
   if(newBill == null)
   {
     return (
       <h1>Loading....</h1>
     )
   }

   if(flag)
   {
     return(
      //  <div className="label-success">Value Updated...</div>
      <h1>Value Updated... </h1>
     )
   }
     return ( 
        <div className="container" style={{backgroundColor:"snow"}}>
            <legend className="header">UPDATE BILL</legend>
        <form onSubmit={updateBillItem} style={{backgroundColor:`rgb(${160}, ${155}, ${120})`,opacity:1}}>
      <div className="form-row">
    
    <div className="form-group col-md-6">
      <label htmlFor="itemSpecification">Item Specification</label>
      <input type="text" className="form-control" name="itemSpecification" id="itemSpecification" value={newBill.itemSpecification} onChange={onDataModified}/>
      {
        error.itemSpecification !== '' &&
        <label className="alert-danger">{error.itemSpecification}</label>
      }
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="dateOfOrder">Date Of Order</label>
      <input type="date" className="form-control" name="dateOfOrder" id="dateOfOrder" value={newBill.dateOfOrder} onChange={onDataModified}/>
      <label className="alert-danger">{error.dateOfOrder}</label>
    </div>
  
  <div className="form-group col-md-4">
      <label htmlFor="orderedBy">Ordered By</label>
      <input type="text" className="form-control" name="orderedBy" id="orderedBy" value={newBill.orderedBy}  onChange={onDataModified}/>
        <label className="alert-danger">{error.orderedBy}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="deliveryDate">Delivery Date</label>
      <input type="date" className="form-control" name="deliveryDate" id="deliveryDate" value={newBill.deliveryDate} onChange={onDataModified}/>
        <label className="alert-danger">{error.deliveryDate}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="supervisedBy">Supervised By</label>
      <input type="text" className="form-control"  name="supervisedBy"  id="supervisedBy" value={newBill.supervisedBy} onChange={onDataModified}/>
        <label className="alert-danger">{error.supervisedBy}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="quantity">Quantity</label>
      <input type="number" className="form-control" name="quantity" id="quantity" value={newBill.quantity}  onChange={onDataModified}/>
        <label className="alert-danger">{error.quantity}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="rate">Rate</label>
      <input type="number" className="form-control" name="rate" id="rate" value={newBill.rate}  onChange={onDataModified}/>
        <label className="alert-danger">{error.rate}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="gst">GST</label>
      <input type="number" className="form-control" name="gst" id="gst" value={newBill.gst}  onChange={onDataModified}/>
        <label className="alert-danger">{error.gst}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="paidAmount">Amount</label>
      <input type="number" className="form-control" name="paidAmount" id="paidAmount" value={newBill.paidAmount}  onChange={onDataModified}/>
        <label className="alert-danger">{error.paidAmount}</label>
    </div>
    
    <div className="form-group col-md-4">
      <label htmlFor="selectedUnit">Selected Unit</label>
      <input type="text" className="form-control" name="selectedUnit" value={newBill.selectedUnit} id="selectedUnit" onChange={onDataModified} placeholder="Lumpsum"/>
      <label className="alert-danger">{error.selectedUnit}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="paidBy">Paid By</label>
      <input type="text" className="form-control" name="paidBy" id="paidBy" onChange={onDataModified} value={newBill.paidBy} />
      <label className="alert-danger">{error.paidBy}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="selectedPaymentMode">Payment Mode</label>
      
      <select className="form-control" name="selectedPaymentMode" id="selectedPaymentMode"  onChange={onDataModified} value={newBill.selectedPaymentMode} >
    <option value="Cash">Cash</option>
    <option value="Card">Card</option>
    <option value="UPI">UPI</option>
    <option value="Paytm">Paytm</option>
  </select>
  <label className="alert-danger">{error.selectedPaymentMode}</label>
    </div>
    <div className="form-group col-md-12">
      <label htmlFor="paidRemarks">Remarks</label>
      <input type="Text" className="form-control" name="paidRemarks" id="paidRemarks" value={newBill.paidRemarks} onChange={onDataModified}/>
        <label className="alert-danger">{error.paidRemarks}</label>
    </div>

    </div>
  <button type="submit" className="btn btn-primary" onClick={updateBillItem} value={newBill}>SUBMIT</button>
  {
   
    (totalNoOfErrors == 0 && isFormValid == true ) 
    ?
    <label className="label-success"> Form Submitted</label>
    :
    <label className="label-warning">Form can't be Submitted</label>
  }
  </form>
  <Secure></Secure>
  </div>

  );
    
}


export default withRouter(UpdateBillFun);