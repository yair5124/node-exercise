const fs = require('fs');
const async = require('async');
const http = require('http');

async.waterfall([
    function(cb) {
        fs.readFile(process.argv[2], function(err, data) {
            if (err) return cb(err);
            cb(null, data);
        })
    },
    function(url, cb) {
        http.get(url.toString().trimRight(), function(res) {
            let rawData = '';
            res.on('data', function(chunk) { rawData += chunk; });
            res.on('end', function() {
                cb(null, rawData);
            });
        }).on('error', function(e) {
            cb(e);
        });
    },
], function(err, result) {
    if (err) console.error(err);
    console.log(result);
});