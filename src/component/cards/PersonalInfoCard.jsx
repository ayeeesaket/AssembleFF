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
    <div className="relative h-[30vh] w-full overflow-hidden rounded-xl">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg  scale-110"
        style={{ backgroundImage: "url('/NExtpage.png')" }}
      />

      {/* Glossy overlay */}
      <div className="relative z-10 h-full w-full bg-black/0 backdrop-blur-xl px-10 py-4 text-white">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Personal Information</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>
        </div>

        {/* Description */}
        <div className="text-sm mt-1">
          Before tournaments, ensure your personal details are accurate in your
          profile. You can update your name, age, and address in account
          settings. Now, get ready to show off your skills and chase those
          rewards!
        </div>

        {/* Content */}
        <div className="flex gap-10 mt-4">
          {/* Left Image Placeholder */}
          <div className="h-[15vh] w-40 bg-black/30 rounded-lg flex items-center justify-center text-xs">
            Image
          </div>

          {/* Right Details */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Top Row */}
            <div className="grid grid-cols-5 gap-4">
              <div>
                <div className="text-xs uppercase text-gray-300">Username</div>
                <div className="text-base font-medium">{username}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">Name</div>
                <div className="text-base font-medium">{fullname}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">Gender</div>
                <div className="text-base font-medium">{gender}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">Age</div>
                <div className="text-base font-medium">{age}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Phone Number
                </div>
                <div className="text-base font-medium">{phoneNumber}</div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div>
                <div className="text-xs uppercase text-gray-300">Tagline</div>
                <div className="text-base font-medium">{tagline}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">State</div>
                <div className="text-base font-medium">{state}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">Country</div>
                <div className="text-base font-medium">{country}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">Pincode</div>
                <div className="text-base font-medium">{pincode}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
