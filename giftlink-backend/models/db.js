// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// MongoDB connection URL with authentication options
const url = process.env.MONGO_URL;
const dbName = "giftdb";

let dbInstance = null;
let client = null;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance; // reuse if already connected
    }

    client = new MongoClient(url);

    // Connect to MongoDB
    await client.connect();

    // Connect to database giftdb
    dbInstance = client.db(dbName);

    return dbInstance;
}

module.exports = connectToDatabase;
