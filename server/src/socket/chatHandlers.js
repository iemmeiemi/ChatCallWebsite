
const chatHandlers = (io, socket) => {
    const receive = () => {
      console.log('server received');
      socket.emit("hello");
    };
  
    const readOrder = (orderId, callback) => {
      // ...
    };
    socket.on("hi", receive);
    socket.on("chat:create", receive);
    socket.on("chat:read", readOrder);
  };
  
export default chatHandlers;