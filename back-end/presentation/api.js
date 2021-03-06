const http = require('http');
var cors = require('cors')
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const logic = require('../data/Logic');

const app = express();
app.use(cors());
app.use(session({secret: 'secret', resave: false, saveUninitialized: true, cookie: { maxAge: 3600000 }}));

const dbURI = 'mongodb+srv://prifai:PrifaiValdo3000@kompleksinisprojektas.ycabb.mongodb.net/KompleksinisProjektas?retryWrites=true&w=majority';

app.post('/users/login', async (req, res) => {
    const response = await logic.loginUser(req.query);
    if(response === "User not found") {
        res.send("User not found");
    } else {
        req.session.loggedin = true;
        req.session.user = response.username;
        res.send(response);
    }
});

module.exports.listen = (port = '12345') => new Promise((resolve) => {
    console.log(`Starting API server on port ${port}`);
    server = http.createServer(app);
    server.listen(port);

    mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db');

        // const user = new UsersBuyer({
        //     username: 'lalala',
        //     password: 'blablabla'
        // });

        // user.save()
        //     .then((result) => console.log(result))
        //     .catch((error) => console.log(error));

        // UsersBuyer.find()
        //     .then((result) => {
        //         console.log(result);
        //     })
        //     .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
    
    resolve();
});