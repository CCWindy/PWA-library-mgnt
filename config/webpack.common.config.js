const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    framework: ["react", "react-dom"]
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|gif|jpg|svg|ico)$/,
        exclude: /(node_modules)/,
        loader: "url-loader"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [new CopyWebpackPlugin([{ from: "public" }])]
};
