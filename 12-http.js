const http = require('http');

// req - incoming request 
// res - response
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('welcome to our home page');
        res.end();
    }
    if(req.url === '/about'){
        res.write('here is a short history');
        res.end();
    }
    res.end(`
    <h1>Oops !</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">back home</a>
    `);
});


server.listen(5000);