import React from "react";

const GamingInfoCard = ({
  username,
  skillLevel,
  gamingPlatform,
  gamingServer,
  favouriteGames,
  socialMedia,
  onEdit,
}) => {
  return (
    <div className="relative h-[28vh] w-full mt-5 overflow-hidden rounded-xl" >
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110"
        style={{ backgroundImage: "url('/Nextpage.png')" }}
      />

      {/* Glass overlay with original content */}
      <div className="relative z-10 h-full w-full bg-black/0 backdrop-blur-xl px-5 py-2 text-white">
        <div className="heading flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gaming Information</h1>
          <button className="bg-black text-white px-4 py-1 border-white border-1 text-xs rounded-xl"
          onClick={()=> onEdit()}>
            Edit
          </button>
        </div>

        <div className="text text-sm mt-1">
          Don't forget to add your gaming details to your profile! Include your
          skill level, preferred gaming platforms like mobile or PC, Gaming
          servers, social media links, and the games you love to play. This info
          can really highlight your gaming prowess and connect you with fellow
          gamers!
        </div>

        <div className="content h-[11vh] gap-10 mt-3">
          <div className="right w-full h-full flex flex-col justify-between">
            <div className="right-top w-full flex justify-between">
              <div>
                <div className="text-xs uppercase text-gray-300">Username</div>
                <div className="text-base font-medium">{username}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Skill Level
                </div>
                <div className="text-base font-medium">{skillLevel}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Gaming Platform
                </div>
                <div className="text-base font-medium">{gamingPlatform}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Gaming Server
                </div>
                <div className="text-base font-medium">{gamingServer}</div>
              </div>
            </div>

            <div className="right-bottom w-full flex justify-between">
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Favourite Games
                </div>
                <div className="text-base font-medium">{favouriteGames}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Connected Social Media Platform
                </div>
                <div className="text-base font-medium">{socialMedia}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingInfoCard;
