import React from "react";
import About from "./About";
import Adversite from "./Adversite";
import Supports from './Supports';
import Home from "./Home.jsx"
import Solution from "./Solution.jsx"
import Business from "./Business.jsx"
import CustomerSupport from "./CustomerSupport.jsx"
import ExploreDetails from "./ExploreDetails.jsx"
import Question from "./Question.jsx"

const HomeContainer = () => {
  return (
    <>
      <Home/>
      <About />
      <Adversite/>
      <Supports/>
      <Solution/>
      <Business/>
      <CustomerSupport/>
      <ExploreDetails/>
      <Question/>
    </>
  );
};

export default HomeContainer;
