const mongoose = require('mongoose')

// All mongoose methods are asynchronous and returns a Promise
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error);

        process.exit(1)
    }
}

module.exports = connectDB