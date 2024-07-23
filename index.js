import './utils/env.js';
import './utils/redis.js';
import express, { json } from 'express';
import corsMiddleware from './middlewares/cors.js';
import router from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

const createApp = () => {
  const app = express();
  app.use(json());
  app.use(corsMiddleware());
  app.disable('x-powered-by');
  app.use('/api', router);
  app.use(errorHandler);
  return app;
};

export { createApp };
