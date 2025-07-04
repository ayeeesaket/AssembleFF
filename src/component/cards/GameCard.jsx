import React from "react";

const GameCard = ({ username, id, rank, level }) => {
  return (
    <>
      <div className="main-div h-[22vh] w-full flex gap-5 bg-black/20 backdrop-blur-xl px-2 py-2 rounded-xl">
        <div className="left w-60 bg-black"> image</div>
        <div className="content w-full flex flex-col justify-between">
          <div>
            <div className="heading w-full flex justify-between items-center">
              <h2 className="text-2xl font-bold">Gaming Information</h2>
              <div>
                <button className="bg-red-600 rounded-xl mr-7 text-white px-2 py-1 text-xs">
                  Delete game
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
              </div>
            </div>
            <div className="text ">
              Don't forget to add your gaming details to your profile! Include
              your skill level, preferred gaming platforms like mobile or PC,
              Gaming servers, social media links, and the games you love to
              play. This info can really highlight your gaming prowess and
              connect you with fellow gamers!
            </div>
          </div>
          <div className="right-top w-full flex justify-between">
            <div>
              <div className="text-sm ">In Game Username</div>{" "}
              <div className="text-base font-medium">{username} </div>{" "}
            </div>
            <div>
              <div className="text-sm ">Id</div>{" "}
                          <div className="text-base font-medium">{id}</div>{" "}
            </div>
            <div>
              <div className="text-sm ">Overall Rank</div>{" "}
                          <div className="text-base font-medium">{rank}</div>{" "}
            </div>

            <div>
              <div className="text-sm ">Level</div>{" "}
              <div className="text-base font-medium">{level}</div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
