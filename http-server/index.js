const http = require('http');
const fs = require('fs');

let homeContent1 = "";
let projectContents1 = "";
let registerContent1 = "";

const port = require("minimist")(process.argv.slice(2))

fs.readFile('home.html', (err, home) => {
    if (err) {
        throw err;
    }
    homeContent1 = home;
});

fs.readFile('project.html', (err, project) => {
    if (err) {
        throw err;
    }
    projectContents1 = project;
});


fs.readFile('registration.html', (err, registration) => {
    if (err) {
        throw err;
    }
    registerContent1 = registration;
});

const server = http.createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { 'Content-Type': 'text/html' })
        switch (url) {
        case '/project':
            response.write(projectContents1);
            response.end();
            break;
        case '/registration':
            response.write(registerContent1);
            response.end();
            break;
        default:
            response.write(homeContent1);
            response.end();
            break;

        }
});
server.listen(port.port);