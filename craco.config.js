module.exports = {
  style: {
    postcss: {
      plugins: [require("postcss-nested")],
      env: {
        stage: 2,
        features: { "custom-selectors": true, "custom-media": true },
      },
    },
  },
};
