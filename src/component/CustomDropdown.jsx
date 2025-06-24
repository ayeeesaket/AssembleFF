import React, { useState, useRef, useEffect } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const dropdownGameOptions = [
  { id: "bgmi", name: "Battleground Mobile India", image: "/BGMI.png" },
  { id: "freefire", name: "Freefire Max", image: "/FREEFIRE.png" },
  { id: "codm", name: "Call of Duty Mobile", image: "/CODM.png" },
  { id: "valorant", name: "Valorant", image: "/Valorant.png" },
];

const CustomGameDropdown = ({ selectedGames, setSelectedGames }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleGameSelection = (gameId) => {
    if (selectedGames.includes(gameId)) {
      setSelectedGames(selectedGames.filter((id) => id !== gameId));
    } else {
      setSelectedGames([...selectedGames, gameId]);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="bg-white rounded-2xl p-4 shadow-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className=" text-black">Select Games</div>
      </div>

      {open && (
        <div className="absolute bg-white rounded-xl mt-2 z-10 p-3 shadow-lg w-full max-h-60 overflow-y-auto">
          {dropdownGameOptions.map((game) => (
            <label
              key={game.id}
              className="flex items-center gap-2 py-1 cursor-pointer"
              onClick={() => toggleGameSelection(game.id)}
            >
              <input
                type="checkbox"
                checked={selectedGames.includes(game.id)}
                onChange={() => {}}
                className="accent-black"
              />
              
              <span className="text-black font-medium">{game.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomGameDropdown;