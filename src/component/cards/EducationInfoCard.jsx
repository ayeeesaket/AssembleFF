import React from 'react'

const EducationInfoCard = ({
    username,
    highestEducation,
    course,
    startingYear,
    institutionName,
    endingYear,
    state,
    eduPinCode }
) => {
  return (
    <>
      <div className="main-div h-[30vh] w-full  bg-black/20 backdrop-blur-xl px-10 py-1 rounded-xl">
        <div className="heading flex justify-between items-center">
          <h1 className="text-2xl font-bold">Educational Information</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>
        </div>
        <div className="text ">
          Make sure to include your educational background in your profile. List
          your school or college name, the year you started, and the year you
          graduated. This information can help showcase your qualifications and
          achievements!
        </div>
        <div className="content flex gap-10 mt-2 ">
          <div className="left h-[15vh] w-50 bg-black"> image</div>
          <div className="right w-full flex flex-col justify-between">
            <div className="right-top w-full flex justify-between">
              <div>
                <div className="text-sm ">Username</div>{" "}
                <div className="text-base font-medium">{username} </div>{" "}
              </div>
              <div>
                <div className="text-sm ">Highest Education</div>{" "}
                <div className="text-base font-medium">{highestEducation} </div>{" "}
              </div>
              <div>
                <div className="text-sm ">Course</div>{" "}
                <div className="text-base font-medium">{course} </div>{" "}
              </div>

              <div>
                <div className="text-sm ">Starting Year</div>{" "}
                <div className="text-base font-medium">{startingYear} </div>{" "}
              </div>
            </div>
            <div className="right-bottom w-full flex justify-between">
              <div>
                <div className="text-sm ">Institute Name</div>{" "}
                <div className="text-base font-medium">{institutionName} </div>{" "}
              </div>
              <div>
                <div className="text-sm ">Ending Year</div>{" "}
                <div className="text-base font-medium">{endingYear} </div>{" "}
              </div>
              <div>
                <div className="text-sm ">State</div>{" "}
                <div className="text-base font-medium">{state} </div>{" "}
              </div>
              <div>
                <div className="text-sm ">Pincode</div>{" "}
                <div className="text-base font-medium">{eduPinCode} </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationInfoCard
