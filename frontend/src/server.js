const express = require('express');
const path = require('path');

const app = express();

const indexFilePath = path.join(__dirname, '../static/index.html');
const staticFolderPath = path.join(__dirname, '../static');

app.use(express.static(staticFolderPath));

app.get('*', (req, res) => {
  res.sendFile(indexFilePath);
});

const server = app.listen(3333, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.info('Listening at http://%s:%s', host, port);
});
