export const currentSorted = (state = [], action) => {
  if (action.type === "SET_SORTED") {
    return action.payload;
  } else {
    return [];
  }
};
