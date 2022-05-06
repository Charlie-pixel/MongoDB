const mongoose = require('mongoose');
require('dotenv').config();
var db;


async function connectToDB() {
    try {
        // Connect the client to the server
        mongoose.connect(process.env.DB_CONNECTION, () => {
            console.log('Connected to MongoDB');
        });

        //import json with mongoimport function
        db = mongoose.connection;      
    } catch (err) {
        throw err;
    } 
}


//Returns the database status
async function getDb() {

    return db;
}


//closes connection to the database
async function closeDBConnection(){
    await mongoose.connection.close();
    console.log("HTTP server closed.");
};


module.exports.connectToDB = connectToDB;
module.exports.getDb = getDb;
module.exports.closeDBConnection = closeDBConnection;