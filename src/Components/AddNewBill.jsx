// import React, { useState} from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import {ValidateMyForm,getCount} from './FunctionalComponent'
// import {getRate,getTotalPrice} from './BillCalculations'
// import { connect } from 'react-redux';

// function AddNewBill(props){
    
//         const[isFormValid,setIsFormValid]=useState(false);
//         const[totalNoOfErrrors,setTotalNoOfErrrors]=useState(0);
//         const[contents,setContents]=useState({
//                                                 ItemSpecification:'',
//                                                 dateOfOrder:'',
//                                                 orderBy:'',
//                                                 deliveryDate:'',
//                                                 supervisedBy:"Shop Executive",
//                                                 quantity:'',
//                                                 rate:'',
//                                                 gst:12,
//                                                 paidBy:'',
//                                                 paidAmount:'',
//                                                 paidRemarks:'Paid By Cash',
//                                                 selectedUnit:'Rupees',
//                                                 paymentMode:''
//                                             });

//            const[errors,setErrors]=useState({
//                                                 ItemSpecification:'',
//                                                 dateOfOrder:'',
//                                                 orderBy:'',
//                                                 deliveryDate:'',
//                                                 supervisedBy:'',
//                                                 quantity:'',
//                                                 rate:'',
//                                                 gst:'',
//                                                 paidBy:'',
//                                                 paidAmount:'',
//                                                 paidRemarks:'',
//                                                 selectedUnit:'',
//                                                 paymentMode:''
//                                             }) ;

//     const AddBillItem=(event)=>{
//         event.preventDefault();
//         setIsFormValid(ValidateMyForm(errors));
//         setTotalNoOfErrrors(getCount(errors))
//         console.log(isFormValid);
//         if(isFormValid && totalNoOfErrrors==0){
//             props.addNewBill(contents);
//         }
//     }

//     function OnDataModified(args){
//         args.preventDefault();//This line will make sense during form submission!
//         const {name, value} = args.target;  //This line is similar to :   const name = args.target.name; const value = args.target.value;
//             switch (name) {
//                 case 'ItemSpecification':
//                     setErrors({...errors,ItemSpecification: value=='Select the Item!'?'Item name can not be blank':''});
//                     setContents({...contents,ItemSpecification:value});
//                     break;
//                  case 'dateOfOrder':        
//                     setErrors({...errors,dateOfOrder : value==''?'Date of order can not be blank':''});
//                     setContents({...contents,dateOfOrder:value});
                    
//                     break;
//                 case 'orderBy':
//                     setErrors({...errors,orderBy : value==''?'orderBy can not be blank':''});
//                     setContents({...contents,orderBy:value});
//                     break;
//                 case 'deliveryDate':
//                     setErrors({...errors,deliveryDate : value==''?'deliveryDate can not be blank':''});
//                     setContents({...contents,deliveryDate:value});
//                     break;
//                 case 'supervisedBy':
//                     setErrors({...errors,supervisedBy : value==''?'supervisedBy can not be blank':''});
//                     break;
//                 case 'quantity':
//                     setErrors({...errors,quantity : value==''?'quantity can not be blank':''});
//                     setContents({...contents,quantity:value});
//                     break;
//                 case 'rate':
//                     setErrors({...errors,rate : value==''?'rate can not be blank':''});
//                     setContents({...contents,rate:value});
//                     break;
//                 case 'gst':
//                     setErrors({...errors,gst : value==''?'gst can not be blank':''});
//                     break;
//                 case 'paidBy':
//                     setErrors({...errors,paidBy : value==''?'paidBy can not be blank':''});
//                     setContents({...contents,paidBy:value});
//                     break;
//                 case 'paidAmount':
//                     setErrors({...errors,paidAmount : value==''?'paidAmount can not be blank':''});
//                     setContents({...contents,paidAmount:getTotalPrice(contents.quantity,getRate(contents.ItemSpecification),contents.gst)});
//                     break;
//                 case 'paidRemarks':
//                     setErrors({...errors,paidRemarks : value==''?'paidRemarks can not be blank':''});
//                     break;
//                 case 'selectedUnit':
//                     setErrors({...errors,selectedUnit : value==''?'selectedUnit can not be blank':''});
//                     break;
//                 case 'paymentMode':
//                     setErrors({...errors,paymentMode : value=='Select Payment Mode'?'paymentMode can not be blank':''});
//                     setContents({...contents,paymentMode:value});
//                     break; 
                
//                 default:
//                     break;
//             } 

//             console.log("Errors array is",errors);
//             console.log("Updated bill is",contents);
//     }

//         return ( 
//             <div className="container">
//                 <legend>Add New Bill</legend>
//             <form onSubmit={AddBillItem} autoComplete="on">
//                 <div className="form-row">

