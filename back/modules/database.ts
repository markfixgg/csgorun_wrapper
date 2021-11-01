const mongoose = require('mongoose');
const {MONGO_URI} = require('../config');

module.exports = {
    connect: async () => {
        await new Promise <void>((resolve, reject) => {
            mongoose.connect(MONGO_URI, (err: any) => {
                if(err) throw err.message;

                resolve();
            });
        })

        console.log(`[INFO] Connected to database!`)
    }
}
