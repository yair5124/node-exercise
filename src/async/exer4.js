const async = require('async');
const http = require('http');

async.map(process.argv.slice(2), function(item, done) {
    http.get(item, function(res) {
        var rawData = '';
        res.on('data', function(chunk) { rawData += chunk; });
        res.on('end', function() {
            done(null, rawData);
        });
    }).on('error', function(e) {
        done(e);
    });
    }, function(err, results){
        if (err) console.error(err);
        console.log(results);
});