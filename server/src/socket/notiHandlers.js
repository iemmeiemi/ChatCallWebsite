const notiHandlers = (io, socket) => {
    const createOrder = (payload) => {
      // ...
    };
  
    const readOrder = (orderId, callback) => {
      // ...
    };
  
    socket.on("noti:create", createOrder);
    socket.on("noti:read", readOrder);
  };
  
export default notiHandlers;