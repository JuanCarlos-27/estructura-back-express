import { query } from '../../utils/db.js';
import { getCached, setNewCacheValue } from '../../utils/redis.js';

export class ProductModel {
  static async getAll() {
    const cachedData = await getCached('products');
    console.log('cachedData', cachedData);

    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const products = await query('SELECT * FROM tbl_products');
    await setNewCacheValue('products', JSON.stringify(products));
    return products;
  }

  static async getById() {}

  static async create() {}

  static async delete() {}

  static async update() {}
}
