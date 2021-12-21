import {
  setArray,
  setRunning,
  setCurrentBubble,
  setSorted,
} from "../../actions";

export const handleDispatch = (toDispatch, dispatch, array, speed) => {
  if (!toDispatch.length) {
    //dispatch(setCurrentBubble(array.map((num, index) => index)));
    setTimeout(() => {
      dispatch(setSorted(array.map((num, index) => index)));
      dispatch(setRunning(false));
    }, 900);
    return;
  }
  //let dispatchFunction =
  // toDispatch[0].length > 3
  //   ? setArray
  //   : toDispatch[0].length === 3 || toDispatch[0].length === 0
  //   ? setSwappers
  //   : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean"
  //   ? setSorted
  //   : setCurrentBubble;
  // ----------------------------------------------
  // toDispatch[0].length > 3 ? setArray : setSwappers;
  //dispatch(dispatchFunction(toDispatch.shift()));
  let dispatchFunction = toDispatch[0].length > 3 ? setArray : setCurrentBubble;
  dispatch(dispatchFunction(toDispatch.shift()));
  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
};
