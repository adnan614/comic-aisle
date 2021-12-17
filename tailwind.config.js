module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        450: "100rem",
      },
      colors: {
        mygray: {
          50: "#777e8c",
        },
        myyellow: {
          50: "#fff500",
        },
      },
      boxShadow: { mmd: "0 0px 20px 0px #fff500" },
    },
  },
  plugins: [],
};
