const async = require('async');
const http = require('http');

async.reduce(['one','two','three'], 0, function(memo, item, callback) {
    var url = process.argv[2] + '?number=' + item;
    http.get(url, function(res) {
        var rawData = '';
        res.on('data', function(chunk) { rawData += chunk; });
        res.on('end', function() {
            var resp = parseInt(rawData);
            callback(null, memo + resp);
        });
    }).on('error', function(e) {
        callback(e);
    });
}, function(err, result) {
    if (err) return console.error(err);
    console.log(result);
});