import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST ?? 'localhost',
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: process.env.DB_PORT ?? 3306
});

// Test the connection
pool
  .getConnection()
  .then((connection) => {
    console.log('💪 Se conecto correctamente a la Base de datos');
  })
  .catch((err) => {
    console.log('🔴 Ha ocurrido un error al conectar a la base de datos');
    console.log(err);
  });

export default pool;
