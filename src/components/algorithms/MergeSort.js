import { HandleDispatch } from "./HandleDispatch";

export const MergeSort = (stateArray, dispatch, speed) => {
  let array = stateArray,
    toDispatch = [array],
    finalArray = MergeSortHelper(
      array,
      toDispatch,
      0,
      array.length - 1,
      array.length
    );

  toDispatch.push(finalArray);
  HandleDispatch(toDispatch, dispatch, array, speed);
};

const MergeSortHelper = (array, toDispatch, leftIdx, rightIdx, arrayLength) => {
  if (array.length <= 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2),
    leftHalf = array.slice(0, middle),
    rightHalf = array.slice(middle),
    midIdx = Math.floor((leftIdx + rightIdx + 1) / 2),
    leftSort = MergeSortHelper(
      leftHalf,
      toDispatch,
      leftIdx,
      midIdx - 1,
      arrayLength
    ),
    rightSort = MergeSortHelper(
      rightHalf,
      toDispatch,
      midIdx,
      rightIdx,
      arrayLength
    ),
    isLastMerge = false;
  if (leftSort.length + rightSort.length === arrayLength) {
    isLastMerge = true;
  }
  let sortedArray = handleMergeSort(
    leftSort,
    rightSort,
    toDispatch,
    leftIdx,
    rightIdx,
    isLastMerge
  );

  return sortedArray;
};

const handleMergeSort = (
  leftArray,
  rightArray,
  toDispatch,
  leftIdx,
  rightIdx,
  isLastMerge
) => {
  let currentIdx = leftIdx,
    midIdx = (leftIdx + rightIdx + 1) / 2;
  const sortedArray = new Array(leftArray.length + rightArray.length);
  let i = 0,
    j = 0,
    k = 0,
    round = 0,
    num = 1;

  if (isLastMerge) {
    num = 2;
  }

  while (i < leftArray.length && j < rightArray.length) {
    if (isLastMerge) {
      toDispatch.push(round);
      round++;
    }
    const newArray = toDispatch[toDispatch.length - num].slice(0);
    toDispatch.push([midIdx, currentIdx]);
    if (leftArray[i] <= rightArray[j]) {
      sortedArray[k] = leftArray[i];
      currentIdx++;
      i++;
      toDispatch.push(newArray);
    } else {
      sortedArray[k] = rightArray[j];
      newArray.splice(midIdx, 1);
      newArray.splice(currentIdx, 0, rightArray[j]);
      midIdx++;
      currentIdx++;
      j++;
      toDispatch.push(newArray);
    }
    k++;
  }

  while (i < leftArray.length) {
    sortedArray[k] = leftArray[i];
    i++;
    k++;
    if (isLastMerge) {
      toDispatch.push(round);
      round++;
    }
  }

  while (j < rightArray.length) {
    sortedArray[k] = rightArray[j];
    j++;
    k++;
    if (isLastMerge) {
      toDispatch.push(round);
      round++;
    }
  }

  return sortedArray;
};
