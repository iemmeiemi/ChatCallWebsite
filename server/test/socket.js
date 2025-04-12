import { io as ioc } from "socket.io-client";
import { assert } from "chai";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;

function waitFor(socket, event) {
  return new Promise((resolve) => {
    socket.once(event, resolve);
  });
}

describe("Socket connection test", () => {
  let clientSocket;

  before((done) => {
    clientSocket = ioc(`http://localhost:${port}`);

    clientSocket.on("connect", done);
  });

  it("should receive 'hello' when emitting 'hi'", (done) => {
    clientSocket.once("hello", () => {
      assert.isTrue(true);
      done();
    });

    clientSocket.emit("hi");
  });

  after(() => {
    clientSocket.disconnect();
  });

  // it("should work", (done) => {
  //   clientSocket.on("hello", (arg) => {
  //     assert.equal(arg, "world");
  //     done();
  //   });
  //   serverSocket.emit("hello", "world");
  // });

  // it("should work with an acknowledgement", (done) => {
  //   serverSocket.on("hi", (cb) => {
  //     cb("hola");
  //   });
  //   clientSocket.emit("hi", (arg) => {
  //     assert.equal(arg, "hola");
  //     done();
  //   });
  // });

  // it("should work with emitWithAck()", async () => {
  //   serverSocket.on("foo", (cb) => {
  //     cb("bar");
  //   });
  //   const result = await clientSocket.emitWithAck("foo");
  //   assert.equal(result, "bar");
  // });

  // it("should work with waitFor()", () => {
  //   clientSocket.emit("baz");

  //   return waitFor(serverSocket, "baz");
  // });
});
