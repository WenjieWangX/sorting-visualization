import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSpeed } from "../actions";
import "./styling/Dropdown.css";

export const SetSpeedOptions = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const selectedSize = useSelector((state) => state.speed);
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  const speeds = [
    {
      title: "Default",
      value: "Default",
    },
    {
      title: "Slow",
      value: "Slow",
    },
    {
      title: "Normal",
      value: "Normal",
    },
    {
      title: "Fast",
      value: "Fast",
    },
  ];

  const [selected, setSelected] = useState(speeds[0]);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  // const generateArraySize = (option) => {
  //   dispatch(setSpeed(option.value));
  //   generateArray(dispatch, option.value);
  //   setSelected(option);
  // };

  const renderedOptions = speeds.map((option) => {
    if (option.value === selectedSize) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="option-item"
        onClick={() => {
          dispatch(setSpeed(option.value));
          setSelected(option);
        }}
      >
        {option.title}
      </div>
    );
  });

  return (
    <div
      ref={ref}
      className="Dropdown"
      style={{ border: isRunning ? `1px solid grey` : `1px solid whitesmoke` }}
    >
      <label className="text" style={{ color: isRunning ? "grey" : "white" }}>
        Speed:{" "}
      </label>
      <div
        disabled={isRunning}
        onClick={() => (!isRunning ? setOpen(!open) : null)}
        className={`ui scrolling dropdown ${open ? "visible active" : ""}`}
      >
        <div className="text" style={{ color: isRunning ? "grey" : "white" }}>
          {selected.title}
        </div>
        <i
          className="dropdown icon"
          style={{ color: isRunning ? "grey" : "white" }}
        ></i>
        <div
          disabled={isRunning}
          className={`menu ${open ? "visible transition" : ""}`}
        >
          {renderedOptions}
        </div>
      </div>
    </div>
  );
};
