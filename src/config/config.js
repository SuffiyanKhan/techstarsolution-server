import dotenv from 'dotenv';

dotenv.config();


const serverconfig={
    db_url:process.env.SERVER_DATABASE_URL
}


export default serverconfig;