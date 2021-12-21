export const array = (state = [], action) => {
  if (action.type === "SET_ARRAY") {
    return action.payload;
  }
  return state;
};
