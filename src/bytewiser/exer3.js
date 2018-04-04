var dat = '';
process.stdin.on('data', function(d) {
    dat += d;
}).on('end', function() {
    var buf = Buffer.from(dat);
    while (buf.indexOf('.') >= 0) {
        buf.write('!', buf.indexOf('.'), 1);
    }
    console.log(buf);
});