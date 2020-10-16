


export default function ajaxCall() {
    return {
        get: GET,
        post: POST,
        put: PUT,
        delete: DELETE
    }
}

// Get athletes
function GET() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/athletes')
        .then(res => res.json())
        .then(result => {
            resolve(result);
        });
    });
}

// Delete athlete
function DELETE(a) {
    const aId = a.aId;
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/athletes/'+aId, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            resolve(result);
        });
    });
}

// Add new athlete
function POST(a) {
    console.log(a);
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/athletes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(a)
        })
        .then(res => res.json())
        .then(result => {
            resolve(result);
        });
    });
}

// Edit athlete
function PUT(a) {
    return new Promise((resolve, reject) => {

        resolve(1);
    });
}
