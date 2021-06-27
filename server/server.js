require('dotenv').config({path:__dirname+'../../.env'});
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./router')
const cors = require('cors')

const app = express()

const server = http.createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

app.use(router)
app.use(cors())
const PORT = process.env.SERVER_PORT_NO

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', ()=>{
        console.log('User Disconnected')
    })

});

server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

