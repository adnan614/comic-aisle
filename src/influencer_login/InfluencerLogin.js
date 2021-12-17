import React from "react";

const InfluencerLogin = () => {
  return (
    <div className="bg-gray-600">
      <div class="">
        <img
          src="../assets/images/Transparent background Black border and yellow 1.png"
          class="block lg:pl-12 lg:mt-8 h-[100px] pl-10 mt-5 mb-6"
        />

        <div
          class="
          lg:w-[450px]
          m-auto
          lg:h-[380px]
          h-[280px]
          w-[250px]
          bg-black
          rounded-2xl
          shadow-mmd
        "
        >
          <div class="lg:p-16 p-6">
            <h1 class="pb-7 text-white font-semibold text-2xl mt-4">Login</h1>

            <input
              class="
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
              class="
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
              class="
              uppercase
              bg-myyellow-50
              m-auto
              block
              lg:px-5
              py-2
              px-3
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
