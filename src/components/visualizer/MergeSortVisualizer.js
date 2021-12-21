import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { generateArray } from "./Functions";
import { BodyContents } from "./BodyContents";
import { updateAlgorithm } from "../../actions";
import { setSize } from "../../actions";
import "../styling/Style.css";

export const MergeSortVisualizer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAlgorithm("MergeSort"));
    generateArray(dispatch, 0);
    dispatch(setSize(0));
  }, []);

  return <BodyContents title="Merge Sort" TypeOfSorting="Merge Sort" />;
};
