import React from "react";

const GamingInfoCard = ({
  username,
  skillLevel,
  gamingPlatform,
  gamingServer,
  favouriteGames,
  socialMedia,
}) => {
  return (
    <>
      <div className="main-div h-[30vh] w-full  bg-black/20 backdrop-blur-xl px-10 py-1 rounded-xl">
        <div className="heading flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gaming Information</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>
        </div>
        <div className="text ">
          Don't forget to add your gaming details to your profile! Include your
          skill level, preferred gaming platforms like mobile or PC, Gaming
          servers, social media links, and the games you love to play. This info
          can really highlight your gaming prowess and connect you with fellow
          gamers!
        </div>
        <div className="content  h-[15vh] gap-10 mt-2 ">
          <div className="right w-full h-full flex flex-col justify-between">
            <div className="right-top w-full flex justify-between">
              <div>
                <div className="text-sm ">Username</div>{" "}
                <div className="text-base font-medium">{username} </div>{" "}
              </div>
              <div>
                <div className="text-sm ">Skill Level</div>{" "}
                <div className="text-base font-medium">{skillLevel} </div>{" "}
              </div>
              <div>
                <div className="text-sm ">Gaming Platform</div>{" "}
                <div className="text-base font-medium">{gamingPlatform} </div>{" "}
              </div>

              <div>
                <div className="text-sm ">Gaming Server</div>{" "}
                <div className="text-base font-medium">{gamingServer} </div>{" "}
              </div>
            </div>
            <div className="right-bottom w-full flex justify-between">
              <div>
                <div className="text-sm ">Favourite Games</div>{" "}
                <div className="text-base font-medium"> {favouriteGames}</div>{" "}
              </div>
              <div>
                <div className="text-sm ">Connected Social Media Platform</div>{" "}
                <div className="text-base font-medium">{socialMedia} </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamingInfoCard;
