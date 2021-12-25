import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./styling/Home.css";

const Home = () => {
  useEffect(() => {
    $("body").css("background-color", "white");
    $(".segment").css(
      "background",
      "linear-gradient(to right,rgba(126, 213, 111, 0.8),rgba(40, 180, 133, 0.8))"
    );
    $(".segment").css("margin", "0");
    $(".segment").css("border", "0");
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header__logo-box"></div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Sorting</span>
            <span className="heading-primary--main">Visualizer</span>
          </h1>
          <Link
            to="/sorting-visualization/bubblesort-visualizer"
            className="btn btn--white btn--animated"
          >
            Start
          </Link>
        </div>
      </header>
      {/* <div className="info-container">
        <h1 className="info__header">Bubble Sort</h1>
        <p className="info__description">
          Bubble sort, sometimes referred to as sinking sort, is a simple
          sorting algorithm that repeatedly steps through the list, compares
          adjacent elements and swaps them if they are in the wrong order. The
          pass through the list is repeated until the list is sorted.
        </p>
      </div>
      // <div className="info-container">
      //   <h1 className="info__header">Insertion Sort</h1>
      // </div>
      // <div className="info-container">
      //   <h1 className="info__header">Selection Sort</h1>
      // </div>
      // <div className="info-container">
      //   <h1 className="info__header">Merge Sort</h1>
      // </div>
      // <div className="info-container">
      //   <h1 className="info__header">Quick Sort</h1>
      // </div>
      // <div className="info-container">
      //   <h1 className="info__header">Heap Sort</h1>
      // </div> */}
    </div>
  );
};

export default Home;
