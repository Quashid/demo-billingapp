import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import AddBill from  './Components/AddBill';
import {BrowserRouter} from 'react-router-dom';
import Sample from './Components/Sample';
import Demo from './Components/Demo';
import Test from './Components/Test'
import Testing from './Components/Testing';
import {createStore,applyMiddleware} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import Dashboard from './Components/DashBoard';
import LoginFun from './Components/LoginFun';
import thunk from 'redux-thunk';

// ReactDOM.render(
//   <BrowserRouter>
//   <LoginFun></LoginFun>
//   </BrowserRouter>,
//     document.getElementById('root')
//   );

// ReactDOM.render(
// <Dashboard></Dashboard>,
//   document.getElementById('root')
// );


// const localStore = createStore(reducer);// store please talk to reducer for any data

const thunkstore = createStore(reducer,(applyMiddleware(thunk))); // for thunk data calls

// ReactDOM.render(
//   <Provider store={store}>
//     <Testing></Testing>
//   </Provider>
// ,
//   document.getElementById('root')
// );

//Server Side Rendering
// ReactDOM.hydrate(
//   <Demo></Demo>
//   ,document.getElementById('root')
// )


// ReactDOM.render(
// <Test></Test>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={thunkstore}>
<BrowserRouter>
<Home></Home>
</BrowserRouter>
</Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
