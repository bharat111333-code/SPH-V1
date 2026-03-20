import express from 'express';
import { json } from 'body-parser';
import { setAuthRoutes } from './routes/authRoutes';
import { setUserRoutes } from './routes/userRoutes';
import { errorHandler } from './middleware/errorHandler';
import { connectToDatabase } from './database/connection';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// Database connection
connectToDatabase();

// Routes
setAuthRoutes(app);
setUserRoutes(app);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});