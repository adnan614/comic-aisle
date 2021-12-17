import React from "react";

const InfluencerDashboard = () => {
  return (
    <div className="bg-gray-600">
      <div className="h-[100vh] w-[100vw] bg-black">
        <div className="flex justify-between items-center">
          <img
            src="../assets/images/Transparent background Black border and yellow 1.png"
            className="block pl-[130px] pr-[60px] mt-9"
          />

          <div className="mr-[3rem]">
            <button
              className="
              border border-myyellow-50
              uppercase
              tracking-[2px]
              text-myyellow-50
              rounded-[40px]
              bg-black
              px-6
              py-2
            "
            >
              Logout
            </button>
          </div>
        </div>
        <div className="relative pl-[200px] pr-[200px] mt-7">
          <h2 className="text-white capitalize text-2xl font-semibold pb-6">
            Mohit Yodha
          </h2>
          <p className="text-white pt-[30px] pb-5">My affiliate link</p>

          <input
            className="h-[30px] w-[50%] border border-mygray-50 bg-black mb-[30px]"
            type="text"
            name=""
          />
          <button
            className="
            absolute
            h-[30px]
            border border-myyellow-50
            uppercase
            tracking-[2px]
            text-myyellow-50
            rounded-[0px
            40px 40px
            0px]
            bg-black
            px-4
          "
          >
            Click to Copy
          </button>
          <div className="flex mt-[10px] space-x-8">
            <div
              className="
              h-[140px
              w-[340px]
              border border-mygray-50
              rounded-[8px]
              flex
              pt-[22px]
              pr-[18px]
              pl-[22px]
            "
            >
              <div className="">
                <p className="text-white font-semibold pb-[20px]">
                  My Comic Currency
                </p>
                <p className="text-white font-semibold">3000</p>
              </div>
              <img
                src="../assets/images/Group 11.png"
                className="h-[150px] w-[150px] block"
              />
            </div>
            <div
              className="
              h-[140px
              w-[340px]
              border border-mygray-50
              rounded-[8px]
              flex
              pt-[22px]
              pr-[18px]
              pl-[22px]
            "
            >
              <div className="">
                <p className="text-white font-semibold pb-[20px]">
                  My Comic Currency
                </p>
                <p className="text-white font-semibold">3000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDashboard;
