import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
// import artisanRoutes from "./routes/artisanRoutes.js"
import artisanRoute from "./routes/artisanRoutes.js"

dotenv.config();
connectDB();
console.log("🔑 URI:", process.env.MONGO_URI); 

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;



app.get("/", (req, res) => {
  res.send("Hello, World!");
});
// Routes

app.use("/api/auth", authRoutes);
app.use("/api/artisan",artisanRoute)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
