export const speed = (state = "", action) => {
  if (action.type === "SET_SPEED") {
    return action.payload;
  }
  return state;
};
