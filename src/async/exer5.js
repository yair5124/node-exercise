const async = require('async');
const http = require('http');

const options = {
    hostname: process.argv[2],
    port: parseInt(process.argv[3]),
    path: '/users/create',
    method: 'POST'
};

function createUser(n, cb) {
    const postData = JSON.stringify({'user_id': n});
    options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    };

    const req = http.request(options, function(res) {
        res.on('data', function(chunk) {});
        res.on('end', function() {
            cb();
        });
    });
    req.on('error', function(e) {
        cb(e);
    });
    req.write(postData);
    req.end();
}

async.series([
    function(cb) {
        async.times(5, function(n, next) {
            createUser(n+1, function(err, user) {
                next(err, user);
            });
        }, function(err, results) {
            if (err) return cb(err);
            cb(null, 'saved');
        });
    },
    function(cb) {
        options.path = '/users';
        options.method = 'GET';
        var req = http.request(options, function(res) {
            let rawData = '';
            res.on('data', function(chunk) { rawData += chunk; });
            res.on('end', function() {
                cb(null, rawData);
            });
        });
        req.on('error', function(e) {
            cb(e);
        });
        req.end();
    }
],
function(err, results) {
    if (err) return console.error(err);
    console.log(results[1]);
}
);