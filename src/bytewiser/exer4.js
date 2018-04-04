const fs = require('fs');

fs.readFile(process.argv[2], function(err, buf) {
    if (err) return console.log(err);
    var start = 0;
    while (buf.indexOf('\n', start) >= 0) {
        var end = buf.indexOf('\n', start);
        console.log(buf.slice(start, end));
        start = end + 1;
    }
    console.log(buf.slice(start));
})

