const async = require('async');
const http = require('http');

function getFromUrl(url, done) {
    http.get(url, function(res) {
        var rawData = '';
        res.on('data', function(chunk) { rawData += chunk; });
        res.on('end', function() {
            done(null, rawData);
        });
    }).on('error', function(e) {
        done(e);
    });
}

async.series({
    requestOne: function(done) {
        getFromUrl(process.argv[2], done);
    },
    requestTwo: function(done){
        getFromUrl(process.argv[3], done);
    }
}, function(err, results){
    if (err) return console.error(err);
    console.log(results);
});