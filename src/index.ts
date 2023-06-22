import { onDatabaseConnect } from "./config/knex";

onDatabaseConnect()
.then(() => console.log('Database Connected successfully'))
.catch((e) => console.log(e))