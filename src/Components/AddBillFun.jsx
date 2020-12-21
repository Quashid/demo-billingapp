import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {ValidateMyForm,getCount} from './FunctionalComponent'
import Secure from './Secure';
import * as Constants from '../store/Constants'
import { connect } from 'react-redux';

const AddBillFun = (props) => {


    const[isFormValid,setIsFormValid]=useState(false);
    const[totalNoOfErrors,setTotalNoOfErrrors]=useState(null);
    const[flag,setFlag] = useState(false);
    const[newBill,setnewBill]=useState({
        itemSpecification:'',
        dateOfOrder:'',
        orderedBy:'',
        deliveryDate:'',
        supervisedBy:'Shopkeeper',
        quantity:'',
        rate:'',
        gst:'18',
        paidBy:'',
        paidAmount:'',
        paidRemarks:'',
        selectedUnit:'Lumpsum',
        selectedPaymentMode:'Cash',
        });

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
    
      const sendData = (data) =>{
        fetch("http://localhost:8082/api/billing",{method:"POST",headers:{'Content-Type':'application/json'},body: JSON.stringify(data)})
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);

        })
        .catch(err => console.log(err)) 
    } 
       

    useEffect(()=>{
      if(isFormValid && totalNoOfErrors==0)
       {
           console.log("inside if statement & newBill is",newBill);
           console.log("before fun call"+flag);
          sendData(newBill);
          setFlag(true);
          console.log("After fun call"+flag);

       }
    },[isFormValid,totalNoOfErrors])
   
   const addBillItem = (event) =>{
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
        // console.log("Inside ItemSpecs");
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
        break;
    case 'rate':
        setError({...error,rate : value==''?'rate can not be blank':''});
        setnewBill({...newBill,rate:value});
        break;
    case 'gst':
        setError({...error,gst : value==''?'gst can not be blank':''});
        setnewBill({...newBill,gst:value});
        break;
    case 'paidBy':
        setError({...error,paidBy : value==''?'paidBy can not be blank':''});
        setnewBill({...newBill,paidBy:value});
        break;
    case 'paidAmount':
        setError({...error,paidAmount : value==''?'paidAmount can not be blank':''});
        setnewBill({...newBill,paidAmount:value});
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
    

    


  if(flag === false)
  {
        return ( 
        <div className="container" style={{backgroundColor:"snow"}}>
            <legend className="header">ADD BILL</legend>
    <form onSubmit={addBillItem} style={{backgroundColor:`rgb(${170}, ${85}, ${50})`,opacity:1}}>
  <div className="form-row">
    
    <div className="form-group col-md-6">
      <label htmlFor="itemSpecification">Item Specification</label>
      <input type="text" className="form-control" name="itemSpecification" id="itemSpecification" placeholder="Enter Item Name" onChange={onDataModified}/>
      {
        error.itemSpecification !== '' &&
        <label className="alert-danger">{error.itemSpecification}</label>
      }
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="dateOfOrder">Date Of Order</label>
      <input type="date" className="form-control" name="dateOfOrder" id="dateOfOrder" onChange={onDataModified}/>
      <label className="alert-danger">{error.dateOfOrder}</label>
    </div>
  
  <div className="form-group col-md-4">
      <label htmlFor="orderedBy">Ordered By</label>
      <input type="text" className="form-control" name="orderedBy" id="orderedBy" placeholder="John Doe" onChange={onDataModified}/>
        <label className="alert-danger">{error.orderedBy}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="deliveryDate">Delivery Date</label>
      <input type="date" className="form-control" name="deliveryDate" id="deliveryDate" placeholder="" onChange={onDataModified}/>
        <label className="alert-danger">{error.deliveryDate}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="supervisedBy">Supervised By</label>
      <input type="text" className="form-control"  name="supervisedBy" defaultValue="Shopkeeper" id="supervisedBy" placeholder="Supervisor Name" onChange={onDataModified}/>
        <label className="alert-danger">{error.supervisedBy}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="quantity">Quantity</label>
      <input type="number" className="form-control" name="quantity" id="quantity" placeholder="Quanity" onChange={onDataModified}/>
        <label className="alert-danger">{error.quantity}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="rate">Rate</label>
      <input type="number" className="form-control" name="rate" id="rate" placeholder="Rate" onChange={onDataModified}/>
        <label className="alert-danger">{error.rate}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="gst">GST</label>
      <input type="number" className="form-control" name="gst" id="gst" defaultValue="18" placeholder="GST" onChange={onDataModified}/>
        <label className="alert-danger">{error.gst}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="paidAmount">Amount</label>
      <input type="number" className="form-control" name="paidAmount" id="paidAmount" placeholder="Amount" onChange={onDataModified}/>
        <label className="alert-danger">{error.paidAmount}</label>
    </div>
    
    <div className="form-group col-md-4">
      <label htmlFor="selectedUnit">Selected Unit</label>
      <input type="text" className="form-control" name="selectedUnit" defaultValue="Lumpsum" id="selectedUnit" onChange={onDataModified} placeholder="Lumpsum"/>
      <label className="alert-danger">{error.selectedUnit}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="paidBy">Paid By</label>
      <input type="text" className="form-control" name="paidBy" id="paidBy" onChange={onDataModified} placeholder="John Doe"/>
      <label className="alert-danger">{error.paidBy}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="selectedPaymentMode">Payment Mode</label>
      
      <select className="form-control" name="selectedPaymentMode" id="selectedPaymentMode"  onChange={onDataModified} defaultValue="Cash">
    <option value="Cash">Cash</option>
    <option value="Card">Card</option>
    <option value="UPI">UPI</option>
    <option value="Paytm">Paytm</option>
  </select>
  <label className="alert-danger">{error.selectedPaymentMode}</label>
    </div>
    <div className="form-group col-md-12">
      <label htmlFor="paidRemarks">Remarks</label>
      <input type="Text" className="form-control" name="paidRemarks" id="paidRemarks" placeholder="Remarks" onChange={onDataModified}/>
        <label className="alert-danger">{error.paidRemarks}</label>
    </div>

    </div>
  <button type="submit" className="btn btn-primary" onClick={addBillItem} value={newBill}>SUBMIT</button>
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
else
{
  return(
    <h4>Thank You... Your Response is Submitted</h4>
  )
}

}

export default AddBillFun;
//Container job done here Matchstate to props & dispatchtoprops

// const mapDispatchToProps= dispatch =>
// {
//     return{
//         addNewBill:(contents)=>{
//             dispatch({type:Constants.ADD,payload:contents})
//         }
//     }
// }

 
// export default connect(null,mapDispatchToProps)(AddBillFun);