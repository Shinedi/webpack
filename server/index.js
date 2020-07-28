if (typeof window === 'undefined') {
  global.window = {};
}
const fs = require('fs');
const path = require('path');
const express = require('express');
const { renderToString } = require('react-dom/server');

const SSR = require('../dist/search-server');
const data = require('./data.json');

const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8');
const dataString = JSON.stringify(data);
const renderMarkup = (str) => template.replace('<!--HTML_PLACEHOLDER-->', str).replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window.data = ${dataString}</script>`);

const server = (port) => {
  const app = express();

  app.use(express.static('dist'));

  app.get('/search', (req, res) => {
    const html = renderMarkup(renderToString(SSR));
    console.log(html);
    res.status(200).send(html);
  });

  app.listen(port, () => {
    console.log('Server is runing on port:', port);
  });
};
server(process.env.PORT || 3000);
