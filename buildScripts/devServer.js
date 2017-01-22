/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddle from 'webpack-dev-middleware';
import webpackHotMiddle from 'webpack-hot-middleware';
import config from '../webpack.dev.config';

const compiler = webpack(config);
const PORT = 3000;
const app = express();

app.use(webpackDevMiddle(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddle(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log(`app listening on port ${PORT}`);
    open(`http://localhost: ${PORT}`);
  }
});
