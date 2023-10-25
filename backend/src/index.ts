import express, { Application } from 'express';
import dotenv from 'dotenv';

import { groupsRouter, messagesRouter } from './routeMiddlewares';
import errorHandler from './errorMiddleware';

const PORT = process.env.PORT || 3222;
const BASE_API_PATH = 'api';

dotenv.config();
const app: Application = express();

// JSON middleware
app.use(express.json());

// Error middleware
app.use(errorHandler);


/**
 * Route middlewares
 */

// Message Routes
app.use(`/${BASE_API_PATH}/messages`, messagesRouter);

// Group Routes
app.use(`/${BASE_API_PATH}/groups`, groupsRouter);

// Server to listen on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
