import {
  setArray,
  setRunning,
  setFinishedIndex,
  setSorted,
  setSwappers,
} from "../../actions";

export const HandleDispatch = (toDispatch, dispatch, array, speed) => {
  if (!toDispatch.length) {
    setTimeout(() => {
      dispatch(setSorted(array.map((num, index) => index)));
      dispatch(setRunning(false));
    }, 900);
    return;
  }
  let dispatchFunction =
    toDispatch[0].length > 3
      ? setArray
      : toDispatch[0].length === 2
      ? setSwappers
      : setFinishedIndex;

  dispatch(dispatchFunction(toDispatch.shift()));
  setTimeout(() => {
    HandleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
};
