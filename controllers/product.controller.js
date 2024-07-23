import { ProductModel } from '../models/sql/product.js';
import { AppError, Response } from '../utils/http.js';

export class ProductController {
  static async getAll(req, res, next) {
    try {
      const response = await ProductModel.getAll();
      return Response.success(res, { products: response });
    } catch (error) {
      return next(
        new AppError('Ocurrio un error en ProductController.getAll ', { body: req?.body })
      );
    }
  }

  static async getById(req, res) {}
  static async create(req, res) {}
  static async delete(req, res) {}
  static async update(req, res) {}
}
