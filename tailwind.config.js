/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        // primary: '#ff0000',
        // secondary: '#00ff00',
      },
      fontFamily: {
        // Add your custom fonts here
        // sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        // Add custom spacing values
        // '128': '32rem',
      },
      borderRadius: {
        // Add custom border radius values
        // 'xl': '1rem',
      },
    },
  },
  plugins: [
    // Add plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
  // Other options
  // darkMode: 'class', // or 'media'
  // important: true,
};
