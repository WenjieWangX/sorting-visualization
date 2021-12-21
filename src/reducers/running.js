export const isRunning = (state = false, action) => {
  if (action.type === "SET_RUNNING") {
    return action.payload;
  }
  return state;
};
