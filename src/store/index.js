import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
        state.value = state.value + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// Removed
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

   ///////// FOR MULTIPLE SLICES
const store = configureStore({
    reducer:counterSlice.reducer
});



export const counterActions = counterSlice.actions
export default store;
