const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('System Information');
});

let os = require('os');
let user = os.userInfo().username;
let type = os.type();
let time = os.uptime();
let minutes = time % (60*60) / 60;
let path = require('path');
let directory = path.dirname(__filename);
let name = path.basename(__filename);
console.log('Current username: ' + user);
console.log('OS type: ' + type);
console.log('System work time: ' + minutes + ' minutes');
console.log('Current work directory: ' + directory);
console.log('Server file name: ' + name);

let greeting = require('./greeting');

console.log('Day of request: ' + greeting.date);
console.log(greeting.getMessage(user));