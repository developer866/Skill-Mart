import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();
console.log("🔑 URI:", process.env.MONGO_URI); 

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});