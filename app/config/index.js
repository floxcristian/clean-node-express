'use strict';

require('dotenv').config();

module.exports = {
  app: {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    CORS: process.env.CORS
  },
  pg: {
    HOST: process.env.PG_HOST || '127.0.0.1',
    USER: process.env.PG_USER || 'postgres',
    DB: process.env.PG_DB,
    PASSWORD: process.env.PG_PASS || '',
    PORT: process.env.PG_PORT || 5432
  }
};
