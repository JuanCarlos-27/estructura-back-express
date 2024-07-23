import pool from './dbConfig.js';

export const query = async (sql, values = []) => {
  const connection = await pool.getConnection();

  try {
    const [rows] = await connection.query(sql, values);
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    return null;
  } finally {
    connection.release();
  }
};
