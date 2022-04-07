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
      },
      colors: {
        'comic': '#57C694',
        'story' : '#D65A47',
        'forum' : '#A38FDC',
        'link' : '#3366BB',
      },
      lineClamp:{
        9: '9'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),require("@tailwindcss/typography"), require("daisyui")],
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
