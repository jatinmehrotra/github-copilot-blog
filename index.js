const express = require('express');
const app = express();
const port = 3000;

// create a new route
app.get('/', (req, res) => res.send('Hello World!'));

// set up a post route
app.post('/', (req, res) => res.send('Got a POST request'));

// set up the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
