import { Router } from 'express';
import { ProductController } from '../controllers/product.controller.js';

export const productRouter = Router();
productRouter.get('/', ProductController.getAll);
productRouter.post('/', ProductController.create);
productRouter.get('/:id', ProductController.getById);
productRouter.delete('/:id', ProductController.delete);
productRouter.patch('/:id', ProductController.update);
