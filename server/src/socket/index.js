import { io } from '../../server';
import chatHandlers from './chatHandlers.js';
import notiHandlers from './notiHandlers.js';
import uuid from 'uuid';



io.engine.generateId = (req) => {
    return uuid.v4(); // must be unique across all Socket.IO servers
}

const onConnection = (socket) => {
    chatHandlers(io, socket);
    notiHandlers(io, socket);
}

io.on("connection", onConnection);