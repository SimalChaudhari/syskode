/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        PTSans: ['PT Sans', 'sans-serif'],
        nunitosans: ['Nunito Sans', 'sans-serif'],
      },
      // Add custom class for webContainer
      spacing: {
        '1200': '1200px',  // Adds custom spacing to be used for max-width
      },
      // Custom utilities to handle `.webContainer`
      // You can use this in your HTML for custom width and behavior
      maxWidth: {
        'webContainer': '1200px', // Custom max-width for the class
      },
      colors: {
        'custome-black': '#1b1d21',  
        'custome-blue-dark': '#15015E',  
        'custome-blue-brite': '#0A4AA6',  
        'custome-blue': '#243763',  
        'custome-yellow': '#f0ad4e',  
        'custome-orange': '#FF6E31',  
        'custome-gray': '#6d6d6d',  
        'custome-footer-color': '#211E3B',  
        'custome-icon-color': '#43BAFF',  
        'custome-footer-color': '#AEAACB',  
        'custome-icon-x': '#4CCEF9',
        'custome-icon-fb': '#2255EE',
        'custome-icon-in': '#3292FF',
        'custome-icon-ig': '#FF9000',


        'custome-dark-pink': '#E96D8B',  
        'custome-light-pink': '#FFC8D4',  
        'custome-dark-green': '#41B79D',  
        'custome-light-green': '#D7FFF6', 
        'custome-light-blue': '#6ABBD7',  
        'custome-light-purple': '#D7D7FF',  
      },
    },
  },
  plugins: [],
}
