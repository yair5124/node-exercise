/**
 * Created by yairr on 24/05/2017.
 */
var through = require('through2');
var http = require('http');

var stream = through(write);
function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
};
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(stream).pipe(res).on('finish', function() {res.end()});
    }
});
server.listen(process.argv[2]);