import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import MultiSelect from "./Multiselect";
import PersonalInfoCard from "./cards/PersonalInfoCard";
import EducationInfoCard from "./cards/EducationInfoCard";
import CustomGameDropdown from "./CustomDropdown";
import GamingInfoCard from "./cards/GamingInfoCard";
import GameCard from "./cards/GameCard";
function Main() {
  const svgNames = ["BLUE", "Reyna", "KATANA", "FROSEN", "FAMILY", "WHITE"];
  const [showPopup, setShowPopup] = useState(false);
  // const [isDarkTheme, setIsDarkTheme] = useState(true);
  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const dropdownGameOptions = [
    {
      id: "bgmi",
      name: "Battleground Mobile India",
      image: "/images/BGMI.png",
      description: "Multiplayer battle royale game.",
      image2: "/images/BGMI2.svg",
    },
    {
      id: "freefire",
      name: "Freefire Max",
      image: "/images/FREEFIRE.png",
      description: "Fast-paced shooter game.",
      image2: "/images/FREEFIRE2.svg",
    },
    {
      id: "codm",
      name: "Call of Duty Mobile",
      image: "/images/CODM.png",
      description: "Mobile version of the iconic FPS.",
      image2: "/images/CODM2.svg",
    },
    {
      id: "valorant",
      name: "Valorant",
      image: "/images/Valorant.png",
      description: "Tactical team-based shooter.",
      image2: "/images/VALORANT2.svg",
    },
  ];
  const dropdownGameOptions1 = [
    {
      id: "bgmi",
      name: "Battleground Mobile India",
      image: "/Frame18.svg",
      description: "Multiplayer battle royale game.",
    },
    {
      id: "freefire",
      name: "Freefire Max",
      image: "/Frame16.svg",
      description: "Fast-paced shooter game.",
    },
    {
      id: "codm",
      name: "Call of Duty Mobile",
      image: "/Frame15.svg",
      description: "Mobile version of the iconic FPS.",
    },
    {
      id: "valorant",
      name: "Valorant",
      image: "/Frame17.svg",
      description: "Tactical team-based shooter.",
    },
  ];
  const [activeGameId, setActiveGameId] = useState();

  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(true);
  const [educationalInfo, setEducationalInfo] = useState(false);
  const [gamingInfo, setGamingInfo] = useState(false);
  // ✅ move this up

  const socialOptions = [
    { id: "youtube", name: "YouTube" },
    { id: "discord", name: "Discord" },
    { id: "twitch", name: "Twitch" },
    { id: "other", name: "Other" },
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
  const handleSocialSelect = (e) => {
    const value = e.target.value;
    if (!value || selectedSocials.includes(value)) return;
    setSelectedSocials((prev) => [...prev, value]);
    e.target.value = ""; // ✅ correctly inside the function
  };
  const handleTabClick = (tab) => {
    setPersonalInfo(false);
    setEducationalInfo(false);
    setGamingInfo(false);

    if (tab === "PERSONAL") setPersonalInfo(true);
    if (tab === "EDUCATIONAL") setEducationalInfo(true);
    if (tab === "GAMING") setGamingInfo(true);
  };
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [tagline, setTagline] = useState("");
  const [bio, setBio] = useState("");
  const [highestEducation, setHighestEducation] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [eduState, setEduState] = useState("");
  const [eduPinCode, setEduPinCode] = useState("");
  const [course, setCourse] = useState("");
  const [startingYear, setStartingYear] = useState("");
  const [endingYear, setEndingYear] = useState("");
  const [detailsClicked, setDetailsClicked] = useState(false);

  //*********gaming info usestates */
  const [selectedGames, setSelectedGames] = useState([]);
  const [selectedSocials, setSelectedSocials] = useState([]);
  const [skillLevel, setSkillLevel] = useState("");
  const [gamingPlatform, setGamingPlatform] = useState("");
  const [gamingServer, setGamingServer] = useState("");

  // ************gamedetails *************:
const [isDarkTheme, setIsDarkTheme] = useState(true);

  const [gameData, setGameData] = useState(
    {
      bgmi: { id: "", username: "", rank: "", level: "" },
      freefire: { id: "", username: "", rank: "", level: "", csRank: "" },
      valorant: { id: "", username: "", rank: "", level: "" },
      codm: { id: "", username: "", rank: "", level: "" },
    } || {}
  );
  const handleInputChange = (field, value) => {
    setGameData((prev) => ({
      ...prev,
      [activeGameId]: {
        ...prev[activeGameId],
        [field]: value,
      },
    }));
  };
  const currentGame = gameData[activeGameId];
  console.log(gameData);
  // ✅ Delete handler passed to GameCard
  const handleDeleteGame = (idToDelete) => {
    setSelectedGames((prevGames) =>
      prevGames.filter((game) => game !== idToDelete)
    );
    if (activeGameId === idToDelete) {
      setActiveGameId("");
      setGameId("");
      setGameRank("");
      setGameLevel("");
      setGameUsername("");
      setCSRank("");
    }
  };
  // editing game dateils from card component
  const handleEditGame = (gameId) => {
    setSubmitGameData(false);
    setActiveGameId(gameId);
    setDetailsClicked(true);
  };

  // **********************************

  console.log(selectedGames);
  const handleAddDetails = () => {
    if (selectedGames.length > 0) {
      setActiveGameId(selectedGames[0]); // ✅ Pick first game automatically
    }
    setDetailsClicked(true); // ✅ Show the game detail form
  };
  console.log(detailsClicked);
  console.log(activeGameId);

  // *********** Submit Game Data*************
  const [submitGameData, setSubmitGameData] = useState(false);
  const handleSubmitGameData = () => {
    const currentIndex = selectedGames.indexOf(activeGameId);
    const nextIndex = currentIndex + 1;

    if (nextIndex < selectedGames.length) {
      // Go to the next game
      setActiveGameId(selectedGames[nextIndex]);
      // Return to selection view (optional)
    } else {
      // All games completed → move to next page
      setSubmitGameData(true);
      console.log("All game data submitted:", gameData);
    }
  };
  const handleCardEdit = (tab) => () => {
    handleTabClick(tab);
    setDetailsClicked(false);
    setSubmitGameData(false);
    
  };

  return (
    <div
      className={`${
        detailsClicked
          ? "bg-[url('/DeatilsPage.png')]" // ✅ your new background
          : personalInfo
          ? "bg-[url('/InfoBackground.svg')]"
          : educationalInfo
          ? "bg-[url('/cyberman.png')]"
          : gamingInfo
          ? "bg-[url('/GamingInfo.png')]"
          : ""
      } bg-cover font-sa h-screen w-screen`}
    >
      {/* Navbar */}
      <div className="lg:h-14 lg:w-full  bg-black/50 backdrop-blur-xl" />

      <div className="flex  flex-row w-full">
        {/* Left Sidebar */}
        <div
          className="w-14 bg-white/30 backdrop-blur-sm lg:h-120 lg:mt-28"
          style={{
            clipPath: "polygon(0% 0%, 1000% 50%, 1000% 50%, 0% 100%)",
          }}
        />

        {/* Main Panel */}
        <div
          className={`${
            gamingInfo ? "lg:h-[88vh]" : "lg:h-[88vh]"
          } flex-1 bg-white/30 backdrop-blur-sm rounded-3xl mt-5 2xl:ml-20 2xl:mr-20 lg:ml-5  lg:mr-5 flex flex-col gap-4`}
        >
          {/* Tabs */}
          <div
            className={`py-5 ${
              submitGameData ? "hidden" : ""
            } w-full flex  px-10 justify-between text-center`}
          >
            {["PERSONAL", "EDUCATIONAL", "GAMING"].map((label) => {
              const isActive =
                (label === "PERSONAL" && personalInfo) ||
                (label === "EDUCATIONAL" && educationalInfo) ||
                (label === "GAMING" && gamingInfo);

              return (
                <div
                  key={label}
                  className={`trapezoid w-[30%] h-8  cursor-pointer ${
                    isActive
                      ? "bg-white text-black border-b-4 border-b-black"
                      : "bg-black text-white border-b-4 border-b-white"
                  }`}
                >
                  {label} INFORMATION
                </div>
              );
            })}
          </div>

          {/* Panels */}
          <div
            className={`px-5  ${
              !gamingInfo ? "flex justify-between" : ""
            } lg:h-full lg:w-full text-white -mt-5`}
          >
            {/* Personal Info Panel */}
            {personalInfo && (
              <>
                <div className="flex   px-4">
                  <div className="lg:h-full  lg:w-[45%] rounded-xl  pt-8 ">
                    <div
                      className={`relative ${
                        isDarkTheme
                          ? "bg-black/70 text-white"
                          : "bg-white text-black"
                      } bg-black/70  backdrop-blur-xl rounded-xl 2xl:pb-2   lg:w-[78%] space-y-3 text-white md:h-[70vh]  2xl:h-[72vh]`}
                    >
                      {/* Carousel */}
                      <button
                        onClick={() => setIsDarkTheme(!isDarkTheme)}
                        className={`absolute top-2 right-2 ${
                          isDarkTheme
                            ? "bg-black/50 text-white"
                            : "bg-white/50 text-black"
                        } px-3 py-1 rounded text-xs`}
                      >
                        {isDarkTheme ? "Light Theme" : "Dark Theme"}
                      </button>
                      <button
                        onClick={handlePrev}
                        type="button"
                        className={`absolute md:top-25 2xl:top-25 ${
                          isDarkTheme
                            ? "bg-black/50 text-white"
                            : "bg-white/50 text-black"
                        } w-5 -translate-y-1/2 text-2xl z-10`}
                      >
                        &#x276E;
                      </button>

                      {/* Image */}
                      <img
                        src={`/${svgNames[currentSvgIndex]}.png`}
                        alt={`SVG ${currentSvgIndex + 1}`}
                        className="-mt-4 rounded-t-xl object-cover lg:max-h-50 lg:w-full"
                      />

                      {/* Right Arrow */}
                      <button
                        onClick={handleNext}
                        type="button"
                        className={`absolute md:top-25 2xl:top-25 ${
                          isDarkTheme
                            ? "bg-black/50 text-white"
                            : "bg-white/50 text-black"
                        } w-5 right-0.5 top-25 -translate-y-1/2 text-2xl z-10`}
                      >
                        &#x276F;
                      </button>
                      {/* Content */}

                      <div
                        className={`flex flex-col -mt-3 text-sm md:space-y-2 md:h-[42.5vh] 2xl:h-[45vh] bg-cover rounded-b-xl justify-between overflow-hidden ${
                          isDarkTheme ? "bg-black/20" : "bg-white/20"
                        }`}
                        style={{
                          backgroundImage: `url(${svgNames[currentSvgIndex]}.png)`,
                        }}
                      >
                        <div
                          className={`flex flex-col p-4 pt-0 text-sm md:space-y-2 md:h-[42.5vh] 2xl:h-[45vh] justify-between overflow-hidden ${
                            isDarkTheme
                              ? "bg-black/50 text-white"
                              : "bg-white/60 text-black"
                          } backdrop-blur-xl`}
                        >
                          <div className="text-base font-semibold tracking-wide text-center">
                            USERNAME
                          </div>

                          <div className="flex justify-between gap-4">
                            <div>
                              <div className="text-sm ">Name</div>{" "}
                              <div className="text-base font-medium">
                                {fullName}
                              </div>{" "}
                            </div>
                            <div>
                              <div className="text-xs ">Age</div>
                              <div className="text-base font-medium">{age}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs ">Gender</div>
                              <div className=" text-base font-medium">
                                {gender}
                              </div>
                            </div>
                          </div>

                          {/* Tagline, Phone */}
                          <div className="flex justify-between gap-4 ">
                            <div className="">
                              <div className="text-xs ">Tagline</div>
                              <div className="font-medium text-base">
                                {tagline}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs  ">Phone Number</div>
                              <div className="font-medium text-base">
                                {" "}
                                {phoneNumber}
                              </div>
                            </div>
                          </div>

                          {/* Country, State, Pincode */}
                          <div className="flex justify-between gap-4">
                            <div>
                              <div className="text-xs ">Country</div>
                              <div className="font-medium text-base">
                                {country}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs ">State</div>
                              <div className="font-medium text-base">
                                {state}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs ">Pincode</div>
                              <div className="font-medium text-base">
                                {pinCode}
                              </div>
                            </div>
                          </div>

                          {/* Address */}
                          <div>
                            <div className="text-xs ">Address</div>
                            <div className="font-medium text-base">
                              {address}
                            </div>
                          </div>
                        </div>

                        {/* Bio */}
                      </div>
                    </div>
                  </div>

                  <div className="lg:h-full rounded-xl lg:w-[60%] mt-3 pl-0 text-black flex flex-col 2xl:gap-y-4 gap-y-2">
                    <div className="text-white">
                      <div className="left-head ">Personal Information</div>
                      <div className="left-head-text">
                        To create a personalized profile, include details such
                        as your name, age, location, interests, and any relevant
                        experiences. This will help others understand who you
                        are and what you enjoy!
                      </div>
                    </div>
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <div className="flex lg:flex-row lg:gap-x-10">
                      <MultiSelect
                        options={["Male", "Female", "Prefer not to say"]}
                        placeholder="Gender"
                        multiSelect={false}
                        onChange={(value) => setGender(value)}
                      />

                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                        placeholder="Age"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                    <div className="flex lg:flex-row lg:gap-x-10">
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="flex lg:flex-row lg:gap-x-10">
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                      <input
                        className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                        placeholder="Pin Code"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                      />
                    </div>
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                      placeholder="Tagline"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                    />

                    <button
                      className="lg:w-full lg:h-12 rounded-xl border-2 text-white border-white"
                      onClick={() => handleTabClick("EDUCATIONAL")}
                    >
                      Save Your Personal Information
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Educational Info Panel */}
            {educationalInfo && (
              <>
                <div className="lg:h-full lg:w-[40%]  rounded-xl p-3 ">
                  <div className="left-head ">Educational Information</div>
                  <div className="left-head-text lg:w-[90%]">
                    Don't forget to include your educational details! Whether
                    it's your 10th grade, 12th grade, or bachelor's degree, make
                    sure to highlight any relevant studies that showcase your
                    skills and dedication to the esports field.
                  </div>
                  <div className="bg-black/70 backdrop-blur-xl mt-4 rounded-xl 2xl:h-[55vh] md:h-[50vh] lg:w-[90%]  space-y-3 text-white">
                    {/* Carousel */}
                    <div className="corousal lg:h-30 rounded-md">
                      <img
                        src="/cyberman.png"
                        alt=""
                        className="lg:h-30 lg:w-full rounded-t-2xl"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col p-4 pt-0  text-sm md:space-y-2 md:h-[30vh]  2xl:h-[30vh] justify-between overflow-hidden">
                      <div className="text-base font-semibold  tracking-wide text-center">
                        USERNAME
                      </div>

                      {/* Name, Age, Gender */}
                      <div className="flex justify-between gap-4">
                        <div>
                          <div className="text-xs text-gray-300">
                            Highest Education
                          </div>
                          <div className="font-medium">{highestEducation}</div>
                        </div>
                      </div>

                      {/* Tagline, Phone */}
                      <div className="flex justify-between gap-4">
                        <div className="">
                          <div className="text-xs text-gray-300">
                            Institute name
                          </div>
                          <div className="font-medium">{institutionName}</div>
                        </div>
                      </div>

                      {/* Country, State, Pincode */}
                      <div className="flex justify-between gap-4">
                        <div>
                          <div className="text-xs text-gray-300">Course</div>
                          <div className="font-medium">{course}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-300">
                            Ending Year
                          </div>
                          <div className="font-medium">{endingYear}</div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <div className="text-xs text-gray-300">State</div>
                          <div className="font-medium">{eduState}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-300">Pincode</div>
                          <div className="font-medium">{eduPinCode}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:h-full rounded-xl lg:w-[60%] p-5 text-black flex flex-col gap-y-4">
                  <input
                    className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                    placeholder="Highest Education"
                    value={highestEducation}
                    onChange={(e) => setHighestEducation(e.target.value)}
                  />
                  <input
                    className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                    placeholder="Institution Name"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                  />
                  <div className="flex lg:flex-row lg:gap-x-10">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                      placeholder="State"
                      value={eduState}
                      onChange={(e) => setEduState(e.target.value)}
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                      placeholder="Pin Code"
                      value={eduPinCode}
                      onChange={(e) => setEduPinCode(e.target.value)}
                    />
                  </div>
                  <input
                    className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                    placeholder="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                  <div className="flex lg:flex-row lg:gap-x-10">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                      placeholder="Starting Year"
                      value={startingYear}
                      onChange={(e) => setStartingYear(e.target.value)}
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                      placeholder="Ending Year"
                      value={endingYear}
                      onChange={(e) => setEndingYear(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-x-10">
                    <button
                      className="lg:w-full lg:h-12 rounded-2xl border-2 border-white text-white"
                      onClick={() => handleTabClick("GAMING")}
                    >
                      Skip for Now
                    </button>
                    <button
                      className="lg:w-full lg:h-12 rounded-xl  bg-black text-white"
                      onClick={() => handleTabClick("GAMING")}
                    >
                      Save Your Educational Information
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Gaming Info Panel */}
            {gamingInfo && !detailsClicked && (
              <div className="lg:flex lg:flex-col lg:gap-4 lg:w-full text-black ">
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
                    <MultiSelect
                      options={["Newbie", "Beginner", "Intermediate", "Pro"]}
                      placeholder="Select Level"
                      multiSelect={false}
                      onChange={(value) => setSkillLevel(value)}
                    />

                    <MultiSelect
                      options={["Mobile", "PC or Desktop", "Both"]}
                      placeholder="Gaming Platform"
                      multiSelect={false}
                      onChange={(value) => setGamingPlatform(value)}
                    />
                    <MultiSelect
                      options={["Asia", "Europe"]}
                      placeholder="Gaming Server"
                      multiSelect={false}
                      onChange={(value) => setGamingServer(value)}
                    />
                  </div>

                  <div className="w-full mt-1">
                    <div className="flex">
                      {/* Custom dropdown without external array */}
                      <div className="w-52">
                        <MultiSelect
                          options={[
                            "Facebook",
                            "Twitter",
                            "Instagram",
                            "LinkedIn",
                          ]}
                          placeholder="Add Social Link"
                          onChange={(selected) => setSelectedSocials(selected)}
                        />
                      </div>

                      {/* Show input fields for selected socials */}
                      {selectedSocials.length > 0 && (
                        <div className="flex flex-wrap gap-4 ml-4">
                          {selectedSocials.map((platform) => (
                            <input
                              key={platform}
                              className="bg-white h-12 rounded-xl pl-5 md:w-52"
                              placeholder={`${
                                platform.charAt(0).toUpperCase() +
                                platform.slice(1)
                              } URL`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex lg:flex-row gap-x-6">
                    <CustomGameDropdown
                      selectedGames={selectedGames}
                      setSelectedGames={setSelectedGames}
                    />

                    <button className="lg:w-full lg:h-12 rounded-xl border-2 border-white text-white">
                      Skip for Now
                    </button>
                    <button
                      className="lg:w-full lg:h-12 rounded-xl  bg-black text-white"
                      onClick={handleAddDetails}
                    >
                      Add Gaming Details Of Each Game
                    </button>
                  </div>
                </div>

                <div>
                  <div className="left-head  text-lg text-white">
                    Selected Games
                  </div>
                  <div className="left-head-text text-sm text-white">
                    When you pick a game from the list above, its card will pop
                    up right below, giving you a quick overview of its features,
                    ratings, and more! You’ll see all the exciting upcoming
                    gaming series, tournaments, and matches it offers, like
                    gameplay mechanics and graphics. Plus, see what other
                    players are saying about it! It’s super easy to get all the
                    info you need before diving in!
                  </div>
                </div>

                <div className="flex flex-wrap  md:gap-10 items-center text-white gap-4">
                  {selectedGames.map((gameId) => {
                    const game = dropdownGameOptions.find(
                      (g) => g.id === gameId
                    );
                    return (
                      <div
                        key={gameId}
                        className=" text-black rounded-xl p-4 md:p-2 md:-mt-13 md:w-[200px] 2xl:-mt-3 2xl:w-[250px] flex flex-col items-center  "
                      >
                        <img
                          src={game?.image}
                          alt={game?.name}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150";
                          }}
                          className="w-full h-45  object-contain rounded-xl md:mb-0 mb-2"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {gamingInfo && detailsClicked && !submitGameData && (
              <>
                <div className="flex flex-col">
                  {/* Game Selection */}
                  <div className="up flex 2xl:gap-20">
                    {selectedGames.map((gameId) => {
                      const game = dropdownGameOptions.find(
                        (g) => g.id === gameId
                      );
                      return (
                        <div
                          key={gameId}
                          className="text-black rounded-xl p-4 w-[250px]"
                        >
                          <img
                            src={game?.image}
                            alt={game?.name}
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/150";
                            }}
                            className="w-full h-44 object-contain rounded-xl transform -mt-10 transition-transform duration-300 hover:scale-105"
                            onClick={() => setActiveGameId(gameId)} // ✅ Set active game on click
                          />
                        </div>
                      );
                    })}
                  </div>
                  {/* Down section: Show only after click */}
                  {activeGameId && (
                    <div className="down -mt-12 flex justify-center">
                      <div className=" lg:w-[35%]">
                        <div className="lg:h-full lg:w-full rounded-xl p-3">
                          <div className="bg-black/70 backdrop-blur-xl mt-4 rounded-xl 2xl:h-[56vh] lg:w-[85%] space-y-3 text-white p-3">
                            <div className="left-head text-sm">
                              Add {activeGameId.toUpperCase()} Account info’s
                            </div>
                            <div className="left-head-text text-xs">
                              Please provide your account information to
                              establish connections with your friends. You can
                              only include one BGMI IDs to proceed with BGMI.
                            </div>

                            {/* Carousel */}
                            <div className="corousal lg:h-36 rounded-md">
                              <img
                                src={
                                  dropdownGameOptions.find(
                                    (g) => g.id === activeGameId
                                  )?.image2
                                }
                                alt={activeGameId}
                                className="w-full h-36 object-cover rounded-lg mb-4"
                              />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col p-4 pt-0 text-sm md:space-y-5 md:h-[22vh] 2xl:h-[18vh] justify-between overflow-hidden">
                              <div className="text-base font-semibold tracking-wide text-center">
                                USERNAME
                              </div>

                              {/* Education */}
                              <div className="flex justify-between gap-4">
                                <div>
                                  <div className="text-xs text-gray-300">
                                    {activeGameId.toUpperCase()} UID
                                  </div>
                                  <div className="font-medium">
                                    {currentGame?.id}
                                  </div>
                                </div>
                              </div>

                              {/* Course and Ending Year */}
                              <div className="flex justify-between gap-4">
                                <div>
                                  <div className="text-xs text-gray-300">
                                    Overall Rank
                                  </div>
                                  <div className="font-medium">
                                    {currentGame?.rank}
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-xs text-gray-300">
                                    Level
                                  </div>
                                  <div className="font-medium">
                                    {currentGame?.level}
                                  </div>
                                </div>
                                {activeGameId === "freefire" && (
                                  <>
                                    {" "}
                                    <div className="text-right">
                                      <div className="text-xs text-gray-300">
                                        Cs Rank
                                      </div>
                                      <div className="font-medium">
                                        {currentGame?.csRank}
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:h-full rounded-xl lg:w-[60%]  pl-0 text-black flex flex-col gap-y-5 md:gap-y-3 pt-5">
                        <div className="text-white">
                          <div className="flex justify-between">
                            <div className="left-head text-lg ">
                              {activeGameId.toUpperCase()}
                            </div>
                            <button
                              className="bg-red-600 rounded-xl text-white px-2 text-xs"
                              onClick={() => {
                                setActiveGameId("");
                                setSelectedGames((prevGames) =>
                                  prevGames.filter(
                                    (game) => game !== activeGameId
                                  )
                                );
                                setGameId("");
                                setGameRank("");
                                setGameLevel("");
                                setGameUsername("");
                                setCSRank("");
                              }}
                            >
                              Delete game
                            </button>
                          </div>
                          <div className="left-head-text text-sm">
                            {activeGameId === "bgmi" &&
                              "BGMI, or Battlegrounds Mobile India, is a fun mobile battle royale game that dropped in 2021. To join a tournament, just fill in your BGMI user ID—it's like giving your gaming passport for a quick 2-5 minute registration! So, grab your squad or go solo, and let’s get this assembly rolling!"}
                            {activeGameId === "freefire" &&
                              "Free Fire Max India is a thrilling battle royale game for your phone! Log in with your user ID to jump into the action, unlock cool skins, and track your wins. Want to join a tournament? Just enter your user ID—it's quick and easy. Get ready for epic battles!"}
                            {activeGameId === "valorant" &&
                              "Valorant is an exciting tactical shooter that keeps you engaged! To join tournaments quickly, just enter your Valorant user ID. It’s simple! Type it in, and you’re ready to showcase your skills and win prizes. Let’s gear up for some epic matches!"}
                            {activeGameId === "codm" &&
                              "Call of Duty Mobile is your go-to shooter for epic action! Just pop in your CODM user ID and account details, and boom—you’re ready to roll! It’s like assembling your squad for a tournament in under 5 minutes. Let’s get those details in so you can dive into the fun!"}
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-white">
                          <button className="bg-black text-white  px-2">
                            Primary Account Info
                          </button>
                          <div>
                            {/* Your clickable div */}
                            <div
                              className="left-head cursor-pointer  p-3 rounded"
                              onClick={handleClick}
                            >
                              How To fill game data?
                            </div>

                            {/* Popup */}
                            {showPopup && (
                              <div className="fixed inset-0 bg-black/40 backdrop-blur-xl flex justify-center items-center z-50">
                                <div className="bg-black flex flex-col h-96 items-center p-6 rounded-2xl shadow-lg w-96">
                                  <h2 className="text-sm font-semibold mb-2 text-white">
                                    How to fill {activeGameId.toUpperCase()}{" "}
                                    game data?
                                  </h2>

                                  <p className="text-gray-300 text-xs text-center">
                                    Please provide all relevant details as
                                    illustrated in the accompanying example
                                    image. Specifically, include the following
                                    information: {activeGameId.toUpperCase()} ID
                                    (UID), player level, rank, and in-game
                                    username.
                                  </p>

                                  <img
                                    src={
                                      dropdownGameOptions1.find(
                                        (g) => g.id === activeGameId
                                      )?.image
                                    }
                                    alt={activeGameId}
                                    className="w-full h-36 mt-5 object-cover rounded-lg"
                                  />

                                  <button
                                    className="mt-5 w-80 px-4 py-2 bg-white text-black rounded"
                                    onClick={handleClose}
                                  >
                                    Continue Filling your game details
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex lg:flex-row lg:gap-x-10">
                          <input
                            placeholder="Level"
                            className="bg-white lg:w-full lg:h-12 rounded-xl pl-5 text-black"
                            type="number"
                            value={gameData[activeGameId]?.level || ""}
                            onChange={(e) =>
                              handleInputChange("level", e.target.value)
                            }
                          />

                          {activeGameId === "freefire" && (
                            <>
                              <input
                                placeholder="CS Rank"
                                className="bg-white lg:w-full lg:h-12 rounded-xl pl-5 text-black"
                                value={gameData.freefire.csRank}
                                onChange={(e) =>
                                  handleInputChange("csRank", e.target.value)
                                }
                              />
                            </>
                          )}
                          <MultiSelect
                            options={["Platinum", "Gold", "Diamond", "Ace"]}
                            placeholder="Rank"
                            multiSelect={false}
                            onChange={(selectedValue) =>
                              handleInputChange("rank", selectedValue)
                            }
                          />
                        </div>
                        <div className="flex lg:flex-row lg:gap-x-10">
                          <input
                            className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                            placeholder={`${activeGameId.toUpperCase()} ID`}
                            value={gameData[activeGameId]?.id || ""}
                            onChange={(e) =>
                              handleInputChange("id", e.target.value)
                            }
                          />
                        </div>
                        <div className="flex lg:flex-row lg:gap-x-10">
                          <input
                            className="bg-white lg:w-full lg:h-12 rounded-xl pl-5"
                            placeholder="In Game Username"
                            value={gameData[activeGameId]?.username || ""}
                            onChange={(e) =>
                              handleInputChange("username", e.target.value)
                            }
                          />
                        </div>
                        <div className="flex lg:gap-x-10">
                          <button
                            className="lg:w-full lg:h-12 rounded-xl border-2 border-white text-white"
                            onClick={() => {
                              setDetailsClicked(false);
                            }}
                          >
                            Back To Selection
                          </button>
                          <button
                            className="lg:w-full lg:h-12 rounded-xl  bg-black text-white"
                            onClick={() => {
                              handleSubmitGameData();
                            }}
                          >
                            Submit Account Info
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            {gamingInfo && detailsClicked && submitGameData && (
              <div className="flex flex-col h-[80vh] px-5 mt-10 overflow-y-auto no-scrollbar">
                <div className="flex-shrink-0">
                  <PersonalInfoCard
                    username="Username"
                    fullname={fullName}
                    gender={gender}
                    age={age}
                    phoneNumber={phoneNumber}
                    tagline={tagline}
                    state={state}
                    country={country}
                    pincode={pinCode}
                    onEdit={handleCardEdit("PERSONAL")}
                  />
                </div>

                <div className="flex-shrink-0 ">
                  <EducationInfoCard
                    username="Username"
                    highestEducation={highestEducation}
                    institutionName={institutionName}
                    state={eduState}
                    eduPinCode={eduPinCode}
                    course={course}
                    startingYear={startingYear}
                    endingYear={endingYear}
                    onEdit={handleCardEdit("EDUCATIONAL")}
                  />
                </div>

                <div className="flex-shrink-0 ">
                  <GamingInfoCard
                    username="Username"
                    skillLevel={skillLevel}
                    gamingPlatform={gamingPlatform}
                    gamingServer={gamingServer}
                    favouriteGames=""
                    socialMedia=""
                    onEdit={handleCardEdit("GAMING")}
                  />
                </div>

                <div className="flex-shrink-0 space-y-4">
                  {selectedGames.map((gameId) => {
                    const currentGame = gameData[gameId];
                    const gameDetails = dropdownGameOptions.find(
                      (g) => g.id === gameId
                    );

                    return (
                      <GameCard
                        key={gameId}
                        username={currentGame?.username}
                        id={currentGame?.id}
                        rank={currentGame?.rank}
                        level={currentGame?.level}
                        image={gameDetails?.image2}
                        onDelete={handleDeleteGame}
                        onEdit={handleEditGame}
                        gameId={gameId}
                      />
                    );
                  })}
                </div>

                {/* Checkbox and Continue Button */}
                <div className="mt-6 px-2 space-y-4">
                  <label className="flex items-start space-x-3 text-sm text-white">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      required
                    />
                    <span>
                      I have read and agree to the{" "}
                      <span className="underline cursor-pointer text-blue-400">
                        Privacy Policy
                      </span>{" "}
                      and{" "}
                      <span className="underline cursor-pointer text-blue-400">
                        Terms & Conditions
                      </span>{" "}
                      regarding the use of my personal, educational, and gaming
                      data.
                    </span>
                  </label>

                  <button
                    className="w-full text-white py-3 rounded-xl border border-white transition-all duration-400 ease-in-out hover:bg-black hover:border-none   hover:shadow-md hover:scale-[1.01]"
                    type="submit"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className="w-14 bg-white/25 backdrop-blur-xl lg:h-120 lg:mt-28"
          style={{
            clipPath: "polygon(100% 0%, -900% 50%, -900% 50%, 100% 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default Main;
