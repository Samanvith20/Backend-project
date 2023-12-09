import express from "express";
import dotenv from "dotenv";
import DatabaseConnection from "./db/index.js";
dotenv.config({
    path: "./config.env",
});
DatabaseConnection();
