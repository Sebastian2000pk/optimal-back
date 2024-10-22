require('dotenv').config();

export const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_SERVER || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
};