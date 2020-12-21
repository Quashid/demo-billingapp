onDataModified = args => {
    let controlThatChanged = args.target;
 
   let tempBill = this.state.newBill;
    if(controlThatChanged.id == "itemSpecification")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error: "Cannot be blank"});
        }
        else
        {
            tempBill.itemSpecification = controlThatChanged.value;
            this.setState({newBill:tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "dateOfOrder")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : "Cannot be blank"});
        }
        else
        {
            tempBill.dateOfOrder = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "orderedBy")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : "cannot be blank"});
        }
        else
        {
            tempBill.orderedBy = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "deliveryDate")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : "Cannot be blank"});
        }
        else
        {
            tempBill.deliveryDate = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "supervisedBy")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : "Cannot be blank"});
        }
        else
        {
            tempBill.supervisedBy = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "quantity")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : "Cannot be blank"});
        }
        else
        {
            tempBill.quantity = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "rate")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : "Cannot be blank"});
        }
        else
        {
            tempBill.rate = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "gst")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : " Cannot be blank"});
        }
        else
        {
            tempBill.gst = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "paidBy")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error2 : "Cannot be blank"});
        }
        else
        {
            tempBill.paidBy = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "paidAmount")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : "Cannot be blank"});
        }
        else
        {
            tempBill.paidAmount = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "paidRemarks")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error2 : "Cannot be blank"});
        }
        else
        {
            tempBill.paidRemarks = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "selectedUnit")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : "Cannot be blank"});
        }
        else
        {
            tempBill.selectedUnit = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }
    else if(controlThatChanged.id == "selectedPaymentMode")
    {
        if(controlThatChanged.value == "")
        {
          this.setState({error : "Cannot be blank"});
        }
        else
        {
            tempBill.selectedPaymentMode = controlThatChanged.value;
            this.setState({newBill: tempBill, error:""});
        }
    }

    

}

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
        selectedPaymentMode:'',

    },
    
    errors:{
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

    
}


addBillItem = () =>{
   let temp=this.state.newBill;
   temp.id +=1;
   this.setState({newBill:temp},()=>{
    console.log(this.state.newBill);
   })
   

}

onDataModified = args => {
   //args.preventDefault();

   const {name,value} = args.target;
   let error = this.state.errors;
   let currentBill = this.state.newBill; 
   switch(name)
   {
     case 'itemSpecification': error.itemSpecification = value == ''?'Specification can\'t be blank':('',currentBill.itemSpecification=value);
     break;                          
   }
   
    }


    /*
class InputBox extends Component {
    state = { Name:"", Address:""}



    submitVal = () =>
    {
        console.log("Hello",this.state.Name,this.state.Address);
    }

    addAddress = (args) =>
    {
        this.setState({Address : args.target.value},() => {
            console.log(this.state.Address);
        }
        );
    }
       

    addName = (args) =>
    {
        this.setState({Name : args.target.value}, () =>
        {
            console.log(this.state.Name);
        }
        );
        
    }

    render() { 
        return ( 
            <div>
                <label>Enter your name:</label>
                <input type="text" className="form-control" onChange={this.addName} value={this.state.Name}></input>
                <br/>
                <label>Enter your Address</label>
                <input type="text" className="form-control" onChange={this.addAddress} value={this.state.Address}></input>
                <br/>
                <input type="button" value="Click me" className="button-transparent" onClick={this.submitVal}></input>
            </div>
            <div className="">
           {/*<form action="" method="POST" role="form">
                <legend>Add A Bill Item</legend>
            
                <div className="form-group">
                    <label htmlFor="txtItemSpecification">Item Specification</label>
                    <input type="text" className="form-control" id="txtItemSpecification" placeholder="Enter item specification here"/>
                </div>
            
                
            
                <button type="button" className="btn btn-primary">Submit</button>
        {/*</form>
            </div>

         );
    }
}

<div className="form-group" style={{marginLeft:15+"px"}}>
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group" style={{marginLeft:15+"px"}}>
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>


export default InputBox;
*/

    
/*
<td><input type="button" value="Delete" className="btn-warning" onClick={() => {this.props.onDelete(this.props.Bill["id"]);}}></input></td>

     <td>{this.props.Bill["id"]}</td>
               <td>{this.props.Bill["itemSpecification"]}</td>
               <td>{this.props.Bill["dateOfOrder"]}</td>
               <td>{this.props.Bill["orderedBy"]}</td>
               <td>{this.props.Bill["deliveryDate"]}</td>
               <td>{this.props.Bill["supervisedBy"]}</td>
               <td>{this.props.Bill["quantity"]}</td>
               <td>{this.props.Bill["rate"]}</td>
               <td>{this.props.Bill["gst"]}</td>
               <td>{this.props.Bill["paidBy"]}</td>
               <td>{this.props.Bill["paidAmount"]}</td>
               <td>{this.props.Bill["paidRemarks"]}</td>
               <td>{this.props.Bill["selectedUnit"]}</td>
               <td>{this.props.Bill["selectedPaymentMode"]}</td>

               Object.getOwnPropertyNames(this.state.bill).map(key=>{
                         return (<td>{key}  | { this.state.bill[key]}</td>)
                        })
 */


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}



const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}



const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}





//Addbill

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {ValidateMyForm,getCount} from './FunctionalComponent'



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
       
       this.setState({isFormValid: ValidateMyForm(this.state.error)});
       this.setState({totalNoOfErrors: getCount(this.state.error)});
      

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
            <form onSubmit={this.addBillItem} style={{backgroundColor:"sienna",backgroundBlendMode:"overlay"}}>
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
  <button className="btn btn-primary" onClick={this.addBillItem}>ADD BILL</button>
  {
   
    (this.state.totalNoOfErrors == 0) 
    ?
    <label className="label-success"> Form Submitted</label>
    :
    <label className="label-warning">Form can't be Submitted</label>
  }
  </form>
