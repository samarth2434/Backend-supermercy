const http = require("http")

const PORT = 8080

const myserver = http.createServer((request, response)=>{
    response.end("Hello From Server")
})

myserver.listen(PORT, ()=>{
    console.log(`Server is Connected at ${PORT}`)
})