import app from './app.js'
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js'

dotenv.config()

try {
    connectDB().then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`)
        })
    
    }).catch((err) => {
        console.log("Error connecting DB !!!", err);
        process.exit()
    })

} catch (error) {
    console.log(error);
}
