const express = require('express');
const app = express();
const port = 3000;

let users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" }
];

function findUserWithId(id) {
    let user = null;
    for (let i = 0; i < users.length; i++) {

        if (users[i].id == id) {
            user = users[i];
            break;
        }
    }

    return user;
}

function generateId() {

    return users[users.length - 1].id + 1;
}

app.use(express.json());

app.get('/api/users', (request, response) => {

    response.json(users);
});

app.get('/api/users/:id', (request, response) => {

    const userId = request.params.id;
    let user = findUserWithId(userId)
    if (user) {
        response.json(user)
    } else {
        response.status(404).json({ message: "User not found"});
    }
});

app.post('/api/users/create', (request, response) => {

    const body = request.body;
    console.log(request.body);
    
    const user = {
        id: generateId(),
        name: body.name,
        email: body.email
    };
    users.push(user);

    response.status(201).json(user);
});

app.listen(port, () => {

    console.log("Application running on http://localhost:" + port);
});