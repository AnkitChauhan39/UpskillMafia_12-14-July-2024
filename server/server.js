const express = require('express');
const cors = require('cors');
const {PORT} = require('./constant');
const {createServer} = require('http');
const {Server} = require('socket.io');
const ConnectDB = require('./src/db/connection');

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
    
    app.get('/', (req,res) => {
        res.send("Welcome to EcoSathi Server");
    });
}