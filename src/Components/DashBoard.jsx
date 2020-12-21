import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Bill from './Bill';
import { Switch,Route,Link,NavLink, useRouteMatch } from 'react-router-dom';
import AddBill from './AddBill';
import Secure from './Secure';
import { connect } from 'react-redux';
import * as CONSTANTS from '../store/Constants';
import * as Actions from '../store/Action';
import path from 'path';

class Dashboard extends Component {
    state = { 
        // counter: 4,
        // loading : true,
        searchtext:"",
        // Bills : [{
        //     "id":0,"itemSpecification" : "Rassgulla", "dateOfOrder":"08/02/2020","orderedBy":"Puneet","deliveryDate":"08/02/2020",
        //     "supervisedBy":"req.body.supervisedBy","quantity":15,"rate":20.89,"gst":17,"paidBy": "Nita","paidAmount":160,"paidRemarks":"Paid By Cash",
        //     "selectedUnit":"Lumpsum","selectedPaymentMode":"Cash"
        //   }] }
    }

    //Functionality for Adding a new Bill
    


    //Functionality for deleting a Value
    /*deleteVal = (no) =>
    {
        console.log("inside delete" + no);

        let newBills = this.state.Bills.filter( bill => {return bill["id"] !== no});
        this.setState({Bills : [...newBills]});
    }*/

    // componentDidMount()
    // {
    //     console.log("##### inside component Did Mount####",{method:"GET"});

