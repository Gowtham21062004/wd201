const http = require('http');
const fs = require('fs');

let home = "";
let project = "";
let register = "";

const port = require("minimist")(process.argv.slice(2))

fs.readFile('home.html', (err, home) => {
    if (err) {
        throw err;
    }
    home = home;
});

fs.readFile('project.html', (err, project) => {
    if (err) {
        throw err;
    }
    project = project;
});


fs.readFile('registration.html', (err, registration) => {
    if (err) {
        throw err;
    }
    register = registration;
});

const server = http.createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { 'Content-Type': 'text/html' })
        switch (url) {
        case '/project':
            response.write(project);
            response.end();
            break;
        case '/registration':
            response.write(register);
            response.end();
            break;
        default:
            response.write(home);
            response.end();
            break;

        }
});
server.listen(port.port);