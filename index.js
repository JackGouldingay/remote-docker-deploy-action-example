const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  console.log(`A new request from ${req.host}`);

  res.send('Hello World 3!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
