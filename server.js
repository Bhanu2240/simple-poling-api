const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const cors = require("cors");



dotenv.config();
connectDB();

const app=express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log('server is running on port ' + process.env.PORT);
})