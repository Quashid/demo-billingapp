
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from './HeaderComponent';
import Dashboard from './DashBoard';
import FooterComponent from './FooterComponent';
import Timer from './Timer';
import { Switch,Route,Link,NavLink } from 'react-router-dom';
import AddBill from './AddBill';
import {NotFound} from './FunctionalComponent';
import Login from './Login';
import Secure from './Secure'
import RouteWrapper from './RouteWrapper';
import LoginFun from './LoginFun';
import AddBillFun from './AddBillFun';
import AddNewBill from './AddNewBill';
import UpdateBillFun from './UpdateBillFun'
import DashboardFun from './DashboardFun';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                 <h1 style={{textAlign:"center",backgroundBlendMode:"darken",backgroundColor:"#141E30",color:"khaki"}}>The Ultimate Store</h1>
                 {/* <Timer></Timer>   */}
                 <nav className="navbar-default" style={{fontFamily:"sans-serif",fontSize:20+"px"}}>
                     <button className="btn navbar-btn" style={{backgroundColor:"salmon"}}><NavLink to="/home" activeStyle={{fontWeight:"bold",color:"snow"}}> {"\t"}  Dashboard {"\t"} </NavLink></button> 
                     <button className="btn navbar-btn" style={{backgroundColor:"salmon",color:"snow",marginLeft:20+"px"}}> <NavLink to="/register"  activeStyle={{fontWeight:"bold",color:"snow"}}> {"\t"} Add Bill {"\t"} </NavLink></button>
                     {/* <button className="btn navbar-btn" style={{backgroundColor:"salmon",color:"snow",marginLeft:20+"px"}}> <NavLink to="/secure"  activeStyle={{fontWeight:"bold",color:"snow"}}> {"\t"} Secure Page{"\t"} </NavLink></button> */}
                    </nav>
                 <HeaderComponent></HeaderComponent>
                 
                   
                 <Switch>
                    {/* <RouteWrapper  exact component = {AddBill} path="/register"></RouteWrapper> */}
                    <RouteWrapper  exact component = {AddBillFun} path="/register"></RouteWrapper>
                    {/* <Route exact component = {LoginFun} path="/login"></Route> */}
                    {/* <RouteWrapper exact path="/secure" component = {Secure}></RouteWrapper> */}
                    {/* <Route exact component = {Secure} path="/secure"></Route> */}
                     {/* <RouteWrapper exact component = {Dashboard} path="/home"></RouteWrapper> */}
                     <RouteWrapper exact component = {DashboardFun} path="/home"></RouteWrapper>
                     <RouteWrapper exact component = {UpdateBillFun} path="/updatebill"></RouteWrapper>
                     <Route exact component = {LoginFun} path="/"></Route>
                     <Route path="*"> <NotFound></NotFound></Route> {/* also can you a callback fun*/}
                 </Switch>
                 <FooterComponent></FooterComponent>
            </div>
        
        );
    }
}
 
export default Home;