const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect("mongodb+srv://dibyanshu:heyitsdibyanshumoura07@backend.6iitcmk.mongodb.net/tempDB");
  console.log("Connnected to DB.")
}
module.exports = connectDB;