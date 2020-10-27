


/*

Valinnainen tehtävä
Tämän tehtävän avulla voit täyttää puutteita joita muissa tehtävissä on - eli tehtävä ei sinänsä ole pakollinen.

Luo backend logiikka (käyttämällä rest api kutsussa) promise -pohjaista algoritmiä,
jossa suoritat ajax -kutsun REST API -palvelusta joka arpoo 3 ruudun kokoisen laivan 5 * 5 taulukkoon.
Tässä tehdään laivanupotus peliin laivan sijainnin arvontalogiikka backendiin.
Se mitä GET metodi rest api:ssa palauttaa voit suunnitella täysin itse.
Käyttöliittymän ts. frontendin luominen ei tässä tehtävässä ole pakollista (on määritelty 'vähiten pakollisessa' osuudessa alempana).

Voit käyttää liitteen mukaista lähdekoodia lähtökohtana (em. esimerkissä arvotaan vitsi rest api:a käyttämällä:
    korvaa rest api:n GET metodin kutsu omalla laivan arvonta rest api -metodilla).

Tehtävässä laiva pitää pystyä luomaan taulukkoon 3 solun kokoisena vaaka- tai pystysuuntaan (kuten yleensä laivanupotuksessa).

Tallenna tehtävä samalla tavalla kuin edellisetkin tehtävät gitlabiin (/githubiin).
Tehtävän palautuskansioon palautetaan vain linkki projektiin.

Tehtävän 'vähiten pakollinen' osuus:

Luo frontend eli käyttöliittymä joka käyttää edellä luomaasi backendiä,
jossa näet arvonnan tuloksen 5 x 5 taulukossa (html): niissä soluissa,
joihin laiva on sijoitettu on esim. rasti (tai toinen vaihtoehto että solut ovat piirretyt jollain värillä).

*/

const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(3000, () => console.log('server up and running'));


// Send matrix with ship in it
app.get('/generateShip', (req, res) => {
    const m = createMatrix(5, 5);
    let matrix = false;

    while (!matrix)
        matrix = addShip(m, 3).then(result => {
            res.send({data: result});
        });
});

app.get('/', (req, res) => {
    res.sendFile('index.html');
});


// Generate matrix for ship
function createMatrix(i, j) {
    let matrix = Array(i).fill(0).map(array => Array(j).fill(0));
    return matrix;
}

// Add ship into matrix
/**
 * 
 * @param {Array} matrix 
 * @param {Number} shipSize
 * 
 */
function addShip(matrix, shipSize) {
    return new Promise((resolve, reject) => {
        const size = shipSize;

        // Pick random starting point for ship
        const i = Math.floor(Math.random() * matrix.length);
        const j = Math.floor(Math.random() * matrix[0].length);
    
        // Directions ship can expand
        const directions = {
            left: true,
            right: true,
            up: true,
            down: true
        }
    
        const dir = ['up', 'left', 'down', 'right'];
    
        // Check which directions ship can expand
        if (i < size - 1) {
            directions.up = false;
        }
        if (i > matrix.length - size) {
            directions.down = false;
        }
        if (j < size - 1) {
            directions.left = false;
        }
        if (j > matrix[0].length - size) {
            directions.right = false;
        }
    
        // Remove directions ship cannot expand
        for (let i = dir.length - 1; i > -1; i--) {
            if (!directions[dir[i]])
                dir.splice(i, 1);
        }
    
        if (dir.length < 1)
            resolve(false);
    
        // Pick random direction from direction pool
        const n = dir[Math.floor(Math.random() * dir.length)];
        const check = directions[n];
    
    
        // Add ship's starting point
        matrix[i][j] = 1;
    
        // Expand ship to direction picked above
        switch (n) {
            case 'up':
                for (let k = size-1; k > 0; k--)
                    matrix[i-k][j] = 1;
                break;
            case 'down':
                for (let k = size-1; k > 0; k--)
                matrix[i+k][j] = 1;
                break;
            case 'left':
                for (let k = size-1; k > 0; k--)
                matrix[i][j-k] = 1;
                break;
            case 'right':
                for (let k = size-1; k > 0; k--)
                matrix[i][j+k] = 1;
                break;
        }
    
        resolve(matrix);
    });
}






    




