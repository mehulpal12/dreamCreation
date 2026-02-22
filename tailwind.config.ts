/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Map your custom name to the CSS variable + fallbacks
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
};