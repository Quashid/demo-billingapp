import React, {Component } from 'react';

class LI extends Component {
    state = {  }
    render() { 
        console.log("inside LI");
        return ( 
        <li style={{backgroundColor:"steelblue",margin:5+"px"}}>{this.props.id} ||{this.props.name} || {this.props.address}</li>
         );
    }
}
 
export default LI;