//                     <div className="form-group col-md-6">
//                         <label htmlFor="txtItemSpecification">Item Specification</label>
//                         <select defaultValue="Select the Item!" type="text" className="form-control" name="ItemSpecification" id="ItemSpecification"  onChange={OnDataModified}>
//                         <option >Select the Item!</option>
//                         <option>Dhokla</option>
//                         <option >Burfi</option>
//                         <option >Peda</option>
//                         <option>Jalebi</option>
//                         <option >Laddu</option>
//                         </select>
//                         {
//                             errors.ItemSpecification!=='' &&
//                             <label className="alert-danger">{errors.ItemSpecification}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-6">
//                         <label htmlFor="txtdateOfOrder">Date of Order</label>
//                         <input type="Date"  className="form-control" name="dateOfOrder" id="dateOfOrder" value={contents.dateOfOrder}  onChange={OnDataModified}/>
//                         {
//                             errors.dateOfOrder!=='' &&
//                             <label className="alert-danger">{errors.dateOfOrder}</label>
//                         }
//                     </div>

 
//                      <div className="form-group col-md-6">
//                         <label htmlFor="txtorderBy">Order By</label>
//                         <input type="text" className="form-control" name="orderBy" id="orderBy" value={contents.orderBy} onChange={OnDataModified}/>
//                         {
//                             errors.orderBy!=='' &&
//                             <label className="alert-danger">{errors.orderBy}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-6">
//                         <label htmlFor="txtdeliveryDate">Delivery Date</label>
//                         <input type="date" className="form-control" name="deliveryDate" id="deliveryDate" value={contents.deliveryDate} onChange={OnDataModified}/>
//                         {
//                             errors.deliveryDate!=='' &&
//                             <label className="alert-danger">{errors.deliveryDate}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-6">
//                         <label htmlFor="txtsupervisedBy">Supervised By</label>
//                         <input type="text" className="form-control" name="supervisedBy" id="supervisedBy" value={contents.supervisedBy} onChange={OnDataModified}/>
//                         {
//                             errors.supervisedBy!=='' &&
//                             <label className="alert-danger">{errors.supervisedBy}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-3">
//                         <label htmlFor="txtquantity">Order Quantity</label>
//                         <input type="text" className="form-control" name="quantity" id="quantity" value={contents.quantity} onChange={OnDataModified}/>
//                         {
//                             errors.quantity!=='' &&
//                             <label className="alert-danger">{errors.quantity}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-3">
//                         <label htmlFor="txtrate">Rate</label>
//                         <input type="text" className="form-control" name="rate" id="rate" value={getRate(contents.ItemSpecification)} onChange={OnDataModified}/>
//                         {
//                             errors.rate!=='' &&
//                             <label className="alert-danger">{errors.rate}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-3">
//                         <label htmlFor="txtgst">GST</label>
//                         <input type="text" className="form-control" name="gst" id="gst" value={contents.gst} onChange={OnDataModified}/>
//                         {
//                             errors.gst!=='' &&
//                             <label className="alert-danger">{errors.gst}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-6">
//                         <label htmlFor="txtPaidBy">Paid By</label>
//                         <input type="text" className="form-control" name="paidBy" id="paidBy" value={contents.paidBy} onChange={OnDataModified}/>
//                         {
//                             errors.paidBy!=='' &&
//                             <label className="alert-danger">{errors.paidBy}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-3">
//                         <label htmlFor="txtpaidAmount">Paid Amount</label>
//                         <input type="text" className="form-control" name="paidAmount" id="paidAmount" 
//                         value={contents.paidAmount} 
//                         onChange={OnDataModified}/>
//                         {
//                             errors.paidAmount!=='' &&
//                             <label className="alert-danger">{errors.paidAmount}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-4">
//                         <label htmlFor="txtpaidRemarks">Paid Remarks</label>
//                         <input type="text" className="form-control" name="paidRemarks" id="paidRemarks" value={contents.paidRemarks} onChange={OnDataModified}/>
//                         {
//                             errors.paidRemarks!=='' &&
//                             <label className="alert-danger">{errors.paidRemarks}</label>
//                         }
//                     </div>


//                     <div className="form-group col-md-4">
//                         <label htmlFor="txtselectedUnit">Selected Unit</label>
//                         <input type="text" className="form-control" name="selectedUnit" id="selectedUnit" value={contents.selectedUnit} onChange={OnDataModified}/>
//                         {
//                             errors.selectedUnit!=='' &&
//                             <label className="alert-danger">{errors.selectedUnit}</label>
//                         }
//                     </div>  


//                     <div className="form-group col-md-4">
//                         <label htmlFor="txtselectedPaymentMode">Payment Mode</label>
//                         <select defaultValue="Select Payment Mode" type="text" className="form-control" name="paymentMode" id="paymentMode" onChange={OnDataModified}>
//                             <option >Select Payment Mode</option>
//                             <option>Cash</option>
//                             <option>Debit Card / Credit Card</option>
//                             <option>UPI</option>
//                         </select>
//                         {
//                             errors.paymentMode!=='' &&
//                             <label className="alert-danger">{errors.paymentMode}</label>
//                         }
//                     </div>    
//                 </div>    

//                  <button type="submit"  className="btn btn-primary"  >Add Bill</button>
                 
//                 </form>
//         </div>
        
//             );
//     }

//  const mapDispatchToProps=dispatch=>{
//      return{
//          addNewBill:(contents)=>{
//              dispatch({type:"ADD", payload:contents})}
//  }
// }

// export default connect(null,mapDispatchToProps)(AddNewBill);