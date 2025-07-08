import React from "react";

const EducationInfoCard = ({
  username,
  highestEducation,
  course,
  startingYear,
  institutionName,
  endingYear,
  state,
  eduPinCode,
  onEdit,
}) => {
  return (
    <div className="relative h-[30vh] w-full mt-5 overflow-hidden rounded-xl">
      {/* Blurred background image */}
      <div className="absolute inset-0 scale-110">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-lg"
          style={{ backgroundImage: "url('cyberman.png')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Glass overlay */}
      <div className="relative z-10 h-full w-full bg-black/0 backdrop-blur-xl px-5 py-2  text-white">
        <div className="heading flex justify-between items-center">
          <h1 className="text-2xl font-bold">Educational Information</h1>
          <button className="bg-black text-white px-4 py-1 border-white border-1 text-xs rounded-xl"
          onClick={()=> onEdit()}>
            
            Edit
          </button>
        </div>

        <div className="text text-sm mt-1">
          Make sure to include your educational background in your profile. List
          your school or college name, the year you started, and the year you
          graduated. This information can help showcase your qualifications and
          achievements!
        </div>

        <div className="content flex gap-10 mt-3">
          <div
            className="left h-[15vh] w-50 bg-black/30 rounded-lg flex items-center justify-center text-xs bg-cover bg-center"
            style={{ backgroundImage: "url('cyberman.png')" }}
          ></div>

          <div className="right h-[13vh] mt-2 w-full flex flex-col justify-between">
            <div className="right-top w-full flex justify-between">
              <div>
                <div className="text-xs uppercase text-gray-300">Username</div>
                <div className="text-base font-medium">{username}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Highest Education
                </div>
                <div className="text-base font-medium">{highestEducation}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">Course</div>
                <div className="text-base font-medium">{course}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Starting Year
                </div>
                <div className="text-base font-medium">{startingYear}</div>
              </div>
            </div>

            <div className="right-bottom w-full flex justify-between">
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Institute Name
                </div>
                <div className="text-base font-medium">{institutionName}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">
                  Ending Year
                </div>
                <div className="text-base font-medium">{endingYear}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">State</div>
                <div className="text-base font-medium">{state}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-300">Pincode</div>
                <div className="text-base font-medium">{eduPinCode}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInfoCard;
