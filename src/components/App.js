import React from "react";
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
  return (
    <div className="content">
      <BrowserRouter>
        <NavBar />
        <Route path="/sorting-visualization" exact component={Home} />
        <Route
          path="/sorting-visualization/bubblesort-visualizer"
          exact
          component={BubbbleSortVisualizer}
        />
        <Route
          path="/sorting-visualization/insertionsort-visualizer"
          exact
          component={InsertionSortVisualizer}
        />
        <Route
          path="/sorting-visualization/selectionsort-visualizer"
          exact
          component={SelectionSortVisualizer}
        />
        <Route
          path="/sorting-visualization/mergesort-visualizer"
          exact
          component={MergeSortVisualizer}
        />
        <Route
          path="/sorting-visualization/quicksort-visualizer"
          exact
          component={QuickSortVisualizer}
        />
        <Route
          path="/sorting-visualization/heapsort-visualizer"
          exact
          component={HeapSortVisualizer}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
