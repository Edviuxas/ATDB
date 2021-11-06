const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logic = require('../data/Logic');

const app = express();

const dbURI = 'mongodb+srv://prifai:PrifaiValdo3000@kompleksinisprojektas.ycabb.mongodb.net/KompleksinisProjektas?retryWrites=true&w=majority';

app.post('/users/login', async (req, res) => {
    resp = await logic.loginUser(req.query);
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