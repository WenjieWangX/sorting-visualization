import {
  setArray,
  setSorted,
  setRunning,
  deleteCurrentIndex,
} from "../../actions";
import { BubbleSort } from "../algorithms/BubbleSort";
import { InsertionSort } from "../algorithms/InsertionSort";
import { SelectionSort } from "../algorithms/SelectionSort";
import { MergeSort } from "../algorithms/MergeSort";

export const generateArray = (dispatch, length) => {
  let newArray = [];
  while (newArray.length < length) {
    newArray.push(Math.floor(Math.random() * 350) + 10);
  }
  dispatch(setArray(newArray));
  dispatch(setSorted([]));
  dispatch(deleteCurrentIndex([]));
};

export const sort = (dispatch, array, speed, algorithm) => {
  let doSorting =
    algorithm === "BubbleSort"
      ? BubbleSort
      : algorithm === "InsertionSort"
      ? InsertionSort
      : algorithm === "SelectionSort"
      ? SelectionSort
      : algorithm === "MergeSort"
      ? MergeSort
      : null;
  dispatch(setSorted([]));
  dispatch(deleteCurrentIndex([]));
  dispatch(setRunning(true));
  doSorting(array, dispatch, speed);
};
