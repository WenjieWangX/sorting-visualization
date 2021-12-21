import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { generateArray } from "./Functions";
import { BodyContents } from "./BodyContents";
import { updateAlgorithm } from "../../actions";
import { setSize } from "../../actions";
import "../styling/Style.css";

export const InsertionSortVisualizer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAlgorithm("InsertionSort"));
    generateArray(dispatch, 0);
    dispatch(setSize(0));
  }, []);

  return <BodyContents title="Insertion Sort" TypeOfSorting="Insertion Sort" />;
};
