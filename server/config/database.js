const pg = require("pg");

const config = {
  connectionString: process.env.PG_CONNECTION_STRING,
};

const pool = new pg.Pool(config);

module.exports = { pool };
