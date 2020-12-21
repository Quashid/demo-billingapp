
import React,{useState,useContext,useEffect,useReducer} from 'react';



const ValidateMyForm = (bill) =>
{
    // console.log(errors)
    let isItValidForm = false;
        let allbill = Object.values(bill)
        // console.log(allErrors.length);
        for(let i=1;i<allbill.length;i++)
        {
                let val = allbill[i];
                if(val.length == 0 )
                {
                    isItValidForm = false;
                    break;
                }
                else
                {
                    isItValidForm = true;
                }
        }
        // console.log("is Form valid inside function is"+ isItValidForm);
        return isItValidForm;
}

const getCount = (obj) =>
{
  let count = 0;
  Object.values(obj).forEach(
    val => {
      if(val.length > 0)
      {
        count += 1;
      }
    }
  );

  // console.log("count inside the function is"+count);
  return count;


}


const NotFound = () =>
{
    return <h1>Not Found</h1>
}


const billCalc = (rate,quantity) =>
{
  console.log("inside BILLCALC");
    // let calculatedValues = {
    //   "gst":0,
    //   "amount":0
    // }

    // calculatedValues.amount = bill.rate * bill.quantity;
    // calculatedValues.gst = 0.18 * calculatedValues.amount;

    // console.log("inside billCalc",calculatedValues);
    return rate*quantity;
}

//reducer codeset for increasing & decresing count example
// const initialState = {count: 0};

// function reduc(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   console.log("inside counter");
//   const [state, dispat] = useReducer(reduc, {initialState});
//   return (
//     <div>
//       Count: {state.count}
//       <button onClick={() => dispat({type: 'decrement'})}>-</button>
//       <button onClick={() => dispat({type: 'increment'})}>+</button>
//     </div>
//   );
// }


export {getCount,ValidateMyForm,NotFound,billCalc};