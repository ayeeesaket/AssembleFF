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
    setPersonalInfo(false);
    setEducationalInfo(false);
    setGamingInfo(true);

    setSelectedGames(
      (prevSelected) =>
        prevSelected.includes(gameId)
          ? prevSelected.filter((id) => id !== gameId) // Remove if already selected
          : [...prevSelected, gameId] // Add new
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

      <div className="flex flex-row w-full">
        {/* Left Sidebar */}
        <div className="w-14 bg-black/20 backdrop-blur-xl lg:h-120 lg:mt-28" />

        {/* Main Panel */}
        <div className="flex-1  backdrop-blur-xl h-full rounded-3xl mt-5 ml-10 mr-10 flex flex-col gap-4">
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
            } lg:h-full lg:w-full text-white `}
          >
            {/* Personal Info Panel */}
            {personalInfo && (
              <>
                <div className="lg:h-full lg:w-[40%] rounded-xl p-3">
                  <div className="left-head">Personal Information</div>
                  <div className="left-head-text">
                    To create a personalized profile, include details...
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
                    Don’t forget to include your educational details!
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
              <div className="lg:flex lg:flex-col lg:gap-6 lg:w-full text-black">
                <div className="left-head">Gaming Information</div>
                <div className="left-head-text">
                  Mention your favorite games, platforms, achievements...
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

                {/* Optional: SVG Navigation */}
                <div className="flex justify-between items-center text-white mt-6">
                  {selectedGames.map((gameId, index) => {
    const game = dropdownGameOptions.find((g) => g.id === gameId);
    return (
      <img
        key={gameId}
        src={game?.image}
        alt={game?.name}
        className="game-image"
        style={{
          animationDelay: `${index * 150}ms`,
          height: '150px',
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
