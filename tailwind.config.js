module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '288' : '72rem',
        '3/4-screen' : '75vw',
      },
      height: {
        '192' : '48rem',
        '3/4-screen': '75vh',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
   styled: true,
   themes: ["emerald"],
   base: true,
   utils: true,
   logs: true,
   rtl: false,
   prefix: "",
   darkTheme: "dark",
 },
}
