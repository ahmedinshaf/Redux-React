import { createStore } from "redux";

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "increase":
      return { value: state.value + action.amount};
    case "decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
