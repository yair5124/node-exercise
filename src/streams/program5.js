/**
 * Created by yairr on 24/05/2017.
 */
var through = require('through2');
var split = require('split');

var count = 0;
var stream = through(write);

function write(buffer, encoding, next) {
    let strVal = buffer.toString();
    if (count%2 === 0) {
        this.push(strVal.toLowerCase());
    }
    else {
        this.push(strVal.toUpperCase());
    }
    this.push('\n');
    count++;
    next();
};

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);