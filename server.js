import http from "http";

const server = http.createServer((req,res) =>{
    res.end('hello manish');
});

server.listen(5000,()=>{
    console.log("server running at port 5000")
})