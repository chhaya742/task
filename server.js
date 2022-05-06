require('dotenv').config();
const http = require('http')
const index= require('./index')
const port = process.env.PORT;
const url=require("url")


const server = http.createServer(index);
server.listen(port,index, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})