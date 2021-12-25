import { HandleDispatch } from "./HandleDispatch";

export const SelectionSort = (stateArray, dispatch, speed) => {
  let array = stateArray.slice(0),
    toDispatch = [],
    currentIdx = array.length - 1,
    round = 0;

  while (currentIdx > 0) {
    let smallestIdx = currentIdx;
    for (let i = 0; i < array.length - round; i++) {
      toDispatch.push([smallestIdx, i]);
      if (array[smallestIdx] < array[i]) {
        smallestIdx = i;
      }
    }
    swap(array, smallestIdx, currentIdx);
    toDispatch.push(array.slice(0));
    currentIdx--;
    toDispatch.push(array.length - 1 - round);
    round++;
  }
  while (round < array.length) {
    toDispatch.push(array.length - 1 - round);
    round++;
  }
  HandleDispatch(toDispatch, dispatch, array, speed);
  return array;
};

const swap = (array, i, j) => {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
};