</div>

            
            
         );
    }
}

 
export default AddBill;


//Practice area
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Bill from './Bill'

class Dashboard extends Component {
    state = { 
        counter: 4,
        searchtext:"",
        Bills : [{"id":1,"itemSpecification" : "Vada Pav", "dateOfOrder":"08/02/2020","orderedBy":"Ajit","deliveryDate":"08/02/2020",
    "supervisedBy":"req.body.supervisedBy","quantity":20,"rate":21.89,"gst":18,"paidBy": "Sunaina","paidAmount":180,"paidRemarks":"Paid By Cash",
    "selectedUnit":"Lumpsum","selectedPaymentMode":"Cash"},

        {"id":2,"itemSpecification" : "dhokla", "dateOfOrder":"08/02/2020","orderedBy":"Vineet","deliveryDate":"08/02/2020",
"supervisedBy":"req.body.supervisedBy","quantity":20,"rate":25.89,"gst":18,"paidBy": "Neha","paidAmount":200,"paidRemarks":"Paid By Cash",
"selectedUnit":"Lumpsum","selectedPaymentMode":"Cash"},

{"id":3,"itemSpecification" : "Pav Bhaji", "dateOfOrder":"09/02/2020","orderedBy":"Sumit","deliveryDate":"09/02/2020",
"supervisedBy":"req.body.supervisedBy","quantity":19,"rate":23.89,"gst":18,"paidBy": "Sneha","paidAmount":180,"paidRemarks":"Paid By Card",
"selectedUnit":"Lumpsum","selectedPaymentMode":"Card"},
{
    "id": 4,
    "itemSpecification": "Jamun",
    "dateOfOrder": "08/01/2020",
    "orderedBy": "Mahesh",
    "deliveryDate": "09/02/2020",
    "supervisedBy": "MP",
    "quantity": 100,
    "rate": 30,
    "gst": 18,
    "paidBy": "Mahesh",
    "paidAmount": 500,
    "paidRemarks": "Paid by Cash",
    "selectedUnit": "Lumpsum",
    "selectedPaymentMode": "Cash"
  }

] }


    //Functionality for Adding a new Bill
    addBill = () =>
    {
        console.log("inside addBill");
        console.log(this.state.counter);
      this.setState({counter: this.state.counter+1}, () => {
          const newBill = {
            "id":this.state.counter,"itemSpecification" : "Rassgulla", "dateOfOrder":"08/02/2020","orderedBy":"Puneet","deliveryDate":"08/02/2020",
            "supervisedBy":"req.body.supervisedBy","quantity":15,"rate":20.89,"gst":17,"paidBy": "Nita","paidAmount":160,"paidRemarks":"Paid By Cash",
            "selectedUnit":"Lumpsum","selectedPaymentMode":"Cash"
          }
        console.log(this.state.counter);
    
          this.setState({
              Bills :[...this.state.Bills , newBill ]
            });
      });
    }


    //Functionality for deleting a Value
    /*deleteVal = (no) =>
    {
        console.log("inside delete" + no);

        let newBills = this.state.Bills.filter( bill => {return bill["id"] !== no});
        this.setState({Bills : [...newBills]});
    }*/

    
    deleteVal = args =>
    {
        console.log(args);
        let no = args.target.title;
        console.log("inside delete" + no);
        let newBills = this.doFilter(no);
        
        this.setState({Bills : newBills});
    }


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


    render() { 
        return ( 
            <div className="container">
               
                <br/>
                <label>Search:</label><input type="text" className="form-control" name="txtSearch" id="txtSearch" onChange={this.searchVal} value={this.state.searchtext}></input>
                <br/>
                <input type="button" value="Add Bill" className="btn btn-info" onClick={this.addBill} style={{marginRight:10}}></input>
                <input type="button" value="Reset" className="btn button-narrow" onClick={this.resetVal}/>
                <h3 style={{backgroundColor : "green",fontFamily : "sans-serif",backgroundBlendMode:"darken",textAlign:"center"}}> My Bill</h3>
                <div className="table-responsive">
                <table className="table table-bordered">
                   <thead><tr className="row" style={{backgroundColor:"tomato"}}>
                       {Object.keys(this.state.Bills[0]).map(key => (<th>{`${key.toUpperCase()}`}</th>))}
                    </tr>
                    </thead>
                {this.state.Bills.map(billItem => {

                    
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
                                <Bill key={billItem["id"]}  Bill={billItem} onDelete={this.deleteVal} ></Bill>
                            )
                        }
                    }
                    
                )}
                </table>
                </div>
            </div>
            
         );
    }
}
 
export default Dashboard;

//Home

class Home extends Component {
  state = {  }
  render() { 
      return ( 
          <div className="container">
               <h1 style={{textAlign:"center",backgroundBlendMode:"darken",backgroundColor:"lawngreen"}}>My Billing App</h1>
               <Timer></Timer>  
               <nav className="navbar-default" style={{fontFamily:"sans-serif",fontSize:20+"px"}}>
                   <NavLink to="/home" activeStyle={{fontWeight:"bold",color:"green"}}> {"\t"}  Dashboard {"\t"} </NavLink> ||
                      <Link to="/register"> {"\t"} Add Bill {"\t"} </Link>
                  </nav>
               <HeaderComponent></HeaderComponent>
               
                 
               <Switch>
                  <Route component = {AddBill} path="/register"></Route>
                   <Route component = {Dashboard} path="/home"></Route>
                   <Route path="*"> <NotFound></NotFound></Route>
               </Switch>
               <FooterComponent></FooterComponent>
          </div>
      
      );
  }
}

export default Home;