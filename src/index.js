//  Imports
const express = require('express');
const http = require('http');
const cors = require('cors');
const { errorHandler, notFound } = require('./middlewares/middleware');
const ErrorResponse = require('./classes/ErrorResponse');
const apiRouter = require('./controllers/api.controller');
const { initDB } = require('./dataBase/db');

//  Init zone
const app = express();

//Init DB
initDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    console.log('URL = ', req.url);
    console.log('Original_URL = ', req.originalUrl);
    console.log('METHOD = ', req.method);
    console.log('HOST = ', req.headers.host);
    console.log('IsSecure = ', req.secure);
    console.log('Query = ', req.query);
    console.log('Body = ', req.body);

    next();
});

app.use((req, res, next) => {
    console.log(req.headers);

    if (req.headers.secretkey === 'root') {
        next();
    } else {
        res.status(403).json({ message: 'Access is forbidden' });
    }
});

app.use('/api/todos', apiRouter);

app.use(notFound);
app.use(errorHandler);

//  Create server
http.createServer(app).listen(3000, () => {
    console.log('Server is working on host 3000!');
});
