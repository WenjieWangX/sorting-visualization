import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSize } from "../actions";
import { generateArray } from "./visualizer/Functions";
import "./styling/Dropdown.css";

export const SetSizeOptions = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const selectedSize = useSelector((state) => state.size);
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  const sizes = [
    {
      title: "10",
      value: 10,
    },
    {
      title: "20",
      value: 20,
    },
    {
      title: "40",
      value: 40,
    },
    {
      title: "80",
      value: 80,
    },
    {
      title: "160",
      value: 160,
    },
  ];

  const [selected, setSelected] = useState(0);

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

  const generateArraySize = (option) => {
    dispatch(setSize(option.value));
    generateArray(dispatch, option.value);
    setSelected(option);
  };

  const renderedOptions = sizes.map((option) => {
    if (option.value === selectedSize) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="option-item"
        onClick={() => generateArraySize(option)}
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
        Array Size:{" "}
      </label>
      <div
        disabled={isRunning}
        onClick={() => (!isRunning ? setOpen(!open) : null)}
        className={`ui scrolling dropdown ${open ? "visible active" : ""}`}
      >
        {selectedSize === 0 ? (
          <div className="default text">Select Array Size</div>
        ) : (
          <div className="text" style={{ color: isRunning ? "grey" : "white" }}>
            {selected.title}
          </div>
        )}
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
