var combine = require('stream-combiner')
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

var input = through(write, end);
var genres = [];

function write(buffer, encoding, next) {
    if (buffer && buffer.length>0) {
        var data = JSON.parse(buffer);
        if (data && data.type === 'genre') {
            if (genres.length > 0) {
                this.push(JSON.stringify(genres[genres.length-1])+"\n");
            }
            genres.push({
                name: data.name,
                books: []
            });
        } else if (data && data.type === 'book') {
            genres[genres.length-1].books.push(data.name);
        }
    }
    next();
};
function end(cb) {
    this.push(JSON.stringify(genres[genres.length-1])+"\n");
    cb();
}

// process.stdin.pipe(split()).pipe(input).pipe(process.stdout);

module.exports = function () {
    return combine(
        split(),
        input,
        zlib.createGzip()
    )
}