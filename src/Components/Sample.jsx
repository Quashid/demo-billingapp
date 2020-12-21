import React, { useState,useEffect,useContext } from 'react';


class Sample extends React.Component {
    state = {
      name: 'World'
    }
  
    componentDidMount() {
      this.setState({ name: 'World'});
    }
  
    render() {
        console.log("inside render");
      return <div>Hello {this.state.name}!</div>
    }
  }

  export default Sample;

// class Sample extends React.Component {
//     componentDidMount() {
//       console.log('mount');
//     }
  
//     render() {
//       return [];
//     }
//   }

//   export default Sample;


// const DataContext = React.createContext();
// const AnotherContext=React.createContext();

// let Outer = () =>
// {
//     return (
//         <DataContext.Provider value="upgrad">
//             <div>
//                 <Inner1></Inner1>
//                 <AnotherContext.Provider value="me">
//                 <Inner2></Inner2>
//                 </AnotherContext.Provider>
//             </div>
//         </DataContext.Provider>
//     )
// }

// function Inner1()
// {
//     return (
//         <React.Fragment>
//         <DataContext.Consumer>
//             {value => <h4>Inner 1: {value}</h4>}
//         </DataContext.Consumer>
//         <AnotherContext.Consumer>
//         {value => <h4>Inner 1: {value}</h4>}
//         </AnotherContext.Consumer>
//         </React.Fragment>
//     )
// }


// function Inner2()
// {
//     const localContext = useContext(DataContext);
//     console.log("Data Context is"+localContext);
//     return (
//         <React.Fragment>
//         <DataContext.Consumer>
//             {value => <h4>Inner 2: {value}</h4>}
//         </DataContext.Consumer>
//         <AnotherContext.Consumer>
//         {value => <h4>Inner 2: {value}</h4>}
//         </AnotherContext.Consumer>
//         </React.Fragment>
//     )
// }



// const themes = {
//     light: {
//       foreground: "#000000",
//       background: "#eeeeee"
//     },
//     dark: {
//       foreground: "#ffffff",
//       background: "#222222"
//     }
//   };
  
//   const ThemeContext = React.createContext(themes.light);
  
//   function Toolbar() {
//     return (
//       <ThemeContext.Provider value={themes.light}>
//         <ThemedButton />
//       </ThemeContext.Provider>
//     );
//   }
  
//   function ChangeContext()
//   {
//       console.log("inside change context");
//       return (
//         <ThemeContext.Provider value={themes.dark}>
//         <ThemedButton />
//       </ThemeContext.Provider>
//       );
//   }
 
  
//   function ThemedButton() {
//     const theme = useContext(ThemeContext);
//     return (
//         <div>
//             <ThemeContext.Consumer>
//       {value => {return <button style={{ background: theme.background, color: theme.foreground }} onClick={ChangeContext}>
//         I am styled by theme context!
//       </button>}}
//       </ThemeContext.Consumer>
//       </div>
//     );
//   }








// const MessageDisplay = ({myinfo}) => {

//     const [notf,setNotification] = useState("")

//     const valueChanged = () =>
//     {
//     return <h4>The value is changed for {myinfo.name}</h4>
//     }

//     useEffect(
//         () => {
//             setTimeout(()=> {
//                 setNotification("Value is Changed");
//                 console.log(myinfo.name)},3000);
            
//             return valueChanged();
//         },[myinfo]);
    
//         return <div className="label-default" > Data here is {myinfo.name} {myinfo.address} {notf} </div>
    
//     }





// const Sample = () =>
// {
//     const [fullDetails,setFullDetails] = useState({info :{ name:"John",address:"Doe"},id:4});

//     const callMe = () =>{
//         setFullDetails({info:{name:"Quashid",address:"BLR"},id:5});
//     }

//     return(
//         <div>
//             <h3>Hello {fullDetails.info.name} from {fullDetails.info.address} ID is {fullDetails.id}</h3>
//             <input type="text" value={fullDetails.info.name} onChange={(evt) => { setFullDetails({info:{name:evt.target.value}}) } }></input>
//             <br/> <br/>
//             <button onClick={callMe}>Click Here</button>
//             <hr>
//             </hr>

//             <MessageDisplay myinfo = {fullDetails.info}></MessageDisplay>

//             <Outer></Outer>
//             <Toolbar></Toolbar>

//         </div>
//     )
// }

// export default Sample;


// const Sample = () =>
// {
//     const [fullDetails,setFullDetails] = useState({info :{ name:"",address:""},id:4});

//     const callMe = () =>{
//         setFullDetails({info:{name:"Quashid",address:"BLR"},id:5});
//     }

//     return(
//         <div>
//             <h3>Hello {fullDetails.info.name} from {fullDetails.info.address} ID is {fullDetails.id}</h3>
//             <button onClick={callMe}>Click Here</button>
//         </div>
//     )
// }

// setInterval(() => {
// 	ReactDOM.render(
// 		<div className="clock">
// 			<h3>My Clock</h3>
// 			<div className="time">
//                               The time now is: 
//                                {new Date().toString()}
//                         </div>
// 		</div>, document.body
// 	);
// }, 1000);


//Billing Calculation
// export const getRate=(itemName)=>{
//   let ItemRate='';
//   switch(itemName){
//       case 'Dhokla': ItemRate=25;
//               break;
//       case 'Burfi': ItemRate=30;
//               break;
//       case 'Peda': ItemRate=25;
//               break;
//       case 'Jalebi': ItemRate=20;
//               break;
//       case 'Laddu': ItemRate=35;
//               break;      
//   }
//   return ItemRate;
// }

// export const getTotalPrice=(quantity,rate,gst)=>{
//   let netAmountToBePaid=null;

//   let originalAmount= quantity*rate;

//   let gstAmount=(originalAmount*gst)/100;

//   netAmountToBePaid=originalAmount+gstAmount;

//   return netAmountToBePaid;
  
// }