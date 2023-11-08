import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectDB=async()=>{

    try {
      const connnectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

      console.log(`\n MongoDB connected::${connnectionInstance.connection.host}`);
    } catch (error) {
        console.log('Mongodb connection ERR::',error);
        process.exit(1) //read about it
    }
}

export default connectDB