import {Pool} from "pg"


const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'family',
    password:'6647',
    port:5432
})


export default  pool