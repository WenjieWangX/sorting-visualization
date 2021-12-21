// import { setArray, setRunning, setSorted, setSwappers } from "../../actions";
import { handleDispatch } from "./handleDispatch";

export const InsertionSort = (stateArray, dispatch, speed) => {
  let array = stateArray.slice(0),
    toDispatch = [],
    round = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        toDispatch.push(array.slice(0));
      }
    }
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
//     setTimeout(() => {
//       dispatch(setSorted(array.map((val, index) => index)));
//       dispatch(setRunning(false));
//     }, 900);
//     return;
//   }
//   dispatch(setArray(toDispatch.shift()));
//   setTimeout(() => {
//     handleDispatch(toDispatch, dispatch, array, speed);
//   }, speed);
// };
