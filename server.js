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
 	connection.query('SELECT `Rescue ID` from users, vetlog where users.`Rescue ID` = `PET ID#` Group By `PET ID#`', function (error, results, fields) {
    console.log(fields);
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
});

//case 1
app.get('/api/getRow', (req, res) => {
    console.log(req.query.data);
    connection.query('SELECT * from users as A LEFT OUTER JOIN vetlog as B ON  A.`Rescue ID` = B.`Pet ID#` WHERE A.`Rescue ID` ='+'\''+req.query.data+'\'', function (error, results, fields) {
    //console.log(fields);
    if (error) throw error;
    res.send({data : results});
    // res.json(results);
    console.log(results);
  });
 });

//case2
app.get('/pet', (req, res) => {
  console.log(req.query.data)
  connection.query('SELECT'+req.query.data.x+' from users where '+req.query.data.y+" = "+req.query.data.sel+' GROUP BY '+req.query.data.y, function (error, results, fields) {
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
