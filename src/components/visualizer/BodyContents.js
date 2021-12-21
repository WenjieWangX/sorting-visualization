import React, { useRef, useEffect, useState } from "react";
import { generateArray, sort } from "./Functions";
import { useSelector, useDispatch } from "react-redux";
import { SetSizeOptions } from "../SetSizeOptions";
import { SetSpeedOptions } from "../SetSpeedOptions";

export const BodyContents = ({ title, TypeOfSorting }) => {
  const algorithm = useSelector((state) => state.algorithm);
  const array = useSelector((state) => state.array);
  const selectedSize = useSelector((state) => state.size);
  const isRunning = useSelector((state) => state.isRunning);
  const lastIdx = useSelector((state) => state.setIndex);
  const selectedSpeed = useSelector((state) => state.speed);
  const dispatch = useDispatch();
  const speedDefault =
    570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;
  const speed =
    selectedSpeed === "Default"
      ? speedDefault
      : selectedSpeed === "Slow"
      ? 200
      : selectedSpeed === "Normal"
      ? 50
      : 0;
  const ref = useRef(null);

  //const numWidth = Math.floor($(document).width() / (array.length * 3));
  // console.log(ref.current.offsetWidth);
  // const width = `${numWidth}px`;
  const [barWidth, setBarWidth] = useState(0);
  useEffect(() => {
    const numWidth = Math.floor(ref.current.offsetWidth / selectedSize);
    setBarWidth(numWidth);
  }, [selectedSize]);

  const renderArray = array.map((value, idx) => {
    return (
      <div
        className="array-bar"
        key={idx}
        style={{
          backgroundColor: lastIdx.includes(idx)
            ? "rgb(255,255,255)"
            : "rgb(126, 97, 160)",
          height: `${value}px`,
          width: !selectedSize ? "5px" : `${barWidth}px`,
        }}
      ></div>
    );
  });

  return (
    <div>
      <header>{title}</header>
      <div className="generate-buttons">
        <button
          disabled={isRunning}
          className="ui inverted blue basic button"
          onClick={() => {
            generateArray(dispatch, selectedSize);
          }}
        >
          Generate New Array
        </button>
        <button
          disabled={isRunning}
          className="ui inverted blue basic button"
          onClick={() => {
            sort(dispatch, array, speed, algorithm);
          }}
        >
          {TypeOfSorting}
        </button>
      </div>
      <SetSizeOptions disabled={isRunning} />
      <SetSpeedOptions disabled={isRunning} />
      <div ref={ref} className="array-container">
        {renderArray}
      </div>
    </div>
  );
};
