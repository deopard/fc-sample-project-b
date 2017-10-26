const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Code Deploy로 배포된 A project입니다!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/health', (req, res) => {
  res.send('Healthy');
});
