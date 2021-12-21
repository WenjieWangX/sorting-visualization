// import { setArray, setRunning, setSorted, setSwappers } from "../../actions";
import { handleDispatch } from "./handleDispatch";

export const SelectionSort = (stateArray, dispatch, speed) => {
  let array = stateArray.slice(0),
    toDispatch = [],
    currentIdx = array.length - 1,
    round = 0;

  while (currentIdx > 0) {
    let smallestIdx = currentIdx;
    for (let i = 0; i < array.length - round; i++) {
      if (array[smallestIdx] < array[i]) {
        smallestIdx = i;
      }
    }
    let temp = array[smallestIdx];
    array[smallestIdx] = array[currentIdx];
    array[currentIdx] = temp;
    toDispatch.push(array.slice(0));
    currentIdx--;
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
