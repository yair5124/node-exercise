const async = require('async');
const http = require('http');

var count = 0, found = false;
async.whilst(
    function() { return !found; },
    function(callback) {
        count++;
        http.get(process.argv[2], function(res) {
            var rawData = '';
            res.on('data', function(chunk) { rawData += chunk; });
            res.on('end', function() {
                if (rawData.toString().trim().indexOf('meerkat') >= 0) found = true;
                callback(null, count);
            });
        }).on('error', function(e) {
            callback(e);
        });
    },
    function (err, n) {
        if (err) return console.error(err);
        console.log(n);
    }
);