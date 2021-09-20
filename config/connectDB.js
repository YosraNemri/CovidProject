const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("databse connected");
    } catch (error) {
        console.log("database is not connected", error);
    }
};

module.exports = connectDB;
