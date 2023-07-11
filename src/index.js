import app from './app.js'
import {sequelize} from './database/database.js'
import './models/Project.js'
import './models/Task.js'

const PORT = 4000;

async function main (){
    try{
        await sequelize.authenticate();
        // await sequelize.sync({force: false});
        app.listen(PORT);
        console.log('SERVIDOR LEVANTADO EN EL PUERTO', PORT)
    }
    catch (error){
        console.error("unable to connect to the database: " , error);
     
    }
}

main()