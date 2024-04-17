import express from 'express';
import Hello from './Hello.js';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";

mongoose.connect("mongodb+srv://alexandra:lkOU59HzbF88U77V@cluster0.uttwkx7.mongodb.net/Kanbas");
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);