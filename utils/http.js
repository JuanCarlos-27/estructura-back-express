import { response } from 'express';

const STATUS = {
  EXITOSO: 200,
  CREADO: 201,
  SIN_CONTENIDO: 204,
  NO_AUTORIZADO: 401,
  NO_ENCONTRADO: 404,
  NO_SE_PUEDE_CREAR: 422,
  ERROR_SERVIDOR: 500
};

export class Response {
  static success(res = response, data) {
    return res.status(STATUS.EXITOSO).json({
      status: STATUS.EXITOSO,
      data
    });
  }

  static created(res = response, data) {
    return res.status(STATUS.CREADO).json({
      status: STATUS.CREADO,
      data
    });
  }

  static noContent(res = response) {
    return res.status(STATUS.SIN_CONTENIDO).json({
      status: STATUS.SIN_CONTENIDO,
      data: null
    });
  }

  static unauthorized(res = response) {
    return res.status(STATUS.NO_AUTORIZADO).json({
      status: STATUS.NO_AUTORIZADO,
      data: null
    });
  }

  static notFound(res = response) {
    return res.status(STATUS.NO_ENCONTRADO).json({
      status: STATUS.NO_ENCONTRADO,
      data: null
    });
  }

  static cannotCreate(res = response) {
    return res.status(STATUS.NO_SE_PUEDE_CREAR).json({
      status: STATUS.NO_SE_PUEDE_CREAR,
      data: null
    });
  }

  static serverError(res = response) {
    return res.status(STATUS.ERROR_SERVIDOR).json({
      status: STATUS.ERROR_SERVIDOR,
      data: null
    });
  }
}

export class AppError extends Error {
  constructor(message, payload) {
    super(message);
    this.payload = JSON.stringify(payload);
  }
}
