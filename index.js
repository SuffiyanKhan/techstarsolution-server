import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import { DB_RETRY_LIMIT, DB_RETRY_TIMEOUT } from './src/constant/constant.js';
import routes from './src/routing/index.js';
const app = express();
const PORT = process.env.PORT || 9000;
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173', 'http://localhost:5174','https://techstarsolution.net','https://portal.techstarsolution.net'],  
        methods: ['GET', 'POST', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    }
});
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



// io.on('connection', (socket) => {
//     console.log('✅ User connected:', socket.id);

//     socket.on('contact us', ({name,email,subject,phone,content,companyname}) => {
//         console.log(`🎟️ New Lead From Contact: ${contactData}`);
//         io.emit('contact us', ({name,email,subject,phone,content,companyname}))
//     })

// });
io.on('connection', (socket) => {
    console.log('✅ User connected:', socket.id);

    socket.on('contact us', (contactData) => {  // ✅ contactData ko direct lo
        console.log(`🎟️ New Lead From Contact:`, contactData);  // ✅ Correct console.log
        io.emit('contact us', contactData); // ✅ Directly emit contactData
    });
    socket.on('new user signup', (contactData) => {  // ✅ contactData ko direct lo
        console.log(`🎟️ New Lead From Contact:`, contactData);  // ✅ Correct console.log
        io.emit('new user signup', contactData); // ✅ Directly emit contactData
    });
});


app.use('/',routes)

app.get('/', (req, res) => { res.status(200).json({ status: 200, message: "sucessfully run api" }) })


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;