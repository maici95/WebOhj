


const mapElem = document.querySelector('#mapElem');

function getShip() {
    fetch('http://localhost:3000/generateShip')
        .then(res => res.json())
        .then(result => {
            drawMap(result.data);
        });
}


function drawMap(matrix) {
    mapElem.innerHTML = '';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            mapTile(matrix[i][j]);
        }
    }
}

function mapTile(i) {
    const tile = document.createElement('div');
    tile.className = 'mapTile';

    if (i) {
        tile.style.background = '#333';
        tile.style.border = '1px dashed red';
    }

    mapElem.appendChild(tile);

}


