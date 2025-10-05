import express from "express";
import { artisan } from "../controllers/artisanController.js";
const router = express.Router();

router.get("/artisan", artisan)


export default router; 