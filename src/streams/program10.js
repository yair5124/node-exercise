/**
 * Created by yairr on 24/05/2017.
 */
var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();

var loud = tr.select('.loud').createStream();

loud.pipe(through(function (buf, enc, next) {
    var self = this;
    setTimeout(function () {
        self.push(buf.toString().toUpperCase());
        next();
    }, 10);
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
