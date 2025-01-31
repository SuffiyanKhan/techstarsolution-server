import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import serverconfig from './src/config/config.js';
import { DB_RETRY_LIMIT, DB_RETRY_TIMEOUT } from './src/constant/constant.js';
import authRouting from './src/routing/auth.routing.js';
import billingRouting from './src/routing/billing.routing.js';
import traningRouting from './src/routing/traning.routing.js';
import contactRouting from './src/routing/contact.routing.js';
const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
let connnectionRetries = 0;
const connectionDB = async () => {
    try {
        console.log("Establishing DB connection....");
        await mongoose.connect('mongodb+srv://shahidhussain9825:shahidhussain9825@cluster0.dgdio.mongodb.net/Techstar_Solution?retryWrites=true&w=majority');
    } catch (error) {
        if (connnectionRetries < DB_RETRY_LIMIT) {
            connnectionRetries++;
            console.log(`Reconnecting to DB ${connnectionRetries}/${DB_RETRY_LIMIT}`);
            await new Promise(resolve => setTimeout(resolve, DB_RETRY_TIMEOUT));
            await connectionDB();
        } else {
            console.log("DB not connected", error)
            process.exit();
        }
    }
}

connectionDB()
    .then(res => console.log("DB connected"))
    .catch(err => console.log("DB NOT Connected"));
app.get('/',(req,res)=>{res.status(200).json({status:200,message:"sucessfully run api"})})
app.use('/api', authRouting);
app.use('/billing', billingRouting);
app.use('/traning', traningRouting);
app.use('/contact', contactRouting)
app.listen(PORT, () => {
    console.log(`server are runing on port http://localhost:${PORT}`)
})
export default app;