// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getCount } from './FunctionalComponent';
// import * as ActionTypes from '../store/Action';

// //React Code
// class Testing extends Component {
//     state = {  }
//     render() { 
//         return ( 
//            <div>
//         <h1>Welcome {this.props.myEmp.id} || Mr {this.props.myEmp.name} || from {this.props.myEmp.address}</h1>
//         <button onClick={this.props.doChange} >Click Me</button>
//         </div> 
//          );
//     }
// }
 
// //export default Testing;


// let mapStateToProps = (stateData) => {
//     return {myEmp : stateData};
// }

// let mapEventHandlerstoProps = (dispatch) => {
//     return {doChange : ()=>{ dispatch({type : ActionTypes.CHANGE})}} //I dispatch a cammand to you named change
// }


// export default connect(mapStateToProps,mapEventHandlerstoProps)(Testing);

// const getComponent = connect(mapStateToProps,mapEventHandlerstoProps);
// const updatedTestingComponent = getComponent(Testing);

// export default updatedTestingComponent;