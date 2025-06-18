import { useState } from "react";
import "./App.css";

function App() {
  const svgNames = [
    "Personal Card",
    "Type=Type2",
    "Type=Type3",
    "Type=Type4",
    "Type=Type5",
    "Type=Type6",
  ];

  const handlePrev = () => {
    setCurrentSvgIndex((prevIndex) =>
      prevIndex === 0 ? svgNames.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentSvgIndex((prevIndex) =>
      prevIndex === svgNames.length - 1 ? 0 : prevIndex + 1
    );
  };
  // bg-black/40 backdrop-blur-md
  return (
    <>
      <div className="min-h-screen background bg-[url('/background.svg')] bg-cover w-full">
        {/* Navbar */}
        <div className="navbar h-14 w-full bg-black/20 backdrop-blur-xl"></div>

        {/* Main Content */}
        <div className="flex flex-row w-full">
          {/* Left Panel */}
          <div className="w-14 bg-black/20 backdrop-blur-xl "></div>

          {/* Center Panel */}
         <div className="flex-1 bg-black/20 backdrop-blur-xl w-[80%]  h-[80%] rounded-4xl m-4  flex flex-col gap-4">
       <div className="top py-5 w-full flex gap-10 px-5 justify-between">
       <div className="trapezoid w-[30%] h-8 bg-white ml-28 "></div>
       <div className="trapezoid w-[30%] h-8 bg-white "></div>
       <div className="trapezoid w-[30%] h-8 bg-white mr-28"></div>
  </div>
  <div className="left bg-white/10">
  
  
  </div>
  <div className="right bg-white/10"></div>
</div>

          <div className="w-14 bg-black/20 backdrop-blur-xl "></div>
        </div>
      </div>
    </>
  );
}

export default App;
