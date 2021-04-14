//  Imports
const express = require('express');
const http = require('http');
const cors = require('cors');

//  Init zone
const app = express();
app.use(cors());

//  Requests
app.all('/', (req, res) => {
    console.log('Hi!');
    res.status(200).json({ message: 'Here is your response!' })
});

app.get('/me', (req, res) => {
    console.log('Hi!');
    res.status(200).json({ message: 'Here is your response on get request!' })
});

app.post('/testPost', (req, res) => {
    res.status(200).json({ message: 'It is POST' })
});

app.get('/testGet', (req, res) => {
    res.status(200).json({ message: 'It is GET' })
});

app.delete('/testDelete', (req, res) => {
    res.status(400).json({ message: 'Sorry, this method does not work' })
});

app.put('/testPut', (req, res) => {
    res.status(500).json({ message: 'Server error' })
});

app.patch('/testPatch', (req, res) => {
    res.status(403).json({ message: 'Your token is incorrect' })
});

app.post('/addToDo', (req, res) => {
    res.status(200).json({ message: 'Add ToDo success' })
});

app.delete('/deleteToDo', (req, res) => {
    res.status(200).json({ message: 'Delete ToDo success' })
});

app.post('/updateToDo', (req, res) => {
    res.status(200).json({ message: 'Update ToDo success' })
});

app.get('/todoList', (req, res) => {
    const todoList = []
    for (var i = 0; i < 10; i++) {
        todoList.push({ i, title: `Index is ${i}`, description: '' })
    }
    res.status(200).json({ todoList })
});

//  Create server
http.createServer(app).listen(3000, () => {
    console.log('Server is working on host 3000!');
});
