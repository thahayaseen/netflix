/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//      "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily:{
//         title:["Roboto","serif"]
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This is fine, make sure you include all the directories
  ],
  theme: {
    extend: {
      fontFamily: {
        titlee: ["Roboto", "serif"], // This is correctly adding the "Roboto" font
      },
    },
  },
  plugins: [],
}
