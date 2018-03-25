const async = require('async');
const http = require('http');

async.each(process.argv.slice(2), function(item, done) {
    http.get(item, function(res) {
        res.on('data', function(chunk) {});
        res.on('end', function() {
            done(null);
        });
    }).on('error', function(e) {
        done(e);
    });
    }, function(err){
        if (err) console.log(err);
});