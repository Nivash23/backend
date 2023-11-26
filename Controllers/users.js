const userRouter = require('express').Router();
const  User = require('../Models/users');
const bcrypt = require('bcrypt');


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
})
module.exports = userRouter;
