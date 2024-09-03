const http = require("http");

const server = http.createServer((req , res) => {
    res.setHeader("Content-Type" , "text/plain");
    res.write("hello server");
    res.end;
});

const port = 3000;
const host = "localhost";
server.listen(host , port ,()=> {
    console.log(`server is running on http://${host}:${3000}`);
})