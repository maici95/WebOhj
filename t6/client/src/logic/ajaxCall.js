


export default function ajaxCall() {
    return {
        get: GET,
        post: POST,
        put: PUT,
        delete: DELETE
    }
}

// Get athletes
function GET(endPoint, id) {
    const ID = id ? id : '';
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/'+endPoint+'/'+ID)
        .then(res => res.json())
        .then(result => {
            resolve(result);
        });
    });
}

// Delete athlete
function DELETE(endPoint, a, id) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/'+endPoint+'/'+id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            resolve(result);
        });
    });
}

// Add new athlete
function POST(endPoint, a) {
    console.log(a);
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/'+endPoint, {
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
function PUT(endPoint, a, id) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/'+endPoint+'/'+id, {
            method: 'PUT',
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
