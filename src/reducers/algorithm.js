export const algorithm = (state = null, action) => {
  if (action.type === "UPDATE_ALGORITHM") {
    return action.payload;
  }
  return state;
};
