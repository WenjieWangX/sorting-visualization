export const size = (state = 0, action) => {
  if (action.type === "SET_SIZE") {
    return action.payload;
  }
  return state;
};
