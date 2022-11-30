const express = require("express");
const app = express()
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {});


// app.use(express  .static(path.join(__dirname, "build")));

// app.get("/ping", function (req, res) {
//   return res.send("pong");
// });

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });


// // This is what the socket.io syntax is like, we will work this later
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("new", async () => {

    console.log("scared to death scared to look")
    // for later, this is how you create a new rook
    // socket.join(term);
    // currentRoomId = term;
    // io.to(term).emit("enter", term, socket.id);
  });


  socket.on("disconnect", async () => {
    // TODO
  });

});

const PORT  = process.env.PORT || 8080
httpServer.listen(PORT);
console.log("listing on port " + PORT)

