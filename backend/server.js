const express = require('express');
const cors = require('cors');  // Import cors
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Dummy users data
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '9898989898'},
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '9898989898'}
];

// API to fetch users
app.get('/users', (req, res) => {
    res.json(users);
});

// API to add a user
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1; // Adding a simple ID
    users.push(newUser);
    res.status(201).json(newUser);
});

// API to update a user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    users = users.map(user => (user.id == id ? { ...user, ...updatedUser } : user));
    res.json(updatedUser);
});

// API to delete a user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id != id);
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

