
const chatHandlers = (io, socket) => {
    const receive = () => {
      console.log('received');
    };
  
    const readOrder = (orderId, callback) => {
      // ...
    };
  
    socket.on("chat:create", receive);
    socket.on("chat:read", readOrder);
  };
  
export default chatHandlers;