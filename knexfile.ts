import "dotenv/config";
import type { Knex } from "knex";

// Update with your config settings.
const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection:{
        host :DB_HOST,
        port :Number(DB_PORT),
        user :DB_USER,
        password:DB_PASSWORD,
        database:DB_NAME
    },
    pool:{
        min:2,
        max:10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  staging: {
    client: 'postgresql',
    connection:{
        host :DB_HOST,
        port :Number(DB_PORT),
        user :DB_USER,
        password:DB_PASSWORD,
        database:DB_NAME
    },
    pool:{
        min:2,
        max:10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection:{
        host :DB_HOST,
        port :Number(DB_PORT),
        user :DB_USER,
        password:DB_PASSWORD,
        database:DB_NAME
    },
    pool:{
        min:2,
        max:10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
