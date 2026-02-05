export const initialState = {
  restaurants: [],
};

export const restaurantReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};
