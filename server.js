import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import pollRoutes from "./routes/poll.route.js";



dotenv.config();
connectDB();

const app=express();
app.use(cors());
app.use(express.json());
app.use("/polls",pollRoutes);

app.listen(process.env.PORT,()=>{
    console.log('server is running on port ' + process.env.PORT);
})