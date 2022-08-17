const Pool = require('pg').Pool

//Setting up configuration
const pool = new Pool({
    user: "postgres",
    password: "Rogue798$",
    host: "localhost",
    PORT: 5432,
    database: "workout"
});

module.exports = pool;