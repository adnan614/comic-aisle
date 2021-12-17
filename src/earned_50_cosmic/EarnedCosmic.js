import React from 'react'

const EarnedCosmic = () => {
    return (
      <div className="bg-gray-600">
        <div className="w-[100vw] h-[100vh] bg-gray-600 flex justify-center items-center">
          <div className="w-[60vw] h-[60vh] bg-black relative">
            <img
              src="../assets/images/Union.svg"
              className="absolute top-[25px] left-[730px]"
            />
            <img
              src="../assets/images/Group 11.png"
              className="h-[170px] w-[170px] block m-auto"
            />
            <p className="text-center text-white font-semibold pb-2">
              Hurray! You have earned 50 Comic Currency
            </p>
            <p className="text-white text-[smaller] text-center">
              You are now a part of our exclusive community
            </p>
            <button
              className="
            uppercase
            bg-myyellow-50
            m-auto
            block
            mt-[50px]
            px-6
            py-2
            rounded-[40px]
            tracking-wider
            border border-black
          "
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    );
}

export default EarnedCosmic;
