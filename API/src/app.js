const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

// prevent CORS from stopping access
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const index = require('./routes/index');
const memeRoutes = require('./routes/memes');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comments');

app.use(index);
app.use('/api/memes', memeRoutes);
app.use('/api/user', userRoutes);
app.use('/api/comments', commentRoutes);

module.exports = app;