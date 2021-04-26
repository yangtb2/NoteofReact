const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  entry: path.join(__dirname, "/src/index"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              require.resolve("@babel/preset-env", { module: false }),
              require.resolve("@babel/preset-react")
            ],
            plugins: [
              require.resolve("@babel/plugin-proposal-class-properties")
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      filename: "index.html"
    })
  ],
  devServer: {
    liveReload: true,
    open: true
  }
};
