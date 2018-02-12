const path = require("path");
var webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const cssIdentifier = "[path][name]---[local]";
const cssLoader =["style-loader", "css-loader?localIdentName=" + cssIdentifier];

module.exports = {
  entry: {
    index: "./src/app/index.ts",
    home: "./src/app/home/index.ts",
    about: "./src/app/about/index.ts",
    vendors: ["angular"] // And other vendors
  },
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name][hash].js", // Template based on keys in entry above
    // filename: '[name][chunkhash].js', // Template based on keys in entry above,
    // publicPath: "/"
  },
  // devServer: {
  //   contentBase: './dist'
  // },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ["url-loader?limit=10000&name=images/[hash:12].[ext]"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: cssLoader,
        exclude: /node_modules/
      },     
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: 'src/index.html'
    }),
    // new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: function(module, count) {
        return !isExternal(module) && count >= 2; // adjustable
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",
      chunks: ["common"],
      // or if you have an key value object for your entries
      // chunks: Object.keys(entry).concat('common')
      minChunks: function(module) {
        return isExternal(module);
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
};

function isExternal(module) {
  var context = module.context;

  if (typeof context !== "string") {
    return false;
  }

  return context.indexOf("node_modules") !== -1;
}
