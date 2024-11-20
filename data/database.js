-require("dotenv").config();
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    process.env.MONGO_URL || "mongodb://127.0.0.1:27017"
  );
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
