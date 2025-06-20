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
    <div className="bg-[url('/InfoBackground.svg')] bg-cover h-screen w-screen overflow-hidden">
      {/* Navbar */}
      <div className="h-14 w-full bg-black/20 backdrop-blur-xl" />

      {/* Main Content */}
      <div className="flex w-full h-[calc(100vh-3.5rem)]">
        {/* Left Panel */}
        <div className="w-14 bg-black/20 backdrop-blur-xl mt-5" />

        {/* Center Panel */}
        <div className="flex-1 bg-white/10 backdrop-blur-xl h-[calc(100%-1.25rem)] rounded-3xl mt-5 mx-10 flex flex-col">
          {/* Top Tabs */}
          <div className="py-5 w-full flex gap-10 px-5 justify-between text-center shrink-0">
            <div className="trapezoid w-[30%] h-8 bg-white ml-28">Personal Information</div>
            <div className="trapezoid w-[30%] h-8 bg-white">Educational Information</div>
            <div className="trapezoid w-[30%] h-8 bg-white mr-28">Gaming Information</div>
          </div>

          {/* ✅ New Component Above the Central Panel */}
    

          {/* Main Panel */}
          <div className="flex-1 px-5 gap-4 flex justify-between text-white bg-white/10 rounded-xl overflow-hidden">
            {/* Left Side */}
            <div className="w-[40%] rounded-xl p-3 flex flex-col">
              <div className="text-lg font-bold mb-2">Personal Information</div>
              <div className="text-sm mb-4">
                To create a personalized profile, include details such as your name, age,
                location, interests, and any relevant experiences. This will help others
                understand who you are and what you enjoy!
              </div>

              <div className="relative mt-2 flex items-center justify-center  rounded-md overflow-hidden h-[550px]">
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  type="button"
                  className="absolute left-1 top-1/2 -translate-y-1/2 text-2xl z-10 text-white"
                >
                  &#x276E;
                </button>

                {/* Image */}
                <img
                  src={`/${svgNames[currentSvgIndex]}.svg`}
                  alt={`SVG ${currentSvgIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  type="button"
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-2xl z-10 text-white"
                >
                  &#x276F;
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-[55%] rounded-xl p-5 text-black flex flex-col gap-y-4">
              <input className="bg-white h-12 rounded-2xl pl-5" placeholder="Full Name" />
              <div className="flex gap-x-10">
                <input className="bg-white h-12 rounded-2xl pl-5 w-full" placeholder="Gender" />
                <input className="bg-white h-12 rounded-2xl pl-5 w-full" placeholder="Age" />
              </div>
              <div className="flex gap-x-10">
                <input className="bg-white h-12 rounded-2xl pl-5 w-full" placeholder="Phone Number" />
                <input className="bg-white h-12 rounded-2xl pl-5 w-full" placeholder="Country" />
              </div>
              <div className="flex gap-x-10">
                <input className="bg-white h-12 rounded-2xl pl-5 w-full" placeholder="State" />
                <input className="bg-white h-12 rounded-2xl pl-5 w-full" placeholder="Pin Code" />
              </div>
              <input className="bg-white h-12 rounded-2xl pl-5" placeholder="Address" />
              <input className="bg-white h-12 rounded-2xl pl-5" placeholder="Tagline" />
              <textarea className="bg-white h-32 rounded-2xl pl-5 pt-2" placeholder="Bio" />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-14 bg-black/20 backdrop-blur-xl mt-5" />
      </div>
    </div>
  );
}

export default App;
