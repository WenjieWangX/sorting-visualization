import { combineReducers } from "redux";
import { setIndex } from "./setIndex";
import { array } from "./array";
import { isRunning } from "./running";
import { currentSwappers } from "./swappers";
import { currentSorted } from "./sorted";
import { algorithm } from "./algorithm";
import { size } from "./size";
import { speed } from "./speed";

export default combineReducers({
  setIndex,
  isRunning,
  array,
  currentSwappers,
  currentSorted,
  algorithm,
  size,
  speed,
});
