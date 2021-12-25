export const setIndex = (state = [], action) => {
  if (action.type === "SET_FINISHED_INDEX") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_CURRENT_INDEX") {
    return action.payload;
  }
  return state;
};
