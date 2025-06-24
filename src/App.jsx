import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";

import Slider from "react-slick";
import MultiSelect from "./component/Multiselect";
import CustomGameDropdown from "./component/CustomDropdown";
function App() {
  const svgNames = ["BLUE", "Reyna", "KATANA", "FROSEN", "FAMILY", "WHITE"];
  const dropdownGameOptions = [
    {
      id: "bgmi",
      name: "Battleground Mobile India",
      image: "/images/BGMI.png",
      description: "Multiplayer battle royale game.",
    },
    {
      id: "freefire",
      name: "Freefire Max",
      image: "/images/FREEFIRE.png",
      description: "Fast-paced shooter game.",
    },
    {
      id: "codm",
      name: "Call of Duty Mobile",
      image: "/images/CODM.png",
      description: "Mobile version of the iconic FPS.",
    },
    {
      id: "valorant",
      name: "Valorant",
      image: "/images/Valorant.png",
      description: "Tactical team-based shooter.",
    },
  ];

  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(true);
  const [educationalInfo, setEducationalInfo] = useState(false);
  const [gamingInfo, setGamingInfo] = useState(false);
  const [selectedGames, setSelectedGames] = useState([]);
  const [selectedSocials, setSelectedSocials] = useState([]); // ✅ move this up

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
  

  // usestates for all divs in personal info
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(""); // keep as string for consistent input behavior
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [tagline, setTagline] = useState("");
  const [bio, setBio] = useState("");

  // usestate for all divs in educational information
  const [highestEducation, setHighestEducation] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [eduState, setEduState] = useState("");
  const [eduPinCode, setEduPinCode] = useState("");
  const [course, setCourse] = useState("");
  const [startingYear, setStartingYear] = useState("");
  const [endingYear, setEndingYear] = useState("");
  console.log(selectedGames);

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
        <div
          className="w-14 bg-black/20 backdrop-blur-xl lg:h-120 lg:mt-28"
          style={{
            clipPath: "polygon(0% 0%, 1000% 50%, 1000% 50%, 0% 100%)",
          }}
        />

        {/* Main Panel */}
        <div
          className={`${
            gamingInfo ? "lg:h-[88vh]" : "lg:h-[88vh]"
          } flex-1 bg-black/20 backdrop-blur-xl rounded-3xl mt-5 ml-10 mr-10 flex flex-col gap-4`}
        >
          {/* Tabs */}
          <div className="py-5 w-full flex  px-10 justify-between text-center">
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
                  onClick={() => handleTabClick(label)}
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
                  <div className="lg:h-full lg:w-[45%] rounded-xl  pt-8 ">
                    <div className="bg-black/70 2xl:pb-2  backdrop-blur-xl rounded-xl lg:w-[78%] space-y-3 text-white md:h-[74vh]  2xl:h-[72vh]">
                      {/* Carousel */}

                      <button
                        onClick={handlePrev}
                        type="button"
                        className="absolute md:top-25  2xl:top-25 bg-black/50 w-5   -translate-y-1/2 text-2xl z-10 text-white"
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
                        className="absolute md:top-25 2xl:top-25 bg-black/50 w-5  right-0.5 top-25 -translate-y-1/2 text-2xl z-10 text-white"
                      >
                        &#x276F;
                      </button>
                      {/* Content */}
                      <div className="flex flex-col p-4 pt-0  text-sm md:space-y-2 md:h-[36vh]  2xl:h-[38vh] justify-between overflow-hidden">
                        <div className="text-base font-semibold tracking-wide text-center">
                          USERNAME
                        </div>

                        <div className="flex justify-between gap-4">
                          <div>
                            <div className="text-sm text-gray-300">Name</div>{" "}
                            <div className="text-base font-medium">
                              {fullName}
                            </div>{" "}
                          </div>
                          <div>
                            <div className="text-xs text-gray-300">Age</div>
                            <div className="text-base font-medium">{age}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-300 ">Gender</div>
                            <div className=" text-base font-medium">
                              {gender}
                            </div>
                          </div>
                        </div>

                        {/* Tagline, Phone */}
                        <div className="flex justify-between gap-4 ">
                          <div className="">
                            <div className="text-xs text-gray-300">Tagline</div>
                            <div className="font-medium text-base">
                              {tagline}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-300 ">
                              Phone Number
                            </div>
                            <div className="font-medium text-base">
                              {" "}
                              {phoneNumber}
                            </div>
                          </div>
                        </div>

                        {/* Country, State, Pincode */}
                        <div className="flex justify-between gap-4">
                          <div>
                            <div className="text-xs text-gray-300">Country</div>
                            <div className="font-medium text-base">
                              {country}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-300">State</div>
                            <div className="font-medium text-base">{state}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-300">Pincode</div>
                            <div className="font-medium text-base">
                              {pinCode}
                            </div>
                          </div>
                        </div>

                        {/* Address */}
                        <div>
                          <div className="text-xs text-gray-300">Address</div>
                          <div className="font-medium text-base">{address}</div>
                        </div>

                        {/* Bio */}
                      </div>
                    </div>
                  </div>

                  <div className="lg:h-full rounded-xl lg:w-[60%]  pl-0 text-black flex flex-col gap-y-4">
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

                    <button className="lg:w-full lg:h-12 rounded-xl border-2 border-white">
                      Save Your Personal Information
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Educational Info Panel */}
            {educationalInfo && (
              <>
                <div className="lg:h-full lg:w-[40%]  rounded-xl p-3">
                  <div className="left-head md:px-9">
                    Educational Information
                  </div>
                  <div className="left-head-text">
                    Don't forget to include your educational details! Whether
                    it's your 10th grade, 12th grade, or bachelor's degree, make
                    sure to highlight any relevant studies that showcase your
                    skills and dedication to the esports field.
                  </div>
                  <div className="bg-black/70 backdrop-blur-xl mt-4 rounded-xl 2xl:h-[55vh] lg:w-[90%]  space-y-3 text-white">
                    {/* Carousel */}
                    <div className="corousal lg:h-40 rounded-md">
                      <img
                        src="/cyberman.png"
                        alt=""
                        srcset=""
                        className="lg:h-40 lg:w-full rounded-t-2xl"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col p-4 pt-0  text-sm md:space-y-2 md:h-[32vh]  2xl:h-[30vh] justify-between overflow-hidden">
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
                <div className="lg:h-full rounded-xl lg:w-[55%] p-5 text-black flex flex-col gap-y-4">
                  <input
                    className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                    placeholder="Highest Education"
                    value={highestEducation}
                    onChange={(e) => setHighestEducation(e.target.value)}
                  />
                  <input
                    className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                    placeholder="Institution Name"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                  />
                  <div className="flex lg:flex-row lg:gap-x-10">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="State"
                      value={eduState}
                      onChange={(e) => setEduState(e.target.value)}
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Pin Code"
                      value={eduPinCode}
                      onChange={(e) => setEduPinCode(e.target.value)}
                    />
                  </div>
                  <input
                    className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                    placeholder="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                  <div className="flex lg:flex-row lg:gap-x-10">
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Starting Year"
                      value={startingYear}
                      onChange={(e) => setStartingYear(e.target.value)}
                    />
                    <input
                      className="bg-white lg:w-full lg:h-12 rounded-2xl pl-5"
                      placeholder="Ending Year"
                      value={endingYear}
                      onChange={(e) => setEndingYear(e.target.value)}
                    />
                  </div>
                  <div className="flex lg:flex-row lg:gap-x-10">
                    <button className="lg:w-full lg:h-12 rounded-2xl border-2 border-white text-white">
                      Skip for Now
                    </button>
                    <button className="lg:w-full lg:h-12 rounded-xl  bg-black text-white">
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
                    <MultiSelect
                      options={["Newbie", "Beginner", "Intermediate", "Pro"]}
                      placeholder="Select Level"
                      multiSelect={false}
                      onChange={(selectedLevel) => {
                        console.log("Selected Level:", selectedLevel);
                      }}
                    />

                    <MultiSelect
                      options={["Mobile", "PC or Desktop", "Both"]}
                      placeholder="Gaming Platform"
                      multiSelect={false}
                      onChange={(selected) => {
                        console.log("Selected Gaming Platform:", selected);
                      }}
                    />
                    <MultiSelect
                      options={["Asia", "Europe"]}
                      placeholder="Gaming Server"
                      multiSelect={false}
                      onChange={(selected) => {
                        console.log("Selected Gaming Server:", selected);
                      }}
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
                    <button className="lg:w-full lg:h-12 rounded-xl  bg-black text-white">
                      Add Gaming Details Of Each Game
                    </button>
                  </div>
                </div>

                <div>
                  <div className="left-head  text-lg text-white">
                    Gaming Information
                  </div>
                  <div className="left-head-text text-sm text-white">
                    When you're talking about your favorite games, make sure to
                    drop the title, what platform you’re playing on, and the
                    genre. Don’t forget to mention when it was released and any
                    cool stuff like high scores or tournament wins. Also, share
                    your own experiences and strategies—those really show how
                    much you love gaming!
                  </div>
                </div>

                <div className="flex flex-wrap  md:gap-16 items-center text-white gap-4">
                  {selectedGames.map((gameId) => {
                    const game = dropdownGameOptions.find(
                      (g) => g.id === gameId
                    );
                    return (
                      <div
                        key={gameId}
                        className=" text-black rounded-xl p-4 w-[220px] flex flex-col items-center "
                      >
                        <img
                          src={game?.image}
                          alt={game?.name}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150";
                          }}
                          className="w-full h-32 object-contain rounded-xl mb-2"
                        />
                       
                        
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className="w-14 bg-black/20 backdrop-blur-xl lg:h-120 lg:mt-28"
          style={{
            clipPath: "polygon(100% 0%, -900% 50%, -900% 50%, 100% 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default App;
