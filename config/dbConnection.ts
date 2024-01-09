const { Umzug } = require('umzug');
const { SequelizeStorage } = require('umzug');
const { Sequelize } = require('sequelize'); // Import Sequelize itself
import { log } from 'console';
import databaseInstance from './db';
import path from 'path';
// Create a Sequelize instance using your database connection
const umzug = new Umzug({
    migrations: {
        // Path of the migration file
        path: path.join(__dirname, '../migrations'),
        // The pattern that determines whether or not a file is a migration.
        // pattern: /\.js$/,
        pattern: /^\d+[\w-]+\.js$/,
        // The params that get passed to the migrations.
        params: [databaseInstance.getQueryInterface(), Sequelize],
        glob: 'path/to/migrations/*.js' //>>>>>>>>>>>>>>>> mandotry to include this 
    }, 
    storage: new SequelizeStorage({
        sequelize: databaseInstance,
        modelName: 'student',
    }),
    
});
//console.log("   >>>>>>>>> migrations path : ",path.join(__dirname, '../migrations') , __dirname);
const connectionDatabase = async () => {
    try {
     const connectionResult = await databaseInstance.authenticate()
           .then(async () => {
             console.log("Database Connection done successfully");
                await umzug.up()
                    .then(async () => {
                        console.log("Migration run successfully");
                    })
                    .catch((err: any) => {
                        console.log("Migration Failed", err);
                    });
                
            })
            .catch((err: any) => {
                console.log("Error in database connection authentication", err);
                
            });
    } catch (err) {
        console.log("Failed database connection ", err);
        return Promise.reject(err);
    }
}

export default connectionDatabase;
