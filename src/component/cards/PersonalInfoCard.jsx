import React from "react";

const PersonalInfoCard = ({
  username,
  fullname,
  gender,
  age,
  phoneNumber,
  tagline,
  state,
  country,
  pincode,
}) => {
  return (
    <>
      <div className="main-div h-[30vh] w-full   bg-gradient-to-br from-black via-black/70 to-black/50
    backdrop-blur-xlpx-10 py-1">
        <div className="heading flex justify-between items-center">
          <h1 className="text-2xl font-bold">Personal Information</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>
        </div>
        <div className="text ">
          Before tournaments, ensure your personal details are accurate in your
          profile. You can update your name, age, and address in account
          settings. Now, get ready to show off your skills and chase those
          rewards!
        </div>
        <div className="content flex gap-10 mt-2 ">
          <div className="left h-[15vh] w-50 bg-black"> image</div>
          <div className="right w-full flex flex-col justify-between">
            <div className="right-top w-full flex justify-between">
              <div>
                <div className="text-sm ">Username</div>{" "}
                <div className="text-base font-medium">{username}</div>{" "}
              </div>
              <div>
                <div className="text-sm ">Name</div>{" "}
                <div className="text-base font-medium">{fullname}</div>{" "}
              </div>
              <div>
                <div className="text-sm ">Gender</div>{" "}
                <div className="text-base font-medium">{gender}</div>{" "}
              </div>
              <div>
                <div className="text-sm ">Age</div>{" "}
                <div className="text-base font-medium">{age}</div>{" "}
              </div>
              <div>
                <div className="text-sm ">Phone Number</div>{" "}
                <div className="text-base font-medium">{phoneNumber}</div>{" "}
              </div>
            </div>
            <div className="right-bottom w-full flex justify-between">
              <div>
                <div className="text-sm ">Tagline</div>{" "}
                <div className="text-base font-medium">{tagline}</div>{" "}
              </div>
              <div>
                <div className="text-sm ">State</div>{" "}
                <div className="text-base font-medium">{state}</div>{" "}
              </div>
              <div>
                <div className="text-sm ">Country</div>{" "}
                <div className="text-base font-medium">{country}</div>{" "}
              </div>
              <div>
                <div className="text-sm ">Pincode</div>{" "}
                <div className="text-base font-medium">{pincode}</div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoCard;
