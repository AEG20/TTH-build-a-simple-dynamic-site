// Problem: We need a simple way to look at a user's badge count and Javascript points from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

// 1. Create Web Server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(request, response){
    homeRoute(request, response);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// 2. Handle HTTP route Get / and POST / i.e. Home
function homeRoute(request, response) {
    if(request.url === "/") {
    // if url == "/" && GET
    // show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end('Footer\n');
    }// if url == "/" && POST
    // redirect to /:username
    
}

            

//3. Handle HTTP route GET /:username i.e. /chalkers
function userRoute(request, response) {

    var username = request.url.replace("/", "");
    if(username.length > 0){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Header\n");
        response.write(username + "\n");
        response.end('Footer\n');

    }
}
    // if url == "/..."
        //get json from treehouse
        //on "end"
            //show profile
            // on "error"
                //shoe error

//4. Function that handles the reading of files and merge in value
    // read from file and get a string
        // merge values into string
