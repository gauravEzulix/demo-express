const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'hello from aws 2',
  });
});

app.listen(3000, () => console.log('listeninng on 3000'));
