const userRouter = require('express').Router();
const  User = require('../Models/users');
const bcrypt = require('bcrypt');
const { err } = require('../utils/logger');


userRouter.post('/', async (req, res) => {
    const { username, name, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
        username,
        name,
        passwordHash,
    });

    const saveduser = await user.save();
    res.json(saveduser);
});
userRouter.get('/', async (req, res) => {
    User.find({}, {})
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log('there is no data found in db..');
    })
})
module.exports = userRouter;
