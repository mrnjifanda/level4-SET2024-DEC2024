const express = require('express');
const app = express();
const port = 3000;

let users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" }
];

function verifyDataBeforeUpdateUser(request, response, next) {
    const id = request.params.id;
    const index = getIndexUserById(id);
    if (!index) {
        response.status(404).json({ message: "User with id " + id + " does not exist" });
        return;
    }

    const { name, email } = request.body;
    if (!name || !email) {
        response.status(400).json({ message: "Name and email are required" });
        return;
    }

    request.userIndex = index; // Just to update request
    next(); // Call next fonctionnality
}

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

function getIndexUserById(id) {
    let index = null;
    for (let i = 0; i < users.length; i++) {

        if (users[i].id == id) {
            index = i;
            break;
        }
    }
    return index;
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
    const user = {
        id: generateId(),
        name: body.name,
        email: body.email
    };
    users.push(user);
    response.status(201).json(user);
});

app.put('/api/users/:id', verifyDataBeforeUpdateUser, (request, response) => {
    const index = request.userIndex;
    const newData = request.body;

    users[index].email = newData.email;
    users[index].name = newData.name;

    response.json(users[index]);
});

app.delete('/api/users/:id', (request, response) => {
    const userId = request.params.id;
    const index = getIndexUserById(userId);
    if (index) {
        users.splice(index, 1);
        response.json({ message: 'User deleted successfully' })
    } else {
        response.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {

    console.log("Application running on http://localhost:" + port);
});