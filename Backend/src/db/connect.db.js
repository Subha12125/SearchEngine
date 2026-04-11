const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing. Add it to .env and restart the server.");
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error connecting to Database", error.message || error);
    }
}

module.exports = connectDB;