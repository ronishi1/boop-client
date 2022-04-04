module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
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
