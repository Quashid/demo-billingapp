import React, { Component } from 'react';
import Authhelper from './Authhelper';
import {withRouter} from 'react-router-dom';

const Secure = ({history}) =>
 {
    

    const logout=()=>{
        Authhelper.logout(()=>{
           
            console.log("inside if & props is",history)
            history.push("/");
          
        })
    }
   
        return ( 
            <div>
                {/* <h4>{Authhelper.authenticated.toString}</h4> */}
                {/* <h4>{String(Authhelper.authenticated)}</h4> */}
            <button onClick={logout} style={{margin:10}}> Logout</button>
      </div>
         );
    
}
 
export default withRouter(Secure);