/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./build/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				mp: "992px",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				"grayish-white": "#F4F4F5",
				"second-red": "#DD3333",
				"second-red005": "rgba(221, 51, 51, 0.05)",
				red3C: "#FF2121",
				"second-black": "#333333",
				"background-white": "#F9F9FB",
				black06: "rgba(0, 0, 0, 0.6)",
				black04: "rgba(0, 0, 0, 0.4)",
				black02: "rgba(0, 0, 0, 0.2)",
				whiteF9: "#F9F9F9",
				listImg: "#FBF0F0",
				"second-blue": "#AFBCCF",
				"second-grayish-white": "#D9D9D9",
				lineRed: "rgba(224, 56, 56, 0.33)",
				lineGray: "#C2C2C2",
				lineGray025: "rgba(194, 194, 194, 0.25)",
				"title-color": "#C2CEDB",
				whiteF8: "#F8F8F8",
				grey50: "#676767",
				grey30: "#C2C2C2",
				bg1: "#FEFEFE",
				bg2: "rgba(194, 194, 194, 0.07)",
			},
			backgroundImage: {
				linearWhite:
					"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.58) 22.16%, rgba(255, 255, 255, 0.92) 51.23%, #FFFFFF 100%)",
				linearBlack:
					"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.81) 100%)",
			},
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
