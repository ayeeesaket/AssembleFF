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
  const [personalInfo, setPersonalInfo] = useState(true);
  const [educationalInfo, setEducationalInfo] = useState(false);
  const [gamingInfo, setGamingInfo] = useState(false);

  const handlePersonalInfoClick = () => {
    setPersonalInfo(true);
    setEducationalInfo(false);
    setGamingInfo(false);
  };

  const handleEducationalInfoClick = () => {
    setPersonalInfo(false);
    setEducationalInfo(true);
    setGamingInfo(false);
  };

  const handleGamingInfoClick = () => {
    setPersonalInfo(false);
    setEducationalInfo(false);
    setGamingInfo(true);
  };

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
      <div
        className={`${
          personalInfo
            ? "bg-[url('/InfoBackground.svg')]"
            : educationalInfo
            ? "bg-[url('/EducationInfoBG.svg')]"
            : gamingInfo
            ? "bg-[url('/GamingInfoBG.svg')]"
            : ""
        } bg-cover h-screen w-screen`}
      >
        {/* Navbar */}
        <div className="lg:h-14 lg:w-full bg-black/20 backdrop-blur-xl"></div>

        {/* Main Content */}
        <div className="flex flex-row w-full">
          {/* Left Panel */}
          <div className="w-14 bg-black/20 backdrop-blur-xl lg:h-120 lg:mt-28"></div>

          {/* Center Panel */}
          <div className="flex-1 bg-black/10 backdrop-blur-xl h-full rounded-3xl mt-5 ml-10 mr-10 flex flex-col gap-4">
            {/* Top Trapezoid Row */}
            <div className="py-5 w-full flex gap-10 px-5 justify-between text-center">
              <div
                className={`trapezoid w-[30%] h-8 ml-28 cursor-pointer ${
                  personalInfo
                    ? "bg-white text-black border-b-4 border-b-black"
                    : "bg-black text-white border-b-4 border-b-white"
                }`}
                onClick={() => handlePersonalInfoClick()}
              >
                {" "}
                PERSONAL INFORMATION
              </div>
              <div
                className={`trapezoid w-[30%] h-8 ml-28 cursor-pointer ${
                  educationalInfo
                    ? "bg-white text-black border-b-4 border-b-black"
                    : "bg-black text-white border-b-4 border-b-white"
                }`}
                onClick={() => handleEducationalInfoClick()}
              >
                {" "}
                EDUCATIONAL INFORMATION
              </div>
              <div
                className={`trapezoid w-[30%] h-8 ml-28 cursor-pointer ${
                  gamingInfo
                    ? "bg-white text-black border-b-4 border-b-black"
                    : "bg-black text-white border-b-4 border-b-white"
                }`}
                onClick={() => handleGamingInfoClick()}
              >
                {" "}
                GAMING INFORMATION
              </div>
            </div>

            {/* Content Panels */}
            {/* Personal Information Panel */}

            <div
              className={`px-5  gap-4 ${
                !gamingInfo ? "flex justify-between" : ""
              } lg:h-full lg:w-full text-white bg-white/10`}
            >
              {/* Left Content */}
              {personalInfo && (
                <>
                  <div className=" lg:h-full lg:w-[40%] rounded-xl  p-3">
                    <div className="left-head">Personal Information</div>
                    <div className="left-head-text">
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
                        type="number"
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
                      className="bg-white lg:w-full lg:h-20 rounded-2xl pl-5 pt-2 "
                      placeholder="Bio"
                    ></textarea>
                    <button className=" lg:w-full lg:h-12 rounded-2xl border-2 border-white">
                      Save Your Personal Information
                    </button>
                  </div>
                </>
              )}
              {/* Educational Information Panel */}
              {educationalInfo && (
                <>
                  <div className=" lg:h-full lg:w-[40%] rounded-xl  p-3">
                    <div className="left-head">Educational Information</div>
                    <div className="left-head-text">
                      Don't forget to include your educational details! Whether
                      it's your 10th grade, 12th grade, or bachelor's degree,
                      make sure to highlight any relevant studies that showcase
                      your skills and dedication to the esports field.
                    </div>
                  </div>
                  {/* Right Content */}
                  <div className="lg:h-full rounded-xl lg:w-[55%] p-5 text-black flex flex-col gap-y-4">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Highest Education"
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Institution Name"
                    />

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
                      placeholder="Course"
                    />
                    <div className="flex  lg:flex-row  lg:gap-x-10">
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Starting Year"
                      />
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Ending Year"
                      />
                    </div>
                    <div className="flex  lg:flex-row  lg:gap-x-10">
                      <button className=" lg:w-full lg:h-12 rounded-2xl border-2 border-white text-white">
                        Skip for Now
                      </button>
                      <button className=" lg:w-full lg:h-12 rounded-2xl border-2 border-white bg-black text-white">
                        Save Your Educational Information
                      </button>
                    </div>
                  </div>
                </>
              )}
              {/* Gaming Information Panel */}
              {gamingInfo && (
                <>
                  <div className="lg:flex lg:flex-row lg:flex-wrap lg:gap-6 lg:w-full">
                    <div>
                      <div className="left-head w-full">Gaming Information</div>

                      <div className="left-head w-full">
                        When you're talking about your favorite games, make sure
                        to drop the title, what platform you’re playing on, and
                        the genre. Don’t forget to mention when it was released
                        and any cool stuff like high scores or tournament wins.
                        Also, share your own experiences and strategies—those
                        really show how much you love gaming!
                      </div>
                    </div>
                    <div className="lg:flex lg:flex-row lg:gap-x-10 text-black w-full">
                      <select className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5">
                        <option value="">Select Level</option>
                        <option value="">Newbie</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediate</option>
                        <option value="">Pro</option>
                      </select>
                      <select className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5">
                        <option value="">Gaming Platform</option>
                        <option value="">Mobile</option>
                        <option value="">PC or Desktop</option>
                        <option value="">Both</option>
                      </select>
                      <select className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5">
                        <option value="">Gaming Server</option>
                        <option value="">Asia</option>
                        <option value="">Europe</option>
                      </select>
                    </div>

                    <div className="lg:flex lg:flex-row lg:gap-x-10 text-black w-full">
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Add Social Links"
                      />
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Youtube URL"
                      />
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Discord URL"
                      />
                    </div>

                    <div className="lg:flex lg:flex-row lg:gap-x-10 text-black w-full">
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Twitch URL"
                      />
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                        placeholder="Other Social URL"
                      />
                    </div>

                    <div className="lg:flex lg:flex-row lg:gap-x-10 text-black w-full">
                      <select className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5">
                        <option value="">Select Game</option>
                        <option value="game1">Battleground Mobile India</option>
                        <option value="game2">Freefire Max</option>
                        <option value="game3">Call of Duty Mobile</option>
                        <option value="game4">Valorant</option>
                      </select>
                      <button className="lg:w-full lg:h-12 rounded-2xl border-2 border-white text-white">
                        Skip for Now
                      </button>
                      <button className="lg:w-full lg:h-12 rounded-2xl border-2 border-white bg-black text-white">
                        Add Gaming Details Of Each Game
                      </button>
                    </div>

                    <div className="left-head w-full">
                      When you pick a game from the list above, its card will
                      pop up right below, giving you a quick overview of its
                      features, ratings, and more! You’ll see all the exciting
                      upcoming gaming series, tournaments, and matches it
                      offers, like gameplay mechanics and graphics. Plus, see
                      what other players are saying about it! It’s super easy to
                      get all the info you need before diving in!
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-14 bg-black/20 backdrop-blur-xl lg:h-120 lg:mt-28"></div>
        </div>
      </div>
    </>
  );
}

export default App;