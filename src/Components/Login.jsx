import React, { Component } from 'react';
import Authhelper from './Authhelper';


class Login extends Component {
    state = {
        user: {email: "quashid@email.com", password: "quashid@123"}
      }

      signIn = () =>
      {
          console.log("inside sign In");
          Authhelper.login(this.state.user, isUserAuth=>
          {
              console.log("Value of authhelper is"+isUserAuth);
            if(isUserAuth == true)
            {
                console.log("inside if & props is",this.props)
                this.props.history.push('/secure');
            }
            else{
                console.log("inside if & props is",this.props.history)
                this.props.history.push('/login');
            }
          })
      }
    render() { 
        return ( 
            <div>
                <h1>This is Login page</h1>
                <button onClick={this.signIn}>SignIn</button>
            </div>
         );
    }
}
 
export default Login;