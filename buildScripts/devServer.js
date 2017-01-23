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

/* eslint-disable quote-props */
app.get('/users', (req, res) => {
  res.json([
    { "id": 1, "firstName": "Tom", "lastName": "Fletcher", "email": "t_bag@mcfly.com" },
    { "id": 2, "firstName": "Danny", "lastName": "Jones", "email": "moosh@mcfly.com" },
    { "id": 3, "firstName": "Harry", "lastName": "Judd", "email": "moosh.2@mcfly.com" },
    { "id": 4, "firstName": "Dougie", "lastName": "Poynter", "email": "doug@mcfly.com" }
  ]);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log(`app listening on port ${PORT}`);
    open(`http://localhost:${PORT}`);
  }
});
