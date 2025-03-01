import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
    try{
        await mongoose.connect(config.db_url as string)
        app.listen(config.port, () => {
            console.log('🛢 Database connected successfully')
        })
    }catch(err){
        console.error('Failed to connect to database:', err);
      process.exit(1);
    }
}
main();