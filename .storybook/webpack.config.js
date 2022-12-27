const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = async ({ config }) => {
  // assets
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "..", "src", "assets"),
          to: "assets",
        },
      ],
    })
  );

  // Add SVGR Loader
  // ========================================================
  const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));

  const assetLoader = {
    loader: assetRule.loader,
    options: assetRule.options || assetRule.query,
  };

  // Merge our rule with existing assetLoader rules
  config.module.rules.unshift({
    test: /\.svg$/,
    use: ["@svgr/webpack", assetLoader],
  });

  return config;
};
