const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Allow all origins by default
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
