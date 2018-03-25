/**
 * Created by yairr on 24/05/2017.
 */
var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    var dup = duplexer({objectMode:true} ,input, counter);

    function write(buffer, encoding, next) {
        if (buffer.country) {
            counts[buffer.country] = (counts[buffer.country] || 0) + 1;
        }
        next();
    };
    function end(cb) {
        counter.setCounts(counts);
        cb();
    }
    return dup;
};