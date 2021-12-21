import React from "react";

const SortingVisualizer = () => {
  return (
    <div>
      Hello Welcome to the Sorting Visualizer!!!
      <br />
      In this website we going to show all type of sorting algorithms!
    </div>
  );
};

export default SortingVisualizer;

// import { useSelector, useDispatch } from "react-redux";
// import { setArray, setSorted, setRunning } from "../actions";
// import { BubbleSort } from "./algorithms/BubbleSort";
// import { generateArray, sort } from "./Functions";
// import "./styling/SortingVisualizer.css";

// const SortingVisualizer = () => {
//   const array = useSelector((state) => state.array);
// const isRunning = useSelector((state) => state.isRunning);
//   const speed =
//     570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     generateArray(dispatch, 87);
//   }, []);

//   const renderArray = array.map((value, idx) => {
//     return (
//       <div
//         className="array-bar"
//         key={idx}
//         style={{
//           backgroundColor: "pink",
//           height: `${value}px`,
//         }}
//       ></div>
//     );
//   });

//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => {
//             sort(dispatch, array, speed);
//           }}
//         >
//           BubbleSort
//         </button>
//       </div>
//       <div className="array-container">{renderArray}</div>
//     </div>
//   );
// };

// export default SortingVisualizer;
