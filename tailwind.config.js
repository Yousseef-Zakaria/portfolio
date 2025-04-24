/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // must include all your component files!
        
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Sora", "sans-serif"],
            },
        },
    },
    plugins: [],
  }