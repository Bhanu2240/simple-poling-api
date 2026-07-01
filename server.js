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
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Simple Polling API is running successfully 🚀",
  });
});
app.use("/polls",pollRoutes);

app.listen(process.env.PORT,()=>{
    console.log('server is running on port ' + process.env.PORT);
})