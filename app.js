const http = require('http')
const fs = require('fs')


const server = http.createServer(( req, res ) => {
    console.log('Listening on localhost:3000/')
})

server.listen(3000)




