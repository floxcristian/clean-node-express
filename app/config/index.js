require('dotenv').config();

module.exports = {
  app: {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    CORS: process.env.CORS,
    SENTRY: process.env.SENTRY_DSN
  },
  pg: {
    HOST: process.env.PG_HOST || '127.0.0.1',
    PORT: process.env.PG_PORT || 5432,
    USER: process.env.PG_USER || 'postgres',
    PASS: process.env.PG_PASS || '',
    DB: process.env.PG_DB
  },
  mail: {
    HOST: process.env.MAIL_HOST,
    PORT: process.env.MAIL_PORT,
    USER: process.env.MAIL_USER,
    PASS: process.env.MAIL_PASS,
    FROM: 'GDG Arica <gdgarica@gmail.com>',
    SECURE: false
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXP_MINS: process.env.JWT_EXPIRATION_MINUTES || '7d'
  }
};
