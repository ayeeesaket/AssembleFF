import { useState } from "react";

function App() {
  const svgNames = [
    "Personal Card",
    "Type=Type2",
    "Type=Type3",
    "Type=Type4",
    "Type=Type5",
    "Type=Type6",
  ];

  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const [personlInfo, setPersonalInfo] = useState(true);
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

  return (
    <>
      <div className=" bg-[url('/InfoBackground.svg')] bg-cover h-screen w-screen">
        {/* Navbar */}
        <div className="lg:h-14 lg:w-full bg-black/20 backdrop-blur-xl"></div>

        {/* Main Content */}
        <div className="flex flex-row w-full">
          {/* Left Panel */}
          <div className="w-14 bg-black/20 backdrop-blur-xl lg:h-120 lg:mt-28"></div>

          {/* Center Panel */}
          <div className="flex-1 bg-black/20 backdrop-blur-xl h-full rounded-3xl mt-5 ml-10 mr-10 flex flex-col gap-4">
            {/* Top Trapezoid Row */}
            <div className="py-5 w-full flex gap-10 px-5 justify-between text-center">
              <div className="trapezoid w-[30%] h-8 bg-white ml-28">
                {" "}
                Personal Information
              </div>
              <div className="trapezoid w-[30%] h-8 bg-white">
                {" "}
                Educational Information
              </div>
              <div className="trapezoid w-[30%] h-8 bg-white mr-28">
                {" "}
                Gaming Information
              </div>
            </div>

            {/* Content Panels */}
            {/* Personal Information Panel */}
            {personlInfo && (
              <>
                <div className="px-5 gap-4 flex justify-between lg:h-full lg:w-full text-white bg-white/10">
                  {/* Left Content */}
                  <div className=" lg:h-full lg:w-[40%] rounded-xl  p-3">
                    <div className="left-head">Personal Information</div>
                    <div className="left-head">
                      To create a personalized profile, include details such as
                      your name, age, location, interests, and any relevant
                      experiences. This will help others understand who you are
                      and what you enjoy!
                    </div>
                  </div>
                  {/* Right Content */}
                  <div className="lg:h-full rounded-xl lg:w-[55%] p-5 text-black flex flex-col gap-y-4">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Full Name"
                    />

                    <div className="flex  lg:flex-row  lg:gap-x-10">
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Gender"
                      />
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Age"
                      />
                    </div>

                    <div className="flex  lg:flex-row lg:gap-x-10">
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Phone Number"
                      />
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Country"
                      />
                    </div>

                    <div className="flex  lg:flex-row  lg:gap-x-10">
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="State"
                      />
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Pin Code"
                      />
                    </div>
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Address"
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Tagline"
                    />
                    <textarea
                      className="bg-white lg:w-full lg:h-32 rounded-2xl pl-5 pt-2"
                      placeholder="Bio"
                    ></textarea>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Panel */}
          <div className="w-14 bg-black/20 backdrop-blur-xl lg:h-120 lg:mt-28"></div>
        </div>
      </div>
    </>
  );
}

export default App;
