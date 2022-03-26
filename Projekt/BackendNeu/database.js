// const pgp = require ('pg-promise' ) (/* options */);
// const cn = {
// host: 'localhost',
// port: 8080,
// database:'postgres',
// user:'postgres',
// password: 'root'
// }
// const db = pgp(cn);
// module. exports = {
// pgp, db
// }
const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "#19MatthiaS19:#",
    database: "postgres"
})

module.exports = client