import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import SortingVisualizer from "./SortingVisualizer";
import { BubbbleSortVisualizer } from "./visualizer/BubbleSortVisualizer";
import { InsertionSortVisualizer } from "./visualizer/InsertionSortVisualizer";
import { SelectionSortVisualizer } from "./visualizer/SelectionSortVisualizer";
import { MergeSortVisualizer } from "./visualizer/MergeSortVisualizer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={SortingVisualizer} />
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
      </BrowserRouter>
    </div>
  );
};

export default App;
