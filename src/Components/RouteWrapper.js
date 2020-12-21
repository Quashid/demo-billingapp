import Authhelper from './Authhelper';
import {Route,Redirect} from 'react-router-dom';

function RouteWrapper({component: Component,...restParam},props) //props for other properties
{
    //decisions about authentication taken before returning
   //return (<Route exact component = {Secure} path="/secure"></Route>)
   return (<Route {...restParam} render={ props => {
       if(Authhelper.isAuthenticated())
       return <Component props ></Component>;
       else
       {
           return (
               <Redirect to={{pathname:"/",
                 state:{from : props.location}}}></Redirect>
           );
       }
   }} ></Route>)
}

export default RouteWrapper;