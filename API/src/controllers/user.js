const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../config/database.js");

exports.signup = async (req, res, next) => {
    const { firstName, lastName, email } = req.body;
    console.log(email);
    const password = await bcrypt.hash(req.body.password, 10);
    console.log(password);
    const { rows } = await db.query('INSERT INTO "user" (firstName, lastName, email, password) VALUES ($1, $2, $3, $4)', 
        [firstName, lastName, email, password]);
    res.status(201).send({
        message: 'User created successfully',
        body: {firstName, lastName, email, password}
    });
};
