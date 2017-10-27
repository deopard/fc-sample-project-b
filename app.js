const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('B project입니다!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/health', (req, res) => {
  res.send('Healthy');
});
