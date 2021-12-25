import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAlgorithm } from "../actions";

const NavBar = () => {
  const algorithm = useSelector((state) => state.algorithm);
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();
  const onAlgorithmChange = (type) => {
    dispatch(updateAlgorithm(type));
  };
  return (
    <div className={`ui ${algorithm ? "inverted" : ""} segment`}>
      <div
        className={`ui ${
          algorithm ? "inverted" : ""
        } secondary pointing menu navbar`}
      >
        <Link
          to=""
          onClick={(e) =>
            !isRunning ? onAlgorithmChange("") : e.preventDefault()
          }
          className={algorithm === "" ? "active item" : "item"}
        >
          Home
        </Link>
        <Link
          to="/bubblesort-visualizer"
          onClick={(e) =>
            !isRunning ? onAlgorithmChange("BubbleSort") : e.preventDefault()
          }
          className={algorithm === "BubbleSort" ? "active item" : "item"}
        >
          Bubble Sort
        </Link>
        <Link
          to="/insertionsort-visualizer"
          onClick={(e) =>
            !isRunning ? onAlgorithmChange("InsertionSort") : e.preventDefault()
          }
          className={algorithm === "InsertionSort" ? "active item" : "item"}
        >
          Insertion Sort
        </Link>
        <Link
          to="/selectionsort-visualizer"
          onClick={(e) =>
            !isRunning ? onAlgorithmChange("SelectionSort") : e.preventDefault()
          }
          className={algorithm === "SelectionSort" ? "active item" : "item"}
        >
          Selection Sort
        </Link>
        <Link
          to="/mergesort-visualizer"
          onClick={(e) =>
            !isRunning ? onAlgorithmChange("MergeSort") : e.preventDefault()
          }
          className={algorithm === "MergeSort" ? "active item" : "item"}
        >
          Merge Sort
        </Link>
        <Link
          to="/quicksort-visualizer"
          onClick={(e) =>
            !isRunning ? onAlgorithmChange("QuickSort") : e.preventDefault()
          }
          className={algorithm === "QuickSort" ? "active item" : "item"}
        >
          Quick Sort
        </Link>
        <Link
          to="/heapsort-visualizer"
          onClick={(e) =>
            !isRunning ? onAlgorithmChange("HeapSort") : e.preventDefault()
          }
          className={algorithm === "HeapSort" ? "active item" : "item"}
        >
          Heap Sort
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