    //     // fetch("./inventoryData.json")
    //     fetch("http://localhost:8082/api/billing")
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(response => {
    //         console.log(response);
    //         let tempBill = [...this.state.Bills];
    //         response.forEach((value)=>{
    //             tempBill.push(value); 
    //         })
    //         console.log("Bill is"+tempBill);
            
    //         this.setState({Bills:tempBill});

    //     })
    //     .catch(err => console.log(err))
    // }
    
    componentDidMount()
    {
        console.log("##### inside component Did Mount####");
        this.props.fetchData();
    }

    componentDidUpdate()
    {
        console.log("##### inside component Did Updatet####");
        
    }
    // deleteData = () => {
    //     fetch("http://localhost:8082/api/billing/5fd8ddd2fb26436727eb1bc6",{method:"DELETE"})
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(response => {
    //        console.log(response);

    //     })
    //     .catch(err => console.log(err))

    // }

    deleteValue = args =>
    {
        let no = args.target.title;
        console.log("inside deleteValue");
        // console.log("no is"+no);
        let delPath = "http://localhost:8082/api/billing/"+no;
        // console.log("delete path is"+delPath);
        fetch(delPath,{method:"DELETE"})
   .then(response => {
       return response.json();
   })
   .then(response => {
      console.log(response);

   })
   .catch(err => console.log(err))

   this.props.fetchData();

    }


    editData = () => {

        let data = {
            "itemSpecification" : "Dharwadi Peda", "dateOfOrder":"08/02/2020","orderedBy":"Mahesh","deliveryDate":"08/02/2020",
            "supervisedBy":"req.body.supervisedBy","quantity":15,"rate":20.89,"gst":17,"paidBy": "Nita","paidAmount":160,"paidRemarks":"Paid By Cash",
            "selectedUnit":"Lumpsum","selectedPaymentMode":"Cash"
          }

        fetch("http://localhost:8082/api/billing/5fd8e8ea4bd6916781d0c7e5",{method:"PATCH",headers:{'Content-Type':'application/json'},body: JSON.stringify(data)})
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err)) 

    }

    // sendData = () =>{


    //     let data = {
    //         "itemSpecification" : "Samosa", "dateOfOrder":"08/02/2020","orderedBy":"Mahesh","deliveryDate":"08/02/2020",
    //         "supervisedBy":"req.body.supervisedBy","quantity":15,"rate":20.89,"gst":17,"paidBy": "Nita","paidAmount":160,"paidRemarks":"Paid By Cash",
    //         "selectedUnit":"Lumpsum","selectedPaymentMode":"Cash"
    //       }

    //     fetch("http://localhost:8082/api/billing",{method:"POST",headers:{'Content-Type':'application/json'},body: JSON.stringify(data)})
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(err => console.log(err)) 

        
    // }

    getSelectedData = () =>{

        fetch("http://localhost:8082/api/billing/5fd8e8ea4bd6916781d0c7e5")
        .then(response => {
            return response.json();
        })
        .then(response => {
           console.log(response);

        })
        .catch(err => console.log(err))
    }

    


    //Functionality for deleting values
    // deleteVal = args =>
    // {
    //     // console.log(args);
    //     let no = args.target.title;
       

    //     // console.log("inside delete" + no);
    //     // let newBills = this.doFilter(no);
        
    //     // this.setState({Bills : newBills});
    //     // this.props.deleteBill(no);
    // }


    //filteration method
    doFilter = no =>
    {
        console.log("inside do filter");
        return this.state.Bills.filter( bill => {return bill["id"] != no});
    }

    //Functionality for searching a Value
    searchVal = args =>
    {

        console.log("Search is called" + args.target.value);
        this.setState({searchtext : args.target.value});
    }

    //functionality to reset the textBox Value
    resetVal = () =>
    {
        this.setState({searchtext:""});
    }

    //functionality to add a bill
    // addBill = (singleBill) =>
    // {
    //     console.log("inside this AddBill");
    //     let singleBill = args.target.value;
    //     console.log("Single bill is"+singleBill);
    //    let localBills = this.state.Bills;
    //    localBills.push(singleBill);

    //    this.setState({Bills:localBills});

    // }

    // login = () => 
    // {
    //     this.props.history.push("/login");
    // }


    updateBill = (args) =>
    {
       const {title} = args.target;
        // this.props.history.push("/updatebill");
        
    }

    renderHeaders = (key) =>
    {   

        if(key == "_id" || key == "__v")
        return null;
        else 
        return key;
    }

    render() { 
        if(this.props.Bills.length === 0)
        {
        return (
            <h1>Loading...</h1>
        )
        }
        else
        {

        console.log("bills is"+this.props.Bills);
        return ( 
         
            <div className="container">

                <br/>

                <label>Search:</label><input type="text" className="form-control" name="txtSearch" id="txtSearch" onChange={this.searchVal} value={this.state.searchtext}></input>
                <br/>
                {/* <Link to="/register"> <input type="button" value="Add Bill" className="btn btn-info" style={{marginRight:10}}/></Link>
                <Switch>
                     <Route path="/register" render={(Bills)=>(<AddBill {...Bills} addBill = {this.state.AddBill}></AddBill>)}></Route>
                 </Switch> */}
                <input type="button" value="Reset" style={{marginRight:10}} className="btn btn-warning" onClick={this.resetVal}/>
                <input type="button" value="EditData" style={{marginRight:10}} className="btn btn-success" onClick={this.editData}/>
                <input type="button" value="getSelectedData"  style={{marginRight:10}} className="btn btn-success" onClick={this.getSelectedData}/>
                
                <h3 style={{backgroundColor : "#A52A2A",fontFamily : "sans-serif",backgroundBlendMode:"darken",textAlign:"center",color:"snow",fontWeight:"bold"}}> My Bills</h3>
                <div className="table-responsive">
                <table className="table table-bordered">
                   <thead><tr className="row" style={{backgroundColor:"tomato"}}>
                       {Object.keys(
                           this.props.Bills[0]).map(key => (
                       <th>{`${key.toUpperCase()}`}</th>
                       )
                       )}
                    </tr>
                    </thead>
                {this.props.Bills.map(billItem => {

                    
                        //console.log("Searct Text is"+this.state.searchtext);
                        if(billItem.orderedBy.indexOf(this.state.searchtext) == -1)
                        {
                            console.log("do nothing")
                            return null;
                        }
                        else
                        {
                            console.log("inside ")
                            return (
                                <Bill key={billItem["id"]}  Bill={billItem} onDelete={this.deleteValue} onUpdate={this.updateBill} ></Bill>
                            )
                        }
                    }
                    
                )}
                </table>
                {/* <button onClick={this.login} className="btn btn-primary">Login Here</button> */}
                </div>
                <Secure></Secure>
            </div>
           
         );}
    }
}
 
// export default Dashboard;

const mapStateToProps = returnedState =>
{
    console.log("returned state is",returnedState);
    return {Bills:returnedState.data};
}

const mapDispatchToProps=dispatch=>{
    return{
        // deleteBill:(id)=>{dispatch({type:CONSTANTS.DEL, payload:{id:id}})},
        fetchData:() => {dispatch(Actions.fetchData())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
