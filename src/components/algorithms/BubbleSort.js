import { HandleDispatch } from "./HandleDispatch";

export const BubbleSort = (stateArray, dispatch, speed) => {
  let array = stateArray.slice(0),
    toDispatch = [],
    sorted = false,
    round = 0;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - round; i++) {
      toDispatch.push([i, i + 1]);
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        sorted = false;
        toDispatch.push(array.slice(0));
      }
    }
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
