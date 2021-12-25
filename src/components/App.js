import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import { BubbbleSortVisualizer } from "./visualizer/BubbleSortVisualizer";
import { InsertionSortVisualizer } from "./visualizer/InsertionSortVisualizer";
import { SelectionSortVisualizer } from "./visualizer/SelectionSortVisualizer";
import { MergeSortVisualizer } from "./visualizer/MergeSortVisualizer";
import { QuickSortVisualizer } from "./visualizer/QuickSortVisualizer";
import { HeapSortVisualizer } from "./visualizer/HeapSortVisualizer";

const App = () => {
  useEffect(() => {});
  return (
    <div className="content">
      <BrowserRouter>
        <NavBar />
        <Route
          exact
          path={`/`}
          render={(routerProps) => <Home routerProps={routerProps} />}
        />

        <Route
          path="/bubblesort-visualizer"
          exact
          component={BubbbleSortVisualizer}
        />
        <Route
          path="/insertionsort-visualizer"
          exact
          component={InsertionSortVisualizer}
        />
        <Route
          path="/selectionsort-visualizer"
          exact
          component={SelectionSortVisualizer}
        />
        <Route
          path="/mergesort-visualizer"
          exact
          component={MergeSortVisualizer}
        />
        <Route
          path="/quicksort-visualizer"
          exact
          component={QuickSortVisualizer}
        />
        <Route
          path="/heapsort-visualizer"
          exact
          component={HeapSortVisualizer}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
