import { handleDispatch } from "./handleDispatch";

export const MergeSort = (stateArray, dispatch, speed) => {
  let array = stateArray,
    toDispatch = [],
    finalArray = MergeSortHelper(array);

  toDispatch.push(finalArray);
  handleDispatch(toDispatch, dispatch, array, speed);
};

const MergeSortHelper = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let midIdx = Math.floor(array.length / 2),
    leftHalf = array.slice(0, midIdx),
    rightHalf = array.slice(midIdx);
  return handleMergeSort(MergeSortHelper(leftHalf), MergeSortHelper(rightHalf));
};

const handleMergeSort = (leftArray, rightArray) => {
  const sortedArray = new Array(leftArray.length + rightArray.length);
  let i = 0,
    j = 0,
    k = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      sortedArray[k] = leftArray[i];
      i++;
    } else {
      sortedArray[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArray.length) {
    sortedArray[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArray.length) {
    sortedArray[k] = rightArray[j];
    j++;
    k++;
  }

  return sortedArray;
};
