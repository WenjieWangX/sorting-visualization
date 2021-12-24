import { HandleDispatch } from "./HandleDispatch";

export const QuickSort = (stateArray, dispatch, speed) => {
  let array = stateArray,
    toDispatch = [array.slice(0)];
  quickSortHelper(array, 0, array.length - 1, toDispatch);

  toDispatch.push(array);
  HandleDispatch(toDispatch, dispatch, array, speed);
};

const quickSortHelper = (array, startIdx, endIdx, toDispatch) => {
  if (startIdx >= endIdx) {
    toDispatch.push(endIdx);
    return;
  }

  const pivot = array[startIdx];
  let leftIdx = startIdx + 1,
    rightIdx = endIdx;

  while (leftIdx <= rightIdx) {
    toDispatch.push([leftIdx, rightIdx]);
    if (array[leftIdx] > pivot && array[rightIdx] < pivot) {
      swap(array, leftIdx, rightIdx, toDispatch);
    }

    if (array[leftIdx] <= pivot) {
      leftIdx++;
    }

    if (array[rightIdx] >= pivot) {
      rightIdx--;
    }
  }
  swap(array, startIdx, rightIdx, toDispatch);
  toDispatch.push(rightIdx);
  const leftSubarrayIsSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1, toDispatch);
    quickSortHelper(array, rightIdx + 1, endIdx, toDispatch);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx, toDispatch);
    quickSortHelper(array, startIdx, rightIdx - 1, toDispatch);
  }
};

const swap = (array, i, j, toDispatch) => {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
  toDispatch.push(array.slice(0));
};
