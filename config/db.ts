import sequelize from 'sequelize';
import {Sequelize} from 'sequelize';
// import 'dotenv/config'
require('dotenv').config(); 

class Database {
    db: string;
    user: string;
    password: string;
    host: string;
    port: number;
    maxPool: number;
    minPool: number;
    database: sequelize.Sequelize;

    constructor() {
        this.db = process.env.DBNAME
        this.user = process.env.DBUSER
        this.password = process.env.DBPASS
        this.host = process.env.DBHOST
        this.port = Number(process.env.DBPORT)
        this.database = new Sequelize(this.db, this.user, this.password, {
            host: this.host,
            port: this.port,
            logging: false,
            dialect: 'postgres',
            pool: {
                max: 200,
                min: 0,
                idle: 20000
            }
        })   
    }
}
let databaseInstance = new Database().database
export default databaseInstance
