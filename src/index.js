import app from './app.js'
import {sequelize} from './database/database.js'


async function main() {
    try {
        // await sequelize.authenticate();
        // await sequelize.sync({ force: true});
        app.listen(4000)
        console.log('server is listening on port', 400)
    }
    catch (error) {
        console.error("unable to connect to the database: ", error);

    }
}
main()