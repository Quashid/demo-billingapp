import * as constants from '././Constants';

const initialValue=
{
    loading : false,
    data : [],
    error:''
}

function reducer(state = initialValue ,action)
{

    console.log("inside reducer action type is"+action.type+"Payload is"+action.payload);
    //Code to change the state and a return a new state, we don't change the existing state but return a new state obj
    //reducer doesn't mutate the state but creates a new state obj

    switch(action.type)
    {
        // case constants.ADD:{
        //                          console.log("Payload is"+action.payload);
        //                          return [...state.data,action.payload];
        //                     }  
        // case constants.DEL:{
        //         //  state.pop(id);
        //         state.pop(action.payload.id);
        //          console.log(state);
        //          return [...state];
        // } 

        case constants.FETCH_DATA_REQUEST : 
        {
            return {
                ...state,loading:true
            }
        }

        case constants.FETCH_DATA_SUCCESS : 
        {
            return {
               loading:false,
               data : action.payload,
               error:''
            }
        }
        case constants.FETCH_DATA_FAILURE : 
        {
            return {
               loading:false,
               data : [],
               error: action.payload
            }
        }
    }

    return state;
}

export default reducer;

//Redux Area
// const initialValue={no:1,name:"Sachin",address:"Mumbai"};


// export default function reducer(state = initialValue ,action)
// {

//     //Code to change the state and a return a new state, we don't change the existing state but return a new state obj
//     //reducer doesn't mutate the state but creates a new state obj

//     switch(action.type)
//     {
//         case ActionTypes.CHANGE: return {...state,name:"Saurabh",address:"Kolkata"};
//     }

//     return state;
// }

// //export default reducer;