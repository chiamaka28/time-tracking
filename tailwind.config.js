/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(15, 100%, 70%)",
        "soft-blue": " hsl(195, 74%, 62%)",
        "study-red": " hsl(348, 100%, 68%)",
        "lime-green": "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        "soft-orange": " hsl(43, 84%, 65%)",
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      backgroundImage: {
        work: "url('./images/icon-work.svg')",
        play: "url('./images/icon-play.svg')",
        study: "url('./images/icon-study.svg')",
        exercise: "url('./images/icon-exercise.svg')",
        social: "url('./images/icon-social.svg')",
        "self-care": "url('./images/icon-self-care.svg')",
      },
    },
  },
  plugins: [],
}

