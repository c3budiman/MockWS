// import { io } from "socket.io-client";
const io = require("socket.io-client")

// https://nms-poc-api.datasintesa.id/
const socket = io('http://localhost:8080');
// console.log(socket.connected)
// socket.on("connect_error", (err) => {
//     console.log(err)
// });

socket.on("connect", (...args) => {
    console.log(socket.connected)
    console.log('Connected to server')
});

socket.on("hello", (args) => {
    console.log(args)
});