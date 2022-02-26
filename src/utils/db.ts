import mongoose from "mongoose";
import config from 'config'



async function connect(){
    const mongoUri = config.get<string>("mongoUri")
    try {
       await mongoose.connect(mongoUri)
        console.log("connected to db")
    } catch (error) {
         console.error("Issue in db connection", error)
         process.exit(1)
    }
}

export default connect