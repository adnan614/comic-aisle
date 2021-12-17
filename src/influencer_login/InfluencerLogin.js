import React from "react";

const InfluencerLogin = () => {
  return (
    <div className="bg-gray-600">
      <div className="">
        <img
          src="../assets/images/Transparent background Black border and yellow 1.png"
          className="block pl-12 mt-8"
        />

        <div className="w-[450px] m-auto h-[420px] bg-black rounded-2xl">
          <div className="p-16">
            <h1 className="pb-7 text-white font-semibold text-2xl mt-4">
              Login
            </h1>

            <input
              className="
              h-[30px]
              w-full
              rounded-lg
              border border-mygray-50
              bg-black
              mb-7
            "
              type="text"
              name=""
              placeholder="Username"
            />
            <input
              className="
              h-[30px]
              w-full
              rounded-lg
              border border-mygray-50
              bg-black
              mb-7
            "
              type="password"
              name=""
              placeholder="Password"
            />

            <button
              className="
              uppercase
              bg-myyellow-50
              m-auto
              block
              px-5
              py-3
              rounded-[40px]
              border border-black
              tracking-[2px]
            "
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerLogin;
