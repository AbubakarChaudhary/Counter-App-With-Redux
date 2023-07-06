const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;

    case "Decrement":
      if (state > 0) return state - 1;
      break;

    case "Reset":
      return 0;

    default:
      return state;
  }
};

export default changeTheNumber;
