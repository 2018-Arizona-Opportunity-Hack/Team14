const express = require('express');
const path = require('path');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()) // Use this after the variable declaration
// API calls
app.get('/', (req, res) => {
  res.send({ express: 'Welcome to pet animals!' });
});

app.get('/pet', (req, res) => {
	console.log(req.query.data)
  res.json('Wow  ' + req.query.data )
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
