/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:'#7575c8',
      purple:'#e3e3ff'
    },
    extend: {
      fontFamily:{
        SpaceGrotesk:['"Space Grotesk"',"sans-serif"]
      }
    },
  },
  plugins: [],
}

