import React, {Component,useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


function Timer() {

	const x = 0;
	const [tick, setTick] = useState(0);
	useEffect(() => {
	  setTimeout(() => {
		setTick(tick + 1)
	  }, 1000)
	},)

	const foo = () =>
	{
		console.log("Something something");
	}

	return (
	  <div>{tick} {foo()} </div>
	);
  }

  export {Timer} 

// const Test = () =>
//   {
//     let[count,setState] = useState(0);
    
//     useEffect(()=>
//     {
//         setTimeout(()=>{
//             setState(count+1);
//         },1000);
//     });


//     return (
//         <div>
//             {count}
//         </div>
//     );
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

// export {Test};








// class Timer extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0
// 		}
// 	}

// 	componentDidMount() {
// 		// Continuously increment count every 1 second
// 		console.log("-------------Inside Component Did Mount-----------");

// 		this.interval = setInterval(() => {
// 			this.setState({ count: this.state.count + 1 })
// 		}, 1000);
// 	}

// 	shouldComponentUpdate(nextProps, nextState) {
// 		console.log("-------------Inside Component Should Update-----------");
// 		return true;
// 	}
	

// 	componentWillUnmount() {

// 		console.log("-------------Inside Component Did UnMount-----------");

// 		clearInterval(this.interval);
// 	}

// 	render() {
// 		return <h6>You are on the page since {this.state.count} seconds </h6>;
// 	}
// }

	/*
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.state = {
			count: 0
		};
	}

	onClick() {
		this.setState({
			count: this.state.count + 1
		});
		this.setState({
			count: this.state.count + 1
		});
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
<div>
Count is {this.state.count}
<button onClick={this.onClick}>Click me</button>
</div>
);
	}*/
// }

export default Timer;