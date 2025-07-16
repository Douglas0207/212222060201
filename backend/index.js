import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import urlRoutes from './routes/urlRoutes.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  
app.use(express.json());

app.use('/', urlRoutes);

const PORT = process.env.PORT || 5056;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});