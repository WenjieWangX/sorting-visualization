import { HandleDispatch } from "./HandleDispatch";

export const HeapSort = (stateArray, dispatch, speed) => {
  let array = stateArray,
    toDispatch = [array.slice(0)];
  buildMaxHeap(array, toDispatch);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    swap(array, 0, endIdx, toDispatch);
    toDispatch.push(endIdx);
    siftDown(array, 0, endIdx - 1, toDispatch);
  }
  toDispatch.push(0);
  toDispatch.push(array.slice(0));
  HandleDispatch(toDispatch, dispatch, array, speed);
};

const buildMaxHeap = (array, toDispatch) => {
  let parentIdx = Math.floor((array.length - 2) / 2);
  for (let currentIdx = parentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(array, currentIdx, array.length - 1, toDispatch);
  }
};

const siftDown = (heap, currentIdx, endIdx, toDispatch) => {
  let firstChildIdx = currentIdx * 2 + 1;
  while (firstChildIdx <= endIdx) {
    const secondChildIdx =
      currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let idxToSwap;
    if (secondChildIdx !== -1 && heap[secondChildIdx] > heap[firstChildIdx]) {
      toDispatch.push([secondChildIdx, firstChildIdx]);
      idxToSwap = secondChildIdx;
    } else {
      idxToSwap = firstChildIdx;
    }
    toDispatch.push([idxToSwap, currentIdx]);
    if (heap[idxToSwap] > heap[currentIdx]) {
      swap(heap, idxToSwap, currentIdx, toDispatch);
      currentIdx = idxToSwap;
      firstChildIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
};

const swap = (array, i, j, toDispatch) => {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
  toDispatch.push(array.slice(0));
};
