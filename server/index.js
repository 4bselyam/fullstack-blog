import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoute from './routes/auth.js';

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3002;
const DB_NAME = process.env.DB_NAME;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);

async function start() {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
        app.listen(3002, () => console.log(`Server started on port ${3002}`));
    } catch (err) {
        console.log(err);
    }
}

start();
