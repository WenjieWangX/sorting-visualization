import { HandleDispatch } from "./HandleDispatch";

export const InsertionSort = (stateArray, dispatch, speed) => {
  let array = stateArray.slice(0),
    toDispatch = [],
    round = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      toDispatch.push([j, j - 1]);
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
        toDispatch.push(array.slice(0));
      }
    }
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
