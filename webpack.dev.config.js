import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const SRC = path.resolve(__dirname, "src");

export default {
  debug: true,
  devtool: 'inline-source-map',
  onInfo: false,
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    `${SRC}/index`
  ],
  output: {
    path: SRC,
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: SRC
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${SRC}/index.html`,
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preloaders: [],
    loaders: [
      {
        test: /\.js/,
        include: SRC,
        loaders: ['babel']
      },
      {
        test:/\.scss/,
        include: SRC,
        loaders: ["style", "css", "sass"],
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg-xml'
      },
      {
        test:   /\.(png|gif|jpe?g)$/i,
        loader: 'url',
        query: {
          limit: 10000,
        }
      }
    ]
  }
}
