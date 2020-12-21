import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Bill extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            localBill : this.props.Bill,
        }    

    }
 
    
    //Changing state Value Props are only read only value
    // changeVal = () =>
    // {
    //     // console.log("Inside Change Val");
    //     // let tempBill = {...this.localBill};
    //     // tempBill["paidBy"] = "Rakesh";
    //     // this.setState({localBill : tempBill},() => {
    //     //     console.log("Local Bill is Paid By",this.state.localBill["paidBy"]);
    //     // })

    // }
    render() {
        return (
           <React.Fragment>
               <tbody>    
               <tr className="row" style={{backgroundColor:"wheat"}}>
               {Object.values(this.props.Bill).map(val => (<td>{val}</td>))}
               </tr>
               <tr className="row" style={{backgroundColor:"whitesmoke"}}>
               <td><input type="button" title={this.props.Bill["_id"]} value="Change" className="btnbtn-sm" onClick={this.props.onUpdate}></input></td>
               <td><input type="button" title={this.props.Bill["_id"]} value="Delete" className="btn btn-danger" onClick={this.props.onDelete}></input></td>
               <td colSpan="12"></td>
               </tr>
               </tbody>
           </React.Fragment>
         )
    }
 }
 export default Bill;
 
