import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Counter} from './FunctionalComponent';

class FooterComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container" style={{backgroundColor:"#141E30",backgroundBlendMode:"darken",color:"khaki"}} >
            {/* <Counter></Counter> */}
            <h6 className="footer" style={{fontFamily: "Helvetica", textAlign:"right",padding:30,margin:"0 auto",visibility:"initial"}}>copyright @quashid </h6>
            </div>
         );
    }
}
 

export default FooterComponent;