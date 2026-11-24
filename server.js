
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let requestedFile = req.url.split("?")[0];

    if (requestedFile === "/") {
        requestedFile = "/index.html";
    }

    const filePath = path.join(__dirname, requestedFile);

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("404 - Page not found");
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(content);
    });
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`CODERWANDA server running on port ${PORT}`);
});
