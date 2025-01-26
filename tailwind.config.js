module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {fontSize: {
      base: '1.125rem', // Default is 1rem; increasing to 1.125rem for a larger scale
    },
    spacing: {
      'extra-wide': '2rem', // Add custom spacing for more flexibility
    },
  },
  },
  plugins: [],
};