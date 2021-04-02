const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome here guys")
    }
    if(req.ulr === "/about"){
        res.end("Here is the short story about us")
    }
    res.end(
        `<h1>Oops!</h2>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
        `
    )
})

server.listen(5000)