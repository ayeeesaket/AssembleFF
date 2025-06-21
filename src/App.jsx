import { useState } from "react";

function App() {
  const svgNames = [];

  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(true);
  const [educationalInfo, setEducationalInfo] = useState(false);
  const [gamingInfo, setGamingInfo] = useState(false);
  const [selectedGames, setSelectedGames] = useState([]);

  const dropdownGameOptions = [
    { id: "bgmi", name: "Battleground Mobile India", image: "/BGMI.png" },
    { id: "freefire", name: "Freefire Max", image: "/FREEFIRE.png" },
    { id: "codm", name: "Call of Duty Mobile", image: "/CODM.png" },
    { id: "valorant", name: "Valorant", image: "/Valorant.png" },
  ];

  const handleDropdownGameSelect = (gameId) => {
    if (!gameId) return; // ⬅️ This prevents "" from clearing everything

    setPersonalInfo(false);
    setEducationalInfo(false);
    setGamingInfo(true);

    setSelectedGames((prevSelected) =>
      prevSelected.includes(gameId)
        ? prevSelected.filter((id) => id !== gameId)
        : [...prevSelected, gameId]
    );
  };

  const handleTabClick = (tab) => {
    setPersonalInfo(tab === "PERSONAL");
    setEducationalInfo(tab === "EDUCATIONAL");
    setGamingInfo(tab === "GAMING");
  };

  return (
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
      <div className="lg:h-14 lg:w-full bg-black/20 backdrop-blur-xl" />

      <div className="flex  flex-row w-full">
        {/* Left Sidebar */}
        <div className="w-14 LeftSidebar bg-black/20 backdrop-blur-xl lg:h-120 lg:mt-28" />

        {/* Main Panel */}
        <div className="flex-1 bg-black/20 backdrop-blur-xl lg:h-[88vh] rounded-3xl mt-5 ml-10 mr-10 flex flex-col gap-4">
          {/* Tabs */}
          <div className="py-5 w-full flex gap-10 px-5 justify-between text-center">
            {["PERSONAL", "EDUCATIONAL", "GAMING"].map((label) => {
              const isActive =
                (label === "PERSONAL" && personalInfo) ||
                (label === "EDUCATIONAL" && educationalInfo) ||
                (label === "GAMING" && gamingInfo);

              return (
                <div
                  key={label}
                  className={`trapezoid w-[30%] h-8 ml-28 cursor-pointer ${
                    isActive
                      ? "bg-white text-black border-b-4 border-b-black"
                      : "bg-black text-white border-b-4 border-b-white"
                  }`}
                  onClick={() => handleTabClick(label)}
                >
                  {label} INFORMATION
                </div>
              );
            })}
          </div>

          {/* Panels */}
          <div
            className={`px-5 gap-4 ${
              !gamingInfo ? "flex justify-between" : ""
            } lg:h-full lg:w-full text-white  -mt-5`}
          >
            {/* Personal Info Panel */}
            {personalInfo && (
              <>
                <div className="lg:h-full lg:w-[40%] rounded-xl p-3">
                  <div className="left-head">Personal Information</div>
                  <div className="left-head-text">
                    To create a personalized profile, include details such as
                    your name, age, location, interests, and any relevant
                    experiences. This will help others understand who you are
                    and what you enjoy!
                  </div>
                  <div className="bg-black/70 backdrop-blur-xl mt-4 rounded-xl lg:h-auto lg:w-[90%] p-4 space-y-3 text-white">
                    {/* Carousel */}
                    <div className="corousal lg:h-40 bg-white rounded-md"></div>

                    {/* Content */}
                    <div className="flex flex-col text-sm space-y-3">
                      <div className="text-base font-semibold tracking-wide">
                        USERNAME
                      </div>

                      {/* Name, Age, Gender */}
                      <div className="flex justify-between gap-4">
                        <div>
                          <div className="text-xs text-gray-300">Name</div>
                          <div className="font-medium">Vivek Shukla</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">Age</div>
                          <div className="font-medium">0</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">Gender</div>
                          <div className="font-medium">none</div>
                        </div>
                      </div>

                      {/* Tagline, Phone */}
                      <div className="flex justify-between gap-4">
                        <div className="w-1/2">
                          <div className="text-xs text-gray-300">Tagline</div>
                          <div className="font-medium">
                            BMGC Finalist Player
                          </div>
                        </div>
                        <div className="w-1/2">
                          <div className="text-xs text-gray-300">
                            Phone Number
                          </div>
                          <div className="font-medium">76857485696</div>
                        </div>
                      </div>

                      {/* Country, State, Pincode */}
                      <div className="flex justify-between gap-4">
                        <div>
                          <div className="text-xs text-gray-300">Country</div>
                          <div className="font-medium">None</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">State</div>
                          <div className="font-medium">None</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">Pincode</div>
                          <div className="font-medium">324154</div>
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <div className="text-xs text-gray-300">Address</div>
                        <div className="font-medium">
                          Sector - 14, Vigyan Nagar, Kota
                        </div>
                      </div>

                      {/* Bio */}
                      <div>
                        <div className="text-xs text-gray-300">BIO</div>
                        <div className="font-medium leading-relaxed"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:h-full rounded-xl lg:w-[55%] p-5 text-black flex flex-col gap-y-4">
                  <input
                    className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                    placeholder="Full Name"
                  />
                  <div className="flex lg:flex-row lg:gap-x-10">
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
                  <div className="flex lg:flex-row lg:gap-x-10">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Phone Number"
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Country"
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-x-10">
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
                    className="bg-white lg:w-full lg:h-20 rounded-2xl pl-5 pt-2"
                    placeholder="Bio"
                  />
                  <button className="lg:w-full lg:h-12 rounded-2xl border-2 border-white">
                    Save Your Personal Information
                  </button>
                </div>
              </>
            )}

            {/* Educational Info Panel */}
            {educationalInfo && (
              <>
                <div className="lg:h-full lg:w-[40%] rounded-xl p-3">
                  <div className="left-head">Educational Information</div>
                  <div className="left-head-text">
                    Don't forget to include your educational details! Whether
                    it's your 10th grade, 12th grade, or bachelor's degree, make
                    sure to highlight any relevant studies that showcase your
                    skills and dedication to the esports field.
                  </div>
                  <div className="bg-black/70 backdrop-blur-xl mt-4 rounded-xl lg:h-auto lg:w-[90%] p-4 space-y-3 text-white">
                    {/* Carousel */}
                    <div className="corousal lg:h-40 bg-white rounded-md"></div>

                    {/* Content */}
                    <div className="flex flex-col text-sm space-y-3">
                      <div className="text-base font-semibold tracking-wide">
                        USERNAME
                      </div>

                      {/* Name, Age, Gender */}
                      <div className="flex justify-between gap-4">
                        <div>
                          <div className="text-xs text-gray-300">
                            Highest Education
                          </div>
                          <div className="font-medium">NOne</div>
                        </div>
                      </div>

                      {/* Tagline, Phone */}
                      <div className="flex justify-between gap-4">
                        <div className="">
                          <div className="text-xs text-gray-300">
                            Institute name
                          </div>
                          <div className="font-medium">
                            Jaypee University of engineering and technology
                          </div>
                        </div>
                      </div>

                      {/* Country, State, Pincode */}
                      <div className="flex justify-between gap-4">
                        <div>
                          <div className="text-xs text-gray-300">Course</div>
                          <div className="font-medium">None</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">
                            Ending Year
                          </div>
                          <div className="font-medium">None</div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <div className="text-xs text-gray-300">State</div>
                          <div className="font-medium">None</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">
                            Pincode
                          </div>
                          <div className="font-medium">384756</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full rounded-xl lg:w-[55%] p-5 text-black flex flex-col gap-y-4">
                  <input
                    className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                    placeholder="Highest Education"
                  />
                  <input
                    className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                    placeholder="Institution Name"
                  />
                  <div className="flex lg:flex-row lg:gap-x-10">
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
                  <div className="flex lg:flex-row lg:gap-x-10">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Starting Year"
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Ending Year"
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-x-10">
                    <button className="lg:w-full lg:h-12 rounded-2xl border-2 border-white text-white">
                      Skip for Now
                    </button>
                    <button className="lg:w-full lg:h-12 rounded-2xl border-2 border-white bg-black text-white">
                      Save Your Educational Information
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Gaming Info Panel */}
            {gamingInfo && (
              <div className="lg:flex lg:flex-col lg:gap-4 lg:w-full text-black">
                <div>
                  <div className="left-head text-white">Gaming Information</div>
                  <div className="left-head-text text-white">
                    When you're talking about your favorite games, make sure to
                    drop the title, what platform you’re playing on, and the
                    genre. Don’t forget to mention when it was released and any
                    cool stuff like high scores or tournament wins. Also, share
                    your own experiences and strategies—those really show how
                    much you love gaming!
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex lg:flex-row gap-x-6">
                    <select
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      defaultValue=""
                    >
                      <option value="">Select Level</option>
                      <option value="newbie">Newbie</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="pro">Pro</option>
                    </select>
                    <select
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      defaultValue=""
                    >
                      <option value="">Gaming Platform</option>
                      <option value="mobile">Mobile</option>
                      <option value="pc">PC or Desktop</option>
                      <option value="both">Both</option>
                    </select>
                    <select
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      defaultValue=""
                    >
                      <option value="">Gaming Server</option>
                      <option value="asia">Asia</option>
                      <option value="europe">Europe</option>
                    </select>
                  </div>

                  <div className="flex lg:flex-row gap-x-6">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Add Social Links"
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="YouTube URL"
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Discord URL"
                    />
                  </div>

                  <div className="flex lg:flex-row gap-x-6">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Twitch URL"
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Other Social URL"
                    />
                  </div>

                  <div className="flex lg:flex-row gap-x-6">
                    <select
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      onChange={(e) => handleDropdownGameSelect(e.target.value)}
                    >
                      <option value="">Select Game</option>
                      {dropdownGameOptions.map((game) => (
                        <option key={game.id} value={game.id}>
                          {selectedGames.includes(game.id)
                            ? `✔ ${game.name}`
                            : game.name}
                        </option>
                      ))}
                    </select>
                    <button className="lg:w-full lg:h-12 rounded-2xl border-2 border-white text-white">
                      Skip for Now
                    </button>
                    <button className="lg:w-full lg:h-12 rounded-2xl border-2 border-white bg-black text-white">
                      Add Gaming Details Of Each Game
                    </button>
                  </div>
                </div>
                <div>
                  <div className="left-head text-white">Gaming Information</div>
                  <div className="left-head-text text-white">
                    When you're talking about your favorite games, make sure to
                    drop the title, what platform you’re playing on, and the
                    genre. Don’t forget to mention when it was released and any
                    cool stuff like high scores or tournament wins. Also, share
                    your own experiences and strategies—those really show how
                    much you love gaming!
                  </div>
                </div>
                {/* Optional: SVG Navigation */}
                <div className="flex flex-wrap justify-between items-center text-white  gap-4">
                  {selectedGames.map((gameId, index) => {
                    const game = dropdownGameOptions.find(
                      (g) => g.id === gameId
                    );
                    return (
                      <img
                        key={gameId}
                        src={game?.image}
                        alt={game?.name}
                        className="game-image"
                        style={{
                          animationDelay: `${index * 150}ms`,
                          height: "150px",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-14 bg-black/20 backdrop-blur-xl lg:h-120 lg:mt-28" />
      </div>
    </div>
  );
}

export default App;
