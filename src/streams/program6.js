/**
 * Created by yairr on 24/05/2017.
 */
var concat = require('concat-stream')

function reverse(body) {
    var txet = body.toString().split("").reverse().join("");
    process.stdout.write(txet);
};

process.stdin.pipe(concat(reverse));