import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {ValidateMyForm,getCount} from './FunctionalComponent'
import Secure from './Secure';


class AddBill extends Component {
    
   state = {
        newBill:{
            id: 4,
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
            selectedPaymentMode:'Cash',

        },
        
        error:{
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
        },

        isFormValid : false,
        totalNoOfErrors: null,
        
   }

   
   addBillItem = (event) =>{
     event.preventDefault();
       let temp=this.state.newBill;
       temp.id +=1;
       this.setState({newBill:temp},()=>{
        console.log(this.state.newBill);
       })
       
       
       this.setState({totalNoOfErrors: getCount(this.state.error)});
       this.setState({isFormValid: ValidateMyForm(this.state.error)},()=>
       {
        if(this.state.isFormValid === true)
        {
          console.log("Going inside this if erros is 0 ");
          this.props.addBill(this.state.newBill);
        }
       });

   }


   
   onDataModified = args => {
    //args.preventDefault();
   console.log("Inside on data modified")
   const {name,value} = args.target;
   //let errors = {...this.state.errors};
   let errors = this.state.error;
   console.log(errors);
   let currentBill = this.state.newBill; 
   
   switch(name)
   {
     case 'itemSpecification': errors.itemSpecification = value === ''?'Specification can\'t be blank':'';currentBill.itemSpecification = value;
     break;
     case 'dateOfOrder': errors.dateOfOrder = value === ''?'dateOfOrder can\'t be blank':'';currentBill.dateOfOrder = value;
     break;
     case 'orderedBy': errors.orderedBy = value === ''?'orderedBy can\'t be blank':'';currentBill.orderedBy = value;
     break;
     case 'deliveryDate': errors.deliveryDate = value === ''?'deliveryDate can\'t be blank':'';currentBill.deliveryDate = value;
     break;
     case 'supervisedBy': errors.supervisedBy = value === ''?'supervisedBy can\'t be blank':'';currentBill.supervisedBy = value;
     break;
     case 'quantity': errors.quantity = value === ''?'quantity can\'t be blank':'';currentBill.quantity = value;
     break;
     case 'rate': errors.rate = value === ''?'rate can\'t be blank':'';currentBill.rate = value;
     break;
     case 'gst': errors.gst = value === ''?'gst can\'t be blank':'';currentBill.gst = value;
     break;
     case 'paidBy': errors.paidBy = value === ''?'paidBy can\'t be blank':'';currentBill.paidBy = value;
     break;
     case 'paidAmount': errors.paidAmount = value === ''?'paidAmount can\'t be blank':'';currentBill.paidAmount = value;
     break;
     case 'paidRemarks': errors.paidRemarks = value === ''?'paidRemarks can\'t be blank':'';currentBill.paidRemarks = value;
     break;
     case 'selectedUnit': errors.selectedUnit = value === ''?'selectedUnit can\'t be blank':'';currentBill.selectedUnit = value;
     break;
     case 'selectedPaymentMode': errors.selectedPaymentMode = value === ''?'selectedPaymentMode can\'t be blank':'';currentBill.selectedPaymentMode = value;
     break;
     default: console.log("many erros");


   }

   this.setState({error: errors})
   console.log(errors);
   console.log(this.state.newBill);

    }
    

    


    render() { 
          const {error,isFormValid} = this.state;
          console.log(this.state);
          console.log(error);
        return ( 
        <div className="container" style={{backgroundColor:"snow",backgroundBlendMode:"hard-light"}}>
            <legend className="header">ADD BILL</legend>
            <form onSubmit={this.addBillItem} style={{backgroundColor:"sienna",backgroundBlendMode:"overlay",opacity:1}}>
  <div className="form-row">
    
    <div className="form-group col-md-6">
      <label htmlFor="itemSpecification">Item Specification</label>
      <input type="text" className="form-control" name="itemSpecification" id="itemSpecification" placeholder="Enter Item Name" onChange={this.onDataModified}/>
      {
        error.itemSpecification.length >0 &&
        <label className="alert-danger">{error.itemSpecification}</label>
      }
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="dateOfOrder">Date Of Order</label>
      <input type="date" className="form-control" name="dateOfOrder" id="dateOfOrder" onChange={this.onDataModified}/>
      <label className="alert-danger">{this.state.error.dateOfOrder}</label>
    </div>
  
  <div className="form-group col-md-4">
      <label htmlFor="orderedBy">Ordered By</label>
      <input type="text" className="form-control" name="orderedBy" id="orderedBy" placeholder="John Doe" onChange={this.onDataModified}/>
        <label className="alert-danger">{this.state.error.orderedBy}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="deliveryDate">Delivery Date</label>
      <input type="date" className="form-control" name="deliveryDate" id="deliveryDate" placeholder="" onChange={this.onDataModified}/>
        <label className="alert-danger">{this.state.error.deliveryDate}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="supervisedBy">Supervised By</label>
      <input type="text" className="form-control"  name="supervisedBy" id="supervisedBy" placeholder="Supervisor Name" onChange={this.onDataModified}/>
        <label className="alert-danger">{this.state.error.supervisedBy}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="quantity">Quantity</label>
      <input type="number" className="form-control" name="quantity" id="quantity" placeholder="Quanity" onChange={this.onDataModified}/>
        <label className="alert-danger">{this.state.error.quantity}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="rate">Rate</label>
      <input type="number" className="form-control" name="rate" id="rate" placeholder="Rate" onChange={this.onDataModified}/>
        <label className="alert-danger">{this.state.error.rate}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="gst">GST</label>
      <input type="number" className="form-control" name="gst" id="gst" placeholder="GST" onChange={this.onDataModified}/>
        <label className="alert-danger">{this.state.error.gst}</label>
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="paidAmount">Amount</label>
      <input type="number" className="form-control" name="paidAmount" id="paidAmount" placeholder="Amount" onChange={this.onDataModified}/>
        <label className="alert-danger">{this.state.error.paidAmount}</label>
    </div>
    
    <div className="form-group col-md-4">
      <label htmlFor="selectedUnit">Selected Unit</label>
      <input type="text" className="form-control" name="selectedUnit" id="selectedUnit" onChange={this.onDataModified} placeholder="Lumpsum"/>
      <label className="alert-danger">{this.state.error.selectedUnit}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="paidBy">Paid By</label>
      <input type="text" className="form-control" name="paidBy" id="paidBy" onChange={this.onDataModified} placeholder="John Doe"/>
      <label className="alert-danger">{this.state.error.paidBy}</label>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="selectedPaymentMode">Payment Mode</label>
      
      <select className="form-control" name="selectedPaymentMode" id="selectedPaymentMode"  onChange={this.onDataModified} defaultValue="Cash">
    <option value="Cash">Cash</option>
    <option value="Card">Card</option>
    <option value="UPI">UPI</option>
    <option value="Paytm">Paytm</option>
  </select>
  <label className="alert-danger">{this.state.error.selectedPaymentMode}</label>
    </div>
    <div className="form-group col-md-12">
      <label htmlFor="paidRemarks">Remarks</label>
      <input type="Text" className="form-control" name="paidRemarks" id="paidRemarks" placeholder="Remarks" onChange={this.onDataModified}/>
        <label className="alert-danger">{this.state.error.paidRemarks}</label>
    </div>

    </div>
  <button className="btn btn-primary" onClick={this.addBillItem} value={this.state.newBill}>SUBMIT</button>
  {
   
    (this.state.totalNoOfErrors == 0) 
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
}

 
export default AddBill;