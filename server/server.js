import dotenv from "dotenv";
dotenv.config();
import app from './app.js';
import { createServer } from "http";
import { Server } from "socket.io";

const port = process.env.PORT || 3000;

const httpServer  = createServer(app);
export const io = new Server(httpServer, { /* options */ } );



httpServer.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
