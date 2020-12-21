import React, { Component } from 'react';
import LI from './LI'

class Test extends Component {
    state = { 
        data:[
            {id:1,name:"Pulkit",address:"Delhi"},
            {id:2,name:"Puneet",address:"Pune"},
            {id:3,name:"Pushkar",address:"Jaipur"}
        ]
     }
    render() { 
        console.log("inside Test");
        return ( 
            <ul>
                {
            this.state.data.map(emp=> {
                    return <LI key={emp.id} {...emp}></LI>
            })
               
                 }
             </ul>
            
         );
    }
}
 
export default Test;