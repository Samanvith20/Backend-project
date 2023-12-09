import mongoose from 'mongoose';
import { DB_name } from '../constants.js';
const DatabaseConnection= async()=>{
    try { 
          const DbConnect=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log(` /n Database is connected to ${DbConnect.connection.host}`);
        // DbConnect.connection.host gives you the hostname of the MongoDB server to which your application is connected.

    } catch (error) {
         console.log( "Connection is Failed", error.message);
         process.exit(1);
         // 1 means exit with failure
    }
}
export default DatabaseConnection;