const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    default:
      return state;
      break;
  }
};

export default reducer;
