


const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// Database config
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: 3306,
    database: 'athletes'
});

// Connect to database
conn.connect((err) => {
    if (err)
        console.log(err);
    console.log('Connected to database');
});

// Start server
app.listen(3001);


/**** API ROUTING STARTS ****/
// Get athletes
app.get('/athletes', (req, res) => {
    runSQL('SELECT * FROM athlete')
        .then(result => {
            res.json(result);
        });
});

// Get athlete by athelete's Id (aId)
app.get('/athletes/:aId', (req, res) => {
    runSQL('SELECT * FROM athlete WHERE aId='+`"${req.params.aId}"`)
        .then(result => {
            res.json(result);
        });
});

// Delete athlete by athelete's id (aId)
app.delete('/athletes/:aId', (req, res) => {
    runSQL('DELETE FROM athlete WHERE aId='+`${req.params.aId}`)
        .then(result => {
            if (result.affectedRows < 1) {
                res.json({msg: 'failed to delete athlete'});
            } else {
                res.json({msg: 'athlete removed'});
            }
        });
})

// Add new athlete
app.put('/athletes', (req, res) => {

    runSQL(`INSERT INTO athlete (firstNames, lastName, yob, weight, imgUrl, sport)
                VALUES
            ('${req.body.firstNames}','${req.body.lastName}','${req.body.yob}','${req.body.weight}','','${req.body.sport}')`)
        .then(result => {
            console.log(result);
            res.json({msg:'added'});
        });


});

/**** API ROUTING ENDS ****/



// Execute SQL query
function runSQL(sql) {
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, res) => {
            if (err) 
                console.log(err);
            
            resolve(res);
        });
    });
}






