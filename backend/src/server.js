import express from 'express'
import router from './routes/taskRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5002;
connectDB();

app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));

app.use("/api/tasks",router)

app.listen(PORT, () => {
    console.log(` Server đang chạy trên cổng ${PORT}`)
})

