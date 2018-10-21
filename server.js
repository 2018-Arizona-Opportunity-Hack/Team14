const express = require('express');
const path = require('path');
var cors = require('cors')
var http = require('http')
const app = express();
const port = process.env.PORT || 5000;
var connection  = require('express-myconnection'); 
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database:"db"
});


app.use(cors()) // Use this after the variable declaration
// API calls
// app.get('/', (req, res) => {
//   res.send({ express: 'Welcome to pet animals!' });
// });

app.get('/', function(req, res, next) {
 	connection.query('SELECT * from users', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
});

app.get('/pet', (req, res) => {
	console.log(req.query.data)
  connection.query('SELECT'+req.query.data+'from users', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
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
