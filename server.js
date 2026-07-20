import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" })
        res.end("<h1> hello this is home page</h1>")
    }


    else {
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>page not found</h1>")
    }
});


server.listen(5000, () => {
    console.log("server running at port 5000")
})