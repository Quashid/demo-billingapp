import React, { useState } from 'react';
import Authhelper from './Authhelper';
import {withRouter} from 'react-router-dom';



const LoginFun = ({history}) =>
{
   
    let[loginCreds,setCreds] = useState({email:"",password:""});

    const changeData = (args) =>
    {
        let {name,value} = args.target;
       // console.log(history);
        switch(name)
        {
            case 'uid': loginCreds.email=value;
            break;
            case 'pass': loginCreds.password = value; 
            break;
          default:alert("Some error Happened");
        }
    }

    const signIn = () =>
      {
          console.log("inside sign In");
          Authhelper.login(loginCreds, isUserAuth=>
          {    
              console.log("Value of authhelper is"+isUserAuth);
            if(isUserAuth == true)
            {
               history.push('/home');
            }
            else{
                history.push('/');
            }
          })
      }

    // const showData = ()=>
    // {
    //     console.log("inside show data",loginCreds.email,loginCreds.password);
    // }
    
    return (
        <div>
        <div className="form-control" style={{backgroundColor:"#A52A2A",height:300,width:300,marginTop:100,marginBottom:50,marginLeft:30,color:"snow"}}>
            <legend style={{color:"snow"}}> LOGIN CONTAINER</legend>
            <label htmlFor="uid" style={{margin:15}}>UserName</label>
            <input type="email" placeholder="Enter your Username" onChange={changeData} id="uid" name="uid" style={{color:"black"}}></input>
            <br></br>
            <label htmlFor="pass" style={{margin:17}}>Password</label>
            <input type="password" placeholder="Enter your password" onChange={changeData} id="pass" name="pass" style={{color:"black"}}></input>
            <br></br>
            <button className="btn btn-primary" onClick={signIn} style={{margin:15}}>Login</button>
            {/* <Switch>
                <RouteWrapper exact path="/secure" component={Secure}></RouteWrapper>
            </Switch> */}
        </div>
       
        </div>
    )
}

export default withRouter(LoginFun);