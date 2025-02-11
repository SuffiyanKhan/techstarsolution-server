import dotenv from 'dotenv';

dotenv.config();


const serverconfig={
    db_url:process.env.SERVER_DATABASE_URL,
    secret_key:process.env.JWT_SECRET
}


export default serverconfig;