const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://priyanshugarg615:priyanshu12345@cluster0.gj3fb.mongodb.net/gymwebsite";

async function dbconnection() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

module.exports = { dbconnection };