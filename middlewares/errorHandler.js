import { Response } from '../utils/http.js';

const errorHandler = (err, req, res, next) => {
  console.error('Error en la ruta', req.originalUrl);
  console.error('Datos del error', {
    message: err?.message,
    payload: err?.payload
  });
  Response.serverError(res);
};

export default errorHandler;
