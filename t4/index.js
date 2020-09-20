const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express().use(bodyParser.json());


// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "puhelinluettelo",
  multipleStatements: true, //out parametria varten aliohjelmassa
});

con.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});



// Get users
app.get("/users", (req, res) => {
  con.query("SELECT * FROM henkilot", (err, rows) => {
    if (err) throw err; 
      res.send(rows);
  });
});

// get user by id
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  con.query(`SELECT * FROM henkilot WHERE id=${id}`, (err, rows) => {
    if (rows.length < 1) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
});


// add new user
app.post("/users", (req, res) => {
  const henkilo = req.body;
  con.query('INSERT INTO henkilot SET ?', henkilo, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});


// Update user by id
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedUser = req.body;

  con.query(
      'UPDATE henkilot SET puhelin = ? Where ID = ?',
      [updatedUser.puhelin, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      }
    );
});



// delete user by id
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  con.query("DELETE FROM henkilot WHERE id = ?", [id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows < 1) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});


app.listen(3000, () => {
  console.log("ServerÂ listeningÂ atÂ portÂ 3000");
});





