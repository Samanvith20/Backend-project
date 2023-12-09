import express from "express";
import dotenv from "dotenv";
import DatabaseConnection from "./db/index.js";
dotenv.config({
    path: "./config.env",
});
DatabaseConnection()
.then(() => {
    const app = express();
    app.listen(process.env.PORT||5000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})

.catch((err) => {
    console.log( "MongoDB connection failed",err);
    process.exit(1);
})