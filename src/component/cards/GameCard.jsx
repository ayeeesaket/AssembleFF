import React from "react";

const GameCard = ({ username, id, rank, level }) => {
  return (
    <div className="relative h-[22vh] w-full overflow-hidden rounded-xl mt-5">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110"
        style={{ backgroundImage: "url('/NExtpage.png')" }}
      />

      {/* Glass overlay with original content */}
      <div className="relative z-10 h-full w-full bg-black/0 backdrop-blur-xl px-2 py-2 text-white flex gap-5 rounded-xl">
        <div
          className="left w-60 bg-black/30 rounded-lg flex items-center justify-center text-xs bg-cover bg-center"
          style={{ backgroundImage: "url('BLUE.png')" }}
        ></div>

        <div className="content w-full flex flex-col justify-between">
          <div>
            <div className="heading w-full flex justify-between items-center">
              <h2 className="text-2xl font-bold">Gaming Information</h2>
              <div>
                <button className="bg-red-600 rounded-xl mr-7 text-white px-2 py-1 text-xs">
                  Delete game
                </button>
                <button className="bg-black text-white px-4 py-1 border-white border-1 rounded-xl">
                  Edit
                </button>
              </div>
            </div>
            <div className="text text-sm mt-1">
              Don't forget to add your gaming details to your profile! Include
              your skill level, preferred gaming platforms like mobile or PC,
              Gaming servers, social media links, and the games you love to
              play. This info can really highlight your gaming prowess and
              connect you with fellow gamers!
            </div>
          </div>

          <div className="right-top w-full flex justify-between">
            <div>
              <div className="text-xs uppercase text-gray-300">
                In Game Username
              </div>
              <div className="text-base font-medium">{username}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-300">ID</div>
              <div className="text-base font-medium">{id}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-300">
                Overall Rank
              </div>
              <div className="text-base font-medium">{rank}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-300">Level</div>
              <div className="text-base font-medium">{level}</div>
            </div>
            <button className="px-5 rounded-xl py-1 bg-green-500">Verify Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
