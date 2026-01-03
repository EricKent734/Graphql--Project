// db.js
const { Pool } = require('pg');
require('dotenv').config();

// Create a connection pool to Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Neon requires SSL
  },
});

// Simple helper to query the database
async function query(text, params) {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  }
}

module.exports = {
  pool,
  query,
};
