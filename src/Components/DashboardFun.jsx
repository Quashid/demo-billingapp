import React , {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as Actions from '../store/Action';
import Secure from './Secure';
import { connect } from 'react-redux';
import BillFun from './BillFun';

const DashboardFun = (props) =>
{
    const [searchtext,setSearchText] = useState("");

    useEffect( ()=>{
        console.log("##### inside component Did Mount####");
        props.fetchData();}
        ,[]
    );

    
    const deleteValue = args =>
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

   props.fetchData();

    }


   const resetVal = () =>
    {
        setSearchText("");
    }    


    const searchVal = args =>
    {

        console.log("Search is called" + args.target.value);
        setSearchText(args.target.value);
    }


    if(props.Bills.length === 0)
    {
    return (
        <h1>Loading...</h1>
    )
    }
    else
    {

    console.log("bills is"+props.Bills);
    return ( 
     
        <div className="container">

            <br/>

            <label>Search:</label><input type="text" className="form-control" name="txtSearch" id="txtSearch" onChange={searchVal} value={searchtext}></input>
            <br/>
            {/* <Link to="/register"> <input type="button" value="Add Bill" className="btn btn-info" style={{marginRight:10}}/></Link>
            <Switch>
                 <Route path="/register" render={(Bills)=>(<AddBill {...Bills} addBill = {this.state.AddBill}></AddBill>)}></Route>
             </Switch> */}
            <input type="button" value="Reset" style={{marginRight:10}} className="btn btn-warning" onClick={resetVal}/>
            {/* <input type="button" value="EditData" style={{marginRight:10}} className="btn btn-success" onClick={this.editData}/>
            <input type="button" value="getSelectedData"  style={{marginRight:10}} className="btn btn-success" onClick={this.getSelectedData}/> */}
            
            <h3 style={{backgroundColor : "#A52A2A",fontFamily : "sans-serif",backgroundBlendMode:"darken",textAlign:"center",color:"snow",fontWeight:"bold"}}> My Bills</h3>
            <div className="table-responsive">
            <table className="table table-bordered">
               <thead><tr className="row" style={{backgroundColor:"tomato"}}>
                   {Object.keys(
                       props.Bills[0]).map(key => {

                   return (
                      ( key !== "_id" && key !=="__v" ) &&
                   <th>{`${key.toUpperCase()}`}</th>
                   )
                       }
                   )}
                </tr>
                </thead>
            {props.Bills.map(billItem => {

                
                    //console.log("Searct Text is"+this.state.searchtext);
                    if(billItem.orderedBy.indexOf(searchtext) == -1)
                    {
                        console.log("do nothing")
                        return null;
                    }
                    else
                    {
                        console.log("inside ")
                        return (
                            <BillFun key={billItem["id"]}  Bill={billItem} onDelete={deleteValue}  ></BillFun>
                        )
                    }
                }
                
            )}
            </table>
            {/* <button onClick={this.login} className="btn btn-primary">Login Here</button> */}
            </div>
            <Secure></Secure>
        </div>
    )
}
}


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

export default connect(mapStateToProps,mapDispatchToProps)(DashboardFun);