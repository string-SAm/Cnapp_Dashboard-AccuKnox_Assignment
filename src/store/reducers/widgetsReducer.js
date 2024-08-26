const initialState = {
  widgets: [],
};

const widgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WIDGET":
      return {
        ...state,
        widgets: [...state.widgets, action.payload],
      };
    // You can add more action types here
    default:
      return state;
  }
};

export default widgetsReducer;
