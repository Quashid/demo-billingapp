import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


class HeaderComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container" style={{backgroundColor:`rgba(${14},${115},${145},${0.5})`}}>
            <h2  style={{fontFamily : "sans-serif",textAlign :"center"}}>The Billing App</h2>
            </div>
         );
    }
}
 
export default HeaderComponent;