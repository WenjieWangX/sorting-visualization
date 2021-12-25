export const setFinishedIndex = (array) => {
  return {
    type: "SET_FINISHED_INDEX",
    payload: array,
  };
};

export const deleteCurrentIndex = (array) => {
  return {
    type: "DELETE_CURRENT_INDEX",
    payload: array,
  };
};

export const setArray = (array) => {
  return {
    type: "SET_ARRAY",
    payload: array,
  };
};

export const setRunning = (boolean) => {
  return {
    type: "SET_RUNNING",
    payload: boolean,
  };
};

export const setSorted = (array) => {
  return {
    type: "SET_SORTED",
    payload: array,
  };
};

export const setSwappers = (array) => {
  return {
    type: "SET_SWAPPERS",
    payload: array,
  };
};

export const updateAlgorithm = (algorithm) => {
  return {
    type: "UPDATE_ALGORITHM",
    payload: algorithm,
  };
};

export const setSize = (size) => {
  return {
    type: "SET_SIZE",
    payload: size,
  };
};

export const setSpeed = (speed) => {
  return {
    type: "SET_SPEED",
    payload: speed,
  };
};
