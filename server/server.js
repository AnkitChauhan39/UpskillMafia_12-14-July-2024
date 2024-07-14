const express = require('express');
const cors = require('cors');
const {PORT} = require('./constant');
const {createServer} = require('http');
const {Server} = require('socket.io');
const ConnectDB = require('./src/db/connection');

const rootRouter = require('./src/routes/root');
const authRouter = require('./src/middleware/auth');
const contactUsRouter = require('./src/routes/contactUs');
const mapRouter = require('./src/routes/map');
const chatbotRouter = require('./src/routes/chatbot');

if(require.main === module){

    ConnectDB();

    const app = express();
    app.use(express.json());

    const server = createServer(app);
    const io = new Server(server, {
        cors : { origin : true }
    });

    io.on("connection", (socket) => {
        console.log("User connected : ",socket.id);
    });
    
    app.use(cors({origin : true}));
    
    server.listen(PORT, () => {
        console.log('Server started successfully');
        console.log(`http://localhost:${PORT}`);
    });
    
    app.use('/', rootRouter);
    app.use('/auth',authRouter);
    app.use('/contactUs',contactUsRouter);
    app.use('/map',mapRouter);
    app.use('/chatbot',chatbotRouter);
};