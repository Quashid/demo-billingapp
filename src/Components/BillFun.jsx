import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {withRouter} from 'react-router-dom';


var updateId;
var curBill;

const BillFun = (props) =>
{
    
   

    const updateBill = (args) =>
    {
        
       const {title} = args.target;
       console.log("inside updateBill"+title);
       updateId = {title};
       curBill = {...props.Bill};
        props.history.push("/updatebill");
       
    }
    
    
   

    return(
        <React.Fragment>
               <tbody>    
               <tr className="row" style={{backgroundColor:"wheat"}}>
                   {/* {Object.entries(props.Bill).map(entry => {
                       return (
                           (entry.keys !== "_id" && entry.keys !== "__v") &&
                       <td>{entry.values}</td>
                       )
                   })} */}
    {Object.keys(props.Bill).map(key => { 
        return (key !== "_id" && key !== "__v") ?
         <td>{props.Bill[key]}</td> : null;
        }
           )
        }
               </tr>
               <tr className="row" style={{backgroundColor:"whitesmoke"}}>
        <td><input type="button" title={props.Bill["_id"]} value="Change" className="btnbtn-sm" onClick={updateBill}></input></td>
               <td><input type="button" title={props.Bill["_id"]} value="Delete" className="btn btn-danger" onClick={props.onDelete}></input></td>
               <td colSpan="12"></td>
               </tr>
               </tbody>
           </React.Fragment>
    )
}

export default withRouter(BillFun);
export {updateId,curBill};