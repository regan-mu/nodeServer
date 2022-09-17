const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200 , {"Content-Type": "text/html"})
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "/public", "index.html"), "utf-8", (err, data) => {
            if(err) throw err;
            res.end(data)
        })
    }
    else if (req.url === "/about")  {
        fs.readFile(path.join(__dirname, "/public", "about.html"), "utf-8", (err, data) => {
            if(err) throw err;
            res.end(data)
        })
    }
    else if (req.url === "/services") {
        fs.readFile(path.join(__dirname, "/public", "services.html"), "utf-8", (err, data) => {
            if(err) throw err;
            res.end(data)
        })
    } else {
        fs.readFile(path.join(__dirname, "/public", "404.html"), "utf-8", (err, data) => {
            if(err) throw err;
            res.end(data)
        })
    }
});
server.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
