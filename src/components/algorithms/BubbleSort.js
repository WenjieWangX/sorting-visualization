// import {
//   setArray,
//   setRunning,
//   setCurrentBubble,
//   setSorted,
//   setSwappers,
//   deleteCurrentIndex,
// } from "../../actions";
import { handleDispatch } from "./handleDispatch";

export const BubbleSort = (stateArray, dispatch, speed) => {
  let array = stateArray.slice(0),
    toDispatch = [],
    sorted = false,
    round = 0;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - round; i++) {
      //toDispatch.push([i, i + 1]);
      if (array[i] > array[i + 1]) {
        //toDispatch.push([i, i + 1, true]);
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
        toDispatch.push(array.slice(0));
        //toDispatch.push([]);
      }
    }
    toDispatch.push(array.length - 1 - round);
    round++;
  }
  while (round < array.length) {
    toDispatch.push(array.length - 1 - round);
    round++;
  }
  handleDispatch(toDispatch, dispatch, array, speed);
  return array;
};

// const handleDispatch = (toDispatch, dispatch, array, speed) => {
//   if (!toDispatch.length) {
//     //dispatch(setCurrentBubble(array.map((num, index) => index)));
//     setTimeout(() => {
//       dispatch(setSorted(array.map((num, index) => index)));
//       dispatch(setRunning(false));
//     }, 900);
//     return;
//   }
//   //let dispatchFunction =
//   // toDispatch[0].length > 3
//   //   ? setArray
//   //   : toDispatch[0].length === 3 || toDispatch[0].length === 0
//   //   ? setSwappers
//   //   : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean"
//   //   ? setSorted
//   //   : setCurrentBubble;
//   // ----------------------------------------------
//   // toDispatch[0].length > 3 ? setArray : setSwappers;
//   //dispatch(dispatchFunction(toDispatch.shift()));
//   let dispatchFunction = toDispatch[0].length > 3 ? setArray : setCurrentBubble;
//   dispatch(dispatchFunction(toDispatch.shift()));
//   setTimeout(() => {
//     handleDispatch(toDispatch, dispatch, array, speed);
//   }, speed);
// };
