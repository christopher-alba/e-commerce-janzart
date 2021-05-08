// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './server/db/dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    // The next line is where the application will read that environment variable to connect to the database
    connection: process.env.DATABASE_URL + "?ssl=true",
    ssl: { rejectUnauthorized: false },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

  production: {
    client: 'postgresql',
    // The next line is where the application will read that environment variable to connect to the database
    connection: process.env.DATABASE_URL + "?ssl=true",
    ssl: { rejectUnauthorized: false },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  }

}
