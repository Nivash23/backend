const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');
// const {log,err} = require('./utils/logger');
const app = require('./server');

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to mongodb...');

        app.listen(PORT, () => {
            console.log(`Server listening to port on ${PORT}...`);
        })

    })
    .catch((err) => {
        console.error('there is error');
    });