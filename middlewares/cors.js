import cors from 'cors';

const ACCEPTED_ORIGINS = [];

if (process.env.NODE_ENV === 'dev') {
  ACCEPTED_ORIGINS.push('http://localhost:4200');
}

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      console.log('origin', origin);

      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    }
  });

export default corsMiddleware;
