


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
// Get achievements
app.get('/achievements/:id', (req, res) => {
    runSQL('SELECT * FROM achievements WHERE aId="'+req.params.id+'"')
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
});

// Delete achievement
app.delete('/achievements/:id', (req, res) => {
    runSQL('DELETE FROM achievements WHERE acId='+`${req.params.id}`)
        .then(result => {
            res.json({msg: 'achievement deleted'});
        });
});


// Add new athlete
app.post('/athletes', (req, res) => {
    runSQL(`INSERT INTO athlete (firstNames, lastName, nickName, yob, weight, imgUrl, sport)
                VALUES
            ('${req.body.firstNames}','${req.body.lastName}','${req.body.nickName}','${req.body.yob}','${req.body.weight}','','${req.body.sport}')`)
        .then(result => {
            if (result.affectedRows < 1) {
                res.json({msg:'New athlete added'});
            } else {
                res.json({msg: 'failed to add new athlete'});
            }
        });
});

// Add achievement
app.post('/achievements', (req, res) => {
    runSQL(`INSERT INTO achievements (name, aId, achDate)
                VALUES
            ('${req.body.name}','${req.body.aId}','${req.body.achDate}')`)
            .then(result => {
                res.json({msg: 'achievement added'});
            });
});

// Update athlete data
app.put('/athletes/:aId', (req, res) => {
    console.log(req.params);
    runSQL(`UPDATE athlete
                SET
                    firstNames = "${req.body.firstNames}",
                    lastName = "${req.body.lastName}",
                    nickName = "${req.body.nickName}",
                    yob = "${req.body.yob}",
                    weight = "${req.body.weight}",
                    sport = "${req.body.sport}"
                WHERE aId="${req.params.aId}"
            `)
        .then(result => {

            console.log(result);

            if (result.affectedRows < 1) {
                res.json({msg:'Athlete data edited'});
            } else {
                res.json({msg: 'failed to edit athlete'});
            }
        });
});
app.put('/athletes/img/:id', (req, res) => {
    runSQL(`UPDATE athlete SET imgUrl='${req.body.imgUrl}' WHERE aId='${req.params.id}'`)
        .then(result => {
            res.json({msg: 'image changed'});
        });
});

/**** API ROUTING ENDS ****/



// Execute SQL query
function runSQL(sql) {
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, res) => {
            if (err) {
                console.log(err);
            }
            resolve(res);
        });
    });
}






