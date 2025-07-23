import express from 'express';
import { config } from 'dotenv';
import { riddlesRoutes } from './routes/riddlesRoutes.js';
import playerRoutes from './routes/playerRoutes.js';

config();

const app = express();
app.use(express.json());

app.use('/riddles', riddlesRoutes);

app.use('/players', playerRoutes)

const PORT = process.env.PORT || 3042;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
