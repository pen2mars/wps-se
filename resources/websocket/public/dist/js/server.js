var express=require("express"),app=express(),http=require("http").Server(app),io=require("socket.io")(http);app.set("port",process.env.PORT||8080),app.get("/",function(e,o){o.sendFile(__dirname+"/views/index.html")}),io.on("connection",function(e){console.log("A user connected"),e.on("chat message",function(e){console.log("message: ",e),io.emit("chat message",e)}),e.on("disconnect",function(){console.log("User disconnected")})}),http.listen(app.get("port"),function(){console.log("Websocket Server is listening on localhost")});