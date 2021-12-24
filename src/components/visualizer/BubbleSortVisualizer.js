import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import $ from "jquery";
import { generateArray } from "./Functions";
import { BodyContents } from "./BodyContents";
import { deleteCurrentIndex, updateAlgorithm } from "../../actions";
import { setSize } from "../../actions";
import "../styling/Style.css";

export const BubbbleSortVisualizer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAlgorithm("BubbleSort"));
    generateArray(dispatch, 0);
    dispatch(setSize(0));
    dispatch(deleteCurrentIndex([]));
    $("body").css("background-color", "#1a1a1a");
    $(".segment").css("background", "");
    $(".segment").css("margin", "");
  }, []);

  return <BodyContents title="Bubble Sort" TypeOfSorting="Bubble Sort" />;
};
