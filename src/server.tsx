import * as path from 'path';
import * as express from 'express';
import * as React from 'react';
import * as webpack from 'webpack';

import { renderToString } from 'react-dom/server';

import template from './template';
import App from './index';

const server = express();
const projectRootPath = path.resolve(__dirname, '..');

if (process.env.NODE_ENV === 'dev') {
  const webpackConfig = require('../webpack/webpack.config.dev');
  const compiler = webpack(webpackConfig);

  server.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath
    })
  );

  server.use(require('webpack-hot-middleware')(compiler));
  server.use(express.static(path.resolve(projectRootPath, 'src')));
} else if (process.env.NODE_ENV === 'prod') {
  server.use(express.static(path.resolve(projectRootPath, 'dist')));
}

server.get('/', (req, res) => {
  const appString: string = renderToString(<App />);

  res.send(
    template({
      body: appString,
      title: 'Personal Website'
    })
  );
});

server.listen(8080, () => {
  console.log('Website listening on port 8080!');
});
