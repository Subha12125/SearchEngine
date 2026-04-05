const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        await mongoose.connect(peocess.env.MONGO_URI);
        console.log("Connected to Database");
    } catch (erorr) {
        console.log("Error connecting to Database", erorr);
    }
}

module.exports = connectDB;