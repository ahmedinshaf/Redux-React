import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'
import authReducer from './auth'
// Removed : OLD WAY
// const counterReducer = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case "increment":
//       return { value: state.value + 1 };
//     case "increase":
//       return { value: state.value + action.amount};
//     case "decrement":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// };

const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer
    }
});


   ///////// FOR SINGLE SLICES
// const store = configureStore({
//     reducer:counterSlice.reducer
// });



export default store;
