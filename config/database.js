module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'strapi-db-gen.cd0ic6c4y1sr.ap-south-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Santhosh8754'),
      schema: env('DATABASE_SCHEMA', 'public'),
      ssl: {
        rejectUnauthorized: false,
      },
      
    },
    debug: false,
  },
});
