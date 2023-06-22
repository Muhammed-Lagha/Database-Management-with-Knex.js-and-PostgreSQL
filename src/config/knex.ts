import "dotenv/config"
import knex from "knex"

const {
    DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD

    } = process.env
const database = knex({
    client: 'postgres',
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
    }
})

export const onDatabaseConnect = async () => database.raw('select 1')
export default database  