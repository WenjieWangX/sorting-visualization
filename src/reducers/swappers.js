export const currentSwappers = (state = [], action) => {
  if (action.type === "SET_SWAPPERS") {
    return action.payload;
  } else {
    return [];
  }
};
