
//Actions file

import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST } from "./Constants";




// export let inventoryData = [{"id":1,"itemSpecification" : "Vada Pav", "dateOfOrder":"08/02/2020","orderedBy":"Ajit","deliveryDate":"08/02/2020",
// "supervisedBy":"req.body.supervisedBy","quantity":20,"rate":21.89,"gst":18,"paidBy": "Sunaina","paidAmount":180,"paidRemarks":"Paid By Cash",
// "selectedUnit":"Lumpsum","selectedPaymentMode":"Cash"},

//     {"id":2,"itemSpecification" : "dhokla", "dateOfOrder":"08/02/2020","orderedBy":"Vineet","deliveryDate":"08/02/2020",
// "supervisedBy":"req.body.supervisedBy","quantity":20,"rate":25.89,"gst":18,"paidBy": "Neha","paidAmount":200,"paidRemarks":"Paid By Cash",
// "selectedUnit":"KG","selectedPaymentMode":"Cash"},

// {"id":3,"itemSpecification" : "Pav Bhaji", "dateOfOrder":"09/02/2020","orderedBy":"Sumit","deliveryDate":"09/02/2020",
// "supervisedBy":"req.body.supervisedBy","quantity":19,"rate":23.89,"gst":18,"paidBy": "Sneha","paidAmount":180,"paidRemarks":"Paid By Card",
// "selectedUnit":"Lumpsum","selectedPaymentMode":"Card"},
// {
// "id": 4,
// "itemSpecification": "Jamun",
// "dateOfOrder": "08/01/2020",
// "orderedBy": "Mahesh",
// "deliveryDate": "09/02/2020",
// "supervisedBy": "MP",
// "quantity": 100,
// "rate": 30,
// "gst": 18,
// "paidBy": "Mahesh",
// "paidAmount": 500,
// "paidRemarks": "Paid by Cash",
// "selectedUnit": "KG",
// "selectedPaymentMode": "Cash"
// }

// ];

// export let inventoryData = [];

export const fetchDataRequest = () =>{
    return {
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload : data
    }
}

export const fetchDataFailure = err => {
    return {
        type: FETCH_DATA_FAILURE,
        payload : err
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest); // loading is true

         fetch("http://localhost:8082/api/billing")
        .then(response => {
            return response.json();
        })
        .then(response => {
        
        console.log("Data us fetchdata is"+response);
        dispatch(fetchDataSuccess(response));
        // return response;

        })
        .catch(err =>{ console.log(err);
        dispatch(fetchDataFailure(err))  }
        )
    }
}

// export const deleteData = () => {
//     return (dispatch) =>{
//     fetch("http://localhost:8082/api/billing/5fd8ddd2fb26436727eb1bc6",{method:"DELETE"})
//     .then(response => {
//         return response.json();
//     })
//     .then(response => {
//        console.log(response);
//        dispatch(DataSuccess(response));
//     })
//     .catch(err => console.log(err))
//     }
// }
