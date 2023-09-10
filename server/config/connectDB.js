import mongoose from "mongoose"

const connect = async()=>{
    try {

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : "Trello"
        })
        console.log("Database Connected");
        
    } catch (error) {

        console.log("Database connection failed");
        
    }
}

export default connect;