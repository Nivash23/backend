const mongoose = require('mongoose');
const { MONGODB_URI, PORT ,HOSTNAME} = require('./utils/config');
const {log,err} = require('./utils/logger');
const app = require('./server');

mongoose.set('strictQuery', false);

mongoose.connect(MONGODB_URI)
    .then(() => {
        log('Connected to mongodb...');

        app.listen(PORT,HOSTNAME, () => {
            console.log(`Server listening to port on http://${HOSTNAME}:${PORT}...`);
        })
    })
    
    .catch((error) => {
        err(error);
    });
