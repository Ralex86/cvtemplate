const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const fetch = require('node-fetch')


const Handle = require('./handler.js')
const app = express()
var bodyParser = require("body-parser"); // Body parser for fetch posted data

const PORT = 3003


const server = http.createServer(app)
const io = socketIO(server)

// solve cross origin security

app.use(function(req, res, next) {
    var oneof = false
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin)
        oneof = true
    }
    if(req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method'])
        oneof = true
    }
    if(req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers'])
        oneof = true
    }
    if(oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365)
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.sendStatus(200)
    }
    else {
        next()
    }
})

app.get('/*',function(request,response,next){
  response.header('Access-Control-Allow-Origin' , 'http://hassler.fr' );
      response.header('Access-Control-Allow-Credentials', true);
      next();
});

app.use(express.static('public'))


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); // Body parser use JSON data

app.get('/cvinfos/:table', (req,res) => {
    let h = new Handle(req,res)
    h.database_cvinfos()
})

server.listen(PORT, () => {
    console.log(`express server is up on port: ${PORT}`)
})
