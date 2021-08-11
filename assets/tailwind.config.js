module.exports = {
  purge: [
    "../lib/**/*.ex",
    "../lib/**/*.leex",
    "../lib/**/*.eex",
    "./js/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
        amber: '#ff9800',
      },
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
